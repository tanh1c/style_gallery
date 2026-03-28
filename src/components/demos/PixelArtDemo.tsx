import { cn } from "@/lib/utils";
import {
ArrowRight,
ChevronRight,
Coins,
Gamepad2,
Shield,
Sword,
Trophy,
Zap
} from "lucide-react";
import React from "react";

export const PixelArtDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#4b5563] text-white font-mono selection:bg-[#facc15] selection:text-black overflow-y-auto overflow-x-hidden relative h-full flex flex-col group scroll-smooth">

            {/* --- PIXEL ART GLOBAL STYLES --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
                
                .font-pixel-header { font-family: 'Press Start 2P', cursive; }
                .font-pixel-body { font-family: 'VT323', monospace; }
                
                .pixel-border {
                    border: 4px solid #000;
                    box-shadow: 
                        inset -4px -4px 0px 0px rgba(0,0,0,0.1),
                        4px 4px 0px 0px rgba(0,0,0,0.2);
                }
                .pixel-card {
                    background: white;
                    color: black;
                    border: 4px solid #000;
                    box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
                }
                .pixel-card:hover {
                    transform: translate(-2px, -2px);
                    box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);
                }
                .pixel-btn {
                    background: #facc15;
                    color: black;
                    border: 4px solid #000;
                    box-shadow: 4px 4px 0px 0px #000;
                    transition: all 0.1s;
                }
                .pixel-btn:active {
                    transform: translate(2px, 2px);
                    box-shadow: 0px 0px 0px 0px #000;
                }
                .pixel-grid {
                    background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
                @keyframes bounce-pixel {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .pixel-sprite {
                    image-rendering: pixelated;
                    animation: bounce-pixel 0.6s steps(2) infinite;
                }
                
                /* PIXEL ART CSS CHARACTERS */
                .pixel-slime {
                    width: 48px; height: 36px;
                    background: #22c55e;
                    position: relative;
                    box-shadow: 
                        4px 0 0 #000, -4px 0 0 #000, 
                        0 4px 0 #000, 0 -4px 0 #000,
                        8px 0 0 #000, -8px 0 0 #000,
                        0 8px 0 #000;
                }
                .pixel-eye {
                    width: 4px; height: 4px;
                    background: #000;
                    position: absolute;
                    top: 12px;
                }
                .pixel-heart {
                    width: 20px; height: 20px;
                    background: #ef4444;
                    box-shadow: 0 4px 0 #000, 4px 0 0 #000, -4px 0 0 #000, 0 -4px 0 #000;
                }
                .pixel-cloud {
                    width: 60px; height: 30px;
                    background: white;
                    box-shadow: 
                        4px 4px 0 #000, -4px -4px 0 #000,
                        8px 8px 0 rgba(255,255,255,0.2);
                    opacity: 0.3;
                }
                @keyframes float-side {
                    0% { transform: translateX(-20px); }
                    100% { transform: translateX(20px); }
                }
            `}} />

            {/* --- TOP NAV: HEART BAR --- */}
            <nav className="flex items-center justify-between px-6 py-4 bg-[#1f2937] border-b-8 border-black sticky top-0 z-[100] font-pixel-body">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-500 border-4 border-black relative">
                            <div className="absolute top-1 left-1 w-2 h-2 bg-white/40" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-[#facc15] font-pixel-header">VICODE.RPG</span>
                    </div>
                    <div className="hidden lg:flex gap-4 text-xl uppercase">
                        <a href="#" className="hover:text-[#facc15]">QUESTS</a>
                        <a href="#" className="hover:text-[#facc15]">GEAR</a>
                        <a href="#" className="hover:text-[#facc15]">GUILD</a>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-6 h-6 bg-red-500 border-2 border-black" />
                        ))}
                    </div>
                    <div className="text-xl font-bold bg-black px-4 py-1 text-green-400">
                        LVL 52
                    </div>
                </div>
            </nav>

            {/* --- HERO: LEVEL SELECTION (FIT 1 SCREEN) --- */}
            <section className="h-[calc(100vh-80px)] min-h-[500px] pixel-grid relative z-10 shrink-0 flex flex-col items-center justify-center px-6 py-2 overflow-hidden bg-[#374151]">
                <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full max-h-[700px]">

                    <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
                        <div className="inline-block bg-black text-[#facc15] px-4 py-1 font-pixel-header text-[8px] lg:text-[10px] animate-pulse">NEW QUEST AVAILABLE</div>
                        <h1 className="text-4xl lg:text-7xl font-pixel-header leading-tight lg:leading-none tracking-tighter [text-shadow:4px_4px_0px_#000]">
                            BUILD.<br />
                            DEPLOY.<br />
                            <span className="text-[#3b82f6]">LOOT.</span>
                        </h1>
                        <p className="text-lg lg:text-2xl font-pixel-body leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-80 decoration-dotted underline-offset-4 underline">
                            Gamified CI/CD. Slay bugs in real-time.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                            <button className="pixel-btn h-14 lg:h-16 px-8 lg:px-10 font-pixel-header text-[10px] lg:text-[12px] flex items-center gap-4 group">
                                START QUEST <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <div className="relative group cursor-pointer flex items-center gap-3 bg-white p-3 pixel-card">
                                <div className="pixel-slime pixel-sprite scale-[0.6]">
                                    <div className="pixel-eye left-[12px]" />
                                    <div className="pixel-eye left-[24px]" />
                                </div>
                                <span className="font-pixel-header text-[10px]">BUG_BOUNTY_LIVE</span>
                            </div>
                        </div>
                    </div>

                    {/* HERO VISUAL: CHARACTER SELECTION VIBE */}
                    <div className="relative flex items-center justify-center scale-90 lg:scale-100">
                        {/* BACKGROUND CLOUDS */}
                        <div className="absolute top-0 -left-10 pixel-cloud animate-[float-side_4s_ease-in-out_infinite_alternate]" />
                        <div className="absolute bottom-20 -right-20 pixel-cloud animate-[float-side_6s_ease-in-out_infinite_alternate]" />

                        <div className="w-[300px] h-[300px] lg:w-[440px] lg:h-[440px] bg-[#1f2937] pixel-border flex items-center justify-center relative shadow-[10px_10px_0_rgba(0,0,0,0.5)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                            {/* BATTLE TEXT DECOR */}
                            <div className="absolute top-10 right-10 font-pixel-header text-red-500 text-xs animate-bounce z-30">-12 HP</div>
                            <div className="absolute bottom-20 left-10 font-pixel-header text-green-400 text-[10px] animate-pulse z-30">+50 XP</div>

                            <div className="grid grid-cols-2 gap-4 lg:gap-6 p-6 lg:p-10 w-full relative z-10">
                                {[
                                    { n: "KUBE_V1", i: Gamepad2, c: "blue" },
                                    { n: "DOCK_V2", i: Shield, c: "green" },
                                    { n: "CODE_X", i: Sword, c: "red" },
                                    { n: "API_Z", i: Zap, c: "yellow" }
                                ].map((char, i) => (
                                    <div key={i} className="pixel-card p-3 lg:p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-yellow-400 group transition-colors overflow-hidden relative">
                                        <char.i className={cn("w-8 h-8 lg:w-10 lg:h-10 text-gray-800 group-hover:scale-110", i === 2 ? "animate-bounce" : "")} />
                                        <span className="text-[8px] lg:text-[9px] font-pixel-header text-center leading-none truncate w-full">{char.n}</span>
                                        {i === 2 && <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 border border-black" />}
                                    </div>
                                ))}
                            </div>

                            {/* STATS BUBBLE */}
                            <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 bg-black text-white p-4 pixel-border w-40 lg:w-48 space-y-2 font-pixel-body z-20">
                                <div className="flex justify-between text-base lg:text-xl"><span>STR</span> <span className="text-green-400">99+</span></div>
                                <div className="flex justify-between text-base lg:text-xl"><span>DEF</span> <span className="text-blue-400">85</span></div>
                                <div className="w-full h-1 lg:h-2 bg-gray-700 mt-1">
                                    <div className="h-full bg-red-500 w-3/4 animate-pulse" />
                                </div>
                                <div className="flex items-center gap-2 text-[8px] font-pixel-header uppercase mt-2">
                                    <div className="pixel-heart scale-[0.3]" />
                                    <span className="text-red-500 animate-blink-fast">CRITICAL!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FEATURES: SHOP GRID --- */}
            <section className="py-32 px-10 bg-[#374151] shrink-0 border-t-8 border-black">
                <div className="max-w-6xl mx-auto space-y-20">
                    <div className="text-center space-y-4">
                        <h2 className="text-5xl font-pixel-header uppercase [text-shadow:2px_2px_0_#1f2937]">UPGRADE_YOUR_REEL</h2>
                        <p className="text-2xl font-pixel-body opacity-60">Collect unique power-ups for your development pipeline.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { t: "Infinite Buffer", d: "Zero wait times for large builds.", i: Coins, p: "400G" },
                            { t: "Shield Patch", d: "Auto-deflect 99% of CVE threats.", i: Shield, p: "850G" },
                            { t: "Sprint Boot", d: "Double deployment movement speed.", i: Trophy, p: "MAX" }
                        ].map((item, i) => (
                            <div key={i} className="pixel-card p-8 flex flex-col gap-6 group hover:translate-y-[-4px]">
                                <div className="flex justify-between items-start">
                                    <item.i className="w-12 h-12 text-[#1f2937]" />
                                    <div className="bg-[#fbbf24] px-2 py-1 text-[10px] font-pixel-header">{item.p}</div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-pixel-header leading-tight">{item.t}</h4>
                                    <p className="text-xl font-pixel-body leading-snug">
                                        {item.d}
                                    </p>
                                </div>
                                <button className="pixel-btn w-full h-12 font-pixel-header text-[10px]">EQUIP</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PRICING: LOOT BOX --- */}
            <section className="py-40 px-10 flex flex-col items-center justify-center shrink-0 bg-[#1f2937] relative overflow-hidden">
                <div className="max-w-4xl w-full bg-white text-black p-12 lg:p-20 pixel-border relative z-10 shadow-2xl text-center space-y-12">
                    <div className="font-pixel-header text-4xl lg:text-6xl uppercase tracking-tighter">SELECT_<br />MEMBERSHIP</div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            { l: "NOOB", p: "FREE", c: "gray-400" },
                            { l: "HERO", p: "$29", c: "blue-500" },
                            { l: "LEGEND", p: "$99", c: "facc15" }
                        ].map(tier => (
                            <div key={tier.l} className="p-6 border-4 border-black space-y-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                                <div className="text-[10px] font-pixel-header text-gray-400">{tier.l}</div>
                                <div className="text-4xl font-pixel-header">{tier.p}</div>
                                <div className="h-1 w-full bg-gray-200">
                                    <div className={`h-full bg-${tier.c} w-full`} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="pixel-btn h-20 w-full max-w-md mx-auto font-pixel-header text-xl uppercase tracking-widest flex items-center justify-center gap-6">
                        OPEN_LOOT_BOX <ChevronRight className="w-8 h-8" />
                    </button>

                    <div className="text-[10px] font-pixel-header opacity-20">WARNING: CONTAINS ADDICTIVE PERFORMANCE GAINS.</div>
                </div>
            </section>

            {/* --- FOOTER: GAME OVER --- */}
            <footer className="py-24 bg-black text-white flex flex-col items-center gap-16 shrink-0 relative border-t-8 border-gray-800 font-pixel-body">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-16 gap-12 text-center lg:text-left">
                    <div className="space-y-4">
                        <div className="text-4xl font-pixel-header text-[#facc15]">VICODE_SYSTEMS</div>
                        <p className="text-xl opacity-60">© 2026 PLAYER ONE. ALL RIGHTS RESERVED.</p>
                    </div>

                    <div className="flex gap-12 text-2xl uppercase">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#facc15]">WORLD_MAP</span>
                            <a href="#" className="hover:underline">STAGES</a>
                            <a href="#" className="hover:underline">BOSSES</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[#facc15]">CREDITS</span>
                            <a href="#" className="hover:underline">PRIVACY</a>
                            <a href="#" className="hover:underline">TERMS</a>
                        </div>
                    </div>
                </div>

                <div className="text-[10px] font-pixel-header animate-pulse text-gray-500">PRESS START TO CONTINUE</div>
            </footer>
        </div>
    );
};
