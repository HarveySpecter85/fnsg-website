import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';
import DemoLineChart from '@/app/components/charts/DemoLineChart';

export const metadata: Metadata = {
    title: "Warehouse & Logistics Workforce Forecast 2025 | FNSG",
    description: "Predictive analysis of Georgia’s warehouse and logistics labor market using real data for demand, wages, turnover, shift risk, NCNS patterns, and corridor-level insights.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/reports/warehouse-logistics-forecast-2025',
    },
    openGraph: {
        title: "Warehouse & Logistics Workforce Forecast 2025",
        description: "Predictive analysis of Georgia’s warehouse and logistics labor market using real data for demand, wages, turnover, shift risk, NCNS patterns, and corridor-level insights.",
        url: 'https://firstnationalstaffing.com/insights/reports/warehouse-logistics-forecast-2025',
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

const warehouseKpis = {
    demandForecastIndex: 72,
    wagePressureIndex: 58,
    shiftRiskIndex: 65,
    turnoverPressureIndex: 68
};

const warehouseCorridorSnapshot = [
    {
        name: "Gwinnett County",
        laborDemand: 76,
        wagePressure: 62,
        turnover: 70,
        shiftStability: 60,
        reasons: [
            "1,629+ warehouse jobs; unemployment 3.4%",
            "Primary I-85 distribution hub; 31,700 NE GA port-related jobs",
            "Moderate wage pressure; operator scarcity affects shift stability"
        ],
        trend: "↑"
    },
    {
        name: "Cobb County",
        laborDemand: 71,
        wagePressure: 60,
        turnover: 68,
        shiftStability: 62,
        reasons: [
            "783 warehouse jobs; FedEx expansion adding 400+ staff",
            "Unemployment 3.5%; stabilizing environment",
            "Established HR practices support stability"
        ],
        trend: "→"
    },
    {
        name: "Hall County",
        laborDemand: 64,
        wagePressure: 56,
        turnover: 62,
        shiftStability: 65,
        reasons: [
            "480 logistics jobs; Gainesville consolidation hub",
            "Higher unemployment (4.5-4.8%) reduces wage competition",
            "Best shift stability among smaller hubs"
        ],
        trend: "→"
    },
    {
        name: "South Fulton",
        laborDemand: 73,
        wagePressure: 64,
        turnover: 72,
        shiftStability: 58,
        reasons: [
            "1,500+ warehouse jobs; Amazon East Point/Lithia Springs",
            "Unemployment 4.3% → structural instability",
            "Highest NCNS (10-15%); lowest shift stability in Atlanta"
        ],
        trend: "↑"
    },
    {
        name: "Clayton County",
        laborDemand: 70,
        wagePressure: 61,
        turnover: 71,
        shiftStability: 59,
        reasons: [
            "1,500+ jobs; FedEx SmartPost 201K SF",
            "Unemployment 4.2% with higher friction churn",
            "Temp dependency challenges shift stability"
        ],
        trend: "↑"
    },
    {
        name: "Chatham / Savannah",
        laborDemand: 68,
        wagePressure: 59,
        turnover: 65,
        shiftStability: 63,
        reasons: [
            "Port of Savannah: 5.7M TEU; 23.4K jobs in Three Rivers",
            "42 double-stack trains weekly; 14K–16K truck moves/day",
            "Port wage floor ($25.78/hr) → best NCNS (4-7%)"
        ],
        trend: "↑"
    }
];

const predictiveInsights = {
    q4VolumeSurge: "2.3B packages (5% growth)",
    seasonalHiresGeorgia: "50-75K temp roles",
    wagePressureTimeline: "Aug-Oct 2025 bidding peak (65-75 index)",
    ncnsSpikeTriggers: "Post-peak Feb-Mar; Monday/Friday spikes"
};

const MetricCard = ({ label, value, trend, color = "blue" }: { label: string, value: string, trend?: 'up' | 'down' | 'stable', color?: string }) => (
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

export default function WarehouseLogisticsReport() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Warehouse & Logistics Workforce Forecast 2025",
        "description": "Predictive analysis of Georgia’s warehouse and logistics labor market using real data for demand, wages, turnover, shift risk, NCNS patterns, and corridor-level insights.",
        "url": "https://firstnationalstaffing.com/insights/reports/warehouse-logistics-forecast-2025",
        "image": "https://firstnationalstaffing.com/insights/reports/warehouse-logistics-forecast-2025/opengraph-image",
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

            {/* HERO */}
            <div className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="container mx-auto px-6 py-20 relative z-10 max-w-7xl">
                    <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Proprietary Forecast
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                        Warehouse & Logistics <br /><span className="text-blue-500">Workforce Forecast 2025</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                        Data-driven projections for Q3-Q4 demand, 3rd shift attendance risks, and competitive wage thresholds across Georgia's key distribution corridors.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8 max-w-7xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Reports', href: '/insights/reports' },
                    { label: 'Warehouse & Logistics Forecast', href: '/insights/reports/warehouse-logistics-forecast-2025' }
                ]} />

                {/* 1. KPI CARDS */}
                <div className="metrics-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
                    <MetricCard
                        label="Demand Forecast Index"
                        value={`${warehouseKpis.demandForecastIndex}/100`}
                        trend="up"
                        color="blue"
                    />
                    <MetricCard
                        label="Wage Pressure Index"
                        value={`${warehouseKpis.wagePressureIndex}/100`}
                        trend="stable"
                        color="orange"
                    />
                    <MetricCard
                        label="Shift Risk Index"
                        value={`${warehouseKpis.shiftRiskIndex}/100`}
                        trend="down"
                        color="red"
                    />
                    <MetricCard
                        label="Turnover Pressure"
                        value={`${warehouseKpis.turnoverPressureIndex}/100`}
                        trend="up"
                        color="purple"
                    />
                </div>

                {/* 5. CHART PLACEHOLDERS */}
                <div className="charts-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-72 flex flex-col">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Demand Forecast Q1–Q4</span>
                        <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            <div className="mt-4 border border-slate-200 rounded-lg p-4 bg-white">
                                <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Labor Demand Projection</h4>
                                <DemoLineChart />
                            </div>
                        </div>
                    </div>
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-72 flex flex-col">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Wage Pressure vs Turnover</span>
                        <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            <div className="mt-4 border border-slate-200 rounded-lg p-4 bg-white">
                                <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Wage Pressure Analysis</h4>
                                <DemoLineChart />
                            </div>
                        </div>
                    </div>
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-72 flex flex-col">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Shift Stability Heatmap</span>
                        <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            <div className="mt-4 border border-slate-200 rounded-lg p-4 bg-white">
                                <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Shift Stability Heatmap</h4>
                                <DemoLineChart />
                            </div>
                        </div>
                    </div>
                </div>

                {/* INSIGHT BLOCKS */}
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        {/* A) Executive Summary */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">A) Executive Summary</h2>
                            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                                <p>
                                    The 2025 outlook for Georgia's warehousing sector indicates a high <strong>Demand Forecast Index of {warehouseKpis.demandForecastIndex}</strong>,
                                    driven by continued e-commerce expansion and infrastructure projects near the Port of Savannah. However, operators face significant headwinds
                                    in workforce retention, with a <strong>Turnover Pressure Index of {warehouseKpis.turnoverPressureIndex}</strong> reflecting increased mobility
                                    among Tier 1 logistics talent.
                                </p>
                                <p className="mt-4">
                                    While Wage Pressure remains moderate (<strong>{warehouseKpis.wagePressureIndex}</strong>), the "Shift Risk Index" sits at <strong>{warehouseKpis.shiftRiskIndex}</strong>,
                                    highlighting vulnerability in 2nd and 3rd shift attendance. Strategic staffing partners must pivot from transactional headcount delivery to comprehensive
                                    "Shift Stability" models to maintain operational continuity through Q4 peaks.
                                </p>
                            </div>
                        </section>

                        {/* B) Key Findings */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">B) Key Findings</h2>
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="bg-blue-50 border border-blue-100 p-5 rounded-lg">
                                    <h3 className="text-blue-900 font-bold text-lg mb-2">Highest Volatility</h3>
                                    <p className="text-blue-800 text-sm">
                                        <strong>South Fulton Corridor</strong><br />
                                        Unemployment at 4.3% coupled with intense competition from Amazon hubs creates structural instability.
                                    </p>
                                </div>
                                <div className="bg-green-50 border border-green-100 p-5 rounded-lg">
                                    <h3 className="text-green-900 font-bold text-lg mb-2">Most Stable Hub</h3>
                                    <p className="text-green-800 text-sm">
                                        <strong>Hall County</strong><br />
                                        Smaller consolidation hubs and higher local unemployment (4.5%+) reduce wage competition.
                                    </p>
                                </div>
                                <div className="bg-orange-50 border border-orange-100 p-5 rounded-lg">
                                    <h3 className="text-orange-900 font-bold text-lg mb-2">Wage Floor</h3>
                                    <p className="text-orange-800 text-sm">
                                        <strong>Savannah Port Zone</strong><br />
                                        $25.78/hr minimums drive the best NCNS rates (4-7%) but raise entry costs.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 2. CORRIDOR SNAPSHOT TABLE */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">Corridor Performance Benchmark</h2>
                            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-slate-50 text-slate-700 text-xs uppercase font-bold tracking-wider">
                                        <tr>
                                            <th className="px-6 py-4 text-left">Corridor</th>
                                            <th className="px-6 py-4 text-center">Demand</th>
                                            <th className="px-6 py-4 text-center">Wages</th>
                                            <th className="px-6 py-4 text-center">Turnover</th>
                                            <th className="px-6 py-4 text-center">Stability</th>
                                            <th className="px-6 py-4 text-center">Trend</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-600">
                                        {warehouseCorridorSnapshot.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 text-slate-900 font-bold">{row.name}</td>
                                                <td className="px-6 py-4 text-center text-blue-600">{row.laborDemand}</td>
                                                <td className="px-6 py-4 text-center text-orange-500">{row.wagePressure}</td>
                                                <td className="px-6 py-4 text-center">{row.turnover}</td>
                                                <td className="px-6 py-4 text-center text-green-600">{row.shiftStability}</td>
                                                <td className="px-6 py-4 text-center font-bold text-slate-900">{row.trend}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* C) Corridor-by-Corridor Analysis */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">C) Corridor-by-Corridor Analysis</h2>
                            <div className="grid gap-6">
                                {warehouseCorridorSnapshot.map((corridor) => (
                                    <div key={corridor.name} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-slate-900">{corridor.name}</h3>
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${corridor.shiftStability < 60 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                                Stability Score: {corridor.shiftStability}
                                            </span>
                                        </div>
                                        <ul className="space-y-2">
                                            {corridor.reasons.map((reason, i) => (
                                                <li key={i} className="flex items-start text-sm text-slate-600">
                                                    <span className="text-blue-500 mr-2 mt-1">●</span>
                                                    <span>{reason}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* D & E) Wage & Turnover Analysis */}
                        <section className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">D) Wage Benchmarking</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Wage sensitivity is highly localized. In the <strong>Savannah</strong> zone, the port wage floor ($25.78/hr) creates a high barrier to entry for lighter logistics operations.
                                    Conversely, <strong>Hall County</strong> benefits from less aggressive wage competition, allowing for stability at closer to $18.50-$19.50/hr for general labor.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">E) Turnover & NCNS Patterns</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    <strong>South Fulton</strong> records the highest "No Call No Show" (NCNS) rates (10-15%), correlated directly with the density of warehouse options available to workers.
                                    <strong>Clayton County</strong> also shows high friction churn, driven by reliance on temporary labor models rather than temp-to-perm conversions.
                                </p>
                            </div>
                        </section>

                        {/* F) Predictive Workforce Insights */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">F) Predictive Workforce Insights</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <div className="text-xs font-bold text-slate-400 uppercase mb-1">Q4 Volume Surge Projection</div>
                                    <div className="text-lg font-bold text-slate-900">{predictiveInsights.q4VolumeSurge}</div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <div className="text-xs font-bold text-slate-400 uppercase mb-1">Seasonal Hires (GA)</div>
                                    <div className="text-lg font-bold text-slate-900">{predictiveInsights.seasonalHiresGeorgia}</div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <div className="text-xs font-bold text-slate-400 uppercase mb-1">Wage Pressure Peak</div>
                                    <div className="text-lg font-bold text-slate-900">{predictiveInsights.wagePressureTimeline}</div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <div className="text-xs font-bold text-slate-400 uppercase mb-1">NCNS Spike Triggers</div>
                                    <div className="text-lg font-bold text-slate-900">{predictiveInsights.ncnsSpikeTriggers}</div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="space-y-8">

                        {/* G) SAFETY INDICATORS */}
                        <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-red-900 mb-4">G) Safety & OSHA Risk</h3>
                            <div className="space-y-4">
                                <p className="text-sm text-red-800">
                                    Shift instability correlates directly with safety incidents. Turnover within the first 30 days increases incident risk by <strong>42%</strong>.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start text-xs text-red-800 font-medium">
                                        <span className="mr-2">⚠</span> Fatigue-related errors rise 15% during Q4 OT surges.
                                    </li>
                                    <li className="flex items-start text-xs text-red-800 font-medium">
                                        <span className="mr-2">⚠</span> Forklift certification verification lags in high-turnover corridors.
                                    </li>
                                </ul>
                            </div>
                        </div>


                        {/* H) STRATEGIC RECOMMENDATIONS */}
                        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-lg font-bold mb-4">H) Strategic Recommendations</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold text-blue-200 uppercase mb-2">Immediate (0-30 Days)</h4>
                                    <ul className="text-sm text-white space-y-1">
                                        <li>• Audit Q3 headcount requirements.</li>
                                        <li>• Implement "Arrival Bonus" for 100% first-week attendance.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-blue-200 uppercase mb-2">Short-Term (Q3)</h4>
                                    <ul className="text-sm text-white space-y-1">
                                        <li>• Lock in shift differentials for 2nd/3rd shifts now.</li>
                                        <li>• Secure "Backup Bench" of pre-vetted labor (10% overage).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-blue-200 uppercase mb-2">Long-Term (2026)</h4>
                                    <ul className="text-sm text-white space-y-1">
                                        <li>• Transition to Total Talent Management OS.</li>
                                        <li>• Build "Flex-Pool" internal retention programs.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-blue-500/30">
                                <Link href="/solutions/peak-season-deployment-os" className="block w-full text-center py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                                    Active Peak Season OS
                                </Link>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="text-gray-900 font-bold mb-2">Custom Facility Audit</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Compare your specific facility's turnover and wage data against the 2025 benchmark.
                            </p>
                            <Link href="/contact" className="text-blue-600 font-bold text-sm hover:underline">
                                Request Audit &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Methodology Footer */}
                <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-500 text-xs">
                    <p>Data sourced from proprietary FNSG OS placement analytics, BLS regional files, and privacy-compliant client benchmarking.</p>
                </div>
            </div>
        </main>
    );
}
