"use client";

/** Tiny inline icons (no emoji). Inherit currentColor. */

export function FlameIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2c1 3-1 4.5-2.5 6C8 9.5 7 11 7 13a5 5 0 0 0 10 0c0-1.6-.7-3-1.6-4.2.2 1.2-.3 2.2-1.1 2.6.4-1.6-.2-3.6-2.3-5.4C10.7 4.8 12 3.6 12 2z" />
    </svg>
  );
}

export function TrophyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6 4h12v2h3v3a4 4 0 0 1-4 4h-.4A6 6 0 0 1 13 16.9V19h3v2H8v-2h3v-2.1A6 6 0 0 1 7.4 13H7a4 4 0 0 1-4-4V6h3V4zm0 4H5v1a2 2 0 0 0 1 1.7V8zm12 0v2.7A2 2 0 0 0 19 9V8h-1z" />
    </svg>
  );
}

export function BoltIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

export function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 3 2 11h3v9h5v-6h4v6h5v-9h3L12 3z" />
    </svg>
  );
}

export function ChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4 20V4h2v14h14v2H4zm4-3V9h2v8H8zm4 0V6h2v11h-2zm4 0v-5h2v5h-2z" />
    </svg>
  );
}

export function GearIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm9 4-2-.3a7 7 0 0 0-.5-1.3l1.2-1.6-1.4-1.4-1.6 1.2a7 7 0 0 0-1.3-.5L15 4h-2l-.3 2a7 7 0 0 0-1.3.5L9.8 5.3 8.4 6.7 9.6 8.3a7 7 0 0 0-.5 1.3L7 12v2l2 .3c.1.5.3.9.5 1.3l-1.2 1.6 1.4 1.4 1.6-1.2c.4.2.8.4 1.3.5L13 20h2l.3-2c.5-.1.9-.3 1.3-.5l1.6 1.2 1.4-1.4-1.2-1.6c.2-.4.4-.8.5-1.3L21 14v-2z" />
    </svg>
  );
}

export function UsersIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-8 2c-2.7 0-6 1.3-6 4v2h8v-2c0-1 .4-1.9 1-2.6A9 9 0 0 0 8 13zm8 0c-.5 0-1 0-1.5.1.9.8 1.5 1.8 1.5 2.9v2h6v-2c0-2.7-3.3-4-6-4z" />
    </svg>
  );
}

/** Wordmark monogram used by the splash and headers. */
export function RecallMark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-2xl bg-correct ${className}`}>
      <span className="font-black text-black" style={{ fontSize: "55%" }}>
        R
      </span>
    </div>
  );
}
