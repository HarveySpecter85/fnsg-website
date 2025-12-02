import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "OSHA Fines & Penalties Analysis – First National Staffing",
    description: "Analysis of recent OSHA fines in Georgia. Learn from common violations to avoid costly penalties.",
};

export default function OSHAFinesPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'OSHA', href: '/insights/osha' },
                    { label: 'Fines & Penalties', href: '/insights/osha/fines' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">OSHA Fines & Enforcement Trends</h1>

                <div className="mb-12">
                    <EmptyState message="Loading fine analysis..." />
                    {/* // TODO: Connect Supabase query */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/industry/recycling" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Recycling Risks</h4>
                        <p className="text-xs text-slate-500">High-hazard focus.</p>
                    </Link>
                    <Link href="/insights/osha/case-studies" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Case Studies</h4>
                        <p className="text-xs text-slate-500">Lessons learned.</p>
                    </Link>
                    <Link href="/insights/city/south-fulton" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">South Fulton Hub</h4>
                        <p className="text-xs text-slate-500">Industrial enforcement.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
