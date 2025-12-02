import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Recycling & Waste Management Staffing Insights – First National Staffing",
    description: "Workforce solutions for recycling and waste management. Safety protocols, PPE compliance, and high-turnover mitigation.",
};

export default function RecyclingIndustryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Recycling & Waste Management Staffing",
        "url": "https://firstnationalstaffing.com/insights/industry/recycling",
        "description": "Staffing for MRFs, recycling centers, and waste management operations.",
        "about": {
            "@type": "Thing",
            "name": "Recycling Staffing",
            "description": "Sorters, heavy equipment operators, and general labor for recycling facilities."
        },
        "publisher": {
            "@type": "Organization",
            "name": "First National Staffing OS",
            "url": "https://firstnationalstaffing.com"
        }
    };

    return (
        <main className="py-16 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-6 max-w-5xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Industries', href: '#' },
                    { label: 'Recycling & Waste', href: '/insights/industry/recycling' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Recycling & Waste Management Intelligence</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                        <h3 className="font-bold text-slate-900 mb-2">Safety & PPE</h3>
                        <p className="text-sm text-slate-500 mb-4">Compliance in hazardous environments.</p>
                        <div className="h-32 bg-slate-200 rounded animate-pulse flex items-center justify-center text-slate-400 text-xs">Data Placeholder</div>
                    </div>
                    <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                        <h3 className="font-bold text-slate-900 mb-2">Turnover Mitigation</h3>
                        <p className="text-sm text-slate-500 mb-4">Strategies for retention in tough jobs.</p>
                        <div className="h-32 bg-slate-200 rounded animate-pulse flex items-center justify-center text-slate-400 text-xs">Data Placeholder</div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Latest Recycling Insights</h2>
                    <EmptyState message="Loading recycling articles..." />
                    {/* // TODO: Connect Supabase query */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/osha/fines" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">OSHA Fines</h4>
                        <p className="text-xs text-slate-500">Avoid costly penalties.</p>
                    </Link>
                    <Link href="/insights/city/south-fulton" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">South Fulton Hub</h4>
                        <p className="text-xs text-slate-500">Waste management focus.</p>
                    </Link>
                    <Link href="/insights/pay-rates/south-fulton" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Local Pay Rates</h4>
                        <p className="text-xs text-slate-500">Wage analysis.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
