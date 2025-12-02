import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Manufacturing Jobs & Staffing FAQ – First National Staffing",
    description: "FAQ for manufacturing roles. PPE requirements, shift differentials, and skill assessments.",
};

export default function ManufacturingFAQPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'FAQ', href: '/insights/faq' },
                    { label: 'Manufacturing', href: '/insights/faq/manufacturing' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Manufacturing Staffing FAQ</h1>

                <div className="mb-12">
                    <EmptyState message="Loading Manufacturing FAQs..." />
                    {/* // TODO: Connect Supabase query */}
                    {/* // TODO: Add FAQ JSON-LD schema */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/industry/manufacturing" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Manufacturing Insights</h4>
                        <p className="text-xs text-slate-500">Deep dive.</p>
                    </Link>
                    <Link href="/insights/city/duluth" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Duluth Hub</h4>
                        <p className="text-xs text-slate-500">Tech mfg.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
