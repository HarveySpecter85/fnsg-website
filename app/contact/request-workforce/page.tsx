import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { RequestQuoteForm } from '@/app/components/forms/request-quote-form'
import { CONTACT_INFO } from '@/lib/site-config'
import { Clock, ShieldCheck, FileCheck, PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
    title: "Request Workforce | 24-72h Staffing Fulfillment Georgia",
    description: "Start your staffing order with First National Staffing Group. High-volume, W-2 industrial staffing with a 24-hour replacement guarantee.",
}

export default function RequestWorkforcePage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            {/* Hero Header */}
            <section className="bg-brand-navy text-white py-20 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                <div className="container relative z-10">
                    <div className="max-w-4xl">
                        <TextReveal as="h1" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Request Workforce: <span className="text-brand-primary">Start Your Staffing Order</span>
                        </TextReveal>
                        <p className="text-xl text-slate-300 max-w-2xl">
                            Streamlined digital intake for high-volume industrial and logistics staffing.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Zero-Click Answer Block */}
                        <FadeIn>
                            <div className="bg-white border-l-8 border-brand-primary p-8 rounded-r-xl shadow-sm ring-1 ring-slate-200/50">
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    <strong className="text-brand-navy font-bold">First National Staffing Group</strong> offers a streamlined digital intake for new workforce requests. For urgent needs (less than 48 hours), please call our <strong className="text-brand-navy font-bold">Hotline ({CONTACT_INFO.phone})</strong> immediately after submitting this form. Our dedicated account managers respond to all web inquiries within <strong className="text-brand-navy font-bold">2 business hours</strong> with a rate card and candidate availability snapshot.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Form Section */}
                        <FadeIn delay={0.2}>
                            <div id="quote-form">
                                <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary text-white text-sm">1</span>
                                    Tell Us Your Requirements
                                </h2>
                                <RequestQuoteForm />
                            </div>
                        </FadeIn>

                        {/* Next Steps */}
                        <FadeIn delay={0.3}>
                            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-brand-navy mb-6">What Happens Next?</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="relative">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-brand-light rounded-lg text-brand-primary">
                                                <PhoneCall className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-bold text-brand-navy">1. Consultation</h4>
                                        </div>
                                        <p className="text-sm text-slate-600">We verify your specs, safety requirements, and shift schedules.</p>
                                        <ArrowRight className="hidden md:block absolute top-4 -right-6 text-slate-300 w-5 h-5" />
                                    </div>

                                    <div className="relative">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-brand-light rounded-lg text-brand-primary">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-bold text-brand-navy">2. Recruitment</h4>
                                        </div>
                                        <p className="text-sm text-slate-600">We activate our "Warm Bench" and screen candidates via eScreen.</p>
                                        <ArrowRight className="hidden md:block absolute top-4 -right-6 text-slate-300 w-5 h-5" />
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-brand-light rounded-lg text-brand-primary">
                                                <FileCheck className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-bold text-brand-navy">3. Deployment</h4>
                                        </div>
                                        <p className="text-sm text-slate-600">Candidates arrive for orientation with PPE and IDs ready.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <FadeIn delay={0.4}>
                            <div className="bg-brand-navy text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <ShieldCheck className="w-32 h-32" />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 relative z-10">⚡ Why Request from Us?</h3>
                                <ul className="space-y-6 relative z-10">
                                    <li className="flex gap-4">
                                        <Clock className="w-6 h-6 text-brand-primary shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-lg">Speed</h4>
                                            <p className="text-slate-300 text-sm">24-72 Hour Standard Fill Time for most industrial roles.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <ShieldCheck className="w-6 h-6 text-brand-primary shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-lg">Guarantee</h4>
                                            <p className="text-slate-300 text-sm">8-Hour Performance Guarantee. Don't pay if not satisfied.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <FileCheck className="w-6 h-6 text-brand-primary shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-lg">Compliance</h4>
                                            <p className="text-slate-300 text-sm">100% W-2, E-Verify, and fully insured from Day 1.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-brand-navy mb-2">Need Immediate Assistance?</h4>
                                <p className="text-slate-600 text-sm mb-4">
                                    For urgent staffing needs requiring same-day deployment, please call our dispatch line directly.
                                </p>
                                <a
                                    href={`tel:${CONTACT_INFO.phone}`}
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-slate-100 hover:bg-slate-200 text-brand-navy font-bold rounded-lg transition-colors"
                                >
                                    <PhoneCall className="w-4 h-4" /> Call {CONTACT_INFO.phone}
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </main>
    )
}
