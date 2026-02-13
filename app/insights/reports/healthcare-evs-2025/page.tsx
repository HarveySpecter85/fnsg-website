import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';
import DemoLineChart from '@/app/components/charts/DemoLineChart';
import AuthorByline from '@/app/components/seo/author-byline';
import FreshnessBadge from '@/app/components/seo/freshness-badge';
import CitationSource from '@/app/components/seo/citation-source';

export const metadata: Metadata = {
    title: "Healthcare & EVS Workforce Report 2025 | FNSG",
    description: "Turnover, wage pressure, compliance burden, OSHA risk, shift stability and demand forecast insights across EVS and healthcare support roles in Georgia.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/reports/healthcare-evs-2025',
    },
    openGraph: {
        title: "Healthcare & EVS Workforce Report 2025",
        description: "Turnover, wage pressure, compliance burden, OSHA risk, shift stability and demand forecast insights across EVS and healthcare support roles in Georgia.",
        url: 'https://firstnationalstaffing.com/insights/reports/healthcare-evs-2025',
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

const evsKpis = {
    turnoverPressureIndex: 72,
    wagePressureIndex: 58,
    complianceLoadIndex: 68,
    oshaRiskIndex: 64,
    shiftStabilityIndex: 52,
    demandForecastIndex: 78
};

const evsCountySnapshot = [
    {
        name: "Gwinnett",
        turnoverPressure: 71,
        wagePressure: 56,
        complianceLoad: 67,
        shiftStability: 51,
        oshaRisk: 63,
        trend: "→",
        bullets: [
            "CNA wage $22.24/hr (vs. statewide $13.41)",
            "High population growth → facility expansion",
            "Strong corridor for technical healthcare workforce"
        ]
    },
    {
        name: "Cobb",
        turnoverPressure: 70,
        wagePressure: 57,
        complianceLoad: 68,
        shiftStability: 50,
        oshaRisk: 64,
        trend: "→",
        bullets: [
            "Healthcare employment: ~470k (2024)",
            "Marietta EVS wages $17.32/hr",
            "5.3% YoY growth in metro healthcare"
        ]
    },
    {
        name: "Fulton",
        turnoverPressure: 74,
        wagePressure: 60,
        complianceLoad: 70,
        shiftStability: 53,
        oshaRisk: 66,
        trend: "↑",
        bullets: [
            "Largest healthcare employment concentration in Georgia",
            "RN wages & CNA wages highest in state",
            "High compliance burden due to facility complexity"
        ]
    },
    {
        name: "DeKalb",
        turnoverPressure: 73,
        wagePressure: 59,
        complianceLoad: 69,
        shiftStability: 52,
        oshaRisk: 65,
        trend: "→",
        bullets: [
            "CNA wages $24.89/hr (highest county wage)",
            "Academic medical systems (Emory) elevate complexity",
            "High compliance + infection control expectations"
        ]
    },
    {
        name: "Hall",
        turnoverPressure: 68,
        wagePressure: 54,
        complianceLoad: 65,
        shiftStability: 49,
        oshaRisk: 61,
        trend: "→",
        bullets: [
            "Regional hospitals with limited compliance staff",
            "EVS wages ~$17.04/hr",
            "Rural compliance challenges increase load"
        ]
    },
    {
        name: "Clayton",
        turnoverPressure: 69,
        wagePressure: 55,
        complianceLoad: 66,
        shiftStability: 50,
        oshaRisk: 62,
        trend: "→",
        bullets: [
            "Expanding healthcare infrastructure",
            "CNA wage ~$22/hr",
            "Turnover aligned with Atlanta metro levels"
        ]
    },
    {
        name: "Chatham / Savannah",
        turnoverPressure: 67,
        wagePressure: 53,
        complianceLoad: 64,
        shiftStability: 48,
        oshaRisk: 60,
        trend: "↓",
        bullets: [
            "EVS wages ~$17.02/hr",
            "17.9% hospital turnover (SE region)",
            "Fast RN recruitment (74 days) stabilizes clinical staffing"
        ]
    }
];

const safetyIndicators = {
    injuryRate: "3.6 per 100 FTE",
    hazards: [
        "Musculoskeletal disorders from patient handling",
        "Bloodborne pathogen exposure",
        "Chemical exposure (cleaning agents)",
        "Slips, trips, and falls"
    ]
};

const predictiveOutlook = {
    demandForecast: "6-8% annual growth for EVS technicians",
    hiringPatterns: "Healthcare adding jobs at 5.4% rate",
    risks: [
        "Aging population increasing acuity & cleaning load",
        "Wage inflation eroding margins",
        "Compliance drift in rapidly expanding facilities"
    ]
};

const MetricCard = ({ label, value, trend, color = "blue" }: { label: string, value: string, trend?: 'up' | 'down' | 'stable', color?: string }) => (
    <div className="bg-white p-4 lg:p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">{label}</div>
        <div className={`text-2xl lg:text-3xl font-extrabold text-${color}-600`}>{value}</div>
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

export default function HealthcareEVSReport() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Healthcare & EVS Workforce Report 2025 (Georgia)",
        "description": "Turnover, wage pressure, compliance burden, OSHA risk, shift stability and demand forecast insights across EVS and healthcare support roles in Georgia.",
        "url": "https://firstnationalstaffing.com/insights/reports/healthcare-evs-2025",
        "image": "https://firstnationalstaffing.com/insights/reports/healthcare-evs-2025/opengraph-image",
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
                        2025 Healthcare Intelligence
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                        Healthcare & EVS <br /><span className="text-blue-500">Workforce Report 2025</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                        Analyzing the convergence of high turnover, strict compliance loads, and wage pressure in Georgia's environmental services and clinical support sectors.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8 max-w-7xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Reports', href: '/insights/reports' },
                    { label: 'Healthcare & EVS Report', href: '/insights/reports/healthcare-evs-2025' }
                ]} />

                {/* Author and Freshness Information */}
                <div className="mb-8 space-y-3">
                    <AuthorByline
                        name="Dr. Patricia Reyes"
                        title="Healthcare Staffing Director, FNSG"
                        expertise="Healthcare Environmental Services Analytics"
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
                    <MetricCard label="Turnover Pressure" value={`${evsKpis.turnoverPressureIndex}/100`} color="red" />
                    <MetricCard label="Wage Pressure" value={`${evsKpis.wagePressureIndex}/100`} color="orange" />
                    <MetricCard label="Compliance Load" value={`${evsKpis.complianceLoadIndex}/100`} color="purple" />
                    <MetricCard label="OSHA Risk" value={`${evsKpis.oshaRiskIndex}/100`} color="red" />
                    <MetricCard label="Shift Stability" value={`${evsKpis.shiftStabilityIndex}/100`} color="yellow" />
                    <MetricCard label="Demand Forecast" value={`${evsKpis.demandForecastIndex}/100`} color="blue" />
                </div>

                {/* 8. EXECUTIVE SUMMARY */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">Executive Summary</h2>
                    <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed bg-white p-6 rounded-xl border border-slate-200">
                        <p>
                            The 2025 outlook for Georgia's Healthcare and EVS sectors reveals a critical tension between rising compliance demands (Index: <strong>{evsKpis.complianceLoadIndex}</strong>)
                            and workforce instability. With Turnover Pressure at <strong>{evsKpis.turnoverPressureIndex}</strong>, facilities face risks not just in coverage, but in infection control quality.
                        </p>
                        <p className="mt-4">
                            Wage disparities are driving migration from rural systems to metro hubs like Fulton and DeKalb, where complexity premiums exist.
                            However, the "Shift Stability" index of <strong>{evsKpis.shiftStabilityIndex}</strong> indicates that purely transactional staffing solutions are failing to provide
                            the continuity needed for patient safety. A shift to "Compliance-First" staffing models is required.
                        </p>
                    </div>
                </section>

                {/* 9. CHART PLACEHOLDERS */}
                <div className="charts-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-72 flex flex-col">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Turnover vs Census</span>
                        <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            <div className="mt-4 border border-slate-200 rounded-lg p-4 bg-white">
                                <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Shift Stability Trend</h4>
                                <DemoLineChart />
                            </div>
                        </div>
                    </div>
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-72 flex flex-col">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">County Comparison</span>
                        <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            <div className="mt-4 border border-slate-200 rounded-lg p-4 bg-white">
                                <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Compliance Risk Index</h4>
                                <DemoLineChart />
                            </div>
                        </div>
                    </div>
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-72 flex flex-col">
                        <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">Compliance Risk Map</span>
                        <div className="flex-1 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                            <div className="mt-4 border border-slate-200 rounded-lg p-4 bg-white">
                                <h4 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Compliance Risk Heatmap</h4>
                                <DemoLineChart />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">

                        {/* 2. COUNTY SNAPSHOT TABLE */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">County Compliance & Labor Benchmark</h2>
                            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                                <table className="min-w-full bg-white">
                                    <thead className="bg-slate-50 text-slate-700 text-xs uppercase font-bold tracking-wider">
                                        <tr>
                                            <th className="px-4 py-4 text-left">County</th>
                                            <th className="px-4 py-4 text-center">Turnover</th>
                                            <th className="px-4 py-4 text-center">Compliance</th>
                                            <th className="px-4 py-4 text-center">Stability</th>
                                            <th className="px-4 py-4 text-center">OSHA Risk</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-600">
                                        {evsCountySnapshot.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-4 py-4 text-slate-900 font-bold">{row.name}</td>
                                                <td className="px-4 py-4 text-center text-red-500">{row.turnoverPressure}</td>
                                                <td className="px-4 py-4 text-center text-purple-600">{row.complianceLoad}</td>
                                                <td className="px-4 py-4 text-center text-orange-500">{row.shiftStability}</td>
                                                <td className="px-4 py-4 text-center text-slate-600">{row.oshaRisk}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Detailed County Bullets */}
                            <div className="mt-8 space-y-6">
                                {evsCountySnapshot.map((county) => (
                                    <div key={county.name} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-lg font-bold text-slate-900">{county.name} Insights</h3>
                                            <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-500">Trend: {county.trend}</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {county.bullets.map((b, i) => (
                                                <li key={i} className="flex items-start text-sm text-slate-600">
                                                    <span className="text-blue-500 mr-2 mt-1">●</span>
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 4. TURNOVER & NCNS */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">Turnover & Retention Dynamics</h2>
                            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                    <div className="text-3xl font-bold text-red-600 mb-1">29.9%</div>
                                    <div className="text-sm font-bold text-red-800">0-30 Day Churn Rate</div>
                                    <p className="text-xs text-red-700 mt-2">Critical failure point. Driven by "culture shock" in high-acuity environments.</p>
                                </div>
                                <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                                    <div className="text-3xl font-bold text-orange-600 mb-1">36.1%</div>
                                    <div className="text-sm font-bold text-orange-800">Annual EVS Turnover</div>
                                    <p className="text-xs text-orange-700 mt-2">Significantly higher than clinical roles, creating cleaning continuity risks.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4">Retention Barriers & Drivers</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-sm text-slate-600">
                                        <span className="text-red-500 font-bold mr-2">Barrier:</span>
                                        <span>Lack of clear "Clinical Ladder" for EVS staff leads to dead-end perception.</span>
                                    </li>
                                    <li className="flex items-start text-sm text-slate-600">
                                        <span className="text-red-500 font-bold mr-2">Barrier:</span>
                                        <span>Last-minute shift cancellations destabilize income security.</span>
                                    </li>
                                    <li className="flex items-start text-sm text-slate-600">
                                        <span className="text-green-600 font-bold mr-2">Driver:</span>
                                        <span>Cleveland Clinic Model: Tiered certification pathways reduced NCNS by 45%.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 7. PREDICTIVE OUTLOOK */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">Outlook 2025–2030</h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800">A) Demand Outlook</h4>
                                    <p className="text-sm text-slate-600 mt-1">{predictiveOutlook.demandForecast}. The aging population is increasing patient acuity, meaning more intensive cleaning protocols per room.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800">B) Workforce Pressure</h4>
                                    <p className="text-sm text-slate-600 mt-1">{predictiveOutlook.hiringPatterns}. Wage inflation will likely continue to erode margins, forcing reliance on agency partnerships for flexibility.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800">C) Opportunities & Risks</h4>
                                    <ul className="mt-2 space-y-2 text-sm text-slate-600">
                                        {predictiveOutlook.risks.map((risk, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2 text-orange-500">⚠</span>
                                                {risk}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="space-y-8">

                        {/* 3. WAGE BENCHMARKING */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Wage Benchmarks (2025)</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                                    <span className="text-slate-600">EVS Technician</span>
                                    <span className="font-bold text-slate-900">$16.50 - $18.50</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                                    <span className="text-slate-600">Floor Tech</span>
                                    <span className="font-bold text-slate-900">$18.00 - $21.00</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                                    <span className="text-slate-600">Patient Transporter</span>
                                    <span className="font-bold text-slate-900">$17.50 - $19.50</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                                    <span className="text-slate-600">CNA</span>
                                    <span className="font-bold text-slate-900">$21.00 - $25.00</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                                    <span className="text-slate-600">Sterile Processing</span>
                                    <span className="font-bold text-slate-900">$24.00 - $29.00</span>
                                </div>
                            </div>
                            <div className="mt-6 bg-slate-50 p-3 rounded text-xs text-slate-500">
                                <strong>Comparison:</strong> Amazon/Logistics entry wages ($18+) are actively poaching talent from the lower end of this bracket.
                            </div>
                        </div>

                        {/* 5. COMPLIANCE LOAD */}
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <h3 className="text-lg font-bold text-purple-900 mb-4">Compliance Burden</h3>
                            <p className="text-xs text-purple-800 mb-4">
                                EVS roles now require near-clinical levels of documentation.
                            </p>
                            <ul className="space-y-2 text-xs text-slate-700">
                                <li className="flex items-start"><span className="font-bold mr-1">CDC:</span> Infection control protocols (masks, isolation).</li>
                                <li className="flex items-start"><span className="font-bold mr-1">Joint Commission:</span> Environment of Care standards.</li>
                                <li className="flex items-start"><span className="font-bold mr-1">OSHA:</span> HazCom & Bloodborne Pathogens training.</li>
                            </ul>
                        </div>

                        {/* 6. SAFETY & OSHA */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Safety & OSHA Risks</h3>
                            <div className="mb-4">
                                <span className="text-xs text-slate-500 uppercase font-bold">Industry Injury Rate</span>
                                <div className="text-2xl font-bold text-red-600">{safetyIndicators.injuryRate}</div>
                            </div>
                            <h4 className="text-xs font-bold text-slate-800 uppercase mb-2">Top Hazards</h4>
                            <ul className="space-y-2 text-xs text-slate-600">
                                {safetyIndicators.hazards.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-lg font-bold mb-2">Build a Compliant Team</h3>
                            <p className="text-xs text-blue-100 mb-4">
                                Stop the revolving door. Implement our Compliance-First staffing OS.
                            </p>
                            <Link href="/contact" className="block w-full text-center py-2 bg-white text-blue-900 font-bold text-sm rounded hover:bg-blue-50 transition-colors">
                                Request Consultation
                            </Link>
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
                                detail="Proprietary healthcare staffing data, March 2025"
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
