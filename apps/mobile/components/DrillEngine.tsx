import { useEffect, useMemo, useRef } from "react";
import { Animated, PanResponder, Pressable, Text, View } from "react-native";
import { OPTION_KEYS, optionText } from "@jyotir/core";
import { useJyotir, useJyotirStore } from "@/lib/store-provider";

/**
 * The drill loop, mobile edition:
 *   tap anywhere -> reveal (selection haptic)
 *   swipe right / "Knew It"   -> q=4 (light impact)
 *   swipe left  / "Got It Wrong" -> q=2 (medium impact)
 * The queue is fully in memory; advancing is a synchronous store update.
 */
export function DrillEngine({
  topicId,
  onStudy,
  reviewMode = false,
  onExit
}: {
  topicId: string;
  onStudy?: () => void;
  /** Cross-exam review: due-only queue, no study tab. */
  reviewMode?: boolean;
  /** Secondary action on the completion screen (e.g. back to home). */
  onExit?: () => void;
}) {
  const store = useJyotirStore();
  const drill = useJyotir((s) => s.drill);
  const ready = useJyotir((s) => s.ready);

  const start = () => (reviewMode ? store.getState().startReview() : store.getState().startDrill(topicId));

  useEffect(() => {
    if (ready) (reviewMode ? store.getState().startReview() : store.getState().startDrill(topicId));
  }, [ready, topicId, reviewMode, store]);

  const pan = useRef(new Animated.Value(0)).current;
  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_evt, g) =>
          store.getState().drill.phase === "revealed" &&
          Math.abs(g.dx) > 12 &&
          Math.abs(g.dx) > Math.abs(g.dy) * 1.5,
        onPanResponderMove: (_evt, g) => pan.setValue(g.dx),
        onPanResponderRelease: (_evt, g) => {
          if (Math.abs(g.dx) > 72) {
            store.getState().grade(g.dx > 0);
            pan.setValue(0);
          } else {
            Animated.spring(pan, { toValue: 0, useNativeDriver: true }).start();
          }
        },
        onPanResponderTerminate: () => {
          Animated.spring(pan, { toValue: 0, useNativeDriver: true }).start();
        }
      }),
    [pan, store]
  );

  if (!ready || drill.topicId !== topicId) return <View className="flex-1" />;

  const card = drill.queue[drill.index];

  if (drill.phase === "complete" || !card) {
    const { knew, wrong } = drill.stats;
    const total = knew + wrong;
    const caughtUp = reviewMode && total === 0;
    return (
      <View className="flex-1 items-center justify-center gap-6">
        <View className="items-center">
          {caughtUp ? (
            <>
              <Text className="text-5xl font-bold text-correct">✓</Text>
              <Text className="mt-3 text-base font-semibold text-ink">All caught up</Text>
              <Text className="mt-1 text-center text-sm text-muted">
                No cards due across your exams.
              </Text>
            </>
          ) : (
            <>
              <Text className="text-5xl font-bold text-ink">
                {total > 0 ? Math.round((knew / total) * 100) : 100}%
              </Text>
              <Text className="mt-2 text-sm text-muted">
                <Text className="font-semibold text-correct">{knew} knew</Text>
                {" · "}
                <Text className="font-semibold text-wrong-bright">{wrong} missed</Text>
              </Text>
            </>
          )}
        </View>
        <View className="w-full max-w-xs gap-2.5">
          {!caughtUp && (
            <Pressable
              onPress={start}
              className="items-center rounded-xl bg-ink py-3.5 active:scale-[0.98]"
            >
              <Text className="font-bold text-black">
                {reviewMode ? "Review Again" : "Drill Again"}
              </Text>
            </Pressable>
          )}
          {onStudy && (
            <Pressable
              onPress={onStudy}
              className="items-center rounded-xl border border-edge py-3.5"
            >
              <Text className="font-semibold text-muted">Back to the notes</Text>
            </Pressable>
          )}
          {onExit && (
            <Pressable
              onPress={onExit}
              className="items-center rounded-xl border border-edge py-3.5"
            >
              <Text className="font-semibold text-muted">Done</Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  }

  const { question } = card;
  const revealed = drill.phase === "revealed";
  const progressPct = (drill.index / drill.queue.length) * 100;

  return (
    <View className="flex-1">
      <View className="mb-5 h-0.5 w-full overflow-hidden rounded-full bg-raised">
        <View className="h-full bg-correct" style={{ width: `${progressPct}%` }} />
      </View>

      <Animated.View
        className="flex-1"
        style={{
          transform: [
            { translateX: Animated.multiply(pan, 0.35) },
            {
              rotate: pan.interpolate({
                inputRange: [-300, 300],
                outputRange: ["-4deg", "4deg"]
              })
            }
          ]
        }}
        {...panResponder.panHandlers}
      >
        <Pressable
          className="flex-1"
          disabled={revealed}
          onPress={() => store.getState().reveal()}
        >
          <Text className="text-lg font-semibold leading-7 text-ink">
            {question.text}
          </Text>

          <View className="mt-6 gap-2">
            {OPTION_KEYS.map((key) => {
              const isCorrect = revealed && key === question.correctOption;
              const dimmed = revealed && !isCorrect;
              return (
                <View
                  key={key}
                  className={`flex-row items-baseline gap-3 rounded-xl border px-4 py-3 ${
                    isCorrect
                      ? "border-correct bg-correct-dim/60"
                      : dimmed
                        ? "border-edge/50"
                        : "border-edge bg-surface"
                  }`}
                >
                  <Text
                    className={`text-xs font-bold ${isCorrect ? "text-correct" : "text-faint"}`}
                  >
                    {key}
                  </Text>
                  <Text
                    className={`flex-1 text-[15px] ${
                      isCorrect
                        ? "font-semibold text-correct-bright"
                        : dimmed
                          ? "text-faint"
                          : "text-ink"
                    }`}
                  >
                    {optionText(question, key)}
                  </Text>
                </View>
              );
            })}
          </View>

          {revealed ? (
            <View className="mt-5 border-l-2 border-correct pl-3">
              <Text className="text-sm leading-5 text-muted">{question.explanation}</Text>
            </View>
          ) : (
            <Text className="mt-6 text-center text-xs text-faint">
              decide mentally, then tap anywhere to reveal
            </Text>
          )}
        </Pressable>
      </Animated.View>

      <View className="mt-6 flex-row gap-3">
        <Pressable
          onPress={() => store.getState().grade(false)}
          disabled={!revealed}
          className={`flex-1 items-center rounded-xl border border-wrong/50 bg-wrong-dim/40 py-4 ${
            revealed ? "" : "opacity-0"
          }`}
        >
          <Text className="font-bold text-wrong-bright">✕ Got It Wrong</Text>
        </Pressable>
        <Pressable
          onPress={() => store.getState().grade(true)}
          disabled={!revealed}
          className={`flex-1 items-center rounded-xl border border-correct/50 bg-correct-dim/40 py-4 ${
            revealed ? "" : "opacity-0"
          }`}
        >
          <Text className="font-bold text-correct-bright">✓ Knew It</Text>
        </Pressable>
      </View>

      <Text className="mb-2 mt-3 text-center text-[11px] text-faint">
        {drill.index + 1} / {drill.queue.length}
        {card.reason === "new" ? " · new card" : ""}
        {card.reason === "early" ? " · ahead of schedule" : ""}
      </Text>
    </View>
  );
}
