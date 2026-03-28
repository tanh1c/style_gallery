import {
Camera,
ChevronRight,
Clock,
Film,
Layers,
PenTool,
Play,
Search
} from "lucide-react";
import React from "react";

export const VintageRetroDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#EADDCA] text-[#2C2C2C] font-serif selection:bg-[#C04000] selection:text-white relative h-full flex flex-col group overflow-hidden">

            {/* VINTAGE ANALOG STYLES */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Courier+Prime:wght@400;700&display=swap');
                
                .font-abril { font-family: 'Abril Fatface', cursive; }
                .font-merri { font-family: 'Merriweather', serif; }
                .font-courier { font-family: 'Courier Prime', monospace; }
                
                /* FILM GRAIN OVERLAY */
                .film-grain {
                    position: absolute;
                    inset: 0;
                    background-image: url("https://www.transparenttextures.com/patterns/stardust.png");
                    opacity: 0.15;
                    pointer-events: none;
                    z-index: 50;
                }

                /* VIGNETTE */
                .vignette {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle, transparent 50%, rgba(0,0,0,0.2) 100%);
                    pointer-events: none;
                    z-index: 40;
                }

                /* LIGHT LEAK */
                .light-leak {
                    position: absolute;
                    top: -20%;
                    left: -20%;
                    width: 60%;
                    height: 60%;
                    background: radial-gradient(circle, rgba(192, 64, 0, 0.1) 0%, transparent 70%);
                    filter: blur(80px);
                    animation: leak-float 15s infinite alternate;
                    pointer-events: none;
                    z-index: 30;
                }

                @keyframes leak-float {
                    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
                    100% { transform: translate(20%, 20%) rotate(10deg); opacity: 0.6; }
                }

                .analog-card {
                    background: #F5F5DC;
                    border: 1px solid rgba(0,0,0,0.1);
                    box-shadow: 4px 4px 0px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }
                .analog-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 8px 8px 0px rgba(192, 64, 0, 0.2);
                    border-color: #C04000;
                }

                .film-strip {
                    display: flex;
                    gap: 1rem;
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }

                .sepia-img {
                    filter: sepia(0.6) contrast(1.1) brightness(0.9);
                    transition: filter 0.5s ease;
                }
                .sepia-img:hover {
                    filter: sepia(0) contrast(1) brightness(1);
                }

                .line-texture {
                    background: repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.02) 1px, rgba(0,0,0,0.02) 2px);
                }

                @keyframes jitter {
                    0% { transform: translate(0,0); }
                    10% { transform: translate(-1px, 1px); }
                    20% { transform: translate(1px, -1px); }
                    30% { transform: translate(-1px, -1px); }
                    40% { transform: translate(1px, 1px); }
                    100% { transform: translate(0,0); }
                }
                .jitter-slow {
                    animation: jitter 0.2s infinite;
                    animation-play-state: paused;
                }
                .group:hover .jitter-slow {
                    animation-play-state: running;
                }
            `}} />

            <div className="film-grain" />
            <div className="vignette" />
            <div className="light-leak" />
            <div className="line-texture absolute inset-0 pointer-events-none opacity-50" />

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide relative z-10">

                {/* --- NAVIGATION: ANALOG ARCHIVE --- */}
                <nav className="flex items-center justify-between px-12 py-6 border-b border-black/5">
                    <div className="flex items-center gap-6 text-left">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white rotate-[-15deg] shadow-lg">
                            <Film className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                            <span className="text-2xl font-abril tracking-tight block leading-none">VICODE_8MM</span>
                            <span className="text-[9px] font-courier uppercase font-bold tracking-[0.3em] opacity-30">Archive_Station_067</span>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-12 font-courier text-[10px] uppercase font-bold tracking-widest text-black/40">
                        <a href="#" className="hover:text-[#C04000] transition-colors">The Lab</a>
                        <a href="#" className="hover:text-[#C04000] transition-colors">Exposures</a>
                        <a href="#" className="hover:text-[#C04000] transition-colors">Archives</a>
                        <button className="bg-black text-white px-10 py-3 hover:bg-[#C04000] transition-all flex items-center gap-4 border border-black hover:border-[#C04000] font-bold">
                            DEVELOP_FILM <Camera className="w-4 h-4" />
                        </button>
                    </div>
                </nav>

                {/* --- HERO: THE REEL (FIT 1 SCREEN) --- */}
                <section className="h-[calc(100vh-120px)] min-h-[600px] flex flex-col lg:flex-row items-center px-12 lg:px-24 gap-20">
                    <div className="lg:w-1/2 space-y-12 text-left">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-xs font-courier font-bold uppercase tracking-[0.4em] text-[#C04000]">
                                <Clock className="w-4 h-4" /> EST. 1976 / LAB_UPGRADED
                            </div>
                            <h1 className="text-7xl lg:text-9xl font-abril leading-[0.9] tracking-tighter text-black">
                                Narrative <br /> <span className="italic underline underline-offset-4 decoration-black/10">Development.</span>
                            </h1>
                        </div>
                        <p className="text-xl lg:text-2xl text-black/50 font-merri font-light leading-relaxed max-w-xl">
                            Transforming digital workflows into timeless analog experiences. The aesthetic precision of 8mm storytelling for the modern creative.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-8 pt-8">
                            <button className="w-full sm:w-auto bg-black text-white px-12 py-5 font-courier font-bold uppercase tracking-widest hover:bg-[#C04000] transition-all shadow-[8px_8px_0px_rgba(0,0,0,0.1)]">
                                START_PROJECTION
                            </button>
                            <div className="flex items-center gap-4 font-courier text-[10px] font-bold uppercase tracking-widest opacity-30">
                                <span className="w-12 h-px bg-black" /> ROLL_04_ACTIVE
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 h-full py-10 relative">
                        <div className="w-full h-full relative group">
                            {/* FILM FRAME */}
                            <div className="absolute inset-0 border-[20px] border-black rounded-[40px] z-20 pointer-events-none shadow-2xl" />
                            <div className="absolute inset-0 bg-[#000] rounded-[40px] overflow-hidden z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200"
                                    className="w-full h-full object-cover sepia-img opacity-80 jitter-slow"
                                    alt="Vintage Film"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between text-white font-courier text-left">
                                    <div className="space-y-2">
                                        <div className="text-[10px] uppercase font-bold tracking-[0.4em] opacity-40">Location</div>
                                        <div className="text-sm font-bold tracking-widest uppercase italic">The Silver Lab / Paris</div>
                                    </div>
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform cursor-pointer shadow-lg">
                                        <Play className="w-6 h-6 fill-current ml-1" />
                                    </div>
                                </div>
                            </div>
                            {/* FILM PERFORATIONS */}
                            <div className="absolute left-[-40px] top-0 bottom-0 flex flex-col justify-around py-10 opacity-20">
                                {[...Array(8)].map((_, i) => <div key={i} className="w-6 h-8 bg-black rounded-sm" />)}
                            </div>
                            <div className="absolute right-[-40px] top-0 bottom-0 flex flex-col justify-around py-10 opacity-20">
                                {[...Array(8)].map((_, i) => <div key={i} className="w-6 h-8 bg-black rounded-sm" />)}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- FEATURES: THE EXPOSURES --- */}
                <section className="py-40 px-12 border-t border-black/5 bg-[#F5F5DC]/40 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto space-y-32">
                        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
                            <h2 className="text-5xl lg:text-8xl font-abril tracking-tighter lg:w-1/2 text-left">Archival <br /> Capabilities.</h2>
                            <div className="text-right space-y-4 lg:w-1/3 font-courier">
                                <p className="text-sm font-bold opacity-40 max-w-sm ml-auto uppercase leading-loose">
                                    Managing deep metadata with the warmth of tactile documentation.
                                </p>
                                <div className="h-1 bg-black/10 w-full" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { t: "Silver_Cell", d: "Deep architecture built for high-fidelity narrative storage.", i: Layers, c: "001" },
                                { t: "Grain_Metric", d: "Advanced analytics wrapped in nostalgic visualization.", i: PenTool, c: "002" },
                                { t: "Exposure_API", d: "Seamless integration across global edge networks.", i: Search, c: "003" }
                            ].map((item, i) => (
                                <div key={i} className="analog-card p-12 flex flex-col gap-16 group text-left">
                                    <div className="flex items-center justify-between font-courier text-[10px] font-bold text-black/20">
                                        <span>FRAGMENT_{item.c}</span>
                                        <item.i className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-4xl font-abril tracking-tight group-hover:text-[#C04000] transition-colors">{item.t}</h4>
                                        <p className="text-base text-black/50 font-merri italic">
                                            "{item.d}"
                                        </p>
                                    </div>
                                    <div className="pt-4 mt-auto">
                                        <button className="flex items-center gap-4 font-courier text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">
                                            VIEW_DETAIL <ChevronRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- FULL WIDTH QUOTE --- */}
                <section className="py-48 px-12 text-center bg-black text-white relative">
                    <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                        <cite className="font-courier text-[10px] font-bold uppercase tracking-[1em] opacity-40">TECHNICAL_NOTE_09</cite>
                        <blockquote className="text-4xl lg:text-7xl font-abril italic leading-tight tracking-tight">
                            "Nostalgia is not a step backward, but a filter to reveal the enduring clarity of human experience."
                        </blockquote>
                        <div className="flex items-center justify-center gap-6 pt-8 font-courier text-[10px] font-bold">
                            <span className="w-20 h-[1px] bg-white/20" />
                            SIGNAL_STRENGTH_100%
                            <span className="w-20 h-[1px] bg-white/20" />
                        </div>
                    </div>
                    <div className="absolute inset-0 opacity-20 pointer-events-none grayscale" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542204172-3c1393663a8a?auto=format&fit=crop&q=80&w=1200")', backgroundSize: 'cover' }} />
                </section>

                {/* --- FOOTER: THE CANISTER --- */}
                <footer className="py-40 px-12 border-t border-black/5 bg-[#EADDCA] relative overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-32 relative z-10">
                        <div className="space-y-12 text-left">
                            <div className="font-abril text-4xl block text-black">ViCode_Analog.</div>
                            <div className="space-y-4 font-merri">
                                <p className="max-w-xs text-xl opacity-40 italic leading-relaxed">
                                    Documenting the future through the lens of the past.
                                </p>
                                <div className="pt-6 font-courier text-[10px] font-bold flex gap-6 text-black/40">
                                    <span>FILM_TYPE: KODAK_400</span>
                                    <span>ISO: 100</span>
                                    <span>YEAR: 2026</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-2 gap-32 font-courier">
                            {[
                                { t: "REELS", l: ["History", "Exhibits", "Contact", "Archives"] },
                                { t: "PROCESS", l: ["Development", "Scanning", "Drafting", "Labs"] }
                            ].map((group, i) => (
                                <div key={i} className="space-y-10 text-left">
                                    <h5 className="font-bold uppercase tracking-[0.5em] text-[10px] opacity-20 text-black">{group.t}</h5>
                                    <ul className="space-y-6 text-sm font-bold text-black/60 uppercase">
                                        {group.l.map(link => (
                                            <li key={link}><a href="#" className="hover:text-black transition-colors hover:underline underline-offset-8">{link}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-40 pt-10 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center text-[9px] font-courier font-bold uppercase tracking-[0.5em] opacity-20">
                        <span>&copy; 1976-2026 ViCode Analog Systems Inc.</span>
                        <div className="flex gap-10">
                            <span className="cursor-pointer hover:text-black transition-colors">License</span>
                            <span className="cursor-pointer hover:text-black transition-colors">Archive_Policy</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};
