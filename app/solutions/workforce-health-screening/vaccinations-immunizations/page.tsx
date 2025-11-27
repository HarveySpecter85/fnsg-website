import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Syringe, ShieldCheck, HeartPulse } from 'lucide-react'

export const metadata: Metadata = {
    title: "Vaccinations & Immunizations | Healthcare Compliance",
    description: "Clinical immunization services for healthcare and food safety. TB testing, Hep B titers, and flu vaccines.",
}

export default function VaccinationsPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <Syringe className="w-4 h-4" />
                            <span>Clinical Compliance</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Vaccinations & Immunizations
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Healthcare & Food Compliance
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Request Clinical Services
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
                                For healthcare support and food production roles, we manage full immunization compliance. Our clinical partners administer <strong className="text-brand-navy font-bold">T-Spot/PPD</strong> tuberculosis tests, <strong className="text-brand-navy font-bold">Hepatitis B</strong> series, and <strong className="text-brand-navy font-bold">MMR Titers</strong> to ensure your workforce meets all regulatory health standards.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* The Clinic Table */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-5xl">
                    <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Clinical Services Menu</h2>
                    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-100 border-b border-slate-200">
                                    <th className="p-5 font-bold text-brand-navy">Service</th>
                                    <th className="p-5 font-bold text-brand-navy">Description</th>
                                    <th className="p-5 font-bold text-brand-navy">Target Industry</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="odd:bg-slate-50">
                                    <td className="p-5 font-bold text-brand-primary">TB Skin Test (PPD)</td>
                                    <td className="p-5 text-slate-600">Two-step Mantoux tuberculin skin test. Requires return visit for reading.</td>
                                    <td className="p-5 text-slate-600">Healthcare / EVS</td>
                                </tr>
                                <tr className="odd:bg-slate-50">
                                    <td className="p-5 font-bold text-brand-primary">T-Spot (IGRA)</td>
                                    <td className="p-5 text-slate-600">Single-visit blood test for tuberculosis. Higher accuracy, no return visit.</td>
                                    <td className="p-5 text-slate-600">Healthcare / EVS</td>
                                </tr>
                                <tr className="odd:bg-slate-50">
                                    <td className="p-5 font-bold text-brand-primary">Hep B Titer</td>
                                    <td className="p-5 text-slate-600">Blood test to verify immunity to Hepatitis B.</td>
                                    <td className="p-5 text-slate-600">Healthcare / Clinical</td>
                                </tr>
                                <tr className="odd:bg-slate-50">
                                    <td className="p-5 font-bold text-brand-primary">Flu Vaccine</td>
                                    <td className="p-5 text-slate-600">Seasonal influenza vaccination.</td>
                                    <td className="p-5 text-slate-600">All Industries</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    )
}
