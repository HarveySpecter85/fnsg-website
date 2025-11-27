import React from 'react'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { MapPin, TrendingUp, Target, ArrowRight } from 'lucide-react'

interface Stat {
    label: string
    value: string
}

interface LocationPageProps {
    heroTitle: string
    heroSubtitle?: string
    zeroClickContent: React.ReactNode
    stats?: Stat[]
    focusArea: string
    schema: any
}

export function LocationPageTemplate({
    heroTitle,
    heroSubtitle = "Local Workforce Experts",
    zeroClickContent,
    stats,
    focusArea,
    schema
}: LocationPageProps) {
    return (
        <main className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <MapPin className="w-4 h-4" />
                            <span>{heroSubtitle}</span>
                        </div>
                        <TextReveal as="h1" className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                            {heroTitle}
                        </TextReveal>
                    </div>
                </div>
            </section>

            {/* Zero-Click Answer Block */}
            <section className="py-20">
                <div className="container">
                    <FadeIn>
                        <div className="bg-white border-l-8 border-brand-primary p-8 md:p-12 rounded-r-xl shadow-sm ring-1 ring-slate-100">
                            <div className="text-lg md:text-xl text-slate-700 leading-relaxed">
                                {zeroClickContent}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Stats & Focus Grid */}
            <section className="py-16 bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Stats Column */}
                        <FadeIn delay={0.1}>
                            <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                                <TrendingUp className="w-6 h-6 text-blue-600" />
                                Market Insights
                            </h2>
                            {stats && stats.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                            <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                                            <p className="text-2xl font-bold text-brand-navy">{stat.value}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                    <p className="text-slate-600">Contact us for detailed local market analysis and wage reports.</p>
                                </div>
                            )}
                        </FadeIn>

                        {/* Focus Column */}
                        <FadeIn delay={0.2}>
                            <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                                <Target className="w-6 h-6 text-red-600" />
                                Regional Focus
                            </h2>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 h-full">
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    {focusArea}
                                </p>
                                <div className="mt-8">
                                    <Link href="/contact/request-workforce" className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center gap-2">
                                        Request Staffing in this Area <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="bg-brand-navy rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-6">Need Workforce Solutions Here?</h2>
                            <p className="text-blue-100 mb-8 text-lg">
                                We have a ready-to-deploy talent pool in this region. Let's discuss your staffing needs.
                            </p>
                            <MagneticButton>
                                <Link href="/contact/request-workforce" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-navy bg-white rounded-lg hover:bg-blue-50 transition-colors">
                                    Get a Quote
                                </Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
