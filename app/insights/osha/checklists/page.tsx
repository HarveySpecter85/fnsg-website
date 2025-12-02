import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Industrial Safety Checklists & Audits – First National Staffing",
    description: "Downloadable OSHA safety checklists for warehouses, manufacturing plants, and food production facilities.",
};

export default function OSHAChecklistsPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'OSHA', href: '/insights/osha' },
                    { label: 'Checklists', href: '/insights/osha/checklists' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Safety Checklists & Audit Tools</h1>

                <div className="mb-12">
                    <EmptyState message="Loading checklists..." />
                    {/* // TODO: Connect Supabase query */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/industry/food-production" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Food Safety</h4>
                        <p className="text-xs text-slate-500">GMP & OSHA.</p>
                    </Link>
                    <Link href="/insights/osha/regulations" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Regulations</h4>
                        <p className="text-xs text-slate-500">Reference standards.</p>
                    </Link>
                    <Link href="/insights/city/norcross" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Norcross Hub</h4>
                        <p className="text-xs text-slate-500">Local safety resources.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
