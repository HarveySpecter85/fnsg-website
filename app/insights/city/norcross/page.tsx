import React from 'react';
import { CityHubHeader, Breadcrumbs, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: "Norcross Logistics Staffing & Warehouse Insights – First National Staffing",
    description: "Expert analysis on Norcross labor trends. Focusing on 3PL distribution, bilingual workforce strategies, and warehouse safety.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/norcross',
    },
    openGraph: {
        title: "Norcross Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/norcross",
        type: "website"
    }
};

export default function NorcrossHub() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Norcross, GA",
        "url": "https://firstnationalstaffing.com/insights/city/norcross",
        "image": "https://firstnationalstaffing.com/insights/city/norcross/opengraph-image",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Norcross",
            "addressRegion": "GA",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Gwinnett County"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.9412",
            "longitude": "-84.2135"
        },
        "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
        }],
        "sameAs": [
            "https://www.linkedin.com/company/first-national-staffing",
            "https://www.facebook.com/first-national-staffing"
        ]
    };

    return (
        <main>
            <Script
                id="norcross-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <CityHubHeader
                city="Norcross"
                intro="A critical logistics node for Metro Atlanta. Our Norcross insights focus on 3PL efficiency, bilingual workforce integration, and peak season scalability for distribution centers."
            />

            <div className="container mx-auto px-6 max-w-5xl pb-24">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Norcross', href: '/insights/city/norcross' }
                ]} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* H1 & Intro */}
                        <section>
                            <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Norcross, GA — 2025 Edition</h1>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Norcross serves as one of Gwinnett County's most active industrial hubs, featuring a high concentration of logistics, warehousing, e-commerce fulfillment, and light manufacturing operations. Its strategic access to I-85 makes it a highly competitive labor market, characterized by rapid turnover and significant wage pressure.
                            </p>
                        </section>

                        {/* Labor Market Overview */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Norcross, GA)</h2>
                            <div className="prose prose-slate max-w-none">
                                <p>
                                    The Norcross corridor is saturated with multiple 3PL providers and fulfillment centers, creating a "candidate's market" where wage sensitivity is acute.
                                    Workforce mobility is extremely high between Norcross, Duluth, and Peachtree Corners, often driven by fractional wage differences.
                                </p>
                                <ul className="list-disc pl-5 mt-4 space-y-2">
                                    <li><strong>Market Saturation:</strong> High density of competing employers within a 5-mile radius.</li>
                                    <li><strong>Turnover Drivers:</strong> Intense wage competition; associates will switch jobs for a $0.50/hr increase.</li>
                                    <li><strong>Demographics:</strong> Predominantly bilingual workforce requiring culturally competent management.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Pay Rate Benchmarks */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Pay Rate Benchmarks (2025)</h2>
                            <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 text-slate-900 font-semibold">
                                        <tr>
                                            <th className="p-4 border-b">Role</th>
                                            <th className="p-4 border-b">Avg Pay Norcross</th>
                                            <th className="p-4 border-b">Competitive Range</th>
                                            <th className="p-4 border-b">Difficulty to Fill</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Warehouse Associate</td>
                                            <td className="p-4 text-slate-600">$14.75/hr</td>
                                            <td className="p-4 text-slate-600">$14.00–15.50</td>
                                            <td className="p-4 text-slate-600">Medium</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Picker/Packer</td>
                                            <td className="p-4 text-slate-600">$14.25/hr</td>
                                            <td className="p-4 text-slate-600">$13.50–15.00</td>
                                            <td className="p-4 text-slate-600">Medium</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Forklift Driver</td>
                                            <td className="p-4 text-slate-600">$16.75/hr</td>
                                            <td className="p-4 text-slate-600">$16.00–17.50</td>
                                            <td className="p-4 text-slate-600">Medium</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Machine Operator</td>
                                            <td className="p-4 text-slate-600">$18.00/hr</td>
                                            <td className="p-4 text-slate-600">$17.00–19.50</td>
                                            <td className="p-4 text-slate-600">High</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Shipping/Receiving</td>
                                            <td className="p-4 text-slate-600">$15.70/hr</td>
                                            <td className="p-4 text-slate-600">$15.00–16.50</td>
                                            <td className="p-4 text-slate-600">Medium</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Shift Reliability Index */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Shift Reliability Index</h2>
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Gwinnett Corridor Attendance Patterns</h3>
                                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <span className="block text-xs text-slate-500 uppercase">1st Shift</span>
                                        <span className="block text-xl font-bold text-green-600">93%</span>
                                    </div>
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <span className="block text-xs text-slate-500 uppercase">2nd Shift</span>
                                        <span className="block text-xl font-bold text-yellow-600">87%</span>
                                    </div>
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <span className="block text-xs text-slate-500 uppercase">3rd Shift</span>
                                        <span className="block text-xl font-bold text-red-600">80%</span>
                                    </div>
                                </div>
                                <p className="text-blue-800 mb-2"><strong>Core Challenges:</strong></p>
                                <ul className="list-disc pl-5 text-blue-800 text-sm space-y-1">
                                    <li>Heavy reliance on rideshare/carpooling.</li>
                                    <li>High volatility in 3PL and e-commerce sectors.</li>
                                    <li>"Wage hopping" for minimal increases is common.</li>
                                </ul>
                            </div>
                        </section>

                        {/* OSHA & Risk Intelligence */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Norcross</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-2 text-red-600">Top Safety Risks</h3>
                                    <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                                        <li>Forklift incidents in narrow aisles.</li>
                                        <li>Lack of PPE in fast-pick zones.</li>
                                        <li>Repetitive lifting injuries.</li>
                                        <li>Cuts/impacts in automated packing areas.</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-2 text-blue-600">Recent Insights</h3>
                                    <p className="text-sm text-slate-700 mb-2">
                                        <strong>Micro-incidents up 14% (Q3):</strong> Specifically in e-commerce sectors due to increased speed demands.
                                    </p>
                                    <p className="text-sm text-slate-700">
                                        <strong>Night Shift Compliance:</strong> Higher rates of PPE non-compliance observed on 3rd shift.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Workforce Composition & Seasonal Demand */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                <p className="text-slate-700 text-sm mb-2">
                                    Norcross features a high concentration of bilingual workers (English/Spanish).
                                    The workforce is predominantly aged 20–45, favoring high-activity roles like picking, packing, and shipping.
                                </p>
                                <p className="text-slate-700 text-sm">
                                    Turnover is notably higher in high-speed fulfillment centers compared to traditional manufacturing.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                <p className="text-slate-700 text-sm mb-2">
                                    <strong>Q4 Critical Peak:</strong> E-commerce drives aggressive staffing needs. Norcross experiences a sharper peak than Gainesville.
                                </p>
                                <p className="text-slate-700 text-sm">
                                    <strong>Q2/Q3 Fluctuation:</strong> Turnover spikes due to climate factors and manufacturing cycles. Extended shifts (10-12h) significantly increase fatigue risks.
                                </p>
                            </div>
                        </section>

                        {/* How FNSG OS Stabilizes Workforce */}
                        <section className="bg-slate-900 text-white p-8 rounded-xl">
                            <h2 className="text-2xl font-bold mb-4">How FNSG OS Stabilizes Workforce in Norcross</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <div className="bg-blue-600 p-2 rounded text-white font-bold text-xs">01</div>
                                    <div>
                                        <h3 className="font-bold text-white">Attendance Intelligence OS</h3>
                                        <p className="text-slate-400 text-sm">Predictive tracking to mitigate shift absenteeism.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-blue-600 p-2 rounded text-white font-bold text-xs">02</div>
                                    <div>
                                        <h3 className="font-bold text-white">Pay Rate Intelligence</h3>
                                        <p className="text-slate-400 text-sm">Real-time wage benchmarking to stay competitive.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-blue-600 p-2 rounded text-white font-bold text-xs">03</div>
                                    <div>
                                        <h3 className="font-bold text-white">On-Site Management</h3>
                                        <p className="text-slate-400 text-sm">Dedicated supervisors for high-volume sites.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-blue-600 p-2 rounded text-white font-bold text-xs">04</div>
                                    <div>
                                        <h3 className="font-bold text-white">Rapid Fill Rate</h3>
                                        <p className="text-slate-400 text-sm">12-24 hour deployment capability.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQs */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    { q: "How fast can I hire warehouse workers in Norcross GA?", a: "We can typically deploy qualified warehouse associates within 12-24 hours due to our active local talent pool." },
                                    { q: "Why is turnover so high in Norcross warehouses?", a: "Turnover is often driven by intense wage competition and the density of logistics employers in the area." },
                                    { q: "What are competitive warehouse pay rates in Norcross?", a: "For 2025, competitive rates range from $14.75/hr for general labor to $18.00+/hr for skilled operators." },
                                    { q: "Do agencies offer bilingual staffing in Norcross?", a: "Yes, FNSG specializes in bilingual staffing to ensure effective communication and safety on the floor." },
                                    { q: "How do I prepare for peak season staffing?", a: "We recommend starting your ramp-up strategy in early Q3 to secure the best talent before the holiday rush." },
                                    { q: "Can workforce attendance be predicted?", a: "Yes, our Attendance Intelligence OS analyzes patterns to predict and mitigate absenteeism risks." },
                                    { q: "What is the safest way to manage forklift operators?", a: " rigorous certification verification and ongoing safety audits, specifically focusing on narrow-aisle operations." },
                                    { q: "How do companies reduce NCNS in Gwinnett County?", a: "Implementing attendance bonuses and offering transportation assistance significantly reduces No-Call No-Shows." },
                                    { q: "Do staffing agencies help with OSHA compliance?", a: "FNSG provides safety checklists and on-site audits to support your OSHA compliance efforts." },
                                    { q: "What makes FNSG OS different from other staffing firms?", a: "Our data-driven Operating System approach integrates directly with your KPIs for measurable performance improvement." }
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
                                    href="/contact?location=norcross"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                >
                                    Request a Workforce Strategy Session
                                </Link>
                                <Link
                                    href="/insights/reports/norcross-2025"
                                    className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                >
                                    Download Norcross Labor Intelligence Report
                                </Link>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar Column (Quick Links & SEO) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 sticky top-24">
                            <h3 className="font-bold text-slate-900 mb-4">Norcross Quick Links</h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/insights/industry/warehouse" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <span>📦</span> Warehouse Logistics
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insights/pay-rates/norcross" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <span>💰</span> Local Wage Data
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insights/osha/temp-labor" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <span>🛡️</span> Safety Compliance
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact/general-inquiries" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <span>📍</span> Find Our Office
                                    </Link>
                                </li>
                            </ul>

                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-2">Office Location</h3>
                                <address className="not-italic text-slate-600 text-sm space-y-1">
                                    <p>First National Staffing</p>
                                    <p>Norcross, GA 30071</p>
                                    <p>Gwinnett County</p>
                                </address>
                            </div>
                        </div>

                        <SEOBlock
                            city="Norcross"
                            keywords={['Warehouse Staffing', 'Bilingual Recruitment', 'Gwinnett County Jobs', '3PL Logistics']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
