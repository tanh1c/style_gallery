import { cn } from "@/lib/utils";
import {
Activity,
ArrowUpRight,
Box,
CheckCircle2,
ChevronRight,
Command,
Github,
Globe,
Layers,
ShieldCheck,
Sparkles,
Terminal,
Zap
} from "lucide-react";
import React from "react";

export const BentoBoxGridDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#fcfcfd] text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-y-auto overflow-x-hidden relative h-full flex flex-col p-6 space-y-8 pt-8">

            {/* --- BENTO NAV --- */}
            <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-[24px] sticky top-0 z-50 shadow-sm mx-2">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                        <Command className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">ViCode_Modular</span>
                </div>

                <div className="hidden md:flex items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
                    {["Systems", "Logic", "Pulse", "Vault"].map((tab) => (
                        <button key={tab} className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors">
                            {tab}
                        </button>
                    ))}
                </div>

                <button className="h-10 px-6 bg-slate-900 text-white font-bold uppercase tracking-widest text-[9px] rounded-xl hover:bg-indigo-600 transition-all shadow-md active:scale-95">
                    Request_Shell
                </button>
            </nav>

            {/* --- BENTO HERO: MODULAR GRID (FIT VIEWPORT) --- */}
            <section className="min-h-[85vh] grid grid-cols-1 md:grid-cols-4 grid-rows-6 md:grid-rows-3 gap-6 px-2 shrink-0">
                {/* 1. PRIMARY TITLE CARD (2x2) */}
                <div className="md:col-span-2 md:row-span-2 bg-indigo-600 rounded-[40px] p-12 text-white relative overflow-hidden group shadow-2xl shadow-indigo-500/20 flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-8 opacity-20 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                        <Zap className="w-48 h-48 fill-white" />
                    </div>
                    <div className="relative z-10 space-y-6">
                        <div className="inline-block px-3 py-1.5 bg-white/15 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            <Sparkles className="w-3 h-3 text-indigo-200" /> V.90.2_Production_Live
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none uppercase">
                            Modular.<br />Logic.<br />Scale.
                        </h1>
                    </div>
                    <div className="relative z-10 pt-8">
                        <p className="text-lg font-medium text-indigo-100/80 max-w-sm mb-8 leading-relaxed">
                            Experience the peak evolution of SaaS infrastructure in a perfectly balanced modular grid. No noise. Just pure deployment.
                        </p>
                        <button className="h-14 px-10 bg-white text-indigo-600 font-bold uppercase tracking-widest text-[11px] rounded-[20px] shadow-xl hover:bg-slate-50 active:scale-95 transition-all flex items-center gap-4">
                            Start_Building <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* 2. IMAGE CARD (Vertical 1x2) */}
                <div className="md:col-span-1 md:row-span-2 bg-slate-900 rounded-[40px] overflow-hidden relative group shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
                        alt="Integrated Tech Architecture"
                        className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 text-white space-y-2">
                        <div className="text-[9px] font-bold uppercase tracking-widest text-indigo-400">Hardware_Integration</div>
                        <div className="text-xl font-bold tracking-tight">Silicon-Native_Performance.</div>
                    </div>
                </div>

                {/* 3. METRIC CARD (1x1) */}
                <div className="md:col-span-1 md:row-span-1 bg-white border border-slate-200 rounded-[40px] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                            <Activity className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-full">Active</span>
                    </div>
                    <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Compute_Efficiency</p>
                        <div className="text-4xl font-black text-slate-900 tracking-tighter italic">99.8%</div>
                    </div>
                </div>

                {/* 4. TEAM CARD (1x1) */}
                <div className="md:col-span-1 md:row-span-1 bg-white border border-slate-200 rounded-[40px] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 shadow-sm" />
                        ))}
                        <div className="w-10 h-10 rounded-full border-4 border-white bg-indigo-600 text-white text-[9px] font-bold flex items-center justify-center">+4k</div>
                    </div>
                    <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Global_Lead_Engineers</p>
                        <div className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic tracking-widest">Enterprise_Ready.</div>
                    </div>
                </div>

                {/* 5. LONG SEARCH CARD (2x1) */}
                <div className="md:col-span-2 md:row-span-1 bg-slate-100 border border-slate-200 rounded-[40px] p-8 flex items-center justify-between shadow-inner group cursor-pointer transition-all hover:bg-slate-50">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-indigo-600/10 rounded-[24px] flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                            <Terminal className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">Shell_Access_Control.</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deploy_Globally_with_single_command</p>
                        </div>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-200 text-slate-400 group-hover:text-indigo-600">
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </section>

            {/* --- BENTO LOGOS: MINIMAL WALL --- */}
            <div className="py-12 bg-white border-y border-slate-100 flex flex-col items-center gap-8 shrink-0">
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.5em]">Silicon_Native_Architectures</span>
                <div className="flex gap-16 items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 cursor-default">
                    <Github className="w-8 h-8" />
                    <Layers className="w-8 h-8" />
                    <Command className="w-8 h-8" />
                    <Globe className="w-8 h-8" />
                    <ShieldCheck className="w-8 h-8" />
                </div>
            </div>

            {/* --- BENTO FEATURES: MODULAR WALKTHROUGH --- */}
            <section className="space-y-12 px-2 shrink-0">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-4xl font-black tracking-tight text-slate-900 uppercase italic">Infrastructure_Modularized.</h2>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Everything_Decoupled_Everything_Connected</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { t: "Logic_Containers", d: "Isolated environments for every logic thread with 0ms cold starts.", i: Box, c: "bg-indigo-50/50" },
                        { t: "Pulse_Telemetry", d: "Real-time node health monitoring with predictive failure correction.", i: Activity, c: "bg-emerald-50" },
                        { t: "Vault_Hardening", d: "Military-grade encryption for sensitive data at rest and in transit.", i: ShieldCheck, c: "bg-slate-900 text-white" }
                    ].map((item, i) => (
                        <div key={i} className={cn(
                            "p-10 rounded-[48px] border border-slate-200/50 transition-all hover:scale-[1.02] cursor-pointer space-y-8 flex flex-col",
                            item.c
                        )}>
                            <div className={cn(
                                "w-16 h-16 rounded-[24px] flex items-center justify-center shadow-lg shadow-indigo-500/10",
                                i === 2 ? "bg-white text-indigo-600" : "bg-indigo-600 text-white"
                            )}>
                                <item.i className="w-8 h-8" />
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-2xl font-black tracking-tighter leading-none">{item.t}</h4>
                                <p className={cn("text-sm font-medium leading-relaxed opacity-60", i === 2 ? "text-slate-200" : "text-slate-500")}>
                                    {item.d}
                                </p>
                            </div>
                            <div className="mt-auto pt-6 border-t border-current/10 flex items-center justify-between text-[10px] font-black uppercase tracking-widest opacity-40">
                                <span>Doc_Shellv10</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- PRICING BENTO --- */}
            <section className="bg-slate-900 rounded-[56px] p-12 lg:p-20 text-white space-y-16 mx-2 overflow-hidden relative shrink-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/30 rounded-full blur-[140px]" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="space-y-8">
                        <h2 className="text-5xl lg:text-6xl font-black tracking-tighter leading-none uppercase italic">Scale-Your-Impact.</h2>
                        <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-lg">
                            ViCode Modular offers a pure pay-as-you-deploy model. No upfront costs, just raw compute for your ambitious SaaS visions.
                        </p>
                        <div className="flex gap-12">
                            <div className="space-y-1">
                                <div className="text-3xl font-black tracking-tighter">$0.02</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Per_Logic_Unit</div>
                            </div>
                            <div className="space-y-1 border-l border-white/10 pl-12">
                                <div className="text-3xl font-black tracking-tighter">Unlimited</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Compute_Nodes</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-10 rounded-[48px] space-y-8 backdrop-blur-sm">
                        <div className="space-y-6">
                            {[
                                "Real-time Logic Telemetry",
                                "Quantum-Grade Encryption",
                                "Unrestricted API Channels",
                                "Global Edge Propagation"
                            ].map(f => (
                                <div key={f} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-200">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-400" /> {f}
                                </div>
                            ))}
                        </div>
                        <button className="w-full h-16 bg-white text-slate-900 font-black uppercase tracking-widest text-[11px] rounded-[24px] hover:bg-indigo-400 transition-all shadow-2xl active:scale-95">
                            Onboard_Infrastructure
                        </button>
                    </div>
                </div>
            </section>

            {/* --- COMPACT BENTO FOOTER --- */}
            <footer className="py-20 px-10 border-t border-slate-100 shrink-0">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-xl">
                            <Command className="w-7 h-7" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black tracking-tighter uppercase italic">The_Modular_Void.</h4>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Architected_By_ViCode_©2026</p>
                        </div>
                    </div>
                    <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Terminal_API</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Security_Vault</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
