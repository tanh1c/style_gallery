import { cn } from "@/lib/utils";
import {
Activity,
ArrowUpRight,
CheckCircle2,
Command,
Github,
Globe,
Layers,
Monitor,
Palmtree,
ShieldCheck,
Sparkles,
Sun,
Terminal,
Waves
} from "lucide-react";
import React from "react";

export const VaporwaveDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#2d1b4d] text-[#05FFA1] font-mono selection:bg-[#FF71CE] selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col p-6 space-y-12 pt-4 group">

            {/* --- CUSTOM VAPORWAVE STYLES --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes grid-flow {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 60px; }
                }
                .animate-grid-flow {
                    animation: grid-flow 2s linear infinite;
                }
                @keyframes vhs-jitter {
                    0% { transform: translate(0,0); }
                    1% { transform: translate(1px, 0.5px); }
                    2% { transform: translate(-0.5px, -1px); }
                    3% { transform: translate(0,0); }
                    100% { transform: translate(0,0); }
                }
                @keyframes glitch-text {
                    0% { text-shadow: 2px 0 #FF71CE, -2px 0 #01CDFE; }
                    2% { text-shadow: -3px 0 #FF71CE, 3px 0 #01CDFE; }
                    4% { text-shadow: 2px 0 #FF71CE, -2px 0 #01CDFE; }
                    100% { text-shadow: 1px 0 #FF71CE, -1px 0 #01CDFE; }
                }
                .vhs-overlay {
                    background: linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.2) 50%), 
                                linear-gradient(90deg, rgba(255,0,0,0.05), rgba(0,255,0,0.02), rgba(0,0,255,0.05));
                    background-size: 100% 3px, 3px 100%;
                }
                .vhs-text {
                    animation: glitch-text 4s infinite;
                }
                .sunset-gradient {
                    background: linear-gradient(to bottom, #FF71CE 0%, #B967FF 50%, transparent 100%);
                }
            `}} />

            {/* --- VAPORWAVE BACKGROUND & GRID --- */}
            <div className="absolute inset-x-[-10%] inset-y-0 pointer-events-none z-40 vhs-overlay opacity-60" />

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                {/* 3D WIREFRAME FLOOR (ANIMATED) */}
                <div className="absolute bottom-0 w-[200%] h-[50%] bg-[linear-gradient(to_bottom,transparent,rgba(255,113,206,0.3)),linear-gradient(90deg,rgba(0,163,255,0.2)_1px,transparent_1px),linear-gradient(0deg,rgba(0,163,255,0.2)_1px,transparent_1px)] bg-[size:100%_100%,60px_60px,60px_60px] animate-grid-flow origin-bottom left-[-50%]"
                    style={{ transform: 'perspective(600px) rotateX(65deg)' }} />

                {/* THE SUN */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-96 h-96 sunset-gradient rounded-full shadow-[0_0_120px_rgba(255,113,206,0.5)] opacity-80">
                    <div className="w-full h-full bg-[repeating-linear-gradient(to_bottom,transparent,transparent_18px,rgba(45,27,77,1)_18px,rgba(45,27,77,1)_24px)] rounded-full" />
                </div>
            </div>

            {/* --- VAPOR NAV: RETRO TERMINAL BAR --- */}
            <nav className="flex items-center justify-between px-6 py-3 bg-[#1a0b2e]/90 backdrop-blur-xl border-[2px] border-[#01CDFE] shadow-[0_0_15px_rgba(1,205,254,0.4)] sticky top-4 z-50 mx-2 animate-[vhs-jitter_10s_infinite]">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#FF71CE] flex items-center justify-center border-b-4 border-r-4 border-black text-white shadow-[2px_2px_0px_#01CDFE]">
                        <Terminal className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col select-none">
                        <span className="text-lg font-black italic tracking-tighter text-[#01CDFE] uppercase vhs-text">ViCode_V_4.5</span>
                        <span className="text-[7px] font-bold text-[#FF71CE] uppercase tracking-[0.4em]">MAIN_OS_VER_84.EXE</span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-8 text-[9px] font-black uppercase tracking-widest text-[#05FFA1]/70">
                    {["Canvas", "Nodes", "Flow", "Art"].map((tab) => (
                        <a key={tab} href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_#05FFA1] transition-all flex items-center gap-2">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">►</span> {tab}
                        </a>
                    ))}
                </div>

                <div className="flex gap-4">
                    <button className="h-10 px-5 bg-black border-[1px] border-[#B967FF] text-[#B967FF] font-black uppercase text-[9px] tracking-widest transition-all active:scale-95 shadow-[3px_3px_0px_#B967FF33]">
                        LOG_IN
                    </button>
                    <button className="h-10 px-5 bg-[#05FFA1] text-black font-black uppercase text-[9px] tracking-widest shadow-[3px_3px_0px_#FF71CE] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                        GET_ESTHETIC
                    </button>
                </div>
            </nav>

            {/* --- VAPOR HERO: SURREAL SYNC (SINGLE SCREEN) --- */}
            <section className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-8 relative z-10 shrink-0">
                <div className="max-w-4xl space-y-6 relative">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black/40 border-l-4 border-[#FF71CE] text-[9px] font-black uppercase tracking-widest text-[#05FFA1] backdrop-blur-sm">
                        <Sparkles className="w-3 h-3 text-[#FF71CE]" /> [INFRA_STATUS: VIRTUALIZING]
                    </div>

                    <h1 className="flex flex-col items-center">
                        <span className="text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.8] uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white to-[#01CDFE] drop-shadow-[8px_8px_0px_rgba(255,113,206,0.3)] vhs-text">
                            Soft_UI.
                        </span>
                        {/* TYPOGRAPHY FIX: Break text or reduce size for long words on mobile/small viewports */}
                        <span className="text-5xl lg:text-[6rem] font-black tracking-tighter leading-none uppercase italic text-white drop-shadow-[0_0_25px_#FF71CE] mt-2 block break-all lg:whitespace-nowrap px-4 bg-black/20 backdrop-blur-sm">
                            Hard_Performance.
                        </span>
                    </h1>

                    <p className="text-md lg:text-lg font-bold text-[#05FFA1] max-w-lg mx-auto leading-tight uppercase tracking-tight bg-[#1a0b2e]/80 p-4 border-2 border-[#B967FF] shadow-[0_0_40px_rgba(185,103,255,0.2)]">
                        Retro aesthetics, futuristic power. Vaporwave isn't just art—it's the core architecture of your next deployment.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center pt-2">
                        <button className="h-14 px-10 bg-black text-[#FF71CE] font-black uppercase tracking-[0.3em] text-[11px] border-2 border-[#FF71CE] shadow-[10px_10px_0px_#B967FF] hover:translate-x-[10px] hover:translate-y-[10px] hover:shadow-none transition-all flex items-center justify-center gap-4">
                            INITIALIZE_CORE <ArrowUpRight className="w-5 h-5" />
                        </button>
                        <button className="h-14 px-10 bg-[#01CDFE] border-2 border-black text-black font-black uppercase tracking-[0.3em] text-[11px] shadow-[6px_6px_0px_#000] hover:bg-white transition-all flex items-center justify-center gap-4">
                            READ_SPEC_OS <Monitor className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* VAPOR ELEMENT ANIMATIONS */}
                <div className="absolute top-[5%] left-[-5%] lg:left-10 opacity-40 animate-bounce hidden lg:block" style={{ animationDuration: '6s' }}>
                    <Palmtree className="w-40 h-40 text-[#05FFA1] drop-shadow-[0_0_10px_#05FFA1]" />
                </div>
                <div className="absolute top-[5%] right-[-5%] lg:right-10 opacity-40 animate-pulse hidden lg:block" style={{ animationDuration: '4s' }}>
                    <Waves className="w-40 h-40 text-[#FF71CE] drop-shadow-[0_0_10px_#FF71CE]" />
                    <div className="text-[4rem] text-[#01CDFE]/20 font-black italic mt-4">美学</div>
                </div>
            </section>

            {/* --- VHS LO-FI LOGO WALL --- */}
            <div className="py-16 border-y-2 border-[#B967FF]/40 flex flex-col items-center gap-10 shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF71CE]/5 to-transparent animate-pulse" />
                <span className="text-[9px] font-black text-[#B967FF] uppercase tracking-[1.5em] relative z-10 vhs-text">G L O B A L _ C O N S U M E R _ G R I D</span>
                <div className="flex flex-wrap justify-center gap-12 lg:gap-32 items-center relative z-10 opacity-50 hover:opacity-100 transition-opacity saturate-200">
                    <Github className="w-10 h-10 text-white" />
                    <Layers className="w-10 h-10 text-[#01CDFE]" />
                    <Globe className="w-10 h-10 text-[#05FFA1]" />
                    <ShieldCheck className="w-10 h-10 text-[#FF71CE]" />
                    <Command className="w-10 h-10 text-[#B967FF]" />
                </div>
            </div>

            {/* --- DREAM FEATURES: WINDOWS & ERRORS --- */}
            <section className="space-y-16 px-2 shrink-0 pb-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-5xl font-black tracking-tight text-[#01CDFE] uppercase italic vhs-text">Virtual_Plaza.</h2>
                    <p className="text-[#FF71CE] font-black uppercase tracking-widest text-[10px] bg-black/40 inline-block px-3 py-1 border border-[#FF71CE]/30">SYSTEM_MANIFESTATION: STABLE_VIBE</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { t: "Marble_Sync", d: "Zero lag processing, sculpted for eternity in the plaza.", i: Layers, c: "bg-[#1a0b2e]/90 border-[#FF71CE] shadow-[#FF71CE33]" },
                        { t: "Digital_Ocean", d: "Unlimited bandwidth flowing like retro-waves on a beach.", i: Activity, c: "bg-[#1a0b2e]/90 border-[#01CDFE] shadow-[#01CDFE33]" },
                        { t: "Os_Hardening", d: "Advanced CRT filtering to block all hostile grid interference.", i: ShieldCheck, c: "bg-[#1a0b2e]/90 border-[#05FFA1] shadow-[#05FFA133]" }
                    ].map((item, i) => (
                        <div key={i} className={cn(
                            "relative group p-10 border-2 transition-all hover:-translate-y-3 cursor-pointer flex flex-col items-start gap-10",
                            item.c,
                            "shadow-[12px_12px_0px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(255,113,206,0.2)]"
                        )}>
                            <div className="w-16 h-16 bg-black flex items-center justify-center border-2 border-white group-hover:bg-[#FF71CE] group-hover:border-black transition-all">
                                <item.i className="w-8 h-8 group-hover:text-black transition-colors" />
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter vhs-text">{item.t}</h4>
                                <p className="text-[13px] font-bold text-[#05FFA1]/80 leading-relaxed uppercase tracking-tight">
                                    {item.d}
                                </p>
                            </div>

                            <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#01CDFE] hover:text-[#FF71CE] transition-colors underline underline-offset-4 decoration-2">
                                RETRIEVE_DATA_OBJ <ArrowUpRight className="w-4 h-4" />
                            </button>

                            {/* DECORATIVE JAP CHARS */}
                            <div className="absolute top-4 right-4 text-[#FF71CE]/10 text-3xl font-black select-none">記憶</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- VHS PRICING: THE CLASSIC POPUP --- */}
            <section className="bg-[#1a0b2e] border-y-4 border-[#01CDFE] p-10 lg:p-20 text-[#05FFA1] mx-[-1.5rem] relative overflow-hidden shadow-2xl shrink-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px]" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="space-y-10">
                        <div className="text-[10px] bg-[#FF71CE] text-white inline-block px-4 py-1 font-black tracking-widest animate-pulse">MEMORY_PURCHASE_OS</div>
                        <h2 className="text-6xl lg:text-8xl font-black italic tracking-tighter leading-[0.85] uppercase text-white vhs-text">Soft. <br /> Price. <br /> Hard.</h2>
                        <p className="text-[#01CDFE] text-xl font-bold uppercase leading-tight max-w-md tracking-tight border-l-4 border-[#FF71CE] pl-6">
                            Scaling infra at the speed of nostalgia. Total aesthetic control.
                        </p>
                        <div className="flex gap-16">
                            <div className="space-y-2">
                                <div className="text-7xl font-black text-[#FF71CE] tracking-tighter italic vhs-text">$00</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-[#05FFA1]/40">Dream_Access</div>
                            </div>
                            <div className="space-y-2 border-l-4 border-[#B967FF] pl-16">
                                <div className="text-7xl font-black text-[#01CDFE] tracking-tighter italic vhs-text">INF.</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-[#05FFA1]/40">Cosmic_User</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#05FFA1] border-4 border-black p-10 lg:p-16 space-y-12 relative shadow-[20px_20px_0px_#B967FF]">
                        <div className="space-y-8 text-black">
                            {[
                                "Unlimited Aesthetic Tokens",
                                "CRT-Optimized Endpoints",
                                "Sunset-Level Backups"
                            ].map(f => (
                                <div key={f} className="flex items-center gap-6 group cursor-default">
                                    <div className="w-10 h-10 bg-black flex items-center justify-center text-[#05FFA1]">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-[16px] font-black uppercase tracking-tighter tracking-tight">{f}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full h-20 bg-[#FF71CE] text-white font-black uppercase tracking-[0.4em] text-[14px] border-4 border-black shadow-[10px_10px_0px_#000] hover:translate-x-[10px] hover:translate-y-[10px] hover:shadow-none transition-all flex items-center justify-center gap-8 group">
                            JOIN_THE_PLAZA_NOW <ArrowUpRight className="w-8 h-8 text-black group-hover:text-white" />
                        </button>
                    </div>
                </div>
            </section>

            {/* --- VHS FOOTER: THE END OF TAPE --- */}
            <footer className="py-24 bg-black text-white flex flex-col items-center gap-16 shrink-0 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FF71CE] to-transparent animate-pulse" />
                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-20 gap-16 relative z-10 font-black">
                    <div className="flex items-center gap-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#FF71CE] to-[#B967FF] flex items-center justify-center border-4 border-white rotate-12 shadow-[15px_15px_0px_#01CDFE33]">
                            <Sun className="w-12 h-12 text-white" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-5xl font-black tracking-tighter uppercase italic leading-none text-[#01CDFE] drop-shadow-neon">ViCode_VHS</h4>
                            <p className="text-[10px] font-bold text-[#FF71CE] uppercase tracking-widest mt-2">BROADCAST_COMPLETE_©1984_VIBE</p>
                        </div>
                    </div>
                    <div className="flex gap-16 text-[11px] font-black uppercase tracking-widest text-[#B967FF]">
                        <a href="#" className="hover:text-white transition-colors hover:scale-125">WAVE_DOCS</a>
                        <a href="#" className="hover:text-[#05FFA1] transition-colors hover:scale-125">PLAZA_HUB</a>
                        <a href="#" className="hover:text-white transition-colors hover:scale-125 decoration-red-500 line-through">E X I T</a>
                    </div>
                </div>
                <div className="text-[14px] font-black text-white/5 tracking-[3em] uppercase pointer-events-none select-none italic text-center px-4 transition-all hover:text-white/20 duration-1000">
                    P L E A S E _ R E W I N D _ A F T E R _ U S E
                </div>
                {/* FINAL DECORATIVE ELEMENT */}
                <div className="absolute bottom-4 right-4 text-white/10 text-sm font-mono tracking-widest select-none">TAPE_POSITION: [45:00:00]</div>
            </footer>
        </div>
    );
};
