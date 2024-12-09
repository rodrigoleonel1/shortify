import { redirect } from "next/navigation";
import { getOriginalUrl } from "@/lib/url-service";

interface PageProps {
  params: {
    short_code: string | Promise<string | null>;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ShortCodePage({ params }: PageProps) {
  if (typeof params.short_code === "string") {
    const originalUrl = await getOriginalUrl(params.short_code);

    if (!originalUrl) {
      redirect("/");
    }

    redirect(originalUrl);
  } else {
    redirect("/");
  }
}
