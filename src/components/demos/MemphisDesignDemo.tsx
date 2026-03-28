import { cn } from "@/lib/utils";
import {
Activity,
ArrowUpRight,
CheckCircle2,
Circle,
Command,
Github,
Globe,
Layers,
ShieldCheck,
Square,
Triangle,
Zap
} from "lucide-react";
import React from "react";

export const MemphisDesignDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#f0e6ff] text-black font-black selection:bg-[#FF00FF] selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col p-6 space-y-10 pt-4 group">

            {/* --- AUTHENTIC MEMPHIS PATTERNS: SQUIGGLES & CONFETTI --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00A3FF_1.5px,transparent_1.5px)] bg-[size:30px_30px]" />
                <div className="absolute top-1/2 left-1/4 w-32 h-32 border-[4px] border-black rounded-full opacity-40 animate-bounce" style={{ animationDuration: '5s' }} />
                <div className="absolute bottom-1/3 right-1/4 w-48 h-12 bg-[#50FA7B] rotate-[25deg] transform skew-x-12 border-[3px] border-black" />
                {/* SQUIGGLES */}
                <div className="absolute top-20 right-40 w-40 h-40 opacity-30 rotate-12 transition-transform group-hover:-rotate-12 duration-1000">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#FF00FF] fill-none stroke-current stroke-[4]">
                        <path d="M10,50 Q25,10 40,50 T70,50 T100,50" />
                    </svg>
                </div>
                <div className="absolute bottom-10 left-20 w-32 h-32 opacity-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#FFD700] fill-none stroke-current stroke-[4]">
                        <path d="M20,20 L80,80 M80,20 L20,80" />
                    </svg>
                </div>
            </div>

            {/* --- MEMPHIS NAV: FLOATING POP BAR --- */}
            <nav className="flex items-center justify-between px-8 py-4 bg-white border-[4px] border-black shadow-[8px_8px_0px_#50FA7B] sticky top-4 z-50 mx-2">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#00A3FF] border-[3px] border-black flex items-center justify-center -rotate-12 group-hover:rotate-12 transition-transform">
                        <Command className="w-6 h-6 text-black shadow-sm" />
                    </div>
                    <span className="text-xl tracking-tighter uppercase italic leading-none font-black text-black">ViCode_POP</span>
                </div>

                <div className="hidden lg:flex items-center gap-8 text-[9px] uppercase tracking-widest text-black/50">
                    {["Canvas", "Nodes", "Flow", "Art"].map((tab) => (
                        <a key={tab} href="#" className="hover:text-[#FF00FF] hover:underline underline-offset-4 decoration-[3px] transition-all">
                            {tab}
                        </a>
                    ))}
                </div>

                <button className="h-12 px-6 bg-[#FF00FF] border-[3px] border-black text-white font-black uppercase tracking-widest text-[10px] shadow-[4px_4px_0px_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all active:scale-95">
                    Start_Jamming
                </button>
            </nav>

            {/* --- MEMPHIS HERO: RADICAL GEOMETRY (SINGLE SCREEN) --- */}
            <section className="min-h-[60vh] flex flex-col lg:flex-row items-center gap-6 relative z-10 shrink-0">
                <div className="flex-1 space-y-4 text-center lg:text-left relative">
                    <div className="inline-flex items-center gap-3 px-4 py-1 bg-[#50FA7B] border-[3px] border-black shadow-[3px_3px_0px_#000] text-[9px] font-black uppercase tracking-widest">
                        <Zap className="w-3 h-3" /> VIBE_LEVEL_CRITICAL
                    </div>

                    <h1 className="text-6xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.8] uppercase text-black drop-shadow-[5px_5px_0px_#00A3FF]">
                        Create. <br /> <span className="text-white bg-black px-4 ml-[-0.5rem] rotate-1 inline-block">Execute.</span> <br /> Disrupt.
                    </h1>

                    <p className="text-lg font-black text-black/70 max-w-sm leading-tight uppercase tracking-tight bg-white/60 border-[3px] border-black p-4 shadow-[6px_6px_0px_#FF00FF]">
                        Build 80s-grade infra with modern performance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                        <button className="h-14 px-8 bg-black text-[#50FA7B] font-black uppercase tracking-[0.2em] text-[11px] border-[3px] border-black shadow-[6px_6px_0px_#FF00FF] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all flex items-center justify-center gap-4 group">
                            DEPLOY_INFRA <ArrowUpRight className="w-5 h-5" />
                        </button>
                        <button className="h-14 px-8 bg-white border-[3px] border-black text-black font-black uppercase tracking-[0.2em] text-[11px] shadow-[6px_6px_0px_#000] hover:bg-[#00A3FF] transition-all flex items-center justify-center gap-4">
                            SPECS <Layers className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="flex-1 relative shrink-0 w-full lg:max-w-[40%] group scale-90 lg:scale-100">
                    {/* MEMPHIS IMAGE FRAME */}
                    <div className="relative w-full aspect-square bg-[#00A3FF] border-[4px] border-black shadow-[15px_15px_0px_#50FA7B] flex items-center justify-center overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200"
                            alt="Memphis Pattern"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] contrast-125 saturate-150"
                        />
                        {/* THE FLOATING SPECS PANEL */}
                        <div className="absolute inset-x-6 bottom-6 p-6 bg-[#FF00FF] text-white border-[3px] border-black shadow-[6px_6px_0px_#000] -rotate-1 group-hover:rotate-0 transition-transform">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-black text-[#50FA7B] border-[2px] border-white">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-sm font-black uppercase tracking-tighter">INFRA_VITALITY: 100%</div>
                                    <div className="text-[8px] font-black text-white/60 uppercase tracking-widest">PATTERN_OPTIMIZED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ASYMMETRICAL DECORATIONS */}
                    <Triangle className="absolute -top-8 -right-8 w-16 h-16 text-black fill-[#FF00FF] rotate-45 animate-pulse" />
                    <Circle className="absolute -bottom-8 -left-8 w-14 h-14 text-black fill-[#50FA7B] animate-bounce" />
                    <div className="absolute top-1/2 -left-6 w-10 h-10 bg-[#FFD700] border-[2px] border-black rotate-12" />
                </div>
            </section>

            {/* --- MEMPHIS LOGO WALL: CONTRAST GRID --- */}
            <div className="py-12 bg-white border-y-[3px] border-black flex flex-col items-center gap-8 shrink-0 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_11px)] opacity-5" />
                <span className="text-[9px] font-black text-black uppercase tracking-[1em] relative z-10">THE_RADICAL_COLLECTIVE</span>
                <div className="flex flex-wrap justify-center gap-12 lg:gap-24 items-center relative z-10 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500">
                    <Github className="w-8 h-8" />
                    <Layers className="w-8 h-8" />
                    <Globe className="w-8 h-8" />
                    <ShieldCheck className="w-8 h-8" />
                    <Command className="w-8 h-8" />
                </div>
            </div>

            {/* --- PATTERNED FEATURES: BLOCKY MODULES --- */}
            <section className="space-y-12 px-2 shrink-0 pb-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <h2 className="text-4xl font-black tracking-tight text-black uppercase -rotate-1 drop-shadow-[3px_3px_0px_#00A3FF]">Patterns_Over_Patience.</h2>
                    <p className="text-black bg-white inline-block px-3 py-1 border-[2.5px] border-black font-black uppercase tracking-widest text-[9px]">Execution_Level_9000</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { t: "Geometric_Logic", d: "Hard-edged thinking for soft-world problems. Absolute precision.", i: Square, c: "bg-white shadow-[#FF00FF]" },
                        { t: "Pattern_Sync", d: "Automatic scaling that follows the rhythm of your traffic squiggles.", i: Activity, c: "bg-[#00A3FF] shadow-black" },
                        { t: "Radical_Shield", d: "Brute-force security with a neon attitude. Unbreakable. Unapologetic.", i: ShieldCheck, c: "bg-[#FF00FF] shadow-[#ffd700]" }
                    ].map((item, i) => (
                        <div key={i} className={cn(
                            "relative group p-8 border-[3.5px] border-black transition-all hover:-translate-x-1.5 hover:-translate-y-1.5 shadow-[8px_8px_0px_#000] cursor-pointer flex flex-col items-start gap-6",
                            item.c,
                            "hover:shadow-[12px_12px_0px_#000]"
                        )}>
                            <div className="w-14 h-14 bg-black text-white flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                                <item.i className="w-7 h-7" />
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-2xl font-black text-black uppercase italic tracking-tighter">{item.t}</h4>
                                <p className="text-[13px] font-black text-black/70 leading-relaxed uppercase tracking-tight">
                                    {item.d}
                                </p>
                            </div>

                            <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-black underline decoration-[2.5px] underline-offset-4 hover:decoration-[#FF00FF]">
                                VIEW_SPECS <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- RADICAL PRICING: THE POP-ART CARD --- */}
            <section className="bg-white border-[5px] border-black p-8 lg:p-16 text-black mx-2 relative overflow-hidden shadow-[12px_12px_0px_#00A3FF] shrink-0">
                <div className="absolute top-0 right-0 w-full h-full bg-[repeating-linear-gradient(-45deg,#FF00FF11,#FF00FF11_20px,transparent_20px,transparent_40px)]" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-6">
                        <div className="text-[9px] bg-black text-white inline-block px-3 py-1 font-black tracking-widest">PRICING_MODEL: RADICAL</div>
                        <h2 className="text-5xl lg:text-6xl font-black italic tracking-tighter leading-[0.85] uppercase">Bold. <br /> Simple. <br /> Fast.</h2>
                        <p className="text-black/60 text-md font-black uppercase leading-tight max-w-sm tracking-tight">
                            Pay for the vibes. Scalable at lightning speed.
                        </p>
                        <div className="flex gap-10">
                            <div className="space-y-1">
                                <div className="text-5xl font-black text-[#FF00FF] tracking-tighter italic">$0</div>
                                <div className="text-[9px] font-black uppercase tracking-widest text-black/30">Hobby_Squig</div>
                            </div>
                            <div className="space-y-1 border-l-[3px] border-black pl-10">
                                <div className="text-5xl font-black text-[#00A3FF] tracking-tighter italic">VIBE</div>
                                <div className="text-[9px] font-black uppercase tracking-widest text-black/30">Enterprise_Grid</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FFD700] border-[3.5px] border-black p-8 lg:p-12 space-y-8 relative shadow-[10px_10px_0px_#000]">
                        <div className="space-y-6">
                            {[
                                "Unlimited Geometric Patterns",
                                "Radical Cloud Redundancy",
                                "Neon-Speed API Endpoints"
                            ].map(f => (
                                <div key={f} className="flex items-center gap-5 group cursor-default text-black">
                                    <div className="w-9 h-9 bg-white border-[2.5px] border-black flex items-center justify-center group-hover:bg-[#FF00FF] group-hover:text-white transition-all">
                                        <CheckCircle2 className="w-4.5 h-4.5" />
                                    </div>
                                    <span className="text-[15px] font-black uppercase tracking-tighter tracking-tight">{f}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full h-14 bg-black text-white font-black uppercase tracking-[0.2em] text-[12px] border-[2.5px] border-black shadow-[6px_6px_0px_#00A3FF] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all flex items-center justify-center gap-5 group">
                            JOIN_THE_POP_OS <ArrowUpRight className="w-7 h-7 text-[#50FA7B]" />
                        </button>
                    </div>
                </div>
            </section>

            {/* --- MEMPHIS FOOTER: RADICAL LOGOFF --- */}
            <footer className="py-20 bg-black text-white flex flex-col items-center gap-12 shrink-0 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-[#FF00FF] border-b-[3px] border-black flex items-center px-4 overflow-hidden">
                    <div className="flex gap-10 text-[8px] font-black uppercase tracking-[0.5em] animate-marquee whitespace-nowrap">
                        {Array(10).fill("SYSTEM_OPERATIONAL_CHECK // VIBE_REACHED_MAXIMUM // PATTERN_SYNC_COMPLETE // ").join("")}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-12 gap-10 relative z-10 font-black">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-[#FFD700] border-[2.5px] border-white text-black flex items-center justify-center rotate-3 shadow-[6px_6px_0px_#FF00FF]">
                            <Command className="w-9 h-9" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-2xl font-black tracking-tighter uppercase italic leading-none">ViCode_POP</h4>
                            <p className="text-[8px] font-bold text-[#50FA7B] uppercase tracking-widest mt-1">ARCHITECTED_RADICALLY_©2026</p>
                        </div>
                    </div>
                    <div className="flex gap-10 text-[9px] font-black uppercase tracking-widest text-white/50">
                        <a href="#" className="hover:text-[#FF00FF] transition-colors">PATTERNS</a>
                        <a href="#" className="hover:text-[#00A3FF] transition-colors">BLUEPRINTS</a>
                        <a href="#" className="hover:text-[#50FA7B] transition-colors">RADICAL</a>
                    </div>
                </div>
                <div className="text-[10px] font-black text-white/10 tracking-[1.5em] uppercase pointer-events-none select-none italic text-center px-4">
                    STAY_RADICAL // NO_SAFE_COLORS // SHAPES_OVER_SHADOWS
                </div>
            </footer>
        </div>
    );
};
