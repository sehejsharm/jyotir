import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { repo } from "@/lib/content";
import { useJyotir } from "@/lib/store-provider";
import { DrillEngine } from "@/components/DrillEngine";
import { StudyReader } from "@/components/StudyReader";

type Tab = "drill" | "study";

export default function TopicScreen() {
  const {
    exam: examSlug,
    subject: subjectSlug,
    topic: topicSlug
  } = useLocalSearchParams<{ exam: string; subject: string; topic: string }>();
  const router = useRouter();
  const exitDrill = useJyotir((s) => s.exitDrill);

  const exam = repo.examBySlug(examSlug ?? "");
  const subject = exam ? repo.subjectBySlug(exam.id, subjectSlug ?? "") : undefined;
  const topic = subject ? repo.topicBySlug(subject.id, topicSlug ?? "") : undefined;
  const material = topic ? repo.materialByTopic(topic.id) : undefined;

  const [tab, setTab] = useState<Tab>(material ? "study" : "drill");
  if (!exam || !subject || !topic) return null;

  const switchTab = (next: Tab) => {
    if (next === tab) return;
    if (next === "study") exitDrill();
    setTab(next);
  };

  return (
    <SafeAreaView className="flex-1 bg-oled">
      <View className="flex-1 px-5 pt-4">
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Text className="text-xs text-muted">← {subject.name}</Text>
        </Pressable>
        <Text className="mt-2 text-xl font-bold tracking-tight text-ink">
          {topic.name}
        </Text>

        <View className="my-5 flex-row rounded-xl border border-edge bg-surface p-1">
          <Pressable
            onPress={() => switchTab("drill")}
            className={`flex-1 items-center rounded-lg py-2 ${
              tab === "drill" ? "bg-raised" : ""
            }`}
          >
            <Text
              className={`text-sm font-semibold ${
                tab === "drill" ? "text-ink" : "text-muted"
              }`}
            >
              Drill Engine
            </Text>
          </Pressable>
          <Pressable
            onPress={() => material && switchTab("study")}
            disabled={!material}
            className={`flex-1 items-center rounded-lg py-2 ${
              tab === "study" ? "bg-raised" : ""
            } ${material ? "" : "opacity-30"}`}
          >
            <Text
              className={`text-sm font-semibold ${
                tab === "study" ? "text-ink" : "text-muted"
              }`}
            >
              Study Material
            </Text>
          </Pressable>
        </View>

        {tab === "drill" ? (
          <DrillEngine
            topicId={topic.id}
            onStudy={material ? () => switchTab("study") : undefined}
          />
        ) : material ? (
          <StudyReader material={material} onDrill={() => switchTab("drill")} />
        ) : null}
      </View>
    </SafeAreaView>
  );
}
