import { ArrowRight,Code,Globe,Heart,Rocket,Shield,Smile,Sparkles,Users,Zap } from "lucide-react";
import React from "react";

export const ClaymorphismDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#F1F5F9] overflow-y-auto text-[#1E293B] font-sans selection:bg-[#6366F1]/20 pb-32">
            <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-10 space-y-12">

                {/* Soft Clay Header */}
                <header className="h-20 flex items-center justify-between px-8 bg-white border-b-4 border-black/5 rounded-[32px] sticky top-6 z-50 shadow-[10px_10px_20px_rgba(0,0,0,0.05),inset_-5px_-5px_15px_rgba(0,0,0,0.02),inset_5px_5px_15px_rgba(255,255,255,1)]">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-12 h-12 bg-[#6366F1] rounded-[18px] flex items-center justify-center shadow-[6px_6px_12px_rgba(99,102,241,0.3),inset_-3px_-3px_8px_rgba(0,0,0,0.2),inset_3px_3px_8px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform">
                            <Code className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-2xl tracking-tighter text-[#1E293B]">ViCode</span>
                            <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#6366F1]">Cloud Engine</span>
                        </div>
                    </div>
                    <nav className="hidden lg:flex items-center gap-8 font-extrabold text-sm text-[#1E293B]/40">
                        {["Play", "Scale", "Club"].map(item => (
                            <button key={item} className="hover:text-[#6366F1] transition-colors hover:scale-105 transform">
                                {item}
                            </button>
                        ))}
                    </nav>
                    <button className="bg-[#6366F1] text-white px-8 py-3.5 font-black text-xs uppercase tracking-widest rounded-[20px] shadow-[8px_8px_16px_rgba(99,102,241,0.2),inset_-4px_-4px_10px_rgba(0,0,0,0.2),inset_4px_4px_10px_rgba(255,255,255,0.4)] hover:-translate-y-1 active:translate-y-0.5 transition-all">
                        Join Now
                    </button>
                </header>

                {/* Playful Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-0">
                    <div className="space-y-12 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2.5 bg-white rounded-full px-5 py-2 shadow-[4px_4px_10px_rgba(0,0,0,0.03),inset_-2px_-2px_5px_rgba(0,0,0,0.01),inset_2px_2px_5px_rgba(255,255,255,1)]">
                            <Sparkles className="w-4 h-4 text-[#F59E0B] fill-current" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1E293B]/60">V3 is now Squishy!</span>
                        </div>
                        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter text-[#1E293B]">
                            Software <br />
                            <span className="text-[#6366F1]">Joyfully</span> <br />
                            Inflated.
                        </h1>
                        <p className="text-2xl text-[#1E293B]/50 leading-snug max-w-lg mx-auto lg:mx-0 font-bold tracking-tight">
                            Infrastructure doesn't have to be cold. Experience the cloud through a soft, friendly lens. Build better. Build softer.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 pt-4">
                            <button className="h-20 px-10 bg-[#EC4899] text-white rounded-[32px] text-lg font-black shadow-[10px_10px_20px_rgba(236,72,153,0.3),inset_-5px_-5px_12px_rgba(0,0,0,0.2),inset_5px_5px_12px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 group">
                                Build Now
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="h-20 px-10 bg-white text-[#1E293B]/40 hover:text-[#1E293B] rounded-[32px] text-lg font-black shadow-[8px_8px_16px_rgba(0,0,0,0.03),inset_-4px_-4px_10px_rgba(0,0,0,0.01),inset_4px_4px_10px_rgba(255,255,255,1)] transition-all">
                                The_Tour
                            </button>
                        </div>
                    </div>

                    <div className="relative group">
                        {/* Soft Asset Frame */}
                        <div className="absolute -inset-10 bg-[#6366F1]/5 blur-[120px] rounded-full -z-10 group-hover:bg-[#6366F1]/10 transition-colors" />
                        <div className="w-full aspect-square bg-[#3B82F6] rounded-[64px] shadow-[20px_20px_60px_rgba(0,0,0,0.05),inset_-10px_-10px_25px_rgba(0,0,0,0.2),inset_10px_10px_25px_rgba(255,255,255,0.4)] p-12 flex items-center justify-center relative overflow-hidden group hover:rotate-2 transition-transform duration-700">
                            <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-[40px]" />
                            <img
                                src="/vicode_clay_cloud_robot.png"
                                alt="ViCode Soft Robot"
                                className="w-full h-full object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.2)] z-10 hover:scale-110 transition-transform duration-1000"
                            />

                            {/* Squishy Decorations */}
                            <div className="absolute bottom-10 right-10 flex gap-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-6 h-6 bg-white rounded-full shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]" />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Grid - Bubbly Blocks */}
                <section className="space-y-16">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <div className="w-16 h-2 bg-[#6366F1] rounded-full shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5)]" />
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#1E293B]">Soft.Kit</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: Zap, title: "Snap Sync", desc: "Instant deployment that feels like a click.", bg: "bg-white" },
                            { icon: Shield, title: "Vault Lock", desc: "Security that wraps around your data.", bg: "bg-white" },
                            { icon: Globe, title: "Cloud Mesh", desc: "Global reach with a soft touch.", bg: "bg-[#6366F1]", t: "text-white" },
                            { icon: Users, title: "Friendly Dev", desc: "Built for teams of all shapes.", bg: "bg-white" },
                            { icon: Rocket, title: "Bubbly Scale", desc: "Scale up without the hard edges.", bg: "bg-white" },
                            { icon: Heart, title: "Joy UX", desc: "Infrastructure that makes you smile.", bg: "bg-white" }
                        ].map((f, i) => (
                            <div key={i} className={`p-12 ${f.bg} ${f.t || 'text-[#1E293B]'} rounded-[48px] shadow-[15px_15px_30px_rgba(0,0,0,0.03),inset_-8px_-8px_20px_rgba(0,0,0,0.02),inset_8px_8px_20px_rgba(255,255,255,1)] space-y-10 hover:scale-105 transition-all cursor-default group`}>
                                <div className="w-20 h-20 bg-[#F1F5F9] rounded-[24px] flex items-center justify-center shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,1)] group-hover:rotate-12 transition-transform">
                                    <f.icon className="w-10 h-10 text-[#6366F1]" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black tracking-tight uppercase">{f.title}</h3>
                                    <p className="text-base font-bold opacity-40 leading-tight uppercase tracking-widest">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Squishy Info Section */}
                <section className="bg-white rounded-[64px] shadow-[25px_25px_50px_rgba(0,0,0,0.04),inset_-12px_-12px_30px_rgba(0,0,0,0.02),inset_12px_12px_30px_rgba(255,255,255,1)] p-12 lg:p-20 relative overflow-hidden group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
                        <div className="space-y-12">
                            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter italic leading-none text-[#1E293B]">Softly<br /><span className="text-[#6366F1]">Driven.</span></h2>
                            <p className="text-2xl text-[#1E293B]/40 font-bold leading-tight">We believe software should feel tactile. Every deployment, every shard, perfectly rounded for you.</p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { l: "Joy Index", v: "100%", bg: "bg-[#6366F1]", t: "text-white" },
                                    { l: "Deploy Time", v: "0.2s", bg: "bg-white", t: "text-[#1E293B]" }
                                ].map((s, i) => (
                                    <div key={i} className={`${s.bg} ${s.t} p-10 rounded-[32px] shadow-[10px_10px_20px_rgba(0,0,0,0.05),inset_4px_4px_10px_rgba(255,255,255,0.2),inset_-4px_-4px_10px_rgba(0,0,0,0.1)]`}>
                                        <div className="text-4xl font-black">{s.v}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest mt-2 opacity-50">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#1E293B] rounded-[48px] p-12 shadow-[20px_20px_40px_rgba(0,0,0,0.2),inset_10px_10px_20px_rgba(255,255,255,0.05)] relative min-h-[400px] flex flex-col justify-center overflow-hidden">
                            <div className="absolute top-10 right-10 text-white/5 font-black text-6xl italic select-none">CLAY</div>
                            <div className="space-y-8 font-bold text-lg">
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 bg-[#6366F1] rounded-2xl flex items-center justify-center shadow-[inset_2px_2px_4px_rgba(255,255,255,0.5)]">
                                        <Smile className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-white">vicode deploy --joy</span>
                                </div>
                                <div className="pl-16 space-y-4 text-white/40">
                                    <p>{">"} Inflating environment...</p>
                                    <p className="text-[#6366F1] font-black">✓ SOFT_SUCCESS_12ms</p>
                                </div>
                                <div className="pt-6">
                                    <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden shadow-inner">
                                        <div className="h-full w-[88%] bg-gradient-to-r from-[#6366F1] to-[#EC4899] rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Playful Footer */}
                <footer className="pt-32 pb-16 space-y-24 border-t-8 border-white">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-16">
                        <div className="col-span-2 space-y-10 text-left">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-[#6366F1] text-white flex items-center justify-center rounded-[24px] shadow-[8px_8px_16px_rgba(99,102,241,0.2),inset_4px_4px_10px_rgba(255,255,255,0.4)]">
                                    <span className="font-black text-2xl">V</span>
                                </div>
                                <span className="font-black text-3xl tracking-tighter uppercase italic">ViCode Soft.</span>
                            </div>
                            <p className="text-base text-[#1E293B]/30 leading-snug max-w-sm font-bold uppercase tracking-widest">
                                The toy-like infrastructure that runs the world's most serious code. 2026.
                            </p>
                        </div>
                        {[
                            { title: "Kit", links: ["Squish", "Cloud", "Play"] },
                            { title: "Help", links: ["Docs", "SDK", "Lab"] },
                            { title: "Team", links: ["Blog", "Jobs", "Press"] },
                            { title: "Fun", links: ["Twitter", "Github", "Discord"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-8 text-left">
                                <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#1E293B]">
                                    {group.title}
                                </h5>
                                <ul className="space-y-5 text-left">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-xs text-[#1E293B]/40 hover:text-[#6366F1] transition-colors uppercase font-black tracking-[.2em]">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-20 border-t-4 border-white text-[11px] font-black uppercase tracking-[0.3em] text-[#1E293B]/20">
                        <span className="px-10 py-5 bg-white rounded-[24px] shadow-[8px_8px_16px_rgba(0,0,0,0.03)]">© 2026 ViCode Clay Foundation. Soft Infrastructure Grp.</span>
                        <div className="flex gap-16 font-bold opacity-30">
                            <span>V-3.0_RELEASE</span>
                            <span>STATE: INFLATED</span>
                        </div>
                    </div>
                </footer>

                {/* Global Action Button - Bouncy */}
                <div className="fixed bottom-12 right-12 z-50">
                    <button className="h-24 w-24 bg-[#6366F1] text-white rounded-full flex items-center justify-center shadow-[15px_15px_30px_rgba(99,102,241,0.3),inset_8px_8px_16px_rgba(255,255,255,0.4),inset_-8px_-8px_16px_rgba(0,0,0,0.2)] hover:scale-110 active:scale-95 transition-all group animate-bounce-soft">
                        <Smile className="w-12 h-12 text-white fill-current group-hover:scale-125 transition-transform" />
                    </button>
                </div>
            </div>

            <style>{`
        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px) scaleX(0.95) scaleY(1.05); }
        }
        .animate-bounce-soft {
          animation: bounce-soft 3s infinite ease-in-out;
        }
      `}</style>
        </div>
    );
};
