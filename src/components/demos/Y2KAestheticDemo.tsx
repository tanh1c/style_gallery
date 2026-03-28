import { cn } from "@/lib/utils";
import {
Activity,
ArrowUpRight,
CheckCircle2,
Command,
Cpu,
Github,
Globe,
Layers,
ShieldCheck,
Sparkles,
Star,
Terminal
} from "lucide-react";
import React from "react";

export const Y2KAestheticDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#050505] text-[#FF69B4] font-sans selection:bg-[#00FFFF] selection:text-black overflow-y-auto overflow-x-hidden relative h-full flex flex-col p-6 space-y-12 pt-2">

            {/* --- Y2K GRID OVERLAY --- */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,255,255,0.05)_1.5px,transparent_1.5px)] bg-[size:50px_50px] pointer-events-none" />

            {/* --- IRIDESCENT BLOB BACKGROUNDS --- */}
            <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#FF69B4]/15 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-[#00FFFF]/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

            {/* --- FLOATING CHROME STARS --- */}
            <div className="absolute top-10 right-1/4 animate-bounce" style={{ animationDuration: '3s' }}>
                <Star className="w-10 h-10 text-white fill-white shadow-[0_0_20px_#fff]" />
            </div>
            <div className="absolute bottom-1/4 left-10 animate-spin-slow">
                <Star className="w-6 h-6 text-[#00FFFF] fill-[#00FFFF] shadow-[0_0_15px_#00FFFF]" />
            </div>

            {/* --- Y2K NAV: CHROME GEL BAR --- */}
            <nav className="flex items-center justify-between px-8 py-3 bg-gradient-to-b from-white/20 to-transparent backdrop-blur-2xl border-b-2 border-white/30 rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_2px_10px_rgba(255,255,255,0.4)] sticky top-2 z-50 mx-2">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-white via-[#C0C0C0] to-[#888] rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(255,255,255,0.3),inset_0_2px_5px_rgba(255,255,255,0.8)] border border-white/50">
                        <Command className="w-6 h-6 text-black" />
                    </div>
                    <span className="font-black text-2xl tracking-tighter uppercase italic text-white drop-shadow-[2px_2px_0px_#FF69B4,-2px_-2px_0px_#00FFFF]">Vi_Code_2K</span>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#00FFFF]">
                    {["Archive", "Logic", "Pulse", "Vault"].map((tab) => (
                        <a key={tab} href="#" className="hover:text-white transition-all hover:scale-125 hover:rotate-3 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
                            {tab}
                        </a>
                    ))}
                </div>

                <button className="h-10 px-8 bg-gradient-to-r from-[#FF69B4] via-white to-[#00FFFF] text-black font-black uppercase tracking-widest text-[9px] rounded-full shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 transition-all outline outline-2 outline-white/20">
                    Enter_Void
                </button>
            </nav>

            {/* --- Y2K HERO: LIQUID METAL & CHROME (REDUCED PADDING) --- */}
            <section className="min-h-[80vh] flex flex-col lg:flex-row items-center gap-6 relative z-10 shrink-0 pt-0">
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#FF69B4]/20 border border-white/30 rounded-full text-[10px] font-black uppercase tracking-widest text-[#FF69B4] shadow-[0_0_15px_rgba(255,105,180,0.4),inset_0_1px_3px_rgba(255,255,255,0.5)]">
                        <Sparkles className="w-4 h-4 animate-spin-slow" /> v.2000.v.Live
                    </div>

                    <h1 className="text-8xl lg:text-[10rem] font-black italic tracking-tighter leading-[0.75] uppercase text-white mix-blend-difference drop-shadow-[5px_5px_0px_#FF69B4,-5px_-5px_0px_#00FFFF]">
                        CHROME.<br />LOGIC.<br />FLOW.
                    </h1>

                    <p className="text-lg font-bold text-white max-w-xl leading-relaxed uppercase tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] border-l-4 border-[#00FFFF] pl-6">
                        Deploy your SaaS into the iridescent digital landscape. High-gloss performance meets zero-latency execution.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <button className="group relative h-16 px-12 bg-white text-black font-black uppercase tracking-widest text-[12px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF69B4] to-[#00FFFF] opacity-0 group-hover:opacity-20 transition-opacity" />
                            <div className="relative flex items-center justify-center gap-4">
                                Onboard_Now <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </button>
                        <button className="h-16 px-12 bg-transparent border-4 border-white text-white font-black uppercase tracking-widest text-[12px] rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 group">
                            System_Scan <Terminal className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="flex-1 relative shrink-0 w-full lg:max-w-[45%]">
                    {/* CHROME LIQUID CONTAINER */}
                    <div className="relative w-full aspect-[4/3] rounded-[60px] p-1.5 bg-gradient-to-br from-white via-zinc-400 to-zinc-600 shadow-[0_0_100px_rgba(255,105,180,0.3)] group overflow-hidden">
                        <div className="w-full h-full bg-slate-900 rounded-[56px] overflow-hidden relative border-2 border-white/20">
                            <img
                                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200"
                                alt="Iridescent Digital Liquid"
                                className="w-full h-full object-cover opacity-90 group-hover:scale-125 transition-transform duration-[5s] contrast-125 saturate-125"
                            />
                            {/* FLOATING HUD WIDGETS */}
                            <div className="absolute top-10 right-10 flex flex-col gap-4">
                                <div className="bg-white/10 backdrop-blur-2xl border-2 border-white/40 p-4 rounded-3xl shadow-[inset_0_2px_10px_rgba(255,255,255,0.5)] animate-bounce-slow">
                                    <Activity className="w-8 h-8 text-[#00FFFF]" />
                                </div>
                                <div className="bg-white/10 backdrop-blur-2xl border-2 border-white/40 p-4 rounded-3xl shadow-[inset_0_2px_10px_rgba(255,255,255,0.5)] animate-pulse">
                                    <Cpu className="w-8 h-8 text-[#FF69B4]" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#FF69B4]/30 via-transparent to-[#00FFFF]/20 pointer-events-none" />
                        </div>
                    </div>
                    {/* Y2K BUBBLES */}
                    <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#00FFFF]/30 rounded-full blur-[60px] animate-pulse" />
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#FF69B4]/30 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '2s' }} />
                </div>
            </section>

            {/* --- CHROME LOGO WALL (HIGH CONTRAST) --- */}
            <div className="py-16 bg-gradient-to-r from-transparent via-white/5 to-transparent flex flex-col items-center gap-10 shrink-0">
                <span className="text-[11px] font-black text-white/40 uppercase tracking-[1em] drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Network_Infrastructure_Global</span>
                <div className="flex flex-wrap justify-center gap-20 items-center">
                    {[Github, Layers, Globe, ShieldCheck, Cpu].map((Icon, idx) => (
                        <div key={idx} className="group relative">
                            <Icon className="w-12 h-12 text-white opacity-40 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                            <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Y2K BUBBLE FEATURES --- */}
            <section className="space-y-12 px-2 shrink-0 pb-12">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-6xl font-black tracking-tight text-white uppercase italic drop-shadow-[4px_4px_0px_#FF69B4]">Iridescent_Tools.</h2>
                    <p className="text-[#00FFFF] font-black uppercase tracking-[0.4em] text-[10px]">Digital_Optimism_Engine</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { t: "Logic_Gel", d: "Fluid synchronization modules with high-gloss data reflection technology.", i: Layers, c: "from-[#FF69B4] to-transparent" },
                        { t: "Pulse_Wave", d: "Experience the rhythm of your deployment with real-time waveform telemetry.", i: Activity, c: "from-[#00FFFF] to-transparent" },
                        { t: "Cyber_Vault", d: "Holographic encryption keys secured by a metallic hardware layer.", i: ShieldCheck, c: "from-white to-transparent" }
                    ].map((item, i) => (
                        <div key={i} className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-30 rounded-[60px] blur-2xl transition-opacity" style={{ backgroundImage: `linear-gradient(to bottom right, ${i === 0 ? '#FF69B4' : i === 1 ? '#00FFFF' : '#FFF'}, transparent)` }} />
                            <div className="relative p-12 bg-white/5 border-2 border-white/20 rounded-[60px] backdrop-blur-xl shadow-[inset_0_4px_10px_rgba(255,255,255,0.2)] flex flex-col items-center text-center space-y-8 transition-transform hover:-translate-y-4">
                                <div className={cn(
                                    "w-24 h-24 rounded-full flex items-center justify-center border-4 border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_4px_8px_rgba(255,255,255,0.6)]",
                                    i === 0 ? "bg-[#FF69B4]" : i === 1 ? "bg-[#00FFFF]" : "bg-white"
                                )}>
                                    <item.i className="w-12 h-12 text-black" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-4xl font-black tracking-tighter text-white uppercase italic">{item.t}</h4>
                                    <p className="text-sm font-bold text-white/50 leading-relaxed uppercase">
                                        {item.d}
                                    </p>
                                </div>
                                <div className="w-12 h-1 bg-white/20 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- CYBER-PRICING: CHROME CARDS --- */}
            <section className="bg-gradient-to-br from-zinc-800 to-black border-4 border-white/40 rounded-[80px] p-12 lg:p-24 text-white mx-2 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] shrink-0">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)] opacity-50" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="space-y-8 text-center lg:text-left">
                        <h2 className="text-7xl lg:text-[7rem] font-black italic tracking-tighter leading-none uppercase drop-shadow-[0_10px_20px_rgba(255,255,255,0.2)]">HOLOGRAPHIC.<br />SCALE.</h2>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-12">
                            <div className="space-y-2">
                                <div className="text-7xl font-black italic tracking-tighter text-[#FF69B4] hover:text-white transition-colors cursor-default">$2K</div>
                                <div className="text-[12px] font-black uppercase tracking-[0.4em] opacity-40">Monthly_Logic_Fee</div>
                            </div>
                            <div className="space-y-2 px-12 border-l-4 border-white/10">
                                <div className="text-7xl font-black italic tracking-tighter text-[#00FFFF] hover:text-white transition-colors cursor-default">Inf</div>
                                <div className="text-[12px] font-black uppercase tracking-[0.4em] opacity-40">Total_Bandwidth</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-black p-12 rounded-[60px] space-y-10 shadow-[20px_20px_0px_#FF69B4,-20px_-20px_0px_#00FFFF]">
                        <div className="space-y-6">
                            {[
                                "Cyber-Nomad Security Matrix",
                                "Reflective Data Mirroring",
                                "Zero-Latency Chrome API",
                                "Quantum-Grade Reliability"
                            ].map(f => (
                                <div key={f} className="flex items-center gap-6 text-[12px] font-black uppercase tracking-widest group">
                                    <CheckCircle2 className="w-6 h-6 text-[#FF69B4] group-hover:scale-125 transition-transform" />
                                    {f}
                                </div>
                            ))}
                        </div>
                        <button className="w-full h-20 bg-black text-white font-black uppercase tracking-[0.3em] text-[14px] rounded-3xl hover:bg-[#FF69B4] transition-all flex items-center justify-center gap-6 group">
                            JOIN_THE_FUTURE <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* --- Y2K FOOTER --- */}
            <footer className="py-24 border-t-2 border-white/10 flex flex-col items-center gap-16 shrink-0 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent" />
                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-12 gap-12">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.8)] border-4 border-[#00FFFF]">
                            <Command className="w-8 h-8 text-black" />
                        </div>
                        <div>
                            <h4 className="text-4xl font-black tracking-tighter uppercase italic text-white drop-shadow-[2px_2px_0px_#FF69B4]">Vi_Code.2K</h4>
                            <p className="text-[10px] font-black text-[#00FFFF] uppercase tracking-widest">Optimized_Era_©2026</p>
                        </div>
                    </div>
                    <div className="flex gap-12 text-[11px] font-black uppercase tracking-widest">
                        {["Archive", "Status", "Vault", "Logic"].map(l => (
                            <a key={l} href="#" className="text-white/40 hover:text-white transition-colors">{l}</a>
                        ))}
                    </div>
                </div>
                <div className="text-[12rem] md:text-[20rem] font-black italic uppercase text-white/5 select-none pointer-events-none tracking-tighter leading-none mt-[-4rem]">
                    STATIC
                </div>
            </footer>
        </div>
    );
};
