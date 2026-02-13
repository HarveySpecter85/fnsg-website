import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';
import DemoLineChart from '@/app/components/charts/DemoLineChart';
import AuthorByline from '@/app/components/seo/author-byline';
import FreshnessBadge from '@/app/components/seo/freshness-badge';
import CitationSource from '@/app/components/seo/citation-source';

export const metadata: Metadata = {
    title: "Manufacturing Turnover & Stability Report 2025 | FNSG",
    description: "Data-backed analysis of Georgia manufacturing turnover, wage pressure, skill shortages, OSHA risk, shift stability and EV/battery-driven labor dynamics.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/reports/manufacturing-turnover-2025',
    },
    openGraph: {
        title: "Manufacturing Turnover & Stability Report 2025",
        description: "Data-backed analysis of Georgia manufacturing turnover, wage pressure, skill shortages, OSHA risk, shift stability and EV/battery-driven labor dynamics.",
        url: 'https://firstnationalstaffing.com/insights/reports/manufacturing-turnover-2025',
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

const manufacturingKpis = {
    demandForecastIndex: 82,      // Demand Forecast
    skillShortageIndex: 78,       // Skill Shortage
    turnoverPressureIndex: 72,    // Turnover Pressure
    wagePressureIndex: 65,        // Wage Pressure
    oshaRiskIndex: 62,            // OSHA Risk
    shiftReliabilityIndex: 58     // Shift Stability
};

const manufacturingCountySnapshot = [
    {
        name: "Hall",
        turnoverPressure: 76,
        wagePressure: 68,
        skillShortage: 74,
        shiftStability: 55,
        oshaRisk: 68,
        avgWeeklyWage: 1263,
        trend: "↑",
        reasons: [
            "Food processing baseline 36% turnover; poultry drives seasonal surges and NCNS",
            "Port connectivity and upcoming Blue Ridge Connector stress scheduling but improve logistics",
            "Skill shortage in QA/food safety and maintenance; EV expansion pulls talent"
        ]
    },
    {
        name: "Jackson",
        turnoverPressure: 74,
        wagePressure: 62,
        skillShortage: 76,
        shiftStability: 52,
        oshaRisk: 66,
        avgWeeklyWage: 1007,
        trend: "↑↑",
        reasons: [
            "SK Battery and EV supply chain created +4,100 mfg jobs (2019-2023)",
            "Shift reliability challenged by SK ramp and poultry seasonal demand",
            "Moderate wage level but critical supply chain talent shortage"
        ]
    },
    {
        name: "Chatham / Savannah",
        turnoverPressure: 72,
        wagePressure: 66,
        skillShortage: 70,
        shiftStability: 58,
        oshaRisk: 68,
        avgWeeklyWage: 1234,
        trend: "↑",
        reasons: [
            "Port expansion ($4.5B) drives manufacturing growth (Plastic Express, others)",
            "Wages +4.0% YoY; battery facility will shift skill demand to EV tech roles",
            "Shift reliability challenged by port cycles; Blue Ridge Connector improves routing"
        ]
    },
    {
        name: "Clayton",
        turnoverPressure: 70,
        wagePressure: 68,
        skillShortage: 72,
        shiftStability: 56,
        oshaRisk: 62,
        avgWeeklyWage: 1792,
        trend: "↓",
        reasons: [
            "Employment -2.3% YoY despite highest wage growth (+5.6%)",
            "Hybrid mfg/fulfillment environment creates scheduling complexity and burnout",
            "Wage escalation reflects retention desperation; churn remains high"
        ]
    },
    {
        name: "Barrow",
        turnoverPressure: 68,
        wagePressure: 60,
        skillShortage: 70,
        shiftStability: 60,
        oshaRisk: 64,
        avgWeeklyWage: 1045,
        trend: "↑",
        reasons: [
            "Corridor in expansión con 1,085 ofertas; wire production y light assembly",
            "Wage pressure moderado; mantenimiento es el cuello de botella",
            "Rural labor pool limita candidatos; crecimiento pero capacidad de reclutamiento tensa"
        ]
    },
    {
        name: "Gwinnett",
        turnoverPressure: 64,
        wagePressure: 72,
        skillShortage: 72,
        shiftStability: 62,
        oshaRisk: 60,
        avgWeeklyWage: 1345,
        trend: "→",
        reasons: [
            "Base manufacturera diversa (electronics, aerospace, automotive supply)",
            "Skilled trades con 12-18% turnover y altos salarios ($24.50-$38/hr)",
            "Talento se fuga hacia logística/tech si no hay programas de desarrollo claros"
        ]
    },
    {
        name: "Cobb",
        turnoverPressure: 58,
        wagePressure: 75,
        skillShortage: 68,
        shiftStability: 68,
        oshaRisk: 58,
        avgWeeklyWage: 1609,
        trend: "→",
        reasons: [
            "Mayor salario semanal ($1,609); aerospace y precisión sostienen estabilidad",
            "Wage growth +0.5% indica equilibrio; riesgo de retención si otros condados aceleran",
            "Perfil de riesgo OSHA más bajo por automatización avanzada"
        ]
    }
];

const manufacturingWageBenchmarks = {
    georgiaState: {
        hourlyRate: 21.06,
        weeklyWage: 843,
        annualSalary: 43815,
        p75Hourly: 24.38,
        p25Hourly: 17.07
    },
    countyRankings: {
        highest: "Clayton County – $1,792/week",
        lowest: "Jackson County – $1,007/week",
        wageSpread: "$785/week (78% variance)"
    }
};

const MetricCard = ({ label, value, trend, color = "blue", suffix }: { label: string, value: string, trend?: 'up' | 'down' | 'stable', color?: string, suffix?: string }) => (
    <div className="bg-white p-4 lg:p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
        <div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">{label}</div>
            <div className={`text-2xl lg:text-3xl font-extrabold text-${color}-600 break-words`}>{value}{suffix}</div>
        </div>
        {trend && (
            <div className={`mt-2 text-xs font-bold px-2 py-1 rounded inline-block w-max ${trend === 'up' ? 'bg-red-50 text-red-600' :
                trend === 'down' ? 'bg-green-50 text-green-600' :
                    'bg-slate-100 text-slate-600'
                }`}>
                {trend === 'up' ? '▲ High' : trend === 'down' ? '▼ Low' : '● Stable'}
            </div>
        )}
    </div>
);

export default function ManufacturingTurnoverReport() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Manufacturing Turnover & Workforce Stability Report 2025 (Georgia)",
        "description": "Data-backed analysis of Georgia manufacturing turnover, wage pressure, skill shortages, OSHA risk, shift stability and EV/battery-driven labor dynamics.",
        "url": "https://firstnationalstaffing.com/insights/reports/manufacturing-turnover-2025",
        "image": "https://firstnationalstaffing.com/insights/reports/manufacturing-turnover-2025/opengraph-image",
        "inLanguage": "en",
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
                        2025 Analysis
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                        Manufacturing Turnover & <br /><span className="text-blue-500">Workforce Stability Report</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                        Analyzing early-stage attrition, skill gap impacts, and retention strategies for production environments in Georgia's EV and industrial corridors.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8 max-w-7xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Reports', href: '/insights/reports' },
                    { label: 'Manufacturing Stability', href: '/insights/reports/manufacturing-turnover-2025' }
                ]} />

                {/* Author and Freshness Information */}
                <div className="mb-8 space-y-3">
                    <AuthorByline
                        name="James Whitfield"
                        title="Senior Workforce Analyst, FNSG"
                        expertise="Manufacturing Retention Analytics"
                        reviewDate="March 2025"
                    />
                    <FreshnessBadge
                        dateModified="2025-03-01"
                        label="March 2025"
                        updateCadence="Quarterly"
                    />
                </div>

                {/* 1. KPI DASHBOARD */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-8">
                    <MetricCard label="Demand Forecast" value={`${manufacturingKpis.demandForecastIndex}/100`} color="blue" />
                    <MetricCard label="Skill Shortage" value={`${manufacturingKpis.skillShortageIndex}/100`} color="red" />
                    <MetricCard label="Turnover Pressure" value={`${manufacturingKpis.turnoverPressureIndex}/100`} color="orange" />
                    <MetricCard label="Wage Pressure" value={`${manufacturingKpis.wagePressureIndex}/100`} color="yellow" />
                    <MetricCard label="OSHA Risk" value={`${manufacturingKpis.oshaRiskIndex}/100`} color="slate" />
                    <MetricCard label="Shift Reliability" value={`${manufacturingKpis.shiftReliabilityIndex}/100`} color="green" />
                </div>

                {/* 8. EXECUTIVE SUMMARY */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">A) Executive Summary</h2>
                    <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed bg-white p-6 rounded-xl border border-slate-200">
                        <p>
                            Georgia's manufacturing sector enters 2025 with robust demand (Index: <strong>{manufacturingKpis.demandForecastIndex}</strong>) driven
                            by the rapid expansion of the EV supply chain and port-related logistics. However, this growth exposes a critical
                            <strong> Skill Shortage (Index: {manufacturingKpis.skillShortageIndex})</strong>, particularly in technical maintenance and QA roles.
                        </p>
                        <p className="mt-4">
                            Turnover pressure remains high (<strong>{manufacturingKpis.turnoverPressureIndex}</strong>), exacerbated by competitive wage bidding in key corridors
                            like Jackson and Hall counties. The data suggests that while "buying talent" with wage increases offers temporary relief, sustainable stability
                            requires structural changes to shift scheduling, onboarding ("Day-1") experiences, and defined career pathways for technical trades.
                        </p>
                    </div>
                </section>

                {/* 9. CHART PLACEHOLDERS */}
                <div className="charts-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-72 flex flex-col">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">KPI Index Analysis</span>
                        <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            <div className="mt-4 border border-slate-200 rounded-lg p-4 bg-white">
                                <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Turnover Rate Analysis</h4>
                                <DemoLineChart />
                            </div>
                        </div>
                    </div>
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-72 flex flex-col">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">GA County Metrics</span>
                        <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            <div className="mt-4 border border-slate-200 rounded-lg p-4 bg-white">
                                <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Regional Turnover Map</h4>
                                <DemoLineChart />
                            </div>
                        </div>
                    </div>
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-72 flex flex-col">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Turnover vs Wage Trend</span>
                        <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            <div className="mt-4 border border-slate-200 rounded-lg p-4 bg-white">
                                <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Retention vs. Pay</h4>
                                <DemoLineChart />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">

                        {/* 2. COUNTY SNAPSHOT TABLE */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">County Performance Benchmark</h2>
                            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-slate-50 text-slate-700 text-xs uppercase font-bold tracking-wider">
                                        <tr>
                                            <th className="px-4 py-4 text-left">County</th>
                                            <th className="px-4 py-4 text-center">Turnover</th>
                                            <th className="px-4 py-4 text-center">Wages</th>
                                            <th className="px-4 py-4 text-center">Skills Gap</th>
                                            <th className="px-4 py-4 text-center">Stability</th>
                                            <th className="px-4 py-4 text-center">Avg Wage</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-600">
                                        {manufacturingCountySnapshot.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-4 py-4 text-slate-900 font-bold">{row.name}</td>
                                                <td className="px-4 py-4 text-center text-red-500">{row.turnoverPressure}</td>
                                                <td className="px-4 py-4 text-center text-orange-500">{row.wagePressure}</td>
                                                <td className="px-4 py-4 text-center text-purple-600">{row.skillShortage}</td>
                                                <td className="px-4 py-4 text-center text-green-600">{row.shiftStability}</td>
                                                <td className="px-4 py-4 text-center text-slate-900">${row.avgWeeklyWage}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Detailed County Assessment */}
                            <div className="mt-8 space-y-6">
                                {manufacturingCountySnapshot.map((county) => (
                                    <div key={county.name} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-lg font-bold text-slate-900">{county.name} County Insights</h3>
                                            <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">Trend: {county.trend}</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {county.reasons.map((r, i) => (
                                                <li key={i} className="flex items-start text-sm text-slate-600">
                                                    <span className="text-blue-500 mr-2 mt-1">●</span>
                                                    <span>{r}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 4. TURNOVER & NCNS INSIGHTS */}
                        <section className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Turnover & Retention Dynamics</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-3">Primary Turnover Drivers</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>1. <strong>Wage Competition:</strong> $0.50/hr variances trigger exit.</li>
                                        <li>2. <strong>Shift Fatigue:</strong> Mandatory OT burns out new hires.</li>
                                        <li>3. <strong>Onboarding Friction:</strong> "Day-1" confusion leads to "Quick Quits".</li>
                                        <li>4. <strong>Leadership Gap:</strong> Untrained line leads increase friction.</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
                                    <h4 className="font-bold text-blue-900 mb-2">Effective Retention Bundle</h4>
                                    <p className="text-xs text-blue-800 mb-4">Implementing these combined strategies reduces voluntary turnover by 35-45%:</p>
                                    <ul className="space-y-2 text-xs font-semibold text-blue-700">
                                        <li>✓ 4x10 Flexible Scheduling options</li>
                                        <li>✓ Weekly Paid Orientation (Pre-floor)</li>
                                        <li>✓ 30-60-90 Day Retention Bonus Structure</li>
                                        <li>✓ Clear Tiered Skill Progression</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 7. OUTLOOK 2025-2027 */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">Outlook 2025–2027</h2>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-2">Supply Chain Reshoring & EV</h4>
                                    <p className="text-sm text-slate-600 mb-2">The completion of battery plants along the I-85 corridor creates a permanent demand shelf for electro-mechanical technicians, permanently raising the wage floor for skilled maintenance roles.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-2">Food Production Resilience</h4>
                                    <p className="text-sm text-slate-600 mb-2">Poultry and food processing hubs (Hall, Jackson) will continue to rely on seasonal influxes. Automation initiatives will slowly reduce headcount dependence but increase the skill requirement for operators.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-2">Scheduling & Overtime</h4>
                                    <p className="text-sm text-slate-600 mb-2">The standard 5x8 shift is becoming obsolete in high-volume production. Forecasts suggest 60% of facilities will move to 2-2-3 or 4x10 rotating schedules to accommodate workforce preferences.</p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="space-y-8">

                        {/* 3. WAGE BENCHMARKS */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Wage Benchmarks (2025)</h3>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                                    <span className="text-slate-600">GA State Avg Hourly</span>
                                    <span className="font-bold text-slate-900">${manufacturingWageBenchmarks.georgiaState.hourlyRate}</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                                    <span className="text-slate-600">75th Percentile</span>
                                    <span className="font-bold text-green-600">${manufacturingWageBenchmarks.georgiaState.p75Hourly}</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                                    <span className="text-slate-600">Highest County (Clayton)</span>
                                    <span className="font-bold text-slate-900">$1,792/wk</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                                    <span className="text-slate-600">Lowest County (Jackson)</span>
                                    <span className="font-bold text-slate-900">$1,007/wk</span>
                                </div>
                            </div>
                            <h4 className="text-xs font-bold uppercase text-slate-400 mb-3">Role-Specific Premiums</h4>
                            <ul className="space-y-2 text-xs text-slate-700">
                                <li className="flex justify-between"><span>CNC Operator</span> <span className="font-bold">$22 - $28</span></li>
                                <li className="flex justify-between"><span>Maintenance Tech</span> <span className="font-bold">$28 - $35</span></li>
                                <li className="flex justify-between"><span>QA/QC Tech</span> <span className="font-bold">$19 - $24</span></li>
                                <li className="flex justify-between"><span>General Labor</span> <span className="font-bold">$16 - $19</span></li>
                            </ul>
                        </div>

                        {/* 5. SKILL SHORTAGE */}
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h3 className="text-lg font-bold text-red-900 mb-4">Critical Skill Shortages</h3>
                            <div className="space-y-3">
                                <div className="bg-white p-3 rounded shadow-sm border border-red-100">
                                    <div className="text-xs font-bold text-red-600 uppercase">Maintenance Techs</div>
                                    <p className="text-xs text-slate-600 mt-1">Severe gap. Avg time to fill: 45+ days. Competition from EV plants is draining talent pool.</p>
                                </div>
                                <div className="bg-white p-3 rounded shadow-sm border border-red-100">
                                    <div className="text-xs font-bold text-red-600 uppercase">Line Snr. Leaders</div>
                                    <p className="text-xs text-slate-600 mt-1">Key retention point. Weak leadership increases operator turnover by 20%.</p>
                                </div>
                                <div className="bg-white p-3 rounded shadow-sm border border-red-100">
                                    <div className="text-xs font-bold text-red-600 uppercase">QA/QC Specialists</div>
                                    <p className="text-xs text-slate-600 mt-1">High demand in food & pharma corridors. Certifications are the bottleneck.</p>
                                </div>
                            </div>
                        </div>

                        {/* 6. SAFETY & OSHA */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Safety & OSHA Risk</h3>
                            <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg mb-4">
                                <p className="text-xs text-orange-800 font-bold">
                                    ⚠ Maintenance roles face 40% higher injury risk than production — justifying wage premiums.
                                </p>
                            </div>
                            <ul className="space-y-2 text-xs text-slate-600">
                                <li>• <strong>Common Injuries:</strong> Repetitive Motion, Slips/Trips, Machine Guarding gaps.</li>
                                <li>• <strong>New Hire Risk:</strong> 3x higher incident rate in first 6 months.</li>
                            </ul>
                        </div>

                        {/* 8. RECOMMENDATIONS */}
                        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-lg font-bold mb-4">Strategic Actions</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold text-blue-200 uppercase mb-1">Immediate (Q1-Q2)</h4>
                                    <ul className="text-xs text-blue-50 ml-2 space-y-1">
                                        <li>• Audit entry wages against local corridor.</li>
                                        <li>• Launch "Quick-Start" bonuses.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-blue-200 uppercase mb-1">Medium Term</h4>
                                    <ul className="text-xs text-blue-50 ml-2 space-y-1">
                                        <li>• Upskill Line Leads on retention soft skills.</li>
                                        <li>• Implement flexible shift options.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-blue-200 uppercase mb-1">Long Term</h4>
                                    <ul className="text-xs text-blue-50 ml-2 space-y-1">
                                        <li>• Automate routine material handling.</li>
                                        <li>• Build internal apprenticeship tracks.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-blue-500/30">
                                <Link href="/contact" className="block w-full text-center py-2 bg-white text-blue-900 font-bold text-sm rounded hover:bg-blue-50 transition-colors">
                                    Get Full Strategy Map
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-slate-200">

                    {/* Data Attribution & Citation Sources */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-slate-800 text-sm">Key Data Sources</h3>
                        <div className="space-y-3">
                            <CitationSource
                                source="FNSG OS Analytics"
                                detail="Proprietary market surveys and placement data, March 2025"
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
