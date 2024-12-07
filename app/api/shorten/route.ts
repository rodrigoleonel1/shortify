import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

/*const generateShortCode = (length: number = 6): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
};*/

export async function GET() {
  try {
    const { data, error } = await supabase
    .from('urls') // Cambiar por el nombre de tu tabla en Supabase
    .select(); // Insertar los datos

    console.log('Data:', data);
    console.log('Error:', error);

    if (error || !data) {
      return { notFound: true };
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log("[ITEMS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const url = body.url
    const shortenUrl = url + "shortix"
    console.log(shortenUrl)
    return NextResponse.json(shortenUrl, { status: 200 });
  } catch (error) {
    console.log("[ITEMS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

