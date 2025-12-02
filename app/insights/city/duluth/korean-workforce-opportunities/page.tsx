import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Korean Workforce Opportunities in Duluth – FNSG",
    description: "Connecting with Duluth's vibrant Korean-American community for skilled manufacturing and industrial roles.",
    openGraph: {
        title: "Korean Workforce Opportunities",
        url: "https://firstnationalstaffing.com/insights/city/duluth/korean-workforce-opportunities",
        type: "article"
    }
};

export default function DuluthKoreanWorkforce() {
    return (
        <main className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Duluth', href: '/insights/city/duluth' },
                    { label: 'Korean Workforce', href: '#' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-4">Bridging the Gap: Korean Workforce Opportunities in Duluth</h1>
                <p className="text-xl text-slate-600 mb-8">Cultural competence and bilingual staffing strategies for Gwinnett's industrial hub.</p>

                <div className="prose prose-slate max-w-none mb-12">
                    <EmptyState message="Article content loading..." />
                    {/* 
                    // TODO: Replace placeholder content with Supabase article body once N8N sync is active.
                    */}
                </div>

                <div className="border-t border-slate-200 pt-8">
                    <h3 className="font-bold text-slate-900 mb-4">Related Insights</h3>
                    <ul className="space-y-2">
                        <li><Link href="/insights/city/norcross/bilingual-staffing-advantages" className="text-blue-600 hover:underline">Bilingual Advantages</Link></li>
                        <li><Link href="/insights/city/duluth/staffing-guide-duluth" className="text-blue-600 hover:underline">Duluth Staffing Guide</Link></li>
                    </ul>
                </div>

                <SEOBlock
                    city="Duluth"
                    keywords={['Korean Speaking Jobs', 'Bilingual Staffing', 'Gwinnett Diversity']}
                />
            </div>
        </main>
    );
}
