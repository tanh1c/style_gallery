import { ArrowRight,Code,Cpu,Globe,Layers,Shield,Smartphone,Zap } from "lucide-react";
import React from "react";

export const BrutalismDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#F5F5F0] overflow-y-auto text-black font-mono selection:bg-red-500 selection:text-white pb-32 focus:outline-none">
            <div className="max-w-[1200px] mx-auto border-2 border-black min-h-screen relative shadow-[10px_10px_0_rgba(0,0,0,1)] bg-white my-8">

                {/* Brutalist Header - Scaled down */}
                <header className="h-16 border-b-2 border-black flex items-center justify-between px-6 bg-white sticky top-0 z-50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black flex items-center justify-center text-white">
                            <Code className="w-6 h-6" />
                        </div>
                        <span className="font-black text-2xl tracking-tighter uppercase italic">ViCode://</span>
                    </div>
                    <nav className="hidden md:flex items-center h-full">
                        {["Platform", "Edge", "Prices"].map((item) => (
                            <a key={item} href="#" className="h-full px-8 flex items-center border-l-2 border-black font-bold uppercase hover:bg-black hover:text-white transition-none text-sm">
                                {item}
                            </a>
                        ))}
                        <button className="h-full px-8 bg-[#FF0000] text-white border-l-2 border-black font-black uppercase hover:bg-white hover:text-black transition-none text-sm">
                            DEPLOY_NOW
                        </button>
                    </nav>
                </header>

                {/* Hero Section - Reconfigured */}
                <section className="border-b-2 border-black bg-white overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-8 lg:p-12 space-y-10 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-center">
                            <div className="inline-block border-2 border-black px-4 py-1.5 font-bold uppercase bg-[#FFFF00] shadow-[4px_4px_0_#000] text-[10px] self-start">
                                System_Build: v2026.brutal
                            </div>
                            <div className="space-y-2 text-left">
                                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                                    RAW.<br />
                                    FAST.<br />
                                    <span className="bg-[#0000FF] text-white px-4">TRU://</span>
                                </h1>
                            </div>
                            <div className="max-w-md space-y-8">
                                <p className="text-xl font-bold leading-tight uppercase tracking-tight">
                                    ViCode is the unpolished truth for builders.
                                    No mercy. Just deployment.
                                </p>
                                <div className="flex flex-wrap gap-8">
                                    <button className="bg-black text-white px-10 py-5 font-black uppercase flex items-center gap-4 shadow-[8px_8px_0_#FF0000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-none text-lg group">
                                        Initialize
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-none" />
                                    </button>
                                    <button className="border-2 border-black px-8 py-4 font-bold uppercase hover:bg-black hover:text-white transition-none text-sm">
                                        Docs
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-black h-full min-h-[500px] flex items-center justify-center p-8 lg:p-12 overflow-hidden">
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <div className="w-full h-full bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
                            </div>

                            {/* Fixed Image Integration */}
                            <div className="relative z-10 w-full aspect-square max-w-[400px] border-2 border-white shadow-[12px_12px_0_rgba(255,255,255,0.2)] bg-zinc-900 overflow-hidden group cursor-crosshair">
                                <img
                                    src="/vicode_brutalist_sculpture.png"
                                    alt="ViCode Brutalist Engine"
                                    className="w-full h-full object-cover grayscale contrast-150 group-hover:grayscale-0 transition-none opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute bottom-4 left-4 px-3 py-1 bg-white text-black font-black uppercase text-[10px]">
                                    Asset_ID: BT-04
                                </div>
                            </div>

                            <div className="absolute top-6 right-6 w-16 h-16 border-2 border-[#00FF00] rotate-45 animate-pulse" />
                        </div>
                    </div>
                </section>

                {/* Feature Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-2 border-black bg-black">
                    {[
                        { title: "EDGE_SYNC", desc: "12ms distribution across global nodes.", icon: Zap, bg: "bg-[#00FF00]" },
                        { title: "VAULT_SEC", desc: "Hardened security layers.", icon: Shield, bg: "bg-[#FFFF00]" },
                        { title: "PLANET_IX", desc: "Scale to infinity globally.", icon: Globe, bg: "bg-[#0000FF]" },
                        { title: "MESH_CORE", desc: "Distributed infrastructure.", icon: Layers, bg: "bg-[#FF00FF]" },
                        { title: "RAW_RUNTIME", desc: "Bare metal optimization.", icon: Cpu, bg: "bg-[#00FFFF]" },
                        { title: "UX_STARK", desc: "Zero friction interface.", icon: Smartphone, bg: "bg-[#FF5500]" }
                    ].map((f, i) => (
                        <div key={i} className={`p-10 border-2 border-black group bg-white hover:${f.bg} hover:text-white transition-none cursor-crosshair`}>
                            <div className="w-14 h-14 border-2 border-black flex items-center justify-center bg-black text-white mb-6 group-hover:bg-white group-hover:text-black transition-none">
                                <f.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-3 tracking-tighter leading-none">{f.title}</h3>
                            <p className="text-sm font-bold leading-tight opacity-40 group-hover:opacity-100 uppercase">{f.desc}</p>
                        </div>
                    ))}
                </section>

                {/* Information Grid */}
                <section className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-black min-h-[500px]">
                    <div className="p-8 lg:p-12 space-y-12 bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-black">
                        <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none underline">Engineering_Truth</h2>
                        <div className="space-y-8">
                            {[
                                { l: "Uptime", v: "99.99%", c: "text-[#00FF00]" },
                                { l: "Region", v: "Global", c: "text-[#FF0000]" },
                                { l: "Speed", v: "0.2s", c: "text-[#0000FF]" }
                            ].map((s, i) => (
                                <div key={i} className="flex justify-between items-end border-b-2 border-black pb-3 hover:bg-black hover:text-white px-2 cursor-pointer transition-none">
                                    <span className="text-lg font-black uppercase">{s.l}</span>
                                    <span className={`text-5xl font-black italic ${s.c}`}>{s.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-black p-8 lg:p-12 relative flex flex-col justify-center">
                        <div className="absolute top-6 right-6 text-white/5 font-black text-6xl select-none leading-none">TERMINAL://</div>
                        <div className="space-y-4 font-mono font-bold text-sm text-[#00FF00]">
                            <div className="flex gap-3">
                                <span className="text-white opacity-40">vicode@alpine:~$</span>
                                <span>vicode deploy --mesh</span>
                            </div>
                            <div className="pl-4 space-y-1">
                                <p className="text-white/30 tracking-tight">{">"} Stripping assets... DONE</p>
                                <p className="inline-block bg-[#00FF00] text-black px-3 py-0.5 uppercase shadow-[2px_2px_0_#FFF]">✓ Deployed_0.2ms</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="p-8 lg:p-12 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t-2 border-black pt-12">
                        <div className="col-span-1 md:col-span-2 space-y-6 text-left">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                                    <span className="font-black text-2xl">V</span>
                                </div>
                                <span className="font-black text-2xl uppercase tracking-tighter text-left">ViCode_BRUTAL</span>
                            </div>
                            <p className="text-lg font-black leading-none uppercase max-w-sm tracking-tighter italic text-left">
                                Built with iron and raw compute. 2026.
                            </p>
                        </div>
                        <div className="space-y-4 text-left">
                            <h4 className="font-black uppercase text-[#FF0000] text-sm text-left">System</h4>
                            <ul className="space-y-2 font-bold uppercase underline text-sm text-left">
                                {["Features", "Docs", "API", "Status"].map(l => (
                                    <li key={l}><a href="#" className="hover:bg-black hover:text-white pr-2">{l}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4 text-left">
                            <h4 className="font-black uppercase text-[#0000FF] text-sm text-left">Network</h4>
                            <ul className="space-y-2 font-bold uppercase underline text-sm text-left">
                                {["Twitter", "GitHub", "Discord"].map(l => (
                                    <li key={l}><a href="#" className="hover:bg-black hover:text-white pr-2">{l}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-20 pt-10 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-6 font-black uppercase text-sm">
                        <span>(C) 2026 ViCode_ENGIN_GRP</span>
                        <div className="flex gap-10 items-center">
                            <span className="italic opacity-30">V0.9.8_STABLE</span>
                            <button className="bg-black text-white px-6 py-2 hover:bg-[#00FF00] hover:text-black transition-none">
                                GO_TOP ↑
                            </button>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Styled Fixed CTA */}
            <div className="fixed bottom-10 right-10 z-50">
                <button className="bg-[#FFFF00] border-2 border-black p-6 font-black uppercase text-xl shadow-[8px_8px_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-none">
                    Join_alpha
                </button>
            </div>
        </div>
    );
};
