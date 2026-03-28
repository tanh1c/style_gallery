import { cn } from "@/lib/utils";
import {
Activity,
ArrowUpRight,
BrainCircuit,
CheckCircle2,
Command,
Cpu,
Github,
Globe,
Layers,
ShieldCheck,
Sparkles,
Wand2,
Waves
} from "lucide-react";
import React from "react";

export const AINativeUIDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500 selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col p-6 space-y-16 pt-8 group">

            {/* --- NEURAL MESH BACKGROUND --- */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/30 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-violet-600/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* --- AI NAV: ADAPTIVE PILL BAR --- */}
            <nav className="flex items-center justify-between px-8 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] sticky top-6 z-50 mx-4">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-violet-500/10 opacity-50" />
                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] group-hover:rotate-[360deg] transition-transform duration-1000">
                        <BrainCircuit className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xl tracking-tighter uppercase italic text-white drop-shadow-glow">ViCode_AI</span>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 relative z-10">
                    {["Neural_Net", "Synthesis", "Ambient", "Core"].map((tab) => (
                        <a key={tab} href="#" className="hover:text-white transition-all hover:tracking-[0.3em]">
                            {tab}
                        </a>
                    ))}
                </div>

                <button className="relative h-12 px-8 bg-white/10 border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] rounded-2xl shadow-xl hover:bg-white hover:text-black transition-all active:scale-95 group overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                        Summon_Intelligence <Wand2 className="w-4 h-4 group-hover:rotate-12" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                </button>
            </nav>

            {/* --- AI HERO: AMBIENT INTELLIGENCE (FIT VIEWPORT) --- */}
            <section className="min-h-[85vh] flex flex-col items-center justify-center text-center gap-10 relative z-10 shrink-0">
                <div className="max-w-4xl space-y-8">
                    <div className="inline-flex items-center gap-3 px-6 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-[11px] font-bold uppercase tracking-widest text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.15)] animate-pulse">
                        <Sparkles className="w-4 h-4" /> GENERATIVE_SYSTEM_STATUS: SENTIENT
                    </div>

                    <h1 className="text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.85] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 drop-shadow-2xl">
                        Intelligent. <br /> By_Design.
                    </h1>

                    <p className="text-xl font-medium text-slate-400 max-w-2xl mx-auto leading-relaxed uppercase tracking-tight">
                        ViCode AI is the world’s first generative SaaS engine. It doesn’t just run your code—it <span className="text-indigo-400 italic">anticipates</span> your infrastructure's evolution.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                        <button className="h-20 px-16 bg-gradient-to-r from-indigo-600 to-violet-700 text-white font-black uppercase tracking-[0.2em] text-[13px] rounded-3xl shadow-[0_20px_80px_rgba(99,102,241,0.4)] hover:shadow-[0_20px_100px_rgba(99,102,241,0.7)] hover:-translate-y-2 active:scale-95 transition-all flex items-center justify-center gap-6 group">
                            INITIATE_SYNTHESIS <ArrowUpRight className="w-7 h-7 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </button>
                        <button className="h-20 px-16 bg-white/5 backdrop-blur-3xl border-2 border-white/10 text-white font-black uppercase tracking-[0.2em] text-[13px] rounded-3xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-6">
                            NEURAL_SPECS <Cpu className="w-7 h-7" />
                        </button>
                    </div>
                </div>

                {/* AI AMBIENT MOCKUP */}
                <div className="relative w-full max-w-5xl aspect-[16/7] rounded-[48px] p-1 bg-gradient-to-br from-indigo-500/30 via-transparent to-violet-500/30 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden">
                    <div className="w-full h-full bg-slate-900/80 backdrop-blur-2xl rounded-[46px] overflow-hidden relative border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
                            alt="Neural Network AI"
                            className="w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-[10s] group-hover:scale-110"
                        />
                        {/* AMBIENT INTELLIGENCE WIDGETS */}
                        <div className="absolute inset-0 flex items-center justify-center gap-20">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: `${i}s` }} />
                            ))}
                        </div>
                        <div className="absolute bottom-10 inset-x-10 flex justify-between items-end backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/10">
                            <div className="space-y-2">
                                <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">REALTIME_THOUGHT_FLOW</div>
                                <Waves className="w-24 h-8 text-indigo-500/40 animate-pulse" />
                            </div>
                            <div className="text-right space-y-2">
                                <div className="text-3xl font-black italic tracking-tighter">99.98%</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">INFERENCE_ACCURACY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- AI PARTNERS: SLEEK GHOST GRID --- */}
            <div className="py-24 border-y border-white/5 flex flex-col items-center gap-12 shrink-0">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.8em]">CALIBRATED_WITH_GLOBAL_MAINFRAMES</span>
                <div className="flex flex-wrap justify-center gap-20 lg:gap-40 items-center opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 contrast-200">
                    <Github className="w-10 h-10" />
                    <Layers className="w-10 h-10" />
                    <Globe className="w-10 h-10" />
                    <ShieldCheck className="w-10 h-10" />
                    <Command className="w-10 h-10" />
                </div>
            </div>

            {/* --- INTELLIGENT FEATURES: GENERATIVE TILES --- */}
            <section className="space-y-20 px-2 shrink-0 pb-12">
                <div className="text-center max-w-2xl mx-auto space-y-6">
                    <h2 className="text-5xl font-black tracking-tight text-white uppercase italic drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]">Neural_Infrastructure.</h2>
                    <p className="text-indigo-400 font-bold uppercase tracking-widest text-[11px]">Next_Generation_Generative_SaaS</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { t: "Knowledge_Cores", d: "A semantic layer for your infrastructure. Logic that learns from every transaction.", i: BrainCircuit, c: "from-indigo-600/20 to-transparent" },
                        { t: "Adaptive_Synthesis", d: "Real-time resource reallocation based on predictive user behavior across nodes.", i: Activity, c: "from-cyan-600/20 to-transparent" },
                        { t: "Neural_Encryption", d: "Self-healing security protocols that mutate faster than any incoming threat.", i: ShieldCheck, c: "from-violet-600/20 to-transparent" }
                    ].map((item, i) => (
                        <div key={i} className={cn(
                            "relative group p-12 bg-white/5 border border-white/10 rounded-[48px] backdrop-blur-3xl overflow-hidden transition-all hover:-translate-y-4 hover:border-indigo-500/50 flex flex-col items-start gap-10",
                            "shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                        )}>
                            <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-20 transition-opacity" style={{ backgroundImage: `linear-gradient(to bottom right, ${i === 0 ? '#6366f1' : i === 1 ? '#06b6d4' : '#8b5cf6'}, transparent)` }} />

                            <div className={cn(
                                "w-20 h-20 rounded-[28px] flex items-center justify-center shadow-2xl transition-all duration-700",
                                i === 0 ? "bg-indigo-600 text-white shadow-indigo-500/20" :
                                    i === 1 ? "bg-cyan-600 text-white shadow-cyan-500/20" :
                                        "bg-violet-600 text-white shadow-violet-500/20"
                            )}>
                                <item.i className="w-10 h-10 group-hover:scale-125 transition-transform" />
                            </div>

                            <div className="space-y-4 relative z-10">
                                <h4 className="text-3xl font-black tracking-tighter text-white uppercase italic">{item.t}</h4>
                                <p className="text-sm font-bold text-slate-500 leading-relaxed uppercase tracking-tight">
                                    {item.d}
                                </p>
                            </div>

                            <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-indigo-400 transition-all hover:gap-6 mt-auto">
                                SUMMON_SPECS <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- ADAPTIVE PRICING: COSMIC CARDS --- */}
            <section className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617] border border-white/10 rounded-[64px] p-12 lg:p-24 text-white mx-2 relative overflow-hidden shadow-2xl shrink-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)]" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div className="space-y-10">
                        <div className="text-[10px] text-indigo-400 font-bold tracking-widest animate-bounce">PRICING_ENGINE_CALIBRATED</div>
                        <h2 className="text-6xl lg:text-7xl font-black italic tracking-tighter leading-none uppercase">Generative. <br /> Scalability.</h2>
                        <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-lg">
                            We don’t believe in static plans. Our AI computes your cost based on real-time neural inference and usage intensity.
                        </p>
                        <div className="flex gap-16">
                            <div className="space-y-2">
                                <div className="text-5xl font-black text-indigo-400 tracking-tighter italic">$0.00</div>
                                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Entry_Neural_Weight</div>
                            </div>
                            <div className="space-y-2 border-l border-white/10 pl-16">
                                <div className="text-5xl font-black text-violet-400 tracking-tighter italic">Inf</div>
                                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Core_Throughput</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-black p-12 lg:p-16 rounded-[48px] space-y-12 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 opacity-50" />
                        <div className="space-y-8 relative z-10">
                            {[
                                "Inference-Based Resource Scaling",
                                "Self-Healing AI Security Vaults",
                                "Semantic Logic Interoperability",
                                "Generative Data Redundancy"
                            ].map(f => (
                                <div key={f} className="flex items-center gap-6 group/feature cursor-default">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 group-hover/feature:bg-indigo-600 group-hover/feature:text-white transition-all">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-black uppercase tracking-widest tracking-tight">{f}</span>
                                </div>
                            ))}
                        </div>
                        <button className="relative w-full h-20 bg-black text-white font-black uppercase tracking-[0.3em] text-[14px] rounded-3xl hover:bg-slate-800 transition-all flex items-center justify-center gap-8 group">
                            INITIATE_UPGRADE <ArrowUpRight className="w-10 h-10 text-indigo-500 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* --- NEURAL FOOTER: THE LOGOFF --- */}
            <footer className="py-24 border-t border-white/5 flex flex-col items-center gap-20 shrink-0 bg-black relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-12 gap-16 relative z-10 font-sans">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-700 text-white rounded-[24px] flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                            <BrainCircuit className="w-9 h-9" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-3xl font-black tracking-tighter uppercase italic text-white leading-none">ViCode_AI</h4>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">ARCHITECTED_INTELLIGENTLY_©2026</p>
                        </div>
                    </div>
                    <div className="flex gap-12 text-[11px] font-black uppercase tracking-widest text-slate-500">
                        <a href="#" className="hover:text-indigo-400 transition-colors">Neural_Docs</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Safety_Logs</a>
                        <a href="#" className="hover:text-violet-400 transition-colors">Synthesis_Hub</a>
                        <a href="#" className="hover:text-white transition-colors">Glossary</a>
                    </div>
                </div>
                <div className="text-[10px] font-black text-indigo-500/10 tracking-[2em] uppercase pointer-events-none select-none italic text-center px-4">
                    THOUGHT_ENGINE_STABLE // NO_DIVERGENCE_DETECTED // SYNCHRONIZING_GLOBAL_NEURAL_WEIGHTS
                </div>
            </footer>
        </div>
    );
};
