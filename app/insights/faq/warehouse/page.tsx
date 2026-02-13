import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import FaqJsonLd from '@/app/components/seo/faq-json-ld';

export const metadata = {
    title: "Warehouse Jobs & Staffing FAQ – First National Staffing",
    description: "FAQ for warehouse workers and employers. Safety gear, shift schedules, and certification requirements.",
    alternates: {
        canonical: '/insights/faq/warehouse',
    },
    openGraph: {
        title: "Warehouse Jobs & Staffing FAQ – First National Staffing",
        description: "FAQ for warehouse workers and employers. Safety gear, shift schedules, and certification requirements.",
        url: 'https://firstnationalstaffing.com/insights/faq/warehouse',
        images: ['/insights/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function WarehouseFAQPage() {
    const faqData = [
        {
            question: "What is the average turnaround time to fill warehouse roles?",
            answer: "Most standard warehouse positions are filled within 24 to 48 hours depending on client requirements, role complexity, and candidate availability. Forklift operators and specialized roles (reach truck operators, order pickers) may require 48–72 hours for proper competency matching. Urgent requests for 20+ workers are expedited to 12–24 hours using our high-velocity deployment system."
        },
        {
            question: "Do candidates come with their own PPE?",
            answer: "Yes, all FNSG warehouse candidates are pre-screened for possession of OSHA-compliant steel-toed boots and standard warehouse PPE (hi-visibility vests, gloves). We verify PPE compliance during onboarding. We also provide branded company gear, safety glasses, and additional PPE upon client request. PPE costs are typically absorbed by the client or passed through as direct expenses."
        },
        {
            question: "How do you ensure safety compliance?",
            answer: "FNSG conducts comprehensive safety orientations covering OSHA warehouse standards, forklift operation safety, proper lifting techniques, electrical hazard awareness, and fall prevention. All candidates complete documented safety briefings before deployment. On-site supervisors conduct continuous safety monitoring, incident tracking, and corrective coaching. We maintain audit-ready safety documentation and incident logs."
        },
        {
            question: "What is the current hourly rate for forklift operators?",
            answer: "Current rates vary by Georgia location and certification level: $16.50–$19.00/hour for stand-up operators; $17.50–$20.50/hour for sit-down operators; $18.00–$21.00/hour for reach truck and order picker specialists. Rates adjust quarterly based on market benchmarking across Gwinnett, Hall, Jackson, and Metro Atlanta counties. Contact FNSG for location-specific pricing."
        }
    ];

    return (
        <main className="py-16 bg-white">
            <FaqJsonLd faqs={faqData} />
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'FAQ', href: '/insights/faq' },
                    { label: 'Warehouse', href: '/insights/faq/warehouse' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Warehouse Staffing FAQ</h1>

                <div className="mb-12">
                    {/* // TODO: Replace staticFAQData with Supabase query once backend is ready. */}
                    <div className="space-y-6">
                        {faqData.map((faq, index) => (
                            <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/industry/warehouse" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Warehouse Insights</h4>
                        <p className="text-xs text-slate-500">Deep dive.</p>
                    </Link>
                    <Link href="/insights/osha/checklists" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Safety Checklists</h4>
                        <p className="text-xs text-slate-500">Compliance.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
