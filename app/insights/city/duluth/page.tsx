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
    title: "Duluth Staffing & Workforce Intelligence – First National Staffing",
    description: "Workforce insights for Duluth, GA. Data on warehouse logistics, light manufacturing, and multicultural workforce trends along the I-85 corridor in Gwinnett County.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/duluth',
    },
    openGraph: {
        title: "Duluth Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/duluth",
        type: "website"
    }
};

export default function DuluthPage() {
    const faqData = [
        { q: "Do you have Korean-speaking workers available?", a: "Yes, Duluth has a strong Korean community and we maintain a pool of Korean-speaking candidates for employers who need bilingual staff." },
        { q: "How quickly can you staff a new distribution center?", a: "For a typical 50-person startup, we can have fully trained associates on-site within 7-10 business days." },
        { q: "Do your workers have forklift certifications?", a: "Many do. We verify all certifications and can arrange training for candidates who need it through our eScreen partner network." },
        { q: "What shifts are most in-demand in Duluth?", a: "2nd shift (2pm-10pm) and weekend shifts are in highest demand due to e-commerce fulfillment schedules." },
        { q: "Can you provide same-day replacements for no-shows?", a: "Yes, we maintain an on-call bench specifically for the Duluth/Gwinnett area to handle urgent fill requests." },
        { q: "What industries do you staff in Duluth?", a: "Primarily warehouse/logistics, e-commerce fulfillment, light manufacturing, and food distribution." },
        { q: "Do you offer temp-to-hire placements?", a: "Absolutely. Many of our Duluth clients use temp-to-hire to evaluate workers before making permanent offers." },
        { q: "How do you handle peak season staffing?", a: "We begin recruiting 6-8 weeks ahead of Q4 peak and offer retention bonuses to keep workers through the season." },
        { q: "What PPE do you provide?", a: "Standard PPE (safety vests, glasses, gloves) is provided. Steel-toe boots are typically worker-supplied but we can coordinate group purchases." },
        { q: "Why choose FNSG for Duluth staffing?", a: "Our deep understanding of Gwinnett's diverse workforce and strong relationships with local employers make us the reliable choice." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Duluth",
        "url": "https://firstnationalstaffing.com/insights/city/duluth",
        "image": "https://firstnationalstaffing.com/insights/city/duluth/opengraph-image",
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
            "name": "Duluth"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "34.0029",
            "longitude": "-84.1447"
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
                id="duluth-jsonld"
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
                            { label: 'Duluth', href: '/insights/city/duluth' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Duluth, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Duluth sits at the heart of Gwinnett County's booming commercial corridor along I-85.
                                    Known for its diverse population and strong Korean business community, Duluth offers a unique labor pool
                                    with multilingual capabilities and a strong work ethic. The area's proximity to major distribution hubs
                                    makes it a prime location for warehouse, logistics, and light manufacturing operations.
                                </p>
                                <FreshnessBadge dateModified="2025-01-15" label="Q1 2025" updateCadence="Quarterly" />
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Duluth / Gwinnett)</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        Gwinnett County is one of Georgia's most diverse counties, and Duluth reflects this with a workforce
                                        that spans multiple languages and cultural backgrounds. The challenge here is not finding workers,
                                        but matching the right candidates to employers who value cultural competence and reliability.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>Sector Dominance:</strong> Distribution centers, e-commerce fulfillment, and light assembly are major employers.</li>
                                        <li><strong>Multilingual Advantage:</strong> Korean, Spanish, and Vietnamese speakers are prevalent, opening doors to specialized client needs.</li>
                                        <li><strong>Transportation Access:</strong> MARTA bus routes and proximity to I-85/I-985 make Duluth accessible for multi-shift operations.</li>
                                        <li><strong>Tech-Forward Facilities:</strong> Many employers use advanced WMS systems, requiring adaptable workers.</li>
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
                                                <td className="p-4 font-medium text-slate-900">Warehouse Associate</td>
                                                <td className="p-4 text-slate-600">$16.00</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$21.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Forklift Operator (Reach/Cherry Picker)</td>
                                                <td className="p-4 text-slate-600">$18.50</td>
                                                <td className="p-4 text-slate-600">$20.50</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Order Picker / Packer</td>
                                                <td className="p-4 text-slate-600">$15.50</td>
                                                <td className="p-4 text-slate-600">$17.50</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Light Assembly Tech</td>
                                                <td className="p-4 text-slate-600">$16.50</td>
                                                <td className="p-4 text-slate-600">$18.50</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Shipping/Receiving Clerk</td>
                                                <td className="p-4 text-slate-600">$17.00</td>
                                                <td className="p-4 text-slate-600">$19.00</td>
                                                <td className="p-4 text-slate-600">$23.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-slate-500 mt-2 italic">
                                    *Data aggregated from FNSG internal placement data and local market surveys (Q1 2025).
                                </p>
                                <CitationSource
                                    source="U.S. Bureau of Labor Statistics"
                                    href="https://www.bls.gov/oes/"
                                    detail="Occupational Employment and Wage Statistics, Georgia, May 2024"
                                    compact={true}
                                />
                            </section>

                            {/* Shift Reliability Index */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Shift Reliability Index</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">The Gwinnett Commuter Advantage</h3>
                                    <p className="text-blue-800 mb-4">
                                        Duluth workers benefit from multiple transit options and a dense residential base nearby.
                                        However, I-85 traffic congestion during peak hours can impact 1st shift arrivals.
                                        <strong> Staggered start times</strong> (6:00 AM vs 7:00 AM) have shown to reduce tardiness by <strong>18%</strong>.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Access</span>
                                            <span className="block text-lg font-bold text-slate-900">Good (MARTA Bus Routes)</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Strategy</span>
                                            <span className="block text-lg font-bold text-slate-900">Staggered Shifts + Attendance Bonuses</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Duluth</h2>
                                <p className="mb-4 text-slate-700">
                                    Warehouse and distribution environments in Duluth present specific risks that require proactive management.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Powered Industrial Trucks</h3>
                                            <p className="text-slate-600 text-sm">Forklift incidents are the #1 risk in local DCs. Mitigation: Verified certifications and quarterly refresher training.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Ergonomic Strain</h3>
                                            <p className="text-slate-600 text-sm">Repetitive lifting and reaching in pick-and-pack operations. Mitigation: Job rotation schedules and proper lifting technique training.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Slip/Trip/Fall Hazards</h3>
                                            <p className="text-slate-600 text-sm">High-traffic aisles and loading docks. Mitigation: Non-slip footwear requirements and clear aisle protocols.</p>
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
                                        Duluth's workforce is exceptionally diverse, with significant Korean, Hispanic, and Vietnamese communities.
                                        Bilingual supervisors are highly valued. Many workers seek stable, full-time opportunities with clear advancement paths.
                                        Family networks are strong recruiting channels.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>E-Commerce:</strong> Q4 holiday surge (Oct-Dec) is massive. <br />
                                        <strong>Back-to-School:</strong> Late Q3 spike for retail DCs. <br />
                                        <strong>Strategy:</strong> Begin recruiting 6-8 weeks ahead of peak. Offer retention bonuses through peak season.
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
                                <h2 className="text-2xl font-bold mb-4">How FNSG Optimizes Workforce in Duluth</h2>
                                <p className="mb-6 text-slate-300">
                                    We leverage Duluth's diverse talent pool and logistics infrastructure to deliver reliable staffing solutions.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Multilingual Candidate Pool (Korean, Spanish, Vietnamese)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>WMS-Trained Associates Available</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Forklift Certification Verification</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Peak Season Ramp-Up Specialists</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Google Map & Reviews */}
                            <GoogleMapEmbed query="Duluth, GA" title="FNSG Duluth Service Area" />

                            <LocalReviews
                                locationName="Duluth"
                                reviews={[
                                    { author: "Jin-Ho Kim", role: "Warehouse Manager", company: "Duluth Distribution Center", rating: 5, text: "FNSG understands Duluth's diverse workforce. Their Korean and Spanish bilingual coordinators eliminated our communication issues overnight. Productivity on the line improved 22% in the first month." },
                                    { author: "Stephanie Patel", role: "Plant Director", company: "Gwinnett Food Processing", rating: 5, text: "We run a temperature-controlled food production line that requires GMP-certified workers. FNSG delivers trained candidates who pass our food safety audits consistently." }
                                ]}
                            />

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
                                        Request a Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/insights/pay-rates/duluth"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        View Duluth Pay Rate Details
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="Duluth"
                            keywords={['Duluth Staffing', 'Gwinnett County Jobs', 'Warehouse Staffing Duluth', 'Korean Speaking Workers Georgia']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
