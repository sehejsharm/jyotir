"use client";

import { useEffect, useState } from "react";
import { loadSettings, saveSettings } from "@/lib/settings";
import { BoltIcon, FlameIcon, RecallMark, TrophyIcon, UsersIcon } from "./icons";

interface Slide {
  Icon: (p: { className?: string }) => React.ReactNode;
  title: string;
  body: string;
}

const SLIDES: Slide[] = [
  {
    Icon: ({ className }) => <RecallMark className={className} />,
    title: "Welcome to Recall",
    body: "Master 7 tough exams by active recall — short notes, then rapid-fire questions. No feeds, no fluff."
  },
  {
    Icon: BoltIcon,
    title: "The drill loop",
    body: "See a question, decide in your head, tap to reveal the answer, then mark Knew It or Got It Wrong. The next card is instant."
  },
  {
    Icon: FlameIcon,
    title: "Spaced repetition + streaks",
    body: "We schedule each card with the SM-2 algorithm so you review exactly when you're about to forget. Drill daily to build your streak."
  },
  {
    Icon: TrophyIcon,
    title: "Earn XP and level up",
    body: "Every card earns XP, combos give bonuses, and 12 achievements await. Climb from Novice to Legend."
  },
  {
    Icon: UsersIcon,
    title: "Compete on the ranks",
    body: "Sign in to climb the anonymized global board and a separate leaderboard for each exam. Your real name stays private."
  }
];

/** First-run guided tour; shown once, after the splash. */
export function Onboarding() {
  const [show, setShow] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!loadSettings().onboarded) {
      const t = setTimeout(() => setShow(true), 850); // let the splash finish first
      return () => clearTimeout(t);
    }
  }, []);

  if (!show) return null;

  const finish = () => {
    saveSettings({ ...loadSettings(), onboarded: true });
    setShow(false);
  };

  const slide = SLIDES[i]!;
  const last = i === SLIDES.length - 1;
  const Icon = slide.Icon;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-oled px-6 pb-8 pt-16">
      <button onClick={finish} className="absolute right-5 top-6 text-xs font-semibold text-faint hover:text-ink">
        Skip
      </button>

      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div key={i} className="animate-pop-in">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-raised text-correct">
            <Icon className="h-10 w-10" />
          </div>
          <h2 className="mt-7 text-2xl font-bold tracking-tight">{slide.title}</h2>
          <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-muted">{slide.body}</p>
        </div>
      </div>

      <div className="mb-6 flex justify-center gap-1.5">
        {SLIDES.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-5 bg-correct" : "w-1.5 bg-edge"}`}
          />
        ))}
      </div>

      <button
        onClick={() => (last ? finish() : setI((n) => n + 1))}
        className="w-full rounded-2xl bg-correct py-4 text-base font-bold text-black active:scale-[0.98]"
      >
        {last ? "Start drilling" : "Next"}
      </button>
    </div>
  );
}
