import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { Play, ArrowUpRight, ArrowRight } from 'lucide-react';

const VIDEO_STREAMS = [
  'https://stream.mux.com/1RdbcBtpEUK6501pc6yaIvwo9UfSnOg02k1uHxat00xR3w.m3u8',
  'https://stream.mux.com/t1TbTB8M1VYHkhxBuap4A8Vm1x015HTHyuQxqchDBago.m3u8',
  'https://stream.mux.com/6yvj9SR5bjmXq9N3ak7gy427RwUs8R2ZoH4ndA7Q1018.m3u8',
];

export default function App() {
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  useEffect(() => {
    const hlsInstances: Hls[] = [];

    videoRefs.forEach((ref, index) => {
      const video = ref.current;
      if (!video) return;

      const src = VIDEO_STREAMS[index];

      if (Hls.isSupported()) {
        const hls = new Hls({
          capLevelToPlayerSize: true,
          autoStartLoad: true,
        });
        hls.loadSource(src);
        hls.attachMedia(video);
        hlsInstances.push(hls);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = src;
      }
    });

    return () => {
      hlsInstances.forEach((hls) => hls.destroy());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-hero-btn/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-5 lg:px-16 py-6 lg:py-8">
        <div className="flex items-center gap-12">
          <a href="/" className="text-xl font-bold tracking-tight">
            BIONOVA
          </a>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Offerings', 'Pricing', 'Blog'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="/login" className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity">
            Log in
          </a>
          <button className="bg-hero-btn text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-105 transition-all">
            Request a call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-88px)] lg:h-[calc(100vh-104px)] flex flex-col lg:overflow-hidden">
        <div className="px-5 lg:px-16 pb-8 lg:pb-[82px] flex-1 flex flex-col">
          <div className="grid lg:grid-cols-2 items-stretch gap-8 flex-1">
            
            {/* Left Column */}
            <div className="flex flex-col justify-between animate-fade-up">
              <div className="pt-4 lg:pt-12">
                <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.5rem] xl:text-7xl leading-[1.08] tracking-tight font-normal">
                  <span className="flex items-center gap-3 flex-wrap">
                    World-class
                    <div 
                      className="w-20 h-10 sm:w-24 sm:h-12 rounded-full bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: 'url(https://picsum.photos/seed/biotech1/200/100)' }}
                    />
                  </span>
                  consultants that <br />
                  <span className="flex items-center gap-3 flex-wrap">
                    empower
                    <button className="flex items-center gap-2 border-2 border-foreground rounded-full px-4 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base font-medium hover:bg-foreground hover:text-background transition-colors">
                      <Play className="w-4 h-4 fill-current" />
                      How do we work
                    </button>
                  </span>
                  biotech leaders
                </h1>

                <div className="flex items-center gap-6 pt-8 lg:pt-10">
                  <button className="bg-hero-btn text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:brightness-105 transition-all group">
                    Contact us
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <a href="#" className="font-medium underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">
                    Request a call
                  </a>
                </div>
              </div>

              {/* Bottom Group (Desktop Only) */}
              <div className="hidden lg:block space-y-8">
                <p className="text-sm max-w-md leading-relaxed opacity-80">
                  We partner with visionary founders and established enterprises to accelerate 
                  the next generation of life-saving therapeutics and diagnostic platforms.
                </p>
                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 opacity-40 grayscale">
                  {['Headway', 'brightline', 'hazel', 'G&STC'].map((brand) => (
                    <span key={brand} className="text-2xl font-bold tracking-tighter">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 animate-fade-up [animation-delay:150ms]">
              {/* Card 1 */}
              <div className="relative rounded-[1.5rem] lg:rounded-[2.5rem] bg-black overflow-hidden flex-1 min-h-[300px] lg:min-h-0 flex flex-col justify-between p-6 lg:p-10 group">
                <video
                  ref={videoRefs[0]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative z-10">
                  <h2 className="text-2xl lg:text-4xl text-white font-medium max-w-sm leading-tight">
                    If you're ready to build your bioventure, let's get in touch.
                  </h2>
                </div>
                <div className="relative z-10 flex items-end justify-between">
                  <p className="text-white/85 text-sm max-w-[240px] leading-relaxed">
                    Our team of experts is ready to help you navigate the complex landscape of biotech.
                  </p>
                  <button className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-background flex items-center justify-center hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Bottom Row Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 flex-1">
                {/* Card 2 */}
                <div className="relative rounded-[1.5rem] lg:rounded-[2.5rem] bg-black overflow-hidden p-6 lg:p-8 flex flex-col justify-between min-h-[220px] lg:min-h-0">
                  <div className="absolute inset-0 overflow-hidden">
                    <video
                      ref={videoRefs[1]}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover scale-[1.5] opacity-50"
                    />
                  </div>
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                      locations
                    </span>
                    <button className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:scale-110 transition-transform">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg lg:text-2xl text-white font-medium mb-2">
                      United bio-entrepreneurs
                    </h3>
                    <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                      Global network of innovators across 12 countries.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="relative rounded-[1.5rem] lg:rounded-[2.5rem] bg-black overflow-hidden p-6 lg:p-8 flex flex-col justify-between min-h-[220px] lg:min-h-0">
                  <div className="absolute inset-0 overflow-hidden">
                    <video
                      ref={videoRefs[2]}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover scale-[2.8] opacity-50"
                    />
                  </div>
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                      scientists
                    </span>
                  </div>
                  <div className="relative z-10">
                    <div className="text-4xl lg:text-7xl text-white font-bold mb-2">
                      34
                    </div>
                    <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                      PhD-level consultants dedicated to your success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
