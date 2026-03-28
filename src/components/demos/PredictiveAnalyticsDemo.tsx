import { cn } from "@/lib/utils";
import {
Activity,
AlertTriangle,
ArrowUpRight,
BrainCircuit,
Clock,
Database,
LineChart,
Sparkles,
Target,
TrendingUp,
Zap
} from "lucide-react";
import React,{ useState } from "react";

export const PredictiveAnalyticsDemo: React.FC = () => {
    const [confidence, setConfidence] = useState<70 | 90 | 99>(90);

    return (
        <div className="flex-1 bg-[#020617] text-slate-400 font-sans selection:bg-purple-600 selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* --- PROBABILITY HUD NAV --- */}
            <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-[#020617]/90 border-b border-purple-500/10 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                        <BrainCircuit className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="font-black text-white tracking-widest text-base uppercase">ViCode_Fore</span>
                        <div className="flex items-center gap-2 text-[9px] text-purple-400/60 font-black uppercase tracking-[0.2em]">
                            <Sparkles className="w-2.5 h-2.5" />
                            Future_Model_Active
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Confidence_Zone:
                    </div>
                    <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
                        {[70, 90, 99].map((val) => (
                            <button
                                key={val}
                                onClick={() => setConfidence(val as any)}
                                className={cn(
                                    "h-8 px-5 rounded-lg text-[9px] font-black transition-all",
                                    confidence === val ? "bg-purple-600 text-white" : "text-slate-500 hover:text-purple-300"
                                )}
                            >
                                {val}%
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="h-10 px-6 bg-white text-black font-black uppercase tracking-widest text-[9px] rounded-full hover:bg-purple-600 hover:text-white transition-all">
                        Generate_Report
                    </button>
                </div>
            </nav>

            {/* --- FORECAST HERO: THE TIMELINE (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-4 px-10 overflow-hidden shrink-0">
                {/* Visual Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full opacity-50" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-purple-600/10 border border-purple-500/20 text-purple-400 rounded-lg">
                            <Clock className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Predicted_Outcome: Optimized</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white uppercase italic">
                            See_Tomorrow.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Own_Results.</span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-lg">
                            ViCode Fore uses adaptive probability clouds to visualize your SaaS growth before it happens. Don't react to data—anticipate it.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <button className="h-14 px-10 bg-purple-600 text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-purple-500 transition-all flex items-center gap-4 group shadow-[0_20px_40px_-15px_rgba(147,51,234,0.4)]">
                                Run_Simulation <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform font-bold" />
                            </button>
                            <button className="h-14 px-8 border border-white/10 text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white/5 transition-colors">
                                View_History
                            </button>
                        </div>
                    </div>

                    <div className="relative group perspective-1000">
                        {/* FORECAST VISUALIZATION */}
                        <div className="relative w-full aspect-video bg-[#0a0f1d] border border-white/5 p-8 rounded-[40px] shadow-2xl overflow-hidden group-hover:shadow-purple-600/10 transition-shadow">
                            {/* Graph Grid */}
                            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

                            {/* Probability Cloud (Future) */}
                            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 200">
                                {/* Confidence Interval Band */}
                                <path
                                    d="M 200 100 Q 250 80 300 70 L 400 50 L 400 150 L 300 130 Q 250 120 200 100 Z"
                                    className="fill-purple-600/10 animate-pulse"
                                    style={{ opacity: confidence / 100 }}
                                />

                                {/* The Timeline Line */}
                                <path
                                    d="M 0 150 Q 50 140 100 120 T 200 100"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M 200 100 Q 280 80 400 60"
                                    fill="none"
                                    stroke="#a855f7"
                                    strokeWidth="3"
                                    strokeDasharray="8 6"
                                    className="animate-[dash_2s_linear_infinite]"
                                />

                                {/* Anomaly Marker */}
                                <circle cx="320" cy="73" r="6" className="fill-cyan-400 animate-ping" />
                                <text x="330" y="65" className="fill-cyan-400 text-[10px] font-black uppercase">Anomaly_Avoided</text>

                                <line x1="200" y1="0" x2="200" y2="200" stroke="white" strokeOpacity="0.1" strokeDasharray="4" />
                                <text x="180" y="20" className="fill-slate-500 text-[8px] font-black uppercase">Now</text>
                            </svg>

                            {/* HUD Overlay Labels */}
                            <div className="absolute top-6 left-6 p-3 bg-black/60 backdrop-blur-md rounded-2xl border border-white/5 space-y-1">
                                <div className="text-[10px] font-bold text-slate-500 uppercase">Growth_Forecast</div>
                                <div className="text-2xl font-black text-white italic">+28.4%</div>
                            </div>

                            <div className="absolute bottom-6 right-6 p-3 bg-black/60 backdrop-blur-md rounded-2xl border border-white/5 flex gap-4">
                                <div className="space-y-1">
                                    <div className="text-[8px] font-black text-slate-500 uppercase">Accuracy</div>
                                    <div className="text-sm font-black text-purple-400">{confidence}%</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[8px] font-black text-slate-500 uppercase">Status</div>
                                    <div className="text-sm font-black text-cyan-400">STABLE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- AI INSIGHTS: PROBABILITY LAYERS --- */}
            <section className="py-24 px-10 bg-white shadow-[0_-30px_60px_rgba(0,0,0,0.5)] shrink-0 rounded-t-[60px] relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-8">
                        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.95]">
                            Intelligence_Beyond_Logics.
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed font-medium">
                            Our AI engine processes historical drift patterns to eliminate speculation. ViCode gives you a 14-day headstart on system bottlenecks.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                                <Target className="w-6 h-6" />
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { t: "Predictive_Auto_Scaling", d: "Instantly adjust resources before traffic peaks based on probability models.", i: Zap },
                            { t: "Anomaly_Pre-Detection", d: "Identify 98% of potential failure points using recursive time-series analysis.", i: AlertTriangle },
                            { t: "Outcome_Path_Routing", d: "Simulate billion-scale scenarios to find the lowest-latency path for future requests.", i: Activity },
                            { t: "Resource_Drift_Audit", d: "Audit project trajectories to ensure perfect alignment with long-term infrastructure goals.", i: Database }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 bg-slate-50 border border-slate-200 rounded-[32px] hover:border-purple-500/30 transition-all flex flex-col gap-4">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    <item.i className="w-5 h-5 text-slate-900" />
                                </div>
                                <h4 className="text-lg font-black text-slate-900 tracking-tighter uppercase">{item.t}</h4>
                                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                                    {item.d}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FUTURE FOOTER --- */}
            <footer className="py-20 px-10 bg-[#020617] border-t border-purple-500/20 shrink-0">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white">
                                <LineChart className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white leading-none">The_Next_State.</h3>
                        </div>
                        <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.4em]">ViCode_Forecasting_Systems_v9.1</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="space-y-2">
                            <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Simulation_Cycles</div>
                            <div className="text-2xl font-black text-purple-400">1.2 Trillion/sec</div>
                        </div>
                        <button className="h-14 px-12 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-purple-600 hover:text-white transition-all">
                            Request_Full_Forecast
                        </button>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-[8px] font-black text-slate-800 uppercase tracking-[0.5em]">
                    <span>Anticipation_as_a_Service_©2026</span>
                    <div className="flex gap-8">
                        <span>Privacy_Shield</span>
                        <span>Ethics_Protocol</span>
                    </div>
                </div>
            </footer>

            <style>{`
                @keyframes grow {
                    from { width: 0; }
                    to { width: 94%; }
                }
                @keyframes dash {
                    to { stroke-dashoffset: -14; }
                }
            `}</style>
        </div>
    );
};
