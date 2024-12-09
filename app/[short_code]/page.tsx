import { supabase } from "@/lib/supabaseClient";
import { redirect } from "next/navigation";

interface PageProps {
  params: { short_code: string };
}

export default async function ShortCodePage({ params }: PageProps) {
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
