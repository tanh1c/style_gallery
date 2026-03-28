import { cn } from "@/lib/utils";
import {
Activity,
AlertCircle,
ArrowUpRight,
Cpu,
Database,
Layers,
Radio,
RefreshCcw,
ShieldAlert,
Signal,
Terminal,
Wifi,
Zap
} from "lucide-react";
import React,{ useEffect,useState } from "react";

export const RealTimeMonitoringDemo: React.FC = () => {
    const [scanPosition, setScanPosition] = useState(0);
    const [activeNodes, setActiveNodes] = useState<number[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setScanPosition(prev => (prev + 1) % 360);
            if (Math.random() > 0.7) {
                setActiveNodes(prev => {
                    const next = [...prev, Math.floor(Math.random() * 20)];
                    return next.slice(-8);
                });
            }
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex-1 bg-black text-lime-400 font-mono selection:bg-lime-500 selection:text-black overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* --- PULSE HUD NAV --- */}
            <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 bg-black/80 backdrop-blur-xl border-b border-lime-500/20">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-10 h-10 border border-lime-500/50 rounded-lg flex items-center justify-center">
                            <Radio className="w-5 h-5 animate-pulse" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-black text-xl tracking-widest uppercase">ViCode_Pulse</span>
                        <div className="flex items-center gap-2 text-[8px] font-bold text-lime-500/40 uppercase tracking-[0.2em]">
                            <Activity className="w-2.5 h-2.5" />
                            Status: Real_Time_Ingestion_Active
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2 text-lime-400 border-b border-lime-400/50 pb-1">
                            <Signal className="w-3 h-3" /> Radar_Scope
                        </div>
                        <div className="flex items-center gap-2 text-lime-500/30 hover:text-lime-400 transition-colors cursor-pointer">
                            <Layers className="w-3 h-3" /> Node_Mesh
                        </div>
                        <div className="flex items-center gap-2 text-lime-500/30 hover:text-lime-400 transition-colors cursor-pointer">
                            <Terminal className="w-3 h-3" /> Event_Stream
                        </div>
                    </div>
                    <div className="h-4 w-[1px] bg-lime-900/50" />
                    <button className="h-10 px-6 rounded-md bg-lime-500 text-black font-black uppercase tracking-widest text-[9px] hover:bg-lime-400 transition-all flex items-center gap-2">
                        Deploy_Node <ArrowUpRight className="w-3 h-3" />
                    </button>
                </div>
            </nav>

            {/* --- RADAR HERO: THE GLOBAL WATCH (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-4 px-12 overflow-hidden shrink-0 bg-[radial-gradient(circle_at_center,_#1a2e05_0%,_transparent_70%)] opacity-90">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-lime-500/10 border border-lime-500/20 text-lime-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-ping" />
                            <span className="text-[9px] font-black uppercase tracking-[0.3em]">Direct_Signal: Locked_at_08ms</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white uppercase italic">
                            Monitor_All.<br />
                            <span className="text-lime-400 underline decoration-4 underline-offset-8 decoration-lime-500/30">React_Instantly.</span>
                        </h1>

                        <p className="text-xl font-bold text-lime-500/60 leading-relaxed max-w-lg">
                            High-frequency monitoring for high-impact teams. ViCode Pulse visualizes every packet, ping, and protocol in a unified real-time scope.
                        </p>

                        <div className="grid grid-cols-3 gap-6 pt-4">
                            {[
                                { l: "Thruput", v: "148_GB/s", i: Zap },
                                { l: "Latency", v: "2.4_ms", i: Activity, c: "text-white" },
                                { l: "Health", v: "99.99%", i: ShieldAlert, c: "text-lime-400" }
                            ].map((stat, i) => (
                                <div key={i} className="border-l-2 border-lime-900 pl-4 py-1 space-y-1">
                                    <div className="text-[8px] font-black text-lime-900 uppercase tracking-widest">{stat.l}</div>
                                    <div className={cn("text-xl font-black tracking-tighter", stat.c || "text-lime-500")}>{stat.v}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button className="h-14 px-10 border-2 border-lime-500 bg-lime-500 text-black font-black uppercase tracking-[0.2em] transform hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_#1a2e05]">
                                Connect_Flux
                            </button>
                            <button className="h-14 px-8 border-2 border-lime-500/30 text-lime-500 font-black uppercase tracking-[0.2em] hover:bg-lime-500/5 transition-colors">
                                View_Specs
                            </button>
                        </div>
                    </div>

                    <div className="relative group flex items-center justify-center pt-8 lg:pt-0">
                        {/* RADAR COMPONENT */}
                        <div className="relative w-[400px] h-[400px] border border-lime-500/20 rounded-full flex items-center justify-center scale-90 lg:scale-100 transition-transform duration-700">
                            {/* Concentric Circles */}
                            <div className="absolute inset-4 border border-lime-500/10 rounded-full" />
                            <div className="absolute inset-16 border border-lime-500/10 rounded-full" />
                            <div className="absolute inset-32 border border-lime-500/10 rounded-full" />

                            {/* Crosshairs */}
                            <div className="absolute inset-0 border-t border-lime-500/5 top-1/2 -translate-y-1/2" />
                            <div className="absolute inset-0 border-l border-lime-500/5 left-1/2 -translate-x-1/2" />

                            {/* SCANNING LINE */}
                            <div
                                className="absolute w-1/2 h-[2px] bg-gradient-to-r from-transparent to-lime-500/80 left-1/2 top-1/2 origin-left z-20"
                                style={{ transform: `rotate(${scanPosition}deg)` }}
                            />

                            <div className="relative w-16 h-16 bg-lime-900/20 border border-lime-500/50 rounded-full flex items-center justify-center animate-pulse z-30">
                                <Cpu className="w-6 h-6" />
                            </div>

                            {/* ACTIVE NODES */}
                            {activeNodes.map((node, i) => {
                                const angle = (node * 18) % 360;
                                const radius = 80 + (node % 3) * 40;
                                return (
                                    <div
                                        key={i}
                                        className="absolute w-2 h-2 bg-lime-500 rounded-full animate-ping opacity-70"
                                        style={{
                                            transform: `rotate(${angle}deg) translateX(${radius}px)`
                                        }}
                                    />
                                );
                            })}

                            {/* Floating HUD Labels */}
                            <div className="absolute top-10 left-10 p-2 border border-lime-500/30 bg-black/80 backdrop-blur-md text-[8px] font-black uppercase tracking-widest space-y-1 z-40">
                                <div className="text-red-500 flex items-center gap-1">
                                    <AlertCircle className="w-2.5 h-2.5" /> Anomaly_Detected
                                </div>
                                <div className="text-white">Node_Alpha_7: High_Load</div>
                            </div>

                            <div className="absolute bottom-10 right-10 p-2 border border-lime-500/30 bg-black/80 backdrop-blur-md text-[8px] font-black uppercase tracking-widest space-y-1 z-40">
                                <div className="text-lime-400">Signal_Strength</div>
                                <div className="flex gap-0.5">
                                    {[1, 1, 1, 0.5, 0.2].map((op, k) => (
                                        <div key={k} className="w-1 h-3 bg-lime-500" style={{ opacity: op }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EVENT STREAM: THE FLOW OF DATA --- */}
            <section className="py-24 px-12 bg-black border-t border-lime-900/50 shrink-0">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="space-y-6 lg:col-span-1">
                        <h2 className="text-3xl font-black italic tracking-tighter uppercase text-white">Event_Stream_Alpha</h2>
                        <p className="text-lime-500/40 text-[11px] leading-relaxed uppercase tracking-widest">
                            Monitoring 4,281 active clusters globally. Average system coherence at 98.4%. No critical failures in the last 14h.
                        </p>
                        <div className="h-40 p-4 bg-lime-900/10 border border-lime-500/10 rounded-xl overflow-hidden relative group">
                            <div className="space-y-2 opacity-50 text-[9px] font-mono">
                                <div className="text-lime-300">$ system_diag --force</div>
                                <div className="text-lime-500/60">&gt; Check_Integrity... [OK]</div>
                                <div className="text-lime-500/60">&gt; Node_7_Sync... [DONE]</div>
                                <div className="text-red-500/80">&gt; Warn: Jitter_Peak 12ms</div>
                                <div className="text-lime-400 font-bold animate-pulse">_</div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black flex items-end p-4">
                                <span className="text-[8px] font-black text-lime-500 uppercase tracking-widest">Live_Terminal_Feedback</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { t: "Dynamic_Topology", d: "Automatic mapping of node relationships as they spin up/down in real-time.", i: Wifi },
                            { t: "Threshold_Alerts", d: "Sub-millisecond alerting on custom latency or error-rate thresholds.", i: ShieldAlert },
                            { t: "Flux_Persistence", d: "Historical data replayed in real-time visualization for immediate RCA.", i: RefreshCcw },
                            { t: "Global_Sync", d: "One-way synchronization across all regional monitoring hubs for zero-latency views.", i: Database }
                        ].map((feature, i) => (
                            <div key={i} className="group p-8 border border-lime-900/50 hover:border-lime-500 hover:bg-lime-500/5 transition-all space-y-4">
                                <feature.i className="w-6 h-6 text-lime-500 group-hover:scale-125 transition-transform" />
                                <h4 className="text-base font-black uppercase tracking-[0.2em] text-white italic">{feature.t}</h4>
                                <p className="text-[10px] text-lime-500/40 uppercase tracking-widest leading-relaxed">{feature.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- HEARTBEAT FOOTER --- */}
            <footer className="py-20 px-12 bg-black border-t-4 border-lime-500 shrink-0">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-lime-500 flex items-center justify-center text-black">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-4xl font-black italic tracking-tighter uppercase text-white">Full_Immersion.</h3>
                        </div>
                        <p className="text-[10px] font-bold text-lime-900 uppercase tracking-[0.3em]">Operational_Coherence_Software_v4.2.1</p>
                    </div>

                    <div className="flex items-center gap-16">
                        <div className="hidden md:block h-12 w-[2px] bg-lime-900" />
                        <div className="space-y-2 text-right">
                            <div className="text-[9px] font-black text-lime-900 uppercase tracking-widest">Active_Clusters</div>
                            <div className="text-3xl font-black tracking-tighter text-lime-500">4,281</div>
                        </div>
                        <button className="h-14 px-12 bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-lime-500 transition-colors">
                            Subscribe_Pulse
                        </button>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-lime-900/30 flex justify-between items-center text-[8px] font-black text-lime-900 uppercase tracking-[0.5em]">
                    <span>Pulse_Systems_Interlink_©2026</span>
                    <div className="flex gap-8">
                        <span>Terminal_Log</span>
                        <span>Security_Protocol</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
