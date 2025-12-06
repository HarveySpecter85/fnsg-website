import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Activity, Clock, MapPin, FileCheck, TestTube, Stethoscope, Syringe } from 'lucide-react'

export const metadata: Metadata = {
    title: "Workforce Health Screening | Drug Testing & Physicals",
    description: "Integrated drug and medical testing services. Reduce time-to-start by 48 hours with our nationwide Labcorp and eScreen network.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/workforce-health-screening',
    },
    openGraph: {
        title: "Workforce Health Screening | Drug Testing & Physicals",
        description: "Integrated drug and medical testing services. Reduce time-to-start by 48 hours with our nationwide Labcorp and eScreen network.",
        url: 'https://firstnationalstaffing.com/solutions/workforce-health-screening',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
}

export default function HealthScreeningHubPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <Activity className="w-4 h-4" />
                            <span>Integrated Occupational Health</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Workforce Health Screening
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Integrated Drug & Medical Testing
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Start Screening
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
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> streamlines the hiring lifecycle... Leveraging the nationwide <strong className="text-brand-navy font-bold">Labcorp and eScreen network</strong>... reducing &apos;Time-to-Start&apos; by an average of 48 hours.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Data Hook: Speed Metrics */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                                <FileCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">100%</h3>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Paperless eCCF</p>
                            <p className="text-slate-600 mt-4 text-sm">Digital Chain of Custody eliminates lost forms and data entry errors.</p>
                        </FadeIn>

                        <FadeIn delay={0.2} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">&lt; 1 Hour</h3>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Instant Turnaround</p>
                            <p className="text-slate-600 mt-4 text-sm">Negative results for rapid drug screens delivered immediately.</p>
                        </FadeIn>

                        <FadeIn delay={0.3} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <h3 className="text-4xl font-bold text-brand-navy mb-2">4,000+</h3>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Locations</p>
                            <p className="text-slate-600 mt-4 text-sm">Extensive clinic network ensuring candidates are never far from a site.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Service Ecosystem */}
            <section className="py-20 bg-white">
                <div className="container">
                    <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Comprehensive Health Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Drug Testing */}
                        <Link href="/solutions/workforce-health-screening/drug-alcohol-testing" className="group block h-full">
                            <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-200 transition-all hover:border-brand-primary hover:shadow-lg">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                                    <TestTube className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-primary transition-colors">Drug & Alcohol Testing</h3>
                                <p className="text-slate-600 text-sm mb-6">
                                    5 to 12-panel rapid screens, DOT compliance, and hair follicle testing.
                                </p>
                                <span className="text-brand-primary font-bold text-sm flex items-center gap-2">
                                    View Panels &rarr;
                                </span>
                            </div>
                        </Link>

                        {/* Physicals */}
                        <Link href="/solutions/workforce-health-screening/occupational-physicals" className="group block h-full">
                            <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-200 transition-all hover:border-brand-primary hover:shadow-lg">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Stethoscope className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-primary transition-colors">Occupational Physicals</h3>
                                <p className="text-slate-600 text-sm mb-6">
                                    DOT exams, Functional Capacity Evaluations (FCEs), and lift assessments.
                                </p>
                                <span className="text-brand-primary font-bold text-sm flex items-center gap-2">
                                    View Exam Types &rarr;
                                </span>
                            </div>
                        </Link>

                        {/* Vaccines */}
                        <Link href="/solutions/workforce-health-screening/vaccinations-immunizations" className="group block h-full">
                            <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-200 transition-all hover:border-brand-primary hover:shadow-lg">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Syringe className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-primary transition-colors">Vaccinations & Immunizations</h3>
                                <p className="text-slate-600 text-sm mb-6">
                                    TB testing, Hep B titers, and flu shots for healthcare and food safety compliance.
                                </p>
                                <span className="text-brand-primary font-bold text-sm flex items-center gap-2">
                                    View Clinic Services &rarr;
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
