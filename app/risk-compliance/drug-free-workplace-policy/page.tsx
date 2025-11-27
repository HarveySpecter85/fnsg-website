import type { Metadata } from 'next'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { ShieldCheck, TestTube, FileCheck, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
    title: "Drug-Free Workplace Policy | Georgia Workers Comp Credit",
    description: "Certified Georgia Drug-Free Workplace support. Qualify for the 7.5% Workers' Compensation Premium Credit with our Labcorp and eScreen integrated testing.",
}

export default function DrugFreePolicyPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Risk & Safety Compliance</span>
                        </div>
                        <TextReveal as="h1" className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                            Georgia Drug-Free Workplace <span className="text-blue-600">Certification Support</span>
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
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> is a certified <strong className="text-brand-navy font-bold">Georgia Drug-Free Workplace</strong>. Utilizing the <strong className="text-brand-navy font-bold">Labcorp and eScreen</strong> network, we implement rigorous substance abuse protocols that help qualify clients for the state-mandated <strong className="text-brand-navy font-bold">7.5% Workers' Compensation Premium Credit</strong>.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Integration Feature */}
            <section className="py-16 bg-brand-navy text-white">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Powered by eScreen</h2>
                            <p className="text-blue-200 text-lg">Paperless Chain of Custody (eCCF) for faster, error-free results.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <span className="block text-2xl font-bold">15min</span>
                                <span className="text-xs text-blue-200">Avg. Collection Time</span>
                            </div>
                            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                <span className="block text-2xl font-bold">Real-Time</span>
                                <span className="text-xs text-blue-200">Result Reporting</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testing Menu Table */}
            <section className="py-20">
                <div className="container">
                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Comprehensive Testing Menu</h2>
                        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="p-4 text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200">Test Type</th>
                                        <th className="p-4 text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200">Description</th>
                                        <th className="p-4 text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200">Ideal For</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-semibold text-brand-navy flex items-center gap-2">
                                            <TestTube className="w-4 h-4 text-blue-600" />
                                            Standard Pre-Hire
                                        </td>
                                        <td className="p-4 text-slate-600">10-Panel Urine Screen (Lab Based)</td>
                                        <td className="p-4 text-slate-600">General Industrial, Warehouse, Clerical</td>
                                    </tr>
                                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-semibold text-brand-navy flex items-center gap-2">
                                            <ShieldCheck className="w-4 h-4 text-green-600" />
                                            DOT Federal
                                        </td>
                                        <td className="p-4 text-slate-600">5-Panel Regulated (SAMHSA Certified)</td>
                                        <td className="p-4 text-slate-600">CDL Drivers, Safety-Sensitive Roles</td>
                                    </tr>
                                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-semibold text-brand-navy flex items-center gap-2">
                                            <FileCheck className="w-4 h-4 text-orange-600" />
                                            Rapid Check
                                        </td>
                                        <td className="p-4 text-slate-600">Instant 5-Panel or 10-Panel (Point of Care)</td>
                                        <td className="p-4 text-slate-600">Same-day starts, High Volume Ramp-ups</td>
                                    </tr>
                                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-semibold text-brand-navy flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4 text-red-600" />
                                            Reasonable Suspicion
                                        </td>
                                        <td className="p-4 text-slate-600">Post-Accident or For-Cause Testing</td>
                                        <td className="p-4 text-slate-600">Incident Investigation, Safety Compliance</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    )
}
