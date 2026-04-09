/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navbar */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <div className="flex items-center">
          <span className="font-display text-3xl tracking-tight text-white">
            Velorah<sup className="text-xs">®</sup>
          </span>
        </div>

        <div className="hidden items-center gap-10 md:flex">
          {["Home", "Studio", "About", "Journal", "Reach Us"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-white transition-opacity hover:opacity-80"
            >
              {link}
            </a>
          ))}
        </div>

        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]">
          Begin Journey
        </button>
      </nav>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-40 text-center">
        <h1 className="animate-fade-rise font-display max-w-7xl text-5xl leading-[0.95] tracking-[-2.46px] text-white sm:text-7xl md:text-8xl">
          Focus in a Distracted World
        </h1>
        
        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
          We're designing tools for deep thinkers, bold creators, and quiet rebels. 
          Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>

        <button className="liquid-glass animate-fade-rise-delay-2 mt-12 rounded-full px-14 py-5 text-base font-medium text-white transition-transform hover:scale-[1.03]">
          Begin Journey
        </button>
      </section>

      {/* Subtle overlay to ensure text readability if video is too bright */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/20" />
    </main>
  );
}
