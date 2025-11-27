import type { Metadata } from 'next'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { HeartPulse, CalendarClock, Ban } from 'lucide-react'

export const metadata: Metadata = {
    title: "ACA Benefits Management | Affordable Care Act Compliance",
    description: "First National Staffing Group manages ACA compliance, Look-Back Measurement, and benefits administration, shielding clients from ESRP penalties.",
}

export default function ACABenefitsPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <HeartPulse className="w-4 h-4" />
                            <span>Healthcare Compliance</span>
                        </div>
                        <TextReveal as="h1" className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                            Affordable Care Act (ACA) <span className="text-blue-600">Compliance & Benefits</span>
                        </TextReveal>
                    </div>
                </div>
            </section>

            {/* Zero-Click Answer Block */}
            <section className="py-20">
                <div className="container">
                    <FadeIn>
                        <div className="bg-white border-l-8 border-brand-primary p-8 md:p-12 rounded-r-xl shadow-sm ring-1 ring-slate-100">
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                                As the legal employer, <strong className="text-brand-navy font-bold">First National Staffing Group</strong> assumes full responsibility for <strong className="text-brand-navy font-bold">Affordable Care Act (ACA)</strong> compliance. We handle eligibility tracking, manage the <strong className="text-brand-navy font-bold">Look-Back Measurement Method</strong>, and offer compliant health plans, shielding clients from Employer Shared Responsibility Payment (ESRP) penalties.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Variable Hour Management */}
            <section className="py-16 bg-slate-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Variable Hour Management</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <CalendarClock className="w-10 h-10 text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-2">Measurement Period</h3>
                            <p className="text-slate-600">
                                We track hours worked over a defined period to determine if a variable-hour employee qualifies as full-time under ACA rules.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <CalendarClock className="w-10 h-10 text-green-600 mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-2">Administrative Period</h3>
                            <p className="text-slate-600">
                                Once eligibility is determined, we handle the enrollment process, offering coverage to qualified employees within the required timeframe.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <CalendarClock className="w-10 h-10 text-purple-600 mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-2">Stability Period</h3>
                            <p className="text-slate-600">
                                Eligible employees are locked into coverage for a fixed stability period, ensuring consistent benefits regardless of hour fluctuations.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Risk Avoidance */}
            <section className="py-20">
                <div className="container">
                    <div className="bg-red-50 rounded-2xl p-8 md:p-12 border border-red-100 flex items-start gap-6">
                        <div className="hidden md:flex w-16 h-16 bg-red-100 rounded-full items-center justify-center flex-shrink-0 text-red-600">
                            <Ban className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-brand-navy mb-4">Risk Avoidance: The "Pay or Play" Mandate</h2>
                            <p className="text-slate-700 mb-6">
                                Failure to offer affordable, minimum value coverage to 95% of full-time employees can trigger massive IRS penalties.
                            </p>
                            <div className="bg-white p-6 rounded-lg border border-red-200 inline-block">
                                <p className="text-sm text-slate-500 font-bold uppercase mb-1">Penalty A (2025 Est.)</p>
                                <p className="text-3xl font-bold text-red-600">$2,970</p>
                                <p className="text-xs text-slate-400">per full-time employee (minus first 30)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
