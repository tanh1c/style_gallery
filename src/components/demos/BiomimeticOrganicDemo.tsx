import { cn } from "@/lib/utils";
import {
Activity,
ArrowRight,
ChevronRight,
Droplets,
Eye,
Leaf,
Share2,
ShieldCheck,
Sun
} from "lucide-react";
import React from "react";

export const BiomimeticOrganicDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#fdfcf9] text-[#2D3E3A] font-sans selection:bg-[#4CAF50] selection:text-white relative h-full flex flex-col group font-outfit overflow-hidden">

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
                {/* --- BIOMIMETIC STYLES --- */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Quicksand:wght@500;700&display=swap');
                    
                    .font-outfit { font-family: 'Outfit', sans-serif; }
                    .font-organic { font-family: 'Quicksand', sans-serif; }
                    
                    .organic-bg {
                        background: radial-gradient(circle at top right, #e8f5e9 0%, #fff 50%, #e3f2fd 100%);
                    }
                    
                    .organic-glass {
                        background: rgba(255, 255, 255, 0.4);
                        backdrop-filter: blur(20px);
                        border: 1px solid rgba(255, 255, 255, 0.6);
                        box-shadow: 0 20px 50px rgba(0, 70, 40, 0.05);
                        border-radius: 3rem;
                    }
                    
                    .blob-animated {
                        animation: morph 20s ease-in-out infinite;
                    }
                    @keyframes morph {
                        0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
                        34% { border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%; }
                        67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
                    }

                    .breathing {
                        animation: breathe 8s ease-in-out infinite;
                    }
                    @keyframes breathe {
                        0%, 100% { transform: scale(1); opacity: 0.8; }
                        50% { transform: scale(1.05); opacity: 1; }
                    }

                    .surface-tension:hover {
                        transform: translateY(-5px) scale(1.02);
                        box-shadow: 0 30px 60px rgba(76, 175, 80, 0.1);
                    }
                `}} />

                <div className="organic-bg absolute inset-0 z-0 pointer-events-none" />

                {/* FLOATING BLOBS */}
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-green-100/50 blob-animated z-0 mix-blend-multiply filter blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/50 blob-animated z-0 mix-blend-multiply filter blur-3xl opacity-50 animation-delay-2000" />

                {/* --- NAVIGATION --- */}
                <nav className="flex items-center justify-between px-10 py-6 relative z-20">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200/50">
                            <Leaf className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-outfit font-extrabold tracking-tight text-[#1a2e29]">ViCode | Bio</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-10 font-medium text-sm text-[#1a2e29]/70">
                        <a href="#" className="hover:text-[#4CAF50] transition-colors">Ecosystem</a>
                        <a href="#" className="hover:text-[#4CAF50] transition-colors">Evolution</a>
                        <a href="#" className="hover:text-[#4CAF50] transition-colors">Resources</a>
                        <button className="bg-[#1a2e29] text-white px-8 py-3 rounded-full font-bold shadow-xl shadow-gray-200/50 hover:bg-[#4CAF50] transition-all">Grow with us</button>
                    </div>
                </nav>

                {/* --- HERO: THE BREATHING INTERFACE (FIT 1 SCREEN) --- */}
                <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col items-center justify-center px-10 relative z-10 text-center space-y-12">
                    <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-[#4CAF50] text-xs font-bold uppercase tracking-widest border border-green-100 mb-4">
                            <Activity className="w-4 h-4 animate-pulse" /> SYSTEM_VITALITY: 99.8%
                        </div>
                        <h1 className="text-7xl lg:text-[8rem] font-outfit font-extrabold leading-[0.85] tracking-tight text-[#1a2e29]">
                            Engineered <br />by nature.
                        </h1>
                        <p className="max-w-xl mx-auto text-xl text-[#2D3E3A]/60 font-medium leading-relaxed">
                            Decentralized infrastructure storytelling that breathes, adapts, and evolves alongside your technical logic.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                        <button className="bg-[#4CAF50] text-white px-12 py-5 rounded-full text-lg font-bold shadow-2xl shadow-green-200 hover:scale-105 transition-transform flex items-center gap-3">
                            Begin Evolution <ChevronRight className="w-5 h-5" />
                        </button>
                        <button className="px-10 py-5 bg-white/50 backdrop-blur rounded-full font-bold border border-white hover:bg-white/80 transition-colors flex items-center gap-3 border-[#1a2e29]/10">
                            View Taxonomy
                        </button>
                    </div>

                    {/* MOUSE DECORATIVE */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-10 animate-bounce cursor-pointer flex flex-col items-center gap-2 opacity-30">
                        <div className="w-6 h-10 border-2 border-[#1a2e29] rounded-full flex justify-center p-1">
                            <div className="w-1 h-2 bg-[#1a2e29] rounded-full" />
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Flow</span>
                    </div>
                </section>

                {/* --- ECOSYSTEM: THE FLUID GRID --- */}
                <section className="py-32 px-10 relative z-10 space-y-24">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-5xl lg:text-7xl font-outfit font-extrabold tracking-tight text-[#1a2e29]">Organic Architecture.</h2>
                        <p className="text-xl max-w-2xl mx-auto font-medium text-[#2D3E3A]/50">
                            We build digital environments that respect the laws of biological efficiency: minimum effort, maximum output.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {[
                            { t: "Cellular Scale", d: "Highly modular micro-frameworks that replicate like viral success.", i: Activity, c: "bg-green-50 text-green-600" },
                            { t: "Fluid Flow", d: "Zero-latency data routing modeled after neuro-synaptic transmission.", i: Droplets, c: "bg-blue-50 text-blue-600" },
                            { t: "Photosynthetic", d: "Energy-efficient front-end rendering that saves 40% more battery life.", i: Sun, c: "bg-yellow-50 text-yellow-600" },
                            { t: "Root Security", d: "Deeply embedded cryptographic roots that protect every logic branch.", i: ShieldCheck, c: "bg-emerald-50 text-emerald-600" },
                            { t: "Mycelial Network", d: "Interconnected database systems that share data like forest networks.", i: Share2, c: "bg-teal-50 text-teal-600" },
                            { t: "Adaptive Sight", d: "Intelligent UI that morphs based on user behavior and eye movement.", i: Eye, c: "bg-indigo-50 text-indigo-600" }
                        ].map((item, i) => (
                            <div key={i} className="organic-glass p-12 flex flex-col gap-10 group cursor-pointer surface-tension transition-all duration-500">
                                <div className={cn("w-16 h-16 rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-sm", item.c)}>
                                    <item.i className="w-8 h-8" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-3xl font-outfit font-extrabold tracking-tight text-[#1a2e29]">{item.t}</h4>
                                    <p className="text-lg leading-relaxed text-[#2D3E3A]/60 font-medium">
                                        {item.d}
                                    </p>
                                </div>
                                <div className="pt-4 flex items-center gap-2 text-[#4CAF50] font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    Study Gene <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- VITALITY TIERS: THE SOFT TIERING --- */}
                <section className="py-40 px-10 relative z-10 flex flex-col items-center gap-24">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h3 className="text-5xl lg:text-7xl font-outfit font-extrabold text-[#1a2e29]">Select Vitailty Tier</h3>
                        <p className="text-sm uppercase tracking-[0.4em] font-black text-[#4CAF50]">Sprout // Sapling // Ancient</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                        {[
                            { l: "Sprout", p: "$0", f: ["Core Evolution", "1.2GB Cellular", "Basic Rooting"] },
                            { l: "Sapling", p: "$49", f: ["Unlimited Evolution", "100GB Mycelial", "Photosynthetic Support", "Deep Synthesis"], primary: true },
                            { l: "Ancient", p: "$199", f: ["Custom DNA", "Petabyte Flow", "Adaptive UI Engine", "24/7 Biologist Support"] }
                        ].map((item, i) => (
                            <div key={i} className={cn(
                                "p-12 transition-all group relative overflow-hidden",
                                "organic-glass",
                                item.primary ? "scale-105 z-10 border-[#4CAF50]/30 bg-green-50/20" : "bg-white/40"
                            )}>
                                {item.primary && (
                                    <div className="absolute top-4 right-4 bg-[#4CAF50] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase shadow-lg shadow-green-200">PEAK_VITALITY</div>
                                )}
                                <div className="space-y-2">
                                    <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#4CAF50]">{item.l}</div>
                                    <div className="text-7xl font-outfit font-bold text-[#1a2e29] tracking-tighter">{item.p}</div>
                                </div>
                                <div className="space-y-6 py-12 border-y border-[#1a2e29]/5 text-base font-semibold text-[#1a2e29]/70">
                                    {item.f.map(f => (
                                        <div key={f} className="flex items-center gap-4">
                                            <div className="w-2 h-2 bg-[#4CAF50] rounded-full shadow-sm" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <button className={cn(
                                    "w-full py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all",
                                    item.primary ? "bg-[#1a2e29] text-white shadow-2xl shadow-gray-300" : "bg-white border border-[#1a2e29]/10 text-[#1a2e29] hover:bg-[#1a2e29] hover:text-white"
                                )}>
                                    Plant Now
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FOOTER: THE EARTHY END --- */}
                <footer className="py-32 px-10 relative z-10 bg-[#1a2e29] text-white/90 flex flex-col lg:flex-row justify-between items-start gap-20 rounded-t-[4rem]">
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center text-white shadow-xl shadow-green-900/50 rotate-3">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <span className="text-3xl font-outfit font-extrabold tracking-tight">ViCode Bio</span>
                        </div>
                        <p className="max-w-sm text-xl font-medium italic opacity-60 leading-relaxed">
                            Respecting the natural laws of infrastructure. Designed to grow, meant to last.
                        </p>
                        <div className="flex gap-4">
                            {['Nature', 'Impact', 'Evolution'].map(s => (
                                <div key={s} className="px-5 py-2 border border-white/20 rounded-full text-xs font-bold hover:bg-white hover:text-[#1a2e29] transition-all cursor-pointer">{s}</div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
                        {[
                            { t: "Ecosystem", l: ["Taxonomy", "Evolution", "Gene-Pool", "Roots"] },
                            { t: "Evolution", l: ["Manifesto", "Impact", "Privacy", "Flow"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-8">
                                <h5 className="font-outfit font-black uppercase tracking-widest text-sm text-[#4CAF50]">{group.t}</h5>
                                <ul className="space-y-4 font-bold text-lg">
                                    {group.l.map(link => (
                                        <li key={link}><a href="#" className="hover:text-[#4CAF50] transition-colors">{link}</a></li>
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
