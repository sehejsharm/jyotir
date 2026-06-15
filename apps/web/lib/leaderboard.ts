import type { SupabaseClient } from "@supabase/supabase-js";
import { levelForXp, type GamificationState } from "@jyotir/core";
import { loadSettings } from "./settings";

export interface LeaderboardRow {
  rank: number;
  handle: string;
  xp: number;
  level: number;
}

/** Upserts the signed-in user's public stats row (feeds the leaderboard). */
export async function pushStats(
  supabase: SupabaseClient,
  userId: string,
  stats: GamificationState
): Promise<void> {
  const s = loadSettings();
  if (!s.leaderboardOptIn) return;
  const { error } = await supabase.from("user_stats").upsert(
    {
      user_id: userId,
      display_name: s.displayName,
      handle: s.handle,
      xp: stats.xp,
      level: levelForXp(stats.xp),
      current_streak: stats.currentStreak,
      longest_streak: stats.longestStreak,
      cards_graded: stats.cardsGraded,
      updated_at: new Date().toISOString()
    },
    { onConflict: "user_id" }
  );
  if (error) throw new Error(`leaderboard push: ${error.message}`);
}

export async function fetchLeaderboard(
  supabase: SupabaseClient,
  n = 100
): Promise<LeaderboardRow[]> {
  const { data, error } = await supabase.rpc("leaderboard", { n });
  if (error) throw new Error(error.message);
  return (data ?? []) as LeaderboardRow[];
}

export async function fetchMyRank(supabase: SupabaseClient): Promise<LeaderboardRow | null> {
  const { data, error } = await supabase.rpc("my_rank");
  if (error) throw new Error(error.message);
  const rows = (data ?? []) as LeaderboardRow[];
  return rows[0] ?? null;
}
