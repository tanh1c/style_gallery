import { ArrowRight,Chrome,Cpu,Database,Globe,HardDrive,Monitor,Save,Shield,Terminal,Zap } from "lucide-react";
import React from "react";

export const RetroFuturismDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#050110] overflow-y-auto text-[#00FFFF] font-mono selection:bg-[#FF00FF]/30 pb-32 relative text-left">
            {/* Scanline Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[repeating-linear-gradient(rgba(0,0,0,0)_0px,rgba(0,0,0,0)_1px,rgba(0,255,255,0.5)_2px,rgba(0,255,255,0.5)_3px)] bg-[size:100%_4px]" />

            {/* Retro Grid Floor */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(transparent 95%, #FF00FF 100%), linear-gradient(90deg, transparent 95%, #FF00FF 100%)',
                    backgroundSize: '40px 40px',
                    perspective: '1000px',
                    transform: 'rotateX(60deg) translateY(-20%)',
                    transformOrigin: 'top center',
                    maskImage: 'linear-gradient(to bottom, transparent, black)'
                }} />

            <div className="max-w-[1240px] mx-auto relative z-10 px-8 lg:px-12 py-10 space-y-20">

                {/* Chrome Header */}
                <header className="h-16 flex items-center justify-between px-8 bg-black border-2 border-[#00FFFF] rounded shadow-[0_0_15px_rgba(0,255,255,0.3)] sticky top-6 z-50">
                    <div className="flex items-center gap-4 cursor-pointer group">
                        <div className="w-10 h-10 border-2 border-[#FF00FF] flex items-center justify-center bg-black text-[#FF00FF] shadow-[0_0_10px_rgba(255,0,255,0.5)] group-hover:bg-[#FF00FF] group-hover:text-black transition-colors">
                            <Monitor className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-2xl tracking-tighter uppercase italic drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">ViCode.exe</span>
                    </div>
                    <nav className="hidden lg:flex items-center h-full text-[11px] font-black uppercase tracking-[0.3em] gap-10">
                        {["Modules", "Network", "Archive"].map(item => (
                            <a key={item} href="#" className="hover:text-[#FF00FF] transition-colors">{item}</a>
                        ))}
                    </nav>
                    <button className="bg-[#00FFFF] text-black px-6 py-2 font-black text-[11px] uppercase tracking-[0.2em] border-2 border-[#00FFFF] hover:bg-black hover:text-[#00FFFF] transition-all shadow-[4px_4px_0_rgba(0,255,255,0.3)]">
                        Initialize
                    </button>
                </header>

                {/* Synthwave Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-8">
                    <div className="space-y-12 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2.5 bg-black border border-[#FF00FF] px-4 py-1.5 shadow-[0_0_10px_rgba(255,0,255,0.3)]">
                            <Save className="w-3.5 h-3.5 text-[#FF00FF]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF00FF]">Boot_Sequence: v2.0-84</span>
                        </div>
                        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tighter uppercase text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                            The <span className="text-[#FF00FF]">Chrome</span> <br />
                            Frontier <br />
                            Await://
                        </h1>
                        <p className="text-xl text-[#00FFFF]/60 leading-relaxed max-w-lg mx-auto lg:mx-0 font-bold uppercase tracking-tight">
                            Nostalgic precision for the 2026 infra. High-end compute in a vaporwave world.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
                            <button className="h-16 px-12 bg-black text-[#FF00FF] border-2 border-[#FF00FF] font-black uppercase tracking-[0.2em] shadow-[8px_8px_0_#FF00FF] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-4 group">
                                Boot System
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="h-16 px-12 border-2 border-[#00FFFF] text-[#00FFFF] font-black uppercase tracking-[0.2em] hover:bg-[#00FFFF] hover:text-black transition-all">
                                Source_Code
                            </button>
                        </div>
                    </div>

                    <div className="relative group">
                        {/* CSS-Built Retro Terminal Box */}
                        <div className="w-full aspect-square bg-[#0D0221] border-4 border-[#00FFFF] shadow-[0_0_50px_rgba(0,255,255,0.2),inset_0_0_30px_rgba(0,255,255,0.1)] p-1 flex items-center justify-center relative overflow-hidden group hover:border-[#FF00FF] transition-colors duration-700 rounded-lg">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,255,0.1),transparent)]" />

                            {/* Interior CRT Simulation */}
                            <div className="w-[90%] h-[90%] bg-black border-2 border-[#00FFFF]/30 relative flex flex-col items-center justify-center overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00FFFF]/20 animate-scan" style={{ top: '0%' }} />
                                <Chrome className="w-40 h-40 text-[#00FFFF]/20 group-hover:text-[#FF00FF]/40 transition-colors animate-pulse mb-8" />
                                <div className="space-y-2 text-center">
                                    <div className="text-[#00FFFF] text-sm font-black tracking-widest uppercase">System_Load_Active</div>
                                    <div className="text-[#FF00FF] text-[10px] animate-flicker">CPU: 420.69 MHz</div>
                                </div>
                                <div className="absolute bottom-6 left-6 flex gap-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className={`w-2 h-2 ${i < 3 ? 'bg-[#00FFFF]' : 'bg-[#FF00FF]'} animate-pulse`} style={{ animationDelay: `${i * 150}ms` }} />
                                    ))}
                                </div>
                            </div>

                            <div className="absolute bottom-8 right-8 text-[9px] font-black text-[#00FFFF] uppercase tracking-widest bg-black px-3 py-1 border border-[#00FFFF]/30">DEF_ID: CRT-84</div>
                        </div>
                        <div className="absolute -inset-10 bg-[#FF00FF]/5 blur-[100px] rounded-full -z-10 animate-pulse" />
                    </div>
                </section>

                {/* Retro Module Grid */}
                <section className="space-y-16 py-12">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#FF00FF] to-transparent shadow-[0_0_15px_#FF00FF]" />
                        <h2 className="text-3xl font-black italic uppercase tracking-[0.4em] text-[#00FFFF]/40">System.Modules</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: Zap, title: "Overclock", desc: "Push infrastructure beyond the magenta line.", color: "border-[#FF00FF] text-[#FF00FF]" },
                            { icon: Shield, title: "Bit Protect", desc: "Hardware-level encryption for the archive.", color: "border-[#00FFFF] text-[#00FFFF]" },
                            { icon: Globe, title: "Analog Mesh", desc: "Planetary sync via the old-world fiber.", color: "border-white text-white" },
                            { icon: Cpu, title: "L-Chipsets", desc: "Virtual silicon with nostalgic compute.", color: "border-[#FFFF00] text-[#FFFF00]" },
                            { icon: Database, title: "Disk Shard", desc: "Floppy-scale redundancy at planetary speed.", color: "border-[#00FF00] text-[#00FF00]" },
                            { icon: HardDrive, title: "Deep Save", desc: "Permanent state storage in magnetic cloud.", color: "border-[#FF5500] text-[#FF5500]" }
                        ].map((f, i) => (
                            <div key={i} className={`bg-black/50 p-12 border-2 ${f.color.split(' ')[0]} shadow-[inset_0_0_20px_rgba(0,0,0,1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all group cursor-pointer relative flex flex-col space-y-8 overflow-hidden`}>
                                <div className="absolute top-0 right-0 p-12 font-black text-6xl text-white/[0.02] select-none tracking-tighter">0{i + 1}</div>
                                <div className={`w-14 h-14 border-2 ${f.color.split(' ')[0]} flex items-center justify-center bg-black group-hover:bg-white group-hover:border-white transition-all`}>
                                    <f.icon className={`w-7 h-7 ${f.color.split(' ')[1]} group-hover:text-black transition-colors`} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-black tracking-tight uppercase italic">{f.title}</h3>
                                    <p className="text-[10px] leading-relaxed font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CRT Terminal Information */}
                <section className="bg-black border-4 border-double border-[#00FFFF]/20 p-12 lg:p-24 shadow-[0_40px_100px_rgba(0,0,0,1)] relative overflow-hidden group hover:border-[#00FFFF]/40 transition-colors">
                    <div className="absolute inset-0 bg-[#00FFFF]/[0.02]" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 items-center">
                        <div className="space-y-12">
                            <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter italic leading-none text-white drop-shadow-[0_0_10px_#00FFFF]">CRT.<br /><span className="text-[#FF00FF]">LOGIC.</span></h2>
                            <p className="text-xl text-[#00FFFF]/40 font-bold uppercase tracking-widest italic leading-relaxed">Infrastructure defined by the scanline. Raw precision. Nostalgic speed.</p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { l: "Uptime", v: "100%", c: "text-[#00FFFF]" },
                                    { l: "Hz Rate", v: "60Hz", c: "text-[#FF0000]" }
                                ].map((s, i) => (
                                    <div key={i} className="bg-black border-2 border-white/5 p-8 shadow-[inset_0_2px_10px_rgba(0,0,0,1)]">
                                        <div className={`text-5xl font-black italic ${s.c}`}>{s.v}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest mt-1 opacity-20">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#050110] border-2 border-[#FF00FF]/30 p-12 min-h-[400px] flex flex-col justify-center relative shadow-[inset_0_0_30px_#000]">
                            <div className="absolute top-0 right-0 p-8 font-black text-6xl text-white/[0.02] select-none tracking-tighter uppercase italic">EXE://</div>
                            <div className="space-y-6 font-mono text-sm">
                                <div className="flex gap-4">
                                    <span className="text-[#00FFFF]">C:\VICODE{">"}</span>
                                    <span className="text-white">vicode.exe --run</span>
                                </div>
                                <div className="pl-6 space-y-2 opacity-60">
                                    <p className="text-[#FF00FF]">{">"} Bypassing neon clusters... [OK]</p>
                                    <p className="text-white">{">"} Chroming interface... [OK]</p>
                                    <div className="mt-8 px-4 py-2 border-2 border-[#00FFFF] inline-block font-black uppercase text-xs animate-pulse">
                                        SUCCESS_LOAD_2026
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Retro Footer */}
                <footer className="pt-32 pb-16 space-y-20 border-t-2 border-[#00FFFF]/10 relative">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-20">
                        <div className="col-span-2 space-y-10 text-left">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#FF00FF] text-black flex items-center justify-center rounded shadow-[0_0_15px_#FF00FF]">
                                    <span className="font-black text-2xl">V</span>
                                </div>
                                <span className="font-black text-3xl tracking-tighter uppercase italic text-white shadow-sm">ViCode.exe</span>
                            </div>
                            <p className="text-xs text-[#00FFFF]/20 leading-relaxed max-w-sm font-bold uppercase tracking-[0.2em] italic">
                                Chrome engineering for a vaporwave world. Established 2026. All rights reserved. EXE 1.0.
                            </p>
                        </div>
                        {[
                            { title: "Binary", links: ["Chrome", "Neon", "Cyber"] },
                            { title: "Console", links: ["CLI", "SDK", "API"] },
                            { title: "Ethics", links: ["Privacy", "Policy", "Terms"] },
                            { title: "Signal", links: ["Twitter", "Github", "Discord"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-10 text-left">
                                <h5 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#FF00FF]">
                                    {group.title}
                                </h5>
                                <ul className="space-y-6 text-left">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-[11px] text-[#00FFFF]/40 hover:text-[#00FFFF] transition-all uppercase font-black tracking-widest">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-20 border-t-2 border-[#00FFFF]/5 text-[10px] font-black uppercase tracking-[0.4em] text-white/10">
                        <span className="px-10 py-4 bg-black border border-white/5 rounded shadow-xl tracking-widest italic">© 2026 VICODE_CYBER_INFRA_CORP. [V-84_SYNC]</span>
                        <div className="flex gap-16 font-extrabold opacity-30">
                            <span>CPU_LOAD: 12%</span>
                            <span>STATUS: CHROMED</span>
                        </div>
                    </div>
                </footer>

                {/* Floating Action Button - CRT Accent */}
                <div className="fixed bottom-12 right-12 z-50">
                    <button className="h-20 w-20 bg-black border-2 border-[#00FFFF] text-[#00FFFF] rounded-none flex items-center justify-center shadow-[10px_10px_0_#FF00FF] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_#FF00FF] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all group overflow-hidden">
                        <Terminal className="w-10 h-10 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes scan {
                   0% { transform: translateY(-100%); }
                   100% { transform: translateY(5000000%); } /* Dummy value for one-way scan if I wanted it repeated I'd use better logic */
                }
                @keyframes flicker {
                   0%, 100% { opacity: 1; }
                   50% { opacity: 0.8; }
                }
                .animate-scan {
                   animation: scan linear infinite 2s;
                }
                .animate-flicker {
                   animation: flicker infinite 0.1s;
                }
            `}</style>
        </div>
    );
};
