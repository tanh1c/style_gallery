import { Activity,Code,Cpu,Droplets,Globe,Layers,Satellite,Shield,Zap } from "lucide-react";
import React from "react";

const LiquidGlassEffect: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`relative group ${className}`}>
        {/* Specular Highlight Layer */}
        <div className="absolute inset-0 rounded-[inherit] pointer-events-none z-20 overflow-hidden shadow-[inset_1px_1px_0_rgba(255,255,255,0.7),inset_0_0_5px_rgba(255,255,255,0.5)]" />

        {/* Flat Overlay Layer */}
        <div className="absolute inset-0 rounded-[inherit] bg-white/[0.25] z-10 pointer-events-none shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)] transition-all duration-400 group-hover:bg-white/[0.3]" />

        {/* Distortion Filter Layer */}
        <div
            className="absolute inset-0 rounded-[inherit] z-0 pointer-events-none"
            style={{
                backdropFilter: 'blur(0px)',
                filter: 'url(#lg-dist)',
                isolation: 'isolate'
            }}
        />

        {/* Content Layer */}
        <div className="relative z-30">
            {children}
        </div>
    </div>
);

export const LiquidGlassDemo: React.FC = () => {
    return (
        <div className="flex-1 relative overflow-hidden h-full min-h-full font-sans selection:bg-white/20 text-left">

            {/* STATIC LOCAL MACOS BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img
                    src="/macos_bg.jpg"
                    className="w-full h-full object-cover"
                    alt="macOS Gradient Background"
                />

                {/* Surface Grain & Tint */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
            </div>

            {/* SCROLLING CONTENT LAYER */}
            <div className="absolute inset-0 overflow-y-auto z-10 pb-32">

                {/* SVG Distortion Filter Definition */}
                <svg style={{ display: 'none' }}>
                    <filter id="lg-dist" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
                        <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
                        <feDisplacementMap in="SourceGraphic" in2="blurred" scale="70" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </svg>

                <div className="max-w-[1280px] mx-auto px-8 lg:px-12 py-8 space-y-16">

                    {/* ViCode Liquid Header */}
                    <header className="h-20 flex items-center justify-between px-10 relative z-50">
                        <LiquidGlassEffect className="rounded-full w-full max-w-fit">
                            <div className="flex items-center gap-4 px-8 py-3">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center border border-white/30">
                                    <Code className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-black text-xl tracking-tight text-white uppercase italic drop-shadow-md">ViCode</span>
                            </div>
                        </LiquidGlassEffect>

                        <nav className="hidden lg:flex items-center gap-8">
                            {["Tools", "Logic", "V-Core"].map(item => (
                                <LiquidGlassEffect key={item} className="rounded-full">
                                    <button className="px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                                        {item}
                                    </button>
                                </LiquidGlassEffect>
                            ))}
                        </nav>

                        <LiquidGlassEffect className="rounded-full overflow-hidden">
                            <button className="bg-transparent text-white px-10 py-3 font-black text-[10px] uppercase tracking-[0.2em]">
                                Initialize_Fluid
                            </button>
                        </LiquidGlassEffect>
                    </header>

                    {/* Hero Section with Playback UI Concept */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-0 pb-8">
                        <div className="space-y-8 text-center lg:text-left">
                            <LiquidGlassEffect className="rounded-full inline-block">
                                <div className="px-5 py-1.5 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white">V-Engine_Live</span>
                                </div>
                            </LiquidGlassEffect>

                            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter text-white drop-shadow-2xl italic">
                                FORGED <br />
                                IN <span className="text-white opacity-80">GLASS.</span>
                            </h1>
                            <p className="text-xl text-white/70 leading-snug max-w-md mx-auto lg:mx-0 font-bold italic tracking-tight drop-shadow-md">
                                Infrastructure as clear as water, but as strong as steel. Experience the refraction of software development.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 pt-2">
                                <LiquidGlassEffect className="rounded-[28px] overflow-hidden">
                                    <button className="h-16 px-10 text-base font-black uppercase tracking-widest flex items-center justify-center gap-3 group text-white">
                                        Launch Hub
                                        <Activity className="w-5 h-5 text-white animate-pulse" />
                                    </button>
                                </LiquidGlassEffect>
                                <LiquidGlassEffect className="rounded-[28px] overflow-hidden">
                                    <button className="h-16 px-10 text-base font-black uppercase tracking-widest text-white/60">
                                        Vault_CLI
                                    </button>
                                </LiquidGlassEffect>
                            </div>
                        </div>

                        <div className="relative group p-4 scale-95 origin-center lg:scale-105">
                            {/* SAAS NODE MONITOR: Realistic Hero Glass Component using Reference Logic */}
                            <LiquidGlassEffect className="rounded-[60px] p-8 max-w-lg mx-auto backdrop-blur-sm shadow-2xl">
                                <div className="space-y-8 py-6 px-2">
                                    {/* Visual Concept: Cluster Status (Liquid Glass) */}
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-5">
                                            <div className="relative">
                                                <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
                                                    <Cpu className="w-10 h-10 text-white animate-pulse" />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-[#010208] shadow-[0_0_10px_#10B981]" />
                                            </div>
                                            <div className="text-left">
                                                <h3 className="text-xl font-black text-white drop-shadow-md tracking-tighter uppercase italic">Node_Cluster_X88</h3>
                                                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">US_East_Subsurface_active</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end gap-2 pr-2">
                                            <div className="text-[10px] font-black text-white opacity-40 uppercase tracking-widest">Efficiency</div>
                                            <div className="text-2xl font-black text-white italic tracking-tighter">98.4%</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        {[
                                            { label: "Throughput", value: "24.2 GB/s", icon: Zap },
                                            { label: "Memory_Flux", value: "1.2 TB", icon: Layers }
                                        ].map((stat) => (
                                            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
                                                <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-white/30">
                                                    <stat.icon className="w-3 h-3" />
                                                    {stat.label}
                                                </div>
                                                <div className="text-lg font-black text-white tabular-nums">{stat.value}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-white/20">
                                            <span>System_Health_Metrics</span>
                                            <span>Stabilized_0.44s</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-[82%] bg-gradient-to-r from-white/40 via-white to-white/40 animate-shimmer shadow-[0_0_10px_white]" />
                                        </div>
                                    </div>
                                </div>
                            </LiquidGlassEffect>

                            <div className="absolute -inset-10 bg-white/5 blur-[120px] rounded-full -z-10" />
                        </div>
                    </section>

                    {/* Glass Feature Bento */}
                    <section className="space-y-16">
                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="h-1.5 w-32 bg-white/30 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
                            <h2 className="text-3xl font-black uppercase tracking-[0.5em] text-white/20 italic drop-shadow-md">System.Liquidity</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[
                                { icon: Zap, title: "Snap Refract", desc: "Instant flow of global assets." },
                                { icon: Shield, title: "Glass Safe", desc: "Transparent but unbreakable logic." },
                                { icon: Globe, title: "Fluid Net", desc: "The viscosity of global deployment." },
                                { icon: Activity, title: "Pulse Spec", desc: "Real-time refractive monitoring." },
                                { icon: Layers, title: "L-Stacks", desc: "Infinite layering of clear data." },
                                { icon: Satellite, title: "V-Broadcast", desc: "Deep space signal consolidation." }
                            ].map((f) => (
                                <LiquidGlassEffect key={f.title} className="rounded-[40px] group overflow-hidden">
                                    <div className="p-12 space-y-10 group-hover:scale-105 transition-transform duration-500">
                                        <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center border border-white/30 shadow-inner group-hover:rotate-6 transition-all">
                                            <f.icon className="w-10 h-10 text-white/60 group-hover:text-white transition-opacity" />
                                        </div>
                                        <div className="space-y-4 text-left">
                                            <h3 className="text-2xl font-black tracking-tight text-white uppercase italic drop-shadow-md">{f.title}</h3>
                                            <p className="text-xs font-bold text-white/40 leading-snug uppercase tracking-widest">{f.desc}</p>
                                        </div>
                                    </div>
                                </LiquidGlassEffect>
                            ))}
                        </div>
                    </section>

                    {/* Refractive Block Info */}
                    <section className="relative group">
                        <LiquidGlassEffect className="rounded-[80px] p-12 lg:p-24 overflow-hidden border border-white/10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 items-center">
                                <div className="space-y-12">
                                    <h2 className="text-6xl lg:text-7xl font-black uppercase tracking-tighter italic leading-none text-white drop-shadow-glow">VISCID.<br />SOFTWARE.</h2>
                                    <p className="text-2xl text-white/30 font-bold uppercase tracking-widest italic leading-relaxed">Infrastructure that flows like water, but hits like a truck. Engineering for a high-viscosity digital age.</p>
                                    <div className="grid grid-cols-2 gap-10">
                                        {[
                                            { l: "Viscosity", v: "100%", g: "from-white" },
                                            { l: "Load Time", v: "0.0s", g: "from-white/40" }
                                        ].map((s, i) => (
                                            <div key={i} className="space-y-3">
                                                <div className={`text-6xl font-black bg-clip-text text-transparent bg-gradient-to-t ${s.g} to-white`}>{s.v}</div>
                                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10">{s.l}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <LiquidGlassEffect className="rounded-[48px] p-12 min-h-[440px] flex flex-col justify-center">
                                        <div className="space-y-10 font-mono text-sm relative z-10">
                                            <div className="flex gap-4 items-center bg-white/5 p-5 rounded-2xl border border-white/10">
                                                <span className="text-white/40 font-bold tracking-widest">root@vicode:</span>
                                                <span className="text-white italic">deploy --as-liquid</span>
                                            </div>
                                            <div className="pl-6 space-y-6 opacity-30 font-bold uppercase italic tracking-widest">
                                                <p>{">"} Melting environment... [COMPLETE]</p>
                                                <p>{">"} Flowing nodes to edge... [COMPLETE]</p>
                                                <div className="pt-8">
                                                    <div className="inline-block bg-white text-black px-10 py-3 rounded-full font-black uppercase text-[10px] tracking-widest shadow-2xl">
                                                        ✓ FLUIDIZED_SYSTEM_ACTIVE
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </LiquidGlassEffect>
                                </div>
                            </div>
                        </LiquidGlassEffect>
                    </section>

                    {/* Industrial Glass Footer */}
                    <footer className="pt-32 pb-16 space-y-24 border-t border-white/10 relative">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-20">
                            <div className="col-span-2 space-y-12 text-left">
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-2xl shadow-2xl border border-white/30">
                                        <span className="font-black text-2xl">V</span>
                                    </div>
                                    <span className="font-black text-3xl tracking-tighter uppercase italic text-white/90 drop-shadow-md">ViCode.GLASS</span>
                                </div>
                                <p className="text-xs text-white/20 leading-relaxed max-w-sm font-bold uppercase tracking-[0.3em] italic">
                                    Foundry-grade software engineering through a clear, liquid lens. 2026.
                                </p>
                            </div>
                            {[
                                { title: "Flow", links: ["Flux", "Wave", "Refract"] },
                                { title: "Docs", links: ["V-Core", "Units", "API"] },
                                { title: "Legal", links: ["Privacy", "Policy", "Terms"] },
                                { title: "Signal", links: ["Radio", "Satellite", "Voice"] }
                            ].map((group, i) => (
                                <div key={i} className="space-y-12 text-left">
                                    <h5 className="text-[11px] font-black uppercase tracking-[0.6em] text-white/5">
                                        {group.title}
                                    </h5>
                                    <ul className="space-y-8">
                                        {group.links.map((link) => (
                                            <li key={link}>
                                                <a href="#" className="text-xs text-white/20 hover:text-white transition-all uppercase font-black tracking-widest">{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-24 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.5em] text-white/10">
                            <span className="px-10 py-5 bg-white/5 border border-white/10 rounded-full italic">© 2026 ViCode Liquid Glass Systems. All_Refracted_Rights.</span>
                            <div className="flex gap-16 font-extrabold opacity-30">
                                <span>VERSION: 0.88_VISCO</span>
                                <span>LUX: 1200_STABLE</span>
                            </div>
                        </div>
                    </footer>

                    {/* Global Toggle Button - Liquid Style */}
                    <div className="absolute bottom-12 right-12 z-50">
                        <LiquidGlassEffect className="rounded-full overflow-hidden w-24 h-24 flex items-center justify-center">
                            <Droplets className="w-10 h-10 text-white fill-white/10 group-hover:scale-125 transition-transform" />
                        </LiquidGlassEffect>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes bg-drift {
                    from { background-position: center center; }
                    to { background-position: center top; }
                }
                .animate-bg-drift {
                    animation: bg-drift 10s ease-in-out infinite alternate;
                }
                .drop-shadow-glow {
                    filter: drop-shadow(0 0 10px rgba(255,255,255,0.3));
                }
            `}</style>
        </div>
    );
};
