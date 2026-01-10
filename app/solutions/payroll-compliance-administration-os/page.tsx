import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';
import PremiumCTA from '@/app/components/PremiumCTA';

export const metadata: Metadata = {
    title: "Payroll & Compliance Administration OS — Reduce Risk, Automate Accuracy",
    description: "Payroll & Compliance OS automates accuracy, reduces regulatory risk, centralizes documentation, and provides real-time payroll and compliance intelligence for workforce operations.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/payroll-compliance-administration-os',
    },
    openGraph: {
        title: "Payroll & Compliance Administration OS — Reduce Risk, Automate Accuracy",
        description: "Payroll & Compliance OS automates accuracy, reduces regulatory risk, centralizes documentation, and provides real-time payroll and compliance intelligence for workforce operations.",
        url: 'https://firstnationalstaffing.com/solutions/payroll-compliance-administration-os',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function PayrollCompliancePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Payroll & Compliance Administration OS",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": "Georgia",
        "description": "Payroll & Compliance OS automates accuracy, reduces regulatory risk, centralizes documentation, and provides real-time payroll and compliance intelligence for workforce operations.",
        "url": "https://firstnationalstaffing.com/solutions/payroll-compliance-administration-os"
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
                        Payroll & Compliance Administration OS: <br />
                        <span className="text-blue-500">Reduce Risk, Automate Accuracy,</span> and Strengthen Operational Integrity
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
                        Eliminate the uncertainty of manual payroll and fragmented compliance. Centralize control, verification, and audit readiness.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Solutions', href: '/solutions' },
                    { label: 'Payroll & Compliance Administration OS', href: '/solutions/payroll-compliance-administration-os' }
                ]} />

                {/* H2 - The Operational Problems It Solves (Card Grid) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">The Operational Problems It Solves</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Payroll Errors",
                                desc: "Miscalculations, missed hours, and OT mistakes caused by inconsistent data and manual tracking."
                            },
                            {
                                title: "Compliance Blindspots",
                                desc: "Undetected I-9 errors, E-Verify failures, worker classification issues, and exposure to audits."
                            },
                            {
                                title: "Lack of Document Control",
                                desc: "Scattered timesheets, training logs, PPE tracking, and OSHA records create liability."
                            },
                            {
                                title: "Supervisor Reporting Gaps",
                                desc: "Inconsistent reporting of hours, absences, and overtime by supervisors on the floor."
                            },
                            {
                                title: "HR & Ops Misalignment",
                                desc: "Payroll, HR, and Operations each working from different data sets, creating chaos."
                            },
                            {
                                title: "High Legal Risk Exposure",
                                desc: "Errors in classification and documentation are the weakest link in your defense against lawsuits."
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
                            Industrial operations generate high volumes of data across simultaneous shifts. Fragmented documentation, human error, and disconnected systems lead to duplication and blind spots.
                        </p>
                        <p className="font-bold text-slate-900">
                            Most teams operate "blind," relying on spreadsheets or memory. Payroll & Compliance OS connects every data point into a single, verified operational platform.
                        </p>
                    </div>
                </section>

                {/* Visual Preview Placeholder */}
                <div className="py-8">
                    <div className="os-visual-preview bg-slate-200 h-64 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                        <p className="text-slate-500 font-medium">Payroll Intelligence & Compliance Dashboard</p>
                    </div>
                </div>

                {/* H2 - How Payroll & Compliance Administration OS Works (Module Grid) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How Payroll & Compliance Administration OS Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Payroll Data Intelligence",
                                desc: "Identifies errors, deviations, unauthorized OT, and salary discrepancies in real-time."
                            },
                            {
                                title: "Compliance Verification OS",
                                desc: "Validates I-9, W-4, E-Verify, classification, OSHA logs, and PPE accountability."
                            },
                            {
                                title: "Document Intelligence Layer",
                                desc: "Centralizes contracts, incident reports, training logs, and audit-ready timesheets."
                            },
                            {
                                title: "Workforce Ledger Engine",
                                desc: "Financial-operational model crossing hours, OT, attendance, shifts, and classification."
                            },
                            {
                                title: "Supervisor Control Panel",
                                desc: "Estandarizes daily reporting for absences, tardiness, shift changes, and hour validation."
                            },
                            {
                                title: "Audit Defense Package",
                                desc: "Generates organized documentation, full traceability, and automatic regulatory reports."
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
                            "Payroll Intelligence OS",
                            "Compliance OS",
                            "Document AI Layer",
                            "Workforce Ledger Engine",
                            "Attendance OS",
                            "Workforce Diagnostic OS",
                            "Risk & OSHA Intelligence"
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
                                <tr><td className="px-6 py-4">Payroll Accuracy</td><td className="px-6 py-4 font-bold text-green-700">+30–60%</td></tr>
                                <tr><td className="px-6 py-4">Compliance Errors</td><td className="px-6 py-4 font-bold text-green-700">-40–75%</td></tr>
                                <tr><td className="px-6 py-4">Audit Readiness Score</td><td className="px-6 py-4 font-bold text-green-700">+35–55%</td></tr>
                                <tr><td className="px-6 py-4">Supervisor Data Accuracy</td><td className="px-6 py-4 font-bold text-green-700">+25–45%</td></tr>
                                <tr><td className="px-6 py-4">Classification Errors</td><td className="px-6 py-4 font-bold text-green-700">-50–70%</td></tr>
                                <tr><td className="px-6 py-4">Risk Exposure</td><td className="px-6 py-4 font-bold text-green-700">-20–40%</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* H2 - Implementation Framework */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Implementation Framework</h2>
                    <div className="space-y-6 border-l-4 border-blue-500 pl-6">
                        {[
                            "Diagnostic Compliance Audit",
                            "OS Configuration (Industry/Volume)",
                            "Data Mapping & Ledger Setup",
                            "Compliance Synchronization",
                            "Payroll Intelligence Activation",
                            "Weekly Compliance & Payroll Reports"
                        ].map((step, idx) => (
                            <div key={idx}>
                                <h3 className="text-xl font-bold text-slate-900">{idx + 1}. {step}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* H2 - Mini Case Study */}
                <section className="py-12 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Mini Case Study: Logistics Company (Norcross)</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-red-600 mb-2">The Problem</h4>
                            <p className="text-slate-700 mb-4">12% monthly payroll errors, I-9 failures, and high audit risk.</p>
                            <h4 className="font-bold text-blue-600 mb-2">The Solution</h4>
                            <p className="text-slate-700">Payroll Intelligence Engine + Compliance OS + Document AI Layer.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-green-600 mb-2">The Result (60 Days)</h4>
                            <ul className="list-disc pl-5 space-y-1 text-slate-700">
                                <li>Payroll Accuracy: <strong>+49%</strong></li>
                                <li>Compliance Errors: <strong>-62%</strong></li>
                                <li>Internal Audit: <strong>Zero findings</strong></li>
                                <li>Supervisor Accuracy: <strong>+37%</strong></li>
                            </ul>
                            <div className="mt-6">
                                <Link
                                    href="/insights/city/norcross"
                                    className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-300 underline-offset-4"
                                >
                                    See Norcross labor insights &rarr;
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
                            { q: "Does Payroll OS replace our payroll provider?", a: "No, it sits on top of it as an intelligence layer to verify data BEFORE it is processed." },
                            { q: "What compliance areas does the OS cover?", a: "Federal/State labor laws, OSHA recordkeeping, I-9/E-Verify, and industry-specific certifications." },
                            { q: "Can this reduce classification risk?", a: "Yes. The system flags potential misclassifications between 1099 and W-2 roles immediately." },
                            { q: "How do supervisors report hours?", a: "Through a simplified, standardized mobile or desktop digital log that feeds directly into the ledger." },
                            { q: "Is this integrated with Attendance OS?", a: "Fully. Attendance data flows into Payroll OS to automate hour calculations and detect anomalies." },
                            { q: "Does this prepare us for OSHA/State audits?", a: "Yes. The Audit Defense Package keeps all records organized and retrievable in minutes." }
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
                    <h2 className="text-3xl font-bold text-white mb-6">Stop Operating in the Dark.</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        Secure your operation with automated accuracy and compliance defense.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact/general-inquiries"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-white hover:bg-slate-50 transition-all transform hover:scale-105"
                        >
                            Request a Payroll & Compliance OS Strategy Session
                        </Link>
                        <Link
                            href="/contact/general-inquiries"
                            className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-bold rounded-lg text-white hover:bg-slate-800 transition-all"
                        >
                            Download the Compliance Risk Reduction Brief
                        </Link>
                    </div>
                </div>
                <PremiumCTA />
            </div>
        </main >
    );
}
