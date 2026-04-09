/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Globe, ArrowRight, Instagram, Twitter } from 'lucide-react';

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);
  const fadingOutRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const opacityRef = useRef(0);

  // Keep opacityRef in sync with state
  useEffect(() => {
    opacityRef.current = opacity;
  }, [opacity]);

  const startFade = (targetOpacity: number, duration: number) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const startOpacity = opacityRef.current;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Linear interpolation
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      
      setOpacity(currentOpacity);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remainingTime = video.duration - video.currentTime;
      
      // Trigger fade out when 0.55 seconds remain
      if (remainingTime <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        startFade(0, 500);
      }
    };

    const handleEnded = () => {
      setOpacity(0);
      // Wait 100ms before resetting and playing again
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(err => console.error("Video play failed:", err));
          fadingOutRef.current = false;
          startFade(1, 500);
        }
      }, 100);
    };

    const handleLoadedData = () => {
      // Fade in on initial load
      startFade(1, 500);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadeddata', handleLoadedData);

    // If video is already loaded (e.g. from cache)
    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadeddata', handleLoadedData);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative font-sans text-white selection:bg-white/30">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
        muted
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%] pointer-events-none"
        style={{ opacity }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <nav className="relative z-20 pl-6 pr-6 py-6">
          <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Globe size={24} className="text-white" />
                <span className="text-white font-semibold text-lg tracking-tight">Asme</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Features</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Pricing</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">About</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white text-sm font-medium px-2 hover:opacity-80 transition-opacity cursor-pointer">Sign Up</button>
              <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer">Login</button>
            </div>
          </div>
        </nav>

        {/* Hero Content Area */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Built for the curious
          </h1>
          
          <div className="max-w-xl w-full space-y-4">
            <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 text-base"
              />
              <button className="bg-white rounded-full p-3 text-black hover:bg-white/90 transition-colors cursor-pointer flex items-center justify-center">
                <ArrowRight size={20} />
              </button>
            </div>
            
            <p className="text-white text-sm leading-relaxed px-4 opacity-90">
              Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
            </p>
            
            <div className="flex justify-center pt-4">
              <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer">
                Manifesto
              </button>
            </div>
          </div>
        </main>

        {/* Social Icons Footer */}
        <footer className="relative z-10 flex justify-center gap-4 pb-12">
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all cursor-pointer" aria-label="Instagram">
            <Instagram size={20} />
          </button>
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all cursor-pointer" aria-label="Twitter">
            <Twitter size={20} />
          </button>
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all cursor-pointer" aria-label="Website">
            <Globe size={20} />
          </button>
        </footer>
      </div>
    </div>
  );
}
