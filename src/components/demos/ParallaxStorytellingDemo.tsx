import {
ArrowRight,
ArrowUpRight,
Box,
CheckCircle2,
History,
Layers,
Network,
Scale,
ShieldCheck,
Workflow,
Zap
} from "lucide-react";
import React from "react";

export const ParallaxStorytellingDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col group scroll-smooth pb-0">

            {/* --- MINIMAL STORY STYLES --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fade-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scale-x {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
                @keyframes float-minimal {
                    0%, 100% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-15px) rotate(1deg); }
                }
                .animate-fade-up {
                    animation: fade-up 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
                }
                .parallax-blob {
                    filter: blur(80px);
                    opacity: 0.3;
                    transition: transform 0.5s cubic-bezier(0.2, 0.49, 0.32, 1);
                }
                .timeline-line {
                    width: 2px;
                    background: linear-gradient(to bottom, transparent, #e2e8f0 10%, #e2e8f0 90%, transparent);
                }
                .story-line-glow {
                    position: relative;
                }
                .story-line-glow::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom, transparent, #6366f1, transparent);
                    animation: timeline-flow 4s infinite linear;
                }
                @keyframes timeline-flow {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
            `}} />

            {/* --- NAV --- */}
            <nav className="flex items-center justify-between px-10 py-6 bg-white/70 backdrop-blur-md border-b border-slate-100 sticky top-0 z-[100] shrink-0">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-8 h-8 bg-slate-900 flex items-center justify-center rounded-sm transition-all group-hover:rotate-90">
                        <Box className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight lowercase">vi.story</span>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                    {["The_Origin", "The_Growth", "The_Scale"].map((tab) => (
                        <a key={tab} href="#" className="hover:text-slate-900 transition-colors relative group">
                            {tab}
                        </a>
                    ))}
                </div>

                <button className="h-10 px-8 bg-slate-900 text-white font-bold uppercase tracking-widest text-[9px] hover:bg-indigo-600 transition-all">
                    START_READING
                </button>
            </nav>

            {/* --- CHAPTER 0: THE ORIGIN (FIT 1 SCREEN) --- */}
            <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col items-center justify-center relative z-10 p-10 bg-[#fbfbfb] overflow-hidden shrink-0">

                {/* DECOR */}
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-slate-100 parallax-blob animate-float-minimal" />
                <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-indigo-50 parallax-blob animate-float-minimal delay-1000" />

                <div className="max-w-4xl w-full flex flex-col items-center justify-center gap-10 relative z-20">
                    <div className="flex flex-col items-center gap-4 animate-fade-up">
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500 bg-indigo-50 px-4 py-1.5 border border-indigo-100">
                            00_THE_INITIAL_STATE
                        </div>
                    </div>

                    <h1 className="text-6xl lg:text-[7rem] font-black tracking-tighter text-center text-slate-900 leading-[0.85] animate-fade-up [animation-delay:200ms] uppercase drop-shadow-sm">
                        Where_Code. <br />
                        <span className="text-slate-300 italic lowercase tracking-normal font-medium drop-shadow-none">Meets_Consequence.</span>
                    </h1>

                    <p className="max-w-xl text-lg font-medium text-slate-500 leading-relaxed text-center animate-fade-up [animation-delay:400ms]">
                        The evolution of ViCode began with a single promise: turning the chaos of raw data into a structured narrative of scaling success.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 w-full max-w-lg animate-fade-up [animation-delay:600ms]">
                        <button className="flex-1 h-16 bg-slate-900 text-white font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-indigo-600 transition-all flex items-center justify-center gap-4 group">
                            READ_THE_PROCESS <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* TIMELINE INDICATOR */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-slate-300">
                    <div className="w-[1px] h-20 timeline-line relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900 animate-[bounce_2s_infinite]" />
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 1: THE GROWTH --- */}
            <section className="py-24 px-10 lg:px-24 bg-white shrink-0 relative z-10 border-y border-slate-50 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12 animate-fade-up">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-slate-900" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">01 // THE_GRID_AWAKENS</span>
                        </div>

                        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9] uppercase">
                            Scaling. <br /> <span className="text-indigo-600">Exponential.</span>
                        </h2>

                        <div className="p-10 bg-slate-50 border-l-4 border-slate-900 space-y-6">
                            <p className="text-slate-600 text-xl font-medium leading-relaxed italic">
                                "At 10 million events per second, the narrative shifted from observation to prediction."
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-bold uppercase tracking-widest">
                                ViCode handles the heavy lifting of node synchronization, ensuring your story never skips a beat during traffic spikes.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12 pt-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Network className="w-5 h-5 text-slate-900" />
                                    <div className="text-4xl font-black text-slate-900">42k+</div>
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-2">NODES_NARRATED</div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-indigo-600" />
                                    <div className="text-4xl font-black text-indigo-600">~12ms</div>
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-2">STORY_LATENCY</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] flex items-center justify-center">
                        {/* PARALLAX VISUAL NARRATIVE */}
                        <div className="absolute w-[80%] h-[80%] bg-white border border-slate-100 shadow-2xl rounded-sm rotate-6 group-hover:rotate-0 transition-all duration-1000 overflow-hidden flex flex-col p-12 gap-8">
                            <div className="flex justify-between items-center text-slate-300">
                                <History className="w-6 h-6" />
                                <div className="text-[9px] font-bold uppercase tracking-widest">REALTIME_EVOLUTION_LOG</div>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { l: "Chapter_Start", t: "09:24:00", s: "OK" },
                                    { l: "Node_Evolution", t: "09:24:05", s: "UP" },
                                    { l: "Grid_Sync", t: "09:24:12", s: "OK" }
                                ].map((log, i) => (
                                    <div key={i} className="flex justify-between text-[11px] font-bold border-b border-slate-50 pb-3">
                                        <span className="text-slate-900 uppercase tracking-tighter">{log.l}</span>
                                        <span className="text-slate-300">{log.t}</span>
                                        <span className="text-indigo-600">{log.s}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex gap-2">
                                    {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-2 bg-slate-900 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />)}
                                </div>
                                <span className="text-slate-900 font-black text-[12px] uppercase">ACTIVE_VOYAGE</span>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900 flex items-center justify-center -translate-y-8 translate-x-8 shadow-2xl">
                            <Workflow className="w-12 h-12 text-white" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER 2: THE SCALE (FEATURES) --- */}
            <section className="px-10 lg:px-20 py-40 shrink-0 relative z-10 bg-[#fbfbfb]">
                <div className="max-w-5xl mx-auto space-y-32">
                    <div className="text-center space-y-8">
                        <div className="text-indigo-500 font-black uppercase tracking-[0.6em] text-[10px] bg-indigo-50 px-6 py-2 rounded-full inline-block">02 // THE_SCALING_NARRATIVE</div>
                        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 uppercase italic leading-none">Modular_Architecture. <br /> Endless_Chapters.</h2>
                        <p className="max-w-2xl mx-auto text-slate-500 text-lg font-medium leading-relaxed italic">
                            Each module in the ViCode ecosystem tells a unique story of efficiency and structural integrity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { t: "Logic.Paths", d: "Trace every operation through a beautiful narrative thread that maps your flow across nodes.", i: Workflow, s: "Operational_Clarity" },
                            { t: "Node.Layers", d: "Experience depth in your infrastructure. Vertical scaling with 100% visible transparency.", i: Layers, s: "Structural_Vision" },
                            { t: "Safe.Sync", d: "Encryption as a narrative safety net. Secure by default, visible when it matters most.", i: ShieldCheck, s: "Safety_First" },
                            { t: "Growth.Grid", d: "The architecture expands with you. From startup chapters to enterprise epics.", i: Scale, s: "Infinite_Scale" }
                        ].map((item, i) => (
                            <div key={i} className="p-12 bg-white border border-slate-100 hover:border-slate-900 transition-all duration-700 cursor-pointer group flex flex-col gap-12 relative overflow-hidden h-[340px] justify-between">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                    <item.i className="w-32 h-32 text-slate-900" />
                                </div>

                                <div className="space-y-8 relative z-10">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                                            <item.i className="w-7 h-7" />
                                        </div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {item.s}
                                        </div>
                                    </div>
                                    <h4 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">{item.t}</h4>
                                    <p className="text-[13px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest group-hover:text-slate-600 transition-colors">
                                        {item.d}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">
                                    CH_02.{i + 1} <div className="w-10 h-[1px] bg-slate-100 group-hover:w-full transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- THE FINAL CHAPTER: PRICING --- */}
            <section className="bg-white px-10 py-40 flex flex-col items-center justify-center text-center gap-20 shrink-0 relative border-t border-slate-50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                <div className="space-y-8 animate-fade-up">
                    <div className="text-indigo-600 font-black uppercase tracking-[0.5em] text-[9px] mb-4">THE_ENDLESS_MODEL</div>
                    <h2 className="text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase text-slate-900 drop-shadow-sm">The_Final. <br /> Act.</h2>
                    <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto leading-relaxed italic border-x border-slate-100 px-10">
                        "A subscription that scales with your ambition. One price. Infinite stories told."
                    </p>
                </div>

                <div className="w-full max-w-2xl bg-white border-2 border-slate-900 p-12 lg:p-20 relative shadow-[-20px_20px_0px_white, -20px_20px_40px_rgba(0,0,0,0.1)] hover:translate-x-4 hover:-translate-y-4 transition-all duration-700 group">
                    <div className="flex flex-col items-center gap-10">
                        <div className="text-center space-y-4">
                            <h3 className="text-sm font-black uppercase tracking-[0.6em] text-indigo-500">LEGACY_PLAN_V.01</h3>
                            <div className="text-9xl font-black text-slate-900 tracking-tighter italic flex items-start justify-center">
                                <span className="text-4xl mt-4 opacity-30">$</span>99
                            </div>
                            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pt-4">PER_NODE_STORY_ANNUALLY</div>
                        </div>

                        <div className="w-1/2 h-[1px] bg-slate-100" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left w-full max-w-md py-6">
                            {[
                                { f: "Unlimited_Narratives", d: "Scale chapters without limits." },
                                { f: "Cloud_Chronicles", d: "Sync logs across 100+ nodes." },
                                { f: "Priority_Plotlines", d: "24/7 dedicated narrative support." },
                                { f: "Predictive_Scope", d: "AI-driven story forecasting." }
                            ].map(item => (
                                <div key={item.f} className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-slate-900" />
                                        <span className="text-[11px] font-bold uppercase text-slate-900 tracking-tighter">{item.f}</span>
                                    </div>
                                    <p className="text-[9px] font-bold uppercase text-slate-400 tracking-widest pl-7">{item.d}</p>
                                </div>
                            ))}
                        </div>

                        <button className="w-full h-20 bg-slate-900 text-white font-bold uppercase tracking-[0.4em] text-[14px] hover:bg-indigo-600 transition-all flex items-center justify-center gap-8 shadow-2xl">
                            SUBSCRIBE_TO_SUCCESS <ArrowUpRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-32 bg-[#fbfbfb] text-slate-900 flex flex-col items-center gap-20 shrink-0 relative border-t border-slate-100">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-20 gap-16 font-black">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-slate-900 flex items-center justify-center rounded-sm transition-transform hover:rotate-12">
                            <Box className="w-9 h-9 text-white" />
                        </div>
                        <div className="text-left font-bold tracking-tight lowercase">
                            <h4 className="text-4xl leading-none font-black italic">vi.story</h4>
                            <p className="text-[10px] text-slate-400 uppercase tracking-[0.7em] mt-3">PART_OF_VICODE_©2026</p>
                        </div>
                    </div>
                    <div className="flex gap-16 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                        <a href="#" className="hover:text-slate-900">Chapters_Index</a>
                        <a href="#" className="hover:text-indigo-600 text-slate-900 underline underline-offset-8 decoration-2 italic">THE_END</a>
                    </div>
                </div>
                <div className="text-[14px] font-black text-slate-900/5 tracking-[3.5em] uppercase italic text-center px-4 w-full select-none pointer-events-none">
                    ARCHITECTURE_IS_NARRATIVE_IN_MOTION
                </div>
            </footer>
        </div>
    );
};
