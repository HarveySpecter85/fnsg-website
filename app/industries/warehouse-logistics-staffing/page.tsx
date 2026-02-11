import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import Link from 'next/link';
import Script from 'next/script';
import { PackageCheck, Truck, Clock, Users, ShieldCheck, Box, BarChart3, CheckCircle, AlertTriangle, TrendingUp, Shield } from 'lucide-react';
import PremiumCTA from '@/app/components/PremiumCTA';
import FaqJsonLd from '@/app/components/seo/faq-json-ld';

export const metadata = {
    title: "Warehouse & Logistics Staffing Solutions in Georgia | FNSG",
    description: "Workforce Intelligence-driven staffing for warehouse, distribution, and 3PL operations. Reduce turnover and improve fill rates with FNSG.",
    openGraph: {
        title: "Warehouse & Logistics Staffing Solutions",
        url: "https://firstnationalstaffing.com/industries/warehouse-logistics-staffing",
        type: "website"
    }
};

export default function WarehouseLogisticsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Warehouse & Logistics Staffing",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Georgia"
        },
        "description": "Workforce Intelligence-driven staffing solutions for warehouse and logistics operations including forklift operators, pickers, packers, shipping, receiving, and on-site workforce management.",
        "url": "https://firstnationalstaffing.com/industries/warehouse-logistics-staffing"
    };

    const faqData = [
        { q: "How fast can FNSG staff a warehouse?", a: "Between 24–72 hours depending on the volume required." },
        { q: "How do you stabilize 2nd & 3rd shift?", a: "Through our Attendance OS, targeted incentives, and risk prediction modeling." },
        { q: "Do you provide forklift-certified operators?", a: "Yes, with both internal validations and client-specific practical assessments." },
        { q: "Can you support peak season ramp-ups?", a: "Yes, this is an OS specialty: supporting Q4 logistics peaks and Q2/Q3 production surges." },
        { q: "How do you reduce turnover?", a: "By using predictive models, pay rate intelligence, and dedicated on-site supervision." },
        { q: "Do you offer bilingual staff?", a: "Yes, we provide English/Spanish speakers for warehouse roles and can staff entire bilingual teams." }
    ];

    return (
        <main className="bg-white min-h-screen py-12">
            <Script
                id="warehouse-jsonld"
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
                            { label: 'Warehouse & Logistics', href: '/industries/warehouse-logistics-staffing' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Warehouse & Logistics Staffing Solutions in Georgia — Powered by FNSG</h1>
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    Georgia's supply chain is undergoing an accelerated transformation.
                                    The pressure on warehouse, distribution, and fulfillment operations continues to increase due to turnover, absenteeism, aggressive wage shifts, demand peaks, operator shortages, and growing operational complexity.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                    In this environment, companies relying on warehouse & logistics need stability, predictability, and compliance.
                                    <span className="text-blue-600"> FNSG is the platform designed to achieve it.</span>
                                </p>
                            </section>

                            {/* Operational Challenges */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Operational Challenges in Warehouse & Logistics</h2>
                                <p className="text-slate-600 mb-6">Warehouse and logistics companies face structural issues that affect productivity and profitability:</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <AlertTriangle className="w-5 h-5" /> High Turnover + Low Retention
                                        </h3>
                                        <p className="text-red-800 text-sm">Entry-level and physically demanding roles face extreme turnover cycles, disrupting workflow continuity.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Clock className="w-5 h-5" /> Attendance Instability
                                        </h3>
                                        <p className="text-red-800 text-sm">NCNS (No-Call, No-Show) impacts daily productivity, order fulfillment, and drives unplanned overtime costs, especially on 2nd & 3rd shifts.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <TrendingUp className="w-5 h-5" /> Pay Rate Competitiveness
                                        </h3>
                                        <p className="text-red-800 text-sm">Wage differences of just $0.25–$0.75/hr can cause immediate talent leakage to neighboring facilities.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Shield className="w-5 h-5" /> OSHA Incidents
                                        </h3>
                                        <p className="text-red-800 text-sm">High-traffic warehouses face elevated risks: forklift collisions, slips/falls, improper lifting, and equipment misuse.</p>
                                    </div>
                                </div>
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Users className="w-5 h-5" /> Limited Supervision
                                        </h3>
                                        <p className="text-red-800 text-sm">Internal supervisors often lack the capacity to train, measure, and audit temporary staff effectively.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <TrendingUp className="w-5 h-5" /> Peak Season Breakdowns
                                        </h3>
                                        <p className="text-red-800 text-sm">Q4 and production surges generate burnout, absences, explosive demand, and urgency in ramp-ups.</p>
                                    </div>
                                </div>
                            </section>

                            {/* How FNSG Solves These Problems */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">How FNSG Solves These Problems</h2>
                                <p className="text-lg text-slate-700 mb-8 italic border-l-4 border-blue-600 pl-4">
                                    The difference is NO longer just "sending people". It's managing the operation with intelligence.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Attendance Intelligence OS</h3>
                                            <p className="text-slate-600 mt-2">
                                                Predicts who will miss work, on which shift, on which day, which role is at risk, and how operations are impacted.
                                                This proactive approach reduces NCNS and improves weekly stability.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Workforce Stability Modeling</h3>
                                            <p className="text-slate-600 mt-2">
                                                Proprietary modeling for warehouse environments: analyzing behavior by shift, patterns by county, sensitivity to peaks, risk by role, and providing dynamic wage recommendations.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Pay Rate Intelligence</h3>
                                            <p className="text-slate-600 mt-2">
                                                Tells you in real-time if your rate is lagging the market, in which county and why, identifies flight risk, and offers recommendations to avoid turnover.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">4</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">On-Site Workforce Management Programs</h3>
                                            <p className="text-slate-600 mt-2">
                                                FNSG manages attendance, replacements, training, safety, OSHA compliance, and daily reporting.
                                                Ideal for operations with 20–200 workers.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">5</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Compliance OS</h3>
                                            <p className="text-slate-600 mt-2">
                                                Includes I-9 with validation, E-Verify, PPE enforcement, OSHA documentation, labor audits, and safety protocols for forklifts and equipment.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">6</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">High-Velocity Ramp-Ups</h3>
                                            <p className="text-slate-600 mt-2">
                                                Specialized deployment for operations needing 10–200 workers in 24–72 hours.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* KPIs We Improve */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">KPIs We Improve in Warehouse & Logistics</h2>
                                <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-900 text-white font-semibold">
                                            <tr>
                                                <th className="p-4 border-b border-slate-700">KPI</th>
                                                <th className="p-4 border-b border-slate-700">Improvement with FNSG</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr><td className="p-4 font-medium text-slate-900">Attendance Reliability</td><td className="p-4 text-green-600 font-bold">+8–15%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Turnover Reduction</td><td className="p-4 text-green-600 font-bold">-12–25%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Ramp-Up Speed</td><td className="p-4 text-green-600 font-bold">24–72 hours</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">PPE Compliance</td><td className="p-4 text-green-600 font-bold">+20–40%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Training Completion Rate</td><td className="p-4 text-green-600 font-bold">+30–50%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Productivity Stability</td><td className="p-4 text-green-600 font-bold">+10–18%</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Roles We Staff */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Roles We Staff in Warehouse & Logistics</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Operations</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Warehouse Associates</li>
                                            <li>• Pickers / Packers</li>
                                            <li>• Material Handlers</li>
                                            <li>• Inventory Control</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Equipment</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Forklift Operators (Sit-Down / Stand-Up / Reach / Order Picker)</li>
                                            <li>• Clamp Truck Operators</li>
                                            <li>• Pallet Jack (Manual & Electric)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Shipping & Receiving</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Loaders / Unloaders</li>
                                            <li>• Pallet Builders</li>
                                            <li>• Dock Workers</li>
                                            <li>• Shipping Clerks</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg md:col-span-3">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Leadership</h3>
                                        <div className="flex flex-wrap gap-4 text-slate-700 text-sm">
                                            <span>• Line Leads</span>
                                            <span>• Shift Supervisors</span>
                                            <span>• QC / QA Technicians</span>
                                        </div>
                                    </div>
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
