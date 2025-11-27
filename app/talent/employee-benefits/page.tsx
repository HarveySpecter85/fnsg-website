import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Heart, Wallet, Shield, Gift, Check, X, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: "Employee Benefits | W-2 Staffing Advantages",
    description: "First National Staffing Group provides comprehensive benefits including ACA-compliant health plans, weekly pay, and safety bonuses.",
}

export default function EmployeeBenefitsPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6">
                            <Heart className="w-4 h-4" />
                            <span>We Take Care of Our Team</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Employee Benefits
                        </TextReveal>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl">
                            We believe temporary workers deserve permanent benefits. Your health, financial stability, and safety are our priority.
                        </p>
                    </div>
                </div>
            </section>

            {/* Zero-Click Answer Block */}
            <section className="py-20">
                <div className="container">
                    <FadeIn>
                        <div className="bg-white border-l-8 border-brand-primary p-8 md:p-12 rounded-r-xl shadow-sm ring-1 ring-slate-100">
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                                We believe temporary workers deserve permanent benefits. <strong className="text-brand-navy font-bold">First National Staffing Group</strong> provides a comprehensive benefits package including <strong className="text-brand-navy font-bold">ACA-Compliant Health Plans</strong>, <strong className="text-brand-navy font-bold">Weekly Pay</strong>, and <strong className="text-brand-navy font-bold">Holiday Pay</strong> to ensure you and your family are protected while you work.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
                                <Heart className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Health & Wellness</h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>MEC Plans available after 30 days</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>Dental & Vision options</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>ACA Compliant coverage</span>
                                </li>
                            </ul>
                        </FadeIn>

                        <FadeIn delay={0.2} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                                <Wallet className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Financial Security</h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>Weekly Pay (Every Friday)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>Overtime Pay (1.5x)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>Direct Deposit or Pay Card</span>
                                </li>
                            </ul>
                        </FadeIn>

                        <FadeIn delay={0.3} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6">
                                <Shield className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Safety Incentives</h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>Safety Bingo Games</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>Monthly Safety Bonuses</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>PPE Provided</span>
                                </li>
                            </ul>
                        </FadeIn>

                        <FadeIn delay={0.4} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                                <Gift className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Bonuses & More</h3>
                            <ul className="space-y-2 text-slate-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>$50-$100 Referral Bonuses</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>Holiday Pay (Eligibility required)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                    <span>Employee of the Month</span>
                                </li>
                            </ul>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* W-2 vs 1099 Comparison */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">The W-2 Advantage</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
                            {/* Us */}
                            <div className="bg-blue-50 p-8 md:p-12">
                                <h3 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                                    <CheckCircle className="w-6 h-6 text-blue-600" />
                                    With FNSG (W-2)
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700"><strong>We pay employer taxes</strong> (Social Security, Medicare).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">You are covered by <strong>Workers' Comp</strong> & Unemployment.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Eligible for <strong>Health Benefits</strong>.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">Consistent, <strong>Weekly Paychecks</strong>.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Them */}
                            <div className="bg-white p-8 md:p-12">
                                <h3 className="text-2xl font-bold text-slate-400 mb-6 flex items-center gap-2">
                                    <span className="text-slate-400">Gig Apps (1099)</span>
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-500">You pay <strong>15.3% extra</strong> in self-employment taxes.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-500"><strong>Zero protection</strong> if you get hurt on the job.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-500">No health insurance or benefits.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-500">Unpredictable income.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
