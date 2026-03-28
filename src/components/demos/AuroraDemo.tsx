import { Activity,ArrowRight,Code,Cpu,Globe,Layers,Satellite,Shield,Sparkles,Zap } from "lucide-react";
import React from "react";

export const AuroraDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#020617] overflow-y-auto text-white font-sans selection:bg-cyan-500/30 pb-32 relative text-left">
            {/* Aurora Atmospheric Meshes */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-indigo-600/20 blur-[160px] rounded-full animate-pulse" />
                <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-violet-600/20 blur-[180px] rounded-full" />
                <div className="absolute -bottom-[10%] left-[20%] w-[70%] h-[70%] bg-cyan-600/20 blur-[200px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100 mix-blend-overlay" />
            </div>

            <div className="max-w-[1280px] mx-auto relative z-10 px-8 lg:px-12 py-8 space-y-16">

                {/* Floating Glass Header */}
                <header className="h-20 flex items-center justify-between px-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[30px] sticky top-6 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5 transition-all hover:ring-white/20 group">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)] group-hover:rotate-12 transition-transform">
                            <Code className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-black text-2xl tracking-tighter uppercase italic bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40">ViCode://</span>
                            <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-cyan-400 mt-1">Lumine_Engine</span>
                        </div>
                    </div>
                    <nav className="hidden lg:flex items-center gap-12 font-black text-[10px] uppercase tracking-[0.3em] text-white/30">
                        {["System", "Neural", "Atmosphere"].map(item => (
                            <button key={item} className="hover:text-white transition-all hover:scale-110 transform cursor-pointer">
                                {item}
                            </button>
                        ))}
                    </nav>
                    <div className="flex items-center gap-6">
                        <button className="hidden sm:flex items-center gap-2 text-[9px] font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                            <Satellite className="w-3.5 h-3.5 text-indigo-400" />
                            Network_Live
                        </button>
                        <button className="bg-white text-black px-10 py-3 font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-[0_15px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all">
                            Access
                        </button>
                    </div>
                </header>

                {/* Cinematic Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-8">
                    <div className="space-y-12 text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-2.5 backdrop-blur-xl shadow-inner group/badge cursor-default">
                            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 group-badge:text-white">Next-Gen Aurora Architecture</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            Future in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-violet-400 to-cyan-400 pb-2">Atmosphere.</span>
                        </h1>
                        <p className="text-2xl text-white/40 leading-snug max-w-lg mx-auto lg:mx-0 font-medium tracking-tight">
                            Build software through vibrant flows. ViCode Lumine brings atmospheric precision to planetary deployments.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 pt-4">
                            <button className="h-16 px-12 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-[24px] text-[12px] font-black uppercase tracking-[0.2em] shadow-[0_20px_60px_rgba(79,70,229,0.3)] hover:shadow-[0_25px_80px_rgba(139,92,246,0.4)] hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center justify-center gap-4 group outline-none focus:ring-4 focus:ring-violet-600/50">
                                Initialize Sync
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="h-16 px-12 border border-white/10 bg-white/5 text-white/40 hover:text-white hover:bg-white/10 rounded-[24px] text-[12px] font-black uppercase tracking-[0.2em] transition-all backdrop-blur-xl group">
                                <span className="group-hover:tracking-[0.3em] transition-all">Lumine_Docs</span>
                            </button>
                        </div>
                    </div>

                    <div className="relative group">
                        {/* Asset Container - Aurora Core */}
                        <div className="w-full aspect-square bg-white/5 backdrop-blur-3xl rounded-[60px] border border-white/10 p-2 flex items-center justify-center shadow-[0_50px_100px_rgba(0,0,0,0.5)] group-hover:border-violet-500/30 transition-all duration-700 relative overflow-hidden ring-1 ring-white/5">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.2),transparent)]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 blur-[80px] -z-10" />
                            <img
                                src="/vicode_aurora_core_engine.png"
                                alt="ViCode Lumine Core Engine"
                                className="w-[90%] h-[90%] object-contain drop-shadow-[0_0_80px_rgba(139,92,246,0.3)] z-10 transition-transform group-hover:scale-105 duration-1000 transform-gpu"
                            />

                            {/* HUD Overlay */}
                            <div className="absolute top-12 right-12 z-20 flex flex-col gap-3">
                                <div className="bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                                    <span className="text-[10px] font-black tracking-widest uppercase">Atmosphere_Ready</span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -inset-10 bg-indigo-600/10 blur-[130px] rounded-full -z-10 animate-pulse" />
                    </div>
                </section>

                {/* Atmospheric Feature Grid */}
                <section className="space-y-16 py-12">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                        <h2 className="text-4xl font-black italic uppercase tracking-[0.5em] text-white/20">Lumine.Nodes</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: Zap, title: "Insta-Flow", desc: "Gradient-accelerated deployment logic.", accent: "from-cyan-500" },
                            { icon: Shield, title: "Prism Lock", desc: "Refractive encryption for total security.", accent: "from-violet-500" },
                            { icon: Globe, title: "Fluid Global", desc: "Planetary distribution with edge Lumine.", accent: "from-indigo-500" },
                            { icon: Activity, title: "Flow Monitor", desc: "Real-time atmospheric telemetry.", accent: "from-emerald-500" },
                            { icon: Cpu, title: "Lumine Core", desc: "High-density refractive compute cycles.", accent: "from-blue-500" },
                            { icon: Layers, title: "Atmosphere JS", desc: "Full-stack vibrancy through one engine.", accent: "from-pink-500" }
                        ].map((f, i) => (
                            <div key={i} className="bg-white/5 p-12 rounded-[50px] border border-white/10 backdrop-blur-2xl shadow-2xl space-y-10 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer relative overflow-hidden text-left">
                                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${f.accent} to-transparent blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity`} />
                                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:border-white/40 transition-all shadow-inner">
                                    <f.icon className="w-8 h-8 text-white/20 group-hover:text-white transition-colors" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black tracking-tight text-white uppercase group-hover:tracking-[0.1em] transition-all">{f.title}</h3>
                                    <p className="text-[11px] text-white/30 leading-relaxed font-bold uppercase tracking-widest">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Glass Terminal Section */}
                <section className="bg-gradient-to-br from-indigo-900/20 via-black to-cyan-900/20 rounded-[64px] border border-white/10 p-12 lg:p-24 shadow-[0_60px_120px_rgba(0,0,0,0.8)] relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(79,70,229,0.1),transparent)]" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 items-center">
                        <div className="space-y-12">
                            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter italic uppercase leading-none">VIBRANT.<br /><span className="text-indigo-400">ENGINE.</span></h2>
                            <p className="text-xl text-white/30 font-bold uppercase tracking-widest italic leading-relaxed">High-performance software through sheer aesthetic force. The Lumine Engine redefined.</p>
                            <div className="flex gap-10">
                                {[
                                    { l: "Uptime", v: "100%", g: "from-cyan-400" },
                                    { l: "Speed", v: "0.1s", g: "from-violet-400" }
                                ].map((s, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className={`text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${s.g} to-white`}>{s.v}</div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-black/50 backdrop-blur-3xl border border-white/10 rounded-[40px] p-12 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] relative min-h-[420px] flex flex-col justify-center overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 text-white/5 font-black text-8xl italic uppercase select-none opacity-20 transform translate-x-10 -translate-y-10 tracking-widest">LUMINE</div>
                            <div className="space-y-8 font-mono text-sm relative z-10">
                                <div className="flex gap-4 items-center">
                                    <span className="text-cyan-400 font-black">LUMINE://</span>
                                    <span className="text-white font-bold opacity-80">vicode deploy --aurora</span>
                                </div>
                                <div className="pl-6 space-y-3 opacity-60">
                                    <p className="text-indigo-400 font-bold">{">"} Initializing vibrant mesh... [OK]</p>
                                    <p className="text-violet-400 font-bold">{">"} Calibrating Lumine core... [OK]</p>
                                    <div className="pt-4">
                                        <div className="inline-block bg-white/10 border border-white/20 px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.1)] text-white">
                                            ✓ CLUSTER_ONLINE_12MS
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Aurora Footer */}
                <footer className="pt-32 pb-16 space-y-24 border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-20">
                        <div className="col-span-2 space-y-12 text-left">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-2xl shadow-2xl">
                                    <span className="font-black text-2xl">V</span>
                                </div>
                                <span className="font-black text-3xl tracking-tighter uppercase italic">ViCode Lumine.</span>
                            </div>
                            <p className="text-xs text-white/20 leading-relaxed max-w-sm font-bold uppercase tracking-[0.2em] italic">
                                Building a software world that flows. The planetary infrastructure of pure vibration. 2026.
                            </p>
                        </div>
                        {[
                            { title: "Platform", links: ["Lumine", "Mesh", "Neural"] },
                            { title: "Service", links: ["L-CLI", "L-API", "Core"] },
                            { title: "Privacy", links: ["Policy", "Terms", "Legal"] },
                            { title: "Social", links: ["Twitter", "Github", "Discord"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-10 text-left">
                                <h5 className="text-[11px] font-black uppercase tracking-[0.6em] text-cyan-400/50">
                                    {group.title}
                                </h5>
                                <ul className="space-y-6 text-left">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-[11px] text-white/20 hover:text-white transition-all uppercase font-black tracking-widest">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-20 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-white/10">
                        <span className="px-10 py-4 bg-white/5 border border-white/10 rounded-full shadow-inner">© 2026 ViCode Lumine Infrastructure Grp.</span>
                        <div className="flex gap-16 font-extrabold opacity-30">
                            <span>V-1.0.2_AURORA</span>
                            <span>STATUS: VIBRANT</span>
                        </div>
                    </div>
                </footer>

                {/* Global Action Button - Aurora Focus */}
                <div className="sticky bottom-12 ml-auto w-fit mr-0 z-50">
                    <button className="h-14 w-14 lg:h-20 lg:w-20 bg-white/10 border border-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 transition-all focus:ring-4 focus:ring-cyan-500/30 group outline-none overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-violet-500/0 to-cyan-500/0 group-hover:via-violet-500/20 transition-all" />
                        <Activity className="w-8 h-8 lg:w-10 lg:h-10 text-white group-hover:text-cyan-400 transition-colors" />
                    </button>
                </div>
            </div>
        </div>
    );
};
