import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { repo } from "@/lib/content";

export default function ExamPickerScreen() {
  return (
    <SafeAreaView className="flex-1 bg-oled">
      <ScrollView className="flex-1 px-5" contentContainerClassName="py-8">
        <Text className="text-3xl font-bold tracking-tight text-ink">Jyotir</Text>
        <Text className="mb-8 mt-1 text-sm text-muted">
          Drill. Read. Repeat. Nothing else.
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
