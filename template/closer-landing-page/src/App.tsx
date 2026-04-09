/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { VideoBackground } from './components/VideoBackground';

export default function App() {
  const navLinks = ["Product", "How it works", "Pricing", "Customers", "Docs"];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white font-manrope">
      {/* Video Background */}
      <VideoBackground src="https://stream.mux.com/02gzwandixH4J534bd00JsCvlFfw6ha101WQ00C9b3sGibM.m3u8" />

      {/* Navigation Bar */}
      <nav className="absolute top-[20px] left-1/2 -translate-x-1/2 w-full max-w-[1110px] px-6 z-50 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-[6px]">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.5" cy="11.5" r="11.5" fill="url(#logo-gradient)" />
            <defs>
              <radialGradient id="logo-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.5 11.5) rotate(90) scale(11.5)">
                <stop stopColor="#368CFB" />
                <stop offset="0.3" stopColor="#5CAEFE" />
                <stop offset="1" stopColor="#FFEB85" />
              </radialGradient>
            </defs>
          </svg>
          <span className="font-instrument-serif text-[26px] text-brand-dark">closer</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-[26px]">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="nav-text-gradient font-medium text-[18px] hover:opacity-100 transition-opacity opacity-70"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Login Button */}
        <motion.button
          whileHover={{ backgroundColor: '#f3f4f6' }}
          className="w-[108px] h-[46px] rounded-[12px] bg-white border border-[#dde2e4] text-brand-dark font-instrument-sans font-medium text-[18px] transition-colors"
        >
          Login
        </motion.button>
      </nav>

      {/* Main Content */}
      <main 
        className="absolute z-10 flex flex-col items-center text-center w-full max-w-[984px] px-6"
        style={{ 
          left: '50%', 
          top: 'calc(50% - 136.5px)', 
          transform: 'translate(-50%, -50%)' 
        }}
      >
        {/* Headline */}
        <h1 className="max-w-[722px] font-instrument-serif text-[48px] md:text-[70px] leading-[1.1] md:leading-[64px] text-brand-dark opacity-90">
          An AI that does your outbound while you{" "}
          <span className="italic text-gradient-radial">
            close deals.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-[24px] md:mt-[32px] max-w-[510px] font-manrope text-[18px] md:text-[20px] leading-normal tracking-[-0.4px] subheadline-gradient opacity-70">
          AI sales agent that finds leads, personalizes outreach, follows up, and books meetings — automatically.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ opacity: 0.9 }}
          className="mt-[32px] md:mt-[48px] w-[152px] h-[52px] rounded-[12px] text-white font-instrument-sans font-medium text-[16px] flex items-center justify-center transition-opacity"
          style={{
            background: 'linear-gradient(to bottom, #444, #292929)',
            border: '1px solid black',
            boxShadow: '0px 4px 4px rgba(0,0,0,0.25), 0px 1px 2px rgba(0,0,0,0.31), inset 0px 2px 1px rgba(255,255,255,0.51), inset 1px 1px 0.25px rgba(255,255,255,0.3)'
          }}
        >
          Get started
        </motion.button>
      </main>
    </div>
  );
}
