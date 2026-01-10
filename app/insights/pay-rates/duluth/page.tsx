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
                    <h3 className="font-bold text-slate-900 mb-4">2025 Pay Rate Snapshot – Duluth</h3>
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
                                    { role: "Electronic Assembler", avg: 18.50, range: "17.00 – 20.00" },
                                    { role: "CNC Operator", avg: 25.00, range: "22.00 – 28.00" },
                                    { role: "Quality Tech", avg: 21.00, range: "19.00 – 23.00" },
                                    { role: "Production Lead", avg: 24.00, range: "22.00 – 26.00" }
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
