import React from 'react';
import { SEOBlock } from '@/app/components/blog/shared';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import DemoLineChart from '@/app/components/charts/DemoLineChart';

export const metadata = {
    title: "Labor Market Trends – Data Insights | First National Staffing",
    description: "In-depth analysis of Georgia labor trends, wage inflation, supply-demand gaps, and workforce analytics.",
};

export default function LaborMarketTrendsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "Labor Market Trends – Data Insights | First National Staffing",
                "url": "https://firstnationalstaffing.com/insights/labor-market",
                "description": "In-depth analysis of Georgia labor trends, wage inflation, supply-demand gaps, and workforce analytics."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://firstnationalstaffing.com" },
                    { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://firstnationalstaffing.com/insights" },
                    { "@type": "ListItem", "position": 3, "name": "Labor Market Trends", "item": "https://firstnationalstaffing.com/insights/labor-market" }
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
                            { label: 'Labor Market Trends', href: '#' }
                        ]} />

                        <div className="max-w-4xl mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Labor Market Trends</h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Stay ahead of the curve with our latest analysis on Georgia's labor market.
                                We track shifts in candidate availability, wage expectations, and industry-specific demand to help you plan effectively.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="p-8 border border-slate-200 rounded-xl bg-slate-50">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Wage Inflation Tracker</h3>
                                <p className="text-slate-600 mb-4">
                                    Real-time data on hourly wage movements across key industrial sectors in Metro Atlanta.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-2 text-sm text-slate-700">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                        Warehouse Associate: $16.50 - $18.00/hr
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                        Forklift Operator: $19.00 - $22.00/hr
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                        Machine Operator: $20.00 - $24.00/hr
                                    </li>
                                </ul>
                                <div className="h-64 bg-slate-50 border border-slate-200 rounded-lg p-2">
                                    <DemoLineChart />
                                </div>
                            </div>
                            <div className="p-8 border border-slate-200 rounded-xl bg-slate-50">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Supply-Demand Index</h3>
                                <p className="text-slate-600 mb-4">
                                    Quantifying the gap between open requisitions and available talent in your zip code.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-2 text-sm text-slate-700">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                        North Fulton: High Demand / Low Supply
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                        Gwinnett: Balanced Market
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                        South Fulton: High Supply / Moderate Demand
                                    </li>
                                </ul>
                                <div className="h-64 bg-slate-50 border border-slate-200 rounded-lg p-2">
                                    <DemoLineChart />
                                </div>
                            </div>
                        </div>

                        <SEOBlock
                            city="Georgia"
                            keywords={['Labor Market Trends', 'Georgia Workforce Data', 'Wage Inflation', 'Staffing Analytics']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
