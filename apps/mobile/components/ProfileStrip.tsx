import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { isStreakActive, levelProgress } from "@jyotir/core";
import { useJyotir } from "@/lib/store-provider";

/**
 * Home-screen identity row: level, rank, XP progress and daily streak.
 * Tapping it opens the stats screen.
 */
export function ProfileStrip() {
  const router = useRouter();
  const ready = useJyotir((s) => s.ready);
  const stats = useJyotir((s) => s.stats);

  if (!ready) {
    return <View className="mb-4 h-[58px] rounded-2xl border border-edge bg-surface" />;
  }

  const lp = levelProgress(stats.xp);
  const streakAlive = isStreakActive(stats);

  return (
    <Pressable
      onPress={() => router.push("/stats")}
      className="mb-4 flex-row items-center gap-4 rounded-2xl border border-edge bg-surface px-4 py-3 active:opacity-80"
    >
      <View className="h-11 w-11 items-center justify-center rounded-xl bg-raised">
        <Text className="text-[9px] font-semibold uppercase tracking-wider text-faint">Lvl</Text>
        <Text className="-mt-0.5 text-lg font-bold leading-none text-ink">{lp.level}</Text>
      </View>

      <View className="min-w-0 flex-1">
        <View className="flex-row items-baseline justify-between">
          <Text className="font-semibold text-ink" numberOfLines={1}>
            {lp.rank}
          </Text>
          <Text className="ml-2 text-[11px] text-faint">
            {lp.into} / {lp.span} XP
          </Text>
        </View>
        <View className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-raised">
          <View className="h-full rounded-full bg-correct" style={{ width: `${lp.pct}%` }} />
        </View>
      </View>

      <View className="flex-row items-center gap-1">
        <Text className={`text-sm font-bold ${streakAlive ? "text-correct" : "text-faint"}`}>
          {stats.currentStreak}
        </Text>
        <Text className="text-[10px] text-faint">day{stats.currentStreak === 1 ? "" : "s"}</Text>
      </View>
    </Pressable>
  );
}
