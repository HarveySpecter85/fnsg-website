import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: "Hall County Staffing & Workforce Intelligence – First National Staffing",
    description: "Workforce insights for Gainesville, Oakwood, and the Poultry Capital. Data on food processing, cold storage, and industrial labor trends in Hall County.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/hall-county-recruitment',
    },
    openGraph: {
        title: "Hall County Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/hall-county-recruitment",
        type: "website"
    }
};

export default function HallCountyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Hall County",
        "url": "https://firstnationalstaffing.com/insights/city/hall-county-recruitment",
        "image": "https://firstnationalstaffing.com/insights/city/hall-county-recruitment/opengraph-image",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gainesville",
            "addressRegion": "GA",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Hall County"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "34.2979",
            "longitude": "-83.8241"
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
        <main className="bg-white min-h-screen py-12">
            <Script
                id="hall-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '/insights/city' },
                            { label: 'Hall County', href: '/insights/city/hall-county-recruitment' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Hall County, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Known globally as the "Poultry Capital of the World," Hall County is a powerhouse of food processing and advanced manufacturing.
                                    The workforce here is resilient and specialized, with deep experience in GMP (Good Manufacturing Practices) and cold-chain logistics.
                                    However, the density of industrial employers along the I-985 corridor creates fierce competition for reliable production talent.
                                </p>
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Hall County)</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        Hall County's unemployment rate consistently tracks below the state average, driven by the stability of the food sector.
                                        The challenge for employers is not just finding people, but finding candidates willing to work in challenging environments (cold, wet, repetitive).
                                        Immigrant communities play a vital role in the local labor force, making bilingual supervision a key retention asset.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>Sector Dominance:</strong> Food processing accounts for a massive share of industrial employment.</li>
                                        <li><strong>Transportation Gaps:</strong> Public transit (Hall Area Transit) is limited, making personal vehicle ownership critical for 2nd and 3rd shifts.</li>
                                        <li><strong>Wage Sensitivity:</strong> Even small hourly increases ($0.50-$1.00) can trigger migration between local plants.</li>
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
                                                <th className="p-4 border-b">Role / Position</th>
                                                <th className="p-4 border-b">Entry Level (P10)</th>
                                                <th className="p-4 border-b">Median (P50)</th>
                                                <th className="p-4 border-b">Experienced (P90)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Food Production Associate</td>
                                                <td className="p-4 text-slate-600">$16.50</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$20.50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Cold Storage Forklift</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                                <td className="p-4 text-slate-600">$23.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Industrial Maintenance Tech</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
                                                <td className="p-4 text-slate-600">$28.00</td>
                                                <td className="p-4 text-slate-600">$34.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Quality Assurance (Food)</td>
                                                <td className="p-4 text-slate-600">$19.00</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                                <td className="p-4 text-slate-600">$26.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-slate-500 mt-2 italic">
                                    *Data aggregated from FNSG internal placement data and local market surveys (Q1 2025).
                                </p>
                            </section>

                            {/* Shift Reliability Index */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Shift Reliability Index</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">The Rural Commuter Factor</h3>
                                    <p className="text-blue-800 mb-4">
                                        Many workers commute from rural counties (Banks, Jackson, White) where reliability can be impacted by weather and vehicle maintenance issues.
                                        <strong>Attendance bonuses</strong> paid weekly have shown to improve reliability by <strong>22%</strong> in this demographic.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Status</span>
                                            <span className="block text-lg font-bold text-slate-900">Limited (WeGo Service)</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                            <span className="block text-lg font-bold text-slate-900">Van-Pooling Programs</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Hall County</h2>
                                <p className="mb-4 text-slate-700">
                                    The food processing environment presents specific, high-frequency risks that require constant vigilance.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Biological Hazards</h3>
                                            <p className="text-slate-600 text-sm">Exposure to raw poultry/meat. Mitigation: Strict PPE protocols and hygiene training.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Cold Stress</h3>
                                            <p className="text-slate-600 text-sm">Working in 34°F - -10°F environments. Mitigation: Insulated gear allowances and warm-up rotations.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Laceration Risks</h3>
                                            <p className="text-slate-600 text-sm">Use of knives and cutting machinery. Mitigation: Cut-resistant gloves (ANSI A4+) and chainmail aprons.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Workforce Composition & Seasonal Demand */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                    <p className="text-slate-700 text-sm">
                                        Hall County's workforce is culturally diverse and hardworking.
                                        There is a strong preference for stable, long-term employment over short-term gigs.
                                        Family referrals are a powerful recruiting channel in this tight-knit community.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>Poultry:</strong> Summer grilling season drives Q2/Q3 peaks. <br />
                                        <strong>Retail Logistics:</strong> Q4 surge for distribution centers. <br />
                                        <strong>Strategy:</strong> Over-recruit by 15% ahead of peak seasons to account for attrition.
                                    </p>
                                </div>
                            </section>

                            {/* How FNSG OS Improves Stability */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">How FNSG OS Stabilizes Workforce in Hall County</h2>
                                <p className="mb-6 text-slate-300">
                                    We understand the unique demands of the "Poultry Capital" and deploy strategies to keep lines running.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Bilingual On-Site Management</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>GMP-Specific Orientation</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Cold-Environment Screening</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Rural Commuter Network</span>
                                    </li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Do you have experience with food processing staffing?", a: "Yes, it is one of our core specialties in Hall County, covering both raw and cooked processing." },
                                        { q: "Can you provide bilingual site supervisors?", a: "Absolutely. We can deploy bilingual (English/Spanish) on-site managers to bridge communication gaps." },
                                        { q: "What PPE do you provide to associates?", a: "We provide standard PPE (vests, glasses, earplugs) and can manage client-specific gear like cut-resistant gloves." },
                                        { q: "How do you handle cold storage turnover?", a: "We use a specific 'Cold Tolerance' screening process to ensure candidates are prepared for the environment." },
                                        { q: "Do you staff for sanitation shifts?", a: "Yes, we have a dedicated pool of candidates willing to work 3rd shift sanitation roles." },
                                        { q: "What is the average starting wage for general labor?", a: "In Hall County, competitive general labor rates start between $16.50 and $18.00/hr." },
                                        { q: "Are you USDA/FDA compliant?", a: "Our orientation includes modules on GMPs, HACCP awareness, and food defense to support your compliance." },
                                        { q: "How quickly can you ramp up for a new line?", a: "We can typically source and onboard a 20-person production team within 5-7 business days." },
                                        { q: "Do you offer transportation solutions?", a: "We can partner with local van-pool providers to help transport workers from outlying areas." },
                                        { q: "Why choose FNSG for Hall County?", a: "Our deep roots in the local community and expertise in food manufacturing make us the reliable choice." }
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
                                        href="/contact?location=hall"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/resources/reports/hall-2025"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Download Hall Workforce Intelligence Report
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="Hall County"
                            keywords={['Hall County Staffing', 'Gainesville Jobs', 'Poultry Processing Staffing', 'Oakwood Industrial Jobs']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
