import { cn } from "@/lib/utils";
import {
Activity,
ArrowRight,
ChevronRight,
Cpu,
Play,
Shield,
Sparkles,
Wind
} from "lucide-react";
import React from "react";

export const AuroraEvolvedDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#F9FAFB] text-[#111827] font-sans selection:bg-[#4F46E5] selection:text-white relative h-full flex flex-col group font-outfit overflow-hidden">

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
                {/* --- AURORA STYLES (LIGHT MODE) --- */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Inter:wght@300;400;600;800&display=swap');
                    
                    .font-inter { font-family: 'Inter', sans-serif; }
                    .font-outfit { font-family: 'Outfit', sans-serif; }
                    
                    .aurora-blob {
                        position: absolute;
                        width: 70%;
                        height: 70%;
                        border-radius: 50%;
                        filter: blur(140px);
                        opacity: 0.25;
                        animation: aurora-float 25s infinite alternate;
                        pointer-events: none;
                        z-index: 0;
                    }

                    @keyframes aurora-float {
                        0% { transform: translate(-10%, -10%) scale(1) rotate(0deg); }
                        33% { transform: translate(15%, 5%) scale(1.2) rotate(10deg); }
                        66% { transform: translate(-5%, 15%) scale(0.8) rotate(-10deg); }
                        100% { transform: translate(-10%, -10%) scale(1) rotate(0deg); }
                    }

                    .glass-card {
                        background: rgba(255, 255, 255, 0.4);
                        backdrop-filter: blur(25px);
                        border: 1px solid rgba(255, 255, 255, 0.6);
                        box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.05);
                        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                    }
                    .glass-card:hover {
                        background: rgba(255, 255, 255, 0.7);
                        border-color: rgba(255, 255, 255, 0.9);
                        transform: translateY(-8px);
                        box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.1);
                    }

                    .vibrant-text {
                        background: linear-gradient(to right, #6366F1, #EC4899);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .orb-glow {
                        box-shadow: 0 0 50px rgba(99, 102, 241, 0.15);
                    }
                `}} />

                {/* ANIMATED LIGHT AURORA BACKGROUND */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="aurora-blob bg-blue-300 top-[-20%] left-[-10%]" />
                    <div className="aurora-blob bg-emerald-200 bottom-[-20%] right-[-10%]" style={{ animationDelay: '-5s' }} />
                    <div className="aurora-blob bg-purple-200 top-[20%] right-[-20%]" style={{ animationDelay: '-10s' }} />
                    <div className="aurora-blob bg-amber-100 bottom-[10%] left-[20%]" style={{ animationDelay: '-15s', opacity: 0.15 }} />
                </div>

                {/* --- NAVIGATION: ETHEREAL LIGHT --- */}
                <nav className="flex items-center justify-between px-10 py-10 relative z-20">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-emerald-400 rotate-12 flex items-center justify-center p-[1px] shadow-lg">
                            <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-indigo-600" />
                            </div>
                        </div>
                        <span className="text-2xl font-black tracking-tighter font-outfit uppercase">ViCode_Aurora</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-black/30">
                        <a href="#" className="hover:text-black transition-opacity">Diffusion</a>
                        <a href="#" className="hover:text-black transition-opacity">Fluid Modules</a>
                        <a href="#" className="hover:text-black transition-opacity">The Mesh</a>
                        <button className="glass-card px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white hover:border-black transition-all border-black/10 text-black">Sign In</button>
                    </div>
                </nav>

                {/* --- HERO: THE AURORA GLOW --- */}
                <section className="h-[calc(100vh-120px)] min-h-[600px] flex flex-col items-center justify-center px-10 relative z-10 text-center space-y-16">
                    <div className="space-y-6 max-w-5xl">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-card text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 border-white/80">
                            <Wind className="w-4 h-4" /> System_Diffusion_Initialized
                        </div>
                        <h1 className="text-6xl lg:text-[7.5rem] font-outfit font-black leading-[0.85] tracking-[-0.04em]">
                            Evolve the <br /> <span className="vibrant-text italic font-extrabold pb-4 block">Narrative.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-black/50 font-medium leading-relaxed font-inter">
                            Atmospheric storytelling engine, now in clear diffusion. Craft immersive SaaS journeys through ultra-soft gradients and tactile glass.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
                        <button className="bg-[#111827] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-indigo-600 transition-colors shadow-2xl shadow-black/10 flex items-center gap-4">
                            Explore Mesh <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="glass-card px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3 text-black">
                            Watch Motion <Play className="w-5 h-5 fill-black text-black" />
                        </button>
                    </div>
                </section>

                {/* --- FEATURES: GLASS GRID --- */}
                <section className="py-40 px-10 relative z-10 space-y-32">
                    <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
                        <h2 className="text-5xl lg:text-7xl font-outfit font-black tracking-tight">Fluid Infrastructure.</h2>
                        <p className="text-xl text-black/40 leading-relaxed font-inter font-medium">
                            Softened architecture that flows to match your intent. Ambient modules designed for clarity and focus.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {[
                            { t: "Dynamic Mesh", d: "Experience backgrounds that react to your storytelling pace.", i: Wind, g: "from-blue-400" },
                            { t: "Atmospheric UI", d: "Interfaces that blend seamlessly into the environment.", i: Sparkles, g: "from-amber-300" },
                            { t: "Core Logic", d: "High-level orchestration of narrative data nodes.", i: Cpu, g: "from-emerald-300" },
                            { t: "Diffusion Lock", d: "Secure encryption for fluid asset delivery.", i: Shield, g: "from-purple-400" }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-10 flex flex-col gap-10 group overflow-hidden rounded-[40px] border-white/40">
                                <div className={cn("w-16 h-16 rounded-3xl flex items-center justify-center bg-gradient-to-br transition-all duration-500 group-hover:scale-110 group-hover:rotate-6", item.g, "to-transparent opacity-40 group-hover:opacity-100 shadow-sm")}>
                                    <item.i className="w-8 h-8 text-white drop-shadow-sm" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-outfit font-bold">{item.t}</h4>
                                    <p className="text-base leading-relaxed text-black/50 font-medium font-inter">
                                        {item.d}
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 flex items-center gap-2 group-hover:gap-4 transition-all">
                                        Learn Modality <ChevronRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SHOWCASE: THE GLASS ENGINE --- */}
                <section className="py-48 px-10 relative z-10 overflow-hidden">
                    <div className="max-w-7xl mx-auto glass-card rounded-[60px] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-24 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-emerald-50/50 -z-10" />

                        <div className="lg:w-1/2 space-y-12 relative z-10">
                            <div className="space-y-6">
                                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400" />
                                <h3 className="text-5xl lg:text-7xl font-outfit font-black leading-tight">Diffused <br /> Intelligence.</h3>
                            </div>
                            <p className="text-xl text-black/50 leading-loose font-inter font-medium">
                                Our engine utilizes aurora-mapping to synchronize visual assets with technical benchmarks. Now optimized for maximum chromatic clarity.
                            </p>
                            <div className="grid grid-cols-2 gap-12 pt-8">
                                <div className="space-y-2">
                                    <div className="text-4xl font-outfit font-bold text-indigo-600">99.8%</div>
                                    <div className="text-[10px] text-black/30 font-bold uppercase tracking-[0.3em]">Diffusion Index</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-outfit font-bold text-emerald-600">0.05s</div>
                                    <div className="text-[10px] text-black/30 font-bold uppercase tracking-[0.3em]">Sync Latency</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full aspect-video bg-white/40 rounded-[40px] border border-white/60 flex items-center justify-center relative overflow-hidden group shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2000ms]"
                                alt="Aurora Texture Light"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                            <div className="absolute bottom-10 left-10 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center p-2 orb-glow">
                                    <Play className="w-4 h-4 fill-black text-black" />
                                </div>
                                <div className="space-y-1 text-black">
                                    <div className="text-sm font-bold uppercase font-outfit tracking-widest">Engine_Preview.mp4</div>
                                    <div className="text-[10px] text-black/40 font-bold uppercase tracking-widest flex items-center gap-2">
                                        <Activity className="w-3 h-3 text-indigo-600" /> Live Render
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- FOOTER: SOFT LIGHT END --- */}
                <footer className="py-40 px-10 relative z-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-start gap-32">
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg">
                                <Sparkles className="w-7 h-7 text-white" />
                            </div>
                            <span className="text-3xl font-black font-outfit tracking-tighter uppercase">ViCode_Aurora</span>
                        </div>
                        <p className="max-w-xs text-xl font-medium opacity-10 leading-relaxed font-inter uppercase tracking-tighter">
                            Fluid narratives diffused through atmospheric SaaS infrastructure.
                        </p>
                        <div className="flex gap-10 text-[10px] font-bold text-black/20 uppercase tracking-[0.4em]">
                            <span>&copy; 2026_VOID</span>
                            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Diffusion</span>
                            <span className="hover:text-indigo-600 cursor-pointer transition-colors">The Mesh</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-32 font-outfit">
                        {[
                            { t: "EVOLUTION", l: ["Mesh", "Aurora", "Fluid", "Atmosphere"] },
                            { t: "CONNECT", l: ["Laboratory", "Registry", "Documentation", "Pulse"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-10">
                                <h5 className="font-bold uppercase tracking-[0.5em] text-[10px] opacity-20">{group.t}</h5>
                                <ul className="space-y-6 font-bold text-xl tracking-tight">
                                    {group.l.map(link => (
                                        <li key={link}><a href="#" className="hover:text-indigo-600 transition-colors">{link}</a></li>
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
