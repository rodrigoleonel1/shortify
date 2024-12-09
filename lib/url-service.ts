import { supabase } from "./supabaseClient";

export async function getOriginalUrl(
  shortCode: string
): Promise<string | null> {
  const { data, error } = await supabase
    .from("urls")
    .select("original_url")
    .eq("short_code", shortCode);

  if (error || !data || data.length !== 1) {
    console.error("Error fetching original URL:", error);
    return null;
  }

  return data[0].original_url;
}
