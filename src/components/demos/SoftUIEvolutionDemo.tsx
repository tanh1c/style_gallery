import {
Activity,
ArrowUpRight,
BarChart3,
Bot,
Check,
Cloud,
Cpu,
Figma,
Github,
Layers,
ShieldCheck,
Slack,
Star,
Zap
} from "lucide-react";
import React,{ useState } from "react";

export const SoftUIEvolutionDemo: React.FC = () => {
    const [active, setActive] = useState(false);
    const [billing, setBilling] = useState('monthly');

    return (
        <div className="flex-1 bg-[#F1F5F9] text-slate-700 font-sans selection:bg-teal-200 selection:text-slate-900 overflow-y-auto relative h-full flex flex-col p-6 space-y-24 text-left">

            {/* Soft UI Floating Header */}
            <header className="flex items-center justify-between px-8 py-4 bg-[#F1F5F9] rounded-[32px] shadow-[10px_10px_20px_#d1d5db,-10px_-10px_20px_#ffffff] border border-white/50 shrink-0">
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-2xl bg-teal-500 shadow-[inset_4px_4px_8px_#3d9e91,inset_-4px_-4px_8px_#5effed] flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-extrabold text-xl tracking-tight text-slate-900">ViCode_Soft</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-teal-600">Evolution_V2</span>
                    </div>
                </div>

                <nav className="hidden lg:flex items-center gap-8">
                    {["Discovery", "Pricing", "Integrations", "Resources"].map(item => (
                        <button key={item} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-teal-600 transition-colors">
                            {item}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="h-10 px-6 rounded-xl bg-teal-500 text-white font-black uppercase tracking-widest text-[10px] shadow-[5px_5px_10px_#d1d5db] hover:scale-105 active:scale-95 transition-all">
                        Get_Started
                    </button>
                </div>
            </header>

            {/* --- HERO SECTION (Fits one screen initially) --- */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F1F5F9] shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff]">
                        <Activity className="w-4 h-4 text-teal-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Real-time_Compute_Fabric</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-slate-900">
                        Engineering in<br />
                        <span className="text-teal-500 drop-shadow-[4px_4px_8px_#d1d5db]">High_Definition.</span>
                    </h1>

                    <p className="text-xl font-bold text-slate-400 leading-relaxed max-w-lg">
                        Soft interface, solid infrastructure. Experience the peak evolution of SaaS deployment with tactile precision and 99.999% uptime.
                    </p>

                    <div className="flex gap-6 items-center">
                        <button
                            className={`h-16 px-12 rounded-[24px] font-black uppercase tracking-widest flex items-center gap-4 transition-all ${active ? 'bg-indigo-500 text-white shadow-inner scale-95' : 'bg-[#F1F5F9] text-slate-900 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff] hover:scale-105'}`}
                            onClick={() => setActive(!active)}
                        >
                            Start_Building
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-4 border-[#F1F5F9] bg-slate-200 shadow-[5px_5px_10px_#d1d5db]" />
                            ))}
                            <div className="w-10 h-10 rounded-full border-4 border-[#F1F5F9] bg-teal-500 text-white text-[10px] font-bold flex items-center justify-center shadow-[5px_5px_10px_#d1d5db]">
                                +2k
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-10 bg-gradient-to-br from-teal-100 to-indigo-100 rounded-full blur-[120px] opacity-40 animate-pulse" />

                    <div className="relative z-10 p-8 rounded-[56px] bg-[#F1F5F9] shadow-[30px_30px_60px_#d1d5db,-30px_-30px_60px_#ffffff] border border-white/50 overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
                            alt="Soft UI Tech Illustration"
                            className="w-full h-[320px] object-cover rounded-[32px] mb-8 transition-transform group-hover:scale-110 duration-1000"
                        />

                        <div className="grid grid-cols-3 gap-6">
                            {[
                                { i: Cpu, l: "CPU_Load", v: "12%" },
                                { i: ShieldCheck, l: "Security", v: "Deep" },
                                { i: Cloud, l: "Latency", v: "0.4ms" }
                            ].map((s, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-[#F1F5F9] shadow-[inset_6px_6px_10px_#d1d5db,inset_-6px_-6px_10px_#ffffff] text-center space-y-2">
                                    <s.i className="w-5 h-5 mx-auto text-teal-600" />
                                    <p className="text-[10px] font-black text-slate-800 tracking-tighter">{s.v}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- LOGO WALL SECTION --- */}
            <div className="space-y-8 py-12 border-t border-b border-black/5">
                <p className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Trusted_by_Engineering_Giants</p>
                <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="flex items-center gap-3 font-bold text-xl"><Github className="w-6 h-6" />GitHub</div>
                    <div className="flex items-center gap-3 font-bold text-xl"><Slack className="w-6 h-6" />Slack</div>
                    <div className="flex items-center gap-3 font-bold text-xl"><Figma className="w-6 h-6" />Figma</div>
                    <div className="flex items-center gap-3 font-bold text-xl text-teal-600">ViCode_Core</div>
                </div>
            </div>

            {/* --- FEATURE SECTION --- */}
            <section className="space-y-16">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <h2 className="text-4xl font-black tracking-tight text-slate-900">Total Architecture Control.</h2>
                    <p className="text-lg font-bold text-slate-400">Redefining how teams deploy, monitor, and scale software systems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { i: Layers, t: "Modular Fabric", d: "Deploy complex systems in discrete, manageable nodes with zero overhead." },
                        { i: BarChart3, t: "Neural Analytics", d: "Predict failure points before they occur with our AI-driven telemetry." },
                        { i: Bot, t: "Autonomous DevOps", d: "Self-healing infrastructure that scales based on real-time traffic pulses." },
                        { i: ShieldCheck, t: "Quantum Guard", d: "End-to-end encryption with zero-knowledge architecture as standard." }
                    ].map((f, i) => (
                        <div key={i} className="p-10 rounded-[40px] bg-[#F1F5F9] shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff] space-y-6 hover:translate-y-[-8px] transition-all">
                            <div className="w-16 h-16 rounded-3xl bg-white shadow-[8px_8px_16px_#d1d5db] flex items-center justify-center">
                                <f.i className="w-8 h-8 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900">{f.t}</h3>
                            <p className="text-sm font-bold text-slate-400 leading-relaxed">{f.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- PRICING SECTION --- */}
            <section className="space-y-16 py-12">
                <div className="flex flex-col items-center gap-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-4xl font-black text-slate-900">Simplified Pricing.</h2>
                        <p className="text-slate-400 font-bold">Scale at your own pace without hidden compute costs.</p>
                    </div>

                    <div className="flex p-2 rounded-2xl bg-[#F1F5F9] shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff]">
                        <button
                            onClick={() => setBilling('monthly')}
                            className={`px-8 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${billing === 'monthly' ? 'bg-teal-500 text-white shadow-lg' : 'text-slate-400'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBilling('yearly')}
                            className={`px-8 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${billing === 'yearly' ? 'bg-teal-500 text-white shadow-lg' : 'text-slate-400'}`}
                        >
                            Yearly_(-20%)
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { n: "Node_S", p: "0", f: ["1 Project", "Basic Telemetry", "Community Support"] },
                        { n: "Node_X", p: "29", f: ["5 Projects", "Neural Analytics", "24/7 Priority", "Custom Edge"] },
                        { n: "Cluster", p: "99", f: ["Unlimited Tags", "Quantum Guard", "Dedicated Success Mgr"] }
                    ].map((plan, i) => (
                        <div key={i} className={`p-10 rounded-[48px] bg-[#F1F5F9] border-2 transition-all ${i === 1 ? 'border-teal-400 shadow-[20px_20px_40px_#d1d5db]' : 'border-transparent shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]'}`}>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-600">{plan.n}</span>
                            <div className="flex items-baseline gap-1 mt-4 mb-8">
                                <span className="text-5xl font-black text-slate-900">${billing === 'monthly' ? plan.p : Math.round(parseInt(plan.p) * 0.8)}</span>
                                <span className="text-slate-400 font-bold text-sm">/mo</span>
                            </div>
                            <ul className="space-y-4 mb-10">
                                {plan.f.map((feat, fi) => (
                                    <li key={fi} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                                        <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-teal-600" />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg transition-all ${i === 1 ? 'bg-teal-500 text-white hover:scale-105' : 'bg-white text-slate-900 border border-slate-100 hover:bg-slate-50'}`}>
                                Select_Plan
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- TESTIMONIAL SECTION --- */}
            <div className="p-16 rounded-[60px] bg-slate-900 text-white shadow-[30px_30px_60px_#d1d5db] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px]" />
                <div className="relative z-10 flex flex-col items-center text-center space-y-10">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-teal-400 text-teal-400" />)}
                    </div>
                    <blockquote className="text-3xl lg:text-4xl font-black italic tracking-tighter max-w-4xl leading-tight">
                        "The Soft UI Evolution isn't just a design choice; it's a productivity multiplier. We scaled from 10 to 1000 nodes without touching a single CLI."
                    </blockquote>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-teal-400 italic">Sarah_Jenkins . CTO_at_NovaScale</span>
                    </div>
                </div>
            </div>

            {/* --- COMPREHENSIVE FOOTER --- */}
            <footer className="pt-24 pb-12 space-y-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
                    <div className="col-span-2 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-extrabold text-xl tracking-tight text-slate-900">ViCode_Soft</span>
                        </div>
                        <p className="text-sm font-bold text-slate-400 max-w-xs uppercase leading-relaxed tracking-widest text-[10px]">
                            The future of engineering interfaces. Tactile, precise, and performant. Built for the modern SaaS era.
                        </p>
                    </div>
                    {[
                        { t: "Product", l: ["Nodes", "Logic", "Pulse", "Scale"] },
                        { t: "Company", l: ["About", "Careers", "Legal", "Security"] },
                        { t: "Resources", l: ["Docs", "API", "Blog", "Community"] }
                    ].map((col, i) => (
                        <div key={i} className="space-y-6">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">{col.t}</h5>
                            <ul className="space-y-4">
                                {col.l.map((link, li) => (
                                    <li key={li}><a href="#" className="text-sm font-bold text-slate-400 hover:text-teal-600 transition-colors">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 italic">© 2026 ViCode Universal Infrastructure Project.</span>
                    <div className="flex gap-8 opacity-20 hover:opacity-100 transition-opacity">
                        <Github className="w-4 h-4 cursor-pointer" />
                        <Slack className="w-4 h-4 cursor-pointer" />
                        <Figma className="w-4 h-4 cursor-pointer" />
                    </div>
                </div>
            </footer>
        </div>
    );
};
