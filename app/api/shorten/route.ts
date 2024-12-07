import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = body.url
    console.log(data)
    return NextResponse.json(data + "shortix", { status: 200 });
  } catch (error) {
    console.log("[ITEMS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

