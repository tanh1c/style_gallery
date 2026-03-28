import { ArrowRight,Code,Cpu,Globe,Layers,Play,Shield,Smartphone,Terminal,Zap } from "lucide-react";
import React from "react";

export const NeumorphismDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#E0E5EC] overflow-y-auto text-[#444] font-sans selection:bg-[#A3B1C6] selection:text-white p-4 lg:p-8">
            <div className="max-w-[1200px] mx-auto space-y-16 py-4">
                {/* Neumorphic Header - Tightened Padding */}
                <header className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 bg-[#E0E5EC] rounded-[24px] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,1)] sticky top-0 z-50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#E0E5EC] rounded-xl flex items-center justify-center shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]">
                            <Code className="w-5 h-5 text-[#6b7c93]" />
                        </div>
                        <span className="font-black text-xl tracking-tighter text-[#4d5d71]">ViCode</span>
                    </div>
                    <nav className="flex items-center gap-1">
                        {["Products", "Pricing", "Docs"].map((item) => (
                            <button key={item} className="px-5 py-2 rounded-full text-[13px] font-bold text-[#4d5d71] hover:text-[#222] transition-colors hover:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]">
                                {item}
                            </button>
                        ))}
                        <button className="ml-2 px-6 py-2.5 bg-[#E0E5EC] rounded-xl text-[13px] font-black text-[#5e72e4] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,1)] hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] active:scale-95 transition-all">
                            Start Developing
                        </button>
                    </nav>
                </header>

                {/* Hero Section - Reduced top gap */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-4">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-block px-4 py-1 bg-[#E0E5EC] rounded-full text-[9px] font-black uppercase tracking-[0.25em] text-[#6b7c93] shadow-[4px_4px_8px_rgba(163,177,198,0.4),-4px_-4px_8px_rgba(255,255,255,1)]">
                            SaaS Evolution 2026
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-black leading-tight text-[#4d5d71] tracking-tighter">
                            Software that <br /><span className="text-[#5e72e4]">feels</span> tangible.
                        </h1>
                        <p className="text-lg text-[#6b7c93] leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                            Experience the next generation of developer tools with ViCode's tactile interface.
                            Engineering meets ergonomics.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-5 pt-2">
                            <button className="px-8 py-4 bg-[#E0E5EC] rounded-2xl font-black text-[#5e72e4] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,1)] hover:shadow-[inset_5px_5px_10px_rgba(163,177,198,0.5),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all flex items-center gap-3">
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="w-14 h-14 bg-[#E0E5EC] rounded-2xl flex items-center justify-center text-[#6b7c93] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,1)] hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all">
                                <Play className="w-5 h-5 fill-current" />
                            </button>
                        </div>
                    </div>

                    <div className="relative group cursor-pointer">
                        <div className="w-full aspect-square bg-[#E0E5EC] rounded-[48px] shadow-[12px_12px_24px_rgba(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,1)] p-10 flex items-center justify-center overflow-hidden transition-all group-hover:shadow-[inset_10px_10px_20px_rgba(163,177,198,0.4),inset_-10px_-10px_20px_rgba(255,255,255,1)]">
                            <img
                                src="/vicode-neumorphic.png"
                                alt="ViCode Neumorphic Cloud"
                                className="w-full h-full object-contain scale-90 group-hover:scale-95 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute top-8 right-8 w-10 h-10 bg-[#E0E5EC] rounded-xl flex items-center justify-center shadow-[6px_6px_12px_rgba(163,177,198,0.4),-6px_-6px_12px_rgba(255,255,255,0.8)] opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                                <Terminal className="w-4 h-4 text-[#6b7c93]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Grid - Adjusted padding */}
                <section className="space-y-12 py-8">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <div className="w-10 h-1 bg-[#A3B1C6]/30 rounded-full shadow-inner" />
                        <h2 className="text-3xl font-black text-[#4d5d71] tracking-tighter uppercase italic">ENGINEERING_CORE</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: Zap, title: "Edge Performance", desc: "Global distribution with tactile response." },
                            { icon: Shield, title: "Hardened Security", desc: "Security layers as deep as our soft shadows." },
                            { icon: Globe, title: "Global Mesh", desc: "Born in the cloud, refined in the studio." },
                            { icon: Layers, title: "Shared Env", desc: "Real-time collaboration in high-depth envs." },
                            { icon: Cpu, title: "Neural Sync", desc: "AI-driven deployment optimizations." },
                            { icon: Smartphone, title: "Tactile Mobile", desc: "Soft UI experience across all device scales." }
                        ].map((feature, i) => (
                            <div key={i} className="bg-[#E0E5EC] p-8 rounded-[32px] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,1)] space-y-5 hover:translate-y-[-4px] transition-transform">
                                <div className="w-12 h-12 bg-[#E0E5EC] rounded-xl flex items-center justify-center shadow-[inset_2px_2px_5px_rgba(163,177,198,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]">
                                    <feature.icon className="w-6 h-6 text-[#5e72e4]" />
                                </div>
                                <h3 className="text-xl font-black text-[#4d5d71] tracking-tight">{feature.title}</h3>
                                <p className="text-sm text-[#6b7c93] leading-relaxed font-medium capitalize">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dynamic Code Preview Section - Scaled down */}
                <section className="bg-[#E0E5EC] rounded-[48px] shadow-[inset_12px_12px_24px_rgba(163,177,198,0.6),inset_-12px_-12px_24px_rgba(255,255,255,1)] p-10 lg:p-16 overflow-hidden relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
                        <div className="space-y-8">
                            <h3 className="text-4xl lg:text-5xl font-black text-[#4d5d71] tracking-tighter leading-none italic uppercase">Your flow, tactile.</h3>
                            <div className="space-y-4 text-[#6b7c93] text-base leading-relaxed font-medium uppercase tracking-tight opacity-70">
                                <p>Experience a workflow where the tools stay out of your way. ViCode provides the structure you need without the noise.</p>
                            </div>
                            <div className="pt-4 flex flex-wrap gap-8">
                                {[
                                    { l: "Uptime", v: "100%" },
                                    { l: "Speed", v: "0.2s" },
                                    { l: "Sync", v: "Global" }
                                ].map((s, i) => (
                                    <div key={i} className="space-y-1 px-5 py-3 bg-[#E0E5EC] rounded-xl shadow-[4px_4px_8px_rgba(163,177,198,0.3),-4px_-4px_8px_rgba(255,255,255,0.8)]">
                                        <div className="text-2xl font-black text-[#4d5d71]">{s.v}</div>
                                        <div className="text-[8px] uppercase font-black tracking-widest text-[#6b7c93]/40">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#E0E5EC] rounded-[32px] shadow-[inset_10px_10px_20px_rgba(163,177,198,0.4),inset_-10px_-10px_20px_rgba(255,255,255,1)] p-8 font-mono text-xs space-y-4 relative group overflow-hidden">
                            <div className="flex gap-2.5 mb-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#E0E5EC] shadow-[inset_1px_1px_3px_rgba(163,177,198,0.6)]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#E0E5EC] shadow-[inset_1px_1px_3px_rgba(163,177,198,0.6)]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#E0E5EC] shadow-[inset_1px_1px_3px_rgba(163,177,198,0.6)]" />
                            </div>
                            <div className="space-y-2 text-[#6b7c93] font-bold">
                                <p className="opacity-40 tracking-tight">// initializing_vicode_environment...</p>
                                <p className="text-[#5e72e4] font-black">vicode init project-delta</p>
                                <p className="opacity-70 tracking-tight">Loading mesh... [OK]</p>
                                <p className="text-[#5e72e4] font-black">vicode deploy --mesh</p>
                                <p className="text-green-600/80 font-black italic">✓ deployed_successfully.82ms</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Neumorphic Footer - Scaled down */}
                <footer className="pt-16 pb-8 space-y-16 border-t border-[#A3B1C6]/30">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 text-left">
                        <div className="col-span-2 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-[#E0E5EC] rounded-xl flex items-center justify-center shadow-[inset_2px_2px_4px_rgba(163,177,198,0.4),inset_-2px_-2px_4px_rgba(255,255,255,1)]">
                                    <span className="font-black text-[#5e72e4]">V</span>
                                </div>
                                <span className="font-black text-xl tracking-tighter text-[#4d5d71]">ViCode SaaS</span>
                            </div>
                            <p className="text-xs text-[#6b7c93] leading-relaxed max-w-xs font-bold uppercase tracking-widest opacity-60">
                                The engineering platform for modern tactile teams. Precision engineering in every shadow.
                            </p>
                        </div>
                        {[
                            { title: "Platform", links: ["Features", "Edge", "Security"] },
                            { title: "Devs", links: ["Docs", "API", "SDKs"] },
                            { title: "Company", links: ["About", "News", "Legal"] },
                            { title: "Social", links: ["Twitter", "GitHub", "Discord"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-6">
                                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d5d71]">
                                    {group.title}
                                </h5>
                                <ul className="space-y-4">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-[11px] text-[#6b7c93] hover:text-[#5e72e4] transition-colors uppercase tracking-tight font-black">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-[#A3B1C6]/10 text-[9px] font-black uppercase tracking-[0.2em] text-[#6b7c93]/40">
                        <span className="p-3 bg-[#E0E5EC] rounded-xl shadow-[4px_4px_8px_rgba(163,177,198,0.2),-4px_-4px_8px_rgba(255,255,255,1)]">© 2026 ViCode Engineering Inc.</span>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-[#5e72e4] transition-colors">Privacy</a>
                            <a href="#" className="hover:text-[#5e72e4] transition-colors">Terms</a>
                        </div>
                    </div>
                </footer>

                {/* Action Bar - Scaled down */}
                <div className="fixed bottom-10 left-[calc(320px+((100vw-320px)/2))] -translate-x-1/2 flex gap-3 p-2.5 bg-[#E0E5EC] rounded-[24px] shadow-[12px_12px_24px_rgba(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,1)] z-50 animate-in slide-in-from-bottom-5 duration-1000">
                    <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[#6b7c93] shadow-[4px_4px_8px_rgba(163,177,198,0.3),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-inner">
                        <Terminal className="w-4 h-4" />
                    </button>
                    <button className="px-6 py-2 bg-[#E0E5EC] rounded-xl text-[11px] font-black text-[#4d5d71] shadow-[4px_4px_8px_rgba(163,177,198,0.3),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-inner">
                        Command Palette
                    </button>
                </div>
            </div>
        </div>
    );
};
