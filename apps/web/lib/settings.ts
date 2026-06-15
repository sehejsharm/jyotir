"use client";

import { useEffect, useState } from "react";

/** Local, device-level preferences. displayName + handle also feed the leaderboard. */
export interface Settings {
  displayName: string;
  /** Anonymized public identity shown on the global leaderboard. */
  handle: string;
  /** Daily target (cards) for the streak ring. */
  dailyGoal: number;
  reduceMotion: boolean;
  leaderboardOptIn: boolean;
}

const KEY = "recall.settings.v1";

function randomHandle(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 4; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return `Aspirant-${s}`;
}

export function defaultSettings(): Settings {
  return {
    displayName: "Aspirant",
    handle: randomHandle(),
    dailyGoal: 20,
    reduceMotion: false,
    leaderboardOptIn: true
  };
}

export function loadSettings(): Settings {
  if (typeof window === "undefined") return defaultSettings();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) {
      const d = defaultSettings();
      window.localStorage.setItem(KEY, JSON.stringify(d));
      return d;
    }
    return { ...defaultSettings(), ...(JSON.parse(raw) as Partial<Settings>) };
  } catch {
    return defaultSettings();
  }
}

export function saveSettings(s: Settings): void {
  if (typeof window !== "undefined") window.localStorage.setItem(KEY, JSON.stringify(s));
}

/** React hook with a setter that persists. */
export function useSettings(): [Settings, (patch: Partial<Settings>) => void] {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  useEffect(() => setSettings(loadSettings()), []);
  const update = (patch: Partial<Settings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      saveSettings(next);
      return next;
    });
  };
  return [settings, update];
}
