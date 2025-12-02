import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { LOGISTICS_FORKLIFT_WAGE, LOGISTICS_FILL_RATE, LOGISTICS_TURNOVER_RED, CURRENT_YEAR } from '@/lib/site-config'
import { Truck, Package, Timer, Barcode, ShieldCheck, Users, TrendingDown, Rocket, CheckSquare, Warehouse } from 'lucide-react'
import { IntelligenceWidget } from '@/app/components/intelligence-engine/widget'

export const metadata: Metadata = {
    title: "Warehouse Logistics Staffing Georgia | 24-72h Fill & Risk Management",
    description: "High-volume warehouse workforce solutions in Atlanta. W-2 Forklift Operators, Pickers, and Leads. 100% Liability Insured. Reduce turnover with On-Site Management.",
}

export default function WarehouseLogisticsStaffingPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Warehouse Staffing",
        "name": "Logistics & Distribution Workforce",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "knowsAbout": [
                "3PL Operations",
                "OSHA Forklift Safety",
                "Inventory Control",
                "High-Volume Staffing"
            ]
        },
        "areaServed": [
            { "@type": "City", "name": "Atlanta" },
            { "@type": "City", "name": "Savannah" },
            { "@type": "AdministrativeArea", "name": "Fulton County" },
            { "@type": "AdministrativeArea", "name": "Gwinnett County" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Logistics Roles",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Forklift Operators (Sit/Stand)" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Order Pickers" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Distribution Supervisors" } }
            ]
        },
        "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Logistics Managers"
        }
    }

    return (
        <main className="bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Warehouse & Logistics Workforce Solutions
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Operational Continuity for Georgia Hubs | 24-72h Fill
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Request Workforce Proposal
                                </Link>
                            </MagneticButton>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Zero-Click Answer Block */}
            <section className="py-20">
                <div className="container">
                    <FadeIn>
                        <div className="bg-white border-l-8 border-brand-primary p-8 md:p-12 rounded-r-xl shadow-sm ring-1 ring-slate-100">
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> provides enterprise-grade, W-2 labor solutions for Georgia&apos;s logistics sector. We specialize in <strong className="text-brand-navy font-bold">high-volume fulfillment</strong>, <strong className="text-brand-navy font-bold">distribution centers (DC)</strong>, and <strong className="text-brand-navy font-bold">3PL operations</strong>, offering a <strong className="text-brand-navy font-bold">24-hour replacement guarantee</strong> and fully bilingual on-site management. All placements are screened via <strong className="text-brand-navy font-bold">eScreen (10-Panel)</strong> and verified for OSHA compliance.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Market Intelligence Widget */}
            <section className="py-20 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Calibrate Your Logistics Workforce
                            </h2>
                            <p className="text-lg text-slate-400 mb-8">
                                Use our AI-driven intelligence engine to analyze local wage benchmarks, turnover risks, and candidate availability for your specific distribution hub.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    Real-time Wage Analysis
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    Competitor Headcount Scanning
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    Instant Shift Coverage Estimates
                                </li>
                            </ul>
                        </div>
                        <div>
                            <IntelligenceWidget industry="Logistics" defaultLocation="Atlanta, GA" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Grid (Pulse) */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Atlanta Logistics Labor Pulse ({CURRENT_YEAR})</h2>
                        <p className="text-brand-gray">Data-driven insights for high-velocity supply chains.</p>
                    </div>
                    <FadeIn stagger={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card-standard bg-white border border-slate-200 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper bg-brand-light text-brand-primary">
                                    <Truck className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-slate-100 text-brand-navy px-2 py-1 rounded">Wages</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{LOGISTICS_FORKLIFT_WAGE}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Avg. Forklift Wage</p>
                            <p className="text-sm text-brand-gray mt-2">Attract certified talent.</p>
                        </div>

                        <div className="card-standard bg-white border border-slate-200 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper bg-brand-light text-brand-primary">
                                    <Timer className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-slate-100 text-brand-navy px-2 py-1 rounded">Speed</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{LOGISTICS_FILL_RATE}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Fill-Rate (within 48h)</p>
                            <p className="text-sm text-brand-gray mt-2">Rapid deployment for peak seasons.</p>
                        </div>

                        <div className="card-standard bg-white border border-slate-200 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper bg-brand-light text-brand-primary">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-slate-100 text-brand-navy px-2 py-1 rounded">Retention</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{LOGISTICS_TURNOVER_RED}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Turnover Reduction</p>
                            <p className="text-sm text-brand-gray mt-2">With On-Site Program implementation.</p>
                        </div>
                    </FadeIn>

                    <div className="mt-8 text-center">
                        <Link href="/data-insights" className="text-brand-primary font-semibold hover:underline inline-flex items-center gap-2">
                            Download {CURRENT_YEAR} Warehouse Wage & Retention Guide <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Cost of Vacancy */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">The &quot;Cost of Vacancy&quot;</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Empty forklift seats create bottlenecks. Our <strong className="text-brand-navy">&quot;Hot-Standby&quot; Roster</strong> ensures you have pre-vetted operators ready to deploy. We reduce your <strong className="text-brand-navy">Cost-Per-Hire</strong> by absorbing all recruitment, screening, and payroll liability expenses.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Hot-Standby Roster</h4>
                                        <p className="text-slate-600">Pre-screened candidates ready for immediate deployment.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Liability Absorption</h4>
                                        <p className="text-slate-600">We handle all payroll, taxes, and workers&apos; comp claims.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            {/* Placeholder for visual */}
                            <div className="aspect-square rounded-2xl bg-slate-50 border border-slate-200 p-8 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-light/50 via-transparent to-transparent"></div>
                                <div className="text-center relative z-10">
                                    <Warehouse className="w-24 h-24 text-brand-primary mx-auto mb-4 opacity-80" />
                                    <p className="text-brand-navy font-bold text-xl">Zero Downtime</p>
                                    <p className="text-sm text-slate-500">Continuous Operations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accelerated Onboarding */}
            <section className="py-20 bg-brand-light border-y border-brand-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6 text-brand-primary">
                            <Rocket className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Accelerated Onboarding</h2>
                        <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                            Leveraging our <Link href="/solutions/workforce-health-screening" className="text-brand-primary font-semibold hover:underline">Labcorp/eScreen Network</Link>, we process drug screens and background checks in hours, not days, ensuring your shift quotas are met faster.
                        </p>
                    </div>
                </div>
            </section>

            {/* Roles Table */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Roles & Capabilities</h2>
                        <p className="text-slate-600">Scalable workforce solutions for every logistics function.</p>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Role Category</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Screening Standard</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Shift Availability</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Scale Capacity</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Truck className="w-4 h-4 text-brand-teal" /> Forklift / Clamp
                                    </td>
                                    <td className="p-4 text-slate-600">OSHA Certified + Practical</td>
                                    <td className="p-4 text-slate-600">1st / 2nd / 3rd</td>
                                    <td className="p-4 text-slate-600">1-50 Operators</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Barcode className="w-4 h-4 text-brand-teal" /> Pick / Pack
                                    </td>
                                    <td className="p-4 text-slate-600">Accuracy Tested</td>
                                    <td className="p-4 text-slate-600">High-Volume</td>
                                    <td className="p-4 text-slate-600">10-200 Staff</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Package className="w-4 h-4 text-brand-teal" /> Material Handlers
                                    </td>
                                    <td className="p-4 text-slate-600">Lift Test (50lbs)</td>
                                    <td className="p-4 text-slate-600">All Shifts</td>
                                    <td className="p-4 text-slate-600">Scalable</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Users className="w-4 h-4 text-brand-teal" /> Logistics Leads
                                    </td>
                                    <td className="p-4 text-slate-600">Bilingual / WMS Exp</td>
                                    <td className="p-4 text-slate-600">Fixed Shift</td>
                                    <td className="p-4 text-slate-600">Individual</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Risk Management */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-brand-navy mb-6">Mitigating Co-Employment Risk</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        We act as the primary employer of record, shielding you from compliance headaches.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <CheckSquare className="w-8 h-8 text-brand-primary mb-4" />
                            <h3 className="font-bold text-brand-navy mb-2">ACA & Benefits</h3>
                            <p className="text-slate-600 text-sm">We manage all Affordable Care Act compliance and reporting.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <ShieldCheck className="w-8 h-8 text-brand-primary mb-4" />
                            <h3 className="font-bold text-brand-navy mb-2">Workers Comp</h3>
                            <p className="text-slate-600 text-sm">Fully insured to protect your facility&apos;s EMR rating.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <Users className="w-8 h-8 text-brand-primary mb-4" />
                            <h3 className="font-bold text-brand-navy mb-2">Safety Audits</h3>
                            <p className="text-slate-600 text-sm">Our on-site leads conduct weekly PPE and safety walk-throughs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">How fast can you ramp up for Q4 peak season?</h3>
                            <p className="text-slate-600">We begin &quot;Peak Planning&quot; 6 weeks in advance, building a &quot;Warm Bench&quot; of candidates equal to 150% of your projected requirement to guarantee fulfillment.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Do you verify forklift certifications?</h3>
                            <p className="text-slate-600">Yes. We verify existing certifications and can coordinate on-site practical assessments to ensure operators meet your facility&apos;s specific safety standards.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">What WMS systems are your staff familiar with?</h3>
                            <p className="text-slate-600">Our candidate pool includes workers experienced with SAP, Oracle, NetSuite, and RF Scanner handhelds.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="py-20 bg-brand-navy text-white text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">Areas We Serve</h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Serving major logistics corridors: <strong className="text-white">Fulton Industrial Blvd</strong>, <strong className="text-white">Gwinnett Distribution Hubs</strong>, <strong className="text-white">Savannah Port Logistics</strong>, and <strong className="text-white">Gainesville Manufacturing</strong>.
                    </p>
                </div>
            </section>
        </main>
    )
}
