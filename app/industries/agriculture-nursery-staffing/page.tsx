import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { AG_WAGE_RATE, AG_FILL_RATE, CURRENT_YEAR } from '@/lib/site-config'
import { DollarSign, Timer, ShieldCheck, Check, Tractor, Sprout, Users, Leaf } from 'lucide-react'

export const metadata: Metadata = {
    title: "Agriculture & Nursery Staffing Georgia | Licensed Farm Labor Contractor (FLC)",
    description: "Licensed NAICS 115115 Farm Labor Contractor staffing for Georgia Nurseries & Farms. MSPA & H-2A compliant seasonal crews, tractor drivers, and harvesters. W-2 & Insured.",
}

export default function AgricultureNurseryStaffingPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Agricultural Staffing",
        "name": "Farm Labor Contracting & Nursery Staffing",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "naics": "115115",
            "knowsAbout": [
                "Farm Labor Contractor (FLC)",
                "Migrant and Seasonal Agricultural Worker Protection Act (MSPA)",
                "H-2A Compliance",
                "OSHA Field Sanitation"
            ]
        },
        "areaServed": [
            { "@type": "State", "name": "Georgia" },
            { "@type": "AdministrativeArea", "name": "Hall County" },
            { "@type": "City", "name": "Tifton" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Agricultural Roles",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nursery Workers" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tractor Drivers" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Farm Crew Leaders" } }
            ]
        },
        "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Farm Owners & Nursery Managers"
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
                            Agriculture, Nursery & Seasonal Farm Labor Solutions
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Licensed FLC Services | NAICS 115115
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Request Seasonal Crew
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
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> is a registered <strong className="text-brand-navy font-bold">Farm Labor Contractor (FLC)</strong> (NAICS 115115) serving Georgia&apos;s commercial agriculture and nursery sectors. We provide compliant, W-2 seasonal workforces for <strong className="text-brand-navy font-bold">greenhouse operations</strong>, <strong className="text-brand-navy font-bold">harvesting</strong>, and <strong className="text-brand-navy font-bold">planting seasons</strong>. We manage strict adherence to the <strong className="text-brand-navy font-bold">Migrant and Seasonal Agricultural Worker Protection Act (MSPA)</strong>, ensuring zero liability for our clients regarding payroll, transportation, and field sanitation standards.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Stats Grid (Data Link Bait) */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Georgia Agricultural Labor Index ({CURRENT_YEAR})</h2>
                        <p className="text-brand-gray">Real-time market data for informed hiring decisions.</p>
                    </div>
                    <FadeIn stagger={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card-standard">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-brand-light text-brand-navy px-2 py-1 rounded">GA Est.</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{AG_WAGE_RATE}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Adverse Effect Wage Rate (AEWR)</p>
                            <p className="text-sm text-brand-gray mt-2">Competitive baseline for H-2A & domestic roles.</p>
                        </div>

                        <div className="card-standard">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper">
                                    <Timer className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-brand-light text-brand-navy px-2 py-1 rounded">Speed</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{AG_FILL_RATE}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Seasonal Fill-Rate</p>
                            <p className="text-sm text-brand-gray mt-2">Deployment within 72h of request.</p>
                        </div>

                        <div className="card-standard">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-brand-light text-brand-navy px-2 py-1 rounded">DOL/MSPA</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">100%</h3>
                            <p className="text-sm font-medium text-brand-secondary">Compliance Audit Score</p>
                            <p className="text-sm text-brand-gray mt-2">Zero liability for field sanitation & payroll.</p>
                        </div>
                    </FadeIn>

                    <div className="mt-8 text-center">
                        <Link href="/data-insights" className="text-brand-primary font-semibold hover:underline inline-flex items-center gap-2">
                            Download {CURRENT_YEAR} H-2A & Domestic Ag Wage Guide <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Compliance Section */}
            <section className="py-20 bg-brand-light">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Mitigating DOL & MSPA Liability</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Agricultural labor is heavily regulated. Hiring an unlicensed contractor puts your land and license at risk. We protect your operation with full federal compliance.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-white p-1 rounded-full shadow-sm text-brand-teal">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Federal FLC Registration</h4>
                                        <p className="text-slate-600">Fully licensed with the U.S. Department of Labor for recruitment and employment.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-white p-1 rounded-full shadow-sm text-brand-teal">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">MSPA Compliance</h4>
                                        <p className="text-slate-600">We handle all disclosures, wage statements, and record-keeping requirements.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-white p-1 rounded-full shadow-sm text-brand-teal">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Field Sanitation</h4>
                                        <p className="text-slate-600">We ensure crews have OSHA-mandated access to water, shade, and hygiene facilities.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            {/* Placeholder for visual - using a styled div for now */}
                            <div className="aspect-square rounded-2xl bg-brand-navy/5 p-8 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-brand-primary/5"></div>
                                <div className="text-center relative z-10">
                                    <ShieldCheck className="w-24 h-24 text-brand-teal mx-auto mb-4 opacity-80" />
                                    <p className="text-brand-navy font-bold text-xl">Zero Liability Guarantee</p>
                                    <p className="text-sm text-slate-500">Insured & Bonded</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipment Safety Integration */}
            <section className="py-20">
                <div className="container">
                    <div className="bg-brand-navy rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8">
                        <div className="p-4 bg-white/10 rounded-full">
                            <Tractor className="w-12 h-12 text-brand-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">Heavy Equipment & Safety</h3>
                            <p className="text-slate-300">
                                For Tractor Drivers and Equipment Operators, we utilize our <Link href="/solutions/workforce-health-screening" className="text-brand-primary hover:text-white underline decoration-brand-primary underline-offset-4 transition-colors">Workforce Health Screening</Link> network to conduct <strong>DOT-equivalent drug screens</strong> and physicals to ensure safe operation of heavy farm machinery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Table */}
            <section className="py-20">
                <div className="container">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Roles & Capabilities</h2>
                        <p className="text-slate-600">Scalable workforce solutions tailored to the agricultural cycle.</p>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-brand-gray/20 shadow-sm">
                        <table className="w-full text-left border-collapse bg-white">
                            <thead className="bg-brand-light">
                                <tr>
                                    <th className="p-4 font-bold text-brand-navy border-b border-brand-gray/20">Role Category</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-brand-gray/20">Skill Level</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-brand-gray/20">Seasonality</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-brand-gray/20">Compliance Focus</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-brand-gray/20">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-gray/10">
                                <tr className="hover:bg-brand-light/50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Sprout className="w-4 h-4 text-brand-teal" /> Nursery / Greenhouse
                                    </td>
                                    <td className="p-4 text-slate-600">Potting/Pruning</td>
                                    <td className="p-4 text-slate-600">Year-Round/Spring</td>
                                    <td className="p-4 text-slate-600">PPE (Pesticide)</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-brand-light/50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Leaf className="w-4 h-4 text-brand-teal" /> Farm Labor / Harvesters
                                    </td>
                                    <td className="p-4 text-slate-600">Field Manual Labor</td>
                                    <td className="p-4 text-slate-600">Peak Harvest</td>
                                    <td className="p-4 text-slate-600">MSPA / Hydration</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-brand-light/50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Tractor className="w-4 h-4 text-brand-teal" /> Tractor/Equipment
                                    </td>
                                    <td className="p-4 text-slate-600">Heavy Machinery Exp</td>
                                    <td className="p-4 text-slate-600">Seasonal</td>
                                    <td className="p-4 text-slate-600">Drug Screen</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-brand-light/50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Users className="w-4 h-4 text-brand-teal" /> Crew Leaders
                                    </td>
                                    <td className="p-4 text-slate-600">Bilingual / Supervisor</td>
                                    <td className="p-4 text-slate-600">All Seasons</td>
                                    <td className="p-4 text-slate-600">Timekeeping</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* H-2A Section */}
            <section className="py-20 bg-brand-light/30">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-brand-navy mb-6">H-2A & Seasonal Support</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Whether you use the <strong>H-2A Visa program</strong> or rely on domestic seasonal labor, we function as your compliance arm. We can manage the recruitment of domestic workers required during the &quot;50% rule&quot; period of H-2A contracts to ensure you remain compliant with DOL regulations.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-brand-navy">
                        <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-brand-teal" /> U.S. DOL Licensed FLC
                        </span>
                        <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 flex items-center gap-2">
                            <Check className="w-4 h-4 text-brand-teal" /> Georgia Agribusiness Council Member
                        </span>
                        <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 flex items-center gap-2">
                            <Check className="w-4 h-4 text-brand-teal" /> OSHA Field Sanitation Certified
                        </span>
                        <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 flex items-center gap-2">
                            <Check className="w-4 h-4 text-brand-teal" /> E-Verify
                        </span>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20">
                <div className="container max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Are you a licensed Farm Labor Contractor (FLC)?</h3>
                            <p className="text-slate-600">Yes. First National Staffing Group holds a valid Certificate of Registration as a Farm Labor Contractor with the U.S. Department of Labor, authorized for recruitment, employment, and transportation (if applicable).</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Do you provide transportation for crew members?</h3>
                            <p className="text-slate-600">Yes, upon request. All vehicles and drivers meet federal MSPA insurance and safety standards for transporting migrant and seasonal agricultural workers.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">How do you handle payroll for seasonal harvest workers?</h3>
                            <p className="text-slate-600">We manage weekly W-2 payroll with itemized deductions strictly adhering to MSPA requirements, protecting you from wage and hour lawsuits.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="py-20 bg-brand-navy text-white text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">Areas We Serve</h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Serving Georgia&apos;s Ag Belts: <strong className="text-white">South Georgia (Valdosta/Tifton)</strong>, <strong className="text-white">Hall County (Poultry/Processing)</strong>, and <strong className="text-white">Metro Atlanta Nurseries</strong>.
                    </p>
                </div>
            </section>
        </main>
    )
}
