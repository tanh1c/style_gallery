import { cn } from "@/lib/utils";
import {
Activity,
ChevronRight,
Cpu,
FastForward,
Layers,
Maximize,
Wifi,
Zap
} from "lucide-react";
import React,{ useEffect,useState } from "react";

export const RGBSplitDemo: React.FC = () => {
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 150);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex-1 text-[#FFFFFF] font-sans selection:bg-[#FF0000] selection:text-white relative h-full flex flex-col group font-space-grotesk overflow-hidden bg-black">

            {/* VIBRANT CHROMATIC STYLES */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
                
                .font-mono { font-family: 'Space Mono', monospace; }
                .font-grotesk { font-family: 'Space Grotesk', sans-serif; }
                
                /* THE BACKGROUND SYSTEM */
                .rgb-engine {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    overflow: hidden;
                    background: #000;
                }

                .mesh-gradient {
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background-image: 
                        radial-gradient(at 0% 0%, hsla(0,100%,50%,0.2) 0, transparent 50%), 
                        radial-gradient(at 100% 0%, hsla(180,100%,50%,0.2) 0, transparent 50%), 
                        radial-gradient(at 0% 100%, hsla(300,100%,50%,0.15) 0, transparent 50%),
                        radial-gradient(at 100% 100%, hsla(120,100%,50%,0.15) 0, transparent 50%),
                        radial-gradient(at 50% 50%, hsla(240,100%,40%,0.2) 0, transparent 50%);
                    filter: blur(100px);
                    animation: mesh-rotate 30s linear infinite;
                }

                @keyframes mesh-rotate {
                    0% { transform: rotate(0deg) scale(1.1); }
                    50% { transform: rotate(180deg) scale(1.3); }
                    100% { transform: rotate(360deg) scale(1.1); }
                }

                .glitch-beam {
                    position: absolute;
                    width: 100%;
                    height: 15vh;
                    background: linear-gradient(to bottom, transparent, rgba(255,0,0,0.1), rgba(0,255,255,0.1), transparent);
                    filter: blur(20px);
                    animation: beam-move 5s infinite ease-in-out;
                    z-index: 5;
                    pointer-events: none;
                }

                @keyframes beam-move {
                    0% { top: -20%; }
                    100% { top: 120%; }
                }

                .rgb-split-text {
                    text-shadow: 
                        4px 0 #FF0000,
                        -4px 0 #00FFFF;
                }

                .glitch-text {
                    position: relative;
                    display: inline-block;
                }
                .glitch-text::before, .glitch-text::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: transparent;
                }
                .glitch-text::before { left: 4px; text-shadow: -4px 0 #ff00c1; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim 5s infinite linear alternate-reverse; }
                .glitch-text::after { left: -4px; text-shadow: -4px 0 #00fff9, 4px 4px #ff00c1; clip: rect(44px, 450px, 56px, 0); animation: glitch-anim2 5s infinite linear alternate-reverse; }

                @keyframes glitch-anim {
                    0% { clip: rect(31px, 9999px, 94px, 0); }
                    20% { clip: rect(62px, 9999px, 42px, 0); }
                    100% { clip: rect(89px, 9999px, 98px, 0); }
                }
                @keyframes glitch-anim2 {
                    0% { clip: rect(65px, 9999px, 100px, 0); }
                    20% { clip: rect(10px, 9999px, 58px, 0); }
                    100% { clip: rect(15px, 9999px, 46px, 0); }
                }

                .scanline {
                    width: 100%;
                    height: 120px;
                    z-index: 10;
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(0, 0, 0, 0) 100%);
                    opacity: 0.15;
                    position: absolute;
                    bottom: 100%;
                    animation: scanline 8s linear infinite;
                    pointer-events: none;
                }

                @keyframes scanline {
                    0% { bottom: 100%; }
                    100% { bottom: -120px; }
                }

                .glass-card {
                    background: rgba(0, 0, 0, 0.4);
                    backdrop-filter: blur(30px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
                }
                .glass-card:hover {
                    border-color: rgba(255, 255, 255, 0.3);
                }
            `}} />

            {/* THE ACTUAL ANIMATED BACKGROUND (TOP LEVEL) */}
            <div className="rgb-engine">
                <div className="mesh-gradient" />
                <div className="glitch-beam" />
                <div className="glitch-beam" style={{ animationDelay: '2.5s', opacity: 0.4 }} />

                {/* STATIC DISTORTION OVERLAY */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
            </div>

            <div className="scanline" />

            {/* SCROLLABLE CONTENT (TRANSPARENT BG) */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide relative z-10">

                {/* --- NAVIGATION: HIGH FREQUENCY --- */}
                <nav className="flex items-center justify-between px-10 py-10">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-6 border-2 border-white flex items-center justify-between px-1 relative overflow-hidden bg-black">
                            <div className="w-1 h-full bg-red-600 animate-pulse" />
                            <div className="w-1 h-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.1s' }} />
                            <div className="w-1 h-full bg-white animate-pulse" style={{ animationDelay: '0.2s' }} />
                        </div>
                        <span className="text-xl font-black tracking-[-0.05em] font-grotesk uppercase group-hover:rgb-split-text transition-all text-white">ViCode_RGB</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-10 font-mono text-[10px] uppercase font-bold tracking-[0.3em] text-white/40">
                        <a href="#" className="hover:text-white transition-colors">Separation</a>
                        <a href="#" className="hover:text-white transition-colors">Frequency</a>
                        <a href="#" className="hover:text-white transition-colors">The Split</a>
                        <button className="glass-card px-8 py-2.5 hover:bg-white hover:text-black transition-all text-white font-bold rounded-none border border-white/20">TERMINAL_INIT</button>
                    </div>
                </nav>

                {/* --- HERO: THE RGB SPLIT (FIT 1 SCREEN) --- */}
                <section className="h-[calc(100vh-120px)] min-h-[600px] flex flex-col items-center justify-center px-10 text-center space-y-12">
                    <div className={cn("space-y-8 max-w-6xl transition-transform duration-150", glitch ? "translate-x-1" : "translate-x-0")}>
                        <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.4em] text-cyan-400 bg-white/5 px-6 py-2 border border-white/10 backdrop-blur-md">
                            <Wifi className="w-5 h-5" /> SIGNAL_STRENGTH_V12_CORE
                        </div>
                        <h1
                            className="text-7xl lg:text-[11rem] font-grotesk font-black leading-[0.8] tracking-[-0.06em] uppercase glitch-text text-white py-4"
                            data-text="RGB STORY."
                        >
                            RGB STORY.
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-white/60 font-medium leading-relaxed font-mono italic">
                            Narrative infrastructure split across the chromatic spectrum. HIGH_FREQUENCY storytelling for the modern creative lab.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-10 pt-10">
                        <button className="bg-white text-black px-12 py-5 rounded-none font-black text-xs uppercase tracking-[0.5em] hover:bg-red-600 hover:text-white transition-all shadow-[12px_12px_0px_#00FFFF] active:translate-x-1 active:translate-y-1 active:shadow-none">
                            SYNCHRONIZE
                        </button>
                        <button className="glass-card px-12 py-5 rounded-none font-black text-xs uppercase tracking-[0.5em] flex items-center gap-4 hover:border-white transition-all text-white border border-white/10">
                            INSPECT_CORES <FastForward className="w-5 h-5" />
                        </button>
                    </div>
                </section>

                {/* --- FEATURES: KINETIC GRID --- */}
                <section className="py-40 px-10 space-y-32">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
                        <h2 className="text-5xl lg:text-[7rem] font-grotesk font-black tracking-tighter uppercase italic text-white/95 leading-tight">Phase_<br />Separation.</h2>
                        <p className="text-xl text-white/40 max-w-xl mx-auto leading-relaxed font-mono font-bold">
                            Each layer of your story is independently rendered and synchronized in real-time. No latency. Just pure chromatic depth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {[
                            { t: "RED_LAYER", d: "High-level state orchestration logic.", i: Cpu, c: "text-red-500", b: "hover:shadow-[10px_10px_0px_rgba(255,0,0,0.4)]" },
                            { t: "CYAN_CORE", d: "Fluid asset distribution protocol.", i: Layers, c: "text-cyan-400", b: "hover:shadow-[10px_10px_0px_rgba(0,255,255,0.4)]" },
                            { t: "SYNC_PULSE", d: "Global edge node synchronization.", i: Activity, c: "text-white", b: "hover:shadow-[10px_10px_0px_rgba(255,255,255,0.4)]" },
                            { t: "ABERRATION", d: "Experimental narrative shielding.", i: Zap, c: "text-lime-400", b: "hover:shadow-[10px_10px_0px_rgba(163,230,53,0.4)]" }
                        ].map((item, i) => (
                            <div key={i} className={cn("glass-card p-12 flex flex-col gap-12 group overflow-hidden transition-all duration-300", item.b)}>
                                <div className={cn("w-14 h-14 border border-white/10 flex items-center justify-center transition-all bg-black group-hover:scale-110", item.c)}>
                                    <item.i className="w-6 h-6" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-grotesk font-black uppercase tracking-tighter group-hover:rgb-split-text transition-all text-white">{item.t}</h4>
                                    <p className="text-sm leading-relaxed text-white/50 font-bold font-mono">
                                        {item.d}
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <button className="text-[10px] font-black uppercase tracking-widest text-red-500 border-b border-red-500/20 pb-1 flex items-center gap-2 group-hover:gap-4 transition-all">
                                        RUN_DIAGNOSTIC <ChevronRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SHOWCASE: THE SPLIT ENGINE --- */}
                <section className="py-48 px-10 flex flex-col items-center gap-24 font-mono">
                    <div className="max-w-7xl mx-auto glass-card p-10 lg:p-24 flex flex-col lg:flex-row items-center gap-24 relative overflow-hidden backdrop-blur-3xl border border-white/5">
                        {/* DECORATIVE RGB LINES */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-40" />
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40" />

                        <div className="lg:w-1/2 space-y-12 text-left relative z-10">
                            <div className="text-xs font-bold uppercase tracking-[0.6em] text-red-500 px-6 py-2 border border-red-500/20 inline-block bg-black/80 backdrop-blur-md">ENGINE_MODULE_X_2026</div>
                            <h3 className="text-4xl lg:text-8xl font-grotesk font-black leading-tight uppercase text-white">Full_Spec <br /> Story_Lab.</h3>
                            <p className="text-lg text-white/60 leading-relaxed font-bold italic max-w-md">
                                Distortion is not noise; it is data. Our engine embraces aberration to provide a multi-dimensional perspective on user interaction.
                            </p>
                            <div className="flex gap-16 pt-6">
                                <div className="space-y-4">
                                    <div className="text-5xl font-black text-rose-500">120Hz</div>
                                    <div className="text-[10px] uppercase font-bold tracking-widest opacity-30 text-white">Refresh_Rate</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-5xl font-black text-cyan-400">0.0ms</div>
                                    <div className="text-[10px] uppercase font-bold tracking-widest opacity-30 text-white">Sync_Jitter</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full aspect-square border border-white/10 bg-black relative group overflow-hidden shadow-[20px_20px_80px_rgba(255,0,0,0.15)]">
                            <img
                                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200"
                                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                                alt="RGB Distortion"
                            />
                            <div className="absolute inset-0 bg-red-600/20 pointer-events-none mix-blend-color" />
                            <div className="absolute top-10 right-10 flex flex-col gap-4">
                                <div className="w-12 h-12 border border-white flex items-center justify-center bg-black hover:bg-white hover:text-black transition-colors text-white">
                                    <Maximize className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-10 text-[10px] font-black uppercase tracking-[0.4em] space-y-3 text-white bg-black/90 px-8 py-6 backdrop-blur-xl border border-white/10">
                                <div className="flex items-center gap-4"><div className="w-3 h-3 bg-red-600 rounded-full animate-ping" /> CORE_01_ACTIVE [99%]</div>
                                <div className="flex items-center gap-4"><div className="w-3 h-3 bg-cyan-400 rounded-full" /> CORE_02_READY [SYNC]</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- FOOTER --- */}
                <footer className="py-40 px-10 relative z-10 bg-black/60 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-32">
                    <div className="space-y-12 text-left">
                        <div className="flex items-center gap-4 text-white">
                            <div className="w-12 h-6 border-2 border-white flex items-center justify-between px-1 bg-black">
                                <div className="w-1 h-full bg-red-600" />
                                <div className="w-1 h-full bg-cyan-400" />
                                <div className="w-1 h-full bg-white" />
                            </div>
                            <span className="text-3xl font-black font-grotesk tracking-tighter uppercase">ViCode_RGB</span>
                        </div>
                        <p className="max-w-xs text-xl font-medium opacity-20 leading-relaxed font-mono uppercase tracking-tighter text-white">
                            Chromatic narratives split across the frequency domain.
                        </p>
                        <div className="flex gap-10 text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">
                            <span>&copy; 2026_RGB_LABS</span>
                            <span className="hover:text-red-500 cursor-pointer transition-colors">Safety</span>
                            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Terminal</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-32 font-grotesk font-black italic uppercase text-white">
                        {[
                            { t: "FREQUENCY", l: ["High", "Sync", "Aberration", "Pulse"] },
                            { t: "STATION", l: ["Registry", "Lab", "Workbench", "Logs"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-10 text-left">
                                <h5 className="font-bold uppercase tracking-[0.5em] text-[10px] opacity-20 not-italic text-white">{group.t}</h5>
                                <ul className="space-y-6 text-2xl tracking-tight">
                                    {group.l.map(link => (
                                        <li key={link}><a href="#" className="hover:text-red-500 transition-colors">{link}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </footer>
            </div>
        </div>
    );
};
