import { cn } from "@/lib/utils";
import {
ArrowUpRight,
Box,
CheckCircle2,
Cpu,
Eye,
Layers,
Maximize2,
Workflow,
Zap
} from "lucide-react";
import React from "react";

export const DimensionalLayeringDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#0a0412] text-slate-100 font-sans selection:bg-pink-500 selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col p-6 space-y-20 group perspective-[3000px]">

            {/* --- PERFORMANCE OPTIMIZED STYLES --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float-layer {
                    0%, 100% { transform: translateY(0px) rotateX(25deg) rotateY(-20deg); }
                    50% { transform: translateY(-15px) rotateX(25deg) rotateY(-20deg); }
                }
                .optimize-layer {
                    will-change: transform;
                    backface-visibility: hidden;
                    transform-style: preserve-3d;
                }
                .layer-shadow-optimized {
                    box-shadow: 20px 20px 40px rgba(0,0,0,0.6);
                }
            `}} />

            {/* --- DIMENSIONAL BACKGROUND (SIMPLIFIED) --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[50rem] h-[50rem] bg-indigo-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] bg-pink-600/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-20" />
            </div>

            {/* --- NAV: LIGHT GLASS --- */}
            <nav className="flex items-center justify-between px-8 py-5 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl sticky top-4 z-50 mx-2 transition-all rounded-2xl ring-1 ring-white/10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-indigo-600 flex items-center justify-center rounded-xl shadow-lg hover:scale-105 transition-transform">
                        <Box className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <span className="text-2xl font-black tracking-tighter text-white block">ViCode_D3</span>
                        <span className="text-[8px] font-bold text-pink-400 uppercase tracking-widest leading-none">Vibrant_Depth_Stack_OS</span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {["Canvas", "Stack", "Matrix", "Layers"].map((tab) => (
                        <a key={tab} href="#" className="hover:text-pink-400 transition-colors relative group py-2 font-black">
                            {tab}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <button className="h-12 px-8 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-all">
                    START_STACKING
                </button>
            </nav>

            {/* --- HERO: OPTIMIZED STACK VISUALS --- */}
            <section className="min-h-[70vh] flex flex-col lg:flex-row items-center gap-2 relative z-10 shrink-0 mt-[-20px]">
                <div className="flex-1 space-y-6 text-center lg:text-left relative z-10">
                    <div className="inline-flex items-center gap-4 px-5 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-[11px] font-bold uppercase tracking-widest">
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping" /> STACK_ENGINE: OPTIMIZED
                    </div>

                    <h1 className="text-7xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.85] text-white italic">
                        Deeper. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Layered.</span> <br />
                        SaaS.
                    </h1>

                    <p className="text-lg font-bold text-slate-300 max-w-lg leading-relaxed bg-black/40 p-6 rounded-2xl border-l-8 border-pink-500 shadow-2xl skew-x-[-3deg]">
                        True Dimensional Layering, now with buttery-smooth performance. Architect infrastructure with volumetric precision.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
                        <button className="h-16 px-14 bg-pink-500 text-white font-black uppercase tracking-[0.2em] text-[12px] rounded-xl shadow-lg hover:shadow-pink-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-4 ring-2 ring-pink-500/20">
                            INITIATE_CORE_GRID <ArrowUpRight className="w-6 h-6" />
                        </button>
                        <button className="h-16 px-14 bg-white/5 text-white font-bold uppercase tracking-[0.2em] text-[12px] rounded-xl border border-white/20 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4">
                            DOCS_V3 <Layers className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* THE AGGRESSIVE STACK (OPTIMIZED) */}
                <div className="flex-1 relative shrink-0 w-full perspective-[2000px] h-[550px] flex items-center justify-center scale-105 overflow-visible">

                    {/* BASE LAYER (SOLID OVER BLUR) */}
                    <div className="absolute w-[85%] h-[60%] bg-[#1a0b36]/60 border border-white/10 rounded-[2.5rem] transform translate-z-[-100px] rotate-x-[25deg] rotate-y-[-20deg] shadow-2xl optimize-layer" />

                    {/* CORE LAYER (REDUCED BLUR) */}
                    <div className="absolute w-[90%] h-[65%] bg-[#0e041d] border-2 border-white/15 rounded-[3rem] transform translate-z-[20px] rotate-x-[25deg] rotate-y-[-20deg] layer-shadow-optimized flex items-center justify-center group/card animate-[float-layer_12s_infinite] optimize-layer">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.1),transparent)]" />
                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <div className="p-10 bg-black/40 rounded-[3rem] border border-white/10 group-hover:scale-105 transition-transform duration-500 shadow-inner">
                                <Cpu className="w-24 h-24 text-pink-500 drop-shadow-[0_0_20px_#ec4899]" />
                            </div>
                            <h3 className="text-4xl font-black italic text-white tracking-tighter">VI-LAYER-OS</h3>
                        </div>
                    </div>

                    {/* OVERLAY MODULE (OPTIMIZED) */}
                    <div className="absolute top-0 right-[-5%] w-56 h-56 bg-[#1a0b36] border-2 border-white/20 rounded-3xl p-8 transform translate-z-[120px] rotate-x-[25deg] rotate-y-[-20deg] shadow-2xl flex flex-col justify-between animate-[float-layer_8s_infinite] delay-500 optimize-layer">
                        <div className="h-1.5 w-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full shadow-[0_0_10px_#ec4899]" />
                        <div className="space-y-1">
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">METRIC_LOAD</div>
                            <div className="text-5xl font-black text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">98<span className="text-pink-500 text-3xl">%</span></div>
                        </div>
                    </div>

                    {/* SPEED BUMP (OPTIMIZED) */}
                    <div className="absolute bottom-5 left-[-5%] w-52 h-36 bg-blue-600 border-2 border-white/20 rounded-[2rem] p-8 transform translate-z-[180px] rotate-x-[25deg] rotate-y-[-20deg] shadow-2xl flex flex-col items-center justify-center animate-[float-layer_16s_infinite] optimize-layer">
                        <Zap className="w-10 h-10 text-white drop-shadow-md fill-current" />
                        <div className="mt-4 text-[11px] font-black text-white uppercase tracking-widest">V_SYNC_CORE</div>
                    </div>
                </div>
            </section>

            {/* --- FEATURES (OPTIMIZED SHADOWS) --- */}
            <section className="space-y-16 px-2 shrink-0 pb-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase italic">Anatomy_Of_The_Stack.</h2>
                    <p className="text-pink-400 font-black uppercase tracking-widest text-[11px]">OPTIMIZED_STRUCTURAL_DEPTH</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { t: "Deep_Persistence", d: "SaaS layout with physical properties and stacked logic layers.", i: Workflow, c: "from-blue-600/10 to-blue-950/20 border-blue-500/20", a: "hover:-translate-y-4" },
                        { t: "Scaling_Logic", d: "Architecture with buttery-smooth 3D transforms and Z-axis flow.", i: Maximize2, c: "from-pink-600/10 to-pink-950/20 border-pink-500/20", a: "hover:-translate-y-2 translate-y-2" },
                        { t: "Optical_Guard", d: "Visualize complex cluster data as high-vibe physical manifestations.", i: Eye, c: "from-indigo-600/10 to-indigo-950/20 border-indigo-500/20", a: "hover:-translate-y-6" }
                    ].map((item, i) => (
                        <div key={i} className={cn(
                            "relative group p-12 bg-gradient-to-br border-t-2 border-white/5 transition-all duration-700 cursor-pointer flex flex-col items-start gap-10 shadow-2xl rounded-[2.5rem] optimize-layer",
                            item.c,
                            item.a
                        )}>
                            <div className="w-16 h-16 bg-white shadow-lg rounded-[1.2rem] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 scale-110">
                                <item.i className="w-8 h-8 text-black" />
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-3xl font-black text-white italic tracking-tighter">{item.t}</h4>
                                <p className="text-[13px] font-bold text-slate-400 leading-relaxed uppercase tracking-tight">
                                    {item.d}
                                </p>
                            </div>

                            <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-pink-400 group-hover:text-white transition-colors">
                                INSPECT_LAYER_OBJ <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- PRICING: REFINED REACTION --- */}
            <section className="bg-gradient-to-b from-[#1a0b36] to-[#0a0412] border-y border-white/10 p-12 lg:p-24 text-white mx-[-1.5rem] relative overflow-hidden shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div className="space-y-12">
                        <div className="text-[12px] bg-pink-500 text-white inline-block px-5 py-2 font-black tracking-widest uppercase">PRICING_ENGINE_V3</div>
                        <h2 className="text-7xl lg:text-[8rem] font-black italic tracking-tighter leading-[0.8] uppercase">Scale. <br /> Without. <br /> Lag.</h2>
                        <div className="flex gap-16 pt-10">
                            <div className="space-y-1">
                                <div className="text-7xl font-black text-pink-500 italic">$00</div>
                                <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Surface_User</div>
                            </div>
                            <div className="flex items-center gap-6 border-l-2 border-white/10 pl-16">
                                <div className="text-4xl font-black text-blue-400 italic">CORE_ACCESS</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#120721] border-2 border-white/15 p-12 lg:p-16 space-y-12 relative shadow-2xl rounded-[3rem] group/price transition-all optimize-layer">
                        <div className="space-y-8 text-slate-200">
                            {[
                                "Unlimited Dimensional Stacks",
                                "API_V2_Depth_Access",
                                "Structural_Node_Optic"
                            ].map(f => (
                                <div key={f} className="flex items-center gap-8 group/item cursor-default">
                                    <div className="w-12 h-12 bg-white flex items-center justify-center text-black rounded-2xl group-hover/item:bg-pink-500 group-hover/item:text-white transition-all scale-105">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <span className="text-2xl font-black italic uppercase tracking-tighter">{f}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full h-24 bg-pink-500 text-white font-black uppercase tracking-[0.5em] text-[18px] rounded-[1.5rem] shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-10 hover:shadow-pink-500/20">
                            ENTER_THE_STACK <ArrowUpRight className="w-10 h-10" />
                        </button>
                    </div>
                </div>
            </section>

            {/* --- FOOTER: OPTIMIZED --- */}
            <footer className="py-24 bg-[#050209] text-white flex flex-col items-center gap-16 shrink-0 relative overflow-hidden">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-20 gap-16 relative z-10 font-black">
                    <div className="flex items-center gap-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-indigo-600 flex items-center justify-center rounded-3xl shadow-lg rotate-12">
                            <Box className="w-12 h-12" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-5xl font-black tracking-tighter uppercase italic leading-none text-white shadow-pink-500/20">ViCode_D3</h4>
                            <p className="text-[10px] font-bold text-pink-400 uppercase tracking-widest mt-2 tracking-[0.8em]">STRUCTURAL_OS_©2026</p>
                        </div>
                    </div>
                    <div className="flex gap-12 text-[11px] font-black uppercase tracking-widest text-slate-600">
                        <a href="#" className="hover:text-white transition-colors">STRUCTURE</a>
                        <a href="#" className="hover:text-pink-400 transition-colors uppercase italic font-black">EXIT_STACK</a>
                    </div>
                </div>
                <div className="text-[14px] font-black text-white/5 tracking-[2em] uppercase italic text-center px-4">
                    BUILT_ON_DIMENSIONAL_LAYERING_STRUCTURES
                </div>
            </footer>
        </div>
    );
};
