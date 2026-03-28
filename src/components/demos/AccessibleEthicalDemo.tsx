import { Accessibility,ArrowRight,CheckCircle2,Code,Eye,Heart,Leaf,Lock,Shield,Users,Zap } from "lucide-react";
import React from "react";

export const AccessibleEthicalDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#F9FAFB] overflow-y-auto text-[#0F172A] font-sans selection:bg-[#4F46E5]/20 pb-32">
            <div className="max-w-[1240px] mx-auto px-8 lg:px-12 py-10 space-y-12">

                {/* Transparent Header */}
                <header className="h-20 flex items-center justify-between px-8 bg-white/80 backdrop-blur-xl border border-black/5 rounded-[24px] sticky top-6 z-50 shadow-[0_10px_40px_rgba(0,0,0,0.03)] ring-1 ring-black/5">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg">
                            <Code className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-xl tracking-tight">ViCode</span>
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#4F46E5]/60">Ethical Data Grp.</span>
                        </div>
                    </div>
                    <nav className="hidden lg:flex items-center gap-10 font-bold text-sm text-[#0F172A]/50">
                        {["Our Pledge", "Transparency", "Global Impact"].map(item => (
                            <button key={item} className="hover:text-[#4F46E5] transition-colors focus:ring-2 focus:ring-[#4F46E5] rounded-lg px-2 outline-none">
                                {item}
                            </button>
                        ))}
                    </nav>
                    <button className="bg-[#4F46E5] text-white px-8 py-3 font-bold text-sm rounded-[14px] shadow-[0_20px_40px_rgba(79,70,229,0.2)] hover:bg-[#3730A3] focus:ring-4 focus:ring-[#4F46E5]/30 transition-all">
                        Join the Movement
                    </button>
                </header>

                {/* Human-Centric Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pt-0">
                    <div className="space-y-12 text-left">
                        <div className="inline-flex items-center gap-2.5 bg-[#4F46E5]/5 border border-[#4F46E5]/20 rounded-full px-5 py-2 ring-1 ring-[#4F46E5]/10 shadow-sm transition-all hover:scale-105">
                            <Accessibility className="w-4 h-4 text-[#4F46E5]" aria-hidden="true" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[#4F46E5]">WCAG 2.1 Compliant Design</span>
                        </div>
                        <h1 className="text-6xl lg:text-7xl font-sans font-black leading-[1.1] tracking-tight text-[#0F172A] drop-shadow-sm">
                            Designing for <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#818CF8]">every human.</span>
                        </h1>
                        <p className="text-2xl text-[#0F172A]/60 leading-relaxed max-w-lg font-medium tracking-tight">
                            ViCode is more than a platform. It's an ethical infrastructure committed to accessibility, data sovereignty, and radical transparency.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 pt-6">
                            <button className="h-16 px-10 bg-[#0F172A] text-white rounded-[18px] text-[15px] font-bold shadow-[0_20px_50px_rgba(15,23,42,0.15)] hover:bg-black transition-all flex items-center justify-center gap-4 group focus:ring-4 focus:ring-black/20 focus:outline-none">
                                Start Building Ethically
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                            </button>
                            <button className="h-16 px-10 border-2 border-dashed border-[#0F172A]/10 text-[#0F172A]/40 hover:text-[#0F172A] hover:bg-white rounded-[18px] text-[15px] font-bold transition-all hover:border-[#0F172A]/30">
                                Read Inclusion Manifesto
                            </button>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-10 bg-gradient-to-tr from-[#4F46E5]/10 to-transparent blur-[100px] rounded-full -z-10 animate-pulse" />
                        <div className="w-full aspect-[4/5] bg-white border border-black/5 rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.08)] p-6 relative overflow-hidden group hover:shadow-[0_60px_120px_rgba(0,0,0,0.1)] transition-all duration-700 ring-1 ring-black/5">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none z-10" />
                            <img
                                src="/vicode_inclusive_team.png"
                                alt="Inclusive ViCode Team collaborating around a data screen"
                                className="w-full h-full object-cover object-center rounded-[32px] group-hover:scale-105 transition-transform duration-1000 transform-gpu"
                            />

                            {/* Inclusive Overlay */}
                            <div className="absolute bottom-10 left-10 right-10 z-20 space-y-4">
                                <div className="bg-white/90 backdrop-blur-xl p-6 border border-black/5 shadow-2xl rounded-3xl flex items-center justify-center text-center gap-4">
                                    <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                                    <span className="font-bold text-sm uppercase tracking-widest text-[#0F172A]/60">Radical Accessibility Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ethical Values Grid */}
                <section className="space-y-16">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
                        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#0F172A]/20">Values.Sovereignty</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: Shield, title: "Data Privacy", desc: "You own your data. End-to-end encryption by default.", accent: "border-[#4F46E5]" },
                            { icon: Leaf, title: "Net Zero Hub", desc: "Every deployment is carbon-neutralized globally.", accent: "border-green-500" },
                            { icon: Heart, title: "Mental UX", desc: "Design patterns optimized for cognitive well-being.", accent: "border-pink-500" },
                            { icon: Accessibility, title: "Total Access", desc: "Screen readers and high-contrast support native.", accent: "border-yellow-500" },
                            { icon: Users, title: "Global Mesh", desc: "Inclusive engineering for every region on Earth.", accent: "border-sky-500" },
                            { icon: Lock, title: "Secure Trust", desc: "Transparent protocols for shared ethical scaling.", accent: "border-slate-800" }
                        ].map((v, i) => (
                            <div key={i} className="bg-white p-12 rounded-[40px] border border-black/5 shadow-[0_20px_40px_rgba(0,0,0,0.02)] space-y-10 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all cursor-default group focus-within:ring-4 focus-within:ring-[#4F46E5]/20">
                                <div className={`w-16 h-16 bg-[#F8FAFC] border-b-4 ${v.accent} flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform shadow-sm`}>
                                    <v.icon className="w-8 h-8 text-[#0F172A]/30 group-hover:text-[#4F46E5] transition-colors" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black tracking-tight text-[#0F172A]">{v.title}</h3>
                                    <p className="text-base text-[#0F172A]/50 leading-relaxed font-medium uppercase tracking-tight">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ethical Transparency Section */}
                <section className="bg-white rounded-[56px] border border-black/5 p-12 lg:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.04)] relative overflow-hidden text-center space-y-16">
                    <div className="space-y-10 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] text-[#4F46E5]">
                            <CheckCircle2 className="w-5 h-5" />
                            Open Source Pledge
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-sans font-black tracking-tight leading-none italic uppercase text-[#0F172A]">Radical<br />Transparency.</h2>
                        <p className="text-xl text-[#0F172A]/50 font-medium leading-[1.4] max-w-2xl mx-auto uppercase tracking-tighter">
                            Discover the platform where ethics meet high-performance deployment. No hidden tracking. No dark patterns. Just engineering for the future.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 group">
                        {[
                            { l: "Uptime", v: "99.99%", i: Zap },
                            { l: "Security", v: "AES-256", i: Shield },
                            { l: "Accessibility", v: "AAA", i: Eye },
                            { l: "Offset", v: "10x", i: Leaf }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 bg-[#F9FAFB] border border-black/5 rounded-[32px] hover:bg-white hover:shadow-xl transition-all cursor-default group/stat">
                                <stat.i className="w-8 h-8 text-[#0F172A]/10 group-hover/stat:text-[#4F46E5] transition-colors mx-auto mb-6" />
                                <div className="text-4xl font-black tracking-tighter text-[#0F172A]">{stat.v}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A]/20 mt-1">{stat.l}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Action Footer */}
                <footer className="pt-32 pb-16 border-t font-sans border-black/5 space-y-24">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-16">
                        <div className="col-span-2 space-y-10 text-left">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#0F172A] text-white flex items-center justify-center rounded-2xl shadow-xl">
                                    <span className="font-extrabold text-2xl">V</span>
                                </div>
                                <span className="font-black text-3xl tracking-tighter uppercase italic">ViCode Ethical.</span>
                            </div>
                            <p className="text-[13px] text-[#0F172A]/40 leading-relaxed max-w-sm font-bold uppercase tracking-[0.1em] italic">
                                Building a software world that respects your time, your data, and your cognitive health.
                                An infrastructure for humanity.
                            </p>
                        </div>
                        {[
                            { title: "Sovereignty", links: ["Privacy", "Offset", "Access"] },
                            { title: "Manifesto", links: ["Ethics", "Manifesto", "OpenSource"] },
                            { title: "Humanity", links: ["Forum", "News", "Charity"] },
                            { title: "Legal", links: ["Ethics", "Privacy", "Gov"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-8 text-left">
                                <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0F172A]">
                                    {group.title}
                                </h5>
                                <ul className="space-y-5">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-[12px] text-[#0F172A]/30 hover:text-[#4F46E5] transition-colors uppercase font-black tracking-widest focus:ring-2 focus:ring-[#4F46E5] outline-none rounded"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-20 border-t border-black/5 text-[11px] font-black uppercase tracking-[0.3em] text-[#0F172A]/20">
                        <span className="px-8 py-4 bg-white border border-black/5 rounded-full shadow-sm">© 2026 ViCode Ethical Infrastructure Grp. Global Access Unit.</span>
                        <div className="flex gap-12 font-bold opacity-50">
                            <span>Inclusive UX Cert. AAA</span>
                            <span>Powered by Virtue Engine</span>
                        </div>
                    </div>
                </footer>

                {/* Global Action Button - Accessible Design */}
                <div className="fixed bottom-12 right-12 z-50">
                    <button
                        className="h-20 w-20 bg-[#0F172A] text-white border-2 border-white/5 rounded-[28px] flex items-center justify-center shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:scale-110 active:scale-95 transition-all focus:ring-4 focus:ring-[#4F46E5]/40 outline-none group overflow-hidden"
                        aria-label="Contact Accessibility Support"
                    >
                        <div className="absolute inset-0 bg-[#4F46E5]/0 group-hover:bg-[#4F46E5]/10 transition-colors" />
                        <Heart className="w-10 h-10 text-white fill-current group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};
