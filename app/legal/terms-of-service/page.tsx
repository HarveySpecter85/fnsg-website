import type { Metadata } from 'next'
import { FadeIn } from '@/app/components/anim/fade-in'

export const metadata: Metadata = {
    title: "Terms of Service | User Agreement",
    description: "Terms and conditions for using First National Staffing Group's website and worker portals.",
}

export default function TermsOfServicePage() {
    return (
        <main className="bg-white py-20 lg:py-28">
            <div className="container max-w-4xl mx-auto">
                <FadeIn>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service & User Agreement</h1>
                    <p className="text-slate-500 mb-12">Last Updated: November 27, 2025</p>

                    {/* Zero-Click Block */}
                    <div className="bg-slate-50 border-l-4 border-slate-900 p-8 mb-12">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            By accessing the <strong className="text-slate-900">First National Staffing Group</strong> website or <strong className="text-slate-900">Worker Portals</strong>, users agree to these Terms. Any unauthorized scraping of candidate data, use of automated bots, or attempts to breach our security protocols is strictly prohibited and will result in immediate termination of access.
                        </p>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptable Use</h2>
                            <p>You agree to use our services only for lawful purposes. You must not use our site to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Transmit any unsolicited or unauthorized advertising (spam).</li>
                                <li>Impersonate any person or entity.</li>
                                <li>Interfere with or disrupt the integrity or performance of the site.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Account Security</h2>
                            <p>
                                If you are provided with a username and password for our Worker Portal, you are responsible for maintaining the confidentiality of your account information. You agree to notify us immediately of any unauthorized use of your account.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
                            <p>
                                All content on this site, including text, graphics, logos, and software, is the property of First National Staffing Group and is protected by United States and international copyright laws.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitation of Liability</h2>
                            <p>
                                First National Staffing Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the services.
                            </p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </main>
    )
}
