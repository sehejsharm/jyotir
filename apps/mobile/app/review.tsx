import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { REVIEW_SCOPE } from "@jyotir/core";
import { DrillEngine } from "@/components/DrillEngine";

/**
 * The daily review: one due-only queue spanning every exam. Open the app,
 * clear what's due, leave.
 */
export default function ReviewScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-oled">
      <View className="flex-1 px-5 pt-4">
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Text className="text-xs text-muted">← Home</Text>
        </Pressable>
        <Text className="mt-2 text-xl font-bold tracking-tight text-ink">Daily Review</Text>
        <Text className="mb-5 mt-0.5 text-xs text-muted">
          Everything due, across all your exams.
        </Text>

        <DrillEngine topicId={REVIEW_SCOPE} reviewMode onExit={() => router.back()} />
      </View>
    </SafeAreaView>
  );
}
