import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "On-Site Workforce Management OS — Stabilize Your Operation With Embedded Intelligence",
    description: "Embedded workforce management solution that stabilizes attendance, improves safety compliance, optimizes production floors, and provides real-time workforce intelligence via FNSG OS.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/on-site-workforce-management-os',
    },
    openGraph: {
        title: "On-Site Workforce Management OS — Stabilize Your Operation With Embedded Intelligence",
        description: "Embedded workforce management solution that stabilizes attendance, improves safety compliance, optimizes production floors, and provides real-time workforce intelligence via FNSG OS.",
        url: 'https://firstnationalstaffing.com/solutions/on-site-workforce-management-os',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function OnSiteWorkforceManagementPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "On-Site Workforce Management OS",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": "Georgia",
        "description": "Embedded workforce management solution that stabilizes attendance, improves safety compliance, optimizes production floors, and provides real-time workforce intelligence via FNSG OS.",
        "url": "https://firstnationalstaffing.com/solutions/on-site-workforce-management-os"
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
                        On-Site Workforce Management OS: <br />
                        <span className="text-blue-500">Stabilize Your Operation</span> With Embedded Workforce Intelligence
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
                        Control your contingent workforce from the inside out. We deploy embedded leadership to enforce discipline, safety, and productivity in real-time.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Solutions', href: '/solutions' },
                    { label: 'On-Site Workforce Management OS', href: '/solutions/on-site-workforce-management-os' }
                ]} />

                {/* The Problem Context */}
                <div className="py-12 prose prose-lg max-w-none text-slate-700">
                    <p className="lead text-2xl font-light text-slate-900 mb-8">
                        Industrial operations don't fail due to a lack of personnel. They fail due to a lack of <strong>supervision, structure, compliance, visibility, and operational discipline.</strong>
                    </p>
                    <p>
                        On-Site Workforce Management OS places a dedicated FNSG team inside your facility to manage attendance, training, safety compliance, and shift stability—so your internal supervisors can focus on production.
                    </p>
                </div>

                {/* H2 - The Operational Problems It Solves (Grid Layout) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">The Operational Problems It Solves</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Weak on Insufficient Supervision",
                                desc: "Internal supervisors are often overwhelmed and cannot effectively manage temporary workers alongside their core duties."
                            },
                            {
                                title: "Uncontrolled NCNS & Turnover",
                                desc: "Without immediate accountability and engagement, attendance issues spiral into systemic production failures."
                            },
                            {
                                title: "Poor Training & Onboarding",
                                desc: "Inadequate onboarding leads to confusion and frustration, driving 60% of turnover within the first 7 days."
                            },
                            {
                                title: "Ignored OSHA Risks",
                                desc: "Documentation gaps and behavioral safety oversights leave your facility vulnerable to costly OSHA violations."
                            },
                            {
                                title: "Unbalanced Operations",
                                desc: "Incomplete shifts slow down lines, causing production delays and failed order fulfillment."
                            },
                            {
                                title: "No Workforce Quality Ownership",
                                desc: "When quality issues arise, lack of direct temporary workforce oversight means problems aren't caught until output is affected."
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
                            Most companies lack dedicated leaders focused solely on the temporary workforce. They are missing daily performance metrics, internal audits, and real-time process supervision.
                        </p>
                        <p className="font-bold text-slate-900">
                            Without someone "on the floor" actively managing training, PPE, and attendance, operational gaps widen everyday. On-Site OS corrects this from Day 1.
                        </p>
                    </div>
                </section>

                {/* H2 - How It Works */}
                <section className="py-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How On-Site Workforce Management OS Works</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "1. Embedded Workforce Command Team",
                                desc: "A dedicated FNSG leader on-site to direct the workforce, solve real-time issues, stabilize shifts, control PPE/grooming, and drive weekly KPIs."
                            },
                            {
                                title: "2. Live Attendance OS Deployment",
                                desc: "Predictive control of absence, tardiness, and shift risk using historical behavior modeling to flag early incidents."
                            },
                            {
                                title: "3. Daily OSHA & Safety Compliance",
                                desc: "We supervise PPE usage, safety checklists, incident logs, housekeeping, and unsafe behaviors in high-risk zones."
                            },
                            {
                                title: "4. On-Site Training & Onboarding OS",
                                desc: "Implementing our 7-Day Retention Framework: Culture, Safety, Line Walks, Skill Matching, Shadowing, and performance assessments."
                            },
                            {
                                title: "5. Production Floor Optimization",
                                desc: "Optimizing staff placement, line pace, and shift assignments based on individual skills and physical stamina."
                            },
                            {
                                title: "6. Workforce Reporting & Analytics",
                                desc: "Weekly intelligence on attendance, turnover, incidents, performance, cleanliness, and immediate actionable recommendations."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="bg-blue-50 text-blue-800 font-bold p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600 mt-2">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* H2 - Integrated Workforce Training & Operational Support Framework */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Integrated Workforce Training & Operational Support Framework</h2>
                    <p className="text-lg text-slate-700 mb-10 max-w-4xl">
                        A high-performance workforce requires more than supervision. It requires the integration of Training Excellence and Operational Support. This framework unites skill development with on-floor execution to create a self-reinforcing cycle of performance.
                    </p>

                    {/* Row 1: The Dual Challenge */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4">The Dual Challenge</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h4 className="text-lg font-bold text-blue-600 mb-3">Build Employee Capability</h4>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Practical skill development</li>
                                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> On-site workforce training</li>
                                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Developing capable, adaptive employees</li>
                                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Fostering engagement and readiness</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h4 className="text-lg font-bold text-blue-600 mb-3">Maintain Operational Excellence</h4>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Streamlined execution</li>
                                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Strong coordination and structure</li>
                                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Reliable workflow and process discipline</li>
                                <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Ensuring consistent daily performance</li>
                            </ul>
                        </div>
                    </div>

                    {/* Row 2: The Two Strategic Pillars */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4">The Two Strategic Pillars</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Pillar I – Training Excellence</h4>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> On-site workforce training</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Practical skill development</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Building capable employees</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Increasing engagement</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Pillar II – Robust Operational Support</h4>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Efficient, streamlined operations</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Coordinated execution</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Supportive infrastructure</li>
                                <li className="flex items-start"><span className="text-green-500 mr-2">✔</span> Maintaining high performance</li>
                            </ul>
                        </div>
                    </div>

                    {/* Row 3: The Strategic Outcomes */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4">The Strategic Outcomes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Sustained Growth</h4>
                            <p className="text-sm text-slate-600 mb-2">Adaptable workforce ready for new technologies</p>
                            <p className="text-sm text-slate-600 mb-2">Scalable operations without sacrificing quality</p>
                            <p className="text-sm text-slate-600">Capturing opportunities through capability + execution</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Improved Performance</h4>
                            <p className="text-sm text-slate-600 mb-2">Higher quality output and fewer errors</p>
                            <p className="text-sm text-slate-600 mb-2">Elimination of bottlenecks</p>
                            <p className="text-sm text-slate-600">Stronger productivity indicators</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-900 mb-3">Stronger Employee Loyalty</h4>
                            <p className="text-sm text-slate-600 mb-2">Training creates growth pathways</p>
                            <p className="text-sm text-slate-600 mb-2">Operational support reduces frustration</p>
                            <p className="text-sm text-slate-600">Dual investment leads to higher retention</p>
                        </div>
                    </div>
                </section>

                {/* PDF Download Block */}
                <div className="w-full my-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="text-2xl font-semibold mb-3">
                        Download the Integrated Workforce Advantage Framework
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Access the full strategic guide detailing how Training Excellence and Operational Support combine to create a powerful, self-reinforcing cycle of workforce performance and productivity.
                    </p>
                    <a
                        href="/downloads/integrated-workforce-advantage.pdf"
                        download
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Download PDF
                    </a>
                </div>

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
                                <tr><td className="px-6 py-4">3rd Shift Stability</td><td className="px-6 py-4 font-bold text-green-700">+10–28%</td></tr>
                                <tr><td className="px-6 py-4">Turnover Reduction</td><td className="px-6 py-4 font-bold text-green-700">-15–35%</td></tr>
                                <tr><td className="px-6 py-4">Line Productivity</td><td className="px-6 py-4 font-bold text-green-700">+8–20%</td></tr>
                                <tr><td className="px-6 py-4">OSHA Incident Rate</td><td className="px-6 py-4 font-bold text-green-700">-12–30%</td></tr>
                                <tr><td className="px-6 py-4">Ramp-Up Success</td><td className="px-6 py-4 font-bold text-green-700">+25–45%</td></tr>
                                <tr><td className="px-6 py-4">NCNS Rate</td><td className="px-6 py-4 font-bold text-green-700">-18–40%</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* H2 - Implementation Framework */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Implementation Framework</h2>
                    <div className="space-y-6 border-l-4 border-blue-500 pl-6">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">1. Pre-Deployment Diagnostic</h3>
                            <p className="text-slate-600">Comprehensive evaluation of shifts, risks, current leadership, and critical production lines.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">2. Install OS On-Site Manager</h3>
                            <p className="text-slate-600">Deployment of a dedicated, expert operational leader embedded within your facility.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">3. Activate OS Modules</h3>
                            <p className="text-slate-600">Launch of Attendance, Safety, Compliance, and Performance tracking systems.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">4. Create Workforce Playbook</h3>
                            <p className="text-slate-600">Development of custom operational guides for roles, safety protocols, and training standards.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">5. Reporting & Optimization Loop</h3>
                            <p className="text-slate-600">Weekly cycles of data review and continuous operational improvement.</p>
                        </div>
                    </div>
                </section>

                {/* H2 - Mini Case Study */}
                <section className="py-12 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Mini Case Study: Warehouse & Manufacturing Hub (Gwinnett County)</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-red-600 mb-2">The Problem</h4>
                            <p className="text-slate-700 mb-4">42% turnover, rampant PPE non-compliance, and consistent order backlogs.</p>
                            <h4 className="font-bold text-blue-600 mb-2">The Solution</h4>
                            <p className="text-slate-700">On-Site OS Team deployed attendance controls, standardized training, line-side supervision, PPE audits, and Pay Intelligence adjustments.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-green-600 mb-2">The Result (45 Days)</h4>
                            <ul className="list-disc pl-5 space-y-1 text-slate-700">
                                <li>Stability: <strong>+21%</strong></li>
                                <li>NCNS Rate: <strong>-33%</strong></li>
                                <li>OSHA Micro-incidents: <strong>-27%</strong></li>
                                <li>Productivity: <strong>+18%</strong></li>
                            </ul>
                            <div className="mt-6">
                                <Link
                                    href="/insights/city/duluth"
                                    className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-blue-300 underline-offset-4"
                                >
                                    View Gwinnett Industrial Staffing Insights &rarr;
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
                            { q: "How fast can we deploy an On-Site OS Manager?", a: "Typically within 5-10 business days following the initial diagnostic phase." },
                            { q: "Do you support multi-shift operations?", a: "Yes, we can deploy coverage for 1st, 2nd, and 3rd shifts, including weekend supervisors." },
                            { q: "Is this only for large facilities?", a: "While ideal for 50+ headcount, we scale the model for smaller, high-complexity operations as well." },
                            { q: "Can OS managers improve training outcomes?", a: "Yes. They take ownership of the critical 7-day training window, ensuring standardization." },
                            { q: "Does On-Site OS reduce OSHA risk?", a: "Absolutely. By enforcing daily safety checklists and behavioral observation, we proactively reduce risk." },
                            { q: "How often do we receive data reports?", a: "You receive weekly comprehensive reports, with immediate alerts for critical incidents." }
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
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Take Control of Your Workforce?</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        Embed the leadership and intelligence you need to stabilize operations and hit production targets.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact/general-inquiries"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-white hover:bg-slate-50 transition-all transform hover:scale-105"
                        >
                            Request an On-Site Workforce OS Strategy Session
                        </Link>
                        <Link
                            href="/contact/general-inquiries"
                            className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-bold rounded-lg text-white hover:bg-slate-800 transition-all"
                        >
                            Download the On-Site Workforce OS Implementation Guide
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
