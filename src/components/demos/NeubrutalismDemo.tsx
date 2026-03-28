import { cn } from "@/lib/utils";
import {
ArrowRight,
Check,
Cpu,
Figma,
Fingerprint,
Github,
Layers,
Monitor,
Slack,
Terminal,
Zap
} from "lucide-react";
import React,{ useState } from "react";

export const NeubrutalismDemo: React.FC = () => {
    const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <div className="flex-1 bg-white text-black font-sans selection:bg-[#fde047] selection:text-black overflow-y-auto overflow-x-hidden relative h-full flex flex-col p-6 space-y-20 text-left pt-8">

            {/* --- NEU BRUTAL NAV --- */}
            <header className="flex items-center justify-between px-8 py-3 bg-white border-4 border-black shadow-[4px_4px_0px_#000] sticky top-0 z-[100] mx-4 shrink-0">
                <div className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-black flex items-center justify-center text-[#fde047] border-2 border-black shadow-[2px_2px_0px_#000]">
                        <Terminal className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="font-black text-lg tracking-tighter uppercase">Vi_Code_Neu.</span>
                </div>

                <nav className="hidden lg:flex items-center gap-8">
                    {["Logic", "Nodes", "Pricing", "Edge"].map((link) => (
                        <a key={link} href="#" className="text-[9px] font-black uppercase tracking-[0.2em] hover:text-[#fde047] transition-colors">{link}</a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="h-9 px-5 bg-white border-2 border-black text-[8px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
                        Login
                    </button>
                    <button className="h-9 px-5 bg-[#fde047] border-4 border-black text-[8px] font-black uppercase tracking-[0.2em] shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all hover:bg-black hover:text-white">
                        Build_Fast
                    </button>
                </div>
            </header>

            {/* --- HERO SECTION: COMPACT & FIXED --- */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh] px-4 py-8 relative z-10 shrink-0">
                <div className="space-y-8">
                    <div className="inline-block px-3 py-1.5 border-4 border-black bg-[#f0abfc] text-black shadow-[3px_3px_0px_#000] font-black uppercase text-[9px] tracking-widest">
                        System_Status: 100%_Optimal
                    </div>

                    <div className="relative">
                        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
                            CODE.<br />
                            <span className="relative z-10 inline-block mt-3 bg-[#fde047] px-5 py-3 border-[4px] border-black shadow-[8px_8px_0px_#000]">
                                RAW_POWER.
                            </span>
                        </h1>
                    </div>

                    <p className="text-xl text-black leading-tight font-black uppercase max-w-md border-l-8 border-black pl-8">
                        The world's most aggressive SaaS architecture. No gradients. No compromises.
                    </p>

                    <div className="flex flex-wrap gap-6 items-center">
                        <button className="h-16 px-10 bg-black text-white font-black uppercase tracking-[0.2em] border-4 border-black shadow-[6px_6px_0px_#fde047] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all flex items-center gap-4 group text-base">
                            Get_Access <ArrowRight className="w-5 h-5 stroke-[4]" />
                        </button>
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-12 h-12 rounded-none border-4 border-black bg-white flex items-center justify-center font-black text-[10px] shadow-[3px_3px_0px_#000]">U{i}</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative group max-h-[500px]">
                    <div className="relative z-10 border-[8px] border-black bg-white shadow-[16px_16px_0px_#000] p-3 overflow-hidden transition-transform group-hover:-rotate-1 duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
                            alt="Brutalist Tech Concept"
                            className="w-full h-[400px] object-cover border-4 border-black"
                        />
                        <div className="absolute top-6 right-6 bg-[#22d3ee] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_#000] font-black uppercase text-xs -rotate-6">
                            Verified_Hardware
                        </div>
                    </div>
                </div>
            </section>

            {/* --- LOGO WALL: FIXED OVERLAP --- */}
            <div className="py-12 border-y-[6px] border-black bg-[#fde047] relative z-20 mx-4">
                <p className="text-center text-[9px] font-black uppercase tracking-[0.5em] mb-8">Hard-Coded_Trust_Partners</p>
                <div className="flex justify-center gap-12 items-center flex-wrap px-8">
                    <div className="flex items-center gap-3 font-black text-xl uppercase italic border-4 border-black px-4 py-1.5 bg-white shadow-[4px_4px_0px_#000]"><Github className="w-6 h-6" />Github</div>
                    <div className="flex items-center gap-3 font-black text-xl uppercase italic border-4 border-black px-4 py-1.5 bg-white shadow-[4px_4px_0px_#000]"><Figma className="w-6 h-6" />Figma</div>
                    <div className="flex items-center gap-3 font-black text-xl uppercase italic border-4 border-black px-4 py-1.5 bg-white shadow-[4px_4px_0px_#000]"><Slack className="w-5 h-5" />Slack</div>
                </div>
            </div>

            {/* --- FEATURES GRID --- */}
            <section className="space-y-16 px-4 relative z-10">
                <div className="max-w-2xl space-y-6">
                    <h2 className="text-5xl font-black tracking-tighter uppercase leading-[0.8]"><span className="bg-black text-white px-3">THE_ENGINE.</span><br />REDEFINED.</h2>
                    <p className="text-lg font-black uppercase text-slate-500 max-w-lg">Absolute performance. No overhead. Just raw code on metal.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { t: "Logic_Grid", d: "Zero-latency processing on the edge.", i: Layers, c: "bg-[#bbf7d0]" },
                        { t: "Quantum_Guard", d: "Hard-shell security protocol.", i: Fingerprint, c: "bg-[#fbcfe8]" },
                        { t: "Massive_Compute", d: "Raw silicon power access.", i: Cpu, c: "bg-[#fed7aa]" },
                        { t: "SSH_Terminal", d: "Full control over every node.", i: Terminal, c: "bg-[#ddd6fe]" },
                        { t: "Atomic_Deploy", d: "Global sync in <400ms.", i: Zap, c: "bg-[#fef08a]" },
                        { t: "Observer_360", d: "Real-time packet visualization.", i: Monitor, c: "bg-[#bae6fd]" }
                    ].map((f, i) => (
                        <div key={i} className={cn(
                            "p-8 border-4 border-black shadow-[10px_10px_0px_#000] hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none transition-all space-y-6",
                            f.c
                        )}>
                            <div className="w-14 h-14 bg-white border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_#000]">
                                <f.i className="w-7 h-7 stroke-[3]" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-widest">{f.t}</h3>
                            <p className="text-[10px] font-black uppercase leading-tight text-black/60">{f.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- PRICING SECTION --- */}
            <section className="space-y-16 px-4">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4">
                        <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.8] underline decoration-[10px] decoration-[#fde047] underline-offset-[10px]">Pricing.Rules.</h2>
                        <p className="text-lg font-black uppercase text-slate-400">Fixed costs. No surprises.</p>
                    </div>

                    <div className="flex p-1.5 border-4 border-black bg-white shadow-[4px_4px_0px_#000]">
                        <button
                            onClick={() => setBilling('monthly')}
                            className={cn("px-6 py-2 text-[9px] font-black uppercase transition-all", billing === 'monthly' ? "bg-black text-white" : "hover:bg-slate-50")}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBilling('yearly')}
                            className={cn("px-6 py-2 text-[9px] font-black uppercase transition-all", billing === 'yearly' ? "bg-black text-white" : "hover:bg-slate-50")}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { n: "Dev_Core", p: "0", f: ["100k API req/mo", "Basic Security"] },
                        { n: "Pro_Node", p: "99", f: ["Unlimited Nodes", "Quantum Guard", "Hard Response"], popular: true },
                        { n: "Enterprise", p: "499", f: ["Custom Silicon", "White-Box Audit", "Global Sync"] }
                    ].map((plan, i) => (
                        <div key={i} className={cn(
                            "p-10 border-[6px] border-black shadow-[12px_12px_0px_#000] relative flex flex-col transition-transform hover:-translate-y-1 duration-500",
                            plan.popular ? "bg-[#fde047]" : "bg-white"
                        )}>
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black text-white font-black uppercase text-[9px] tracking-widest border-4 border-white">
                                    ELITE_NODE
                                </div>
                            )}
                            <div className="text-2xl font-black uppercase tracking-[0.2em] mb-4">{plan.n}</div>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-black tracking-tighter">${billing === 'monthly' ? plan.p : Math.round(parseInt(plan.p) * 0.8)}</span>
                                <span className="text-[10px] font-black uppercase">/mo</span>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.f.map((f, fi) => (
                                    <li key={fi} className="flex items-center gap-3 text-[10px] font-black uppercase">
                                        <div className="w-4 h-4 bg-black text-white flex items-center justify-center"><Check className="w-2.5 h-2.5 stroke-[4]" /></div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button className={cn(
                                "w-full py-5 font-black uppercase tracking-[0.2em] shadow-[6px_6px_0px_#000] border-4 border-black transition-all active:translate-x-1 active:translate-y-1 active:shadow-none text-[10px]",
                                plan.popular ? "bg-white text-black hover:bg-slate-50" : "bg-black text-white"
                            )}>
                                Start_Computing
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- TESTIMONIAL --- */}
            <section className="px-4">
                <div className="bg-black text-white border-[10px] border-[#f0abfc] p-12 shadow-[20px_20px_0px_#000] relative">
                    <div className="max-w-4xl space-y-8">
                        <blockquote className="text-4xl lg:text-5xl font-black italic tracking-tighter leading-none uppercase">
                            "The raw speed of ViCodeNeu is disturbing. We moved everything in 14 minutes."
                        </blockquote>
                        <div className="flex items-center gap-5 border-l-6 border-[#fde047] pl-6 py-1">
                            <div className="text-xl font-black uppercase text-[#fde047]">SystemsArchitecture_Lead @ HeavyTech</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="px-4 py-16 bg-[#fde047] border-y-[8px] border-black text-center space-y-10 shrink-0">
                <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none">BUILD_OR_FAIL.</h2>
                <button className="h-20 px-16 bg-black text-white font-black uppercase tracking-[0.3em] text-xl shadow-[8px_8px_0px_#fff] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all">
                    GET_STARTED
                </button>
            </section>

            {/* --- FOOTER --- */}
            <footer className="pt-16 pb-10 px-8 space-y-16 border-t-[8px] border-black bg-white shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1 space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-black flex items-center justify-center text-[#fde047] border-2 border-black">
                                <Terminal className="w-5 h-5 stroke-[3]" />
                            </div>
                            <span className="font-black text-2xl uppercase tracking-tighter italic">Vi_Code.</span>
                        </div>
                        <p className="text-[11px] font-black text-slate-400 uppercase leading-relaxed tracking-wider">
                            No excuses. No gradients. Just high-performance raw code architecture.
                        </p>
                    </div>

                    {[
                        { t: "Logic", l: ["Nodes", "Edges", "Compute"] },
                        { t: "Protocols", l: ["Hard_Sync", "Atomic_Deploy", "Entropy_X"] },
                        { t: "Resources", l: ["Hardware_Docs", "Terminal_API", "Logs"] }
                    ].map((col, i) => (
                        <div key={i} className="space-y-6">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] underline decoration-4 decoration-[#fde047] underline-offset-4">{col.t}</h5>
                            <ul className="space-y-3">
                                {col.l.map((link, li) => (
                                    <li key={li}><a href="#" className="text-[10px] font-black uppercase text-slate-500 hover:text-black transition-all">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-10 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="text-[9px] font-black uppercase tracking-[0.5em] text-black">© 2026 ViCode Universal Brutalist. All Rights_Destroyed.</span>
                </div>
            </footer>
        </div>
    );
};
