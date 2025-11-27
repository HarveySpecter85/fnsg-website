import type { Metadata } from 'next'
import { FadeIn } from '@/app/components/anim/fade-in'

export const metadata: Metadata = {
    title: "Marketing Communications Policy | CAN-SPAM Compliance",
    description: "Our policy regarding email marketing and compliance with the CAN-SPAM Act.",
}

export default function MarketingPolicyPage() {
    return (
        <main className="bg-white py-20 lg:py-28">
            <div className="container max-w-4xl mx-auto">
                <FadeIn>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Marketing Communications Policy</h1>
                    <p className="text-slate-500 mb-12">Last Updated: November 27, 2025</p>

                    {/* Zero-Click Block */}
                    <div className="bg-slate-50 border-l-4 border-slate-900 p-8 mb-12">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            First National Staffing Group respects your inbox. We strictly adhere to the <strong className="text-slate-900">CAN-SPAM Act</strong>, ensuring every marketing email contains a clear, one-click unsubscribe link and a physical mailing address. We do not sell your email address to third parties.
                        </p>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequency & Content</h2>
                            <p>
                                If you opt-in to our newsletter or job alerts, you can expect to receive emails approximately once per month. Content may include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Industry insights and labor market trends</li>
                                <li>New job openings and hiring events</li>
                                <li>Company news and updates</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Opt-Out Mechanism</h2>
                            <p>
                                You may unsubscribe from our marketing communications at any time by clicking the "Unsubscribe" link located at the bottom of every email. Your request will be processed immediately, and you will be removed from our mailing list within 10 business days as required by law.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Transactional Emails</h2>
                            <p>
                                Please note that even if you unsubscribe from marketing emails, you may still receive transactional emails related to your employment, payroll, or specific job applications you have submitted.
                            </p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </main>
    )
}
