import type { StorageAdapter } from "./storage";
import type { ProgressRecord, ReadRecord } from "./types";

/**
 * Offline-first progress sync against Supabase.
 *
 * Local SQLite/localStorage is the source of truth during a session; rows
 * with synced=false form the outbound queue. Sync is a two-phase
 * last-write-wins merge keyed on updatedAt:
 *
 *   push: upsert unsynced local rows (unique on user_id+question_id /
 *         user_id+material_id) — server keeps the newer updatedAt via RLS-
 *         safe upsert.
 *   pull: fetch server rows and adopt any that are newer than local.
 *
 * The Supabase client is injected as a minimal structural type so core
 * stays dependency-free and the engine is trivially testable.
 */

interface PostgrestResult<T> {
  data: T | null;
  error: { message: string } | null;
}

export interface SupabaseLike {
  from(table: string): {
    upsert(values: Record<string, unknown>[], opts: { onConflict: string }): PromiseLike<PostgrestResult<unknown>>;
    select(columns: string): {
      eq(column: string, value: string): PromiseLike<PostgrestResult<Record<string, unknown>[]>>;
    };
  };
}

export interface SyncResult {
  pushedProgress: number;
  pushedReads: number;
  pulledProgress: number;
  pulledReads: number;
}

export async function syncUserData(
  adapter: StorageAdapter,
  supabase: SupabaseLike,
  userId: string,
  applyRemote: (progress: ProgressRecord[], reads: ReadRecord[]) => void
): Promise<SyncResult> {
  const [localProgress, localReads] = await Promise.all([
    adapter.loadProgress(),
    adapter.loadReadHistory()
  ]);

  // ---- push ----
  const dirtyProgress = Object.values(localProgress).filter((p) => !p.synced);
  if (dirtyProgress.length > 0) {
    const { error } = await supabase.from("user_progress").upsert(
      dirtyProgress.map((p) => ({
        user_id: userId,
        question_id: p.questionId,
        next_review_date: p.nextReviewDate,
        interval_days: p.intervalDays,
        ease_factor: p.easeFactor,
        repetitions: p.repetitions,
        lapses: p.lapses,
        last_reviewed_at: p.lastReviewedAt,
        updated_at: p.updatedAt
      })),
      { onConflict: "user_id,question_id" }
    );
    if (error) throw new Error(`sync push (progress): ${error.message}`);
    await adapter.markProgressSynced(dirtyProgress.map((p) => p.questionId));
  }

  const dirtyReads = Object.values(localReads).filter((r) => !r.synced);
  if (dirtyReads.length > 0) {
    const { error } = await supabase.from("user_read_history").upsert(
      dirtyReads.map((r) => ({
        user_id: userId,
        material_id: r.materialId,
        marked_completed_at: r.markedCompletedAt
      })),
      { onConflict: "user_id,material_id" }
    );
    if (error) throw new Error(`sync push (reads): ${error.message}`);
    await adapter.markReadsSynced(dirtyReads.map((r) => r.materialId));
  }

  // ---- pull ----
  const { data: remoteProgress, error: progressErr } = await supabase
    .from("user_progress")
    .select("question_id,next_review_date,interval_days,ease_factor,repetitions,lapses,last_reviewed_at,updated_at")
    .eq("user_id", userId);
  if (progressErr) throw new Error(`sync pull (progress): ${progressErr.message}`);

  const { data: remoteReads, error: readsErr } = await supabase
    .from("user_read_history")
    .select("material_id,marked_completed_at")
    .eq("user_id", userId);
  if (readsErr) throw new Error(`sync pull (reads): ${readsErr.message}`);

  const newerProgress: ProgressRecord[] = [];
  for (const row of remoteProgress ?? []) {
    const rec: ProgressRecord = {
      questionId: String(row.question_id),
      nextReviewDate: String(row.next_review_date),
      intervalDays: Number(row.interval_days),
      easeFactor: Number(row.ease_factor),
      repetitions: Number(row.repetitions),
      lapses: Number(row.lapses),
      lastReviewedAt: String(row.last_reviewed_at),
      updatedAt: String(row.updated_at),
      synced: true
    };
    const local = localProgress[rec.questionId];
    if (!local || local.updatedAt < rec.updatedAt) {
      newerProgress.push(rec);
      await adapter.saveProgress(rec);
    }
  }

  const newerReads: ReadRecord[] = [];
  for (const row of remoteReads ?? []) {
    const rec: ReadRecord = {
      materialId: String(row.material_id),
      markedCompletedAt: String(row.marked_completed_at),
      synced: true
    };
    if (!localReads[rec.materialId]) {
      newerReads.push(rec);
      await adapter.saveReadRecord(rec);
    }
  }

  applyRemote(newerProgress, newerReads);

  return {
    pushedProgress: dirtyProgress.length,
    pushedReads: dirtyReads.length,
    pulledProgress: newerProgress.length,
    pulledReads: newerReads.length
  };
}
