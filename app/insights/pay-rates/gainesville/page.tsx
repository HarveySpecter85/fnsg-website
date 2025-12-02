import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Gainesville Staffing Pay Rates – First National Staffing",
    description: "Local wage trends for Gainesville, GA. Poultry processing, cold storage, and industrial pay scales.",
};

export default function GainesvillePayPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Pay Rates', href: '/insights/pay-rates' },
                    { label: 'Gainesville', href: '/insights/pay-rates/gainesville' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Gainesville Market Pay Rates</h1>

                <div className="mb-12 p-6 border border-slate-200 rounded-xl bg-slate-50">
                    <h3 className="font-bold text-slate-900 mb-4">Local Wage Benchmarks (Placeholder)</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                            <span className="text-slate-600">Poultry Processor</span>
                            <span className="font-mono font-bold text-slate-900">$16.50 - $19.00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                            <span className="text-slate-600">Cold Storage Forklift</span>
                            <span className="font-mono font-bold text-slate-900">$19.00 - $23.00</span>
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-4 italic">// TODO: Load dynamic pay data from OS</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/city/gainesville" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Gainesville Hub</h4>
                        <p className="text-xs text-slate-500">Market overview.</p>
                    </Link>
                    <Link href="/insights/industry/food-production" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Food Production</h4>
                        <p className="text-xs text-slate-500">Industry trends.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
