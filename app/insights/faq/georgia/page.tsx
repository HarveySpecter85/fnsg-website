import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Georgia Employment Law FAQ – First National Staffing",
    description: "Common questions about Georgia employment laws, workers comp, and right-to-work status.",
};

export default function GeorgiaFAQPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'FAQ', href: '/insights/faq' },
                    { label: 'Georgia', href: '/insights/faq/georgia' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Georgia Employment Law FAQ</h1>

                <div className="mb-12">
                    <EmptyState message="Loading Georgia FAQs..." />
                    {/* // TODO: Connect Supabase query */}
                    {/* // TODO: Add FAQ JSON-LD schema */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/city/gainesville" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Gainesville Hub</h4>
                        <p className="text-xs text-slate-500">Local laws.</p>
                    </Link>
                    <Link href="/insights/osha/regulations" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">OSHA Regs</h4>
                        <p className="text-xs text-slate-500">Federal vs State.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
