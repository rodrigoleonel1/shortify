import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

const generateShortCode = (length: number = 6): string => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from({ length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
};

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("urls") // Cambiar por el nombre de tu tabla en Supabase
      .select(); // Insertar los datos

    console.log("Data:", data);
    console.log("Error:", error);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log("[SHORTEN_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const original_url = body.original_url;

    if (!original_url || typeof original_url !== "string") {
      return new NextResponse("Invalid URL", { status: 400 });
    }

    const short_code = generateShortCode();

    console.log(short_code);

    const { data, error } = await supabase
      .from("urls")
      .insert([{ original_url, short_code }])
      .select();

    if (error) {
      console.log(error);
      return new NextResponse("DB Error", { status: 500 });
    }
    
    return NextResponse.json(
      { short_code: data[0].short_code },
      { status: 200 }
    );
  } catch (error) {
    console.log("[SHORTEN_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}