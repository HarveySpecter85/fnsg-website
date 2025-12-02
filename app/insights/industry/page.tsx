import React from 'react';
import { SEOBlock } from '@/app/components/blog/shared';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export const metadata = {
    title: "Industry Deep Dives – Data Insights | First National Staffing",
    description: "Sector-specific workforce analysis for Warehouse, Manufacturing, Food Production, Recycling, and Hospitality.",
};

export default function IndustryDeepDivesPage() {
    const industries = [
        { name: 'Warehouse & Logistics', href: '/insights/industry/warehouse', color: 'blue' },
        { name: 'Manufacturing', href: '/insights/industry/manufacturing', color: 'indigo' },
        { name: 'Food Production', href: '/insights/industry/food-production', color: 'emerald' },
        { name: 'Recycling & Waste', href: '/insights/industry/recycling', color: 'amber' },
        { name: 'Hospitality & Events', href: '/insights/industry/hospitality', color: 'rose' },
        { name: 'Agriculture & Nursery', href: '/insights/industry/agriculture-nursery-staffing', color: 'green' },
        { name: 'Healthcare Support', href: '/insights/industry/healthcare-support-staffing', color: 'teal' },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "Industry Deep Dives – Data Insights | First National Staffing",
                "url": "https://firstnationalstaffing.com/insights/industry",
                "description": "Sector-specific workforce analysis for Warehouse, Manufacturing, Food Production, Recycling, and Hospitality."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://firstnationalstaffing.com" },
                    { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://firstnationalstaffing.com/insights" },
                    { "@type": "ListItem", "position": 3, "name": "Industry Deep Dives", "item": "https://firstnationalstaffing.com/insights/industry" }
                ]
            },
            {
                "@type": "Organization",
                "name": "First National Staffing OS",
                "url": "https://firstnationalstaffing.com",
                "logo": "https://firstnationalstaffing.com/assets/logo-fnsg-os.png"
            }
        ]
    };

    return (
        <main className="bg-white min-h-screen py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <SeoSidebar />

                    {/* Content */}
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'Industry Deep Dives', href: '#' }
                        ]} />

                        <div className="max-w-4xl mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Industry Deep Dives</h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Sector-specific intelligence. Explore the unique challenges, trends, and opportunities within Georgia's core industries.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {industries.map((ind) => (
                                <Link key={ind.name} href={ind.href} className="group block p-6 border border-slate-200 rounded-xl hover:border-slate-400 hover:shadow-md transition-all bg-white">
                                    <div className={`flex items-center gap-2 mb-4 text-${ind.color}-600`}>
                                        <Briefcase className="w-5 h-5" />
                                        <span className="font-bold uppercase tracking-wider text-sm">Sector</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{ind.name}</h3>
                                    <p className="text-slate-500 text-sm">View comprehensive industry analysis and staffing trends.</p>
                                </Link>
                            ))}
                        </div>

                        <SEOBlock
                            city="Georgia"
                            keywords={['Industry Insights', 'Sector Analysis', 'Warehouse Staffing', 'Manufacturing Trends']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
