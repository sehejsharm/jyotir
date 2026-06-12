import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { repo } from "@/lib/content";

export default function SubjectsScreen() {
  const { exam: examSlug } = useLocalSearchParams<{ exam: string }>();
  const router = useRouter();
  const exam = repo.examBySlug(examSlug ?? "");
  if (!exam) return null;

  return (
    <SafeAreaView className="flex-1 bg-oled">
      <ScrollView className="flex-1 px-5" contentContainerClassName="py-8">
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Text className="text-xs text-muted">← All exams</Text>
        </Pressable>
        <Text className="mb-8 mt-3 text-2xl font-bold tracking-tight text-ink">
          {exam.name}
        </Text>

        <View className="gap-2.5">
          {repo.subjectsByExam(exam.id).map((subject) => {
            const topicCount = repo.topicsBySubject(subject.id).length;
            return (
              <Link key={subject.id} href={`/${exam.slug}/${subject.slug}`} asChild>
                <Pressable className="flex-row items-baseline justify-between rounded-2xl border border-edge bg-surface px-5 py-4 active:bg-raised">
                  <Text className="font-semibold text-ink">{subject.name}</Text>
                  <Text className="text-xs text-muted">
                    {topicCount} {topicCount === 1 ? "topic" : "topics"}
                  </Text>
                </Pressable>
              </Link>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
