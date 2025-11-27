import type { Metadata } from 'next'
import { FadeIn } from '@/app/components/anim/fade-in'

export const metadata: Metadata = {
    title: "TCPA Compliance Policy | SMS Terms of Service",
    description: "Terms regarding our use of SMS/Text Messaging and compliance with the Telephone Consumer Protection Act (TCPA).",
}

export default function TCPAPolicyPage() {
    return (
        <main className="bg-white py-20 lg:py-28">
            <div className="container max-w-4xl mx-auto">
                <FadeIn>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">TCPA Compliance & SMS Terms of Service</h1>
                    <p className="text-slate-500 mb-12">Last Updated: November 27, 2025</p>

                    {/* Zero-Click Block */}
                    <div className="bg-slate-50 border-l-4 border-slate-900 p-8 mb-12">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            First National Staffing Group utilizes <strong className="text-slate-900">SMS/Text Messaging</strong> to notify candidates of job offers, interview reminders, and urgent assignment updates. By providing your mobile number during the application process, you grant <strong className="text-slate-900">Prior Express Written Consent</strong> to receive automated messages from us.
                        </p>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">SMS Program Details</h2>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Opt-In:</strong> You opt-in to receive messages by submitting a job application or filling out a contact form on our website.</li>
                                <li><strong>Frequency:</strong> Message frequency varies based on your job search activity and assignment status.</li>
                                <li><strong>Cost:</strong> Message and data rates may apply depending on your mobile carrier plan.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Mandatory Keywords</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-2">Opt-Out</h3>
                                    <p className="text-slate-600">Reply <strong>STOP</strong> to any message to unsubscribe. You will receive a final confirmation message.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-2">Help</h3>
                                    <p className="text-slate-600">Reply <strong>HELP</strong> for assistance, or call our support line at <strong>+1 470-470-4243</strong>.</p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Carrier Liability</h2>
                            <p>
                                Carriers are not liable for delayed or undelivered messages. First National Staffing Group is not responsible for any delays in the receipt of any SMS messages connected with our SMS Gateway.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy</h2>
                            <p>
                                We respect your privacy. We will not share or use your mobile number for any other purpose. For more information, please read our <a href="/legal/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                            </p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </main>
    )
}
