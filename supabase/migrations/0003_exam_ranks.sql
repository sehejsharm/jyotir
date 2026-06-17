-- Recall: per-exam leaderboards (compete within each individual exam).
-- Idempotent.

create table if not exists public.user_exam_stats (
  user_id    uuid not null references auth.users (id) on delete cascade,
  exam_id    text not null,
  handle     text not null,
  xp         int  not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, exam_id)
);

create index if not exists user_exam_stats_idx on public.user_exam_stats (exam_id, xp desc, updated_at asc);

alter table public.user_exam_stats enable row level security;
drop policy if exists "own exam stats select" on public.user_exam_stats;
create policy "own exam stats select" on public.user_exam_stats for select using (auth.uid() = user_id);
drop policy if exists "own exam stats insert" on public.user_exam_stats;
create policy "own exam stats insert" on public.user_exam_stats for insert with check (auth.uid() = user_id);
drop policy if exists "own exam stats update" on public.user_exam_stats;
create policy "own exam stats update" on public.user_exam_stats for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Anonymized per-exam ranking (handle + xp only).
create or replace function public.leaderboard_by_exam(exam text, n int default 100)
returns table (rank bigint, handle text, xp int)
language sql stable security definer set search_path = public as $$
  select row_number() over (order by xp desc, updated_at asc) as rank, handle, xp
  from public.user_exam_stats
  where exam_id = exam and xp > 0
  order by xp desc, updated_at asc
  limit greatest(1, least(n, 500));
$$;
grant execute on function public.leaderboard_by_exam(text, int) to anon, authenticated;

create or replace function public.my_exam_rank(exam text)
returns table (rank bigint, handle text, xp int)
language sql stable security definer set search_path = public as $$
  with ranked as (
    select user_id, handle, xp,
           row_number() over (order by xp desc, updated_at asc) as rank
    from public.user_exam_stats
    where exam_id = exam and xp > 0
  )
  select rank, handle, xp from ranked where user_id = auth.uid();
$$;
grant execute on function public.my_exam_rank(text) to authenticated;
