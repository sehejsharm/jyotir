import { createContentRepo, type ContentSource } from "@jyotir/core";
import { exams, subjects, topics, materials, questions } from "@jyotir/content";

/**
 * Bundled content source: shipped with the JS bundle, so every note and
 * question is available offline and synchronously. In production this same
 * shape is hydrated from the Supabase-backed local cache instead.
 */
export const contentSource: ContentSource = { exams, subjects, topics, materials, questions };

export const repo = createContentRepo(contentSource);
