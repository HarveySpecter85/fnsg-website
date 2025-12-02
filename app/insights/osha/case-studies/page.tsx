import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Safety Case Studies & Success Stories – First National Staffing",
    description: "Real-world examples of safety improvements and risk mitigation in Georgia industrial facilities.",
};

export default function OSHACaseStudiesPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'OSHA', href: '/insights/osha' },
                    { label: 'Case Studies', href: '/insights/osha/case-studies' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Safety Case Studies</h1>

                <div className="mb-12">
                    <EmptyState message="Loading case studies..." />
                    {/* // TODO: Connect Supabase query */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/industry/manufacturing" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Manufacturing</h4>
                        <p className="text-xs text-slate-500">Safety wins.</p>
                    </Link>
                    <Link href="/insights/osha/checklists" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Checklists</h4>
                        <p className="text-xs text-slate-500">Audit your site.</p>
                    </Link>
                    <Link href="/insights/city/duluth" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Duluth Hub</h4>
                        <p className="text-xs text-slate-500">Tech manufacturing.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
