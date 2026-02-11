import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';
import FaqJsonLd from '@/app/components/seo/faq-json-ld';

export const metadata = {
    title: "Clayton County Staffing & Workforce Intelligence – First National Staffing",
    description: "Workforce insights for the Airport Logistics District. Data on air cargo, warehousing, and food production labor trends in Clayton County.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/clayton-county-staffing',
    },
    openGraph: {
        title: "Clayton County Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/clayton-county-staffing",
        type: "website"
    }
};

export default function ClaytonCountyPage() {
    const faqData = [
        { q: "Do you provide staffing for airport-related roles?", a: "Yes, we support logistics and cargo clients in the airport district, including those requiring TSA clearance." },
        { q: "How do you handle background checks?", a: "We offer standard criminal checks and can facilitate more in-depth screenings (STA/SIDA) as required." },
        { q: "Can you staff 3rd shift operations?", a: "Absolutely. We have a dedicated pool of candidates specifically seeking night shift opportunities." },
        { q: "What is the average pay for general labor in Clayton?", a: "Entry-level roles typically start between $16.00-$17.50/hr depending on the shift." },
        { q: "Do you have experience with cold storage staffing?", a: "Yes, we regularly staff for food distribution and cold storage facilities in Forest Park." },
        { q: "How quickly can you fill 50+ positions?", a: "With our 'Deployment Squad' model, we can ramp up high-volume rosters within 5-7 business days." },
        { q: "Do you offer transportation assistance?", a: "We focus on recruiting candidates who live near your facility or along reliable MARTA routes." },
        { q: "What is your fill rate for peak season?", a: "We maintained a 94% fill rate during the 2024 peak season for our Clayton County partners." },
        { q: "Are you OSHA compliant?", a: "Yes, we strictly adhere to OSHA standards and provide general safety training to all associates." },
        { q: "How do I get started?", a: "Click the 'Request Strategy Session' button below to connect with our local account team." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Clayton County",
        "url": "https://firstnationalstaffing.com/insights/city/clayton-county-staffing",
        "image": "https://firstnationalstaffing.com/insights/city/clayton-county-staffing/opengraph-image",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Forest Park",
            "addressRegion": "GA",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Clayton County"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.6212",
            "longitude": "-84.3699"
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
                id="clayton-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <FaqJsonLd faqs={faqData} />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '/insights/city' },
                            { label: 'Clayton County', href: '/insights/city/clayton-county-staffing' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Clayton County, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Anchored by Hartsfield-Jackson Atlanta International Airport, Clayton County is the beating heart of the Southeast's logistics network.
                                    The workforce here operates on a 24/7 rhythm, supporting massive air cargo operations, cold-chain logistics, and food production facilities.
                                    Speed, reliability, and security clearance readiness are the defining characteristics of the local labor pool.
                                </p>
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Clayton County)</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        The Clayton County labor market is highly fluid, with significant churn driven by wage competition among major logistics players.
                                        "Job hopping" is common as candidates chase hourly rate increases.
                                        However, the availability of public transit (MARTA) provides a deep pool of entry-level talent that is less accessible in northern suburbs.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>Logistics Dominance:</strong> Forest Park and Morrow host millions of square feet of distribution space.</li>
                                        <li><strong>Security Focus:</strong> High demand for candidates eligible for TSA/STA clearances for airport-adjacent roles.</li>
                                        <li><strong>Shift Dynamics:</strong> 2nd and 3rd shift roles are harder to fill, requiring premium pay differentials.</li>
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
                                                <td className="p-4 font-medium text-slate-900">Air Cargo Handler</td>
                                                <td className="p-4 text-slate-600">$17.50</td>
                                                <td className="p-4 text-slate-600">$19.00</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Forklift Operator (Reach)</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                                <td className="p-4 text-slate-600">$23.50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Food Production Associate</td>
                                                <td className="p-4 text-slate-600">$16.00</td>
                                                <td className="p-4 text-slate-600">$17.25</td>
                                                <td className="p-4 text-slate-600">$19.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Warehouse Team Lead</td>
                                                <td className="p-4 text-slate-600">$21.00</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
                                                <td className="p-4 text-slate-600">$28.00</td>
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
                                    <h3 className="font-bold text-blue-900 mb-2">The MARTA Advantage</h3>
                                    <p className="text-blue-800 mb-4">
                                        Unlike many metro counties, Clayton has robust MARTA bus coverage.
                                        Facilities located within <strong>0.5 miles of a bus stop</strong> see <strong>30% higher applicant flow</strong> and better retention for non-driving workforce segments.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Hub</span>
                                            <span className="block text-lg font-bold text-slate-900">Forest Park / Fort Gillem</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                            <span className="block text-lg font-bold text-slate-900">Shift-Aligned Bus Schedules</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Clayton County</h2>
                                <p className="mb-4 text-slate-700">
                                    The high volume of "fast-moving consumer goods" creates specific hazards around speed and fatigue.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Fatigue Management</h3>
                                            <p className="text-slate-600 text-sm">Critical for 24/7 operations. Mitigation: Rotation schedules and mandatory rest periods between double shifts.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Cold Stress</h3>
                                            <p className="text-slate-600 text-sm">Prevalent in cold storage/food distribution. Mitigation: Thermal PPE and warm-up break protocols.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Conveyor Safety</h3>
                                            <p className="text-slate-600 text-sm">High risk in automated sorting hubs. Mitigation: Emergency stop training and loose clothing policies.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Workforce Composition & Seasonal Demand */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                    <p className="text-slate-700 text-sm">
                                        Clayton County's workforce is diverse and resilient.
                                        A significant portion of the labor pool has experience in "high-velocity" environments like airport ground handling or parcel sorting, making them adaptable to fast-paced warehouse roles.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>Peak Season:</strong> Extreme surge from Nov-Jan for parcel/retail logistics. <br />
                                        <strong>Summer Travel:</strong> Airport-related demand spikes May-Aug, drawing from the general labor pool. <br />
                                        <strong>Strategy:</strong> Secure "peak" commitments early with completion bonuses.
                                    </p>
                                </div>
                            </section>

                            {/* How FNSG Improves Stability */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">How FNSG Stabilizes Workforce in Clayton County</h2>
                                <p className="mb-6 text-slate-300">
                                    In a high-turnover market, FNSG provides the data and engagement tools to keep your docks fully staffed.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Transit-Optimized Recruiting</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Real-Time Attendance Alerts</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Background Check Acceleration</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Shift Differential Analysis</span>
                                    </li>
                                </ul>
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
                            <section className="py-8 border-t border-slate-200">
                                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                    <Link
                                        href="/contact?location=clayton"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/insights/reports/clayton-2025"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Download Clayton Workforce Intelligence Report
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="Clayton County"
                            keywords={['Clayton County Staffing', 'Airport Jobs', 'Morrow Staffing', 'Riverdale Workforce']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
