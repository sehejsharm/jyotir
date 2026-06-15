"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChartIcon, GearIcon, HomeIcon, UsersIcon } from "./icons";

const ITEMS = [
  { href: "/", label: "Home", Icon: HomeIcon },
  { href: "/leaderboard", label: "Ranks", Icon: UsersIcon },
  { href: "/stats", label: "Stats", Icon: ChartIcon },
  { href: "/settings", label: "Settings", Icon: GearIcon }
] as const;

/** Routes that get the bottom tab bar (the immersive drill/topic screens don't). */
const SHOW_ON = new Set([
  "/",
  "/leaderboard",
  "/stats",
  "/settings",
  "/contact",
  "/request-exam",
  "/account"
]);

export function BottomNav() {
  const pathname = usePathname();
  if (!SHOW_ON.has(pathname)) return null;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-edge bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-xl">
        {ITEMS.map(({ href, label, Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition-colors ${
                active ? "text-correct" : "text-faint hover:text-muted"
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
