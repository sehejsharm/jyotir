-- Recall: social + feedback layer (leaderboard, exam requests, contact).
-- Idempotent: safe to run any number of times.

-- Per-user public stats backing the global leaderboard. display_name stays
-- private (own-row read only); `handle` is the anonymized public identity.
create table if not exists public.user_stats (
  user_id        uuid primary key references auth.users (id) on delete cascade,
  display_name   text not null default 'Aspirant',
  handle         text not null,
  xp             int  not null default 0,
  level          int  not null default 1,
  current_streak int  not null default 0,
  longest_streak int  not null default 0,
  cards_graded   int  not null default 0,
  updated_at     timestamptz not null default now()
);

create index if not exists user_stats_xp_idx on public.user_stats (xp desc, updated_at asc);

alter table public.user_stats enable row level security;
drop policy if exists "own stats select" on public.user_stats;
create policy "own stats select" on public.user_stats for select using (auth.uid() = user_id);
drop policy if exists "own stats insert" on public.user_stats;
create policy "own stats insert" on public.user_stats for insert with check (auth.uid() = user_id);
drop policy if exists "own stats update" on public.user_stats;
create policy "own stats update" on public.user_stats for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Anonymized global leaderboard: exposes only handle + xp + level (never
-- display_name or user_id), so the ranking is public but identities are not.
create or replace function public.leaderboard(n int default 100)
returns table (rank bigint, handle text, xp int, level int)
language sql stable security definer set search_path = public as $$
  select row_number() over (order by xp desc, updated_at asc) as rank, handle, xp, level
  from public.user_stats
  order by xp desc, updated_at asc
  limit greatest(1, least(n, 500));
$$;
grant execute on function public.leaderboard(int) to anon, authenticated;

-- The caller's own rank within the full board.
create or replace function public.my_rank()
returns table (rank bigint, handle text, xp int, level int)
language sql stable security definer set search_path = public as $$
  with ranked as (
    select user_id, handle, xp, level,
           row_number() over (order by xp desc, updated_at asc) as rank
    from public.user_stats
  )
  select rank, handle, xp, level from ranked where user_id = auth.uid();
$$;
grant execute on function public.my_rank() to authenticated;

-- Total players (for "you're #N of M").
create or replace function public.leaderboard_size()
returns bigint language sql stable security definer set search_path = public as $$
  select count(*) from public.user_stats;
$$;
grant execute on function public.leaderboard_size() to anon, authenticated;

-- "Request more exams" — write-only feedback inbox.
create table if not exists public.exam_requests (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid references auth.users (id) on delete set null,
  exam_name  text not null,
  note       text not null default '',
  created_at timestamptz not null default now()
);
alter table public.exam_requests enable row level security;
drop policy if exists "anyone can request" on public.exam_requests;
create policy "anyone can request" on public.exam_requests for insert with check (true);

-- "Contact us" — write-only feedback inbox.
create table if not exists public.contact_messages (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid references auth.users (id) on delete set null,
  email      text,
  message    text not null,
  created_at timestamptz not null default now()
);
alter table public.contact_messages enable row level security;
drop policy if exists "anyone can contact" on public.contact_messages;
create policy "anyone can contact" on public.contact_messages for insert with check (true);
