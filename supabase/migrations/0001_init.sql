-- Jyotir: MCQ drilling + micro-learning for Indian competitive exams.
--
-- Idempotent: safe to run any number of times (uses IF NOT EXISTS / OR
-- REPLACE / DROP-then-CREATE throughout), so pasting it into the Supabase
-- SQL editor always converges to the same schema regardless of prior state.
--
-- Design notes:
--   * Content tables use stable human-readable TEXT primary keys (e.g.
--     'upsc-polity-fundamental-rights-q01'). Ids are identical in the
--     bundled content, the on-device SQLite cache and Postgres, so offline
--     progress sync is a pure upsert with no id translation layer.
--   * User tables use UUID PKs and reference auth.users.
--   * The spec's `interval` column is named `interval_days` (INTERVAL is a
--     reserved type name in Postgres; the unit is also now explicit).

-- ============================== content ===============================

create table if not exists public.exams (
  id          text primary key,
  name        text not null,
  slug        text not null unique,
  tagline     text not null default '',
  order_index int  not null default 0,
  created_at  timestamptz not null default now()
);

create table if not exists public.subjects (
  id          text primary key,
  exam_id     text not null references public.exams (id) on delete cascade,
  name        text not null,
  slug        text not null,
  order_index int  not null default 0,
  created_at  timestamptz not null default now(),
  unique (exam_id, slug)
);

create table if not exists public.topics (
  id          text primary key,
  subject_id  text not null references public.subjects (id) on delete cascade,
  name        text not null,
  slug        text not null,
  order_index int  not null default 0,
  created_at  timestamptz not null default now(),
  unique (subject_id, slug)
);

create table if not exists public.study_materials (
  id                     text primary key,
  topic_id               text not null references public.topics (id) on delete cascade,
  title                  text not null,
  -- Markdown. High-yield micro-note, <= 2 minute read. No PDFs, ever.
  content                text not null,
  estimated_read_time    int  not null default 2 check (estimated_read_time between 1 and 5),
  -- Denormalised count powering the "Drill This Topic Now (X cards)" CTA;
  -- maintained by trigger, never written by application code.
  total_linked_questions int  not null default 0,
  order_index            int  not null default 0,
  created_at             timestamptz not null default now()
);

create table if not exists public.questions (
  id             text primary key,
  topic_id       text not null references public.topics (id) on delete cascade,
  text           text not null,
  option_a       text not null,
  option_b       text not null,
  option_c       text not null,
  option_d       text not null,
  correct_option char(1) not null check (correct_option in ('A', 'B', 'C', 'D')),
  -- One line, <= ~140 chars: the micro-explanation under the revealed answer.
  explanation    text not null,
  order_index    int  not null default 0,
  created_at     timestamptz not null default now()
);

create index if not exists subjects_exam_idx on public.subjects (exam_id, order_index);
create index if not exists topics_subject_idx on public.topics (subject_id, order_index);
create index if not exists study_materials_topic_idx on public.study_materials (topic_id, order_index);
create index if not exists questions_topic_idx on public.questions (topic_id, order_index);

-- Keep study_materials.total_linked_questions in sync with the question bank.
create or replace function public.refresh_linked_question_count()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  affected_topic text;
begin
  affected_topic := coalesce(new.topic_id, old.topic_id);
  update public.study_materials sm
     set total_linked_questions = (
       select count(*) from public.questions q where q.topic_id = affected_topic
     )
   where sm.topic_id = affected_topic;
  return null;
end;
$$;

drop trigger if exists questions_count_sync on public.questions;
create trigger questions_count_sync
after insert or update of topic_id or delete on public.questions
for each row execute function public.refresh_linked_question_count();

-- ============================ user progress ===========================

