import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Peak Season Deployment OS — Predict, Prepare, and Execute",
    description: "Peak Season Deployment OS helps companies execute high-demand seasons with predictive workforce intelligence, attendance forecasting, surge pay modeling, and on-site stabilization teams.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/peak-season-deployment-os',
    },
};

export default function PeakSeasonDeploymentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Peak Season Deployment OS",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": "Georgia",
        "description": "Peak Season Deployment OS helps companies execute high-demand seasons with predictive workforce intelligence, attendance forecasting, surge pay modeling, and on-site stabilization teams.",
        "url": "https://firstnationalstaffing.com/solutions/peak-season-deployment-os"
    };

    return (
        <main className="bg-slate-50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <div className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="container mx-auto px-6 py-20 relative z-10 max-w-5xl">
                    <div className="mb-6">
                        <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">Powered by FNSG Workforce Intelligence OS</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                        Peak Season Deployment OS: <br />
                        <span className="text-blue-500">Predict, Prepare, and Execute</span> Your Most Critical Season With Workforce Intelligence
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
                        Transform peak season chaos into a controlled, predictable, and profitable operation.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Solutions', href: '/solutions' },
                    { label: 'Peak Season Deployment OS', href: '/solutions/peak-season-deployment-os' }
                ]} />

                {/* H2 - The Operational Problems It Solves (Card Grid) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">The Operational Problems It Solves</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Incorrect Forecasting",
                                desc: "Companies underestimate demand and start too late, leading to panic hiring and understaffing."
                            },
                            {
                                title: "Backlog & Instability",
                                desc: "Incomplete shifts slow down lines, causing massive order backlogs and frustrated customers."
                            },
                            {
                                title: "Brutal Wage Competition",
                                desc: "Everyone competes for the same labor pool. Without a surge strategy, you lose workers to competitors."
                            },
                            {
                                title: "Massive NCNS (Week 1)",
                                desc: "New hires often ghost during the most critical week, especially on 2nd and 3rd shifts."
                            },
                            {
                                title: "Supervisor Saturation",
                                desc: "Supervisors cannot effectively train or manage high-volume intakes, leading to chaos."
                            },
                            {
                                title: "Inefficient Onboarding",
                                desc: "Slow screening and documentation bottlenecks prevent workers from hitting the floor on time."
                            },
                            {
                                title: "OSHA Incidents Spike",
                                desc: "Fatigue, overtime pressure, and speed increase safety risks and operational shutdowns."
                            }
                        ].map((problem, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="h-2 w-12 bg-red-500 rounded mb-4"></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                                <p className="text-slate-600">{problem.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* H2 - Why These Problems Exist */}
                <section className="py-12 bg-slate-100 -mx-6 px-6 md:rounded-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why These Problems Exist</h2>
                    <div className="prose prose-lg text-slate-700 max-w-none">
                        <p>
                            Peak Season is handled as an emergency, not an operational system. 90% of clients plan less than 30 days out, supervisors are overwhelmed, and turnover triples.
                        </p>
                        <p className="font-bold text-slate-900">
                            The labor market is under maximum tension. Peak Season Deployment OS is designed to PREDICT and PREVENT failure, not just react to it.
                        </p>
                    </div>
                </section>

                {/* Visual Preview Placeholder */}
                <div className="py-8">
                    <div className="os-visual-preview bg-slate-200 h-64 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                        <p className="text-slate-500 font-medium">Peak Season Forecast & Command Dashboard</p>
                    </div>
                </div>

                {/* H2 - How Peak Season Deployment OS Works (Module Grid) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How Peak Season Deployment OS Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Peak Demand Forecast Engine",
                                desc: "Predicts labor demand, critical dates, shift impact, and understaffing risks."
                            },
                            {
                                title: "Surge Attendance Prediction",
                                desc: "Forecasts NCNS, fatigue, weather impact, and traffic risks by shift."
                            },
                            {
                                title: "Pay Intelligence Surge Model",
                                desc: "Detects when/how much to increase pay rates to prevent attrition to competitors."
                            },
                            {
                                title: "Rapid Screening OS",
                                desc: "Accelerates documentation, onboarding, clearance, and validation for speed."
                            },
                            {
                                title: "On-Site Peak Activation",
                                desc: "FNSG Command Team for mass check-ins, operational discipline, and safety support."
                            },
                            {
                                title: "7-Day Peak Retention Program",
                                desc: "Prevents Week 1 collapse via coaching, immediate relocation, and fatigue monitoring."
                            },
                            {
                                title: "Peak Performance Dashboard",
                                desc: "Real-time view of coverage, stability, daily risk, and throughput vs. staffing."
                            }
                        ].map((module, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                                <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 font-bold mb-4">{String.fromCharCode(65 + idx)}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{module.title}</h3>
                                <p className="text-slate-600">{module.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* H2 - OS Modules Used in This Solution */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">OS Modules Used in This Solution</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Peak Forecast OS",
                            "Attendance Intelligence OS",
                            "Pay Intelligence Surge Engine",
                            "Screening Pipeline OS",
                            "On-Site Workforce OS",
                            "Retention OS",
                            "OSHA & Safety OS",
                            "Performance Dashboard OS"
                        ].map((module, idx) => (
                            <div key={idx} className="bg-slate-900 text-white p-4 rounded-lg text-center font-medium shadow-lg flex items-center justify-center h-24 border border-slate-700">
                                {module}
                            </div>
                        ))}
                    </div>
                </section>

                {/* H2 - KPIs We Improve */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">KPIs We Improve</h2>
                    <div className="overflow-x-auto shadow-sm border border-slate-200 rounded-lg">
                        <table className="min-w-full bg-white text-left">
                            <thead className="bg-slate-50 text-slate-900">
                                <tr>
                                    <th className="px-6 py-4 font-bold border-b">KPI</th>
                                    <th className="px-6 py-4 font-bold border-b text-green-700">Improvement Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr><td className="px-6 py-4">On-Time Peak Completion</td><td className="px-6 py-4 font-bold text-green-700">+25–40%</td></tr>
                                <tr><td className="px-6 py-4">Attendance Stability</td><td className="px-6 py-4 font-bold text-green-700">+18–35%</td></tr>
                                <tr><td className="px-6 py-4">NCNS Reduction</td><td className="px-6 py-4 font-bold text-green-700">-20–45%</td></tr>
                                <tr><td className="px-6 py-4">Hiring Speed</td><td className="px-6 py-4 font-bold text-green-700">-30–50%</td></tr>
                                <tr><td className="px-6 py-4">Safety Incidents</td><td className="px-6 py-4 font-bold text-green-700">-10–22%</td></tr>
                                <tr><td className="px-6 py-4">Supervisor Overload</td><td className="px-6 py-4 font-bold text-green-700">-15–25%</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* H2 - Implementation Framework */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Implementation Framework</h2>
                    <div className="space-y-6 border-l-4 border-blue-500 pl-6">
                        {[
                            "Peak Diagnostic OS (30–90 days before peak)",
                            "Forecast Model Activation",
                            "Pay Intelligence Planning",
                            "Screening OS Deployment",
                            "On-Site Workforce Activation",
                            "7-Day Stabilization System",
                            "Peak Performance Reporting"
                        ].map((step, idx) => (
                            <div key={idx}>
                                <h3 className="text-xl font-bold text-slate-900">{idx + 1}. {step}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* H2 - Mini Case Study */}
                <section className="py-12 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Mini Case Study: E-commerce Fulfillment Center (Cobb County)</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-red-600 mb-2">The Problem</h4>
                            <p className="text-slate-700 mb-4">Peak Q4 failed 2 years in a row; 38% turnover in the first week.</p>
                            <h4 className="font-bold text-blue-600 mb-2">The Solution</h4>
                            <p className="text-slate-700">Peak Forecast Engine, Surge Pay Model, On-Site Activation Team, 7-Day Peak Retention OS.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-green-600 mb-2">The Result</h4>
                            <ul className="list-disc pl-5 space-y-1 text-slate-700">
                                <li>Turnover (Week 1): <strong>-44%</strong></li>
                                <li>Productivity: <strong>+19%</strong></li>
                                <li>Workforce Stability: <strong>+29%</strong></li>
                                <li>Outcome: <strong>Peak finished 2 days early</strong></li>
                            </ul>
                            <div className="mt-6">
                                <Link
                                    href="/insights/city/cobb-county-workforce-solutions"
                                    className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-300 underline-offset-4"
                                >
                                    See Cobb County Workforce Insights &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: "How early do we need to start planning for Peak Season?", a: "Ideally 60-90 days prior. However, our Peak OS can stabilize operations with as little as 14 days lead time." },
                            { q: "Can you staff 50–300 workers for peak?", a: "Yes. Our High-Volume engines are specifically built to deploy large cohorts in 24-72 hour windows." },
                            { q: "How does Pay Intelligence prevent turnover?", a: "We analyze competitor wage data in real-time to ensure your rates are resilient against poaching." },
                            { q: "Does Peak OS work for 2nd and 3rd shift?", a: "Yes. We focus heavily on off-shift stabilization where peak chaos is usually highest." },
                            { q: "How long does Screening OS take?", a: "We reduce screening time by 50% using parallel processing and digital onboarding before Day 1." },
                            { q: "Do you send an on-site team for peak season?", a: "Always. Peak cannot be managed remotely. We deploy Command Teams to the floor." }
                        ].map((faq, idx) => (
                            <div key={idx} className="border-b border-slate-200 pb-4">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h3>
                                <p className="text-slate-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Final */}
                <div className="mt-16 p-10 bg-slate-900 rounded-2xl text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Master Your Peak Season?</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        Stop reacting to chaos. Start executing with predictive precision and expert command.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-white hover:bg-slate-50 transition-all transform hover:scale-105"
                        >
                            Request a Peak Season OS Strategy Session
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-bold rounded-lg text-white hover:bg-slate-800 transition-all"
                        >
                            Download the Peak Deployment Optimization Brief
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
