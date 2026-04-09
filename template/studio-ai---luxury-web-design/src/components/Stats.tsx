import { VideoBackground } from "./VideoBackground";

export function Stats() {
  const stats = [
    { value: "200+", label: "Sites launched" },
    { value: "98%", label: "Client satisfaction" },
    { value: "3.2x", label: "More conversions" },
    { value: "5 days", label: "Average delivery" },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Video */}
      <VideoBackground
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        desaturated
        className="z-0"
      />

      {/* Gradient Fades */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-1 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-1 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                  {stat.value}
                </span>
                <span className="text-white/60 font-body font-light text-sm tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
