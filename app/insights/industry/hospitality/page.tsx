import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Hospitality & Events Staffing Insights – First National Staffing",
    description: "Staffing trends for hospitality and large-scale events. Seasonal scaling, banquet staffing, and guest service excellence.",
};

export default function HospitalityIndustryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Hospitality & Event Staffing Services",
        "url": "https://firstnationalstaffing.com/insights/industry/hospitality",
        "description": "Professional staffing for hotels, events, and venues in Atlanta and North Georgia.",
        "about": {
            "@type": "Thing",
            "name": "Hospitality Staffing",
            "description": "Housekeeping, banquet servers, and event support staff."
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
                    { label: 'Hospitality & Events', href: '/insights/industry/hospitality' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Hospitality & Events Workforce Intelligence</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                        <h3 className="font-bold text-slate-900 mb-2">Seasonal Scaling</h3>
                        <p className="text-sm text-slate-500 mb-4">Ramping up for peak event seasons.</p>
                        <div className="h-32 bg-slate-200 rounded animate-pulse flex items-center justify-center text-slate-400 text-xs">Data Placeholder</div>
                    </div>
                    <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                        <h3 className="font-bold text-slate-900 mb-2">Quality Assurance</h3>
                        <p className="text-sm text-slate-500 mb-4">Maintaining service standards with temp staff.</p>
                        <div className="h-32 bg-slate-200 rounded animate-pulse flex items-center justify-center text-slate-400 text-xs">Data Placeholder</div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Latest Hospitality Insights</h2>
                    <EmptyState message="Loading hospitality articles..." />
                    {/* // TODO: Connect Supabase query */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/city/duluth" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Duluth Hub</h4>
                        <p className="text-xs text-slate-500">Event venues & staffing.</p>
                    </Link>
                    <Link href="/insights/faq/staffing" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Staffing FAQ</h4>
                        <p className="text-xs text-slate-500">General questions.</p>
                    </Link>
                    <Link href="/insights/pay-rates/duluth" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Pay Rates</h4>
                        <p className="text-xs text-slate-500">Event staff wages.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
