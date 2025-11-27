import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { RECYCLING_SORTER_WAGE, RECYCLING_SAFETY_RATE_FNSG, RECYCLING_SAFETY_RATE_AVG, RECYCLING_RETENTION, CURRENT_YEAR } from '@/lib/site-config'
import { Recycle, ShieldAlert, Truck, HardHat, Syringe, FileCheck, Timer, Users, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: "Recycling & Waste Management Staffing Georgia | OSHA Certified MRF Labor",
    description: "Staffing for Material Recovery Facilities (MRF) & Transfer Stations in Atlanta. OSHA-10 trained Sorters, Balers, and Forklift Operators. Zero-Liability W-2 Workforce.",
}

export default function RecyclingWasteManagementStaffingPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Recycling Facility Staffing",
        "name": "MRF & Waste Management Workforce",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "knowsAbout": [
                "Material Recovery Facilities",
                "OSHA 1910 Standards",
                "Lockout Tagout",
                "Hazardous Waste Operations"
            ]
        },
        "areaServed": [
            { "@type": "City", "name": "Atlanta" },
            { "@type": "AdministrativeArea", "name": "Fulton County" },
            { "@type": "AdministrativeArea", "name": "Gwinnett County" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Recycling Roles",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MRF Sorters" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Baler & Compactor Operators" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heavy Equipment Operators" } }
            ]
        },
        "audience": {
            "@type": "BusinessAudience",
            "audienceType": "MRF Plant Managers"
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
                            Recycling & Waste Management Workforce Solutions
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Safety-First Labor for Georgia MRFs | OSHA Certified
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Request Safety-Vetted Staff
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
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> provides specialized, OSHA-trained labor for Georgia&apos;s waste management and recycling sector. We staff <strong className="text-brand-navy font-bold">Material Recovery Facilities (MRF)</strong>, <strong className="text-brand-navy font-bold">Transfer Stations</strong>, and <strong className="text-brand-navy font-bold">Scrap Yards</strong> with W-2 personnel trained in <strong className="text-brand-navy font-bold">Lockout/Tagout</strong>, <strong className="text-brand-navy font-bold">PPE protocols</strong>, and <strong className="text-brand-navy font-bold">Hazardous Material identification</strong>. We offer a <strong className="text-brand-navy font-bold">24-hour fill guarantee</strong> for sorters and heavy equipment operators.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Stats Grid (Safety Index) */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Georgia Waste & Recycling Labor Index ({CURRENT_YEAR})</h2>
                        <p className="text-brand-gray">Prioritizing safety to reduce liability and downtime.</p>
                    </div>
                    <FadeIn stagger={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card-standard bg-white border border-slate-200 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper bg-brand-light text-brand-primary">
                                    <Users className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-slate-100 text-brand-navy px-2 py-1 rounded">Wages</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{RECYCLING_SORTER_WAGE}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Avg. Sorter Wage</p>
                            <p className="text-sm text-brand-gray mt-2">Competitive pay for demanding roles.</p>
                        </div>

                        <div className="card-standard bg-white border-2 border-yellow-400 shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-yellow-400 text-brand-navy text-xs font-bold px-2 py-1">SAFETY FOCUS</div>
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper bg-yellow-100 text-yellow-700">
                                    <ShieldAlert className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Incident Rate</span>
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">
                                {RECYCLING_SAFETY_RATE_FNSG} <span className="text-sm font-normal text-slate-500">(vs Industry {RECYCLING_SAFETY_RATE_AVG})</span>
                            </h3>
                            <p className="text-sm font-medium text-brand-secondary">Safety Incident Rate</p>
                            <p className="text-sm text-brand-gray mt-2">Drastically lower risk with FNSG.</p>
                        </div>

                        <div className="card-standard bg-white border border-slate-200 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper bg-brand-light text-brand-primary">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-slate-100 text-brand-navy px-2 py-1 rounded">Stability</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{RECYCLING_RETENTION}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Retention Rate</p>
                            <p className="text-sm text-brand-gray mt-2">Via On-Site Safety Leads.</p>
                        </div>
                    </FadeIn>

                    <div className="mt-8 text-center">
                        <Link href="/data-insights" className="text-brand-primary font-semibold hover:underline inline-flex items-center gap-2">
                            Download {CURRENT_YEAR} Recycling Safety & Wage Report <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Liability Shield */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Mitigating High-Risk Liability</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Recycling is a high-injury sector. We insulate your facility from risk with rigorous training and comprehensive coverage.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-yellow-100 p-1 rounded-full shadow-sm text-yellow-700">
                                        <ShieldAlert className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">OSHA 10/30 Training</h4>
                                        <p className="text-slate-600">Every placement undergoes site-specific safety induction before stepping on the floor.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <Syringe className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Hepatitis B & Tetanus</h4>
                                        <p className="text-slate-600">Vaccination verification via our <Link href="/solutions/workforce-health-screening" className="text-brand-primary underline">Health Screening Network</Link>.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <FileCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Workers&apos; Comp Shield</h4>
                                        <p className="text-slate-600">We carry full liability, protecting your experience modification rate (EMR).</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            {/* Placeholder for visual */}
                            <div className="aspect-square rounded-2xl bg-slate-50 border border-slate-200 p-8 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(234,179,8,0.1)_10px,rgba(234,179,8,0.1)_20px)]"></div>
                                <div className="text-center relative z-10">
                                    <Recycle className="w-24 h-24 text-brand-primary mx-auto mb-4 opacity-80" />
                                    <p className="text-brand-navy font-bold text-xl">Zero-Liability Workforce</p>
                                    <p className="text-sm text-slate-500">Safety First</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational Efficiency */}
            <section className="py-20 bg-brand-light border-y border-brand-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6 text-brand-primary">
                            <Timer className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Operational Efficiency</h2>
                        <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                            Slow sorting lines kill profitability. Our <strong className="text-brand-navy">Bilingual On-Site Leads</strong> manage the line speed and quality control (contamination removal) so your supervisors can focus on plant logistics. We track <strong className="text-brand-navy">Picks-Per-Minute</strong> and attendance in real-time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Roles Table */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Roles & Capabilities</h2>
                        <p className="text-slate-600">Trained personnel ready for high-volume processing.</p>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Role Category</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Safety Certification</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">PPE Standard</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Deployment Speed</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Recycle className="w-4 h-4 text-brand-teal" /> Sort Line Staff
                                    </td>
                                    <td className="p-4 text-slate-600">Sharps Awareness</td>
                                    <td className="p-4 text-slate-600">Puncture-Resistant Gloves</td>
                                    <td className="p-4 text-slate-600">24 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">View Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4 text-brand-teal" /> Baler Operators
                                    </td>
                                    <td className="p-4 text-slate-600">Lockout/Tagout</td>
                                    <td className="p-4 text-slate-600">Steel Toe / Vest / Eye</td>
                                    <td className="p-4 text-slate-600">24-48 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">View Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Truck className="w-4 h-4 text-brand-teal" /> Clamp/Forklift
                                    </td>
                                    <td className="p-4 text-slate-600">OSHA Powered Truck</td>
                                    <td className="p-4 text-slate-600">High-Vis / Hard Hat</td>
                                    <td className="p-4 text-slate-600">24 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">View Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Truck className="w-4 h-4 text-brand-teal" /> Yard Jockeys
                                    </td>
                                    <td className="p-4 text-slate-600">CDL Class A (Yard)</td>
                                    <td className="p-4 text-slate-600">Weather Gear</td>
                                    <td className="p-4 text-slate-600">72 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">View Rates</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="container">
                    <p className="text-center text-sm font-semibold text-brand-gray mb-8 uppercase tracking-wider">Trusted by Industry Leaders</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-primary" /> NWRA Member</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-primary" /> SWANA Member</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><HardHat className="w-5 h-5 text-brand-primary" /> OSHA 30 Certified</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><CheckCircle className="w-5 h-5 text-brand-primary" /> E-Verify</span>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-brand-light/30">
                <div className="container max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Do you provide PPE for recycling sorters?</h3>
                            <p className="text-slate-600">Yes. We ensure all staff arrive with standard PPE (High-vis vests, steel-toe boots, safety glasses). Specialized cut-resistant gloves can be managed via your specific account protocols.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">How do you handle safety training for new recycling staff?</h3>
                            <p className="text-slate-600">We conduct a digital &quot;Hazard Awareness&quot; module covering conveyor safety, lockout/tagout awareness, and biological hazards before they arrive at your MRF.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Can you staff 2nd and 3rd shift sorting lines?</h3>
                            <p className="text-slate-600">Yes. We specialize in 24/7 facility coverage and provide overnight on-site leads to ensure 3rd-shift attendance matches 1st-shift reliability.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="py-20 bg-brand-navy text-white text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">Areas We Serve</h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Supporting waste hubs in <strong className="text-white">Atlanta</strong>, <strong className="text-white">Norcross (Gwinnett)</strong>, <strong className="text-white">Gainesville</strong>, and <strong className="text-white">Savannah Port Area</strong>.
                    </p>
                </div>
            </section>
        </main>
    )
}
