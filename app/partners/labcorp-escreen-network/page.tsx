import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Activity, Clock, MapPin, Smartphone, FileCheck, FlaskConical } from 'lucide-react'

export const metadata: Metadata = {
    title: "Occupational Health Network | Labcorp, eScreen & Concentra",
    description: "Integrated occupational health network with Labcorp, eScreen, and Concentra. 15-minute rapid drug testing (xCup) and nationwide physicals.",
}

export default function LabcorpNetworkPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <Activity className="w-4 h-4" />
                            <span>Integrated Health Network</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Occupational Health Network
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Labcorp, eScreen & Concentra
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/solutions/workforce-health-screening/drug-alcohol-testing" className="btn-primary text-lg px-8 py-4">
                                    Explore Screening Solutions
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
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> utilizes a fully integrated occupational health network partnering with <strong className="text-brand-navy font-bold">Labcorp</strong>, <strong className="text-brand-navy font-bold">eScreen</strong>, and <strong className="text-brand-navy font-bold">Concentra</strong>. We leverage <strong className="text-brand-navy font-bold">Web-Based eCCF</strong> technology for 15-minute rapid reporting (xCup®) while providing extended-hour injury care and physicals through <strong className="text-brand-navy font-bold">Concentra&apos;s</strong> nationwide clinics.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Speed Comparison Data Hook */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Speed Matters</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                In high-volume staffing, waiting 3 days for a drug test result means losing candidates. Our integrated network delivers results in minutes, not days.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-slate-500 mb-2">
                                        <span>Traditional Lab Process</span>
                                        <span>48-72 Hours</span>
                                    </div>
                                    <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-slate-400 w-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-brand-primary mb-2">
                                        <span>FNSG Rapid Network (eScreen)</span>
                                        <span>&lt; 1 Hour</span>
                                    </div>
                                    <div className="h-4 bg-green-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[15%] relative">
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                            <h3 className="text-2xl font-bold text-brand-navy mb-6">Network Capabilities</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0">
                                        <FlaskConical className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-lg">Rapid Testing</h4>
                                        <p className="text-slate-600 text-sm">eCup/xCup technology offering 5, 10, and 12-panel instant screens with automated MRO review.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0">
                                        <Activity className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-lg">Clinical Services</h4>
                                        <p className="text-slate-600 text-sm">Physicals, lift assessments, and injury care via Concentra&apos;s extensive clinic network.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0">
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-lg">mCheck Technology</h4>
                                        <p className="text-slate-600 text-sm">Mobile-first scheduling allowing candidates to choose their nearest clinic location instantly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Map Placeholder / CTA */}
            <section className="py-20 bg-white">
                <div className="container text-center">
                    <div className="max-w-3xl mx-auto">
                        <MapPin className="w-16 h-16 text-brand-primary mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-brand-navy mb-6">Nationwide Coverage</h2>
                        <p className="text-lg text-slate-600 mb-8">
                            With thousands of collection sites across the US, we can support your workforce whether they are local to Georgia or distributed nationally.
                        </p>
                        <Link href="/contact/general-inquiries" className="text-brand-primary font-bold hover:underline text-lg">
                            Find a Collection Site Near You &rarr;
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
