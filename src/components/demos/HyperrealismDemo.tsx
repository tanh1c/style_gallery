import { Button } from "@/components/ui/button";
import { ArrowRight,Box,Code,Cpu,Globe,Layers,Shield,Terminal,Zap } from "lucide-react";
import React from "react";

export const HyperrealismDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#050505] overflow-y-auto text-white font-sans selection:bg-cyan-500/30 pb-32">
            {/* Immersive Studio Environment */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#22d3ee]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[60%] bg-[#6366f1]/5 blur-[140px] rounded-full" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent)]" />
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10 px-6 lg:px-12 py-8 space-y-24">
                {/* High-Gloss Meta Header */}
                <header className="h-16 px-8 flex items-center justify-between bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[28px] sticky top-4 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] ring-1 ring-white/5">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-9 h-9 bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-transform group-hover:rotate-12">
                            <Code className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">ViCode.</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                        {["Engine", "Global", "Pricing"].map(item => (
                            <a key={item} href="#" className="hover:text-white transition-all transform hover:scale-105">{item}</a>
                        ))}
                    </nav>
                    <button className="bg-white text-black px-7 py-2 text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-cyan-500 hover:text-white transition-all shadow-[0_10px_20px_rgba(255,255,255,0.1)] active:scale-95">
                        Console
                    </button>
                </header>

                {/* Cinematic Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-8">
                    <div className="space-y-10 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-xl ring-1 ring-white/5">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,1)]" />
                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Next-Gen SaaS Infrastructure</span>
                        </div>
                        <h1 className="text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight text-white py-2">
                            Compute with <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-cyan-500 underline decoration-cyan-500/20 underline-offset-8">Physicality.</span>
                        </h1>
                        <p className="text-xl text-white/40 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium tracking-tight">
                            Experience SaaS that feels tangible. High-depth engineering tools for the 2026 developer. Built for speed, sculpted for the eye.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 pt-4">
                            <Button className="h-14 px-10 bg-white text-black hover:bg-cyan-500 hover:text-white rounded-[18px] text-[11px] font-bold uppercase tracking-[0.2em] gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all transform hover:-translate-y-1">
                                Launch Alpha
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" className="h-14 px-8 border border-white/10 bg-white/5 text-white/40 hover:text-white rounded-[18px] text-[11px] font-bold uppercase tracking-[0.2em] transition-all shadow-inner">
                                Documentation
                            </Button>
                        </div>
                    </div>

                    <div className="relative group perspective-[1000px]">
                        {/* Hyper-realistic 3D Asset Container */}
                        <div className="w-full aspect-square bg-gradient-to-br from-white/5 to-transparent rounded-[60px] p-1 flex items-center justify-center shadow-[0_50px_100px_rgba(0,0,0,0.6)] group-hover:rotate-y-6 group-hover:rotate-x-3 transition-transform duration-1000 ring-1 ring-white/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.1),transparent)]" />
                            <img
                                src="/vicode_hyperreal_server.png"
                                alt="ViCode 3D Server"
                                className="w-[90%] h-[90%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-10 transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Floating Meta Data Badge */}
                            <div className="absolute bottom-12 right-12 p-5 bg-white/[0.03] backdrop-blur-3xl border border-white/20 rounded-[28px] shadow-2xl z-20 space-y-1.5 animate-float transform group-hover:translate-z-20">
                                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">System Load</div>
                                <div className="text-2xl font-bold tracking-tighter">0.24ms</div>
                            </div>
                        </div>

                        {/* Visual Glows behind the object */}
                        <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px] rounded-full -z-10 group-hover:bg-cyan-500/20 transition-colors" />
                    </div>
                </section>

                {/* High-Depth Feature Grid (6 Items) */}
                <section className="space-y-16 py-12">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 italic">Hyper-Engineering</h2>
                        <div className="w-16 h-1 bg-white/5 rounded-full shadow-inner" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: Zap, title: "Velocity Engine", desc: "Low-latency distribution optimized for peak 2026 workloads." },
                            { icon: Shield, title: "Vault Architecture", desc: "Security as solid as the hardware it runs on. Deep encryption." },
                            { icon: Globe, title: "Planetary Mesh", desc: "Connect across a global surface with near-zero friction." },
                            { icon: Box, title: "Solid Compute", desc: "Dedicated physical node clustering for extreme stability." },
                            { icon: Cpu, title: "Neural Logic", desc: "AI-integrated deployment logic that adapts to load real-time." },
                            { icon: Layers, title: "Meta States", desc: "Infinite regional synchronization across the global sphere." }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white/[0.02] p-10 rounded-[44px] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] space-y-8 hover:bg-white/[0.04] hover:-translate-y-3 transition-all group ring-1 ring-white/5">
                                <div className="w-16 h-16 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[22px] flex items-center justify-center shadow-xl group-hover:border-cyan-500/30 transition-colors">
                                    <feature.icon className="w-8 h-8 text-white/30 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
                                <p className="text-sm text-white/30 leading-relaxed font-medium uppercase tracking-tight">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Detailed Surface Section: Analytics */}
                <section className="bg-gradient-to-br from-white/[0.03] to-transparent rounded-[60px] border border-white/10 p-12 lg:p-20 shadow-[0_60px_120px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
                        <div className="space-y-12">
                            <h3 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[0.9]">Precision<br /><span className="text-white/20 italic">Sculpted.</span></h3>
                            <p className="text-lg text-white/40 leading-relaxed uppercase tracking-widest font-bold">ViCode provides the structure you need without the noise. Experience infrastructure that feels solid under your fingers.</p>
                            <div className="grid grid-cols-2 gap-10">
                                {[
                                    { l: "Uptime", v: "100%", c: "text-green-400" },
                                    { l: "Latency", v: "0.2s", c: "text-cyan-400" },
                                    { l: "Security", v: "A++", c: "text-purple-400" },
                                    { l: "Nodes", v: "4K+", c: "text-blue-400" }
                                ].map((s, i) => (
                                    <div key={i} className="p-6 bg-white/[0.02] border border-white/10 rounded-[24px] shadow-lg">
                                        <div className={`text-4xl font-bold tracking-tighter ${s.c}`}>{s.v}</div>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mt-1">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#080808] border border-white/10 rounded-[48px] p-10 shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col justify-center min-h-[440px]">
                            <div className="absolute inset-0 opacity-5 pointer-events-none">
                                <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                            </div>
                            <div className="space-y-8 relative z-10">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400/50 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/50 shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                                    <div className="w-3 h-3 rounded-full bg-green-400/50 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                                </div>
                                <div className="space-y-4 font-mono text-sm leading-relaxed">
                                    <p className="text-white/20">// initialize_physical_workspace</p>
                                    <p className="text-cyan-400 font-bold">$ vicode construct --mesh global</p>
                                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                        <div className="h-full w-[85%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                                    </div>
                                    <p className="text-white/60">Sculpting nodes... DONE</p>
                                    <p className="inline-block bg-white text-black px-4 py-1.5 font-bold uppercase text-[10px] shadow-[4px_4px_0_rgba(34,211,238,0.5)]">✓ System_Active_Region_Alpha</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hyper-Footer */}
                <footer className="pt-24 pb-16 space-y-20 border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-16">
                        <div className="col-span-2 space-y-10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-2xl shadow-xl">
                                    <span className="font-black text-2xl tracking-tighter">V</span>
                                </div>
                                <span className="font-bold text-2xl tracking-tighter">ViCode.</span>
                            </div>
                            <p className="text-[12px] text-white/30 leading-relaxed font-bold uppercase tracking-[0.2em] max-w-xs">
                                The premium engineering experience. Built with depth, designed for 2026.
                            </p>
                        </div>
                        {[
                            { title: "Network", links: ["Engine", "Latency", "Edge", "Sync"] },
                            { title: "Portal", links: ["Console", "Docs", "Status"] },
                            { title: "Group", links: ["Vision", "News", "Legal"] },
                            { title: "Connect", links: ["Twitter", "Github", "Discord"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-8">
                                <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">
                                    {group.title}
                                </h5>
                                <ul className="space-y-5">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-[11px] text-white/30 hover:text-white transition-colors uppercase font-bold tracking-widest">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                        <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl shadow-xl">© 2026 ViCode Hyper Engineering Group.</span>
                        <div className="flex gap-12 items-center italic">
                            <span>Ref: VX-824/STABLE</span>
                            <span>Region: Global_Edge</span>
                        </div>
                    </div>
                </footer>

                {/* Floating Action Component */}
                <div className="fixed bottom-10 left-[calc(320px+((100vw-320px)/2))] -translate-x-1/2 flex items-center gap-8 px-8 py-5 bg-[#0a0a0c]/80 backdrop-blur-3xl border border-white/20 rounded-[32px] shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] z-50 hover:bg-[#0a0a0c] transition-all">
                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-[14px] bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                            <Terminal className="w-5 h-5 text-white" />
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">ViCode Console</span>
                            <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em]">Stable Connection</span>
                        </div>
                    </div>
                    <Button className="bg-white text-black px-10 h-14 text-[11px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-cyan-500 hover:text-white transition-all shadow-xl">
                        Sync_Alpha
                    </Button>
                </div>
            </div>
        </div>
    );
};
