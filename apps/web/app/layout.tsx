import type { Metadata, Viewport } from "next";
import { StoreProvider } from "@/lib/store-provider";
import { SyncProvider } from "@/lib/sync-provider";
import { Splash } from "@/components/Splash";
import { BottomNav } from "@/components/BottomNav";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Recall — Drill. Read. Repeat.",
  description:
    "Frictionless MCQ drilling and 2-minute micro-notes for UPSC, JEE, NEET, SSC CGL, GATE, CFA and FRM. Spaced repetition, gamified, fully offline.",
  applicationName: "Recall",
  appleWebApp: {
    capable: true,
    title: "Recall",
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
          <SyncProvider>
            <Splash />
            {children}
            <BottomNav />
          </SyncProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
