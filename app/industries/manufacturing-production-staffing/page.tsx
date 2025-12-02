import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { MFG_ASSEMBLER_WAGE, MFG_MACHINE_OP_WAGE, MFG_FILL_RATE, MFG_SAFETY_RATE, CURRENT_YEAR } from '@/lib/site-config'
import { Factory, Cog, HardHat, ShieldAlert, Timer, Users, CheckSquare, Shield, Ruler, Box } from 'lucide-react'
import { IntelligenceWidget } from '@/app/components/intelligence-engine/widget'

export const metadata: Metadata = {
    title: "Manufacturing & Production Staffing Georgia | Assembly & Machine Operators",
    description: "Scalable light industrial workforce for Georgia manufacturers. OSHA-trained Assemblers, Machine Operators, and QA Inspectors. Support for Lean & ISO environments.",
}

import { PainPointModal } from '@/app/components/intelligence-engine/pain-point-modal'

export default function ManufacturingProductionStaffingPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Manufacturing Staffing",
        "name": "Light Industrial & Production Workforce",
        "provider": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "knowsAbout": [
                "Lean Manufacturing",
                "Assembly Line Operations",
                "OSHA Safety Standards",
                "ISO 9001 Quality"
            ]
        },
        "areaServed": [
            { "@type": "City", "name": "Atlanta" },
            { "@type": "AdministrativeArea", "name": "Gwinnett County" },
            { "@type": "AdministrativeArea", "name": "Fulton County" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Production Roles",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Assemblers" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Machine Operators" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Quality Control Inspectors" } }
            ]
        },
        "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Plant Managers"
        }
    }

    return (
        <main className="bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            {/* Dark Psychology Modal - Auto Opens */}
            <PainPointModal industry="Manufacturing" />

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Manufacturing & Production Workforce Solutions
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            High-Output Light Industrial Labor | Lean & ISO Support
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Request Production Crew
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
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> delivers skilled, W-2 production talent for Georgia&apos;s manufacturing sector. We specialize in <strong className="text-brand-navy font-bold">Light Industrial Assembly</strong>, <strong className="text-brand-navy font-bold">Machine Operation</strong>, and <strong className="text-brand-navy font-bold">Quality Assurance (QA)</strong>, supporting <strong className="text-brand-navy font-bold">Lean Manufacturing</strong> and <strong className="text-brand-navy font-bold">ISO 9001</strong> environments. All placements undergo mandatory <strong className="text-brand-navy font-bold">OSHA-10 safety induction</strong> and functional dexterity testing to ensure immediate line productivity.
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
                                Optimize Production Labor
                            </h2>
                            <p className="text-lg text-slate-400 mb-8">
                                Input your production targets to receive a custom workforce architecture plan. We analyze shift patterns and skill gaps to propose the optimal headcount mix.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    Shift Coverage Modeling
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    Skill Gap Analysis
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    Safety Incident Risk Assessment
                                </li>
                            </ul>
                        </div>
                        <div>
                            <IntelligenceWidget industry="Manufacturing" defaultLocation="Gwinnett County, GA" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Grid (Metrics) */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Georgia Manufacturing Labor Pulse ({CURRENT_YEAR})</h2>
                        <p className="text-brand-gray">Real-time wage and safety data for production planning.</p>
                    </div>
                    <FadeIn stagger={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card-standard bg-white border border-slate-200 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper bg-brand-light text-brand-primary">
                                    <Cog className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-slate-100 text-brand-navy px-2 py-1 rounded">Wages</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{MFG_ASSEMBLER_WAGE}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Avg. Assembler Wage</p>
                            <p className="text-sm text-brand-gray mt-2">Competitive rates for skilled hands.</p>
                        </div>

                        <div className="card-standard bg-white border border-slate-200 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper bg-brand-light text-brand-primary">
                                    <Factory className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-slate-100 text-brand-navy px-2 py-1 rounded">Skilled</span>
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">{MFG_MACHINE_OP_WAGE}</h3>
                            <p className="text-sm font-medium text-brand-secondary">Avg. Machine Op Wage</p>
                            <p className="text-sm text-brand-gray mt-2">CNC & Press Brake operators.</p>
                        </div>

                        <div className="card-standard bg-white border border-slate-200 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="icon-wrapper bg-brand-light text-brand-primary">
                                    <ShieldAlert className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold bg-slate-100 text-brand-navy px-2 py-1 rounded">Safety</span>
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">
                                {MFG_SAFETY_RATE} <span className="text-sm font-normal text-slate-500">(FNSG Placements)</span>
                            </h3>
                            <p className="text-sm font-medium text-brand-secondary">Safety Incident Rate</p>
                            <p className="text-sm text-brand-gray mt-2">Rigorous OSHA induction pays off.</p>
                        </div>
                    </FadeIn>

                    <div className="mt-8 text-center">
                        <Link href="/data-insights" className="text-brand-primary font-semibold hover:underline inline-flex items-center gap-2">
                            Download {CURRENT_YEAR} Manufacturing Wage & Output Report <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Production Continuity & Lean Staffing */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Production Continuity & Lean Staffing</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                In a <strong className="text-brand-navy">Just-In-Time (JIT)</strong> environment, a missing operator stops the whole line. We support your production targets via:
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <Timer className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Shift Staggering</h4>
                                        <p className="text-slate-600">Managing shift handoffs to eliminate downtime gaps.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">Skill Gapping</h4>
                                        <p className="text-slate-600">Providing cross-trained staff who can move between packaging and assembly.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-light p-1 rounded-full shadow-sm text-brand-teal">
                                        <CheckSquare className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy">On-Site Management</h4>
                                        <p className="text-slate-600">Our leads track <strong className="text-brand-navy">Units Per Man Hour (UPMH)</strong> to ensure temporary staff match your core team&apos;s output.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            {/* Placeholder for visual */}
                            <div className="aspect-square rounded-2xl bg-slate-100 border border-slate-200 p-8 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-no-repeat animate-[shimmer_2s_infinite]"></div>
                                <div className="text-center relative z-10">
                                    <Factory className="w-24 h-24 text-brand-primary mx-auto mb-4 opacity-80" />
                                    <p className="text-brand-navy font-bold text-xl">Lean Manufacturing Ready</p>
                                    <p className="text-sm text-slate-500">JIT & ISO Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety Integration */}
            <section className="py-20 bg-brand-light border-y border-brand-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6 text-brand-primary">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Protecting Your EMR</h2>
                        <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                            Manufacturing carries physical risk. We shield your liability by conducting <Link href="/solutions/workforce-health-screening" className="text-brand-primary font-semibold hover:underline">Pre-Assignment Drug Screening</Link> (10-Panel) and providing comprehensive PPE compliance checks (Steel-toe, Eye Protection, Ear Plugs) before staff enter the floor.
                        </p>
                    </div>
                </div>
            </section>

            {/* Roles Table */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Roles & Capabilities</h2>
                        <p className="text-slate-600">Skilled operators ready for immediate deployment.</p>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Role Category</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Skill Level</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">PPE Standard</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Deployment Speed</th>
                                    <th className="p-4 font-bold text-brand-navy border-b border-slate-200">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Cog className="w-4 h-4 text-brand-teal" /> General Assembly
                                    </td>
                                    <td className="p-4 text-slate-600">Dexterity Tested</td>
                                    <td className="p-4 text-slate-600">Safety Glasses/ESD</td>
                                    <td className="p-4 text-slate-600">24 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Factory className="w-4 h-4 text-brand-teal" /> Machine Operators
                                    </td>
                                    <td className="p-4 text-slate-600">CNC / Press Brake</td>
                                    <td className="p-4 text-slate-600">Steel Toe / Metatarsal</td>
                                    <td className="p-4 text-slate-600">48-72 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Ruler className="w-4 h-4 text-brand-teal" /> QA Inspectors
                                    </td>
                                    <td className="p-4 text-slate-600">Caliper / Micrometer</td>
                                    <td className="p-4 text-slate-600">Lab Coat / Vision</td>
                                    <td className="p-4 text-slate-600">48 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-brand-navy flex items-center gap-2">
                                        <Box className="w-4 h-4 text-brand-teal" /> Packaging / Kitting
                                    </td>
                                    <td className="p-4 text-slate-600">High-Speed Line</td>
                                    <td className="p-4 text-slate-600">Standard PPE</td>
                                    <td className="p-4 text-slate-600">24 Hours</td>
                                    <td className="p-4"><Link href="/contact" className="text-brand-primary font-medium hover:underline">Check Rates</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Quality Control & ISO */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-brand-navy mb-6">Quality Control & ISO Alignment</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Temporary staff often cause quality defects. We mitigate this by screening for <strong className="text-brand-navy">Attention to Detail</strong> and <strong className="text-brand-navy">ISO Awareness</strong>. Our candidates understand the importance of Standard Operating Procedures (SOPs) and &quot;Stop the Line&quot; authority protocols.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><HardHat className="w-5 h-5 text-brand-primary" /> OSHA 30 Certified</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><Factory className="w-5 h-5 text-brand-primary" /> NAM Member</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><CheckSquare className="w-5 h-5 text-brand-primary" /> ISO 9001 Aware</span>
                        <span className="font-bold text-xl text-brand-navy flex items-center gap-2"><Shield className="w-5 h-5 text-brand-primary" /> Georgia Safety Council</span>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Do you staff for 2nd and 3rd shift production?</h3>
                            <p className="text-slate-600">Yes. We specialize in multi-shift coverage. We recruit specifically for &quot;Night Shift Preference&quot; candidates to ensure long-term retention on 2nd and 3rd shifts.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Are your workers trained in Lockout/Tagout (LOTO)?</h3>
                            <p className="text-slate-600">We provide &quot;Affected Employee&quot; LOTO awareness training. Authorized Employee training (applying locks) must be conducted on-site by your safety team to match your specific machinery.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Can you handle seasonal production ramp-ups?</h3>
                            <p className="text-slate-600">Absolutely. We use a &quot;Flexible Cell&quot; staffing model to rapidly scale headcount up or down by 20-50 workers based on your production forecasts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="py-20 bg-brand-navy text-white text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">Areas We Serve</h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Supporting industrial zones in: <strong className="text-white">Norcross (Gwinnett)</strong>, <strong className="text-white">Alpharetta Tech Corridor</strong>, <strong className="text-white">Fulton Industrial</strong>, and <strong className="text-white">Gainesville Production Hubs</strong>.
                    </p>
                </div>
            </section>
        </main>
    )
}
