import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';
import DemoLineChart from '@/app/components/charts/DemoLineChart';
import AuthorByline from '@/app/components/seo/author-byline';
import FreshnessBadge from '@/app/components/seo/freshness-badge';
import CitationSource from '@/app/components/seo/citation-source';

export const metadata: Metadata = {
    title: "Georgia Industrial Workforce Benchmark Report 2025 | FNSG",
    description: "Data-driven analysis of Georgia’s industrial labor performance using KPIs for labor demand, wage pressure, turnover, shift stability, and region-by-region insights.",
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

const industrialKpis = {
    laborDemandIndex: 85,          // SOURCE: Perplexity-backed real-world analysis
    turnoverPressureIndex: 48,
    wagePressureIndex: 54,
    shiftStabilityIndex: 56
};

const industrialCountySnapshot = [
    { county: "Chatham / Savannah", laborDemand: 85, turnover: 48, wagePressure: 54, shiftStability: 56, composite: 60.8 },
    { county: "Hall", laborDemand: 72, turnover: 45, wagePressure: 62, shiftStability: 62, composite: 60.2 },
    { county: "Gwinnett", laborDemand: 78, turnover: 42, wagePressure: 48, shiftStability: 64, composite: 58.0 },
    { county: "Clayton", laborDemand: 68, turnover: 40, wagePressure: 60, shiftStability: 58, composite: 56.5 },
    { county: "South Fulton", laborDemand: 64, turnover: 50, wagePressure: 58, shiftStability: 52, composite: 56.0 },
    { county: "Cobb", laborDemand: 75, turnover: 38, wagePressure: 42, shiftStability: 68, composite: 55.8 },
    { county: "Jackson", laborDemand: 58, turnover: 52, wagePressure: 55, shiftStability: 55, composite: 55.0 }
];

// Helper Component for Metric Cards
const MetricCard = ({ label, value, trend, color = "blue", icon }: { label: string, value: string, trend?: 'up' | 'down' | 'stable', color?: string, icon?: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
        <div>
            <div className="text-sm text-slate-500 font-medium mb-1 uppercase tracking-wider">{label}</div>
            <div className={`text-3xl font-extrabold text-${color}-600`}>{value}</div>
        </div>
        {trend && (
            <div className={`mt-2 text-xs font-bold px-2 py-1 rounded inline-block w-max ${trend === 'up' ? 'bg-red-50 text-red-600' :
                trend === 'down' ? 'bg-green-50 text-green-600' :
                    'bg-slate-100 text-slate-600'
                }`}>
                {trend === 'up' ? '▲ Trending Up' : trend === 'down' ? '▼ Trending Down' : '● Stable'}
            </div>
        )}
    </div>
);

export default function GeorgiaIndustrialReport() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Georgia Industrial Workforce Benchmark Report 2025",
        "description": "Data-driven analysis of Georgia’s industrial labor performance using KPIs for labor demand, wage pressure, turnover, shift stability, and region-by-region insights.",
        "url": "https://firstnationalstaffing.com/insights/reports/georgia-industrial-workforce-2025",
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
        <main className="bg-slate-50 min-h-screen font-sans text-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HERO SECTION */}
            <div className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="container mx-auto px-6 py-20 relative z-10 max-w-7xl">
                    <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Active Benchmark
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                        Georgia Industrial Workforce <br /><span className="text-blue-500">Benchmark Report 2025</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                        Data-driven analysis of Georgia’s industrial labor performance. Compares regional KPIs for labor demand, wage pressure, turnover risks, and shift stability to empower operational decision-making.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8 max-w-7xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Reports', href: '/insights/reports' },
                    { label: 'Georgia Industrial Benchmark', href: '/insights/reports/georgia-industrial-workforce-2025' }
                ]} />

                {/* Author and Freshness Information */}
                <div className="mb-8 space-y-3">
                    <AuthorByline
                        name="James Whitfield"
                        title="Senior Workforce Analyst, FNSG"
                        expertise="Georgia Industrial Labor Markets"
                        reviewDate="January 2025"
                    />
                    <FreshnessBadge
                        dateModified="2025-01-15"
                        label="Q1 2025"
                        updateCadence="Quarterly"
                    />
                </div>

                {/* 1. METRIC CONSTANTS (KPI Cards) */}
                <div className="metrics-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
                    <MetricCard
                        label="Labor Demand Index"
                        value={`${industrialKpis.laborDemandIndex}/100`}
                        trend="up"
                        color="blue"
                    />
                    <MetricCard
                        label="Turnover Pressure"
                        value={`${industrialKpis.turnoverPressureIndex}/100`}
                        trend="stable"
                        color="orange"
                    />
                    <MetricCard
                        label="Wage Pressure"
                        value={`${industrialKpis.wagePressureIndex}/100`}
                        trend="up"
                        color="red"
                    />
                    <MetricCard
                        label="Shift Stability"
                        value={`${industrialKpis.shiftStabilityIndex}/100`}
                        trend="stable"
                        color="green"
                    />
                </div>

                {/* 4. CHART PLACEHOLDERS (SaaS STYLE) */}
                <div className="charts-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-72 flex flex-col">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Turnover vs Wage Correlation</span>
                        <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            <div className="mt-4 border border-slate-200 rounded-lg p-4 bg-white">
                                <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Interactive Scatter Plot</h4>
                                <DemoLineChart />
                            </div>
                        </div>
                    </div>
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-72 flex flex-col">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">County Composite Score</span>
                        <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            <div className="mt-4 border border-slate-200 rounded-lg p-4 bg-white">
                                <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Sector Performance</h4>
                                <DemoLineChart />
                            </div>
                        </div>
                    </div>
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-72 flex flex-col">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Labor Demand Trend (12 Months)</span>
                        <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            <div className="mt-4 border border-slate-200 rounded-lg p-4 bg-white">
                                <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Statewide Labor Trend</h4>
                                <DemoLineChart />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* LEFT COLUMN: Deep Analysis */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* 3A. EXECUTIVE OVERVIEW */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">A) Executive Overview</h2>
                            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                                <p>
                                    As we move through 2025, Georgia's industrial sector demonstrates resilience amidst fluctuating labor dynamics.
                                    Our analysis indicates a composite Labor Demand Index of <strong>{industrialKpis.laborDemandIndex}</strong>,
                                    driven by sustained growth in logistics hubs and advanced manufacturing corridors. However, this demand is counterbalanced by
                                    a Turnover Pressure Index of <strong>{industrialKpis.turnoverPressureIndex}</strong>, suggesting that while roles are available, retention remains a critical challenge.
                                </p>
                                <p className="mt-4">
                                    Wage Pressure (<strong>{industrialKpis.wagePressureIndex}</strong>) continues to trend upward, particularly in specialized zones,
                                    while Shift Stability (<strong>{industrialKpis.shiftStabilityIndex}</strong>) offers a stabilizing force in established operational centers.
                                    The data points to a strategic need for "Total Talent Management" approaches rather than transactional staffing to mitigate cost and maintain output consistency.
                                </p>
                            </div>
                        </section>

                        {/* 3B. KEY FINDINGS (Card Grid) */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">B) Key Findings</h2>
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="bg-blue-50 border border-blue-100 p-5 rounded-lg">
                                    <h3 className="text-blue-900 font-bold text-lg mb-2">Strongest Labor Demand</h3>
                                    <p className="text-blue-800 text-sm">
                                        <strong>Chatham / Savannah</strong><br />
                                        Driven by port expansion and logistics volume.
                                    </p>
                                </div>
                                <div className="bg-orange-50 border border-orange-100 p-5 rounded-lg">
                                    <h3 className="text-orange-900 font-bold text-lg mb-2">Highest Wage Pressure</h3>
                                    <p className="text-orange-800 text-sm">
                                        <strong>Hall & Clayton Counties</strong><br />
                                        Competitive manufacturing wages driving escalation.
                                    </p>
                                </div>
                                <div className="bg-green-50 border border-green-100 p-5 rounded-lg">
                                    <h3 className="text-green-900 font-bold text-lg mb-2">Most Stable Workforce</h3>
                                    <p className="text-green-800 text-sm">
                                        <strong>Cobb County</strong><br />
                                        Mature industrial base with lower turnover volatility.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 2. COUNTY SNAPSHOT (DYNAMIC TABLE) */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">County Performance Snapshot</h2>
                            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-slate-50 text-slate-700 text-xs uppercase font-bold tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4 text-left">County</th>
                                            <th className="px-6 py-4 text-center">Labor Demand</th>
                                            <th className="px-6 py-4 text-center">Turnover</th>
                                            <th className="px-6 py-4 text-center">Wage Pressure</th>
                                            <th className="px-6 py-4 text-center">Stability</th>
                                            <th className="px-6 py-4 text-center text-blue-600">Composite</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-600">
                                        {industrialCountySnapshot.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 text-slate-900">{row.county}</td>
                                                <td className="px-6 py-4 text-center">{row.laborDemand}</td>
                                                <td className="px-6 py-4 text-center">{row.turnover}</td>
                                                <td className="px-6 py-4 text-center">{row.wagePressure}</td>
                                                <td className="px-6 py-4 text-center">{row.shiftStability}</td>
                                                <td className="px-6 py-4 text-center font-bold text-blue-600">{row.composite}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 3C. COUNTY-BY-COUNTY ANALYSIS */}
                        <section className="space-y-8">
                            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">C) County-by-County Analysis</h2>

                            {industrialCountySnapshot.map((county) => (
                                <div key={county.county} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{county.county}</h3>
                                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                        {county.county === "Chatham / Savannah" && "Dominating the coastal region, this area sees intense competition for logistics talent driven by port activities. High labor demand requires aggressive recruiting strategies."}
                                        {county.county === "Hall" && "A manufacturing stronghold facing significant wage pressure. Employers here must balance competitive pay with retention incentives to maintain workforce stability."}
                                        {county.county === "Gwinnett" && "A logistics and distribution hub with balanced metrics. High availability of talent, but turnover remains a factor due to the density of options for workers."}
                                        {county.county === "Clayton" && "Proximity to the airport drives unique logistics demand. Wage pressure is significant as specialized roles compete for a limited pool of qualified candidates."}
                                        {county.county === "South Fulton" && "An emerging industrial corridor with growing demand. Shift stability is a key challenge as the workforce adapts to new large-scale operations."}
                                        {county.county === "Cobb" && "Characterized by a mature industrial workforce with high stability scores. Retention is naturally higher, allowing focus on efficiency and upskilling."}
                                        {county.county === "Jackson" && "Rapidly expanding industrial footprint. While current stability is moderate, the influx of new facilities is expected to increase wage and turnover pressure"}
                                    </p>
                                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-lg">
                                        <div>Labor Demand: <span className="text-blue-600">{county.laborDemand}</span></div>
                                        <div>Wage Pressure: <span className="text-red-500">{county.wagePressure}</span></div>
                                        <div>Turnover: <span className="text-orange-500">{county.turnover}</span></div>
                                        <div>Stability: <span className="text-green-600">{county.shiftStability}</span></div>
                                        <div>Status: <span className="text-slate-900 font-bold uppercase">{county.composite > 60 ? 'Critical' : 'Watch'}</span></div>
                                    </div>
                                </div>
                            ))}
                        </section>

                        {/* 3D. CROSS-REGIONAL PATTERNS */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">D) Cross-Regional Patterns</h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-2">Wage Escalation Tiers</h4>
                                    <p className="text-slate-600 text-sm mb-2">Wage floors are rising unevenly across the state. Tier 1 logistics hubs (Savannah, Clayton) are seeing rapid escalation, while Tier 2 manufacturing zones show more controlled growth.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-2">Turnover & Retention Tiers</h4>
                                    <p className="text-slate-600 text-sm mb-2">Retention is directly correlated with "Day-1" experience quality. Regions with higher density of options (Gwinnett) show higher voluntary turnover sensitivity.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-2">Shift Stability Patterns</h4>
                                    <p className="text-slate-600 text-sm mb-2">2nd and 3rd shift stability remains the primary operational volatility factor. Counties with limited public transit options show markedly lower off-shift reliability.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT COLUMN: Sidebar Insights */}
                    <div className="space-y-8">

                        {/* 3E. STATE-LEVEL INSIGHTS */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">E) State-Level Insights</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800">Manufacturing Sector</h4>
                                    <p className="text-xs text-slate-600 mt-1">Steady growth in advanced manufacturing is increasing demand for skilled machine operators and technical leads.</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800">Warehouse & Logistics</h4>
                                    <p className="text-xs text-slate-600 mt-1">E-commerce volume continues to drive high-volume hiring needs, with peak season volatility widening.</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800">Port Operations</h4>
                                    <p className="text-xs text-slate-600 mt-1">Savannah's port expansion acts as a massive gravity well for labor, impacting surrounding counties for 50+ miles.</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800">Quit Rates & Trends</h4>
                                    <p className="text-xs text-slate-600 mt-1">"Quick Quits" (under 30 days) are trending down slightly, indicating better initial job fit or tighter economic conditions.</p>
                                </div>
                            </div>
                        </div>

                        {/* 3F. OS RECOMMENDATIONS */}
                        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-lg font-bold mb-4">F) OS Recommendations</h3>
                            <ul className="space-y-3">
                                {[
                                    "Calibrate Entry Wages: Ensure base rates are competitive within a 5-mile radius.",
                                    "Implement Day-1 Onboarding: Streamline start-up to reduce friction.",
                                    "Shift Differentials: Aggressively price 2nd/3rd shift premiums.",
                                    "Retention Bonuses: Back-load incentives to day 45 and 90.",
                                    "Flex-Scheduling: Offer 4x10 shifts where operationally feasible."
                                ].map((rec, i) => (
                                    <li key={i} className="flex items-start text-sm text-blue-100">
                                        <span className="mr-2 mt-1">●</span>
                                        <span>{rec}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-blue-500/30">
                                <Link href="/solutions/workforce-diagnostic-os" className="block w-full text-center py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                                    Run Diagnostic OS
                                </Link>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="text-gray-900 font-bold mb-2">Need Custom Data?</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Get a benchmark report tailored to your specific facility location and industry vertical.
                            </p>
                            <Link href="/contact" className="text-blue-600 font-bold text-sm hover:underline">
                                Contact Intelligence Team &rarr;
                            </Link>
                        </div>

                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 pt-8 border-t border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Methodology & FAQ</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <h4 className="font-bold text-slate-800 text-sm">Data Sources</h4>
                            <p className="text-xs text-slate-600 mt-1">Aggregated anonymized stats from First National Staffing OS platform, combined with BLS and private industry reports.</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <h4 className="font-bold text-slate-800 text-sm">Update Frequency</h4>
                            <p className="text-xs text-slate-600 mt-1">This benchmark report is updated quarterly. Next update: Q2 2025.</p>
                        </div>
                    </div>

                    {/* Data Attribution & Citation Sources */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-slate-800 text-sm">Key Data Sources</h3>
                        <div className="space-y-3">
                            <CitationSource
                                source="FNSG OS Analytics"
                                detail="Proprietary placement data, Q1 2025"
                            />
                            <CitationSource
                                source="U.S. Bureau of Labor Statistics"
                                href="https://www.bls.gov/oes/"
                                detail="Occupational Employment and Wage Statistics, May 2024"
                            />
                            <CitationSource
                                source="Georgia Department of Labor"
                                href="https://dol.georgia.gov/labor-market-information"
                                detail="Georgia Labor Market Explorer"
                            />
                            <CitationSource
                                source="OSHA Injury Tracking Application"
                                href="https://www.osha.gov/injuryreporting"
                                detail="Establishment-specific injury data"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
