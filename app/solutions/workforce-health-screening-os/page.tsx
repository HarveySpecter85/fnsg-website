import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Workforce Health Screening OS — Reduce Risk, Accelerate Hiring, and Improve Workforce Readiness",
    description: "Health screening and compliance automation for workforce onboarding. Accelerates hiring, reduces errors, and prepares candidates for production through Workforce Intelligence OS.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/workforce-health-screening-os',
    },
};

export default function WorkforceHealthScreeningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Workforce Health Screening OS",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": "Georgia",
        "description": "Health screening and compliance automation for workforce onboarding. Accelerates hiring, reduces errors, and prepares candidates for production through Workforce Intelligence OS.",
        "url": "https://firstnationalstaffing.com/solutions/workforce-health-screening-os"
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
                        Workforce Health Screening OS: <br />
                        <span className="text-blue-500">Reduce Risk, Accelerate Hiring,</span> and Improve Workforce Readiness
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
                        Eliminate hiring bottlenecks with automated medical clearance, document verification, and real-time readiness tracking.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Solutions', href: '/solutions' },
                    { label: 'Workforce Health Screening OS', href: '/solutions/workforce-health-screening-os' }
                ]} />

                {/* H2 - The Operational Problems It Solves (Grid Layout) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">The Operational Problems It Solves</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Slow Screening Pipelines",
                                desc: "Slow or inconsistent medical screenings that delay start dates and kill momentum."
                            },
                            {
                                title: "Manual Verification Errors",
                                desc: "High screening errors due to manual document verification and disconnected systems."
                            },
                            {
                                title: "Unprepared Workforce",
                                desc: "Workforce arriving unprepared or medically unfit for high-demand physical roles."
                            },
                            {
                                title: "Incomplete Compliance",
                                desc: "Missing I-9s, medical clearances, or vaccination records creates massive liability risk."
                            },
                            {
                                title: "Lack of 'Ready' Visibility",
                                desc: "Operations teams lack real-time visibility into who is actually cleared and ready to start."
                            },
                            {
                                title: "Vendor Latency",
                                desc: "Screening vendors who respond too slowly for high-volume hiring needs, shutting down ramp-ups."
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
                            In traditional staffing, medical screening is a fragmented mess of vendors, manual emails, and paper forms. There is no structured pipeline connecting screening to onboarding.
                        </p>
                        <p className="font-bold text-slate-900">
                            Without real-time visibility, screening delays shut down ramp-ups and leave Operations guessing who will actually show up.
                        </p>
                    </div>
                </section>

                {/* Visual Preview Placeholder */}
                <div className="py-8">
                    <div className="os-visual-preview bg-slate-200 h-64 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                        <p className="text-slate-500 font-medium">Real-Time Screening Dashboard Preview</p>
                    </div>
                </div>

                {/* H2 - How FNSG OS Solves It (Modules Grid) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How FNSG OS Solves It</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Health Screening Pipeline OS",
                                desc: "Automates every step of the pre-employment clearance workflow."
                            },
                            {
                                title: "Document Verification Engine",
                                desc: "Validates IDs, vaccine cards, medical forms, and OSHA-required documentation."
                            },
                            {
                                title: "Workforce Readiness Score",
                                desc: "Ranks candidates based on clearance status, compliance readiness, and hiring priority."
                            },
                            {
                                title: "Fast-Clearance Routing",
                                desc: "Routes candidates into roles ONLY once fully cleared, preventing compliance gaps."
                            },
                            {
                                title: "Real-Time Screening Dashboard",
                                desc: "Shows progress, bottlenecks, and completion metrics for every candidate."
                            },
                            {
                                title: "Compliance OS",
                                desc: "Stores all records audit-ready for healthcare, food production, warehouse, and EVS clients."
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

                {/* H2 - OS Modules Used in This Solution (Grid Layout) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">OS Modules Used in This Solution</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Compliance OS",
                            "Document Intelligence OS",
                            "Workforce Readiness Engine",
                            "Fast Deployment OS",
                            "Attendance OS (Post-Hire)",
                            "Pay Intelligence",
                            "Identity Verification OS"
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
                                <tr><td className="px-6 py-4">Time-to-Start</td><td className="px-6 py-4 font-bold text-green-700">-35–55%</td></tr>
                                <tr><td className="px-6 py-4">Screening Error Rate</td><td className="px-6 py-4 font-bold text-green-700">-60–80%</td></tr>
                                <tr><td className="px-6 py-4">Pending Clearances</td><td className="px-6 py-4 font-bold text-green-700">-25–50%</td></tr>
                                <tr><td className="px-6 py-4">Early Turnover Risk</td><td className="px-6 py-4 font-bold text-green-700">-10–20%</td></tr>
                                <tr><td className="px-6 py-4">Compliance Alignment</td><td className="px-6 py-4 font-bold text-green-700">+20–40%</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* H2 - Implementation Framework */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Implementation Framework</h2>
                    <div className="space-y-6 border-l-4 border-blue-500 pl-6">
                        {[
                            "Diagnostic Assessment",
                            "Screening OS Configuration",
                            "Document & Medical Workflow Setup",
                            "Fast-Clearance Activation",
                            "Real-Time Dashboard Deployment",
                            "Weekly Optimization Loop"
                        ].map((step, idx) => (
                            <div key={idx}>
                                <h3 className="text-xl font-bold text-slate-900">{idx + 1}. {step}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* H2 - Mini Case Study */}
                <section className="py-12 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Mini Case Study: Food Production Facility (Hall County)</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-red-600 mb-2">The Problem</h4>
                            <p className="text-slate-700 mb-4">27% screening backlog + ramp-up delays of 3–5 days.</p>
                            <h4 className="font-bold text-blue-600 mb-2">The Solution</h4>
                            <p className="text-slate-700">Screening OS implementation with Fast-Clearance routing and Document Intelligence.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-green-600 mb-2">The Result (45 Days)</h4>
                            <ul className="list-disc pl-5 space-y-1 text-slate-700">
                                <li>Screening Delays: <strong>-52%</strong></li>
                                <li>Ramp-Ups: <strong>On Time</strong></li>
                                <li>Compliance Errors: <strong>-41%</strong></li>
                            </ul>
                            <div className="mt-6">
                                <Link
                                    href="/insights/city/hall-county-recruitment"
                                    className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-300 underline-offset-4"
                                >
                                    See the Hall County workforce profile &rarr;
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
                            { q: "What types of screenings are supported?", a: "We support physicals, drug screens, vaccination verification, and specialized medical clearances." },
                            { q: "How fast can workers be medically cleared?", a: "Our Fast-Clearance Routing typically accelerates the process by 35-50% compared to traditional vendors." },
                            { q: "Does this work for multi-site hiring?", a: "Yes, our Dashboard provides centralized visibility across unlimited locations." },
                            { q: "Can clearance delays really reduce production output?", a: "Absolutely. Every delayed worker is a vacant station. We close that gap." },
                            { q: "Does FNSG OS manage medical documentation?", a: "Yes, securely and in full compliance with HIPAA and employment laws." },
                            { q: "Is this integrated with On-Site Workforce OS?", a: "Seamlessly. Once cleared, workers flow directly into the On-Site management system." }
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
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Accelerate Your Hiring?</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        Stop letting screening delays kill your production momentum. Get the data-driven speed you need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-white hover:bg-slate-50 transition-all transform hover:scale-105"
                        >
                            Request a Health Screening OS Strategy Session
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-bold rounded-lg text-white hover:bg-slate-800 transition-all"
                        >
                            Download the Screening Pipeline Efficiency Brief
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
