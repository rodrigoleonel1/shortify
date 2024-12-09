import { supabase } from "@/lib/supabaseClient";
import { redirect } from "next/navigation";

export default async function ShortCodePage({
    params,
  }: {
    params: { short_code: string };
  }) {
    
  const short_code = params.short_code;

  const { data, error } = await supabase
    .from("urls")
    .select("original_url")
    .eq("short_code", short_code);

  if (error || !data) {
    redirect("/404");
  }

  redirect(data[0].original_url);
}
