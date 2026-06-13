import { Link, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { repo } from "@/lib/content";
import { useJyotir } from "@/lib/store-provider";

export default function ExamPickerScreen() {
  const router = useRouter();
  const ready = useJyotir((s) => s.ready);
  const due = useJyotir((s) => (s.ready ? s.dueTotal() : 0));

  return (
    <SafeAreaView className="flex-1 bg-oled">
      <ScrollView className="flex-1 px-5" contentContainerClassName="py-8">
        <Text className="text-3xl font-bold tracking-tight text-ink">Jyotir</Text>
        <Text className="mb-6 mt-1 text-sm text-muted">
          Drill. Read. Repeat. Nothing else.
        </Text>

        {/* Cross-exam daily review entry */}
        {ready && due > 0 ? (
          <Pressable
            onPress={() => router.push("/review")}
            className="mb-6 flex-row items-center justify-between rounded-2xl bg-correct px-5 py-4 active:scale-[0.99]"
            style={{
              shadowColor: "#10B981",
              shadowOpacity: 0.3,
              shadowRadius: 14,
              shadowOffset: { width: 0, height: 0 },
              elevation: 6
            }}
          >
            <View>
              <Text className="text-base font-bold text-black">Start Daily Review</Text>
              <Text className="text-xs font-medium text-black/70">across all your exams</Text>
            </View>
            <View className="rounded-full bg-black/15 px-3 py-1">
              <Text className="text-sm font-bold text-black">{due} due</Text>
            </View>
          </Pressable>
        ) : ready ? (
          <View className="mb-6 flex-row items-center justify-between rounded-2xl border border-edge bg-surface px-5 py-4">
            <Text className="text-sm font-semibold text-muted">No reviews due</Text>
            <Text className="text-sm font-semibold text-correct">all caught up ✓</Text>
          </View>
        ) : (
          <View className="mb-6 h-[68px] rounded-2xl border border-edge bg-surface" />
        )}

        <Text className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint">
          Exams
        </Text>
        <View className="gap-2.5">
          {repo.exams().map((exam) => (
            <Link key={exam.id} href={`/${exam.slug}`} asChild>
              <Pressable className="rounded-2xl border border-edge bg-surface px-5 py-4 active:bg-raised">
                <Text className="text-lg font-semibold text-ink">{exam.name}</Text>
                <Text className="mt-0.5 text-xs text-muted">{exam.tagline}</Text>
              </Pressable>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
