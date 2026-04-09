/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Sparkles, 
  Download, 
  Wand2, 
  BookOpen, 
  ArrowRight, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Menu,
  Plus
} from "lucide-react";

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        
        {/* Left Panel */}
        <div className="relative flex w-full flex-col p-4 lg:w-[52%] lg:p-6">
          <div className="liquid-glass-strong absolute inset-4 flex flex-col rounded-3xl p-6 lg:inset-6 lg:p-8">
            
            {/* Nav */}
            <nav className="flex shrink-0 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 overflow-hidden rounded-lg bg-white/10 p-1">
                  <img 
                    src="https://picsum.photos/seed/bloom-logo/32/32" 
                    alt="Logo" 
                    className="h-full w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-2xl font-semibold tracking-tighter">bloom</span>
              </div>
              <button className="liquid-glass flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-transform hover:scale-105 active:scale-95">
                <span>Menu</span>
                <Menu size={16} />
              </button>
            </nav>

            {/* Hero Center */}
            <div className="flex flex-1 flex-col items-center justify-center py-6 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4 h-16 w-16 overflow-hidden rounded-2xl bg-white/5 p-2"
              >
                <img 
                  src="https://picsum.photos/seed/bloom-logo/80/80" 
                  alt="Bloom Logo" 
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl text-4xl font-medium leading-tight tracking-[-0.05em] lg:text-7xl"
              >
                Innovating the <br />
                <span className="font-serif italic text-white/80">spirit of bloom</span> AI
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 flex flex-col items-center gap-6"
              >
                <button className="liquid-glass-strong group flex items-center gap-4 rounded-full py-3 pl-8 pr-3 transition-transform hover:scale-105 active:scale-95">
                  <span className="text-lg font-medium">Explore Now</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white/25">
                    <Download size={20} />
                  </div>
                </button>

                <div className="flex flex-wrap justify-center gap-3">
                  {["Artistic Gallery", "AI Generation", "3D Structures"].map((pill) => (
                    <span key={pill} className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80">
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom Quote */}
            <div className="mt-auto flex flex-col items-center gap-3 pt-4">
              <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">Visionary Design</span>
              <p className="max-w-md text-center text-lg leading-relaxed">
                <span className="font-sans">We imagined a </span>
                <span className="font-serif italic text-white/90">realm with no ending.</span>
              </p>
              <div className="flex w-full max-w-[320px] items-center gap-4">
                <div className="h-[1px] flex-1 bg-white/10" />
                <span className="shrink-0 text-[10px] tracking-[0.2em] text-white/40 uppercase">Marcus Aurelio</span>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="hidden w-full flex-col p-4 lg:flex lg:w-[48%] lg:p-6">
          <div className="flex h-full flex-col gap-6">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <div className="liquid-glass flex items-center gap-4 rounded-full p-1.5 pr-4">
                <div className="flex gap-1">
                  {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-white/20 hover:text-white/80"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
                <ArrowRight size={14} className="text-white/40" />
              </div>

              <div className="flex gap-3">
                <button className="liquid-glass flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-105">
                  <Sparkles size={18} />
                </button>
                <button className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium transition-transform hover:scale-105">
                  Account
                </button>
              </div>
            </div>

            {/* Community Card */}
            <div className="liquid-glass w-64 rounded-3xl p-6 transition-transform hover:scale-[1.02]">
              <h3 className="mb-2 text-sm font-medium">Enter our ecosystem</h3>
              <p className="text-xs leading-relaxed text-white/60">
                Join a global network of designers pushing the boundaries of floral architecture.
              </p>
            </div>

            {/* Bottom Feature Section */}
            <div className="mt-auto flex flex-col gap-4">
              <div className="liquid-glass flex flex-col gap-4 rounded-[2.5rem] p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="liquid-glass flex flex-col gap-4 rounded-3xl p-6 transition-transform hover:scale-[1.02]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Wand2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Processing</h4>
                      <p className="mt-1 text-[10px] text-white/50">Real-time AI synthesis</p>
                    </div>
                  </div>
                  <div className="liquid-glass flex flex-col gap-4 rounded-3xl p-6 transition-transform hover:scale-[1.02]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Growth Archive</h4>
                      <p className="mt-1 text-[10px] text-white/50">Historical plant data</p>
                    </div>
                  </div>
                </div>

                <div className="liquid-glass flex items-center gap-4 rounded-3xl p-4 transition-transform hover:scale-[1.01]">
                  <div className="h-16 w-24 overflow-hidden rounded-2xl bg-white/5">
                    <img 
                      src="https://picsum.photos/seed/flower-sculpt/96/64" 
                      alt="Flower Sculpt" 
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Advanced Plant Sculpting</h4>
                    <p className="text-[10px] text-white/50">Precision 3D modeling for organic structures</p>
                  </div>
                  <button className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110">
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
