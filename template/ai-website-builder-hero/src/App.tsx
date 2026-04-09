/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";

const SunburstIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center">
        <SunburstIcon />
      </div>

      {/* Center Section */}
      <div className="hidden md:flex items-center gap-8">
        <a
          href="#"
          className="font-sans text-sm font-medium text-white/80 hover:text-white flex items-center gap-1 transition-colors"
        >
          Products <ChevronDown size={14} />
        </a>
        <a
          href="#"
          className="font-sans text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          Customer Stories
        </a>
        <a
          href="#"
          className="font-sans text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          Resources
        </a>
        <a
          href="#"
          className="font-sans text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          Pricing
        </a>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <a
          href="#"
          className="hidden sm:block font-sans text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          Book A Demo
        </a>
        <button className="bg-white text-black rounded-full px-5 py-2.5 font-sans font-semibold text-sm hover:bg-white/90 transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc =
    "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8";
  const posterUrl =
    "https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Njg5NzIyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e) => console.log("Auto-play prevented:", e));
      });
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((e) => console.log("Auto-play prevented:", e));
      });
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#000000] text-white overflow-hidden flex items-center justify-center">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-60"
          muted
          loop
          playsInline
          poster={posterUrl}
        />
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 blur-[120px] mix-blend-screen rounded-full" />
      <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] mix-blend-screen rounded-full" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-20 flex flex-col items-center text-center space-y-12">
        {/* Pre-headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-5xl lg:text-[48px] leading-[1.1] text-white"
        >
          Design at the speed of thought
        </motion.h2>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans font-semibold text-6xl sm:text-8xl lg:text-[136px] leading-[0.9] tracking-tighter bg-gradient-to-b from-white via-white to-[#b4c0ff] bg-clip-text text-transparent"
        >
          Build Faster
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-sans text-lg sm:text-[20px] leading-[1.65] text-white max-w-xl"
        >
          Create fully functional, SEO-optimized websites in seconds with our
          advanced AI engine.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Primary Button */}
          <button className="group relative flex items-center pl-6 pr-2 py-2 bg-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <span className="font-sans font-medium text-lg text-[#0a0400]">
              Start Building Free
            </span>
            <div className="ml-4 w-10 h-10 bg-[#3054ff] group-hover:bg-[#2040e0] rounded-full flex items-center justify-center transition-colors">
              <ArrowRight className="text-white" size={20} />
            </div>
          </button>

          {/* Secondary Button */}
          <button className="group flex items-center gap-2 px-4 py-2 rounded-lg text-white/70 hover:text-white backdrop-blur-sm hover:bg-white/5 transition-all">
            <span className="font-sans font-medium">See Examples</span>
            <ArrowRight
              className="transition-transform group-hover:translate-x-1"
              size={20}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
    </main>
  );
}
