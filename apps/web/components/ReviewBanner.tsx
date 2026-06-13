"use client";

import Link from "next/link";
import { useJyotir } from "@/lib/store-provider";

/**
 * Home-screen entry to the cross-exam daily review. Shows the live due
 * count once local progress has hydrated; collapses to a calm "caught up"
 * row when nothing is due so it never nags.
 */
export function ReviewBanner() {
  const ready = useJyotir((s) => s.ready);
  const due = useJyotir((s) => (s.ready ? s.dueTotal() : 0));

  if (!ready) {
    return <div className="mb-6 h-[68px] rounded-2xl border border-edge bg-surface" aria-busy="true" />;
  }

  if (due === 0) {
    return (
      <div className="mb-6 flex items-center justify-between rounded-2xl border border-edge bg-surface px-5 py-4">
        <span className="text-sm font-semibold text-muted">No reviews due</span>
        <span className="text-sm font-semibold text-correct">all caught up ✓</span>
      </div>
    );
  }

  return (
    <Link
      href="/review"
      className="mb-6 flex items-center justify-between rounded-2xl bg-correct px-5 py-4 shadow-[0_0_28px_rgba(16,185,129,0.22)] transition-transform active:scale-[0.99]"
    >
      <div>
        <span className="block text-base font-bold text-black">Start Daily Review</span>
        <span className="block text-xs font-medium text-black/70">across all your exams</span>
      </div>
      <span className="rounded-full bg-black/15 px-3 py-1 text-sm font-bold tabular-nums text-black">
        {due} due
      </span>
    </Link>
  );
}
