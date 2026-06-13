import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Memoised Supabase client. The app is fully functional offline/anonymous;
 * when NEXT_PUBLIC_SUPABASE_* are present, signed-in users get auth and
 * cross-device progress sync. Returns null (cached) when unconfigured, so
 * every caller can cheaply branch on "is cloud sync available".
 */
let cached: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
  if (cached !== undefined) return cached;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  // Accept either the legacy anon key or the new publishable key name.
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  cached = url && key ? createClient(url, key) : null;
  return cached;
}

export const isSyncConfigured = (): boolean => getSupabase() !== null;
