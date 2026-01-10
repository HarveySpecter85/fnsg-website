import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';
import PremiumCTA from '@/app/components/PremiumCTA';

export const metadata: Metadata = {
    title: "Direct Hire Recruitment OS — Precision Hiring Powered by Workforce Intelligence",
    description: "Intelligence-driven Direct Hire solution using Workforce OS modules for predicting stability, matching skills, calibrating pay, evaluating culture fit, and improving hiring accuracy.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/direct-hire-recruitment-os',
    },
    openGraph: {
        title: "Direct Hire Recruitment OS — Precision Hiring Powered by Workforce Intelligence",
        description: "Intelligence-driven Direct Hire solution using Workforce OS modules for predicting stability, matching skills, calibrating pay, evaluating culture fit, and improving hiring accuracy.",
        url: 'https://firstnationalstaffing.com/solutions/direct-hire-recruitment-os',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function DirectHireRecruitmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Direct Hire Recruitment OS",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": "Georgia",
        "description": "Intelligence-driven Direct Hire solution using Workforce OS modules for predicting stability, matching skills, calibrating pay, evaluating culture fit, and improving hiring accuracy.",
        "url": "https://firstnationalstaffing.com/solutions/direct-hire-recruitment-os"
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
                        Direct Hire Recruitment OS: <br />
                        <span className="text-blue-500">Precision Hiring</span> Powered by Workforce Intelligence
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
                        Moving beyond intuition. A data-driven system to identify, evaluate, and select talent with predictive performance modeling.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Solutions', href: '/solutions' },
                    { label: 'Direct Hire Recruitment OS', href: '/solutions/direct-hire-recruitment-os' }
                ]} />

                {/* H2 - The Operational Problems It Solves (Card Grid) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">The Operational Problems It Solves</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Poor Quality of Hire",
                                desc: "Resume-based hiring rarely predicts actual plant performance. We screen for operational capability, not just keywords."
                            },
                            {
                                title: "High Early Turnover (0–60 Days)",
                                desc: "60% of turnover happens in the first 8 weeks. We identify flight risks before the offer is even made."
                            },
                            {
                                title: "Interview-to-Performance Gap",
                                desc: "Eliminate the gap between candidates who 'interview well' and those who actually perform on the line."
                            },
                            {
                                title: "Wrong Role Fit",
                                desc: "Physical strength, thermal tolerance, and ergonomic fit are often overlooked, leading to injury and quitting."
                            },
                            {
                                title: "Slow Hiring Pipelines",
                                desc: "Internal teams lack the time to source, screen, and validate at speed, leaving critical roles vacant."
                            },
                            {
                                title: "Bad Cultural Fit",
                                desc: "Misalignment between supervisor style and candidate personality leads to immediate friction and resignation."
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
                            Traditional recruitment relies on intuition, not data. It fails to evaluate stability patterns by location, physical risks, or the compatibility between role, shift, and internal culture.
                        </p>
                        <p className="font-bold text-slate-900">
                            It doesn't predict retention; it only evaluates the interview. Direct Hire Recruitment OS incorporates OPERATIONAL SCIENCE to capture weak signals of risk like commute distance and physical experience—before you hire.
                        </p>
                    </div>
                </section>

                {/* Visual Preview Placeholder */}
                <div className="py-8">
                    <div className="os-visual-preview bg-slate-200 h-64 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                        <p className="text-slate-500 font-medium">Candidate Stability Prediction Dashboard</p>
                    </div>
                </div>

                {/* H2 - How FNSG OS Solves It (Module Grid) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How FNSG OS Solves It</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Skill Fit Engine",
                                desc: "Evaluates technical skills, actual experience, and adaptability to the specific role requirements."
                            },
                            {
                                title: "Stability Prediction Model",
                                desc: "Predicts retention probability at 30/60/90 days based on distance, work history, and shift tolerance."
                            },
                            {
                                title: "Pay Intelligence",
                                desc: "Prevents mal-calibrated offers. Avoids unnecessary overpayment and undervaluing that causes immediate quits."
                            },
                            {
                                title: "Culture & Team Fit OS",
                                desc: "Assesses compatibility with leadership styles, plant pace, and operational values."
                            },
                            {
                                title: "Document & Compliance OS",
                                desc: "Automates pre-offer checks: I-9, E-Verify, health readiness, and OSHA experience validation."
                            },
                            {
                                title: "Role Simulation Scoring",
                                desc: "Scores candidates based on physical ergonomics, repetition capability, and speed potential."
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
                            "Skill Matching Engine",
                            "Pay Intelligence OS",
                            "Workforce Stability Model",
                            "Attendance Intelligence",
                            "Culture Fit Engine",
                            "Compliance OS",
                            "Workforce Forecasting"
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
                                <tr><td className="px-6 py-4">Quality of Hire</td><td className="px-6 py-4 font-bold text-green-700">+20–40%</td></tr>
                                <tr><td className="px-6 py-4">60-Day Retention</td><td className="px-6 py-4 font-bold text-green-700">+22–38%</td></tr>
                                <tr><td className="px-6 py-4">Hiring Speed</td><td className="px-6 py-4 font-bold text-green-700">+25–55%</td></tr>
                                <tr><td className="px-6 py-4">Early Turnover</td><td className="px-6 py-4 font-bold text-green-700">-18–33%</td></tr>
                                <tr><td className="px-6 py-4">Cost Per Hire</td><td className="px-6 py-4 font-bold text-green-700">-12–25%</td></tr>
                                <tr><td className="px-6 py-4">Hiring Accuracy</td><td className="px-6 py-4 font-bold text-green-700">+25–45%</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* H2 - Implementation Framework */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Implementation Framework</h2>
                    <div className="space-y-6 border-l-4 border-blue-500 pl-6">
                        {[
                            "Workforce Diagnostic",
                            "Role & Culture Profiling",
                            "OS Matching Configuration",
                            "Candidate Scoring",
                            "Offer Calibration with Pay Intelligence",
                            "Final 3-Tier Verification",
                            "Post-Hire 60-Day Stability Tracking"
                        ].map((step, idx) => (
                            <div key={idx}>
                                <h3 className="text-xl font-bold text-slate-900">{idx + 1}. {step}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* H2 - Mini Case Study */}
                <section className="py-12 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Mini Case Study: Manufacturer – Forsyth County</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-red-600 mb-2">The Problem</h4>
                            <p className="text-slate-700 mb-4">80% of turnover occurred within the first 45 days.</p>
                            <h4 className="font-bold text-blue-600 mb-2">The Solution</h4>
                            <p className="text-slate-700">Direct Hire OS using Matching + Stability Engine, Pay Intelligence, and Culture Fit OS.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-green-600 mb-2">The Result (90 Days)</h4>
                            <ul className="list-disc pl-5 space-y-1 text-slate-700">
                                <li>Early Turnover: <strong>-31%</strong></li>
                                <li>Hiring Speed: <strong>+44%</strong></li>
                                <li>Outcome: <strong>Better-fit supervisors assigned</strong></li>
                            </ul>
                            <div className="mt-6">
                                <Link
                                    href="/insights/city/forsyth-county-staffing"
                                    className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-300 underline-offset-4"
                                >
                                    See the Forsyth labor profile &rarr;
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
                            { q: "How accurate is the Stability Prediction Model?", a: "Our model typically predicts early attrition risk with 85%+ accuracy by analyzing commute, wage fit, and past tenure." },
                            { q: "Does this replace internal HR interviews?", a: "No, it enhances them. We provide scored candidates so your HR team interviews only the top 10% most likely to succeed." },
                            { q: "What industries benefit most?", a: "Manufacturing, Logistics, and Food Production where early turnover costs are highest." },
                            { q: "Can Direct Hire OS integrate with On-Site OS?", a: "Yes, candidates hired directly can be seamlessly onboarded into the On-Site management system." },
                            { q: "Do you provide candidate reports?", a: "Yes, every candidate comes with a 'Workforce Readiness Scorecard' detailing their strengths and risk factors." },
                            { q: "How long does hiring take with OS?", a: "We typically reduce time-to-fill by 25-50% by eliminating manual screening and utilizing our talent pool data." }
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
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Hire With Precision?</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        Stop guessing. Start hiring based on data, stability predictions, and proven operational fit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact/general-inquiries"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-white hover:bg-slate-50 transition-all transform hover:scale-105"
                        >
                            Request a Direct Hire OS Strategy Session
                        </Link>
                        <Link
                            href="/contact/general-inquiries"
                            className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-bold rounded-lg text-white hover:bg-slate-800 transition-all"
                        >
                            Download the Direct Hire OS Hiring Accuracy Brief
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
