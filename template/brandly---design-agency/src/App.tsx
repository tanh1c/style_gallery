/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Facebook, Instagram, Youtube, Frame, Box, Zap, Activity, Shield, Rocket } from 'lucide-react';

export default function App() {
  return (
    <div 
      className="h-screen w-full overflow-hidden flex flex-col bg-[#F5F3EE] relative font-inter"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
      >
        <source 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_102305_3a7cab3b-7a86-46e8-a0f9-6937f035b087.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Header */}
      <header className="relative z-10 px-6 lg:px-12 py-4 lg:py-6 flex-shrink-0">
        <nav className="flex items-center justify-between">
          <div className="text-2xl lg:text-3xl font-bold text-black">
            Brandly
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-base lg:text-lg text-[#080808]">
            <a href="#" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Features</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Pricing</a>
            <a href="#" className="hover:opacity-70 transition-opacity">FAQ</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Help</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 lg:px-6 py-2 text-base lg:text-lg text-[#080808] hover:text-black transition">
              Sign Up
            </button>
            <button className="px-4 lg:px-6 py-2 bg-black text-white text-base lg:text-lg hover:bg-gray-800 transition">
              Log In
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 px-6 lg:px-12 py-6 lg:py-8 flex-1 flex flex-col justify-between">
        
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="flex flex-col items-start">
            <h1 className="font-anton text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-normal text-black leading-[0.80] tracking-tight mb-4 lg:mb-5 uppercase">
              BUILDING <br /> BRANDS THAT <br /> RESONATE
            </h1>
            <p className="text-lg lg:text-xl mb-4 lg:mb-5 max-w-md text-[#080808]">
              Thoughtful design that captivates, empowers, and creates lasting impact.
            </p>
            <button className="flex items-center gap-3 pl-8 pr-1.5 py-1.5 bg-black text-white rounded-full hover:bg-gray-800 transition group">
              <span className="text-lg font-medium">Start today</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
                <ArrowRight size={20} />
              </div>
            </button>
          </div>

          <div className="text-right lg:mt-2">
            <h2 className="font-anton text-3xl lg:text-4xl text-black uppercase mb-2">
              50+ BRANDS LAUNCHED
            </h2>
            <p className="text-[#080808] max-w-xs ml-auto text-sm lg:text-base opacity-80">
              We've helped startups and established enterprises redefine their visual identity and market presence.
            </p>
          </div>
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          <div className="flex flex-col gap-4">
            <p className="text-[#080808] max-w-sm text-sm lg:text-base leading-relaxed">
              Founded by visionary designers, Brandly is a boutique agency dedicated to the art of storytelling through visual excellence. We believe every brand has a soul waiting to be seen.
            </p>
            <div className="flex items-center gap-4 text-black">
              <a href="#" className="hover:opacity-60 transition-opacity"><Facebook size={20} fill="currentColor" /></a>
              <a href="#" className="hover:opacity-60 transition-opacity"><Instagram size={20} /></a>
              <a href="#" className="hover:opacity-60 transition-opacity"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="text-right">
            <h2 className="font-anton text-3xl lg:text-4xl text-black uppercase mb-2">
              5+ YEARS IN THE INDUSTRY
            </h2>
            <p className="text-[#080808] max-w-xs ml-auto text-sm lg:text-base opacity-80">
              Half a decade of pushing boundaries and delivering world-class design solutions across global markets.
            </p>
          </div>
        </div>

        {/* Bottom Row -- Brand Logo Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {[
            { name: 'Frame Blox', icon: <Frame size={24} /> },
            { name: 'Supa Blox', icon: <Box size={24} /> },
            { name: 'Hype Blox', icon: <Zap size={24} /> },
            { name: 'Hype Blox', icon: <Activity size={24} /> },
            { name: 'Ultra Blox', icon: <Shield size={24} /> },
            { name: 'Ship Blox', icon: <Rocket size={24} /> },
          ].map((brand, i) => (
            <div 
              key={i} 
              className="bg-white/90 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center justify-center gap-2 text-black hover:bg-white transition-colors cursor-default"
            >
              <div className="opacity-80">{brand.icon}</div>
              <span className="text-xs font-bold uppercase tracking-wider">{brand.name}</span>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

