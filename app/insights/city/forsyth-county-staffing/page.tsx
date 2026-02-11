import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';
import FaqJsonLd from '@/app/components/seo/faq-json-ld';

export const metadata = {
    title: "Forsyth County Staffing & Workforce Intelligence – First National Staffing",
    description: "Workforce insights for Cumming, Alpharetta, and the GA-400 Tech Corridor. Data on advanced manufacturing, med-tech, and skilled labor trends.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/forsyth-county-staffing',
    },
    openGraph: {
        title: "Forsyth County Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/forsyth-county-staffing",
        type: "website"
    }
};

export default function ForsythCountyPage() {
    const faqData = [
        { q: "Do you staff for clean room environments?", a: "Yes, we have extensive experience staffing ISO-certified clean rooms for medical and tech clients." },
        { q: "Where do you recruit candidates for Forsyth County?", a: "We recruit heavily from North Fulton, Hall, Dawson, and Gwinnett counties to fill local roles." },
        { q: "Can you find candidates with specific technical certifications?", a: "Absolutely. We screen for IPC soldering, quality control, and various machine operation certs." },
        { q: "What is the typical pay for assembly roles here?", a: "Due to the high cost of living and commute, assembly roles often start at $18.50+." },
        { q: "Do you offer temp-to-hire for technical roles?", a: "Yes, this is our most popular model for skilled positions, allowing you to evaluate technical fit." },
        { q: "How do you handle the lack of public transit?", a: "We verify reliable personal transportation for every candidate before placement." },
        { q: "What industries are strongest in Forsyth?", a: "Advanced manufacturing, medical technology, and data center operations are the pillars." },
        { q: "Do you provide safety training?", a: "Yes, including specific modules for clean room protocols and chemical safety awareness." },
        { q: "How quickly can you fill a specialized role?", a: "For specialized tech roles, our average time-to-fill is 7-10 business days." },
        { q: "Why use FNSG in Forsyth County?", a: "Our ability to draw talent from surrounding counties gives us a deeper pool than local-only agencies." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Forsyth County",
        "url": "https://firstnationalstaffing.com/insights/city/forsyth-county-staffing",
        "image": "https://firstnationalstaffing.com/insights/city/forsyth-county-staffing/opengraph-image",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cumming",
            "addressRegion": "GA",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Forsyth County"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "34.2073",
            "longitude": "-84.1402"
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
                id="forsyth-jsonld"
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
                            { label: 'Forsyth County', href: '/insights/city/forsyth-county-staffing' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Forsyth County, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Forsyth County represents the intersection of high-tech innovation and advanced manufacturing.
                                    As one of the wealthiest and fastest-growing counties in the nation, the "GA-400 Tech Corridor" demands a highly sophisticated workforce.
                                    The challenge here isn't just finding bodies—it's securing technical talent in a market with near-zero unemployment.
                                </p>
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Forsyth County)</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        The local labor market is extremely tight, with a heavy reliance on commuters from Dawson, Hall, and North Fulton counties.
                                        Employers in the med-tech and advanced manufacturing sectors face stiff competition for "mid-skill" technicians.
                                        Retention strategies must focus on career advancement and high-quality work environments, as wage sensitivity is lower here than in other regions.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>Tech-Centric Growth:</strong> Rapid expansion in data centers, medical device manufacturing, and R&D facilities.</li>
                                        <li><strong>Commuter Reliance:</strong> A significant portion of the industrial workforce commutes 30+ minutes; traffic on GA-400 is a critical reliability factor.</li>
                                        <li><strong>Skill Premium:</strong> Candidates with "hybrid" skills (e.g., mechanical + IT) command significant wage premiums.</li>
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
                                                <td className="p-4 font-medium text-slate-900">Clean Room Assembler</td>
                                                <td className="p-4 text-slate-600">$18.50</td>
                                                <td className="p-4 text-slate-600">$21.00</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Quality Control Tech</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
                                                <td className="p-4 text-slate-600">$29.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Automation Technician</td>
                                                <td className="p-4 text-slate-600">$26.00</td>
                                                <td className="p-4 text-slate-600">$32.00</td>
                                                <td className="p-4 text-slate-600">$38.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Technical Support Specialist</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                                <td className="p-4 text-slate-600">$25.00</td>
                                                <td className="p-4 text-slate-600">$30.00</td>
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
                                    <h3 className="font-bold text-blue-900 mb-2">The GA-400 Commute</h3>
                                    <p className="text-blue-800 mb-4">
                                        With virtually no public transit options for industrial zones, workforce reliability is 100% dependent on personal vehicles.
                                        <strong>Shift staggering</strong> to avoid the 7:30-9:00 AM school/commuter rush on GA-400 is the single most effective reliability intervention.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Status</span>
                                            <span className="block text-lg font-bold text-slate-900">Car-Dependent Market</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                            <span className="block text-lg font-bold text-slate-900">Gas Stipends / Travel Pay</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Forsyth County</h2>
                                <p className="mb-4 text-slate-700">
                                    The prevalence of clean-tech and medical manufacturing creates unique "invisible" risk profiles.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Chemical Handling</h3>
                                            <p className="text-slate-600 text-sm">Common in med-tech sterilization. Mitigation: rigorous HAZCOM training and exposure monitoring.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Repetitive Micro-Motion</h3>
                                            <p className="text-slate-600 text-sm">High risk in small-parts assembly. Mitigation: Job rotation every 2 hours and ergonomic workstations.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Static Posture Fatigue</h3>
                                            <p className="text-slate-600 text-sm">Standing for long periods in clean rooms. Mitigation: Anti-fatigue mats and scheduled "movement breaks".</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Workforce Composition & Seasonal Demand */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                    <p className="text-slate-700 text-sm">
                                        Forsyth County's workforce is highly educated, with many candidates possessing some college or technical certification.
                                        They value "clean" industrial environments and clear pathways to promotion.
                                        Turnover is often driven by lack of engagement rather than pay alone.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>Med-Tech:</strong> Consistent year-round, with end-of-quarter production pushes. <br />
                                        <strong>Consumer Tech:</strong> Q3/Q4 spikes for holiday product launches. <br />
                                        <strong>Strategy:</strong> Build "flex pools" of cross-trained associates for quarterly surges.
                                    </p>
                                </div>
                            </section>

                            {/* How FNSG Improves Stability */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">How FNSG Stabilizes Workforce in Forsyth County</h2>
                                <p className="mb-6 text-slate-300">
                                    We specialize in finding the "hidden talent" willing to commute for the right opportunity in Forsyth's tech sector.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Commuter-Shed Targeting</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Technical Aptitude Screening</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Clean-Room Readiness Checks</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Retention-Focused Onboarding</span>
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
                                        href="/contact?location=forsyth"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/insights/reports/forsyth-2025"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Download Forsyth Workforce Intelligence Report
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="Forsyth County"
                            keywords={['Forsyth County Staffing', 'Cumming Jobs', 'Advanced Manufacturing Staffing', 'Georgia Tech Corridor']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
