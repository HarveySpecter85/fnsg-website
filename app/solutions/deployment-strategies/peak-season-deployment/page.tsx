import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { TrendingUp, Users, ThermometerSun, CalendarCheck } from 'lucide-react'

export const metadata: Metadata = {
    title: "Peak Season Deployment | Q4 Scalability",
    description: "Scalable workforce solutions for peak season demands. Warm Bench strategies and over-recruitment to ensure 100% fulfillment.",
}

export default function PeakSeasonPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-6">
                            <TrendingUp className="w-4 h-4" />
                            <span>Q4 Readiness</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Peak Season Deployment
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Scalability for Q4
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Secure Peak Talent
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
                                Surviving peak season requires proactive planning. We implement a <strong className="text-brand-navy font-bold">Warm Bench</strong> strategy, maintaining a pool of pre-screened, ready-to-deploy candidates. We strategically <strong className="text-brand-navy font-bold">Over-Recruit by 10-15%</strong> leading up to critical dates to account for attrition and ensure 100% order fulfillment when it matters most.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Strategy Breakdown */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6">
                                <ThermometerSun className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-4">The Warm Bench</h3>
                            <p className="text-slate-600 mb-6">
                                We don&apos;t wait for the order to start recruiting. We build a reserve of qualified candidates who are interviewed, screened, and badged—ready to step in at a moment&apos;s notice.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-slate-700">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    Pre-screened & Oriented
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    On-call availability
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    Rapid backfill capability
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy mb-4">Strategic Over-Recruitment</h3>
                            <p className="text-slate-600 mb-6">
                                Attrition is inevitable during high-pressure periods. We calculate expected turnover and staff accordingly to keep your lines running.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <div className="flex justify-between mb-2 font-bold text-brand-navy">
                                    <span>Target Headcount</span>
                                    <span>100</span>
                                </div>
                                <div className="flex justify-between mb-2 font-bold text-brand-primary">
                                    <span>FNSG Deployment</span>
                                    <span>115 (+15%)</span>
                                </div>
                                <div className="text-xs text-slate-500 mt-2">
                                    *Buffer ensures full capacity despite no-shows or early attrition.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
