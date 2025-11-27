import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { User, FileText, HelpCircle, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
    title: "Worker Portal Login | Paystubs & Onboarding",
    description: "Access your First National Staffing employee portal. View paystubs, complete onboarding documents, and contact payroll support.",
}

export default function WorkerPortalPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-brand-navy border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-bold mb-6 backdrop-blur-sm">
                            <User className="w-4 h-4" />
                            <span>Employee Access</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Worker Portal
                        </TextReveal>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Manage your employment. Access paystubs, timecards, and tax documents securely.
                        </p>
                    </div>
                </div>
            </section>

            {/* Login Utilities */}
            <section className="py-20 -mt-16 relative z-10">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center hover:border-blue-500 transition-colors group">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <User className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy mb-3">Webcenter Portal</h2>
                            <p className="text-slate-600 mb-8">View your weekly paystubs, access W-2s, and check your timecard history.</p>
                            <a href="#" className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors">
                                Login to Webcenter
                            </a>
                        </FadeIn>

                        <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center hover:border-green-500 transition-colors group">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-brand-navy mb-3">Onboarding Hub</h2>
                            <p className="text-slate-600 mb-8">Complete your new hire paperwork, I-9 verification, and safety acknowledgments.</p>
                            <a href="#" className="inline-block w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-colors">
                                Complete Onboarding
                            </a>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Support FAQ */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Employee Support</h2>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="text-lg font-bold text-brand-navy mb-2 flex items-center gap-2">
                                    <HelpCircle className="w-5 h-5 text-blue-600" />
                                    Forgot your password?
                                </h3>
                                <p className="text-slate-600">
                                    If you cannot access Webcenter, please contact your local branch representative to have your password reset. For security, we cannot reset passwords via email.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="text-lg font-bold text-brand-navy mb-2 flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                    Payroll Issues?
                                </h3>
                                <p className="text-slate-600">
                                    For questions regarding your paycheck, hours, or deductions, please email our payroll team at <a href="mailto:payroll@firstnationalstaffing.com" className="text-blue-600 font-semibold hover:underline">payroll@firstnationalstaffing.com</a>. Please include your full name and employee ID.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="text-lg font-bold text-brand-navy mb-2 flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                    Call-Out Line
                                </h3>
                                <p className="text-slate-600">
                                    If you are unable to make it to your assignment, you must call the attendance line at least 2 hours before your shift starts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
