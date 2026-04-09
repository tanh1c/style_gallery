/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Twitter, Github, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const TextureOverlay = () => (
  <div 
    className="fixed inset-0 z-50 pointer-events-none opacity-60 mix-blend-lighten bg-cover"
    style={{ 
      backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` 
    }}
  />
);

const Navbar = () => (
  <nav className="hidden lg:block fixed top-8 left-1/2 -translate-x-1/2 z-40">
    <div className="liquid-glass rounded-[28px] px-[52px] py-[24px] flex items-center gap-12">
      {['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase().replace(' ', '-')}`}
          className="font-grotesk text-[13px] uppercase tracking-wider transition-colors hover:text-neon"
        >
          {item}
        </a>
      ))}
    </div>
  </nav>
);

const SocialIcons = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col gap-4 ${className}`}>
    {[Mail, Twitter, Github].map((Icon, i) => (
      <button 
        key={i}
        className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center transition-colors hover:bg-white/10"
      >
        <Icon className="w-5 h-5" />
      </button>
    ))}
  </div>
);

const HeroSection = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="relative h-screen w-full overflow-hidden rounded-b-[32px]"
  >
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" type="video/mp4" />
    </video>
    
    <div className="relative z-10 max-w-[1831px] mx-auto h-full px-6 md:px-12 flex flex-col">
      <header className="pt-8 flex justify-between items-center">
        <div className="font-grotesk text-base uppercase tracking-widest">Orbis.Nft</div>
        <div className="lg:hidden">
          {/* Mobile menu could go here, but prompt says nav is hidden on mobile */}
        </div>
      </header>

      <div className="flex-1 flex flex-col justify-center lg:ml-32">
        <div className="relative max-w-[780px] -translate-y-4 md:-translate-y-6">
          <h1 className="font-grotesk text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase leading-[1.05] md:leading-none">
            Beyond earth<br />
            and ( its ) familiar boundaries
          </h1>
          <span className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 font-condiment text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-neon -rotate-1 mix-blend-exclusion opacity-90 whitespace-nowrap">
            Nft collection
          </span>
        </div>

        {/* Mobile Social Icons */}
        <div className="mt-12 lg:hidden flex justify-center gap-4">
          {[Mail, Twitter, Github].map((Icon, i) => (
            <button 
              key={i}
              className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center"
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Social Icons */}
      <div className="hidden lg:block absolute top-8 right-12">
        <SocialIcons />
      </div>
    </div>
  </motion.section>
);

const AboutSection = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="relative h-screen w-full overflow-hidden"
  >
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4" type="video/mp4" />
    </video>

    <div className="relative z-10 max-w-[1831px] mx-auto h-full px-6 md:px-12 py-16 md:py-24 flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="relative">
          <h2 className="font-grotesk text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] uppercase leading-tight">
            Hello!<br />
            I'm orbis
          </h2>
          <span className="absolute -right-8 -bottom-4 font-condiment text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] text-neon -rotate-1 mix-blend-exclusion whitespace-nowrap">
            Orbis
          </span>
        </div>
        <p className="font-mono text-sm md:text-base uppercase max-w-[266px] leading-relaxed">
          A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
        </p>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-sm md:text-base uppercase opacity-10 lg:text-cream text-background">
            A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
          </p>
          <p className="font-mono text-sm md:text-base uppercase opacity-10 lg:text-cream text-background">
            A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
          </p>
        </div>
        <div className="hidden lg:flex flex-col gap-4">
          <p className="font-mono text-sm md:text-base uppercase opacity-10">
            A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
          </p>
          <p className="font-mono text-sm md:text-base uppercase opacity-10">
            A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
          </p>
        </div>
      </div>
    </div>
  </motion.section>
);

const NFTCard = ({ videoUrl, score }: { videoUrl: string, score: string }) => (
  <div className="liquid-glass rounded-[32px] p-[18px] transition-colors hover:bg-white/10 group">
    <div className="relative pb-[100%] rounded-[24px] overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
    <div className="mt-4 liquid-glass rounded-[20px] px-5 py-4 flex items-center justify-between">
      <div>
        <div className="text-[11px] opacity-70 uppercase">Rarity Score:</div>
        <div className="text-base font-grotesk">{score}</div>
      </div>
      <button className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 transition-transform hover:scale-110">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const CollectionSection = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="bg-background py-24"
  >
    <div className="max-w-[1831px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="font-grotesk text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] uppercase leading-none">
            Collection of<br />
            <span className="flex items-center ml-12 md:ml-24 lg:ml-32">
              <span className="font-condiment text-neon lowercase mr-4">Space</span>
              objects
            </span>
          </h2>
        </div>
        <div className="flex flex-col items-end">
          <button className="group">
            <div className="flex items-baseline gap-2">
              <span className="font-grotesk text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px]">SEE</span>
              <div className="flex flex-col leading-none">
                <span className="font-grotesk text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px]">ALL</span>
                <span className="font-grotesk text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px]">CREATORS</span>
              </div>
            </div>
            <div className="h-[6px] md:h-[8px] lg:h-[10px] bg-neon w-full mt-2" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NFTCard 
          videoUrl="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4" 
          score="8.7/10" 
        />
        <NFTCard 
          videoUrl="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4" 
          score="9/10" 
        />
        <NFTCard 
          videoUrl="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4" 
          score="8.2/10" 
        />
      </div>
    </div>
  </motion.section>
);

const CTASection = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2 }}
    className="relative w-full"
  >
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="w-full h-auto block"
    >
      <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" type="video/mp4" />
    </video>

    <div className="absolute inset-0 flex items-center justify-end lg:pr-[20%] lg:pl-[15%]">
      <div className="relative text-right">
        <span className="absolute -top-8 -left-8 md:-top-16 md:-left-16 font-condiment text-[17px] sm:text-[34px] md:text-[51px] lg:text-[68px] text-neon mix-blend-exclusion whitespace-nowrap">
          Go beyond
        </span>
        <h2 className="font-grotesk text-[16px] sm:text-[30px] md:text-[45px] lg:text-[60px] uppercase leading-tight">
          <div className="mb-4 md:mb-8 lg:mb-12">JOIN US.</div>
          REVEAL WHAT'S HIDDEN.<br />
          DEFINE WHAT'S NEXT.<br />
          FOLLOW THE SIGNAL.
        </h2>
      </div>
    </div>

    {/* Bottom Left Socials */}
    <div className="absolute left-[8%] bottom-[12%] md:bottom-[16%] lg:bottom-[20%] z-20">
      <div className="liquid-glass rounded-[1rem] md:rounded-[1.25rem] flex flex-col">
        {[Mail, Twitter, Github].map((Icon, i) => (
          <button 
            key={i}
            className={`
              w-14 h-14 md:w-16 md:h-16
              flex items-center justify-center transition-colors hover:bg-white/10
              ${i !== 2 ? 'border-b border-white/10' : ''}
            `}
          >
            <Icon className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        ))}
      </div>
    </div>
  </motion.section>
);

export default function App() {
  return (
    <main className="relative bg-background overflow-x-hidden">
      <TextureOverlay />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <CTASection />
    </main>
  );
}
