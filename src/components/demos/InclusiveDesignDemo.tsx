import {
Accessibility,
ArrowUpRight,
CheckCircle2,
ChevronRight,
Command,
Eye,
Globe,
MousePointer2,
Search,
Shield,
Type,
Zap
} from "lucide-react";
import React,{ useState } from "react";

export const InclusiveDesignDemo: React.FC = () => {
    const [contrast, setContrast] = useState(false);
    const [fontSize, setFontSize] = useState(1); // 1 = normal, 1.2 = large, 1.4 = xlarge

    return (
        <div className={`flex-1 transition-all duration-500 overflow-y-auto ${contrast ? 'bg-black text-[#FDE047]' : 'bg-white text-[#0F172A]'} font-sans relative selection:bg-blue-600 selection:text-white pb-32 pb-32 text-left`}>

            {/* Accessibility Shortcut Bar - Fixed top */}
            <div className={`sticky top-0 z-[100] px-8 py-3 flex items-center justify-between border-b ${contrast ? 'bg-[#0F172A] border-[#FDE047]/20' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center gap-6">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Universal_A11y_Tools</span>
                    <div className="h-4 w-[1px] bg-slate-300" />
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setContrast(!contrast)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all ${contrast ? 'bg-[#FDE047] text-black' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'}`}
                        >
                            <Eye className="w-3.5 h-3.5" />
                            {contrast ? 'High_Contrast_ON' : 'High_Contrast_OFF'}
                        </button>
                        <button
                            onClick={() => setFontSize(f => f >= 1.4 ? 1 : f + 0.2)}
                            className={`flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 hrounded-md text-[10px] font-bold uppercase tracking-wider hover:bg-slate-100 transition-all`}
                        >
                            <Type className="w-3.5 h-3.5" />
                            Zoom_({Math.round(fontSize * 100)}%)
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hidden md:flex">
                        <Command className="w-3 h-3" />
                        <span>K_To_Search</span>
                    </div>
                    <Search className="w-4 h-4" />
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-8 lg:px-12 py-6 space-y-12" style={{ transform: `scale(${fontSize})`, transformOrigin: 'top center' }}>

                {/* Inclusive Header */}
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${contrast ? 'bg-[#FDE047] text-black' : 'bg-blue-700 text-white'}`}>
                            <Globe className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-xl tracking-tighter uppercase italic">ViCode.Universal</span>
                            <span className={`text-[9px] font-black uppercase tracking-widest ${contrast ? 'text-[#FDE047]' : 'text-blue-700 opacity-60'}`}>Engineering_For_All</span>
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center gap-8">
                        {["Products", "Platform", "Community", "A11y"].map(item => (
                            <a key={item} href="#" className={`text-xs font-bold uppercase tracking-widest hover:underline decoration-4 underline-offset-8 ${contrast ? 'text-[#FDE047]' : 'text-slate-500 hover:text-blue-700'}`}>
                                {item}
                            </a>
                        ))}
                    </nav>

                    <button className={`px-8 py-3 font-black uppercase tracking-widest text-[10px] rounded-lg transition-transform active:scale-95 flex items-center gap-3 ${contrast ? 'bg-[#FDE047] text-black' : 'bg-blue-700 text-white hover:bg-blue-800 shadow-xl shadow-blue-200'}`}>
                        Initialize_System
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </header>

                {/* Inclusive Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className={`inline-flex items-center gap-4 border-l-4 px-6 py-2 ${contrast ? 'border-[#FDE047] bg-[#FDE047]/10' : 'border-blue-700 bg-blue-50'}`}>
                            <CheckCircle2 className={`w-5 h-5 ${contrast ? 'text-[#FDE047]' : 'text-blue-700'}`} />
                            <span className={`text-[10px] font-black uppercase tracking-widest ${contrast ? 'text-[#FDE047]' : 'text-blue-900'}`}>WCAG_2.2_AAA_Compliant_Platform</span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
                            Engineering 100%<br />
                            <span className={contrast ? 'bg-[#FDE047] text-black px-4' : 'text-blue-700'}>Representation.</span>
                        </h1>
                        <p className={`text-xl leading-relaxed max-w-lg font-medium opacity-80 ${contrast ? 'text-[#FDE047]/70' : 'text-slate-600'}`}>
                            We build software for everyone, including you. Experience a platform that adapts to your environment.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className={`h-16 px-10 rounded-xl font-black uppercase tracking-widest text-base flex items-center justify-center gap-4 transition-all shadow-xl active:scale-95 ${contrast ? 'bg-[#FDE047] text-black shadow-black/20' : 'bg-blue-700 text-white hover:bg-blue-800 shadow-blue-200'}`}>
                                Get_Started_Free
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            <button className={`h-16 px-10 rounded-xl border-2 font-black uppercase tracking-widest text-base transition-all flex items-center justify-center gap-3 ${contrast ? 'border-[#FDE047] text-[#FDE047]' : 'border-slate-200 text-slate-900 hover:bg-slate-50'}`}>
                                Watch_Tutorial
                            </button>
                        </div>
                    </div>

                    <div className="relative group">
                        {/* High-quality Diverse Representative Asset */}
                        <div className={`p-3 rounded-[32px] shadow-2xl transition-all ${contrast ? 'bg-black border-2 border-[#FDE047]' : 'bg-slate-50 border border-slate-200'}`}>
                            <img
                                src="/inclusive_vicode.png"
                                alt="ViCode Diverse Team Collaboration"
                                className="w-full h-full object-cover rounded-[24px] contrast-100 max-h-[400px]"
                            />

                            {/* Inclusive UI Snippet */}
                            <div className={`absolute bottom-6 left-6 p-6 rounded-2xl border shadow-2xl space-y-3 max-w-xs animate-in slide-in-from-bottom-5 duration-500 ${contrast ? 'bg-[#FDE047] text-black border-black' : 'bg-white text-slate-900 border-slate-100'}`}>
                                <div className="flex items-center gap-3">
                                    <Accessibility className="w-4 h-4" />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Accessibility_Health</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-black italic tracking-tighter">100</span>
                                    <span className="text-[10px] font-bold uppercase opacity-40">/100</span>
                                </div>
                                <div className="h-1.5 w-full bg-black/10 rounded-full overflow-hidden">
                                    <div className={`h-full w-full ${contrast ? 'bg-black' : 'bg-blue-600'}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inclusive Philosophy - Feature Grid */}
                <section className="space-y-16">
                    <div className="text-left space-y-4 max-w-2xl">
                        <h2 className={`text-4xl lg:text-5xl font-black ${contrast ? 'text-[#FDE047]' : 'text-slate-900'}`}>Universal Architecture.</h2>
                        <p className={`text-xl font-bold ${contrast ? 'text-[#FDE047]/60' : 'text-slate-400'}`}>Engineering that removes barriers rather than creating them.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Eye, title: "Visual Clarity", desc: "High contrast modes and scalable fonts as a core architectural standard." },
                            { icon: MousePointer2, title: "Tactile Navigation", desc: "Full keyboard accessibility and logical tab orders across all dashboards." },
                            { icon: Zap, title: "Simplified Logic", desc: "Reducing cognitive load through consistent patterns and direct feedback." },
                            { icon: Shield, title: "Inclusive Trust", desc: "Data protection that respects user agency and diverse privacy needs." }
                        ].map((f, i) => (
                            <div key={i} className={`p-10 border transition-all ${contrast ? 'bg-black border-[#FDE047]/20 text-[#FDE047] hover:border-[#FDE047]' : 'bg-slate-50 border-slate-100 text-slate-900 hover:shadow-xl hover:-translate-y-1'}`}>
                                <div className={`w-14 h-14 mb-8 flex items-center justify-center rounded-xl ${contrast ? 'bg-[#FDE047] text-black' : 'bg-blue-600 text-white'}`}>
                                    <f.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter italic">{f.title}</h3>
                                <p className={`text-sm font-bold leading-relaxed ${contrast ? 'text-[#FDE047]/60' : 'text-slate-500'}`}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Inclusive Community Testimonial */}
                <div className={`p-10 lg:p-20 rounded-[40px] text-center space-y-12 transition-all ${contrast ? 'bg-[#FDE047] text-black' : 'bg-blue-700 text-white shadow-2xl shadow-blue-200'}`}>
                    <div className="flex justify-center">
                        <div className={`px-5 py-1.5 rounded-full border-2 text-[10px] font-black uppercase tracking-widest ${contrast ? 'bg-black text-white border-black' : 'bg-white/10 border-white/20'}`}>User_Impact</div>
                    </div>
                    <blockquote className="text-3xl lg:text-5xl font-black max-w-4xl mx-auto italic leading-[1.1] tracking-tighter">
                        "Finally, a SaaS platform where I don't have to fight the interface to get my work done. It just works, for everyone."
                    </blockquote>
                    <div className="flex flex-col items-center gap-4">
                        <div className={`w-16 h-1 w-1 bg-current opacity-30`} />
                        <span className="text-xs font-black uppercase tracking-[0.4em] italic opacity-60">Alex_Rivers . Lead_Inclusion_Engineer</span>
                    </div>
                </div>

                {/* Simple High Contrast Footer */}
                <footer className={`pt-24 pb-12 border-t flex flex-col items-center gap-12 transition-all ${contrast ? 'border-[#FDE047]/20' : 'border-slate-100'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full">
                        <div className="space-y-8">
                            <span className="font-black text-2xl tracking-tighter uppercase italic">ViCode.</span>
                            <p className="text-sm font-bold opacity-60 leading-relaxed uppercase tracking-widest">
                                The universal software engineering hub. Designed for human diversity and planetary scale.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h5 className="text-[10px] font-black uppercase tracking-widest opacity-40">Engineering</h5>
                                <div className="flex flex-col gap-4 text-sm font-bold opacity-60">
                                    <a href="#" className="hover:underline">A11y_Core</a>
                                    <a href="#" className="hover:underline">Edge_Nodes</a>
                                    <a href="#" className="hover:underline">Scale_Part</a>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <h5 className="text-[10px] font-black uppercase tracking-widest opacity-40">Company</h5>
                                <div className="flex flex-col gap-4 text-sm font-bold opacity-60">
                                    <a href="#" className="hover:underline">Diversity</a>
                                    <a href="#" className="hover:underline">Impact</a>
                                    <a href="#" className="hover:underline">Legal_All</a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h5 className="text-[10px] font-black uppercase tracking-widest opacity-40">Accessibility_Status</h5>
                            <div className={`p-6 border rounded-2xl flex items-center justify-between ${contrast ? 'border-[#FDE047] bg-[#FDE047]/10' : 'bg-slate-50 border-slate-200'}`}>
                                <span className="text-xs font-black uppercase italic tracking-widest">Active_Scan</span>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-xs font-black">100%_PASS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6 pt-12 border-t w-full border-current opacity-20">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">© 2026 ViCode Universal Infrastructure Project.</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};
