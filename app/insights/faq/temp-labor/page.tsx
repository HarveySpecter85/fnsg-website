import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Temp Labor Rights & FAQ – First National Staffing",
    description: "Questions about temporary employment rights, benefits, and safety in Georgia.",
    alternates: {
        canonical: '/insights/faq/temp-labor',
    },
    openGraph: {
        title: "Temp Labor Rights & FAQ – First National Staffing",
        description: "Questions about temporary employment rights, benefits, and safety in Georgia.",
        url: 'https://firstnationalstaffing.com/insights/faq/temp-labor',
        images: ['/insights/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function TempLaborFAQPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'FAQ', href: '/insights/faq' },
                    { label: 'Temp Labor', href: '/insights/faq/temp-labor' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Temp Labor FAQ</h1>

                <div className="mb-12">
                    <EmptyState message="Loading Temp Labor FAQs..." />
                    {/* // TODO: Connect Supabase query */}
                    {/* // TODO: Add FAQ JSON-LD schema */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/osha/temp-labor" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Safety Rights</h4>
                        <p className="text-xs text-slate-500">OSHA protection.</p>
                    </Link>
                    <Link href="/insights/pay-rates" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Pay Rates</h4>
                        <p className="text-xs text-slate-500">Wage info.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
