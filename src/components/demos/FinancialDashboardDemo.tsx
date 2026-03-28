import { cn } from "@/lib/utils";
import {
Activity,
ArrowDownLeft,
ArrowUpRight,
CheckCircle2,
ChevronRight,
CreditCard,
Globe,
Landmark,
LayoutGrid,
Lock,
PieChart,
ShieldCheck,
TrendingUp,
Wallet
} from "lucide-react";
import React,{ useState } from "react";

export const FinancialDashboardDemo: React.FC = () => {
    const [period, setPeriod] = useState<"7D" | "30D" | "1Y">("30D");

    const transactions = [
        { name: "GitHub_Actions_Compute", type: "Subscription", date: "Now", amount: "-$142.10", status: "Processed" },
        { name: "SaaS_Subscription_Payouts", type: "Revenue", date: "2m ago", amount: "+$12,450.00", status: "Success" },
        { name: "OpenAI_API_TopUp", type: "Usage", date: "1h ago", amount: "-$500.00", status: "Pending" },
        { name: "AWS_Infrastructure_Edge", type: "Cloud", date: "4h ago", amount: "-$1,240.50", status: "Processed" }
    ];

    return (
        <div className="flex-1 bg-[#f8fafc] text-slate-600 font-sans selection:bg-emerald-600 selection:text-white overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* --- FISCAL NAV --- */}
            <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-white/90 backdrop-blur-xl border-b border-slate-100">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-emerald-400 shadow-xl">
                        <Landmark className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="font-bold text-slate-900 tracking-tight text-base">ViCode_Capital</span>
                        <div className="flex items-center gap-2 text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                            <ShieldCheck className="w-2.5 h-2.5 text-emerald-500" />
                            Secure_Protocol_v4.2
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                    {["7D", "30D", "1Y"].map((val) => (
                        <button
                            key={val}
                            onClick={() => setPeriod(val as any)}
                            className={cn(
                                "h-8 px-6 rounded-lg text-[10px] font-bold transition-all",
                                period === val ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-600"
                            )}
                        >
                            {val}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available_Balance</span>
                        <span className="text-sm font-black text-slate-900 tracking-tight">$82,450.00</span>
                    </div>
                    <button className="h-10 px-6 bg-emerald-600 text-white font-bold uppercase tracking-widest text-[9px] rounded-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20">
                        Withdraw
                    </button>
                </div>
            </nav>

            {/* --- CAPITAL HERO: ONE SCREEN FOCUS --- */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-4 px-10 overflow-hidden shrink-0">
                <div className="absolute inset-0 z-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-black uppercase tracking-[0.1em]">Audit-Grade Infrastructure</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900 uppercase">
                            SaaS_Capital.<br />
                            <span className="text-emerald-600">Pure_Control.</span>
                        </h1>

                        <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-lg">
                            Automate your SaaS financial health. ViCode Capital provides real-time ROI tracking, automated tax provisioning, and seamless payouts for billion-scale enterprises.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="h-14 px-10 bg-slate-900 text-white font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-4 group">
                                Enable_Ledger <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="h-14 px-8 border border-slate-200 text-slate-900 font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-white transition-colors">
                                Request_Demo
                            </button>
                        </div>

                        <div className="flex gap-12 pt-4">
                            <div className="space-y-1 border-l-2 border-emerald-500 pl-4">
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Net_Profit_Margin</div>
                                <div className="text-2xl font-black text-slate-900 tracking-tighter">74.2%</div>
                            </div>
                            <div className="space-y-1 border-l-2 border-slate-200 pl-4">
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">LTV_to_CAC</div>
                                <div className="text-2xl font-black text-slate-900 tracking-tighter">8.4x</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group perspective-1000">
                        {/* MAIN FINANCIAL CARD */}
                        <div className="relative w-full max-w-lg mx-auto bg-white border border-slate-200 p-8 rounded-[48px] shadow-2xl transition-all duration-700 group-hover:shadow-emerald-500/10 hover:-translate-y-2">
                            {/* Sparkline Background */}
                            <div className="absolute inset-0 bottom-0 opacity-10 flex items-end px-1 overflow-hidden rounded-[48px]">
                                <svg viewBox="0 0 100 20" className="w-full h-32 text-emerald-500 stroke-current" fill="none">
                                    <path d="M0 15 Q 10 12 20 16 T 40 10 T 60 14 T 80 8 T 100 12" strokeWidth="0.5" strokeLinecap="round" />
                                </svg>
                            </div>

                            <div className="relative z-10 space-y-10">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current_Yield</div>
                                        <div className="text-4xl font-black text-slate-900 tracking-tighter italic">$2.4M</div>
                                    </div>
                                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                                        <PieChart className="w-7 h-7" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Recent_Fiscal_Events</div>
                                    <div className="space-y-2">
                                        {transactions.slice(0, 3).map((tx, i) => (
                                            <div key={i} className="flex justify-between items-center p-3 bg-slate-50 border border-slate-100 rounded-2xl transition-all hover:bg-white hover:shadow-sm">
                                                <div className="flex items-center gap-4">
                                                    <div className={cn(
                                                        "w-8 h-8 rounded-lg flex items-center justify-center",
                                                        tx.amount.includes('+') ? "bg-emerald-100 text-emerald-600" : "bg-slate-200 text-slate-600"
                                                    )}>
                                                        {tx.amount.includes('+') ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
                                                    </div>
                                                    <div>
                                                        <div className="text-[11px] font-black text-slate-900 truncate max-w-[140px] leading-tight mb-0.5">{tx.name}</div>
                                                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{tx.date}</div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className={cn("text-xs font-black", tx.amount.includes('+') ? "text-emerald-600" : "text-slate-900")}>{tx.amount}</div>
                                                    <div className="text-[8px] font-bold text-slate-400 uppercase">{tx.status}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full h-12 bg-slate-900 text-white font-black uppercase tracking-widest text-[9px] rounded-2xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-3">
                                    Access_Main_Vault <Lock className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FISCAL HEALTH GRID --- */}
            <section className="py-24 px-10 bg-white shrink-0 rounded-t-[60px] shadow-[0_-30px_60px_rgba(0,0,0,0.05)] relative z-20">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                        <div className="max-w-2xl space-y-4 text-left">
                            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.95]">
                                Fiscal_Scalability_Engine.
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                ViCode provides an institucional-grade financial API layer for modern software companies. Control money flow with the same precision you control your code.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 bg-slate-50">
                                <Globe className="w-4 h-4" />
                            </div>
                            <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 bg-slate-50">
                                <Activity className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { t: "Automated_Tax_Escrow", d: "Real-time provisioning for global VAT/GST compliance per transaction.", i: Landmark },
                            { t: "Predictive_Cashflow", d: "Simulate future liquidity based on historical churn and LTV drift.", i: TrendingUp },
                            { t: "Multi-Currency_Vault", d: "Hold, convert, and pay out in 40+ currencies at mid-market rates.", i: Wallet },
                            { t: "Unified_SaaS_Ledger", d: "Consolidate Stripe, AWS, and Cloudflare costs into a single ROI table.", i: LayoutGrid }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:border-emerald-500/30 transition-all flex flex-col gap-6">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    <item.i className="w-6 h-6 text-slate-900" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-sm font-black text-slate-900 tracking-widest uppercase">{item.t}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed font-bold uppercase tracking-tighter">
                                        {item.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CORPORATE FOOTER --- */}
            <footer className="py-20 px-10 bg-slate-900 text-white shrink-0">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none">The_Audit_Standard.</h3>
                        </div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">ViCode_Fiscal_Unit_©2026</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
                        <div className="space-y-2">
                            <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Volume_Processed</div>
                            <div className="text-2xl font-black text-emerald-400 italic">Unlimited</div>
                        </div>
                        <button className="h-14 px-12 bg-emerald-600 text-white font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/10">
                            Contact_Investment_Lead
                        </button>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-wrap justify-between items-center text-[8px] font-black text-slate-600 uppercase tracking-[0.5em] gap-8">
                    <div className="flex gap-8">
                        <span>Regulated_by_SaaS_Council</span>
                        <span>SOC2_Certified</span>
                    </div>
                    <div className="flex gap-8">
                        <span>Legal_Vault</span>
                        <span>Privacy_Shield</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
