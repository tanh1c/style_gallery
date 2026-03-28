import {
ArrowRight,
ChevronRight,
Globe2,
Layers,
Play,
User,
Zap
} from "lucide-react";
import React from "react";

export const EditorialMagazineDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#FDFDFC] text-[#18181B] font-sans selection:bg-[#18181B] selection:text-[#FDFDFC] relative h-full flex flex-col group font-public overflow-hidden">

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
                {/* --- EDITORIAL STYLES --- */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Public+Sans:wght@300;400;600;800&display=swap');
                    
                    .font-public { font-family: 'Public Sans', sans-serif; }
                    .font-serif { font-family: 'Libre Baskerville', serif; }
                    
                    .editorial-line {
                        height: 1px;
                        background: #18181B;
                        width: 100%;
                        opacity: 0.1;
                    }

                    .vertical-text {
                        writing-mode: vertical-rl;
                        text-orientation: mixed;
                    }

                    .magazine-hover {
                        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
                    }
                    .magazine-hover:hover {
                        transform: scale(1.02);
                        box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.15);
                    }

                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in {
                        animation: fadeInUp 1s ease-out forwards;
                    }
                `}} />

                {/* --- MASTHEAD / NAV --- */}
                <header className="border-b border-black/5 px-10 py-8 flex items-center justify-between bg-white relative z-20">
                    <div className="flex items-center gap-10">
                        <div className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30 hidden md:block text-black">Issue No. 65</div>
                        <div className="font-serif text-3xl font-bold tracking-tighter text-black">VICODE_CHRONICLE.</div>
                    </div>
                    <nav className="hidden lg:flex items-center gap-10 font-public text-[10px] uppercase font-bold tracking-widest text-black/40">
                        <a href="#" className="hover:text-black transition-colors">Narration</a>
                        <a href="#" className="hover:text-black transition-colors">Infrastructure</a>
                        <a href="#" className="hover:text-black transition-colors">Archives</a>
                        <button className="bg-black text-white px-8 py-2.5 rounded-none hover:bg-zinc-800 transition-all font-black">SUBSCRIBE</button>
                    </nav>
                </header>

                {/* --- HERO: COVER STORY (FIT 1 SCREEN) --- */}
                <section className="h-[calc(100vh-100px)] min-h-[600px] flex flex-col lg:flex-row items-center relative z-10 overflow-hidden">
                    {/* ASIDE MASTHEAD */}
                    <div className="hidden lg:flex w-24 h-full border-r border-black/5 items-center justify-center py-10 vertical-text text-[10px] font-bold uppercase tracking-[0.5em] opacity-10 text-black">
                        THE FUTURE OF DIGITAL STORYTELLING 2026
                    </div>

                    <div className="flex-1 h-full flex flex-col lg:flex-row p-10 lg:p-20 gap-20">
                        <div className="lg:w-1/2 space-y-12 flex flex-col justify-center animate-fade-in">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#18181B]/40">
                                    <div className="w-12 h-[1px] bg-black/40" /> FEATURED STORY
                                </div>
                                <h1 className="text-6xl lg:text-8xl font-serif font-bold leading-[0.9] tracking-tighter text-black">
                                    The <span className="italic">Parallax</span> <br /> Architecture.
                                </h1>
                            </div>
                            <p className="text-xl lg:text-2xl text-black/60 font-medium leading-relaxed font-public max-w-xl">
                                A journey through the infrastructure of immersive narratives. Why the next era of SaaS will be defined by editorial precision.
                            </p>
                            <div className="flex items-center gap-8 pt-4">
                                <button className="flex items-center gap-4 group font-black uppercase text-xs tracking-widest text-black">
                                    READ THE ESSAY <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-zinc-800 transition-colors"><ArrowRight className="w-5 h-5" /></div>
                                </button>
                                <div className="flex items-center gap-4 opacity-40 text-black">
                                    <User className="w-4 h-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">By ViCode Labs</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 h-full relative group animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="w-full h-full magazine-hover relative overflow-hidden bg-zinc-100 rounded-lg shadow-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200"
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-[3s]"
                                    alt="Magazine Cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/20 to-transparent flex items-end justify-between">
                                    <div className="text-white text-left">
                                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Cover Illustration</div>
                                        <div className="text-sm font-serif italic">Structural Flow v2.0</div>
                                    </div>
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
                                        <Play className="w-6 h-6 fill-current" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- THE BRIEFS: ASYMMETRIC GRID --- */}
                <section className="py-32 px-10 border-t border-black/5 bg-zinc-50/50">
                    <div className="max-w-7xl mx-auto space-y-24">
                        <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
                            <h2 className="text-4xl lg:text-7xl font-serif font-bold tracking-tighter lg:w-1/2 text-black text-left">The Narrative <br /> Spectrum.</h2>
                            <div className="text-right space-y-2 lg:w-1/3">
                                <p className="text-sm font-semibold opacity-40 max-w-sm ml-auto text-black">Exploring the technical intersection of high-fidelity aesthetics and functional logic in modern SaaS environments.</p>
                                <div className="editorial-line mt-4" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                            {[
                                { t: "Protocol Synthesis", d: "How modular state management enables fluid storytelling.", c: "01", i: Zap },
                                { t: "Global Distribution", d: "Scaling immersive assets across edge nodes globally.", c: "02", i: Globe2 },
                                { t: "Structural Depth", d: "Visual layering techniques that define modern UI depth.", c: "03", i: Layers }
                            ].map((item, i) => (
                                <div key={i} className="group cursor-pointer space-y-10 text-left">
                                    <div className="flex items-center justify-between border-b border-black/5 pb-4 text-black">
                                        <span className="font-serif italic text-xl">Issue_{item.c}</span>
                                        <item.i className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-3xl font-serif font-bold text-black group-hover:underline underline-offset-8 transition-all">{item.t}</h4>
                                        <p className="text-base text-black/50 leading-relaxed font-medium font-public">
                                            {item.d}
                                        </p>
                                        <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest pt-4 text-black">
                                            OPEN FOLDER <ChevronRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- LARGE QUOTE --- */}
                <section className="py-48 px-10 text-center relative overflow-hidden bg-black text-white">
                    <div className="max-w-4xl mx-auto space-y-16 animate-fade-in">
                        <div className="w-12 h-1 bg-white/20 mx-auto" />
                        <blockquote className="text-3xl lg:text-5xl font-serif font-black leading-tight italic tracking-tight">
                            "Style is not a veneer; it is the physical manifestation of technical logic applied to human storytelling."
                        </blockquote>
                        <div className="space-y-2">
                            <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">CHIEF ARCHITECT</div>
                            <div className="text-lg font-bold font-public underline underline-offset-4">VICODE LABS, 2026</div>
                        </div>
                    </div>
                </section>

                {/* --- FOOTER: THE BACK COVER --- */}
                <footer className="py-40 px-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-start gap-32 relative z-10 bg-white">
                    <div className="space-y-12">
                        <div className="font-serif text-4xl font-bold tracking-tighter text-black">VICODE_</div>
                        <div className="space-y-4">
                            <p className="max-w-xs text-xl opacity-40 font-serif leading-relaxed italic text-black">
                                Providing structural clarity for the next generation of narrative architects.
                            </p>
                            <div className="flex gap-10 text-[10px] font-bold text-black/20 uppercase tracking-[0.4em]">
                                <span>LONDON</span>
                                <span>SINGAPORE</span>
                                <span>NEW YORK</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-32 font-public">
                        {[
                            { t: "EDITIONS", l: ["Digital", "Print", "Archives", "Search"] },
                            { t: "INFRA", l: ["API", "Nodes", "Security", "Support"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-10">
                                <h5 className="font-bold uppercase tracking-[0.5em] text-[10px] opacity-20 text-black">{group.t}</h5>
                                <ul className="space-y-6 font-bold text-xl tracking-tighter text-black">
                                    {group.l.map(link => (
                                        <li key={link}><a href="#" className="hover:underline underline-offset-4 transition-all">{link}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </footer>

                {/* BOTTOM MASTHEAD */}
                <div className="px-10 py-6 bg-black text-white flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.5em]">
                    <span>&copy; 2026 ViCode Publishing Inc.</span>
                    <div className="flex gap-10 opacity-40">
                        <span className="hover:opacity-100 transition-opacity cursor-pointer">Legal</span>
                        <span className="hover:opacity-100 transition-opacity cursor-pointer">Privacy</span>
                        <span className="hover:opacity-100 transition-opacity cursor-pointer">Twitter</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
