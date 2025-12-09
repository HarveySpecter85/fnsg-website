import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Tractor, Bus, FileCheck, Sprout } from 'lucide-react'
import PremiumCTA from '@/app/components/PremiumCTA'

export const metadata: Metadata = {
    title: "Farm Labor Contracting (FLC) | Agricultural Staffing",
    description: "Registered Farm Labor Contractor (FLC). We handle recruitment, transportation, and payroll for seasonal agricultural workers.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/farm-labor-contracting',
    },
    openGraph: {
        title: "Farm Labor Contracting (FLC) | Agricultural Staffing",
        description: "Registered Farm Labor Contractor (FLC). We handle recruitment, transportation, and payroll for seasonal agricultural workers.",
        url: 'https://firstnationalstaffing.com/solutions/farm-labor-contracting',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
}

export default function FLCPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6">
                            <Tractor className="w-4 h-4" />
                            <span>Licensed FLC Provider</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Farm Labor Contracting (FLC) Services
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Agricultural Workforce Solutions
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Request Harvest Crew
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
                                As a registered FLC, <strong className="text-brand-navy font-bold">First National Staffing Group</strong> assumes the legal burden of <strong className="text-brand-navy font-bold">recruiting</strong>, <strong className="text-brand-navy font-bold">transporting</strong>, and <strong className="text-brand-navy font-bold">paying</strong> seasonal agricultural workers. We ensure full compliance with MSPA regulations, protecting growers from liability while delivering reliable crews for planting and harvest.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">End-to-End FLC Management</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <FadeIn delay={0.1} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                <Sprout className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Recruitment</h3>
                            <p className="text-slate-600 text-sm">
                                Sourcing experienced field workers and verifying eligibility.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                <Bus className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Transportation</h3>
                            <p className="text-slate-600 text-sm">
                                Safe transport to/from fields using DOT-compliant buses and licensed drivers.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                                <FileCheck className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Payroll</h3>
                            <p className="text-slate-600 text-sm">
                                Accurate piece-rate or hourly calculations with proper deductions.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                                <FileCheck className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Compliance</h3>
                            <p className="text-slate-600 text-sm">
                                Full MSPA adherence, including housing inspections and wage disclosures.
                            </p>
                        </FadeIn>
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
