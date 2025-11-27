import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { Calculator, FileText, Server, ShieldCheck, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
    title: "Payroll Administration & Compliance | Employer of Record",
    description: "Comprehensive payroll administration and compliance. We act as the Employer of Record (EOR), handling tax withholdings, garnishments, and W-2 issuance.",
}

export default function PayrollCompliancePage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <Calculator className="w-4 h-4" />
                            <span>Employer of Record (EOR)</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Payroll Administration & Compliance
                        </TextReveal>
                        <TextReveal as="h2" className="text-2xl md:text-3xl font-medium text-brand-secondary mb-10 block">
                            Risk-Free Workforce Payment
                        </TextReveal>
                        <FadeIn delay={0.5}>
                            <MagneticButton>
                                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                    Outsource Your Payroll
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
                                By serving as the <strong className="text-brand-navy font-bold">Employer of Record (EOR)</strong>, First National Staffing Group completely insulates your organization from payroll liability. We manage all <strong className="text-brand-navy font-bold">tax withholdings</strong> (FICA, FUTA, SUTA), process <strong className="text-brand-navy font-bold">wage garnishments</strong>, and issue year-end <strong className="text-brand-navy font-bold">W-2 forms</strong>, ensuring 100% compliance with federal and state labor laws.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Tech Integration */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Seamless Integration</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Our payroll systems are designed to talk to yours. Whether you use Kronos, ADP, or a proprietary timekeeping system, we can build a data bridge to automate time capture and billing.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span className="text-slate-700">Automated Time Import</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span className="text-slate-700">Custom Invoicing Formats</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    <span className="text-slate-700">Departmental Cost Allocation</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                                    <Server className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-navy">Tech Stack Compatibility</h3>
                                    <p className="text-sm text-slate-500">Native integrations available</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-lg text-center font-bold text-slate-700 border border-slate-100">
                                    ADP
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg text-center font-bold text-slate-700 border border-slate-100">
                                    Kronos
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg text-center font-bold text-slate-700 border border-slate-100">
                                    Workday
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg text-center font-bold text-slate-700 border border-slate-100">
                                    SAP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
