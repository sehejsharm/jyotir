"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { REVIEW_SCOPE } from "@jyotir/core";
import { DrillEngine } from "@/components/DrillEngine";

/**
 * The daily review: one due-only queue spanning every exam. The
 * frictionless entry point — open the app, clear what's due, leave.
 */
export default function ReviewPage() {
  const router = useRouter();
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-6 pt-10">
      <header className="mb-6">
        <Link href="/" className="text-xs text-muted hover:text-ink">
          ← Home
        </Link>
        <h1 className="mt-2 text-xl font-bold tracking-tight">Daily Review</h1>
        <p className="mt-0.5 text-xs text-muted">Everything due, across all your exams.</p>
      </header>

      <DrillEngine topicId={REVIEW_SCOPE} reviewMode onExit={() => router.push("/")} />
    </div>
  );
}
