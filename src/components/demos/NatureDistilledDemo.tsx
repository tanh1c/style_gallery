import { cn } from "@/lib/utils";
import {
ArrowRight,
Cpu,
Droplets,
Flower2,
Leaf,
Mountain,
Shield,
Sun,
Wind
} from "lucide-react";
import React from "react";

export const NatureDistilledDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#F5F3EF] text-[#2D2D2D] font-sans selection:bg-[#4A5D4E] selection:text-white relative h-full flex flex-col group font-jost overflow-hidden">

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
                {/* --- NATURE STYLES --- */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:italic,wght@0,400;0,700&family=Jost:wght@300;400;600;700&display=swap');
                    
                    .font-jost { font-family: 'Jost', sans-serif; }
                    .font-serif { font-family: 'Libre Baskerville', serif; }
                    
                    .nature-bg {
                        background-color: #F5F3EF;
                        background-image: url('https://www.transparenttextures.com/patterns/asfalt-dark.png');
                        background-blend-mode: soft-light;
                    }
                    
                    .stone-card {
                        background: rgba(255, 255, 255, 0.6);
                        backdrop-filter: blur(10px);
                        border: 1px solid rgba(0, 0, 0, 0.05);
                        transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
                    }
                    .stone-card:hover {
                        background: rgba(255, 255, 255, 0.9);
                        transform: translateY(-4px);
                        border-color: rgba(74, 93, 78, 0.2);
                    }

                    .distilled-cta {
                        background: #4A5D4E;
                        color: #FFFFFF;
                        padding: 1.25rem 2.5rem;
                        transition: all 0.5s ease;
                    }
                    .distilled-cta:hover {
                        background: #3A4A3E;
                        letter-spacing: 0.1em;
                    }

                    @keyframes slow-pulse {
                        0%, 100% { opacity: 0.3; transform: scale(1); }
                        50% { opacity: 0.5; transform: scale(1.02); }
                    }
                    .animate-zen {
                        animation: slow-pulse 10s ease-in-out infinite;
                    }
                `}} />

                <div className="nature-bg absolute inset-0 z-0 pointer-events-none opacity-40" />

                {/* AMBIENT OVERLAYS */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E8E6E0] to-transparent z-0 opacity-50" />

                {/* --- NAVIGATION: ZEN MINIMAL --- */}
                <nav className="flex items-center justify-between px-12 py-8 relative z-20">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border border-[#4A5D4E]/20 rounded-full">
                            <Flower2 className="w-5 h-5 text-[#4A5D4E]" />
                        </div>
                        <span className="text-xl font-bold tracking-[0.2em] uppercase text-[#4A5D4E]">ViCode_Nature</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4A5D4E]/60">
                        <a href="#" className="hover:text-[#4A5D4E] transition-colors border-b border-transparent hover:border-[#4A5D4E]/20 pb-1">Distillation</a>
                        <a href="#" className="hover:text-[#4A5D4E] transition-colors border-b border-transparent hover:border-[#4A5D4E]/20 pb-1">Essential</a>
                        <a href="#" className="hover:text-[#4A5D4E] transition-colors border-b border-transparent hover:border-[#4A5D4E]/20 pb-1">Provenance</a>
                        <button className="bg-transparent border border-[#4A5D4E]/20 px-8 py-3 rounded-full hover:bg-[#4A5D4E] hover:text-white transition-all">Begin Silence</button>
                    </div>
                </nav>

                {/* --- HERO: THE DISTILLED STATEMENT (FIT 1 SCREEN) --- */}
                <section className="h-[calc(100vh-100px)] min-h-[600px] flex flex-col items-center justify-center px-12 relative z-10 text-center space-y-16">
                    <div className="space-y-8 max-w-5xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
                        <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#4A5D4E]/40 mb-4 italic">
                            NATURAL SELECTION // v1.0
                        </div>
                        <h1 className="text-7xl lg:text-[8rem] font-serif font-light italic leading-[0.9] tracking-tight text-[#2D2D2D]">
                            Logic, <br />distilled to its <br /><span className="font-normal not-italic">essence.</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-lg text-[#4A5D4E]/60 font-medium leading-relaxed italic">
                            Infrastructure storytelling that honors the silence between the data. Premium technical logic for a more serene digital world.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-10 pt-4 animate-in fade-in slide-in-from-bottom-16 duration-[1500ms] delay-300">
                        <button className="distilled-cta text-[11px] font-bold uppercase tracking-[0.3em] flex items-center gap-3 group">
                            The Distillation Process <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </button>
                        <button className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#4A5D4E] border-b border-[#4A5D4E]/10 pb-2 hover:border-[#4A5D4E] transition-all">
                            View Provenance
                        </button>
                    </div>

                    {/* MOUSE DECORATIVE */}
                    <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-20">
                        <div className="w-[1px] h-12 bg-[#4A5D4E]" />
                        <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Stillness</span>
                    </div>
                </section>

                {/* --- ESSENTIALS: THE ZEN GRID --- */}
                <section className="py-40 px-12 relative z-10 space-y-32">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
                        <div className="w-16 h-16 bg-[#4A5D4E]/5 rounded-full flex items-center justify-center mb-4">
                            <Mountain className="w-6 h-6 text-[#4A5D4E]/40" />
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-serif italic text-[#2D2D2D]">Purity in <span className="not-italic font-bold">Infrastructure.</span></h2>
                        <p className="text-base max-w-xl font-medium text-[#4A5D4E]/50 leading-loose">
                            We believe the most powerful technical solutions are those that blend into the background. Every node is a stone in a perfectly balanced digital garden.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
                        {[
                            { t: "Atmospheric Cache", d: "Subtle, high-memory pools that store data like mountain dew.", i: Droplets, c: "text-blue-200" },
                            { t: "Erosive Flow", d: "Naturally smooth data routing that carves the shortest path to output.", i: Wind, c: "text-stone-300" },
                            { t: "Photosynthetic Logic", d: "Sustainable front-end rendering that converts user attention into efficiency.", i: Sun, c: "text-yellow-200" },
                            { t: "Root Stability", d: "Deep architecture that anchors your storytelling into permanent data soil.", i: Leaf, c: "text-green-300" },
                            { t: "Zen Compute", d: "Zero-latency decision making that operates in total internal silence.", i: Cpu, c: "text-gray-300" },
                            { t: "Sacred Security", d: "Transparent encryption that mirrors the natural laws of exclusion.", i: Shield, c: "text-stone-400" }
                        ].map((item, i) => (
                            <div key={i} className="stone-card p-16 flex flex-col gap-10 group cursor-pointer rounded-sm">
                                <div className={cn("w-12 h-12 flex items-center justify-center shrink-0 border border-[#4A5D4E]/10 rounded-full", item.c)}>
                                    <item.i className="w-6 h-6 text-[#4A5D4E]/30 group-hover:text-[#4A5D4E] transition-colors" />
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-2xl font-serif italic text-[#2D2D2D] transition-all group-hover:not-italic group-hover:font-bold">{item.t}</h4>
                                    <p className="text-base leading-relaxed text-[#4A5D4E]/50 font-medium">
                                        {item.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- PRICING: THE SILENT TIERS --- */}
                <section className="py-48 px-12 relative z-10 flex flex-col items-center gap-32">
                    <div className="flex flex-col items-center text-center gap-6">
                        <h3 className="text-6xl font-serif italic text-[#2D2D2D]">Honoring <span className="not-italic font-bold">Commitment.</span></h3>
                        <div className="h-[1px] w-24 bg-[#4A5D4E]/20" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl w-full border border-[#4A5D4E]/5">
                        {[
                            { l: "Stream", p: "0", f: ["Standard Flow", "Core Distillation", "Shared Soil"] },
                            { l: "Spring", p: "89", f: ["Full Atmospheric Access", "Unlimited Stillness", "Priority Provenance", "Mycelial Integration"], primary: true },
                            { l: "Ocean", p: "499", f: ["Global Synthesis", "Infinite Evolution", "24/7 Silent Support", "Vault Access"] }
                        ].map((item, i) => (
                            <div key={i} className={cn(
                                "p-16 flex flex-col gap-12 group transition-all duration-1000",
                                i % 2 === 0 ? "bg-white/40" : "bg-[#4A5D4E]/5 z-10 shadow-2xl shadow-[#4A5D4E]/5"
                            )}>
                                <div className="space-y-4">
                                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#4A5D4E]/40 group-hover:text-[#4A5D4E] transition-colors">{item.l}</div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-sm font-medium opacity-40">$</span>
                                        <span className="text-8xl font-jost font-light tracking-tighter text-[#2D2D2D]">{item.p}</span>
                                    </div>
                                </div>
                                <div className="space-y-8 py-16 border-y border-[#4A5D4E]/10 font-medium text-[#4A5D4E]/60 italic text-sm">
                                    {item.f.map(f => (
                                        <div key={f} className="flex items-center gap-6">
                                            <div className="w-[1px] h-4 bg-[#4A5D4E]/20" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <button className={cn(
                                    "w-full py-5 text-[10px] font-bold uppercase tracking-[0.4em] transition-all",
                                    item.primary ? "bg-[#4A5D4E] text-white shadow-xl shadow-[#4A5D4E]/20" : "bg-transparent border border-[#4A5D4E]/10 text-[#4A5D4E] hover:border-[#4A5D4E]"
                                )}>
                                    Join The Silence
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FOOTER: THE SERENE END --- */}
                <footer className="py-40 px-12 relative z-10 bg-white border-t border-[#4A5D4E]/5 flex flex-col md:flex-row justify-between items-start gap-24">
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center border border-[#4A5D4E]/10 rounded-full">
                                <Flower2 className="w-6 h-6 text-[#4A5D4E]/30" />
                            </div>
                            <span className="text-2xl font-bold tracking-[0.2em] uppercase text-[#4A5D4E]">ViCode | Nature</span>
                        </div>
                        <p className="max-w-xs text-xl font-serif italic opacity-40 leading-relaxed text-[#2D2D2D]">
                            Respecting the natural boundaries of technical speed. Designed with high-fidelity intent.
                        </p>
                        <div className="flex gap-8 text-[9px] font-bold text-[#4A5D4E]/40 uppercase tracking-[0.3em]">
                            <span>&copy; 2026</span>
                            <span className="hover:text-[#4A5D4E] cursor-pointer">Manifesto</span>
                            <span className="hover:text-[#4A5D4E] cursor-pointer">Evolution</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-32">
                        {[
                            { t: "ELEMENTS", l: ["Stone", "Water", "Air", "Light"] },
                            { t: "SYNTHESIS", l: ["Privacy", "Ethics", "Speed", "Silence"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-10">
                                <h5 className="font-bold uppercase tracking-[0.5em] text-[9px] text-[#4A5D4E]/30">{group.t}</h5>
                                <ul className="space-y-6 font-medium text-lg text-[#2D2D2D]">
                                    {group.l.map(link => (
                                        <li key={link}><a href="#" className="hover:italic hover:text-[#4A5D4E] transition-all">{link}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </footer>
            </div>
        </div>
    );
};
