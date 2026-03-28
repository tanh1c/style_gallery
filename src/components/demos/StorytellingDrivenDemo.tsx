import { cn } from "@/lib/utils";
import {
Activity,
ArrowDown,
BookOpen,
Globe,
History,
PenTool,
Scroll,
Sparkles
} from "lucide-react";
import React,{ useEffect,useState } from "react";

export const StorytellingDrivenDemo: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = (e: any) => {
            const element = e.target;
            const progress = (element.scrollTop / (element.scrollHeight - element.clientHeight)) * 100;
            setScrollProgress(progress);
        };
        const el = document.getElementById("story-scroll-container");
        el?.addEventListener("scroll", handleScroll);
        return () => el?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            id="story-scroll-container"
            className="flex-1 bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth"
        >

            {/* STICKY NARRATIVE NAV */}
            <header className="sticky top-0 left-0 right-0 z-50 flex flex-col pointer-events-none">
                <div className="flex items-center justify-between px-16 py-8 pointer-events-auto bg-white/80 backdrop-blur-md border-b border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-200">
                            <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-extrabold text-2xl tracking-tighter text-slate-900 italic">ViCode_Tale</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
                        <div className="flex items-center gap-3">
                            <span className={cn("transition-colors", scrollProgress > 10 ? "text-indigo-600" : "")}>I_Origination</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                            <span className={cn("transition-colors", scrollProgress > 40 ? "text-indigo-600" : "")}>II_Consensus</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                            <span className={cn("transition-colors", scrollProgress > 70 ? "text-indigo-600" : "")}>III_Legacy</span>
                        </div>
                    </div>

                    <button className="h-12 px-8 rounded-full bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-xl pointer-events-auto active:scale-95 transition-all">
                        Begin_The_Journey
                    </button>
                </div>
                {/* Scroll Indicator Line */}
                <div className="h-[3px] bg-slate-100 w-full relative">
                    <div
                        className="h-full bg-indigo-600 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                        style={{ width: `${scrollProgress}%` }}
                    />
                </div>
            </header>

            {/* --- HERO: CHAPTER I — THE ORIGIN (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-16 pt-40 pb-20 bg-white shrink-0 overflow-hidden">
                <div className="max-w-4xl space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                    <div className="flex items-center justify-center gap-4 text-indigo-400">
                        <History className="w-7 h-7" />
                        <span className="text-[11px] font-black uppercase tracking-[0.5em]">The_Invisible_Consensus</span>
                    </div>

                    <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tighter text-slate-900 uppercase italic">
                        Everything_Was<br />
                        <span className="text-indigo-600 drop-shadow-[0_0_20px_rgba(99,102,241,0.2)]">Out_Of_Sync.</span>
                    </h1>

                    <p className="text-2xl font-bold text-slate-400 leading-relaxed max-w-2xl mx-auto italic">
                        Before the Mesh, the world pulsated in chaos. Data lived in shadows, and state was a myth. This is the story of how we found rhythm.
                    </p>

                    <div className="pt-8">
                        <div className="inline-flex flex-col items-center gap-4 cursor-pointer group">
                            <div className="w-[3px] h-16 bg-gradient-to-b from-indigo-600 to-transparent group-hover:h-24 transition-all duration-700" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Scroll_Into_The_Consensus</span>
                            <ArrowDown className="w-5 h-5 text-indigo-600 animate-bounce" />
                        </div>
                    </div>
                </div>

                {/* Atmospheric shapes */}
                <div className="absolute -bottom-24 left-0 w-[500px] h-[500px] bg-indigo-100/40 blur-[100px] rounded-full" />
                <div className="absolute -top-24 right-0 w-[50vw] h-[50vw] bg-indigo-50/20 blur-[150px] rounded-full opacity-50" />
            </section>

            {/* --- CHAPTER II: THE FRICTION --- */}
            <section className="py-56 px-16 bg-slate-950 text-white relative shrink-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200')] opacity-30 grayscale brightness-75 mix-blend-overlay"
                />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
                    <div className="space-y-12 group text-left">
                        <div className="w-16 h-1.5 bg-rose-500 rounded-full group-hover:w-40 transition-all duration-700 shadow-[0_0_20px_rgba(244,63,94,0.4)]" />
                        <h2 className="text-6xl font-black tracking-tighter uppercase italic leading-[0.95]">
                            A_Global_Pulse<br />
                            <span className="text-rose-500">Drowning_in_Lag.</span>
                        </h2>
                        <p className="text-2xl font-bold text-slate-400 leading-relaxed italic max-w-md">
                            In the old era, distance was the enemy. A microsecond of drift meant a million lost opportunities. The system was breathing, but it was suffocating.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-20 bg-rose-500/10 blur-[120px] rounded-full animate-pulse" />
                        <div className="p-16 rounded-[80px] bg-slate-900 border border-white/5 backdrop-blur-3xl shadow-3xl space-y-12 relative overflow-hidden">
                            <div className="space-y-3">
                                <div className="text-[11px] font-black uppercase tracking-widest text-slate-500">Global_State_Heartbeat</div>
                                <div className="text-6xl font-black italic tracking-tighter text-rose-500 animate-pulse">+400ms_Drift</div>
                            </div>
                            <div className="h-72 flex items-end gap-3 px-4">
                                {[30, 80, 50, 95, 40, 70, 60, 85].map((h, i) => (
                                    <div key={i} className="w-full bg-rose-500 group-hover:bg-rose-500 transition-colors" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHAPTER III: THE SYNCHRONIZATION --- */}
            <section className="py-64 px-16 bg-white relative overflow-hidden shrink-0">
                <div className="max-w-7xl mx-auto space-y-32 relative z-10">
                    <div className="text-center space-y-10 max-w-4xl mx-auto">
                        <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mx-auto text-indigo-600">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 uppercase italic leading-none">
                            Then_Came<br />
                            <span className="text-indigo-600">The_Atomic_Breath.</span>
                        </h2>
                        <p className="text-2xl font-bold text-slate-400 leading-relaxed italic">
                            ViCode didn't just build a cloud. We built a conscience. A network that thinks together, pulses together, and remembers everything.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { t: "The Pulse", d: "A rhythmic heartbeat that synchronizes state across 50,000 nodes in sub-millisecond windows.", i: Activity },
                            { t: "The Memory", d: "Immutable history that flows through the system like a collective consciousness.", i: History },
                            { t: "The Reach", d: "Zero distance. The mesh exists everywhere at once, removing the concept of 'remote'.", i: Globe }
                        ].map((node, i) => (
                            <div key={i} className="space-y-8 p-12 rounded-[48px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-xl group-hover:scale-110 transition-transform">
                                    <node.i className="w-6 h-6" />
                                </div>
                                <h4 className="text-2xl font-black italic tracking-tighter uppercase italic">{node.t}</h4>
                                <p className="text-sm font-bold text-slate-400 leading-relaxed italic">{node.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flowing SVG shapes */}
                <svg className="absolute top-1/2 left-0 w-full h-full -z-10 opacity-5" viewBox="0 0 1440 320">
                    <path fill="#6366F1" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </section>

            {/* --- CLIMAX: THE LEGACY (METRICS) --- */}
            <section className="py-64 px-16 bg-slate-950 text-white relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-indigo-600/5 blur-[200px] rounded-full" />

                <div className="max-w-6xl mx-auto space-y-32 relative z-10 text-center">
                    <h2 className="text-5xl lg:text-[100px] font-black tracking-tighter uppercase italic leading-none animate-pulse">
                        A_New_Era_of_Scale.
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
                        {[
                            { l: "Synchronized_Nodes", v: "42.4k" },
                            { l: "Consensus_Speed", v: "1.2ms" },
                            { l: "Uptime_Legacy", v: "99.99%" },
                            { l: "Global_Reach", v: "0_Dist" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-4">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">{stat.l}</div>
                                <div className="text-6xl font-black italic tracking-tighter text-white">{stat.v}</div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-24 space-y-12 max-w-2xl mx-auto">
                        <p className="text-xl font-bold text-slate-500 leading-relaxed italic uppercase tracking-widest">The Tale has just begun. Be part of the consensus architecture that defines the decade.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-8">
                            <button className="h-16 px-16 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest shadow-2xl shadow-indigo-500/20 hover:scale-110 transition-all">
                                Write_Your_Chapter
                            </button>
                            <button className="h-16 px-16 rounded-2xl border border-white/10 text-white font-black uppercase tracking-widest hover:bg-white/5 transition-all">
                                Executive_Tale
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-32 px-16 bg-white border-t border-slate-100 shrink-0">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
                    <div className="space-y-10">
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-7 h-7 text-indigo-600" />
                            <span className="font-extrabold text-2xl tracking-tighter italic uppercase text-slate-900">ViCode_Tale</span>
                        </div>
                        <p className="text-xs font-bold text-slate-400 italic uppercase tracking-[0.2em] leading-loose">The world's first narratively-driven consensus architecture. Built for the story of you.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Chapters</h5>
                        <a href="#" className="font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase italic tracking-widest">I_Origination</a>
                        <a href="#" className="font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase italic tracking-widest">II_The_Lag_Era</a>
                        <a href="#" className="font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase italic tracking-widest">III_Synchronization</a>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Characters</h5>
                        <a href="#" className="font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase italic tracking-widest">Engineers</a>
                        <a href="#" className="font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase italic tracking-widest">Architects</a>
                        <a href="#" className="font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase italic tracking-widest">Leaders</a>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Connect</h5>
                        <a href="#" className="font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase italic tracking-widest">Join_The_Tale</a>
                        <div className="flex gap-4 pt-4">
                            <Globe className="w-5 h-5 text-slate-300" />
                            <Scroll className="w-5 h-5 text-slate-300" />
                            <PenTool className="w-5 h-5 text-slate-300" />
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto pt-32 mt-24 border-t border-slate-100 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.5em] text-slate-300 italic">
                    <span>© 2026 ViCode Narrative Lab. A chapter of truth.</span>
                    <div className="flex items-center gap-6">
                        <span>STORY_ENGINE_v4.2</span>
                        <Sparkles className="w-3 h-3" />
                    </div>
                </div>
            </footer>
        </div>
    );
};