-- SM-2 state per (user, question). One row per card the user has ever seen.
create table if not exists public.user_progress (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references auth.users (id) on delete cascade,
  question_id      text not null references public.questions (id) on delete cascade,
  next_review_date timestamptz not null,
  interval_days    int  not null default 0 check (interval_days >= 0),
  ease_factor      numeric(4, 2) not null default 2.50 check (ease_factor >= 1.30),
  repetitions      int  not null default 0 check (repetitions >= 0),
  lapses           int  not null default 0 check (lapses >= 0),
  last_reviewed_at timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  unique (user_id, question_id)
);

create table if not exists public.user_read_history (
  id                  uuid primary key default gen_random_uuid(),
  user_id             uuid not null references auth.users (id) on delete cascade,
  material_id         text not null references public.study_materials (id) on delete cascade,
  marked_completed_at timestamptz not null default now(),
  unique (user_id, material_id)
);

-- The hot path for review scheduling: "what is due for me, now".
create index if not exists user_progress_due_idx on public.user_progress (user_id, next_review_date);
create index if not exists user_read_history_user_idx on public.user_read_history (user_id);

-- Offline-first last-write-wins: an upsert from a stale device must not
-- clobber newer state that another device already pushed.
create or replace function public.user_progress_lww_guard()
returns trigger
language plpgsql
as $$
begin
  if new.updated_at < old.updated_at then
    return old;
  end if;
  return new;
end;
$$;

drop trigger if exists user_progress_lww on public.user_progress;
create trigger user_progress_lww
before update on public.user_progress
for each row execute function public.user_progress_lww_guard();

-- Server-side due counts per topic (client computes these locally; this view
-- backs dashboards / notifications).
create or replace view public.user_due_counts
with (security_invoker = true) as
select
  up.user_id,
  q.topic_id,
  count(*) filter (where up.next_review_date <= now()) as due_count,
  count(*) as seen_count
from public.user_progress up
join public.questions q on q.id = up.question_id
group by up.user_id, q.topic_id;

-- ================================ RLS =================================

alter table public.exams enable row level security;
alter table public.subjects enable row level security;
alter table public.topics enable row level security;
alter table public.study_materials enable row level security;
alter table public.questions enable row level security;
alter table public.user_progress enable row level security;
alter table public.user_read_history enable row level security;

-- Content: world-readable (the app must work before sign-in); writes only
-- via service_role (which bypasses RLS), i.e. the seed/CMS pipeline.
drop policy if exists "content readable" on public.exams;
create policy "content readable" on public.exams for select using (true);
drop policy if exists "content readable" on public.subjects;
create policy "content readable" on public.subjects for select using (true);
drop policy if exists "content readable" on public.topics;
create policy "content readable" on public.topics for select using (true);
drop policy if exists "content readable" on public.study_materials;
create policy "content readable" on public.study_materials for select using (true);
drop policy if exists "content readable" on public.questions;
create policy "content readable" on public.questions for select using (true);

-- User data: row owner only, all verbs.
drop policy if exists "own progress select" on public.user_progress;
create policy "own progress select" on public.user_progress
  for select using (auth.uid() = user_id);
drop policy if exists "own progress insert" on public.user_progress;
create policy "own progress insert" on public.user_progress
  for insert with check (auth.uid() = user_id);
drop policy if exists "own progress update" on public.user_progress;
create policy "own progress update" on public.user_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
drop policy if exists "own progress delete" on public.user_progress;
create policy "own progress delete" on public.user_progress
  for delete using (auth.uid() = user_id);

drop policy if exists "own reads select" on public.user_read_history;
create policy "own reads select" on public.user_read_history
  for select using (auth.uid() = user_id);
drop policy if exists "own reads insert" on public.user_read_history;
create policy "own reads insert" on public.user_read_history
  for insert with check (auth.uid() = user_id);
drop policy if exists "own reads update" on public.user_read_history;
create policy "own reads update" on public.user_read_history
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
drop policy if exists "own reads delete" on public.user_read_history;
create policy "own reads delete" on public.user_read_history
  for delete using (auth.uid() = user_id);
