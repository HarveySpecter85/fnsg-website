import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FNSG Workforce Intelligence OS — Live Demo Dashboard",
    description: "Interactive demo of FNSG Workforce Intelligence OS, showing sample KPIs, sector trends, and regional workforce insights for Georgia’s industrial, logistics, manufacturing and EVS sectors.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/os-demo',
    },
    openGraph: {
        title: "FNSG Workforce Intelligence OS — Live Demo Dashboard",
        description: "Interactive demo of FNSG Workforce Intelligence OS, showing sample KPIs, sector trends, and regional workforce insights.",
        url: 'https://firstnationalstaffing.com/os-demo',
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/os-demo/opengraph-image',
                width: 1200,
                height: 630,
                alt: 'FNSG OS Demo Dashboard',
            },
        ],
    },
};

const demoGlobalKpis = {
    laborDemandIndex: 80,
    turnoverPressureIndex: 70,
    wagePressureIndex: 62,
    shiftRiskIndex: 68,
    safetyRiskIndex: 60,
    complianceLoadIndex: 65
};

// Demo-only sample values for OS preview.
const MetricCard = ({ label, value, color }: { label: string, value: string, color?: string }) => (
    <div className="bg-slate-800 border border-slate-700 p-4 rounded-lg flex flex-col justify-between">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</span>
        <span className={`text-2xl font-mono font-bold text-${color || 'white'} mt-2`}>{value}</span>
    </div>
);

const SectorCard = ({ title, chips, desc, link, linkText }: { title: string, chips: { label: string, val: string }[], desc: string, link: string, linkText: string }) => (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-slate-500 transition-colors">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-white">{title}</h3>
            <Link href={link} className="text-xs font-bold text-blue-400 hover:text-blue-300 uppercase tracking-wider">{linkText} &rarr;</Link>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
            {chips.map((c, i) => (
                <span key={i} className="bg-slate-800 text-slate-300 px-2 py-1 rounded text-xs border border-slate-700">
                    <span className="text-slate-500 font-bold mr-1">{c.label}:</span>
                    <span className="font-mono text-white">{c.val}</span>
                </span>
            ))}
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">
            {desc}
        </p>
    </div>
);

const demoInsights = [
    "3rd shift NCNS expected to spike 20–30% post-peak — consider pre-scheduling 10–15% backup labor.",
    "Hall County manufacturing wage pressure rising; 5.6% YoY growth.",
    "Savannah port wage floor ($25.78/hr) pulling skilled operators from inland corridors.",
    "EVS turnover 36% annually; structured retention bundles can reduce churn 20–28%."
];

