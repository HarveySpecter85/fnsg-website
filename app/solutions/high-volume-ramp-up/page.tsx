import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';
import PremiumCTA from '@/app/components/PremiumCTA';

export const metadata: Metadata = {
    title: "High-Volume Ramp-Up OS — Deploy 20–200 Workers in 24–72 Hours",
    description: "Deploy 20–200 workers in 24–72 hours using FNSG Workforce Solutions, combining prediction, on-site command, screening automation, and stability analysis for peak performance.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/high-volume-ramp-up-os',
    },
    openGraph: {
        title: "High-Volume Ramp-Up OS — Deploy 20–200 Workers in 24–72 Hours",
        description: "Deploy 20–200 workers in 24–72 hours using FNSG Workforce Solutions, combining prediction, on-site command, screening automation, and stability analysis for peak performance.",
        url: 'https://firstnationalstaffing.com/solutions/high-volume-ramp-up-os',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function HighVolumeRampUpPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "High-Volume Ramp-Up OS",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": "Georgia",
        "description": "Deploy 20–200 workers in 24–72 hours using FNSG Workforce Solutions, combining prediction, on-site command, screening automation, and stability analysis for peak performance.",
        "url": "https://firstnationalstaffing.com/solutions/high-volume-ramp-up-os"
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
                        <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">Powered by FNSG Workforce Solutions</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                        High-Volume Ramp-Up OS: <br />
                        Deploy 20–200 Workers in <span className="text-blue-500">24–72 Hours</span> With Predictive Workforce Intelligence
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
                        Transform peak season chaos into a controlled, predictable, and executable operational process.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Solutions', href: '/solutions' },
                    { label: 'High-Volume Ramp-Up OS', href: '/solutions/high-volume-ramp-up-os' }
                ]} />

                {/* H2 - The Operational Problems It Solves (Card Grid) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">The Operational Problems It Solves</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Late Hiring & Capacity Panic",
                                desc: "Companies start too late, leading to massive overtime costs, missed shipments, and operational failure."
                            },
                            {
                                title: "Ramp-Up Failure (Attendance)",
                                desc: "The first 14 days determine success or failure. Without monitoring, attendance collapses in week 2."
                            },
                            {
                                title: "No Prediction of Drop-Off",
                                desc: "Companies hire 'numbers' without knowing how many people will actually stay past the first shift."
                            },
                            {
                                title: "Supervisors Overloaded",
                                desc: "An influx of new workers overwhelms supervisors, leading to poor training and immediate turnover."
                            },
                            {
                                title: "Increased OSHA Risks",
                                desc: "Fatigue + Speed + Pressure = Spikes in micro-incidents and potential shutdowns."
                            },
                            {
                                title: "Inconsistent Skill Matching",
                                desc: "Rushing leads to bad fits—placing people in roles they physically cannot handle."
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
                            The labor market fluctuates weekly. 2nd and 3rd shifts often collapse during peaks because temporary workforces aren't trained for aggressive ramp-ups, and clients can't predict real attendance.
                        </p>
                        <p className="font-bold text-slate-900">
                            Traditional staffing treats peaks as "just more staffing." We treat them as MICRO-OPERATIONAL PROJECTS fueled by accurate data and forecasting.
                        </p>
                    </div>
                </section>

                {/* Visual Preview Placeholder */}
                <div className="py-8">
                    <div className="os-visual-preview bg-slate-200 h-64 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                        <p className="text-slate-500 font-medium">Ramp-Up Forecasting & Deployment Dashboard</p>
                    </div>
                </div>

                {/* H2 - How FNSG Solves It (Module Grid) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How High-Volume Ramp-Up OS Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Ramp-Up Forecast Engine",
                                desc: "Predicts how many people you ACTUALLY need based on historical attrition, not just what you 'think' you need."
                            },
                            {
                                title: "Workforce Stability Model",
                                desc: "Predicts retention and risk by shift, role, county, supervisor, weather, and commute distance."
                            },
                            {
                                title: "Mass Screening Pipeline OS",
                                desc: "Processes documents, drug screens, and clearances at accelerated speeds without errors."
                            },
                            {
                                title: "On-Site Ramp-Up Command",
                                desc: "Dedicated supervision for training, safety, assignment, grooming, and entry/exit control."
                            },
                            {
                                title: "Attendance OS for Peaks",
                                desc: "Daily prediction of absences, NCNS, tardiness, and operational risks across all shifts."
                            },
                            {
                                title: "Performance & Quality Tracking",
                                desc: "Analyzes which groups perform best, who needs retraining, and identifies natural leaders early."
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
                            "Workforce Diagnostic OS",
                            "Attendance Intelligence OS",
                            "Pay Intelligence OS",
                            "Skill Matching Engine",
                            "Compliance OS",
                            "Risk & OSHA OS",
                            "Ramp-Up Forecasting Engine",
                            "On-Site Command OS"
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
                                <tr><td className="px-6 py-4">Ramp-Up Completion Speed</td><td className="px-6 py-4 font-bold text-green-700">+30–60%</td></tr>
                                <tr><td className="px-6 py-4">Attendance Reliability</td><td className="px-6 py-4 font-bold text-green-700">+12–25%</td></tr>
                                <tr><td className="px-6 py-4">Turnover During Peak</td><td className="px-6 py-4 font-bold text-green-700">-15–35%</td></tr>
                                <tr><td className="px-6 py-4">OSHA Micro-Incidents</td><td className="px-6 py-4 font-bold text-green-700">-12–30%</td></tr>
                                <tr><td className="px-6 py-4">Training Completion Speed</td><td className="px-6 py-4 font-bold text-green-700">+20–40%</td></tr>
                                <tr><td className="px-6 py-4">Overtime Burn</td><td className="px-6 py-4 font-bold text-green-700">-10–28%</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* H2 - Implementation Framework */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Implementation Framework</h2>
                    <div className="space-y-6 border-l-4 border-blue-500 pl-6">
                        {[
                            "Pre-Peak Diagnostic OS Assessment",
                            "Ramp-Up Forecast Model Activation",
                            "Screening & Document Pipeline Setup",
                            "On-Site Command Deployment",
                            "Daily OS Monitoring (Attendance + Skills + Quality)",
                            "Weekly Optimization Loop",
                            "Peak Retrospective + Stability Recommendations"
                        ].map((step, idx) => (
                            <div key={idx}>
                                <h3 className="text-xl font-bold text-slate-900">{idx + 1}. {step}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* H2 - Mini Case Study */}
                <section className="py-12 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Mini Case Study: Distribution Center – Savannah / Port Corridor</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-red-600 mb-2">The Problem</h4>
                            <p className="text-slate-700 mb-4">Needed 120 workers in 2 weeks. 44% turnover on 3rd shift. Critical Q4 delays.</p>
                            <h4 className="font-bold text-blue-600 mb-2">The Solution</h4>
                            <p className="text-slate-700">Ramp-Up OS + Attendance Prediction + On-Site Command Team.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-green-600 mb-2">The Result (45 Days)</h4>
                            <ul className="list-disc pl-5 space-y-1 text-slate-700">
                                <li>Ramp-Up: <strong>Completed 4 days early</strong></li>
                                <li>3rd Shift Attendance: <strong>+19%</strong></li>
                                <li>OSHA Micro-incidents: <strong>-27%</strong></li>
                                <li>Output: <strong>+14%</strong></li>
                            </ul>
                            <div className="mt-6">
                                <Link
                                    href="/insights/city/savannah-logistics-staffing"
                                    className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-300 underline-offset-4"
                                >
                                    See the Savannah workforce profile &rarr;
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
                            { q: "How fast can you deploy 100 workers?", a: "With High-Volume Ramp-Up OS, we can deploy 20–200 vetted workers in 24–72 hours depending on the role complexity." },
                            { q: "Do you support multi-shift ramp-ups?", a: "Yes. We specialize in stabilizing 2nd and 3rd shifts which are typically the most volatile during peaks." },
                            { q: "Does Ramp-Up OS integrate with On-Site OS?", a: "Yes. Once the ramp-up is complete, we transition seamlessly into maintenance mode with On-Site OS." },
                            { q: "What industries benefit most?", a: "E-commerce, Logistics, Food Production, and Manufacturing with seasonal demand spikes." },
                            { q: "How accurate is the Attendance Prediction for peak?", a: "Our models generally predict peak attendance variance within 4-7%, allowing for precise over-hiring buffers." },
                            { q: "Can you support port, warehouse, and manufacturing ramp-ups?", a: "Yes. We have specialized modules for heavy industrial, port logistics, and high-speed manufacturing environments." }
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
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Conquer Your Peak Season?</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        Don't let volume spikes break your operation. Activate predictive intelligence and deploy with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact/general-inquiries"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-white hover:bg-slate-50 transition-all transform hover:scale-105"
                        >
                            Request a High-Volume Ramp-Up Strategy Session
                        </Link>
                        <Link
                            href="/contact/general-inquiries"
                            className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-bold rounded-lg text-white hover:bg-slate-800 transition-all"
                        >
                            Download the Ramp-Up Execution Playbook
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <PremiumCTA />
            </div>
        </main>
    );
}
