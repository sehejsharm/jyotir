import { createContentRepo, type ContentSource } from "@jyotir/core";
import { exams, subjects, topics, materials, questions } from "@jyotir/content";

/**
 * Bundled content: every micro-note and question ships inside the app
 * binary, so the entire study/drill experience works in airplane mode.
 * Post-launch, a Supabase content sync hydrates the same ContentSource
 * shape from SQLite instead.
 */
export const contentSource: ContentSource = { exams, subjects, topics, materials, questions };

export const repo = createContentRepo(contentSource);
