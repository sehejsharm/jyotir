import { describe, expect, it } from "vitest";
import { MemoryStorageAdapter } from "../src/storage";
import { syncUserData, type SupabaseLike } from "../src/sync";
import type { ProgressRecord, ReadRecord } from "../src/types";

/**
 * Minimal in-memory Supabase test double implementing the structural
 * SupabaseLike contract. Records every upsert and serves canned rows for
 * the pull phase, so we can assert push payloads and the last-write-wins
 * merge without a network or a real Postgres.
 */
function fakeSupabase(remote: {
  user_progress?: Record<string, unknown>[];
  user_read_history?: Record<string, unknown>[];
}) {
  const upserts: Record<string, Record<string, unknown>[][]> = {};
  const conflicts: Record<string, string> = {};

  const client: SupabaseLike = {
    from(table: string) {
      return {
        upsert(values: Record<string, unknown>[], opts: { onConflict: string }) {
          (upserts[table] ??= []).push(values);
          conflicts[table] = opts.onConflict;
          return Promise.resolve({ data: null, error: null });
        },
        select(_columns: string) {
          return {
            eq(_column: string, _value: string) {
              return Promise.resolve({
                data: (remote[table as keyof typeof remote] ?? []) as Record<string, unknown>[],
                error: null
              });
            }
          };
        }
      };
    }
  };

  return { client, upserts, conflicts };
}

const localProgress = (over: Partial<ProgressRecord> & { questionId: string }): ProgressRecord => ({
  repetitions: 1,
  easeFactor: 2.5,
  intervalDays: 1,
  nextReviewDate: "2026-06-13T00:00:00.000Z",
  lapses: 0,
  lastReviewedAt: "2026-06-12T00:00:00.000Z",
  updatedAt: "2026-06-12T00:00:00.000Z",
  synced: false,
  ...over
});

describe("syncUserData", () => {
  it("pushes only unsynced rows with the correct conflict targets, then marks them synced", async () => {
    const adapter = new MemoryStorageAdapter();
    await adapter.saveProgress(localProgress({ questionId: "q-dirty", synced: false }));
    await adapter.saveProgress(localProgress({ questionId: "q-clean", synced: true }));
    await adapter.saveReadRecord({
      materialId: "m-dirty",
      markedCompletedAt: "2026-06-12T00:00:00.000Z",
      synced: false
    });

    const { client, upserts, conflicts } = fakeSupabase({});
    const result = await syncUserData(adapter, client, "user-1", () => {});

    // Only the dirty progress row is pushed.
    expect(upserts.user_progress).toHaveLength(1);
    expect(upserts.user_progress?.[0]).toHaveLength(1);
    expect(upserts.user_progress?.[0]?.[0]).toMatchObject({
      user_id: "user-1",
      question_id: "q-dirty",
      ease_factor: 2.5
    });
    expect(conflicts.user_progress).toBe("user_id,question_id");
    expect(conflicts.user_read_history).toBe("user_id,material_id");
    expect(result.pushedProgress).toBe(1);
    expect(result.pushedReads).toBe(1);

    // Local rows are now flagged synced.
    const saved = await adapter.loadProgress();
    expect(saved["q-dirty"]?.synced).toBe(true);
  });

  it("adopts a newer remote row but keeps a newer local row (last-write-wins)", async () => {
    const adapter = new MemoryStorageAdapter();
    await adapter.saveProgress(
      localProgress({ questionId: "q-stale-local", updatedAt: "2026-06-10T00:00:00.000Z", synced: true })
    );
    await adapter.saveProgress(
      localProgress({ questionId: "q-fresh-local", updatedAt: "2026-06-30T00:00:00.000Z", synced: true })
    );

    const remoteRow = (questionId: string, updatedAt: string) => ({
      question_id: questionId,
      next_review_date: "2026-07-01T00:00:00.000Z",
      interval_days: 6,
      ease_factor: 2.6,
      repetitions: 2,
      lapses: 0,
      last_reviewed_at: updatedAt,
      updated_at: updatedAt
    });

    const { client } = fakeSupabase({
      user_progress: [
        remoteRow("q-stale-local", "2026-06-20T00:00:00.000Z"), // newer than local -> adopt
        remoteRow("q-fresh-local", "2026-06-20T00:00:00.000Z") // older than local -> ignore
      ]
    });

    const applied: { progress: ProgressRecord[]; reads: ReadRecord[] } = { progress: [], reads: [] };
    const result = await syncUserData(adapter, client, "user-1", (progress, reads) => {
      applied.progress = progress;
      applied.reads = reads;
    });

    expect(result.pulledProgress).toBe(1);
    expect(applied.progress.map((p) => p.questionId)).toEqual(["q-stale-local"]);

    const saved = await adapter.loadProgress();
    // Adopted the remote version of the stale card...
    expect(saved["q-stale-local"]?.repetitions).toBe(2);
    expect(saved["q-stale-local"]?.easeFactor).toBe(2.6);
    // ...but the locally-newer card is untouched.
    expect(saved["q-fresh-local"]?.updatedAt).toBe("2026-06-30T00:00:00.000Z");
    expect(saved["q-fresh-local"]?.repetitions).toBe(1);
  });

  it("surfaces a push error instead of silently dropping progress", async () => {
    const adapter = new MemoryStorageAdapter();
    await adapter.saveProgress(localProgress({ questionId: "q1", synced: false }));

    const failing: SupabaseLike = {
      from() {
        return {
          upsert() {
            return Promise.resolve({ data: null, error: { message: "rls denied" } });
          },
          select() {
            return { eq() { return Promise.resolve({ data: [], error: null }); } };
          }
        };
      }
    };

    await expect(syncUserData(adapter, failing, "user-1", () => {})).rejects.toThrow(/rls denied/);
    // The unsynced row must remain unsynced so a later sync retries it.
    const saved = await adapter.loadProgress();
    expect(saved["q1"]?.synced).toBe(false);
  });
});
