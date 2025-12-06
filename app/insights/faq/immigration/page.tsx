import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Immigration & I-9 Compliance FAQ – First National Staffing",
    description: "FAQ on E-Verify, I-9 compliance, and work authorization for Georgia employers.",
    alternates: {
        canonical: '/insights/faq/immigration',
    },
    openGraph: {
        title: "Immigration & I-9 Compliance FAQ – First National Staffing",
        description: "FAQ on E-Verify, I-9 compliance, and work authorization for Georgia employers.",
        url: 'https://firstnationalstaffing.com/insights/faq/immigration',
        images: ['/insights/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function ImmigrationFAQPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'FAQ', href: '/insights/faq' },
                    { label: 'Immigration', href: '/insights/faq/immigration' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Immigration & I-9 Compliance FAQ</h1>

                <div className="mb-12">
                    <EmptyState message="Loading Compliance FAQs..." />
                    {/* // TODO: Connect Supabase query */}
                    {/* // TODO: Add FAQ JSON-LD schema */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/osha/regulations" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">OSHA Regs</h4>
                        <p className="text-xs text-slate-500">Other compliance.</p>
                    </Link>
                    <Link href="/insights/city/norcross" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Norcross Hub</h4>
                        <p className="text-xs text-slate-500">Diverse workforce.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
