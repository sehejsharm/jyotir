"use client";

import { useEffect, useRef, useState } from "react";
import { achievementById, OPTION_KEYS, optionText } from "@jyotir/core";
import { useJyotir } from "@/lib/store-provider";
import { BoltIcon, TrophyIcon } from "./icons";

/**
 * The drill loop:
 *   1. question + 4 options — tap/click ANYWHERE on the card (or Space) to reveal
 *   2. answer + 1-line explanation — "Got It Wrong" / "Knew It"
 *      (buttons, ←/→ keys, or swipe left/right)
 *   3. next card renders synchronously from the in-memory queue. 0ms.
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
  const drill = useJyotir((s) => s.drill);
  const ready = useJyotir((s) => s.ready);
  const startDrill = useJyotir((s) => s.startDrill);
  const startReview = useJyotir((s) => s.startReview);
  const reveal = useJyotir((s) => s.reveal);
  const grade = useJyotir((s) => s.grade);
  const newlyUnlocked = useJyotir((s) => s.newlyUnlocked);
  const clearNewlyUnlocked = useJyotir((s) => s.clearNewlyUnlocked);

  const start = () => (reviewMode ? startReview() : startDrill(topicId));

  // (Re)build the queue once local progress has hydrated.
  useEffect(() => {
    if (ready) (reviewMode ? startReview() : startDrill(topicId));
  }, [ready, topicId, reviewMode, startDrill, startReview]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        reveal();
      } else if (e.key === "ArrowRight") {
        grade(true);
      } else if (e.key === "ArrowLeft") {
        grade(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [reveal, grade]);

  // Swipe: right = knew it, left = got it wrong (only when revealed).
  const touchStartX = useRef<number | null>(null);
  const [swipe, setSwipe] = useState(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || drill.phase !== "revealed") return;
    setSwipe((e.touches[0]?.clientX ?? 0) - touchStartX.current);
  };
  const onTouchEnd = () => {
    if (drill.phase === "revealed" && Math.abs(swipe) > 64) grade(swipe > 0);
    setSwipe(0);
    touchStartX.current = null;
  };

  if (!ready || drill.topicId !== topicId) {
    return <div className="flex-1" aria-busy="true" />;
  }

  const card = drill.queue[drill.index];

  if (drill.phase === "complete" || !card) {
    const { knew, wrong } = drill.stats;
    const total = knew + wrong;
    // Review mode that opened with nothing due: a clean "inbox zero" state.
    const caughtUp = reviewMode && total === 0;
    const dismiss = (fn?: () => void) => () => {
      clearNewlyUnlocked();
      fn?.();
    };
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <div>
          {caughtUp ? (
            <>
              <p className="text-base font-semibold text-correct">All caught up</p>
              <p className="mt-1 text-sm text-muted">No cards due across your exams. Come back later.</p>
            </>
          ) : (
            <>
              <p className="text-5xl font-bold tabular-nums">
                {total > 0 ? Math.round((knew / total) * 100) : 100}%
              </p>
              <p className="mt-2 text-sm text-muted">
                <span className="font-semibold text-correct">{knew} knew</span>
                {" · "}
                <span className="font-semibold text-wrong-bright">{wrong} missed</span>
              </p>
              {drill.sessionXp > 0 && (
                <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-correct-dim/50 px-3 py-1 text-sm font-bold text-correct-bright">
                  <BoltIcon className="h-3.5 w-3.5" />+{drill.sessionXp} XP
                </p>
              )}
            </>
          )}
        </div>

        {newlyUnlocked.length > 0 && (
          <div className="w-full max-w-xs animate-pop-in rounded-2xl border border-correct/40 bg-correct-dim/30 p-3">
            <div className="mb-2 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-correct">
              <TrophyIcon className="h-3.5 w-3.5" /> Achievement unlocked
            </div>
            {newlyUnlocked.map((id) => {
              const a = achievementById(id);
              return a ? (
                <div key={id} className="text-sm">
                  <span className="font-bold text-correct-bright">{a.name}</span>
                  <span className="text-muted"> — {a.description}</span>
                </div>
              ) : null;
            })}
          </div>
        )}

        <div className="flex w-full max-w-xs flex-col gap-2.5">
          {!caughtUp && (
            <button
              onClick={dismiss(start)}
              className="w-full rounded-xl bg-ink py-3.5 font-bold text-black transition-transform active:scale-[0.98]"
            >
              {reviewMode ? "Review Again" : "Drill Again"}
            </button>
          )}
          {onStudy && (
            <button
              onClick={dismiss(onStudy)}
              className="w-full rounded-xl border border-edge py-3.5 font-semibold text-muted transition-colors hover:text-ink"
            >
              Back to the notes
            </button>
          )}
          {onExit && (
            <button
              onClick={dismiss(onExit)}
              className="w-full rounded-xl border border-edge py-3.5 font-semibold text-muted transition-colors hover:text-ink"
            >
              Done
            </button>
          )}
        </div>
      </div>
    );
  }

  const { question } = card;
  const revealed = drill.phase === "revealed";
  const progressPct = (drill.index / drill.queue.length) * 100;

  return (
    <div className="relative flex flex-1 flex-col">
      {/* progress hairline + combo badge */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-raised">
          <div
            className="h-full bg-correct transition-[width] duration-200"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        {drill.combo >= 2 && (
          <span
            key={drill.combo}
            className="animate-combo inline-flex items-center gap-1 rounded-full bg-correct-dim/60 px-2 py-0.5 text-[11px] font-bold text-correct-bright"
          >
            <BoltIcon className="h-3 w-3" />
            {drill.combo}x
          </span>
        )}
      </div>

      {/* floating XP award on grade */}
      {drill.lastXpAward > 0 && (
        <span
          key={drill.index}
          className={`animate-xp-float pointer-events-none absolute right-0 top-4 text-sm font-bold ${
            drill.lastGrade ? "text-correct-bright" : "text-muted"
          }`}
        >
          +{drill.lastXpAward}
        </span>
      )}

      <div
        onClick={() => !revealed && reveal()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className={`flex flex-1 flex-col ${revealed ? "" : "cursor-pointer"}`}
        style={{
          transform: swipe ? `translateX(${swipe * 0.35}px) rotate(${swipe * 0.012}deg)` : undefined,
          transition: swipe ? "none" : "transform 150ms ease"
        }}
      >
        <p className="whitespace-pre-line text-lg font-semibold leading-relaxed">
          {question.text}
        </p>

        <ul className="mt-6 flex flex-col gap-2">
          {OPTION_KEYS.map((key) => {
            const isCorrect = revealed && key === question.correctOption;
            const dimmed = revealed && !isCorrect;
            return (
              <li
                key={key}
                className={`flex items-baseline gap-3 rounded-xl border px-4 py-3 text-[15px] transition-all duration-150 ${
                  isCorrect
                    ? "border-correct bg-correct-dim/60 font-semibold text-correct-bright"
                    : dimmed
                      ? "border-edge/50 text-faint"
                      : "border-edge bg-surface"
                }`}
              >
                <span className={`text-xs font-bold ${isCorrect ? "text-correct" : "text-faint"}`}>
                  {key}
                </span>
                {optionText(question, key)}
              </li>
            );
          })}
        </ul>

        {revealed ? (
          <p className="mt-5 border-l-2 border-correct pl-3 text-sm leading-relaxed text-muted">
            {question.explanation}
          </p>
        ) : (
          <p className="mt-6 text-center text-xs text-faint">
            decide mentally, then tap anywhere to reveal
          </p>
        )}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3">
        <button
          onClick={() => grade(false)}
          disabled={!revealed}
          className="rounded-xl border border-wrong/50 bg-wrong-dim/40 py-4 font-bold text-wrong-bright transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-0"
        >
          ✕ Got It Wrong
        </button>
        <button
          onClick={() => grade(true)}
          disabled={!revealed}
          className="rounded-xl border border-correct/50 bg-correct-dim/40 py-4 font-bold text-correct-bright transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-0"
        >
          ✓ Knew It
        </button>
      </div>

      <p className="mt-3 text-center text-[11px] tabular-nums text-faint">
        {drill.index + 1} / {drill.queue.length}
        {card.reason === "new" && " · new card"}
        {card.reason === "early" && " · ahead of schedule"}
      </p>
    </div>
  );
}
