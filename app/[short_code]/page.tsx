"use client"

import { supabase } from "@/lib/supabaseClient";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ShortCodePage({
  params,
}: {
  params: { short_code: string };
}) {
  const short_code = params.short_code;

  useEffect(() => {
    async function fetchUrl() {
      const { data, error } = await supabase
        .from("urls")
        .select("original_url")
        .eq("short_code", short_code);

      if (error || !data || data.length == 0) {
        redirect("/");
      }

      redirect(data[0].original_url);
    }
  }, [short_code]);

  return <div>Cargando...</div>;
}
