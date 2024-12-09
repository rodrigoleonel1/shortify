import { redirect } from "next/navigation";
import { getOriginalUrl } from "@/lib/url-service";

export default async function ShortCodePage({
  params,
}: {
  params: Promise<{ short_code: string }>;
}) {
  const short_code = (await params).short_code;
  const originalUrl = await getOriginalUrl(short_code);

  if (!originalUrl) {
    redirect("/");
  }

  redirect(originalUrl);
}
