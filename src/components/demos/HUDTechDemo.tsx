import { cn } from "@/lib/utils";
import {
Activity,
Battery,
ChevronRight,
Crosshair,
Database,
Lock,
Network,
Plus,
Radio,
Terminal,
Wifi
} from "lucide-react";
import React,{ useEffect,useState } from "react";

export const HUDTechDemo: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [telemetry, setTelemetry] = useState<number[]>(Array(10).fill(0).map(() => Math.random() * 100));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
            setTelemetry(prev => [...prev.slice(1), Math.random() * 100]);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex-1 bg-[#020617] text-[#22d3ee] font-mono selection:bg-cyan-500 selection:text-black overflow-y-auto overflow-x-hidden relative h-full flex flex-col group scroll-smooth">

            {/* --- HUD GLOBAL STYLES --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Fira+Code:wght@300;500&display=swap');
                
                .font-share { font-family: 'Share Tech Mono', monospace; }
                .font-fira { font-family: 'Fira Code', monospace; }
                
                @keyframes scanline {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                @keyframes pulse-cyan {
                    0%, 100% { box-shadow: 0 0 5px rgba(34, 211, 238, 0.2); }
                    50% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
                }
                @keyframes blink-fast {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
                .scanline {
                    background: linear-gradient(to bottom, transparent, rgba(34, 211, 238, 0.1), transparent);
                    animation: scanline 8s linear infinite;
                }
                .hud-border {
                    border: 1px solid rgba(34, 211, 238, 0.2);
                    position: relative;
                }
                .hud-corner-tl::before {
                    content: ''; position: absolute; top: -2px; left: -2px; width: 10px; height: 10px;
                    border-top: 2px solid #22d3ee; border-left: 2px solid #22d3ee;
                }
                .hud-corner-tr::before {
                    content: ''; position: absolute; top: -2px; right: -2px; width: 10px; height: 10px;
                    border-top: 2px solid #22d3ee; border-right: 2px solid #22d3ee;
                }
                .hud-corner-bl::before {
                    content: ''; position: absolute; bottom: -2px; left: -2px; width: 10px; height: 10px;
                    border-bottom: 2px solid #22d3ee; border-left: 2px solid #22d3ee;
                }
                .hud-corner-br::before {
                    content: ''; position: absolute; bottom: -2px; right: -2px; width: 10px; height: 10px;
                    border-bottom: 2px solid #22d3ee; border-right: 2px solid #22d3ee;
                }
                .grid-bg {
                    background-image: 
                        linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}} />

            {/* --- SCANLINE EFFECT --- */}
            <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-50" />
            <div className="absolute inset-0 grid-bg pointer-events-none z-0" />

            {/* --- TOP HUD BAR --- */}
            <nav className="flex items-center justify-between px-6 py-3 border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-md sticky top-0 z-[100] font-share">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border-2 border-dashed border-cyan-500 animate-spin" />
                        <span className="text-xl font-bold tracking-[0.2em] text-cyan-400">VICODE_FUI_V51</span>
                    </div>
                    <div className="h-4 w-[1px] bg-cyan-500/30" />
                    <div className="flex gap-4 text-[10px] text-cyan-500/60 uppercase tracking-widest">
                        <div className="flex gap-2"><Wifi className="w-3 h-3" /> LINK_ESTABLISHED</div>
                        <div className="flex gap-2"><Lock className="w-3 h-3 text-cyan-400" /> SECURE_ENC_256</div>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="text-[12px] tabular-nums text-cyan-400 font-bold bg-cyan-500/10 px-4 py-1 border border-cyan-500/20">
                        {currentTime} // UTC-00
                    </div>
                    <div className="flex gap-2">
                        <div className="w-4 h-4 rounded-sm bg-cyan-500 animate-pulse" />
                        <div className="w-4 h-4 rounded-sm bg-cyan-500/20" />
                        <div className="w-4 h-4 rounded-sm bg-cyan-500/20" />
                    </div>
                </div>
            </nav>

            {/* --- HERO: HUD CONSOLE (FIT 1 SCREEN) --- */}
            <section className="h-[calc(100vh-62px)] min-h-[550px] px-6 -mt-8 pb-2 lg:px-10 lg:-mt-12 lg:pb-4 relative z-10 shrink-0 overflow-hidden flex flex-col items-center justify-center">

                {/* --- CENTER CORE UI --- */}
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full max-h-[750px]">

                    {/* LEFT TELEMETRY */}
                    <div className="hidden lg:col-span-3 lg:flex flex-col gap-6">
                        <div className="hud-border p-6 hud-corner-tl hud-corner-br bg-slate-900/50 backdrop-blur-sm space-y-4">
                            <h4 className="text-[10px] font-share font-bold uppercase tracking-widest text-cyan-500/50">SYSTEM_HEAT_MAP</h4>
                            <div className="grid grid-cols-5 gap-1">
                                {[...Array(25)].map((_, i) => (
                                    <div key={i} className={cn(
                                        "w-full aspect-square border border-cyan-500/10",
                                        Math.random() > 0.7 ? "bg-cyan-500/40 animate-pulse" : "bg-transparent"
                                    )} />
                                ))}
                            </div>
                        </div>
                        <div className="hud-border p-6 hud-corner-tr hud-corner-bl bg-slate-900/50 backdrop-blur-sm space-y-4">
                            <h4 className="text-[10px] font-share font-bold uppercase tracking-widest text-cyan-500/50">CORE_NETWORK_ACTIVITY</h4>
                            <div className="h-24 flex items-end gap-1">
                                {telemetry.map((val, i) => (
                                    <div key={i} className="flex-1 bg-cyan-500/20 border-t border-cyan-500" style={{ height: `${val}%` }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CENTRAL NODE */}
                    <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center relative py-4 lg:py-6">
                        {/* CROSSHAIR DECOR */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                            <Crosshair className="w-[120%] h-[120%] text-cyan-500 animate-[spin_60s_linear_infinite]" />
                        </div>

                        <div className="relative group cursor-pointer h-full flex flex-col items-center justify-center gap-6 lg:gap-8">
                            <div className="w-56 h-56 lg:w-72 lg:h-72 relative flex items-center justify-center">
                                <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                                <div className="absolute inset-4 border border-cyan-500/40 rounded-full animate-pulse" />
                                <div className="w-28 h-28 lg:w-36 lg:h-36 bg-cyan-500/10 rounded-full border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.3)] animate-float">
                                    <Activity className="w-14 h-14 lg:w-16 lg:h-16 text-cyan-400" />
                                </div>
                            </div>

                            <div className="text-center space-y-4 animate-fade shadow-2xl">
                                <div className="flex items-center justify-center gap-4">
                                    <span className="h-[2px] w-12 bg-cyan-500/30" />
                                    <span className="text-sm font-share font-bold text-cyan-400/80 animate-blink-fast tracking-widest uppercase">SYSCALL_01_INITIALIZED</span>
                                    <span className="h-[2px] w-12 bg-cyan-500/30" />
                                </div>
                                <h1 className="text-6xl lg:text-7xl font-share font-black uppercase tracking-tighter leading-none text-white [text-shadow:0_0_20px_rgba(34,211,238,0.5)]">
                                    NEURAL<br />INFRA.
                                </h1>
                                <p className="max-w-md mx-auto text-cyan-500/60 font-fira text-xs uppercase tracking-widest leading-loose">
                                    Predictive CI/CD deployment logic with zero-latency synchronization. Welcome to the future of code narrative.
                                </p>
                                <button className="h-14 px-12 bg-cyan-500 text-black font-share font-black uppercase tracking-[0.4em] text-[12px] clip-path-polygon hover:shadow-[0_0_30px_#22d3ee] transition-all transform hover:scale-105 active:scale-95 group relative overflow-hidden">
                                    INITIALIZE_DEPLOY
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT STATUS HUD */}
                    <div className="hidden lg:col-span-3 lg:flex flex-col gap-6">
                        <div className="hud-border p-6 hud-corner-tr hud-corner-bl bg-slate-900/50 backdrop-blur-sm space-y-4">
                            <h4 className="text-[10px] font-share font-bold uppercase tracking-widest text-cyan-500/50 underline decoration-cyan-500/30 underline-offset-8">NODE_STATUS_STREAM</h4>
                            <div className="space-y-3">
                                {[
                                    { n: "CPU_A", v: "42%", s: "OK" },
                                    { n: "MEM_B", v: "18%", s: "OK" },
                                    { n: "NET_C", v: "10Gb", s: "!!" }
                                ].map((node, i) => (
                                    <div key={i} className="flex justify-between items-center text-[10px] border-b border-cyan-500/10 pb-2">
                                        <span className="text-cyan-500/60">{node.n}</span>
                                        <span className="text-cyan-400 font-bold">{node.v}</span>
                                        <span className={cn("px-2 font-black", node.s === "OK" ? "bg-cyan-500/20 text-cyan-400" : "bg-red-500/20 text-red-400 animate-pulse")}>{node.s}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="hud-border p-6 hud-corner-tl hud-corner-br bg-slate-900/50 backdrop-blur-sm space-y-2">
                            <h4 className="text-[10px] font-share font-bold uppercase tracking-widest text-cyan-500/50">ENCRYPTION_LAYER_V2</h4>
                            <div className="text-[9px] text-cyan-500/40 break-all h-20 overflow-hidden font-fira">
                                0x3F2A9B1C8E7D6F5A4B3C2D1E0F9E8D7C6B5A49382C1B0A112233445566778899AA_SECURE_NODE_VICODE_ACTIVE_STREAM_HUD_LOGS_ENCRYPTED_END_SEQUENCE
                            </div>
                            <div className="h-1 bg-cyan-500/10 w-full mt-2">
                                <div className="h-full bg-cyan-500 w-1/2 animate-[scale-x_2s_infinite]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM TELEMETRY BAR */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl flex items-center justify-between font-share text-[10px] text-cyan-500/40 uppercase tracking-[0.4em] animate-pulse">
                    <span>SYS_READY // MISSION_VICODE_ALPHA</span>
                    <div className="flex gap-10">
                        <div className="flex gap-2"><Battery className="w-3 h-3" /> 100%</div>
                        <div className="flex gap-2"><Radio className="w-3 h-3" /> SYNC_ING</div>
                    </div>
                </div>
            </section>

            {/* --- CORE FEATURES: HUD GRID --- */}
            <section className="py-32 px-10 shrink-0 relative z-10 bg-slate-950 border-t border-cyan-500/20">
                <div className="max-w-7xl mx-auto space-y-24">
                    <div className="flex items-end gap-10">
                        <div className="flex flex-col gap-2">
                            <div className="text-cyan-500 font-black text-4xl font-share uppercase">01 // OPERATIONS</div>
                            <div className="w-full h-1 bg-cyan-500/20">
                                <div className="w-1/4 h-full bg-cyan-500" />
                            </div>
                        </div>
                        <p className="text-xs text-cyan-500/40 uppercase tracking-widest max-w-sm pb-1">All systems functional. Telemetry reports indicate nominal synchronization across global neural clusters.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { t: "Logic.Scan", d: "Trace operations in 64-bit precision telemetry.", i: Terminal, c: "ENC.01" },
                            { t: "Node.Pulse", d: "Heartbeat monitoring for every microservice.", i: Activity, c: "ENC.02" },
                            { t: "Crypt.Base", d: "Hardened security shell for zero-day shield.", i: Database, c: "ENC.03" },
                            { t: "Sync.Link", d: "Neural network mesh for instant scaling.", i: Network, c: "ENC.04" }
                        ].map((item, i) => (
                            <div key={i} className="group p-10 hud-border bg-slate-900/30 hover:bg-cyan-500/[0.05] transition-all cursor-pointer border-cyan-500/10 hover:border-cyan-500/30 flex flex-col gap-10">
                                <div className="flex justify-between items-start">
                                    <item.i className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                                    <span className="text-[9px] font-share text-cyan-500/30">{item.c}</span>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-share font-black text-white uppercase tracking-tighter">{item.t}</h4>
                                    <p className="text-[10px] font-fira leading-relaxed text-cyan-500/60 uppercase tracking-widest">
                                        {item.d}
                                    </p>
                                </div>
                                <div className="mt-auto flex gap-1">
                                    {[...Array(6)].map((_, i) => <div key={i} className="w-full h-1 bg-cyan-500/10 group-hover:bg-cyan-500/30" />)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ACCESS: PRICE MODULE --- */}
            <section className="px-10 py-40 flex flex-col items-center justify-center shrink-0 relative overflow-hidden bg-slate-950 border-t border-cyan-500/10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="w-full max-w-4xl hud-border hud-corner-tl hud-corner-br bg-slate-900/40 backdrop-blur-xl p-12 lg:p-20 relative shadow-2xl space-y-12">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
                        <div className="space-y-4 text-left">
                            <div className="text-[10px] font-share font-bold text-cyan-500/60 uppercase tracking-[0.4em] flex items-center gap-4">
                                <span className="w-10 h-[1px] bg-cyan-500/20" /> LICENSE_ACQUISITION
                            </div>
                            <h2 className="text-6xl font-share font-black text-white leading-none uppercase tracking-tighter italic">V_CORE_ELITE</h2>
                        </div>
                        <div className="text-right">
                            <div className="text-7xl font-share font-black text-cyan-400 uppercase leading-none tracking-tighter">
                                $99<span className="text-sm opacity-30">.99</span>
                            </div>
                            <div className="text-[9px] font-share text-cyan-500/40 uppercase tracking-widest mt-2">SECURE_TRANSACTION_ONLY</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-cyan-500/20 pt-12">
                        <div className="space-y-6">
                            {["Full HUD Access Interface", "Real-Time Telemetry Stream", "Neural Encryption Keys", "24/7 Command Support"].map(f => (
                                <div key={f} className="flex items-center gap-4 group cursor-default">
                                    <Plus className="w-4 h-4 text-cyan-400 group-hover:rotate-90 transition-transform" />
                                    <span className="text-[13px] font-share font-black text-cyan-500/80 uppercase tracking-tighter">{f}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-6 justify-end">
                            <button className="w-full h-16 bg-cyan-500 text-black font-share font-black uppercase tracking-[0.4em] text-[13px] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-6">
                                AUTHORIZE_PURCHASE <ChevronRight className="w-6 h-6 animate-pulse" />
                            </button>
                            <div className="text-[8px] text-cyan-500/30 uppercase text-center tracking-[0.3em]">ALL_RIGHTS_RESERVED_VICODE_CORP_2026</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER: HUD CLOSURE --- */}
            <footer className="py-24 bg-slate-950 text-cyan-500 flex flex-col items-center gap-16 shrink-0 relative overflow-hidden border-t border-cyan-500/20">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-16 gap-10 font-share relative z-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 bg-cyan-500 flex items-center justify-center clip-path-polygon">
                                <Activity className="w-7 h-7 text-black" />
                            </div>
                            <h4 className="text-4xl font-black tracking-tighter uppercase leading-none text-white italic">ViCode.</h4>
                        </div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.5em] opacity-40">STATION_ACTIVE_ID // ALPHA_DELTA_51</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[10px] font-black uppercase tracking-[0.2em]">
                        <div className="flex flex-col gap-4">
                            <span className="text-white">COMMAND</span>
                            <a href="#" className="opacity-40 hover:opacity-100 hover:text-white">LOGS</a>
                            <a href="#" className="opacity-40 hover:opacity-100 hover:text-white">BEEP</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-white">SPEC_X</span>
                            <a href="#" className="opacity-40 hover:opacity-100 hover:text-white">FUI_OS</a>
                            <a href="#" className="opacity-40 hover:opacity-100 hover:text-white">MESH_N</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-white">STYLE_51</span>
                            <a href="#" className="opacity-40 hover:opacity-100 hover:text-white">GALLERY</a>
                            <a href="#" className="opacity-40 hover:opacity-100 hover:text-white">MODERN</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-cyan-400 font-bold underline underline-offset-8">TERMINATE_SEC.</span>
                        </div>
                    </div>
                </div>

                <div className="w-full h-1 bg-cyan-500/5 overflow-hidden">
                    <div className="h-full bg-cyan-500/20 w-1/3 animate-[slide_10s_linear_infinite]" />
                </div>
            </footer>
        </div>
    );
};
