import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { ShieldCheck, Award, GraduationCap, HardHat, TrendingDown, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: "Safety Alliances & Certifications | OSHA & NSC Partners",
    description: "Verified risk management. We align with OSHA standards and maintain active memberships with the National Safety Council (NSC) and American Staffing Association (ASA).",
}

export default function SafetyCertificationsPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Verified Safety Partners</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Safety Alliances & Certifications
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Verified Risk Management
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/risk-compliance/safety-training-protocols" className="btn-primary text-lg px-8 py-4">
                                    View Safety Protocols
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
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> aligns with leading safety organizations to protect your workforce. We align our protocols with <strong className="text-brand-navy font-bold">OSHA General Industry Standards (1910)</strong> and maintain active memberships with the <strong className="text-brand-navy font-bold">National Safety Council (NSC)</strong> and the <strong className="text-brand-navy font-bold">American Staffing Association (ASA)</strong>.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Trust Wall / Alliances */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Strategic Alliances</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Lanier Tech */}
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex items-start gap-6">
                            <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                <GraduationCap className="w-8 h-8 text-slate-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-navy mb-2">Lanier Technical College</h3>
                                <p className="text-slate-600">
                                    Strategic Partnership for specialized industrial skills training and safety certification. We leverage their resources to upskill our workforce.
                                </p>
                            </div>
                        </FadeIn>

                        {/* NSC */}
                        <FadeIn delay={0.2} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex items-start gap-6">
                            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-8 h-8 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-navy mb-2">National Safety Council</h3>
                                <p className="text-slate-600">
                                    Active Member Organization. We utilize NSC resources to keep our safety manuals and training modules current with national best practices.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Drug Free */}
                        <FadeIn delay={0.3} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex items-start gap-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                <CheckCircle className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-navy mb-2">Drug-Free Workplace</h3>
                                <p className="text-slate-600">
                                    State of Georgia Certified. Our rigorous testing protocols qualify our clients for the 7.5% Workers&apos; Compensation premium credit.
                                </p>
                            </div>
                        </FadeIn>

                        {/* OSHA */}
                        <FadeIn delay={0.4} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex items-start gap-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                                <HardHat className="w-8 h-8 text-orange-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-navy mb-2">OSHA 10/30 Trainers</h3>
                                <p className="text-slate-600">
                                    In-house authorized trainers capable of delivering OSHA 10 and 30-hour General Industry outreach courses to key personnel.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Financial Impact */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary rounded-full mb-6 text-white">
                        <TrendingDown className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-brand-navy mb-6">Impact on TRIR</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Our commitment to these alliances isn&apos;t just for show. It directly translates to a lower Total Recordable Incident Rate (TRIR) for our clients, reducing insurance premiums and protecting your bottom line.
                    </p>
                </div>
            </section>
        </main>
    )
}
