import { cn } from "@/lib/utils";
import {
ArrowUpRight,
Cpu,
Fingerprint,
Layers,
Layout,
Shapes,
Touchpad,
Zap
} from "lucide-react";
import React from "react";

export const TactileDigitalDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#F8F9FE] text-[#1A1A1A] font-sans selection:bg-[#6366F1] selection:text-white relative h-full flex flex-col group font-outfit overflow-hidden">

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
                {/* --- TACTILE STYLES --- */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap');
                    
                    .font-outfit { font-family: 'Outfit', sans-serif; }
                    
                    .tactile-bg {
                        background: radial-gradient(circle at 50% 50%, #fdfdff 0%, #f0f2ff 100%);
                    }
                    
                    .squishy-shadow {
                        box-shadow: 
                            8px 8px 16px rgba(163, 177, 198, 0.4),
                            -8px -8px 16px rgba(255, 255, 255, 0.8),
                            inset 0px 0px 0px rgba(0,0,0,0);
                        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    }
                    .squishy-shadow:hover {
                        transform: scale(1.05) translateY(-5px);
                        box-shadow: 
                            12px 12px 24px rgba(163, 177, 198, 0.5),
                            -12px -12px 24px rgba(255, 255, 255, 0.9);
                    }
                    .squishy-shadow:active {
                        transform: scale(0.95);
                        box-shadow: 
                            inset 4px 4px 8px rgba(163, 177, 198, 0.4),
                            inset -4px -4px 8px rgba(255, 255, 255, 0.8);
                    }

                    .liquid-glass {
                        background: rgba(255, 255, 255, 0.2);
                        backdrop-filter: blur(12px);
                        border: 1px solid rgba(255, 255, 255, 0.4);
                        border-radius: 2rem;
                    }

                    .deformable-orb {
                        width: 400px;
                        height: 400px;
                        background: linear-gradient(135deg, #6366F1 0%, #A855F7 100%);
                        filter: blur(60px);
                        border-radius: 50%;
                        animation: deform 10s ease-in-out infinite;
                    }

                    @keyframes deform {
                        0%, 100% { transform: scale(1) translate(0,0); border-radius: 50%; }
                        25% { transform: scale(1.1, 0.9) translate(20px, -20px); border-radius: 40% 60% 70% 30%; }
                        50% { transform: scale(0.9, 1.1) translate(-20px, 20px); border-radius: 70% 30% 50% 50%; }
                        75% { transform: scale(1.05, 0.95) translate(10px, 10px); border-radius: 30% 70% 40% 60%; }
                    }

                    .floating {
                        animation: floating 6s ease-in-out infinite;
                    }
                    @keyframes floating {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                    }
                `}} />

                <div className="tactile-bg absolute inset-0 z-0 pointer-events-none" />

                {/* DEFORMABLE BACKGROUND ELEMENTS */}
                <div className="absolute top-20 left-[-10%] z-0 opacity-20 deformable-orb" />
                <div className="absolute bottom-20 right-[-10%] z-0 opacity-20 deformable-orb" style={{ background: 'linear-gradient(135deg, #22D3EE 0%, #6366F1 100%)', animationDelay: '5s' }} />

                {/* --- NAVIGATION: NEOMORPHIC --- */}
                <nav className="flex items-center justify-between px-10 py-6 relative z-20">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-2xl squishy-shadow bg-[#F0F2FF] flex items-center justify-center text-[#6366F1]">
                            <Shapes className="w-6 h-6 animate-pulse" />
                        </div>
                        <span className="text-2xl font-outfit font-extrabold tracking-tight">ViCode.touch</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-4">
                        {['Surface', 'Layers', 'Interaction'].map(item => (
                            <a key={item} href="#" className="px-6 py-2 rounded-xl hover:bg-white/50 transition-all text-sm font-semibold opacity-60 hover:opacity-100 hover:shadow-sm">
                                {item}
                            </a>
                        ))}
                        <button className="ml-4 bg-[#6366F1] text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:scale-105 transition-transform">
                            Press_To_Start
                        </button>
                    </div>
                </nav>

                {/* --- HERO: THE DEFORMABLE CANVAS (FIT 1 SCREEN) --- */}
                <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col items-center justify-center px-10 relative z-10 text-center space-y-12">
                    <div className="space-y-6 max-w-4xl relative">
                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-500/10 filter blur-3xl animate-pulse" />
                        <h1 className="text-7xl lg:text-[8.5rem] font-outfit font-extrabold leading-[0.85] tracking-tight text-[#1A1A1A]">
                            Interface <br />With <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6366F1] to-[#D946EF]">Friction.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-gray-500 font-medium leading-relaxed">
                            Decentralized infrastructure as a tactile experience. Squishy components, 3D layering, and UI that deforms to your every touch.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
                        <div className="p-1 group">
                            <button className="squishy-shadow bg-white px-12 py-6 rounded-3xl text-lg font-bold flex items-center gap-4 text-[#6366F1]">
                                Get Your Hands On <Fingerprint className="w-6 h-6" />
                            </button>
                        </div>
                        <button className="flex items-center gap-2 font-bold text-gray-400 hover:text-[#6366F1] transition-colors group">
                            Explore Density <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>

                    {/* INTERACTIVE COMPONENT BOX */}
                    <div className="absolute right-10 bottom-10 w-64 h-64 liquid-glass squishy-shadow flex flex-col items-center justify-center gap-6 p-8 border-white/50 floating">
                        <div className="w-16 h-1 bg-white/50 rounded-full" />
                        <div className="grid grid-cols-2 gap-4 w-full">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="aspect-square rounded-xl bg-white/20 border border-white/30 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- FEATURES: THE 3D INTERACTION --- */}
                <section className="py-32 px-10 relative z-10 space-y-24">
                    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-1 bg-[#6366F1] rounded-full" />
                            <h2 className="text-5xl lg:text-7xl font-outfit font-extrabold tracking-tight">Tactile_Nodes</h2>
                        </div>
                        <p className="text-xl max-w-sm font-medium text-gray-400">
                            Each component has physical mass and reactive properties coded into its digital DNA.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {[
                            { t: "Elastic Scaling", d: "Infrastructure that stretches and contracts based on real-time traffic flux.", i: Zap, c: "bg-indigo-50 text-indigo-500" },
                            { t: "Deep Layering", d: "Logic separated by 3D focal depths for unparalleled cognitive focus.", i: Layers, c: "bg-purple-50 text-purple-500" },
                            { t: "Pressure Sensing", d: "Prioritizing critical data streams through interactive density mapping.", i: Fingerprint, c: "bg-pink-50 text-pink-500" },
                            { t: "Liquid UI", d: "Fluid layouts that morph gracefully between all screen orientations.", i: Layout, c: "bg-cyan-50 text-cyan-500" },
                            { t: "Tactile Feed", d: "Visual haptics through micro-bounce and digital friction effects.", i: Touchpad, c: "bg-blue-50 text-blue-500" },
                            { t: "Synapse Logic", d: "Rapid neural routing with instantaneous tactile feedback states.", i: Cpu, c: "bg-emerald-50 text-emerald-500" }
                        ].map((item, i) => (
                            <div key={i} className={cn(
                                "squishy-shadow bg-white p-12 flex flex-col gap-10 cursor-pointer group rounded-[2.5rem]"
                            )}>
                                <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-inner", item.c)}>
                                    <item.i className="w-10 h-10 group-hover:scale-125 transition-transform" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-3xl font-outfit font-extrabold tracking-tight">{item.t}</h4>
                                    <p className="text-lg leading-relaxed text-gray-500 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                                        {item.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- PRICING: THE MATTE TIERS --- */}
                <section className="py-40 px-10 relative z-10 flex flex-col items-center gap-24">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <h3 className="text-5xl lg:text-7xl font-outfit font-extrabold">Volume_Access</h3>
                        <div className="h-1.5 w-32 bg-indigo-100 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
                        {[
                            { l: "Light", p: "$0", f: ["Standard Feedback", "3 Layer Access", "Community Surface"] },
                            { l: "Solid", p: "$48", f: ["Elastic Scaling", "Full Layer Depth", "Priority Haptics", "Custom Orbs"], primary: true },
                            { l: "Dense", p: "$192", f: ["Real-time Deformation", "Physical Logic Sync", "24/7 Kinetic Support"] }
                        ].map((item, i) => (
                            <div key={i} className={cn(
                                "squishy-shadow p-12 flex flex-col gap-10 relative overflow-hidden transition-all duration-500 rounded-[3rem]",
                                item.primary ? "bg-white scale-105 z-10 ring-4 ring-indigo-50" : "bg-[#F0F2FF]/50"
                            )}>
                                {item.primary && (
                                    <div className="absolute top-6 right-6 bg-indigo-500 text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-200">MOST_FLUID</div>
                                )}
                                <div className="space-y-2">
                                    <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#6366F1]">{item.l}</div>
                                    <div className="text-8xl font-outfit font-extrabold tracking-tighter italic">{item.p}</div>
                                </div>
                                <div className="space-y-6 py-12 border-y border-indigo-100/50 font-bold text-gray-500">
                                    {item.f.map(f => (
                                        <div key={f} className="flex items-center gap-4">
                                            <div className="w-2.5 h-2.5 bg-[#6366F1] rounded-full" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <button className={cn(
                                    "w-full py-6 rounded-3xl font-bold text-sm uppercase tracking-widest transition-all",
                                    item.primary ? "bg-[#6366F1] text-white shadow-xl shadow-indigo-200" : "bg-white border-2 border-indigo-100 text-[#6366F1] hover:bg-[#6366F1] hover:text-white hover:border-transparent"
                                )}>
                                    Select Tier
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FOOTER: THE SOFT ENDING --- */}
                <footer className="py-32 px-10 relative z-10 bg-white border-t border-indigo-50 flex flex-col lg:flex-row justify-between items-start gap-20">
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-[1.5rem] squishy-shadow bg-[#F0F2FF] flex items-center justify-center text-[#6366F1]">
                                <Shapes className="w-10 h-10" />
                            </div>
                            <span className="text-4xl font-outfit font-extrabold tracking-tight">ViCode.</span>
                        </div>
                        <p className="max-w-md text-2xl font-medium text-gray-400 leading-relaxed italic">
                            Re-imaging the digital experience through the lens of physical mass and tactile feedback.
                        </p>
                        <div className="flex gap-4">
                            {['Surface', 'Layers', 'Interaction'].map(s => (
                                <button key={s} className="px-6 py-2 rounded-xl bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors">{s}</button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-24">
                        {[
                            { t: "SURFACE", l: ["Skin", "Texture", "Friction", "Depth"] },
                            { t: "CORE", l: ["Manifesto", "Labs", "Elasticity", "Sync"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-8">
                                <h5 className="font-outfit font-black uppercase tracking-[0.3em] text-sm text-[#6366F1]">{group.t}</h5>
                                <ul className="space-y-4 font-bold text-xl text-gray-800">
                                    {group.l.map(link => (
                                        <li key={link}><a href="#" className="hover:text-[#6366F1] transition-colors">{link}</a></li>
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
