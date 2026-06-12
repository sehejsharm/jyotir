import Link from "next/link";
import { repo } from "@/lib/content";

export default function ExamPickerPage() {
  const exams = repo.exams();
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-5 py-14">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Jyotir</h1>
        <p className="mt-1.5 text-sm text-muted">
          Drill. Read. Repeat. Nothing else.
        </p>
      </header>

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
