# Deploying Jyotir (web) to Vercel

The web app is a Next.js 16 App Router project inside a pnpm monorepo. It
runs fully offline/anonymous, so you can deploy it **before** setting up
Supabase and add accounts later (see `SUPABASE.md`) with no code changes.

## One-time setup (Vercel dashboard)

1. Go to <https://vercel.com/new> and **Import** the `sehejsharm/jyotir`
   GitHub repo.
2. In the import screen, set:
   - **Root Directory** → `apps/web`  ← the only non-default setting that matters
   - **Framework Preset** → Next.js (auto-detected)
   - **Install Command** → leave default (Vercel runs `pnpm install` against
     the workspace root automatically)
   - **Build Command** → leave default (`next build`)
3. (Optional, for accounts/sync — see `SUPABASE.md`) add Environment Variables:

   | Name | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SUPABASE_URL` | your Supabase project URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | your Supabase anon/public key |
   | `NEXT_PUBLIC_SITE_URL` | your deployed URL, e.g. `https://jyotir.vercel.app` |

4. Click **Deploy**. Every push to `main` redeploys automatically.

## Or deploy from the CLI

```bash
npm i -g vercel
cd apps/web
vercel            # first run links the project — accept Next.js defaults
vercel --prod     # production deploy
```

If prompted for the root directory, point it at `apps/web`.

## After it's live

- Open the URL on your phone → browser menu → **Add to Home Screen**. The PWA
  manifest launches it standalone on OLED black, and all content + drills work
  offline.
- Without Supabase keys, progress is stored locally per device. Add the env
  vars above and redeploy to turn on accounts and cross-device sync.

## Notes

- The build statically generates every exam / subject / topic / review route
  from the bundled content (`@jyotir/content`) — there's no server runtime
  required for content, just the static export plus client-side drilling.
- `transpilePackages` in `apps/web/next.config.ts` already lets Vercel build
  the `@jyotir/core` and `@jyotir/content` workspace packages.
