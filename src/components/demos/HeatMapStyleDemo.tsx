import { cn } from "@/lib/utils";
import {
Activity,
BarChart3,
Fingerprint,
Flame,
Gauge,
Globe,
Layers,
Map,
MousePointer2,
Search,
ShieldAlert,
Thermometer,
TrendingUp
} from "lucide-react";
import React,{ useState } from "react";

export const HeatMapStyleDemo: React.FC = () => {
    const [activeCell, setActiveCell] = useState<number | null>(null);

    return (
        <div className="flex-1 bg-slate-950 text-slate-100 font-sans selection:bg-orange-500/30 selection:text-orange-200 overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* --- THERMAL NAVIGATION --- */}
            <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 bg-slate-950/20 backdrop-blur-3xl border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl flex items-center justify-center shadow-2xl shadow-orange-500/20">
                        <Flame className="w-5 h-5 text-white animate-pulse" />
                    </div>
                    <span className="font-extrabold text-2xl tracking-tighter text-white italic">ViCode_Thermal</span>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-3">
                        <div className="h-2 w-16 bg-slate-900 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-red-500" style={{ width: '82%' }} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Activity_82%</span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <button className="h-11 px-8 rounded-full bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-orange-500 hover:text-white transition-all">
                        Map_The_Scale
                    </button>
                    <button className="w-11 h-11 flex items-center justify-center hover:bg-white/5 rounded-xl transition-colors">
                        <Search className="w-5 h-5 text-slate-500" />
                    </button>
                </div>
            </nav>

            {/* --- HERO: THE HEAT OF CONSENSUS (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-16 pb-8 px-12 overflow-hidden shrink-0">
                {/* Background Heat Blobs */}
                <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-orange-600/10 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-red-600/10 blur-[150px] rounded-full animate-pulse [animation-delay:1s]" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">
                            <TrendingUp className="w-3.5 h-3.5" />
                            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Activity_Snapshot_Alpha</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic uppercase leading-[0.95] text-white">
                            See_Where<br />
                            The_Data_Is<br />
                            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]">Burning_Bright.</span>
                        </h1>

                        <p className="text-xl font-bold text-slate-400 leading-relaxed italic max-w-lg">
                            Stop guessing. ViCode Thermal maps every consensus event in real-time, visualizing the literal energy of your global node network.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-2">
                            <button className="h-14 px-10 rounded-2xl bg-orange-500 text-white font-black uppercase tracking-widest shadow-2xl shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                                Unlock_Heatmap <Map className="w-4.5 h-4.5" />
                            </button>
                            <div className="flex -space-x-4 items-center pl-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-900 flex items-center justify-center text-[10px] font-black">
                                        {i}
                                    </div>
                                ))}
                                <span className="pl-6 text-[9px] font-bold text-slate-500 uppercase tracking-widest italic">12k_Clusters_Live</span>
                            </div>
                        </div>
                    </div>

                    {/* INTERACTIVE HEATMAP GRID */}
                    <div className="relative group perspective-1000">
                        <div className="p-8 rounded-[40px] bg-slate-900/50 border border-white/5 backdrop-blur-2xl shadow-3xl rotate-2 group-hover:rotate-0 transition-transform duration-700">
                            <div className="grid grid-cols-10 gap-1.5">
                                {Array.from({ length: 100 }).map((_, i) => {
                                    // Generate synthetic "Heat"
                                    const distance = Math.sqrt(Math.pow((i % 10) - 5, 2) + Math.pow(Math.floor(i / 10) - 5, 2));
                                    const heat = Math.max(0, 100 - (distance * 15) - (Math.random() * 20));
                                    const colorClass =
                                        heat > 80 ? "bg-orange-400" :
                                            heat > 60 ? "bg-orange-600" :
                                                heat > 40 ? "bg-red-700" :
                                                    heat > 20 ? "bg-red-950" : "bg-slate-800";

                                    return (
                                        <div
                                            key={i}
                                            onMouseEnter={() => setActiveCell(i)}
                                            className={cn(
                                                "aspect-square rounded-[1.5px] cursor-crosshair transition-all duration-300",
                                                colorClass,
                                                activeCell === i ? "scale-150 z-10 shadow-[0_0_15px_rgba(249,115,22,0.8)] rounded-full" : "hover:scale-110",
                                                heat > 70 ? "animate-pulse" : ""
                                            )}
                                        />
                                    );
                                })}
                            </div>

                            <div className="mt-6 flex justify-between items-end border-t border-white/5 pt-6">
                                <div className="space-y-1">
                                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Heat_Intensity_Profile</span>
                                    <div className="text-2xl font-black italic text-orange-400 tracking-tighter">MAX_98.2</div>
                                </div>
                                <div className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400">
                                    <Fingerprint className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Tooltip Mockup */}
                        <div className="absolute -top-4 -right-4 p-4 rounded-xl bg-white text-black shadow-2xl animate-bounce space-y-0.5 z-20">
                            <div className="text-[8px] font-black uppercase tracking-widest text-slate-400 italic">Hotspot_Detected</div>
                            <div className="font-extrabold text-sm tracking-tighter italic uppercase underline">Cluster_Alpha_9</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ACTIVITY MONITOR: THERMAL ANALYSIS --- */}
            <section className="py-48 px-12 bg-white text-slate-900 relative shrink-0">
                <div className="max-w-7xl mx-auto space-y-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter italic leading-none uppercase">
                                The_Anatomy_Of<br />
                                <span className="text-orange-500 underline decoration-8 decoration-orange-200">System_Activity.</span>
                            </h2>
                            <p className="text-2xl font-bold text-slate-400 leading-relaxed italic">
                                Every interaction has a thermal signature. We visualize latency hotspots, load density, and node exhaustion before it impacts your users.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { l: "Heat_Spread", v: "Global", i: Globe },
                                { l: "Intensity_Map", v: "4K_Res", i: Layers },
                                { l: "Mouse_Density", v: "Sync", i: MousePointer2 },
                                { l: "Growth_Delta", v: "+92%", i: TrendingUp }
                            ].map((stat, i) => (
                                <div key={i} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all group">
                                    <stat.i className="w-8 h-8 text-orange-500 mb-6 group-hover:scale-125 transition-transform" />
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{stat.l}</div>
                                    <div className="text-4xl font-black italic tracking-tighter text-slate-900">{stat.v}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* THERMAL FEATURE CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { t: "Attention_Surfacing", d: "Instantly see what part of your infrastructure is attracting the most consensus friction.", color: "orange" },
                            { t: "Exhaustion_Warning", d: "Predict component failure by tracking thermal density spikes in the mesh layer.", color: "red" },
                            { t: "Activity_Fingerprinting", d: "Unique heat Signatures identify specific user intent paths and optimize them for speed.", color: "emerald" }
                        ].map((item, i) => (
                            <div key={i} className="group p-10 rounded-[48px] bg-white border border-slate-100 hover:border-orange-200 shadow-xl hover:-translate-y-4 transition-all duration-500">
                                <div className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:rotate-12",
                                    i === 0 ? "bg-orange-500 text-white shadow-xl shadow-orange-200" :
                                        i === 1 ? "bg-red-500 text-white shadow-xl shadow-red-200" :
                                            "bg-emerald-500 text-white shadow-xl shadow-emerald-200"
                                )}>
                                    {i === 0 ? <Gauge className="w-8 h-8" /> : i === 1 ? <ShieldAlert className="w-8 h-8" /> : <Thermometer className="w-8 h-8" />}
                                </div>
                                <h4 className="text-2xl font-black italic tracking-tighter uppercase mb-6 italic">{item.t}</h4>
                                <p className="text-sm font-bold text-slate-400 italic leading-relaxed">{item.d}</p>
                                <button className="mt-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-orange-500 transition-colors">
                                    Scan_Docs_Alpha <BarChart3 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ACTIVITY FOOTER: THERMAL LOGS --- */}
            <footer className="py-32 px-12 bg-slate-950 border-t border-white/5 shrink-0 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
                    <div className="flex items-center gap-4 text-orange-400 animate-pulse">
                        <Activity className="w-6 h-6" />
                        <span className="text-[11px] font-black uppercase tracking-[0.5em]">Live_Thermal_Stream_v4.4.0</span>
                    </div>
                    <h3 className="text-4xl lg:text-7xl font-black italic tracking-tighter uppercase text-white leading-none">
                        Get_Ready_To_Feel<br />
                        <span className="text-orange-500">The_Frictionless_Burn.</span>
                    </h3>
                    <button className="h-20 px-16 rounded-3xl bg-white text-black font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-orange-500/10 hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110">
                        Capture_The_Pulse
                    </button>

                    <div className="pt-32 grid grid-cols-2 lg:grid-cols-4 gap-24 w-full border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-500 italic">
                        <div className="flex flex-col gap-4">
                            <div className="text-white">CHAPTER_V</div>
                            <span>Thermal_Legacy</span>
                            <span>Activity_Delta</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-white">COMMANDS</div>
                            <span>$ HEAT --MAP</span>
                            <span>$ SCAN --GLOBAL</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-white">NETWORKS</div>
                            <span>Alpha_Mainnet</span>
                            <span>Solar_System</span>
                        </div>
                        <div className="flex justify-end gap-3 items-end h-full">
                            <div className="w-12 h-1 bg-red-500/20 rounded-full" />
                            <div className="w-12 h-1 bg-orange-500/50 rounded-full" />
                            <div className="w-12 h-1 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,1)]" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
