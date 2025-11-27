import type { Metadata } from 'next'
import { FadeIn } from '@/app/components/anim/fade-in'

export const metadata: Metadata = {
    title: "Privacy Policy | Data Protection Standards",
    description: "First National Staffing Group's commitment to protecting your privacy and personal data.",
}

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-white py-20 lg:py-28">
            <div className="container max-w-4xl mx-auto">
                <FadeIn>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy & Data Protection Standards</h1>
                    <p className="text-slate-500 mb-12">Last Updated: November 27, 2025</p>

                    {/* Zero-Click Block */}
                    <div className="bg-slate-50 border-l-4 border-slate-900 p-8 mb-12">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">First National Staffing Group</strong> (HQ: 100 Main St SW, Gainesville, GA) is committed to protecting the privacy of our candidates and clients. Data shared with partners like <strong className="text-slate-900">Labcorp/eScreen</strong> or <strong className="text-slate-900">E-Verify</strong> is encrypted and used solely for employment verification and compliance purposes.
                        </p>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information Collection</h2>
                            <p>We collect information necessary for the hiring process, including but not limited to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Personal identification (Name, Address, Phone, Email)</li>
                                <li>Employment history and Resume data</li>
                                <li>Tax forms (W-4) and Banking information for payroll</li>
                                <li>Background check authorizations</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use of Data</h2>
                            <p>Your data is used strictly for:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Processing payroll and tax filings</li>
                                <li>Matching your skills with job opportunities</li>
                                <li>Compliance with EEOC and other labor laws</li>
                                <li>Communication regarding job offers and assignments</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Security</h2>
                            <p>
                                We employ industry-standard security measures, including SSL encryption and SOC-2 compliant vendor partnerships, to protect your personal information from unauthorized access, alteration, or disclosure.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Contact for Deletion</h2>
                            <p>
                                You have the right to request the deletion of your personal data, subject to legal retention requirements. To make a request, please contact our support team at <a href="mailto:support@firstnationalstaffing.com" className="text-blue-600 hover:underline">support@firstnationalstaffing.com</a>.
                            </p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </main>
    )
}
