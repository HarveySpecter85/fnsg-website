import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Manufacturing Pay Rates & Salary Trends – First National Staffing",
    description: "Wage analysis for manufacturing roles. Assemblers, machine operators, welders, and quality control inspectors.",
    alternates: {
        canonical: '/insights/pay-rates/manufacturing',
    },
    openGraph: {
        title: "Manufacturing Pay Rates & Salary Trends – First National Staffing",
        description: "Wage analysis for manufacturing roles. Assemblers, machine operators, welders, and quality control inspectors.",
        url: 'https://firstnationalstaffing.com/insights/pay-rates/manufacturing',
        images: ['/insights/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function ManufacturingPayPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Pay Rates', href: '/insights/pay-rates' },
                    { label: 'Manufacturing', href: '/insights/pay-rates/manufacturing' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Manufacturing Pay Rate Trends</h1>

                <div className="mb-12 p-6 border border-slate-200 rounded-xl bg-slate-50">
                    <h3 className="font-bold text-slate-900 mb-4">Average Hourly Rates (Placeholder)</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                            <span className="text-slate-600">Machine Operator</span>
                            <span className="font-mono font-bold text-slate-900">$17.00 - $21.00</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                            <span className="text-slate-600">Assembler</span>
                            <span className="font-mono font-bold text-slate-900">$15.50 - $17.50</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600">Welder (MIG/TIG)</span>
                            <span className="font-mono font-bold text-slate-900">$22.00 - $28.00</span>
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-4 italic">// TODO: Load dynamic pay data from OS</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/industry/manufacturing" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Manufacturing Insights</h4>
                        <p className="text-xs text-slate-500">Industry trends.</p>
                    </Link>
                    <Link href="/insights/city/duluth" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Duluth Hub</h4>
                        <p className="text-xs text-slate-500">Tech mfg rates.</p>
                    </Link>
                    <Link href="/insights/osha/regulations" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">OSHA Regs</h4>
                        <p className="text-xs text-slate-500">Safety compliance.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
