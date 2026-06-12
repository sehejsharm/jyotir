import { notFound } from "next/navigation";
import { repo } from "@/lib/content";
import { TopicShell } from "@/components/TopicShell";

export function generateStaticParams() {
  return repo.exams().flatMap((e) =>
    repo.subjectsByExam(e.id).flatMap((s) =>
      repo.topicsBySubject(s.id).map((t) => ({
        exam: e.slug,
        subject: s.slug,
        topic: t.slug
      }))
    )
  );
}

export default async function TopicPage({
  params
}: {
  params: Promise<{ exam: string; subject: string; topic: string }>;
}) {
  const { exam: examSlug, subject: subjectSlug, topic: topicSlug } = await params;
  const exam = repo.examBySlug(examSlug);
  if (!exam) notFound();
  const subject = repo.subjectBySlug(exam.id, subjectSlug);
  if (!subject) notFound();
  const topic = repo.topicBySlug(subject.id, topicSlug);
  if (!topic) notFound();

  return (
    <TopicShell
      examSlug={exam.slug}
      subjectSlug={subject.slug}
      subjectName={subject.name}
      topicId={topic.id}
      topicName={topic.name}
    />
  );
}
