import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Duluth Industrial Staffing Guide – First National Staffing",
    description: "Expert guide to staffing in Duluth, GA. Navigating the high-tech manufacturing and assembly labor market.",
    openGraph: {
        title: "Duluth Staffing Guide",
        url: "https://firstnationalstaffing.com/insights/city/duluth/staffing-guide-duluth",
        type: "article"
    }
};

export default function DuluthStaffingGuide() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Duluth', href: '/insights/city/duluth' },
                    { label: 'Staffing Guide', href: '#' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-4">Duluth Staffing Guide: High-Tech & Industrial</h1>
                <p className="text-xl text-slate-600 mb-8">Recruiting skilled labor for Duluth's advanced manufacturing sector.</p>

                <div className="prose prose-slate max-w-none mb-12">
                    <EmptyState message="Staffing guide loading..." />
                    {/* 
                    // TODO: Replace placeholder content with Supabase article body once N8N sync is active.
                    */}
                </div>

                <div className="border-t border-slate-200 pt-8">
                    <h3 className="font-bold text-slate-900 mb-4">Related Insights</h3>
                    <ul className="space-y-2">
                        <li><Link href="/insights/city/duluth/korean-workforce-opportunities" className="text-blue-600 hover:underline">Korean Workforce Opportunities</Link></li>
                        <li><Link href="/insights/city/norcross" className="text-blue-600 hover:underline">Norcross Logistics</Link></li>
                    </ul>
                </div>

                <SEOBlock
                    city="Duluth"
                    keywords={['Manufacturing Staffing', 'Skilled Trades', 'Duluth Jobs']}
                />
            </div>
        </main>
    );
}
