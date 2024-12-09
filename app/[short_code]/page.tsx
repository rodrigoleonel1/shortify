import { redirect } from "next/navigation";
import { getOriginalUrl } from "@/lib/url-service";

interface PageProps {
  params: {
    short_code: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ShortCodePage({ params }: PageProps) {
  const originalUrl = await getOriginalUrl(params.short_code);

  if (!originalUrl) {
    redirect("/");
  }

  redirect(originalUrl);
}
