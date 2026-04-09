/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sun, Box, Star, Feather, Sparkles } from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const NAV_LINKS = ["Vault", "Send", "Receive", "Trade"];

const LOGOS = [
  { name: "Nebulon", icon: Sun },
  { name: "Prismify", icon: Box },
  { name: "Nova Labs", icon: Star },
  { name: "Zephyr", icon: Feather },
  { name: "Ignite", icon: Sparkles },
];

function LogoSVG() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 10L14 30L20 16L26 30L32 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlowButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="relative px-10 py-4 rounded-[43px] bg-accent text-accent-foreground text-xl font-medium overflow-hidden transition-transform cursor-pointer"
      style={{
        boxShadow: "0px 4px 95px 4px hsl(45 70% 50% / 0.6)",
      }}
    >
      {/* Internal blurred blob */}
      <span 
        className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-48 h-10 rounded-full blur-xl pointer-events-none"
        style={{ backgroundColor: "hsl(45 60% 95%)" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

function LogoMarquee() {
  return (
    <div className="mt-auto w-full md:w-1/2 lg:w-1/2 overflow-hidden">
      <p className="text-foreground/50 text-base mb-5 text-left">Trusted by top builders</p>
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div key={index} className="flex items-center gap-3 mx-6">
              <logo.icon className="w-6 h-6 text-foreground/60" />
              <span className="text-foreground/60 text-2xl tracking-wide whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-visible selection:bg-accent selection:text-accent-foreground">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_094440_a3592600-bd1e-49e5-9bce-a73662061d83.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="flex items-center px-8 py-6 md:px-16 gap-8">
          <div className="text-foreground">
            <LogoSVG />
          </div>
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-base tracking-wide text-foreground hover:opacity-80 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>

        {/* Main Area */}
        <main className="flex-1 flex flex-col justify-between px-8 md:px-16 pb-10">
          <div className="my-auto max-w-3xl">
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.95] tracking-tight text-foreground mb-12">
              Own the future of <br />
              your{" "}
              <span className="relative inline-block overflow-visible">
                assets.
                {/* Neon Glow Effect Spans */}
                <span
                  className="absolute inset-0 text-white blur-sm pointer-events-none"
                  style={{
                    color: "hsl(0 0% 100%)",
                    maskImage: "linear-gradient(to bottom left, white 20%, transparent 50%)",
                    WebkitMaskImage: "linear-gradient(to bottom left, white 20%, transparent 50%)",
                  }}
                  aria-hidden="true"
                >
                  assets.
                </span>
                <span
                  className="absolute inset-0 text-white blur-md opacity-60 pointer-events-none"
                  style={{
                    color: "hsl(0 0% 100%)",
                    maskImage: "linear-gradient(to bottom left, white 25%, transparent 55%)",
                    WebkitMaskImage: "linear-gradient(to bottom left, white 25%, transparent 55%)",
                  }}
                  aria-hidden="true"
                >
                  assets.
                </span>
              </span>
            </h1>

            <GlowButton>Launch your orbit</GlowButton>
          </div>

          <LogoMarquee />
        </main>
      </div>
    </div>
  );
}
