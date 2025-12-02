import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "OSHA Regulations & Updates – First National Staffing",
    description: "Stay current with OSHA regulations affecting warehouse, manufacturing, and industrial staffing.",
};

export default function OSHARegulationsPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'OSHA', href: '/insights/osha' },
                    { label: 'Regulations', href: '/insights/osha/regulations' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">OSHA Regulations & Compliance Updates</h1>

                <div className="mb-12">
                    <EmptyState message="Loading regulation updates..." />
                    {/* // TODO: Connect Supabase query */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/industry/manufacturing" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Manufacturing Safety</h4>
                        <p className="text-xs text-slate-500">Industry specifics.</p>
                    </Link>
                    <Link href="/insights/osha/fines" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Recent Fines</h4>
                        <p className="text-xs text-slate-500">Enforcement trends.</p>
                    </Link>
                    <Link href="/insights/city/gainesville" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Gainesville Hub</h4>
                        <p className="text-xs text-slate-500">Local compliance.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
