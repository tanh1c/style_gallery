import {
Activity,
ArrowRight,
BarChart2,
CheckCircle2,
Lock,
MessageSquare,
MousePointer2,
PlayCircle,
ShieldCheck,
Star,
TrendingUp,
Users,
Zap
} from "lucide-react";
import React from "react";

export const HeroCentricDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#0A0A0B] text-white font-sans selection:bg-indigo-500/30 selection:text-white overflow-y-auto relative h-full flex flex-col scroll-smooth">

            {/* Header - Scaled Down */}
            <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-8">
                <div className="flex items-center gap-2.5 cursor-pointer group">
                    <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                        <Zap className="w-4.5 h-4.5 text-white" />
                    </div>
                    <span className="font-black text-xl tracking-tighter uppercase italic text-white/90">ViCode</span>
                </div>

                <nav className="hidden lg:flex items-center gap-10 text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                    {["Discovery", "Nodes", "Pulse", "Governance"].map(item => (
                        <a key={item} href="#" className="hover:text-indigo-400 transition-colors uppercase">
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                    <button className="text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">Portal_Login</button>
                    <button className="h-11 px-7 rounded-xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[9px] shadow-[0_10px_20px_-5px_rgba(99,102,241,0.4)] hover:scale-105 active:scale-95 transition-all">
                        Sync_Node
                    </button>
                </div>
            </header>

            {/* --- HERO SECTION: REFINED SCALE --- */}
            <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-16 px-12 overflow-hidden bg-[#0A0A0B]">
                {/* Immersive background glow */}
                <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-[0.15] pointer-events-none" />

                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-10 animate-in slide-in-from-left duration-1000">
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-500/20 backdrop-blur-md">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-300">Synchronized_v4.2</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-white drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                            Master of<br />
                            <span className="text-emerald-400 italic font-medium">Dark_Ops.</span>
                        </h1>

                        <p className="text-xl font-bold text-white/40 leading-snug max-w-md">
                            Distributed SaaS bedrock. Clinical management at massive cluster scale. Total sovereign state standards.
                        </p>

                        <div className="flex flex-wrap gap-6 items-center">
                            <button className="h-16 px-12 rounded-[22px] bg-indigo-600 text-white font-black uppercase tracking-widest flex items-center gap-4 text-[12px] shadow-[0_20px_40px_-10px_rgba(99,102,241,0.5)] hover:scale-105 active:scale-95 transition-all group">
                                Deploy_Gateway
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </button>
                            <button className="h-16 px-12 rounded-[22px] bg-white/5 border border-white/10 flex items-center gap-4 text-[12px] font-black uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/10 transition-all">
                                <PlayCircle className="w-5 h-5" />
                                Interactive
                            </button>
                        </div>

                        <div className="flex items-center gap-12 pt-12 border-t border-white/5">
                            <div className="flex items-center gap-3">
                                <Users className="w-5 h-5 text-indigo-400/40" />
                                <div className="flex flex-col">
                                    <span className="text-xl font-black italic tracking-tighter text-white">42,000+</span>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">Active_Nodes</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <TrendingUp className="w-5 h-5 text-emerald-400/40" />
                                <div className="flex flex-col">
                                    <span className="text-xl font-black italic tracking-tighter text-white">1.4ms</span>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">Pulse</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-in zoom-in-95 duration-1000">
                        <div className="relative rounded-[56px] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7)] bg-zinc-900 border-[8px] border-white/5 group">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                                alt="ViCode Cyber Dashboard"
                                className="w-full h-[500px] object-cover transition-transform duration-[3s] group-hover:scale-105 brightness-[0.8] group-hover:brightness-100"
                            />
                            <div className="absolute inset-0 bg-indigo-600/5 mix-blend-overlay" />

                            <div className="absolute top-12 -left-8 p-6 rounded-[28px] bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl space-y-3 animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <Activity className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Compute</span>
                                </div>
                                <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full w-4/5 bg-emerald-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TRUST BAR - TIGHTENED --- */}
            <div className="py-16 bg-white/[0.01] border-y border-white/5">
                <div className="max-w-6xl mx-auto px-12 space-y-12">
                    <p className="text-center text-[9px] font-black uppercase tracking-[0.8em] text-white/10">Synchronized_with_Global_Network</p>
                    <div className="flex flex-wrap justify-between items-center gap-12 opacity-15 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                        {["TITAN", "NEXUS", "KRAKEN", "VOID"].map(name => (
                            <div key={name} className="text-2xl font-black tracking-tighter italic text-white">{name}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- CORE CAPABILITIES - TIGHTER --- */}
            <section className="py-24 px-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24">
                    <div className="col-span-1 space-y-10">
                        <div className="h-0.5 w-16 bg-emerald-500 rounded-full" />
                        <h2 className="text-5xl font-black tracking-tighter leading-none text-white">Engineered<br /><span className="text-indigo-500 italic">to_Drill.</span></h2>
                        <p className="text-lg font-bold text-white/20 leading-relaxed max-w-xs">Infrastructure drift is the past. ViCode enforces sovereign state standards at the machine level.</p>
                        <ul className="space-y-6">
                            {["Atomic_Consistency", "Deep_Packet_V3", "Neural_Mesh"].map((item, i) => (
                                <li key={i} className="flex items-center gap-5 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all">
                                    <div className="w-10 h-10 border border-white/5 rounded-xl flex items-center justify-center group-hover:border-emerald-500/30">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { i: BarChart2, t: "Telemetry", d: "Observe sub-atomic transitions.", c: "text-indigo-400" },
                            { i: Lock, t: "Hardened", d: "Native kernel-level encryption protocol.", c: "text-emerald-400" },
                            { i: MousePointer2, t: "Control", d: "Manage planetary-scale clusters via 3D HUB.", c: "text-rose-400" },
                            { i: MessageSquare, t: "Logic", d: "Boards adapt to traffic pulses automatically.", c: "text-amber-400" }
                        ].map((card, i) => (
                            <div key={i} className="p-10 rounded-[48px] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:shadow-2xl hover:translate-y-[-8px] transition-all space-y-6 group">
                                <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform`}>
                                    <card.i className={`w-8 h-8 ${card.c}`} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-black text-white">{card.t}</h3>
                                    <p className="text-sm font-bold text-white/20 leading-relaxed">{card.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA: REFINED --- */}
            <section className="py-24 px-12">
                <div className="max-w-6xl mx-auto rounded-[80px] bg-gradient-to-br from-[#0c0c0d] to-zinc-950 p-24 text-center space-y-10 relative overflow-hidden shadow-2xl border border-white/5">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white">
                        Initialize_Sync?
                    </h2>
                    <p className="text-xl font-bold text-white/40 uppercase tracking-[0.4em]">
                        The future is distributed. Join the mesh.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-8 pt-6">
                        <button className="h-16 px-14 rounded-2xl bg-white text-black font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all text-[12px]">
                            Upgrade_To_Mesh_Pro
                        </button>
                    </div>

                    <div className="flex justify-center gap-12 pt-12 grayscale opacity-10">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-6 h-6 fill-emerald-400" />)}
                    </div>
                </div>
            </section>

            {/* --- FOOTER: COMPACT --- */}
            <footer className="pt-32 pb-16 px-16 border-t border-white/5 bg-black">
                <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-16">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-indigo-500" />
                            <span className="font-black text-2xl tracking-tighter uppercase italic text-white">ViCode</span>
                        </div>
                        <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] max-w-xs leading-loose">
                            Global Infrastructure Standards. Atomic Scale. Sovereign Policy. Total Observation.
                        </p>
                    </div>

                    {[
                        { t: "Protocols", l: ["Mesh_V2", "Sovereign", "Atomic"] },
                        { t: "Governance", l: ["Policy", "Security", "Standards"] },
                        { t: "Pulse", l: ["Global", "Nodes", "Network"] },
                        { t: "Identity", l: ["Access", "Vault", "Keys"] }
                    ].map((col, i) => (
                        <div key={i} className="space-y-8">
                            <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">{col.t}</h5>
                            <ul className="space-y-4">
                                {col.l.map((link, li) => (
                                    <li key={li}>
                                        <a href="#" className="text-[10px] font-bold text-white/20 hover:text-indigo-400 transition-colors uppercase tracking-[0.1em]">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto pt-24 border-t border-white/5 mt-16 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.5em] text-white/10 italic">
                    <span>© 2026 ViCode Universal Mesh Protocol.</span>
                    <div className="flex items-center gap-4 text-indigo-400/20">
                        <span>SECURE_QUANTUM_SYNC</span>
                        <ShieldCheck className="w-3 h-3 text-emerald-500/30" />
                    </div>
                </div>
            </footer>

            <style>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};
