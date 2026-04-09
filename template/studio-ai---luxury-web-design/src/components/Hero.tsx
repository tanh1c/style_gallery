import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { BlurText } from "./BlurText";

export function Hero() {
  return (
    <section className="relative overflow-visible h-[1000px] flex flex-col items-center justify-start pt-[150px] text-center px-6">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute top-[20%] left-0 w-full h-auto object-contain z-0 pointer-events-none"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center">
        {/* Badge */}
        <div className="liquid-glass rounded-full px-1 py-1 flex items-center gap-3 mb-8">
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">
            New
          </span>
          <span className="text-white/90 text-xs font-medium pr-3">
            Introducing AI-powered web design.
          </span>
        </div>

        {/* Heading */}
        <BlurText
          text="The Website Your Brand Deserves"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] tracking-[-4px] mb-8 justify-center"
          delay={100}
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm md:text-base text-white font-body font-light leading-tight max-w-lg mb-10"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-white font-medium group hover:scale-105 transition-transform">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <Play className="w-4 h-4 text-black fill-current" />
            </div>
            Watch the Film
          </button>
        </motion.div>
      </div>

      {/* Partners Bar */}
      <div className="mt-auto pb-12 pt-16 w-full max-w-7xl relative z-10">
        <div className="flex flex-col items-center gap-8">
          <div className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/60 font-medium">
            Trusted by the teams behind
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((partner) => (
              <span
                key={partner}
                className="text-2xl md:text-3xl font-heading italic text-white/40 hover:text-white transition-colors cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
