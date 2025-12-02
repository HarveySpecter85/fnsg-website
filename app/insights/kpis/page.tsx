import React from 'react';
import { SEOBlock } from '@/app/components/blog/shared';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';

export const metadata = {
    title: "Workforce KPIs – Data Insights | First National Staffing",
    description: "Central dashboard for workforce performance metrics, KPI tracking, and operational analytics for Georgia employers.",
};

export default function WorkforceKPIsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "Workforce KPIs – Data Insights | First National Staffing",
                "url": "https://firstnationalstaffing.com/insights/kpis",
                "description": "Central dashboard for workforce performance metrics, KPI tracking, and operational analytics for Georgia employers."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://firstnationalstaffing.com" },
                    { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://firstnationalstaffing.com/insights" },
                    { "@type": "ListItem", "position": 3, "name": "Workforce KPIs", "item": "https://firstnationalstaffing.com/insights/kpis" }
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
                            { label: 'Workforce KPIs', href: '#' }
                        ]} />

                        <div className="max-w-4xl mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Workforce KPIs</h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                The central dashboard for KPI-related articles, reports, and benchmarks.
                                Track the metrics that matter most to your operation, from turnover rates to time-to-fill and cost-per-hire.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {/* Metric Cards */}
                            <div className="p-6 border border-slate-200 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-slate-900 mb-2">Turnover Rate</h3>
                                <p className="text-sm text-slate-500 mb-4">Benchmark your retention against industry standards.</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                        Voluntary vs. Involuntary
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                        First 90 Days Attrition
                                    </li>
                                </ul>
                            </div>
                            <div className="p-6 border border-slate-200 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-slate-900 mb-2">Time-to-Fill</h3>
                                <p className="text-sm text-slate-500 mb-4">Analysis of hiring velocity in the current market.</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                        Sourcing Efficiency
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                        Interview-to-Offer Ratio
                                    </li>
                                </ul>
                            </div>
                            <div className="p-6 border border-slate-200 rounded-lg bg-slate-50">
                                <h3 className="font-bold text-slate-900 mb-2">Cost-Per-Hire</h3>
                                <p className="text-sm text-slate-500 mb-4">Optimizing recruitment spend for maximum ROI.</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                        Advertising Spend
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                        Agency vs. Internal
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Latest KPI Reports</h2>
                            <div className="space-y-4">
                                <div className="p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                                    <h3 className="font-semibold text-slate-900">Q4 2025 Industrial Staffing Benchmarks</h3>
                                    <p className="text-sm text-slate-500">Comprehensive analysis of fill rates and retention across Georgia manufacturing hubs.</p>
                                </div>
                                <div className="p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                                    <h3 className="font-semibold text-slate-900">The Cost of Vacancy Calculator</h3>
                                    <p className="text-sm text-slate-500">How much is an open position really costing your production line?</p>
                                </div>
                            </div>
                        </div>

                        <SEOBlock
                            city="Georgia"
                            keywords={['Workforce KPIs', 'Staffing Metrics', 'HR Analytics', 'Performance Benchmarks']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
