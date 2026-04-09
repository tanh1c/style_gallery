export function Testimonials() {
  const testimonials = [
    {
      quote:
        "A complete rebuild in five days. The result outperformed everything we'd spent months building before.",
      name: "Sarah Chen",
      role: "CEO, Luminary",
    },
    {
      quote:
        "Conversions up 4x. That's not a typo. The design just works differently when it's built on real data.",
      name: "Marcus Webb",
      role: "Head of Growth, Arcline",
    },
    {
      quote:
        "They didn't just design our site. They defined our brand. World-class doesn't begin to cover it.",
      name: "Elena Voss",
      role: "Brand Director, Helix",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4">
          What They Say
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white">
          Don't take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-10 space-y-8 flex flex-col justify-between">
            <p className="text-white/80 font-body font-light text-lg italic leading-relaxed">
              "{t.quote}"
            </p>
            <div className="space-y-1">
              <p className="text-white font-body font-medium text-sm">
                {t.name}
              </p>
              <p className="text-white/50 font-body font-light text-xs uppercase tracking-widest">
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
