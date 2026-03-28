import {
ArrowRight,
Award,
Building,
CheckCircle2,
ChevronRight,
FileCheck,
Fingerprint,
Globe,
GraduationCap,
Lock,
Server,
ShieldCheck,
Zap
} from "lucide-react";
import React from "react";

export const TrustAuthorityDemo: React.FC = () => {
    return (
        <div className="flex-1 bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-y-auto overflow-x-hidden relative h-full flex flex-col scroll-smooth">

            {/* Corporate Professional Nav */}
            <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-7 bg-white/95 backdrop-blur-md border-b border-slate-200">
                <div className="flex items-center gap-4 cursor-pointer">
                    <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center shadow-lg">
                        <Building className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-2xl tracking-tight text-[#1E3A8A]">ViCode_Enterprise</span>
                </div>

                <div className="hidden lg:flex items-center gap-12 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    <a href="#" className="hover:text-blue-700 transition-colors">Solutions</a>
                    <a href="#" className="hover:text-blue-700 transition-colors">Governance</a>
                    <a href="#" className="hover:text-blue-700 transition-colors">Compliance</a>
                    <a href="#" className="hover:text-blue-700 transition-colors">Investors</a>
                </div>

                <div className="flex items-center gap-8">
                    <button className="text-sm font-bold text-slate-600 hover:text-blue-900 uppercase tracking-widest">
                        Consensus_Login
                    </button>
                    <button className="h-12 px-8 rounded bg-[#1E3A8A] text-white font-bold uppercase tracking-widest text-[10px] shadow-xl hover:bg-blue-900 transition-all flex items-center gap-3">
                        Request_Access
                        <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                </div>
            </header>

            {/* --- HERO: TRUST & AUTHORITY (FIT ONE SCREEN) --- */}
            <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-40 pb-20 px-16 bg-white">
                <div className="absolute top-0 right-0 w-[40vw] h-[100vh] bg-blue-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div className="space-y-12 animate-in slide-in-from-top duration-1000">
                        <div className="flex items-center gap-4 text-blue-700">
                            <ShieldCheck className="w-8 h-8" />
                            <span className="text-xs font-black uppercase tracking-[0.4em]">Proven_at_Global_Scale_v4.2</span>
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
                            The Infrastructure<br />
                            <span className="text-blue-700">of_Absolute_Trust.</span>
                        </h1>

                        <p className="text-xl font-medium text-slate-500 leading-relaxed max-w-xl">
                            ViCode Enterprise provides the authoritative backbone for mission-critical logic, trusted by 40% of the Fortune 500.
                        </p>

                        <div className="flex items-center gap-12 pt-6">
                            <div className="space-y-2">
                                <div className="text-4xl font-extrabold text-[#1E3A8A]">12,400+</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Global_Clients</div>
                            </div>
                            <div className="w-[1px] h-12 bg-slate-200" />
                            <div className="space-y-2">
                                <div className="text-4xl font-extrabold text-[#1E3A8A]">$4.2B+</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Annual_State_Managed</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="h-14 px-12 rounded bg-[#1E3A8A] text-white font-bold uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Executive_Overview
                            </button>
                            <button className="h-14 px-12 rounded border-2 border-slate-200 text-slate-900 font-bold uppercase tracking-widest text-[11px] hover:bg-slate-50 transition-all">
                                White_Papers
                            </button>
                        </div>
                    </div>

                    <div className="relative animate-in zoom-in-95 duration-1000 shadow-3xl rounded-2xl overflow-hidden border border-slate-100">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                            alt="Corporate Office"
                            className="w-full h-[550px] object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1E3A8A]/10" />

                        {/* Status Card Overlay */}
                        <div className="absolute bottom-10 left-10 p-10 bg-white/95 backdrop-blur-xl rounded-xl border border-slate-100 shadow-2xl max-w-sm space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest">Global_Status_Pulse</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                    <span className="text-slate-400">Uptime</span>
                                    <span className="text-emerald-600">99.999%_Verified</span>
                                </div>
                                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full w-[99%] bg-emerald-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- COMPLIANCE STRIP --- */}
            <div className="py-20 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-16 flex flex-wrap justify-between items-center gap-12 grayscale opacity-60">
                    <ComplianceItem text="SOC2_TYPE_II" icon={<FileCheck className="w-6 h-6" />} />
                    <ComplianceItem text="GDPR_COMPLIANT" icon={<ShieldCheck className="w-6 h-6" />} />
                    <ComplianceItem text="HIPAA_HITECH" icon={<Lock className="w-6 h-6" />} />
                    <ComplianceItem text="ISO_27001" icon={<CheckCircle2 className="w-6 h-6" />} />
                    <ComplianceItem text="PCI_DSS_L1" icon={<Fingerprint className="w-6 h-6" />} />
                </div>
            </div>

            {/* --- TRUSTED LOGOS --- */}
            <section className="py-32 px-16 bg-white">
                <div className="max-w-7xl mx-auto space-y-16">
                    <p className="text-center text-[11px] font-bold uppercase tracking-[0.5em] text-slate-400">Trusted_by_Fortune_500_Leaders</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-20 items-center opacity-40">
                        <Logo text="GLOBAL_GEN" />
                        <Logo text="INFRA_SYS" />
                        <Logo text="QUANTUM_LD" />
                        <Logo text="VERTEX_CO" />
                        <Logo text="APEX_IND" />
                    </div>
                </div>
            </section>

            {/* --- AUTHORITY METRIC GRID --- */}
            <section className="py-40 px-16 bg-[#111827] text-white relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] opacity-5 scale-110 grayscale" />
                <div className="max-w-7xl mx-auto space-y-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        <div className="space-y-8">
                            <h2 className="text-5xl font-extrabold leading-tight tracking-tight uppercase">Proven_Performance.<br /><span className="text-blue-400">Zero_Guesswork.</span></h2>
                            <p className="text-xl text-slate-400 leading-relaxed font-medium italic">ViCode Enterprise has been independently audited to handle the most complex financial and infrastructural state management requirements on earth.</p>
                            <button className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors pt-4">
                                Download_Audit_Reports
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <StatBlock label="Annual_Uptime" value="99.999%" sub="12_Months_Rolling" icon={<Zap className="w-5 h-5" />} />
                            <StatBlock label="Data_Resilience" value="99.99999%" sub="Durable_Storage" icon={<Server className="w-5 h-5" />} />
                            <StatBlock label="Response_SLA" value="< 15ms" sub="Global_Average" icon={<Activity className="w-5 h-5" />} />
                            <StatBlock label="Security_Pulse" value="Real_Time" sub="Continuous_Monitor" icon={<ShieldCheck className="w-5 h-5" />} />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORPORATE CALL TO ACTION --- */}
            <section className="py-48 px-16 text-center bg-white relative">
                <div className="max-w-4xl mx-auto space-y-12">
                    <Building className="w-16 h-16 text-[#1E3A8A] mx-auto opacity-20" />
                    <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-none">
                        Secure_Your_Infrastructure Future_Today.
                    </h2>
                    <p className="text-xl font-bold text-slate-400 tracking-[0.4em] uppercase">Join_the_Standard_of_Enterprise_Consensus</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8 px-10">
                        <button className="h-16 flex-1 rounded bg-[#1E3A8A] text-white font-bold uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all text-[11px] flex items-center justify-center gap-4">
                            Contact_Enterprise_Sales
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="h-16 flex-1 rounded border-2 border-slate-200 text-slate-900 font-bold uppercase tracking-widest hover:bg-slate-50 transition-all text-[11px] flex items-center justify-center">
                            Virtual_Governance_Tour
                        </button>
                    </div>

                    <div className="pt-20 flex flex-wrap justify-center gap-16 border-t border-slate-100 mt-20 grayscale opacity-40">
                        <div className="flex flex-col items-center gap-3">
                            <Award className="w-10 h-10 text-slate-600" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Global_Tech_Award_2025</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <GraduationCap className="w-10 h-10 text-slate-600" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Industry_Certification_v6</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <Building className="w-10 h-10 text-slate-600" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Enterprise_Standard_Member</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER: AUTHORITATIVE --- */}
            <footer className="py-32 px-16 border-t border-slate-100 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-6 gap-24">
                    <div className="lg:col-span-2 space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-[#1E3A8A] rounded flex items-center justify-center">
                                <Building className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-[#1E3A8A]">ViCode_Enterprise</span>
                        </div>
                        <p className="text-xs font-medium text-slate-400 leading-relaxed max-w-xs uppercase tracking-widest">
                            The standard for global enterprise state management. Secured by design. Trusted by leaders.
                        </p>
                    </div>

                    {[
                        { t: "Governance", l: ["Compliance", "Audit_Logs", "Privacy_Policy", "SOC_Reports"] },
                        { t: "Solutions", l: ["Infrastructure", "Data_Mesh", "Security", "Scale"] },
                        { t: "Corporate", l: ["About_Us", "Investors", "Press_Kit", "Ethics"] },
                        { t: "Resources", l: ["White_Papers", "API_Docs", "SLA_Agreement", "Support"] }
                    ].map((col, i) => (
                        <div key={i} className="space-y-10">
                            <h5 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#1E3A8A]">{col.t}</h5>
                            <ul className="space-y-5">
                                {col.l.map((link, li) => (
                                    <li key={li}>
                                        <a href="#" className="text-xs font-bold text-slate-500 hover:text-blue-700 transition-colors uppercase tracking-[0.1em]">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto pt-32 border-t border-slate-200 mt-24 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 text-center gap-6">
                    <span>© 2026 ViCode Enterprise Group. All systems verified and audited.</span>
                    <div className="flex items-center gap-8 text-slate-300">
                        <span>SECURED_PROTOCOL_EN_v6.4</span>
                        <ShieldCheck className="w-4 h-4" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

const ComplianceItem = ({ text, icon }: { text: string, icon: React.ReactNode }) => (
    <div className="flex items-center gap-4 group cursor-default">
        <div className="text-slate-400 group-hover:text-blue-600 transition-colors">{icon}</div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{text}</span>
    </div>
);

const Logo = ({ text }: { text: string }) => (
    <div className="text-xl font-extrabold tracking-tighter text-slate-900 uppercase">
        {text}
    </div>
);

const StatBlock = ({ label, value, sub, icon }: { label: string, value: string, sub: string, icon: React.ReactNode }) => (
    <div className="space-y-4 p-8 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group">
        <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{label}</span>
            <div className="text-blue-400/30 group-hover:text-blue-400 transition-colors">{icon}</div>
        </div>
        <div className="space-y-1">
            <div className="text-3xl font-extrabold text-white">{value}</div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{sub}</div>
        </div>
    </div>
);

const Activity = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
);
