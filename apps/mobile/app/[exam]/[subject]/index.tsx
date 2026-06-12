import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { topicCounts } from "@jyotir/core";
import { repo } from "@/lib/content";
import { useJyotir } from "@/lib/store-provider";

export default function TopicsScreen() {
  const { exam: examSlug, subject: subjectSlug } = useLocalSearchParams<{
    exam: string;
    subject: string;
  }>();
  const router = useRouter();
  const progress = useJyotir((s) => s.progress);
  const reads = useJyotir((s) => s.reads);

  const exam = repo.examBySlug(examSlug ?? "");
  const subject = exam ? repo.subjectBySlug(exam.id, subjectSlug ?? "") : undefined;
  if (!exam || !subject) return null;

  return (
    <SafeAreaView className="flex-1 bg-oled">
      <ScrollView className="flex-1 px-5" contentContainerClassName="py-8">
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Text className="text-xs text-muted">← {exam.name}</Text>
        </Pressable>
        <Text className="mb-8 mt-3 text-2xl font-bold tracking-tight text-ink">
          {subject.name}
        </Text>

        <View className="gap-2.5">
          {repo.topicsBySubject(subject.id).map((topic) => {
            const counts = topicCounts(repo.questionsByTopic(topic.id), progress);
            const material = repo.materialByTopic(topic.id);
            const isRead = material ? Boolean(reads[material.id]) : false;
            const pending = counts.due + counts.fresh;

            return (
              <Link
                key={topic.id}
                href={`/${exam.slug}/${subject.slug}/${topic.slug}`}
                asChild
              >
                <Pressable className="flex-row items-center justify-between gap-3 rounded-2xl border border-edge bg-surface px-5 py-4 active:bg-raised">
                  <View className="min-w-0 flex-1">
                    <Text className="font-semibold text-ink" numberOfLines={1}>
                      {topic.name}
                    </Text>
                    <Text className="mt-0.5 text-xs text-muted">
                      {material ? `${material.estimatedReadTime} min read` : "drill only"}
                      {isRead ? <Text className="text-correct"> · read ✓</Text> : null}
                    </Text>
                  </View>
                  {pending > 0 ? (
                    <View
                      className={`rounded-full px-2.5 py-1 ${
                        counts.due > 0 ? "bg-correct" : "bg-raised"
                      }`}
                    >
                      <Text
                        className={`text-xs font-bold ${
                          counts.due > 0 ? "text-black" : "text-muted"
                        }`}
                      >
                        {pending}
                      </Text>
                    </View>
                  ) : (
                    <Text className="text-xs font-semibold text-correct">✓ clear</Text>
                  )}
                </Pressable>
              </Link>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
