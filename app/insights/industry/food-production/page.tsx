import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Food Production Staffing Insights – First National Staffing",
    description: "Specialized insights for food and beverage production staffing. GMP compliance, cold storage retention, and sanitation protocols.",
};

export default function FoodProductionIndustryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Food & Beverage Production Staffing",
        "url": "https://firstnationalstaffing.com/insights/industry/food-production",
        "image": "https://firstnationalstaffing.com/insights/industry/food-production/opengraph-image",
        "description": "GMP-compliant staffing for food processing, packaging, and cold storage facilities.",
        "about": {
            "@type": "Thing",
            "name": "Food Production Staffing",
            "description": "Sanitation, line workers, and QA technicians for the food and beverage industry."
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
                    { label: 'Food Production', href: '/insights/industry/food-production' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Food Production Workforce Intelligence</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                        <h3 className="font-bold text-slate-900 mb-2">GMP Compliance</h3>
                        <p className="text-sm text-slate-500 mb-4">Training and adherence metrics.</p>
                        <div className="h-32 bg-slate-50 rounded flex items-center justify-center text-slate-400 text-xs border border-slate-100 italic">Insight module coming soon</div>
                    </div>
                    <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                        <h3 className="font-bold text-slate-900 mb-2">Cold Storage Retention</h3>
                        <p className="text-sm text-slate-500 mb-4">Turnover analysis in refrigerated environments.</p>
                        <div className="h-32 bg-slate-50 rounded flex items-center justify-center text-slate-400 text-xs border border-slate-100 italic">Insight module coming soon</div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Latest Food Production Insights</h2>
                    <EmptyState message="Loading food production articles..." />
                    <EmptyState message="Loading food production articles..." />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/osha/checklists" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Safety Checklists</h4>
                        <p className="text-xs text-slate-500">Food safety protocols.</p>
                    </Link>
                    <Link href="/insights/city/gainesville" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Gainesville Hub</h4>
                        <p className="text-xs text-slate-500">Poultry capital insights.</p>
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
