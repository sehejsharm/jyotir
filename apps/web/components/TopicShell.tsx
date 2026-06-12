"use client";

import Link from "next/link";
import { useState } from "react";
import { repo } from "@/lib/content";
import { useJyotir } from "@/lib/store-provider";
import { DrillEngine } from "./DrillEngine";
import { StudyReader } from "./StudyReader";

type Tab = "drill" | "study";

/**
 * The split topic view: a single clean toggle between [Drill Engine] and
 * [Study Material]. The "Drill This Topic Now" CTA inside the reader flips
 * the tab — content and queue are already in memory, so the switch is 0ms.
 */
export function TopicShell({
  examSlug,
  subjectSlug,
  subjectName,
  topicId,
  topicName
}: {
  examSlug: string;
  subjectSlug: string;
  subjectName: string;
  topicId: string;
  topicName: string;
}) {
  const material = repo.materialByTopic(topicId);
  const [tab, setTab] = useState<Tab>(material ? "study" : "drill");
  const exitDrill = useJyotir((s) => s.exitDrill);

  const switchTab = (next: Tab) => {
    if (next === tab) return;
    if (next === "study") exitDrill();
    setTab(next);
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-6 pt-10">
      <header className="mb-5">
        <Link
          href={`/${examSlug}/${subjectSlug}`}
          className="text-xs text-muted hover:text-ink"
        >
          ← {subjectName}
        </Link>
        <h1 className="mt-2 text-xl font-bold tracking-tight">{topicName}</h1>
      </header>

      <div
        role="tablist"
        aria-label="Topic mode"
        className="mb-6 grid grid-cols-2 rounded-xl border border-edge bg-surface p-1"
      >
        <button
          role="tab"
          aria-selected={tab === "drill"}
          onClick={() => switchTab("drill")}
          className={`rounded-lg py-2 text-sm font-semibold transition-colors ${
            tab === "drill" ? "bg-raised text-ink" : "text-muted hover:text-ink"
          }`}
        >
          Drill Engine
        </button>
        <button
          role="tab"
          aria-selected={tab === "study"}
          onClick={() => switchTab("study")}
          disabled={!material}
          className={`rounded-lg py-2 text-sm font-semibold transition-colors disabled:opacity-30 ${
            tab === "study" ? "bg-raised text-ink" : "text-muted hover:text-ink"
          }`}
        >
          Study Material
        </button>
      </div>

      {tab === "drill" ? (
        <DrillEngine topicId={topicId} onStudy={material ? () => switchTab("study") : undefined} />
      ) : material ? (
        <StudyReader material={material} onDrill={() => switchTab("drill")} />
      ) : null}
    </div>
  );
}
