import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import Link from 'next/link';
import Script from 'next/script';
import { Sun, CloudRain, Sprout, Truck, ClipboardCheck, Users, TrendingUp, AlertTriangle, CheckCircle, Thermometer } from 'lucide-react';
import PremiumCTA from '@/app/components/PremiumCTA';
import FaqJsonLd from '@/app/components/seo/faq-json-ld';
import AuthorByline from '@/app/components/seo/author-byline';
import FreshnessBadge from '@/app/components/seo/freshness-badge';
import CitationSource from '@/app/components/seo/citation-source';

export const metadata = {
    title: "Agriculture & Nursery Staffing Solutions in Georgia | FNSG",
    description: "Agriculture and nursery staffing powered by Workforce Solutions, including greenhouse labor, potting, trimming, irrigation, harvesting crews, MSPA compliance, and field operations.",
    openGraph: {
        title: "Agriculture & Nursery Staffing Solutions",
        url: "https://firstnationalstaffing.com/industries/agriculture-nursery-staffing",
        type: "website"
    }
};

export default function AgricultureNurseryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Agriculture & Nursery Staffing",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Georgia"
        },
        "description": "Agriculture and nursery staffing powered by Workforce Solutions, including greenhouse labor, potting, trimming, irrigation, harvesting crews, MSPA compliance, and field operations.",
        "url": "https://firstnationalstaffing.com/industries/agriculture-nursery-staffing"
    };

    const faqData = [
        { q: "Do you supply seasonal agricultural workers?", a: "Yes. First National Staffing specializes in rapid seasonal ramp-ups for agriculture and nursery operations, deploying 10–150 workers within 24–72 hours. Our supply chain includes pre-vetted field laborers, harvesters, potting crew members, and general farm labor. Each worker completes E-Verify authorization, 10-panel drug screening, and MSPA compliance verification before deployment to ensure regulatory adherence." },
        { q: "Do you work with nurseries and greenhouses?", a: "Yes, extensively. Our nursery-trained staff include potting specialists, trimming technicians, spacing crew members, irrigation assistants, and plant care workers. All personnel receive role-specific training covering delicate plant handling, greenhouse environment management, pest identification, and quality standards. We maintain consistent crew rotations to minimize disruption to sensitive horticultural operations." },
        { q: "Are your workers MSPA compliant?", a: "Yes, 100% compliance. Every agricultural worker undergoes full Migrant & Seasonal Agricultural Worker Protection Act (MSPA) documentation. We maintain audit-ready files including worker registrations, pay transparency records, safe transportation logs, housing documentation (when applicable), and internal compliance templates. Our system ensures farms pass regulatory audits and inspections seamlessly." },
        { q: "How do you reduce turnover in farm labor?", a: "Through three core methods: Attendance Intelligence OS predicts absences based on weather, physical demands, and role fit. Role matching aligns workers with positions matching their physical capability and experience level. Pay intelligence adjusts compensation to prevent leakage to landscaping, warehouse, and construction sectors. This integrated approach reduces agricultural labor turnover by 15–28% on average." },
        { q: "Does climate impact staffing?", a: "Significantly—and we manage it. Our proprietary Attendance Intelligence OS predicts attendance impact from temperature fluctuations, humidity, precipitation, and seasonal weather patterns. We adjust staffing models for heat stress during summer peaks, cold tolerance requirements for winter operations, and weather-related attendance volatility. This weather-aware forecasting improves workforce reliability by 12–22% across outdoor agricultural operations." },
        { q: "Do you provide crew leaders?", a: "Yes. Our certified crew leaders and field supervisors oversee both field operations and greenhouse production. They manage attendance, enforce safety protocols, coordinate task assignments, provide real-time coaching, and ensure compliance with MSPA requirements. Each leader receives training in agricultural operations, workforce management, and regulatory compliance specific to Georgia farming operations." }
    ];

    return (
        <main className="bg-white min-h-screen py-12">
            <Script
                id="agriculture-nursery-jsonld"
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
                            { label: 'Agriculture & Nursery', href: '/industries/agriculture-nursery-staffing' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Agriculture & Nursery Staffing Solutions in Georgia — Powered by FNSG</h1>
                                <AuthorByline name="Carlos Mendoza" title="Agricultural Staffing Director, FNSG" expertise="H-2A Visa & Farm Labor Compliance" reviewDate="January 2025" />
                                <FreshnessBadge dateModified="2025-01-15" label="Q1 2025" updateCadence="Quarterly" />
                                <p className="text-lg text-slate-700 leading-relaxed mb-6 mt-8">
                                    The agriculture and nursery sector in Georgia faces unique challenges: highly seasonal demand, outdoor working conditions, strict compliance (including MSPA), high physical risks, structural labor shortages, and the need for stable, resilient, and reliable workers.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                    <span className="text-blue-600">FNSG offers labor solutions designed specifically for agricultural and horticulture operations, focusing on stability, safety, and total compliance.</span>
                                </p>
                            </section>

                            {/* Operational Challenges */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Operational Challenges in Agriculture & Nursery Work</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <TrendingUp className="w-5 h-5" /> Seasonality = Labor Shortages
                                        </h3>
                                        <p className="text-red-800 text-sm">Agricultural and nursery cycles generate intense peaks at unexpected times.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <AlertTriangle className="w-5 h-5" /> Physically Demanding Work
                                        </h3>
                                        <p className="text-red-800 text-sm">Includes: constant lifting, exposure to weather, walking long distances, repetitive operations.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Sun className="w-5 h-5" /> Outdoor Environments
                                        </h3>
                                        <p className="text-red-800 text-sm">Weather affects attendance and productivity.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <ClipboardCheck className="w-5 h-5" /> MSPA & Compliance Requirements
                                        </h3>
                                        <p className="text-red-800 text-sm">Regulated by: Migrant & Seasonal Agricultural Worker Protection Act (MSPA), OSHA, Wage & Hour requirements, housing (when applicable), transportation compliance.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Users className="w-5 h-5" /> Turnover Patterns
                                        </h3>
                                        <p className="text-red-800 text-sm">Workers migrate between counties depending on weather and pay.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Sprout className="w-5 h-5" /> Specialized Roles are Hard to Fill
                                        </h3>
                                        <p className="text-red-800 text-sm">Greenhouse labor requires specific skills in handling, trimming, spacing, potting, irrigation, and selection.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <CloudRain className="w-5 h-5" /> Unpredictable Weather = Unpredictable Attendance
                                        </h3>
                                        <p className="text-red-800 text-sm">Rain, cold, and extreme heat affect turnout.</p>
                                    </div>
                                </div>
                            </section>

                            {/* How FNSG Solves These Challenges */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">How FNSG Solves These Problems</h2>

                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Attendance Intelligence OS (Outdoor-Adjusted)</h3>
                                            <p className="text-slate-600 mt-2">
                                                Predicts attendance based on: weather, shifts, role, temperature, humidity, and distance to site.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">MSPA-Compliant Workforce Model</h3>
                                            <p className="text-slate-600 mt-2">
                                                Includes: registrations, pay transparency, safe transport, housing documentation, internal documentation, and audit-ready templates.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Role-Specific Worker Matching for Nursery & Greenhouse</h3>
                                            <p className="text-slate-600 mt-2">
                                                We match based on: physical endurance, weather tolerance, prior agricultural experience, delicate handling for nurseries, OSHA history and compliance.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">4</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">On-Site Workforce Management (Greenhouse & Field Operations)</h3>
                                            <p className="text-slate-600 mt-2">
                                                We supervise: attendance, safety, hydration, work pace, PPE usage, break schedules, and task prioritization.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">5</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">High-Velocity Seasonal Ramp-Ups</h3>
                                            <p className="text-slate-600 mt-2">
                                                To cover 10–150 workers in 24–72 hours.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">6</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Pay Intelligence Layer</h3>
                                            <p className="text-slate-600 mt-2">
                                                Avoids leakage to: landscaping, warehouse, food production, and construction.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* KPIs We Improve */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">KPIs We Improve in Agriculture & Nursery Operations</h2>
                                <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-900 text-white font-semibold">
                                            <tr>
                                                <th className="p-4 border-b border-slate-700">KPI</th>
                                                <th className="p-4 border-b border-slate-700">Improvement with FNSG</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr><td className="p-4 font-medium text-slate-900">Attendance Reliability</td><td className="p-4 text-green-600 font-bold">+12–22%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Seasonal Workforce Stability</td><td className="p-4 text-green-600 font-bold">+15–28%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Compliance Score (MSPA/OSHA)</td><td className="p-4 text-green-600 font-bold">+20–35%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Labor Productivity</td><td className="p-4 text-green-600 font-bold">+10–18%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Ramp-Up Speed</td><td className="p-4 text-green-600 font-bold">24–72 hours</td></tr>
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
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Roles We Staff in Agriculture & Nursery</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Nursery / Greenhouse</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Potting Crew</li>
                                            <li>• Trimming & Pruning</li>
                                            <li>• Irrigation Assistants</li>
                                            <li>• Spacing Teams</li>
                                            <li>• Plant Care Laborers</li>
                                            <li>• Sorting & Bagging</li>
                                            <li>• Greenhouse Production Workers</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Agriculture / Field</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Harvesters</li>
                                            <li>• General Field Labor</li>
                                            <li>• Farm Equipment Assistants</li>
                                            <li>• Crop Sorting</li>
                                            <li>• Packing Line Workers</li>
                                            <li>• Loading / Unloading</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Support Roles</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Maintenance Labor</li>
                                            <li>• Sanitation</li>
                                            <li>• Groundskeeping</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Leadership</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Crew Leads</li>
                                            <li>• Field Supervisors</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Compliance & Safety Layer */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">Compliance & Safety Layer</h2>
                                <p className="mb-6 text-slate-300">
                                    Agricultural compliance requires extreme care. FNSG covers:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>MSPA documentation</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>OSHA outdoor safety</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Hydration & heat-stress protocols</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>PPE enforcement</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Transportation compliance</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Hazard identification</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Field sanitation requirements</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>EPA pesticide handling guidelines (when applicable)</span>
                                    </div>
                                </div>
                                <p className="mt-6 text-slate-300 font-medium border-t border-slate-700 pt-4">
                                    Everything is documented under an audit-ready system.
                                </p>
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
