-- Prisma course progress: run this once in Supabase Dashboard > SQL Editor.
create table if not exists public.course_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  course_id text not null,
  lesson_id integer not null check (lesson_id >= 0),
  completed boolean not null default false,
  quiz_answer integer,
  reflection_response text not null default '',
  updated_at timestamptz not null default now(),
  primary key (user_id, course_id, lesson_id)
);

alter table public.course_progress
  add column if not exists reflection_response text not null default '';

alter table public.course_progress enable row level security;

create policy "Learners can read their own progress"
  on public.course_progress for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Learners can create their own progress"
  on public.course_progress for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Learners can update their own progress"
  on public.course_progress for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

grant select, insert, update on public.course_progress to authenticated;
