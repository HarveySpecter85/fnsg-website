import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Industrial Pay Rate Trends & Wage Analysis – First National Staffing",
    description: "Current wage data for Georgia's industrial sector. Pay rate trends for warehouse, manufacturing, and logistics roles.",
};

export default function PayRatesHubPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Pay Rates', href: '/insights/pay-rates' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Industrial Pay Rate Trends</h1>
                <p className="text-xl text-slate-600 mb-12 max-w-3xl">
                    Stay competitive with real-time wage analysis. We track pay rate shifts across Georgia's key industrial markets.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    <Link href="/insights/pay-rates/warehouse" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Warehouse Wages</h3>
                        <p className="text-sm text-slate-500">Forklift, picker, packer rates.</p>
                    </Link>
                    <Link href="/insights/pay-rates/manufacturing" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Manufacturing Wages</h3>
                        <p className="text-sm text-slate-500">Assembler, machine op rates.</p>
                    </Link>
                    <Link href="/insights/pay-rates/gainesville" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Gainesville Trends</h3>
                        <p className="text-sm text-slate-500">Local market data.</p>
                    </Link>
                    <Link href="/insights/pay-rates/norcross" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Norcross Trends</h3>
                        <p className="text-sm text-slate-500">Gwinnett wage analysis.</p>
                    </Link>
                    <Link href="/insights/pay-rates/south-fulton" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">South Fulton Trends</h3>
                        <p className="text-sm text-slate-500">Airport corridor rates.</p>
                    </Link>
                    <Link href="/insights/pay-rates/duluth" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Duluth Trends</h3>
                        <p className="text-sm text-slate-500">Tech manufacturing rates.</p>
                    </Link>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Latest Wage Reports</h2>
                    <EmptyState message="Loading pay rate data..." />
                    {/* // TODO: Connect Supabase query */}
                </div>
            </div>
        </main>
    );
}
