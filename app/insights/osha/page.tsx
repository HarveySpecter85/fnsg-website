import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "OSHA Compliance & Safety Intelligence – First National Staffing",
    description: "Comprehensive OSHA compliance resources for industrial employers. Regulations, safety checklists, and risk mitigation strategies.",
};

export default function OSHAHubPage() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'OSHA & Compliance', href: '/insights/osha' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">OSHA Compliance & Safety Intelligence</h1>
                <p className="text-xl text-slate-600 mb-12 max-w-3xl">
                    Protecting your workforce and your bottom line. Expert guidance on navigating complex safety regulations in industrial environments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    <Link href="/insights/osha/regulations" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Regulations</h3>
                        <p className="text-sm text-slate-500">Latest OSHA updates and standards.</p>
                    </Link>
                    <Link href="/insights/osha/temp-labor" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Temp Labor Safety</h3>
                        <p className="text-sm text-slate-500">Joint employer responsibilities.</p>
                    </Link>
                    <Link href="/insights/osha/checklists" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Safety Checklists</h3>
                        <p className="text-sm text-slate-500">Downloadable audit tools.</p>
                    </Link>
                    <Link href="/insights/osha/fines" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Fines & Penalties</h3>
                        <p className="text-sm text-slate-500">Cost of non-compliance.</p>
                    </Link>
                    <Link href="/insights/osha/case-studies" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                        <h3 className="font-bold text-slate-900 mb-2">Case Studies</h3>
                        <p className="text-sm text-slate-500">Real-world safety scenarios.</p>
                    </Link>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Latest Compliance News</h2>
                    <EmptyState message="Loading OSHA updates..." />
                    {/* // TODO: Connect Supabase query */}
                </div>
            </div>
        </main>
    );
}
