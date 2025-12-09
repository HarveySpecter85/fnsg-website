import React from 'react';
import { CityHubHeader, Breadcrumbs, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: "Atlanta Staffing Agency & Workforce Intelligence – First National Staffing",
    description: "Data-driven staffing insights for Atlanta, GA. Covering logistics, hospitality, and light industrial labor trends near Hartsfield-Jackson and I-285.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/atlanta',
    },
    openGraph: {
        title: "Atlanta Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/atlanta",
        type: "website"
    }
};

export default function AtlantaHub() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Atlanta, GA",
        "url": "https://firstnationalstaffing.com/insights/city/atlanta",
        "image": "https://firstnationalstaffing.com/insights/city/atlanta/opengraph-image",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Atlanta",
            "addressRegion": "GA",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Fulton County"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.7490",
            "longitude": "-84.3880"
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
                id="atlanta-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <CityHubHeader
                city="Atlanta"
                intro="The economic engine of the Southeast. Our Atlanta insights focus on high-volume logistics near Hartsfield-Jackson, hospitality staffing for downtown events, and the competitive I-285 industrial corridor."
            />

            <div className="container mx-auto px-6 max-w-5xl pb-24">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Atlanta', href: '/insights/city/atlanta' }
                ]} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* H1 & Intro */}
                        <section>
                            <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Atlanta, GA — 2025 Edition</h1>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Atlanta stands as a global logistics powerhouse and a top-tier destination for corporate headquarters.
                                The labor market is defined by its density and diversity, ranging from specialized aviation mechanics near the airport to high-volume distribution associates along the Fulton Industrial Boulevard.
                                Success here requires navigating a highly mobile workforce with access to multiple transit options.
                            </p>
                        </section>

                        {/* Labor Market Overview */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Atlanta, GA)</h2>
                            <div className="prose prose-slate max-w-none">
                                <p>
                                    The Atlanta metro area is currently experiencing a "flight to quality" in the labor force.
                                    While entry-level roles remain abundant, there is a fierce battle for mid-level supervisors and skilled operators who can manage the complexities of modern supply chains.
                                    Wage inflation has stabilized, but benefit expectations (schedule flexibility, same-day pay) are rising.
                                </p>
                                <ul className="list-disc pl-5 mt-4 space-y-2">
                                    <li><strong>Logistics Dominance:</strong> The "Airport City" effect drives massive demand for 24/7 warehouse operations.</li>
                                    <li><strong>Transit Impact:</strong> MARTA accessibility is a critical factor for candidate pools in Downtown and South Atlanta.</li>
                                    <li><strong>Event Economy:</strong> Constant demand for surge staffing in hospitality due to conventions and major sporting events.</li>
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
                                            <td className="p-4 font-medium text-slate-900">Forklift Operator (Sit/Stand)</td>
                                            <td className="p-4 text-slate-600">$17.50</td>
                                            <td className="p-4 text-slate-600">$19.50</td>
                                            <td className="p-4 text-slate-600">$23.00</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">General Warehouse</td>
                                            <td className="p-4 text-slate-600">$15.50</td>
                                            <td className="p-4 text-slate-600">$16.75</td>
                                            <td className="p-4 text-slate-600">$18.50</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Event Staff / Hospitality</td>
                                            <td className="p-4 text-slate-600">$16.00</td>
                                            <td className="p-4 text-slate-600">$18.00</td>
                                            <td className="p-4 text-slate-600">$22.00</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-slate-900">Inventory Clerk</td>
                                            <td className="p-4 text-slate-600">$18.00</td>
                                            <td className="p-4 text-slate-600">$20.50</td>
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
                                <h3 className="font-bold text-blue-900 mb-2">Traffic & Transit Impact</h3>
                                <p className="text-blue-800 mb-4">
                                    Atlanta's traffic congestion is a primary disruptor for shift attendance.
                                    Sites accessible via <strong>MARTA bus/rail lines</strong> see a <strong>22% higher retention rate</strong> for entry-level roles compared to those requiring personal vehicles.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded shadow-sm">
                                        <span className="block text-sm font-semibold text-slate-500 uppercase">High Risk Zone</span>
                                        <span className="block text-lg font-bold text-slate-900">I-285 / I-20 Interchange</span>
                                    </div>
                                    <div className="bg-white p-4 rounded shadow-sm">
                                        <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                        <span className="block text-lg font-bold text-slate-900">MARTA Subsidy Programs</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* OSHA & Risk Intelligence */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Atlanta</h2>
                            <p className="mb-4 text-slate-700">
                                High-volume distribution centers face specific risks related to speed and congestion.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Heat Stress (Summer)</h3>
                                        <p className="text-slate-600 text-sm">Critical for unconditioned warehouses. Mitigation: Hydration stations and "cool-down" rotations.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Powered Industrial Trucks</h3>
                                        <p className="text-slate-600 text-sm">High traffic in cross-dock facilities. Mitigation: Pedestrian segregation lanes and blue-light warnings.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Loading Dock Safety</h3>
                                        <p className="text-slate-600 text-sm">Falls and crush hazards. Mitigation: Wheel chocks and dock lock enforcement.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Workforce Composition & Seasonal Demand */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                <p className="text-slate-700 text-sm">
                                    Atlanta's workforce is incredibly diverse. We see a strong mix of career logistics professionals and gig-economy workers seeking stability.
                                    The "Airport Zone" workforce is highly experienced in air cargo and TSA-regulated environments.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                <p className="text-slate-700 text-sm">
                                    <strong>Holiday Peak:</strong> Massive surge in e-commerce and retail distribution from Oct-Dec. <br />
                                    <strong>Summer Surge:</strong> Beverage distribution and event staffing peak from May-Aug. <br />
                                    <strong>Strategy:</strong> Build "bench strength" 4-6 weeks prior to peak onset.
                                </p>
                            </div>
                        </section>

                        {/* How FNSG OS Improves Stability */}
                        <section className="bg-slate-900 text-white p-8 rounded-xl">
                            <h2 className="text-2xl font-bold mb-4">How FNSG OS Stabilizes Workforce in Atlanta</h2>
                            <p className="mb-6 text-slate-300">
                                In a city that never stops moving, FNSG OS provides the friction-less staffing infrastructure you need.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> <span>Geo-Fenced Attendance Tracking</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> <span>MARTA-Aligned Recruiting</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> <span>Surge Deployment Squads</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> <span>Real-Time Fill Rate Analytics</span>
                                </li>
                            </ul>
                        </section>

                        {/* FAQs */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    { q: "How quickly can you staff a warehouse in Atlanta?", a: "For general labor, we can often deploy teams within 24 hours. Skilled roles typically take 48-72 hours." },
                                    { q: "Do you service the airport area?", a: "Yes, we have a strong presence in the South Atlanta/Airport logistics corridor." },
                                    { q: "Can you provide TSA-screened candidates?", a: "Yes, we can facilitate TSA background checks and STA applications for air cargo clients." },
                                    { q: "What is the average pay for forklift drivers in Atlanta?", a: "As of 2025, experienced forklift operators in Atlanta command between $19.00 and $23.00 per hour." },
                                    { q: "Do you offer transportation for workers?", a: "We partner with local van-pool services and recruit specifically along MARTA lines to ensure reliability." },
                                    { q: "How do you handle high turnover?", a: "We use our Retention Intelligence module to identify root causes and implement attendance bonuses and engagement programs." },
                                    { q: "Are you available for weekend shifts?", a: "Yes, we provide 24/7 staffing support, including weekend and night shift coverage." },
                                    { q: "Do you staff for events and hospitality?", a: "Absolutely. We support major venues and hotels with banquet servers, setup crews, and housekeeping staff." },
                                    { q: "What safety training do associates receive?", a: "All associates undergo general safety awareness training, including lifting techniques and PPE requirements." },
                                    { q: "Why choose FNSG over other Atlanta agencies?", a: "Our OS-driven approach gives you data visibility and operational control that traditional agencies cannot match." }
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
                                    href="/contact?location=atlanta"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                >
                                    Request a Workforce Strategy Session
                                </Link>
                                <Link
                                    href="/resources/reports/atlanta-2025"
                                    className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                >
                                    Download Atlanta Workforce Intelligence Report
                                </Link>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar Column (Quick Links & SEO) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 sticky top-24">
                            <h3 className="font-bold text-slate-900 mb-4">Atlanta Quick Links</h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/insights/industry/logistics" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <span>🚛</span> Logistics Staffing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insights/pay-rates/atlanta" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <span>💰</span> Local Wage Data
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insights/osha/heat-stress" className="text-blue-600 hover:underline flex items-center gap-2">
                                        <span>☀️</span> Heat Safety
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
                                    <p>Atlanta, GA 30336</p>
                                    <p>Fulton County</p>
                                </address>
                            </div>
                        </div>

                        <SEOBlock
                            city="Atlanta"
                            keywords={['Logistics Staffing', 'Forklift Jobs', 'Atlanta Warehouse', 'Event Staffing']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
