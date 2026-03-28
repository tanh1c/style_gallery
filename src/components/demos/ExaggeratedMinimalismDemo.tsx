import {
Activity,
ArrowRight,
ArrowUpRight,
Box,
CheckCircle2,
Command,
Github,
Layers,
ShieldCheck,
Terminal
} from "lucide-react";
import React from "react";

export const ExaggeratedMinimalismDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-white text-black font-sans selection:bg-black selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col group scroll-smooth">

            {/* --- EXAGGERATED NAV: OVERSIZED & CLEAN --- */}
            <nav className="flex items-center justify-between px-10 lg:px-16 py-8 bg-white/90 backdrop-blur-md sticky top-0 z-[100] w-full border-b-[8px] border-black">
                <div className="flex items-center gap-6 group/logo cursor-pointer opacity-100 hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-black flex items-center justify-center rotate-0 group-hover/logo:rotate-90 transition-all duration-500">
                        <Box className="w-7 h-7 text-white transition-all scale-110" />
                    </div>
                    <span className="text-3xl font-black tracking-tighter leading-none mb-1">ViCode.</span>
                </div>

                <div className="hidden lg:flex items-center gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-black">
                    {["Systems", "Logic", "Nodes", "Logs"].map((tab) => (
                        <a key={tab} href="#" className="hover:text-blue-600 transition-colors relative">
                            {tab}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-8">
                    <a href="#" className="hidden sm:block text-[10px] font-black uppercase tracking-widest hover:underline decoration-4 underline-offset-8">LOGIN</a>
                    <button className="h-14 px-10 bg-black text-white font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all active:scale-95 shadow-[8px_8px_0px_rgba(59,130,246,0.3)] hover:shadow-none">
                        GET_CORE
                    </button>
                </div>
            </nav>

            {/* --- EXAGGERATED HERO: THE VOID (SINGLE SCREEN) --- */}
            <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative z-10 bg-white overflow-hidden py-24">
                <div className="max-w-7xl w-full flex flex-col items-center justify-center gap-8 relative z-10">
                    <div className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-600 bg-blue-50 px-5 py-2 rounded-full border border-blue-200">
                        SYSTEM_STABILITY: 100%
                    </div>

                    <h1 className="text-[6rem] lg:text-[11rem] font-black tracking-[-0.07em] leading-[0.75] text-black uppercase relative group cursor-default select-none transition-all duration-1000">
                        <span className="block transform group-hover:skew-x-[-8deg] transition-all duration-700">Simple.</span>
                        <span className="block italic text-blue-600 transform group-hover:skew-x-[8deg] transition-all duration-700">Product.</span>
                        <span className="block transform group-hover:translate-x-6 transition-all duration-700">Hard.</span>
                    </h1>

                    <div className="max-w-xl text-[18px] font-black text-black leading-tight uppercase tracking-tighter pt-10 border-t-[6px] border-black mt-4">
                        Minimalism is about the <span className="text-blue-600 italic">deliberate reduction</span> of noise to expose the core intelligence.
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8 w-full max-w-3xl">
                        <button className="flex-1 h-20 bg-black text-white font-black uppercase tracking-[0.3em] text-[13px] hover:bg-blue-600 transition-all flex items-center justify-center gap-8 group">
                            BOOT_MAIN <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform" />
                        </button>
                        <button className="flex-1 h-20 bg-white border-[4px] border-black text-black font-black uppercase tracking-[0.3em] text-[13px] hover:bg-black hover:text-white transition-all flex items-center justify-center gap-8">
                            READ_ROM <Terminal className="w-8 h-8" />
                        </button>
                    </div>
                </div>

                {/* BACKGROUND ELEMENT: GIANT ACCENT WATERMARK */}
                <div className="absolute -bottom-[10%] left-[-5%] text-[30rem] font-black text-black/[0.01] select-none pointer-events-none leading-none z-0 italic">
                    VOID
                </div>
            </section>

            {/* --- MINIMAL LOGO WALL --- */}
            <div className="py-20 border-y-[4px] border-black flex flex-col items-center gap-10 bg-white shrink-0 relative overflow-hidden">
                <span className="text-[9px] font-black text-black uppercase tracking-[1.5em]">T R U S T E D _ G R I D</span>
                <div className="flex flex-wrap justify-center gap-16 lg:gap-32 items-center opacity-40 hover:opacity-100 transition-opacity saturate-0 contrast-150">
                    <Github className="w-10 h-10" />
                    <Layers className="w-10 h-10" />
                    <Activity className="w-10 h-10" />
                    <ShieldCheck className="w-10 h-10" />
                    <Command className="w-10 h-10" />
                </div>
            </div>

            {/* --- EXAGGERATED FEATURES: MASSIVE BLOCKS --- */}
            <section className="space-y-32 px-10 lg:px-20 py-32 shrink-0 bg-white relative z-10 overflow-hidden">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-b-[12px] border-black pb-16">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-7xl lg:text-9xl font-black tracking-tighter text-black uppercase leading-none italic">
                            The_Core.
                        </h2>
                        <p className="text-[11px] font-black uppercase tracking-[0.8em] text-blue-600">Pure_Stability_Guaranteed</p>
                    </div>
                    <div className="text-right text-3xl font-black text-black/20 tracking-tighter uppercase leading-none hidden lg:block italic">
                        V2/ENGINE
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {[
                        { t: "Logic_Stream", d: "High-density data streaming with zero interpretation loss.", i: Activity },
                        { t: "Node_Stacking", d: "Scalability reduced to its most basic, unbreakable form.", i: Layers },
                        { t: "Security_X", d: "Advanced structural hardening for the core mission.", i: ShieldCheck },
                        { t: "Admin_Port", d: "A command interface stripped of every unnecessary variable.", i: Command }
                    ].map((item, i) => (
                        <div key={i} className="group relative p-12 border-[4px] border-black hover:bg-blue-600 hover:text-white transition-all cursor-pointer flex flex-col justify-between min-h-[350px]">
                            <div className="flex justify-between items-start">
                                <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-none group-hover:bg-white group-hover:text-black transition-colors">
                                    <item.i className="w-8 h-8" />
                                </div>
                                <span className="text-7xl font-black text-black/5 group-hover:text-white/10 transition-colors italic leading-none select-none italic">#0{i + 1}</span>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-5xl font-black uppercase italic tracking-tighter leading-none">{item.t}</h4>
                                <p className="text-[14px] font-bold opacity-60 leading-tight uppercase tracking-tight max-w-sm">
                                    {item.d}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- EXAGGERATED PRICING: THE STATEMENT --- */}
            <section className="bg-black text-white px-10 lg:px-24 py-32 flex flex-col lg:flex-row items-center justify-between gap-20 relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 p-10 text-[15rem] font-black text-white opacity-[0.03] select-none leading-none z-0 uppercase font-sans">99</div>

                <div className="max-w-2xl space-y-10 relative z-10">
                    <div className="text-[11px] font-black text-blue-400 uppercase tracking-[1em]">VALUE_MODEL</div>
                    <h2 className="text-7xl lg:text-[10rem] font-black italic tracking-tighter leading-[0.8] uppercase">
                        One. <br />
                        Flat. <br />
                        Price.
                    </h2>
                    <p className="text-white opacity-80 text-xl font-bold uppercase leading-tight max-w-md tracking-tight border-l-[8px] border-blue-600 pl-8">
                        The full machine. $99/Mo. <br /> Infinite_Nodes.
                    </p>
                </div>

                <div className="w-full lg:w-[450px] bg-white text-black p-12 lg:p-16 flex flex-col justify-between items-center relative shadow-[25px_25px_0px_#1e3a8a] cursor-pointer group/price transition-all active:scale-95">
                    <div className="text-center space-y-4">
                        <h3 className="text-2xl font-black uppercase tracking-widest italic">THE_OS</h3>
                        <div className="text-[8rem] font-black italic leading-none tracking-tighter text-blue-600 group-hover:scale-110 transition-transform">$99</div>
                        <div className="text-[10px] font-black uppercase tracking-widest opacity-40">PER_INSTALLATION</div>
                    </div>

                    <div className="w-full space-y-4 py-10">
                        {[
                            "Full_Core_Control",
                            "Direct_Node_Link",
                            "24/7_Support"
                        ].map(f => (
                            <div key={f} className="flex items-center gap-5 group cursor-default">
                                <div className="w-8 h-8 bg-black flex items-center justify-center text-white">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <span className="text-[13px] font-black uppercase tracking-tighter italic">{f}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full h-20 bg-black text-white font-black uppercase tracking-[0.4em] text-[12px] hover:bg-blue-600 transition-all flex items-center justify-center gap-6">
                        BUY_CORE <ArrowUpRight className="w-8 h-8" />
                    </button>
                </div>
            </section>

            {/* --- EXAGGERATED FOOTER: THE END --- */}
            <footer className="py-32 bg-white text-black flex flex-col items-center gap-20 shrink-0 relative overflow-hidden border-t-[8px] border-black">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-16 gap-16 relative z-10 font-black">
                    <div className="flex items-center gap-8">
                        <div className="w-20 h-20 bg-black flex items-center justify-center hover:scale-110 transition-transform">
                            <Box className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-6xl font-black tracking-tighter uppercase italic leading-none">ViCode.</h4>
                            <p className="text-[11px] font-black text-blue-600 uppercase tracking-[0.5em] mt-3">STABILITY_OVER_NOISE</p>
                        </div>
                    </div>
                    <div className="flex gap-12 text-[11px] font-black uppercase tracking-[0.5em] opacity-40">
                        <a href="#" className="hover:text-black transition-colors">SPECS</a>
                        <a href="#" className="hover:text-black transition-colors underline decoration-blue-600 decoration-[6px] underline-offset-8">EXIT</a>
                    </div>
                </div>
                <div className="text-[16px] font-black text-black/5 tracking-[3em] uppercase italic text-center px-4 w-full">
                    REDUCE_EVERYTHING_TO_THE_CORE
                </div>
            </footer>
        </div>
    );
};
