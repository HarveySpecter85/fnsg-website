import React from 'react';
import { Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Warehouse Logistics Staffing Insights – First National Staffing",
    description: "Data-driven insights for warehouse and logistics staffing. Turnover trends, pay rates, and OSHA compliance.",
};

export default function WarehouseIndustryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Warehouse & Logistics Staffing Services",
        "url": "https://firstnationalstaffing.com/insights/industry/warehouse",
        "image": "https://firstnationalstaffing.com/insights/industry/warehouse/opengraph-image",
        "description": "Specialized staffing solutions for warehouse, distribution, and logistics centers in Georgia.",
        "about": {
            "@type": "Thing",
            "name": "Warehouse Staffing",
            "description": "Recruitment and placement of forklift operators, pickers, packers, and logistics coordinators."
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
                    { label: 'Warehouse & Logistics', href: '/insights/industry/warehouse' }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-6">Warehouse & Logistics Workforce Intelligence</h1>

                {/* Placeholder Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                        <h3 className="font-bold text-slate-900 mb-2">Turnover & Retention</h3>
                        <p className="text-sm text-slate-500 mb-4">Analysis of retention rates in high-volume distribution centers.</p>
                        <div className="h-32 bg-slate-50 rounded flex items-center justify-center text-slate-400 text-xs border border-slate-100 italic">Insight module coming soon</div>
                    </div>
                    <div className="p-6 border border-slate-200 rounded-xl bg-slate-50">
                        <h3 className="font-bold text-slate-900 mb-2">Attendance Trends</h3>
                        <p className="text-sm text-slate-500 mb-4">Shift attendance patterns and absenteeism data.</p>
                        <div className="h-32 bg-slate-50 rounded flex items-center justify-center text-slate-400 text-xs border border-slate-100 italic">Insight module coming soon</div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Latest Warehouse Insights</h2>
                    <EmptyState message="Loading warehouse articles..." />
                    <EmptyState message="Loading warehouse articles..." />
                </div>

                {/* Cross-Silo Linking */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    <Link href="/insights/osha/checklists" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">OSHA Checklists</h4>
                        <p className="text-xs text-slate-500">Safety protocols for warehouses.</p>
                    </Link>
                    <Link href="/insights/pay-rates/warehouse" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Warehouse Pay Rates</h4>
                        <p className="text-xs text-slate-500">Current wage benchmarks.</p>
                    </Link>
                    <Link href="/insights/city/norcross" className="p-4 border border-slate-100 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="font-bold text-slate-900 text-sm">Norcross Hub</h4>
                        <p className="text-xs text-slate-500">Local logistics insights.</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
