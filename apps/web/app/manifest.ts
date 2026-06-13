import type { MetadataRoute } from "next";

/**
 * PWA manifest — makes Jyotir installable to the home screen on Android/iOS
 * and desktop, launching standalone (no browser chrome) on OLED black.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jyotir — Drill. Read. Repeat.",
    short_name: "Jyotir",
    description:
      "Frictionless MCQ drilling and 2-minute micro-notes for UPSC, JEE, NEET, SSC CGL and GATE. Spaced repetition, fully offline.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#000000",
    theme_color: "#000000",
    categories: ["education"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" }
    ]
  };
}
