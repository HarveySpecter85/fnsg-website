import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Staffing Services FAQ – First National Staffing",
    description: "Questions about hiring temp staff, temp-to-perm conversion, and staffing agency fees.",
    alternates: {
        canonical: '/insights/faq/staffing',
    },
    openGraph: {
        title: "Staffing Services FAQ – First National Staffing",
        description: "Questions about hiring temp staff, temp-to-perm conversion, and staffing agency fees.",
        url: 'https://firstnationalstaffing.com/insights/faq/staffing',
        images: ['/insights/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function StaffingFAQPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'FAQ', href: '/insights/faq' },
                    { label: 'Staffing', href: '/insights/faq/staffing' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Staffing Services FAQ</h1>

                <div className="mb-12">
                    {/* // TODO: Replace staticFAQData with Supabase query once backend is ready. */}
                    <div className="space-y-6">
                        {[
                            {
                                question: "What is the average time to fill a general labor role?",
                                answer: "We typically fill general labor positions within 24 to 48 hours, depending on shift requirements."
                            },
                            {
                                question: "Does First National Staffing use E-Verify?",
                                answer: "Yes, we participate in E-Verify for all placements to ensure workforce compliance."
                            },
                            {
                                question: "How do you handle attendance issues?",
                                answer: "We have a strict attendance policy. No-call/no-show incidents result in immediate review and potential replacement."
                            },
                            {
                                question: "What happens if a temp employee underperforms?",
                                answer: "We offer a 4-hour guarantee. If you are unsatisfied within the first 4 hours, we replace the worker at no cost."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/pay-rates" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Pay Rates</h4>
                        <p className="text-xs text-slate-500">Cost of labor.</p>
                    </Link>
                    <Link href="/insights/industry/warehouse" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Warehouse Staffing</h4>
                        <p className="text-xs text-slate-500">Logistics & distribution roles.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
