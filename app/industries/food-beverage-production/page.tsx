import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import Link from 'next/link';
import Script from 'next/script';
import { AlertTriangle, ThermometerSnowflake, ShieldCheck, Clock, TrendingUp, Zap, CheckCircle } from 'lucide-react';
import PremiumCTA from '@/app/components/PremiumCTA';
import FaqJsonLd from '@/app/components/seo/faq-json-ld';

export const metadata = {
    title: "Food & Beverage Production Staffing Solutions in Georgia | FNSG",
    description: "Intelligence-driven staffing for food production operations including line workers, machine operators, sanitation techs, and QA teams with HACCP, OSHA, and food safety compliance.",
    openGraph: {
        title: "Food & Beverage Production Staffing Solutions",
        url: "https://firstnationalstaffing.com/industries/food-beverage-production",
        type: "website"
    }
};

export default function FoodBeveragePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Food & Beverage Production Staffing",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Georgia"
        },
        "description": "Intelligence-driven staffing for food production operations including line workers, machine operators, sanitation techs, and QA teams with HACCP, OSHA, and food safety compliance.",
        "url": "https://firstnationalstaffing.com/industries/food-beverage-production"
    };

    const faqData = [
        { q: "What types of workers do you supply for food production?", a: "From line workers to sanitation, QA, and machine operators." },
        { q: "How do you ensure food safety compliance?", a: "Through our Sanitation OS, PPE tracking, and standardized training." },
        { q: "Can you support cold storage labor?", a: "Yes, with a workforce prepared for cold environments." },
        { q: "Can you staff ramp-ups of 20–200 workers?", a: "Yes, typically within 24–72 hours." },
        { q: "Do you offer bilingual staffing?", a: "Yes, we provide English/Spanish speakers for all roles." },
        { q: "How do you reduce high turnover in food production?", a: "By using Attendance OS, pay intelligence, and standardized training." }
    ];

    return (
        <main className="bg-white min-h-screen py-12">
            <Script
                id="food-beverage-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <FaqJsonLd faqs={faqData} />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Industries', href: '/industries' },
                            { label: 'Food & Beverage Production', href: '/industries/food-beverage-production' }
                        ]} />

                        <div className="space-y-12 mt-8">

                            {/* H1 & Intro */}
                            <section>
                                <h1 className="text-4xl font-bold text-slate-900 mb-6">Food & Beverage Production Staffing Solutions in Georgia — Powered by FNSG</h1>
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    The food industry in Georgia continues to grow at historic rates: poultry, bakery, ready-to-eat, beverage manufacturing, cold storage, packaging, and fulfillment.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    However, this sector faces the biggest operational challenges of any industrial industry, due to high hygiene requirements, physical effort, extreme temperatures, and regulatory compliance.
                                </p>
                                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                    Food & Beverage plants need stability, predictable attendance, trained workers, and impeccable OSHA + Food Safety compliance.
                                    <span className="text-blue-600"> FNSG is the platform designed to achieve it.</span>
                                </p>
                            </section>

                            {/* Operational Challenges */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Operational Challenges in Food & Beverage Production</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <TrendingUp className="w-5 h-5" /> High Physical Strain → High Turnover
                                        </h3>
                                        <p className="text-red-800 text-sm">Food production demands constant repetition, heavy loads, difficult postures, wet or cold stations, and a fast pace. This increases physical wear and turnover.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <ThermometerSnowflake className="w-5 h-5" /> Cold & Wet Environments
                                        </h3>
                                        <p className="text-red-800 text-sm">34–45°F environments in poultry and RTE affect attendance and retention.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <ShieldCheck className="w-5 h-5" /> Strict Food Safety & OSHA Compliance
                                        </h3>
                                        <p className="text-red-800 text-sm">Includes mandatory PPE, hairnet/beardnet, gloves, HACCP documentation, continuous training, and internal audits.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Clock className="w-5 h-5" /> Multi-Shift Operations
                                        </h3>
                                        <p className="text-red-800 text-sm">2nd and 3rd shifts are consistently unstable in 24/7 operations.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <Zap className="w-5 h-5" /> Seasonal Production Surges
                                        </h3>
                                        <p className="text-red-800 text-sm">Peaks in Q2, Q3, and Q4 require rapid ramp-ups of 20–200 people.</p>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                                        <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2">
                                            <AlertTriangle className="w-5 h-5" /> High Cost of Errors
                                        </h3>
                                        <p className="text-red-800 text-sm">A poorly trained worker can cause cross-contamination, line stoppages, audit failures, and product scrap.</p>
                                    </div>
                                </div>
                            </section>

                            {/* How FNSG Solves These Problems */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">How FNSG Solves These Problems</h2>

                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Attendance Intelligence OS</h3>
                                            <p className="text-slate-600 mt-2">
                                                Predicts absences by shift, weather, role, cold environment, seasonality, and distance. Perfect for high turnover environments.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Food Safety-Ready Workforce Matching</h3>
                                            <p className="text-slate-600 mt-2">
                                                Assigns staff based on cold tolerance, physical endurance, prior poultry/RTE/bakery experience, and OSHA history.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Pay Rate Intelligence</h3>
                                            <p className="text-slate-600 mt-2">
                                                Avoids talent leakage to Gainesville (poultry), Jackson County (advanced mfg), and Gwinnett (logistics).
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">4</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Sanitation & Compliance OS</h3>
                                            <p className="text-slate-600 mt-2">
                                                Includes HACCP awareness, PPE tracking, sanitation cycle documentation, and cross-contamination prevention logs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">5</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">On-Site Workforce Management</h3>
                                            <p className="text-slate-600 mt-2">
                                                We supervise attendance, PPE compliance, hygiene checkpoints, critical production lines, and continuous training.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xl">6</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">High-Velocity Ramp-Up Engine</h3>
                                            <p className="text-slate-600 mt-2">
                                                To cover 20–200 workers in 24–72 hours.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* KPIs We Improve */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">KPIs We Improve in Food Production</h2>
                                <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-900 text-white font-semibold">
                                            <tr>
                                                <th className="p-4 border-b border-slate-700">KPI</th>
                                                <th className="p-4 border-b border-slate-700">Improvement with FNSG</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr><td className="p-4 font-medium text-slate-900">Attendance Reliability</td><td className="p-4 text-green-600 font-bold">+12–20%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Sanitation Compliance</td><td className="p-4 text-green-600 font-bold">+15–35%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Turnover Reduction</td><td className="p-4 text-green-600 font-bold">-15–30%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Ramp-Up Time</td><td className="p-4 text-green-600 font-bold">24–72 hours</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">OSHA Incident Rate</td><td className="p-4 text-green-600 font-bold">-10–22%</td></tr>
                                            <tr><td className="p-4 font-medium text-slate-900">Line Productivity Stability</td><td className="p-4 text-green-600 font-bold">+10–18%</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Roles We Staff */}
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Roles We Staff in Food & Beverage Production</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Line & Processing Roles</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Production Line Workers</li>
                                            <li>• Packers / Sorters</li>
                                            <li>• Trimming / Cutting Operators</li>
                                            <li>• Blending Operators</li>
                                            <li>• Batch Mixing</li>
                                            <li>• Oven Operators</li>
                                            <li>• RTE Workers</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Skilled Positions</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Machine Operators</li>
                                            <li>• Extrusion Operators</li>
                                            <li>• Sanitation Technicians</li>
                                            <li>• QA/QC Technicians</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Support Roles</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Palletizing</li>
                                            <li>• Shipping / Receiving</li>
                                            <li>• Material Handling</li>
                                            <li>• Cold Storage Labor</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-lg">
                                        <h3 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Leadership</h3>
                                        <ul className="space-y-2 text-slate-700 text-sm">
                                            <li>• Line Leads</li>
                                            <li>• Supervisors</li>
                                            <li>• Sanitation Leads</li>
                                            <li>• Safety Coordinators</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Compliance & Safety Layer */}
                            <section className="bg-slate-900 text-white p-8 rounded-xl">
                                <h2 className="text-2xl font-bold mb-4">Compliance & Safety Layer</h2>
                                <p className="mb-6 text-slate-300">
                                    Food manufacturing requires strict adherence to:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>OSHA 1910 standards</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>USDA Guidelines</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>FDA Food Safety Modernization Act (FSMA)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>HACCP Protocols</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>PPE enforcement</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Chemical handling compliance</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Sanitation logs</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Cross-contamination prevention</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-400 w-5 h-5" /> <span>Temperature exposure safety</span>
                                    </div>
                                </div>
                                <p className="mt-6 text-slate-300 font-medium border-t border-slate-700 pt-4">
                                    FNSG documents everything in an audit-ready format.
                                </p>
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
                            <PremiumCTA />

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
