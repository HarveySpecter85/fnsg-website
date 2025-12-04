import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hospitality & Events Workforce Deep Dive - Georgia 2025 Edition",
    description: "A strategic analysis of Georgia's hospitality and events labor market, including turnover patterns, NCNS risks, wage pressures, and workforce intelligence insights.",
};

export default function HospitalityDeepDivePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Hospitality & Events Workforce Deep Dive - Georgia 2025 Edition",
        "description": "A strategic analysis of Georgia's hospitality and events labor market, including turnover patterns, NCNS risks, wage pressures, and workforce intelligence insights.",
        "author": {
            "@type": "Organization",
            "name": "First National Staffing Group"
        },
        "publisher": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "url": "https://firstnationalstaffing.com/insights/industry/hospitality-events",
        "image": "https://firstnationalstaffing.com/insights/industry/hospitality-events/opengraph-image",
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
                    { label: 'Hospitality & Events', href: '/insights/industry/hospitality-events' }
                ]} />

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 mt-6">
                    Hospitality & Events Workforce Deep Dive - Georgia 2025 Edition
                </h1>

                <div className="prose prose-lg max-w-none text-slate-700">
                    <p>
                        The Hospitality & Events sector in Georgia is experiencing a resurgence, driven by:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Corporate events returning</li>
                        <li>Weddings increasing</li>
                        <li>City-wide conventions</li>
                        <li>Concerts, festivals & sports</li>
                        <li>Travel volume rebounding</li>
                    </ul>
                    <p>
                        However, this industry maintains the highest labor volatility in the state, where:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Attendance is unpredictable</li>
                        <li>Professionalism varies widely</li>
                        <li>Workforce demand swings drastically week-to-week</li>
                    </ul>
                    <p>
                        FNSG OS delivers stability, predictability, and consistency in one of the most human-dependent industries.
                    </p>

                    {/* Industry Overview */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Industry Overview (2025)</h2>
                    <p>Perplexity Pro highlights:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Georgia hotels and event venues expect double-digit growth in event bookings through 2025.</li>
                        <li>Staffing shortages remain the #1 operational challenge for hotels and banquet teams.</li>
                        <li>Restaurants and hotels compete with warehouse and gig-economy jobs for workers.</li>
                        <li>Housekeeping is now one of the hardest roles to fill and stabilize nationwide.</li>
                    </ul>
                    <p className="font-semibold mt-4">Hospitality requires:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Presentable staff</li>
                        <li>Professional communication</li>
                        <li>Fast learning</li>
                        <li>Customer-facing empathy</li>
                        <li>Reliability under pressure</li>
                    </ul>

                    {/* Labor Market Dynamics */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Labor Market Dynamics</h2>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Unpredictable Demand</h3>
                    <p>Events fluctuate wildly based on:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Weather</li>
                        <li>Corporate calendars</li>
                        <li>Sports events</li>
                        <li>Tourism seasons</li>
                        <li>Holidays</li>
                    </ul>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">High NCNS Rates</h3>
                    <p>Hospitality workers tend to be younger & more transient. Gig economy competition elevates NCNS risk.</p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Presentation Requirements Reduce Candidate Pool</h3>
                    <p>Uniform, grooming, and etiquette standards filter out many candidates.</p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Customer Interaction Sensitivity</h3>
                    <p>Not everyone is emotionally or socially ready for service roles.</p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Night & Weekend Shifts</h3>
                    <p>Hospitality rarely follows a “standard” weekly schedule.</p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Housekeeping Crisis</h3>
                    <p>Nationwide shortage leads to the highest turnover of all hotel roles.</p>

                    {/* Pay Rate Intelligence */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Pay Rate Intelligence & Wage Pressures</h2>
                    <p>Hospitality wages compete directly against warehouse, food service, and gig platforms.</p>
                    <p className="font-semibold text-red-600">If wages fall behind by as little as $0.50/hr, labor quickly migrates.</p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Typical pay bands (Georgia 2025):</h3>
                    <div className="overflow-x-auto my-8">
                        <table className="min-w-full border-collapse border border-slate-200 text-sm">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Role</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Avg Pay</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Housekeeper</td>
                                    <td className="border border-slate-200 px-4 py-2">$13.00–14.50/hr</td>
                                    <td className="border border-slate-200 px-4 py-2">$13–15/hr</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Banquet Server</td>
                                    <td className="border border-slate-200 px-4 py-2">$14–16/hr</td>
                                    <td className="border border-slate-200 px-4 py-2">$14–18/hr</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Bartender</td>
                                    <td className="border border-slate-200 px-4 py-2">$16–20/hr</td>
                                    <td className="border border-slate-200 px-4 py-2">$16–25/hr</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Dishwasher / Steward</td>
                                    <td className="border border-slate-200 px-4 py-2">$13–15/hr</td>
                                    <td className="border border-slate-200 px-4 py-2">$13–16/hr</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Event Setup/Tear Down</td>
                                    <td className="border border-slate-200 px-4 py-2">$14–16/hr</td>
                                    <td className="border border-slate-200 px-4 py-2">$14–17/hr</td>
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
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Why</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Housekeeper</td>
                                    <td className="border border-slate-200 px-4 py-2">5</td>
                                    <td className="border border-slate-200 px-4 py-2">High physical + quality standards</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Banquet Server</td>
                                    <td className="border border-slate-200 px-4 py-2">4</td>
                                    <td className="border border-slate-200 px-4 py-2">Etiquette + speed</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Bartender</td>
                                    <td className="border border-slate-200 px-4 py-2">4</td>
                                    <td className="border border-slate-200 px-4 py-2">Skill + customer interaction</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Dishwasher/Steward</td>
                                    <td className="border border-slate-200 px-4 py-2">3</td>
                                    <td className="border border-slate-200 px-4 py-2">High burnout</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2">Event Crew</td>
                                    <td className="border border-slate-200 px-4 py-2">3</td>
                                    <td className="border border-slate-200 px-4 py-2">Physical + time-sensitive</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Turnover and Retention */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Turnover & Retention Risks</h2>

                    <h3 className="text-lg font-bold text-red-700 mt-6 mb-2">🔴 Emotional & social stress</h3>
                    <p>Customer interactions impact morale.</p>

                    <h3 className="text-lg font-bold text-red-700 mt-6 mb-2">🔴 Physical fatigue</h3>
                    <p>Housekeeping & dishwasher roles are physically taxing.</p>

                    <h3 className="text-lg font-bold text-red-700 mt-6 mb-2">🔴 Schedule instability</h3>
                    <p>Workers cannot plan personal time, leading to job switching.</p>

                    <h3 className="text-lg font-bold text-red-700 mt-6 mb-2">🔴 Lack of career path</h3>
                    <p>Many workers view hospitality roles as temporary.</p>

                    <h3 className="text-lg font-bold text-red-700 mt-6 mb-2">🔴 Weak supervision or unclear expectations</h3>
                    <p>Drives immediate turnover.</p>

                    {/* OSHA & Safety Breakdown */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">OSHA & Safety Breakdown</h2>
                    <p className="font-semibold mb-4">The industry is not “low risk.” Key risks include:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Slips & falls</li>
                        <li>Chemical exposure from cleaning agents</li>
                        <li>Heavy lifting (banquet setups)</li>
                        <li>Burns (kitchen roles)</li>
                        <li>Cuts from knives & glassware</li>
                        <li>Repetitive strain injuries</li>
                    </ul>

                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-8">
                        <h4 className="font-bold text-red-900 mb-2">Safety OS should track:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-red-800">
                            <li>Incident type by role</li>
                            <li>Location-based risk patterns</li>
                            <li>Supervisor impact on incident rates</li>
                            <li>Weekend vs weekday trends</li>
                        </ul>
                    </div>

                    {/* Productivity Killers */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Productivity Killers</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>High NCNS during weekends</li>
                        <li>Failure to meet grooming standards</li>
                        <li>Inconsistent training</li>
                        <li>Lack of role clarity</li>
                        <li>Housekeeping room quotas mismatched with worker capacity</li>
                        <li>Events starting late due to understaffing</li>
                    </ul>

                    {/* Workforce Intelligence Insights */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Workforce Intelligence Insights (FNSG OS)</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Attendance Early Warning System:</strong> Predicts high-risk dates based on weather, event calendar, and gig-economy surges.</li>
                        <li><strong>Grooming Compliance Index:</strong> Evaluates readiness for presentation-required roles.</li>
                        <li><strong>Event Staffing Forecast Model:</strong> Predicts staffing needs by event type, season, and venue capacity.</li>
                        <li><strong>Guest Interaction Risk Score:</strong> Predicts which staff need coaching or supervision.</li>
                    </ul>

                    {/* Recommendations */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Recommendations for Hotel, Venue & Event Leaders</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Use predictive scheduling for weekends & holidays.</li>
                        <li>Standardize grooming & etiquette training.</li>
                        <li>Implement a banquet “sprint team” for high-volume events.</li>
                        <li>Pre-assign servers based on experience & service style.</li>
                        <li>Establish communication loops between banquet captain and staffing OS.</li>
                        <li>Increase supervision on high-risk events (weddings, corporate galas).</li>
                    </ul>

                    {/* County Snapshot */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">County-Level Workforce Snapshot</h2>
                    <div className="overflow-x-auto my-8">
                        <table className="min-w-full border-collapse border border-slate-200 text-sm">
                            <thead>
                                <tr className="bg-slate-50">
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">County</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Turnover</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Wage Pressure</th>
                                    <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2 font-medium">Fulton</td>
                                    <td className="border border-slate-200 px-4 py-2 text-red-600 font-medium">Very High</td>
                                    <td className="border border-slate-200 px-4 py-2 text-orange-600">High</td>
                                    <td className="border border-slate-200 px-4 py-2">High volume events</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2 font-medium">Gwinnett</td>
                                    <td className="border border-slate-200 px-4 py-2 text-red-600 font-medium">High</td>
                                    <td className="border border-slate-200 px-4 py-2 text-yellow-600">Medium</td>
                                    <td className="border border-slate-200 px-4 py-2">Convention centers</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2 font-medium">Savannah Area</td>
                                    <td className="border border-slate-200 px-4 py-2 text-red-600 font-medium">Very High</td>
                                    <td className="border border-slate-200 px-4 py-2 text-orange-600">High</td>
                                    <td className="border border-slate-200 px-4 py-2">Tourism-driven</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2 font-medium">Cobb</td>
                                    <td className="border border-slate-200 px-4 py-2 text-red-600 font-medium">High</td>
                                    <td className="border border-slate-200 px-4 py-2 text-yellow-600">Medium</td>
                                    <td className="border border-slate-200 px-4 py-2">Hotels + events</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-200 px-4 py-2 font-medium">Hall</td>
                                    <td className="border border-slate-200 px-4 py-2 text-yellow-600">Medium</td>
                                    <td className="border border-slate-200 px-4 py-2 text-yellow-600">Medium</td>
                                    <td className="border border-slate-200 px-4 py-2">Limited hospitality cluster</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* FAQs */}
                    <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">FAQs</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Why is hospitality turnover so high?</h3>
                            <p>It's a combination of variable hours, stress, pay pressure, and high NCNS rates.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">What hospitality roles are hardest to fill?</h3>
                            <p>Housekeeping, banquet servers, and bartenders are consistently the most challenging roles to staff.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">How does workforce intelligence help events run smoothly?</h3>
                            <p>It predicts staffing risk, allowing for proactive measures to prevent event delays and service failures.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">What pay rate helps retain hospitality staff?</h3>
                            <p>Wages must be competitive with warehouse and gig economy roles to ensure retention.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Can FNSG OS support 100-person event ramp-ups?</h3>
                            <p>Yes, we can mobilize large teams within 24–48 hours.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Do you offer bilingual hospitality teams?</h3>
                            <p>Yes, we provide English/Spanish bilingual teams.</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Hospitality Workforce?</h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Get the full data picture for your specific facility location and industry vertical.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-slate-50 transition-colors"
                            >
                                Download the Hospitality & Events Workforce Intelligence Report 2025
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-slate-800 transition-colors"
                            >
                                Request a Hospitality OS Strategy Session
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
