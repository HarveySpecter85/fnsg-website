import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: "Norcross Staffing & Workforce Intelligence – First National Staffing",
    description: "Workforce insights for Norcross, GA. Data on manufacturing, warehousing, and bilingual workforce trends in Gwinnett County's industrial corridor.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/norcross',
    },
    openGraph: {
        title: "Norcross Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/norcross",
        type: "website"
    }
};

export default function NorcrossPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Norcross",
        "url": "https://firstnationalstaffing.com/insights/city/norcross",
        "image": "https://firstnationalstaffing.com/insights/city/norcross/opengraph-image",
        "telephone": "+1-470-470-4243",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "730 Peachtree St NE, Suite 570",
            "addressLocality": "Atlanta",
            "addressRegion": "GA",
            "postalCode": "30308",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "City",
            "name": "Norcross"
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
            "https://www.linkedin.com/company/first-national-staffing"
        ]
    };

    return (
        <main className="bg-white min-h-screen py-12">
            <Script
                id="norcross-jsonld"
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
                            { label: 'Norcross', href: '/insights/city/norcross' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Norcross, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Norcross is the manufacturing and logistics heart of Gwinnett County. Located along the I-85 and Jimmy Carter Blvd
                                    corridor, this area hosts hundreds of industrial employers ranging from automotive suppliers to consumer goods
                                    manufacturers. The workforce is highly diverse, with significant Hispanic, Asian, and African immigrant communities
                                    creating a rich, multilingual talent pool.
                                </p>
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Norcross / Gwinnett)</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        Norcross benefits from one of Georgia's most diverse labor pools, but competition for skilled workers is intense.
                                        Manufacturing facilities compete with warehouses and logistics companies for the same candidates.
                                        Employers who offer stability, training opportunities, and cultural sensitivity tend to win the talent war.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>Sector Mix:</strong> Light manufacturing, automotive parts, plastics, food packaging, and general warehousing.</li>
                                        <li><strong>Bilingual Advantage:</strong> Spanish fluency is common; employers with bilingual supervision see 30% lower turnover.</li>
                                        <li><strong>Commute Patterns:</strong> Workers come from Doraville, Chamblee, Duluth, and even DeKalb County. MARTA accessibility is limited but improving.</li>
                                        <li><strong>Skill Demand:</strong> CNC operators, machine technicians, and quality inspectors are in high demand with premium wages.</li>
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
                                                <td className="p-4 font-medium text-slate-900">Production Associate</td>
                                                <td className="p-4 text-slate-600">$15.50</td>
                                                <td className="p-4 text-slate-600">$17.50</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Machine Operator</td>
                                                <td className="p-4 text-slate-600">$17.00</td>
                                                <td className="p-4 text-slate-600">$19.50</td>
                                                <td className="p-4 text-slate-600">$23.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">CNC Operator</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
                                                <td className="p-4 text-slate-600">$30.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Quality Inspector</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$21.00</td>
                                                <td className="p-4 text-slate-600">$25.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Forklift Operator</td>
                                                <td className="p-4 text-slate-600">$17.50</td>
                                                <td className="p-4 text-slate-600">$19.50</td>
                                                <td className="p-4 text-slate-600">$22.50</td>
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
                                    <h3 className="font-bold text-blue-900 mb-2">The Jimmy Carter Blvd Corridor Effect</h3>
                                    <p className="text-blue-800 mb-4">
                                        Traffic congestion along Jimmy Carter Blvd and I-85 during peak hours is notorious.
                                        Workers on 1st shift (starting 6-7 AM) have the best reliability rates, while mid-day shift changes
                                        experience more delays. <strong>Flexible start windows</strong> (±15 min) reduce tardiness incidents by <strong>25%</strong>.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Access</span>
                                            <span className="block text-lg font-bold text-slate-900">Moderate (MARTA Bus + Park & Ride)</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Strategy</span>
                                            <span className="block text-lg font-bold text-slate-900">Flexible Start Times + Carpool Incentives</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Norcross</h2>
                                <p className="mb-4 text-slate-700">
                                    Manufacturing environments in Norcross present machinery and ergonomic risks that require proactive safety programs.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Machine Guarding</h3>
                                            <p className="text-slate-600 text-sm">Exposure to moving parts in presses, conveyors, and packaging equipment. Mitigation: LOTO training and point-of-operation guards.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Repetitive Motion Injuries</h3>
                                            <p className="text-slate-600 text-sm">Assembly and packaging roles with high repetition. Mitigation: Job rotation every 2 hours and ergonomic assessments.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Forklift Traffic</h3>
                                            <p className="text-slate-600 text-sm">Mixed pedestrian/forklift zones. Mitigation: Designated walkways, spotters, and blue safety lights on lifts.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">4</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Chemical Exposure</h3>
                                            <p className="text-slate-600 text-sm">Solvents and adhesives in some manufacturing processes. Mitigation: SDS training, proper ventilation, and appropriate PPE.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Workforce Composition & Seasonal Demand */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                    <p className="text-slate-700 text-sm">
                                        Norcross has one of Metro Atlanta's most diverse workforces. Hispanic, Vietnamese, Korean, and African
                                        immigrant communities all contribute to the labor pool. Employers who embrace cultural diversity and
                                        provide multilingual support materials see significantly better retention.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>Consumer Goods:</strong> Q3/Q4 ramp for holiday products. <br />
                                        <strong>Automotive:</strong> Follows OEM production schedules, typically steady year-round. <br />
                                        <strong>Strategy:</strong> Build core teams of reliable workers; supplement with flex labor during peaks.
                                    </p>
                                </div>
                            </section>

                            {/* How FNSG OS Improves Stability */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">How FNSG OS Optimizes Workforce in Norcross</h2>
                                <p className="mb-6 text-slate-300">
                                    We tap into Norcross's diverse talent pool and manufacturing expertise to deliver skilled, reliable workers.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Bilingual Recruiting (Spanish, Vietnamese, Korean)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Machine Operation Skills Assessment</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>LOTO & Safety Certification Tracking</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Quality-Focused Candidate Screening</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Flexible Shift Matching</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Temp-to-Hire Pathways</span>
                                    </li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What industries do you staff in Norcross?", a: "We specialize in light manufacturing, automotive suppliers, plastics/packaging, food production, and general warehousing in the Norcross area." },
                                        { q: "Do you have bilingual workers available?", a: "Yes, our Norcross talent pool includes many Spanish, Vietnamese, and Korean speakers. We can match language capabilities to your needs." },
                                        { q: "Can you provide skilled machine operators?", a: "Absolutely. We screen for machine operation experience and can assess candidates on specific equipment types." },
                                        { q: "How do you handle high turnover in manufacturing?", a: "We focus on cultural fit, realistic job previews, and competitive pay benchmarking. Our retention rates exceed industry averages by 15%." },
                                        { q: "What safety training do your workers receive?", a: "All associates complete our standard safety orientation. For manufacturing clients, we add LOTO awareness and machine-specific protocols." },
                                        { q: "Do you offer temp-to-hire arrangements?", a: "Yes, temp-to-hire is our most popular model in Norcross. It lets you evaluate workers before committing to permanent employment." },
                                        { q: "How quickly can you fill manufacturing positions?", a: "For general production roles, typically 3-5 business days. Skilled positions (CNC, quality) may take 1-2 weeks." },
                                        { q: "What shifts do you cover?", a: "All shifts: 1st (6am-2pm), 2nd (2pm-10pm), 3rd (10pm-6am), and weekend-only schedules." },
                                        { q: "Can you staff an entire new production line?", a: "Yes, we've successfully ramped up complete production teams of 50+ workers for new Norcross facilities." },
                                        { q: "Why choose FNSG for Norcross staffing?", a: "Our deep understanding of Gwinnett's diverse workforce, manufacturing expertise, and proven retention strategies make us the partner of choice." }
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
                                        href="/insights/pay-rates/norcross"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        View Norcross Pay Rate Details
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="Norcross"
                            keywords={['Norcross Staffing', 'Gwinnett Manufacturing Jobs', 'Bilingual Workforce Georgia', 'Industrial Staffing Norcross']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
