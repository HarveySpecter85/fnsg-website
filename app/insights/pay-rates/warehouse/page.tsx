import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Warehouse Pay Rates & Salary Trends – First National Staffing",
    description: "Current pay rates for warehouse positions in Georgia. Forklift operators, pickers, packers, and shipping clerks.",
};

export default function WarehousePayPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Pay Rates', href: '/insights/pay-rates' },
                    { label: 'Warehouse', href: '/insights/pay-rates/warehouse' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Warehouse Pay Rate Trends</h1>

                <div className="mb-12 p-6 border border-slate-200 rounded-xl bg-slate-50">
                    <h3 className="font-bold text-slate-900 mb-4">Average Hourly Rates (Placeholder)</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                            <span className="text-slate-600">Forklift Operator</span>
                            <span className="font-mono font-bold text-slate-900">$18.50 - $22.00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                            <span className="text-slate-600">Picker / Packer</span>
                            <span className="font-mono font-bold text-slate-900">$16.00 - $18.00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600">Shipping Clerk</span>
                            <span className="font-mono font-bold text-slate-900">$17.50 - $20.00</span>
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-4 italic">// TODO: Load dynamic pay data from OS</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/industry/warehouse" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Warehouse Insights</h4>
                        <p className="text-xs text-slate-500">Industry trends.</p>
                    </Link>
                    <Link href="/insights/city/norcross" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Norcross Hub</h4>
                        <p className="text-xs text-slate-500">Local rates.</p>
                    </Link>
                    <Link href="/insights/faq/staffing" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Staffing FAQ</h4>
                        <p className="text-xs text-slate-500">Hiring questions.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
