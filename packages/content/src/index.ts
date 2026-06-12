import type { Exam, Question, StudyMaterial, Subject, Topic } from "@jyotir/core";
import type { ExamBundle } from "./builder";
import { upsc } from "./upsc";
import { jee } from "./jee";
import { neet } from "./neet";
import { sscCgl } from "./ssc-cgl";
import { gate } from "./gate";

export type { ExamBundle, RawExamBundle, AuthoredMaterial } from "./builder";
export { defineBundle } from "./builder";

export const bundles: ExamBundle[] = [upsc, jee, neet, sscCgl, gate];

export const exams: Exam[] = bundles.map((b) => b.exam);
export const subjects: Subject[] = bundles.flatMap((b) => b.subjects);
export const topics: Topic[] = bundles.flatMap((b) => b.topics);
export const materials: StudyMaterial[] = bundles.flatMap((b) => b.materials);
export const questions: Question[] = bundles.flatMap((b) => b.questions);

export { upsc, jee, neet, sscCgl, gate };
