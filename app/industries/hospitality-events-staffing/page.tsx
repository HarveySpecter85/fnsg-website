import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { HOSPITALITY_WAGE, HOSPITALITY_TURNOVER_FNSG, HOSPITALITY_CLEANING_TIME, CURRENT_YEAR } from '@/lib/site-config'
import { BedDouble, Utensils, Shirt, Clock, ShieldCheck, Check, Users, Hotel, CalendarCheck } from 'lucide-react'

export const metadata: Metadata = {
    title: "Hospitality & Event Staffing Georgia | 98% Shift Fulfillment Rate",
    description: "Staffing for Hotels, Resorts, and Venues in Atlanta. Housekeeping, Banquet, and Kitchen staff with 24h replacement guarantee. Fully insured & W-2 compliant.",
}

export default function HospitalityEventsStaffingPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Hospitality Staffing",
        "name": "Hotel & Event Workforce Solutions",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "knowsAbout": [
                "Housekeeping Efficiency",
                "Banquet Operations",
                "Guest Service Gold",
                "AHLA Standards"
            ]
        },
        "areaServed": [
            { "@type": "City", "name": "Atlanta" },
            { "@type": "City", "name": "Savannah" },
            { "@type": "AdministrativeArea", "name": "Fulton County" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Hospitality Roles",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Room Attendants (Housekeeping)" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Banquet Servers" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dishwashers / Stewards" } }
            ]
        },
        "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Hotel General Managers"
        }
    }

    return (
        <main className="bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-brand-light/20">
                <div className="container">
                    <div className="max-w-4xl">
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Hospitality & Event Staffing Solutions
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            High-Volume Workforce for Georgia Venues | 98% Shift Fulfillment
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Request Staffing Rates
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
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> provides scalable, W-2 hospitality talent for Georgia&apos;s hotel and event sector. We specialize in <strong className="text-brand-navy font-bold">Housekeeping (Rooms)</strong>, <strong className="text-brand-navy font-bold">Banquet Operations</strong>, and <strong className="text-brand-navy font-bold">Back-of-House Support</strong>, offering a <strong className="text-brand-navy font-bold">30-minute response time</strong> for urgent coverage and <strong className="text-brand-navy font-bold">100% liability insurance</strong>. Our teams are pre-screened for guest service etiquette and uniform compliance.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Stats Grid (Metrics) */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Atlanta Hospitality Labor Metrics ({CURRENT_YEAR})</h2>
                        <p className="text-brand-gray">Optimizing cost and quality for high-end venues.</p>
                    </div>
                    <FadeIn stagger={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card-standard">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper">
                                    <BedDouble className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-brand-light text-brand-navy px-2 py-1 rounded">Avg. Wage</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{HOSPITALITY_WAGE}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Avg. Housekeeper Wage</p>
                            <p className="text-sm text-brand-gray mt-2">Competitive rates for quality staff.</p>
                        </div>

                        <div className="card-standard">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper">
                                    <Users className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-brand-light text-brand-navy px-2 py-1 rounded">Retention</span>
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">
                                {HOSPITALITY_TURNOVER_FNSG} <span className="text-sm font-normal text-slate-500">(vs Industry 73%)</span>
                            </h3>
                            <p className="text-sm font-medium text-brand-secondary">Turnover Rate</p>
                            <p className="text-sm text-brand-gray mt-2">Consistent teams build better guest experiences.</p>
                        </div>

                        <div className="card-standard">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-brand-light text-brand-navy px-2 py-1 rounded">Efficiency</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{HOSPITALITY_CLEANING_TIME}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Avg. Room Cleaning Time</p>
                            <p className="text-sm text-brand-gray mt-2">Meeting MPOR targets consistently.</p>
                        </div>
                    </FadeIn>

                    <div className="mt-8 text-center">
                        <Link href="/data-insights" className="text-brand-primary font-semibold hover:underline inline-flex items-center gap-2">
                            Download {CURRENT_YEAR} Hospitality Wage & Labor Report <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* MPOR Efficiency Model */}
            <section className="py-20 bg-brand-gray/5 border-y border-slate-100">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">The &quot;MPOR&quot; Efficiency Model</h2>
                        <p className="text-xl text-slate-600">We don&apos;t just send bodies; we optimize <strong className="text-brand-navy">Minutes Per Occupied Room (MPOR)</strong>.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Monitor Pace</h3>
                            <p className="text-slate-600">Our on-site leads ensure standard room cleaning times are met consistently.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                                <Check className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Inspect Quality</h3>
                            <p className="text-slate-600">Conducting random 10-point cleanliness checks to maintain brand standards.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                                <CalendarCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Manage Attendance</h3>
                            <p className="text-slate-600">Covering call-outs instantly from our standby pool to ensure 100% fulfillment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risk & Liability Management */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Risk & Liability Management</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Hospitality creates high liability (slip-and-falls, theft). We insulate your property with comprehensive coverage and rigorous vetting.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Bonded & Insured</h4>
                                        <p className="text-slate-600">Comprehensive coverage for theft and damage to property.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Background Checks</h4>
                                        <p className="text-slate-600">7-year criminal history check for all guest-facing staff.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Chemical Safety</h4>
                                        <p className="text-slate-600">Training on SDS and bloodborne pathogens for housekeeping staff.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            {/* Placeholder for visual */}
                            <div className="aspect-square rounded-2xl bg-brand-navy/5 p-8 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-light to-white opacity-80"></div>
                                <div className="text-center relative z-10">
                                    <Hotel className="w-24 h-24 text-brand-primary mx-auto mb-4 opacity-80" />
                                    <p className="text-brand-navy font-bold text-xl">Guest Experience Protection</p>
                                    <p className="text-sm text-slate-500">Insured & Vetted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roles Table */}
            <section className="py-20 bg-brand-light/20">
                <div className="container">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Roles & Capabilities</h2>
                        <p className="text-slate-600">Professional staff ready to represent your brand.</p>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-brand-light/50">
                                <tr>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Role Category</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Experience Standard</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Uniform Ready</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Deployment Speed</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <BedDouble className="w-4 h-4 text-brand-teal" /> Housekeeping
                                    </td>
                                    <td className="p-4 text-slate-600">30-min Turnaround</td>
                                    <td className="p-4 text-slate-600">Black/Black or Scrub</td>
                                    <td className="p-4 text-slate-600">24 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">View Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Utensils className="w-4 h-4 text-brand-teal" /> Banquet Servers
                                    </td>
                                    <td className="p-4 text-slate-600">Tray Service Trained</td>
                                    <td className="p-4 text-slate-600">Bistro/Formal</td>
                                    <td className="p-4 text-slate-600">48 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">View Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Shirt className="w-4 h-4 text-brand-teal" /> Dish/Utility
                                    </td>
                                    <td className="p-4 text-slate-600">High-Volume</td>
                                    <td className="p-4 text-slate-600">Non-Slip Shoes</td>
                                    <td className="p-4 text-slate-600">12-24 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">View Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Users className="w-4 h-4 text-brand-teal" /> Event Setup
                                    </td>
                                    <td className="p-4 text-slate-600">Heavy Lifting</td>
                                    <td className="p-4 text-slate-600">Polo/Khaki</td>
                                    <td className="p-4 text-slate-600">24 Hours</td>
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
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><Check className="w-5 h-5 text-brand-primary" /> AHLA Member</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><Check className="w-5 h-5 text-brand-primary" /> ServSafe Certified</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><Check className="w-5 h-5 text-brand-primary" /> E-Verify</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><Check className="w-5 h-5 text-brand-primary" /> Best of Staffing 2025</span>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-brand-light/30">
                <div className="container max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">How do you handle call-outs for large banquet events?</h3>
                            <p className="text-slate-600">We over-recruit by 10% for events over 50 staff (our &quot;Standby Buffer&quot;) to ensure you never have a gap in service, at no extra cost to you.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Are your housekeepers trained on specific brand standards?</h3>
                            <p className="text-slate-600">Yes. We tailor orientation to your brand (Marriott, Hilton, IHG standards) focusing on bed-making, amenity placement, and &quot;Do Not Disturb&quot; protocols.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Do you provide uniforms for banquet staff?</h3>
                            <p className="text-slate-600">We ensure staff arrive in standard bistro attire (black pants, black shoes, white/black button-down). Specialized uniforms can be managed through our on-site lead.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="py-20 bg-brand-navy text-white text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">Areas We Serve</h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Serving major hospitality corridors: <strong className="text-white">Downtown Atlanta (Convention District)</strong>, <strong className="text-white">Buckhead</strong>, <strong className="text-white">Alpharetta</strong>, and <strong className="text-white">Savannah Resorts</strong>.
                    </p>
                </div>
            </section>
        </main>
    )
}
