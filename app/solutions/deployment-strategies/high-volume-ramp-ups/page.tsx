import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Rocket, BarChart, Users, Calendar } from 'lucide-react'

export const metadata: Metadata = {
    title: "High-Volume Ramp Ups | Rapid Workforce Deployment",
    description: "Phased deployment strategies for new facility launches and major expansions. Scale from 0 to 100+ workers in 4 weeks.",
}

export default function RampUpsPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-6">
                            <Rocket className="w-4 h-4" />
                            <span>Rapid Deployment</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            High-Volume Ramp Ups
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Rapid Deployment Strategy
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Plan Your Launch
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
                                Launching a new facility requires precision. We utilize a <strong className="text-brand-navy font-bold">Phased Deployment</strong> methodology to scale your workforce from zero to full capacity without sacrificing quality. Our dedicated launch teams coordinate mass interviewing, orientation, and training to meet aggressive go-live dates.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Timeline Graphic */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">4-Week Launch Plan</h2>
                    <div className="relative max-w-5xl mx-auto">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {/* Week 1 */}
                            <FadeIn delay={0.1} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">1</div>
                                <h3 className="font-bold text-brand-navy text-lg mb-2">Leadership</h3>
                                <p className="text-slate-600 text-sm">
                                    Deployment of On-Site Managers and Team Leads. Process mapping and safety audits.
                                </p>
                            </FadeIn>

                            {/* Week 2 */}
                            <FadeIn delay={0.2} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
                                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">2</div>
                                <h3 className="font-bold text-brand-navy text-lg mb-2">Skeleton Crew</h3>
                                <p className="text-slate-600 text-sm">
                                    <strong>20% Capacity.</strong> Core associates deployed for training and initial setup.
                                </p>
                            </FadeIn>

                            {/* Week 3 */}
                            <FadeIn delay={0.3} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
                                <div className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">3</div>
                                <h3 className="font-bold text-brand-navy text-lg mb-2">Mass Onboarding</h3>
                                <p className="text-slate-600 text-sm">
                                    <strong>50% Capacity.</strong> Rapid scaling with daily orientation classes.
                                </p>
                            </FadeIn>

                            {/* Week 4 */}
                            <FadeIn delay={0.4} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
                                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 border-4 border-white shadow-sm">4</div>
                                <h3 className="font-bold text-brand-navy text-lg mb-2">Full Capacity</h3>
                                <p className="text-slate-600 text-sm">
                                    <strong>100% Operational.</strong> Full shifts running with stabilized attendance.
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
