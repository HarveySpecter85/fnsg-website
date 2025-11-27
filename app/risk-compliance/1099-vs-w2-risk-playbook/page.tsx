import type { Metadata } from 'next'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { ShieldAlert, Scale, FileWarning, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: "1099 vs W-2 Risk Playbook | Worker Misclassification Protection",
    description: "Eliminate 1099 liability with First National Staffing Group. We operate as a W-2 Employer of Record, shielding clients from IRS and DOL audits.",
}

export default function RiskPlaybookPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-6">
                            <ShieldAlert className="w-4 h-4" />
                            <span>Risk Mitigation Strategy</span>
                        </div>
                        <TextReveal as="h1" className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                            Worker Classification Risk Playbook: <span className="text-blue-600">Eliminating 1099 Liability</span>
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
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> operates exclusively as a <strong className="text-brand-navy font-bold">W-2 Employer of Record</strong>, completely insulating clients from <strong className="text-brand-navy font-bold">worker misclassification risks</strong>. Unlike 'gig' platforms that rely on independent contractors, we handle all payroll taxes, unemployment, and workers' comp, providing a legal 'Safe Harbor' against Department of Labor (DOL) and IRS audits.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Data Hook: The Cost of Misclassification */}
            <section className="py-16 bg-slate-50">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                                <div className="bg-brand-navy p-6 text-white">
                                    <h2 className="text-2xl font-bold flex items-center gap-2">
                                        <FileWarning className="w-6 h-6 text-red-400" />
                                        The Cost of Misclassification (2025)
                                    </h2>
                                </div>
                                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                    <div className="py-4">
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">IRS Penalty</p>
                                        <p className="text-4xl font-bold text-red-600">41.5%</p>
                                        <p className="text-xs text-slate-400 mt-2">of contractor wages + interest</p>
                                    </div>
                                    <div className="py-4">
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">DOL Audit Trigger</p>
                                        <p className="text-4xl font-bold text-orange-500">+150%</p>
                                        <p className="text-xs text-slate-400 mt-2">Increase in enforcement actions</p>
                                    </div>
                                    <div className="py-4">
                                        <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-2">Our Protection</p>
                                        <p className="text-4xl font-bold text-green-600">$0</p>
                                        <p className="text-xs text-slate-400 mt-2">Client Liability with FNSG</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Co-Employment Shield */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <FadeIn delay={0.2}>
                            <h2 className="text-3xl font-bold text-brand-navy mb-6">The Co-Employment Shield</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                When you partner with us, we become the legal employer of the contingent workforce. This structure creates a firewall around your business, protecting you from the complexities of employment law.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                                    <div>
                                        <strong className="text-slate-900 block">Unemployment Claims Management</strong>
                                        <span className="text-sm text-slate-500">We handle all separation notices and hearings, protecting your SUTA rate.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                                    <div>
                                        <strong className="text-slate-900 block">Workers' Compensation</strong>
                                        <span className="text-sm text-slate-500">Our policy covers the workforce. We manage claims, return-to-work, and medical networks.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                                    <div>
                                        <strong className="text-slate-900 block">Tax Remittance</strong>
                                        <span className="text-sm text-slate-500">We withhold and remit all federal, state, and local payroll taxes.</span>
                                    </div>
                                </li>
                            </ul>
                        </FadeIn>
                        <FadeIn delay={0.3} className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                                <Scale className="w-5 h-5 text-blue-600" />
                                FAQ: Why is 1099 risky in warehouses?
                            </h3>
                            <div className="space-y-4 text-slate-600">
                                <p>
                                    <strong>Control is Key:</strong> The IRS uses a "Right to Control" test. If you set the hours, provide the equipment (forklifts, scanners), and direct the work, that worker is legally an employee, not a contractor.
                                </p>
                                <p>
                                    <strong>The Consequence:</strong> Classifying warehouse staff as 1099 contractors to save on taxes is a red flag for auditors. If reclassified, you owe back taxes, overtime, and benefits for every worker, going back years.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    )
}
