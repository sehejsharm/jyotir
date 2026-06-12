import { createStore, type StoreApi } from "zustand";
import { createContentRepo, type ContentRepo, type ContentSource } from "./content-repo";
import { buildQueue, topicCounts, DEFAULT_QUEUE_LIMIT } from "./scheduler";
import { gradeBinary } from "./sm2";
import type { StorageAdapter } from "./storage";
import { syncUserData, type SupabaseLike, type SyncResult } from "./sync";
import type { DrillCard, ProgressRecord, ReadRecord, TopicCounts } from "./types";

export type DrillPhase = "idle" | "question" | "revealed" | "complete";

export interface DrillSession {
  topicId: string | null;
  queue: DrillCard[];
  index: number;
  phase: DrillPhase;
  /** The grade just given, kept for the brief reveal/flash on the card. */
  lastGrade: boolean | null;
  stats: { knew: number; wrong: number };
  /** Lapsed cards re-enter the back of the queue once per session. */
  requeued: Record<string, true>;
}

export interface JyotirState {
  ready: boolean;
  progress: Record<string, ProgressRecord>;
  reads: Record<string, ReadRecord>;
  drill: DrillSession;

  hydrate(): Promise<void>;

  /** Builds the full in-memory queue for a topic. Everything after this is 0ms. */
  startDrill(topicId: string, limit?: number): void;
  reveal(): void;
  grade(knewIt: boolean): void;
  exitDrill(): void;

  markRead(materialId: string): void;
  countsForTopic(topicId: string): TopicCounts;

  syncNow(supabase: SupabaseLike, userId: string): Promise<SyncResult>;
}

export interface StoreDeps {
  adapter: StorageAdapter;
  content: ContentSource;
  /** Platform feedback hooks (e.g. expo-haptics). Fired synchronously. */
  onReveal?: () => void;
  onGrade?: (knewIt: boolean) => void;
}

const emptyDrill = (): DrillSession => ({
  topicId: null,
  queue: [],
  index: 0,
  phase: "idle",
  lastGrade: null,
  stats: { knew: 0, wrong: 0 },
  requeued: {}
});

export type JyotirStore = StoreApi<JyotirState> & { repo: ContentRepo };

export function createJyotirStore(deps: StoreDeps): JyotirStore {
  const repo = createContentRepo(deps.content);
  const { adapter } = deps;

  const persist = (p: Promise<void>) =>
    p.catch((err) => console.error("[jyotir] persistence failed:", err));

  const store = createStore<JyotirState>()((set, get) => ({
    ready: false,
    progress: {},
    reads: {},
    drill: emptyDrill(),

    async hydrate() {
      const [progress, reads] = await Promise.all([
        adapter.loadProgress(),
        adapter.loadReadHistory()
      ]);
      set({ progress, reads, ready: true });
    },

    startDrill(topicId, limit = DEFAULT_QUEUE_LIMIT) {
      const questions = repo.questionsByTopic(topicId);
      const queue = buildQueue(questions, get().progress, new Date(), limit);
      set({
        drill: {
          ...emptyDrill(),
          topicId,
          queue,
          phase: queue.length > 0 ? "question" : "complete"
        }
      });
    },

    reveal() {
      const { drill } = get();
      if (drill.phase !== "question") return;
      deps.onReveal?.();
      set({ drill: { ...drill, phase: "revealed" } });
    },

    grade(knewIt) {
      const { drill, progress } = get();
      if (drill.phase !== "revealed") return;
      const card = drill.queue[drill.index];
      if (!card) return;

      deps.onGrade?.(knewIt);

      const qid = card.question.id;
      const record = gradeBinary(qid, progress[qid], knewIt);

      // Lapsed card relearns within the session: re-queue at the back, once.
      let queue = drill.queue;
      let requeued = drill.requeued;
      if (!knewIt && !requeued[qid]) {
        queue = [...queue, { question: card.question, reason: "due" }];
        requeued = { ...requeued, [qid]: true };
      }

      const index = drill.index + 1;
      set({
        progress: { ...progress, [qid]: record },
        drill: {
          ...drill,
          queue,
          requeued,
          index,
          lastGrade: knewIt,
          phase: index >= queue.length ? "complete" : "question",
          stats: {
            knew: drill.stats.knew + (knewIt ? 1 : 0),
            wrong: drill.stats.wrong + (knewIt ? 0 : 1)
          }
        }
      });

      // I/O strictly after the synchronous state transition: the next card
      // is already on screen before this write begins.
      persist(adapter.saveProgress(record));
    },

    exitDrill() {
      set({ drill: emptyDrill() });
    },

    markRead(materialId) {
      const record: ReadRecord = {
        materialId,
        markedCompletedAt: new Date().toISOString(),
        synced: false
      };
      set((s) => ({ reads: { ...s.reads, [materialId]: record } }));
      persist(adapter.saveReadRecord(record));
    },

    countsForTopic(topicId) {
      return topicCounts(repo.questionsByTopic(topicId), get().progress);
    },

    async syncNow(supabase, userId) {
      const result = await syncUserData(adapter, supabase, userId, (progress, reads) => {
        if (progress.length === 0 && reads.length === 0) return;
        set((s) => {
          const nextProgress = { ...s.progress };
          for (const p of progress) nextProgress[p.questionId] = p;
          const nextReads = { ...s.reads };
          for (const r of reads) nextReads[r.materialId] = r;
          return { progress: nextProgress, reads: nextReads };
        });
      });
      // Reflect the pushed flags without re-reading storage.
      set((s) => {
        const progress: Record<string, ProgressRecord> = {};
        for (const [k, v] of Object.entries(s.progress)) progress[k] = { ...v, synced: true };
        const reads: Record<string, ReadRecord> = {};
        for (const [k, v] of Object.entries(s.reads)) reads[k] = { ...v, synced: true };
        return { progress, reads };
      });
      return result;
    }
  }));

  return Object.assign(store, { repo });
}
