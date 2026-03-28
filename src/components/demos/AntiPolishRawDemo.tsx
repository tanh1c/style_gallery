import { cn } from "@/lib/utils";
import {
Activity,
ArrowRight,
Code,
Cpu,
HardDrive,
Hash,
Lock,
Share2,
Terminal
} from "lucide-react";
import React from "react";

export const AntiPolishRawDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#ffffff] text-[#000000] font-mono selection:bg-[#000000] selection:text-white relative h-full flex flex-col group overflow-hidden">

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
                {/* --- RAWS STYLES --- */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;700&display=swap');
                    
                    .font-mono-raw { font-family: 'Space Mono', monospace; }
                    .font-sans-raw { font-family: 'Inter', sans-serif; }
                    
                    .grid-bg {
                        background-size: 40px 40px;
                        background-image: linear-gradient(to right, #f0f0f0 1px, transparent 1px),
                                          linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
                    }
                    
                    .raw-border {
                        border: 1px solid #000000;
                    }
                    
                    .raw-button {
                        background: #000000;
                        color: #ffffff;
                        padding: 0.5rem 1rem;
                        border: 1px solid #000000;
                        transition: none;
                    }
                    .raw-button:hover {
                        background: #ffffff;
                        color: #000000;
                    }
                    
                    .raw-card {
                        border: 1px solid #000000;
                        transition: none;
                    }
                    .raw-card:hover {
                        background: #f9f9f9;
                    }
                    
                    /* Instant transitions for Anti-Polish */
                    * {
                        transition: none !important;
                    }
                `}} />

                <div className="grid-bg absolute inset-0 z-0 pointer-events-none" />

                {/* --- NAVIGATION: SYSTEM UI --- */}
                <nav className="flex items-center justify-between px-6 py-4 relative z-10 border-b border-black bg-white">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-black flex items-center justify-center text-white">
                            <Terminal className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold tracking-tight uppercase">ViCode/Raw-v0.4.2</span>
                    </div>
                    <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest">
                        <a href="#" className="hover:underline">Docs</a>
                        <a href="#" className="hover:underline">Specs</a>
                        <a href="#" className="hover:underline">Logs</a>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            SYSTEM_STABLE
                        </div>
                    </div>
                </nav>

                {/* --- HERO: THE RAW TEXT (FIT 1 SCREEN) --- */}
                <section className="h-[calc(100vh-65px)] min-h-[600px] flex flex-col items-center justify-center px-6 relative z-10 text-center space-y-12">
                    <div className="space-y-6 max-w-4xl">
                        <div className="inline-block border border-black px-3 py-1 mb-2 text-[10px] font-bold uppercase bg-gray-50 tracking-[0.2em]">
                            BUILD_09.2026 // ALPHA-STABLE
                        </div>
                        <h1 className="text-6xl lg:text-[7rem] font-bold leading-[1] tracking-tight text-black">
                            Infrastructure <br />Without The<br /> Bullsh*t.
                        </h1>
                        <p className="max-w-xl mx-auto text-sm text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                            A raw, performant interface for managing massive decentralized compute environments. No shadows. No rounded corners. Just code.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                        <button className="raw-button px-10 py-5 text-sm font-bold uppercase tracking-widest flex items-center gap-3">
                            Init_Environment <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-10 py-5 border border-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white">
                            Read_Whitepaper
                        </button>
                    </div>

                    {/* TERMINAL STATUS DEcorative */}
                    <div className="absolute left-6 bottom-6 text-[10px] text-gray-400 font-bold">
                        [INFO] CONNECTION SECURED via SSL_v3.4<br />
                        [INFO] NODES_ONLINE: 14,293<br />
                        [INFO] LATENCY: 2.4ms
                    </div>
                </section>

                {/* --- FEATURES: THE DATA GRID --- */}
                <section className="py-24 px-6 relative z-10 space-y-16 bg-white border-y border-black">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold uppercase leading-none">Exposed_Logic</h2>
                            <div className="h-1 w-20 bg-black" />
                        </div>
                        <p className="text-xs font-bold max-w-sm uppercase leading-relaxed text-gray-400">
                            Every pixel is intentional. If you can't see the grid, you don't trust the architecture.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-black">
                        {[
                            { t: "CORE_COMPUTE", d: "Pure silicon performance. Unfiltered access to instruction sets.", i: Cpu },
                            { t: "BARE_METAL", d: "Zero abstraction layers. Direct hardware communication protocols.", i: HardDrive },
                            { t: "HASH_VERIFY", d: "Mathematical certainty for every deployment and state change.", i: Hash },
                            { t: "LOW_LEVEL", d: "Optimized for latency-critical distributed workloads.", i: Activity },
                            { t: "OPEN_SPECS", d: "Fully transparent documentation. no hidden proprietary logic.", i: Code },
                            { t: "RAW_INGEST", d: "High-throughput stream processing with zero overhead.", i: Terminal },
                            { t: "AUTH_PROTOCOL", d: "Hardware-level encryption for mission-critical operations.", i: Lock },
                            { t: "P2P_SYNAPSE", d: "Direct node-to-node relay system for maximum resiliency.", i: Share2 }
                        ].map((item, i) => (
                            <div key={i} className="raw-card p-10 flex flex-col gap-10 border-r border-b border-black">
                                <item.i className="w-8 h-8" />
                                <div className="space-y-3">
                                    <h4 className="text-lg font-bold uppercase tracking-tighter">{item.t}</h4>
                                    <p className="text-xs leading-loose text-gray-500 font-bold uppercase tracking-tight">
                                        {item.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- TABLES: THE REAL DATA --- */}
                <section className="py-32 px-6 relative z-10 space-y-12">
                    <h3 className="text-3xl font-bold uppercase tracking-tighter">System_Benchmarking</h3>

                    <div className="border border-black overflow-x-auto bg-white">
                        <table className="w-full text-left text-xs">
                            <thead className="border-b border-black bg-gray-50">
                                <tr>
                                    <th className="p-4 border-r border-black font-bold uppercase tracking-widest">ID</th>
                                    <th className="p-4 border-r border-black font-bold uppercase tracking-widest">Cluster</th>
                                    <th className="p-4 border-r border-black font-bold uppercase tracking-widest">Load</th>
                                    <th className="p-4 border-r border-black font-bold uppercase tracking-widest">Throughput</th>
                                    <th className="p-4 font-bold uppercase tracking-widest">Status</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold">
                                {[
                                    { id: "01", c: "US-EAST-1", l: "84%", t: "1.2GB/s", s: "OK" },
                                    { id: "02", c: "EU-CENT-1", l: "12%", t: "4.8GB/s", s: "OK" },
                                    { id: "03", c: "AP-SOUTH-1", l: "99%", t: "0.4GB/s", s: "WARNING" },
                                    { id: "04", c: "SA-EAST-1", l: "45%", t: "2.1GB/s", s: "OK" }
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-black hover:bg-black hover:text-white group">
                                        <td className="p-4 border-r border-black">#{row.id}</td>
                                        <td className="p-4 border-r border-black">{row.c}</td>
                                        <td className="p-4 border-r border-black">{row.l}</td>
                                        <td className="p-4 border-r border-black">{row.t}</td>
                                        <td className={cn(
                                            "p-4",
                                            row.s === "WARNING" ? "text-red-500 group-hover:text-red-300" : "text-green-500 group-hover:text-green-300"
                                        )}>{row.s}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* --- PRICING: THE STARK TIERS --- */}
                <section className="py-40 px-6 relative z-10 bg-black text-white flex flex-col items-center gap-24">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h3 className="text-5xl font-bold uppercase tracking-tighter italic">Tier_Access</h3>
                        <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] text-gray-500">
                            COMMUNITY // ENTERPRISE // GOV
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl w-full border border-gray-800">
                        {[
                            { l: "Community", p: "$0", f: ["Public Repos", "10 Compute / Mo", "Support Channel"] },
                            { l: "High-Freq", p: "$624", f: ["Private Repos", "Infinite Compute", "Direct SSH", "L1 Support"], primary: true },
                            { l: "Sovereign", p: "Custom", f: ["On-Prem Install", "Custom Chips", "Physical Vault", "24/7 SRE"] }
                        ].map((item, i) => (
                            <div key={i} className={cn(
                                "p-12 border-gray-800 flex flex-col gap-10 group hover:bg-white hover:text-black",
                                i !== 0 ? "md:border-l" : "",
                                item.primary ? "bg-gray-900" : ""
                            )}>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400">{item.l}</div>
                                    <div className="text-6xl font-bold tracking-tighter">{item.p}</div>
                                </div>
                                <div className="space-y-4 py-12 border-y border-gray-800 group-hover:border-black text-[10px] font-bold uppercase tracking-widest">
                                    {item.f.map(f => (
                                        <div key={f} className="flex items-center gap-4">
                                            <div className="w-1 h-1 bg-white group-hover:bg-black" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <button className={cn(
                                    "w-full py-5 text-xs font-bold uppercase tracking-[0.2em] border",
                                    item.primary ? "bg-white text-black border-white" : "border-gray-800 group-hover:border-black"
                                )}>
                                    Activate_ID
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FOOTER: THE END LOGS --- */}
                <footer className="py-24 px-6 relative z-10 border-t border-black bg-white flex flex-col md:flex-row justify-between items-start gap-20">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-black flex items-center justify-center text-white">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <span className="text-xl font-bold tracking-tight uppercase">ViCode | Raw</span>
                        </div>
                        <p className="max-w-xs text-[10px] font-bold uppercase leading-loose text-gray-400">
                            A non-proprietary documentation standard for the high-end decentralized future of cloud computing.
                        </p>
                        <div className="flex gap-4 text-[10px] font-bold text-gray-400 uppercase">
                            <span>&copy; 2026</span>
                            <span className="hover:text-black cursor-pointer underline">Source</span>
                            <span className="hover:text-black cursor-pointer underline">Twitter</span>
                            <span className="hover:text-black cursor-pointer underline">RSS</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
                        {[
                            { t: "NAVIGATION", l: ["Specs", "Logs", "Whitepaper", "Nodes"] },
                            { t: "COMPLIANCE", l: ["Privacy", "Security", "Uptime", "License"] }
                        ].map((group, i) => (
                            <div key={i} className="space-y-8">
                                <h5 className="font-bold uppercase tracking-widest text-[10px] text-gray-300">{group.t}</h5>
                                <ul className="space-y-4 font-bold text-xs uppercase underline underline-offset-4">
                                    {group.l.map(link => (
                                        <li key={link}><a href="#" className="hover:bg-black hover:text-white">{link}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </footer>
            </div>
        </div>
    );
};
