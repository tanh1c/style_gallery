import { cn } from "@/lib/utils";
import {
ArrowRight,
Box,
ChevronRight,
Command,
Globe,
Layers,
Search,
Terminal,
User,
Zap
} from "lucide-react";
import React,{ useState } from "react";

export const SpatialUIDemo: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Home");

    return (
        <div className="flex-1 bg-black text-[#f5f5f7] font-sans selection:bg-white/10 selection:text-white relative h-full flex flex-col group font-inter overflow-hidden">

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
                {/* --- SPATIAL UI GLOBAL STYLES --- */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
                    
                    .font-inter { font-family: 'Inter', sans-serif; }
                    
                    @keyframes mesh-pulse {
                        0% { transform: scale(1) translate(0, 0); opacity: 0.3; }
                        50% { transform: scale(1.2) translate(5%, 5%); opacity: 0.5; }
                        100% { transform: scale(1) translate(0, 0); opacity: 0.3; }
                    }
                    @keyframes mesh-drift {
                        0% { background-position: 0% 0%; }
                        50% { background-position: 100% 100%; }
                        100% { background-position: 0% 0%; }
                    }
                    @keyframes fade-in-up {
                        from { opacity: 0; transform: translateY(40px) scale(0.95); }
                        to { opacity: 1; transform: translateY(0) scale(1); }
                    }
                    @keyframes slide-in-right {
                        from { opacity: 0; transform: translateX(60px); }
                        to { opacity: 1; transform: translateX(0); }
                    }

                    .bg-mesh-animated {
                        background: 
                            radial-gradient(at 10% 20%, rgba(200, 200, 220, 0.15) 0px, transparent 40%),
                            radial-gradient(at 90% 10%, rgba(255, 255, 255, 0.1) 0px, transparent 40%),
                            radial-gradient(at 50% 50%, rgba(100, 100, 120, 0.08) 0px, transparent 50%),
                            radial-gradient(at 20% 80%, rgba(255, 255, 255, 0.12) 0px, transparent 40%),
                            radial-gradient(at 80% 90%, rgba(150, 150, 170, 0.15) 0px, transparent 50%),
                            radial-gradient(at 50% 0%, rgba(255, 255, 255, 0.05) 0px, transparent 60%);
                        background-size: 150% 150%;
                    }
                    .mesh-orb {
                        position: absolute;
                        border-radius: 50%;
                        filter: blur(150px);
                        z-index: 0;
                        mix-blend-mode: screen;
                    }

                    .spatial-glass {
                        background: rgba(255, 255, 255, 0.04);
                        backdrop-filter: blur(40px) saturate(180%);
                        -webkit-backdrop-filter: blur(40px) saturate(180%);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        box-shadow: 
                            0 4px 12px rgba(0, 0, 0, 0.4),
                            0 16px 48px rgba(0, 0, 0, 0.6),
                            inset 0 0 0 1px rgba(255, 255, 255, 0.03);
                    }
                    .animate-hero-up { animation: fade-in-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
                    .animate-hero-right { animation: slide-in-right 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
                    .spatial-card {
                        background: rgba(255, 255, 255, 0.03);
                        backdrop-filter: blur(20px);
                        border: 1px solid rgba(255, 255, 255, 0.05);
                        transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    }
                    .depth-shadow {
                        box-shadow: 
                            0 30px 60px -12px rgba(0, 0, 0, 0.7),
                            0 18px 36px -18px rgba(0, 0, 0, 0.8),
                            inset 0 0 0 1px rgba(255, 255, 255, 0.02);
                    }
                `}} />

                {/* --- ENVIRONMENT BACKGROUND --- */}
                <div className="absolute inset-0 bg-mesh-animated z-0 pointer-events-none" />
                <div className="mesh-orb w-[900px] h-[900px] bg-white/[0.08] top-[-30%] left-[-20%]" />
                <div className="mesh-orb w-[700px] h-[700px] bg-white/[0.06] bottom-[-20%] right-[-10%] animation-delay-2000" />
                <div className="mesh-orb w-[500px] h-[500px] bg-slate-500/[0.1] top-[20%] right-[10%] animation-delay-4000" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-white/[0.1] to-transparent z-0" />

                {/* --- TOP HUD (NAV) --- */}
                <nav className="flex items-center justify-between px-12 py-3 relative z-[100] animate-hero-up animation-delay-300">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-3 spatial-glass px-4 py-1 rounded-2xl border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            <div className="w-6 h-6 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white shadow-lg">
                                <Command className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm font-bold tracking-tight text-white/90 uppercase tracking-widest text-[10px]">ViCode Vision Systems</span>
                        </div>
                    </div>

                    {/* TAB CONTROLLS */}
                    <div className="absolute left-1/2 -translate-x-1/2 spatial-glass rounded-full px-2 py-1.5 flex gap-1">
                        {["Home", "Infrastructure", "Assets", "Settings"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    activeTab === tab ? "bg-white text-indigo-950 shadow-xl" : "text-white/60 hover:text-white"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="spatial-glass w-12 h-12 rounded-full flex items-center justify-center gaze-hover">
                            <Search className="w-5 h-5" />
                        </div>
                        <div className="spatial-glass w-12 h-12 rounded-full flex items-center justify-center gaze-hover overflow-hidden">
                            <User className="w-5 h-5" />
                        </div>
                    </div>
                </nav>

                {/* --- HERO: SPATIAL WORKSPACE (FIT 1 SCREEN) --- */}
                <section className="h-[calc(100vh-60px)] min-h-[500px] px-10 pt-20 pb-4 relative z-10 shrink-0 flex items-start justify-center perspective-[2000px] overflow-hidden">

                    {/* FLOATING MAIN WINDOW */}
                    <div className="w-full max-w-6xl spatial-glass rounded-[2rem] p-10 lg:p-14 relative depth-shadow flex flex-col lg:flex-row items-center gap-16 transform transition-transform duration-1000 border-white/10 mt-0 animate-hero-up shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">

                        <div className="flex-1 space-y-6 relative z-20 animate-hero-right">
                            <div className="flex items-center gap-3 text-[10px] font-black opacity-30 tracking-[0.2em] uppercase">
                                <Terminal className="w-3.5 h-3.5" /> OS_ACTIVE_X39
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-black tracking-[-0.05em] leading-[0.95] text-white">
                                Narrate<br />
                                the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60">Space.</span>
                            </h1>
                            <p className="max-w-md text-lg text-white/50 font-medium leading-relaxed">
                                Visionary infrastructure deployments with immersive 3D telemetry. Carbon gray elegance with flowing animation.
                            </p>
                            <div className="flex items-center gap-6 pt-2">
                                <button className="h-14 px-8 bg-white text-black rounded-xl font-bold text-base shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform">
                                    Launch Workspace
                                </button>
                                <button className="h-14 px-8 spatial-glass rounded-xl font-bold text-base flex items-center gap-3 hover:bg-white/10 transition-all border-white/10">
                                    Quick Docs <ArrowRight className="w-4 h-4 opacity-40" />
                                </button>
                            </div>
                        </div>

                        {/* FLOATING SPATIAL OBJECTS (THE "PARALLAX" PART) */}
                        <div className="relative w-[350px] h-[350px] flex items-center justify-center shrink-0 animate-hero-up animation-delay-300">
                            {/* DEPTH LAYERS */}
                            <div className="absolute w-72 h-72 spatial-glass rounded-[2rem] transform -rotate-6 translate-x-[-80px] translate-y-[-40px] flex flex-col p-6 gap-4 animate-float opacity-30 border-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                </div>
                                <div className="h-full bg-white/[0.02] rounded-xl border border-white/5" />
                            </div>

                            <div className="absolute w-64 h-40 spatial-glass rounded-[1.5rem] transform rotate-3 translate-x-[100px] translate-y-[60px] p-6 depth-shadow z-30 animate-[float_6s_ease-in-out_infinite_alternate] border-white/10">
                                <div className="flex items-center gap-4 text-[10px] font-bold text-white/40">
                                    <Globe className="w-3.5 h-3.5" /> TELEMETRY_A
                                </div>
                                <div className="mt-4 text-3xl font-black text-white">0.02ms</div>
                                <p className="text-[9px] opacity-20 uppercase tracking-widest mt-2 font-black">Sync Lock Active</p>
                            </div>

                            {/* CENTRAL CORE */}
                            <div className="w-56 h-56 bg-white/[0.03] rounded-full spatial-glass flex items-center justify-center depth-shadow relative group cursor-pointer gaze-hover transition-all duration-700 z-20 overflow-hidden border-white/10">
                                <div className="absolute inset-0 aura-glow opacity-10 group-hover:opacity-30 transition-opacity" />
                                <div className="absolute inset-0 border border-white/10 rounded-full border-dashed animate-spin" />
                                <Layers className="w-20 h-20 text-white/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CORE FEATURES: SPATIAL TILES --- */}
                <section className="py-6 px-10 relative z-10 shrink-0 bg-transparent flex flex-col items-center gap-10">
                    <div className="max-w-4xl text-center space-y-3">
                        <h2 className="text-4xl lg:text-5xl font-black leading-none text-white tracking-tighter">Immersive Logic.</h2>
                        <p className="text-sm text-white/30 max-w-lg mx-auto font-medium">Interact with patterns through a spatial lens. Zero clutter, infinite depth.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
                        {[
                            { t: "Deep Analytics", d: "Observe data in three dimensions with zero-latency visual feedback.", i: Zap },
                            { t: "Spatial Sync", d: "Global infrastructure that moves as you do. Real-time world mesh.", i: Globe },
                            { t: "Core Vision", d: "Direct neural link to your deployment engine. Feel the code.", i: Box }
                        ].map((item, i) => (
                            <div key={i} className="spatial-card rounded-[2.5rem] p-12 flex flex-col gap-10 group border-white/5">
                                <div className="w-14 h-14 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center">
                                    <item.i className="w-7 h-7" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold tracking-tight text-white">{item.t}</h4>
                                    <p className="text-base text-white/30 font-medium leading-relaxed">
                                        {item.d}
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <button className="flex items-center gap-3 text-white/40 font-bold group-hover:text-white transition-colors text-sm uppercase tracking-wide">
                                        Launch Suite <ChevronRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- PRICING: FLOATING TIERS --- */}
                <section className="py-12 px-10 min-h-[600px] flex items-center justify-center shrink-0 relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full relative z-10">
                        {[
                            { l: "Personal", p: "$0", f: ["Spatial Access", "Standard Sync"], b: "FREE_TIER" },
                            { l: "Visionary", p: "$49", f: ["Advanced Depth", "Real-time Mesh", "Priority Gaze"], b: "UPGRADE_NOW", primary: true },
                            { l: "Enterprise", p: "$199", f: ["Custom Environments", "Neural Support", "Unlimited Vision"], b: "CONTACT_SALES" }
                        ].map((item, i) => (
                            <div key={i} className={cn(
                                "spatial-card rounded-[3.5rem] p-12 text-center flex flex-col gap-6 depth-shadow",
                                item.primary ? "bg-white/10 border-white/40 border-2" : ""
                            )}>
                                <div className="space-y-2">
                                    <div className="text-white/40 font-bold text-xs uppercase tracking-widest">{item.l}</div>
                                    <div className="text-6xl font-black">{item.p}</div>
                                </div>
                                <div className="space-y-4 py-6 border-y border-white/10 text-white/60 font-medium">
                                    {item.f.map(f => <div key={f}>{f}</div>)}
                                </div>
                                <button className={cn(
                                    "h-16 w-full rounded-2xl font-bold transition-all gaze-hover",
                                    item.primary ? "bg-white text-indigo-950" : "spatial-glass"
                                )}>
                                    {item.b}
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FOOTER: SPATIAL BOTTOM --- */}
                <footer className="py-16 px-20 relative z-10 shrink-0 flex flex-col lg:flex-row justify-between items-center gap-10 border-t border-white/5">
                    <div className="space-y-6 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <div className="w-12 h-12 spatial-glass rounded-2xl flex items-center justify-center">
                                <Command className="w-7 h-7" />
                            </div>
                            <h4 className="text-3xl font-black tracking-tighter">ViCode OS</h4>
                        </div>
                        <p className="text-white/30 font-medium max-w-xs">Building the spatial computing layer for tomorrow's infrastructure.</p>
                    </div>

                    <div className="flex gap-20 text-sm font-bold opacity-60">
                        <div className="flex flex-col gap-4">
                            <span className="text-white uppercase tracking-widest text-[10px]">Ecosystem</span>
                            <a href="#" className="hover:opacity-100">Gallery</a>
                            <a href="#" className="hover:opacity-100">Demos</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-white uppercase tracking-widest text-[10px]">Legal</span>
                            <a href="#" className="hover:opacity-100">Privacy</a>
                            <a href="#" className="hover:opacity-100">Terms</a>
                        </div>
                    </div>

                    <div className="spatial-glass px-6 py-4 rounded-3xl text-xs font-bold depth-shadow">
                        © 2026 ViCode Vision. Released to Spatial Web.
                    </div>
                </footer>
            </div>
        </div>
    );
};
