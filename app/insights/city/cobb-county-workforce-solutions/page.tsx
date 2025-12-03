import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: "Cobb County Staffing & Workforce Intelligence – First National Staffing",
    description: "Workforce insights for Marietta, Kennesaw, and Smyrna. Data on skilled trades, corporate admin, and light industrial labor trends in Cobb County.",
    alternates: {
        canonical: '/insights/city/cobb-county-workforce-solutions',
    },
    openGraph: {
        title: "Cobb County Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/cobb-county-workforce-solutions",
        type: "website"
    }
};

export default function CobbCountyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Cobb County",
        "url": "https://firstnationalstaffing.com/insights/city/cobb-county-workforce-solutions",
        "image": "https://firstnationalstaffing.com/insights/city/cobb-county-workforce-solutions/opengraph-image",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Marietta",
            "addressRegion": "GA",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Cobb County"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.9526",
            "longitude": "-84.5499"
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
                id="cobb-jsonld"
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
                            { label: 'Cobb County', href: '/insights/city/cobb-county-workforce-solutions' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Cobb County, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Cobb County represents a dynamic blend of corporate headquarters, advanced manufacturing, and a thriving service economy.
                                    From the "Platinum Triangle" near The Battery to the industrial corridors of Kennesaw, the workforce here is highly educated and mobile.
                                    Employers must navigate a competitive landscape where "quality of place" drives talent acquisition as much as compensation.
                                </p>
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Cobb County)</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        The Cobb County labor market is characterized by a "dual economy" – a strong demand for white-collar administrative support alongside a persistent need for skilled trades and light industrial talent.
                                        The presence of Kennesaw State University (KSU) provides a steady pipeline of entry-level talent, but retaining mid-career professionals requires robust career pathing.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>Talent Pipeline:</strong> KSU and Chattahoochee Tech are key sources for both technical and soft-skill roles.</li>
                                        <li><strong>Wage Pressure:</strong> Proximity to Atlanta drives wages up, particularly for administrative and customer support roles.</li>
                                        <li><strong>Commuter Trends:</strong> Reverse commuting from Atlanta is common, but local traffic congestion remains a barrier for strict shift starts.</li>
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
                                                <td className="p-4 font-medium text-slate-900">CNC Machinist</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                                <td className="p-4 text-slate-600">$26.00</td>
                                                <td className="p-4 text-slate-600">$32.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Administrative Assistant</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$21.00</td>
                                                <td className="p-4 text-slate-600">$25.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Light Industrial Associate</td>
                                                <td className="p-4 text-slate-600">$16.50</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Customer Service Rep</td>
                                                <td className="p-4 text-slate-600">$17.00</td>
                                                <td className="p-4 text-slate-600">$19.50</td>
                                                <td className="p-4 text-slate-600">$23.00</td>
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
                                    <h3 className="font-bold text-blue-900 mb-2">The I-75 Corridor Challenge</h3>
                                    <p className="text-blue-800 mb-4">
                                        The I-75/I-285 interchange is a major choke point.
                                        Employers offering <strong>flexible start windows</strong> (e.g., +/- 30 mins) see a <strong>25% reduction in tardiness</strong> compared to those with rigid 8:00 AM starts.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Option</span>
                                            <span className="block text-lg font-bold text-slate-900">CobbLinc (Limited Reach)</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                            <span className="block text-lg font-bold text-slate-900">Hybrid/Remote Options</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Cobb County</h2>
                                <p className="mb-4 text-slate-700">
                                    Risk profiles vary widely from office ergonomics to construction site hazards.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Office Ergonomics</h3>
                                            <p className="text-slate-600 text-sm">High prevalence of RSI in admin roles. Mitigation: Workstation assessments and "stand-up" culture.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Construction Safety</h3>
                                            <p className="text-slate-600 text-sm">Active development zones. Mitigation: Strict PPE enforcement and "Fall Protection" training.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Fleet Safety</h3>
                                            <p className="text-slate-600 text-sm">For service roles involving driving. Mitigation: MVR monitoring and defensive driving courses.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Workforce Composition & Seasonal Demand */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                    <p className="text-slate-700 text-sm">
                                        Cobb County boasts a high educational attainment rate.
                                        Candidates often seek roles that offer "upskilling" opportunities.
                                        The workforce is tech-savvy, expecting digital onboarding and mobile-first communication.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>Retail/Hospitality:</strong> Surges during Braves season (Apr-Oct) and holidays. <br />
                                        <strong>Corporate:</strong> Hiring spikes in Q1 (budget release) and Q3. <br />
                                        <strong>Strategy:</strong> Leverage "semester-based" hiring cycles for student talent.
                                    </p>
                                </div>
                            </section>

                            {/* How FNSG OS Improves Stability */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">How FNSG OS Stabilizes Workforce in Cobb County</h2>
                                <p className="mb-6 text-slate-300">
                                    We bridge the gap between corporate expectations and industrial realities with data-driven precision.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Soft-Skills Assessment Modules</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Commute-Time Analysis</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>University Partnership Recruiting</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Hybrid-Work Readiness Scoring</span>
                                    </li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Do you staff for administrative roles in Cobb?", a: "Yes, we have a strong network of administrative, customer service, and data entry professionals." },
                                        { q: "Can you support skilled trades hiring?", a: "Absolutely. We specialize in placing CNC machinists, welders, and maintenance technicians." },
                                        { q: "What is the average time to fill a role?", a: "For administrative roles, 3-5 days. For skilled trades, 7-10 days due to rigorous vetting." },
                                        { q: "Do you work with Kennesaw State students?", a: "Yes, we partner with local institutions to provide flexible work opportunities for students." },
                                        { q: "How do you handle background checks?", a: "We offer multi-jurisdictional criminal checks, education verification, and credit checks where appropriate." },
                                        { q: "Are your candidates local to Cobb County?", a: "We prioritize local candidates to minimize commute friction and improve retention." },
                                        { q: "Do you offer temp-to-hire options?", a: "Yes, our 'Try-Before-You-Hire' model is very popular with Cobb County employers." },
                                        { q: "What industries do you serve here?", a: "We serve a mix of manufacturing, professional services, logistics, and construction support." },
                                        { q: "How do you assess soft skills?", a: "We use behavioral interviewing techniques and situational judgment tests to gauge reliability and communication." },
                                        { q: "Why choose FNSG for Cobb County staffing?", a: "Our deep understanding of the local 'corporate-industrial' mix allows us to find the right cultural fit for your team." }
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
                                        href="/contact?location=cobb"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/resources/reports/cobb-2025"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Download Cobb Workforce Intelligence Report
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="Cobb County"
                            keywords={['Cobb County Staffing', 'Marietta Jobs', 'Smyrna Workforce', 'Kennesaw Industrial Staffing']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
