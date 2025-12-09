import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { COMPANY_METRICS } from '@/lib/site-config'
import { CheckCircle, TrendingUp, Users, Clock, ShieldCheck, Award } from 'lucide-react'
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs'

export const metadata: Metadata = {
    title: "Our Story | First National Staffing Group",
    description: "Learn about FNSG's mission to provide enterprise-grade staffing solutions with a client-first approach. Serving Atlanta, Savannah, and beyond since 2005.",
    alternates: {
        canonical: '/company/our-story',
    },
    openGraph: {
        title: "Our Story | First National Staffing Group",
        description: "Learn about FNSG's mission to provide enterprise-grade staffing solutions with a client-first approach.",
        url: 'https://firstnationalstaffing.com/company/our-story',
        images: ['/company/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
}

export default function OurStoryPage() {
    return (
        <main className="bg-white">
            <div className="container mx-auto px-6 pt-8 max-w-7xl">
                <CompanyBreadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Company', href: '/company' },
                    { label: 'Our Story', href: '' }
                ]} />
            </div>

            {/* Hero Section */}
            <section className="relative py-16 lg:py-24 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Empowering Georgia&apos;s Workforce
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            More than a staffing agency. We are your strategic labor partner.
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <div className="flex flex-wrap gap-4">
                                <MagneticButton>
                                    <Link href="/contact/general-inquiries" className="btn-primary text-lg px-8 py-4">
                                        Partner With Us
                                    </Link>
                                </MagneticButton>
                                <MagneticButton>
                                    <Link href="/company/leadership-team" className="btn-secondary text-lg px-8 py-4 bg-white border border-slate-200 text-brand-navy hover:bg-slate-50">
                                        Meet Our Team
                                    </Link>
                                </MagneticButton>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Our Mission</h2>
                            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                At First National Staffing Group, our mission is simple: to bridge the gap between ambitious talent and Georgia&apos;s leading industries. We believe that a job is more than a paycheck—it&apos;s a pathway to stability and growth.
                            </p>
                            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                                For our clients, we aren&apos;t just filling shifts; we are ensuring operational continuity. By combining cutting-edge technology with a human-centric approach, we deliver workforce solutions that are safe, reliable, and scalable.
                            </p>
                            <div className="flex items-center gap-4 text-brand-primary font-semibold">
                                <CheckCircle className="w-6 h-6" />
                                <span>Client-First Compliance</span>
                            </div>
                        </FadeIn>
                        <div className="relative h-[400px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                            {/* Placeholder for About Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                <Users className="w-24 h-24 opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="py-20 bg-brand-navy text-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">By The Numbers</h2>
                        <p className="text-slate-300 text-lg">Real results that drive your bottom line.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FadeIn delay={0.1} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-brand-primary/20 rounded-lg text-brand-primary">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Fill Rate</h3>
                            </div>
                            <p className="text-4xl font-bold mb-2">{COMPANY_METRICS.fillRate}</p>
                            <p className="text-slate-400">Consistently meeting headcount targets.</p>
                        </FadeIn>

                        <FadeIn delay={0.2} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-brand-primary/20 rounded-lg text-brand-primary">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Time to Fill</h3>
                            </div>
                            <p className="text-4xl font-bold mb-2">{COMPANY_METRICS.timeToFill}</p>
                            <p className="text-slate-400">Rapid deployment for urgent needs.</p>
                        </FadeIn>

                        <FadeIn delay={0.3} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-brand-primary/20 rounded-lg text-brand-primary">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Retention Rate</h3>
                            </div>
                            <p className="text-4xl font-bold mb-2">{COMPANY_METRICS.retentionRate}</p>
                            <p className="text-slate-400">Building long-term workforce stability.</p>
                        </FadeIn>

                        <FadeIn delay={0.4} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-brand-primary/20 rounded-lg text-brand-primary">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Turnover Rate</h3>
                            </div>
                            <p className="text-4xl font-bold mb-2">{COMPANY_METRICS.turnoverRate}</p>
                            <p className="text-slate-400">vs 46% Industry Average.</p>
                        </FadeIn>

                        <FadeIn delay={0.5} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-brand-primary/20 rounded-lg text-brand-primary">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Offer Acceptance</h3>
                            </div>
                            <p className="text-4xl font-bold mb-2">{COMPANY_METRICS.offerAcceptance}</p>
                            <p className="text-slate-400">Candidates prefer FNSG.</p>
                        </FadeIn>

                        <FadeIn delay={0.6} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-brand-primary/20 rounded-lg text-brand-primary">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Incident Rate</h3>
                            </div>
                            <p className="text-4xl font-bold mb-2">{COMPANY_METRICS.incidentRate}</p>
                            <p className="text-slate-400">Safety-first culture (Industry Avg: 3.2).</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Core Values</h2>
                        <p className="text-slate-600">The principles that guide every placement and partnership.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-4">Safety Above All</h3>
                            <p className="text-slate-600">We never compromise on safety. Every candidate is vetted, trained, and equipped to work safely from day one.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-4">People First</h3>
                            <p className="text-slate-600">We treat our associates with dignity and respect, offering competitive wages, benefits, and paths to permanent employment.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-4">Operational Excellence</h3>
                            <p className="text-slate-600">We are data-driven. We track metrics, optimize processes, and deliver results that improve your bottom line.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="bg-brand-navy rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-no-repeat animate-[shimmer_3s_infinite]"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to elevate your workforce?</h2>
                            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Join the hundreds of Georgia businesses that trust FNSG for their staffing needs.</p>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-10 py-4 shadow-xl shadow-brand-primary/20">
                                    Get Started Today
                                </Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
