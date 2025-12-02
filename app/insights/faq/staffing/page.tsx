import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Staffing Services FAQ – First National Staffing",
    description: "Questions about hiring temp staff, temp-to-perm conversion, and staffing agency fees.",
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
                    <EmptyState message="Loading Staffing FAQs..." />
                    {/* // TODO: Connect Supabase query */}
                    {/* // TODO: Add FAQ JSON-LD schema */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/pay-rates" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Pay Rates</h4>
                        <p className="text-xs text-slate-500">Cost of labor.</p>
                    </Link>
                    <Link href="/insights/industry/warehouse" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Warehouse Staffing</h4>
                        <p className="text-xs text-slate-500">Specifics.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
