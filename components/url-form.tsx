"use client";

import { Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function UrlForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ original_url: url }),
    });

    const data = await res.json();

    if (data.short_code) {
      setShortUrl(`${window.location.origin}/${data.short_code}`);
    } else {
      toast.error("Error generating short URL");
    }
  };

  const handleClick = async () => {
    navigator.clipboard.writeText(shortUrl);
    toast.success("URL Copied to clipboard");
  };

  return (
    <article className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="url"
          placeholder="Enter your URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="w-full rounded-md border border-white/20 bg-black/10 px-4 py-2 text-sm  shadow-sm focus:outline outline-2 focus:outline-white/80"
        />
        <Button type="submit">Shorten</Button>
      </form>
      {shortUrl && (
        <section className="flex w-full gap-2 ">
          <p className="w-full rounded-md border border-white/20 bg-black/10 px-4 py-2 text-sm">
            Short URL:{" "}
            <a href={shortUrl} className="text-blue-500 underline">
              {shortUrl}
            </a>
          </p>
          <Button onClick={handleClick}>
            <Copy size={18} />
            Copy
          </Button>
        </section>
      )}
    </article>
  );
}
