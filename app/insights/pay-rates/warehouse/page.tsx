import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Warehouse Pay Rates & Salary Trends – First National Staffing",
    description: "Current pay rates for warehouse positions in Georgia. Forklift operators, pickers, packers, and shipping clerks.",
    alternates: {
        canonical: '/insights/pay-rates/warehouse',
    },
    openGraph: {
        title: "Warehouse Pay Rates & Salary Trends – First National Staffing",
        description: "Current pay rates for warehouse positions in Georgia.",
        url: 'https://firstnationalstaffing.com/insights/pay-rates/warehouse',
        images: ['/insights/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
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
                    <h3 className="font-bold text-slate-900 mb-4">2025 Warehouse Pay Rate Snapshot</h3>
                    {/* // TODO: Replace payRates with live Supabase pay-rate tables once backend sync is ready. */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600">
                            <thead className="border-b border-slate-200">
                                <tr>
                                    <th className="pb-2 font-semibold text-slate-900">Role</th>
                                    <th className="pb-2 font-semibold text-slate-900">Avg</th>
                                    <th className="pb-2 font-semibold text-slate-900">Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { role: "Forklift Operator", avg: 20.25, range: "18.50 – 22.00" },
                                    { role: "Picker / Packer", avg: 17.00, range: "16.00 – 18.00" },
                                    { role: "Shipping Clerk", avg: 18.75, range: "17.50 – 20.00" },
                                    { role: "Warehouse Lead", avg: 23.50, range: "22.00 – 25.00" }
                                ].map((rate, i) => (
                                    <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-100 transition-colors">
                                        <td className="py-2 font-medium text-slate-900">{rate.role}</td>
                                        <td className="py-2">${rate.avg.toFixed(2)}</td>
                                        <td className="py-2 text-slate-500">{rate.range}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/industry/warehouse" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Warehouse Insights</h4>
                        <p className="text-xs text-slate-500">Industry trends.</p>
                    </Link>
                    <Link href="/insights/city/norcross" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Norcross Hub</h4>
                        <p className="text-xs text-slate-500">Gwinnett County wage data.</p>
                    </Link>
                    <Link href="/insights/faq/staffing" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Staffing FAQ</h4>
                        <p className="text-xs text-slate-500">Hiring process & fees.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
