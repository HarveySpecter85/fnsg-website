"use client";

import GHLLeadForm from "./GHLLeadForm";

export default function PremiumCTA() {
    return (
        <section className="bg-blue-50 py-16 px-6 rounded-2xl border border-blue-200 shadow-inner my-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
                <h2 className="text-3xl font-bold text-blue-900">
                    Ready to Strengthen Your Workforce?
                </h2>
                <p className="text-lg text-blue-700 mt-3">
                    Get a customized workforce strategy, including on-site training, productivity
                    support, and staffing optimization. Our team will respond within 10 minutes.
                </p>
            </div>

            <GHLLeadForm />
        </section>
    );
}
