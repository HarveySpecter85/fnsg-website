import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Duluth Staffing Pay Rates – First National Staffing",
    description: "Wage trends for Duluth's tech and manufacturing sectors. Skilled assembly, machine operation, and production pay.",
    alternates: {
        canonical: '/insights/pay-rates/duluth',
    },
    openGraph: {
        title: "Duluth Staffing Pay Rates – First National Staffing",
        description: "Wage trends for Duluth's tech and manufacturing sectors.",
        url: 'https://firstnationalstaffing.com/insights/pay-rates/duluth',
        images: ['/insights/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function DuluthPayPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Pay Rates', href: '/insights/pay-rates' },
                    { label: 'Duluth', href: '/insights/pay-rates/duluth' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Duluth Market Pay Rates</h1>

                <div className="mb-12 p-6 border border-slate-200 rounded-xl bg-slate-50">
                    <h3 className="font-bold text-slate-900 mb-4">Local Wage Benchmarks (Placeholder)</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                            <span className="text-slate-600">Electronic Assembler</span>
                            <span className="font-mono font-bold text-slate-900">$17.00 - $20.00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                            <span className="text-slate-600">CNC Operator</span>
                            <span className="font-mono font-bold text-slate-900">$22.00 - $28.00</span>
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-4 italic">// TODO: Load dynamic pay data from OS</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/city/duluth" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Duluth Hub</h4>
                        <p className="text-xs text-slate-500">Market overview.</p>
                    </Link>
                    <Link href="/insights/industry/manufacturing" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Manufacturing</h4>
                        <p className="text-xs text-slate-500">Industry trends.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
