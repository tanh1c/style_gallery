import { cn } from "@/lib/utils";
import {
Cpu,
Flame,
Ghost,
Globe,
Heart,
Music,
Smile,
Sparkles,
Star,
Terminal,
Zap
} from "lucide-react";
import React from "react";

export const GenZChaosDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#EEFF41] text-[#000000] font-sans selection:bg-[#E11D48] selection:text-white relative h-full flex flex-col group font-epilogue overflow-hidden">

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
                {/* --- GEN Z CHAOS STYLES --- */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Epilogue:ital,wght@0,400;0,700;0,900;1,700&family=Bungee&display=swap');
                    
                    .font-anton { font-family: 'Anton', sans-serif; }
                    .font-epilogue { font-family: 'Epilogue', sans-serif; }
                    .font-bungee { font-family: 'Bungee', cursive; }
                    
                    .chaos-bg {
                        background: radial-gradient(circle at center, #EEFF41 0%, #00E5FF 100%);
                    }
                    
                    .sticker {
                        filter: drop-shadow(4px 4px 0px rgba(0,0,0,1));
                        transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    }
                    .sticker:hover {
                        transform: scale(1.2) rotate(12deg);
                    }
                    
                    .chaos-card {
                        background: #FFFFFF;
                        border: 3px solid #000000;
                        box-shadow: 10px 10px 0px #E11D48;
                        transition: all 0.2s ease;
                    }
                    .chaos-card:hover {
                        transform: translate(5px, 5px);
                        box-shadow: 0px 0px 0px #000000;
                    }
                    
                    .neon-button {
                        background: #E11D48;
                        color: #FFFFFF;
                        border: 3px solid #000000;
                        box-shadow: 6px 6px 0px #000000;
                        transition: all 0.1s active;
                    }
                    .neon-button:active {
                        transform: translate(4px, 4px);
                        box-shadow: 0px 0px 0px #000000;
                    }

                    @keyframes bounce-slow {
                        0%, 100% { transform: translateY(-5%) rotate(-2deg); }
                        50% { transform: translateY(5%) rotate(2deg); }
                    }
                    .animate-bounce-slow {
                        animation: bounce-slow 4s ease-in-out infinite;
                    }
                `}} />

                <div className="chaos-bg absolute inset-0 z-0 pointer-events-none opacity-40" />

                {/* --- NAVIGATION (MAXIMALIST) --- */}
                <nav className="flex items-center justify-between px-8 py-5 relative z-20 border-b-[4px] border-black bg-white">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#E11D48] border-[3px] border-black flex items-center justify-center text-white rotate-[-6deg] hover:rotate-0 transition-transform cursor-pointer">
                            <Flame className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-anton uppercase tracking-tighter leading-none">ViCode_Chaos_v1</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-8 font-black text-sm uppercase">
                        <a href="#" className="bg-[#EEFF41] px-3 py-1 border-[2px] border-black rotate-3 hover:rotate-0 transition-all">Collabs</a>
                        <a href="#" className="bg-[#00E5FF] px-3 py-1 border-[2px] border-black -rotate-2 hover:rotate-0 transition-all">The_Drop</a>
                        <a href="#" className="bg-[#FF9100] px-3 py-1 border-[2px] border-black rotate-1 hover:rotate-0 transition-all">Manifesto</a>
                        <button className="neon-button px-6 py-2 font-black text-xs">JOIN_THE_CULT</button>
                    </div>
                </nav>

                {/* --- HERO: THE MAXIMALIST EXPLOSION (FIT 1 SCREEN) --- */}
                <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col items-center justify-center px-6 relative z-10 text-center overflow-hidden">

                    {/* STICKER BOMBING BACKGROUND */}
                    <div className="absolute top-20 left-20 sticker animate-bounce-slow">
                        <Star className="w-16 h-16 text-[#E11D48] fill-[#E11D48]" />
                    </div>
                    <div className="absolute top-40 right-40 sticker animate-bounce-slow animation-delay-500">
                        <Smile className="w-20 h-20 text-[#00E5FF] fill-[#00E5FF]" />
                    </div>
                    <div className="absolute bottom-40 left-1/4 sticker animate-bounce-slow animation-delay-1000">
                        <Heart className="w-12 h-12 text-[#FF9100] fill-[#FF9100]" />
                    </div>
                    <div className="absolute bottom-20 right-1/4 sticker animate-bounce-slow text-[#EEFF41] fill-[#EEFF41]">
                        <Flame className="w-16 h-16" />
                    </div>

                    <div className="relative z-20 space-y-2">
                        <div className="inline-block bg-black text-white font-bungee px-4 py-1 text-sm rotate-[-2deg] mb-6">
                            DROP #056 // SYSTEM_OVERLOAD
                        </div>
                        <h1 className="text-8xl md:text-[12rem] font-anton uppercase leading-[0.75] tracking-[-0.05em] text-black">
                            DECODE<br />
                            THE_CHAOS
                        </h1>
                        <p className="max-w-xl mx-auto text-3xl font-black italic uppercase leading-none pt-8 text-[#E11D48] drop-shadow-[2px_2px_0_#FFF]">
                            Parallax storytelling for the dopamine-dependent generation.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-12 relative z-20">
                        <button className="neon-button px-12 py-6 text-2xl font-anton uppercase flex items-center gap-4 hover:scale-105 transition-transform">
                            F***IN START <Sparkles className="w-8 h-8" />
                        </button>
                        <button className="px-12 py-6 bg-white border-[3px] border-black font-anton text-2xl uppercase hover:translate-x-1 hover:-translate-y-1 transition-all">
                            WTF IS THIS?
                        </button>
                    </div>

                    {/* DECORATIVE TEXT */}
                    <div className="absolute right-0 bottom-20 font-bungee text-[8rem] opacity-5 select-none pointer-events-none whitespace-nowrap">
                        STAY REAL // STAY LOUD
                    </div>
                </section>

                {/* --- FEATURES: THE MESSY GRID --- */}
                <section className="py-32 px-10 relative z-10 space-y-24 bg-white border-y-[4px] border-black">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-end justify-between gap-10">
                        <h2 className="text-6xl lg:text-9xl font-anton uppercase leading-none -rotate-2">X-TREME_LOGIC</h2>
                        <p className="text-2xl font-black max-w-sm italic text-right uppercase leading-none text-[#00E5FF] drop-shadow-[1px_1px_0_#000]">
                            We don't do boring benchmarks. We do visual violence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto pt-10">
                        {[
                            { t: "Dopamine Sync", d: "Hyper-fast visual feedback for short attention spans. Never a dull pixel.", i: Ghost, c: "#EEFF41" },
                            { t: "Viral Nodes", d: "Global infrastructure built for clout and massive scaling. No cap.", i: Globe, c: "#00E5FF" },
                            { t: "Acid Telemetry", d: "Stark, vibrant data streams visualized through extreme maximalism.", i: Terminal, c: "#E11D48" },
                            { t: "Clout Engine", d: "Built-in virality tools for every deployment. Make them witness.", i: Music, c: "#FF9100" },
                            { t: "Mainframe Flex", d: "Ultra-heavy duty server-side processing for complex creative chaos.", i: Cpu, c: "#FF3D00" },
                            { t: "Hype Stack", d: "Always the latest, most experimental frameworks. No legacy bs.", i: Zap, c: "#B2FF59" }
                        ].map((item, i) => (
                            <div key={i} className={cn(
                                "chaos-card p-12 flex flex-col gap-10 group cursor-pointer",
                                i % 2 === 0 ? "rotate-2" : "-rotate-1"
                            )}>
                                <div className="w-16 h-16 border-[3px] border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0_#000]" style={{ backgroundColor: item.c }}>
                                    <item.i className="w-8 h-8" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-4xl font-anton uppercase tracking-tight">{item.t}</h4>
                                    <p className="text-lg font-bold leading-[1.2] opacity-80 uppercase tracking-tight">
                                        {item.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- PRICING: THE HYPE TIERS --- */}
                <section className="py-40 px-6 relative z-10 flex flex-col items-center gap-24 bg-[#E11D48] bg-opacity-90 overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-wrap gap-10 p-20">
                        {Array.from({ length: 50 }).map((_, i) => <Star key={i} className="w-10 h-10 fill-white" />)}
                    </div>

                    <div className="flex flex-col items-center gap-4 relative z-10">
                        <h3 className="text-7xl md:text-9xl font-anton text-white uppercase tracking-tighter italic shadow-[4px_4px_0_#000]">Secure_Your_Spot</h3>
                        <p className="bg-black text-[#EEFF41] px-6 py-2 font-bungee text-sm mt-4">NO_REFUNDS // ONLY_GAINS</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full relative z-10">
                        {[
                            { l: "Newbie", p: "$0", f: ["Basic Chaos", "10 Drops/Mo", "Generic Vanity"], c: "#00E5FF" },
                            { l: "Main Player", p: "$69", f: ["Extreme Depth", "Unlimited Drops", "Custom Stickers", "Clout Boosting"], c: "#EEFF41", primary: true },
                            { l: "Whale", p: "$420", f: ["Full System Admin", "Private Server Flex", "White Glove Chaos", "Legacy Access"], c: "#FF9100" }
                        ].map((item, i) => (
                            <div key={i} className={cn(
                                "chaos-card p-12 flex flex-col gap-10 relative overflow-hidden",
                                i === 1 ? "scale-110 z-20 bg-white" : "bg-[#f4f4f4]"
                            )}>
                                {item.primary && (
                                    <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-[10px] font-black uppercase rotate-6">MOST_STEEZE</div>
                                )}
                                <div className="space-y-1">
                                    <div className="text-xl font-anton uppercase opacity-60 tracking-widest">{item.l}</div>
                                    <div className="text-8xl font-anton uppercase">{item.p}</div>
                                </div>
                                <div className="space-y-4 py-12 border-y-[3px] border-black font-black text-sm uppercase">
                                    {item.f.map(f => (
                                        <div key={f} className="flex items-center gap-4">
                                            <Flame className="w-5 h-5" style={{ color: item.c }} />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <button className={cn(
                                    "w-full py-6 font-anton text-2xl uppercase border-[3px] border-black shadow-[6px_6px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all",
                                    item.primary ? "bg-[#EEFF41]" : "bg-white"
                                )}>
                                    GET_ACCESS
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FOOTER: THE CHAOTIC ENDING --- */}
                <footer className="py-32 px-10 relative z-10 bg-black text-white flex flex-col lg:flex-row justify-between items-start gap-20">
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-[#00E5FF] border-[4px] border-white flex items-center justify-center text-black rotate-[-12deg]">
                                <Flame className="w-10 h-10" />
                            </div>
                            <span className="text-6xl font-anton uppercase tracking-tighter">ViCode Chaos</span>
                        </div>
                        <p className="max-w-md text-3xl font-black italic uppercase leading-[0.9]">
                            Born in the browser, raised in the void. Stay curious or stay quiet.
                        </p>
                        <div className="flex gap-4">
                            {['Discord', 'TikTok', 'Twitter', 'Twitch'].map(s => (
                                <a key={s} href="#" className="border-[2px] border-white px-4 py-1 font-bold text-xs hover:bg-white hover:text-black transition-all rotate-3">{s}</a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
                        {[
                            { t: "THE_LINKS", l: ["Chaos", "Drops", "Manifesto", "Lore"] },
                            { t: "THE_RULES", l: ["Privcy", "Rules", "Terms", "Clout"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-8">
                                <h5 className="font-anton uppercase tracking-[0.2em] text-xl text-[#EEFF41]">{group.t}</h5>
                                <ul className="space-y-4 font-black text-xl uppercase tracking-tighter">
                                    {group.l.map(link => (
                                        <li key={link}><a href="#" className="hover:line-through decoration-[#E11D48] decoration-4">{link}</a></li>
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
