"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { SupabaseLike } from "@jyotir/core";
import { getSupabase } from "@/lib/supabase";
import { useJyotirStore } from "@/lib/store-provider";

/**
 * Minimal account surface: passwordless email magic-link sign-in, signed-in
 * state, sign-out, and a manual "Sync now". Progress works fully without an
 * account — signing in only adds cross-device sync.
 */
export default function AccountPage() {
  const supabase = getSupabase();
  const store = useJyotirStore();
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) return;
    void supabase.auth.getUser().then(({ data }) => setUserEmail(data.user?.email ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) =>
      setUserEmail(session?.user.email ?? null)
    );
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  const Shell = ({ children }: { children: React.ReactNode }) => (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 py-14">
      <Link href="/" className="text-xs text-muted hover:text-ink">
        ← Home
      </Link>
      <h1 className="mb-8 mt-3 text-2xl font-bold tracking-tight">Account</h1>
      {children}
    </main>
  );

  if (!supabase) {
    return (
      <Shell>
        <div className="rounded-2xl border border-edge bg-surface px-5 py-6">
          <p className="text-sm font-semibold">Cloud sync isn&apos;t configured</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Your progress is saved locally on this device. To enable accounts and
            cross-device sync, add your Supabase keys (see <code className="text-correct-bright">SUPABASE.md</code>).
          </p>
        </div>
      </Shell>
    );
  }

  if (userEmail) {
    return (
      <Shell>
        <div className="rounded-2xl border border-edge bg-surface px-5 py-6">
          <p className="text-xs text-muted">Signed in as</p>
          <p className="mt-1 font-semibold">{userEmail}</p>
          <p className="mt-2 text-xs text-correct">Progress syncs across your devices.</p>
        </div>
        <div className="mt-3 flex flex-col gap-2.5">
          <button
            onClick={async () => {
              setStatus("Syncing…");
              try {
                const { data } = await supabase.auth.getUser();
                if (data.user) {
                  const r = await store.getState().syncNow(supabase as unknown as SupabaseLike, data.user.id);
                  setStatus(`Synced · pushed ${r.pushedProgress}, pulled ${r.pulledProgress}`);
                }
              } catch (e) {
                setStatus(`Sync failed: ${(e as Error).message}`);
              }
            }}
            className="rounded-xl bg-ink py-3.5 font-bold text-black active:scale-[0.98]"
          >
            Sync now
          </button>
          <button
            onClick={() => void supabase.auth.signOut()}
            className="rounded-xl border border-edge py-3.5 font-semibold text-muted hover:text-ink"
          >
            Sign out
          </button>
        </div>
        {status && <p className="mt-3 text-center text-xs text-muted">{status}</p>}
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="rounded-2xl border border-edge bg-surface px-5 py-6">
        <p className="text-sm font-semibold">Sign in to sync across devices</p>
        <p className="mt-1.5 text-sm text-muted">
          We&apos;ll email you a magic link — no password.
        </p>
        {sent ? (
          <p className="mt-4 rounded-xl border border-correct/40 bg-correct-dim/40 px-4 py-3 text-sm text-correct-bright">
            Check {email} for your sign-in link.
          </p>
        ) : (
          <form
            className="mt-4 flex flex-col gap-2.5"
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);
              const { error: err } = await supabase.auth.signInWithOtp({
                email,
                options: { emailRedirectTo: `${window.location.origin}/account` }
              });
              if (err) setError(err.message);
              else setSent(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="rounded-xl border border-edge bg-oled px-4 py-3 text-sm text-ink outline-none focus:border-correct/50"
            />
            <button
              type="submit"
              className="rounded-xl bg-correct py-3.5 font-bold text-black active:scale-[0.98]"
            >
              Send magic link
            </button>
          </form>
        )}
        {error && <p className="mt-3 text-sm text-wrong-bright">{error}</p>}
      </div>
    </Shell>
  );
}
