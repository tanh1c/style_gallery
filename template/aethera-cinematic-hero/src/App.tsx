/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const updateOpacity = () => {
      if (video.duration) {
        const currentTime = video.currentTime;
        const duration = video.duration;
        const fadeTime = 0.5;

        let opacity = 1;

        // Fade in at start
        if (currentTime < fadeTime) {
          opacity = currentTime / fadeTime;
        } 
        // Fade out at end
        else if (currentTime > duration - fadeTime) {
          opacity = (duration - currentTime) / fadeTime;
        }

        setVideoOpacity(Math.max(0, Math.min(1, opacity)));
      }
      rafId = requestAnimationFrame(updateOpacity);
    };

    rafId = requestAnimationFrame(updateOpacity);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    setVideoOpacity(0);
    setTimeout(() => {
      video.currentTime = 0;
      video.play().catch(err => console.error("Video play failed:", err));
    }, 100);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background Video Layer */}
      <div 
        className="absolute z-0 pointer-events-none"
        style={{ 
          top: '300px', 
          inset: 'auto 0 0 0',
          height: 'calc(100% - 300px)'
        }}
      >
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover transition-opacity duration-100"
          style={{ opacity: videoOpacity }}
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="text-3xl tracking-tight font-display text-foreground">
          Aethera<sup>®</sup>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-foreground transition-colors">Home</a>
          <a href="#" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Studio</a>
          <a href="#" className="text-sm font-medium text-muted hover:text-foreground transition-colors">About</a>
          <a href="#" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Journal</a>
          <a href="#" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Reach Us</a>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          className="bg-foreground text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all"
        >
          Begin Journey
        </motion.button>
      </nav>

      {/* Hero Section */}
      <main 
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: 'calc(8rem - 75px)' }}
      >
        <div className="max-w-7xl">
          <h1 
            className="text-5xl sm:text-7xl md:text-8xl font-display font-normal leading-[0.95] tracking-[-2.46px] text-foreground animate-fade-rise"
          >
            Beyond <span className="text-muted italic">silence,</span> we build <span className="text-muted italic">the eternal.</span>
          </h1>
          
          <p className="text-base sm:text-lg max-w-2xl mx-auto mt-8 leading-relaxed text-muted animate-fade-rise-delay">
            Building platforms for brilliant minds, fearless makers, and thoughtful souls. 
            Through the noise, we craft digital havens for deep work and pure flows.
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            className="bg-foreground text-white px-14 py-5 rounded-full text-base mt-12 font-medium animate-fade-rise-delay-2 transition-all"
          >
            Begin Journey
          </motion.button>
        </div>
      </main>

      {/* Bottom padding as requested */}
      <div className="pb-40" />
    </div>
  );
}
