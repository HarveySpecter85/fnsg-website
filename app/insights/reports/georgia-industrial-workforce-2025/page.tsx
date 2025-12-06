import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Georgia Industrial Workforce Benchmark Report 2025 | FNSG",
    description: "OS-style benchmark overview of labor demand, turnover pressure, pay competitiveness and risk across Georgia’s industrial corridors.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/reports/georgia-industrial-workforce-2025',
    },
    openGraph: {
        title: "Georgia Industrial Workforce Benchmark Report 2025",
        description: "Benchmark your operation against statewide industrial labor trends and risk factors.",
        url: 'https://firstnationalstaffing.com/insights/reports/georgia-industrial-workforce-2025',
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function GeorgiaIndustrialReport() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Georgia Industrial Workforce Benchmark Report 2025",
        "description": "OS-style benchmark overview of labor demand, turnover pressure, pay competitiveness and risk across Georgia’s industrial corridors.",
        "image": "https://firstnationalstaffing.com/insights/reports/georgia-industrial-workforce-2025/opengraph-image",
        "author": {
            "@type": "Organization",
            "name": "First National Staffing Group"
        },
        "publisher": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "logo": {
                "@type": "ImageObject",
                "url": "https://firstnationalstaffing.com/logo.png"
            }
        },
        "datePublished": "2025-01-15"
    };

    return (
        <main className="bg-slate-50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="container mx-auto px-6 py-16 relative z-10 max-w-7xl">
                    <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Interactive Report
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                        Georgia Industrial Workforce <br /><span className="text-blue-500">Benchmark Report 2025</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                        OS-style dashboard of labor demand, turnover pressure, pay competitiveness and risk across Georgia’s key industrial corridors.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8 max-w-7xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Reports', href: '/insights/reports' },
                    { label: 'Georgia Industrial Benchmark', href: '/insights/reports/georgia-industrial-workforce-2025' }
                ]} />

                {/* Metrics Row */}
                <div className="metrics-row grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
                    {[
                        { label: "Labor Demand Index", value: "82/100", trend: "up", color: "blue" },
                        { label: "Turnover Pressure", value: "68/100", trend: "up", color: "red" },
                        { label: "Shift Reliability", value: "74/100", trend: "stable", color: "green" },
                        { label: "Safety Risk Level", value: "Moderate", trend: "down", color: "orange" }
                    ].map((m, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <div className="text-sm text-slate-500 font-medium mb-1">{m.label}</div>
                            <div className={`text-2xl font-bold text-${m.color}-600`}>{m.value}</div>
                        </div>
                    ))}
                </div>

                {/* Charts Grid */}
                <div className="charts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-64 flex flex-col items-center justify-center">
                        <span className="text-slate-400 text-sm font-medium mb-2">Turnover vs Wage</span>
                        <div className="w-full h-full bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs">[Line Chart Placeholder]</div>
                    </div>
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-64 flex flex-col items-center justify-center">
                        <span className="text-slate-400 text-sm font-medium mb-2">County Heatmap</span>
                        <div className="w-full h-full bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs">[Map Placeholder]</div>
                    </div>
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-64 flex flex-col items-center justify-center">
                        <span className="text-slate-400 text-sm font-medium mb-2">Role Difficulty Index</span>
                        <div className="w-full h-full bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs">[Bar Chart Placeholder]</div>
                    </div>
                </div>

                {/* Insights Sections */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Findings</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">●</span><span className="text-slate-700">Industrial labor demand has stabilized but remains high in Tier 2 logistic corridors.</span></li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">●</span><span className="text-slate-700">Turnover pressure is highest in first 30 days, specifically for 2nd shift roles.</span></li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">●</span><span className="text-slate-700">Wage sensitivity has increased; $0.50 variance now impacts application flow by 18%.</span></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Regional Highlights & County Summary</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-slate-200 rounded-lg">
                                    <thead className="bg-slate-50 text-slate-900 text-sm">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold">Region/County</th>
                                            <th className="px-4 py-3 text-left font-semibold">Demand</th>
                                            <th className="px-4 py-3 text-left font-semibold">Avg Wage</th>
                                            <th className="px-4 py-3 text-left font-semibold">Turnover Risk</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-sm">
                                        <tr><td className="px-4 py-3 font-medium">Gwinnett</td><td className="px-4 py-3 text-green-600">High</td><td className="px-4 py-3">$18.50</td><td className="px-4 py-3 text-orange-500">High</td></tr>
                                        <tr><td className="px-4 py-3 font-medium">Cobb</td><td className="px-4 py-3 text-blue-600">Med</td><td className="px-4 py-3">$19.00</td><td className="px-4 py-3 text-yellow-500">Med</td></tr>
                                        <tr><td className="px-4 py-3 font-medium">Fulton (South)</td><td className="px-4 py-3 text-green-600">Very High</td><td className="px-4 py-3">$17.75</td><td className="px-4 py-3 text-red-500">Very High</td></tr>
                                        <tr><td className="px-4 py-3 font-medium">Hall</td><td className="px-4 py-3 text-blue-600">Stable</td><td className="px-4 py-3">$18.25</td><td className="px-4 py-3 text-green-500">Low</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-blue-900 mb-4">OS Recommendations</h3>
                            <ul className="space-y-4">
                                <li className="text-sm text-blue-800">
                                    <strong>Calibrate Entry Wages:</strong> Ensure base rates are competitive within 5 miles.
                                </li>
                                <li className="text-sm text-blue-800">
                                    <strong>Implement Day-1 Onboarding:</strong> Reduce specific orientation friction.
                                </li>
                                <li className="text-sm text-blue-800">
                                    <strong>Shift Differentials:</strong> Increase 2nd/3rd shift premiums to stabilize attendance.
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-blue-200">
                                <Link href="/solutions/workforce-diagnostic-os" className="text-blue-700 font-bold text-sm hover:underline">
                                    Run a Diagnostic OS &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <section className="py-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="bg-white border border-slate-200 rounded-lg p-4 cursor-pointer">
                            <summary className="font-bold text-slate-800">How is this data collected?</summary>
                            <p className="mt-2 text-slate-600 text-sm">Aggregated anonymized data from thousands of daily shifts managed via FNSG OS alongside verified public labor statistics.</p>
                        </details>
                        <details className="bg-white border border-slate-200 rounded-lg p-4 cursor-pointer">
                            <summary className="font-bold text-slate-800">Can I compare my facility data?</summary>
                            <p className="mt-2 text-slate-600 text-sm">Yes. Contact us to import your anonymized operational data into the benchmark model.</p>
                        </details>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="mt-12 p-8 bg-slate-900 rounded-xl text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">Get the Full Data Picture</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                            Download Full Benchmark PDF
                        </Link>
                        <Link href="/contact" className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                            Request a Georgia Workforce Briefing
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
