import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Building an OSHA-Smart Workforce in Duluth – FNSG",
    description: "Advanced safety training for Duluth's high-tech manufacturing environments. Reducing incidents and improving compliance.",
    openGraph: {
        title: "OSHA Smart Workforce",
        url: "https://firstnationalstaffing.com/insights/city/duluth/osha-smart-workforce",
        type: "article"
    }
};

export default function DuluthOSHASmart() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Duluth', href: '/insights/city/duluth' },
                    { label: 'OSHA Smart', href: '#' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-4">Creating an OSHA-Smart Workforce for Advanced Manufacturing</h1>
                <p className="text-xl text-slate-600 mb-8">Safety protocols for the modern assembly line.</p>

                <div className="prose prose-slate max-w-none mb-12">
                    <EmptyState message="Safety content loading..." />
                    {/* 
                    // TODO: Replace placeholder content with Supabase article body once N8N sync is active.
                    */}
                </div>

                <div className="border-t border-slate-200 pt-8">
                    <h3 className="font-bold text-slate-900 mb-4">Related Insights</h3>
                    <ul className="space-y-2">
                        <li><Link href="/risk-compliance/safety-training-protocols" className="text-blue-600 hover:underline">Safety Training Protocols</Link></li>
                        <li><Link href="/insights/city/gainesville/warehouse-safety-osha" className="text-blue-600 hover:underline">Warehouse Safety</Link></li>
                    </ul>
                </div>

                <SEOBlock
                    city="Duluth"
                    keywords={['Manufacturing Safety', 'OSHA Training', 'Industrial Compliance']}
                />
            </div>
        </main>
    );
}
