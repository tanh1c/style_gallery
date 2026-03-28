import { ArrowUpRight,Bell,Check,Cpu,Layers,Play,RefreshCcw,Shield,Zap } from "lucide-react";
import React,{ useState } from "react";

const FeedbackCard: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="group relative bg-white border border-slate-100 p-8 lg:p-12 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(99,102,241,0.12)] hover:-translate-y-2 cursor-pointer overflow-hidden rounded-3xl"
        >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full blur-3xl transition-opacity duration-700 ${hover ? 'opacity-100' : 'opacity-0'}`} />

            <div className="relative z-10 space-y-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${hover ? 'bg-indigo-600 text-white scale-110 rotate-6 shadow-lg shadow-indigo-200' : 'bg-slate-50 text-slate-400'}`}>
                    <Icon className={`w-7 h-7 transition-all duration-500 ${hover ? 'scale-110' : 'scale-100'}`} />
                </div>
                <div className="space-y-3 text-left">
                    <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${hover ? 'text-indigo-600' : 'text-slate-900'}`}>{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
                </div>
                <div className={`pt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${hover ? 'text-indigo-600 translate-x-0 opacity-100' : 'text-slate-300 -translate-x-4 opacity-0'}`}>
                    <span>View_Detailed_Metrics</span>
                    <ArrowUpRight className="w-3 h-3" />
                </div>
            </div>
        </div>
    );
};

export const MicroInteractionsDemo: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [notif, setNotif] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleAction = () => {
        if (processing) return;
        setProcessing(true);
        setNotif(false);
        let p = 0;
        const interval = setInterval(() => {
            p += 4;
            setProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                setProcessing(false);
                setNotif(true);
                setTimeout(() => setNotif(false), 3000);
                setProgress(0);
            }
        }, 30);
    };

    return (
        <div className="flex-1 bg-slate-50 overflow-y-auto text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-32 relative text-left scroll-smooth" onScroll={(e: any) => setScrolled(e.target.scrollTop > 50)}>

            {/* Subtle Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none" />

            {/* In-App Toast Feedback */}
            <div className={`fixed top-12 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${notif ? 'opacity-100 translate-y-4' : 'opacity-0 translate-y-0 pointer-events-none'}`}>
                <div className="bg-slate-900 text-white px-8 py-4 rounded-full shadow-2xl shadow-indigo-200.5 flex items-center gap-4 border border-white/10">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold tracking-tight uppercase tracking-widest whitespace-nowrap">System_Node_Synchronized</span>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto relative z-10 px-8 lg:px-12 py-8 space-y-16">

                {/* Tactile Header */}
                <header className={`h-20 flex items-center justify-between px-8 rounded-2xl transition-all duration-500 sticky top-4 z-50 ${scrolled ? 'bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl' : 'bg-transparent border border-transparent'}`}>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] group-hover:scale-105">
                            <Zap className="w-5 h-5 fill-white" />
                        </div>
                        <span className="font-black text-xl tracking-tighter uppercase italic group-hover:tracking-normal transition-all duration-500">ViCode.</span>
                    </div>
                    <nav className="hidden lg:flex items-center gap-8 font-bold text-[10px] uppercase tracking-widest text-slate-400">
                        {["Nodes", "Clusters", "Metrics"].map(item => (
                            <button key={item} className="hover:text-indigo-600 transition-colors relative group py-2">
                                {item}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                            </button>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-colors relative group">
                            <Bell className="w-5 h-5 group-hover:animate-bounce" />
                            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-50" />
                        </button>
                        <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all">
                            Console_Connect
                        </button>
                    </div>
                </header>

                {/* Tactile Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pt-8">
                    <div className="space-y-10">
                        <div className="inline-flex items-center gap-3 bg-white border border-slate-100 shadow-sm rounded-full px-5 py-2 group hover:shadow-md transition-all cursor-crosshair">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-50" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Core_Engine_Stable</span>
                        </div>

                        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tighter text-slate-900">
                            Soft Touch.<br />
                            <span className="text-indigo-600 inline-block hover:scale-105 transition-transform cursor-default">Hard Power.</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-md font-medium">
                            Infrastructure engineering that responds to your touch. Experience the most tactile SaaS experience ever built.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={handleAction}
                                className={`h-16 px-10 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-4 transition-all relative overflow-hidden group ${processing ? 'bg-slate-100 text-slate-400 cursor-wait' : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-200 hover:-translate-y-1 active:scale-95'}`}
                            >
                                {processing ? (
                                    <>
                                        <RefreshCcw className="w-5 h-5 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Deploy_Node
                                        <Play className="w-4 h-4 fill-white" />
                                    </>
                                )}
                                {/* Internal Progress bar for the button */}
                                {processing && (
                                    <div
                                        className="absolute bottom-0 left-0 h-1 bg-indigo-400 transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    />
                                )}
                            </button>
                            <button className="h-16 px-10 border border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-sm rounded-2xl hover:bg-slate-50 transition-all flex items-center gap-3 group">
                                <Cpu className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                Inspect_Sys
                            </button>
                        </div>
                    </div>

                    <div className="relative group perspective-1000">
                        {/* High-fidelity interaction asset with floating logic */}
                        <div className="relative z-10 p-6 bg-white border border-slate-100 rounded-[48px] shadow-2xl transition-all duration-700 group-hover:rotate-x-6 group-hover:rotate-y-[-6deg] group-hover:shadow-[0_60px_100px_-20px_rgba(99,102,241,0.15)] overflow-hidden">
                            <img
                                src="/micro_tactile.png"
                                alt="Tactile UI"
                                className="w-full rounded-[32px] transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Interactive Elements */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                            <div className="absolute top-12 right-12">
                                <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl space-y-4 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-indigo-600" />
                                        <span className="text-[10px] font-black tracking-widest uppercase">NODE_THROUGHPUT</span>
                                    </div>
                                    <div className="text-3xl font-black tabular-nums">1.28<span className="text-xs text-slate-300 ml-1">GB/s</span></div>
                                    <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-2/3 bg-indigo-600 animate-shimmer" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ambient Shadow/Glow */}
                        <div className="absolute -inset-10 bg-indigo-500/5 blur-[120px] rounded-full -z-10 transition-opacity duration-700 group-hover:opacity-40" />
                    </div>
                </section>

                {/* Micro-Details Section */}
                <section className="space-y-12">
                    <div className="flex justify-between items-end border-b border-slate-100 pb-10">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-extrabold tracking-tight">System.Tactility</h2>
                            <p className="text-slate-400 font-medium">Delightful responses for every computational act.</p>
                        </div>
                        <div className="flex gap-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer hover:bg-slate-200 hover:scale-110 transition-all active:scale-90">
                                    <ChevronRight className="w-5 h-5 text-slate-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeedbackCard
                            icon={Zap}
                            title="Instant Sync"
                            desc="Every mutation across your stack is reflected in 12ms. Real-time has a new feeling."
                        />
                        <FeedbackCard
                            icon={Shield}
                            title="Adaptive Secure"
                            desc="Security protocols that harden on detection of unauthorized flux patterns."
                        />
                        <FeedbackCard
                            icon={Layers}
                            title="Fluid Stacking"
                            desc="Organize your cloud resources with intuitive, dragging-like ease of management."
                        />
                    </div>
                </section>

                {/* Interactive Status Footer Block */}
                <div className="bg-slate-900 rounded-[40px] p-10 lg:p-20 text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
                        <div className="lg:col-span-7 space-y-8">
                            <h2 className="text-5xl font-black tracking-tight leading-none">Ready to feel the difference?</h2>
                            <p className="text-slate-400 text-lg font-medium max-w-md">Connect your first cluster today and experience software that breathes.</p>
                            <div className="flex gap-6">
                                <button className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-white/5">
                                    Grab_System_Key
                                </button>
                                <button className="border border-white/10 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-all">
                                    View_API_Docs
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-3xl p-10 space-y-10">
                                <div className="flex justify-between items-center text-xs font-bold text-white/30 tracking-widest uppercase">
                                    <span>active_processes</span>
                                    <RefreshCcw className="w-4 h-4 animate-spin-slow" />
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { l: "Cloud_Sync", v: 88, c: "bg-indigo-500" },
                                        { l: "Security_Audit", v: 94, c: "bg-emerald-500" },
                                        { l: "Edge_Prop", v: 72, c: "bg-amber-500" }
                                    ].map((s, idx) => (
                                        <div key={idx} className="space-y-3">
                                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                                <span>{s.l}</span>
                                                <span className="text-white/40">{s.v}%</span>
                                            </div>
                                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                <div className={`h-full transition-all duration-[2000ms] ease-out ${s.c}`} style={{ width: `${s.v}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Minimal Footer With Hover Delight */}
                <footer className="pt-20 pb-10 flex flex-col items-center gap-12 border-t border-slate-100">
                    <div className="flex gap-12 text-slate-300 font-bold text-[11px] uppercase tracking-widest">
                        {["Twitter", "Discord", "GitHub", "Email"].map(platform => (
                            <a key={platform} href="#" className="hover:text-indigo-600 transition-all hover:scale-110 active:scale-90 inline-block">{platform}</a>
                        ))}
                    </div>
                    <div className="flex flex-col items-center gap-4 text-slate-400 text-[10px] font-medium uppercase tracking-[0.3em]">
                        <span className="bg-slate-100 px-6 py-2 rounded-full">© 2026 ViCode Tactile Systems Industries.</span>
                        <div className="flex gap-10 opacity-40">
                            <span>V-1.2_RELEASE</span>
                            <span>STATUS: SYNCED</span>
                        </div>
                    </div>
                </footer>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    position: relative;
                    overflow: hidden;
                }
                .animate-shimmer::after {
                    content: "";
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    animation: shimmer 1.5s infinite;
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
                .rotate-x-6 {
                    transform: rotateX(6deg);
                }
                .rotate-y-[-6deg] {
                    transform: rotateY(-6deg);
                }
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
            `}</style>
        </div>
    );
};

const ChevronRight: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
    </svg>
);
