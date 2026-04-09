/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(75);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const menuLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const brands = [
    "Opensense",
    "DKNY",
    "Under Armour",
    "LIU·JO",
    "ATOM",
    "ECCO",
    "ORUM",
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-background text-foreground selection:bg-foreground selection:text-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-[37%_center]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-10 py-8">
        {/* Left: Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="group flex items-center gap-4 px-6 py-3 rounded-full border border-foreground/30 hover:border-foreground/60 transition-colors cursor-pointer"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Menu
          </span>
          <div className="flex flex-col gap-[4px]">
            <span className="w-7 h-[2px] bg-foreground transition-transform group-hover:translate-x-1" />
            <span className="w-7 h-[2px] bg-foreground transition-transform group-hover:-translate-x-1" />
          </div>
        </button>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl font-bold tracking-wider">EVR</h1>
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-3 rounded-full border border-foreground/30 text-xs font-medium tracking-widest uppercase hover:bg-foreground/10 transition-colors cursor-pointer">
            About Us
          </button>
          <button className="px-6 py-3 rounded-full border border-foreground/30 text-xs font-medium tracking-widest uppercase hover:bg-foreground/10 transition-colors cursor-pointer">
            Services
          </button>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[hsl(220,70%,78%)] to-[hsl(40,80%,82%)] text-black text-xs font-bold tracking-widest uppercase hover:scale-105 transition-transform cursor-pointer">
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col justify-start pt-6 px-6 pb-2 md:justify-end md:pt-0 md:px-10 md:pb-16">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <ArrowRight className="w-4 h-4" />
          <span className="text-xs font-medium tracking-[0.25em] uppercase">
            Evolve Responsible Ventures
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Heading */}
          <div className="max-w-4xl">
            <h1 className="text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em]">
              <span className="block font-light">Navigating the</span>
              <span className="block font-light">route to impactful</span>
              <span className="block font-display italic">regeneration</span>
            </h1>
          </div>

          {/* Stats/Progress Circle */}
          <div className="lg:max-w-xs w-full mt-8 md:mt-0 lg:pb-4">
            <div className="flex flex-col gap-6">
              <div className="relative w-[120px] h-[120px]">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-foreground/15"
                  />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="339.292"
                    initial={{ strokeDashoffset: 339.292 }}
                    animate={{ strokeDashoffset: 339.292 * (1 - progress / 100) }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    strokeLinecap="round"
                    className="text-foreground"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-medium">{progress}%</span>
                </div>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed max-w-[280px]">
                Guiding organizations toward lasting environmental performance
                through actionable strategy and measurable outcomes
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Clients/Partners Marquee Bar */}
      <div className="relative z-10 mt-auto">
        <div className="px-6 md:px-10 py-4 flex justify-between items-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase">
            Our Partners
          </span>
          <span className="hidden md:block text-xs font-medium tracking-[0.2em] uppercase opacity-60">
            Backed by 30+ global brands
          </span>
        </div>
        <div className="border-t border-foreground/10 overflow-hidden py-8">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-foreground/50 text-xl font-medium tracking-wide mx-12"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 80px 40px)" }}
            animate={{ clipPath: "circle(150% at 80px 40px)" }}
            exit={{ clipPath: "circle(0% at 80px 40px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-foreground text-background flex flex-col"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-6 md:px-10 py-8">
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 px-6 py-3 rounded-full border border-background/30 hover:border-background/60 transition-colors cursor-pointer"
              >
                <span className="text-xs font-medium tracking-widest uppercase">
                  Close
                </span>
                <X className="w-5 h-5" />
              </button>

              <div className="absolute left-1/2 -translate-x-1/2">
                <h1 className="text-2xl font-bold tracking-wider">EVR</h1>
              </div>

              <div className="hidden md:block w-[100px]" />
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-20">
              <div className="flex flex-col">
                {menuLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.08,
                      duration: 0.8,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className="group flex items-center justify-between py-4 md:py-6 border-b border-background/10 transition-all duration-300"
                  >
                    <span className="text-[clamp(2rem,5vw,4.5rem)] font-light -tracking-[0.06em] group-hover:translate-x-[4px] transition-transform duration-300">
                      {link.name}
                    </span>
                    <ArrowRight className="w-8 h-8 md:w-12 md:h-12 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-[2px] transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Menu Footer */}
            <div className="px-6 md:px-10 py-10 flex justify-between items-center border-t border-background/10">
              <span className="text-xs tracking-[0.2em] uppercase opacity-40">
                Evolve Responsible Ventures
              </span>
              <span className="text-xs tracking-[0.2em] uppercase opacity-40">
                © 2026
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
