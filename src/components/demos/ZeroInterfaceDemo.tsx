import { Activity,ArrowUpRight,Cpu,Globe,Mic2,Search } from "lucide-react";
import React,{ useEffect,useState } from "react";

export const ZeroInterfaceDemo: React.FC = () => {
    const [rippling, setRippling] = useState(false);
    const [intent, setIntent] = useState("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    const trigger_ripple = () => {
        setRippling(true);
        setTimeout(() => setRippling(false), 2000);
    };

    return (
        <div
            className="flex-1 bg-[#FAFAFA] text-[#1A1A1A] font-sans selection:bg-[#E5E5E5] selection:text-black overflow-hidden relative h-full flex flex-col items-center justify-center p-8 text-center"
            onClick={trigger_ripple}
        >

            {/* Ambient Background - Soft Paper Shadows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.02)_0%,_transparent_70%)] opacity-100" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fiber-paper.png')]" />
            </div>

            {/* Zen Header - Floating & Borderless */}
            <header className={`absolute top-12 left-0 right-0 z-50 px-24 flex items-center justify-between transition-all duration-1000 ${visible ? 'translate-y-0 opacity-20 hover:opacity-100' : 'translate-y-[-20px] opacity-0'}`}>
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-1 h-1 bg-black rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.6em]">ViCode.Invisible</span>
                </div>
                <nav className="flex items-center gap-12 font-bold text-[9px] uppercase tracking-[0.4em] text-black/40">
                    {["Discovery", "Nodes", "Pulse"].map(item => (
                        <button key={item} className="hover:text-black transition-colors">
                            {item}
                        </button>
                    ))}
                </nav>
            </header>

            <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center space-y-12 transition-all duration-1000">

                {/* Visual Anchor: The Ripple - Fitting within Hero */}
                <div className="relative group perspective-[1000px]">
                    <div className={`absolute -inset-24 rounded-full blur-3xl transition-all duration-1000 ${rippling ? 'bg-black/5 scale-125' : 'bg-transparent scale-100 opacity-0'}`} />

                    <div className="w-[32rem] h-[20rem] relative z-10 overflow-hidden rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-black/5 bg-white">
                        <img
                            src="/zen_vicode.png"
                            alt="Zen Water Ripple Zero Interaction"
                            className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out ${rippling ? 'scale-110 saturate-[0.8] blur-[2px]' : 'scale-100'}`}
                        />

                        {/* Interactive Invisible Overlay - Hinting at Zen */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center p-12 transition-all duration-700 ${rippling ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="space-y-4">
                                <div className="h-[1px] w-24 bg-black/10 mx-auto" />
                                <p className="text-[10px] font-bold uppercase tracking-[1em] text-black/30">Listening_to_Void</p>
                            </div>
                        </div>
                    </div>

                    {/* Physical Ripple Effect - CSS based */}
                    {rippling && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <div className="w-20 h-20 border border-black/10 rounded-full animate-ripple" />
                            <div className="w-20 h-20 border border-black/10 rounded-full animate-ripple [animation-delay:0.5s]" />
                            <div className="w-20 h-20 border border-black/10 rounded-full animate-ripple [animation-delay:1s]" />
                        </div>
                    )}
                </div>

                {/* Typography: Essentialism */}
                <div className={`space-y-6 transition-all duration-700 ${rippling ? 'blur-[4px] opacity-40 scale-95' : 'blur-0 opacity-100 scale-100'}`}>
                    <h1 className="text-6xl font-black tracking-tight leading-[0.9] text-black/80">
                        Design without<br />
                        <span className="italic font-light tracking-tighter text-black/20">interference.</span>
                    </h1>
                    <p className="text-xs font-bold uppercase tracking-[0.5em] text-black/40">
                        Anticipating intent through mathematical stillness.
                    </p>
                </div>

                {/* Intent Input - Appears on focus/click */}
                <div className={`pt-6 transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="relative group">
                        <input
                            type="text"
                            value={intent}
                            placeholder="State your engineering intent..."
                            className="bg-transparent border-b-2 border-black/5 px-4 py-3 text-center w-80 text-sm font-bold placeholder:text-black/10 focus:outline-none focus:border-black/20 transition-all focus:w-[28rem] selection:bg-black selection:text-white"
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) => setIntent(e.target.value)}
                        />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Ghost Metrics Dashboard - More Subtle & Minimal */}
            <div className={`absolute bottom-12 left-12 right-12 px-12 flex justify-between items-end transition-all duration-1000 ${visible ? 'opacity-20 hover:opacity-80 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {[
                    { l: "Flow", v: "Ambient", i: Activity },
                    { l: "Nodes", v: "Balanced", i: Cpu },
                    { l: "Sync", v: "1ms", i: Globe }
                ].map((s, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                        <s.i className="w-4 h-4 opacity-40" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.5em]">{s.l}</span>
                        <span className="text-xl font-bold tracking-tight">{s.v}</span>
                    </div>
                ))}

                <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full flex items-center justify-center border border-black/5 hover:bg-black hover:text-white transition-all">
                        <Mic2 className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full flex items-center justify-center border border-black/5 hover:bg-black hover:text-white transition-all">
                        <Search className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes ripple {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(8); opacity: 0; }
                }
                .animate-ripple {
                    animation: ripple 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                }
            `}</style>
        </div>
    );
};
