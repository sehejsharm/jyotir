import type { Exam, Question, StudyMaterial, Subject, Topic } from "./types";

/**
 * Read-side of all study content. Methods are SYNCHRONOUS by design: the
 * repo is fully resident in memory before any screen renders (bundled
 * content today; hydrated from the SQLite cache after a Supabase content
 * sync in production). This is what makes every card/note transition 0ms.
 */
export interface ContentRepo {
  exams(): Exam[];
  examBySlug(slug: string): Exam | undefined;
  subjectsByExam(examId: string): Subject[];
  subjectBySlug(examId: string, slug: string): Subject | undefined;
  topicsBySubject(subjectId: string): Topic[];
  topicBySlug(subjectId: string, slug: string): Topic | undefined;
  topicById(topicId: string): Topic | undefined;
  materialByTopic(topicId: string): StudyMaterial | undefined;
  questionsByTopic(topicId: string): Question[];
  /** Every question across every exam — backs the cross-exam review queue. */
  allQuestions(): Question[];
}

export interface ContentSource {
  exams: Exam[];
  subjects: Subject[];
  topics: Topic[];
  materials: StudyMaterial[];
  questions: Question[];
}

export function createContentRepo(source: ContentSource): ContentRepo {
  const byOrder = <T extends { orderIndex: number }>(xs: T[]) =>
    [...xs].sort((a, b) => a.orderIndex - b.orderIndex);

  const exams = byOrder(source.exams);
  const subjectsByExam = new Map<string, Subject[]>();
  for (const s of source.subjects) {
    const list = subjectsByExam.get(s.examId) ?? [];
    list.push(s);
    subjectsByExam.set(s.examId, list);
  }
  const topicsBySubject = new Map<string, Topic[]>();
  const topicById = new Map<string, Topic>();
  for (const t of source.topics) {
    const list = topicsBySubject.get(t.subjectId) ?? [];
    list.push(t);
    topicsBySubject.set(t.subjectId, list);
    topicById.set(t.id, t);
  }
  const materialByTopic = new Map<string, StudyMaterial>();
  for (const m of source.materials) materialByTopic.set(m.topicId, m);
  const questionsByTopic = new Map<string, Question[]>();
  for (const q of source.questions) {
    const list = questionsByTopic.get(q.topicId) ?? [];
    list.push(q);
    questionsByTopic.set(q.topicId, list);
  }
  for (const list of questionsByTopic.values()) list.sort((a, b) => a.orderIndex - b.orderIndex);

  return {
    exams: () => exams,
    examBySlug: (slug) => exams.find((e) => e.slug === slug),
    subjectsByExam: (examId) => byOrder(subjectsByExam.get(examId) ?? []),
    subjectBySlug: (examId, slug) =>
      (subjectsByExam.get(examId) ?? []).find((s) => s.slug === slug),
    topicsBySubject: (subjectId) => byOrder(topicsBySubject.get(subjectId) ?? []),
    topicBySlug: (subjectId, slug) =>
      (topicsBySubject.get(subjectId) ?? []).find((t) => t.slug === slug),
    topicById: (topicId) => topicById.get(topicId),
    materialByTopic: (topicId) => materialByTopic.get(topicId),
    questionsByTopic: (topicId) => questionsByTopic.get(topicId) ?? [],
    allQuestions: () => source.questions
  };
}
