/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#000000] font-manrope text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[120%] w-[120%] min-w-[120%] min-h-[120%] object-cover object-bottom"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260215_121759_424f8e9c-d8bd-4974-9567-52709dfb6842.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Blurred Background Element */}
      <div 
        className="absolute left-1/2 top-[215px] z-1 h-[384px] w-[801px] -translate-x-1/2 rounded-full bg-[#000000] blur-[77.5px]"
      />

      {/* Content Layer */}
      <div className="relative z-2 flex flex-col items-center">
        {/* Navbar */}
        <nav className="flex h-[102px] w-full max-w-[1440px] items-center justify-between px-[120px] py-4">
          <div className="flex items-center gap-[80px]">
            {/* Logo */}
            <div className="flex h-[25px] w-[134px] items-center">
              <svg width="134" height="25" viewBox="0 0 134 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="4" width="12" height="17" rx="2" fill="white" />
                <rect x="16" y="4" width="12" height="17" rx="2" fill="white" fillOpacity="0.5" />
                <text x="36" y="19" fill="white" style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: '16px', letterSpacing: '0.02em' }}>LOGOIPSUM</text>
              </svg>
            </div>

            {/* Nav Links */}
            <div className="flex items-center gap-[10px]">
              {["Home", "Services", "Reviews", "Contact us"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="flex items-center gap-[3px] px-[10px] py-1 text-[14px] font-medium leading-[22px] text-white transition-opacity hover:opacity-70"
                >
                  {item}
                  {item === "Services" && <ChevronDown size={24} className="text-white" />}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-3">
            <button className="rounded-[8px] border border-[#d4d4d4] bg-white px-4 py-2 text-[14px] font-semibold leading-[22px] text-[#171717] transition-all hover:bg-gray-100">
              Sign In
            </button>
            <button className="rounded-[8px] bg-[#7b39fc] px-4 py-2 text-[14px] font-semibold leading-[22px] text-[#fafafa] shadow-[0px_4px_16px_rgba(23,23,23,0.04)] transition-all hover:bg-[#6a2ee0]">
              Get Started
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <section className="mt-[162px] flex max-w-[871px] flex-col items-center text-center">
          <div className="flex flex-col items-center gap-[10px]">
            <h1 className="flex flex-col">
              <span className="font-inter text-[76px] font-medium leading-[1.15] tracking-[-2px] text-white">
                Automate repetitive.
              </span>
              <span className="font-instrument text-[76px] italic leading-[1.15] tracking-[-2px] text-white">
                Focus on growth.
              </span>
            </h1>
            <p className="mt-[10px] max-w-[613px] font-manrope text-[18px] leading-[26px] text-[#f6f7f9] opacity-90">
              The next-generation AI agent platform that handles lead generation, customer support, and data entry while you build.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex items-center gap-[22px]">
            <button className="rounded-[10px] bg-[#7b39fc] px-6 py-[14px] font-cabin text-[16px] font-medium leading-[1.7] text-white transition-all hover:bg-[#6a2ee0]">
              Get Started Free
            </button>
            <button className="rounded-[10px] bg-[#2b2344] px-6 py-[14px] font-cabin text-[16px] font-medium leading-[1.7] text-[#f6f7f9] transition-all hover:bg-[#362c55]">
              Watch 2min Demo
            </button>
          </div>
        </section>

        {/* Partners Marquee */}
        <div className="mt-[120px] w-full overflow-hidden py-10">
          <p className="mb-10 text-center font-manrope text-[14px] font-medium uppercase tracking-[0.2em] text-[#f6f7f9] opacity-50">
            Trusted by industry leaders
          </p>
          <div className="relative flex w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-black after:to-transparent">
            <motion.div
              className="flex gap-[80px] whitespace-nowrap"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-[80px] items-center">
                  {["ACME CORP", "GLOBEX", "SOYLENT CORP", "INITECH", "UMBRELLA", "Hooli", "Pied Piper"].map((partner) => (
                    <span
                      key={partner}
                      className="font-inter text-[24px] font-bold tracking-tighter text-white opacity-40 transition-opacity hover:opacity-100"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
