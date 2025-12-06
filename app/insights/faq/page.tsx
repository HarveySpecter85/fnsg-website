import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Staffing & Employment FAQ – First National Staffing",
    description: "Frequently asked questions about industrial staffing, temporary labor, and employment in Georgia.",
    alternates: {
        canonical: '/insights/faq',
    },
    openGraph: {
        title: "Staffing & Employment FAQ – First National Staffing",
        description: "Frequently asked questions about industrial staffing, temporary labor, and employment in Georgia.",
        url: 'https://firstnationalstaffing.com/insights/faq',
        images: ['/insights/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'website',
    },
};

export default function FAQHubPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'FAQ', href: '/insights/faq' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Staffing & Employment FAQ</h1>
                <p className="text-xl text-slate-600 mb-12 max-w-3xl">
                    Answers to common questions about hiring, safety, and workforce management.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    <Link href="/insights/faq/georgia" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Georgia Employment</h3>
                        <p className="text-sm text-slate-500">State-specific laws.</p>
                    </Link>
                    <Link href="/insights/faq/staffing" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">General Staffing</h3>
                        <p className="text-sm text-slate-500">Hiring process.</p>
                    </Link>
                    <Link href="/insights/faq/warehouse" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Warehouse FAQ</h3>
                        <p className="text-sm text-slate-500">Logistics roles.</p>
                    </Link>
                    <Link href="/insights/faq/manufacturing" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Manufacturing FAQ</h3>
                        <p className="text-sm text-slate-500">Production roles.</p>
                    </Link>
                    <Link href="/insights/faq/temp-labor" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Temp Labor</h3>
                        <p className="text-sm text-slate-500">Worker rights.</p>
                    </Link>
                    <Link href="/insights/faq/immigration" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Immigration & I-9</h3>
                        <p className="text-sm text-slate-500">Compliance.</p>
                    </Link>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Questions</h2>
                    <EmptyState message="Loading FAQs..." />
                    {/* // TODO: Connect Supabase query */}
                </div>
            </div>
        </main>
    );
}
