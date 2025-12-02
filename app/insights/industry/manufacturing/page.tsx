import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Manufacturing Production Staffing Insights – First National Staffing",
    description: "Workforce trends for manufacturing and production. Skilled labor availability, safety compliance, and output optimization.",
};

export default function ManufacturingIndustryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Manufacturing & Industrial Staffing Services",
        "url": "https://firstnationalstaffing.com/insights/industry/manufacturing",
        "description": "High-volume manufacturing staffing for assembly, machine operation, and production roles.",
        "about": {
            "@type": "Thing",
            "name": "Manufacturing Staffing",
            "description": "Skilled and semi-skilled labor for production lines, assembly, and quality control."
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
                    { label: 'Manufacturing', href: '/insights/industry/manufacturing' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Manufacturing Workforce Intelligence</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                        <h3 className="font-bold text-slate-900 mb-2">Skilled Labor Gap</h3>
                        <p className="text-sm text-slate-500 mb-4">Data on welder, machinist, and assembler availability.</p>
                        <div className="h-32 bg-slate-200 rounded animate-pulse flex items-center justify-center text-slate-400 text-xs">Data Placeholder</div>
                    </div>
                    <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                        <h3 className="font-bold text-slate-900 mb-2">OSHA Incident Rates</h3>
                        <p className="text-sm text-slate-500 mb-4">Safety trends in production environments.</p>
                        <div className="h-32 bg-slate-200 rounded animate-pulse flex items-center justify-center text-slate-400 text-xs">Data Placeholder</div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Latest Manufacturing Insights</h2>
                    <EmptyState message="Loading manufacturing articles..." />
                    {/* // TODO: Connect Supabase query for manufacturing articles */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/osha/regulations" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">OSHA Regulations</h4>
                        <p className="text-xs text-slate-500">Compliance updates.</p>
                    </Link>
                    <Link href="/insights/pay-rates/manufacturing" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Pay Rate Trends</h4>
                        <p className="text-xs text-slate-500">Manufacturing wage data.</p>
                    </Link>
                    <Link href="/insights/city/duluth" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Duluth Hub</h4>
                        <p className="text-xs text-slate-500">Local manufacturing hub.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
