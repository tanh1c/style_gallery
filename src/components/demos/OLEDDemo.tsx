import { Activity,ArrowRight,Code,Cpu,Globe,Layers,ScanLine,Shield,Zap } from "lucide-react";
import React from "react";

export const OLEDDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#000000] overflow-y-auto text-white font-sans selection:bg-[#9333ea]/30 pb-32 relative text-left">
            {/* Cinematic Atmosphere Overlays - Cyber-Violet Palette */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20" />
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#9333ea]/5 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#3b82f6]/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10 px-6 lg:px-12 py-8 space-y-20">

                {/* OLED Stealth Header - Updated Colors */}
                <header className="h-14 px-8 flex items-center justify-between bg-[#000000]/80 backdrop-blur-3xl border border-white/5 rounded-full sticky top-4 z-50 shadow-[0_0_30px_rgba(0,0,0,1)] ring-1 ring-[#9333ea]/20 transition-all hover:ring-[#9333ea]/40 group">
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="w-8 h-8 bg-[#000000] border border-[#9333ea]/30 rounded-lg flex items-center justify-center group-hover:border-[#9333ea] transition-colors shadow-[0_0_10px_rgba(147,51,234,0.1)]">
                            <Code className="w-4 h-4 text-[#9333ea]" />
                        </div>
                        <span className="font-bold text-lg tracking-tight uppercase group-hover:text-[#9333ea] transition-colors">ViCode</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                        {["Engine", "Global", "Pricing"].map(item => (
                            <a key={item} href="#" className="hover:text-white transition-all transform hover:scale-105">{item}</a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[8px] font-bold text-[#9333ea]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#9333ea] animate-pulse" />
                            SYSTEM_ACTIVE
                        </div>
                        <button className="bg-[#9333ea] text-white px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                            Access
                        </button>
                    </div>
                </header>

                {/* OLED Hero Section - Obsidian Asset */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-8">
                    <div className="space-y-10 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-[#9333ea]/5 border border-[#9333ea]/30 rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(147,51,234,0.1)]">
                            <ScanLine className="w-3.5 h-3.5 text-[#9333ea]" />
                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#9333ea]">Hyper-Obsidian Architecture</span>
                        </div>
                        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Scale with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] via-[#3b82f6] to-[#0ea5e9]">Obsidian</span> <br />
                            Efficiency.
                        </h1>
                        <p className="text-xl text-white/30 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium tracking-tight">
                            True OLED silence for planetary infrastructures. Violet precision.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 pt-4">
                            <button className="h-14 px-10 bg-[#9333ea] text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] gap-3 shadow-[0_10px_30px_rgba(147,51,234,0.3)] hover:scale-105 transition-all active:scale-95 flex items-center justify-center group/btn border border-[#9333ea]/50 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/btn:translate-x-full duration-1000 -translate-x-full transition-transform" />
                                <span className="relative z-10">Start Developing</span>
                                <ArrowRight className="w-4 h-4 relative z-10" />
                            </button>
                            <button className="h-14 px-10 border border-white/10 bg-white/5 text-white/40 hover:text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:border-white/30">
                                Engineering_Docs
                            </button>
                        </div>
                    </div>

                    <div className="relative group">
                        {/* 3D Asset Container - New Obsidian-Violet Asset Integration */}
                        <div className="w-full aspect-square bg-gradient-to-br from-white/5 to-transparent rounded-[40px] border border-white/10 p-2 flex items-center justify-center shadow-[0_0_80px_rgba(0,0,0,1)] group-hover:border-[#9333ea]/30 transition-all duration-700 relative overflow-hidden ring-1 ring-white/5">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <img
                                src="/vicode_oled_obsidian_server.png"
                                alt="ViCode OLED Obsidian Engine"
                                className="w-[90%] h-[90%] object-contain drop-shadow-[0_0_60px_rgba(147,51,234,0.3)] z-10 transition-transform group-hover:scale-[1.02] duration-1000"
                            />

                            {/* HUD Overlay - Violet Tone */}
                            <div className="absolute top-10 right-10 flex flex-col items-end gap-2 z-20">
                                <div className="flex items-center gap-2 text-[8px] font-black text-[#9333ea] tracking-widest bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#9333ea]/20 group-hover:border-[#9333ea] transition-all">
                                    <div className="w-1 h-1 rounded-full bg-[#9333ea] animate-ping" />
                                    SYNCING_CLUSTER
                                </div>
                            </div>
                        </div>

                        <div className="absolute -inset-10 bg-[#9333ea]/5 blur-[100px] rounded-full -z-10 animate-pulse" />
                    </div>
                </section>

                {/* Feature Grid - Precision Blocks with Violet Accent */}
                <section className="space-y-16 py-8">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <div className="h-px w-16 bg-[#9333ea] shadow-[0_0_15px_rgba(147,51,234,1)]" />
                        <h2 className="text-3xl font-bold tracking-[0.3em] uppercase italic text-white/40">Infrastructure.Nodes</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "Zero Latency", desc: "Optimizing flow through the obsidian spine." },
                            { icon: Shield, title: "Hardened Core", desc: "Encryption layers beyond the violet horizon." },
                            { icon: Globe, title: "Global Sphere", desc: "Planetary distribution across 124 stealth pods." },
                            { icon: Activity, title: "Sync Engine", desc: "AI deployment with sapphire precision logic." },
                            { icon: Cpu, title: "Bare Metal", desc: "Isolated instances with infinite cooling cycles." },
                            { icon: Layers, title: "Multi-Stack", desc: "Modular devkits for planetary scale clusters." }
                        ].map((feature, i) => (
                            <div key={i} className="bg-[#050505] p-10 rounded-[32px] border border-white/5 shadow-2xl space-y-8 hover:bg-[#080808] hover:border-[#9333ea]/20 transition-all group cursor-pointer relative overflow-hidden text-left">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#9333ea]/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-12 h-12 bg-black border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-[#9333ea]/50 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.2)] transition-all">
                                    <feature.icon className="w-5 h-5 text-[#9333ea]/60 group-hover:text-[#9333ea] transition-colors" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#9333ea] transition-colors uppercase">{feature.title}</h3>
                                    <p className="text-[10px] text-white/30 leading-relaxed font-bold uppercase tracking-tight">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tech Terminal Section - Violet & Blue Theme */}
                <section className="bg-[#020202] rounded-[48px] border border-white/5 p-12 lg:p-20 shadow-[0_40px_100px_rgba(0,0,0,1)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(147,51,234,0.05),transparent)]" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
                        <div className="space-y-12 text-left">
                            <h3 className="text-5xl lg:text-7xl font-black tracking-tight leading-none italic uppercase">Hyper<br /><span className="text-[#3b82f6]">Obsidian.</span></h3>
                            <p className="text-lg text-white/30 leading-relaxed uppercase tracking-widest font-bold">Absolute efficiency in the crystalline darkness. High-performance software through sheer depth.</p>
                            <div className="grid grid-cols-2 gap-10">
                                {[
                                    { l: "Uptime", v: "100%", c: "text-[#9333ea]" },
                                    { l: "Latency", v: "0.2ms", c: "text-white" }
                                ].map((s, i) => (
                                    <div key={i} className="p-8 bg-black border border-white/5 rounded-[28px] shadow-inner group-hover:border-[#9333ea]/10 transition-colors">
                                        <div className={`text-4xl font-black tracking-tighter ${s.c}`}>{s.v}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/10 mt-1">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#000000] border border-white/10 rounded-[32px] p-10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] relative min-h-[400px] flex flex-col justify-center overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 font-black text-6xl text-white/[0.02] select-none tracking-tighter uppercase italic">Engine</div>
                            <div className="space-y-6 font-mono text-sm">
                                <div className="flex gap-4">
                                    <span className="text-[#9333ea]">root@obsidian:~$</span>
                                    <span className="text-white">vicode deploy --global</span>
                                </div>
                                <div className="pl-6 space-y-2 opacity-50">
                                    <p className="text-[#3b82f6] tracking-tight">{">"} Initializing violet cluster... [OK]</p>
                                    <p className="inline-block bg-[#9333ea]/10 text-[#9333ea] border border-[#9333ea]/20 px-4 py-1.5 font-bold uppercase text-[10px] mt-6 tracking-widest shadow-[0_0_20px_rgba(147,51,234,0.1)]">✓ Global_Status_Online_12ms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OLED Footer - Updated Palette */}
                <footer className="pt-24 pb-16 space-y-20 border-t border-white/5 relative">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-16">
                        <div className="col-span-2 space-y-10 text-left">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#9333ea] text-white flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                                    <span className="font-black text-xl">O</span>
                                </div>
                                <span className="font-bold text-2xl tracking-tighter uppercase italic">ViCode Obsidian.</span>
                            </div>
                            <p className="text-[11px] text-white/20 leading-relaxed max-w-sm font-bold uppercase tracking-[0.2em] opacity-60">
                                Premium obsidian engineering. High-performance software through pitch black deep. 2026.
                            </p>
                        </div>
                        {[
                            { title: "Network", links: ["Obsidian", "Stealth", "Global"] },
                            { title: "System", links: ["API", "Cli", "Library"] },
                            { title: "Terms", links: ["Privacy", "Policy", "Terms"] },
                            { title: "Connect", links: ["Twitter", "Github", "Discord"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-8 text-left">
                                <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-white">
                                    {group.title}
                                </h5>
                                <ul className="space-y-5 text-left">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-[10px] text-white/20 hover:text-[#9333ea] transition-colors uppercase font-bold tracking-widest">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-white/5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/10 italic">
                        <span className="px-6 py-3 bg-white/5 border border-white/5 rounded-full shadow-2xl">© 2026 ViCode Obsidian Infrastructure Grp.</span>
                        <div className="flex gap-12 items-center tracking-widest opacity-50">
                            <span>V-0.9.8_HYPER</span>
                            <span>ZONE: DEEP_STEALTH</span>
                        </div>
                    </div>
                </footer>

                {/* Floating Action Button - Violet Accent */}
                <div className="fixed bottom-10 right-10 z-50">
                    <button className="h-14 px-10 bg-black border border-[#9333ea]/40 text-[#9333ea] rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-[0_10px_40px_rgba(0,0,0,1)] hover:border-[#9333ea] hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:text-white transition-all group flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#9333ea] animate-ping" />
                        Obsidian_Network
                    </button>
                </div>
            </div>
        </div>
    );
};
