import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Stethoscope, Activity, Scale, Ear, Truck } from 'lucide-react'

export const metadata: Metadata = {
    title: "Occupational Physicals | DOT Exams & FCEs",
    description: "Comprehensive occupational health exams including DOT physicals, Functional Capacity Evaluations (FCEs), and lift assessments.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/workforce-health-screening/occupational-physicals',
    },
    openGraph: {
        title: "Occupational Physicals | DOT Exams & FCEs",
        description: "Comprehensive occupational health exams including DOT physicals, Functional Capacity Evaluations (FCEs), and lift assessments.",
        url: 'https://firstnationalstaffing.com/solutions/workforce-health-screening/occupational-physicals',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
}

export default function OccupationalPhysicalsPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <Stethoscope className="w-4 h-4" />
                            <span>Fit-For-Duty Verification</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Occupational Physicals
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            DOT Exams & Functional Capacity
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Schedule Physicals
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
                                Ensure your workforce is physically capable of meeting job demands. We coordinate <strong className="text-brand-navy font-bold">Functional Capacity Evaluations (FCEs)</strong> and standardized <strong className="text-brand-navy font-bold">Lift Tests</strong> to validate candidate strength and agility, reducing the risk of musculoskeletal injuries.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Service List */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Examination Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                <Truck className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">DOT Physicals</h3>
                            <p className="text-slate-600 text-sm">
                                Performed by NRCME-certified examiners. Required for all CDL drivers operating commercial vehicles &gt; 10,000 lbs.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                                <Scale className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Lift Tests</h3>
                            <p className="text-slate-600 text-sm">
                                Standardized protocols (50lb / 75lb) to verify lifting capacity. Essential for warehouse and heavy industrial roles.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                                <Ear className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Audiograms</h3>
                            <p className="text-slate-600 text-sm">
                                Baseline and annual hearing conservation testing for environments exceeding OSHA noise thresholds (85 dB).
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    )
}
