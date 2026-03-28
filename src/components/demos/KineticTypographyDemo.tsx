import {
ArrowRight,
ArrowUpRight,
Command,
Cpu,
Layers,
ShieldCheck,
Workflow
} from "lucide-react";
import React from "react";

export const KineticTypographyDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#0a0a0a] text-[#f5f5f5] font-mono selection:bg-[#FF5C00] selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col group scroll-smooth">

            {/* --- KINETIC GLOBAL STYLES (ORANGE EDITION) --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee-l {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-r {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .marquee-container {
                    display: flex;
                    white-space: nowrap;
                    width: 200%;
                }
                .animate-marquee-l {
                    animation: marquee-l 35s linear infinite;
                }
                .animate-marquee-r {
                    animation: marquee-r 30s linear infinite;
                }
                .font-syncopate {
                    font-family: 'Syncopate', sans-serif;
                }
                /* PREVENT TEXT CLIPPING ON SKEW/ROTATE */
                .font-syncopate span, .font-syncopate h1, .font-syncopate h4 {
                    display: inline-block;
                    line-height: normal;
                    padding: 0.2em 0;
                }
            `}} />

            {/* --- GOOGLE FONTS IMPORT --- */}
            <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

            {/* --- NAV: ORANGE ACCENT --- */}
            <nav className="flex items-center justify-between px-10 lg:px-14 py-8 bg-black/80 backdrop-blur-xl border-b border-[#FF5C00]/20 sticky top-0 z-[100]">
                <div className="flex items-center gap-5 group cursor-pointer overflow-visible">
                    <div className="w-9 h-9 bg-[#FF5C00] flex items-center justify-center transition-all group-hover:rotate-[-45deg] shadow-[0_0_20px_rgba(255,92,0,0.3)]">
                        <Cpu className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-2xl font-bold uppercase tracking-[-0.05em] font-syncopate hover:italic transition-all">ViCode.</span>
                </div>

                <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">
                    {["Canvas", "Nodes", "Flows", "Logs"].map((tab) => (
                        <a key={tab} href="#" className="relative group overflow-visible py-1 hover:text-[#FF5C00] transition-colors">
                            {tab}
                            <div className="absolute top-full left-0 w-0 h-[2px] bg-[#FF5C00] group-hover:w-full transition-all" />
                        </a>
                    ))}
                </div>

                <button className="h-11 px-9 bg-[#FF5C00] text-black font-black uppercase text-[10px] tracking-[0.2em] transform hover:skew-x-[-12deg] transition-transform shadow-[4px_4px_0px_white]">
                    BUILD_CORE
                </button>
            </nav>

            {/* --- KINETIC HERO: ELECTRIC ORANGE (SINGLE SCREEN) --- */}
            <section className="min-h-[75vh] flex flex-col items-center justify-center relative z-10 bg-[#0a0a0a] p-10 overflow-visible">

                {/* BACKGROUND MARQUEES (SPACED FURTHER APART) */}
                <div className="absolute top-[8%] w-full opacity-[0.05] pointer-events-none select-none z-0">
                    <div className="marquee-container animate-marquee-l font-syncopate text-[5rem] lg:text-[7.5rem] font-black uppercase leading-none overflow-visible">
                        GRID_LOGIC_KINETIC_ARCHITECTURE_SYSTEMS_
                    </div>
                </div>
                <div className="absolute bottom-[8%] w-full opacity-[0.05] pointer-events-none select-none z-0">
                    <div className="marquee-container animate-marquee-r font-syncopate text-[5rem] lg:text-[7.5rem] font-black uppercase leading-none overflow-visible">
                        CORE_INFINITE_SCALING_NODES_DATAPOINTS_
                    </div>
                </div>

                <div className="max-w-5xl w-full flex flex-col items-center justify-center gap-10 relative z-20 overflow-visible py-10">
                    <div className="text-[10px] font-black uppercase tracking-[0.7em] text-[#FF5C00] bg-[#FF5C00]/10 px-6 py-2 border border-[#FF5C00]/20 rounded-none transform skew-x-[-10deg]">
                        STABILITY_LOGIC_048
                    </div>

                    <h1 className="flex flex-col items-center justify-center font-syncopate text-center group cursor-default overflow-visible pb-4">
                        <span className="text-6xl lg:text-[6.5rem] font-black leading-tight uppercase tracking-[-0.05em] transition-all duration-700 hover:tracking-[0.15em] hover:text-[#FFC700] hover:skew-x-[-5deg]">
                            Build.
                        </span>
                        <div className="h-[2px] w-full bg-[#FF5C00]/20 my-6 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF5C00] to-transparent animate-[marquee-l_1.5s_linear_infinite]" />
                        </div>
                        <span className="text-6xl lg:text-[6.5rem] font-black leading-tight uppercase tracking-[-0.05em] transition-all duration-700 hover:scale-[1.05] hover:italic hover:text-[#FF5C00]">
                            Ship_Fast.
                        </span>
                    </h1>

                    <div className="max-w-md text-[14px] font-bold text-white/40 leading-relaxed uppercase tracking-[0.2em] text-center border-l-4 border-[#FF5C00] pl-8 mt-6">
                        Kinetic infrastructure rhythm. <br /> Experience real-time deployments.
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center pt-10 w-full max-w-lg">
                        <button className="flex-1 h-16 bg-[#FF5C00] text-black font-black uppercase tracking-[0.3em] text-[12px] hover:translate-x-2 hover:-translate-y-2 transition-all flex items-center justify-center gap-6 group shadow-[-8px_8px_0px_white]">
                            INITIALIZE <ArrowRight className="w-7 h-7 group-hover:rotate-45 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* --- KINETIC MARQUEE WALL (REFINED COLORS) --- */}
            <div className="py-16 border-y border-white/5 flex flex-col items-center bg-black shrink-0 overflow-hidden">
                <div className="w-full marquee-container animate-marquee-l">
                    <div className="flex gap-20 items-center px-12">
                        {["STABILITY", "SCALABILITY", "INTELLIGENCE", "PERFORMANCE", "SECURITY"].map((w) => (
                            <div key={w} className="flex items-center gap-10 group cursor-default">
                                <div className="w-3 h-3 bg-[#FF5C00] rotate-45" />
                                <span className="text-5xl font-black italic uppercase tracking-tighter opacity-15 group-hover:opacity-100 group-hover:text-[#FF5C00] transition-all font-syncopate">{w}</span>
                            </div>
                        ))}
                        {["STABILITY", "SCALABILITY", "INTELLIGENCE", "PERFORMANCE", "SECURITY"].map((w) => (
                            <div key={w} className="flex items-center gap-10 group cursor-default">
                                <div className="w-3 h-3 bg-[#FFC700] rotate-45" />
                                <span className="text-5xl font-black italic uppercase tracking-tighter opacity-15 group-hover:opacity-100 group-hover:text-[#FFC700] transition-all font-syncopate">{w}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- FEATURES (NO CLIPPING) --- */}
            <section className="space-y-40 px-10 lg:px-20 py-40 shrink-0 relative z-10 bg-[#0a0a0a] overflow-visible">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    {[
                        { t: "Logic.Go", d: "Fluid movement of data across multiple nodes with zero friction.", i: Workflow },
                        { t: "Node.Max", d: "Watch infrastructure expand dynamically as traffic spikes.", i: Layers },
                        { t: "Safe.Stack", d: "Structural hardening for the core mission. Built for extremes.", i: ShieldCheck },
                        { t: "Grid.Core", d: "A command interface stripped of every unnecessary variable.", i: Command }
                    ].map((item, i) => (
                        <div key={i} className="group relative border-b border-white/5 pb-20 cursor-pointer overflow-visible transition-all hover:border-[#FF5C00]">
                            <div className="flex justify-between items-start overflow-visible">
                                <div className="space-y-8 overflow-visible">
                                    <div className="w-12 h-1 bg-[#FF5C00] group-hover:w-full transition-all duration-700" />
                                    <h4 className="text-6xl font-black uppercase italic tracking-tighter font-syncopate transition-all duration-500 group-hover:tracking-widest group-hover:text-[#FF5C00] whitespace-nowrap">
                                        {item.t}
                                    </h4>
                                    <p className="max-w-xs text-[12px] font-bold text-white/30 uppercase tracking-[0.2em] leading-loose group-hover:text-white transition-colors">
                                        {item.d}
                                    </p>
                                </div>
                                <div className="text-7xl font-black text-white/5 font-syncopate transition-all group-hover:text-[#FF5C00]/10 group-hover:rotate-[-90deg] translate-y-10">
                                    0{i + 1}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- PRICING: TYPOGRAPHY AS VALUE (ORANGE) --- */}
            <section className="bg-[#FF5C00] text-black px-12 py-40 flex flex-col lg:flex-row items-center justify-between gap-24 relative overflow-hidden shrink-0">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 font-syncopate text-[12rem] font-black opacity-[0.06] select-none leading-none z-0 italic">$$$</div>

                <div className="max-w-3xl space-y-12 relative z-10 overflow-visible">
                    <div className="text-[12px] font-black text-black uppercase tracking-[0.8em] bg-white inline-block px-4 py-1">VALUE_MODEL</div>
                    <h2 className="text-7xl lg:text-[8rem] font-black italic tracking-tighter leading-[0.85] uppercase font-syncopate drop-shadow-[5px_5px_0px_white]">
                        <span>ONE_PLAN.</span>
                        <br />
                        <span className="text-black/50">FULL_CORE.</span>
                    </h2>
                </div>

                <div className="w-full lg:w-[480px] bg-black text-white p-14 flex flex-col justify-between items-center relative transition-all duration-700 cursor-pointer group/price hover:shadow-[-20px_20px_0px_white] border-2 border-transparent hover:border-[#FFC700]">
                    <div className="text-center space-y-6">
                        <h3 className="text-2xl font-black uppercase tracking-widest italic font-syncopate opacity-100 text-[#FFC700]">KERNEL_ACCESS</h3>
                        <div className="text-[8rem] font-black italic leading-none tracking-tighter text-[#FF5C00] font-syncopate">$99</div>
                        <div className="text-[11px] font-black uppercase tracking-[0.5em] opacity-40">PER_STACK_V2</div>
                    </div>

                    <div className="w-full space-y-4 py-12">
                        {["MAX_NODES_LIVE", "PRIORITY_RHYTHM", "NODE_INSIGHT_V3"].map(f => (
                            <div key={f} className="flex items-center gap-6 group cursor-default">
                                <div className="w-5 h-[2px] bg-[#FF5C00] group-hover:w-full transition-all duration-500" />
                                <span className="text-[12px] font-black uppercase tracking-tighter italic opacity-60 group-hover:opacity-100 whitespace-nowrap">{f}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full h-20 bg-white text-black font-black uppercase tracking-[0.5em] text-[14px] hover:bg-[#FFC700] hover:text-black transition-all flex items-center justify-center gap-8">
                        DEPLOY_OS <ArrowUpRight className="w-8 h-8" />
                    </button>
                </div>
            </section>

            {/* --- FOOTER: KINETIC ORANGE --- */}
            <footer className="py-32 bg-[#050505] text-white flex flex-col items-center gap-20 shrink-0 relative overflow-visible border-t border-[#FF5C00]/10">
                <div className="w-full marquee-container animate-marquee-r opacity-[0.05]">
                    <div className="flex gap-24 items-center font-syncopate text-7xl font-black opacity-40 italic">
                        <span>VICODE_CORE</span><span>VICODE_CORE</span><span>VICODE_CORE</span><span>VICODE_CORE</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-20 gap-16 relative z-10 font-black">
                    <div className="flex items-center gap-8 overflow-visible">
                        <div className="w-16 h-16 bg-[#FF5C00] flex items-center justify-center hover:scale-125 transition-transform shadow-[0_0_30px_rgba(255,92,0,0.2)]">
                            <Cpu className="w-9 h-9 text-black" />
                        </div>
                        <div className="text-left font-syncopate overflow-visible">
                            <h4 className="text-5xl font-black tracking-tighter uppercase italic leading-none">ViCode.</h4>
                            <p className="text-[10px] font-black text-[#FF5C00] uppercase tracking-[0.8em] mt-3">STABILITY_OVER_NOISE</p>
                        </div>
                    </div>
                </div>
                <div className="text-[14px] font-black text-white/5 tracking-[3em] uppercase italic text-center px-4 w-full select-none pointer-events-none">
                    KINETIC_CORE_ARCHITECTURE_OS_V48
                </div>
            </footer>
        </div>
    );
};
