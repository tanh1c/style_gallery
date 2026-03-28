import { cn } from "@/lib/utils";
import {
ArrowUpRight,
BarChart3,
ChevronRight,
Database,
FileCode,
Filter,
Globe,
Layers,
LayoutDashboard,
Minimize2,
MousePointer2,
Search,
Server
} from "lucide-react";
import React,{ useState } from "react";

export const DrillDownAnalyticsDemo: React.FC = () => {
    const [zoomLevel, setZoomLevel] = useState<"macro" | "cluster" | "node">("macro");

    return (
        <div className="flex-1 bg-[#0a0f1d] text-slate-300 font-sans selection:bg-blue-600 selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* --- HIERARCHICAL BREADCRUMB NAV --- */}
            <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-[#0a0f1d]/90 backdrop-blur-2xl border-b border-white/5">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 pr-4 border-r border-white/10">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                            <BarChart3 className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-white tracking-tight uppercase text-sm">ViCode_Insight</span>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest overflow-x-auto no-scrollbar scroll-smooth">
                        <button
                            onClick={() => setZoomLevel("macro")}
                            className={cn("hover:text-white transition-colors flex items-center gap-2", zoomLevel === "macro" ? "text-blue-400" : "text-slate-500")}
                        >
                            Global_Cloud
                        </button>
                        <ChevronRight className="w-3 h-3 text-slate-700 shrink-0" />
                        <button
                            onClick={() => setZoomLevel("cluster")}
                            className={cn("hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap", zoomLevel === "cluster" ? "text-blue-400" : "text-slate-500")}
                        >
                            <Server className="w-3 h-3" /> US_EAST_CLUSTER_7
                        </button>
                        <ChevronRight className="w-3 h-3 text-slate-700 shrink-0" />
                        <button
                            onClick={() => setZoomLevel("node")}
                            className={cn("hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap", zoomLevel === "node" ? "text-blue-400" : "text-slate-500")}
                        >
                            <FileCode className="w-3 h-3" /> node_alpha_921.js
                        </button>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                        <input
                            placeholder="Locate node..."
                            className="h-9 w-40 bg-white/5 border border-white/10 rounded-full pl-9 pr-4 text-[10px] focus:w-60 transition-all focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <button className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <Filter className="w-4 h-4" />
                    </button>
                </div>
            </nav>

            {/* --- DRILL-DOWN HERO: INTERACTIVE ZOOM (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-4 px-10 overflow-hidden shrink-0">
                {/* Visual Depth Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(30,58,138,0.1)_0%,_transparent_50%)]" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-12 bg-blue-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Layered_Intelligence</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-white uppercase italic">
                            Macro_View.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Micro_Details.</span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-xl">
                            Navigate from thousand-foot architectural overviews to individual line-of-code performance in seconds. Drill down into every nuance of your SaaS ecosystem.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="h-14 px-10 bg-blue-600 text-white font-bold uppercase tracking-[0.1em] rounded-xl hover:bg-blue-500 transition-all flex items-center gap-3 group shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)]">
                                Start_Drilling <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                            <button className="h-14 px-8 border border-white/10 text-white font-bold uppercase tracking-[0.1em] rounded-xl hover:bg-white/5 transition-colors">
                                View_Topology
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
                            {[
                                { l: "Total_Clusters", v: "148" },
                                { l: "Sub_Nodes", v: "4.2k" },
                                { l: "Trace_Depth", v: "∞" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{stat.l}</div>
                                    <div className="text-xl font-black text-white">{stat.v}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group perspective-1000">
                        {/* DYNAMIC ZOOM VISUALIZATION */}
                        <div className="relative w-full aspect-square max-w-[500px] border border-white/5 bg-[#0f172a]/40 p-8 rounded-[40px] shadow-2xl backdrop-blur-xl transition-all duration-700 transform group-hover:translate-z-20">
                            {/* MACRO VIEW (Hidden in zoom node) */}
                            <div className={cn(
                                "absolute inset-8 transition-all duration-1000 ease-in-out border border-blue-500/20 rounded-[32px] flex items-center justify-center p-8",
                                zoomLevel === "macro" ? "opacity-100 scale-100" : "opacity-0 scale-150"
                            )}>
                                <div className="relative">
                                    <div className="w-48 h-48 rounded-full border border-blue-500/30 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                                        <Globe className="w-24 h-24 text-blue-500/40" />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-2xl pulse cursor-pointer" onClick={() => setZoomLevel("cluster")}>
                                            <Layers className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CLUSTER VIEW */}
                            <div className={cn(
                                "absolute inset-8 transition-all duration-1000 ease-in-out border border-white/10 rounded-[32px] overflow-hidden",
                                zoomLevel === "cluster" ? "opacity-100 scale-100" : zoomLevel === "macro" ? "opacity-0 scale-50" : "opacity-0 scale-150"
                            )}>
                                <div className="p-6 h-full flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-blue-400">US_EAST_7 Topo</span>
                                        <Minimize2 className="w-4 h-4 cursor-pointer" onClick={() => setZoomLevel("macro")} />
                                    </div>
                                    <div className="flex-1 grid grid-cols-3 gap-3">
                                        {[...Array(9)].map((_, i) => (
                                            <div key={i} className="aspect-square bg-white/5 border border-white/5 rounded-xl hover:border-blue-500/50 hover:bg-blue-600/10 transition-all cursor-pointer flex flex-col items-center justify-center gap-1 group/item" onClick={() => setZoomLevel("node")}>
                                                <Server className={cn("w-5 h-5", i === 4 ? "text-blue-500" : "text-slate-600 group-hover/item:text-blue-400")} />
                                                <span className="text-[8px] font-bold opacity-30">N-{i + 100}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* NODE VIEW */}
                            <div className={cn(
                                "absolute inset-8 transition-all duration-1000 ease-in-out border-2 border-blue-500/30 bg-[#0a0f1d] rounded-[32px] overflow-hidden shadow-inner",
                                zoomLevel === "node" ? "opacity-100 scale-100" : "opacity-0 scale-50"
                            )}>
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                                        <div className="flex items-center gap-3">
                                            <FileCode className="w-5 h-5 text-blue-500" />
                                            <span className="text-[11px] font-bold font-mono text-white">auth_service.ts</span>
                                        </div>
                                        <Minimize2 className="w-4 h-4 cursor-pointer" onClick={() => setZoomLevel("cluster")} />
                                    </div>
                                    <div className="flex-1 space-y-3 font-mono text-[9px]">
                                        <div className="flex items-center gap-3 text-slate-600"><span>1</span> <span className="text-blue-400">export function</span> authenticate() {"{"}</div>
                                        <div className="flex items-center gap-3 text-slate-600"><span>2</span> <span className="pl-4">const token = req.header...</span></div>
                                        <div className="flex items-center justify-between group/line bg-blue-600/10 border border-blue-500/20 p-2 rounded">
                                            <div className="flex items-center gap-3 text-slate-600"><span>3</span> <span className="pl-4 text-white">await db.query(user)...</span></div>
                                            <div className="flex items-center gap-2 text-blue-400"><LayoutDashboard className="w-3 h-3" /> 2.1ms</div>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-600"><span>4</span> <span className="pl-4">return true;</span></div>
                                        <div className="flex items-center gap-3 text-slate-600"><span>5</span> {"}"}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Layer HUD Overlay */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 p-3 bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl flex items-center gap-6 z-50">
                                <div className="flex items-center gap-2">
                                    <div className={cn("w-2 h-2 rounded-full", zoomLevel === "macro" ? "bg-blue-500 shadow-[0_0_10px_#3b82f6]" : "bg-slate-700")} />
                                    <span className={cn("text-[9px] font-bold", zoomLevel === "macro" ? "text-white" : "text-slate-500")}>Macro</span>
                                </div>
                                <div className="w-[1px] h-3 bg-white/10" />
                                <div className="flex items-center gap-2">
                                    <div className={cn("w-2 h-2 rounded-full", zoomLevel === "cluster" ? "bg-blue-500 shadow-[0_0_10px_#3b82f6]" : "bg-slate-700")} />
                                    <span className={cn("text-[9px] font-bold", zoomLevel === "cluster" ? "text-white" : "text-slate-500")}>Cluster</span>
                                </div>
                                <div className="w-[1px] h-3 bg-white/10" />
                                <div className="flex items-center gap-2">
                                    <div className={cn("w-2 h-2 rounded-full", zoomLevel === "node" ? "bg-blue-500 shadow-[0_0_10px_#3b82f6]" : "bg-slate-700")} />
                                    <span className={cn("text-[9px] font-bold", zoomLevel === "node" ? "text-white" : "text-slate-500")}>Node</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ANALYTIC LAYERS: PROGRESSIVE DISCLOSURE --- */}
            <section className="py-24 px-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.5)] shrink-0 rounded-t-[60px] relative z-20">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-100 pb-16">
                        {[
                            { t: "Deep_Trace", d: "Record every sub-operation hierarchy with 100% fidelity. No sampling, just pure depth.", i: LayoutDashboard, c: "text-blue-600" },
                            { t: "Node_Inspector", d: "Click into any server node to view local variables, heat signatures, and stack traces.", i: Server, c: "text-slate-900" },
                            { t: "Timeline_Drill", d: "Scrub through time layers. See exactly how a request propagated through the mesh.", i: Database, c: "text-blue-600" }
                        ].map((item, i) => (
                            <div key={i} className="group space-y-6">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center group-hover:-translate-y-2 transition-transform shadow-lg", i === 1 ? "bg-slate-900" : "bg-blue-50")}>
                                    <item.i className={cn("w-6 h-6", item.c)} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{item.t}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    {item.d}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-[1.1]">
                                The_Geometry_of_Hierarchy.
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Modern systems are too complex for flat dashboards. ViCode Insight builds a multi-dimensional geometry of your data, allowing you to "enter" specific clusters to isolate performance bottlenecks.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Automated Breadcrumb Generation",
                                    "Hierarchical Metadata Indexing",
                                    "Predictive Drill-Down Paths",
                                    "Contextual Layer Persistence"
                                ].map((list, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-900 font-bold uppercase tracking-widest text-[11px]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                        {list}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 p-2 bg-slate-50 rounded-[40px] border border-slate-200">
                            <div className="bg-white p-6 rounded-[32px] shadow-sm space-y-4">
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inspection_Deck</span>
                                </div>
                                <div className="space-y-3">
                                    {[1, 0.7, 0.4].map((op, i) => (
                                        <div key={i} className="h-6 w-full rounded bg-slate-100 animate-pulse" style={{ opacity: op }} />
                                    ))}
                                    <div className="h-24 w-full rounded-2xl bg-blue-600/5 border-2 border-dashed border-blue-500/20 flex items-center justify-center">
                                        <MousePointer2 className="w-8 h-8 text-blue-500 animate-bounce" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DEPTH FOOTER --- */}
            <footer className="py-20 px-10 bg-[#0a0f1d] border-t border-white/5 shrink-0">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400">
                            <Layers className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">Insight_Depth</h4>
                            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Built_for_Complexity_©2026</p>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        {["Core", "Nodes", "Traces", "Status"].map((f, i) => (
                            <span key={i} className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">{f}</span>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};
