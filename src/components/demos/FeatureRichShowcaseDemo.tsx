import { cn } from "@/lib/utils";
import React from "react";

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium", className)}>
        {children}
    </span>
);

import {
ArrowRight,
CloudLightning,
Database,
Layers,
PlayCircle,
RefreshCw,
ShieldCheck,
Star,
Terminal,
TrendingUp,
Workflow,
Zap
} from "lucide-react";

export const FeatureRichShowcaseDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-white text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-y-auto relative h-full flex flex-col scroll-smooth">

            {/* Nav - Clean Showcase style */}
            <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6">
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-200">
                        <Zap className="w-4.5 h-4.5 text-white" />
                    </div>
                    <span className="font-extrabold text-xl tracking-tighter text-slate-900">ViCode_Platform</span>
                </div>

                <nav className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {["Nodes", "Registry", "Telemetry", "Safety"].map(item => (
                        <a key={item} href="#" className="hover:text-indigo-600 transition-colors uppercase tracking-widest">
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                    <button className="h-10 px-6 rounded-full border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 transition-all">Sign_In</button>
                    <button className="h-10 px-7 rounded-full bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-lg shadow-indigo-100 hover:scale-105 active:scale-95 transition-all">
                        Sync_Node
                    </button>
                </div>
            </header>

            {/* --- HERO: VISUALLY BALANCED (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 px-12 bg-slate-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8 animate-in slide-in-from-left duration-1000">
                        <div className="w-12 h-1 bg-indigo-600 rounded-full" />
                        <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-[0.02em] text-slate-900 drop-shadow-sm">
                            The OS for<br />
                            <span className="text-indigo-600">Enterprise SaaS.</span>
                        </h1>

                        <p className="text-xl font-bold text-slate-400 leading-snug max-w-md italic">
                            Full-spectrum observability. One global mesh. Zero-friction operations. 12,400+ nodes under clinical management.
                        </p>

                        <div className="flex items-center gap-6 pt-4">
                            <button className="h-16 px-12 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[11px] shadow-xl shadow-indigo-200 hover:scale-[1.03] active:scale-95 transition-all">
                                Deploy_Node_V3
                            </button>
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
                                    <PlayCircle className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">Watch_Sync</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-in zoom-in-95 duration-1000">
                        <div className="relative rounded-[48px] overflow-hidden shadow-3xl bg-white border-4 border-white group p-2">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                                alt="Feature Showcase Vis"
                                className="w-full h-[480px] object-cover rounded-[40px] transition-transform duration-[3s] group-hover:scale-105"
                            />
                            {/* Floating Mini Feature Card */}
                            <div className="absolute bottom-8 -right-4 p-5 rounded-3xl bg-white shadow-2xl border border-slate-50 space-y-3 animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Scaling_Safe</span>
                                </div>
                                <div className="flex items-center gap-1 text-xl font-black italic tracking-tighter">
                                    <span className="text-slate-900">+42</span>
                                    <span className="text-emerald-500">Nodes/sec</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORE CAPABILITIES GRID --- */}
            <section className="py-24 px-12 bg-white">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-black tracking-tighter text-slate-900 uppercase italic">Multi_Node_Capabilities</h2>
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-300">Scalable_Features_For_Scalable_Mindsets</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { i: Layers, t: "Atomic Registry", d: "A unified source of truth for every node configuration.", c: "indigo" },
                            { i: Database, t: "Node Telemetry", d: "Sub-millisecond pulse tracking across global infra.", c: "cyan" },
                            { i: RefreshCw, t: "Self-Healing Mesh", d: "Auto-recovering nodes with zero manual intervention.", c: "emerald" },
                            { i: CloudLightning, t: "Edge Sync", d: "Distribute logic to the edge in under 200ms.", c: "rose" }
                        ].map((f, i) => (
                            <div key={i} className="p-8 rounded-[40px] bg-slate-50/50 border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-2xl transition-all space-y-6 group">
                                <div className={`w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-${f.c}-600 group-hover:scale-110 group-hover:text-indigo-600 transition-all`}>
                                    <f.i className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-black text-slate-900 tracking-tight">{f.t}</h4>
                                <p className="text-sm font-bold text-slate-400 leading-relaxed uppercase tracking-wider text-[10px]">{f.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FEATURE DEEP-DIVE: ALTERNATING --- */}
            <section className="py-24 space-y-48">
                {/* Feature 1 */}
                <div className="max-w-6xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-8">
                        <Badge className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border-none font-black text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-full">Governance_Console</Badge>
                        <h2 className="text-5xl font-black tracking-tighter leading-none text-slate-900 italic uppercase">Sovereign_Control.</h2>
                        <p className="text-lg font-bold text-slate-400 leading-relaxed">Infrastructure drift is the past. ViCode enforces sovereign state standards at the machine level, automatically syncing every policy pulse globally.</p>
                        <ul className="space-y-4">
                            {["Global Policy Locks", "Audit Pulse Logs", "Atomic Compliance"].map(l => (
                                <li key={l} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-900 border-b border-slate-50 pb-4 last:border-0 hover:translate-x-2 transition-transform cursor-pointer">
                                    <ArrowRight className="w-4 h-4 text-indigo-600" />
                                    {l}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-4 rounded-[48px] bg-slate-900 shadow-3xl overflow-hidden group">
                        <div className="bg-slate-800 rounded-[32px] p-6 space-y-4 font-mono text-[9px] text-white/40">
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="text-indigo-400">$ vicode deploy --target global --policy sovereign</span><br />
                                <span className="text-emerald-400">[NODE_32] SYNCED [1.2ms]</span><br />
                                <span className="text-emerald-400">[NODE_88] SYNCED [0.9ms]</span><br />
                                <span className="text-white">DEPLOYMENT_SUCCESS_CONSENSUS_REACHED</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature 2: Reversed */}
                <div className="max-w-6xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute inset-0 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none" />
                        <div className="relative p-12 rounded-[56px] border border-slate-100 bg-white shadow-2xl space-y-6">
                            <Workflow className="w-12 h-12 text-indigo-600" />
                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter italic">Clinical_Orchestrator</h3>
                            <div className="space-y-3">
                                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                                    <div className="h-full w-4/5 bg-indigo-600" />
                                </div>
                                <div className="h-2 w-2/3 bg-slate-50 rounded-full overflow-hidden">
                                    <div className="h-full w-1/2 bg-indigo-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <Badge className="bg-rose-50 text-rose-600 hover:bg-rose-100 border-none font-black text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-full">Registry_Pulse</Badge>
                        <h2 className="text-5xl font-black tracking-tighter leading-none text-slate-900 italic uppercase">Atomic_Sync.</h2>
                        <p className="text-lg font-bold text-slate-400 leading-relaxed">Total observation of every state change. No more ghost nodes. No more infrastructure drift. Just clinical engineering at scale.</p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
                                <span className="text-[9px] font-black uppercase text-slate-300">Propagation</span>
                                <span className="text-xl font-black text-indigo-600 italic">200ms</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl space-y-1">
                                <span className="text-[9px] font-black uppercase text-slate-300">Uptime_Pulse</span>
                                <span className="text-xl font-black text-emerald-600 italic">99.999%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PRICING & CTA --- */}
            <section className="py-24 px-12">
                <div className="max-w-6xl mx-auto rounded-[80px] bg-slate-50 p-24 text-center space-y-12 border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] scale-150 rotate-12">
                        <Terminal className="w-64 h-64" />
                    </div>

                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none italic uppercase text-slate-900">
                        Ready_to_Register?
                    </h2>
                    <p className="text-xl font-bold text-slate-400 uppercase tracking-[0.4em] max-w-2xl mx-auto">
                        Global mesh infrastructure for elite SaaS teams. Start standardizing in minutes.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-8 pt-6">
                        <button className="h-16 px-16 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest shadow-2xl shadow-indigo-200 hover:scale-110 active:scale-95 transition-all text-[11px]">
                            Upgrade_To_Mesh_Pro
                        </button>
                        <button className="h-16 px-16 rounded-2xl border-2 border-slate-200 text-slate-900 font-black uppercase tracking-widest hover:bg-white transition-all text-[11px]">
                            Explore_Docs
                        </button>
                    </div>

                    <div className="flex justify-center gap-10 pt-12 grayscale opacity-30">
                        <Star className="w-5 h-5 fill-indigo-600" />
                        <Star className="w-5 h-5 fill-indigo-600" />
                        <Star className="w-5 h-5 fill-indigo-600" />
                        <Star className="w-5 h-5 fill-indigo-600" />
                        <Star className="w-5 h-5 fill-indigo-600" />
                    </div>
                </div>
            </section>

            {/* --- COMPREHENSIVE FOOTER --- */}
            <footer className="pt-32 pb-16 px-20 border-t border-slate-100 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-20">
                    <div className="lg:col-span-2 space-y-10">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-black text-2xl tracking-tighter uppercase italic text-slate-900">ViCode</span>
                        </div>
                        <p className="text-[10px] font-bold text-slate-300 leading-relaxed max-w-xs uppercase tracking-[0.4em]">
                            Global Infrastructure Standards. Atomic Scale. Sovereign Policy. Total Observation.
                        </p>
                    </div>

                    {[
                        { t: "Protocols", l: ["Mesh_V2", "Sovereign", "Atomic", "Telemetry"] },
                        { t: "Governance", l: ["Policy", "Security", "Standards", "Docs"] },
                        { t: "Pulse", l: ["Global_State", "Nodes", "Network", "Upstream"] },
                        { t: "Market", l: ["Nodes_V3", "Sync_Plus", "Registry_Go", "Elite"] }
                    ].map((col, i) => (
                        <div key={i} className="space-y-8">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">{col.t}</h5>
                            <ul className="space-y-4">
                                {col.l.map((link, li) => (
                                    <li key={li}>
                                        <a href="#" className="text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-[0.1em]">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto pt-24 border-t border-slate-50 mt-16 flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.6em] text-slate-300 italic">
                    <span>© 2026 ViCode Sync Protocol.</span>
                    <div className="flex items-center gap-8 text-indigo-400/20">
                        <span>SECURE_ENCRYPTION_ACTIVE</span>
                        <ShieldCheck className="w-4 h-4 text-emerald-400/50" />
                    </div>
                </div>
            </footer>

            <style>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};
