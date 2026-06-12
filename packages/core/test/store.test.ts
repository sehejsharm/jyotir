import { describe, expect, it } from "vitest";
import { createJyotirStore } from "../src/store";
import { MemoryStorageAdapter } from "../src/storage";
import type { ContentSource } from "../src/content-repo";
import type { Question } from "../src/types";

const q = (id: string, orderIndex: number): Question => ({
  id,
  topicId: "t1",
  text: `Q ${id}`,
  optionA: "a",
  optionB: "b",
  optionC: "c",
  optionD: "d",
  correctOption: "B",
  explanation: "because",
  orderIndex
});

const content: ContentSource = {
  exams: [{ id: "upsc", slug: "upsc", name: "UPSC", tagline: "", orderIndex: 0 }],
  subjects: [{ id: "upsc-polity", examId: "upsc", name: "Polity", slug: "polity", orderIndex: 0 }],
  topics: [{ id: "t1", subjectId: "upsc-polity", name: "FRs", slug: "frs", orderIndex: 0 }],
  materials: [
    {
      id: "t1-m01",
      topicId: "t1",
      title: "FRs",
      content: "**hi**",
      estimatedReadTime: 1,
      totalLinkedQuestions: 3,
      orderIndex: 0
    }
  ],
  questions: [q("q1", 0), q("q2", 1), q("q3", 2)]
};

function makeStore() {
  return createJyotirStore({ adapter: new MemoryStorageAdapter(), content });
}

describe("drill loop", () => {
  it("runs reveal -> grade synchronously with zero awaits between cards", () => {
    const store = makeStore();
    store.getState().startDrill("t1");
    expect(store.getState().drill.queue).toHaveLength(3);
    expect(store.getState().drill.phase).toBe("question");

    store.getState().reveal();
    expect(store.getState().drill.phase).toBe("revealed");

    store.getState().grade(true);
    // Next card is already live — no promise in between.
    expect(store.getState().drill.phase).toBe("question");
    expect(store.getState().drill.index).toBe(1);
    expect(store.getState().progress["q1"]?.repetitions).toBe(1);
  });

  it("ignores grade before reveal (tap-anywhere contract)", () => {
    const store = makeStore();
    store.getState().startDrill("t1");
    store.getState().grade(true);
    expect(store.getState().drill.index).toBe(0);
    expect(store.getState().drill.phase).toBe("question");
  });

  it("re-queues a lapsed card once at the back of the session", () => {
    const store = makeStore();
    store.getState().startDrill("t1");

    store.getState().reveal();
    store.getState().grade(false); // q1 lapses -> re-queued
    expect(store.getState().drill.queue).toHaveLength(4);

    // Work through q2, q3, then q1 again — wrong again must NOT re-queue.
    for (let i = 0; i < 3; i++) {
      store.getState().reveal();
      store.getState().grade(i < 2);
    }
    const { drill } = store.getState();
    expect(drill.phase).toBe("complete");
    expect(drill.queue).toHaveLength(4);
    expect(drill.stats).toEqual({ knew: 2, wrong: 2 });
  });

  it("counts due cards for the Read-to-Drill CTA", () => {
    const store = makeStore();
    expect(store.getState().countsForTopic("t1")).toEqual({ due: 0, fresh: 3, total: 3 });

    store.getState().startDrill("t1");
    store.getState().reveal();
    store.getState().grade(true); // scheduled tomorrow -> no longer fresh or due
    expect(store.getState().countsForTopic("t1")).toEqual({ due: 0, fresh: 2, total: 3 });
  });

  it("persists progress to the adapter after grading", async () => {
    const adapter = new MemoryStorageAdapter();
    const store = createJyotirStore({ adapter, content });
    store.getState().startDrill("t1");
    store.getState().reveal();
    store.getState().grade(true);
    await new Promise((r) => setTimeout(r, 0));
    const saved = await adapter.loadProgress();
    expect(saved["q1"]?.repetitions).toBe(1);
    expect(saved["q1"]?.synced).toBe(false);
  });

  it("marks materials read", async () => {
    const store = makeStore();
    store.getState().markRead("t1-m01");
    expect(store.getState().reads["t1-m01"]?.synced).toBe(false);
  });
});
