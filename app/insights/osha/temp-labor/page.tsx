import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Temp Labor Safety & Joint Employment – First National Staffing",
    description: "Understanding OSHA's Temporary Worker Initiative and joint employer responsibilities for safety.",
};

export default function OSHATempLaborPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'OSHA', href: '/insights/osha' },
                    { label: 'Temp Labor Safety', href: '/insights/osha/temp-labor' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Temp Labor Safety & Joint Employment</h1>

                <div className="mb-12">
                    <EmptyState message="Loading temp labor safety guides..." />
                    {/* // TODO: Connect Supabase query */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/industry/warehouse" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Warehouse Safety</h4>
                        <p className="text-xs text-slate-500">High-volume staffing.</p>
                    </Link>
                    <Link href="/insights/osha/checklists" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Onboarding Checklists</h4>
                        <p className="text-xs text-slate-500">New hire safety.</p>
                    </Link>
                    <Link href="/insights/faq/temp-labor" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Temp Labor FAQ</h4>
                        <p className="text-xs text-slate-500">Common questions.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
