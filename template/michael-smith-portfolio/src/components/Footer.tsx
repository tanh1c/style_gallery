import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl;
    }

    // Marquee Animation
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  const socials = ["Twitter", "LinkedIn", "Dribbble", "GitHub"];

  return (
    <footer className="relative bg-bg pt-16 md:pt-32 pb-8 md:pb-12 overflow-hidden">
      {/* Background Video (Flipped) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="border-y border-white/10 py-8 mb-24 overflow-hidden">
          <div ref={marqueeRef} className="flex whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-6xl md:text-9xl font-display italic text-text-primary/20 uppercase tracking-tighter px-8">
                BUILDING THE FUTURE •
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-display text-text-primary mb-12">
            Let's create something <span className="italic">extraordinary</span>
          </h2>
          
          <a
            href="mailto:hello@michaelsmith.com"
            className="group relative inline-flex items-center gap-4 rounded-full px-12 py-6 border border-stroke bg-surface/50 backdrop-blur-md transition-all hover:border-transparent"
          >
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-[-1px] accent-gradient rounded-full" />
            </div>
            <span className="relative z-10 text-lg md:text-xl font-medium">hello@michaelsmith.com</span>
            <span className="relative z-10 text-2xl">↗</span>
          </a>
        </div>

        {/* Footer Bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-stroke pt-12">
          <div className="flex items-center gap-8">
            {socials.map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted uppercase tracking-widest hover:text-text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
              <div className="relative w-2 h-2 bg-green-500 rounded-full" />
            </div>
            <span className="text-xs text-muted uppercase tracking-widest">Available for projects</span>
          </div>

          <div className="text-[10px] text-muted uppercase tracking-widest">
            © 2026 Michael Smith. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
