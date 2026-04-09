import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion } from "framer-motion";
import { fadeUp } from "@/src/lib/animations";

export function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section className="relative py-32 md:py-44 px-8 md:px-28 border-t border-border/30 overflow-hidden text-center flex flex-col items-center justify-center min-h-[600px]">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          {...fadeUp(0.1)}
          className="relative w-10 h-10 border-2 border-foreground/60 rounded-full flex items-center justify-center mb-8"
        >
          <div className="w-5 h-5 border border-foreground/60 rounded-full" />
        </motion.div>

        <motion.h2
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-medium mb-6"
        >
          Start Your <span className="font-serif italic font-normal">Journey</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.3)}
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-12"
        >
          Join a community of thinkers, writers, and explorers. Subscribe to our newsletter or start your own platform today.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-lg px-8 py-3.5 font-bold tracking-wide min-w-[200px]"
          >
            Subscribe Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass rounded-lg px-8 py-3.5 font-bold tracking-wide min-w-[200px]"
          >
            Start Writing
          </motion.button>
        </div>
      </div>
    </section>
  );
}
