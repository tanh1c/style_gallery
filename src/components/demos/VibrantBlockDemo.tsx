import { ArrowRight,Code,Cpu,Globe,Heart,Layers,Shield,Smartphone,Sparkles,Star,Zap } from "lucide-react";
import React from "react";

export const VibrantBlockDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#FDFCFE] overflow-y-auto text-black font-sans selection:bg-[#FFD600] pb-32">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-8 space-y-20">

                {/* Vibrant Header */}
                <header className="h-16 flex items-center justify-between px-6 bg-white border-2 border-black rounded-[20px] shadow-[4px_4px_0_#000] sticky top-4 z-50">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-9 h-9 bg-[#A855F7] border-2 border-black rounded-xl flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:-translate-y-1 transition-transform">
                            <Code className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-black text-2xl tracking-tighter uppercase">ViCode</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-1 font-black text-xs uppercase tracking-wider">
                        {["Play", "Scale", "Pricing"].map((item) => (
                            <button key={item} className="px-5 py-2 hover:bg-[#F3F4F6] rounded-xl transition-colors">
                                {item}
                            </button>
                        ))}
                        <button className="ml-2 px-6 py-2.5 bg-[#FFD600] border-2 border-black rounded-xl shadow-[4px_4px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                            Join_Club
                        </button>
                    </nav>
                </header>

                {/* Playful Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-10 text-center lg:text-left order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 bg-[#F0ABFC] border-2 border-black rounded-full px-5 py-1.5 shadow-[3px_3px_0_#000]">
                            <Sparkles className="w-4 h-4 text-white fill-current" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-black">New: V2.0 is Here!</span>
                        </div>
                        <h1 className="text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase italic">
                            Code that <br />
                            <span className="text-[#3B82F6]">pops</span> like <br />
                            <span className="text-[#EC4899]">magic.</span>
                        </h1>
                        <p className="text-xl font-bold leading-tight max-w-md mx-auto lg:mx-0 opacity-70">
                            ViCode is the engine that brings joy back to deployment.
                            Built with blocks, designed for humans.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                            <button className="h-16 px-10 bg-[#8B5CF6] text-white border-2 border-black rounded-[24px] font-black text-xl shadow-[6px_6px_0_#000] hover:-translate-y-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-4 group">
                                Build_Now
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="h-16 px-10 bg-white border-2 border-black rounded-[24px] font-black text-xl shadow-[6px_6px_0_#000] hover:bg-[#F3F4F6] transition-all">
                                The_Tour
                            </button>
                        </div>
                    </div>

                    <div className="relative group order-1 lg:order-2 flex justify-center">
                        {/* Visual Deco */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#8B5CF6]/5 rounded-full blur-[100px] -z-10" />

                        {/* 3D Asset Frame */}
                        <div className="w-full max-w-[500px] aspect-square bg-[#3B82F6] border-4 border-black rounded-[48px] shadow-[12px_12px_0_#000] p-6 relative overflow-hidden group-hover:rotate-2 transition-transform duration-500">
                            <div className="absolute top-6 left-6 w-16 h-16 bg-[#FFD600] border-2 border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0_#000] -rotate-12 z-20">
                                <Star className="w-8 h-8 text-black fill-current" />
                            </div>

                            <img
                                src="/vicode_vibrant_robot.png"
                                alt="ViCode Robot"
                                className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-10 transition-transform group-hover:scale-110"
                            />

                            <div className="absolute bottom-10 right-10 flex gap-3 z-30">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-4 h-4 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_#000]" />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blocky Feature Grid - 6 Items */}
                <section className="space-y-12">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <div className="w-12 h-12 bg-white border-2 border-black shadow-[4px_4px_0_#000] rounded-2xl flex items-center justify-center rotate-3">
                            <Heart className="w-6 h-6 text-[#EC4899] fill-current" />
                        </div>
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter">Core_Blocks</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "HYPER_SYNC", icon: Zap, bg: "bg-[#8B5CF6]", t: "text-white" },
                            { title: "VAULT_LOCK", icon: Shield, bg: "bg-[#FFD600]", t: "text-black" },
                            { title: "GLOBAL_POD", icon: Globe, bg: "bg-[#3B82F6]", t: "text-white" },
                            { title: "MESH_KIT", icon: Layers, bg: "bg-[#EC4899]", t: "text-white" },
                            { title: "RAW_LATENCY", icon: Cpu, bg: "bg-[#22C55E]", t: "text-white" },
                            { title: "TOUCH_UX", icon: Smartphone, bg: "bg-[#F97316]", t: "text-white" }
                        ].map((f, i) => (
                            <div key={i} className={`p-10 border-4 border-black rounded-[32px] ${f.bg} ${f.t} shadow-[8px_8px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_#000] transition-all cursor-pointer group`}>
                                <div className="w-16 h-16 bg-white border-2 border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0_#000] mb-8 group-hover:rotate-6 transition-transform">
                                    <f.icon className="w-8 h-8 text-black" />
                                </div>
                                <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">{f.title}</h3>
                                <p className="font-bold opacity-80 leading-tight">Optimized engine blocks designed for your scale.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Detailed Section with Code Preview */}
                <section className="bg-white border-4 border-black rounded-[48px] shadow-[16px_16px_0_#000] p-10 lg:p-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter italic leading-none">Built<br />to_Scale.</h2>
                            <p className="text-xl font-bold leading-tight opacity-70">Experience the infrastructure that feels as friendly as its UI. No more complex configurations.</p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { l: "Uptime", v: "100%", bg: "bg-white" },
                                    { l: "Regions", v: "124", bg: "bg-[#FFD600]" }
                                ].map((s, i) => (
                                    <div key={i} className={`${s.bg} p-6 border-2 border-black rounded-2xl shadow-[4px_4px_0_#000]`}>
                                        <div className="text-4xl font-black">{s.v}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest mt-1 opacity-40">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-black border-4 border-black rounded-[32px] p-8 shadow-[12px_12px_0_#8B5CF6] relative">
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-[#EC4899] border-2 border-white" />
                                <div className="w-3 h-3 rounded-full bg-[#3B82F6] border-2 border-white" />
                                <div className="w-3 h-3 rounded-full bg-[#22C55E] border-2 border-white" />
                            </div>
                            <div className="space-y-4 font-mono text-sm text-[#3B82F6]">
                                <div className="flex gap-4">
                                    <span className="text-white opacity-40">{">"}</span>
                                    <span className="font-black">npm install vicode-core</span>
                                </div>
                                <div className="pl-6 space-y-2">
                                    <p className="text-[#EC4899]">{">"} fetching_vibrant_blocks...</p>
                                    <p className="text-[#22C55E]">✓ SUCCESS_82ms</p>
                                </div>
                                <div className="pt-6">
                                    <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
                                        <div className="w-[85%] h-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vibrant Footer */}
                <footer className="pt-20 pb-10 space-y-20 border-t-4 border-black">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12">
                        <div className="col-span-2 space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-black border-2 border-white rounded-2xl flex items-center justify-center shadow-[4px_4px_0_#8B5CF6]">
                                    <span className="text-white font-black text-2xl uppercase tracking-tighter">V</span>
                                </div>
                                <span className="font-black text-3xl uppercase tracking-tighter">ViCode_Vibe</span>
                            </div>
                            <p className="text-lg font-bold leading-tight max-w-xs opacity-60">
                                The joyful engineering platform for modern teams. 2026.
                            </p>
                        </div>
                        {[
                            { title: "Kit", links: ["Blocks", "Pods", "Sync"] },
                            { title: "Help", links: ["Docs", "API", "Lab"] },
                            { title: "Team", links: ["Club", "Blog", "Legal"] },
                            { title: "Social", links: ["Twitter", "Github"] }
                        ].map((g, i) => (
                            <div key={i} className="space-y-6">
                                <h4 className="text-[11px] font-black uppercase tracking-widest text-black underline underline-offset-4 decoration-2 decoration-[#FFD600]">
                                    {g.title}
                                </h4>
                                <ul className="space-y-4">
                                    {g.links.map(l => (
                                        <li key={l}><a href="#" className="font-black uppercase text-xs hover:text-[#8B5CF6] transition-colors">{l}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t-2 border-black/10 font-black text-[10px] uppercase tracking-[0.2em] opacity-30">
                        <span className="px-4 py-2 bg-white border-2 border-black rounded-lg">© 2026 ViCode Vibe Engine Grp</span>
                        <div className="flex gap-8">
                            <span>V-0.9.8_PLUS</span>
                            <span>Region: Joy_Global</span>
                        </div>
                    </div>
                </footer>

                {/* Global Action Button */}
                <div className="fixed bottom-10 right-10 z-50">
                    <button className="h-20 w-20 bg-[#FFD600] border-4 border-black rounded-3xl flex items-center justify-center shadow-[8px_8px_0_#000] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#000] active:translate-y-0 active:shadow-none transition-all pulse-vibe">
                        <Star className="w-10 h-10 text-black fill-current" />
                    </button>
                </div>
            </div>

            <style>{`
        @keyframes pulse-vibe {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .pulse-vibe {
          animation: pulse-vibe 2s infinite ease-in-out;
        }
      `}</style>
        </div>
    );
};
