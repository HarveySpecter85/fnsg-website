import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import Link from 'next/link';
import Script from 'next/script';
import { Users, CalendarClock, UserCheck, Star, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export const metadata = {
    title: "Hospitality & Events Staffing in Georgia | FNSG OS",
    description: "Hospitality & Events staffing solutions powered by FNSG OS including banquet staff, bartenders, housekeeping, dishwashers, AV support, event setup crews, and onsite workforce management.",
    openGraph: {
        title: "Hospitality & Events Staffing",
        url: "https://firstnationalstaffing.com/industries/hospitality-events-staffing",
        type: "website"
    }
};

export default function HospitalityEventsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Hospitality & Events Staffing",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Georgia"
        },
        "description": "Hospitality & Events staffing solutions powered by FNSG OS including banquet staff, bartenders, housekeeping, dishwashers, AV support, event setup crews, and onsite workforce management.",
        "url": "https://firstnationalstaffing.com/industries/hospitality-events-staffing"
    };

    return (
        <main className="bg-white min-h-screen py-12">
            <Script
                id="hospitality-events-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Industries', href: '/industries' },
                            { label: 'Hospitality & Events', href: '/industries/hospitality-events-staffing' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Hospitality & Events Staffing in Georgia — Powered by FNSG OS</h1>
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    The Hospitality & Events industry demands reliable, professional, and highly adaptable staff. From hotels and conventions to banquets and corporate events, operational success depends on: punctuality, presentation, professional attitude, speed of execution, interpersonal skills, and immediate availability.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    It is an environment where turnover is high, peaks are unpredictable, and demand changes by season, weather, and local calendar.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                    <span className="text-blue-600">FNSG OS offers trained, predictable, and audit-ready Hospitality & Events teams.</span>
                                </p>
                            </section>

                            {/* Operational Challenges */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Operational Challenges in Hospitality & Events</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <AlertTriangle className="w-5 h-5" /> High Turnover + No-Show Rate
                                        </h3>
                                        <p className="text-red-800 text-sm">Hospitality is one of the industries with the highest NCNS (No-Call No-Show) rates in Georgia.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <CalendarClock className="w-5 h-5" /> Event-Based Demand (Inconsistent Hours)
                                        </h3>
                                        <p className="text-red-800 text-sm">Events require 10–200 people on schedules that change week to week.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <UserCheck className="w-5 h-5" /> Professional Presentation Required
                                        </h3>
                                        <p className="text-red-800 text-sm">Uniforms, grooming standards, etiquette → not all candidates comply.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Users className="w-5 h-5" /> Customer-Facing Roles
                                        </h3>
                                        <p className="text-red-800 text-sm">It is not just operational staff. It is the face of the hotel or venue.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <TrendingUp className="w-5 h-5" /> Peak Season Volatility
                                        </h3>
                                        <p className="text-red-800 text-sm">Spring/Summer → weddings, festivals, concerts. Holidays → banquets, galas, receptions.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Star className="w-5 h-5" /> Skill & Attitude Mismatch
                                        </h3>
                                        <p className="text-red-800 text-sm">Not all workers qualify emotionally or professionally.</p>
                                    </div>
                                </div>
                            </section>

                            {/* How FNSG OS Solves These Challenges */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">How FNSG OS Solves These Challenges</h2>

                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Hospitality Talent Intelligence</h3>
                                            <p className="text-slate-600 mt-2">
                                                Intelligent matching based on: grooming & etiquette level, experience with banquet & event setups, operational pace, and customer interaction skills.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Attendance Intelligence OS</h3>
                                            <p className="text-slate-600 mt-2">
                                                Prediction of: no-shows, critical shifts, at-risk events, real workforce availability, and seasonal demand.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">On-Site Workforce Management</h3>
                                            <p className="text-slate-600 mt-2">
                                                Ideal for hotels, event halls, convention centers, corporate banquets: check-in/out control, grooming inspections, role briefing, express training, and real-time assistance.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">4</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Pay Intelligence</h3>
                                            <p className="text-slate-600 mt-2">
                                                Avoids leakage to: warehouse pay spikes, gig economy, Uber/Lyft, and food delivery.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">5</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">High-Velocity Event Ramp-Ups</h3>
                                            <p className="text-slate-600 mt-2">
                                                Coverage of 15–200 positions in 12–48 hours.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* KPIs We Improve */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">KPIs We Improve in Hospitality & Events</h2>
                                <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-900 text-white font-semibold">
                                            <tr>
                                                <th className="p-4 border-b border-slate-700">KPI</th>
                                                <th className="p-4 border-b border-slate-700">Improvement with FNSG OS</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr><td className="p-4 font-medium text-slate-900">Attendance Reliability</td><td className="p-4 text-green-600 font-bold">+10–20%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Grooming Compliance</td><td className="p-4 text-green-600 font-bold">+25–50%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Customer Satisfaction (Venue Feedback)</td><td className="p-4 text-green-600 font-bold">+10–25%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">NCNS Reduction</td><td className="p-4 text-green-600 font-bold">-15–30%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Ramp-Up Speed</td><td className="p-4 text-green-600 font-bold">12–48 hours</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Event Productivity</td><td className="p-4 text-green-600 font-bold">+8–15%</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Roles We Staff */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Roles We Staff in Hospitality & Events</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Front of House</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Banquet Servers</li>
                                            <li>• Bartenders</li>
                                            <li>• Hosts / Greeters</li>
                                            <li>• Event Ambassadors</li>
                                            <li>• Guest Service Staff</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Back of House</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Dishwashers</li>
                                            <li>• Stewards</li>
                                            <li>• Cooks / Prep Cooks</li>
                                            <li>• Line Servers</li>
                                            <li>• Buffet Attendants</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Housekeeping & Hotel Support</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Housekeepers</li>
                                            <li>• Laundry Attendants</li>
                                            <li>• Room Inspectors</li>
                                            <li>• Lobby Attendants</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Event Production & Leadership</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Setup Crew</li>
                                            <li>• Event Tear-Down Crew</li>
                                            <li>• Stagehands</li>
                                            <li>• AV Support (basic-level)</li>
                                            <li>• Banquet Captains</li>
                                            <li>• Event Leads</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Compliance & Professional Standards Layer */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">Compliance & Professional Standards Layer</h2>
                                <p className="mb-6 text-slate-300">
                                    FNSG OS guarantees:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Grooming & uniform checks</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Hospitality etiquette training</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Alcohol service compliance (basics)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Customer-interaction training</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Safety practices (lifting, setups, tear-downs)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Audit-ready documentation</span>
                                    </div>
                                </div>
                            </section>

                            {/* FAQs */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "What hospitality roles do you staff?", a: "Servers, bartenders, housekeeping, dishwashers, event crews, banquet leads." },
                                        { q: "Can you support large events (50–200 people)?", a: "Yes, with rapid ramp-ups." },
                                        { q: "Do you provide training on etiquette & presentation?", a: "Yes, via the Hospitality OS module." },
                                        { q: "How do you reduce no-shows?", a: "Attendance Intelligence + grooming checks + on-site supervision." },
                                        { q: "Do you offer bilingual teams?", a: "Yes, EN/ES." },
                                        { q: "Do you support hotels, venues, and corporate events?", a: "Yes, all sectors." }
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
                                        href="/contact?industry=hospitality"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Request a Hospitality Workforce Strategy Session
                                    </Link>
                                    <Link
                                        href="/resources/reports/hospitality-2025"
                                        className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 px-8 rounded-full transition-all"
                                    >
                                        Download Hospitality & Events Workforce Intelligence Report (2025)
                                    </Link>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
