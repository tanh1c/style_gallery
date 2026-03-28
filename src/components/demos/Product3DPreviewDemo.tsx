import { cn } from "@/lib/utils";
import {
Activity,
ArrowUpRight,
Box,
ChevronRight,
Cpu,
Frame,
HardDrive,
Maximize2,
RotateCw,
Shield,
Zap
} from "lucide-react";
import React,{ useState } from "react";

export const Product3DPreviewDemo: React.FC = () => {
    const [rotation, setRotation] = useState({ x: 15, y: -20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -40;
        setRotation({ x: y + 15, y: x - 20 });
    };

    const resetRotation = () => setRotation({ x: 15, y: -20 });

    return (
        <div className="flex-1 bg-[#0A0A0C] text-[#E0E0E6] font-sans selection:bg-[#6366F1] selection:text-white relative h-full flex flex-col group font-dm overflow-hidden">

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
                {/* --- 3D STYLES --- */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;700&display=swap');
                    
                    .font-dm { font-family: 'DM Sans', sans-serif; }
                    .font-space { font-family: 'Space Grotesk', sans-serif; }
                    
                    .studio-light {
                        background: radial-gradient(circle at 50% -20%, rgba(99, 102, 241, 0.15) 0%, transparent 60%);
                    }
                    
                    .perspective-container {
                        perspective: 2000px;
                    }
                    
                    .product-3d {
                        transition: transform 0.1s ease-out;
                        transform-style: preserve-3d;
                        box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5);
                    }

                    .side-plate {
                        position: absolute;
                        background: rgba(255, 255, 255, 0.02);
                        border: 1px solid rgba(255, 255, 255, 0.05);
                        backdrop-filter: blur(5px);
                    }

                    .spec-label {
                        border-left: 2px solid #6366F1;
                        padding-left: 1rem;
                        transition: all 0.3s ease;
                    }
                    .spec-label:hover {
                        background: rgba(99, 102, 241, 0.05);
                        padding-left: 1.5rem;
                    }

                    @keyframes float-3d {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                    }
                    .animate-float-3d {
                        animation: float-3d 6s ease-in-out infinite;
                    }
                `}} />

                <div className="studio-light absolute inset-0 z-0 pointer-events-none" />

                {/* REFLECTIVE FLOOR */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none z-0" />

                {/* --- NAVIGATION: INDUSTRIAL MINIMAL --- */}
                <nav className="flex items-center justify-between px-10 py-10 relative z-20">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#1A1A1E] border border-white/5 flex items-center justify-center rounded-lg shadow-xl shrink-0">
                            <Box className="w-5 h-5 text-[#6366F1]" />
                        </div>
                        <span className="text-xl font-bold tracking-tight font-space uppercase text-white">ViCode_3D.CORE</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                        <a href="#" className="hover:text-white transition-colors">Physical Layers</a>
                        <a href="#" className="hover:text-white transition-colors">Specifications</a>
                        <a href="#" className="hover:text-white transition-colors">Assembly</a>
                        <button className="bg-white text-black px-8 py-3 rounded-none font-bold hover:bg-[#6366F1] hover:text-white transition-all">Order License</button>
                    </div>
                </nav>

                {/* --- HERO: THE 3D PREVIEW (FIT 1 SCREEN) --- */}
                <section
                    className="h-[calc(100vh-120px)] min-h-[700px] flex flex-col lg:flex-row items-center justify-between px-16 relative z-10 gap-20 overflow-visible"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={resetRotation}
                >
                    {/* LEFT: SPECS */}
                    <div className="lg:w-1/3 space-y-12 order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6366F1] flex items-center gap-2">
                                <div className="w-8 h-[1px] bg-[#6366F1]" /> ENGINE_MODULE_01
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-space font-bold leading-[1.1] tracking-tighter text-white">
                                The Depth <br /> of Story.
                            </h1>
                        </div>

                        <div className="space-y-6 text-white">
                            {[
                                { t: "Volumetric Scaling", v: "1.04v", i: Maximize2 },
                                { t: "Spatial Intelligence", v: "Enabled", i: Frame },
                                { t: "Core Assembly", v: "v8.2", i: Cpu }
                            ].map((spec, i) => (
                                <div key={i} className="spec-label group cursor-pointer">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[10px] uppercase font-bold text-white/30 group-hover:text-white transition-colors">{spec.t}</span>
                                        <spec.i className="w-3 h-3 text-[#6366F1]/40 group-hover:text-[#6366F1]" />
                                    </div>
                                    <div className="text-xl font-space font-medium">{spec.v}</div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full lg:w-auto bg-[#6366F1] px-12 py-5 rounded-none font-bold text-white flex items-center justify-center gap-4 hover:bg-[#5254E0] transition-all shadow-2xl shadow-[#6366F1]/20">
                            Launch Workbench <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* CENTER: 3D OBJECT REPRODUCTION */}
                    <div className="lg:w-1/2 h-[500px] flex items-center justify-center order-1 lg:order-2 perspective-container cursor-grab active:cursor-grabbing">
                        <div
                            className="product-3d w-[320px] h-[450px] bg-[#1A1A1E] border border-white/10 relative rounded-2xl flex flex-col p-8 overflow-hidden animate-float-3d"
                            style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
                        >
                            {/* SHINE EFFECT */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-40" />

                            <div className="flex items-center justify-between relative z-10">
                                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-white/5">
                                    <Box className="w-6 h-6 text-[#6366F1]" />
                                </div>
                                <RotateCw className="w-5 h-5 text-white/10 animate-spin" style={{ animationDuration: '4s' }} />
                            </div>

                            <div className="mt-auto space-y-6 relative z-10">
                                <h3 className="text-3xl font-space font-bold tracking-tighter text-white">PARALLAX_X1</h3>
                                <div className="space-y-4">
                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="w-2/3 h-full bg-[#6366F1]" />
                                    </div>
                                    <div className="flex justify-between text-[10px] font-bold uppercase opacity-30 tracking-widest text-white">
                                        <span>Rendering State</span>
                                        <span>67% Sync</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-black/40 rounded-xl border border-white/5 text-[9px] font-bold text-white/40 uppercase tracking-widest flex items-center justify-between">
                                    <span>SYSTEM_STABLE</span>
                                    <Activity className="w-3 h-3 text-green-500" />
                                </div>
                            </div>

                            {/* SIDE PLATES (3D EFFECT) */}
                            <div className="side-plate w-[20px] h-full absolute right-[-20px] top-0" style={{ transform: 'rotateY(90deg)', transformOrigin: 'left' }} />
                            <div className="side-plate w-full h-[20px] absolute bottom-[-20px] left-0" style={{ transform: 'rotateX(-90deg)', transformOrigin: 'top' }} />
                        </div>
                    </div>
                </section>

                {/* --- ASSEMBLIES: THE 3D GRID --- */}
                <section className="py-40 px-16 relative z-10 space-y-32">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
                        <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#6366F1]">Structural Units</div>
                        <h2 className="text-5xl lg:text-7xl font-space font-bold tracking-tighter text-white">Integrated <span className="text-white/20">Modules.</span></h2>
                        <p className="text-lg text-white/40 max-w-xl mx-auto leading-relaxed italic font-medium">
                            Each component is built with physical mass in mind. Drag, rotate, and assemble your infrastructure in a multi-dimensional workspace.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {[
                            { t: "Logic Core", d: "The central processing unit for narrative state.", i: Cpu, c: "text-blue-400" },
                            { t: "Mass Storage", d: "High-density data blocks for asset persistence.", i: HardDrive, c: "text-purple-400" },
                            { t: "Energy Flux", d: "Instant power delivery to interactive nodes.", i: Zap, c: "text-yellow-400" },
                            { t: "Shield Plate", d: "Hardened security layers for asset protection.", i: Shield, c: "text-red-400" }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#1A1A1E] p-10 flex flex-col gap-10 border border-white/5 hover:border-[#6366F1]/40 transition-all group overflow-hidden relative rounded-xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2 group-hover:bg-[#6366F1]/10 transition-all" />
                                <div className="w-16 min-h-[64px] bg-black border border-white/5 flex items-center justify-center shadow-xl group-hover:-translate-y-1 transition-transform relative z-10 rounded-lg">
                                    <item.i className={cn("w-8 h-8", item.c)} />
                                </div>
                                <div className="space-y-4 relative z-10">
                                    <h4 className="text-2xl font-space font-bold uppercase tracking-tighter text-white">{item.t}</h4>
                                    <p className="text-sm leading-relaxed text-white/30 font-medium">
                                        {item.d}
                                    </p>
                                </div>
                                <div className="pt-6 relative z-10">
                                    <button className="text-[9px] font-black uppercase tracking-widest text-[#6366F1] flex items-center gap-2 group-hover:gap-4 transition-all">
                                        Inspect Specs <ChevronRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- PRICING: INDUSTRIAL TIERS --- */}
                <section className="py-48 px-16 relative z-10 flex flex-col items-center gap-24">
                    <div className="text-center space-y-4">
                        <h3 className="text-6xl font-space font-bold tracking-tighter uppercase text-white">Hardware License.</h3>
                        <div className="h-1 w-24 bg-[#6366F1] mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl w-full border border-white/5 rounded-3xl overflow-hidden bg-[#0a0a0c]">
                        {[
                            { l: "SINGLE", p: "129", f: ["1x Core Module", "Standard Cooling", "2-Way Sync"] },
                            { l: "CLUSTER", p: "499", f: ["8x Core Modules", "Full Spatial Intelligence", "24/7 Assembly Support"], primary: true },
                            { l: "QUANTUM", p: "1.2k", f: ["Infinite Modules", "Omni-Channel Assembly", "Priority Global Dispatch"] }
                        ].map((item, i) => (
                            <div key={i} className={cn(
                                "p-16 flex flex-col gap-12 group transition-all duration-500",
                                item.primary ? "bg-white/[0.03] border-x border-white/10 z-10" : "bg-transparent opacity-60 hover:opacity-100"
                            )}>
                                <div className="space-y-2">
                                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6366F1] font-space">{item.l}_UNIT</div>
                                    <div className="flex items-baseline gap-1 text-white">
                                        <span className="text-sm opacity-20">$</span>
                                        <span className="text-7xl font-space font-bold tracking-tighter">{item.p}</span>
                                    </div>
                                </div>
                                <div className="space-y-6 py-12 border-y border-white/10 font-bold text-[10px] uppercase tracking-widest text-white/40">
                                    {item.f.map(f => (
                                        <div key={f} className="flex items-center gap-4">
                                            <div className="w-1.5 h-1.5 bg-[#6366F1] rounded-full" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <button className={cn(
                                    "w-full py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all",
                                    item.primary ? "bg-[#6366F1] text-white" : "border border-white/10 hover:border-white text-white"
                                )}>
                                    Confirm Assembly
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FOOTER: INDUSTRIAL CORE --- */}
                <footer className="py-40 px-16 relative z-10 bg-black border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-24">
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#1A1A1E] border border-white/5 flex items-center justify-center rounded-xl">
                                <Box className="w-6 h-6 text-[#6366F1]" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight font-space uppercase text-white">ViCode_3D</span>
                        </div>
                        <p className="max-w-xs text-xl font-medium opacity-20 leading-relaxed uppercase tracking-tighter text-white">
                            Engineering the future of immersive narration through spatial depth.
                        </p>
                        <div className="flex gap-10 text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">
                            <span>&copy; 2026</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Safety</span>
                            <span className="hover:text-white transition-colors">Assembly</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-32 font-space">
                        {[
                            { t: "MODULES", l: ["Logic", "Spatial", "Core", "Visual"] },
                            { t: "ASSEMBLY", l: ["Order", "Track", "Support", "Documentation"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-10">
                                <h5 className="font-bold uppercase tracking-[0.5em] text-[10px] opacity-20">{group.t}</h5>
                                <ul className="space-y-6 font-bold text-lg uppercase tracking-tight text-white">
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
