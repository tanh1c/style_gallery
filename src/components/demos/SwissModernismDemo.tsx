import {
Activity,
ArrowRight,
ArrowUpRight,
Cpu,
Grid as GridIcon,
Plus,
ShieldCheck,
Workflow
} from "lucide-react";
import React from "react";

export const SwissModernismDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-white text-black font-sans selection:bg-[#ef4444] selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col group scroll-smooth">

            {/* --- SWISS MODERNISM 2.0 STYLES (CLEANED) --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
                
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
                .swiss-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 0; /* Pure grid approach */
                }
                .swiss-border-b { border-bottom: 2px solid black; }
                .swiss-border-r { border-right: 2px solid black; }
                .swiss-border-l { border-left: 2px solid black; }
                
                .text-giant {
                    font-size: clamp(3rem, 10vw, 8rem);
                    line-height: 1.0;
                    letter-spacing: -0.05em;
                }
                .swiss-cta {
                    background-color: #ef4444;
                    color: white;
                    transition: all 0.2s ease-in-out;
                }
                .swiss-cta:hover {
                    background-color: black;
                }
            `}} />

            {/* --- TOP HUD --- */}
            <div className="h-4 bg-[#ef4444] w-full sticky top-0 z-[110]" />

            <nav className="flex items-start justify-between px-10 py-10 bg-white swiss-border-b sticky top-4 z-[100] font-inter">
                <div className="flex flex-col gap-1 group cursor-pointer">
                    <span className="text-3xl font-black uppercase tracking-tighter leading-none">VICODE_SWISS</span>
                    <span className="text-[9px] font-bold tracking-[0.4em] opacity-40">SYSTEM_DOCUMENTATION_50</span>
                </div>

                <div className="hidden lg:grid grid-cols-2 gap-16 text-[10px] font-black uppercase tracking-[0.2em] border-l border-black/10 pl-16">
                    <div className="space-y-4">
                        <span className="opacity-30">ARCH_01</span>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:text-[#ef4444]">MODULAR</a>
                            <a href="#" className="hover:text-[#ef4444]">LOGIC</a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <span className="opacity-30">NET_02</span>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:text-[#ef4444]">SPEED</a>
                            <a href="#" className="hover:text-[#ef4444]">METRICS</a>
                        </div>
                    </div>
                </div>

                <div className="w-10 h-10 bg-[#ef4444] flex items-center justify-center text-white">
                    <Plus className="w-6 h-6" />
                </div>
            </nav>

            {/* --- HERO: CLEANED SWISS GRID --- */}
            <section className="h-[calc(100vh-140px)] min-h-[650px] flex flex-col relative z-10 shrink-0 swiss-border-b overflow-hidden bg-white">
                <div className="swiss-grid h-full w-full">
                    {/* ASYMMETRICAL 8/4 split */}
                    <div className="col-span-12 lg:col-span-8 flex flex-col justify-between items-start swiss-border-r p-10 lg:p-14">
                        <div className="space-y-6 overflow-visible">
                            <div className="text-[10px] font-black tracking-widest bg-black text-white inline-block px-4 py-1">VI.DESIGN.50</div>
                            <h1 className="text-giant font-black uppercase leading-[0.85]">
                                Objective. <br />
                                <span className="text-[#ef4444] block">Infra.</span>
                                <span className="text-[#ef4444] italic -mt-2 block">Structure.</span>
                            </h1>
                        </div>

                        <div className="max-w-lg space-y-10">
                            <p className="text-xl font-bold leading-tight tracking-tight">
                                Stripped of all noise. Functional. Precise. <br /> Integrated CI/CD pipelines at your fingertips.
                            </p>
                            <div className="flex items-center gap-8">
                                <button className="swiss-cta h-16 px-12 font-black uppercase tracking-[0.3em] text-[11px] flex items-center gap-4 group">
                                    INTIALIZE <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>
                                <span className="text-[9px] font-black opacity-30 uppercase tracking-[0.3em]">V.5.0.01</span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:col-span-4 lg:flex flex-col justify-between p-14 bg-[#fafafa]">
                        <div className="space-y-14">
                            <div className="space-y-6">
                                <div className="text-[10px] font-black uppercase tracking-widest opacity-20">SYSTEM_INDEX_M.01</div>
                                <div className="text-6xl font-black italic">99.99<span className="text-[#ef4444]">%</span></div>
                                <div className="w-full h-1 bg-black/10">
                                    <div className="h-full w-[99%] bg-black" />
                                </div>
                            </div>

                            <div className="p-10 border-4 border-black space-y-6 bg-white shadow-[10px_10px_0px_#ef4444]">
                                <div className="w-10 h-10 bg-black flex items-center justify-center">
                                    <Activity className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter italic leading-none">REAL_TIME_STREAM</h3>
                                <p className="text-[11px] font-bold opacity-50 uppercase tracking-widest">
                                    Continuous monitoring of node health and data flow paths. No interruption.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-between items-end">
                            <div className="text-[9px] font-black uppercase tracking-[0.6em] transform -rotate-90 origin-bottom-left absolute">GRID.S_V50</div>
                            <div className="text-right w-full">
                                <div className="text-4xl font-black italic">01 // 50</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FEATURES GRID --- */}
            <section className="py-0 px-0 shrink-0 relative z-10 swiss-border-b bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:divide-x-2 lg:divide-black">
                    {[
                        { t: "Logic.Go", d: "Mathematical precision calculation.", i: Cpu, c: "01" },
                        { t: "Grid.X", d: "12-column structural scaling.", i: Workflow, c: "02" },
                        { t: "Safe.Os", d: "Objective security, hardened logic.", i: ShieldCheck, c: "03" },
                        { t: "View.S", d: "Clear hierarchy for complex data.", i: GridIcon, c: "04" }
                    ].map((item, i) => (
                        <div key={i} className="group p-12 border-b-2 lg:border-b-0 border-black hover:bg-black hover:text-white transition-all cursor-pointer flex flex-col justify-between h-[360px]">
                            <div className="flex justify-between items-start">
                                <item.i className="w-10 h-10" />
                                <span className="text-[10px] font-black opacity-20 group-hover:opacity-100 italic transition-opacity">{item.c}</span>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-4xl font-black uppercase tracking-tighter leading-tight">{item.t}</h4>
                                <div className="w-8 h-[2px] bg-[#ef4444]" />
                                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                                    {item.d}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- METRICS --- */}
            <section className="py-24 px-10 lg:px-16 swiss-grid swiss-border-b bg-white items-center">
                <div className="col-span-12 lg:col-span-5 space-y-10 lg:swiss-border-r lg:pr-14">
                    <h2 className="text-[#ef4444] font-black text-5xl leading-none uppercase italic">Precision. <br /> Always.</h2>
                    <p className="text-lg font-bold uppercase leading-tight border-l-4 border-black pl-8">
                        System documentation designed for absolute execution. No ambiguity.
                    </p>
                    <div className="w-full aspect-video bg-slate-100 flex items-center justify-center border-2 border-black">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                            className="w-full h-full object-cover grayscale opacity-20"
                            alt="Metric Visual"
                        />
                        <div className="absolute text-[10px] font-black opacity-30 uppercase tracking-[1em]">VISUAL_SPEC</div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-7 flex flex-col gap-6 lg:pl-4">
                    {[
                        { n: "Latency", v: "1.2ms", b: "85%" },
                        { n: "Growth", v: "Active", b: "100%" },
                        { n: "Buffer", v: "Free", b: "15%" }
                    ].map(m => (
                        <div key={m.n} className="flex items-center gap-10 group">
                            <div className="w-32 text-sm font-black uppercase italic group-hover:text-[#ef4444] transition-colors">{m.n}</div>
                            <div className="flex-1 h-6 border-2 border-black relative">
                                <div className="absolute top-0 left-0 h-full bg-black group-hover:bg-[#ef4444] transition-all" style={{ width: m.b }} />
                            </div>
                            <div className="w-20 text-right text-sm font-black">{m.v}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- PRICING --- */}
            <section className="bg-black text-white px-10 py-32 flex flex-col items-center justify-center text-center gap-20 shrink-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 font-black text-[12rem] opacity-[0.03] select-none leading-none z-0">COST</div>

                <div className="max-w-2xl space-y-8 relative z-10">
                    <div className="text-[10px] bg-[#ef4444] inline-block px-6 py-2 font-black tracking-[0.5em] uppercase">LICENSING_2026</div>
                    <h2 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none uppercase italic">Fixed_Fee.</h2>
                </div>

                <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 swiss-border relative z-10 bg-white text-black overflow-hidden">
                    <div className="p-10 lg:p-14 swiss-border-r flex flex-col justify-between items-start text-left bg-[#f8f8f8]">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-black uppercase italic">V_CORE_LICENCE</h3>
                        </div>
                        <div className="mt-20">
                            <div className="text-8xl font-black tracking-tighter italic text-[#ef4444]">$99</div>
                            <div className="text-[10px] font-black uppercase opacity-20">PRICE_OBJECTIVE</div>
                        </div>
                    </div>
                    <div className="p-10 lg:p-14 flex flex-col justify-between items-start text-left space-y-12 bg-white">
                        <div className="w-full space-y-4">
                            {["Grid Logging", "Mathematical Support", "Priority Core"].map(f => (
                                <div key={f} className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                                    <Plus className="w-4 h-4 text-[#ef4444]" />
                                    <span className="text-lg font-black uppercase tracking-tighter">{f}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full h-16 bg-black text-white font-black uppercase tracking-[0.3em] text-[12px] hover:bg-[#ef4444] transition-all flex items-center justify-center gap-6 shadow-[8px_8px_0px_#ef4444]">
                            ACQUIRE <ArrowUpRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-24 bg-white text-black flex flex-col items-center gap-16 shrink-0 border-t-4 border-black font-inter">
                <div className="flex flex-col lg:flex-row justify-between items-end w-full px-14 gap-12 font-black">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-4xl font-black uppercase italic leading-none">ViCode.</h4>
                        <div className="w-16 h-2 bg-[#ef4444]" />
                        <p className="text-[9px] font-bold uppercase tracking-[0.6em] opacity-40">SWISS_SYSTEM_2026</p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-[10px] font-black uppercase tracking-widest opacity-40">
                        <a href="#" className="hover:text-[#ef4444]">THE_CORE</a>
                        <a href="#" className="hover:text-[#ef4444]">THE_SPEC</a>
                        <a href="#" className="hover:text-[#ef4444]">RATIOS</a>
                        <a href="#" className="hover:text-[#ef4444] italic border-b border-black">EXIT</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
