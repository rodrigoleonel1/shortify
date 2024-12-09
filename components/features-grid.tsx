export default function FeaturesGrid() {
  return (
    <article className="pt-4">
      <h2 className="text-xl font-semibold mb-4">Why use our URL shortener?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Simple & Fast",
            description: "Shorten your URLs with just one click",
          },
          {
            title: "Reliable",
            description: "Your shortened URLs never expire",
          },
          {
            title: "Free",
            description: "No hidden fees or subscription required",
          },
        ].map((feature) => (
          <section
            key={feature.title}
            className="p-4 rounded-lg bg-black/10 border border-white/20 shadow-lg"
          >
            <h3 className="font-medium mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
