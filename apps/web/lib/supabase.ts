import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Optional: the app is fully functional offline/anonymous. When the env
 * vars are present, signed-in users get cross-device progress sync via
 * store.syncNow(supabase, userId).
 */
export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createClient(url, anonKey);
}
