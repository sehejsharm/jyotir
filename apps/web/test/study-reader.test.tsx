import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { repo } from "@/lib/content";
import { StoreProvider } from "@/lib/store-provider";
import { StudyReader } from "@/components/StudyReader";
import { DrillEngine } from "@/components/DrillEngine";

afterEach(cleanup);

/**
 * Regression guard for the production crash where StudyReader used a
 * Zustand selector returning a fresh object every render. That makes
 * useSyncExternalStore loop ("Maximum update depth exceeded") on mount in
 * the browser — invisible to SSR/build checks, fatal at runtime. If it
 * regresses, render() below throws and this test fails.
 */
describe("topic view renders without an infinite re-render loop", () => {
  const topic = repo.topicsBySubject("upsc-polity")[0]!;
  const material = repo.materialByTopic(topic.id)!;

  it("StudyReader (Study tab) mounts and shows the Drill CTA", () => {
    render(
      <StoreProvider>
        <StudyReader material={material} onDrill={() => {}} />
      </StoreProvider>
    );
    expect(screen.getByText(/Drill This Topic Now/)).toBeTruthy();
  });

  it("DrillEngine (Drill tab) mounts", () => {
    render(
      <StoreProvider>
        <DrillEngine topicId={topic.id} />
      </StoreProvider>
    );
    // Mounts without throwing; content is gated on async hydrate, so we
    // only assert the render itself didn't loop/crash.
    expect(document.body).toBeTruthy();
  });
});
