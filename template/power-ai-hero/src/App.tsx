/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const LOGOS = [
  { name: "Vortex", initial: "V" },
  { name: "Nimbus", initial: "N" },
  { name: "Prysma", initial: "P" },
  { name: "Cirrus", initial: "C" },
  { name: "Kynder", initial: "K" },
  { name: "Halcyn", initial: "H" },
];

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let startTime: number | null = null;
    let fadeOutStartTime: number | null = null;
    let isFadingOut = false;
    let animationFrameId: number;

    const FADE_DURATION = 500; // 0.5s
    const WAIT_DURATION = 100; // 100ms

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;

      if (!isFadingOut) {
        // Fade In
        const progress = Math.min(elapsed / FADE_DURATION, 1);
        setVideoOpacity(progress);

        // Check for fade out start (0.5s before end)
        if (video.duration > 0 && video.currentTime >= video.duration - 0.5) {
          isFadingOut = true;
          fadeOutStartTime = timestamp;
        }
      } else if (fadeOutStartTime) {
        // Fade Out
        const fadeOutElapsed = timestamp - fadeOutStartTime;
        const progress = 1 - Math.min(fadeOutElapsed / FADE_DURATION, 1);
        setVideoOpacity(progress);

        if (progress === 0) {
          // Reset and wait
          video.pause();
          video.currentTime = 0;
          isFadingOut = false;
          startTime = null;
          fadeOutStartTime = null;
          
          setTimeout(() => {
            video.play().catch(() => {});
            startTime = performance.now();
            requestAnimationFrame(animate);
          }, WAIT_DURATION);
          return;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    video.play().catch(() => {});
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-hidden selection:bg-purple-500/30">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        muted
        playsInline
        style={{ opacity: videoOpacity }}
      />

      {/* Blurred Overlay Shape */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[984px] h-[527px] opacity-90 bg-gray-950 blur-[82px] pointer-events-none z-0"
      />

      {/* Hero Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="w-full">
          <div className="py-5 px-8 flex flex-row justify-between items-center">
            {/* Left: Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] via-[#a855f7] to-[#fcd34d] flex items-center justify-center shadow-lg shadow-purple-500/20">
                <span className="text-background font-bold text-sm">P</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-foreground">
                Power AI
              </span>
            </div>

            {/* Center: Nav Items */}
            <div className="hidden md:flex items-center gap-8">
              <button className="flex items-center gap-1 text-foreground/90 hover:text-foreground transition-colors">
                Features <ChevronDown size={14} />
              </button>
              <button className="text-foreground/90 hover:text-foreground transition-colors">
                Solutions
              </button>
              <button className="text-foreground/90 hover:text-foreground transition-colors">
                Plans
              </button>
              <button className="flex items-center gap-1 text-foreground/90 hover:text-foreground transition-colors">
                Learning <ChevronDown size={14} />
              </button>
            </div>

            {/* Right: Sign Up */}
            <div>
              <button className="bg-foreground text-background rounded-full px-4 py-2 font-medium hover:opacity-90 transition-opacity">
                Sign Up
              </button>
            </div>
          </div>
          {/* Divider */}
          <div className="mt-[3px] h-[1px] w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
        </nav>

        {/* Hero Content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
          <h1 className="font-display text-[80px] md:text-[160px] lg:text-[220px] font-normal leading-[1.02] tracking-[-0.024em] text-foreground">
            Power{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)" }}
            >
              AI
            </span>
          </h1>
          
          <p className="text-hero-sub text-lg leading-8 max-w-md mt-[9px] opacity-80 font-sans">
            The most powerful AI ever deployed <br /> in talent acquisition
          </p>

          <button className="mt-[25px] bg-foreground text-background px-[29px] py-[24px] rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
            Schedule a Consult
          </button>
        </main>

        {/* Logo Marquee */}
        <footer className="pb-10 w-full">
          <div className="max-w-5xl mx-auto flex items-center gap-12 px-8">
            <div className="shrink-0 text-foreground/50 text-sm leading-tight">
              Relied on by brands <br /> across the globe
            </div>
            
            <div className="flex-1 overflow-hidden relative">
              <motion.div 
                className="flex gap-16 items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  duration: 20, 
                  ease: "linear", 
                  repeat: Infinity 
                }}
              >
                {[...LOGOS, ...LOGOS].map((logo, i) => (
                  <div key={i} className="flex items-center gap-3 shrink-0">
                    <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold">
                      {logo.initial}
                    </div>
                    <span className="text-base font-semibold text-foreground">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
