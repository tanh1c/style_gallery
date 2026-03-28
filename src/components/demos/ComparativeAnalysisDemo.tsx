import { cn } from "@/lib/utils";
import {
Activity,
ArrowLeftRight,
ArrowUp,
CheckCircle2,
LayoutGrid,
RefreshCcw,
TrendingUp,
Zap
} from "lucide-react";
import React,{ useState } from "react";

export const ComparativeAnalysisDemo: React.FC = () => {
    const [activeComparison, setActiveComparison] = useState<"performance" | "cost" | "latency">("performance");

    return (
        <div className="flex-1 bg-[#020617] text-slate-400 font-sans selection:bg-indigo-600 selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* --- DELTA NAV HUB --- */}
            <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-[#020617]/95 border-b border-indigo-500/10 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                        <ArrowLeftRight className="w-5 h-5 font-black" />
                    </div>
                    <div>
                        <span className="font-black text-white tracking-widest text-base uppercase">ViCode_Vs</span>
                        <div className="text-[10px] text-indigo-400/60 font-black uppercase tracking-[0.2em]">Alpha_Beta_Differential</div>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-1">
                    {["Performance", "Cost", "Latency", "Uptime"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveComparison(tab.toLowerCase() as any)}
                            className={cn(
                                "h-10 px-6 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                                activeComparison === tab.toLowerCase() ? "bg-indigo-600 text-white shadow-lg" : "text-slate-500 hover:text-indigo-400 hover:bg-white/5 active:scale-95"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <div className="h-4 w-[1px] bg-white/10 mx-2" />
                    <button className="h-10 px-5 border border-indigo-500/20 text-indigo-400 font-black uppercase tracking-widest text-[9px] hover:bg-indigo-500/5 transition-all">
                        Export_Diff
                    </button>
                </div>
            </nav>

            {/* --- SPLIT HERO: THE DUEL (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-4 px-10 overflow-hidden shrink-0">
                {/* Visual Divide Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-indigo-500/20 hidden lg:block" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch relative z-10 w-full h-full">
                    {/* COMPETITOR A (LEFT) */}
                    <div className="p-10 lg:pr-20 space-y-10 animate-in fade-in slide-in-from-left-10 duration-1000 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100/5 border border-white/5 text-slate-500 rounded-lg">
                            <TrendingUp className="w-3 h-3 grayscale" />
                            <span className="text-[9px] font-black uppercase tracking-widest underline decoration-slate-800">Legacy_Architecture</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-white/40 leading-[1] uppercase italic">
                            Obsolete.<br />
                            Static.
                        </h1>

                        <div className="space-y-4 max-w-sm">
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-[40%] bg-slate-600" />
                            </div>
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-600">
                                <span>Efficiency_Level</span>
                                <span>42%</span>
                            </div>
                        </div>
                    </div>

                    {/* COMPETITOR B: VICODE (RIGHT) */}
                    <div className="p-10 lg:pl-20 space-y-10 animate-in fade-in slide-in-from-right-10 duration-1000 flex flex-col justify-center bg-indigo-600/5 border-l border-indigo-500/10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-600/20 border border-indigo-600/30 text-indigo-400 rounded-lg">
                            <Zap className="w-3 h-3 fill-indigo-400" />
                            <span className="text-[9px] font-black uppercase tracking-widest">ViCode_Soft_UI</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-[1] uppercase italic">
                            Optimized.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">Adaptive.</span>
                        </h1>

                        <div className="space-y-4 max-w-sm">
                            <div className="h-2 w-full bg-indigo-900/40 rounded-full overflow-hidden">
                                <div className="h-full w-[94%] bg-indigo-400 animate-[grow_2s_ease-out_forwards]" />
                            </div>
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-indigo-400">
                                <span>Efficiency_Level</span>
                                <span className="animate-pulse">94%</span>
                            </div>
                        </div>
                    </div>

                    {/* FLOATING DELTA HUD (CENTER) */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4">
                        <div className="w-24 h-24 bg-white text-black p-4 rounded-3xl shadow-2xl flex flex-col items-center justify-center border-4 border-indigo-600 animate-bounce cursor-pointer hover:scale-110 transition-transform">
                            <span className="text-[9px] font-black uppercase tracking-tighter">Delta</span>
                            <span className="text-3xl font-black leading-none">+52%</span>
                            <ArrowUp className="w-4 h-4 text-emerald-600 font-bold" />
                        </div>
                    </div>
                </div>

                {/* Perspective Elements */}
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
            </section>

            {/* --- COMPARATIVE BENCHMARKS: SIDE BY SIDE --- */}
            <section className="py-24 px-10 bg-white shadow-[0_-30px_60px_rgba(0,0,0,0.5)] shrink-0 rounded-t-[60px] relative z-20">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {[
                            { label: "Latency_Floor", legacy: "184ms", vi: "22ms", gain: "+88%", icon: Activity },
                            { label: "Cost_per_Query", legacy: "$0.14", vi: "$0.02", gain: "+85%", icon: RefreshCcw },
                            { label: "Deployment_Cycle", legacy: "12h", vi: "0.4s", gain: "+99%", icon: Zap }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 bg-slate-50 border border-slate-200 rounded-[32px] hover:border-indigo-500/30 transition-all flex flex-col gap-6">
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-full">
                                        {item.gain} Efficiency Win
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</h4>
                                    <div className="flex items-end gap-3 font-black tracking-tighter italic">
                                        <span className="text-2xl text-slate-400 line-through decoration-slate-300 decoration-2">{item.legacy}</span>
                                        <span className="text-4xl text-indigo-600 uppercase">{item.vi}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row items-stretch gap-12">
                        <div className="flex-1 space-y-8 p-12 bg-slate-900 rounded-[48px] text-white">
                            <h2 className="text-4xl font-black italic tracking-tighter uppercase leading-[0.95]">
                                Direct_Comparison.<br />
                                No_Ambiguity.
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                Our comparative framework uses dual-sensor telemetry to ensure that every "Win" is substantiated by cold, hard data signatures.
                            </p>
                            <button className="h-12 px-8 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-indigo-400 transition-colors">
                                Review_The_Methodology
                            </button>
                        </div>

                        <div className="flex-1 grid grid-rows-2 gap-12">
                            <div className="bg-emerald-50 border border-emerald-100 p-10 rounded-[48px] flex items-center justify-between group cursor-pointer hover:bg-emerald-100/50 transition-all">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-emerald-900 tracking-tighter uppercase">Operational_Delta</h3>
                                    <p className="text-emerald-700/60 font-medium">Identify 12 unique bottlenecks ViCode solves instantly.</p>
                                </div>
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                                </div>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 p-10 rounded-[48px] flex items-center justify-between group cursor-pointer hover:bg-slate-100/80 transition-all">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Legacy_Handover</h3>
                                    <p className="text-slate-500 font-medium">Automatic migration tools to swap clusters without downtime.</p>
                                </div>
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:-rotate-12 transition-transform">
                                    <RefreshCcw className="w-8 h-8 text-indigo-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DUAL FOOTER --- */}
            <footer className="py-20 px-10 bg-[#020617] border-t border-white/5 shrink-0">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-6">
                        <div className="h-16 w-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-white rotate-3">
                            <LayoutGrid className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white leading-none">The_Standard.</h3>
                            <p className="text-[10px] font-bold text-indigo-500/40 uppercase tracking-[0.3em]">ViCode_Telemetry_Benchmark_©2026</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-16">
                        <div className="text-right">
                            <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Global_Winner_Index</div>
                            <div className="text-2xl font-black text-white italic">#01_RATED</div>
                        </div>
                        <button className="h-14 px-12 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-indigo-600 hover:text-white transition-all">
                            Request_A/B_Test
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};
