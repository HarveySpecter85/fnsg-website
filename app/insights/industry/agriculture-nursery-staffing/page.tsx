import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agriculture & Nursery Workforce Deep Dive - Georgia 2025 Edition",
    description: "A data-driven analysis of Georgia’s agriculture and nursery labor market, including seasonal patterns, climate impacts, wage pressures, safety risks, and workforce intelligence insights.",
};

export default function AgricultureDeepDivePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Agriculture & Nursery Workforce Deep Dive - Georgia 2025 Edition",
        "description": "A data-driven analysis of Georgia’s agriculture and nursery labor market, including seasonal patterns, climate impacts, wage pressures, safety risks, and workforce intelligence insights.",
        "author": {
            "@type": "Organization",
            "name": "First National Staffing Group"
        },
        "publisher": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "url": "https://firstnationalstaffing.com/insights/industry/agriculture-nursery-staffing",
        "image": "https://firstnationalstaffing.com/insights/industry/agriculture-nursery-staffing/opengraph-image",
        "inLanguage": "en"
    };

    return (
        <main className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-6 py-12 max-w-4xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Industries', href: '/insights/industry' },
                    { label: 'Agriculture & Nursery', href: '/insights/industry/agriculture-nursery-staffing' }
                ]} />

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 mt-6">
                    Agriculture & Nursery Workforce Deep Dive - Georgia 2025 Edition
                </h1>

                <div className="prose prose-lg max-w-none text-slate-700">
                    <p>
                        The Agriculture & Nursery sector in Georgia sits at the crossroad of:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Long seasonal cycles</li>
                        <li>Outdoor environments</li>
                        <li>Delicate product handling (nursery & greenhouse)</li>
                        <li>Compliance-heavy operations (including MSPA-related contexts)</li>
                        <li>Structural labor shortages</li>
                    </ul>
                    <p>
                        From greenhouse operations and landscape nurseries to field agriculture and seasonal contracts, this sector depends on stable, physically resilient, and compliance-aligned workforce models.
                    </p>
                    <p>
                        FNSG OS provides an intelligence layer that makes this possible.
                    </p>

                    {/* Industry Overview */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Industry Overview (2025)</h2>
                    <p>Insights based on Georgia market data:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Farmers, nurseries, and horticulture operations increasingly depend on external labor to sustain production cycles.</li>
                        <li>Agricultural and nursery work competes directly with warehouse, construction, and landscaping sectors in terms of wages and working conditions.</li>
                        <li>Weather, seasonality, and crop prices directly impact labor demand.</li>
                        <li>Greenhouses and large nurseries require specific skills (plant care, spacing, potting, trimming, irrigation).</li>
                        <li>Labor supply is structurally limited in agricultural zones and highly sensitive to wage changes and working conditions.</li>
                    </ul>

                    {/* Labor Market Dynamics */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Labor Market Dynamics in Agriculture & Nursery</h2>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Seasonal Dependency</h3>
                    <p>Demand surges during:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Planting seasons</li>
                        <li>Growing seasons</li>
                        <li>Harvest cycles</li>
                        <li>Peak retail (spring/summer garden & nursery)</li>
                    </ul>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Mobility Between Sectors</h3>
                    <p>Workers move between agriculture, landscaping, warehouse, and construction depending on:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Pay</li>
                        <li>Physical load</li>
                        <li>Distance</li>
                        <li>Season</li>
                    </ul>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Geographic Dispersion</h3>
                    <p>Sites are often remote, non-uniform, and without stable public transportation.</p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Language & Cultural Factors</h3>
                    <p>Many agricultural workers are bilingual and need culturally competent supervision.</p>

                    {/* Pay Rate Intelligence */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Pay Rate Intelligence & Wage Pressures</h2>
                    <p>Agriculture & Nursery wages are sensitive and fragile: they often require more physical effort but pay less than warehouse roles.</p>
                    <p className="font-semibold text-red-600">Key insight: If wages fall just a bit behind warehouse or construction, agricultural workers leave quickly.</p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Example wage bands (Georgia 2025):</h3>
                    <div className="overflow-x-auto my-8">
                        <table className="min-w-full border-collapse border border-slate-200 text-sm">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Role</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Avg Pay</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Competitive Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Nursery / Greenhouse Worker</td>
                                    <td className="border border-slate-200 px-4 py-2">$14.00–15.25/hr</td>
                                    <td className="border border-slate-200 px-4 py-2">$13.50–16/hr</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Field Agriculture Labor</td>
                                    <td className="border border-slate-200 px-4 py-2">$14.00–15.50/hr</td>
                                    <td className="border border-slate-200 px-4 py-2">$13.50–16.50/hr</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Potting / Plant Handling</td>
                                    <td className="border border-slate-200 px-4 py-2">$14.25–15.50/hr</td>
                                    <td className="border border-slate-200 px-4 py-2">$14–16/hr</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Irrigation Assistant</td>
                                    <td className="border border-slate-200 px-4 py-2">$15.00–16.50/hr</td>
                                    <td className="border border-slate-200 px-4 py-2">$15–17/hr</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Crew Lead</td>
                                    <td className="border border-slate-200 px-4 py-2">$17.00–19.00/hr</td>
                                    <td className="border border-slate-200 px-4 py-2">$17–20/hr</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Role Difficulty Index */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Role Difficulty Index (RDI)</h2>
                    <div className="overflow-x-auto my-8">
                        <table className="min-w-full border-collapse border border-slate-200 text-sm">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Role</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Difficulty (1–5)</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Nursery/Greenhouse Labor</td>
                                    <td className="border border-slate-200 px-4 py-2">4</td>
                                    <td className="border border-slate-200 px-4 py-2">Delicate handling + physical work</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Field Harvest Labor</td>
                                    <td className="border border-slate-200 px-4 py-2">4</td>
                                    <td className="border border-slate-200 px-4 py-2">High physical load + weather</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Irrigation Assistant</td>
                                    <td className="border border-slate-200 px-4 py-2">3</td>
                                    <td className="border border-slate-200 px-4 py-2">Skill-based, repetitive</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Potting Crew</td>
                                    <td className="border border-slate-200 px-4 py-2">3</td>
                                    <td className="border border-slate-200 px-4 py-2">Volume + repetition</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Crew Lead</td>
                                    <td className="border border-slate-200 px-4 py-2">4</td>
                                    <td className="border border-slate-200 px-4 py-2">Coordination + bilingual requirements</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Turnover and Retention */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Turnover & Retention Risks</h2>

                    <h3 className="text-lg font-bold text-red-700 mt-6 mb-2">🔴 1. Climate exposure</h3>
                    <p>Heat, rain, cold → immediate impact on attendance.</p>

                    <h3 className="text-lg font-bold text-red-700 mt-6 mb-2">🔴 2. Physical strain</h3>
                    <p>Long hours standing, bending, lifting, moving plants or equipment.</p>

                    <h3 className="text-lg font-bold text-red-700 mt-6 mb-2">🔴 3. Seasonal uncertainty</h3>
                    <p>Workers do not always have clarity regarding job duration and continuity.</p>

                    <h3 className="text-lg font-bold text-red-700 mt-6 mb-2">🔴 4. Transportation gaps</h3>
                    <p>Many sites are rural, far from dense labor pools.</p>

                    <h3 className="text-lg font-bold text-red-700 mt-6 mb-2">🔴 5. Pay competition</h3>
                    <p>Warehouse and construction sites in nearby counties attract workers with minimal wage differences.</p>

                    {/* Safety & Compliance Breakdown */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Safety & Compliance Breakdown</h2>
                    <p className="font-semibold mb-4">Key risk factors:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Heat stress</li>
                        <li>Dehydration</li>
                        <li>Repetitive motion injuries</li>
                        <li>Exposure to chemicals (fertilizers, pesticides — depending on operation)</li>
                        <li>Trip/fall hazards in uneven terrain</li>
                        <li>Equipment accidents (tractors, small machinery, carts)</li>
                    </ul>

                    <p className="font-semibold mb-4">Compliance concerns:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>OSHA outdoor work standards</li>
                        <li>Hydration and rest break requirements</li>
                        <li>MSPA-related documentation (when applicable)</li>
                        <li>Transportation safety in worker transport</li>
                    </ul>

                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-8">
                        <h4 className="font-bold text-red-900 mb-2">Safety OS should monitor:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-red-800">
                            <li>Climate/heat index vs shift schedules</li>
                            <li>Incident patterns by task and site</li>
                            <li>Habitual PPE usage</li>
                            <li>Training completion for tools & chemicals</li>
                        </ul>
                    </div>

                    {/* Productivity Killers */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Productivity Killers</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>No-shows during extreme heat or weather changes</li>
                        <li>Lack of clear planning for season start/end</li>
                        <li>Poor matching of workers to physical tolerance levels</li>
                        <li>Ineffective crew leadership</li>
                        <li>Disconnect between pay and physical demand</li>
                        <li>Low visibility on who is likely to churn mid-season</li>
                    </ul>

                    {/* Workforce Intelligence Insights */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Workforce Intelligence Insights (FNSG OS)</h2>
                    <p className="mb-4">Examples of insights FNSG OS provides:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Climate-Adjusted Attendance Forecast:</strong> Predicts how many workers will actually show up based on temperature, humidity, precipitation, and distance to field/nursery.</li>
                        <li><strong>Seasonal Labor Stability Index:</strong> Measures how likely a crew is to remain stable throughout the entire cycle.</li>
                        <li><strong>Role-Resilience Mapping:</strong> Measures which roles and profiles best withstand outdoor vs. greenhouse vs. potting conditions.</li>
                        <li><strong>Wage Sensitivity Alerts:</strong> Detects migration risks towards warehouse/landscaping sectors.</li>
                    </ul>

                    {/* Recommendations */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Recommendations for Farm & Nursery Operators</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Implement structured, documented rest & hydration policies.</li>
                        <li>Treat greenhouse labor as a semi-skilled role (not just "unskilled").</li>
                        <li>Use Attendance OS to plan crews by week and weather.</li>
                        <li>Review wage competitiveness against warehouse & landscaping.</li>
                        <li>Train and measure the performance of crew leaders (key to retention).</li>
                        <li>Plan ramp-ups 4–6 weeks in advance of peaks.</li>
                    </ul>

                    {/* County Snapshot */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">County-Level Agriculture & Nursery Snapshot</h2>
                    <div className="overflow-x-auto my-8">
                        <table className="min-w-full border-collapse border border-slate-200 text-sm">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">County</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Demand</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Turnover</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Wage Pressure</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2 font-medium">Hall</td>
                                    <td className="border border-slate-200 px-4 py-2">Medium</td>
                                    <td className="border border-slate-200 px-4 py-2 text-yellow-600">Medium</td>
                                    <td className="border border-slate-200 px-4 py-2 text-yellow-600">Medium</td>
                                    <td className="border border-slate-200 px-4 py-2">Mix food + nursery</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2 font-medium">Barrow</td>
                                    <td className="border border-slate-200 px-4 py-2">Medium</td>
                                    <td className="border border-slate-200 px-4 py-2 text-yellow-600">Medium</td>
                                    <td className="border border-slate-200 px-4 py-2 text-yellow-600">Medium</td>
                                    <td className="border border-slate-200 px-4 py-2">Competes with Gwinnett</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2 font-medium">Jackson</td>
                                    <td className="border border-slate-200 px-4 py-2">High</td>
                                    <td className="border border-slate-200 px-4 py-2 text-red-600 font-medium">High</td>
                                    <td className="border border-slate-200 px-4 py-2 text-orange-600">High</td>
                                    <td className="border border-slate-200 px-4 py-2">Agricultural + industrial</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2 font-medium">South Georgia</td>
                                    <td className="border border-slate-200 px-4 py-2">High</td>
                                    <td className="border border-slate-200 px-4 py-2 text-red-600 font-medium">High</td>
                                    <td className="border border-slate-200 px-4 py-2 text-yellow-600">Medium</td>
                                    <td className="border border-slate-200 px-4 py-2">Larger agricultural base</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2 font-medium">Forsyth</td>
                                    <td className="border border-slate-200 px-4 py-2">Low–Medium</td>
                                    <td className="border border-slate-200 px-4 py-2 text-yellow-600">Medium</td>
                                    <td className="border border-slate-200 px-4 py-2 text-orange-600">High</td>
                                    <td className="border border-slate-200 px-4 py-2">Some greenhouse ops</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* FAQs */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">FAQs</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Why is it so hard to staff agriculture and nursery roles?</h3>
                            <p>It involves a combination of physical difficulty, seasonal instability, and direct competition with higher-paying warehouse jobs.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">What are typical pay rates for nursery workers in Georgia?</h3>
                            <p>Rates generally range from $14.00 to $16.00/hr, depending on the specific role and location.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">How does heat and weather affect crew attendance?</h3>
                            <p>Extreme heat or rain causes immediate spikes in absenteeism (No-Call No-Show), which can be predicted with weather-adjusted forecasting.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">How can workforce intelligence help stabilize agricultural crews?</h3>
                            <p>By predicting attendance risks, optimizing crew composition based on resilience, and ensuring competitive pay rates.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Do you support seasonal ramp-ups for planting/harvest?</h3>
                            <p>Yes, we specialize in high-velocity ramp-ups with 4–6 weeks of planning for peak seasons.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Can FNSG OS provide bilingual crew leads?</h3>
                            <p>Yes, we provide bilingual crew leaders to ensure effective communication and supervision.</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Agriculture Workforce?</h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Get the full data picture for your specific facility location and industry vertical.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact/general-inquiries"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-slate-50 transition-colors"
                            >
                                Download the 2025 Agriculture & Nursery Workforce Intelligence Report
                            </Link>
                            <Link
                                href="/contact/general-inquiries"
                                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-slate-800 transition-colors"
                            >
                                Request an Agriculture Workforce OS Strategy Session
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
