import type { Metadata } from 'next'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Shield, FileText, Umbrella, Briefcase } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "Liability Insurance Coverage | $5M Umbrella Policy",
    description: "Transfer operational risk to First National Staffing Group. Our coverage includes Workers' Comp, General Liability, and a $5 Million Umbrella Policy.",
}

export default function InsuranceCoveragePage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <Shield className="w-4 h-4" />
                            <span>Financial Risk Transfer</span>
                        </div>
                        <TextReveal as="h1" className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                            Corporate Liability Coverage & <span className="text-blue-600">Risk Transfer Protocols</span>
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
                                Clients choose <strong className="text-brand-navy font-bold">First National Staffing Group</strong> to transfer operational risk. We maintain a robust insurance portfolio, including <strong className="text-brand-navy font-bold">Workers' Compensation</strong>, <strong className="text-brand-navy font-bold">General Liability</strong>, and a <strong className="text-brand-navy font-bold">$5 Million Umbrella/Excess Policy</strong> to protect your assets in the event of a catastrophic incident.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Insurance Portfolio */}
            <section className="py-16 bg-slate-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Insurance Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <Briefcase className="w-10 h-10 text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-2">Workers' Compensation</h3>
                            <p className="text-slate-500 text-sm mb-4">Statutory Limits</p>
                            <p className="text-slate-600">
                                Full coverage for all contingent workers. We manage the claims process from first report to closure.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <FileText className="w-10 h-10 text-green-600 mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-2">General Liability</h3>
                            <p className="text-slate-500 text-sm mb-4">$1M per occurrence / $2M aggregate</p>
                            <p className="text-slate-600">
                                Protection against third-party bodily injury and property damage claims arising from operations.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <Umbrella className="w-10 h-10 text-purple-600 mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-2">Umbrella / Excess</h3>
                            <p className="text-slate-500 text-sm mb-4">$5,000,000 Limit</p>
                            <p className="text-slate-600">
                                An extra layer of security that sits on top of our primary policies for high-exposure environments.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Waiver of Subrogation */}
            <section className="py-20">
                <div className="container">
                    <div className="bg-brand-navy rounded-3xl p-12 text-white relative overflow-hidden">
                        <div className="relative z-10 max-w-3xl">
                            <h2 className="text-3xl font-bold mb-6">Waiver of Subrogation</h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                For our Enterprise clients, we offer a Waiver of Subrogation endorsement. This prevents our insurance carrier from seeking reimbursement from your policy in the event of a claim, ensuring the risk stays where it belongs: with us.
                            </p>
                            <MagneticButton>
                                <Link href="/contact/general-inquiries" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-navy bg-white rounded-lg hover:bg-blue-50 transition-colors">
                                    Request Sample COI
                                </Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
