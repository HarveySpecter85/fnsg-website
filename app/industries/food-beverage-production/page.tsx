import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { FOOD_MIXER_RATE, FOOD_FILL_TIME, FOOD_RETENTION_RATE, COST_OF_VACANCY, CURRENT_YEAR } from '@/lib/site-config'
import { ChefHat, Timer, Users, ShieldCheck, Check, AlertTriangle, ArrowRight, ClipboardCheck } from 'lucide-react'

export const metadata: Metadata = {
    title: "GMP-Compliant Food Production Staffing Georgia | 98% Audit Score",
    description: "Secure W-2 mixers, packers, and sanitation crews in Atlanta. 100% GMP & Allergen trained. 24h fill guarantee. Reduce liability with First National Staffing.",
}

export default function FoodBeverageProductionPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Food Production Staffing",
        "name": "GMP Compliant Bakery & Food Staffing",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "knowsAbout": ["GMP Compliance", "HACCP", "Food Safety Audits", "AIB Standards"]
        },
        "areaServed": [
            { "@type": "City", "name": "Atlanta" },
            { "@type": "City", "name": "Gainesville" },
            { "@type": "AdministrativeArea", "name": "Hall County" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Production Roles",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Bakers & Mixers" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sanitation & Hygiene Crew" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cold Storage Forklift Operators" } }
            ]
        },
        "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Food Plant Managers"
        }
    }

    return (
        <main className="bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-brand-light/30">
                <div className="container">
                    <div className="max-w-4xl">
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Food Production & Bakery Staffing in Georgia
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Audit-Ready Workforce Solutions | GMP Compliant
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Request Rates & Availability
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
                        <div className="bg-brand-light border-l-8 border-brand-primary p-8 md:p-12 rounded-r-xl shadow-sm">
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                                <strong className="text-brand-navy font-bold">First National Staffing</strong> provides GMP-certified, W-2 production talent for Georgia&apos;s food & beverage sector. We specialize in <strong className="text-brand-navy font-bold">high-volume bakery</strong>, <strong className="text-brand-navy font-bold">meat processing</strong>, and <strong className="text-brand-navy font-bold">bottling operations</strong>, offering a <strong className="text-brand-navy font-bold">24-hour fill guarantee</strong> and 100% indemnification against compliance risks. All staff are pre-vetted for HACCP awareness and allergen control.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Stats Grid (Market Pulse) */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Atlanta Market Pulse (Q4 {CURRENT_YEAR})</h2>
                        <p className="text-brand-gray">Real-time market data for informed hiring decisions.</p>
                    </div>
                    <FadeIn stagger={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card-standard">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper">
                                    <ChefHat className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-brand-light text-brand-navy px-2 py-1 rounded">Avg. Rate</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{FOOD_MIXER_RATE}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Avg. Mixer Hourly Rate</p>
                            <p className="text-sm text-brand-gray mt-2">Competitive baseline for skilled roles.</p>
                        </div>

                        <div className="card-standard">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper">
                                    <Timer className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-brand-light text-brand-navy px-2 py-1 rounded">Speed</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{FOOD_FILL_TIME}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Time-to-Fill</p>
                            <p className="text-sm text-brand-gray mt-2">Market Avg: 5 Days. We deliver in hours.</p>
                        </div>

                        <div className="card-standard">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper">
                                    <Users className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-brand-light text-brand-navy px-2 py-1 rounded">Retention</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{FOOD_RETENTION_RATE}</h3>
                            <p className="text-sm font-medium text-brand-secondary">90-Day Retention Rate</p>
                            <p className="text-sm text-brand-gray mt-2">Consistent crews for consistent quality.</p>
                        </div>
                    </FadeIn>

                    <div className="mt-8 text-center">
                        <Link href="/data-insights" className="text-brand-primary font-semibold hover:underline inline-flex items-center gap-2">
                            Download {CURRENT_YEAR} Georgia Food Production Wage Guide <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Cost of Vacancy Section */}
            <section className="py-20 bg-brand-primary/5">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6 text-brand-primary">
                            <AlertTriangle className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">The Cost of Vacancy</h2>
                        <p className="text-xl md:text-2xl text-brand-navy font-medium mb-8 leading-relaxed">
                            A stopped packaging line costs an average of <span className="text-brand-primary font-bold bg-white px-2 py-1 rounded shadow-sm">{COST_OF_VACANCY}</span> in lost throughput.
                        </p>
                        <p className="text-lg text-slate-600 mb-10">
                            Our <strong>&quot;Hot-Standby&quot; program</strong> ensures you have backup packers ready to deploy within 60 minutes of a call-out, protecting your yield and delivery timelines.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Activate Hot-Standby Program
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mitigating Food Safety Risk */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Mitigating Food Safety Risk</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Don&apos;t let temporary labor fail your SQF or BRC audit. We integrate directly with your QA team to ensure full compliance.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">GMP Adherence</h4>
                                        <p className="text-slate-600">Zero jewelry, proper hairnets, hand-washing protocols enforced before arrival.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Traceability</h4>
                                        <p className="text-slate-600">All workers trained on lot coding and batch tracking procedures.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Sanitation</h4>
                                        <p className="text-slate-600">Specialized crews for overnight deep-clean (COP/CIP support).</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            {/* Placeholder for visual */}
                            <div className="aspect-square rounded-2xl bg-brand-light border border-slate-100 p-8 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-brand-light to-slate-100 opacity-50"></div>
                                <div className="text-center relative z-10">
                                    <ClipboardCheck className="w-24 h-24 text-brand-primary mx-auto mb-4 opacity-80" />
                                    <p className="text-brand-navy font-bold text-xl">Audit-Ready Staff</p>
                                    <p className="text-sm text-slate-500">SQF & BRC Compliant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Table */}
            <section className="py-20 bg-brand-light/30">
                <div className="container">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Roles & Capabilities</h2>
                        <p className="text-slate-600">Specialized talent for every stage of production.</p>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-brand-gray/20 shadow-sm bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-brand-light">
                                <tr>
                                    <th className="p-4 font-bold text-brand-navy border-b border-brand-gray/20">Role Category</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-brand-gray/20">Certification Level</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-brand-gray/20">Shift Availability</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-brand-gray/20">Avg. Fill Time</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-brand-gray/20">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-gray/10">
                                <tr className="hover:bg-brand-light/50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy">Industrial Mixers</td>
                                    <td className="p-4 text-slate-600">Batch Record Trained</td>
                                    <td className="p-4 text-slate-600">1st / 2nd / 3rd</td>
                                    <td className="p-4 text-slate-600">48 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-brand-light/50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy">Packaging Line</td>
                                    <td className="p-4 text-slate-600">High-Speed / GMP</td>
                                    <td className="p-4 text-slate-600">Scalable (10-50+)</td>
                                    <td className="p-4 text-slate-600">24 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-brand-light/50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy">Sanitation Crew</td>
                                    <td className="p-4 text-slate-600">Chemical Safety (SDS)</td>
                                    <td className="p-4 text-slate-600">Overnight / Weekends</td>
                                    <td className="p-4 text-slate-600">24 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-brand-light/50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy">QA Techs</td>
                                    <td className="p-4 text-slate-600">HACCP Aware</td>
                                    <td className="p-4 text-slate-600">All Shifts</td>
                                    <td className="p-4 text-slate-600">72 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
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
                        {/* Text placeholders for logos as per instructions */}
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><Check className="w-5 h-5 text-brand-primary" /> OSHA 30</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><Check className="w-5 h-5 text-brand-primary" /> AIB International</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><Check className="w-5 h-5 text-brand-primary" /> American Staffing Association</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><Check className="w-5 h-5 text-brand-primary" /> E-Verify</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><Check className="w-5 h-5 text-brand-primary" /> Georgia Safety Council</span>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-brand-light">
                <div className="container max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Are your temporary staff trained in GMP and Allergen control?</h3>
                            <p className="text-slate-600">Yes. Every candidate undergoes a mandatory Food Safety Orientation covering GMPs, Allergen Awareness, and Personal Hygiene before entering your facility.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Do you provide staffing for refrigerated or cold-storage environments?</h3>
                            <p className="text-slate-600">Yes. We supply equipping and PPE-ready staff for cold chain, freezer, and refrigerated production environments across Atlanta and Gainesville.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">How do you handle high-volume seasonal spikes for holidays?</h3>
                            <p className="text-slate-600">We utilize a &quot;Roster Management&quot; system, pre-screening hundreds of candidates 4 weeks prior to peak seasons (Thanksgiving/Christmas) to guarantee 100% line coverage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Area */}
            <section className="py-20 bg-brand-navy text-white text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">Service Area</h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Serving major food hubs in: <strong className="text-white">Atlanta (Fulton)</strong>, <strong className="text-white">Gainesville (Hall - Poultry Capital)</strong>, <strong className="text-white">Norcross (Gwinnett)</strong>, and <strong className="text-white">Savannah</strong>.
                    </p>
                </div>
            </section>
        </main>
    )
}
