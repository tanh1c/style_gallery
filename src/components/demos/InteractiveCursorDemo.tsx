import { cn } from "@/lib/utils";
import {
Activity,
ArrowUpRight,
ChevronRight,
Layers,
Terminal,
Zap
} from "lucide-react";
import React,{ useEffect,useRef,useState } from "react";

export const InteractiveCursorDemo: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState("");

    // REFS FOR DIRECT DOM MANIPULATION (Restricted to Demo Screen)
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const revealBoxRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let rafId: number;

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();

            // Calculate mouse position relative to container
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const updatePosition = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isHovering ? 5 : 1})`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isHovering ? 0.3 : 1})`;
            }
            if (glowRef.current) {
                glowRef.current.style.transform = `translate3d(${mouseX - 500}px, ${mouseY - 500}px, 0)`;
            }
            if (revealBoxRef.current) {
                revealBoxRef.current.style.setProperty('--mx', `${mouseX}px`);
                revealBoxRef.current.style.setProperty('--my', `${mouseY}px`);
            }
            rafId = requestAnimationFrame(updatePosition);
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }
        rafId = requestAnimationFrame(updatePosition);

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
            cancelAnimationFrame(rafId);
        };
    }, [isHovering]);

    const handleMouseEnter = (text: string = "VIEW") => {
        setIsHovering(true);
        setCursorText(text);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setCursorText("");
    };

    return (
        <div
            ref={containerRef}
            id="cursor-demo-container"
            className="flex-1 bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#FFFFFF] selection:text-black relative h-full flex flex-col group font-jakarta overflow-hidden cursor-none"
        >

            {/* ABSOLUTE CURSOR (Strictly within demo) */}
            <div
                ref={cursorRef}
                className="absolute pointer-events-none z-[9999] will-change-transform flex items-center justify-center mix-blend-difference"
                style={{
                    left: 0,
                    top: 0,
                    transition: 'transform 100ms ease-out'
                }}
            >
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    {isHovering && (
                        <span className="text-[2px] font-black text-black tracking-tighter uppercase whitespace-nowrap">
                            {cursorText}
                        </span>
                    )}
                </div>
            </div>

            {/* ABSOLUTE RING (Strictly within demo) */}
            <div
                ref={ringRef}
                className="absolute pointer-events-none z-[9998] w-12 h-12 border border-white/20 rounded-full will-change-transform mix-blend-difference"
                style={{
                    left: 0,
                    top: 0,
                    transition: 'transform 250ms ease-out',
                    opacity: 0.5
                }}
            />

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
                {/* --- CURSOR STYLES --- */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap');
                    
                    .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
                    .font-sync { font-family: 'Syncopate', sans-serif; }
                    
                    .cursor-none:hover * { cursor: none !important; }

                    .bg-glow-static {
                        background: radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 70%);
                    }

                    .reveal-image {
                        clip-path: circle(0% at var(--mx, 50%) var(--my, 50%));
                        transition: clip-path 100ms ease-out;
                        will-change: clip-path;
                    }
                    .reveal-box:hover .reveal-image {
                        clip-path: circle(25% at var(--mx, 50%) var(--my, 50%));
                    }
                `}} />

                {/* MOVE GLOW WITH MOUSE USING DIRECT DOM (Absolute to container) */}
                <div
                    ref={glowRef}
                    className="absolute pointer-events-none z-0 bg-glow-static w-[1000px] h-[1000px] rounded-full opacity-40 will-change-transform"
                    style={{ left: 0, top: 0 }}
                />

                {/* --- NAVIGATION: ULTRA MINIMAL --- */}
                <nav className="flex items-center justify-between px-16 py-10 relative z-20">
                    <div
                        className="flex items-center gap-4 group"
                        onMouseEnter={() => handleMouseEnter("HOME")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="w-2 h-12 bg-white animate-pulse" />
                        <span className="text-2xl font-sync font-bold tracking-tighter uppercase whitespace-nowrap">ViCode_</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-12 font-sync text-[10px] uppercase font-bold tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity">
                        {['Protocol', 'Synthesis', 'Void'].map(item => (
                            <a key={item} href="#" className="hover:text-white transition-colors" onMouseEnter={() => handleMouseEnter(item)} onMouseLeave={handleMouseLeave}>
                                {item}
                            </a>
                        ))}
                        <button
                            className="bg-white text-black px-10 py-3 rounded-none font-black hover:invert transition-all"
                            onMouseEnter={() => handleMouseEnter("START")}
                            onMouseLeave={handleMouseLeave}
                        >
                            CONNECT_VOICE
                        </button>
                    </div>
                </nav>

                {/* --- HERO: INTERACTIVE REVEAL (FIT 1 SCREEN) --- */}
                <section className="h-[calc(100vh-120px)] min-h-[600px] flex flex-col items-center justify-center px-16 relative z-10 text-center space-y-20 overflow-hidden">
                    <div
                        ref={revealBoxRef}
                        className="space-y-4 max-w-7xl reveal-box w-full"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-[-1] opacity-20 reveal-image pointer-events-none">
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                                className="w-full h-full object-cover grayscale"
                                alt="Void Background"
                            />
                        </div>

                        <h1
                            className="text-[3.5rem] lg:text-[7rem] font-sync font-bold leading-[0.9] tracking-[-0.05em] uppercase mix-blend-difference"
                            onMouseEnter={() => handleMouseEnter("REVEAL")}
                            onMouseLeave={handleMouseLeave}
                        >
                            Explore <br /> The <span className="italic">Immersive.</span>
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-24 pt-10">
                        <div className="flex flex-col items-start gap-4">
                            <span className="text-[10px] font-sync uppercase tracking-[0.5em] opacity-30">Cursor Directional Flux</span>
                            <div className="flex items-center gap-12 font-jakarta">
                                <div className="text-4xl font-black">99.9%</div>
                                <p className="text-left text-xs max-w-[150px] font-medium opacity-40 leading-relaxed uppercase">
                                    Data revealed through intent-based pointer mapping.
                                </p>
                            </div>
                        </div>
                        <button
                            className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                            onMouseEnter={() => handleMouseEnter("GO")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </section>

                {/* --- FEATURES: POINTER SENSITIVE --- */}
                <section className="py-40 px-16 relative z-10 space-y-40">
                    <div className="max-w-4xl mx-auto flex flex-col items-start space-y-12">
                        <div className="w-32 h-[1px] bg-white opacity-20" />
                        <h2 className="text-4xl lg:text-7xl font-sync font-bold tracking-tight uppercase">Core_Logic.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 max-w-7xl mx-auto bg-white/10 p-[1px]">
                        {[
                            { t: "Dynamic Light", d: "UI components that illuminate only when needed by your focus vector.", i: Zap },
                            { t: "Parallax Space", d: "Multiple layout depths that shift in relation to pointer distance.", i: Layers },
                            { t: "Intelligent Reveal", d: "Secret data streams hidden beneath the standard interface layers.", i: Terminal },
                            { t: "Synthesis Sync", d: "Real-time synchronization between visual feedback and system logic.", i: Activity }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#000000] p-24 flex flex-col gap-12 group transition-all duration-500 relative overflow-hidden"
                                onMouseEnter={() => handleMouseEnter("EXPAND")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:via-white transition-all opacity-0 group-hover:opacity-100" />
                                <div className="w-20 h-20 border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                                    <item.i className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-2xl font-sync font-bold uppercase py-2 inline-block border-b border-transparent group-hover:border-white transition-all tracking-tighter">{item.t}</h4>
                                    <p className="text-lg leading-relaxed text-white/40 font-medium font-jakarta uppercase">
                                        {item.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- DATA: THE VOID GRID --- */}
                <section className="py-48 px-16 relative z-10 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-24 max-w-7xl mx-auto">
                        {[
                            { l: "Observer", p: "00", f: ["Pointer Mapping", "Static Layers", "Basic Glow"] },
                            { l: "Architect", p: "42", f: ["Full Liquid Cursor", "Parallax Grid", "Depth Revealer", "Haptic Sync"], primary: true },
                            { l: "Ether", p: "99", f: ["Void Access", "Instant Protocol", "Priority Flux Mapping"] }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "p-16 border flex flex-col gap-16 transition-all duration-700",
                                    item.primary ? "border-white bg-white text-black" : "border-white/10 hover:border-white"
                                )}
                                onMouseEnter={() => handleMouseEnter(item.l)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="space-y-4">
                                    <div className="font-sync text-[10px] uppercase font-bold tracking-[0.4em] opacity-40">{item.l}_TIER</div>
                                    <div className="text-6xl font-sync font-bold leading-none tracking-tighter">
                                        .{item.p}
                                    </div>
                                </div>
                                <div className="space-y-6 py-10 border-t border-current/10 font-sync text-[9px] uppercase font-bold tracking-[0.2em]">
                                    {item.f.map(f => (
                                        <div key={f} className="flex items-center gap-4">
                                            <ChevronRight className="w-3 h-3" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <button className={cn(
                                    "w-full py-6 font-sync text-[10px] font-bold uppercase tracking-[0.3em] transition-all",
                                    item.primary ? "bg-black text-white hover:invert" : "border border-white/20 hover:bg-white hover:text-black"
                                )}>
                                    EXECUTE_CONNECT
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FOOTER: THE DARK END --- */}
                <footer className="py-40 px-16 relative z-10 bg-[#000000] border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-32">
                    <div className="space-y-16">
                        <div
                            className="flex items-center gap-4"
                            onMouseEnter={() => handleMouseEnter("INFO")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="w-16 h-1 bg-white" />
                            <span className="text-4xl font-sync font-bold tracking-tighter uppercase whitespace-nowrap">ViCode_</span>
                        </div>
                        <p className="max-w-md text-xl lg:text-3xl font-sync font-bold uppercase leading-none tracking-tighter opacity-10">
                            Interfaces designed by the movement of your intent.
                        </p>
                        <div className="flex gap-12 font-sync text-[9px] font-bold uppercase tracking-[0.4em] opacity-20">
                            <span>&copy; 2026_VOID</span>
                            <span className="hover:opacity-100">LEGAL</span>
                            <span className="hover:opacity-100">TWITTER</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-32 font-sync">
                        {[
                            { t: "PROTOCOL", l: ["Light", "Reveal", "Depth", "Flux"] },
                            { t: "VOID", l: ["Login", "Register", "Mirror", "Sync"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-12">
                                <h5 className="font-bold uppercase tracking-[0.5em] text-[10px] opacity-20">{group.t}</h5>
                                <ul className="space-y-8 font-bold text-lg uppercase tracking-tighter">
                                    {group.l.map(link => (
                                        <li key={link}><a href="#" className="hover:text-white transition-colors" onMouseEnter={() => handleMouseEnter(link)} onMouseLeave={handleMouseLeave}>{link}</a></li>
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
