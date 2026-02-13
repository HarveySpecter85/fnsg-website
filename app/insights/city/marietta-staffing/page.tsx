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
    title: "Marietta Staffing & Workforce Intelligence – First National Staffing",
    description: "Workforce insights for Marietta, GA and Cobb County. Data on aerospace manufacturing, healthcare, logistics staffing, Lockheed Martin supply chain, and industrial labor trends.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/city/marietta-staffing',
    },
    openGraph: {
        title: "Marietta Staffing Insights – First National Staffing",
        description: "Workforce intelligence for Marietta, GA. Aerospace, healthcare, and manufacturing staffing data for Cobb County employers.",
        url: "https://firstnationalstaffing.com/insights/city/marietta-staffing",
        type: "website"
    }
};

export default function MariettaStaffingPage() {
    const reviewData = [
        { author: "Steven Park", role: "Supply Chain Manager", company: "Marietta Aerospace Components", rating: 5, text: "FNSG provides skilled assembly technicians for our Lockheed Martin supply chain. Every worker arrives with proper safety certifications and understands aerospace quality standards. Exceptional service." },
        { author: "Jennifer Odom", role: "Facilities Director", company: "WellStar Kennestone Hospital", rating: 5, text: "Our EVS team staffing through FNSG has been transformative. They understand healthcare compliance — bloodborne pathogen training, HIPAA awareness, infection control. Our HCAHPS cleanliness scores improved 12 points." }
    ];

    const faqData = [
        { q: "Does First National Staffing serve Marietta employers?", a: "Yes. Our Smyrna branch at 2430 Herodian Way is just 10 minutes from downtown Marietta and serves all of Cobb County including Marietta, Kennesaw, Acworth, and Powder Springs with warehouse, manufacturing, and logistics staffing." },
        { q: "What industries do you staff in Marietta?", a: "We serve aerospace and defense supply chain contractors, healthcare facilities (WellStar Kennestone), manufacturing and assembly operations, warehouse distribution centers, and construction support staffing across Marietta and Cobb County." },
        { q: "How fast can you fill manufacturing positions in Marietta?", a: "Standard manufacturing and warehouse roles are filled within 24 to 48 hours. For specialized roles like CNC operators, aerospace assembly, or quality inspectors, we typically place within 3-5 business days from our Cobb County candidate pipeline." },
        { q: "What are average pay rates for industrial workers in Marietta?", a: "General production associates earn $16.00 to $18.50 per hour. Certified forklift operators earn $18.50 to $22.00. Skilled manufacturing roles (CNC, welding, aerospace assembly) command $22.00 to $30.00+ per hour depending on certifications." },
        { q: "Do you staff for Lockheed Martin supply chain contractors?", a: "Yes. While we do not staff Lockheed Martin directly, we serve multiple first-tier and second-tier aerospace supply chain contractors in the Marietta area who require precision manufacturing, assembly, and logistics talent." },
        { q: "What safety certifications do Marietta workers need?", a: "Requirements vary by employer. Our orientation covers OSHA 10-Hour General Industry fundamentals. For aerospace clients, we provide additional training on FOD (Foreign Object Debris) prevention, ESD (Electrostatic Discharge) awareness, and clean room protocols." },
        { q: "Do you offer healthcare facility staffing in Marietta?", a: "We provide Healthcare Environmental Services (EVS) staffing for hospitals and medical facilities including WellStar Kennestone. Our EVS teams are trained in infection control protocols, biohazard handling, and Joint Commission compliance." },
        { q: "Can you handle large-scale construction labor requests?", a: "Yes. Construction is Marietta's third-largest employment sector (3,300+ workers). We supply general laborers, material handlers, and warehouse support for commercial and residential construction projects throughout Cobb County." },
        { q: "What is the unemployment rate in Marietta / Cobb County?", a: "Cobb County's unemployment rate is 3.1% as of December 2025, well below the national average. This tight labor market means employers need a staffing partner with an established local candidate pipeline — which FNSG provides." },
        { q: "How do I request staffing services for my Marietta facility?", a: "Contact our Smyrna-Cobb County office at (470) 470-4243, visit us at 2430 Herodian Way in Smyrna, or submit a request online at firstnationalstaffing.com/contact/request-workforce. We guarantee a response within 2 business hours." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing Group – Marietta / Cobb County",
        "url": "https://firstnationalstaffing.com/insights/city/marietta-staffing",
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
            { "@type": "City", "name": "Marietta" },
            { "@type": "City", "name": "Kennesaw" },
            { "@type": "City", "name": "Smyrna" }
        ],
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
            "https://www.linkedin.com/company/first-national-staffing"
        ]
    };

    return (
        <main className="bg-white min-h-screen py-12">
            <Script
                id="marietta-jsonld"
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
                            { label: 'Marietta', href: '/insights/city/marietta-staffing' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Workforce Intelligence in Marietta, GA — 2025 Edition</h1>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Marietta anchors the northern end of Cobb County's economic engine, home to Lockheed Martin's
                                    massive aerospace manufacturing campus, Dobbins Air Reserve Base, and a thriving healthcare sector
                                    led by WellStar Health System. With a population of 61,773 and 32,577 employed residents, Marietta
                                    blends high-tech aerospace manufacturing with traditional industrial operations. The city's diverse
                                    economy — from defense contracting to construction to healthcare — creates a dynamic staffing
                                    environment where specialized talent is in constant demand.
                                </p>
                                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-blue-900 font-semibold text-sm">
                                        📍 Serving Marietta from our Smyrna Office: 2430 Herodian Way, Smyrna, GA 30080 — (470) 470-4243
                                    </p>
                                </div>
                                <FreshnessBadge dateModified="2025-01-15" label="Q1 2025" updateCadence="Quarterly" />
                            </section>

                            {/* Labor Market Overview */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Does the Marietta / Cobb County Labor Market Look Like?</h2>
                                <div className="prose prose-slate max-w-none">
                                    <p>
                                        Marietta's economy benefits from an unusual combination of aerospace/defense manufacturing,
                                        major healthcare systems, and a booming construction sector. The 3.1% county unemployment rate
                                        masks a deeper challenge: employers compete not just with each other, but with the gravitational pull
                                        of Atlanta's corporate center 20 miles south. Retention, not recruitment, is the primary battle.
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li><strong>Aerospace Hub:</strong> Lockheed Martin and its supply chain of first/second-tier contractors create demand for precision manufacturing and assembly talent.</li>
                                        <li><strong>Healthcare Growth:</strong> WellStar Kennestone Hospital and Kaiser Permanente drive demand for EVS, logistics, and support staffing.</li>
                                        <li><strong>Construction Boom:</strong> 3,300+ construction workers employed — one of Marietta's top 3 sectors by headcount.</li>
                                        <li><strong>Wage Competition:</strong> Top-paying industries (management $119K avg, finance $94K avg) create upward wage pressure on industrial roles.</li>
                                        <li><strong>Educational Advantage:</strong> Chattahoochee Tech and Life University produce a skilled technical workforce pipeline.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Pay Rate Benchmarks */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">What Are Average Pay Rates for Industrial Workers in Marietta?</h2>
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
                                                <td className="p-4 font-medium text-slate-900">General Production Associate</td>
                                                <td className="p-4 text-slate-600">$16.00</td>
                                                <td className="p-4 text-slate-600">$18.50</td>
                                                <td className="p-4 text-slate-600">$21.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Forklift Operator (Certified)</td>
                                                <td className="p-4 text-slate-600">$18.50</td>
                                                <td className="p-4 text-slate-600">$20.50</td>
                                                <td className="p-4 text-slate-600">$24.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Aerospace Assembly / Manufacturing</td>
                                                <td className="p-4 text-slate-600">$22.00</td>
                                                <td className="p-4 text-slate-600">$26.00</td>
                                                <td className="p-4 text-slate-600">$32.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Healthcare EVS Technician</td>
                                                <td className="p-4 text-slate-600">$14.50</td>
                                                <td className="p-4 text-slate-600">$16.50</td>
                                                <td className="p-4 text-slate-600">$19.00</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-medium text-slate-900">Construction Laborer / Material Handler</td>
                                                <td className="p-4 text-slate-600">$17.00</td>
                                                <td className="p-4 text-slate-600">$19.50</td>
                                                <td className="p-4 text-slate-600">$23.00</td>
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
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">How Reliable Is Shift Attendance in Marietta?</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">The Aerospace Precision Factor</h3>
                                    <p className="text-blue-800 mb-4">
                                        Aerospace and defense contractors demand higher attendance standards than typical industrial operations.
                                        Our Marietta candidate pool is pre-screened for reliability, with an average attendance rate of
                                        <strong> 93.2%</strong> — the highest in our Georgia network. The proximity to Chattahoochee Tech
                                        also provides access to candidates with technical certifications in CNC, welding, and precision measurement.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Transit Status</span>
                                            <span className="block text-lg font-bold text-slate-900">CobbLinc + GRTA Xpress</span>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <span className="block text-sm font-semibold text-slate-500 uppercase">Reliability Booster</span>
                                            <span className="block text-lg font-bold text-slate-900">Technical Workforce + Stability Focus</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* OSHA & Risk Intelligence */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Are the Top OSHA Risks in Marietta Industrial Facilities?</h2>
                                <p className="mb-4 text-slate-700">
                                    Marietta's mix of aerospace manufacturing, healthcare, and construction creates a diverse risk profile requiring specialized safety protocols.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Machine Guarding & Pinch Points</h3>
                                            <p className="text-slate-600 text-sm">CNC machines, press brakes, and assembly equipment create crush and amputation hazards. Mitigation: Machine guarding audits, lockout/tagout compliance, and pre-shift equipment checks.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Chemical Exposure (Aerospace Coatings)</h3>
                                            <p className="text-slate-600 text-sm">Solvents, primers, and specialty coatings in aerospace manufacturing. Mitigation: Respiratory protection programs, ventilation systems, and hazardous material handling certification.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Fall Hazards (Construction)</h3>
                                            <p className="text-slate-600 text-sm">Working at heights on commercial construction sites. Mitigation: Fall protection training, harness inspections, and OSHA 10-Hour Construction certification requirement.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">4</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Bloodborne Pathogens (Healthcare EVS)</h3>
                                            <p className="text-slate-600 text-sm">Biohazard exposure during hospital cleaning. Mitigation: BBP training, proper PPE (gowns, gloves, face shields), sharps container protocols, and infection control procedures.</p>
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
                                        Marietta's workforce spans a wide skill spectrum — from entry-level production workers to
                                        certified aerospace technicians. The city's 41.2% White, 30.2% Black, and 10.8% Hispanic
                                        population creates a culturally diverse talent pool. Chattahoochee Technical College graduates
                                        ~800 students annually in manufacturing, welding, CNC, and logistics programs.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">Seasonal Demand Patterns</h2>
                                    <p className="text-slate-700 text-sm">
                                        <strong>Defense Contract Cycles:</strong> Government fiscal year-end (Sep-Oct) drives production surges at aerospace suppliers. <br />
                                        <strong>Construction Peak:</strong> Spring/Summer (Mar-Sep) sees maximum demand for construction labor. <br />
                                        <strong>Strategy:</strong> Maintain a standing roster of cross-trained candidates who can shift between manufacturing and warehouse roles.
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
                                <h2 className="text-2xl font-bold mb-4">How Does FNSG Stabilize Workforce in Marietta?</h2>
                                <p className="mb-6 text-slate-300">
                                    Our Cobb County presence and aerospace-grade screening processes deliver reliable, qualified talent.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Smyrna Office Serving All Cobb County</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Aerospace Supply Chain Staffing Expertise</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Healthcare EVS Teams (Infection Control Trained)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Construction Labor Pool (OSHA 10 Certified)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Bilingual Coordinators (English/Spanish)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span> <span>Real-Time Attendance & Performance Dashboards</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Map and Reviews */}
                            <section className="space-y-8">
                                <GoogleMapEmbed query="2430 Herodian Way, Smyrna, GA 30080" title="FNSG Marietta Service Area" />
                                <LocalReviews locationName="Marietta" reviews={reviewData} />
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
                                        Request Workers for Marietta
                                    </Link>
                                    <Link
                                        href="/insights/city/smyrna-staffing"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        View Smyrna Staffing Insights
                                    </Link>
                                </div>
                            </section>

                        </div>

                        <SEOBlock
                            city="Marietta"
                            keywords={['Marietta Staffing Agency', 'Cobb County Industrial Jobs', 'Staffing Agency Marietta GA', 'Aerospace Staffing Georgia', 'Temp Agency Marietta']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
