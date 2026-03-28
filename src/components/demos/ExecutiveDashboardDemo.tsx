import {
BarChart4,
Briefcase,
Calendar,
CheckCircle2,
ChevronRight,
Crown,
Filter,
Globe2,
PieChart,
Plus,
Share2,
ShieldCheck,
Target,
TrendingUp
} from "lucide-react";
import React from "react";

export const ExecutiveDashboardDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#1C1917] text-stone-200 font-sans selection:bg-amber-500/20 selection:text-amber-200 overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* --- PREMIUM BOARD NAV --- */}
            <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-8 bg-[#1C1917]/80 backdrop-blur-3xl border-b border-stone-800/50">
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center shadow-2xl shadow-amber-500/20">
                        <Crown className="w-6 h-6 text-stone-950" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-extrabold text-2xl tracking-tighter text-white font-serif italic">ViCode_ELITE</span>
                        <span className="text-[9px] font-bold text-stone-500 uppercase tracking-widest pl-0.5">Board_Intelligence_v12</span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-12">
                    <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
                        <span className="text-amber-500 border-b border-amber-500/50 pb-1 cursor-pointer">Insight_Deck</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Strategic_Growth</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Risk_Matrix</span>
                    </div>
                    <div className="h-4 w-[1px] bg-stone-800" />
                    <div className="flex items-center gap-4">
                        <button className="h-12 w-12 rounded-full border border-stone-800 flex items-center justify-center hover:bg-white/5 transition-colors">
                            <Plus className="w-5 h-5 text-stone-400" />
                        </button>
                        <button className="h-12 px-8 rounded-full bg-white text-stone-950 font-black uppercase tracking-widest text-[10px] hover:bg-amber-500 hover:text-stone-950 transition-all shadow-xl shadow-white/5">
                            Executive_Briefing
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- EXECUTIVE HERO: IMPACT QUANTIFIED (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-12 pb-8 px-16 overflow-hidden shrink-0">
                {/* Boardroom Ambient Light */}
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-amber-500/5 blur-[180px] rounded-full" />
                <div className="absolute -bottom-20 -left-20 w-[30vw] h-[30vw] bg-stone-500/5 blur-[150px] rounded-full" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="flex items-center gap-3">
                            <div className="px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700 text-[8px] font-black uppercase tracking-widest text-stone-400 flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Q1_Performance_Target: Achieved
                            </div>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-white font-serif italic">
                            Strategy,<br />
                            <span className="text-amber-500">Refined_By_Code.</span>
                        </h1>

                        <p className="text-xl font-bold text-stone-400 leading-relaxed italic max-w-lg">
                            Bridging the gap between technical complexity and strategic impact. ViCode provides the high-fidelity oversight your board demands.
                        </p>

                        <div className="flex flex-wrap gap-6 pt-2">
                            <div className="space-y-1">
                                <div className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">Global_EBITDA</div>
                                <div className="text-3xl font-extrabold text-white tracking-tighter italic">+12.4%</div>
                            </div>
                            <div className="h-10 w-[1px] bg-stone-800" />
                            <div className="space-y-1">
                                <div className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">Market_Cap_Index</div>
                                <div className="text-3xl font-extrabold text-white tracking-tighter italic">92.1k</div>
                            </div>
                            <div className="h-10 w-[1px] bg-stone-800" />
                            <div className="space-y-1">
                                <div className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">Security_Rating</div>
                                <div className="text-3xl font-extrabold text-emerald-500 tracking-tighter italic">AAA</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group perspective-1000">
                        <div className="p-1.5 rounded-[40px] bg-gradient-to-br from-stone-800/50 to-stone-900/50 border border-stone-800 shadow-3xl">
                            <div className="p-8 rounded-[34px] bg-[#1C1917] border border-white/5 space-y-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <TrendingUp className="w-4 h-4 text-amber-500" />
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white italic">Portfolio_Velocity</h4>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-7 px-2.5 rounded-lg border border-stone-800 flex items-center gap-2 text-[8px] font-bold text-stone-500 uppercase tracking-widest">
                                            All_Regions <Filter className="w-2.5 h-2.5" />
                                        </div>
                                    </div>
                                </div>

                                <div className="h-[260px] relative rounded-xl overflow-hidden bg-stone-950/50 border border-white/5">
                                    <img
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                                        alt="Elite Insights"
                                        className="w-full h-full object-cover opacity-20 grayscale brightness-50"
                                    />
                                    {/* Float HUD */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-[85%] h-36 border border-white/5 bg-white/[0.02] backdrop-blur-xl rounded-xl p-6 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <div className="text-[9px] font-bold text-stone-500 uppercase tracking-[0.2em] mb-0.5">Impact_Forecast</div>
                                                    <div className="text-3xl font-black italic tracking-tighter text-white">42%_Increase</div>
                                                </div>
                                                <div className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-amber-500">
                                                    <BarChart4 className="w-4.5 h-4.5" />
                                                </div>
                                            </div>
                                            <div className="w-full h-[1.5px] bg-stone-800">
                                                <div className="h-full bg-amber-500" style={{ width: '42%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-stone-500 border-t border-stone-800 pt-6">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Strategy_Mesh_Active
                                    </div>
                                    <button className="flex items-center gap-1.5 text-white hover:text-amber-500 transition-colors">
                                        Annual_Review <ChevronRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Side Decorations */}
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                            {[Briefcase, Globe2, ShieldCheck].map((Icon, i) => (
                                <div key={i} className="w-10 h-10 rounded-xl bg-stone-800 border border-stone-700 flex items-center justify-center shadow-xl">
                                    <Icon className="w-4 h-4 text-stone-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- STRATEGIC PILLARS: TRUSTED BY THE ELITE --- */}
            <section className="py-48 px-16 bg-white text-stone-900 shrink-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-stone-50 opacity-50 blur-[150px] rounded-full" />

                <div className="max-w-7xl mx-auto space-y-32 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-16 border-b border-stone-100 pb-24">
                        <div className="space-y-8 max-w-2xl">
                            <h2 className="text-4xl lg:text-7xl font-black tracking-tighter leading-none text-stone-900 font-serif italic">
                                Trusted_at_the<br />
                                <span className="text-amber-600 underline decoration-8 decoration-amber-100">Highest_Level.</span>
                            </h2>
                            <p className="text-2xl font-bold text-stone-400 leading-relaxed italic">
                                ViCode isn’t just for engineers. It’s the visual source of truth for Fortune 500 CEOs, providing immediate visibility into every layer of global operations.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 text-right">
                            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-300">Global_Compliance_Registry</div>
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-full border-2 border-stone-100 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-stone-200" />
                                </div>
                                <div className="h-14 w-14 rounded-full border-2 border-stone-100 flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6 text-stone-200" />
                                </div>
                                <div className="h-14 w-48 rounded-full bg-stone-100 flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-stone-400">
                                    SOC2_TYPE_II
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { t: "Predictive_Insight", d: "Neural-led forecasting identifies market shifts 3 quarters before they impact your sheet.", i: Target },
                            { t: "Unified_Governance", d: "One central hub for all compliance, legal, and operational risk metrics across regions.", i: PieChart },
                            { t: "Collaborative_Flow", d: "Board-ready visualizations designed for instant interpretation and decision making.", i: Share2 }
                        ].map((pillar, i) => (
                            <div key={i} className="group space-y-10 p-12 rounded-[56px] border border-stone-100 hover:border-amber-200 hover:bg-white hover:shadow-3xl transition-all duration-700">
                                <div className="w-16 h-16 rounded-[24px] bg-stone-950 flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:rotate-12">
                                    <pillar.i className="w-7 h-7" />
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-3xl font-black tracking-tighter leading-tight font-serif italic uppercase underline decoration-2 decoration-stone-200">{pillar.t}</h4>
                                    <p className="text-base font-bold text-stone-400 leading-relaxed italic">{pillar.d}</p>
                                </div>
                                <button className="pt-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-stone-300 hover:text-amber-600 transition-colors">
                                    View_Deep_Dive <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CORPORATE FOOTER: THE NEW STANDARD --- */}
            <footer className="py-32 px-16 bg-[#1C1917] border-t border-stone-800/50 shrink-0 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-end">
                    <div className="space-y-16">
                        <div className="flex items-center gap-6">
                            <Crown className="w-12 h-12 text-amber-500" />
                            <h3 className="text-5xl lg:text-8xl font-black italic tracking-tighter uppercase text-white leading-none font-serif underline decoration-amber-500/30">
                                The_New<br />
                                Standard.
                            </h3>
                        </div>
                        <button className="h-20 px-16 rounded-3xl bg-white text-stone-950 font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:bg-amber-500 transition-all transform hover:scale-110">
                            Schedule_Briefing
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-24 text-[10px] font-black uppercase tracking-widest text-stone-500 italic pb-4">
                        <div className="space-y-8">
                            <div className="text-white border-b border-stone-800 pb-2">STRATEGIC_NODES</div>
                            <div className="space-y-4">
                                <span>Zurich_Cluster_Alpha</span>
                                <span>Cayman_State_A</span>
                                <span>Singapore_Master</span>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="text-white border-b border-stone-800 pb-2">TIME_SYNC_UTC</div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-stone-700" />
                                    Q2_PROJECTION_OPEN
                                </div>
                                <div className="h-10 px-4 rounded-xl border border-stone-800 flex items-center justify-center text-[9px] text-amber-500/50">
                                    SYSTEMS_NOMINAL_v12.4
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.5em] text-stone-700 italic">
                    <div>ViCode_Executive_Interface_©2026</div>
                    <div className="flex gap-12">
                        <span>Confidentiality_Matrix</span>
                        <span>Strategic_Terms</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
