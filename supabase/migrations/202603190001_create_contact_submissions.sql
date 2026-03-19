create extension if not exists "pgcrypto";

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

create policy "Allow anonymous inserts for contact form"
on public.contact_submissions
for insert
to anon, authenticated
with check (true);

create policy "Allow authenticated read contact submissions"
on public.contact_submissions
for select
to authenticated
using (true);
