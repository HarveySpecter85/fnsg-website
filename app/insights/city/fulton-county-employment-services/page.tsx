import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: "Fulton County Employment Services & Workforce Intelligence – First National Staffing",
    description: "Workforce insights for Fulton County, GA. Data on logistics, manufacturing, and corporate staffing trends across Atlanta, Alpharetta, and South Fulton.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/fulton-county-employment-services',
    },
    openGraph: {
        title: "Fulton County Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/fulton-county-employment-services",
        type: "website"
    }
};

export default function FultonCountyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Fulton County",
        "url": "https://firstnationalstaffing.com/insights/city/fulton-county-employment-services",
        "image": "https://firstnationalstaffing.com/insights/city/fulton-county-employment-services/opengraph-image",
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
        <main className="bg-white min-h-screen py-12">
            <Script
                id="fulton-jsonld"
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
                            { label: 'Fulton County', href: '/insights/city/fulton-county-employment-services' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Fulton County, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Fulton County is the economic engine of Georgia, home to a diverse industrial landscape ranging from the logistics hubs of South Fulton to the tech corridors of Alpharetta.
                                    For employers, this dichotomy creates a complex recruiting environment where "micro-market" strategies are essential.
                                    The competition for talent is fierce, driven by the density of Fortune 500 headquarters and major distribution centers.
                                </p>
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Fulton County)</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        The Fulton County labor market is characterized by its bifurcated nature.
                                        <strong>North Fulton</strong> demands high-skilled technical and administrative talent, while <strong>South Fulton</strong> is a battleground for logistics and light industrial labor.
                                        Understanding these sub-market dynamics is critical for setting competitive wage rates and attendance policies.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>Transit Access:</strong> Unlike surrounding counties, MARTA access is a viable recruiting channel for many Fulton-based facilities.</li>
                                        <li><strong>Wage Variance:</strong> Pay rates can vary by up to $3.00/hr between North and South Fulton for similar roles due to cost-of-living differences.</li>
                                        <li><strong>Talent Migration:</strong> We see significant workforce mobility along the I-285 perimeter, with candidates chasing shift differentials.</li>
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
                                                <td className="p-4 font-medium text-slate-900">Forklift Operator (South Fulton)</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                                <td className="p-4 text-slate-600">$23.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Assembly Technician (North Fulton)</td>
                                                <td className="p-4 text-slate-600">$19.00</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                                <td className="p-4 text-slate-600">$26.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Administrative Assistant</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
                                                <td className="p-4 text-slate-600">$28.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">General Warehouse Associate</td>
                                                <td className="p-4 text-slate-600">$16.50</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
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
                                    <h3 className="font-bold text-blue-900 mb-2">The MARTA Factor</h3>
                                    <p className="text-blue-800 mb-4">
                                        Facilities located within 1 mile of a MARTA bus line see <strong>15% higher retention</strong> than those requiring personal vehicles.
                                        However, "last mile" connectivity remains a challenge. We partner with rideshare programs to bridge this gap.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Status</span>
                                            <span className="block text-lg font-bold text-slate-900">High (MARTA Access)</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                            <span className="block text-lg font-bold text-slate-900">Last-Mile Shuttles</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Fulton County</h2>
                                <p className="mb-4 text-slate-700">
                                    With a mix of heavy logistics and light assembly, risk profiles vary significantly by zip code.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Loading Dock Safety</h3>
                                            <p className="text-slate-600 text-sm">High volume of truck traffic. Mitigation: Wheel chocks, dock locks, and strict pedestrian separation.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Ergonomics (Office & Ind.)</h3>
                                            <p className="text-slate-600 text-sm">Repetitive strain in both assembly and data entry roles. Mitigation: Workstation assessments and rotation.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Workplace Violence Prevention</h3>
                                            <p className="text-slate-600 text-sm">Increased focus for 24/7 facilities. Mitigation: Secure access controls and conflict de-escalation training.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Workforce Composition & Seasonal Demand */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                    <p className="text-slate-700 text-sm">
                                        Fulton County offers the deepest talent pool in the state.
                                        From university graduates to seasoned logistics veterans, the diversity of skills is unmatched.
                                        However, top talent expects "Tier 1" benefits and clear career progression, even for contract roles.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>Logistics:</strong> Q4 Peak is intense, with many facilities running 24/7. <br />
                                        <strong>Corporate Support:</strong> Q1 hiring surges for administrative and finance roles. <br />
                                        <strong>Strategy:</strong> Build "bench strength" in Q3 to prepare for the holiday rush.
                                    </p>
                                </div>
                            </section>

                            {/* How FNSG OS Improves Stability */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">How FNSG OS Stabilizes Workforce in Fulton County</h2>
                                <p className="mb-6 text-slate-300">
                                    We leverage our multi-branch network to service the distinct needs of North and South Fulton.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Hyper-Local Recruiting (Zip Code Targeting)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>MARTA-Aligned Shift Scheduling</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Cross-County Talent Pooling</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Dedicated "High-Volume" Account Teams</span>
                                    </li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Do you service both North and South Fulton?", a: "Yes, we have dedicated recruiting teams for the industrial South and the corporate/tech-focused North." },
                                        { q: "Can you provide candidates with MARTA access?", a: "Absolutely. We can filter our candidate pool specifically for those with reliable access to your transit line." },
                                        { q: "What is the average time-to-fill in Fulton County?", a: "For general labor, 24-48 hours. For skilled roles, 3-5 business days." },
                                        { q: "Do you handle background checks for high-security sites?", a: "Yes, we offer comprehensive screening including federal, state, and county checks." },
                                        { q: "Can you staff for 24/7 operations?", a: "Yes, we have extensive experience managing 3-shift rotations and weekend crews." },
                                        { q: "What are the competitive pay rates for admin roles?", a: "In North Fulton, admin roles typically start between $20-$24/hr depending on experience." },
                                        { q: "Do you offer on-site management?", a: "Yes, for clients with 50+ contingent workers, we recommend our On-Site Performance Program." },
                                        { q: "How do you handle peak season ramp-ups?", a: "We build a 'warm bench' of pre-screened candidates starting in August to ensure readiness for Q4." },
                                        { q: "Are you insured for light industrial risks?", a: "Yes, we carry comprehensive workers' comp and general liability insurance tailored to industrial staffing." },
                                        { q: "Why choose FNSG for Fulton County staffing?", a: "Our deep local presence and ability to navigate the complex transit/geography of Atlanta gives us an edge." }
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
                                        href="/contact?location=fulton"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/resources/reports/fulton-2025"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Download Fulton Workforce Intelligence Report
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="Fulton County"
                            keywords={['Fulton County Staffing', 'Atlanta Jobs', 'Alpharetta Staffing', 'South Fulton Logistics']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
