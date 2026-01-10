import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Briefcase, Search, DollarSign, Award } from 'lucide-react'
import PremiumCTA from '@/app/components/PremiumCTA'

export const metadata: Metadata = {
    title: "Direct Hire Recruitment | Executive & Technical Search",
    description: "Direct hire and executive search services on a contingency fee basis. We specialize in technical roles, maintenance leadership, and QA management.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/direct-hire-recruitment',
    },
    openGraph: {
        title: "Direct Hire Recruitment | Executive & Technical Search",
        description: "Direct hire and executive search services on a contingency fee basis. We specialize in technical roles, maintenance leadership, and QA management.",
        url: 'https://firstnationalstaffing.com/solutions/direct-hire-recruitment',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
}

export default function DirectHirePage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-6">
                            <Briefcase className="w-4 h-4" />
                            <span>Executive & Technical Search</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Direct Hire Recruitment
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Headhunting Leadership
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Start Your Search
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
                                We operate on a <strong className="text-brand-navy font-bold">Contingency Fee Basis</strong> to source hard-to-find technical and leadership talent. Our specialized recruiters focus on <strong className="text-brand-navy font-bold">Maintenance Technicians</strong>, <strong className="text-brand-navy font-bold">QA Managers</strong>, and <strong className="text-brand-navy font-bold">Operations Directors</strong>, delivering vetted candidates who are ready to make an immediate impact.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Fee Structure */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                <DollarSign className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Risk-Free Pricing</h3>
                            <p className="text-slate-600 text-sm">
                                No retainers or upfront costs. You only pay a fee if you hire a candidate we present.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                                <Search className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Passive Talent Access</h3>
                            <p className="text-slate-600 text-sm">
                                We hunt for currently employed top performers who aren&apos;t applying to job boards.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">90-Day Guarantee</h3>
                            <p className="text-slate-600 text-sm">
                                If a hire doesn&apos;t work out within the first 90 days, we replace them at no additional cost.
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
