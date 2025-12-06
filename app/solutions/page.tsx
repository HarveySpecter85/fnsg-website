import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FNSG Workforce Intelligence OS Solutions",
    description: "Explore all FNSG OS solutions including Diagnostic OS, On-Site Workforce Management, Health Screening OS, Direct Hire OS, Ramp-Up OS, Peak Season OS, and Payroll & Compliance OS.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions',
    },
    openGraph: {
        title: "FNSG Workforce Intelligence OS Solutions",
        description: "Explore all FNSG OS solutions including Diagnostic OS, On-Site Workforce Management, Health Screening OS, Direct Hire OS, Ramp-Up OS, Peak Season OS, and Payroll & Compliance OS.",
        url: 'https://firstnationalstaffing.com/solutions',
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'website',
    },
};

export default function SolutionsHubPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "FNSG Workforce Intelligence OS Solutions",
        "description": "Explore all FNSG OS solutions including Diagnostic OS, On-Site Workforce Management, Health Screening OS, Direct Hire OS, Ramp-Up OS, Peak Season OS, and Payroll & Compliance OS.",
        "url": "https://firstnationalstaffing.com/solutions",
        "inLanguage": "en"
    };

    return (
        <main className="bg-slate-50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <div className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="container mx-auto px-6 py-20 relative z-10 max-w-5xl text-center">
                    <div className="mb-6">
                        <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">FNSG Workforce Intelligence OS</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8">
                        Solutions Built for <span className="text-blue-500">Operational Excellence</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Your operation doesn&apos;t fail due to a lack of personnel. It fails due to a lack of visibility, stability, and predictive intelligence. We connect every operational gap.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-6xl">
                <Breadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Solutions', href: '/solutions' }
                ]} />

                {/* H2 - Explore the Workforce Intelligence Solutions (7 Cards Grid) */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Explore the Workforce Intelligence Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Workforce Diagnostic OS */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all flex flex-col h-full">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Workforce Diagnostic OS</h3>
                            <p className="text-slate-600 mb-6 flex-grow">Identify operational risk before it impacts performance. Predict attendance, benchmark pay, and detect turnover risks.</p>
                            <Link href="/solutions/workforce-diagnostic-os" className="text-blue-600 font-bold hover:text-blue-800 flex items-center mt-auto">
                                View Solution <span className="ml-2">&rarr;</span>
                            </Link>
                        </div>

                        {/* 2. On-Site Workforce Management OS */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all flex flex-col h-full">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">On-Site Workforce Management OS</h3>
                            <p className="text-slate-600 mb-6 flex-grow">Stabilize your operation with embedded workforce intelligence. Dedicated supervision, safety, and operational discipline on-site.</p>
                            <Link href="/solutions/on-site-workforce-management-os" className="text-blue-600 font-bold hover:text-blue-800 flex items-center mt-auto">
                                View Solution <span className="ml-2">&rarr;</span>
                            </Link>
                        </div>

                        {/* 3. Workforce Health Screening OS */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all flex flex-col h-full">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Workforce Health Screening OS</h3>
                            <p className="text-slate-600 mb-6 flex-grow">Accelerate hiring and eliminate compliance delays. Medical clearance, document verification, and readiness scoring.</p>
                            <Link href="/solutions/workforce-health-screening-os" className="text-blue-600 font-bold hover:text-blue-800 flex items-center mt-auto">
                                View Solution <span className="ml-2">&rarr;</span>
                            </Link>
                        </div>

                        {/* 4. Direct Hire Recruitment OS */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all flex flex-col h-full">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Direct Hire Recruitment OS</h3>
                            <p className="text-slate-600 mb-6 flex-grow">Predict performance and hire the right people. Talent scoring, operational fit modeling, and skill verification.</p>
                            <Link href="/solutions/direct-hire-recruitment-os" className="text-blue-600 font-bold hover:text-blue-800 flex items-center mt-auto">
                                View Solution <span className="ml-2">&rarr;</span>
                            </Link>
                        </div>

                        {/* 5. High-Volume Ramp-Up OS */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all flex flex-col h-full">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">High-Volume Ramp-Up OS</h3>
                            <p className="text-slate-600 mb-6 flex-grow">Deploy 20–200 workers in 24–72 hours. Powered by Ramp-Up Engines, attendance prediction, and pay intelligence.</p>
                            <Link href="/solutions/high-volume-ramp-up-os" className="text-blue-600 font-bold hover:text-blue-800 flex items-center mt-auto">
                                View Solution <span className="ml-2">&rarr;</span>
                            </Link>
                        </div>

                        {/* 6. Peak Season Deployment OS */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all flex flex-col h-full">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Peak Season Deployment OS</h3>
                            <p className="text-slate-600 mb-6 flex-grow">Plan forecast and execute your highest-demand season. Surge pay modeling, on-site activation, and retention OS.</p>
                            <Link href="/solutions/peak-season-deployment-os" className="text-blue-600 font-bold hover:text-blue-800 flex items-center mt-auto">
                                View Solution <span className="ml-2">&rarr;</span>
                            </Link>
                        </div>

                        {/* 7. Payroll & Compliance Administration OS */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all flex flex-col h-full md:col-span-2 lg:col-span-3 lg:w-1/2 lg:mx-auto">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Payroll & Compliance Administration OS</h3>
                            <p className="text-slate-600 mb-6">Reduce risk and improve accuracy with compliance intelligence. I-9, OT, OSHA, audit logs, and classification control.</p>
                            <Link href="/solutions/payroll-compliance-administration-os" className="text-blue-600 font-bold hover:text-blue-800 flex items-center justify-center">
                                View Solution <span className="ml-2">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* H2 - How All Solutions Connect */}
                <section className="py-16 bg-slate-100 -mx-6 px-6 md:rounded-3xl my-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How All Solutions Connect Inside the Workforce Intelligence OS</h2>

                    <div className="os-map-visual bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto border border-slate-200">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold shadow-md">Workforce Diagnostic OS</div>
                            <div className="h-8 w-0.5 bg-slate-300"></div>
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="bg-white border-2 border-slate-900 text-slate-900 px-4 py-2 rounded-lg font-medium">Recruitment OS</div>
                                <div className="hidden md:block w-8 h-0.5 bg-slate-300"></div>
                                <div className="md:hidden h-4 w-0.5 bg-slate-300"></div>
                                <div className="bg-white border-2 border-slate-900 text-slate-900 px-4 py-2 rounded-lg font-medium">Screening OS</div>
                                <div className="hidden md:block w-8 h-0.5 bg-slate-300"></div>
                                <div className="md:hidden h-4 w-0.5 bg-slate-300"></div>
                                <div className="bg-white border-2 border-slate-900 text-slate-900 px-4 py-2 rounded-lg font-medium">Onboarding OS</div>
                            </div>
                            <div className="h-8 w-0.5 bg-slate-300"></div>
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-md">On-Site Workforce OS</div>
                                <div className="hidden md:block w-8 h-0.5 bg-slate-300"></div>
                                <div className="md:hidden h-4 w-0.5 bg-slate-300"></div>
                                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-md">Performance OS</div>
                                <div className="hidden md:block w-8 h-0.5 bg-slate-300"></div>
                                <div className="md:hidden h-4 w-0.5 bg-slate-300"></div>
                                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-md">Safety & Compliance OS</div>
                            </div>
                            <div className="h-8 w-0.5 bg-slate-300"></div>
                            <div className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold shadow-md">Payroll & Compliance OS</div>
                        </div>
                        <p className="text-center text-slate-500 mt-8 italic text-sm">Visual representation of the unified Workforce Intelligence System</p>
                    </div>
                </section>

                {/* H2 - Why Workforce Intelligence OS Outperforms */}
                <section className="py-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Why Workforce Intelligence OS Outperforms Traditional Staffing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Predictive, Not Reactive",
                                desc: "The OS detects problems before they impact your line. We treat staffing as a science, not a reaction."
                            },
                            {
                                title: "Operational Fit Modeling",
                                desc: "We don't just send 'bodies'. We map talent to your specific operational constraints for higher retention."
                            },
                            {
                                title: "Embedded Management",
                                desc: "Supervisors armed with real-time intelligence on the floor drive actual productivity results."
                            },
                            {
                                title: "Compliance & Risk Control",
                                desc: "I-9, OSHA, and documentation are automated and audited, protecting you from liability."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mb-4 mx-auto">
                                    {idx + 1}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* H2 - Cross-Industry Compatibility */}
                <section className="py-12 border-t border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Cross-Industry Compatibility</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Logistics",
                            "Manufacturing",
                            "Food Production",
                            "Hospitality",
                            "EVS",
                            "Recycling",
                            "Agriculture"
                        ].map((industry, idx) => (
                            <span key={idx} className="px-6 py-3 bg-slate-100 text-slate-700 rounded-full font-semibold border border-slate-200">
                                {industry}
                            </span>
                        ))}
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: "What solution should I start with?", a: "We recommend starting with the Workforce Diagnostic OS. It pinpoints exactly where your current process is bleeding money." },
                            { q: "Do I need all OS modules to get results?", a: "No. The system is modular. You can deploy just Recruitment OS or On-Site OS depending on your immediate pain point." },
                            { q: "Does this work for multi-site operations?", a: "Yes. The Intelligence OS unifies data across unlimited locations into a single dashboard view." },
                            { q: "Can we run Ramp-Up OS and Peak OS together?", a: "Absolutely. They are designed to stack. Ramp-Up handles the influx, Peak OS manages the high-volume retention." },
                            { q: "How fast can the OS be deployed?", a: "Diagnostic takes 3-5 days. Full On-Site deployment can be active in as little as 14 days." }
                        ].map((faq, idx) => (
                            <div key={idx} className="border-b border-slate-200 pb-4">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h3>
                                <p className="text-slate-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Final */}
                <div className="mt-16 p-10 bg-slate-900 rounded-2xl text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Upgrade Your Operation?</h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        Move beyond traditional staffing. Implement the Workforce Intelligence OS today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-white hover:bg-slate-50 transition-all transform hover:scale-105"
                        >
                            Request an OS Strategy Session
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-bold rounded-lg text-white hover:bg-slate-800 transition-all"
                        >
                            Download the Full Solutions Overview
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
