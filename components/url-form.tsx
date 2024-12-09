"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

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
    console.log(data);

    if (data.short_code) {
      setShortUrl(`${window.location.origin}/${data.short_code}`);
    } else {
      alert("Error generating short URL");
    }
  };

  const handleClick = async () => {
    navigator.clipboard.writeText(shortUrl);
    alert("URL Copied to clipboard");
  };

  return (
    <article className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="url"
          placeholder="Enter your URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="w-full rounded-md border border-white/20 bg-black/10 px-4 py-2 text-sm text-white shadow-sm focus:outline outline-2 focus:outline-white/80"
        />
        <button
          type="submit"
          className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/90"
        >
          Shorten
        </button>
      </form>
      {shortUrl && (
        <section className="flex w-full gap-2 ">
          <p className="w-full rounded-md border border-white/20 bg-black/10 px-4 py-2 text-sm">
            Short URL:{" "}
            <a href={shortUrl} className="text-blue-500 underline">
              {shortUrl}
            </a>
          </p>
          <button
            className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/90 flex gap-1 items-center"
            onClick={handleClick}
          >
            <Copy size={18} />
            Copy
          </button>
        </section>
      )}
    </article>
  );
}
