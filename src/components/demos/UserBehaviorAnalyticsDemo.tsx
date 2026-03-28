import { cn } from "@/lib/utils";
import {
Activity,
ArrowDown,
Fingerprint,
LayoutGrid,
MousePointer2,
Play,
Pointer,
Users
} from "lucide-react";
import React,{ useState } from "react";

export const UserBehaviorAnalyticsDemo: React.FC = () => {
    const [activeStage, setActiveStage] = useState<number>(0);

    const funnelStages = [
        { name: "Awareness", users: "1.2M", drop: "0%", color: "bg-orange-500" },
        { name: "Engagement", users: "420k", drop: "65%", color: "bg-amber-500" },
        { name: "Conversion", users: "84k", drop: "80%", color: "bg-rose-500" }
    ];

    return (
        <div className="flex-1 bg-[#fcfcfd] text-slate-600 font-sans selection:bg-orange-600 selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* --- BEHAVIOR NAV --- */}
            <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-white/80 backdrop-blur-xl border-b border-slate-100">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-[0_10px_20px_-5px_rgba(234,88,12,0.3)]">
                        <Fingerprint className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="font-black text-slate-900 tracking-tight text-base uppercase">ViCode_Trace</span>
                        <div className="flex items-center gap-2 text-[9px] text-orange-600/60 font-black uppercase tracking-[0.2em]">
                            <Activity className="w-2.5 h-2.5" />
                            Human_In-the-Loop_Analytics
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
                        {["Journey", "Funnel", "Heatmaps", "Sessions"].map((tab) => (
                            <button
                                key={tab}
                                className={cn(
                                    "h-8 px-5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                                    tab === "Funnel" ? "bg-white text-orange-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="h-10 px-6 bg-slate-900 text-white font-black uppercase tracking-widest text-[9px] rounded-full hover:bg-orange-600 transition-all">
                        Export_Persona
                    </button>
                </div>
            </nav>

            {/* --- FUNNEL HERO: THE CONVERSION FLOW (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-4 px-10 overflow-hidden shrink-0">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#f59e0b_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 text-orange-600 rounded-lg">
                            <Pointer className="w-3.5 h-3.5 fill-orange-600" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Behavior_Pattern_Detected</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900 uppercase italic">
                            Track_Intent.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">Map_Emotion.</span>
                        </h1>

                        <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-lg">
                            ViCode Trace visualizes the "Why" behind every click. Transform fragmented session data into cohesive behavioral funnels that convert.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <button className="h-14 px-10 bg-orange-600 text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-orange-500 transition-all flex items-center gap-4 group shadow-[0_20px_40px_-15px_rgba(234,88,12,0.4)]">
                                Start_Tracking <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </button>
                            <button className="h-14 px-8 border border-slate-200 text-slate-900 font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-50 transition-colors">
                                View_Sessions
                            </button>
                        </div>
                    </div>

                    <div className="relative group">
                        {/* FUNNEL VISUALIZATION */}
                        <div className="relative w-full max-w-[500px] aspect-square flex flex-col items-center justify-center gap-6">
                            {funnelStages.map((stage, i) => (
                                <div
                                    key={i}
                                    onMouseEnter={() => setActiveStage(i)}
                                    className={cn(
                                        "relative w-full transition-all duration-500 cursor-pointer group/stage",
                                        i === 0 ? "max-w-[100%]" : i === 1 ? "max-w-[70%]" : "max-w-[40%]",
                                        activeStage === i ? "scale-105" : "scale-100"
                                    )}
                                >
                                    <div className={cn(
                                        "h-24 rounded-[32px] flex items-center justify-between px-10 border border-white shadow-xl relative z-10",
                                        stage.color
                                    )}>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">{stage.name}</span>
                                            <span className="text-2xl font-black text-white italic">{stage.users}</span>
                                        </div>
                                        <div className="text-right">
                                            {i > 0 && (
                                                <div className="flex items-center gap-2 text-white/40 font-mono text-[9px] mb-1">
                                                    <Activity className="w-3 h-3" /> Drop_Off
                                                </div>
                                            )}
                                            <span className="text-xl font-black text-white">{stage.drop === "0%" ? "INIT" : stage.drop}</span>
                                        </div>
                                    </div>

                                    {/* Connector for funnel shape */}
                                    {i < 2 && (
                                        <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-[80%] h-12 bg-slate-100 z-0 opacity-20 [clip-path:polygon(0_0,100%_0,80%_100%,20%_100%)]" />
                                    )}

                                    {/* Context HUD on Hover */}
                                    <div className={cn(
                                        "absolute -right-32 top-1/2 -translate-y-1/2 w-24 p-3 bg-white border border-slate-100 rounded-2xl shadow-2xl transition-all duration-500",
                                        activeStage === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
                                    )}>
                                        <div className="text-[8px] font-black text-slate-400 uppercase mb-2">Insights</div>
                                        <div className="space-y-2">
                                            <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-orange-500" style={{ width: '80%' }} />
                                            </div>
                                            <div className="text-[9px] font-black text-orange-600">STABLE</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EVIDENCE LAYERS: SESSION INSIGHTS --- */}
            <section className="py-24 px-10 bg-slate-900 shadow-[0_-30px_60px_rgba(0,0,0,0.5)] shrink-0 rounded-t-[60px] relative z-20">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { label: "Sessions", value: "24.k", delta: "+12%", color: "text-orange-400" },
                            { label: "Convert_Rate", value: "3.2%", delta: "+0.4%", color: "text-rose-400" },
                            { label: "Bounce_Idx", value: "48s", delta: "-8s", color: "text-amber-400" },
                            { label: "Sentiment", value: "High", delta: "Normal", color: "text-emerald-400" }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[32px] hover:bg-white/10 transition-all group">
                                <div className="text-[8px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">{stat.label}</div>
                                <div className="flex items-end gap-3">
                                    <div className={cn("text-3xl font-black italic uppercase tracking-tighter", stat.color)}>{stat.value}</div>
                                    <div className="text-[10px] font-bold text-white/20 pb-1">{stat.delta}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 space-y-8 animate-in fade-in duration-1000">
                            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-[0.95]">
                                Decipher_The_Code_of_Action.
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-medium">
                                Why do users leave at step 2? Is it the UI friction or the loading duration? ViCode Trace correlates heatmaps with session replays to find the exact frame of abandonment.
                            </p>
                            <div className="grid grid-cols-2 gap-10 pt-4">
                                <div className="space-y-4">
                                    <div className="h-12 w-12 rounded-2xl bg-orange-600/20 flex items-center justify-center text-orange-400">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-sm font-black text-white uppercase tracking-widest">Cohort_Diving</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-tighter">Isolate behavior of power users vs. new leads.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-12 w-12 rounded-2xl bg-rose-600/20 flex items-center justify-center text-rose-400">
                                        <Play className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-sm font-black text-white uppercase tracking-widest">Event_Stream</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-tighter">Live view of every interaction event as it happens.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-white/5 p-4 rounded-[40px] border border-white/5 shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-6">
                                <div className="flex items-center gap-2 bg-orange-600 px-3 py-1 rounded-full animate-pulse">
                                    <Activity className="w-3 h-3 text-white" />
                                    <span className="text-[8px] font-black text-white uppercase tracking-widest">Live_Sess_#821</span>
                                </div>
                            </div>
                            <div className="bg-slate-900 p-8 h-80 rounded-[32px] flex flex-col gap-6 overflow-hidden">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                            <MousePointer2 className="w-3 h-3 text-white/30" />
                                        </div>
                                        <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                                            <span className="text-orange-500">22:04:12</span> - USER_EVENT_CLICK: "Buy_Now_Button"
                                        </div>
                                    </div>
                                ))}
                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">
                                    <span>Buffering_Stream...</span>
                                    <div className="flex gap-2">
                                        <div className="w-1 h-1 bg-orange-500 rounded-full" />
                                        <div className="w-1 h-1 bg-orange-500/50 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- HUMAN-CENTRIC FOOTER --- */}
            <footer className="py-20 px-10 bg-white border-t border-slate-100 shrink-0">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shadow-sm">
                            <LayoutGrid className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">The_Human_Ledger.</h4>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mapping_User_Intent_©2026</p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <button className="h-12 px-10 border border-slate-200 text-slate-900 font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-slate-50 transition-all">
                            Documentation
                        </button>
                        <button className="h-12 px-10 bg-orange-600 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-orange-700 transition-all shadow-lg">
                            Book_Audit
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};
