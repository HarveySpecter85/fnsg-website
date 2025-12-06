import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Workforce Diagnostic OS — Workforce Intelligence for Operational Leaders",
    description: "Operational Workforce Diagnostic powered by FNSG OS to assess labor risk, predict attendance, benchmark pay, analyze turnover, and identify root causes impacting productivity and OSHA compliance.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/workforce-diagnostic-os',
    },
    openGraph: {
        title: "Workforce Diagnostic OS — Workforce Intelligence for Operational Leaders",
        description: "Operational Workforce Diagnostic powered by FNSG OS to assess labor risk, predict attendance, benchmark pay, analyze turnover, and identify root causes impacting productivity and OSHA compliance.",
        url: 'https://firstnationalstaffing.com/solutions/workforce-diagnostic-os',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function WorkforceDiagnosticOSPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Workforce Diagnostic OS",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": "Georgia",
        "description": "Operational Workforce Diagnostic powered by FNSG OS to assess labor risk, predict attendance, benchmark pay, analyze turnover, and identify root causes impacting productivity and OSHA compliance.",
        "url": "https://firstnationalstaffing.com/solutions/workforce-diagnostic-os"
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
                        Workforce Diagnostic OS: <br />
                        <span className="text-blue-500">Identify Operational Risk</span> Before It Impacts Your Production
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
                        Detect, visualize, and prioritize the hidden factors affecting productivity, stability, and cost—before they become a crisis.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Solutions', href: '/solutions' },
                    { label: 'Workforce Diagnostic OS', href: '/solutions/workforce-diagnostic-os' }
                ]} />

                {/* The Problem Context */}
                <div className="py-12 prose prose-lg max-w-none text-slate-700">
                    <p className="lead text-2xl font-light text-slate-900 mb-8">
                        Most companies understand <em>that</em> their operation is struggling—turnover, low attendance, missed targets—but they don't understand <strong>WHY</strong>.
                    </p>
                    <p>
                        Workforce Diagnostic OS is the intelligence layer that bridges that gap. We don't just supply people; we supply the <strong>visibility</strong> needed to fix the root causes of operational instability.
                    </p>
                </div>

                {/* H2 - The Operational Problems It Solves (Grid Layout) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">The Operational Problems It Solves</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "High Turnover (Root Cause Unknown)",
                                desc: "It's rarely just about pay. We identify if it's supervision, shift structure, ergonomics, or location mismatch."
                            },
                            {
                                title: "NCNS Patterns Hidden in Data",
                                desc: "Spot the specific shifts, days, and zip codes driving your highest absenteeism rates before the shift starts."
                            },
                            {
                                title: "Pay Rate Competitiveness Blindspots",
                                desc: "Losing workers for $0.50/hr? Our real-time benchmarking reveals exactly where you stand in your specific county."
                            },
                            {
                                title: "Ramp-Up Failures",
                                desc: "Predict exactly how much workforce you need to interview to hit your headcount targets, accounting for attrition at every stage."
                            },
                            {
                                title: "OSHA Risk Unseen",
                                desc: "Correlate fatigue, tenure, and supervision data to predict and prevent incidents before they happen."
                            },
                            {
                                title: "Poor Training Pipeline",
                                desc: "The first 7 days determine 60% of retention. We pinpoint exactly where your onboarding process is leaking talent."
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
                            Because the traditional staffing model is broken. Agencies traditionally just "send bodies." They don't analyze data, they don't map production lines, and they don't predict risk.
                        </p>
                        <p className="font-bold text-slate-900">
                            Diagnostic OS changes that. We audit the operation, not just the job description.
                        </p>
                    </div>
                </section>

                {/* H2 - How FNSG OS Solves It */}
                <section className="py-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How FNSG OS Solves It</h2>
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="bg-blue-50 p-4 rounded-lg min-w-[60px] flex justify-center text-2xl">⭐</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Attendance Intelligence Engine</h3>
                                <p className="text-slate-600 mt-2">Predicts attendance risk by shift, day, role, and zone using historical data patterns.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="bg-blue-50 p-4 rounded-lg min-w-[60px] flex justify-center text-2xl">⭐</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Turnover Root Cause Analysis (RCA)</h3>
                                <p className="text-slate-600 mt-2">Isolates variables: Is it the leadership? The pay? The commute? The fatigue? We find the truth.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="bg-blue-50 p-4 rounded-lg min-w-[60px] flex justify-center text-2xl">⭐</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Pay Intelligence Benchmarking</h3>
                                <p className="text-slate-600 mt-2">Real-time wage analysis across Gwinnett, Hall, Jackson, Forsyth, Cobb, Clayton, Fulton, and Savannah.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="bg-blue-50 p-4 rounded-lg min-w-[60px] flex justify-center text-2xl">⭐</div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Incident Prediction Engine</h3>
                                <p className="text-slate-600 mt-2">Maps fatigue, repetition, temperature, and supervision ratios to OSHA risk zones.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* H2 - OS Modules Used in This Solution (Grid Layout) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">OS Modules Deployed</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Attendance OS",
                            "Pay Intelligence OS",
                            "Workforce Stability Model",
                            "Skill Matching Engine",
                            "Risk & OSHA Intelligence",
                            "Forecasting & Ramp-Up",
                            "Supervisor Impact Analysis",
                            "Onboarding Intelligence"
                        ].map((module, idx) => (
                            <div key={idx} className="bg-slate-900 text-white p-4 rounded-lg text-center font-medium shadow-lg flex items-center justify-center h-24 border border-slate-700">
                                {module}
                            </div>
                        ))}
                    </div>
                </section>

                {/* H2 - KPIs We Improve */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">KPIs Improved</h2>
                    <div className="overflow-x-auto shadow-sm border border-slate-200 rounded-lg">
                        <table className="min-w-full bg-white text-left">
                            <thead className="bg-slate-50 text-slate-900">
                                <tr>
                                    <th className="px-6 py-4 font-bold border-b">KPI</th>
                                    <th className="px-6 py-4 font-bold border-b text-green-700">Improvement Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr><td className="px-6 py-4">Attendance Reliability</td><td className="px-6 py-4 font-bold text-green-700">+8–18%</td></tr>
                                <tr><td className="px-6 py-4">Turnover Reduction</td><td className="px-6 py-4 font-bold text-green-700">-15–35%</td></tr>
                                <tr><td className="px-6 py-4">Ramp-Up Success</td><td className="px-6 py-4 font-bold text-green-700">+20–40%</td></tr>
                                <tr><td className="px-6 py-4">Training Completion</td><td className="px-6 py-4 font-bold text-green-700">+30–50%</td></tr>
                                <tr><td className="px-6 py-4">OSHA Incident Rate</td><td className="px-6 py-4 font-bold text-green-700">-10–25%</td></tr>
                                <tr><td className="px-6 py-4">Supervisor Efficiency</td><td className="px-6 py-4 font-bold text-green-700">+12–22%</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* H2 - Implementation Framework */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Implementation Framework</h2>
                    <div className="space-y-6 border-l-4 border-blue-500 pl-6">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">1. Operational Assessment</h3>
                            <p className="text-slate-600">Complete mapping of roles, shifts, pay, locations, supervisors, and historical data.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">2. OS Configuration</h3>
                            <p className="text-slate-600">Activation of dashboards, alerts, predictions, and labor trend analysis.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">3. Onboarding of Data</h3>
                            <p className="text-slate-600">Ingestion of internal operational data and external market intelligence.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">4. Weekly Diagnostic Reports</h3>
                            <p className="text-slate-600">Actionable intelligence delivered directly to your leadership team.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">5. Optimization Cycle</h3>
                            <p className="text-slate-600">Continuous adjustment of recruitment, shifts, compliance, and supervision strategies.</p>
                        </div>
                    </div>
                </section>

                {/* H2 - Mini Case Study */}
                <section className="py-12 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Case Example: Manufacturers in Jackson County</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-red-600 mb-2">The Problem</h4>
                            <p className="text-slate-700 mb-4">38% turnover on 3rd shift + frequent OSHA near-misses.</p>
                            <h4 className="font-bold text-blue-600 mb-2">The Diagnosis</h4>
                            <p className="text-slate-700">Diagnostic OS revealed a wage gap specifically for night differentials and a bottleneck in the packaging line training process.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-green-600 mb-2">The Result (60 Days)</h4>
                            <ul className="list-disc pl-5 space-y-1 text-slate-700">
                                <li>3rd Shift Stability: <strong>+27%</strong></li>
                                <li>Overall Turnover: <strong>-19%</strong></li>
                                <li>OSHA Micro-incidents: <strong>-22%</strong></li>
                            </ul>
                            <div className="mt-6">
                                <Link
                                    href="/insights/city/jackson-county-logistics-staffing"
                                    className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-300 underline-offset-4"
                                >
                                    View Jackson County Logistics Insights &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cost Impact Preview - Placeholder */}
                <section id="cost-turnover-preview" className="py-12 my-12 border-t border-b border-slate-200">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">Workforce Cost Impact Preview</h2>
                        <p className="text-slate-600">
                            A specialized calculator is coming soon to help you estimate the invisible costs of turnover—factoring in lost production time, overtime premiums, and training hours.
                        </p>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: "How long does Workforce Diagnostic OS take?", a: "Initial assessment takes 3-5 days. Full data calibration typically runs 2-4 weeks alongside operations." },
                            { q: "What data do we need to get started?", a: "We start with your shift schedules, roster, current pay rates, and historical attendance logs." },
                            { q: "Does this replace my HR or Operations Team?", a: "No. It empowers them. We provide the intelligence and 'arms and legs' to execute the strategy they need." },
                            { q: "How accurate is the Attendance Prediction?", a: "By analyzing commute distance, past behavior, and shift timing, we typically achieve 85%+ accuracy in predicting reliability." }
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
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Diagnose Your Workforce Risk?</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        Get the data-driven clarity you need to stabilize operations, reduce cost, and improve safety.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-white hover:bg-slate-50 transition-all transform hover:scale-105"
                        >
                            Request Strategy Session
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-bold rounded-lg text-white hover:bg-slate-800 transition-all"
                        >
                            Download a Sample Diagnostic Report
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
