import { cn } from "@/lib/utils";
import {
Activity,
ArrowUpRight,
CheckCircle2,
Cpu as Chip,
Command,
Github,
Globe,
Layers,
ShieldCheck,
Terminal,
Zap,
} from "lucide-react";
import React from "react";

export const CyberpunkUIDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#050505] text-[#00FF00] font-mono selection:bg-[#00FF00] selection:text-black overflow-y-auto overflow-x-hidden relative h-full flex flex-col p-6 space-y-12 pt-0 group">

            {/* --- SCANLINE & NOISE OVERLAY --- */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none z-50 opacity-20" />

            {/* --- DISTANT NEON GLOWS --- */}
            <div className="absolute top-0 left-1/4 w-[40%] h-[40%] bg-magenta-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            {/* --- CYBER NAV: ANGULAR HUD BAR --- */}
            <nav className="flex items-center justify-between px-6 py-3 bg-black/80 backdrop-blur-xl border border-[#00FF00]/30 relative z-50 mx-2 shadow-[0_0_20px_rgba(0,255,0,0.1)] sticky top-0">
                {/* HUD Corners */}
                <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-[#00FF00]" />
                <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-[#00FF00]" />

                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-[#00FF00] flex items-center justify-center relative group-hover:scale-110 transition-transform">
                        <Terminal className="w-6 h-6 text-[#00FF00] drop-shadow-[0_0_8px_#00FF00]" />
                        <div className="absolute inset-0 bg-[#00FF00]/10 animate-pulse" />
                    </div>
                    <div>
                        <span className="font-black text-xl tracking-tighter uppercase text-white leading-none block">Vi_Code_OS</span>
                        <span className="text-[9px] text-[#00FF00]/60 font-mono tracking-widest">VER_4.1.0_STABLE</span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
                    {["Kernel", "Threads", "Grid", "Decrypt"].map((tab) => (
                        <a key={tab} href="#" className="text-[#00FF00]/40 hover:text-[#00FF00] hover:drop-shadow-[0_0_5px_#00FF00] transition-all relative group">
                            {tab}
                            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00FF00] group-hover:w-full transition-all" />
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block text-[9px] text-[#00FF00]/40 font-mono">
                        X: 42.128<br />Y: 09.001
                    </div>
                    <button className="h-10 px-6 bg-transparent border border-[#00FF00] text-[#00FF00] font-black uppercase tracking-widest text-[10px] relative overflow-hidden group hover:bg-[#00FF00] hover:text-black transition-all shadow-[0_0_15px_rgba(0,255,0,0.2)]">
                        <span className="relative z-10">INIT_UPLINK</span>
                        <div className="absolute inset-0 bg-[#00FF00] translate-y-full group-hover:translate-y-0 transition-transform" />
                    </button>
                </div>
            </nav>

            {/* --- CYBER HERO: TECH-NOIR DISTORTION (FIT VIEWPORT) --- */}
            <section className="min-h-[85vh] flex flex-col lg:flex-row items-center gap-10 relative z-10 shrink-0 pt-0">
                <div className="flex-1 space-y-8 text-center lg:text-left relative">
                    {/* Background Glitch Text */}
                    <div className="absolute -top-10 -left-10 text-9xl font-black text-white/5 pointer-events-none select-none italic tracking-tighter">
                        ROOT_ACCESS
                    </div>

                    <div className="inline-flex items-center gap-3 px-4 py-1 bg-black border border-[#00FF00]/50 rounded-sm text-[10px] font-bold uppercase tracking-widest text-[#00FF00]">
                        <Zap className="w-3 h-3 animate-pulse" /> SECURITY_THREAT_DETECTED: NONE
                    </div>

                    <h1 className="text-7xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.8] uppercase text-white relative group">
                        <span className="relative z-10">CODE.<br />OR_DIE.</span>
                        <span className="absolute top-0 left-0 w-full h-full text-[#FF00FF] opacity-0 group-hover:opacity-40 translate-x-1 -z-10 animate-glitch-slow">CODE.<br />OR_DIE.</span>
                        <span className="absolute top-0 left-0 w-full h-full text-[#00FFFF] opacity-0 group-hover:opacity-40 -translate-x-1 -z-10 animate-glitch-fast">CODE.<br />OR_DIE.</span>
                    </h1>

                    <p className="text-lg font-bold text-[#00FF00]/80 max-w-xl leading-relaxed uppercase tracking-tight border-l-2 border-[#00FF00] pl-6 bg-[#00FF00]/5 py-2">
                        Intercept the flow. Optimize the architecture. Deploy into the high-frequency grid. ViCode OS is the terminal for the modern digital mercenary.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <button className="h-16 px-12 bg-[#00FF00] text-black font-black uppercase tracking-widest text-[12px] shadow-[0_0_30px_rgba(0,255,0,0.4)] hover:shadow-[0_0_50px_rgba(0,255,0,0.6)] transition-all flex items-center justify-center gap-4 group">
                            EXECUTE_PAYLOAD <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                        <button className="h-16 px-12 bg-transparent border border-[#00FF00] text-[#00FF00] font-black uppercase tracking-widest text-[12px] hover:bg-[#00FF00]/10 transition-all flex items-center justify-center gap-4 group">
                            SCAN_NETWORK <Activity className="w-5 h-5 text-magenta-500 animate-pulse" />
                        </button>
                    </div>

                    {/* HUD STATS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl pt-8 border-t border-[#00FF00]/10">
                        {[
                            { l: "LATENCY", v: "0.00ms", c: "text-white" },
                            { l: "THREAT_LVL", v: "MINIMAL", c: "text-[#00FF00]" },
                            { l: "UPTIME", v: "100.00%", c: "text-cyan-400" },
                            { l: "NODES", v: "1,248", c: "text-white" }
                        ].map((s, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-[8px] font-bold text-[#00FF00]/40 uppercase tracking-widest">{s.l}</div>
                                <div className={cn("text-xs font-black tracking-widest italic", s.c)}>{s.v}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 relative shrink-0 w-full lg:max-w-[45%]">
                    {/* TERMINAL FRAME */}
                    <div className="relative w-full aspect-[4/3] bg-black border-2 border-[#00FF00]/40 shadow-[0_0_50px_rgba(0,255,0,0.1)] group overflow-hidden">
                        {/* HUD Header */}
                        <div className="h-8 bg-[#00FF00]/10 border-b border-[#00FF00]/20 flex items-center px-4 justify-between">
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_#f59e0b]" />
                                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                            </div>
                            <span className="text-[8px] font-bold text-[#00FF00]/40 tracking-[0.3em]">REMOTE_SESSION_ACTIVE</span>
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
                            alt="Cyberpunk Tech"
                            className="w-full h-full object-cover opacity-60 saturate-0 group-hover:saturate-150 transition-all duration-700 contrast-125"
                        />

                        {/* DIGITAL NOISE OVERLAY */}
                        <div className="absolute inset-x-8 bottom-8 p-4 bg-black/80 backdrop-blur-md border border-[#00FF00]/30 space-y-2">
                            <div className="flex items-center gap-4">
                                <Chip className="w-5 h-5 text-[#00FF00] animate-pulse" />
                                <div className="h-1 flex-1 bg-[#00FF00]/10 overflow-hidden">
                                    <div className="h-full bg-[#00FF00] w-2/3 animate-progress transition-all" />
                                </div>
                            </div>
                            <div className="text-[9px] text-white/50 tracking-tighter">DECRYPTING_INFRASTRUCTURE_MODULE_B: COMPLETE</div>
                        </div>

                        {/* HUD LINES */}
                        <div className="absolute inset-0 border border-[#00FF00]/10 pointer-events-none" />
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#00FF00]/5" />
                        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#00FF00]/5" />
                    </div>

                    {/* ANGULAR DECORATIONS */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-[#FF00FF]/50 pointer-events-none" />
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-cyan-500/50 pointer-events-none" />
                </div>
            </section>

            {/* --- CYBER LOGO WALL: MONOSPACED GRID --- */}
            <div className="py-20 border-y border-[#00FF00]/10 flex flex-col items-center gap-10 shrink-0 bg-white/5">
                <span className="text-[9px] font-bold text-[#00FF00]/40 uppercase tracking-[0.8em]">CRITICAL_SYSTEM_PARTNERS</span>
                <div className="flex flex-wrap justify-center gap-16 lg:gap-32 items-center grayscale invert opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                    <Github className="w-8 h-8" />
                    <Layers className="w-8 h-8" />
                    <Globe className="w-8 h-8" />
                    <ShieldCheck className="w-8 h-8" />
                    <Command className="w-8 h-8" />
                </div>
            </div>

            {/* --- GRID MODULES: HUD CARDS --- */}
            <section className="space-y-16 px-2 shrink-0 pb-12">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-5xl font-black tracking-tight text-white uppercase italic drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]">Decoupled.<br />Hardened.</h2>
                    <p className="text-[#00FF00] font-bold uppercase tracking-widest text-[9px]">Module_Level_Security_Active</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { t: "Logic_Kernels", d: "Isolated sandboxes for every logic thread. Non-persistent. High frequency.", i: Chip, c: "border-[#00FF00]/20" },
                        { t: "Pulse_Telemetry", d: "Sub-millisecond tracking across every node. Complete visibility.", i: Activity, c: "border-cyan-500/20" },
                        { t: "Security_Grid", d: "Encrypted behind a neural-net hardware wall. Impossible to breach.", i: ShieldCheck, c: "border-[#FF00FF]/20" }
                    ].map((item, i) => (
                        <div key={i} className={cn(
                            "relative group p-10 bg-black border-2 border-transparent transition-all hover:bg-white/5 cursor-pointer flex flex-col items-start gap-8",
                            item.c,
                            "hover:border-[#00FF00] active:scale-[0.98]"
                        )}>
                            {/* HUD Markers */}
                            <div className="absolute top-0 right-0 p-4 text-[8px] text-[#00FF00]/20 font-mono">0{i + 1}</div>

                            <div className="w-16 h-16 border border-[#00FF00]/30 flex items-center justify-center text-[#00FF00] group-hover:bg-[#00FF00] group-hover:text-black transition-all">
                                <item.i className="w-8 h-8" />
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-2xl font-black text-white italic transition-all group-hover:pl-2">{item.t}</h4>
                                <p className="text-[11px] font-bold text-[#00FF00]/60 leading-relaxed uppercase tracking-tight">
                                    {item.d}
                                </p>
                            </div>

                            <button className="flex items-center gap-2 text-[8px] font-black text-[#00FF00] group-hover:translate-x-2 transition-transform">
                                READ_SOURCE <ArrowUpRight className="w-3 h-3" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- DATA NODE PRICING: TERMINAL STYLE --- */}
            <section className="bg-black border-4 border-[#00FF00]/40 p-12 lg:p-24 text-white mx-2 relative overflow-hidden group shrink-0">
                <div className="absolute inset-0 bg-[#00FF00]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="space-y-10">
                        <div className="text-[10px] text-[#00FF00] font-mono tracking-widest animate-pulse">PROTOCOL_LOADED: BILLING_MODULE_X</div>
                        <h2 className="text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase italic drop-shadow-[4px_4px_0px_#00FF00]">Scalable.<br />Merciless.</h2>
                        <p className="text-white/60 text-lg font-bold uppercase leading-relaxed max-w-lg tracking-tight">
                            Pay for what you deploy. No overhead. No mercy. Every millisecond of compute is accounted for in the grid.
                        </p>
                        <div className="flex gap-16">
                            <div className="space-y-1">
                                <div className="text-5xl font-black text-[#00FF00] tracking-tighter italic">$0.10/ms</div>
                                <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em]">Compute_Intensity</div>
                            </div>
                            <div className="space-y-1 border-l border-[#00FF00]/10 pl-16">
                                <div className="text-5xl font-black text-cyan-400 tracking-tighter italic">Inf</div>
                                <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em]">Throughput_Limit</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0D0D0D] border-2 border-[#00FF00]/20 p-12 space-y-10 relative">
                        <div className="flex justify-between items-center border-b border-[#00FF00]/10 pb-6">
                            <span className="text-xs font-black uppercase text-[#00FF00]">System_Prerequisites</span>
                            <span className="text-[9px] font-mono text-white/20 px-2 border border-white/10 italic">UNSECURED</span>
                        </div>
                        <div className="space-y-6">
                            {[
                                "KERNEL_LEVEL_OPTIMIZATION",
                                "NEURAL_NET_FIREWALL_V4",
                                "UNRESTRICTED_API_CHANNELS",
                                "REAL_TIME_PULSE_TRACKING"
                            ].map(f => (
                                <div key={f} className="flex items-center gap-6 group cursor-default">
                                    <div className="w-5 h-5 border border-[#00FF00]/30 flex items-center justify-center bg-[#00FF00]/5 group-hover:bg-[#00FF00] transition-all">
                                        <CheckCircle2 className="w-3 h-3 text-[#00FF00] group-hover:text-black" />
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest text-[#00FF00]/80 group-hover:text-white transition-colors">{">>"} {f}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full h-20 bg-transparent border-2 border-[#00FF00] text-[#00FF00] font-black uppercase tracking-[0.3em] text-[13px] hover:bg-[#00FF00] hover:text-black transition-all shadow-[0_0_20px_rgba(0,255,0,0.2)]">
                            ACCEPT_TERMS_AND_DEPLOY
                        </button>
                    </div>
                </div>
            </section>

            {/* --- CYBER FOOTER: TECH-NOIR LOGOFF --- */}
            <footer className="py-24 border-t border-[#00FF00]/10 flex flex-col items-center gap-16 shrink-0 bg-black relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#00FF00]/5 to-transparent pointer-events-none" />
                <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 gap-16 relative z-10 font-mono">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-[#00FF00] text-black flex items-center justify-center shadow-[0_0_20px_#00FF00]">
                            <Command className="w-8 h-8" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-2xl font-black tracking-tighter uppercase italic text-white leading-none">Vi_Code_OS</h4>
                            <p className="text-[9px] font-bold text-[#00FF00]/40 uppercase tracking-widest">ARCHITECTED_BY_VICODE_CORP_©2026</p>
                        </div>
                    </div>
                    <div className="flex gap-12 text-[9px] font-black uppercase tracking-widest text-[#00FF00]/60">
                        <a href="#" className="hover:text-white transition-colors hover:drop-shadow-[0_0_5px_#fff]">API_DOCS</a>
                        <a href="#" className="hover:text-white transition-colors hover:drop-shadow-[0_0_5px_#fff]">KERNEL_LOGS</a>
                        <a href="#" className="hover:text-white transition-colors hover:drop-shadow-[0_0_5px_#fff]">EXIT_SESSION</a>
                    </div>
                </div>
                <div className="text-[12px] font-black text-[#00FF00]/10 tracking-[1.5em] uppercase pointer-events-none select-none italic">
                    SYSTEM_STABLE // NO_ERRORS_DETECTED // GRID_ONLINE
                </div>
            </footer>
        </div>
    );
};
