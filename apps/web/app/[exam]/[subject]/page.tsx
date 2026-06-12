import { notFound } from "next/navigation";
import { repo } from "@/lib/content";
import { TopicList } from "@/components/TopicList";

export function generateStaticParams() {
  return repo.exams().flatMap((e) =>
    repo.subjectsByExam(e.id).map((s) => ({ exam: e.slug, subject: s.slug }))
  );
}

export default async function TopicsPage({
  params
}: {
  params: Promise<{ exam: string; subject: string }>;
}) {
  const { exam: examSlug, subject: subjectSlug } = await params;
  const exam = repo.examBySlug(examSlug);
  if (!exam) notFound();
  const subject = repo.subjectBySlug(exam.id, subjectSlug);
  if (!subject) notFound();

  return <TopicList examSlug={exam.slug} examName={exam.name} subjectId={subject.id} subjectName={subject.name} subjectSlug={subject.slug} />;
}
