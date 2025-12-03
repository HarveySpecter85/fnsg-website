import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: "South Fulton Industrial Staffing & Airport Logistics – First National Staffing",
    description: "Labor insights for South Fulton's heavy industrial and airport logistics sectors. Covering 3rd shift staffing, recycling operations, and transportation.",
    alternates: {
        canonical: '/insights/city/south-fulton',
    },
    openGraph: {
        title: "South Fulton Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/south-fulton",
        type: "website"
    }
};

export default function SouthFultonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – South Fulton",
        "url": "https://firstnationalstaffing.com/insights/city/south-fulton",
        "image": "https://firstnationalstaffing.com/insights/city/south-fulton/opengraph-image",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "South Fulton",
            "addressRegion": "GA",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "South Fulton"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.6400",
            "longitude": "-84.5200"
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
                id="south-fulton-jsonld"
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
                            { label: 'South Fulton', href: '/insights/city/south-fulton' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in South Fulton, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    South Fulton serves as the industrial backbone of the Atlanta airport corridor.
                                    Dominated by heavy logistics, recycling, and distribution operations, this market operates on a true 24/7 cycle.
                                    The proximity to Hartsfield-Jackson International Airport creates a unique labor dynamic, where industrial employers compete directly with airport service providers for the same talent pool.
                                </p>
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (South Fulton)</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        The South Fulton workforce is heavily skewed towards industrial and logistics roles.
                                        With the rapid expansion of e-commerce fulfillment centers along Fulton Industrial Blvd and Camp Creek Pkwy, demand for skilled forklift operators and reliable general labor has outpaced supply.
                                        Retention strategies here must focus on shift differentials and transit accessibility.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>The "Airport Effect":</strong> Airport jobs often offer flight benefits, making them attractive. Industrial wages must be competitive to counter this.</li>
                                        <li><strong>24/7 Operations:</strong> 3rd shift staffing is a critical pain point. Night shift premiums of $1.50-$2.00/hr are standard.</li>
                                        <li><strong>Heavy Industry:</strong> A significant portion of the local market involves recycling and waste management, requiring specific safety training and hazard pay.</li>
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
                                                <td className="p-4 font-medium text-slate-900">Sit-Down Forklift Operator</td>
                                                <td className="p-4 text-slate-600">$18.50</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                                <td className="p-4 text-slate-600">$22.50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Recycling Sorter (Hazard Pay)</td>
                                                <td className="p-4 text-slate-600">$17.00</td>
                                                <td className="p-4 text-slate-600">$18.50</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">General Warehouse Labor</td>
                                                <td className="p-4 text-slate-600">$16.50</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$19.50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Reach Truck Operator</td>
                                                <td className="p-4 text-slate-600">$19.50</td>
                                                <td className="p-4 text-slate-600">$21.50</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
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
                                    <h3 className="font-bold text-blue-900 mb-2">Transit & Shift Timing</h3>
                                    <p className="text-blue-800 mb-4">
                                        South Fulton benefits from decent MARTA bus coverage, but "last mile" issues persist for facilities deep in industrial parks.
                                        Aligning shift start/end times with bus schedules is the single most effective way to improve attendance.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Status</span>
                                            <span className="block text-lg font-bold text-slate-900">Moderate (Route Dependent)</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                            <span className="block text-lg font-bold text-slate-900">Schedule Alignment</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in South Fulton</h2>
                                <p className="mb-4 text-slate-700">
                                    The concentration of heavy industry and recycling operations elevates the risk profile in this area.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Heavy Machinery Interactions</h3>
                                            <p className="text-slate-600 text-sm">High density of forklifts and heavy trucks. Mitigation: Strict pedestrian segregation and high-vis PPE.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Chemical & Biohazards</h3>
                                            <p className="text-slate-600 text-sm">Prevalent in recycling/waste facilities. Mitigation: HazCom training and proper vaccination protocols (Hep B/Tetanus).</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Fatigue Management</h3>
                                            <p className="text-slate-600 text-sm">Critical for 3rd shift operations. Mitigation: Scheduled breaks and ergonomic rotation.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Workforce Composition & Seasonal Demand */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                    <p className="text-slate-700 text-sm">
                                        The local workforce is experienced in industrial environments.
                                        Many candidates hold multiple certifications (OSHA 10, Forklift).
                                        However, there is high turnover in entry-level roles as workers quickly move for small wage increases ($0.50/hr).
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>E-commerce Peak:</strong> October-January is the busiest season. <br />
                                        <strong>Summer Slump:</strong> Some manufacturing slows down in July/August. <br />
                                        <strong>Strategy:</strong> Implement "Completion Bonuses" for Q4 retention.
                                    </p>
                                </div>
                            </section>

                            {/* How FNSG OS Improves Stability */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">How FNSG OS Stabilizes Workforce in South Fulton</h2>
                                <p className="mb-6 text-slate-300">
                                    We understand the gritty reality of industrial staffing in the airport corridor.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Safety-First Vetting (OSHA Focus)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Shift-Aligned Transportation Solutions</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Hazard Pay & Differential Analysis</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>On-Site Safety Coordinators</span>
                                    </li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Do you staff for recycling and waste management facilities?", a: "Yes, we have specialized safety protocols for staffing MRFs and waste processing sites." },
                                        { q: "Can you find workers for 3rd shift operations?", a: "Absolutely. We maintain a dedicated roster of night-shift preferenced candidates." },
                                        { q: "What is the typical pay for forklift drivers in South Fulton?", a: "Experienced sit-down operators typically start around $19-$20/hr, with reach truck operators commanding more." },
                                        { q: "Do you offer transportation assistance?", a: "We partner with local shuttle services and rideshare programs to help workers bridge the gap from MARTA stops." },
                                        { q: "How do you handle safety training?", a: "All candidates undergo our 'Industrial Athlete' safety orientation before deployment." },
                                        { q: "Can you support high-volume ramp-ups?", a: "Yes, our South Fulton branch specializes in deploying 50+ workers in under 48 hours." },
                                        { q: "Do you drug test candidates?", a: "Yes, we offer 5-panel to 12-panel screenings, including oral fluid testing for immediate results." },
                                        { q: "What industries do you serve in South Fulton?", a: "Primarily Logistics, E-commerce, Manufacturing, and Recycling/Waste Management." },
                                        { q: "How do you compete with airport jobs?", a: "We focus on faster hiring velocity and weekly pay to attract talent who can't wait for airport clearance processes." },
                                        { q: "Why choose FNSG for South Fulton?", a: "Our deep integration with the local community and focus on industrial safety sets us apart." }
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
                                        href="/contact?location=south-fulton"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/resources/reports/south-fulton-2025"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Download South Fulton Workforce Intelligence Report
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="South Fulton"
                            keywords={['South Fulton Staffing', 'Airport Logistics Jobs', 'Recycling Staffing', 'Fulton Industrial Jobs']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
