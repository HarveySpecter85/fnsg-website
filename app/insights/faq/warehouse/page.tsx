import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

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
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'FAQ', href: '/insights/faq' },
                    { label: 'Warehouse', href: '/insights/faq/warehouse' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Warehouse Staffing FAQ</h1>

                <div className="mb-12">
                    <EmptyState message="Loading Warehouse FAQs..." />
                    {/* // TODO: Connect Supabase query */}
                    {/* // TODO: Add FAQ JSON-LD schema */}
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