export default function OSDemoPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "FNSG Workforce Intelligence OS Demo Dashboard",
        "description": "SaaS-style demo dashboard for FNSG Workforce Intelligence OS, visualizing sample KPIs for Georgia’s workforce.",
        "url": "https://firstnationalstaffing.com/os-demo",
        "inLanguage": "en"
    };

    return (
        <main className="bg-slate-950 min-h-screen font-sans text-slate-200">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HERO / DASHBOARD HEADER */}
            <header className="border-b border-slate-800 bg-slate-900 sticky top-0 z-20">
                <div className="container mx-auto px-6 py-5 max-w-screen-2xl">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Live Demo View</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                Workforce Intelligence OS
                            </h1>
                        </div>
                        <div className="flex gap-3">
                            <Link href="/contact" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-lg border border-slate-700 transition-colors">
                                Download 2025 Reports
                            </Link>
                            <Link href="/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-blue-900/20">
                                Request Live Walkthrough
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-6 py-8 max-w-screen-2xl space-y-8">

                {/* 3. GLOBAL KPI ROW */}
                <section>
                    <div className="flex justify-between items-end mb-4">
                        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Global Workforce Health (GA Aggregate)</h2>
                        <span className="text-xs text-slate-600 font-mono">Index Baseline: Q1 2025</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <MetricCard label="Labor Demand" value={`${demoGlobalKpis.laborDemandIndex}/100`} color="blue-400" />
                        <MetricCard label="Turnover Risk" value={`${demoGlobalKpis.turnoverPressureIndex}/100`} color="red-400" />
                        <MetricCard label="Wage Pressure" value={`${demoGlobalKpis.wagePressureIndex}/100`} color="orange-400" />
                        <MetricCard label="Shift Risk" value={`${demoGlobalKpis.shiftRiskIndex}/100`} color="yellow-400" />
                        <MetricCard label="Safety Risk" value={`${demoGlobalKpis.safetyRiskIndex}/100`} color="purple-400" />
                        <MetricCard label="Compliance Load" value={`${demoGlobalKpis.complianceLoadIndex}/100`} color="slate-200" />
                    </div>
                </section>

                {/* 5. CHARTS GRID */}
                <section className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-64 flex flex-col">
                        <h3 className="text-xs font-bold text-slate-500 uppercase mb-4">KPI Index Scores (0-100)</h3>
                        <div className="flex-1 bg-slate-950/50 rounded border border-dashed border-slate-800 flex items-center justify-center text-slate-700 text-xs font-mono">
                            [Interactive Bar Chart]
                        </div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-64 flex flex-col">
                        <h3 className="text-xs font-bold text-slate-500 uppercase mb-4">Manufacturing County Metrics</h3>
                        <div className="flex-1 bg-slate-950/50 rounded border border-dashed border-slate-800 flex items-center justify-center text-slate-700 text-xs font-mono">
                            [Geo-Heatmap Visualization]
                        </div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 h-64 flex flex-col">
                        <h3 className="text-xs font-bold text-slate-500 uppercase mb-4">NCNS by Shift Type</h3>
                        <div className="flex-1 bg-slate-950/50 rounded border border-dashed border-slate-800 flex items-center justify-center text-slate-700 text-xs font-mono">
                            [Stacked Area Chart]
                        </div>
                    </div>
                </section>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* LEFT COL: SECTOR DEEP DIVES + REGIONAL */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* 4. SECTOR BLOCKS */}
                        <section>
                            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Sector Diagnostics</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <SectorCard
                                    title="Industrial Overview"
                                    chips={[
                                        { label: "Demand", val: "High" },
                                        { label: "Wage Px", val: "Mod" },
                                        { label: "Hotspots", val: "Chatham, Hall" }
                                    ]}
                                    desc="Broad outlook for general industrial labor, showing stabilized demand but localized wage volatility in port-connected regions."
                                    link="/insights/reports/georgia-industrial-workforce-2025"
                                    linkText="Full Benchmark"
                                />
                                <SectorCard
                                    title="Warehouse & Logistics"
                                    chips={[
                                        { label: "Demand", val: "72" },
                                        { label: "Turnover", val: "68" },
                                        { label: "Shift Risk", val: "65" }
                                    ]}
                                    desc="Forecast for Q3-Q4 peak season. 3rd shift attendance remains the primary vulnerability for fulfillment centers."
                                    link="/insights/reports/warehouse-logistics-forecast-2025"
                                    linkText="Logistic Forecast"
                                />
                                <SectorCard
                                    title="Manufacturing Stability"
                                    chips={[
                                        { label: "Turnover", val: "72" },
                                        { label: "Skills Gap", val: "78" },
                                        { label: "Demand", val: "82" }
                                    ]}
                                    desc="Critical skill shortages in maintenance & CNC roles. EV supply chain expansion is draining technical talent."
                                    link="/insights/reports/manufacturing-turnover-2025"
                                    linkText="Retention Audit"
                                />
                                <SectorCard
                                    title="Healthcare & EVS"
                                    chips={[
                                        { label: "Turnover", val: "72" },
                                        { label: "Compliance", val: "68" },
                                        { label: "OSHA", val: "64" }
                                    ]}
                                    desc="High compliance load meets high turnover. EVS roles face significant burnout risks in high-acuity facilities."
                                    link="/insights/reports/healthcare-evs-2025"
                                    linkText="Compliance Report"
                                />
                            </div>
                        </section>

                        {/* 6. REGIONAL SNAPSHOT */}
                        <section>
                            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Georgia Workforce Snapshot — Key Corridors</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { region: "Atlanta Metro", counties: "Gwinnett / Cobb / Fulton", status: "High Volatility", color: "red" },
                                    { region: "Northeast Belt", counties: "Hall / Jackson / Barrow", status: "Stable Growth", color: "green" },
                                    { region: "South Atlanta", counties: "South Fulton / Clayton", status: "Wage Battleground", color: "orange" },
                                    { region: "Coastal Region", counties: "Chatham / Savannah", status: "Demand Surge", color: "blue" },
                                ].map((r, i) => (
                                    <div key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                                        <div className="flex justify-between mb-2">
                                            <h4 className="font-bold text-white text-sm">{r.region}</h4>
                                            <span className={`text-[10px] font-bold uppercase rounded px-2 py-0.5 bg-${r.color}-900/30 text-${r.color}-400`}>{r.status}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 mb-2">{r.counties}</p>
                                        <Link href="/insights" className="text-xs text-slate-400 hover:text-white underline decoration-slate-600">View Corridor Data</Link>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* RIGHT COL: FEED & CTA */}
                    <div className="space-y-6">

                        {/* 7. INSIGHTS FEED */}
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-0 overflow-hidden">
                            <div className="p-4 border-b border-slate-800 bg-slate-900">
                                <h3 className="font-bold text-sm text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    OS Insights Stream
                                </h3>
                            </div>
                            <div className="divide-y divide-slate-800 max-h-[500px] overflow-y-auto">
                                {demoInsights.map((insight, idx) => (
                                    <div key={idx} className="p-4 hover:bg-slate-800/50 transition-colors">
                                        <div className="flex gap-3">
                                            <div className="mt-1 min-w-[4px] h-4 rounded-full bg-slate-700"></div>
                                            <p className="text-xs text-slate-300 leading-relaxed font-mono">"{insight}"</p>
                                        </div>
                                        <div className="mt-2 text-[10px] text-slate-600 font-bold uppercase tracking-wider pl-4">
                                            Alert • Just Now
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 bg-slate-900 border-t border-slate-800 text-center">
                                <span className="text-xs text-slate-500">Live Feed — Sample Data</span>
                            </div>
                        </div>

                        {/* 8. MINI CTA */}
                        <div className="bg-blue-600 rounded-xl p-6 shadow-2xl shadow-blue-900/20 text-center">
                            <h3 className="font-bold text-white text-lg mb-2">Your Data, Live.</h3>
                            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                                Connect your own facility metrics to the OS. Track attendance, turnover, and safety risk in real-time.
                            </p>
                            <Link href="/contact" className="block w-full py-3 bg-white text-blue-900 font-bold text-sm rounded-lg hover:bg-blue-50 transition-colors">
                                Activate Your Dashboard
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 9. BOTTOM CTA */}
                <section className="mt-12 py-12 border-t border-slate-800 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">See Your Own Workforce in the OS</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                        This demo uses sample data across Georgia's key sectors. FNSG Workforce Intelligence OS can be connected to your facility's real metrics—attendance, turnover, safety incidents, and pay rates—to give you a predictive command center.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors">
                            Request Strategy Session
                        </Link>
                        <Link href="/contact" className="px-8 py-4 border border-slate-600 text-slate-300 font-bold rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                            Get Custom Demo
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
