import { cn } from "@/lib/utils";
import {
Activity,
ArrowRight,
ChevronRight,
Cpu,
Info,
Layers,
MousePointer2,
RefreshCw,
ShieldCheck,
Terminal
} from "lucide-react";
import React,{ useState } from "react";

export const InteractiveProductDemo: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'sync' | 'secure' | 'scale'>('sync');
    const [isSyncing, setIsSyncing] = useState(false);

    const toggleSync = () => {
        setIsSyncing(true);
        setTimeout(() => setIsSyncing(false), 2000);
    };

    return (
        <div className="flex-1 bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* Minimal Dashboard Header */}
            <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                        <Cpu className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-black text-xl tracking-tighter uppercase italic">ViCode_Lab</span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Engine_v4.2_Live
                    </div>
                    <button className="h-10 px-6 rounded-xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-indigo-500 transition-all">
                        Try_The_Console
                    </button>
                </div>
            </header>

            {/* --- HERO: INTERACTIVE PRODUCT PREVIEW (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 px-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[50vw] h-[50vh] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="space-y-10 animate-in slide-in-from-left duration-1000">
                        <div className="space-y-4">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-400">Interactive_Simulation</h2>
                            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter uppercase italic">
                                Test_The_Mesh<br />
                                <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">In_Real_Time.</span>
                            </h1>
                            <p className="text-lg font-bold text-slate-400 leading-relaxed max-w-md">
                                Click the modules on the right to simulate 10,000 nodes synchronizing instantly. Experience the ViCode difference.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {(['sync', 'secure', 'scale'] as const).map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn(
                                        "p-4 rounded-2xl border transition-all text-left space-y-2 group",
                                        activeTab === tab
                                            ? "bg-indigo-600 border-indigo-500 shadow-2xl shadow-indigo-500/20"
                                            : "bg-white/5 border-white/5 hover:bg-white/10"
                                    )}
                                >
                                    {tab === 'sync' && <RefreshCw className={cn("w-5 h-5", activeTab === tab ? "text-white" : "text-indigo-400")} />}
                                    {tab === 'secure' && <ShieldCheck className={cn("w-5 h-5", activeTab === tab ? "text-white" : "text-rose-400")} />}
                                    {tab === 'scale' && <Layers className={cn("w-5 h-5", activeTab === tab ? "text-white" : "text-emerald-400")} />}
                                    <div className={cn("text-[9px] font-black uppercase tracking-widest", activeTab === tab ? "text-white/60" : "text-slate-500")}>
                                        {tab === 'sync' && "Atomic_Sync"}
                                        {tab === 'secure' && "Sovereign_Shield"}
                                        {tab === 'scale' && "Rapid_Expansion"}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* INTERACTIVE MOCK DASHBOARD */}
                    <div className="relative animate-in zoom-in-95 duration-1000 group">
                        <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-slate-900 border border-white/10 rounded-[40px] shadow-3xl overflow-hidden p-6 aspect-[4/3] flex flex-col gap-6">

                            {/* Dash Inner Top */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                                        <Activity className="w-4 h-4 text-indigo-400" />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest">Global_Grid_Status</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-slate-800" />
                                    <div className="w-3 h-3 rounded-full bg-slate-800" />
                                    <div className="w-3 h-3 rounded-full bg-slate-800" />
                                </div>
                            </div>

                            {/* Dash Content Area */}
                            <div className="flex-1 bg-slate-950/50 rounded-2xl border border-white/5 p-6 flex flex-col gap-6 overflow-hidden relative">
                                {/* Tab Content: SYNC */}
                                {activeTab === 'sync' && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-10 duration-500 h-full flex flex-col justify-center">
                                        <div className="flex items-end justify-around gap-2 px-10 h-32">
                                            {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="w-full max-w-[12px] rounded-t-sm bg-indigo-500 transition-all duration-1000"
                                                    style={{ height: isSyncing ? `${h}%` : '20%' }}
                                                />
                                            ))}
                                        </div>
                                        <div className="text-center space-y-2">
                                            <div className="text-2xl font-black italic tracking-tighter text-white">42,400 Nodes_Synced</div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Total_State_Consensus_In_1.2ms</div>
                                        </div>
                                        <button
                                            onClick={toggleSync}
                                            className="mx-auto h-12 px-8 rounded-xl bg-white text-slate-950 font-black uppercase tracking-widest text-[9px] flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-white/10"
                                        >
                                            {isSyncing ? "Propagating..." : "Execute_Sync_Pulse"}
                                            <RefreshCw className={cn("w-3.5 h-3.5", isSyncing && "animate-spin")} />
                                        </button>
                                    </div>
                                )}

                                {/* Tab Content: SECURE */}
                                {activeTab === 'secure' && (
                                    <div className="space-y-8 animate-in fade-in slide-in-from-right-10 duration-500 h-full flex flex-col justify-center items-center text-center">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-rose-500/20 blur-xl animate-pulse rounded-full" />
                                            <ShieldCheck className="w-20 h-20 text-rose-500 relative z-10" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-2xl font-black italic tracking-tighter text-white uppercase italic">Sovereign_Active</div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-rose-400">99.999% Intrusion_Prevention_Rate</div>
                                        </div>
                                        <div className="w-full max-w-xs h-1 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-rose-500 animate-slide-left-right" />
                                        </div>
                                    </div>
                                )}

                                {/* Tab Content: SCALE */}
                                {activeTab === 'scale' && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-right-10 duration-500 h-full flex flex-col justify-center px-8">
                                        <div className="grid grid-cols-2 gap-4">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2">
                                                    <div className="flex justify-between items-center">
                                                        <div className="w-8 h-1.5 bg-emerald-500/50 rounded-full" />
                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                    </div>
                                                    <div className="h-8 bg-slate-800 w-full rounded" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between items-center bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/20 mt-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Expansion_Velocity</span>
                                            <span className="text-xl font-black italic text-white">+1.2k/hr</span>
                                        </div>
                                    </div>
                                )}

                                {/* Guide Tooltip */}
                                <div className="absolute top-4 right-4 animate-bounce-slow cursor-help group/tip">
                                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
                                        <Info className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="absolute bottom-full right-0 mb-3 w-48 p-4 rounded-2xl bg-white text-slate-900 border shadow-2xl opacity-0 group-hover/tip:opacity-100 transition-opacity pointer-events-none scale-90 group-hover/tip:scale-100 origin-bottom-right duration-300">
                                        <p className="text-[10px] font-bold leading-relaxed">
                                            This is a live simulation. Click the tabs on the left to swap modules.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TECHNICAL TERMINAL: LIVE FEED --- */}
            <section className="py-24 px-10 border-t border-white/5">
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-black italic tracking-tighter uppercase italic">Registry_Console_v2</h3>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 italic uppercase">Interaction_Logs_Feed</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-400">
                                <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
                                Live_Updating
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-[40px] bg-[#0A0A0B] border border-white/5 font-mono text-[10px] text-indigo-300 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/20" />
                        <div className="space-y-3 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="flex items-center gap-4 text-slate-600">
                                <span className="text-slate-700">14:22:01</span>
                                <span>[SYSTEM] ViCode_Lab Registry connected to global mesh cluster.</span>
                            </div>
                            <div className="flex items-center gap-4 text-emerald-500/80">
                                <span className="text-slate-700">14:22:04</span>
                                <span>[SUCCESS] Consensus established across 42,400 independent nodes.</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <span className="text-slate-700">14:22:05</span>
                                <span>[COMMAND] vicode --sync --target production --policy security_01</span>
                            </div>
                            <div className="flex items-center gap-4 text-indigo-400">
                                <span className="text-slate-700">14:22:06</span>
                                <span>[INFO] Active module switched to: <span className="uppercase font-black text-white">{activeTab}</span></span>
                            </div>
                            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-indigo-500">
                                <Terminal className="w-4 h-4" />
                                <span className="animate-pulse">_</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INTERACTIVE FEATURES GRID --- */}
            <section className="py-40 px-10 bg-white/2">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { t: "Deep Inspections", d: "Hover over any node in the interactive grid to see sub-millisecond telemetry.", i: MousePointer2 },
                        { t: "Atomic Rollbacks", d: "One-click history restoration. Undo global state changes across the entire world instantly.", i: RefreshCw },
                        { t: "Smart Tooltips", d: "Intuitive guided tours built directly into the engineering console experience.", i: Info }
                    ].map((f, i) => (
                        <div key={i} className="space-y-8 group cursor-pointer p-10 rounded-[40px] bg-slate-900/40 hover:bg-white/5 transition-all outline outline-1 outline-white/5 hover:outline-white/10 shadow-2xl">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xl shadow-indigo-500/5">
                                <f.i className="w-7 h-7" />
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-2xl font-black italic tracking-tighter uppercase italic leading-[1.2] text-white underline decoration-indigo-500/30 underline-offset-4">{f.t}</h4>
                                <p className="text-sm font-bold text-slate-500 leading-relaxed italic">{f.d}</p>
                            </div>
                            <div className="pt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-500 group-hover:translate-x-2 transition-transform">
                                Try_It_Now <ChevronRight className="w-3.5 h-3.5" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- CTA: READY TO TRY FOR REAL? --- */}
            <section className="py-40 px-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-600/5 pointer-events-none" />
                <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase italic leading-none">
                        The_Console_is_Waiting.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Register_Your_Mesh.</span>
                    </h2>
                    <p className="text-xl font-bold text-slate-400 tracking-[0.4em] uppercase italic">Experience_Total_Control_v4.2</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-8 pt-6">
                        <button className="h-16 px-16 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest shadow-3xl shadow-indigo-500/20 hover:scale-110 active:scale-95 transition-all text-[11px] flex items-center gap-4">
                            Activate_Free_Node
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="h-16 px-16 rounded-2xl border-2 border-white/10 text-white font-black uppercase tracking-widest hover:bg-white/5 transition-all text-[11px]">
                            Schedule_Guided_Demo
                        </button>
                    </div>
                </div>
            </section>

            <footer className="py-20 px-10 border-t border-white/5 bg-slate-950/50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-3">
                        <Cpu className="w-5 h-5 text-indigo-500" />
                        <span className="font-black text-xl tracking-tighter uppercase italic">ViCode_Lab</span>
                    </div>
                    <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                        <a href="#" className="hover:text-white transition-colors">Documentation</a>
                        <a href="#" className="hover:text-white transition-colors">Cloud_API</a>
                        <a href="#" className="hover:text-white transition-colors">Success_Logs</a>
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-800 italic">
                        © 2026 ViCode Engineering Lab. Protocol_Consensus_Active.
                    </div>
                </div>
            </footer>

            <style>{`
                @keyframes slide-left-right {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-slide-left-right {
                    animation: slide-left-right 2s linear infinite;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin 3s linear infinite;
                }
            `}</style>
        </div>
    );
};
