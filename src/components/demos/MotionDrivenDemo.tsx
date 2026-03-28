import { Activity,ArrowUpRight,ChevronRight,Globe,Layers,MoveRight,PlayCircle,Satellite,Shield,Zap } from "lucide-react";
import React,{ useState } from "react";

export const MotionDrivenDemo: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    return (
        <div className="flex-1 bg-black overflow-y-auto text-white font-sans selection:bg-[#D9F99D] selection:text-black pb-32 relative text-left scroll-smooth" onScroll={(e: any) => setScrolled(e.target.scrollTop > 50)}>

            {/* Dynamic Grid Background - Moving */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-grid-drift" />
            </div>

            <div className="max-w-[1440px] mx-auto relative z-10 px-8 lg:px-16 py-4 space-y-16">

                {/* Kinetic Header */}
                <header className={`h-20 flex items-center justify-between px-10 border border-white/10 rounded-2xl sticky top-4 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl scale-95 shadow-[0_30px_60px_rgba(0,0,0,0.8)]' : 'bg-transparent'}`}>
                    <div className="flex items-center gap-6 group cursor-pointer overflow-hidden">
                        <div className="w-10 h-10 bg-[#D9F99D] rounded-none flex items-center justify-center transform group-hover:rotate-[360deg] transition-transform duration-700">
                            <Zap className="w-5 h-5 text-black fill-black" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-xl tracking-tighter uppercase italic translate-x-2 group-hover:translate-x-0 transition-transform">ViCode.Motion</span>
                            <div className="h-0.5 w-full bg-[#D9F99D] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </div>
                    </div>
                    <nav className="hidden lg:flex items-center gap-10 font-black text-[9px] uppercase tracking-[0.5em] text-white/40">
                        {["Velocity", "Momentum", "Sync"].map(item => (
                            <button key={item} className="hover:text-[#D9F99D] transition-colors relative group py-2">
                                {item}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D9F99D] scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                            </button>
                        ))}
                    </nav>
                    <button className="bg-[#D9F99D] text-black px-10 py-3 font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                        Initialize_Hub
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </header>

                {/* Kinetic Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-0">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-6 py-2 group hover:border-[#D9F99D]/50 transition-colors">
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#D9F99D] animate-pulse">V-Flux_Engine.active</span>
                            <ChevronRight className="w-4 h-4 text-white/20 group-hover:translate-x-1 transition-transform" />
                        </div>

                        <div className="relative">
                            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tighter uppercase italic stagger-text whitespace-nowrap">
                                <div className="animate-slide-in-left">Speed.</div>
                                <div className="text-[#D9F99D] animate-slide-in-right">Performance.</div>
                                <div className="animate-slide-in-left">Impact.</div>
                            </h1>
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-24 h-24 border-2 border-[#D9F99D] rounded-full animate-ping opacity-20 pointer-events-none" />
                        </div>

                        <p className="text-lg text-white/50 leading-tight max-w-md font-bold italic tracking-tighter drop-shadow-md border-l-4 border-[#D9F99D] pl-6">
                            Engineering for a world that never stops moving. Infrastructure that accelerates with every node. Global by design, kinetic by nature.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 pt-2">
                            <button className="h-20 px-12 bg-white text-black font-black uppercase tracking-[0.3em] text-base hover:bg-[#D9F99D] hover:-translate-y-2 hover:translate-x-2 transition-all shadow-[8px_8px_0_#D9F99D] active:translate-x-0 active:translate-y-0 active:shadow-none flex items-center justify-center gap-4">
                                Launch_Project
                                <MoveRight className="w-6 h-6" />
                            </button>
                            <button className="h-20 px-12 border-2 border-white text-white font-black uppercase tracking-[0.3em] text-base hover:bg-white hover:text-black transition-all flex items-center gap-3">
                                <PlayCircle className="w-6 h-6" />
                                Demo
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Asset Frame - Motion Driven Illustration */}
                        <div className="w-full aspect-video bg-white/[0.03] border-4 border-white p-2 overflow-hidden relative group max-w-2xl mx-auto">
                            <img
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=3270"
                                alt="ViCode Motion Illustration"
                                className="w-full h-full object-cover grayscale brightness-125 contrast-125 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-[4000ms]"
                            />

                            {/* Motion Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-[#D9F99D]/20 mix-blend-overlay" />
                            <div className="absolute top-0 right-0 p-10">
                                <div className="text-8xl font-black text-[#D9F99D] opacity-40 italic drop-shadow-2xl">01</div>
                            </div>
                            <div className="absolute bottom-10 left-10">
                                <div className="bg-black text-white px-8 py-4 font-black text-xl uppercase tracking-tighter shadow-[5px_5px_0_#D9F99D]">V-Core_Eng</div>
                            </div>
                        </div>

                        {/* Parallax blobs */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#D9F99D] animate-bounce opacity-10" />
                        <div className="absolute -bottom-20 -left-20 w-48 h-48 border border-white animate-spin-slow opacity-20" />
                    </div>
                </section>

                {/* Marquee Text - Kinetic Brand */}
                <section className="py-20 border-y-2 border-white/10 overflow-hidden bg-[#D9F99D]/5 -mx-16 px-16">
                    <div className="flex whitespace-nowrap animate-marquee gap-24 items-center">
                        {["GLOBAL DEPLOYMENT", "ZERO LATENCY", "KINETIC INFRASTRUCTURE", "KINETIC SCALE", "VELOCITY DRIVEN"].map(m => (
                            <div key={m} className="flex items-center gap-12">
                                <span className="text-6xl lg:text-8xl font-black italic uppercase text-white tracking-tighter opacity-10">{m}</span>
                                <Zap className="w-12 h-12 text-[#D9F99D]" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Feature Grid - Animated Entrance Cards */}
                <section className="space-y-20">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="h-2 w-48 bg-[#D9F99D] shadow-[0_0_20px_#D9F99D]" />
                        <h2 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter">Engine.Flux</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {[
                            { icon: Zap, title: "Velocity One", desc: "Instant sync across global nodes with zero friction logic flow." },
                            { icon: Shield, title: "Hard Shield", desc: "Military-grade protection for your most sensitive data packets." },
                            { icon: Globe, title: "Pure Global", desc: "Deploy to 188 countries in under 0.1 seconds of execution." },
                            { icon: Activity, title: "Pulse X", desc: "Real-time visual telemetry that breathes with your traffic flow." },
                            { icon: Layers, title: "L-Stacks", desc: "Infinite vertical scaling without the horizontal overhead." },
                            { icon: Satellite, title: "V-Broadcast", desc: "The planetary scale infrastructure group. Built for scale." }
                        ].map((f, i) => (
                            <div key={i} className="group bg-white/5 p-16 border-t-8 border-white/10 hover:border-[#D9F99D] hover:bg-white/10 transition-all duration-500 relative overflow-hidden text-left cursor-pointer">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D9F99D] opacity-0 group-hover:opacity-10 transition-opacity blur-[50px]" />
                                <div className="w-20 h-20 bg-white text-black flex items-center justify-center mb-12 shadow-[8px_8px_0_#D9F99D] group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2 transition-all">
                                    <f.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-black tracking-tighter uppercase italic mb-6">{f.title}</h3>
                                <p className="text-lg text-white/40 leading-relaxed font-bold italic tracking-tight mb-8">{f.desc}</p>
                                <div className="flex items-center gap-4 text-[#D9F99D] font-black uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 transition-all">
                                    Learn_More
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Speed Data Console */}
                <section className="bg-white text-black p-16 lg:p-32 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 text-[15rem] font-black italic uppercase text-black/5 leading-none translate-x-20 -translate-y-20 select-none">KINETIC</div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 items-center">
                        <div className="space-y-10">
                            <h2 className="text-7xl lg:text-9xl font-black tracking-tighter italic uppercase leading-[0.85]">DRIVEN.<br />SCALE.</h2>
                            <p className="text-2xl font-bold uppercase leading-relaxed max-w-sm">Software infrastructure that moves at the speed of your imagination. Accelerate now.</p>
                        </div>
                        <div className="space-y-12">
                            <div className="bg-black text-white p-12 shadow-[20px_20px_0_#D9F99D] border-4 border-black group-hover:shadow-none group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all transition-duration-500">
                                <div className="space-y-8 font-mono">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-6">
                                        <span className="text-[#D9F99D] font-bold tracking-widest uppercase text-xs">// V-System_Terminal</span>
                                        <div className="flex gap-2">
                                            <div className="w-2 h-2 bg-white/20 rounded-full" />
                                            <div className="w-2 h-2 bg-white/20 rounded-full" />
                                            <div className="w-2 h-2 bg-white/20 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-white/50 italic text-sm">
                                        <p className="text-white">{">"} vicode deploy --kinetic --global</p>
                                        <p>{">"} Scanning cluster nodes... [OK]</p>
                                        <p>{">"} Distributing flux packets... [OK]</p>
                                        <p className="text-[#D9F99D] font-black">{">"} DOMAIN ACCELERATION ACTIVE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kinetic Footer */}
                <footer className="pt-32 pb-16 space-y-32 border-t-4 border-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D9F99D]/5 blur-[200px] -z-10" />
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-24">
                        <div className="col-span-2 space-y-12 text-left">
                            <div className="flex items-center gap-6 group cursor-pointer inline-flex">
                                <div className="w-20 h-20 bg-white text-black flex items-center justify-center transform group-hover:-rotate-90 transition-transform">
                                    <span className="font-black text-5xl">V</span>
                                </div>
                                <span className="font-black text-6xl tracking-tighter uppercase italic drop-shadow-2xl">ViCode.</span>
                            </div>
                            <p className="text-lg text-white/30 leading-snug max-w-sm font-bold uppercase italic tracking-tighter">
                                The high-velocity infrastructure group. Built for a world that never sleeps. 2026.
                            </p>
                        </div>
                        {[
                            { title: "Velocity", links: ["V-Flux", "Accelerate", "Sync"] },
                            { title: "Node", links: ["L-Mesh", "Radio", "Partical"] },
                            { title: "Legal", links: ["Terms", "Privacy", "System"] },
                            { title: "Social", links: ["X.com", "Github", "Discord"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-12 text-left">
                                <h5 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#D9F99D]">
                                    {group.title}
                                </h5>
                                <ul className="space-y-8">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-lg text-white/20 hover:text-[#D9F99D] hover:-translate-x-2 transition-all uppercase font-bold tracking-tight inline-block">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-24 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                        <span className="px-10 py-5 bg-white/5 border border-white/10 italic rounded-none flex items-center gap-4">
                            <div className="w-2 h-2 bg-[#D9F99D] rounded-full animate-ping" />
                            © 2026 ViCode Kinetic Systems. All_Accelerated_Rights.
                        </span>
                        <div className="flex gap-16 font-extrabold opacity-30">
                            <span>V-9.9s_ACTIVE</span>
                            <span>STATE: MOMENTUM</span>
                        </div>
                    </div>
                </footer>
            </div>

            <style>{`
        @keyframes grid-drift {
          from { transform: translateY(0); }
          to { transform: translateY(40px); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-100px); filter: blur(10px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(100px); filter: blur(10px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        .animate-grid-drift {
          animation: grid-drift 2s linear infinite;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .stagger-text div:nth-child(2) { animation-delay: 0.2s; }
        .stagger-text div:nth-child(3) { animation-delay: 0.4s; }
      `}</style>
        </div>
    );
};
