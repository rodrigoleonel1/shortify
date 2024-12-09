import { redirect } from "next/navigation";
import { getOriginalUrl } from "@/lib/url-service";

export default async function ShortCodePage({
  params,
}: {
  params: { short_code: string };
}) {
  const originalUrl = await getOriginalUrl(params.short_code);

  if (!originalUrl) {
    redirect("/");
  }

  redirect(originalUrl);
}
