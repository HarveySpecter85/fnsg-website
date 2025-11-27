import type { Metadata } from 'next'
import { FadeIn } from '@/app/components/anim/fade-in'

export const metadata: Metadata = {
    title: "Accessibility Statement | ADA Compliance",
    description: "First National Staffing Group's commitment to digital accessibility and WCAG 2.1 Level AA standards.",
}

export default function AccessibilityStatementPage() {
    return (
        <main className="bg-white py-20 lg:py-28">
            <div className="container max-w-4xl mx-auto">
                <FadeIn>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Accessibility Statement</h1>
                    <p className="text-slate-500 mb-12">Last Updated: November 27, 2025</p>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment</h2>
                            <p>
                                First National Staffing Group is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Conformance Status</h2>
                            <p>
                                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. First National Staffing Group is partially conformant with <strong>WCAG 2.1 Level AA</strong>. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Feedback</h2>
                            <p>
                                We welcome your feedback on the accessibility of the First National Staffing Group website. Please let us know if you encounter accessibility barriers:
                            </p>
                            <div className="bg-slate-50 p-6 rounded-lg mt-4 border border-slate-200">
                                <p className="mb-2"><strong>Phone:</strong> +1 470-470-4243</p>
                                <p><strong>Email:</strong> support@firstnationalstaffing.com</p>
                                <p className="mt-4 text-sm text-slate-600">We try to respond to feedback within 2 business days.</p>
                            </div>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </main>
    )
}
