import {
Activity,
ArrowRight,
ArrowUpRight,
Database,
Lock,
Shield,
Target,
Zap
} from "lucide-react";
import React from "react";

export const MinimalDirectDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-white text-black font-sans selection:bg-black selection:text-white overflow-y-auto relative h-full flex flex-col scroll-smooth">

            {/* Header - Minimal & Direct */}
            <header className="absolute top-0 left-0 right-0 z-50 px-12 py-8 flex items-center justify-between border-b border-black/5">
                <div className="flex items-center gap-2 cursor-pointer font-black text-lg tracking-tighter">
                    <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
                        <Zap className="w-3 h-3 text-white" />
                    </div>
                    ViCode
                </div>

                <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">
                    <a href="#" className="hover:text-black transition-colors">Nodes</a>
                    <a href="#" className="hover:text-black transition-colors">Pricing</a>
                    <a href="#" className="hover:text-black transition-colors">Registry</a>
                </div>

                <button className="text-[10px] font-black uppercase tracking-[0.15em] border-2 border-black h-10 px-6 hover:bg-black hover:text-white transition-all">
                    Sync_Now
                </button>
            </header>

            {/* --- HERO: MASSIVE & DIRECT (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-[9px] font-bold uppercase tracking-widest">
                        <div className="w-1 h-1 bg-black rounded-full animate-pulse" />
                        Engineered_for_Scale
                    </div>

                    <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tighter text-black uppercase decoration-sky-500 underline decoration-8 underline-offset-[-10px] decoration-transparent hover:decoration-sky-500 transition-all cursor-default">
                        Universal<br />Infrastructure<br />Protocol.
                    </h1>

                    <p className="text-lg font-bold text-black/40 leading-relaxed uppercase tracking-widest max-w-xl mx-auto italic">
                        Distribute code to 10k+ nodes in 200ms. No config. No drift. No complex visual dashboards. Just the API.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-8 pt-6">
                        <button className="h-16 px-12 bg-black text-white font-black uppercase tracking-widest text-[11px] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                            Get_Registry_Access
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="h-16 px-12 border-2 border-black/10 text-black font-black uppercase tracking-widest text-[11px] hover:bg-black/5 transition-all">
                            View_Core_Specs
                        </button>
                    </div>

                    <div className="pt-12 text-[9px] font-black uppercase tracking-[0.6em] text-black/10 flex flex-wrap justify-center gap-12">
                        <span>TITAN</span>
                        <span>NEXUS</span>
                        <span>AURORA</span>
                        <span>VOID</span>
                    </div>
                </div>
            </section>

            {/* --- DIRECT VALUE STACK --- */}
            <section className="py-24 px-6 bg-black/[0.02]">
                <div className="max-w-2xl mx-auto space-y-32">
                    {[
                        { t: "Atomic Sync Engine", d: "Universal state synchronization at L6 network layer. Guaranteed consensus within 1.2ms globally. Zero infrastructure overhead.", i: Activity },
                        { t: "Sovereign State Compliance", d: "Enforce security standards at the node level. Automated policy replication across thousands of cluster segments.", i: Shield },
                        { t: "Native Registry Architecture", d: "A unified source of truth for every machine configuration. Scale horizontally without the fear of configuration drift.", i: Database }
                    ].map((v, i) => (
                        <div key={i} className="space-y-8 flex flex-col items-center text-center">
                            <div className="w-16 h-1 w-16 bg-black/5 rounded-full" />
                            <h2 className="text-4xl font-black tracking-tighter text-black uppercase italic">{v.t}</h2>
                            <p className="text-base font-bold text-black/30 leading-loose uppercase tracking-[0.1em]">{v.d}</p>
                            <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                                Read_Protocol_Doc
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- THE SPECS: TECHNICAL DENSITY --- */}
            <section className="py-24 px-6 border-y border-black/5">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                    {[
                        { l: "Propagation", v: "200ms" },
                        { l: "Uptime", v: "99.999%" },
                        { l: "Security", v: "Quantum" },
                        { l: "Latency", v: "1.4ms" }
                    ].map((spec, i) => (
                        <div key={i} className="text-center space-y-2">
                            <div className="text-xs font-black uppercase tracking-widest text-black/20">{spec.l}</div>
                            <div className="text-3xl font-black tracking-tighter italic text-black uppercase">{spec.v}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- PRICING: SINGLE COLUMN DIRECT --- */}
            <section className="py-32 px-6">
                <div className="max-w-xl mx-auto p-16 border-4 border-black text-center space-y-12">
                    <h2 className="text-5xl font-black tracking-tighter uppercase italic text-black">Mesh_Pricing.</h2>
                    <p className="text-[10px] font-bold text-black/30 uppercase tracking-[0.4em]">One protocol. One price. Infinite nodes.</p>

                    <div className="space-y-4">
                        <div className="text-7xl font-black tracking-tighter">$29<span className="text-2xl text-black/20">/mo</span></div>
                        <ul className="text-xs font-bold text-black/40 space-y-4 pt-6 border-t border-black/5 uppercase tracking-widest">
                            <li>Unlimited Managed Nodes</li>
                            <li>Full Registry Access</li>
                            <li>24/7 Protocol Support</li>
                            <li>Sovereign Compliance</li>
                        </ul>
                    </div>

                    <button className="w-full h-16 bg-black text-white font-black uppercase tracking-widest text-[11px] hover:scale-95 transition-all">
                        Synchronize_Plan
                    </button>

                    <div className="flex justify-center gap-4 opacity-10">
                        <Target className="w-5 h-5" />
                        <Target className="w-5 h-5" />
                        <Target className="w-5 h-5" />
                    </div>
                </div>
            </section>

            {/* --- MINIMAL FOOTER --- */}
            <footer className="py-24 px-12 border-t border-black/5 flex flex-col items-center gap-12">
                <div className="flex items-center gap-2 cursor-pointer font-black text-xl tracking-tighter">
                    <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                    </div>
                    ViCode
                </div>

                <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-black/20">
                    <a href="#" className="hover:text-black">API_REF</a>
                    <a href="#" className="hover:text-black">GOVERNANCE</a>
                    <a href="#" className="hover:text-black">SECURITY</a>
                    <a href="#" className="hover:text-black">LOGS</a>
                </div>

                <div className="flex flex-col items-center gap-4 text-[9px] font-bold uppercase tracking-[0.6em] text-black/10 text-center italic">
                    <span>© 2026 ViCode Universal Infrastructure Protocol. Sovereign_Compliance_Verified.</span>
                    <div className="flex items-center gap-2">
                        <Lock className="w-3 h-3" />
                        <span>EN крип 001_v3</span>
                    </div>
                </div>
            </footer>

            <style>{`
                ::selection { background: #000; color: #fff; }
            `}</style>
        </div>
    );
};
