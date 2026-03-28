import {
ArrowRightCircle,
CheckCircle2,
Clock,
Mail,
ShieldCheck,
Star,
TrendingUp,
Zap
} from "lucide-react";
import React,{ useState } from "react";

export const ConversionOptimizedDemo: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div className="flex-1 bg-white text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-y-auto relative h-full flex flex-col scroll-smooth">

            {/* Conversion Header - Clean & Action Oriented - Changed to absolute for containment */}
            <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-white/95 backdrop-blur-3xl border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
                        <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-extrabold text-xl tracking-tighter text-slate-900">ViCode_Sync</span>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <a href="#" className="hover:text-emerald-600">Enterprise_Logic</a>
                    <a href="#" className="hover:text-emerald-600">Global_Pricing</a>
                    <a href="#" className="hover:text-emerald-600">Case_Study</a>
                </div>

                <div className="flex items-center gap-6">
                    <button className="h-11 px-8 rounded-full bg-emerald-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all">
                        Sync_Node_Free
                    </button>
                </div>
            </header>

            {/* --- HERO SECTION: CONVERSION FOCUSED (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 px-12 bg-[#F8FAFC]">
                <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center space-y-10 animate-in fade-in zoom-in-95 duration-1000">

                    {/* Urgency Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">
                        <Clock className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">Limited_Beta: 40_slots_remaining_this_week</span>
                    </div>

                    <h1 className="text-6xl lg:text-7xl font-black leading-[1] tracking-tighter text-slate-900 max-w-4xl">
                        Deploy your SaaS Edge in<br />
                        <span className="text-emerald-600">under_14_minutes.</span>
                    </h1>

                    <p className="text-xl font-bold text-slate-400 leading-snug max-w-2xl">
                        The engineering sync layer that forces consistency across 10,000+ nodes. Stop building infrastructure, start shipping value.
                    </p>

                    {/* Hero Conversion Form */}
                    <form onSubmit={handleSubmit} className="w-full max-w-xl p-2 rounded-[24px] bg-white shadow-2xl shadow-slate-200 border border-slate-100 flex items-center gap-2 group transition-all hover:border-emerald-200">
                        <div className="flex-1 flex items-center px-4 gap-4">
                            <Mail className="w-5 h-5 text-slate-300" />
                            <input
                                type="email"
                                placeholder="Enter_Engineering_Email..."
                                required
                                className="w-full bg-transparent border-none text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:ring-0"
                            />
                        </div>
                        <button className="h-14 px-10 rounded-[18px] bg-emerald-600 text-white font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-lg hover:bg-emerald-700 hover:scale-[1.02] active:scale-95 transition-all">
                            {loading ? "Synchronizing..." : "Start_Sync_V2"}
                            <ArrowRightCircle className="w-5 h-5" />
                        </button>
                    </form>

                    <div className="flex flex-col items-center gap-6 pt-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 shadow-sm" />
                            ))}
                        </div>
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">
                            Trusted by <span className="text-slate-900 underline decoration-emerald-200 underline-offset-4">12,400+ Systems_Engineers</span> Globally
                        </p>
                    </div>
                </div>
            </section>

            {/* --- SOCIAL PROOF: LOGO GRID --- */}
            <div className="py-20 bg-white border-y border-slate-50">
                <div className="max-w-6xl mx-auto px-12 grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
                    <div className="text-2xl font-black italic tracking-tighter text-slate-900 uppercase">TITAN_GRID</div>
                    <div className="text-2xl font-black italic tracking-tighter text-slate-900 uppercase">MESH_LABS</div>
                    <div className="text-2xl font-black italic tracking-tighter text-slate-900 uppercase underline">VOID_SYS</div>
                    <div className="text-2xl font-black italic tracking-tighter text-slate-900 uppercase">PULSE</div>
                    <div className="text-2xl font-black italic tracking-tighter text-slate-900 uppercase">QUANTUM</div>
                </div>
            </div>

            {/* --- THE VALUE PROPOSITION --- */}
            <section className="py-32 px-12 space-y-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <h2 className="text-5xl font-black tracking-tighter leading-none text-slate-900">
                            Why engineers<br /><span className="text-emerald-600 italic">love_Sync.</span>
                        </h2>
                        <div className="space-y-8">
                            {[
                                { t: "Zero Config Deployment", d: "Drop our SDK and we'll map your entire cluster architecture in seconds.", i: Zap },
                                { t: "Sovereign State Policy", d: "Force compliance across every machine with machine-level protocols.", i: ShieldCheck },
                                { t: "Atomic Sync Timing", d: "Sub-millisecond global synchronization for ultra-reliable data flows.", i: TrendingUp }
                            ].map((v, i) => (
                                <div key={i} className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                        <v.i className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-black text-slate-900">{v.t}</h4>
                                        <p className="text-sm font-bold text-slate-400 leading-relaxed max-w-md">{v.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative p-2 rounded-[40px] bg-slate-50 shadow-inner group">
                        <img
                            src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200"
                            alt="Data Metrics ViCode"
                            className="w-full h-[500px] object-cover rounded-[38px] shadow-2xl transition-transform duration-[2s] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-emerald-600/5 mix-blend-multiply rounded-[40px]" />
                    </div>
                </div>
            </section>

            {/* --- THE TRUST ENGINE: TESTIMONIAL --- */}
            <section className="bg-slate-900 text-white py-32 px-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/20" />
                <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                    <Stars />
                    <blockquote className="text-3xl lg:text-5xl font-black tracking-tighter leading-tight italic">
                        "Sync V2 cut our infrastructure drift by 94% in the first month. We've completely eliminated 'Works on my machine' from our engineering vocabulary."
                    </blockquote>
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-emerald-500 shadow-xl" />
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-emerald-400">Marcus_Vane . Principal_Engineer_At_NovaGrid</span>
                    </div>
                </div>
            </section>

            {/* --- PRICING: REFINED CONVERSION TIER --- */}
            <section className="py-32 px-12 space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Choose your node.</h2>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Transparent_billing_for_transparent_engineering</p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all space-y-8">
                        <div className="flex justify-between items-center">
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-600">Sync_Starter</span>
                            <div className="bg-emerald-50 px-3 py-1 rounded-full text-[10px] font-black uppercase text-emerald-700">Free_Trial_Active</div>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-black">$0</span>
                            <span className="text-slate-300 font-bold">/node</span>
                        </div>
                        <ul className="space-y-4 text-sm font-bold text-slate-400">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> 1 Initial Cluster</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Basic Atomic Sync</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Community Relay</li>
                        </ul>
                        <button className="w-full h-16 rounded-2xl border-2 border-slate-100 font-black uppercase tracking-widest text-[11px] hover:bg-slate-50 transition-all">
                            Deploy_Free_Node
                        </button>
                    </div>

                    <div className="p-10 rounded-[40px] bg-emerald-600 text-white shadow-3xl shadow-emerald-200 space-y-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform">
                            <Zap className="w-32 h-32" />
                        </div>
                        <div className="flex justify-between items-center relative z-10">
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/60">Sync_Pro</span>
                            <div className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase text-white">Recommended</div>
                        </div>
                        <div className="flex items-baseline gap-1 relative z-10">
                            <span className="text-5xl font-black">$29</span>
                            <span className="text-emerald-200 font-bold">/node</span>
                        </div>
                        <ul className="space-y-4 text-sm font-bold text-emerald-100 relative z-10">
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> Unlimited Managed Nodes</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> Sovereign Compliance Engine</li>
                            <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> 24/7 Precision Support</li>
                        </ul>
                        <button className="w-full h-16 rounded-2xl bg-white text-emerald-600 font-black uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 active:scale-95 transition-all relative z-10">
                            Activate_Pro_Mesh
                        </button>
                    </div>
                </div>
            </section>

            {/* --- COMPREHENSIVE FOOTER --- */}
            <footer className="pt-32 pb-16 px-16 bg-white border-t border-slate-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-20">
                    <div className="col-span-2 space-y-10 text-center lg:text-left">
                        <div className="flex items-center gap-3 justify-center lg:justify-start">
                            <div className="w-8 h-8 bg-emerald-600 rounded-xl flex items-center justify-center">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-extrabold text-2xl tracking-tighter text-slate-900">ViCode_Sync</span>
                        </div>
                        <p className="text-sm font-bold text-slate-400 leading-relaxed uppercase tracking-widest text-[10px] max-w-xs mx-auto lg:mx-0">
                            The universal sync layer for distributed software systems. Fast. Sovereign. Atomic.
                        </p>
                    </div>

                    {[
                        { t: "Platform", l: ["Architecture", "Scalability", "Security"] },
                        { t: "Company", l: ["Our_Mission", "Global_Pulse", "Legal"] },
                        { t: "Connect", l: ["GitHub", "Discord", "Twitter"] }
                    ].map((col, i) => (
                        <div key={i} className="space-y-8 text-center lg:text-left">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{col.t}</h5>
                            <ul className="space-y-4">
                                {col.l.map((link, li) => (
                                    <li key={li}><a href="#" className="text-xs font-bold text-slate-800 hover:text-emerald-600 transition-colors uppercase tracking-widest">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="max-w-6xl mx-auto pt-24 border-t border-slate-50 mt-16 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 italic">
                    <span>© 2026 ViCode Sync Protocol. All nodes synchronized.</span>
                    <div className="flex items-center gap-4 text-emerald-500/20">
                        <span>L6_ENCRYPTION_ACTIVE</span>
                        <ShieldCheck className="w-3 h-3" />
                    </div>
                </div>
            </footer>

            <style>{`
                input:focus { box-shadow: none !important; }
            `}</style>
        </div>
    );
};

const Stars = () => (
    <div className="flex justify-center gap-1">
        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-emerald-400 text-emerald-400" />)}
    </div>
);
