import type { Metadata } from 'next'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { Tractor, FileText, Bus, AlertOctagon, CheckSquare } from 'lucide-react'

export const metadata: Metadata = {
    title: "MSPA Agricultural Compliance | Farm Labor Contractor (FLC)",
    description: "First National Staffing Group holds a valid FLC Certificate of Registration. We ensure full MSPA compliance for migrant and seasonal agricultural workers.",
}

export default function MSPACompliancePage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6">
                            <Tractor className="w-4 h-4" />
                            <span>Agricultural Compliance</span>
                        </div>
                        <TextReveal as="h1" className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                            MSPA Compliance Strategy: <span className="text-blue-600">Migrant & Seasonal Protection</span>
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
                                <strong className="text-brand-navy font-bold">First National Staffing Group</strong> holds a valid <strong className="text-brand-navy font-bold">Certificate of Registration</strong> as a Farm Labor Contractor (FLC). We strictly adhere to federal standards for <strong className="text-brand-navy font-bold">Wage Disclosures (WH-516)</strong>, housing safety, and transportation authorization under the Migrant and Seasonal Agricultural Worker Protection Act (MSPA).
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Risk Index */}
            <section className="py-16 bg-slate-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                                    <AlertOctagon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold uppercase">Avg. MSPA Fine</p>
                                    <p className="text-3xl font-bold text-brand-navy">$1,000</p>
                                    <p className="text-xs text-slate-400">per violation / per worker</p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold uppercase">Top Violation</p>
                                    <p className="text-xl font-bold text-brand-navy">Failure to Disclose</p>
                                    <p className="text-xs text-slate-400">Terms & Conditions of Employment</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 3 Pillars of MSPA */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">The 3 Pillars of MSPA Compliance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
                            <CheckSquare className="w-10 h-10 text-blue-600 mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-4">Wages & Payroll</h3>
                            <p className="text-slate-600">
                                Accurate record-keeping of hours, piece rates, and deductions. We provide itemized pay statements to every worker, every week.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600">
                            <Bus className="w-10 h-10 text-green-600 mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-4">Transportation</h3>
                            <p className="text-slate-600">
                                All vehicles used for worker transport are insured and inspected. Drivers hold valid licenses and medical certificates.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.3} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600">
                            <FileText className="w-10 h-10 text-purple-600 mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-4">Disclosures</h3>
                            <p className="text-slate-600">
                                We provide written disclosure of employment terms (WH-516) in the worker's native language at the time of recruitment.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-4xl">
                    <h2 className="text-2xl font-bold text-brand-navy mb-8">Common Compliance Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-2">What about Joint Employment Liability?</h3>
                            <p className="text-slate-600">
                                Under MSPA, growers and FLCs can be "joint employers." This means if your staffing partner isn't compliant, YOU are liable. Partnering with a registered, insured FLC like FNSG is your best defense.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-2">Do you handle crew transportation?</h3>
                            <p className="text-slate-600">
                                Yes. We have authorized vehicles and drivers listed on our Certificate of Registration. We adhere to strict safety standards for all crew movements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
