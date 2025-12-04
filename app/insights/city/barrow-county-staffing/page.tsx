import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: "Barrow County Staffing & Workforce Intelligence – First National Staffing",
    description: "Workforce insights for Winder, Auburn, and the Hwy 316 corridor. Data on manufacturing labor, pay rates, and industrial growth in Barrow County.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/barrow-county-staffing',
    },
    openGraph: {
        title: "Barrow County Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/barrow-county-staffing",
        type: "website"
    }
};

export default function BarrowCountyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Barrow County",
        "url": "https://firstnationalstaffing.com/insights/city/barrow-county-staffing",
        "image": "https://firstnationalstaffing.com/insights/city/barrow-county-staffing/opengraph-image",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Winder",
            "addressRegion": "GA",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Barrow County"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.9926",
            "longitude": "-83.7202"
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
                id="barrow-jsonld"
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
                            { label: 'Barrow County', href: '/insights/city/barrow-county-staffing' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Barrow County, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Situated along the rapidly expanding Highway 316 corridor, Barrow County has transformed into a strategic logistics and manufacturing hub connecting Atlanta to Athens.
                                    The workforce here is industrious and community-focused, but the influx of new distribution centers in Winder and Auburn has created a highly competitive environment for skilled labor.
                                </p>
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Barrow County)</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        Barrow County's labor market is tightening as residential growth trails slightly behind industrial development.
                                        Employers are competing not just with local firms, but also drawing talent from neighboring Gwinnett and Jackson counties.
                                        Retention strategies focusing on "quality of life" (shorter commutes, steady shifts) are proving effective.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>Industrial Growth:</strong> Significant expansion in light manufacturing and e-commerce fulfillment centers.</li>
                                        <li><strong>Commuter Dynamics:</strong> Many residents commute out to Gwinnett; capturing this "drive-by" talent is a key opportunity.</li>
                                        <li><strong>Skill Gaps:</strong> High demand for maintenance technicians and CNC operators exceeds local supply.</li>
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
                                                <td className="p-4 text-slate-600">$16.00</td>
                                                <td className="p-4 text-slate-600">$17.50</td>
                                                <td className="p-4 text-slate-600">$19.50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Forklift Operator</td>
                                                <td className="p-4 text-slate-600">$17.00</td>
                                                <td className="p-4 text-slate-600">$19.00</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Machine Operator</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$20.50</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Maintenance Tech</td>
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
                                    <h3 className="font-bold text-blue-900 mb-2">The Highway 316 Factor</h3>
                                    <p className="text-blue-800 mb-4">
                                        Traffic congestion on Hwy 316 during peak hours (7-9 AM / 4-6 PM) significantly impacts attendance for commuters coming from Gwinnett.
                                        <strong>Staggered shifts</strong> (e.g., 6:00 AM starts) avoid the worst congestion and improve reliability by <strong>18%</strong>.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Status</span>
                                            <span className="block text-lg font-bold text-slate-900">Limited Public Transit</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                            <span className="block text-lg font-bold text-slate-900">Local "Winder-First" Hiring</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Barrow County</h2>
                                <p className="mb-4 text-slate-700">
                                    With a heavy concentration of manufacturing, physical safety risks are more prevalent than in pure logistics hubs.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Machine Guarding & LOTO</h3>
                                            <p className="text-slate-600 text-sm">Critical for production environments. Mitigation: Strict Lockout/Tagout verification and guard audits.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Noise Exposure</h3>
                                            <p className="text-slate-600 text-sm">Common in metal fabrication and processing. Mitigation: Annual audiograms and mandatory hearing protection.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Material Handling</h3>
                                            <p className="text-slate-600 text-sm">Manual lifting risks. Mitigation: Mechanical lift aids and "team lift" culture.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Workforce Composition & Seasonal Demand */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                    <p className="text-slate-700 text-sm">
                                        Barrow County offers a "blue-collar backbone" workforce with strong mechanical aptitude.
                                        Generational manufacturing families provide a stable base, but younger entrants are increasingly drawn to tech-forward roles.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>Manufacturing:</strong> Steady year-round with Q4 dips for maintenance. <br />
                                        <strong>Logistics:</strong> Q4 peak for e-commerce support. <br />
                                        <strong>Strategy:</strong> Cross-train associates to balance production and shipping needs.
                                    </p>
                                </div>
                            </section>

                            {/* How FNSG OS Improves Stability */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">How FNSG OS Stabilizes Workforce in Barrow County</h2>
                                <p className="mb-6 text-slate-300">
                                    We leverage deep local roots and advanced data to connect you with the best talent in Winder, Auburn, and Bethlehem.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Local Talent Mapping</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Shift-Matching Algorithms</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Safety-First Vetting</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Competitive Wage Analysis</span>
                                    </li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What areas of Barrow County do you serve?", a: "We actively recruit in Winder, Auburn, Bethlehem, Statham, and surrounding areas." },
                                        { q: "Do you have candidates with manufacturing experience?", a: "Yes, our Barrow County talent pool is rich with candidates experienced in assembly, machine operation, and production." },
                                        { q: "How do you handle the lack of public transit?", a: "We prioritize candidates with reliable personal transportation and organize carpooling initiatives where feasible." },
                                        { q: "What are the typical pay rates in Winder?", a: "General labor typically starts around $16.00/hr, with skilled roles commanding $19.00+." },
                                        { q: "Can you support rapid ramp-ups for new facilities?", a: "Yes, we have successfully staffed greenfield projects in the area using our 'Deployment Squad' model." },
                                        { q: "Do you offer drug screening?", a: "All candidates undergo a comprehensive drug screen and background check before placement." },
                                        { q: "What industries are growing fastest here?", a: "Advanced manufacturing and e-commerce distribution are the primary growth drivers in Barrow County." },
                                        { q: "How do you ensure retention?", a: "We focus on placing candidates in roles that match their commute and schedule preferences to reduce burnout." },
                                        { q: "Are you locally licensed and insured?", a: "Yes, First National Staffing is fully licensed and carries comprehensive workers' compensation and liability insurance." },
                                        { q: "How can I get a quote for staffing?", a: "Simply contact us via the form below or call our office for a customized workforce consultation." }
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
                                        href="/contact?location=barrow"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/resources/reports/barrow-2025"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Download Barrow Workforce Intelligence Report
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="Barrow County"
                            keywords={['Barrow County Staffing', 'Winder Jobs', 'Auburn Industrial Staffing', 'Georgia Workforce Data']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
