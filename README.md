# Jyotir

Hyper-minimalist MCQ drilling + micro-learning for India's top 5 competitive
exams — **UPSC CSE, JEE, NEET UG, SSC CGL, GATE**. Active recall, SM-2 spaced
repetition, and 2-minute high-yield micro-notes. No feeds. No PDFs. No bloat.

## The two core mechanics

**1 — The Drill Loop.** Question + 4 options → make a *mental* choice → tap
anywhere to reveal the answer and a 1-line explanation → "Knew It" / "Got It
Wrong" (buttons, ←/→ keys on web, swipe on mobile) feeds SM-2 → next card
renders synchronously from the in-memory queue. **0ms between cards.**

**2 — Read to Drill.** Every topic pairs one Markdown micro-note (≤2-min read)
with its question bank. The sticky CTA at the bottom of every note —
**"Drill This Topic Now (X Cards Due)"** — flips the topic view from Study to
Drill instantly: notes and the next 30 due cards are already local.

## Monorepo layout

```
apps/web        Next.js 16 (App Router) · Tailwind · localStorage adapter
apps/mobile     Expo SDK 56 · expo-router · NativeWind · expo-sqlite · expo-haptics
packages/core   Platform-agnostic engine: types, SM-2, scheduler, Zustand
                store factory, StorageAdapter + sync engine (offline-first LWW)
packages/content  Bundled mock content: 5 exams, 18 subjects, 23 topics,
                  23 micro-notes, 184 questions (validated at module load)
supabase/       SQL migrations (schema + RLS + triggers) and generated seed
prisma/         Prisma mirror of the SQL schema for type-safe server access
scripts/        seed generator, content codemods
```

## Quickstart

```bash
pnpm install
pnpm test                 # core engine tests (SM-2, scheduler, drill store)
pnpm dev:web              # Next.js on http://localhost:3000
pnpm dev:mobile           # Expo dev server (press i / a, scan QR)
```

The apps run fully **offline and anonymous by default** — content is bundled,
progress persists locally (localStorage on web, SQLite on mobile).

## Supabase (optional, for auth + cross-device sync)

```bash
supabase db push                       # applies supabase/migrations
pnpm seed:generate                     # emits supabase/seed.sql from @jyotir/content
psql "$DATABASE_URL" -f supabase/seed.sql
cp .env.example apps/web/.env.local    # fill in project URL + anon key
```

Signed-in users sync via `store.syncNow(supabase, userId)`: rows with
`synced=false` are pushed (upsert on `user_id,question_id`), then remote rows
are merged last-write-wins on `updated_at` — a DB trigger enforces LWW on the
server too, so a stale device can never clobber newer progress.

## Architecture notes

- **Ids are stable text slugs** (`upsc-polity-fundamental-rights-q01`)
  everywhere — bundle, SQLite, Postgres — so sync needs no id mapping.
- **SM-2**: binary input maps to q=4 ("Knew It") / q=2 ("Got It Wrong");
  EF floor 1.3; lapses reset reps and re-queue once within the session.
- **Zero-spinner contract**: `startDrill()` builds the whole queue in memory;
  `grade()` is a synchronous state transition — persistence happens after the
  next card is already on screen.
- The spec's `User_Progress.interval` column is named `interval_days`
  (`INTERVAL` is a reserved type in Postgres; the unit is also explicit).
