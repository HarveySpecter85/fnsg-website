import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import Link from 'next/link';
import Script from 'next/script';
import { AlertTriangle, ShieldAlert, Truck, HardHat, Recycle, TrendingUp, CheckCircle, Sun, CloudRain } from 'lucide-react';

export const metadata = {
    title: "Recycling & Waste Management Staffing Solutions in Georgia | FNSG OS",
    description: "Workforce Intelligence-driven staffing for recycling and waste management operations, including sorters, baler operators, forklift operators, landfill labor, and safety-monitored task teams.",
    openGraph: {
        title: "Recycling & Waste Management Staffing Solutions",
        url: "https://firstnationalstaffing.com/industries/recycling-waste-management-staffing",
        type: "website"
    }
};

export default function RecyclingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Recycling & Waste Management Staffing",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Georgia"
        },
        "description": "Workforce Intelligence-driven staffing for recycling and waste management operations, including sorters, baler operators, forklift operators, landfill labor, and safety-monitored task teams.",
        "url": "https://firstnationalstaffing.com/industries/recycling-waste-management-staffing"
    };

    return (
        <main className="bg-white min-h-screen py-12">
            <Script
                id="recycling-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Industries', href: '/industries' },
                            { label: 'Recycling & Waste Management', href: '/industries/recycling-waste-management-staffing' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Recycling & Waste Management Staffing Solutions in Georgia — Powered by FNSG OS</h1>
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    Recycling and waste management operations require a highly resilient, safe, punctual, and trained workforce.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    This sector faces some of the biggest turnover and safety challenges in the industry, impacting: daily productivity, contract compliance, equipment safety, operating costs, sorting and baling efficiency, and OSHA compliance.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                    <span className="text-blue-600">FNSG OS provides the operational intelligence needed to stabilize these critical operations.</span>
                                </p>
                            </section>

                            {/* Operational Challenges */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Operational Challenges in Recycling & Waste Management</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <TrendingUp className="w-5 h-5" /> High Physical Demands → High Turnover
                                        </h3>
                                        <p className="text-red-800 text-sm">Sorting, baling, landfill cleanup, and material handling are some of the most physically demanding roles.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Sun className="w-5 h-5" /> Outdoor & Harsh Work Environments
                                        </h3>
                                        <p className="text-red-800 text-sm">Affect attendance, stability, and retention.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <ShieldAlert className="w-5 h-5" /> OSHA-Intensive Operations
                                        </h3>
                                        <p className="text-red-800 text-sm">Common risks include cuts, pinch points, ergonomics, compaction machinery, forklifts, and heavy vehicle driving.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <CloudRain className="w-5 h-5" /> Attendance Issues (2nd & 3rd Shift)
                                        </h3>
                                        <p className="text-red-800 text-sm">High turnover due to weather, distance, fatigue, and work environment.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Recycle className="w-5 h-5" /> Sorting Quality & Output Stability
                                        </h3>
                                        <p className="text-red-800 text-sm">Productivity depends on workforce consistency.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Truck className="w-5 h-5" /> Equipment Operator Shortages
                                        </h3>
                                        <p className="text-red-800 text-sm">Bobcat, skid-steer, baler operators, and forklift drivers are in high demand.</p>
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
                                                Predicts absences considering weather (very relevant in outdoors), fatigue, seasonal demand, location, and hour-by-hour metrics.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Safety & OSHA OS</h3>
                                            <p className="text-slate-600 mt-2">
                                                The most important component for this industry: PPE verification, hazard tracking, OSHA logs, baler/compactor safety, forklift safety audits, and incident trending.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">On-Site Workforce Management Programs</h3>
                                            <p className="text-slate-600 mt-2">
                                                For sorting floors, baling lines, and landfill operations: direct supervision, safety compliance, operational coaching, and continuous training.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">4</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Pay Rate Intelligence</h3>
                                            <p className="text-slate-600 mt-2">
                                                Avoids leakage to warehouse, construction, landscaping, and metro ATL.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">5</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">High-Velocity Ramp Ups</h3>
                                            <p className="text-slate-600 mt-2">
                                                Perfect for municipal contracts, temporary surge projects, and clean-up cycles.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">6</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Task-Based Worker Matching</h3>
                                            <p className="text-slate-600 mt-2">
                                                Staffing based on physical endurance, industrial environment tolerance, machinery experience, and OSHA history.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* KPIs We Improve */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">KPIs We Improve in Recycling & Waste Management</h2>
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
                                            <tr><td className="p-4 font-medium text-slate-900">Sorting Productivity</td><td className="p-4 text-green-600 font-bold">+12–25%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">PPE Compliance</td><td className="p-4 text-green-600 font-bold">+25–45%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Safety Incident Reduction</td><td className="p-4 text-green-600 font-bold">-15–35%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Ramp-Up Time</td><td className="p-4 text-green-600 font-bold">24–72 hours</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Operator Placement Reliability</td><td className="p-4 text-green-600 font-bold">+15–30%</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Roles We Staff */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Roles We Staff in Recycling & Waste Management</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Sorting & Processing</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Sorters</li>
                                            <li>• Line Workers</li>
                                            <li>• Material Recycling Workers</li>
                                            <li>• Quality Sorting Staff</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Machinery & Equipment</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Forklift Operators</li>
                                            <li>• Skid-Steer Operators</li>
                                            <li>• Bobcat Operators</li>
                                            <li>• Baler Operators</li>
                                            <li>• Compactor Operators</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Ground & Landfill</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Cleanup Crews</li>
                                            <li>• Grounds Workers</li>
                                            <li>• Heavy-Labor Teams</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Support Roles</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Shipping/Receiving</li>
                                            <li>• Material Handlers</li>
                                            <li>• Safety Assistants</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Compliance & Safety Layer */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">Compliance & Safety Layer</h2>
                                <p className="mb-6 text-slate-300">
                                    Highest risk industry. FNSG OS complies and documents:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>OSHA 1910 subchapter N</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Compactors & balers regulations</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>PPE high-risk enforcement</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Heat stress monitoring</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Ergonomic hazard mapping</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Incident prevention systems</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Daily safety briefings logs</span>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Do you staff sorters, baler operators and landfill labor?", a: "Yes, with prior training and PPE compliance." },
                                        { q: "How do you reduce turnover in recycling operations?", a: "Attendance OS + pay intelligence + onsite supervision." },
                                        { q: "Can you staff in outdoor environments?", a: "Yes, matching based on physical tolerance and weather." },
                                        { q: "How do you handle OSHA compliance?", a: "Safety OS + documentation + incident tracking + PPE enforcement." },
                                        { q: "Can you support high-volume contracts?", a: "Yes, with ramp-ups of 20–80 workers in 24–72 hours." },
                                        { q: "Do you offer bilingual teams?", a: "Yes, EN/ES." }
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
                                        href="/contact?industry=recycling"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Recycling Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/resources/reports/recycling-2025"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Download the 2025 Recycling & Waste Management Workforce Intelligence Report
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
