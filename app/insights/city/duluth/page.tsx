import React from 'react';
import { CityHubHeader, Breadcrumbs, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: "Duluth Manufacturing Staffing & Tech Insights – First National Staffing",
    description: "Workforce intelligence for Duluth's diverse industrial sector. Covering high-tech manufacturing, assembly, and skilled labor trends.",
    alternates: {
        canonical: '/insights/city/duluth',
    },
    openGraph: {
        title: "Duluth Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/duluth",
        type: "website"
    }
};

export default function DuluthHub() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Duluth, GA",
        "url": "https://firstnationalstaffing.com/insights/city/duluth",
        "image": "https://firstnationalstaffing.com/insights/city/duluth/opengraph-image",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Duluth",
            "addressRegion": "GA",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Gwinnett County"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "34.0029",
            "longitude": "-84.1446"
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
                id="duluth-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <CityHubHeader
                city="Duluth"
                intro="Blending high-tech manufacturing with traditional industrial roots. Our Duluth insights explore skilled labor retention, Korean-American workforce opportunities, and assembly line optimization."
            />

            <div className="container mx-auto px-6 max-w-5xl pb-24">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Duluth', href: '/insights/city/duluth' }
                ]} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* H1 & Intro */}
                        <section>
                            <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Duluth, GA — 2025 Edition</h1>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Duluth represents a unique intersection of advanced manufacturing, technology-driven logistics, and a vibrant multicultural workforce.
                                As Gwinnett County's premier hub for international business, specifically the Korean-American industrial corridor,
                                employers here require a sophisticated approach to recruitment that values technical aptitude and cultural adaptability.
                            </p>
                        </section>

                        {/* Labor Market Overview */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Duluth, GA)</h2>
                            <div className="prose prose-slate max-w-none">
                                <p>
                                    The Duluth labor market is characterized by a higher demand for "skilled industrial" roles compared to neighboring areas.
                                    While general warehousing remains present, the growth engine is in precision assembly, electronics manufacturing, and clean-room environments.
                                    Unemployment remains historically low, driving wages up for candidates with verified technical certifications.
                                </p>
                                <ul className="list-disc pl-5 mt-4 space-y-2">
                                    <li><strong>Key Industries:</strong> Advanced Manufacturing, Electronics Assembly, Medical Device Packaging.</li>
                                    <li><strong>Workforce Trend:</strong> High competition for bilingual (English/Korean/Spanish) talent in supervisory roles.</li>
                                    <li><strong>Retention Driver:</strong> Clean, climate-controlled work environments are a major draw for top-tier candidates.</li>
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
                                            <td className="p-4 font-medium text-slate-900">Electronic Assembler</td>
                                            <td className="p-4 text-slate-600">$16.00</td>
                                            <td className="p-4 text-slate-600">$18.50</td>
                                            <td className="p-4 text-slate-600">$22.00</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Quality Control Inspector</td>
                                            <td className="p-4 text-slate-600">$17.50</td>
                                            <td className="p-4 text-slate-600">$20.00</td>
                                            <td className="p-4 text-slate-600">$24.50</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">CNC Machine Operator</td>
                                            <td className="p-4 text-slate-600">$20.00</td>
                                            <td className="p-4 text-slate-600">$24.00</td>
                                            <td className="p-4 text-slate-600">$29.00</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Warehouse Team Lead</td>
                                            <td className="p-4 text-slate-600">$19.00</td>
                                            <td className="p-4 text-slate-600">$22.50</td>
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
                                <h3 className="font-bold text-blue-900 mb-2">Commuter Patterns & Attendance</h3>
                                <p className="text-blue-800 mb-4">
                                    Duluth's location along the I-85 corridor creates specific traffic-related attendance challenges for 1st shift starts between 7:00 AM - 8:00 AM.
                                    <strong>Flexible start windows</strong> (e.g., 6:30 AM or 9:00 AM) have shown to improve on-time arrival rates by <strong>15%</strong>.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded shadow-sm">
                                        <span className="block text-sm font-semibold text-slate-500 uppercase">Traffic Impact Zone</span>
                                        <span className="block text-lg font-bold text-slate-900">Pleasant Hill & Sugarloaf Exits</span>
                                    </div>
                                    <div className="bg-white p-4 rounded shadow-sm">
                                        <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                        <span className="block text-lg font-bold text-slate-900">4x10 Shift Structures</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* OSHA & Risk Intelligence */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Duluth</h2>
                            <p className="mb-4 text-slate-700">
                                The shift towards light manufacturing and assembly changes the risk profile from heavy trauma to repetitive strain and chemical exposure.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Repetitive Motion Injuries (RMI)</h3>
                                        <p className="text-slate-600 text-sm">High risk in electronics assembly. Mitigation: Ergonomic workstations and mandatory micro-breaks.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Eye Strain & Precision Fatigue</h3>
                                        <p className="text-slate-600 text-sm">Common in QC and small parts handling. Mitigation: Proper lighting audits and vision care benefits.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Electrical Safety</h3>
                                        <p className="text-slate-600 text-sm">For roles involving testing and assembly. Mitigation: LOTO training and ESD protection protocols.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Workforce Composition & Seasonal Demand */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                <p className="text-slate-700 text-sm">
                                    Duluth boasts a highly educated industrial workforce. A significant portion of candidates possess some college education or technical certifications.
                                    Cultural competence is key, with strong Korean, Vietnamese, and Hispanic communities contributing to the labor pool.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                <p className="text-slate-700 text-sm">
                                    <strong>Tech Cycles:</strong> Demand often spikes in Q3 ahead of consumer electronics releases. <br />
                                    <strong>Fiscal Year End:</strong> Many local distributors surge in Q1 for inventory audits and restocking. <br />
                                    <strong>Strategy:</strong> Focus on "Temp-to-Perm" models to secure talent long-term.
                                </p>
                            </div>
                        </section>

                        {/* How FNSG OS Improves Stability */}
                        <section className="bg-slate-900 text-white p-8 rounded-xl">
                            <h2 className="text-2xl font-bold mb-4">How FNSG OS Stabilizes Workforce in Duluth</h2>
                            <p className="mb-6 text-slate-300">
                                In a market that values precision and skill, FNSG OS delivers a higher caliber of candidate.
                                We move beyond "warm bodies" to provide "verified skills."
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> <span>Skills-Based Assessment Modules</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> <span>Bilingual On-Site Coordinators</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> <span>Retention-Focused Benefit Packages</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> <span>Performance Data Integration</span>
                                </li>
                            </ul>
                        </section>

                        {/* FAQs */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    { q: "What industries are strongest in Duluth?", a: "Advanced manufacturing, electronics assembly, and medical device distribution are the primary drivers." },
                                    { q: "Do you offer bilingual staffing services?", a: "Yes, we have specialized recruiters fluent in Korean, Spanish, and Vietnamese to serve Duluth's diverse market." },
                                    { q: "What is the average time to fill a skilled role?", a: "For skilled positions like assemblers or QC, we typically present qualified candidates within 3-5 business days." },
                                    { q: "Are your candidates background checked?", a: "Yes, all candidates undergo a comprehensive background check and drug screening tailored to client requirements." },
                                    { q: "Do you handle temp-to-hire conversions?", a: "Absolutely. Our model is designed to facilitate seamless conversion of top performers to your permanent payroll." },
                                    { q: "How do you ensure candidate technical skills?", a: "We utilize practical skills assessments for dexterity, math, and blueprint reading where applicable." },
                                    { q: "Can you support 2nd and 3rd shift needs?", a: "Yes, we have a robust pool of candidates specifically seeking non-traditional shift hours." },
                                    { q: "What is your fill rate for Duluth clients?", a: "We maintain a 96% fill rate for exclusive orders within the Duluth/Suwanee area." },
                                    { q: "Do you provide safety training?", a: "All associates receive general safety orientation, and we can facilitate site-specific training upon request." },
                                    { q: "How does FNSG OS help with retention?", a: "By aligning candidate career goals with client culture and offering competitive benefits, we significantly reduce turnover." }
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
                                    href="/contact?location=duluth"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                >
                                    Request a Workforce Strategy Session
                                </Link>
                                <Link
                                    href="/resources/reports/duluth-2025"
                                    className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                >
                                    Download Duluth Workforce Intelligence Report
                                </Link>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar Column (Quick Links & SEO) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 sticky top-24">
                            <h3 className="font-bold text-slate-900 mb-4">Duluth Quick Links</h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/insights/industry/manufacturing" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <span>🏭</span> Manufacturing Staffing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insights/pay-rates/duluth" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <span>💰</span> Local Wage Data
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insights/osha/regulations" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <span>🛡️</span> OSHA Compliance
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <span>📍</span> Find Our Office
                                    </Link>
                                </li>
                            </ul>

                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-2">Office Location</h3>
                                <address className="not-italic text-slate-600 text-sm space-y-1">
                                    <p>First National Staffing</p>
                                    <p>Duluth, GA 30096</p>
                                    <p>Gwinnett County</p>
                                </address>
                            </div>
                        </div>

                        <SEOBlock
                            city="Duluth"
                            keywords={['Manufacturing Jobs', 'Skilled Labor', 'Gwinnett Industrial', 'Assembly Staffing']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
