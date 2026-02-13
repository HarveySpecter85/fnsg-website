import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import FaqJsonLd from '@/app/components/seo/faq-json-ld';

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
    const faqData = [
        {
            question: "What is the average time to fill a general labor role?",
            answer: "First National Staffing typically fills general labor positions within 24 to 48 hours, depending on shift type, volume, and specific role requirements. Our rapid placement process includes pre-screening, background verification, OSHA orientation, equipment familiarization, and on-site supervisor assignment. For urgent requests requiring 50+ workers, we expedite deployment within 24 hours using our high-velocity staffing engine."
        },
        {
            question: "Does First National Staffing use E-Verify?",
            answer: "Yes, 100% compliance. All FNSG placements undergo mandatory E-Verify authorization verification, 10-panel drug screening, and I-9 documentation. We maintain audit-ready records for federal compliance and provide clients with verification confirmations. E-Verify participation ensures your workforce is legally authorized and reduces employment eligibility risk."
        },
        {
            question: "How do you handle attendance issues?",
            answer: "FNSG maintains a rigorous attendance policy: No-call/no-show incidents trigger immediate investigation and potential replacement within 24 hours at no additional cost. Our Attendance Intelligence OS predicts attendance risk before absences occur, enabling proactive replacement. For chronic issues, we counsel workers and escalate to termination. Clients receive daily attendance reports and replacement coordination."
        },
        {
            question: "What happens if a temp employee underperforms?",
            answer: "We offer a 4-hour performance guarantee. If you are unsatisfied with a worker's performance, effort, attitude, or capability within the first 4 hours, we replace the worker immediately at no cost. This guarantee covers quality concerns, safety violations, inability to perform tasks, or any reason affecting operations. Replacements are deployed within 2–4 hours."
        }
    ];

    return (
        <main className="py-16 bg-white">
            <FaqJsonLd faqs={faqData} />
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
                        {faqData.map((faq, index) => (
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
