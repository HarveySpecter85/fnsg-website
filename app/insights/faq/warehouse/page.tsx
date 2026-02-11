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
            answer: "Most standard warehouse positions are filled within 24 to 48 hours depending on the client requirements and candidate availability."
        },
        {
            question: "Do candidates come with their own PPE?",
            answer: "Yes, our candidates are screened for possession of steel-toed boots and standard PPE. We can also provide branded gear upon request."
        },
        {
            question: "How do you ensure safety compliance?",
            answer: "We conduct basic safety orientations and verify that all candidates understand general warehouse safety protocols before deployment."
        },
        {
            question: "What is the current hourly rate for forklift operators?",
            answer: "Rates vary by location, but current averages range from $16.50 to $19.00/hr depending on certification levels."
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
