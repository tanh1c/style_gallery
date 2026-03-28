import { Activity,ArrowRight,CheckCircle2,Code,Cpu,Globe,Layers,Shield,Zap } from "lucide-react";
import React from "react";

export const FlatDesignDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-white overflow-y-auto text-slate-800 font-sans selection:bg-blue-600/10 pb-32 relative text-left">
            <div className="max-w-[1240px] mx-auto px-8 lg:px-12 py-8 space-y-16">

                {/* Flat Header */}
                <header className="h-16 flex items-center justify-between px-8 bg-slate-50 rounded-2xl sticky top-6 z-50 border border-slate-100">
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                            <Code className="w-6 h-6" />
                        </div>
                        <span className="font-extrabold text-xl tracking-tight text-slate-900">ViCode</span>
                    </div>
                    <nav className="hidden lg:flex items-center gap-10 font-bold text-sm text-slate-500">
                        {["Tools", "Network", "Specs"].map(item => (
                            <a key={item} href="#" className="hover:text-blue-600 transition-none">{item}</a>
                        ))}
                    </nav>
                    <button className="bg-emerald-500 text-white px-8 py-2.5 font-bold text-sm rounded-lg hover:bg-emerald-600 transition-none shadow-none">
                        Get Started
                    </button>
                </header>

                {/* Clear Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pt-0">
                    <div className="space-y-10 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">The_New_Standard_Flat</span>
                        </div>
                        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight text-slate-900">
                            Software <br />
                            Simplified <br />
                            Engineered.
                        </h1>
                        <p className="text-2xl text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium tracking-tight">
                            Zero distractions. Pure 2D efficiency. <br />
                            Scale your infrastructure with clear vision and no noise.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                            <button className="h-16 px-10 bg-blue-600 text-white rounded-xl text-lg font-bold hover:bg-blue-700 transition-none flex items-center justify-center gap-4 group">
                                Start Developing
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                            </button>
                            <button className="h-16 px-10 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-xl text-lg font-bold transition-none">
                                API_Docs
                            </button>
                        </div>
                    </div>

                    <div className="relative group p-4">
                        {/* Flat Asset Container */}
                        <div className="w-full aspect-square bg-blue-50 rounded-[40px] flex items-center justify-center overflow-hidden border-4 border-white">
                            <img
                                src="/vicode_flat_server_illustration.png"
                                alt="ViCode Flat Engine Illustration"
                                className="w-[85%] h-[85%] object-contain drop-shadow-none z-10 hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Simple Flat Badges */}
                        <div className="absolute top-10 right-10 flex gap-2">
                            <div className="bg-emerald-100 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-emerald-600 border border-emerald-200">System_Online</div>
                        </div>
                    </div>
                </section>

                {/* Flat Grid Showcase */}
                <section className="space-y-16">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <div className="h-2 w-16 bg-blue-600 rounded-full" />
                        <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 italic">Technical.Hub</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: Zap, title: "Snap Scale", desc: "Solid distribution with zero overhead.", color: "bg-blue-500" },
                            { icon: Shield, title: "Vault Protect", desc: "Encryption simplified, not forgotten.", color: "bg-emerald-500" },
                            { icon: Globe, title: "Pure Global", desc: "Every node in 2D perfection.", color: "bg-slate-800" },
                            { icon: Activity, title: "Live Pulse", desc: "No noise monitor, pure data.", color: "bg-orange-500" },
                            { icon: Cpu, title: "L-Process", desc: "Efficient instruction sets.", color: "bg-cyan-500" },
                            { icon: Layers, title: "Stack Map", desc: "Visualize infrastructure clearly.", color: "bg-indigo-500" }
                        ].map((f, i) => (
                            <div key={i} className="bg-slate-50 p-12 rounded-[24px] border border-slate-100 space-y-10 hover:bg-white hover:border-blue-600 group transition-none cursor-default text-left">
                                <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center text-white`}>
                                    <f.icon className="w-8 h-8" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black tracking-tight uppercase text-slate-900">{f.title}</h3>
                                    <p className="text-base font-bold text-slate-400 leading-tight uppercase tracking-tight">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Block Info Section */}
                <section className="bg-blue-600 rounded-[48px] p-12 lg:p-24 shadow-none relative overflow-hidden group border-none">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 items-center">
                        <div className="space-y-12">
                            <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter italic leading-none text-white">PURE.<br />FLAT.</h2>
                            <p className="text-xl text-white/50 font-bold uppercase tracking-widest italic leading-relaxed">Infrastructure built for people who hate clutter. Pure performance. High-end clarity.</p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { l: "Efficiency", v: "100%", bg: "bg-white/10" },
                                    { l: "No Noise", v: "YES", bg: "bg-emerald-400" }
                                ].map((s, i) => (
                                    <div key={i} className={`${s.bg} p-10 rounded-3xl ${i === 1 ? 'text-slate-900' : 'text-white'}`}>
                                        <div className="text-5xl font-black">{s.v}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest mt-2">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-900 rounded-[32px] p-12 min-h-[440px] flex flex-col justify-center relative border-8 border-slate-800">
                            <div className="absolute top-10 right-10 p-4 bg-blue-600 text-white text-xs font-black uppercase tracking-widest">2D_ENGINE_ACTIVE</div>
                            <div className="space-y-8 font-mono text-sm">
                                <div className="flex gap-4 border-b border-white/5 pb-4">
                                    <span className="text-emerald-400 font-bold">$ root@flat_server:</span>
                                    <span className="text-white">vicode deploy --clear</span>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-blue-400 font-black">{">"} Riping gradients... DONE</p>
                                    <p className="text-indigo-400 font-black">{">"} Clearing shadows... DONE</p>
                                    <div className="bg-white text-slate-900 px-5 py-2 font-black uppercase inline-block mt-4">✓ STACK_SIMPLIFIED_v2.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Simplified Footer */}
                <footer className="pt-32 pb-16 space-y-24 border-t-4 border-slate-50 font-sans">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-20">
                        <div className="col-span-2 space-y-10 text-left">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-2xl">
                                    <span className="font-black text-2xl">V</span>
                                </div>
                                <span className="font-extrabold text-3xl tracking-tighter uppercase italic text-slate-900">ViCode Flat.</span>
                            </div>
                            <p className="text-base text-slate-400 leading-snug max-w-sm font-bold uppercase tracking-widest">
                                A clear software journey. No noise, just performance. The infrastructure of pure visibility. 2026.
                            </p>
                        </div>
                        {[
                            { title: "2D_Kit", links: ["Simplified", "Clean", "Visual"] },
                            { title: "Support", links: ["Docs", "CLI", "API"] },
                            { title: "Legal", links: ["Privacy", "Policy", "Terms"] },
                            { title: "Community", links: ["Twitter", "Github", "Discord"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-10 text-left">
                                <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">
                                    {group.title}
                                </h5>
                                <ul className="space-y-6">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-sm text-slate-300 hover:text-blue-600 transition-none uppercase font-black tracking-widest">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-20 border-t-2 border-slate-50 text-[11px] font-black uppercase tracking-widest text-slate-200">
                        <span className="px-10 py-5 bg-slate-50 rounded-2xl italic tracking-wider">© 2026 ViCode Flat Design Systems. Simplified_Unit_Alpha.</span>
                        <div className="flex gap-16 font-extrabold opacity-30">
                            <span>VERSION: 2D_STABLE_12</span>
                            <span>UI_FLATNESS: 100%</span>
                        </div>
                    </div>
                </footer>

                {/* Global Static Button */}
                <div className="fixed bottom-12 right-12 z-50">
                    <button className="h-20 w-20 bg-emerald-500 text-white rounded-2xl flex items-center justify-center transition-none hover:bg-emerald-600 active:bg-emerald-700">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};
