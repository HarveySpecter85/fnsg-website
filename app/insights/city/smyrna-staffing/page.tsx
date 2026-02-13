import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';
import FaqJsonLd from '@/app/components/seo/faq-json-ld';
import FreshnessBadge from '@/app/components/seo/freshness-badge';
import CitationSource from '@/app/components/seo/citation-source';
import LocalReviews from '@/app/components/seo/local-reviews';
import GoogleMapEmbed from '@/app/components/seo/google-map-embed';

export const metadata = {
    title: "Smyrna Staffing & Workforce Intelligence – First National Staffing",
    description: "Workforce insights for Smyrna, GA and Cobb County. Data on warehouse distribution, logistics staffing, manufacturing pay rates, and industrial labor trends near I-285 and I-75.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/smyrna-staffing',
    },
    openGraph: {
        title: "Smyrna Staffing Insights – First National Staffing",
        description: "Workforce intelligence for Smyrna, GA. Distribution, logistics, and manufacturing staffing data for Cobb County employers.",
        url: "https://firstnationalstaffing.com/insights/city/smyrna-staffing",
        type: "website"
    }
};

export default function SmyrnaStaffingPage() {
    const reviewData = [
        { author: "Michael Torres", role: "Operations VP", company: "Smyrna Distribution Center", rating: 5, text: "Having FNSG's new Smyrna office at 2430 Herodian Way means faster response times for our Cobb County operations. They deployed 60 warehouse associates in under a week for our holiday ramp-up." },
        { author: "Ashley Kim", role: "Plant Manager", company: "Cumberland Manufacturing", rating: 5, text: "FNSG handles all our production staffing needs near the I-285/I-75 interchange. Their safety record is excellent — zero lost-time incidents across 50,000+ hours worked at our facility." }
    ];

    const faqData = [
        { q: "Does First National Staffing have an office in Smyrna?", a: "Yes. Our Smyrna branch is located at 2430 Herodian Way, Smyrna, GA 30080. This office serves Smyrna, Marietta, Vinings, and the broader Cobb County area with warehouse, logistics, and light industrial staffing solutions." },
        { q: "What industries do you staff in Smyrna?", a: "We specialize in warehouse and distribution, light manufacturing, food and beverage production, logistics and supply chain, and healthcare environmental services (EVS). Smyrna's proximity to I-285 and I-75 makes it a major distribution hub." },
        { q: "How quickly can you fill warehouse positions in Smyrna?", a: "Most standard warehouse roles — pickers, packers, forklift operators — are filled within 24 to 48 hours from our Smyrna branch. For large-scale ramp-ups (20+ workers), we typically deliver within 5-7 business days." },
        { q: "What are typical warehouse pay rates in Smyrna and Cobb County?", a: "Entry-level warehouse associates start between $15.50 and $17.00 per hour. Certified forklift operators earn $18.00 to $22.00 per hour. Shift differentials of $1.00-$2.00 apply for 2nd and 3rd shifts." },
        { q: "Do you provide bilingual staffing in Smyrna?", a: "Yes. Smyrna has a growing Hispanic community (12.9% of the population), and we deploy bilingual (English/Spanish) on-site coordinators to improve communication, safety compliance, and retention on the floor." },
        { q: "What safety training do your Smyrna associates receive?", a: "All associates complete our Workforce Intelligence orientation covering OSHA general industry standards, PPE requirements, lockout/tagout awareness, and site-specific hazard protocols before their first shift." },
        { q: "Can you staff for overnight or weekend shifts?", a: "Absolutely. Many distribution centers near I-285 and the Smyrna Industrial Park operate 24/7. We maintain a dedicated pool of 2nd and 3rd shift candidates ready for same-day deployment." },
        { q: "Do you handle temp-to-perm conversions in Smyrna?", a: "Yes. Our temp-to-perm program lets employers evaluate workers on the job before extending a direct-hire offer. Conversion typically occurs after 480-720 hours of satisfactory performance." },
        { q: "What makes FNSG different from other Smyrna staffing agencies?", a: "Three things: hyperlocal data intelligence (real-time pay benchmarks, attendance analytics, OSHA risk tracking), a physical office in Smyrna for same-day response, and bilingual capabilities that national chains cannot match." },
        { q: "How do I request workers from the Smyrna office?", a: "Call us at (470) 470-4243, visit our Smyrna office at 2430 Herodian Way, or submit a request online at firstnationalstaffing.com/contact/request-workforce. We respond to all inquiries within 2 business hours." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing Group – Smyrna",
        "url": "https://firstnationalstaffing.com/insights/city/smyrna-staffing",
        "telephone": "+1-470-470-4243",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "2430 Herodian Way",
            "addressLocality": "Smyrna",
            "addressRegion": "GA",
            "postalCode": "30080",
            "addressCountry": "US"
        },
        "areaServed": [
            { "@type": "City", "name": "Smyrna" },
            { "@type": "City", "name": "Marietta" },
            { "@type": "City", "name": "Vinings" }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.8839",
            "longitude": "-84.5144"
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
                id="smyrna-jsonld"
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
                            { label: 'Smyrna', href: '/insights/city/smyrna-staffing' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Smyrna, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Smyrna sits at the crossroads of Georgia's distribution and logistics network, with direct access
                                    to I-285, I-75, and proximity to Hartsfield-Jackson International Airport. With a population of 57,177
                                    and a workforce participation rate of 75.5%, Smyrna is one of the fastest-growing employment centers
                                    in metro Atlanta. The city's industrial parks and distribution corridors support a diverse mix of
                                    warehouse, logistics, manufacturing, and healthcare employers competing for reliable hourly talent.
                                </p>
                                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-blue-900 font-semibold text-sm">
                                        📍 FNSG Smyrna Office: 2430 Herodian Way, Smyrna, GA 30080 — Open Mon-Fri 8AM-5PM — (470) 470-4243
                                    </p>
                                </div>
                                <FreshnessBadge dateModified="2025-01-15" label="Q1 2025" updateCadence="Quarterly" />
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Does the Smyrna / Cobb County Labor Market Look Like?</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        Cobb County's unemployment rate stands at 3.1% (December 2025), below the state average,
                                        driven by the concentration of Fortune 500 headquarters and a robust distribution infrastructure.
                                        The challenge for industrial employers in Smyrna is competing with corporate employers like Home Depot,
                                        WellStar Health System, and Genuine Parts Company for the same labor pool.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>Distribution Hub:</strong> Multiple warehouse and 3PL facilities clustered near I-285/I-75 interchange, with 24+ warehouse spaces available.</li>
                                        <li><strong>Corporate Competition:</strong> Fortune 500 HQs (Home Depot, HD Supply, RaceTrac) create wage pressure for entry-level roles.</li>
                                        <li><strong>Diverse Workforce:</strong> 43.6% White, 31.7% Black, 12.9% Hispanic — bilingual staffing capability is a competitive advantage.</li>
                                        <li><strong>High Income Market:</strong> Median household income of $100,061 means warehouse roles must offer competitive wages + benefits to attract talent.</li>
                                        <li><strong>Transit Access:</strong> CobbLinc public transit provides better coverage than rural counties, reducing commuter reliability issues.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Pay Rate Benchmarks */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">What Are Average Pay Rates for Warehouse Workers in Smyrna?</h2>
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
                                                <td className="p-4 font-medium text-slate-900">Warehouse Associate (Picker/Packer)</td>
                                                <td className="p-4 text-slate-600">$15.50</td>
                                                <td className="p-4 text-slate-600">$17.00</td>
                                                <td className="p-4 text-slate-600">$19.50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Forklift Operator (Sit-Down/Stand-Up)</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                                <td className="p-4 text-slate-600">$23.50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Shipping & Receiving Clerk</td>
                                                <td className="p-4 text-slate-600">$16.00</td>
                                                <td className="p-4 text-slate-600">$18.50</td>
                                                <td className="p-4 text-slate-600">$21.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Light Manufacturing Assembler</td>
                                                <td className="p-4 text-slate-600">$16.50</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$21.50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Material Handler / Logistics</td>
                                                <td className="p-4 text-slate-600">$17.00</td>
                                                <td className="p-4 text-slate-600">$19.00</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-slate-500 mt-2 italic">
                                    *Data aggregated from FNSG internal placement data and Cobb County market surveys (Q1 2025). Shift differentials of $1.00-$2.00/hr apply for 2nd and 3rd shifts.
                                </p>
                                <CitationSource
                                    source="U.S. Bureau of Labor Statistics"
                                    href="https://www.bls.gov/oes/current/oes_ga.htm"
                                    detail="Georgia OES Wage Estimates, May 2024"
                                    compact={true}
                                />
                            </section>

                            {/* Shift Reliability Index */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">How Reliable Is Shift Attendance in Smyrna?</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">The Metro Advantage</h3>
                                    <p className="text-blue-800 mb-4">
                                        Unlike rural staffing markets, Smyrna benefits from metro Atlanta's transit infrastructure.
                                        CobbLinc bus routes serve major employment corridors, and rideshare options are widely available.
                                        <strong> Attendance rates in Smyrna average 91.5%</strong>, outperforming rural markets by 8-12 points.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Status</span>
                                            <span className="block text-lg font-bold text-slate-900">CobbLinc + Rideshare Available</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                            <span className="block text-lg font-bold text-slate-900">Attendance Bonuses + Metro Transit</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Are the Top OSHA Risks in Smyrna Warehouses?</h2>
                                <p className="mb-4 text-slate-700">
                                    Distribution and logistics facilities near the I-285 corridor present specific workplace hazards that require proactive safety management.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Powered Industrial Truck Incidents</h3>
                                            <p className="text-slate-600 text-sm">High forklift traffic in distribution centers increases collision risk. Mitigation: OSHA-certified forklift training, designated pedestrian zones, and speed monitoring protocols.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Ergonomic Strain Injuries</h3>
                                            <p className="text-slate-600 text-sm">Repetitive lifting, bending, and reaching in pick-and-pack operations. Mitigation: Job rotation schedules, mechanical assist devices, and proper lifting technique training.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Loading Dock Hazards</h3>
                                            <p className="text-slate-600 text-sm">Falls from dock edges and struck-by incidents during trailer loading. Mitigation: Dock locks, wheel chocks, visual edge marking, and dock safety awareness training.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">4</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Heat Stress (Summer Operations)</h3>
                                            <p className="text-slate-600 text-sm">Non-climate-controlled warehouses during Georgia summers exceed 100°F. Mitigation: Hydration stations, cool-down break rotations, and heat illness recognition training.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <CitationSource
                                source="OSHA Standards & Georgia DOL"
                                href="https://dol.georgia.gov/"
                                detail="Georgia Department of Labor Compliance Resources"
                                compact={true}
                            />

                            {/* Workforce Composition & Seasonal Demand */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                    <p className="text-slate-700 text-sm">
                                        Smyrna's workforce is highly diverse, with strong representation across ethnic communities.
                                        The city's 75.5% labor force participation rate is significantly above state and national averages.
                                        Workers tend to be educated (59.4% hold bachelor's degrees), creating a deep pool for
                                        quality-focused roles like QA, inventory management, and logistics coordination.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>Q4 Holiday Rush:</strong> Distribution centers surge 30-50% for e-commerce fulfillment (Oct-Dec). <br />
                                        <strong>Back-to-School (Aug-Sep):</strong> Retail distribution spikes for HD Supply and wholesale goods. <br />
                                        <strong>Strategy:</strong> Pre-build candidate pipelines by 20% in Q3 to absorb Q4 demand without quality drops.
                                    </p>
                                </div>
                            </section>

                            <CitationSource
                                source="U.S. Census Bureau & Georgia DOL"
                                href="https://dol.georgia.gov/labor-market-information"
                                detail="Area Labor Profiles, 2024"
                                compact={true}
                            />

                            {/* How FNSG Improves Stability */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">How Does FNSG Stabilize Workforce in Smyrna?</h2>
                                <p className="mb-6 text-slate-300">
                                    With a physical office on Herodian Way, we offer same-day response and hyperlocal market intelligence.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Local Smyrna Office — Same-Day Response</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>24-48 Hour Placement for Warehouse Roles</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>OSHA-Compliant Safety Orientation</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Bilingual Coordinators (English/Spanish)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Real-Time Attendance & Performance Analytics</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Temp-to-Perm Programs with 4-Hour Guarantee</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Map and Reviews */}
                            <section className="space-y-8">
                                <GoogleMapEmbed query="2430 Herodian Way, Smyrna, GA 30080" title="FNSG Smyrna Service Area" />
                                <LocalReviews locationName="Smyrna" reviews={reviewData} />
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
                                        href="/contact/request-workforce"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request Workers from Smyrna Office
                                    </Link>
                                    <Link
                                        href="/insights/city/marietta-staffing"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        View Marietta Staffing Insights
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="Smyrna"
                            keywords={['Smyrna Staffing Agency', 'Cobb County Warehouse Jobs', 'Staffing Agency Smyrna GA', 'Warehouse Staffing Near Me', 'Temp Agency Smyrna Georgia']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
