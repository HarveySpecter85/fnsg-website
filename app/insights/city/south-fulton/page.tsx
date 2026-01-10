import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: "South Fulton Industrial Staffing & Airport Logistics – First National Staffing",
    description: "Workforce intelligence for South Fulton, GA. Data on airport logistics, recycling operations, heavy industrial staffing, and 24/7 shift coverage near ATL.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/south-fulton',
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
            "name": "South Fulton"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.6268",
            "longitude": "-84.5579"
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
                                    South Fulton is Metro Atlanta's industrial powerhouse, positioned strategically near Hartsfield-Jackson
                                    Atlanta International Airport (ATL). This area hosts major recycling facilities, heavy manufacturing
                                    operations, and extensive logistics networks that operate around the clock. The workforce here is
                                    resilient, experienced in demanding physical roles, and accustomed to non-traditional shift schedules.
                                </p>
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Labor Market Overview (South Fulton / Airport Corridor)</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        South Fulton's labor market is defined by its proximity to ATL and the concentration of heavy
                                        industrial operations. Workers here are typically experienced in physically demanding roles and
                                        comfortable with 2nd and 3rd shift schedules. Competition for reliable labor is fierce, especially
                                        during peak shipping seasons.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>Sector Mix:</strong> Recycling & waste management, airport cargo handling, heavy manufacturing, transportation & logistics.</li>
                                        <li><strong>Shift Preference:</strong> 3rd shift (10pm–6am) is common due to airport operations; premium pay attracts experienced workers.</li>
                                        <li><strong>Commute Patterns:</strong> Workers come from East Point, College Park, Fairburn, and Palmetto. MARTA accessibility via airport station.</li>
                                        <li><strong>Physical Requirements:</strong> Most positions require ability to lift 50+ lbs and work in varying weather conditions.</li>
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
                                                <td className="p-4 font-medium text-slate-900">General Labor</td>
                                                <td className="p-4 text-slate-600">$15.00</td>
                                                <td className="p-4 text-slate-600">$17.00</td>
                                                <td className="p-4 text-slate-600">$19.50</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Recycling Sorter</td>
                                                <td className="p-4 text-slate-600">$15.50</td>
                                                <td className="p-4 text-slate-600">$17.50</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Forklift Operator</td>
                                                <td className="p-4 text-slate-600">$18.00</td>
                                                <td className="p-4 text-slate-600">$20.50</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Heavy Equipment Operator</td>
                                                <td className="p-4 text-slate-600">$20.00</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
                                                <td className="p-4 text-slate-600">$30.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">CDL Driver (Local)</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                                <td className="p-4 text-slate-600">$26.00</td>
                                                <td className="p-4 text-slate-600">$32.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Maintenance Technician</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                                <td className="p-4 text-slate-600">$27.00</td>
                                                <td className="p-4 text-slate-600">$35.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-slate-500 mt-2 italic">
                                    *Data aggregated from FNSG internal placement data and local market surveys (Q1 2025). 3rd shift typically adds $1-2/hr premium.
                                </p>
                            </section>

                            {/* 24/7 Operations Section */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">24/7 Operations & Shift Coverage</h2>
                                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                                    <h3 className="font-bold text-indigo-900 mb-2">The Airport Corridor Advantage</h3>
                                    <p className="text-indigo-800 mb-4">
                                        Proximity to ATL means operations never stop. Cargo handlers, recycling facilities, and logistics
                                        providers run 24/7/365. Workers in this area understand and embrace overnight schedules—in fact,
                                        many prefer 3rd shift for the premium pay and lighter traffic commutes.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">1st Shift</span>
                                            <span className="block text-lg font-bold text-slate-900">6AM – 2PM</span>
                                            <span className="block text-xs text-slate-500">Standard operations, administrative</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">2nd Shift</span>
                                            <span className="block text-lg font-bold text-slate-900">2PM – 10PM</span>
                                            <span className="block text-xs text-slate-500">Peak processing, +$0.50-$1.00/hr</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm border-2 border-indigo-400">
                                            <span className="block text-sm font-semibold text-indigo-600 uppercase">3rd Shift (High Demand)</span>
                                            <span className="block text-lg font-bold text-slate-900">10PM – 6AM</span>
                                            <span className="block text-xs text-slate-500">Overnight logistics, +$1.00-$2.00/hr</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">OSHA & Risk Intelligence in South Fulton</h2>
                                <p className="mb-4 text-slate-700">
                                    Heavy industrial and recycling operations present significant safety challenges. Proactive safety
                                    programs are essential for reducing incidents and maintaining workforce stability.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Heavy Equipment Struck-By</h3>
                                            <p className="text-slate-600 text-sm">Loaders, excavators, and compactors create struck-by hazards. Mitigation: Designated pedestrian zones, backup alarms, spotters.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Needle Sticks & Sharps (Recycling)</h3>
                                            <p className="text-slate-600 text-sm">Hidden sharps in recycling streams. Mitigation: Cut-resistant gloves, sharps awareness training, immediate reporting protocols.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Heat/Cold Exposure</h3>
                                            <p className="text-slate-600 text-sm">Outdoor and semi-outdoor work in extreme temperatures. Mitigation: Hydration programs, cooling stations, modified break schedules.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">4</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Dust & Airborne Particulates</h3>
                                            <p className="text-slate-600 text-sm">Recycling and industrial processing creates airborne hazards. Mitigation: Respiratory protection programs, dust suppression systems.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">5</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Conveyor Belt Entanglement</h3>
                                            <p className="text-slate-600 text-sm">Sorting lines and processing conveyors pose entanglement risks. Mitigation: Emergency stop cords, loose clothing policies, LOTO.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Industry Focus Areas */}
                            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-50 p-6 rounded-xl">
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Recycling & Waste Management</h2>
                                    <p className="text-slate-700 text-sm mb-4">
                                        South Fulton hosts several major recycling and waste processing facilities. These operations
                                        require workers who can handle physically demanding sorting tasks, operate heavy equipment,
                                        and maintain high productivity in challenging conditions.
                                    </p>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Material Recovery Facility (MRF) operations</li>
                                        <li>• Construction & demolition debris processing</li>
                                        <li>• Electronic waste recycling</li>
                                        <li>• Transfer station operations</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl">
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Airport Logistics & Cargo</h2>
                                    <p className="text-slate-700 text-sm mb-4">
                                        The ATL airport corridor drives massive logistics demand. From cargo handling to ground
                                        support, workers here keep goods moving through one of the world's busiest airports.
                                        Security clearance and flexibility are often required.
                                    </p>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li>• Air cargo handling & freight forwarding</li>
                                        <li>• Ground support equipment operations</li>
                                        <li>• Cross-dock and transload facilities</li>
                                        <li>• Last-mile delivery operations</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Workforce Composition */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Workforce Composition & Availability</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        South Fulton's workforce is experienced, resilient, and accustomed to industrial environments.
                                        Many workers have backgrounds in construction, manufacturing, or logistics. The area has a
                                        strong pool of CDL holders and heavy equipment operators.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 not-prose">
                                        <div className="border border-slate-200 p-4 rounded-lg text-center">
                                            <span className="block text-3xl font-bold text-slate-900">62%</span>
                                            <span className="block text-sm text-slate-500">Prior Industrial Experience</span>
                                        </div>
                                        <div className="border border-slate-200 p-4 rounded-lg text-center">
                                            <span className="block text-3xl font-bold text-slate-900">28%</span>
                                            <span className="block text-sm text-slate-500">CDL or Equipment Certified</span>
                                        </div>
                                        <div className="border border-slate-200 p-4 rounded-lg text-center">
                                            <span className="block text-3xl font-bold text-slate-900">45%</span>
                                            <span className="block text-sm text-slate-500">Open to 3rd Shift</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* How FNSG Improves Stability */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">How FNSG Optimizes Workforce in South Fulton</h2>
                                <p className="mb-6 text-slate-300">
                                    We specialize in the heavy industrial and logistics sectors that define South Fulton's economy.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>24/7 Shift Coverage Capabilities</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Heavy Equipment Operator Pool</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Recycling Industry Safety Training</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>CDL Driver Network</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Physical Ability Screening</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Rapid Deployment for Surge Needs</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Background Check Facilitation</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Attendance & Reliability Tracking</span>
                                    </li>
                                </ul>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What industries do you staff in South Fulton?", a: "We specialize in recycling & waste management, airport logistics, heavy manufacturing, transportation, and general industrial operations in the South Fulton and airport corridor area." },
                                        { q: "Can you provide workers for overnight shifts?", a: "Absolutely. 3rd shift (overnight) staffing is one of our specialties in South Fulton. We have a strong pool of workers who prefer or are experienced with overnight schedules." },
                                        { q: "Do you have forklift and heavy equipment operators?", a: "Yes, we maintain a network of certified forklift, loader, and heavy equipment operators. All certifications are verified before placement." },
                                        { q: "How do you handle the physical demands of these jobs?", a: "We screen candidates for physical capability, including lifting requirements and ability to work in outdoor/semi-outdoor conditions. We're transparent with candidates about job demands." },
                                        { q: "Can you staff recycling facility positions?", a: "Yes, we have extensive experience staffing MRFs and recycling operations, including sorters, equipment operators, and material handlers. Safety training is included." },
                                        { q: "What about CDL drivers?", a: "We have a pool of Class A and Class B CDL holders for local and regional driving positions. All driving records are verified." },
                                        { q: "How quickly can you fill positions?", a: "For general labor roles, typically 2-3 business days. Equipment operators and CDL drivers may take 5-7 days depending on certification requirements." },
                                        { q: "Do workers need airport security clearance?", a: "For positions requiring airfield access, yes. We can help facilitate the badging process, though timelines vary by airport authority." },
                                        { q: "What safety training do your workers receive?", a: "All associates complete our industrial safety orientation. For recycling clients, we add sharps awareness and equipment-specific protocols. OSHA 10 certification is available." },
                                        { q: "Why choose FNSG for South Fulton staffing?", a: "Our deep experience in heavy industrial and recycling environments, combined with our 24/7 operational capability, makes us the ideal partner for South Fulton employers." }
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
                                        href="/contact/request-workforce"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/insights/industry/recycling"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Explore Recycling Industry Insights
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="South Fulton"
                            keywords={['South Fulton Staffing', 'Airport Logistics Jobs', 'Recycling Jobs Georgia', '3rd Shift Staffing Atlanta']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
