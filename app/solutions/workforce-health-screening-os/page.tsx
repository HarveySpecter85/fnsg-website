import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';
import ScreeningServicesCatalog from "@/app/components/services/ScreeningServicesCatalog";
import ScreeningServicesBanner from "@/app/components/banners/ScreeningServicesBanner";
import ScreeningServicesCTA from "@/app/components/cta/ScreeningServicesCTA";

export const metadata: Metadata = {
    title: "Workforce Health Screening Services — Reduce Risk, Accelerate Hiring and Protect Your Workforce",
    description: "FNSG manages pre-employment medical and screening requirements. Drug screens, physicals, vaccines, and OSHA compliance for Georgia locations.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/workforce-health-screening-os',
    },
    openGraph: {
        title: "Workforce Health Screening Services — Reduce Risk, Accelerate Hiring and Protect Your Workforce",
        description: "FNSG manages pre-employment medical and screening requirements. Drug screens, physicals, vaccines, and OSHA compliance for Georgia locations.",
        url: 'https://firstnationalstaffing.com/solutions/workforce-health-screening-os',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function WorkforceHealthScreeningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Workforce Health Screening Services",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "url": "https://firstnationalstaffing.com"
        },
        "areaServed": "Georgia",
        "description": "Full-service workforce health screening. Pre-employment medical, drug testing, and vaccination coordination managed by FNSG for rapid hiring. Includes Drug Panels, Physicals, Vaccinations, and OSHA testing.",
        "url": "https://firstnationalstaffing.com/solutions/workforce-health-screening-os",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Health Screening Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drug Screening Services" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Physical Exams" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vaccinations" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "OSHA & Respiratory Testing" } }
            ]
        }
    };

    return (
        <main className="bg-slate-50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Task 1: Hero Section */}
            <div className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="container mx-auto px-6 py-20 relative z-10 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-6">
                                <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">FNSG Workforce Health Screening Services</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                                Workforce Health Screening Services: <br />
                                <span className="text-blue-500">Reduce Risk, Accelerate Hiring</span> and Protect Your Workforce
                            </h1>
                            <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                FNSG manages every step of your pre employment medical and screening requirements, so your teams stay focused on production while we handle clearances, documentation and compliance.
                            </p>
                            <ul className="space-y-3 mb-8 text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2 mt-1">✔</span>
                                    <span>Pre employment and ongoing screening for warehouse, food production, logistics and EVS</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2 mt-1">✔</span>
                                    <span>Coordination of drug screens, physicals, vaccines, titers and OSHA tests</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2 mt-1">✔</span>
                                    <span>Centralized documentation and audit ready records for Georgia locations</span>
                                </li>
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact/general-inquiries?subject=Request Screening Services"
                                    className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg transition text-center"
                                >
                                    Request Screening Services
                                </Link>
                                <Link
                                    href="/contact/general-inquiries?subject=Add Screening Services to Workforce Plan"
                                    className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-medium shadow-lg transition text-center"
                                >
                                    Add Screening Services to Your Workforce Plan
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            {/* Right side illustration placeholder - clean visual as per wireframe */}
                            <ScreeningServicesBanner />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Solutions', href: '/solutions' },
                    { label: 'Workforce Health Screening Services', href: '/solutions/workforce-health-screening-os' }
                ]} />

                {/* Task 2: Problem Grid */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Operational Challenges We Solve</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Slow Screening Pipelines",
                                desc: "Our team coordinates labs and documentation to reduce time to start."
                            },
                            {
                                title: "Manual Verification Errors",
                                desc: "We verify IDs, medical forms, vaccines and OSHA compliance before start."
                            },
                            {
                                title: "Unprepared Workforce",
                                desc: "We ensure workers meet all role-specific health requirements."
                            },
                            {
                                title: "Lack of Ready Visibility",
                                desc: "Supervisors receive clear ready or pending updates."
                            },
                            {
                                title: "Vendor Latency",
                                desc: "We align clinic and lab workflows to your hiring speed."
                            },
                            {
                                title: "Incomplete Compliance",
                                desc: "We organize all documentation in an audit ready structure."
                            }
                        ].map((problem, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="h-2 w-12 bg-red-500 rounded mb-4"></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                                <p className="text-slate-600">{problem.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why This Happens (Full Content Band) */}
                <section className="py-12 bg-slate-100 -mx-6 px-6 md:rounded-3xl mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why These Problems Exist</h2>
                    <div className="prose prose-lg text-slate-700 max-w-none">
                        <p>
                            In traditional staffing, medical screening is a fragmented mess of vendors, manual emails, and paper forms. There is no structured pipeline connecting screening to onboarding.
                        </p>
                        <p className="font-bold text-slate-900">
                            Without managed coordination, screening delays shut down ramp-ups and leave Operations guessing who will actually show up.
                        </p>
                    </div>
                </section>

                {/* Task 3: Full Screening Services Catalog */}
                <ScreeningServicesCatalog />

                {/* Task 4: How Our Managed Screening Services Work */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">How Our Managed Screening Services Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { step: 1, title: "Requirements Mapping", desc: "We map your specific medical and vaccine protocols." },
                            { step: 2, title: "Candidate Scheduling and Follow Up", desc: "Our team schedules appointments and chases no-shows." },
                            { step: 3, title: "Result Verification and Documentation", desc: "We validate every result against your standards." },
                            { step: 4, title: "Ready to Work Status Updates", desc: "You get a clear 'GO' when the worker is fully cleared." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden">
                                <div className="text-6xl font-bold text-slate-100 absolute top-[-10px] right-[-10px]">{item.step}</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 relative z-10">{item.title}</h3>
                                <p className="text-sm text-slate-600 relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Task 5: KPIs and Implementation */}
                <div className="grid lg:grid-cols-2 gap-12 py-12">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Performance Indicators</h2>
                        <div className="overflow-x-auto shadow-sm border border-slate-200 rounded-lg">
                            <table className="min-w-full bg-white text-left">
                                <thead className="bg-slate-50 text-slate-900">
                                    <tr>
                                        <th className="px-6 py-4 font-bold border-b">KPI</th>
                                        <th className="px-6 py-4 font-bold border-b text-green-700">Improvement</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr><td className="px-6 py-4">Time to Start</td><td className="px-6 py-4 font-bold text-green-700">-35% to -55%</td></tr>
                                    <tr><td className="px-6 py-4">Screening Errors</td><td className="px-6 py-4 font-bold text-green-700">-60% to -80%</td></tr>
                                    <tr><td className="px-6 py-4">Pending Clearances</td><td className="px-6 py-4 font-bold text-green-700">-25% to -50%</td></tr>
                                    <tr><td className="px-6 py-4">Turnover Risk</td><td className="px-6 py-4 font-bold text-green-700">-10% to -20%</td></tr>
                                    <tr><td className="px-6 py-4">Compliance Alignment</td><td className="px-6 py-4 font-bold text-green-700">+20% to +40%</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Implementation Framework</h2>
                        <div className="space-y-4">
                            {[
                                "Diagnostic Assessment",
                                "Service Plan and Panel Design",
                                "Vendor and Clinic Alignment",
                                "Candidate Scheduling and Communication",
                                "Result Review and Documentation",
                                "Weekly Optimization and Reporting"
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4 text-sm">{idx + 1}</div>
                                    <span className="text-slate-700 font-medium">{step}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Task 6: Case Study */}
                <section className="py-12 bg-white border border-slate-200 rounded-xl p-8 shadow-sm mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Case Study Information</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-red-600 mb-2">The Challenge</h4>
                            <p className="text-slate-700 mb-4">
                                A food production facility in Hall County faced a 27 percent screening backlog and 3–5 day ramp up delays.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-green-600 mb-2">The Solution & Result</h4>
                            <p className="text-slate-700">
                                After FNSG implemented a managed screening program coordinating drug tests, physicals and vaccinations, screening delays dropped by more than fifty percent and ramp ups returned to on time performance.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Task 7: FAQ */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {[
                            { q: "What types of screenings are supported?", a: "We support physicals, drug screens, vaccination verification, and specialized medical clearances." },
                            { q: "How fast can workers be medically cleared?", a: "Our Rapid Clearance Processing typically accelerates the process by 35-50% compared to traditional vendors." },
                            { q: "Does this work for multi-site hiring?", a: "Yes, our team provides centralized coordination across unlimited locations." },
                            { q: "Can clearance delays really reduce production output?", a: "Absolutely. Every delayed worker is a vacant station. We close that gap." },
                            { q: "Does FNSG manage medical documentation?", a: "Yes, securely and in full compliance with HIPAA and employment laws." },
                            { q: "Is this integrated with On-Site services?", a: "Seamlessly. Once cleared, workers flow directly into the On-Site management system." }
                        ].map((faq, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-lg p-4">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h3>
                                <p className="text-slate-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Task 10/11: Final CTA */}
                <ScreeningServicesCTA />
            </div>
        </main>
    );
}

