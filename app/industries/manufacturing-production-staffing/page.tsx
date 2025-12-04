import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import Link from 'next/link';
import Script from 'next/script';
import { AlertTriangle, Users, Clock, Shield, TrendingUp, Zap, CheckCircle } from 'lucide-react';

export const metadata = {
    title: "Manufacturing & Production Staffing Solutions in Georgia | FNSG OS",
    description: "Intelligence-driven staffing solutions for manufacturing and production operations, including skilled machine operators, line workers, QA/QC, and on-site workforce management programs.",
    openGraph: {
        title: "Manufacturing & Production Staffing Solutions",
        url: "https://firstnationalstaffing.com/industries/manufacturing-production-staffing",
        type: "website"
    }
};

export default function ManufacturingProductionPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Manufacturing & Production Staffing",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Georgia"
        },
        "description": "Intelligence-driven staffing solutions for manufacturing and production operations, including skilled machine operators, line workers, QA/QC, and on-site workforce management programs.",
        "url": "https://firstnationalstaffing.com/industries/manufacturing-production-staffing"
    };

    return (
        <main className="bg-white min-h-screen py-12">
            <Script
                id="manufacturing-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Industries', href: '/industries' },
                            { label: 'Manufacturing & Production', href: '/industries/manufacturing-production-staffing' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Manufacturing & Production Staffing Solutions in Georgia — Powered by FNSG OS</h1>
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    The manufacturing industry in Georgia faces growing pressures: high turnover, shortage of skilled operators, high demand for 2nd and 3rd shifts, attendance issues, aggressive ramp-ups, complex OSHA compliance, and a lack of operational intelligence for workforce planning.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                    <span className="text-blue-600">FNSG OS helps manufacturing plants build stable, safe, and highly predictable workforces.</span>
                                </p>
                            </section>

                            {/* Operational Challenges */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Operational Challenges in Manufacturing & Production</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <AlertTriangle className="w-5 h-5" /> High Physical Demands → High Turnover
                                        </h3>
                                        <p className="text-red-800 text-sm">Manufacturing involves more physical wear than warehousing, naturally elevating turnover rates.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Users className="w-5 h-5" /> Skilled Operator Shortages
                                        </h3>
                                        <p className="text-red-800 text-sm">Machine operators, QA techs, line techs, extrusion operators, and blending techs are increasingly difficult to recruit.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Clock className="w-5 h-5" /> Shift Instability (2nd & 3rd Shift)
                                        </h3>
                                        <p className="text-red-800 text-sm">The most productive plants operate 24/7 but often lack stability on night shifts.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Shield className="w-5 h-5" /> Compliance & OSHA Complexity
                                        </h3>
                                        <p className="text-red-800 text-sm">Manufacturing has severe risks: cuts, entrapments, advanced machinery, critical ergonomics, chemicals, and extreme temperatures.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <TrendingUp className="w-5 h-5" /> Unpredictable Ramp-Ups
                                        </h3>
                                        <p className="text-red-800 text-sm">When a production contract lands, you need 10–100 people fast, often without an existing pipeline.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Zap className="w-5 h-5" /> Training Gaps
                                        </h3>
                                        <p className="text-red-800 text-sm">New operators require standardized training that many plants struggle to execute internally.</p>
                                    </div>
                                </div>
                            </section>

                            {/* How FNSG OS Solves These Problems */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">How FNSG OS Solves These Problems</h2>

                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Attendance Intelligence OS</h3>
                                            <p className="text-slate-600 mt-2">
                                                Attendance prediction by shift, production line, and role.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Skill-Based Worker Matching</h3>
                                            <p className="text-slate-600 mt-2">
                                                Intelligent matching between prior experience, physical capability, and machinery type.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Pay Intelligence Layer</h3>
                                            <p className="text-slate-600 mt-2">
                                                Adjusts wage competitiveness against Hall, Jackson, Gwinnett, Forsyth, and Metro ATL markets.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">4</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">On-Site Workforce Management</h3>
                                            <p className="text-slate-600 mt-2">
                                                Dedicated supervision for: training, attendance, operations, audit, and compliance.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">5</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">OSHA & Safety OS</h3>
                                            <p className="text-slate-600 mt-2">
                                                Includes: PPE tracking, automatic reports, incident trending, documented training, and internal audits.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">6</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">High-Velocity Ramp-Up Engine</h3>
                                            <p className="text-slate-600 mt-2">
                                                Coverage of 10–100 production roles in 24–72 hours.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* KPIs We Improve */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">KPIs We Improve in Manufacturing</h2>
                                <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-900 text-white font-semibold">
                                            <tr>
                                                <th className="p-4 border-b border-slate-700">KPI</th>
                                                <th className="p-4 border-b border-slate-700">Improvement with FNSG OS</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr><td className="p-4 font-medium text-slate-900">Attendance Reliability</td><td className="p-4 text-green-600 font-bold">+10–18%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Training Completion</td><td className="p-4 text-green-600 font-bold">+30–50%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Turnover Reduction</td><td className="p-4 text-green-600 font-bold">-15–32%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Ramp-Up Time</td><td className="p-4 text-green-600 font-bold">24–72 hours</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Safety Incidents</td><td className="p-4 text-green-600 font-bold">-10–25%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Productivity Stability</td><td className="p-4 text-green-600 font-bold">+12–20%</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Roles We Staff */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Roles We Staff in Manufacturing & Production</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Production Line</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Line Operators</li>
                                            <li>• Packers</li>
                                            <li>• Assemblers</li>
                                            <li>• Sorters</li>
                                            <li>• Blending Operators</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Skilled Roles</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Machine Operators</li>
                                            <li>• CNC / Press Operators</li>
                                            <li>• Extrusion Operators</li>
                                            <li>• Injection Molding Operators</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Quality Control (QC)</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Quality Assurance (QA)</li>
                                        </ul>
                                        <h3 className="font-bold text-slate-900 mt-4 mb-2 border-b border-slate-200 pb-2">Warehouse Inside Plants</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Material Handling</li>
                                            <li>• Shipping/Receiving</li>
                                            <li>• Inventory Control</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Leadership</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Line Leads</li>
                                            <li>• Supervisors</li>
                                            <li>• Safety Coordinators</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Compliance & Safety Layer */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">Compliance & Safety Layer</h2>
                                <p className="mb-6 text-slate-300">
                                    Manufacturing demands more rigor than other industries. FNSG OS covers:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>OSHA 1910 standards</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Lockout/Tagout tracking</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Chemical handling prerequisites</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Ergonomics mapping</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>PPE compliance logs</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Audit-ready documentation</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Safety incident trend analysis</span>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "How do you recruit experienced machine operators?", a: "Through skill matching, pay benchmarking, and maintaining a robust operator pipeline." },
                                        { q: "Can you support 3rd shift in high-rotation environments?", a: "Yes, using Attendance OS, targeted incentives, and risk prediction." },
                                        { q: "Do you provide OSHA-compliant training?", a: "Yes, through our Safety OS and audit-ready documentation." },
                                        { q: "Can you staff ramp-ups of 20–100 workers?", a: "This is a core specialty of the FNSG OS." },
                                        { q: "How fast can you replace production line workers?", a: "Typically between 24–48 hours." },
                                        { q: "Do you offer bilingual staffing?", a: "Yes, we provide bilingual staffing solutions." }
                                    ].map((faq, index) => (
                                        <details key={index} className="group border border-slate-200 rounded-lg p-4 open:bg-slate-50 transition-all">
                                            <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                                                {faq.q}
                                                <span className="transition group-open:rotate-180">▼</span>
                                            </summary>
                                            <p className="text-slate-600 mt-3 text-sm">{faq.a}</p>
                                        </details>
                                    ))}
                                </div>
                            </section>

                            {/* CTA Section */}
                            <section className="py-8 border-t border-slate-200">
                                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                    <Link
                                        href="/contact?industry=manufacturing"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Manufacturing Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/resources/reports/manufacturing-2025"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Download the 2025 Manufacturing Workforce Intelligence Report
                                    </Link>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
