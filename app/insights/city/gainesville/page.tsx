import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: "Gainesville Staffing & Workforce Intelligence – First National Staffing",
    description: "Workforce insights for Gainesville, GA - the Poultry Capital of the World. Data on food processing, cold storage, GMP compliance, and industrial labor trends in Hall County.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/gainesville',
    },
    openGraph: {
        title: "Gainesville Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/gainesville",
        type: "website"
    }
};

export default function GainesvillePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Gainesville",
        "url": "https://firstnationalstaffing.com/insights/city/gainesville",
        "image": "https://firstnationalstaffing.com/insights/city/gainesville/opengraph-image",
        "telephone": "+1-470-470-4243",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 Main St SW",
            "addressLocality": "Gainesville",
            "addressRegion": "GA",
            "postalCode": "30501",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "City",
            "name": "Gainesville"
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
            "https://www.linkedin.com/company/first-national-staffing"
        ]
    };

    return (
        <main className="bg-white min-h-screen py-12">
            <Script
                id="gainesville-jsonld"
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
                            { label: 'Gainesville', href: '/insights/city/gainesville' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Gainesville, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Known globally as the "Poultry Capital of the World," Gainesville and Hall County are the epicenter
                                    of Georgia's food processing industry. The workforce here is resilient and specialized, with deep experience
                                    in GMP (Good Manufacturing Practices) and cold-chain logistics. However, the concentration of industrial
                                    employers along the I-985 corridor creates fierce competition for reliable production talent.
                                </p>
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Gainesville / Hall County)</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        Hall County's unemployment rate consistently tracks below the state average, driven by the stability of the food sector.
                                        The challenge for employers is not just finding people, but finding candidates willing to work in challenging environments
                                        (cold, wet, repetitive). Immigrant communities play a vital role in the local labor force, making bilingual supervision
                                        a key retention asset.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>Sector Dominance:</strong> Poultry processing accounts for a massive share of industrial employment.</li>
                                        <li><strong>Bilingual Workforce:</strong> Spanish-speaking workers are essential. Bilingual supervisors reduce turnover by 25%.</li>
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
                                                <td className="p-4 font-medium text-slate-900">Cold Storage Forklift Operator</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                                <td className="p-4 text-slate-600">$23.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Sanitation Technician (3rd Shift)</td>
                                                <td className="p-4 text-slate-600">$17.00</td>
                                                <td className="p-4 text-slate-600">$19.00</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Quality Assurance (Food Safety)</td>
                                                <td className="p-4 text-slate-600">$19.00</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                                <td className="p-4 text-slate-600">$26.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Industrial Maintenance Tech</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
                                                <td className="p-4 text-slate-600">$28.00</td>
                                                <td className="p-4 text-slate-600">$34.00</td>
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
                                        Many workers commute from rural counties (Banks, Jackson, White) where reliability can be impacted
                                        by weather and vehicle maintenance issues.
                                        <strong> Attendance bonuses</strong> paid weekly have shown to improve reliability by <strong>22%</strong> in this demographic.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Status</span>
                                            <span className="block text-lg font-bold text-slate-900">Limited (Hall Area Transit)</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                            <span className="block text-lg font-bold text-slate-900">Van-Pooling Programs + Weekly Bonuses</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Gainesville</h2>
                                <p className="mb-4 text-slate-700">
                                    The food processing environment presents specific, high-frequency risks that require constant vigilance.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Biological Hazards</h3>
                                            <p className="text-slate-600 text-sm">Exposure to raw poultry/meat. Mitigation: Strict PPE protocols, hygiene training, and handwashing stations.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Cold Stress</h3>
                                            <p className="text-slate-600 text-sm">Working in 34°F to -10°F environments. Mitigation: Insulated gear allowances, warm-up rotations, and break warming areas.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Laceration Risks</h3>
                                            <p className="text-slate-600 text-sm">Use of knives and cutting machinery. Mitigation: Cut-resistant gloves (ANSI A4+), chainmail aprons, and knife safety training.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">4</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Slip/Fall Hazards</h3>
                                            <p className="text-slate-600 text-sm">Wet floors from processing and sanitation. Mitigation: Non-slip boots required, drainage protocols, floor mats.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Workforce Composition & Seasonal Demand */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                    <p className="text-slate-700 text-sm">
                                        Gainesville's workforce is culturally diverse and hardworking, with a strong Hispanic community.
                                        Workers prefer stable, long-term employment over short-term gigs.
                                        Family referrals are a powerful recruiting channel in this tight-knit community.
                                        Many have years of food processing experience.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>Poultry/Grilling Season:</strong> Q2/Q3 peaks drive highest demand. <br />
                                        <strong>Holiday Processing:</strong> Thanksgiving/Christmas turkey production. <br />
                                        <strong>Strategy:</strong> Over-recruit by 15% ahead of peak seasons to account for natural attrition.
                                    </p>
                                </div>
                            </section>

                            {/* How FNSG Improves Stability */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">How FNSG Stabilizes Workforce in Gainesville</h2>
                                <p className="mb-6 text-slate-300">
                                    We understand the unique demands of the "Poultry Capital" and deploy strategies to keep lines running.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Bilingual On-Site Management (English/Spanish)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>GMP-Specific Orientation & Training</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Cold-Environment Tolerance Screening</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Rural Commuter Network & Van-Pools</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>USDA/FDA Compliance Orientation</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>3rd Shift Sanitation Specialists</span>
                                    </li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Do you have experience with food processing staffing?", a: "Yes, it is one of our core specialties in Gainesville, covering both raw and cooked poultry processing, as well as other food manufacturing." },
                                        { q: "Can you provide bilingual site supervisors?", a: "Absolutely. We deploy bilingual (English/Spanish) on-site managers to bridge communication gaps and improve retention." },
                                        { q: "What PPE do you provide to associates?", a: "We provide standard PPE (vests, glasses, earplugs, hairnets) and can manage client-specific gear like cut-resistant gloves and insulated clothing." },
                                        { q: "How do you handle cold storage turnover?", a: "We use a specific 'Cold Tolerance' screening process during onboarding to ensure candidates are prepared for frigid environments." },
                                        { q: "Do you staff for sanitation shifts?", a: "Yes, we have a dedicated pool of candidates willing and experienced in 3rd shift sanitation roles." },
                                        { q: "What is the average starting wage for general production?", a: "In Gainesville, competitive food production rates start between $16.50 and $18.00/hr, with shift differentials for 2nd and 3rd." },
                                        { q: "Are your workers USDA/FDA compliant?", a: "Our orientation includes modules on GMPs, HACCP awareness, allergen protocols, and food defense to support your compliance requirements." },
                                        { q: "How quickly can you ramp up for a new production line?", a: "We can typically source and onboard a 20-person production team within 5-7 business days for Gainesville clients." },
                                        { q: "Do you offer transportation solutions?", a: "We partner with local van-pool providers to help transport workers from outlying rural areas like Banks and Jackson counties." },
                                        { q: "Why choose FNSG for Gainesville staffing?", a: "Our deep roots in Hall County, food processing expertise, and bilingual capabilities make us the most reliable staffing partner in the Poultry Capital." }
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
                                        href="/contact/request-workforce"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/insights/pay-rates/gainesville"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        View Gainesville Pay Rate Details
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="Gainesville"
                            keywords={['Gainesville Staffing', 'Hall County Jobs', 'Poultry Processing Staffing', 'Food Manufacturing Jobs Georgia']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
