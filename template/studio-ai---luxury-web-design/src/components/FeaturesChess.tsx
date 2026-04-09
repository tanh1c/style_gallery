import { motion } from "motion/react";

export function FeaturesChess() {
  const rows = [
    {
      title: "Designed to convert. Built to perform.",
      body: "Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.",
      button: "Learn more",
      gif: "https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif",
      reverse: false,
    },
    {
      title: "It gets smarter. Automatically.",
      body: "Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.",
      button: "See how it works",
      gif: "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
      reverse: true,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-20 text-center">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4">
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white">
          Pro features. Zero complexity.
        </h2>
      </div>

      <div className="space-y-32">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              row.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12 lg:gap-24`}
          >
            {/* Text Side */}
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">
                {row.title}
              </h3>
              <p className="text-white/60 font-body font-light text-base md:text-lg leading-relaxed">
                {row.body}
              </p>
              <button className="liquid-glass-strong rounded-full px-6 py-3 text-white font-medium hover:scale-105 transition-transform">
                {row.button}
              </button>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative group">
                <img
                  src={row.gif}
                  alt={row.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
