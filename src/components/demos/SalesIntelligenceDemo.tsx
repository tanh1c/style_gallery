import { cn } from "@/lib/utils";
import {
ArrowUpRight,
BarChart3,
Briefcase,
Compass,
Sparkles,
Star,
Target,
TrendingUp,
Trophy,
UserPlus,
Users,
Zap
} from "lucide-react";
import React,{ useState } from "react";

export const SalesIntelligenceDemo: React.FC = () => {
    const [activeLead, setActiveLead] = useState<number>(0);

    const leads = [
        { name: "Global_Tech_Inc", value: "$450k", score: 98, status: "High_Intent" },
        { name: "Nova_SaaS_Labs", value: "$280k", score: 94, status: "In_Discovery" },
        { name: "DataFlow_Systems", value: "$150k", score: 82, status: "Nurturing" }
    ];

    return (
        <div className="flex-1 bg-[#0f1021] text-slate-400 font-sans selection:bg-amber-500 selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* --- REVENUE HUD NAV --- */}
            <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-[#0f1021]/80 backdrop-blur-xl border-b border-white/5">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-2xl flex items-center justify-center text-[#0f1021] shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                        <Target className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="font-black text-white tracking-widest text-base uppercase italic">ViCode_Win</span>
                        <div className="flex items-center gap-2 text-[9px] text-amber-500/60 font-black uppercase tracking-[0.2em]">
                            <Sparkles className="w-2.5 h-2.5" />
                            AI-Powered_Sales_Engine
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    {[
                        { l: "Pipeline", i: BarChart3 },
                        { l: "Leads", i: UserPlus },
                        { l: "Intelligence", i: Compass },
                        { l: "Competitors", i: Users }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 group cursor-pointer">
                            <item.i className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-500 transition-colors" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
                                {item.l}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-none mb-1">Total_Pipe</span>
                        <span className="text-sm font-black text-white tracking-tighter italic leading-none">$12.8M</span>
                    </div>
                    <button className="h-10 px-8 bg-white text-black font-black uppercase tracking-widest text-[9px] rounded-full hover:bg-amber-500 hover:text-white transition-all shadow-xl">
                        Lead_Gen
                    </button>
                </div>
            </nav>

            {/* --- PIPELINE HERO: ONE SCREEN (FIT VIEWPORT) --- */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-4 px-10 overflow-hidden shrink-0">
                {/* Visual Glows */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.07] blur-[120px] rounded-full" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 w-full">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-lg">
                            <TrendingUp className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Predicted Win-Rate: +22.4%</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white uppercase italic">
                            Close_Smart.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Scale_Faster.</span>
                        </h1>

                        <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-lg">
                            ViCode Win is the revenue operating system for elite sales teams. Eliminate manual lead qualification and let our AI prioritize your highest-intent opportunities.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <button className="h-14 px-10 bg-amber-500 text-[#0f1021] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-amber-400 transition-all flex items-center gap-4 group shadow-[0_20px_40px_-15px_rgba(245,158,11,0.4)]">
                                Access_Pipeline <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                            <button className="h-14 px-8 border border-white/10 text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white/5 transition-colors">
                                Watch_Demo
                            </button>
                        </div>
                    </div>

                    <div className="relative group perspective-1000">
                        {/* SALES HUD VISUALIZATION */}
                        <div className="relative w-full aspect-square bg-[#161830] border border-white/5 p-10 rounded-[60px] shadow-2xl overflow-hidden">
                            {/* Central Gauge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-8 border-white/5 flex items-center justify-center">
                                <div className="text-center space-y-1">
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Team_Target</div>
                                    <div className="text-6xl font-black text-white italic tracking-tighter">84%</div>
                                    <div className="text-[11px] font-black text-amber-500 uppercase tracking-widest">+12k Over_Quota</div>
                                </div>
                                {/* Gauge SVG */}
                                <svg className="absolute inset-0 w-full h-full -rotate-90">
                                    <circle cx="50%" cy="50%" r="152" fill="none" stroke="#f59e0b" strokeWidth="8" strokeDasharray="955" strokeDashoffset="150" strokeLinecap="round" className="opacity-20 translate-z-0" />
                                    <circle cx="50%" cy="50%" r="152" fill="none" stroke="#f59e0b" strokeWidth="8" strokeDasharray="955" strokeDashoffset="150" strokeLinecap="round" className="animate-[grow-dash_2s_ease-out_forwards]" />
                                </svg>
                            </div>

                            {/* Floating Lead Badges */}
                            {leads.map((lead, i) => (
                                <div
                                    key={i}
                                    onMouseEnter={() => setActiveLead(i)}
                                    className={cn(
                                        "absolute w-44 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 cursor-pointer hover:bg-white/10",
                                        i === 0 ? "top-8 left-8" : i === 1 ? "top-12 right-4" : "bottom-12 left-12",
                                        activeLead === i ? "scale-110 shadow-2xl z-20" : "scale-100 opacity-60 z-10"
                                    )}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="w-6 h-6 bg-slate-800 rounded-lg flex items-center justify-center text-[10px] text-white">
                                            <Briefcase className="w-3 h-3 text-amber-500" />
                                        </div>
                                        <div className="text-[10px] font-black text-amber-500">{lead.score} / 100</div>
                                    </div>
                                    <div className="text-xs font-black text-white italic truncate">{lead.name}</div>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="text-[9px] font-black text-slate-500 uppercase">{lead.status}</span>
                                        <span className="text-[10px] font-black text-white">{lead.value}</span>
                                    </div>
                                </div>
                            ))}

                            {/* Intelligence Snippet */}
                            <div className="absolute bottom-6 right-6 p-4 bg-amber-500 text-[#0f1021] rounded-2xl border border-amber-600 shadow-xl max-w-[180px] space-y-1">
                                <div className="flex items-center gap-2 text-[9px] font-black uppercase">
                                    <Sparkles className="w-3 h-3" /> AI_Insight
                                </div>
                                <p className="text-[10px] font-black leading-tight uppercase italic">
                                    Prospect #82 is stalling. Send "Economic Impact" deck now.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- REVENUE TECH GRID --- */}
            <section className="py-24 px-10 bg-white shrink-0 rounded-t-[80px] shadow-[0_-40px_80px_rgba(0,0,0,0.5)] relative z-20">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.95]">
                                Force_Multiplier_AI.
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                ViCode connects directly to your existing CRM to enrich every lead with intent data from 40+ dark social sources.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 shadow-sm border border-slate-200">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 shadow-sm border border-slate-200">
                                    <Target className="w-6 h-6" />
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { t: "Autonomous_Scoring", d: "Dynamic probability modeling based on engagement velocity and budget drift.", i: Zap },
                                { t: "Revenue_Attribution", d: "Track the exact content touchpoint that triggered the high-intent signal.", i: Sparkles },
                                { t: "Intelligent_Nurture", d: "Auto-send hyper-personalized assets when leads enter 'Comparison Mode'.", i: Star },
                                { t: "Win_Rate_Optimization", d: "Identify sales motion blockages before they impact quarterly targets.", i: Trophy }
                            ].map((item, i) => (
                                <div key={i} className="group p-8 bg-slate-50 border border-slate-200 rounded-[32px] hover:border-amber-500/30 transition-all">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-inner mb-6 group-hover:scale-110 transition-transform">
                                        <item.i className="w-5 h-5 text-slate-900" />
                                    </div>
                                    <h4 className="text-base font-black text-slate-900 tracking-widest uppercase mb-2">{item.t}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-tighter">
                                        {item.d}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SALES FOOTER --- */}
            <footer className="py-20 px-10 bg-[#0f1021] border-t border-white/5 shrink-0">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-[#0f1021] shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                            <Trophy className="w-7 h-7" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-3xl font-black text-white tracking-tighter uppercase italic leading-none">The_Top_Line.</h4>
                            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Revenue_Inteligence_v12.4</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex -space-x-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0f1021] bg-slate-800 flex items-center justify-center text-[10px] font-black text-white">U{i}</div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-[#0f1021] bg-amber-500 flex items-center justify-center text-[10px] font-black text-[#0f1021]">+2k</div>
                        </div>
                        <button className="h-14 px-12 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-amber-500 hover:text-white transition-all">
                            Onboard_Your_Team
                        </button>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[8px] font-black text-slate-800 uppercase tracking-[0.5em]">
                    <span>Close_Protocol_©2026</span>
                    <div className="flex gap-8">
                        <span>Pipe_Encryption</span>
                        <span>Lead_Privacy</span>
                    </div>
                </div>
            </footer>

            <style>{`
                @keyframes grow-dash {
                    from { stroke-dashoffset: 955; }
                    to { stroke-dashoffset: 150; }
                }
            `}</style>
        </div>
    );
};
