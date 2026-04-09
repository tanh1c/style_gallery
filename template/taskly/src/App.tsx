/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white font-inter">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-[10%] -left-[10%] h-[600px] w-[600px] rounded-full blur-[120px] opacity-40"
          style={{ background: 'radial-gradient(circle, #60B1FF 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[5%] left-[5%] h-[400px] w-[400px] rounded-full blur-[100px] opacity-30"
          style={{ background: 'radial-gradient(circle, #319AFF 0%, transparent 70%)' }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-[30px] left-1/2 z-50 -translate-x-1/2">
        <div 
          className="flex items-center gap-8 px-6 py-3 rounded-[16px] backdrop-blur-[50px] bg-white/30 border border-black/10 shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.25)]"
        >
          <div className="text-xl font-fustat font-bold tracking-tight">Taskly</div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-black transition-colors">Home</a>
            <a href="#" className="hover:text-black transition-colors">Features</a>
            <a href="#" className="hover:text-black transition-colors">Company</a>
            <a href="#" className="hover:text-black transition-colors">Pricing</a>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/40 backdrop-blur-md border border-black/5 text-sm font-semibold hover:bg-white/60 transition-all group">
            SignUp
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 mx-auto max-w-[1600px] px-6 pt-32 pb-20 md:pt-48 lg:pt-56">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-0">
          
          {/* Hero Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 max-w-2xl"
          >
            {/* Social Proof Badge */}
            <div className="flex items-center gap-3 w-fit px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF801E] text-[#FF801E]" />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-600">
                Rated <span className="text-slate-900 font-bold">4.9/5</span> by 2700+ customers
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-fustat font-bold text-5xl md:text-7xl lg:text-[75px] leading-[1.05] tracking-[-2px] text-slate-900">
              Work smarter,<br />achieve faster
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed tracking-[-1px]">
              Effortlessly manage your projects, collaborate with your team, and achieve your goals with our intuitive task management tool.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center gap-3 w-fit px-8 py-4 rounded-[16px] bg-[#0084FF]/80 backdrop-blur-[2px] text-white font-semibold shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] hover:bg-[#0084FF]/90 transition-colors group"
            >
              Get Started Now
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#0084FF]">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          </motion.div>

          {/* Hero Right - Glassy Orb */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1.25, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[600px] aspect-square">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-contain mix-blend-screen"
                style={{ 
                  filter: 'hue-rotate(-55deg) saturate(250%) brightness(1.2) contrast(1.1)' 
                }}
              >
                <source src="https://future.co/images/homepage/glassy-orb/orb-purple.webm" type="video/webm" />
              </video>
            </div>
          </motion.div>
        </div>

        {/* Footer Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 md:mt-48 flex flex-col items-center gap-12"
        >
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
            Trusted by Top-tier product companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-[100px] gap-y-12 opacity-40 grayscale">
            <LogoPlaceholder name="Acme Corp" />
            <LogoPlaceholder name="GlobalTech" />
            <LogoPlaceholder name="Vertex" />
            <LogoPlaceholder name="Pulse" />
            <LogoPlaceholder name="Nexus" />
          </div>
        </motion.div>
      </main>
    </div>
  );
}

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded bg-slate-400" />
      <span className="font-fustat font-bold text-xl tracking-tight">{name}</span>
    </div>
  );
}

