import FeaturesGrid from "@/components/features-grid";
import Hero from "@/components/hero";
import UrlForm from "@/components/url-form";

export default function Home() {
  return (
    <main className="min-h-screen p-4 text-center space-y-6 max-w-2xl m-auto flex flex-col justify-center">
      <Hero />
      <UrlForm />
      <FeaturesGrid />
    </main>
  );
}
