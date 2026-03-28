import { cn } from "@/lib/utils";
import {
ArrowRight,
Book,
BookOpen,
FileText,
History,
PenTool,
Terminal,
Zap
} from "lucide-react";
import React from "react";

export const EInkPaperDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#fbfaf8] text-[#121212] font-sans selection:bg-black selection:text-white relative h-full flex flex-col group font-inter overflow-hidden">

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
                {/* --- E-INK STYLES --- */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
                    
                    .font-paper { font-family: 'Plus Jakarta Sans', sans-serif; }
                    .font-serif-paper { font-family: 'Playfair Display', serif; }
                    
                    .paper-texture {
                        background-color: #fbfaf8;
                        background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
                    }
                    
                    .e-ink-card {
                        background: #ffffff;
                        border: 1.5px solid #121212;
                        box-shadow: 4px 4px 0px #121212;
                        transition: all 0.2s ease;
                    }
                    .e-ink-card:hover {
                        transform: translate(-2px, -2px);
                        box-shadow: 8px 8px 0px #121212;
                    }
                    
                    .e-ink-button {
                        background: #121212;
                        color: #ffffff;
                        border: 1.5px solid #121212;
                        transition: all 0.2s ease;
                    }
                    .e-ink-button:hover {
                        background: #ffffff;
                        color: #121212;
                        box-shadow: 4px 4px 0px #121212;
                    }

                    .e-ink-refresh {
                        animation: refresh 0.4s steps(2);
                    }
                    @keyframes refresh {
                        0% { opacity: 1; filter: invert(0); }
                        50% { opacity: 0.8; filter: invert(1); }
                        100% { opacity: 1; filter: invert(0); }
                    }
                `}} />

                <div className="paper-texture absolute inset-0 z-0 pointer-events-none opacity-50" />

                {/* --- NAVIGATION --- */}
                <nav className="flex items-center justify-between px-10 py-6 relative z-10 border-b-2 border-black/10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black flex items-center justify-center text-white">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-extrabold tracking-tighter uppercase">ViCode | Paper</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10 font-bold text-sm uppercase tracking-widest">
                        <a href="#" className="hover:underline underline-offset-4">Manifesto</a>
                        <a href="#" className="hover:underline underline-offset-4">Archive</a>
                        <a href="#" className="hover:underline underline-offset-4">Pricing</a>
                        <button className="e-ink-button px-5 py-2 text-xs">Login</button>
                    </div>
                </nav>

                {/* --- HERO: THE MIND-CENTRIC HUD (FIT 1 SCREEN) --- */}
                <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col items-center justify-center px-10 relative z-10 text-center space-y-10">
                    <div className="space-y-4 max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        <div className="inline-block border-2 border-black px-4 py-1.5 mb-2 font-black text-[10px] uppercase tracking-[0.3em]">
                            VOL 01. ISSUE 55 // 2026
                        </div>
                        <h1 className="text-7xl lg:text-9xl font-serif-paper font-bold leading-[0.85] tracking-tight italic">
                            Narrative for<br /> the mindful.
                        </h1>
                        <p className="max-w-xl mx-auto text-xl italic opacity-60 font-medium">
                            A high-contrast, distraction-free environment for documenting infrastructure architecture and technical storytelling.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                        <button className="e-ink-button px-10 py-5 text-lg font-black uppercase tracking-widest flex items-center gap-3">
                            Start Reading <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-10 py-5 border-2 border-black font-black uppercase tracking-widest hover:bg-black/5 transition-colors">
                            View Archive
                        </button>
                    </div>

                    {/* DECORATIVE E-INK ELEMENTS */}
                    <div className="absolute left-10 bottom-10 flex flex-col gap-1 text-[10px] font-black opacity-20 uppercase tracking-widest transform -rotate-90 origin-left">
                        Infrastructure Deployment Log // 10.08.2026
                    </div>
                </section>

                {/* --- FEATURES: THE GRID LAYOUT --- */}
                <section className="py-24 px-10 relative z-10 space-y-20 bg-[#f4f3f0] border-y-2 border-black">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h2 className="text-5xl lg:text-7xl font-serif-paper font-bold tracking-tighter">Minimalist Logic.</h2>
                        <div className="h-0.5 w-40 bg-black mx-auto" />
                        <p className="text-xl max-w-2xl mx-auto font-medium opacity-70 italic">
                            We stripped away the gloss, the shadows, and the neons to leave only the raw structure of your logic.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {[
                            { t: "Deep Focus", d: "Zero-latency monochrome UI that prevents cognitive overload and eye strain.", i: Book },
                            { t: "Story Archive", d: "Document your deployment journeys with version-controlled paper trails.", i: History },
                            { t: "Raw Telemetry", d: "Pure technical data visualized through stark, high-contrast layouts.", i: Terminal },
                            { t: "Draft System", d: "Iterate on architecture prompts in a non-destructive, paper-based environment.", i: PenTool },
                            { t: "Swift Sync", d: "Hyper-efficient data transfers optimized for low-bandwidth scenarios.", i: Zap },
                            { t: "Export Ready", d: "Print-quality export functions for all technical documentation and logs.", i: FileText }
                        ].map((item, i) => (
                            <div key={i} className="e-ink-card p-10 flex flex-col gap-10 group cursor-pointer hover:e-ink-refresh">
                                <div className="w-12 h-12 border-2 border-black flex items-center justify-center shrink-0">
                                    <item.i className="w-6 h-6" />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-2xl font-black tracking-tighter uppercase">{item.t}</h4>
                                    <p className="text-base leading-relaxed opacity-60 font-medium">
                                        {item.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- PRICING: PRINT TIERS --- */}
                <section className="py-32 px-10 relative z-10 flex flex-col items-center gap-20">
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-4xl font-serif-paper font-bold italic">Select Subscription Tier</h3>
                        <p className="text-sm uppercase tracking-[0.4em] font-black opacity-30">Paper // Digital // Hybrid</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl w-full border-2 border-black">
                        {[
                            { l: "Digital Only", p: "$0", f: ["E-Ink Web View", "10 Story Exports", "Community Archive"] },
                            { l: "Hybrid Core", p: "$24", f: ["Unlimited Stories", "PDF Print Engine", "Custom Typography", "Priority Support"], primary: true },
                            { l: "Legacy Print", p: "$49", f: ["Physical Book Exports", "Private Repository", "Dedicated Architect", "Infinite History"] }
                        ].map((item, i) => (
                            <div key={i} className={cn(
                                "p-12 border-black flex flex-col gap-10 transition-all group hover:bg-black hover:text-[#fbfaf8]",
                                i !== 0 ? "md:border-l-2" : "",
                                item.primary ? "bg-black/5" : ""
                            )}>
                                <div className="space-y-1">
                                    <div className="text-xs font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">{item.l}</div>
                                    <div className="text-6xl font-black tracking-tighter">{item.p}</div>
                                </div>
                                <div className="space-y-4 py-10 border-y border-black/10 group-hover:border-white/20 text-sm font-bold">
                                    {item.f.map(f => (
                                        <div key={f} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-black group-hover:bg-[#fbfaf8]" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <button className={cn(
                                    "w-full py-4 font-black uppercase tracking-widest transition-all",
                                    item.primary ? "e-ink-button" : "border-2 border-black group-hover:border-[#fbfaf8]"
                                )}>
                                    Activate Tier
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FOOTER: MINIMALIST ENDING --- */}
                <footer className="py-20 px-10 relative z-10 border-t-2 border-black flex flex-col md:flex-row justify-between items-start gap-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-black flex items-center justify-center text-white">
                                <BookOpen className="w-4 h-4" />
                            </div>
                            <span className="text-lg font-extrabold tracking-tighter uppercase">ViCode | Paper</span>
                        </div>
                        <p className="max-w-xs text-sm italic opacity-50 font-medium leading-relaxed">
                            Documenting the future of infrastructure through the lens of classic technical literature.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
                        {[
                            { t: "Navigation", l: ["Catalog", "Archive", "Manifesto", "Contact"] },
                            { t: "Legal", l: ["Privacy", "Terms", "Copyright", "Status"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-6">
                                <h5 className="font-black uppercase tracking-widest text-xs opacity-30">{group.t}</h5>
                                <ul className="space-y-3 font-bold text-sm">
                                    {group.l.map(link => (
                                        <li key={link}><a href="#" className="hover:underline">{link}</a></li>
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
