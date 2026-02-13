import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import Link from 'next/link';
import Script from 'next/script';
import { Sliders, Wrench, Factory, RotateCcw, BoxSelect, ShieldCheck, CheckCircle, AlertTriangle, Users, Clock, Shield, TrendingUp, Zap } from 'lucide-react';
import PremiumCTA from '@/app/components/PremiumCTA';
import FaqJsonLd from '@/app/components/seo/faq-json-ld';
import AuthorByline from '@/app/components/seo/author-byline';
import FreshnessBadge from '@/app/components/seo/freshness-badge';
import CitationSource from '@/app/components/seo/citation-source';

export const metadata = {
    title: "Manufacturing & Production Staffing Solutions in Georgia | FNSG",
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

    const faqData = [
        { q: "How do you recruit experienced machine operators?", a: "Through intelligent skill-based matching: we assess prior equipment types (CNC, presses, extrusion, injection molding), relevant certifications, and hands-on experience levels. We maintain an active pipeline of pre-qualified machine operators with validated competencies. Pay intelligence benchmarks against Hall, Jackson, and Metro Atlanta markets to prevent talent leakage to competing manufacturers." },
        { q: "Can you support 3rd shift in high-rotation environments?", a: "Yes, our Attendance Intelligence OS specifically predicts night-shift attendance challenges. We deploy shift-specific recruitment strategies, offer targeted incentives for overnight workers, identify at-risk candidates, and provide dedicated overnight supervision. Third-shift staffing is a core strength with 10–18% improved attendance reliability." },
        { q: "Do you provide OSHA-compliant training?", a: "Yes, comprehensively. Our Safety Operating System covers OSHA 1910 standards, lockout/tagout procedures, chemical handling, ergonomics mapping, PPE compliance tracking, incident trend analysis, and documentation. All staff receive certified training with audit-ready records. We provide continuous refresher training and hazard-specific protocols." },
        { q: "Can you staff ramp-ups of 20–100 workers?", a: "Yes—this is a core FNSG specialty. Our high-velocity ramp-up engine deploys 20–100 production workers within 24–72 hours. Rapid deployment includes pre-screened line operators, machine operators, quality staff, and material handlers. On-site supervision manages initial training, safety orientation, equipment familiarization, and continuous coaching." },
        { q: "How fast can you replace production line workers?", a: "Typically 24–48 hours for standard production positions, 48–72 hours for specialized machine operator roles. Our replacement process includes immediate candidate notification, background verification, role-specific briefing, on-site supervision, and quality assurance during first shifts. Emergency requests receive prioritized response." },
        { q: "Do you offer bilingual staffing?", a: "Yes, fully bilingual English/Spanish production teams available for all manufacturing roles. Bilingual staff include line operators, machine operators, material handlers, quality technicians, and team leads. Bilingual capabilities improve safety communication, reduce OSHA compliance gaps, and enhance team cohesion in diverse manufacturing environments." }
    ];

    return (
        <main className="bg-white min-h-screen py-12">
            <Script
                id="manufacturing-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <FaqJsonLd faqs={faqData} />

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
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Manufacturing & Production Staffing Solutions in Georgia — Powered by FNSG</h1>
                                <AuthorByline name="James Whitfield" title="Manufacturing Operations Lead, FNSG" expertise="Industrial Workforce Planning" reviewDate="January 2025" />
                                <FreshnessBadge dateModified="2025-01-15" label="Q1 2025" updateCadence="Quarterly" />
                                <p className="text-lg text-slate-700 leading-relaxed mb-6 mt-8">
                                    The manufacturing industry in Georgia faces growing pressures: high turnover, shortage of skilled operators, high demand for 2nd and 3rd shifts, attendance issues, aggressive ramp-ups, complex OSHA compliance, and a lack of operational intelligence for workforce planning.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                    <span className="text-blue-600">FNSG helps manufacturing plants build stable, safe, and highly predictable workforces.</span>
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

                            {/* How FNSG Solves These Problems */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">How FNSG Solves These Problems</h2>

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
                                                <th className="p-4 border-b border-slate-700">Improvement with FNSG</th>
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
                                <div className="mt-4">
                                    <CitationSource
                                        source="FNSG OS Analytics & BLS Industry Data"
                                        href="https://www.bls.gov/iag/"
                                        detail="Industry at a Glance, 2024"
                                        compact={true}
                                    />
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
                                    Manufacturing demands more rigor than other industries. FNSG covers:
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
                                <div className="mt-6">
                                    <CitationSource
                                        source="OSHA Standards & Compliance Data"
                                        href="https://www.osha.gov/laws-regs/regulations/standardnumber"
                                        detail="29 CFR 1910 General Industry Standards"
                                        compact={true}
                                    />
                                </div>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqData.map((faq, index) => (
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
                            <PremiumCTA />

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
