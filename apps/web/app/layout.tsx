import type { Metadata, Viewport } from "next";
import { StoreProvider } from "@/lib/store-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jyotir — Drill. Read. Repeat.",
  description:
    "Frictionless MCQ drilling and 2-minute micro-notes for UPSC, JEE, NEET, SSC CGL and GATE. Spaced repetition, fully offline."
};

export const viewport: Viewport = {
  themeColor: "#000000"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-oled font-sans text-ink antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
