import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: "Savannah Logistics Staffing & Workforce Intelligence – First National Staffing",
    description: "Workforce insights for the Port of Savannah, Garden City, and Pooler. Data on port logistics, drayage, and heavy industrial labor trends.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/savannah-logistics-staffing',
    },
    openGraph: {
        title: "Savannah Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/savannah-logistics-staffing",
        type: "website"
    }
};

export default function SavannahPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Savannah",
        "url": "https://firstnationalstaffing.com/insights/city/savannah-logistics-staffing",
        "image": "https://firstnationalstaffing.com/insights/city/savannah-logistics-staffing/opengraph-image",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Savannah",
            "addressRegion": "GA",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Chatham County"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "32.0809",
            "longitude": "-81.0912"
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
                id="savannah-jsonld"
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
                            { label: 'Savannah', href: '/insights/city/savannah-logistics-staffing' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Savannah, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    The Port of Savannah is the single largest economic engine in the region, driving an insatiable demand for logistics and industrial talent.
                                    From Garden City Terminal to the mega-sites in Pooler and Ellabell, the market is defined by high-velocity cargo movement.
                                    However, the industrial sector faces constant competition for labor from the robust local hospitality and tourism industries.
                                </p>
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (Savannah)</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        Savannah's labor market is unique due to the "TWIC Barrier"—the requirement for Transportation Worker Identification Credentials for port access.
                                        This creates a bifurcated workforce: a premium, credentialed tier for port-side operations, and a general labor tier for inland warehousing.
                                        Recruiting strategies must account for the significant "churn" caused by seasonal tourism hiring spikes.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>The "Mega-Site" Effect:</strong> New EV and battery plant construction is absorbing skilled tradespeople at an unprecedented rate.</li>
                                        <li><strong>Credentialing:</strong> Candidates with active TWIC cards command a $2.00-$3.00/hr wage premium.</li>
                                        <li><strong>Geographic Reach:</strong> Workforce is increasingly drawn from Effingham and Bryan counties as housing costs in Chatham rise.</li>
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
                                                <td className="p-4 font-medium text-slate-900">General Warehouse (Inland)</td>
                                                <td className="p-4 text-slate-600">$17.00</td>
                                                <td className="p-4 text-slate-600">$18.50</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Port Logistics Support (TWIC)</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                                <td className="p-4 text-slate-600">$23.00</td>
                                                <td className="p-4 text-slate-600">$26.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Heavy Equipment Operator</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                                <td className="p-4 text-slate-600">$26.00</td>
                                                <td className="p-4 text-slate-600">$30.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Container Unloader (Lumper)</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$21.00</td>
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
                                    <h3 className="font-bold text-blue-900 mb-2">Port Traffic & Gate Queues</h3>
                                    <p className="text-blue-800 mb-4">
                                        Reliability in Savannah is often dictated by the flow of container traffic on I-16 and Hwy 21.
                                        Unexpected gate closures or backups can delay entire shifts of drayage and yard support staff.
                                        <strong>Real-time traffic alerts</strong> integrated into our attendance system help mitigate these unavoidable delays.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Status</span>
                                            <span className="block text-lg font-bold text-slate-900">CAT Bus (Limited Ind. Routes)</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                            <span className="block text-lg font-bold text-slate-900">Shift-Staggering</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in Savannah</h2>
                                <p className="mb-4 text-slate-700">
                                    The coastal climate and heavy industrial nature of port work create a high-stakes safety environment.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Heat Stress</h3>
                                            <p className="text-slate-600 text-sm">Critical risk from May-October. Mitigation: Wet-bulb globe temperature monitoring and mandatory hydration/shade protocols.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Heavy Machinery Struck-By</h3>
                                            <p className="text-slate-600 text-sm">High traffic of top-loaders and RTGs. Mitigation: High-visibility vest enforcement (Class 2/3) and pedestrian exclusion zones.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Container Handling</h3>
                                            <p className="text-slate-600 text-sm">Pinch points and falling cargo. Mitigation: "Line of Fire" training and steel-toe boot mandates.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Workforce Composition & Seasonal Demand */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Workforce Composition</h2>
                                    <p className="text-slate-700 text-sm">
                                        The Savannah workforce is resilient and accustomed to physical labor.
                                        However, there is high mobility between the industrial and hospitality sectors.
                                        Workers often "migrate" to tourism jobs in peak summer months if industrial conditions (heat) become unmanageable.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>Import Peak:</strong> August-October (Pre-Holiday retail stocking). <br />
                                        <strong>Export Peak:</strong> Varies by commodity (e.g., agricultural exports). <br />
                                        <strong>Strategy:</strong> Secure headcount early (July) with retention bonuses locked to season end.
                                    </p>
                                </div>
                            </section>

                            {/* How FNSG Improves Stability */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">How FNSG Stabilizes Workforce in Savannah</h2>
                                <p className="mb-6 text-slate-300">
                                    We navigate the complexities of the port ecosystem to deliver reliable, credentialed talent.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>TWIC Card Verification & Sponsorship</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Heat Safety Acclimatization Plans</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Port-Specific Safety Orientation</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Counter-Cyclical Recruitment (vs. Tourism)</span>
                                    </li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Do you provide candidates with TWIC cards?", a: "Yes, we maintain a specific pool of active TWIC cardholders for port-side assignments." },
                                        { q: "How do you handle the summer heat safety?", a: "We implement strict work/rest cycles and provide hydration stations for all outdoor/non-climate controlled sites." },
                                        { q: "Can you staff for container unloading (lumping)?", a: "Yes, we deploy teams of 'lumpers' experienced in manual container unloading and palletizing." },
                                        { q: "What is the typical pay for forklift operators here?", a: "Due to port demand, experienced forklift operators in Savannah typically start at $20.00+/hr." },
                                        { q: "Do you offer transportation for workers?", a: "We can coordinate van-pools for large shifts coming from outlying areas like Rincon or Guyton." },
                                        { q: "Are your candidates background checked for port access?", a: "Yes, all candidates undergo rigorous screening to ensure eligibility for port and secure facility access." },
                                        { q: "How quickly can you fill a ramp-up for a new ship arrival?", a: "We monitor vessel schedules and can deploy 'surge squads' on 24-48 hour notice." },
                                        { q: "Do you staff for 3rd shift logistics?", a: "Yes, we support 24/7 port operations with dedicated night shift rosters." },
                                        { q: "What industries do you serve besides logistics?", a: "We also support the growing advanced manufacturing and aerospace sectors in the region." },
                                        { q: "Why use FNSG in Savannah?", a: "Our understanding of the unique 'Port Ecosystem' allows us to anticipate labor crunches before they hit." }
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
                                        href="/contact?location=savannah"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/insights/reports/savannah-2025"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Download Savannah Workforce Intelligence Report
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="Savannah"
                            keywords={['Savannah Staffing', 'Port Logistics Jobs', 'Chatham County Workforce', 'Garden City Industrial Staffing']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
