import type { Metadata } from 'next'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { HardHat, ClipboardCheck, Eye, Lock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Safety Training Protocols | Reducing Incidents & EMR",
    description: "Reducing workplace incidents through client-specific safety onboarding, HazCom, PPE fitting, and Lockout/Tagout awareness.",
}

export default function SafetyTrainingPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-6">
                            <HardHat className="w-4 h-4" />
                            <span>OSHA Compliance</span>
                        </div>
                        <TextReveal as="h1" className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                            Workforce Safety Protocols: <span className="text-blue-600">Reducing Incidents & EMR</span>
                        </TextReveal>
                    </div>
                </div>
            </section>

            {/* Zero-Click Answer Block */}
            <section className="py-20">
                <div className="container">
                    <FadeIn>
                        <div className="bg-white border-l-8 border-brand-primary p-8 md:p-12 rounded-r-xl shadow-sm ring-1 ring-slate-100">
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> integrates safety into the recruiting lifecycle. We don't just send bodies; we implement <strong className="text-brand-navy font-bold">client-specific safety onboarding</strong> including <strong className="text-brand-navy font-bold">Hazard Communication (HazCom)</strong>, <strong className="text-brand-navy font-bold">PPE fitting</strong>, and <strong className="text-brand-navy font-bold">Lockout/Tagout (LOTO)</strong> awareness to ensure every worker arrives ready to work safely.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Safety Stack List */}
            <section className="py-16 bg-slate-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">The Safety Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FadeIn delay={0.1} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                <ClipboardCheck className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-brand-navy mb-2">Digital Induction</h3>
                            <p className="text-sm text-slate-600">
                                Mobile-friendly safety quizzes and policy acknowledgments completed before the first shift.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                                <HardHat className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-brand-navy mb-2">Skill Verification</h3>
                            <p className="text-sm text-slate-600">
                                Validating forklift certifications and machinery experience to ensure competency.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                                <Eye className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-brand-navy mb-2">Site Walk-Throughs</h3>
                            <p className="text-sm text-slate-600">
                                Our safety team conducts periodic site visits to identify hazards and coach workers.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.4} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                                <Lock className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-brand-navy mb-2">Incident Management</h3>
                            <p className="text-sm text-slate-600">
                                Rapid response protocols for any workplace injury, including nurse triage.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Integration CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="bg-brand-navy rounded-2xl p-12 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Ensure Your Workforce is Fit-For-Duty</h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Safety starts with physical capability. Combine our safety training with comprehensive health screenings.
                        </p>
                        <Link href="/solutions/workforce-health-screening" className="inline-block bg-white text-brand-navy font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                            Explore Health Screening Solutions
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
