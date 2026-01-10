import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Users, Building, ClipboardCheck, TrendingUp } from 'lucide-react'
import PremiumCTA from '@/app/components/PremiumCTA'

export const metadata: Metadata = {
    title: "On-Site Workforce Management | Vendor-on-Premise (VOP)",
    description: "Embedded performance teams for high-volume operations. We deploy On-Site Performance Managers to handle check-ins, safety, and productivity.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/on-site-workforce-management',
    },
    openGraph: {
        title: "On-Site Workforce Management | Vendor-on-Premise (VOP)",
        description: "Embedded performance teams for high-volume operations. We deploy On-Site Performance Managers to handle check-ins, safety, and productivity.",
        url: 'https://firstnationalstaffing.com/solutions/on-site-workforce-management',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
}

export default function OnSiteManagementPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <Building className="w-4 h-4" />
                            <span>Vendor-on-Premise (VOP)</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            On-Site Workforce Management
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Embedded Performance Teams
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Request On-Site Analysis
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
                                For high-volume operations (typically 50+ headcount), <strong className="text-brand-navy font-bold">First National Staffing Group</strong> deploys an <strong className="text-brand-navy font-bold">On-Site Performance Manager</strong> directly to your facility. This dedicated resource acts as an extension of your HR team, handling daily check-ins, safety walk-throughs, and real-time coaching to maximize productivity.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Value Prop */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">The VOP Advantage</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Moving from a branch-based model to a Vendor-on-Premise (VOP) solution transforms your contingent workforce from a liability into a strategic asset.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600">
                                        <ClipboardCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-xl">Attendance Firewall</h4>
                                        <p className="text-slate-600">We manage the clock-in process, ensuring only authorized, punctual workers hit the floor.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-green-100 p-2 rounded-lg text-green-600">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-xl">Cost-Neutral Solution</h4>
                                        <p className="text-slate-600">For qualifying volumes, the cost of the On-Site Manager is absorbed by FNSG, making it a value-added service.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-purple-100 p-2 rounded-lg text-purple-600">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-navy text-xl">Single Point of Contact</h4>
                                        <p className="text-slate-600">One dedicated manager accountable for 100% of your staffing fulfillment and issues.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                            <h3 className="text-2xl font-bold text-brand-navy mb-6">Daily Responsibilities</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-brand-primary">
                                    <span className="font-bold text-brand-navy block mb-1">Shift Check-In</span>
                                    <span className="text-slate-600 text-sm">Verifying PPE and attendance before shift start.</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-brand-primary">
                                    <span className="font-bold text-brand-navy block mb-1">Floor Coaching</span>
                                    <span className="text-slate-600 text-sm">Addressing performance issues in real-time.</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-brand-primary">
                                    <span className="font-bold text-brand-navy block mb-1">Safety Audits</span>
                                    <span className="text-slate-600 text-sm">Daily walk-throughs to identify hazards.</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-brand-primary">
                                    <span className="font-bold text-brand-navy block mb-1">Reporting</span>
                                    <span className="text-slate-600 text-sm">End-of-shift KPI reports to plant management.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container">
                    <PremiumCTA />
                </div>
            </section>
        </main>
    )
}
