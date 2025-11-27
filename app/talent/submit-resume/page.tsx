import type { Metadata } from 'next'
import Link from 'next/link'
import { TextReveal } from '@/app/components/anim/text-reveal'
import { FadeIn } from '@/app/components/anim/fade-in'
import { MagneticButton } from '@/app/components/anim/magnetic-button'
import { FileText, CheckSquare, Upload } from 'lucide-react'

export const metadata: Metadata = {
    title: "Submit Resume | Join Our Talent Network",
    description: "Join the First National Staffing Talent Network. Submit your profile for unadvertised 'Hidden Market' jobs in industrial and hospitality sectors.",
}

export default function SubmitResumePage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <FileText className="w-4 h-4" />
                            <span>General Application</span>
                        </div>
                        <TextReveal as="h1" className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 leading-tight">
                            Join Our Talent Network
                        </TextReveal>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl">
                            Don't see the perfect job listed? Submit your profile and let our recruiters find the right match for you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Zero-Click Answer Block */}
            <section className="py-20">
                <div className="container">
                    <FadeIn>
                        <div className="bg-white border-l-8 border-brand-primary p-8 md:p-12 rounded-r-xl shadow-sm ring-1 ring-slate-100">
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                                Looking for work but don't see a specific opening? Submit your profile to the <strong className="text-brand-navy font-bold">First National Staffing Talent Network</strong>. Our recruiters review the general pool daily to match skills with unadvertised <strong className="text-brand-navy font-bold">'Hidden Market'</strong> jobs that need to be filled immediately.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Skill Tagging Form (UI Only) */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200">
                        <h2 className="text-2xl font-bold text-brand-navy mb-8">Tell Us About Your Skills</h2>

                        <form className="space-y-8">
                            {/* Personal Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" />
                                </div>
                            </div>

                            {/* Skills Checkboxes */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-4">Select Your Skills & Certifications</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Forklift Certified",
                                        "Machine Operation",
                                        "Assembly / Production",
                                        "Shipping & Receiving",
                                        "CDL Driver (Class A/B)",
                                        "Bilingual (English/Spanish)",
                                        "Hospitality / Food Service",
                                        "General Labor"
                                    ].map((skill) => (
                                        <label key={skill} className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors group">
                                            <div className="w-5 h-5 rounded border border-slate-300 bg-white flex items-center justify-center group-hover:border-blue-500">
                                                <input type="checkbox" className="hidden" />
                                                <CheckSquare className="w-3.5 h-3.5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <span className="text-slate-700 font-medium">{skill}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Resume Upload */}
                            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                                <Upload className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                                <p className="text-slate-900 font-medium mb-1">Upload your Resume</p>
                                <p className="text-sm text-slate-500">PDF, DOCX, or RTF (Max 5MB)</p>
                            </div>

                            <div className="pt-4">
                                <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-lg shadow-blue-600/20">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
