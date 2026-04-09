import { VideoBackground } from "./VideoBackground";

export function StartSection() {
  return (
    <section className="relative min-h-[600px] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
      {/* Background Video */}
      <VideoBackground
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="z-0"
      />

      {/* Gradient Fades */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-1 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-1 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          How It Works
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white">
          You dream it. We ship it.
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
          Share your vision. Our AI handles the rest—wireframes, design, code,
          launch. All in days, not quarters.
        </p>
        <button className="liquid-glass-strong rounded-full px-8 py-4 text-white font-medium mt-4 hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>
    </section>
  );
}
