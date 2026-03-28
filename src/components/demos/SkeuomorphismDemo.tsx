import { ArrowRight,Code,Cpu,Database,Globe,Monitor,Power,Settings,Shield,Zap } from "lucide-react";
import React from "react";

export const SkeuomorphismDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#1A1C1E] overflow-y-auto text-[#E2E8F0] font-sans selection:bg-blue-500/30 pb-32 relative text-left">
            {/* Grainy Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-5 z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            <div className="max-w-[1240px] mx-auto px-8 lg:px-12 py-8 space-y-16 relative z-10">

                {/* Brushed Metal Header Console */}
                <header className="h-20 flex items-center justify-between px-10 bg-gradient-to-b from-[#334155] to-[#1E293B] border-t-2 border-white/20 border-b-4 border-black/40 rounded-3xl sticky top-6 z-50 shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)] overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] animate-shimmer pointer-events-none" />

                    <div className="flex items-center gap-5 group cursor-pointer z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#475569] to-[#0F172A] rounded-xl flex items-center justify-center border-2 border-white/10 shadow-[4px_4px_8px_rgba(0,0,0,0.4),inset_2px_2px_4px_rgba(255,255,255,0.05)]">
                            <Code className="w-6 h-6 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-2xl tracking-tighter uppercase italic text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">ViCode_v1.0</span>
                            <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-slate-400">Tactile_Computing</span>
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center gap-12 font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        {["Console", "Metrics", "Hard_Key"].map(item => (
                            <button key={item} className="hover:text-blue-400 transition-all hover:scale-105 transform active:translate-y-0.5 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                                {item}
                            </button>
                        ))}
                    </nav>

                    <button className="bg-gradient-to-b from-[#3B82F6] to-[#1D4ED8] text-white px-10 py-3.5 font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl shadow-[0_8px_0_#172554,0_15px_30px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#172554] transition-all border border-white/10">
                        System_On
                    </button>
                </header>

                {/* Industrial Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pt-0">
                    <div className="space-y-12 text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-b from-black/60 to-black/80 border-t border-white/5 border-b border-black/40 rounded-xl px-6 py-2.5 shadow-2xl">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">ViCode_Operational_Secure</span>
                        </div>
                        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.5),0_0_2px_rgba(255,255,255,0.1)]">
                            Raw Steel. <br />
                            Pure <span className="text-blue-500 uppercase">Logic.</span> <br />
                            Refined.
                        </h1>
                        <p className="text-2xl text-slate-400 leading-snug max-w-lg mx-auto lg:mx-0 font-bold tracking-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                            The tactile revolution of infrastructure. We brought the heavy metal of the data center to your cloud portal. Feel the power.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-10 pt-4">
                            <button className="h-20 px-12 bg-gradient-to-b from-slate-200 to-slate-400 text-slate-900 rounded-[28px] text-lg font-black uppercase tracking-widest shadow-[0_12px_25px_rgba(0,0,0,0.5),0_10px_0_#94A3B8,inset_0_2px_6px_rgba(255,255,255,0.8)] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_2px_0_#94A3B8] transition-all flex items-center justify-center gap-4 group">
                                Initialize
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="h-20 px-12 bg-gradient-to-b from-slate-800 to-slate-900 text-slate-500 rounded-[28px] text-lg font-black uppercase tracking-widest shadow-[0_10px_0_#0F172A,0_20px_30px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.05)] border border-white/5 transition-all outline-none">
                                Manual
                            </button>
                        </div>
                    </div>

                    <div className="relative group">
                        {/* CSS-Built Realistic Metal Server Rack Box */}
                        <div className="w-full aspect-square bg-[#334155] rounded-[60px] border-t-8 border-white/20 border-b-8 border-black/60 shadow-[0_50px_100px_rgba(0,0,0,0.6),inset_0_4px_10px_rgba(255,255,255,0.2),inset_0_-10px_20px_rgba(0,0,0,0.5)] p-12 flex items-center justify-center relative overflow-hidden group hover:rotate-1 transition-transform duration-1000 transform-gpu">
                            {/* Brushed Texture Layer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

                            {/* Inner Glass Display Panel */}
                            <div className="w-full h-full bg-gradient-to-br from-black to-slate-900 rounded-[40px] shadow-[inset_0_0_40px_rgba(0,0,0,1),0_0_15px_rgba(0,0,0,0.5)] border border-white/5 relative flex flex-col items-center justify-center group overflow-hidden">
                                <Monitor className="w-32 h-32 text-blue-500/20 group-hover:text-blue-400 transition-colors drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
                                <div className="absolute bottom-12 space-y-3 text-center">
                                    <div className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 drop-shadow-[0_0_10px_#3B82F6]">Operational_State</div>
                                    <div className="flex gap-1.5 justify-center">
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-emerald-500 shadow-[0_0_8px_#10B981]' : 'bg-slate-700'} animate-pulse`} style={{ animationDelay: `${i * 200}ms` }} />
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute top-10 flex gap-2 w-[80%]">
                                    <div className="h-1 flex-1 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full w-[70%] bg-blue-500 shadow-[0_0_10px_#3B82F6]" />
                                    </div>
                                </div>
                            </div>

                            {/* Outer Panel Decos */}
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4">
                                <div className="w-2.5 h-2.5 bg-[#475569] rounded-full shadow-inner border border-black/40" />
                                <div className="w-2.5 h-2.5 bg-[#475569] rounded-full shadow-inner border border-black/40" />
                            </div>
                        </div>
                        <div className="absolute -inset-10 bg-blue-600/5 blur-[120px] rounded-full -z-10" />
                    </div>
                </section>

                {/* Tactile Metrics Grid */}
                <section className="space-y-16 py-12">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <div className="h-4 w-64 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full border-t border-white/20 border-b border-black/60 shadow-inner" />
                        <h2 className="text-4xl font-black italic uppercase tracking-[0.4em] text-slate-200">System.Keys</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { icon: Zap, title: "Bolt Scale", desc: "Physical power distribution nodes.", color: "text-amber-500" },
                            { icon: Shield, title: "Hard Guard", desc: "Steel-clad localized encryption.", color: "text-blue-500" },
                            { icon: Globe, title: "Global Lathe", desc: "Forged network across 18 centers.", color: "text-emerald-500" },
                            { icon: Database, title: "V-Stacks", desc: "High-density metallic sharding.", color: "text-slate-100" },
                            { icon: Cpu, title: "X-Cores", desc: "Overclocked industrial processors.", color: "text-red-500" },
                            { icon: Settings, title: "Mech Logic", desc: "Fine-tuned analog control sets.", color: "text-cyan-500" }
                        ].map((f, i) => (
                            <div key={i} className="bg-gradient-to-br from-slate-700 to-slate-900 p-12 rounded-[40px] border-t-2 border-white/10 border-b-4 border-black/40 shadow-[0_25px_50px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.05)] space-y-10 hover:scale-105 transition-all cursor-pointer group active:scale-95">
                                <div className="w-20 h-20 bg-gradient-to-b from-black to-slate-900 rounded-3xl flex items-center justify-center shadow-[inset_4px_4px_10px_rgba(0,0,0,1),4px_4px_10px_rgba(255,255,255,0.05)] group-hover:rotate-6 transition-all border border-white/5">
                                    <f.icon className={`w-10 h-10 ${f.color} drop-shadow-[0_0_12px_currentColor] opacity-40 group-hover:opacity-100 transition-opacity`} />
                                </div>
                                <div className="space-y-4 text-left">
                                    <h3 className="text-2xl font-black tracking-tight text-white uppercase italic">{f.title}</h3>
                                    <p className="text-xs font-bold text-slate-500 leading-tight uppercase tracking-widest">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Heavy Panel Information */}
                <section className="bg-gradient-to-b from-slate-900 to-black rounded-[64px] border-t-4 border-white/5 border-b-8 border-black shadow-[0_60px_120px_rgba(0,0,0,0.8)] p-12 lg:p-24 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.02),transparent)]" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 items-center">
                        <div className="space-y-12">
                            <h2 className="text-6xl lg:text-7xl font-black uppercase tracking-tighter italic leading-none text-white drop-shadow-[0_4px_0_#334155]">Forged.<br /><span className="text-blue-500">Infrastructure.</span></h2>
                            <p className="text-2xl text-slate-500 font-bold uppercase tracking-widest italic leading-relaxed">Software that feels like heavy machinery. Solid. Dependable. Built with iron.</p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { l: "Uptime", v: "100%", g: "from-blue-500" },
                                    { l: "Weight", v: "9.8g", g: "from-slate-400" }
                                ].map((s, i) => (
                                    <div key={i} className="bg-black/40 border border-white/5 p-10 rounded-[32px] shadow-inner">
                                        <div className={`text-5xl font-black bg-clip-text text-transparent bg-gradient-to-t ${s.g} to-white`}>{s.v}</div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700 mt-2">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#1A1C1E] border-t-8 border-black/40 border-b-2 border-white/10 rounded-[48px] p-12 min-h-[440px] flex flex-col justify-center relative shadow-[inset_0_10px_40px_rgba(0,0,0,1)]">
                            <div className="absolute top-10 right-10 text-white/5 font-black text-7xl select-none italic uppercase">METAL</div>
                            <div className="space-y-8 font-mono text-sm relative z-10">
                                <div className="flex gap-4 items-center bg-black/40 p-4 rounded-xl border border-white/5">
                                    <span className="text-blue-500 font-bold tracking-widest">{">"} ViCode_Console_Root:</span>
                                    <span className="text-white italic">deploy --heavy</span>
                                </div>
                                <div className="pl-6 space-y-4 opacity-50 font-bold">
                                    <p className="text-slate-400 tracking-tighter">{">"} Forging environment assets... [OK]</p>
                                    <p className="text-slate-400 tracking-tighter">{">"} Mounting steel volumes... [OK]</p>
                                    <div className="mt-6">
                                        <div className="inline-block bg-gradient-to-t from-blue-700 to-blue-500 text-white px-8 py-2.5 rounded-full font-black uppercase text-[10px] tracking-[0.3em] shadow-[0_6px_0_#1E3A8A,0_10px_20px_rgba(0,0,0,0.5)]">
                                            DONE_LOAD_UNIT_88
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industrial Footer */}
                <footer className="pt-32 pb-16 space-y-24 border-t-2 border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-20">
                        <div className="col-span-2 space-y-12 text-left">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 bg-gradient-to-br from-slate-200 to-slate-500 text-slate-900 flex items-center justify-center rounded-2xl shadow-2xl border-t-2 border-white/50 border-b-2 border-black/50">
                                    <span className="font-black text-2xl">V</span>
                                </div>
                                <span className="font-black text-3xl tracking-tighter uppercase italic text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">ViCode.STEEL</span>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-bold uppercase tracking-[0.2em] italic">
                                Foundry-grade software engineering for the 2026 digital landscape. Build it solid. 2026.
                            </p>
                        </div>
                        {[
                            { title: "Parts", links: ["Metal", "Gear", "Logic"] },
                            { title: "Service", links: ["Valve", "Core", "Pipe"] },
                            { title: "Legal", links: ["Privacy", "Policy", "Terms"] },
                            { title: "Contact", links: ["Phone", "Radio", "Signal"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-12 text-left">
                                <h5 className="text-[11px] font-black uppercase tracking-[0.6em] text-blue-500/50">
                                    {group.title}
                                </h5>
                                <ul className="space-y-6">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-xs text-slate-600 hover:text-white transition-all uppercase font-black tracking-widest">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-20 border-t-2 border-white/5 text-[10px] font-black uppercase tracking-[0.5em] text-slate-700">
                        <span className="px-10 py-5 bg-black border border-white/5 rounded-3xl shadow-inner italic">© 2026 ViCode Industrial Computing Systems. Steel_Infrastructure_Grp.</span>
                        <div className="flex gap-16 font-extrabold opacity-30">
                            <span>ASSEMBLY: 44.1A</span>
                            <span>PSI: 1200_STABLE</span>
                        </div>
                    </div>
                </footer>

                {/* Power Toggle Button - Industrial Style */}
                <div className="fixed bottom-12 right-12 z-50">
                    <button className="h-24 w-24 bg-gradient-to-b from-[#EF4444] to-[#991B1B] text-white rounded-full flex items-center justify-center shadow-[0_12px_25px_rgba(239,68,68,0.4),0_10px_0_#7F1D1D,inset_0_4px_8px_rgba(255,255,255,0.4)] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_2px_0_#7F1D1D] transition-all group border-2 border-white/10">
                        <Power className="w-12 h-12 text-white group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes shimmer {
                   0% { transform: translateX(-100%); }
                   100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                   animation: shimmer 5s infinite linear;
                }
            `}</style>
        </div>
    );
};
