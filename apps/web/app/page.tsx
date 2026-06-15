import Link from "next/link";
import { repo } from "@/lib/content";
import { ProfileStrip } from "@/components/ProfileStrip";
import { ReviewBanner } from "@/components/ReviewBanner";

export default function ExamPickerPage() {
  const exams = repo.exams();
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 pb-24 pt-14">
      <header className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recall</h1>
          <p className="mt-1.5 text-sm text-muted">
            Drill. Read. Repeat. Nothing else.
          </p>
        </div>
        <Link
          href="/account"
          className="mt-1 rounded-full border border-edge px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:text-ink"
        >
          Account
        </Link>
      </header>

      <ProfileStrip />
      <ReviewBanner />

      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint">Exams</h2>
      <ul className="flex flex-col gap-2.5">
        {exams.map((exam) => (
          <li key={exam.id}>
            <Link
              href={`/${exam.slug}`}
              className="block rounded-2xl border border-edge bg-surface px-5 py-4 transition-colors hover:border-correct/40 active:bg-raised"
            >
              <span className="text-lg font-semibold">{exam.name}</span>
              <span className="mt-0.5 block text-xs text-muted">{exam.tagline}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
