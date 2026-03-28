import { cn } from "@/lib/utils";
import {
Activity,
ArrowRight,
Code,
Eye,
Mic,
Radio,
Volume2,
Zap
} from "lucide-react";
import React from "react";

export const VoiceMultimodalDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#050505] text-[#FFFFFF] font-sans selection:bg-[#7C3AED] selection:text-white relative h-full flex flex-col group font-inter overflow-hidden">

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
                {/* --- SONIC STYLES --- */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;600;800&family=Inter:wght@300;400;600;800&display=swap');
                    
                    .font-inter { font-family: 'Inter', sans-serif; }
                    .font-bric { font-family: 'Bricolage Grotesque', sans-serif; }
                    
                    .sonic-glow {
                        background: radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
                    }
                    
                    .wave-bar {
                        height: 40px;
                        width: 4px;
                        background: #7C3AED;
                        border-radius: 2px;
                        animation: pulse-wave 1.5s ease-in-out infinite;
                    }
                    
                    @keyframes pulse-wave {
                        0%, 100% { height: 20px; opacity: 0.5; }
                        50% { height: 60px; opacity: 1; }
                    }

                    .aura-btn {
                        background: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%);
                        box-shadow: 0 0 30px rgba(124, 58, 237, 0.4);
                        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                    }
                    .aura-btn:hover {
                        transform: scale(1.05);
                        box-shadow: 0 0 50px rgba(124, 58, 237, 0.6);
                    }

                    .multimodal-card {
                        background: rgba(255, 255, 255, 0.03);
                        backdrop-filter: blur(10px);
                        border: 1px solid rgba(255, 255, 255, 0.05);
                        transition: all 0.4s ease;
                    }
                    .multimodal-card:hover {
                        background: rgba(255, 255, 255, 0.05);
                        border-color: rgba(124, 58, 237, 0.3);
                        transform: translateY(-5px);
                    }
                `}} />

                <div className="sonic-glow absolute inset-0 z-0 pointer-events-none" />

                {/* AMBIENT IRIDESCENT ORBS */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-pink-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

                {/* --- NAVIGATION --- */}
                <nav className="flex items-center justify-between px-10 py-8 relative z-20">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 animate-pulse" />
                        <span className="text-xl font-bold tracking-tight font-bric">ViCode_Sonic</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold uppercase tracking-widest text-white/40">
                        <a href="#" className="hover:text-white transition-colors">Modality</a>
                        <a href="#" className="hover:text-white transition-colors">Sonic Core</a>
                        <a href="#" className="hover:text-white transition-colors">Multiverse</a>
                        <button className="bg-white/5 border border-white/10 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">Enable Audio</button>
                    </div>
                </nav>

                {/* --- HERO: THE SONIC PULSE (FIT 1 SCREEN) --- */}
                <section className="h-[calc(100vh-100px)] min-h-[600px] flex flex-col items-center justify-center px-10 relative z-10 text-center space-y-12">
                    <div className="relative group cursor-pointer transition-transform duration-700">
                        {/* MAIN PULSE RING */}
                        <div className="absolute inset-[-40px] rounded-full border border-purple-500/20 animate-ping duration-[3000ms]" />
                        <div className="absolute inset-[-20px] rounded-full border border-pink-500/30 animate-ping duration-[2000ms]" />

                        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-1 aura-btn">
                            <div className="w-full h-full rounded-full bg-black/40 backdrop-blur-3xl flex items-center justify-center overflow-hidden">
                                <div className="flex items-end gap-1">
                                    <div className="wave-bar" style={{ animationDelay: '0.1s' }} />
                                    <div className="wave-bar" style={{ animationDelay: '0.3s' }} />
                                    <div className="wave-bar" style={{ animationDelay: '0.2s' }} />
                                    <div className="wave-bar" style={{ animationDelay: '0.4s' }} />
                                    <div className="wave-bar" style={{ animationDelay: '0.1s' }} />
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-12 -right-12 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2 animate-bounce">
                            <Mic className="w-3 h-3 text-purple-400" />
                            <span className="text-[10px] font-bold uppercase tracking-tighter">AI Listening...</span>
                        </div>
                    </div>

                    <div className="space-y-6 max-w-4xl">
                        <h1 className="text-5xl lg:text-7xl font-bric font-black leading-[0.95] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                            Infrastructure <br />at the speed of <span className="italic font-light">sound.</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-lg text-white/50 font-medium leading-relaxed">
                            Our multimodal engine orchestrates high-fidelity storytelling through voice, code, and intent. The next evolution of SaaS is auditory.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                        <button className="aura-btn px-10 py-5 rounded-full font-bold flex items-center gap-3">
                            Initialize Voice Path <Zap className="w-4 h-4 fill-white" />
                        </button>
                        <button className="px-10 py-5 rounded-full border border-white/10 font-bold hover:bg-white/5 transition-all flex items-center gap-2">
                            Watch Presentation <Volume2 className="w-4 h-4" />
                        </button>
                    </div>
                </section>

                {/* --- MULTIMODALE NODES --- */}
                <section className="py-32 px-10 relative z-10 space-y-20">
                    <div className="max-w-2xl mx-auto flex flex-col items-center text-center space-y-4">
                        <div className="px-4 py-1 bg-purple-600/10 text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-purple-500/20">
                            Core Modalities
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bric font-bold">A Triad of Intent.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { t: "Voice Stream", d: "High-fidelity audio processing that captures nuance and sentiment.", i: Radio, c: "from-purple-500/20" },
                            { t: "Visual Intent", d: "Near-instant screen understanding and visual story mapping.", i: Eye, c: "from-pink-500/20" },
                            { t: "Logic Flow", d: "Automated code generation through natural conversational paths.", i: Code, c: "from-blue-500/20" }
                        ].map((item, i) => (
                            <div key={i} className="multimodal-card p-10 flex flex-col gap-8 group">
                                <div className={cn("w-14 h-14 bg-gradient-to-tr to-transparent rounded-2xl flex items-center justify-center", item.c)}>
                                    <item.i className="w-7 h-7 text-white" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold">{item.t}</h4>
                                    <p className="text-base leading-relaxed text-white/40 font-medium">
                                        {item.d}
                                    </p>
                                </div>
                                <div className="pt-4 flex items-center gap-2 text-white/30 group-hover:text-purple-400 transition-colors font-bold text-xs">
                                    ANALYZE MODALITY <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SONIC ANALYTICS GRID --- */}
                <section className="py-40 px-10 relative z-10">
                    <div className="max-w-6xl mx-auto multimodal-card rounded-[40px] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] pointer-events-none" />

                        <div className="lg:w-1/2 space-y-10 relative z-10">
                            <div className="space-y-4">
                                <div className="flex gap-1 animate-pulse">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1 h-3 bg-purple-500 rounded-full" />)}
                                </div>
                                <h3 className="text-5xl font-bric font-black">Sonic <br /> Architecture.</h3>
                            </div>
                            <p className="text-xl text-white/50 leading-loose">
                                Monitor your entire infrastructure through auditory pulse-mapping. We convert server metrics into harmonic frequencies, allowing you to "hear" bottlenecks before they occur.
                            </p>
                            <div className="flex gap-12 border-t border-white/10 pt-10">
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold font-bric">0.03ms</div>
                                    <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Audio Latency</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold font-bric">99.9%</div>
                                    <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Spectral Accuracy</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full aspect-square bg-[#0a0a0a] rounded-3xl border border-white/5 p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
                            {/* DECORATIVE VISUALIZER */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                <div className="w-[80%] h-[80%] border border-white/10 rounded-full animate-ping" />
                                <div className="w-[60%] h-[60%] border border-white/10 rounded-full animate-pulse" />
                            </div>

                            <div className="grid grid-cols-8 items-end gap-2 h-40">
                                {[40, 70, 45, 90, 65, 80, 50, 60].map((h, i) => (
                                    <div
                                        key={i}
                                        className="w-3 bg-gradient-to-t from-purple-600 to-pink-500 rounded-full animate-pulse"
                                        style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                                    />
                                ))}
                            </div>

                            <div className="absolute bottom-8 right-8 flex items-center gap-3">
                                <Activity className="w-4 h-4 text-purple-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Live Spectrum Analysis</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- FOOTER --- */}
                <footer className="py-32 px-10 relative z-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-20">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600" />
                            <span className="text-2xl font-black font-bric">ViCode_</span>
                        </div>
                        <p className="max-w-xs text-lg opacity-40 leading-relaxed italic">
                            Auditory infrastructure for the modern builder. Real-time multiverse sync.
                        </p>
                        <div className="flex gap-6 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                            <span>&copy; 2026 VOID</span>
                            <span className="hover:text-white transition-all cursor-pointer">Manifesto</span>
                            <span className="hover:text-white transition-all cursor-pointer">Multimodal API</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-20 lg:gap-40">
                        {[
                            { t: "CHANNELS", l: ["Voice", "Vision", "Logic", "Pulse"] },
                            { t: "CORE", l: ["Login", "Register", "Discord", "Documentation"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-8">
                                <h5 className="font-bold uppercase tracking-[0.3em] text-[10px] text-white/20">{group.t}</h5>
                                <ul className="space-y-4 font-bold text-base">
                                    {group.l.map(link => (
                                        <li key={link}><a href="#" className="hover:text-purple-400 transition-colors">{link}</a></li>
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
