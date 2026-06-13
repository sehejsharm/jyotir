# Setting up Supabase (accounts + cross-device sync)

Optional — the app works fully without this. Supabase adds passwordless
sign-in and syncs each user's SM-2 progress and read history across devices.
Takes ~10 minutes on the free tier.

## 1. Create the project

1. Go to <https://supabase.com/dashboard> → **New project**.
2. Name it `jyotir`, choose a region near your users (e.g. Mumbai / `ap-south-1`),
   and set a database password (save it — it's your `DIRECT_URL` password).
3. Wait for it to provision (~2 min).

## 2. Create the schema + seed the content

1. In the dashboard, open **SQL Editor** → **New query**.
2. Paste the entire contents of [`supabase/migrations/0001_init.sql`](supabase/migrations/0001_init.sql)
   and click **Run**. This creates all tables, RLS policies, triggers and the
   due-counts view.
3. New query again → paste [`supabase/seed.sql`](supabase/seed.sql) → **Run**.
   This inserts all 5 exams, 23 micro-notes and 184 questions. It's idempotent,
   so re-running after a content change just updates rows.

   > Regenerate `supabase/seed.sql` any time you edit content with
   > `pnpm seed:generate`.

## 3. Enable email magic-link auth

1. **Authentication → Providers → Email**: ensure it's enabled (it is by default).
2. **Authentication → URL Configuration → Site URL**: set it to your deployed
   Vercel URL (e.g. `https://jyotir.vercel.app`). Add the same value under
   **Redirect URLs**, plus `http://localhost:3000` for local dev.

   *(Optional, even more frictionless: enable **Anonymous sign-ins** under
   Authentication → Providers to sync without an email. The current UI uses
   magic links, which need no extra setup.)*

## 4. Grab your keys

**Project Settings → API**:

- **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
- **anon / public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

For local server use (Prisma / re-seeding), also from **Settings → Database**:

- **Connection string (URI)** → `DATABASE_URL` (use the pooled `6543` URL)
- **Direct connection** → `DIRECT_URL` (the `5432` URL)

## 5. Wire it up

**On Vercel:** Project → **Settings → Environment Variables** → add
`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` and
`NEXT_PUBLIC_SITE_URL`, then **redeploy**.

**Locally:**

```bash
cp .env.example apps/web/.env.local   # fill in the two NEXT_PUBLIC_ values
pnpm dev:web
```

That's it. The **Account** link on the home screen now offers magic-link
sign-in, and `SyncProvider` pushes/pulls progress automatically on load, on
tab focus, and when the network reconnects — merging last-write-wins so a
stale device never clobbers newer progress.

## How sync behaves

- **Offline:** every drill writes to localStorage immediately; nothing blocks
  on the network. Rows are flagged `synced: false`.
- **Reconnect / focus / sign-in:** unsynced rows are upserted to Supabase
  (conflict key `user_id,question_id`), then remote rows newer than local are
  merged back. A DB trigger enforces last-write-wins server-side too.
