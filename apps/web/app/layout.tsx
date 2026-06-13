import type { Metadata, Viewport } from "next";
import { StoreProvider } from "@/lib/store-provider";
import { SyncProvider } from "@/lib/sync-provider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jyotir — Drill. Read. Repeat.",
  description:
    "Frictionless MCQ drilling and 2-minute micro-notes for UPSC, JEE, NEET, SSC CGL and GATE. Spaced repetition, fully offline.",
  applicationName: "Jyotir",
  appleWebApp: {
    capable: true,
    title: "Jyotir",
    statusBarStyle: "black-translucent"
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-oled font-sans text-ink antialiased">
        <StoreProvider>
          <SyncProvider>{children}</SyncProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
