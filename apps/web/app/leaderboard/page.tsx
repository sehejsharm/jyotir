"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { levelForXp, rankName } from "@jyotir/core";
import { getSupabase } from "@/lib/supabase";
import { fetchLeaderboard, fetchMyRank, type LeaderboardRow } from "@/lib/leaderboard";
import { loadSettings } from "@/lib/settings";
import { useJyotir } from "@/lib/store-provider";
import { UsersIcon } from "@/components/icons";

export default function LeaderboardPage() {
  const supabase = getSupabase();
  const localXp = useJyotir((s) => s.stats.xp);
  const [rows, setRows] = useState<LeaderboardRow[] | null>(null);
  const [me, setMe] = useState<LeaderboardRow | null>(null);
  const [error, setError] = useState<string | null>(null);
  const myHandle = typeof window !== "undefined" ? loadSettings().handle : "";

  useEffect(() => {
    if (!supabase) return;
    let on = true;
    (async () => {
      try {
        const [board, rank] = await Promise.all([
          fetchLeaderboard(supabase, 100),
          fetchMyRank(supabase).catch(() => null)
        ]);
        if (on) {
          setRows(board);
          setMe(rank);
        }
      } catch (e) {
        if (on) setError((e as Error).message);
      }
    })();
    return () => {
      on = false;
    };
  }, [supabase]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-24 pt-12">
      <header className="mb-6">
        <div className="flex items-center gap-2">
          <UsersIcon className="h-5 w-5 text-correct" />
          <h1 className="text-2xl font-bold tracking-tight">Global Ranks</h1>
        </div>
        <p className="mt-1 text-xs text-muted">
          Anonymized by XP. You appear as <span className="text-correct">{myHandle}</span>.
        </p>
      </header>

      {!supabase ? (
        <div className="rounded-2xl border border-edge bg-surface px-5 py-6 text-sm text-muted">
          Sign in (Account) with cloud sync configured to join the global leaderboard. Your
          local XP is <span className="font-semibold text-ink">{localXp}</span>.
        </div>
      ) : error ? (
        <div className="rounded-2xl border border-wrong/40 bg-wrong-dim/30 px-5 py-4 text-sm text-wrong-bright">
          {error}
        </div>
      ) : rows === null ? (
        <div className="h-40 animate-pulse rounded-2xl border border-edge bg-surface" />
      ) : rows.length === 0 ? (
        <div className="rounded-2xl border border-edge bg-surface px-5 py-6 text-sm text-muted">
          No players yet. Drill some cards and sign in to claim the top spot.
        </div>
      ) : (
        <>
          {me && (
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-correct/40 bg-correct-dim/30 px-4 py-3">
              <span className="text-sm font-semibold text-correct-bright">
                You are #{me.rank} · {me.handle}
              </span>
              <span className="text-sm font-bold tabular-nums text-correct">{me.xp} XP</span>
            </div>
          )}
          <ol className="flex flex-col gap-1.5">
            {rows.map((r) => {
              const isMe = r.handle === myHandle;
              return (
                <li
                  key={r.rank}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 ${
                    isMe ? "border-correct/50 bg-correct-dim/20" : "border-edge bg-surface"
                  }`}
                >
                  <span className={`w-7 text-sm font-bold tabular-nums ${r.rank <= 3 ? "text-correct" : "text-faint"}`}>
                    {r.rank}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{isMe ? "You" : r.handle}</div>
                    <div className="text-[11px] text-faint">{rankName(levelForXp(r.xp))}</div>
                  </div>
                  <span className="text-sm font-bold tabular-nums">{r.xp}</span>
                </li>
              );
            })}
          </ol>
        </>
      )}

      <Link href="/" className="mt-8 text-center text-xs text-muted hover:text-ink">
        ← Home
      </Link>
    </main>
  );
}
