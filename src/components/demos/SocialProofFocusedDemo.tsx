import { cn } from "@/lib/utils";
import {
Award,
CheckCircle2,
Globe,
Quote,
ShieldCheck,
Star,
TrendingUp,
Users
} from "lucide-react";
import React from "react";

export const SocialProofFocusedDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* Nav - Social proof starting from the top */}
            <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 bg-white/80 backdrop-blur-xl border-b border-indigo-50">
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                        <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-extrabold text-2xl tracking-tighter text-slate-900 italic">ViCode_Mesh</span>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <div className="flex items-center gap-2 group cursor-pointer hover:text-indigo-600 transition-colors">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>4.9/5_G2_Score</span>
                    </div>
                    <a href="#" className="hover:text-indigo-600 uppercase tracking-widest">Global_Leaders</a>
                    <a href="#" className="hover:text-indigo-600 uppercase tracking-widest">Growth_Data</a>
                </div>

                <div className="flex items-center gap-6">
                    <button className="h-11 px-8 rounded-full bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:scale-105 active:scale-95 transition-all">
                        Join_12k_Engineers
                    </button>
                </div>
            </header>

            {/* --- HERO: SOCIAL PROOF FIRST (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-40 pb-20 px-12 bg-gradient-to-b from-indigo-50/50 to-white">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-10 animate-in slide-in-from-left duration-1000">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700">
                            <Award className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Voted_#1_SaaS_Infrastructure_of_2026</span>
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tighter text-slate-900 uppercase italic">
                            The Protocol<br />
                            <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Everyone_Trusts.</span>
                        </h1>

                        <p className="text-xl font-bold text-slate-400 leading-snug max-w-lg italic">
                            Stop guessing. 12,400+ world-class engineering teams synchronize their mission-critical logic with ViCode.
                        </p>

                        <div className="flex items-center gap-8 pt-4">
                            <button className="h-16 px-12 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-indigo-200 hover:scale-110 active:scale-95 transition-all">
                                Get_Verified_Now
                            </button>
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 shadow-md ring-1 ring-indigo-50" />
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-indigo-600 shadow-md flex items-center justify-center text-white text-[10px] font-black">
                                    +12K
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-in zoom-in-95 duration-1000">
                        <div className="grid grid-cols-2 gap-6 lg:gap-10">
                            <div className="space-y-6 lg:space-y-10">
                                <MetricBlock label="Sync_Success" value="99.99%" icon={<CheckCircle2 className="w-5 h-5 text-emerald-500" />} color="emerald" />
                                <MetricBlock label="Global_Wait" value="1.2ms" icon={<Globe className="w-5 h-5 text-indigo-500" />} color="indigo" />
                            </div>
                            <div className="space-y-6 lg:space-y-10 pt-16">
                                <MetricBlock label="Security" value="L6_Secure" icon={<ShieldCheck className="w-5 h-5 text-rose-500" />} color="rose" />
                                <MetricBlock label="Growth" value="+14.2%" icon={<TrendingUp className="w-5 h-5 text-sky-500" />} color="sky" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- LOGO WALL: THE TRUST CORE --- */}
            <div className="py-24 border-y border-indigo-50 bg-white">
                <div className="max-w-6xl mx-auto px-12 space-y-12">
                    <p className="text-center text-[11px] font-black uppercase tracking-[0.5em] text-indigo-300">Synchronized_With_Industry_Titans</p>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-12 items-center opacity-30 grayscale hover:grayscale-0 transition-all cursor-default translate-y-2">
                        <LogoPlaceholder text="NOVA_LABS" />
                        <LogoPlaceholder text="ZENITH" />
                        <LogoPlaceholder text="TITAN_CO" />
                        <LogoPlaceholder text="ORBITAL" />
                        <LogoPlaceholder text="PYRUS" />
                        <LogoPlaceholder text="NEON_SYS" />
                    </div>
                </div>
            </div>

            {/* --- TESTIMONIAL MOSAIC: THE HUMAN PROOF --- */}
            <section className="py-32 px-12 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full" />

                <div className="max-w-6xl mx-auto space-y-20">
                    <div className="text-center space-y-4">
                        <h2 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic">Voices_from_the_Edge</h2>
                        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-indigo-300">Clinical_Evidence_from_Elite_Engineers</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { n: "Dr. Elena Vance", r: "Head of Infra @ NeoSystems", q: "ViCode didn't just solve our latency issues; it redefined how we think about deployment safety.", a: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
                            { n: "Kaelen Moore", r: "Lead Architect @ Stellar", q: "Before ViCode, a global sync took minutes. Now, our entire mesh pulses in sub-millisecond cycles.", a: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
                            { n: "Inaya Khan", r: "Ops Director @ QuantumScale", q: "The social proof was real. We joined for the hype, stayed for the absolute technical reliability.", a: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?auto=format&fit=crop&q=80&w=200" },
                            { n: "Marcus Thorne", r: "CEO @ InfraFlux", q: "Total game-changer. Our incident reports dropped by 88% in the first quarter of using the Mesh.", a: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
                            { n: "Sophia Chen", r: "Sr. Engineer @ ByteLine", q: "Atomic Sync isn't just a buzzword. ViCode actually delivers on the promise of global consistency.", a: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" },
                            { n: "Liam O'Neill", r: "CTO @ CloudBound", q: "Managing 50,000 nodes used to be a nightmare. Now, it's just a routine afternoon at the office.", a: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" }
                        ].map((t, i) => (
                            <div key={i} className="p-10 rounded-[40px] bg-white border border-indigo-50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all space-y-6 group">
                                <Quote className="w-10 h-10 text-indigo-100 group-hover:text-indigo-600 transition-colors" />
                                <p className="text-lg font-bold text-slate-400 leading-relaxed italic">"{t.q}"</p>
                                <div className="flex items-center gap-4 pt-4 border-t border-indigo-50">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                                        <img src={t.a} alt={t.n} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{t.n}</h4>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300">{t.r}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CASE STUDY: THE ULTIMATE PROOF --- */}
            <section className="py-32 px-12 bg-white">
                <div className="max-w-6xl mx-auto rounded-[64px] bg-slate-900 p-24 text-white grid grid-cols-1 lg:grid-cols-2 gap-20 items-center overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-24 opacity-5 scale-150 rotate-12 group-hover:rotate-45 transition-transform duration-[3s]">
                        <Users className="w-64 h-64" />
                    </div>

                    <div className="space-y-10 relative z-10">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Case_Study: Global_Optimization</span>
                        </div>
                        <h2 className="text-5xl font-black leading-tight tracking-tighter uppercase italic">How_Zenith_Co_Saved<br /><span className="text-indigo-400">4.2_Million_Operations.</span></h2>
                        <p className="text-lg font-bold text-slate-400 leading-relaxed">By implementing ViCode Mesh v3, Zenith successfully synchronized their global cluster across 12 zones in under 4 seconds.</p>
                        <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-indigo-200">
                            {["94% Reduction in Drift", "Instant Global Purge", "Zero Incident Latency"].map(i => (
                                <li key={i} className="flex items-center gap-4">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                    {i}
                                </li>
                            ))}
                        </ul>
                        <button className="h-14 px-10 rounded-2xl bg-white text-slate-900 font-black uppercase tracking-widest text-[10px] hover:scale-110 active:scale-95 transition-all">
                            Read_Zenith_Study
                        </button>
                    </div>

                    <div className="relative z-10 p-2 rounded-[40px] bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                            alt="Team Success"
                            className="w-full h-[400px] object-cover rounded-[32px] opacity-80"
                        />
                    </div>
                </div>
            </section>

            {/* --- CTA: JOIN THE MOVEMENT --- */}
            <section className="py-40 px-12 text-center bg-white relative">
                <div className="max-w-4xl mx-auto space-y-12">
                    <Users className="w-16 h-16 text-indigo-600 mx-auto opacity-20" />
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 uppercase italic">
                        The_Future_is_Verified.
                    </h2>
                    <p className="text-xl font-bold text-slate-400 tracking-[0.4em] uppercase">Join_12,400+_Engineers_Already_in_the_Mesh</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-8 pt-6">
                        <button className="h-16 px-16 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest shadow-2xl shadow-indigo-200 hover:scale-110 active:scale-95 transition-all text-[11px]">
                            Start_My_Sync
                        </button>
                        <button className="h-16 px-16 rounded-2xl border-2 border-slate-100 text-slate-900 font-black uppercase tracking-widest hover:bg-slate-50 transition-all text-[11px]">
                            Explore_Success_Data
                        </button>
                    </div>

                    <div className="pt-12 flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 italic">"Literally the only protocol you need in 2026."</p>
                </div>
            </section>

            {/* --- FOOTER: TRUSTED TO THE END --- */}
            <footer className="pt-32 pb-16 px-20 border-t border-indigo-50 bg-slate-50">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-20">
                    <div className="lg:col-span-2 space-y-10">
                        <div className="flex items-center gap-3">
                            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
                                <Users className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-black text-xl tracking-tighter uppercase italic">ViCode_Mesh</span>
                        </div>
                        <p className="text-[10px] font-bold text-slate-300 leading-relaxed max-w-xs uppercase tracking-[0.4em]">
                            Built for Engineers. Trusted by Enterprise. Verified by Data.
                        </p>
                    </div>

                    {[
                        { t: "Proof", l: ["Case_Studies", "Metrics", "G2_Reports", "Awards"] },
                        { t: "Network", l: ["Registry", "Atomic_Sync", "Sovereign", "Pulse"] },
                        { t: "Company", l: ["About_The_Mesh", "Security", "Legal", "Press"] },
                        { t: "Social", l: ["Discord", "X_Twitter", "LinkedIn", "GitHub"] }
                    ].map((col, i) => (
                        <div key={i} className="space-y-8">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-300">{col.t}</h5>
                            <ul className="space-y-4">
                                {col.l.map((link, li) => (
                                    <li key={li}>
                                        <a href="#" className="text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-[0.1em]">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto pt-24 border-t border-indigo-100/50 mt-16 flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.6em] text-slate-300 italic text-center">
                    <span>© 2026 ViCode Group. All opinions verified by consensus.</span>
                    <div className="flex items-center gap-8 text-indigo-200">
                        <span>CONSENSUS_PROTOCOL_v4.2</span>
                        <ShieldCheck className="w-4 h-4" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

const MetricBlock = ({ label, value, icon, color }: { label: string, value: string, icon: React.ReactNode, color: string }) => (
    <div className={cn(
        "p-8 rounded-[40px] bg-white border shadow-xl hover:-translate-y-2 transition-all space-y-4",
        `border-${color}-50 shadow-${color}-500/5`
    )}>
        <div className="flex items-center justify-between">
            <span className={cn("text-[10px] font-black uppercase tracking-widest", `text-${color}-500`)}>{label}</span>
            {icon}
        </div>
        <div className="text-4xl font-black tracking-tighter italic text-slate-900">{value}</div>
    </div>
);

const LogoPlaceholder = ({ text }: { text: string }) => (
    <div className="text-xl font-black italic tracking-tighter text-slate-900 uppercase">
        {text}
    </div>
);
