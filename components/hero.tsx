import { Link } from "lucide-react";

export default function Hero() {
    return (
        <article className="space-y-4">
          <section className="mx-auto mb-4 h-12 w-12 rounded-full flex items-center justify-center bg-white/10 ring-2 ring-white/20">
            <Link className="h-6 w-6 text-primary" />
          </section>
          <h1 className="text-4xl font-bold tracking-tight">URL Shortener</h1>
          <p className="text-muted-foreground text-lg">
            Transform your long URLs into short, shareable links in seconds.
          </p>
        </article>
    )
}