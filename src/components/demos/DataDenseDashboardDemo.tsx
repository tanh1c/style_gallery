import { cn } from "@/lib/utils";
import {
Activity,
ArrowUpRight,
Bell,
Clock,
Cloud,
Cpu,
Database,
Download,
Filter,
Globe,
LayoutDashboard,
Maximize2,
RefreshCw,
Search,
Settings,
ShieldCheck,
Terminal,
TrendingUp,
User,
Zap
} from "lucide-react";
import React,{ useEffect,useState } from "react";

export const DataDenseDashboardDemo: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [systemLoad, setSystemLoad] = useState(42);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
            setSystemLoad(prev => Math.min(100, Math.max(0, prev + (Math.random() * 6 - 3))));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex-1 bg-[#0B0F19] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* --- DASHBOARD WRAPPER --- */}
            <div className="flex-1 flex overflow-hidden">

                {/* SIDEBAR: TECHNICAL CONTROL */}
                <aside className="w-20 lg:w-64 border-r border-slate-800/50 bg-[#0B0F19] flex flex-col shrink-0 transition-all group">
                    <div className="p-8 border-b border-slate-800/50 flex items-center gap-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
                            <Cpu className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tighter text-white hidden lg:block font-mono">ViCode_v8</span>
                    </div>

                    <div className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
                        <SidebarLink active icon={<LayoutDashboard className="w-5 h-5" />} label="Master_Deck" />
                        <SidebarLink icon={<Globe className="w-5 h-5" />} label="Node_Registry" />
                        <SidebarLink icon={<Activity className="w-5 h-5" />} label="Live_Telemetry" />
                        <SidebarLink icon={<Database className="w-5 h-5" />} label="State_History" />
                        <SidebarLink icon={<ShieldCheck className="w-5 h-5" />} label="Governance" />
                        <div className="h-[1px] bg-slate-800/50 my-6 mx-4 hidden lg:block" />
                        <SidebarLink icon={<Cloud className="w-5 h-5" />} label="Mesh_Settings" />
                    </div>

                    <div className="p-8 border-t border-slate-800/50 space-y-6">
                        <div className="hidden lg:flex flex-col gap-2">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">System_Health</span>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500" style={{ width: '94%' }} />
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mx-auto lg:mx-0">
                            <User className="w-5 h-5 text-slate-400" />
                        </div>
                    </div>
                </aside>

                {/* MAIN CONTENT AREA */}
                <main className="flex-1 flex flex-col overflow-hidden relative">

                    {/* TOP NAV: REALTIME CLOCK & STATUS */}
                    <header className="h-20 border-b border-slate-800/50 bg-[#0B0F19]/50 backdrop-blur-xl flex items-center justify-between px-10 shrink-0 relative z-10">
                        <div className="flex items-center gap-8">
                            <div className="flex flex-col">
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">Global_Time_Alpha</span>
                                <span className="text-sm font-bold font-mono text-cyan-400 tracking-wider transition-all">{currentTime}</span>
                            </div>
                            <div className="h-8 w-[1px] bg-slate-800/50" />
                            <div className="hidden md:flex items-center gap-4">
                                <StatusBadge dot="bg-emerald-500" label="Systems_Nominal" />
                                <StatusBadge dot="bg-indigo-500" label="Mesh_Synced" />
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="h-10 px-4 bg-slate-800/30 border border-slate-800/50 rounded-lg hidden lg:flex items-center gap-3 text-slate-400">
                                <Search className="w-4 h-4" />
                                <input type="text" placeholder="Query_Matrix..." className="bg-transparent border-none outline-none text-xs w-48 font-mono" />
                            </div>
                            <button className="relative w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-colors">
                                <Bell className="w-5 h-5 text-slate-400" />
                                <div className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#0B0F19]" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-colors">
                                <Settings className="w-5 h-5 text-slate-400" />
                            </button>
                        </div>
                    </header>

                    {/* --- MASTER DASHBOARD HERO (FIT ONE SCREEN) --- */}
                    <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#0B0F19]">

                        {/* TOP METRICS STRIP */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            <MetricBlock label="Live_RPS" value="12,402" sub="+12.4% vs Avg" chart={[30, 60, 45, 80, 55]} color="text-indigo-400" />
                            <MetricBlock label="Avg_Latency" value="1.42ms" sub="-0.5ms Target" chart={[80, 40, 60, 30, 70]} color="text-cyan-400" />
                            <MetricBlock label="Node_Count" value="52,900" sub="Global_Active" chart={[40, 45, 50, 60, 70]} color="text-emerald-400" />
                            <MetricBlock label="System_Load" value={`${systemLoad.toFixed(1)}%`} sub="CPU_Alpha_V" chart={[20, 90, 30, 80, 60]} color="text-amber-400" />
                        </div>

                        {/* MAIN DATA GRID */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* GLOBAL TRAFFIC MONITOR */}
                            <div className="lg:col-span-2 p-8 rounded-3xl bg-slate-900 border border-white/5 space-y-8 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-50" />
                                <div className="flex items-center justify-between relative z-10">
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                            <Globe className="w-4 h-4 text-cyan-400" />
                                            Global_Traffic_Monitor
                                        </h3>
                                        <p className="text-[10px] text-slate-500 font-mono">Real-time state distribution across alphabetic clusters.</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="h-8 px-3 bg-slate-800 rounded text-[9px] font-bold uppercase tracking-widest">Filters</button>
                                        <button className="h-8 w-8 bg-slate-800 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                                            <Maximize2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="h-[300px] relative rounded-2xl overflow-hidden bg-slate-950/50 border border-white/5">
                                    {/* Mock Map Image */}
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                                        alt="Data Stream"
                                        className="w-full h-full object-cover opacity-30 grayscale"
                                    />
                                    {/* Absolute Telemetry Overlays */}
                                    <div className="absolute top-6 left-6 p-4 bg-slate-900/90 backdrop-blur-xl rounded-xl border border-white/5 space-y-3 shadow-2xl">
                                        <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Node_Alpha_Synced</div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-xl font-black italic tracking-tighter">99.99%</span>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 right-6 flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center">
                                                    <User className="w-4 h-4 text-slate-500" />
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-400">+1.2k_Observers</span>
                                    </div>
                                </div>
                            </div>

                            {/* QUICK ANALYTICS WIDGETS */}
                            <div className="space-y-8">
                                <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">Memory_Allocation</h4>
                                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="flex-1 space-y-2">
                                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-indigo-500" style={{ width: '74%' }} />
                                            </div>
                                            <div className="flex justify-between text-[9px] font-mono font-bold">
                                                <span className="text-slate-500">Core_B_Mesh</span>
                                                <span className="text-white text-right font-bold tracking-tight">74.2%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="flex-1 space-y-2">
                                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-cyan-500" style={{ width: '42%' }} />
                                            </div>
                                            <div className="flex justify-between text-[9px] font-mono font-bold">
                                                <span className="text-slate-500">System_Cache_V</span>
                                                <span className="text-white text-right font-bold tracking-tight">42.8%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 rounded-3xl bg-indigo-600 text-white space-y-6 shadow-2xl shadow-indigo-600/20 group cursor-pointer overflow-hidden relative">
                                    <Zap className="absolute -right-8 -bottom-8 w-32 h-32 opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700" />
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5" />
                                        <h4 className="text-[11px] font-black uppercase tracking-widest italic">Governance_V_Audit</h4>
                                    </div>
                                    <p className="text-xs font-bold leading-relaxed opacity-80 uppercase italic">Review the latest consensus audit logs for compliance v4.2.</p>
                                    <button className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest pt-2 group-hover:translate-x-2 transition-transform">
                                        Execute_Report <ArrowUpRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* DATA TABLE: RECENT SYSTEM EVENTS */}
                        <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 space-y-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Terminal className="w-5 h-5 text-emerald-400" />
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Recent_System_Events_Log</h3>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-9 px-4 bg-slate-800/50 rounded-lg flex items-center gap-2 text-[10px] font-bold text-slate-400 border border-white/5">
                                        <Filter className="w-3 h-3" />
                                        Filter_Logs
                                    </div>
                                    <div className="h-9 w-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <Download className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-slate-800 text-[10px] uppercase font-bold text-slate-500 tracking-widest">
                                            <th className="pb-6 px-4">Timestamp_UTC</th>
                                            <th className="pb-6 px-4">Event_Class</th>
                                            <th className="pb-6 px-4">Origin_Node</th>
                                            <th className="pb-6 px-4">State_Hash</th>
                                            <th className="pb-6 px-4 text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs font-mono">
                                        {[
                                            { t: "20:58:32.40", e: "Sync_Accepted", n: "US-EAST-01", h: "0x8F2E...41A2", s: "Nominal" },
                                            { t: "20:58:29.12", e: "Peer_Discovery", n: "EU-WEST-04", h: "0xC5A1...88B0", s: "Success" },
                                            { t: "20:58:25.88", e: "Block_Audit", n: "ASIA-SE-09", h: "0x9D05...FF12", s: "Verified" },
                                            { t: "20:58:21.05", e: "Governance_Sig", n: "GLOBAL-000", h: "0xAABB...CCDD", s: "Signed" }
                                        ].map((row, i) => (
                                            <tr key={i} className="group hover:bg-white/5 transition-all">
                                                <td className="py-5 px-4 text-slate-400">{row.t}</td>
                                                <td className="py-5 px-4 font-bold text-cyan-400">{row.e}</td>
                                                <td className="py-5 px-4 uppercase font-bold tracking-tighter">{row.n}</td>
                                                <td className="py-5 px-4 text-slate-500">{row.h}</td>
                                                <td className="py-5 px-4 text-right">
                                                    <button className="h-7 px-3 rounded bg-indigo-500/10 text-indigo-400 text-[9px] font-bold uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all">
                                                        Inspect
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </main>
            </div>

            {/* --- STATUS FOOTER --- */}
            <footer className="h-10 border-t border-slate-800/50 bg-[#0B0F19] flex items-center justify-between px-10 relative z-20 shrink-0">
                <div className="flex items-center gap-6 text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        Node_Alpha: Online
                    </div>
                    <div className="flex items-center gap-2">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Syncing: 100%
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        TZ: UTC+7
                    </div>
                </div>
                <div className="flex items-center gap-8 text-[9px] font-bold text-slate-600 uppercase tracking-[0.3em] italic">
                    ViCode_Command_Interface_v8.4.2
                </div>
            </footer>
        </div>
    );
};

const SidebarLink = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
    <div className={cn(
        "flex items-center gap-4 px-4 py-3 cursor-pointer rounded-xl transition-all group",
        active ? "bg-indigo-600 text-white" : "text-slate-500 hover:bg-white/5 hover:text-white"
    )}>
        <div className={cn("transition-transform group-hover:scale-110", active ? "" : "text-slate-400 group-hover:text-indigo-400")}>{icon}</div>
        <span className="text-xs font-bold uppercase tracking-widest hidden lg:block font-mono">{label}</span>
    </div>
);

const StatusBadge = ({ dot, label }: { dot: string, label: string }) => (
    <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/30 border border-slate-800/50 rounded-full">
        <div className={cn("w-1.5 h-1.5 rounded-full", dot)} />
        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{label}</span>
    </div>
);

const MetricBlock = ({ label, value, sub, chart, color }: { label: string, value: string, sub: string, chart: number[], color: string }) => (
    <div className="p-6 rounded-3xl bg-slate-900 border border-white/5 space-y-4 hover:border-white/10 transition-all group">
        <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] font-mono">{label}</span>
            <div className="flex items-end gap-1 h-6 px-1">
                {chart.map((h, i) => (
                    <div key={i} className={cn("w-1 rounded-full opacity-30 group-hover:opacity-100 transition-opacity", color.replace('text-', 'bg-'))} style={{ height: `${h}%` }} />
                ))}
            </div>
        </div>
        <div className="space-y-1">
            <div className={cn("text-3xl font-black italic tracking-tighter", color)}>{value}</div>
            <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{sub}</div>
        </div>
    </div>
);
