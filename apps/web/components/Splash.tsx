"use client";

import { useEffect, useState } from "react";
import { useJyotir } from "@/lib/store-provider";
import { RecallMark } from "./icons";

/**
 * Branded loading screen shown on launch until local data hydrates (and for
 * a short minimum so the brand moment registers), then fades out.
 */
export function Splash() {
  const ready = useJyotir((s) => s.ready);
  const [minElapsed, setMinElapsed] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMinElapsed(true), 750);
    return () => clearTimeout(t);
  }, []);

  const done = ready && minElapsed;
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setHidden(true), 340);
    return () => clearTimeout(t);
  }, [done]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-oled transition-opacity duration-300 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <RecallMark className="animate-pop-in h-20 w-20 text-4xl shadow-[0_0_40px_rgba(16,185,129,0.35)]" />
      <h1 className="mt-5 text-2xl font-bold tracking-tight">Recall</h1>
      <p className="mt-1 text-xs text-muted">Drill. Read. Repeat.</p>
      <div className="mt-7 h-1 w-24 overflow-hidden rounded-full bg-raised">
        <div className="animate-loading-bar h-full w-1/3 rounded-full bg-correct" />
      </div>
    </div>
  );
}
