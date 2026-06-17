/**
 * One-time codemod: rebalances the correct-answer key distribution across
 * the authored question banks (the originals skewed ~60% toward "B", which
 * lets users meta-game "pick B when unsure").
 *
 * For each question it swaps the option text at the current correct
 * position with the text at a target position drawn from a seeded,
 * per-file-balanced shuffle of A/B/C/D — deterministic, so re-runs are
 * no-ops in spirit (same output for same input).
 *
 *   pnpm tsx scripts/rebalance-keys.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "packages", "content", "src");
const FILES = [
  "upsc.ts", "jee.ts", "neet.ts", "ssc-cgl.ts", "gate.ts", "cfa.ts", "frm.ts",
  "cfa-exp-1.ts", "cfa-exp-2.ts", "cfa-exp-3.ts", "cfa-exp-4.ts", "cfa-exp-5.ts",
  "frm-exp-1.ts", "frm-exp-2.ts", "frm-exp-3.ts", "frm-exp-4.ts", "frm-exp-5.ts"
];
const KEYS = ["A", "B", "C", "D"] as const;
type Key = (typeof KEYS)[number];

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7);

/** Balanced multiset of targets (n/4 of each key), seeded shuffle. */
function targetsFor(file: string, n: number): Key[] {
  const out: Key[] = [];
  for (let i = 0; i < n; i++) out.push(KEYS[i % 4]!);
  const rand = mulberry32(hash(file));
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

const STR = `"(?:[^"\\\\]|\\\\.)*"`;
const QUESTION_RE = new RegExp(
  `optionA: (${STR}),\\n(\\s*)optionB: (${STR}),\\n\\s*optionC: (${STR}),\\n\\s*optionD: (${STR}),\\n\\s*correctOption: "([A-D])"`,
  "g"
);

let grandTotal = 0;
const distribution: Record<Key, number> = { A: 0, B: 0, C: 0, D: 0 };

for (const file of FILES) {
  const path = join(DIR, file);
  const src = readFileSync(path, "utf8");
  const count = [...src.matchAll(QUESTION_RE)].length;
  const targets = targetsFor(file, count);

  let i = 0;
  const next = src.replace(
    QUESTION_RE,
    (_m, a: string, indent: string, b: string, c: string, d: string, correct: Key) => {
      const opts: Record<Key, string> = { A: a, B: b, C: c, D: d };
      const target = targets[i++]!;
      // Move the correct answer's text to the target slot.
      [opts[correct], opts[target]] = [opts[target], opts[correct]];
      distribution[target]++;
      return (
        `optionA: ${opts.A},\n${indent}optionB: ${opts.B},\n${indent}` +
        `optionC: ${opts.C},\n${indent}optionD: ${opts.D},\n${indent}correctOption: "${target}"`
      );
    }
  );

  if (i !== count) throw new Error(`${file}: replaced ${i}, expected ${count}`);
  writeFileSync(path, next);
  grandTotal += count;
  console.log(`${file}: rebalanced ${count} questions`);
}

console.log(`total ${grandTotal}:`, distribution);
