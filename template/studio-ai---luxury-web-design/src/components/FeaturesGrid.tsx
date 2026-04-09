import { Zap, Palette, BarChart3, Shield } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      icon: Zap,
      title: "Days, Not Months",
      description:
        "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy.",
    },
    {
      icon: Palette,
      title: "Obsessively Crafted",
      description:
        "Every detail considered. Every element refined. Design so precise, it feels inevitable.",
    },
    {
      icon: BarChart3,
      title: "Built to Convert",
      description:
        "Layouts informed by data. Decisions backed by performance. Results you can measure.",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description:
        "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4">
          Why Us
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white">
          The difference is everything.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <div key={i} className="liquid-glass rounded-2xl p-8 space-y-6 group">
            <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-heading italic text-white">
                {feature.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
