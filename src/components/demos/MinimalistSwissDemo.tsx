import { Button } from "@/components/ui/button";
import { ArrowRight,Code,Globe,Layers,Shield,Terminal,Zap } from "lucide-react";
import React from "react";

export const MinimalistSwissDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-white overflow-y-auto text-black font-sans selection:bg-black selection:text-white">
            {/* Strict Swiss Navigation */}
            <nav className="h-16 px-8 lg:px-16 flex items-center justify-between border-b border-black/5 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-black flex items-center justify-center">
                            <Code className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="font-bold tracking-tighter text-base">ViCode</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                        <a href="#" className="hover:text-black transition-colors">Products</a>
                        <a href="#" className="hover:text-black transition-colors">Developers</a>
                        <a href="#" className="hover:text-black transition-colors">Enterprise</a>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 hover:text-black transition-colors">Sign In</button>
                    <button className="bg-black text-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black/90 transition-all">Start Free</button>
                </div>
            </nav>

            <main className="max-w-[1440px] mx-auto">
                {/* Hero: Asymmetric Grid Layout (Swiss) */}
                <section className="px-8 lg:px-16 pt-2 pb-32 border-b border-black/5">
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-12 lg:col-span-8 space-y-12">
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-black" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] py-1 px-3 border border-black/10">v2.0 Released</span>
                            </div>
                            <h1 className="text-7xl lg:text-[120px] font-bold leading-[0.85] tracking-tighter">
                                Write better code,<br />faster than ever.
                            </h1>
                            <div className="max-w-xl space-y-8">
                                <p className="text-xl text-black/50 leading-relaxed font-normal">
                                    ViCode is the minimalist SaaS platform for modern engineering teams.
                                    Ship quality code with automated reviews and seamless deployments.
                                </p>
                                <div className="flex items-center gap-6 pt-4">
                                    <Button className="bg-black text-white hover:bg-black/90 rounded-none h-14 px-10 text-[10px] font-bold uppercase tracking-[0.2em] gap-3">
                                        Start Developing
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" className="border-black/20 hover:border-black text-black hover:bg-black/5 rounded-none h-14 px-10 text-[10px] font-bold uppercase tracking-[0.2em] transition-all">
                                        Documentation
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4 flex items-end">
                            <div className="w-full relative group cursor-pointer overflow-hidden bg-[#fafafa] border border-black/5 shadow-2xl">
                                <div className="aspect-[3/4] flex items-center justify-center p-10 mix-blend-multiply opacity-90 group-hover:opacity-100 transition-all duration-1000">
                                    <img
                                        src="/vicode-illustration.png"
                                        alt="ViCode Minimalist Illustration"
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000 filter grayscale contrast-125 brightness-105"
                                    />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-8 pt-32 bg-gradient-to-t from-white via-white/80 to-transparent">
                                    <div className="w-10 h-[1px] bg-black/20 mb-3" />
                                    <h3 className="text-xl font-black tracking-tighter mb-1">Infrastructure</h3>
                                    <p className="text-[11px] text-black/30 font-bold uppercase tracking-[0.3em]">Pure. Resilient.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Grid: Functional & Spacious */}
                <section className="px-8 lg:px-16 py-32 space-y-24">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                        <h2 className="text-4xl font-bold tracking-tighter max-w-md">Engineering excellence in one platform.</h2>
                        <div className="w-24 h-[1px] bg-black/20 hidden lg:block" />
                        <p className="text-sm text-black/40 max-w-xs uppercase leading-relaxed font-bold tracking-widest">
                            Built for teams who value precision and speed.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-12">
                        {[
                            { icon: Zap, title: "Edge Performance", desc: "Deploy your snippets to the edge with zero latency globally." },
                            { icon: Shield, title: "Secure by Design", desc: "Automated security audits and encryption for every line of code." },
                            { icon: Globe, title: "Global Scale", desc: "One-click scaling to millions of users without infrastructure headache." },
                            { icon: Layers, title: "Shared Workspace", desc: "Collaborate in real-time with shared environments and terminal access." },
                            { icon: Terminal, title: "Custom Plugins", desc: "Extend ViCode with our powerful API and local developer tools." },
                            { icon: Code, title: "Polyglot Support", desc: "First-class support for Rust, Go, TypeScript, and 20+ other languages." }
                        ].map((f, i) => (
                            <div key={i} className="space-y-6 group">
                                <div className="w-12 h-12 bg-[#fafafa] flex items-center justify-center border border-black/5 transition-all group-hover:border-black">
                                    <f.icon className="w-5 h-5 text-black/40 group-hover:text-black transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold tracking-tight">{f.title}</h4>
                                <p className="text-sm text-black/50 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dynamic Code Preview Section */}
                <section className="px-8 lg:px-16 py-32">
                    <div className="bg-black text-white p-12 lg:p-24 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
                            <div className="space-y-12">
                                <h3 className="text-5xl lg:text-7xl font-bold tracking-tighter">Your code, redefined.</h3>
                                <div className="space-y-6 text-white/40 text-lg leading-relaxed">
                                    <p>Experience a workflow where the tools stay out of your way. ViCode provides the structure you need without the noise you don't.</p>
                                    <p>From linting to deployment, every step is optimized for the developer experience. No fluff. Just code.</p>
                                </div>
                                <div className="pt-8 flex flex-col sm:flex-row gap-8 lg:gap-16">
                                    <div className="space-y-2">
                                        <div className="text-3xl font-bold">200ms</div>
                                        <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Cold Start</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-3xl font-bold">100%</div>
                                        <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Uptime SLA</div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-3xl font-bold">0.1s</div>
                                        <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Global Sync</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8 font-mono text-sm space-y-4 shadow-2xl overflow-hidden self-center">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white/40 tracking-tighter">// Initializing ViCode project...</p>
                                    <p className="text-white">vicode <span className="text-yellow-400">init</span> my-new-app</p>
                                    <p className="text-blue-400">Checking environment... OK</p>
                                    <p className="text-white/40 tracking-tighter">// Building optimized deployment</p>
                                    <p className="text-white">vicode <span className="text-green-400">deploy</span> --env production</p>
                                    <p className="text-green-400">✓ Deployment successful in 0.8s</p>
                                    <p className="text-white/80">URL: <span className="underline decoration-white/20 underline-offset-4 cursor-pointer hover:text-white transition-colors text-blue-300">https://my-new-app.vicode.dev</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer: Multi-column Strict Grid */}
                <footer className="px-8 lg:px-16 py-24 border-t border-black/5 bg-[#fafafa]">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
                        <div className="col-span-2 space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-black flex items-center justify-center text-white font-black text-[10px]">V</div>
                                <span className="font-bold tracking-tighter">ViCode SaaS</span>
                            </div>
                            <p className="text-xs text-black/40 leading-relaxed max-w-xs uppercase tracking-tight">
                                The essential engineering platform for modern developer teams. Precision built in Switzerland.
                            </p>
                        </div>
                        {[
                            { title: "Platform", links: ["Features", "Pricing", "Edge", "Security"] },
                            { title: "Developers", links: ["Docs", "API", "SDKs", "Status"] },
                            { title: "Company", links: ["About", "Careers", "News", "Legal"] },
                            { title: "Social", links: ["Twitter", "GitHub", "Discord", "YouTube"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-6">
                                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-black">
                                    {group.title}
                                </h5>
                                <ul className="space-y-4">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-xs text-black/40 hover:text-black transition-colors uppercase tracking-tight font-medium">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.3em]">© 2026 ViCode Engineering Inc.</span>
                        <div className="flex gap-8 text-[10px] font-bold text-black/20 uppercase tracking-[0.3em]">
                            <a href="#" className="hover:text-black transition-colors">Privacy</a>
                            <a href="#" className="hover:text-black transition-colors">Terms</a>
                            <a href="#" className="hover:text-black transition-colors">Security</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};
