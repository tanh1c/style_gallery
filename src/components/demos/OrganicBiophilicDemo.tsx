import { cn } from "@/lib/utils";
import {
Activity,
ArrowUpRight,
CheckCircle2,
Command,
Flower2,
Github,
Globe,
Layers,
Leaf,
ShieldCheck,
Sun,
Wind
} from "lucide-react";
import React from "react";

export const OrganicBiophilicDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#fdfaf5] text-[#344e41] font-sans selection:bg-[#a3b18a] selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col p-6 space-y-16 pt-4">

            {/* --- ORGANIC BLOB DECORATIONS --- */}
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#dad7cd]/40 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#a3b18a]/20 rounded-full blur-[100px] pointer-events-none -z-10" />

            {/* --- BIOPHILIC NAV: BREATHABLE FLOATING BAR --- */}
            <nav className="flex items-center justify-between px-8 py-4 bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[40px] shadow-[0_10px_40px_rgba(52,78,65,0.05)] sticky top-4 z-50 mx-2 transition-all hover:bg-white/60">
                <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-[#344e41] rounded-[18px] flex items-center justify-center text-[#fdfaf5] shadow-lg shadow-[#344e41]/20">
                        <Leaf className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-[#344e41]">ViCode_Nature</span>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.15em] text-[#344e41]/60">
                    {["Ecosystem", "Growth", "Roots", "Harvest"].map((tab) => (
                        <a key={tab} href="#" className="hover:text-[#344e41] transition-colors relative group">
                            {tab}
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#344e41] rounded-full group-hover:w-full transition-all duration-500" />
                        </a>
                    ))}
                </div>

                <button className="h-12 px-8 bg-[#a3b18a] text-white font-bold uppercase tracking-widest text-[10px] rounded-full shadow-lg shadow-[#a3b18a]/30 hover:bg-[#344e41] hover:-translate-y-1 transition-all active:scale-95">
                    Start_Cultivating
                </button>
            </nav>

            {/* --- BIOPHILIC HERO: SUSTAINABLE SYMBIOSIS (FIT VIEWPORT) --- */}
            <section className="min-h-[85vh] flex flex-col lg:flex-row items-center gap-12 relative z-10 shrink-0">
                <div className="flex-1 space-y-10 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#dad7cd]/50 border border-white/50 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#344e41]/70">
                        <Sun className="w-4 h-4 text-[#e9c46a]" /> CLIMATE_NEUTRAL_INFRASTRUCTURE
                    </div>

                    <h1 className="text-7xl lg:text-[6.5rem] font-bold tracking-tight leading-[0.9] text-[#344e41] drop-shadow-sm">
                        Code that <br /> <span className="text-[#588157] italic">Breathes</span> Life.
                    </h1>

                    <p className="text-xl font-medium text-[#344e41]/70 max-w-xl leading-relaxed">
                        Experience a SaaS ecosystem modeled after nature's most efficient systems. Resilience, growth, and sustainability woven into every line of code.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                        <button className="h-18 px-12 bg-[#344e41] text-white font-bold uppercase tracking-widest text-[11px] rounded-[30px] shadow-2xl shadow-[#344e41]/20 hover:bg-[#588157] hover:-translate-y-2 transition-all flex items-center justify-center gap-4">
                            Plant_Project <ArrowUpRight className="w-5 h-5" />
                        </button>
                        <button className="h-18 px-12 bg-white/60 backdrop-blur-lg border-2 border-[#dad7cd] text-[#344e41] font-bold uppercase tracking-widest text-[11px] rounded-[30px] hover:bg-white hover:border-[#a3b18a] transition-all flex items-center justify-center gap-4">
                            Our_Roots <Wind className="w-5 h-5" />
                        </button>
                    </div>

                    {/* GROWTH STATS */}
                    <div className="flex items-center justify-center lg:justify-start gap-12 pt-8">
                        <div>
                            <div className="text-3xl font-bold text-[#344e41]">100%</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-[#a3b18a]">Renewable_Energy</div>
                        </div>
                        <div className="w-px h-10 bg-[#dad7cd]" />
                        <div>
                            <div className="text-3xl font-bold text-[#344e41]">0.0kg</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-[#a3b18a]">Carbon_Footprint</div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative shrink-0 w-full group">
                    {/* ORGANIC FRAME */}
                    <div className="relative w-full aspect-[5/4] rounded-[80px_40px_100px_40px] p-4 bg-white border-8 border-[#dad7cd]/20 shadow-2xl overflow-hidden group-hover:rotate-1 transition-transform duration-1000">
                        <img
                            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200"
                            alt="Biophilic Architecture"
                            className="w-full h-full object-cover rounded-[60px_30px_80px_30px] opacity-90 transition-transform duration-[4s] group-hover:scale-110"
                        />
                        {/* BOTANICAL OVERLAY */}
                        <div className="absolute inset-x-12 bottom-12 p-8 bg-white/80 backdrop-blur-xl rounded-[40px] border border-white/50 space-y-4 shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[#588157]/10 rounded-2xl text-[#588157]">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-[#344e41]">Pulse_Vitality: OPTIMAL</div>
                                    <div className="text-[10px] font-bold text-[#a3b18a] uppercase tracking-widest">Ecosystem_Synced</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ACCENT ELEMENTS */}
                    <Flower2 className="absolute -top-8 -right-8 w-24 h-24 text-[#dad7cd] opacity-40 animate-spin-slow" />
                    <Leaf className="absolute -bottom-8 -left-8 w-16 h-16 text-[#a3b18a] opacity-30 animate-bounce" style={{ animationDuration: '6s' }} />
                </div>
            </section>

            {/* --- ECO-LOGOS: HARMONIOUS GRID --- */}
            <div className="py-20 bg-white/30 rounded-[60px] flex flex-col items-center gap-12 shrink-0 border border-white/50 mx-2">
                <span className="text-[10px] font-bold text-[#a3b18a] uppercase tracking-[0.6em]">Stewards_of_the_Modern_Web</span>
                <div className="flex flex-wrap justify-center gap-16 lg:gap-32 items-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Github className="w-9 h-9" />
                    <Layers className="w-9 h-9" />
                    <Globe className="w-9 h-9" />
                    <ShieldCheck className="w-9 h-9" />
                    <Command className="w-9 h-9" />
                </div>
            </div>

            {/* --- BOTANICAL FEATURES: ECO-PODS --- */}
            <section className="space-y-20 px-2 shrink-0 pb-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-5xl font-bold tracking-tight text-[#344e41] drop-shadow-sm">Naturally Built Systems.</h2>
                    <p className="text-[#a3b18a] font-bold uppercase tracking-widest text-[11px]">Resilience_Is_Inherited_Not_Implemented</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { t: "Mycelial_Sync", d: "A decentralized logic web that distributes compute load much like a forest nutrient network.", i: Layers, c: "bg-white" },
                        { t: "Solar_Compute", d: "Zero-emissions execution powered entirely by renewable off-grid infrastructures.", i: Sun, c: "bg-[#a3b18a]/10" },
                        { t: "Deep_Root_Security", d: "Multi-layered encryption anchored in physical HSM cores, providing unbreakable stability.", i: ShieldCheck, c: "bg-white" }
                    ].map((item, i) => (
                        <div key={i} className={cn(
                            "relative p-12 rounded-[60px] border border-[#dad7cd] transition-all hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#344e41]/10 flex flex-col items-center text-center space-y-8",
                            item.c
                        )}>
                            <div className="w-20 h-20 bg-white rounded-[30px] flex items-center justify-center text-[#588157] shadow-inner shadow-[#344e41]/5 border border-[#dad7cd]">
                                <item.i className="w-10 h-10" />
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-3xl font-bold text-[#344e41] tracking-tight">{item.t}</h4>
                                <p className="text-sm font-medium text-[#344e41]/60 leading-relaxed">
                                    {item.d}
                                </p>
                            </div>
                            <div className="pt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#a3b18a]">
                                explore_roots <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- GROWTH PRICING: TERRA COTTA CARD --- */}
            <section className="bg-[#344e41] rounded-[80px_40px_80px_40px] p-12 lg:p-24 text-white mx-2 relative overflow-hidden shadow-2xl shrink-0">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(163,177,138,0.2),transparent_70%)]" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div className="space-y-10">
                        <Leaf className="w-16 h-16 text-[#a3b18a] opacity-50" />
                        <h2 className="text-6xl lg:text-7xl font-bold tracking-tight leading-none">Sustainability <br /> meets Scale.</h2>
                        <p className="text-[#dad7cd] text-xl font-medium leading-relaxed max-w-lg">
                            We don't just sell compute. We sell the future. Support our reforestation initiatives with every node you deploy.
                        </p>
                        <div className="flex gap-16">
                            <div className="space-y-2">
                                <div className="text-5xl font-bold tracking-tight">$0.00</div>
                                <div className="text-[11px] font-bold uppercase tracking-widest text-[#a3b18a]">Entry_Sapling_Tier</div>
                            </div>
                            <div className="space-y-2 border-l border-white/20 pl-16">
                                <div className="text-3xl font-bold tracking-tight">Forest-Scale</div>
                                <div className="text-[11px] font-bold uppercase tracking-widest text-[#a3b18a]">Enterprise_Uplink</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-[#344e41] p-12 lg:p-16 rounded-[60px] space-y-12 shadow-2xl">
                        <div className="space-y-8">
                            {[
                                "Carbon-Neutral API Channels",
                                "Organic Data Redundancy",
                                "Symbiotic Node Distribution",
                                "100% Recyclable Hardware"
                            ].map(f => (
                                <div key={f} className="flex items-center gap-6 group cursor-default">
                                    <div className="w-7 h-7 bg-[#a3b18a]/10 rounded-full flex items-center justify-center text-[#588157] group-hover:bg-[#588157] group-hover:text-white transition-all">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-bold tracking-tight">{f}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full h-20 bg-[#344e41] text-white font-bold uppercase tracking-[0.2em] text-[13px] rounded-[40px] hover:bg-[#588157] hover:-translate-y-2 transition-all flex items-center justify-center gap-6 group">
                            JOIN_THE_CLUSTERS <ArrowUpRight className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* --- BOTANICAL FOOTER: LOGOFF --- */}
            <footer className="py-24 bg-[#fdfaf5] border-t border-[#dad7cd] flex flex-col items-center gap-20 shrink-0 relative overflow-hidden">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-12 gap-16 relative z-10">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-[#344e41] text-white rounded-[24px] flex items-center justify-center shadow-xl">
                            <Leaf className="w-8 h-8" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-3xl font-bold tracking-tight text-[#344e41]">ViCode_Nature</h4>
                            <p className="text-[10px] font-bold text-[#a3b18a] uppercase tracking-widest">Architected_Symbiotically_©2026</p>
                        </div>
                    </div>
                    <div className="flex gap-12 text-[11px] font-bold uppercase tracking-widest text-[#344e41]/50">
                        <a href="#" className="hover:text-[#344e41] transition-colors">Ecosystem_Map</a>
                        <a href="#" className="hover:text-[#344e41] transition-colors">Compliance</a>
                        <a href="#" className="hover:text-[#344e41] transition-colors">Sustainability</a>
                        <a href="#" className="hover:text-[#344e41] transition-colors">Archive</a>
                    </div>
                </div>
                <div className="text-9xl font-bold text-[#344e41]/5 pointer-events-none select-none italic tracking-tighter">
                    NATURALLY_OPTIMIZED
                </div>
            </footer>
        </div>
    );
};
