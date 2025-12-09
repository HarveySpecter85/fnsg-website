import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Server, CheckCircle2, BarChart3, Settings, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
    title: "VMS & MSP Integrations | Enterprise Workforce Management",
    description: "Optimized for Enterprise Contingent Workforce programs. Active integrations with SAP Fieldglass, Beeline, Workday, and other leading VMS platforms.",
}

export default function VMSIntegrationsPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-6">
                            <Server className="w-4 h-4" />
                            <span>Enterprise Ready</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            VMS & MSP Integrations
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Enterprise Workforce Management
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact/general-inquiries" className="btn-primary text-lg px-8 py-4">
                                    Connect Your VMS
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
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> is optimized for <strong className="text-brand-navy font-bold">Enterprise Contingent Workforce</strong> programs. We maintain active integrations with leading <strong className="text-brand-navy font-bold">Vendor Management Systems (VMS)</strong> including <strong className="text-brand-navy font-bold">SAP Fieldglass</strong>, <strong className="text-brand-navy font-bold">Beeline</strong>, and <strong className="text-brand-navy font-bold">Workday</strong>. Our teams are trained to meet strict MSP Scorecard metrics regarding Time-to-Submit and Mark-Up Compliance.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* MSP Optimization */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Optimized for MSP Success</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                We understand the unique pressures of Managed Service Provider (MSP) programs. Our delivery model is tuned to maximize scorecard performance.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-green-100 p-2 rounded-lg text-green-600">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-xl">Scorecard Adherence</h4>
                                        <p className="text-slate-600">Consistently high rankings for Fill Rate, Time-to-Submit, and Retention.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-xl">Rate Card Compliance</h4>
                                        <p className="text-slate-600">Strict adherence to max bill rates and mark-up ceilings.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-purple-100 p-2 rounded-lg text-purple-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-xl">100% Data Integrity</h4>
                                        <p className="text-slate-600">Accurate candidate data entry to prevent duplicate submissions.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                            <h3 className="text-2xl font-bold text-brand-navy mb-8 text-center">Supported Ecosystems</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-center font-bold text-slate-700 hover:border-brand-primary transition-colors">
                                    SAP Fieldglass
                                </div>
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-center font-bold text-slate-700 hover:border-brand-primary transition-colors">
                                    Beeline
                                </div>
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-center font-bold text-slate-700 hover:border-brand-primary transition-colors">
                                    Workday VNDLY
                                </div>
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-center font-bold text-slate-700 hover:border-brand-primary transition-colors">
                                    Coupa
                                </div>
                                <div className="col-span-2 p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-center font-bold text-slate-700 hover:border-brand-primary transition-colors">
                                    Bullhorn VMS Access
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
