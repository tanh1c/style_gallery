import { VideoBackground } from "./VideoBackground";

export function CtaFooter() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Video */}
      <VideoBackground
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="z-0"
      />

      {/* Gradient Fades */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-1 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.85] text-white">
            Your next website starts here.
          </h2>
          <p className="text-white/70 font-body font-light text-lg md:text-xl max-w-2xl mx-auto">
            Book a free strategy call. See what AI-powered design can do. No
            commitment, no pressure. Just possibilities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <button className="liquid-glass-strong rounded-full px-8 py-4 text-white font-medium hover:scale-105 transition-transform">
              Book a Call
            </button>
            <button className="bg-white text-black rounded-full px-8 py-4 font-medium hover:bg-white/90 transition-colors">
              View Pricing
            </button>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="mt-48 w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs font-body">
            © 2026 Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/40 text-xs font-body hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
