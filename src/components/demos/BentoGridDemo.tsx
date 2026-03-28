import { cn } from "@/lib/utils";
import {
Activity,
ArrowUpRight,
Code2,
Command,
Globe,
Layers,
LayoutDashboard,
ShieldCheck,
Trophy,
Users,
Zap
} from "lucide-react";
import React from "react";

export const BentoGridDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#f8fafc] text-indigo-950 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-y-auto overflow-x-hidden relative h-full flex flex-col group scroll-smooth">

            {/* --- BENTO GRID GLOBAL STYLES --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;500;700;800&display=swap');
                
                .font-bento { font-family: 'Plus Jakarta Sans', sans-serif; }
                
                .bento-card {
                    @apply bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden relative;
                }
                .bento-gradient-1 { background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%); }
                .bento-gradient-2 { background: linear-gradient(135deg, #f472b6 0%, #fb7185 100%); }
                .bento-gradient-3 { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float { animation: float-slow 4s ease-in-out infinite; }
            `}} />

            {/* --- TOP NAV --- */}
            <nav className="flex items-center justify-between px-10 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-[100] font-bento">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bento-gradient-1 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                            <Command className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-extrabold tracking-tight text-indigo-950">ViCode</span>
                    </div>
                    <div className="hidden lg:flex gap-8 text-sm font-bold text-slate-500">
                        <a href="#" className="hover:text-indigo-600 transition-colors">Products</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Infrastructure</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Enterprise</a>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Login</button>
                    <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-2xl text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all hover:-translate-y-0.5">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* --- HERO: BENTO GRID (FIT 1 SCREEN) --- */}
            <section className="h-[calc(100vh-73px)] min-h-[550px] px-6 py-2 lg:px-10 lg:py-4 relative z-10 shrink-0 flex items-center justify-center font-bento bg-slate-50/30">
                <div className="w-full max-w-7xl h-full max-h-[750px] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 grid-rows-6 gap-4">

                    {/* MAIN CALL TO ACTION */}
                    <div className="col-span-12 lg:col-span-8 row-span-3 bento-card p-8 lg:p-10 flex flex-col justify-center gap-6 group">
                        <div className="w-fit px-4 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-extrabold uppercase tracking-widest">Platform Launch V2.0</div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[0.95] text-slate-900">
                            Infrastructure<br />
                            built for <span className="text-indigo-600">everyone.</span>
                        </h1>
                        <p className="max-w-xl text-lg text-slate-500 font-medium leading-relaxed">
                            Unified CI/CD, global edge nodes, and automated narrative deployments for teams that ship faster.
                        </p>
                        <div className="flex items-center gap-6 mt-4">
                            <button className="h-16 px-10 bg-indigo-600 text-white rounded-[1.5rem] font-bold text-lg shadow-2xl shadow-indigo-200 hover:bg-indigo-700 transition-all hover:scale-105">
                                Deploy Unit Now
                            </button>
                            <div className="flex -space-x-3">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200" />
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-indigo-50 flex items-center justify-center text-xs font-bold text-indigo-600">
                                    +2k
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GLOBAL REACH CARD */}
                    <div className="col-span-6 lg:col-span-4 row-span-3 bento-card bento-gradient-1 p-8 flex flex-col justify-between text-white group overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-150 transition-transform duration-700" />
                        <div className="relative z-10 flex justify-between items-start">
                            <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                <Globe className="w-5 h-5" />
                            </div>
                            <ArrowUpRight className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="relative z-10 space-y-2">
                            <div className="text-4xl lg:text-5xl font-extrabold tracking-tighter">190+</div>
                            <div className="text-base font-bold opacity-80 leading-tight">Global Edge Locations Optimized.</div>
                        </div>
                    </div>

                    {/* METRICS CARD */}
                    <div className="col-span-6 lg:col-span-3 row-span-3 bento-card p-6 lg:p-8 flex flex-col justify-between group">
                        <div className="space-y-4">
                            <div className="w-9 h-9 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <div className="text-2xl lg:text-3xl font-extrabold tracking-tight">240ms</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Deploy Time</div>
                            </div>
                        </div>
                        <div className="h-16 flex items-end gap-1">
                            {[30, 45, 25, 60, 40, 75, 50].map((h, i) => (
                                <div key={i} className="flex-1 bg-rose-100 rounded-lg group-hover:bg-rose-500 transition-colors duration-500" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                    </div>

                    {/* SECURITY CARD */}
                    <div className="col-span-12 lg:col-span-5 row-span-3 bento-card p-8 lg:p-10 flex flex-row items-center gap-8 group bg-slate-900 text-white">
                        <div className="flex-1 space-y-3">
                            <h3 className="text-xl lg:text-2xl font-bold tracking-tight">Zero-Trust Shielding</h3>
                            <p className="text-xs text-slate-400 font-medium leading-relaxed">Identity-first security for every microservice, globally.</p>
                            <div className="pt-1">
                                <div className="flex items-center gap-3 text-[10px] font-bold text-indigo-400">
                                    <ShieldCheck className="w-3.5 h-3.5" /> ENCRYPTION_ACTIVE
                                </div>
                            </div>
                        </div>
                        <div className="w-24 h-24 lg:w-28 lg:h-28 bg-indigo-500/20 rounded-full flex items-center justify-center animate-float relative shrink-0">
                            <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-full border-dashed animate-spin" />
                            <ShieldCheck className="w-10 h-10 text-indigo-400" />
                        </div>
                    </div>

                    {/* COLLABORATION CARD */}
                    <div className="col-span-12 lg:col-span-4 row-span-3 bento-card p-6 lg:p-8 group flex flex-col justify-between hover:bg-indigo-50/30">
                        <div className="flex justify-between items-start">
                            <div className="p-2.5 bg-amber-50 rounded-2xl text-amber-500">
                                <Users className="w-5 h-5" />
                            </div>
                            <div className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-[9px] font-black uppercase">LIVE</div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex -space-x-1.5">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                                ))}
                            </div>
                            <h4 className="text-lg lg:text-xl font-bold tracking-tight">Multiplayer Workflows</h4>
                            <p className="text-[10px] text-slate-500 font-medium font-bento">Real-time sync for DevOps teams.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORE FEATURES: VERTICAL BENTO --- */}
            <section className="py-32 px-10 bg-white shrink-0 font-bento border-t border-slate-100">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="max-w-2xl space-y-4">
                        <div className="text-indigo-600 font-black text-xs uppercase tracking-[0.2em]">The Stack</div>
                        <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight leading-none">Modular by design.</h2>
                        <p className="text-lg text-slate-500">Everything you need to scale, wrapped in a single unified interface.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { t: "Logic.Core", d: "Serverless logic at the speed of light.", i: Code2, c: "bg-blue-50 text-blue-600" },
                            { t: "Sync.Pulse", d: "Real-time state synchronization.", i: Activity, c: "bg-indigo-50 text-indigo-600" },
                            { t: "Edge.Mesh", d: "Ultra-low latency distribution.", i: Layers, c: "bg-purple-50 text-purple-600" },
                            { t: "Dev.Console", d: "Next-gen developer experience.", i: LayoutDashboard, c: "bg-slate-50 text-slate-900" }
                        ].map((item, i) => (
                            <div key={i} className="bento-card p-10 hover:border-indigo-200 flex flex-col gap-6">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", item.c)}>
                                    <item.i className="w-7 h-7" />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-bold text-slate-900">{item.t}</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                        {item.d}
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <button className="text-indigo-600 font-bold text-xs flex items-center gap-2 group/btn">
                                        Learn More <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PRICING: BENTO GRID --- */}
            <section className="py-40 px-10 bg-[#f8fafc] flex flex-col items-center justify-center shrink-0 border-t border-slate-100 font-bento">
                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 scale-95 lg:scale-100">

                    {/* STARTER */}
                    <div className="md:col-span-4 bento-card p-10 space-y-8 flex flex-col">
                        <div className="space-y-2">
                            <div className="text-slate-400 font-bold text-xs uppercase tracking-widest">Solo</div>
                            <div className="text-4xl font-extrabold">$24<span className="text-lg opacity-40">/mo</span></div>
                        </div>
                        <div className="space-y-4 text-sm text-slate-600 font-medium flex-1">
                            <div className="flex gap-3 items-center"><Zap className="w-4 h-4 text-indigo-500" /> 10 Edge Nodes</div>
                            <div className="flex gap-3 items-center"><Zap className="w-4 h-4 text-indigo-500" /> Community Support</div>
                        </div>
                        <button className="w-full py-4 bg-slate-100 text-slate-900 rounded-2xl font-bold hover:bg-slate-200 transition-colors">Start for free</button>
                    </div>

                    {/* PRO */}
                    <div className="md:col-span-8 bento-card p-10 bento-gradient-1 text-white flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1 space-y-6">
                            <div className="w-fit px-4 py-1 bg-white/20 rounded-full text-[10px] font-extrabold uppercase tracking-widest">Most Popular</div>
                            <div className="space-y-2">
                                <div className="text-5xl font-extrabold tracking-tighter">$79<span className="text-xl opacity-60">/mo</span></div>
                                <p className="text-lg opacity-80 font-medium">The ultimate package for growing teams.</p>
                            </div>
                            <button className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all">
                                Start Pro Quest
                            </button>
                        </div>
                        <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border border-white/20 animate-float relative shrink-0">
                            <Trophy className="w-20 h-20 text-white" />
                            <div className="absolute -top-4 -right-4 bg-white text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">+</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER: MINIMAL BENTO --- */}
            <footer className="py-24 bg-white text-slate-900 flex flex-col items-center gap-16 shrink-0 relative border-t border-slate-100 font-bento">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-20 gap-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bento-gradient-1 rounded-2xl flex items-center justify-center text-white">
                                <Command className="w-7 h-7" />
                            </div>
                            <h4 className="text-3xl font-extrabold tracking-tight">ViCode.</h4>
                        </div>
                        <p className="text-slate-500 font-medium max-w-xs">Building the future of infrastructure, one grid at a time.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-20 text-sm font-bold">
                        <div className="flex flex-col gap-4">
                            <span className="text-slate-400 uppercase tracking-widest text-[10px]">Product</span>
                            <a href="#" className="hover:text-indigo-600">Features</a>
                            <a href="#" className="hover:text-indigo-600">API</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-slate-400 uppercase tracking-widest text-[10px]">Company</span>
                            <a href="#" className="hover:text-indigo-600">About</a>
                            <a href="#" className="hover:text-indigo-600">Blog</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-slate-400 uppercase tracking-widest text-[10px]">Social</span>
                            <a href="#" className="hover:text-indigo-600">Twitter</a>
                            <a href="#" className="hover:text-indigo-600">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="w-full px-20 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-50 pt-10">
                    <span>© 2026 ViCode Infrastructure Inc.</span>
                    <div className="flex gap-8">
                        <a href="#">Security</a>
                        <a href="#">Privacy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
