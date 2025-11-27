import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Cpu, Map, MessageSquare, BarChart2, Smartphone, Radio, MapPin } from 'lucide-react'

export const metadata: Metadata = {
    title: "Recruitment Technology Stack | Geofencing & AI Matching",
    description: "Data-driven talent acquisition using Geofencing, AI candidate matching, and automated SMS workflows to target workers within a 10-mile radius.",
}

export default function TechnologyStackPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-6">
                            <Cpu className="w-4 h-4" />
                            <span>Modern Recruitment Tech</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Our Technology Stack
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Data-Driven Talent Acquisition
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Demo Our Tech
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
                                To compete in a tight labor market, <strong className="text-brand-navy font-bold">First National Staffing Group</strong> leverages a modern <strong className="text-brand-navy font-bold">Recruitment Tech Stack</strong>. We utilize <strong className="text-brand-navy font-bold">AI-driven Candidate Matching</strong> combined with <strong className="text-brand-navy font-bold">Geofencing Marketing</strong> to target workers within a 10-mile radius of your facility in real-time.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Tech Breakdown Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">The Digital Ecosystem</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-brand-primary mb-6">
                                <Radio className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Sourcing</h3>
                            <p className="text-slate-600 text-sm">
                                Programmatic advertising APIs that instantly distribute jobs to 50+ boards (Indeed, ZipRecruiter) based on performance data.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Engagement</h3>
                            <p className="text-slate-600 text-sm">
                                Automated SMS workflows and chatbots that pre-screen candidates 24/7, reducing time-to-interview by 60%.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Attendance</h3>
                            <p className="text-slate-600 text-sm">
                                GPS-enabled mobile timekeeping apps allowing workers to clock in/out via smartphone with geofence validation.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-6">
                                <BarChart2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Analytics</h3>
                            <p className="text-slate-600 text-sm">
                                Real-time client dashboards providing transparency into fill rates, turnover, and spend per department.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Geofencing Spotlight */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="bg-brand-navy rounded-3xl overflow-hidden relative">
                        <div className="absolute inset-0 opacity-20">
                            {/* Abstract map pattern or grid could go here */}
                            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/50 via-transparent to-transparent"></div>
                        </div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 lg:p-20 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm font-bold mb-6 border border-blue-500/30">
                                    <Map className="w-4 h-4" />
                                    <span>Hyper-Local Targeting</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Geofencing Industrial Hubs</h2>
                                <p className="text-lg text-blue-100 mb-8">
                                    We don&apos;t just post jobs; we hunt for talent where they live and work. By creating digital perimeters around key industrial zones like <strong>Jefferson</strong>, <strong>Fulton Industrial</strong>, and the <strong>Savannah Port</strong>, we serve targeted ads to qualified workers on their mobile devices.
                                </p>
                                <ul className="space-y-4 text-blue-50">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                                        Targeting competitors&apos; parking lots
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                                        Retargeting past applicants
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                                        Capturing passive candidates
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                {/* Visual representation of geofencing - could be an image or SVG */}
                                <div className="aspect-square bg-white/10 rounded-full border border-white/20 flex items-center justify-center relative animate-pulse-slow">
                                    <div className="absolute inset-0 border-2 border-brand-primary rounded-full opacity-50 animate-ping-slow"></div>
                                    <MapPin className="w-16 h-16 text-brand-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
