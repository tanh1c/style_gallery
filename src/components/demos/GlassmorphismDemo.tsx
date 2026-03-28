import { Button } from "@/components/ui/button";
import { Code,Cpu,Globe,Layers,Shield,Smartphone,Sparkles,Terminal,Zap } from "lucide-react";
import React from "react";

export const GlassmorphismDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#020504] overflow-y-auto text-white font-sans selection:bg-emerald-500/30 relative">
            {/* ABSOLUTE Background Mesh - Midnight Aurora Palette */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-[#10b981]/15 blur-[150px] rounded-full mix-blend-plus-lighter animate-pulse" />
                <div className="absolute top-[10%] right-[-10%] w-[70%] h-[70%] bg-[#8b5cf6]/10 blur-[140px] rounded-full mix-blend-plus-lighter" />
                <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-[#0ea5e9]/10 blur-[130px] rounded-full mix-blend-plus-lighter" />
            </div>

            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] z-0 pointer-events-none" />

            <div className="max-w-[1200px] mx-auto relative z-10 px-6 lg:px-12 py-8 space-y-20">
                {/* Crystal Floating Navigation - Updated Colors */}
                <nav className="h-16 px-8 flex items-center justify-between bg-white/[0.04] backdrop-blur-[60px] border border-white/20 rounded-[24px] sticky top-4 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-9 h-9 bg-gradient-to-tr from-[#10b981] via-[#8b5cf6] to-[#0ea5e9] flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:rotate-[360deg] transition-transform duration-1000">
                                <Code className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-black text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40 uppercase">ViCode</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <button className="bg-emerald-500 text-white border border-emerald-400/30 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:scale-105 transition-transform shadow-[0_15px_30px_rgba(16,185,129,0.2)]">
                            Launch Now
                        </button>
                    </div>
                </nav>

                {/* Hero Section - Updated Aurora Palette */}
                <section className="relative flex flex-col items-center text-center space-y-12">
                    <div className="space-y-8 max-w-4xl z-10">
                        <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/20 rounded-xl px-4 py-1.5 backdrop-blur-md shadow-2xl ring-1 ring-white/10 group cursor-default">
                            <Sparkles className="w-3.5 h-3.5 text-[#10b981] animate-spin-slow" />
                            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50">Aurora Interface v2.6.4</span>
                        </div>

                        <h1 className="text-[40px] md:text-[60px] lg:text-[80px] font-black leading-[0.85] tracking-tighter text-white drop-shadow-2xl uppercase">
                            STELLAR<br /><span className="bg-clip-text text-transparent bg-gradient-to-b from-[#10b981] via-white/80 to-white/5 italic">AURORA POWER.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto font-medium tracking-tight px-4 opacity-80">
                            Harness planetary compute through an emerald sheer interface.
                            Crystalline deployment across the aurora mesh.
                        </p>
                    </div>

                    {/* Central Glass Card - Emerald Glows */}
                    <div className="w-full max-w-2xl px-6 z-20">
                        <div className="bg-[#050b09]/40 backdrop-blur-[100px] border border-white/30 rounded-[48px] shadow-[0_50px_100px_rgba(0,0,0,0.8)] p-10 lg:p-12 relative overflow-hidden group ring-1 ring-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 via-transparent to-[#8b5cf6]/10 pointer-events-none" />

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                                {[
                                    { l: "Stream", v: "12ms", c: "text-emerald-400", icon: Globe },
                                    { l: "Security", v: "ZET", c: "text-violet-400", icon: Shield },
                                    { l: "Scale", v: "Inf", c: "text-sky-400", icon: Zap }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-5 text-center group/stat">
                                        <div className="w-12 h-12 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover/stat:border-emerald-500/30 transition-all shadow-xl">
                                            <stat.icon className={`w-6 h-6 ${stat.c} opacity-60`} />
                                        </div>
                                        <div className="space-y-1">
                                            <div className={`text-3xl font-black tracking-tighter ${stat.c}`}>{stat.v}</div>
                                            <div className="text-[8px] font-black uppercase tracking-[0.3em] text-white/30">{stat.l}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Grid - Deep Aurora Glows */}
                <section className="space-y-12">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="w-16 h-px bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                        <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic opacity-70">Aurora Nodes.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "Velocity", desc: "Emerald deployment in 12ms.", color: "text-emerald-400" },
                            { icon: Shield, title: "Vault", desc: "Encryption through violet glass.", color: "text-violet-400" },
                            { icon: Globe, title: "Orbit", desc: "Aurora compute mesh system.", color: "text-sky-400" },
                            { icon: Layers, title: "Sheer Sync", desc: "Crystalline state sync.", color: "text-cyan-400" },
                            { icon: Cpu, title: "Grid Core", desc: "Optimized low-latency teal nodes.", color: "text-teal-400" },
                            { icon: Smartphone, title: "Fluid UI", desc: "Stealth device experience.", color: "text-indigo-400" }
                        ].map((f, i) => (
                            <div key={i} className="p-10 bg-[#050b09]/30 backdrop-blur-[60px] border border-white/20 rounded-[40px] space-y-8 hover:bg-emerald-500/[0.05] transition-all hover:-translate-y-2 group shadow-2xl ring-1 ring-white/10">
                                <div className="w-14 h-14 bg-white/10 border border-white/10 flex items-center justify-center rounded-[18px] group-hover:border-emerald-500/50 transition-all shadow-lg">
                                    <f.icon className={`w-6 h-6 ${f.color} opacity-40 group-hover:opacity-100 transition-opacity`} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black tracking-tighter uppercase">{f.title}</h3>
                                    <p className="text-[10px] text-white/30 leading-relaxed font-bold uppercase tracking-[0.1em]">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Detailed Code View - Deep Ocean Glow */}
                <section className="bg-white/[0.02] backdrop-blur-[80px] border border-white/10 rounded-[48px] p-10 lg:p-16 overflow-hidden relative group ring-1 ring-white/10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#10b981]/10 to-transparent pointer-events-none" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
                        <div className="space-y-10 text-left">
                            <h3 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none italic uppercase">Stellar<br /><span className="text-emerald-500/40">Sync.</span></h3>
                            <div className="space-y-6 text-white/40 text-base md:text-lg leading-relaxed font-medium uppercase tracking-tight opacity-70">
                                <p>ViCode provides an emerald infrastructure where the code meets the cosmos. Precision through the aurora.</p>
                            </div>
                            <div className="pt-4 flex flex-wrap gap-10">
                                {[
                                    { l: "Uptime", v: "100%", c: "text-emerald-400" },
                                    { l: "Latency", v: "0.2ms", c: "text-violet-400" }
                                ].map((s, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className={`text-3xl font-black ${s.c} uppercase italic tracking-tighter`}>{s.v}</div>
                                        <div className="text-[9px] uppercase font-black tracking-[0.3em] text-white/20">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#020504]/80 backdrop-blur-[100px] border border-emerald-500/20 rounded-[32px] p-8 font-mono text-xs space-y-6 relative shadow-inner overflow-hidden flex flex-col justify-center min-h-[300px] text-left">
                            <div className="flex gap-2.5 mb-2">
                                <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
                                <div className="w-3 h-3 rounded-full bg-violet-500/20" />
                                <div className="w-3 h-3 rounded-full bg-sky-500/20" />
                            </div>
                            <div className="space-y-3 font-bold">
                                <p className="text-white/20 tracking-tighter">// stellar_sync_vicode...</p>
                                <p className="text-emerald-400">$ vicode deploy --aurora</p>
                                <div className="h-px bg-white/5 w-full" />
                                <p className="text-violet-400 font-black italic">✓ system_crystallized_global</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer - Aurora Themed */}
                <footer className="pt-24 pb-16 space-y-20 border-t border-white/10 relative">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12">
                        <div className="col-span-2 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-tr from-[#10b981] to-[#8b5cf6] flex items-center justify-center rounded-xl shadow-xl">
                                    <span className="font-black text-white text-base">V</span>
                                </div>
                                <span className="font-black text-xl tracking-tighter text-white uppercase italic">ViCode SaaS</span>
                            </div>
                            <p className="text-[11px] text-white/40 leading-relaxed max-w-sm font-bold uppercase tracking-widest opacity-60">
                                Premium engineering platform for aurora-scale teams. Crystalline infrastructure.
                            </p>
                        </div>
                        {[
                            { title: "Platform", links: ["Features", "Edge", "Security"] },
                            { title: "Devs", links: ["Docs", "API", "SDKs"] },
                            { title: "Company", links: ["About", "News", "Legal"] },
                            { title: "Social", links: ["Twitter", "GitHub", "Discord"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-6">
                                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                                    {group.title}
                                </h5>
                                <ul className="space-y-4">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-[11px] text-white/30 hover:text-emerald-400 transition-colors uppercase tracking-[0.2em] font-black">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                        <span className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-3xl shadow-2xl ring-1 ring-white/5">© 2026 ViCode Engineering Inc.</span>
                        <div className="flex gap-10">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </footer>

                {/* Floating Command Bar Overlay - Emerald Accent */}
                <div className="sticky bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 px-6 py-4 bg-white/[0.05] backdrop-blur-[60px] border border-white/40 rounded-[28px] shadow-[0_40px_80px_rgba(0,0,0,0.8)] z-50 hover:bg-white/[0.08] transition-all ring-1 ring-white/20 group animate-in slide-in-from-bottom-5 duration-1000 w-fit mx-auto">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#10b981] to-[#8b5cf6] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:rotate-[360deg] transition-transform duration-1000 shrink-0">
                            <Terminal className="w-5 h-5 text-white" />
                        </div>
                        <div className="hidden sm:flex flex-col min-w-max">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">ViCode Aurora</span>
                            <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.3em]">Mesh Encrypted</span>
                        </div>
                    </div>
                    <Button className="bg-emerald-500 text-white px-8 h-11 text-[10px] font-black uppercase tracking-[0.25em] rounded-xl hover:scale-105 transition-transform shadow-[0_15px_40px_rgba(16,185,129,0.3)] border border-emerald-400/30 shrink-0 whitespace-nowrap">
                        Claim Access
                    </Button>
                </div>
            </div>
        </div>
    );
};
