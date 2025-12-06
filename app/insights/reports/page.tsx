import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Workforce Intelligence Reports — Georgia 2025 | FNSG",
    description: "Interactive, OS-style reports on labor dynamics, turnover, pay pressure and risk across Georgia’s industrial, logistics, healthcare and EVS sectors.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/reports',
    },
    openGraph: {
        title: "Workforce Intelligence Reports — Georgia 2025",
        description: "Interactive, OS-style reports on labor dynamics, turnover, pay pressure and risk across Georgia’s industrial, logistics, healthcare and EVS sectors.",
        url: 'https://firstnationalstaffing.com/insights/reports',
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'website',
    },
};

export default function ReportsHubPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "FNSG Workforce Intelligence Reports",
        "description": "Interactive, OS-style reports on labor dynamics, turnover, pay pressure and risk across Georgia’s industrial, logistics, healthcare and EVS sectors.",
        "url": "https://firstnationalstaffing.com/insights/reports",
        "inLanguage": "en"
    };

    return (
        <main className="bg-slate-50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section - Dashboard Style */}
            <div className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="container mx-auto px-6 py-16 relative z-10 max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-4">
                                <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                                    Workforce Intelligence OS
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                                Workforce Intelligence Reports — <span className="text-blue-500">Georgia 2025</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Interactive, OS-style reports on labor dynamics, turnover, pay pressure and risk across Georgia’s industrial, logistics, healthcare and EVS sectors.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-slate-900 bg-white hover:bg-slate-50 transition-all"
                                >
                                    Request a Workforce Briefing
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-bold rounded-lg text-white hover:bg-slate-800 transition-all"
                                >
                                    Download All 2025 Reports (PDF Pack)
                                </Link>
                            </div>
                        </div>
                        {/* Hero Right - Preview Dashboard Placeholder */}
                        <div className="reports-hero-preview bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-80 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                {/* Abstract chart feel */}
                                <div className="space-y-4 w-3/4">
                                    <div className="h-4 bg-slate-600 rounded w-full"></div>
                                    <div className="h-4 bg-slate-600 rounded w-5/6"></div>
                                    <div className="h-32 bg-slate-700 rounded w-full mt-4 flex items-end gap-2 p-2">
                                        <div className="bg-blue-500 w-1/5 h-1/2 rounded-t"></div>
                                        <div className="bg-blue-400 w-1/5 h-3/4 rounded-t"></div>
                                        <div className="bg-blue-600 w-1/5 h-2/3 rounded-t"></div>
                                        <div className="bg-blue-300 w-1/5 h-1/3 rounded-t"></div>
                                        <div className="bg-blue-500 w-1/5 h-full rounded-t"></div>
                                    </div>
                                </div>
                            </div>
                            <span className="relative z-10 bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-sm font-mono text-blue-400">
                                [Live Dashboard Preview]
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Reports', href: '/insights/reports' }
                ]} />

                {/* Reports Grid (Cards) */}
                <section className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all flex flex-col">
                            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight min-h-[56px]">Georgia Industrial Workforce Benchmark 2025</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium border border-blue-100">Labor Demand</span>
                                <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded font-medium border border-red-100">Turnover</span>
                                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded font-medium border border-green-100">Safety</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-6 flex-grow">Benchmark your operation against statewide industrial labor trends and risk factors.</p>
                            <Link href="/insights/reports/georgia-industrial-workforce-2025" className="mt-auto block text-center bg-slate-900 text-white py-2 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors">
                                View Report &rarr;
                            </Link>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all flex flex-col">
                            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight min-h-[56px]">Warehouse & Logistics Forecast 2025</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium border border-blue-100">Forecast</span>
                                <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded font-medium border border-purple-100">3rd Shift</span>
                                <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded font-medium border border-amber-100">Wages</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-6 flex-grow">Predictive insights on logistics labor demand, shift stability, and wage pressure.</p>
                            <Link href="/insights/reports/warehouse-logistics-forecast-2025" className="mt-auto block text-center bg-slate-900 text-white py-2 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors">
                                View Report &rarr;
                            </Link>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all flex flex-col">
                            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight min-h-[56px]">Manufacturing Turnover & Stability 2025</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded font-medium border border-red-100">Turnover</span>
                                <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded font-medium border border-slate-200">Skills</span>
                                <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded font-medium border border-orange-100">OSHA</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-6 flex-grow">Deep dive into retention, skill gaps, and stability metrics for manufacturing.</p>
                            <Link href="/insights/reports/manufacturing-turnover-2025" className="mt-auto block text-center bg-slate-900 text-white py-2 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors">
                                View Report &rarr;
                            </Link>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all flex flex-col">
                            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight min-h-[56px]">Healthcare & EVS Workforce Report 2025</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded font-medium border border-teal-100">EVS</span>
                                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium border border-blue-100">Compliance</span>
                                <span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded font-medium border border-indigo-100">Audit</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-6 flex-grow">Compliance and workforce stability insights for EVS and healthcare support roles.</p>
                            <Link href="/insights/reports/healthcare-evs-2025" className="mt-auto block text-center bg-slate-900 text-white py-2 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors">
                                View Report &rarr;
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Live OS Metrics Preview */}
                <section className="py-12 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Live OS Metrics Preview</h2>
                            <p className="text-slate-500">Real-time indicators from the FNSG Intelligence OS</p>
                        </div>
                        <span className="hidden md:inline-flex items-center text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full border border-green-100">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                            Live Data Connection
                        </span>
                    </div>

                    <div className="reports-metrics-grid grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Placeholder Chart 1 */}
                        <div className="chart-card bg-slate-50 border border-slate-200 rounded-lg p-4 h-64 flex items-center justify-center relative">
                            <div className="absolute top-4 left-4 font-bold text-sm text-slate-700">NCNS vs. Seasonality</div>
                            <div className="text-slate-400 text-sm italic">[Trend Line Chart Placeholder]</div>
                        </div>
                        {/* Placeholder Chart 2 */}
                        <div className="chart-card bg-slate-50 border border-slate-200 rounded-lg p-4 h-64 flex items-center justify-center relative">
                            <div className="absolute top-4 left-4 font-bold text-sm text-slate-700">Wage Pressure vs. Turnover</div>
                            <div className="text-slate-400 text-sm italic">[Scatter Plot Chart Placeholder]</div>
                        </div>
                        {/* Placeholder Chart 3 */}
                        <div className="chart-card bg-slate-50 border border-slate-200 rounded-lg p-4 h-64 flex items-center justify-center relative">
                            <div className="absolute top-4 left-4 font-bold text-sm text-slate-700">Shift Reliability Score</div>
                            <div className="text-slate-400 text-sm italic">[Gauge Chart Placeholder]</div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: "What's inside these reports?", a: "Each report aggregates exclusive data from our Workforce Intelligence OS, covering turnover, wages, compliance, and operational risks specific to Georgia industries." },
                            { q: "How often are they updated?", a: "Major benchmark reports are updated annually, with quarterly pulse updates for our partners." },
                            { q: "Can we get a custom briefing for our plant?", a: "Yes. We offer site-specific diagnostic briefings comparing your metrics against local benchmarks." }
                        ].map((faq, idx) => (
                            <div key={idx} className="border-b border-slate-200 pb-4">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h3>
                                <p className="text-slate-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Final */}
                <div className="mt-12 text-center p-10 bg-blue-50/50 rounded-2xl border border-blue-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Need deeper insights?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm"
                        >
                            Request a Custom Workforce Intelligence Briefing
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-bold rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm"
                        >
                            Schedule a 30-Minute OS Demo
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
