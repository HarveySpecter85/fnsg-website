import React from 'react';
import Link from 'next/link';
import {
    FileText,
    BarChart2,
    TrendingUp,
    AlertTriangle,
    ArrowRight,
    Layers,
    Users,
    ShieldAlert,
    Briefcase,
    MapPin,
    PieChart,
    Activity,
    Download
} from 'lucide-react';

// Shared components (assuming these exist from previous context)
import { SEOBlock } from '@/app/components/blog/shared';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';

export default function ReportsPage() {
    return (
        <main className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <SeoSidebar />

                    {/* Content */}
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'Reports', href: '/insights/reports' }
                        ]} />

                        {/* SECTION A — Hero */}
                        <section className="relative py-12 md:py-20 bg-slate-900 text-white rounded-xl overflow-hidden mb-12">
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900 pointer-events-none"></div>
                            <div className="relative z-10 px-8 md:px-12">
                                <div className="max-w-4xl">
                                    <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-6 leading-tight">
                                        Workforce Intelligence <br />
                                        <span className="text-blue-400">Reports 2025</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mb-10">
                                        A strategic collection of industrial insights, labor forecasting, operational analytics, and risk intelligence built for Georgia employers.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-semibold transition-all uppercase tracking-wider text-sm">
                                            <Download className="w-4 h-4" /> Download Executive Summary PDF
                                        </button>
                                        <Link href="/contact" className="flex items-center justify-center gap-2 bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-sm font-semibold transition-all uppercase tracking-wider text-sm">
                                            Book a Strategy Session
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION B — Executive Overview (Consulting Summary) */}
                        <section className="py-12 bg-slate-50 border border-slate-200 rounded-xl mb-12 px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                                <div className="lg:col-span-4">
                                    <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Executive Overview</h2>
                                    <h3 className="text-3xl font-serif text-slate-900 mb-6">The State of Georgia's Industrial Workforce</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        As we approach 2025, the industrial labor market is undergoing a fundamental structural shift. The era of "cheap, abundant labor" has ended, replaced by a landscape defined by skill scarcity, wage compression, and heightened regulatory scrutiny.
                                    </p>
                                </div>
                                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white p-8 border-t-4 border-blue-600 shadow-sm">
                                        <h4 className="font-bold text-slate-900 mb-3">Macro Labor Trends</h4>
                                        <p className="text-sm text-slate-600">
                                            Georgia's labor participation rate has stabilized, but the "Silver Tsunami" of retiring baby boomers is creating a permanent deficit in skilled trade roles.
                                        </p>
                                    </div>
                                    <div className="bg-white p-8 border-t-4 border-indigo-600 shadow-sm">
                                        <h4 className="font-bold text-slate-900 mb-3">Disruptions</h4>
                                        <p className="text-sm text-slate-600">
                                            Automation is not replacing workers but changing the profile. The collapse of 2nd shift availability is forcing a rethink of production scheduling.
                                        </p>
                                    </div>
                                    <div className="bg-white p-8 border-t-4 border-amber-600 shadow-sm">
                                        <h4 className="font-bold text-slate-900 mb-3">Employer Pain Points</h4>
                                        <p className="text-sm text-slate-600">
                                            Turnover in the first 90 days remains the primary cost driver. Wage wars for forklift operators are eroding margins in the logistics sector.
                                        </p>
                                    </div>
                                    <div className="bg-white p-8 border-t-4 border-emerald-600 shadow-sm">
                                        <h4 className="font-bold text-slate-900 mb-3">FNSG Operational Leverage</h4>
                                        <p className="text-sm text-slate-600">
                                            Our OS platform provides the predictive analytics needed to move from "reactive filling" to "proactive workforce planning."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION C — Featured Benchmark Reports */}
                        <section className="py-12 mb-12">
                            <div className="mb-12 flex items-end justify-between">
                                <div>
                                    <h2 className="text-3xl font-serif text-slate-900 mb-2">Featured Benchmark Reports</h2>
                                    <p className="text-slate-500">Deep-dive analysis into specific sectors and operational challenges.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Report 1 */}
                                <div className="group flex flex-col bg-white border border-slate-200 hover:border-blue-600 transition-colors duration-300 h-full rounded-lg overflow-hidden">
                                    <div className="h-48 bg-slate-100 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-200 group-hover:text-blue-100 transition-colors">
                                            <BarChart2 className="w-24 h-24" />
                                        </div>
                                        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                            Benchmark
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            Georgia Industrial Workforce Benchmark 2025
                                        </h3>
                                        <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
                                            Comprehensive analysis of labor supply, wage inflation, and demographic shifts across Metro Atlanta.
                                        </p>
                                        <Link href="/insights/reports/ga-industrial-workforce-2025" className="inline-flex items-center text-blue-600 font-bold text-sm hover:underline mt-auto">
                                            Read Report <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Report 2 */}
                                <div className="group flex flex-col bg-white border border-slate-200 hover:border-indigo-600 transition-colors duration-300 h-full rounded-lg overflow-hidden">
                                    <div className="h-48 bg-slate-100 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-200 group-hover:text-indigo-100 transition-colors">
                                            <TrendingUp className="w-24 h-24" />
                                        </div>
                                        <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                            Forecast
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                            Warehouse & Logistics Workforce Forecast 2025
                                        </h3>
                                        <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
                                            Predictive modeling for e-commerce volume, 3PL staffing demands, and peak season labor availability.
                                        </p>
                                        <Link href="/insights/reports/warehouse-logistics-forecast" className="inline-flex items-center text-indigo-600 font-bold text-sm hover:underline mt-auto">
                                            Read Report <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Report 3 */}
                                <div className="group flex flex-col bg-white border border-slate-200 hover:border-amber-600 transition-colors duration-300 h-full rounded-lg overflow-hidden">
                                    <div className="h-48 bg-slate-100 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-200 group-hover:text-amber-100 transition-colors">
                                            <Users className="w-24 h-24" />
                                        </div>
                                        <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                            Analysis
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                                            Manufacturing Turnover Analysis 2025
                                        </h3>
                                        <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
                                            Deep dive into retention metrics, shift attendance patterns, and the cost of turnover in manufacturing.
                                        </p>
                                        <Link href="/insights/reports/manufacturing-turnover-analysis" className="inline-flex items-center text-amber-600 font-bold text-sm hover:underline mt-auto">
                                            Read Report <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Report 4 */}
                                <div className="group flex flex-col bg-white border border-slate-200 hover:border-red-600 transition-colors duration-300 h-full rounded-lg overflow-hidden">
                                    <div className="h-48 bg-slate-100 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-200 group-hover:text-red-100 transition-colors">
                                            <ShieldAlert className="w-24 h-24" />
                                        </div>
                                        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                            Risk Map
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                                            OSHA Risk Heatmap 2025
                                        </h3>
                                        <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
                                            Visualizing high-risk zones, common violations, and safety compliance benchmarks for Georgia industries.
                                        </p>
                                        <Link href="/insights/reports/osha-risk-heatmap-2025" className="inline-flex items-center text-red-600 font-bold text-sm hover:underline mt-auto">
                                            Read Report <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION D — Strategic Frameworks Overview */}
                        <section className="py-12 bg-slate-900 text-white rounded-xl mb-12 px-8">
                            <div className="mb-12">
                                <h2 className="text-3xl font-serif mb-4">Strategic Frameworks</h2>
                                <p className="text-slate-400 max-w-2xl">
                                    We apply rigorous analytical frameworks to deconstruct workforce challenges and identify levers for operational improvement.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Framework 1 */}
                                <div className="bg-slate-800 p-8 rounded-sm border border-slate-700">
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                        <Activity className="w-5 h-5 text-blue-400" /> Porter’s Five Forces
                                    </h3>
                                    <p className="text-sm text-slate-400 mb-6">Industrial Labor Edition: Analyzing supplier power (labor), buyer power (employers), and threat of substitutes (automation).</p>
                                    <div className="h-32 bg-slate-900/50 rounded border border-slate-700/50 flex items-center justify-center">
                                        <span className="text-xs text-slate-600 uppercase tracking-widest">Chart Placeholder</span>
                                    </div>
                                </div>

                                {/* Framework 2 */}
                                <div className="bg-slate-800 p-8 rounded-sm border border-slate-700">
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                        <PieChart className="w-5 h-5 text-emerald-400" /> SWOT Analysis
                                    </h3>
                                    <p className="text-sm text-slate-400 mb-6">For Georgia Employers: Strengths in infrastructure, Weaknesses in skilled labor, Opportunities in reshoring, Threats in wage inflation.</p>
                                    <div className="h-32 bg-slate-900/50 rounded border border-slate-700/50 flex items-center justify-center">
                                        <span className="text-xs text-slate-600 uppercase tracking-widest">Matrix Placeholder</span>
                                    </div>
                                </div>

                                {/* Framework 3 */}
                                <div className="bg-slate-800 p-8 rounded-sm border border-slate-700">
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                        <Layers className="w-5 h-5 text-amber-400" /> Supply-Demand Gap
                                    </h3>
                                    <p className="text-sm text-slate-400 mb-6">Quantifying the deficit between open industrial requisitions and available qualified candidates in specific zip codes.</p>
                                    <div className="h-32 bg-slate-900/50 rounded border border-slate-700/50 flex items-center justify-center">
                                        <span className="text-xs text-slate-600 uppercase tracking-widest">Index Placeholder</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <SEOBlock
                            city="Georgia"
                            keywords={['Workforce Reports', 'Industrial Benchmarks', 'Staffing Analytics', 'Labor Market Intelligence', 'Consulting Reports']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
