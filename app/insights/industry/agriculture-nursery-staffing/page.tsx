import React from 'react';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';

export const metadata = {
    title: "Agriculture & Nursery Staffing Insights | First National Staffing",
    description: "Labor trends, H-2A alternatives, and seasonal workforce strategies for Georgia agriculture.",
};

export default function AgInsightPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Agriculture & Nursery Staffing Insights",
        "url": "https://firstnationalstaffing.com/insights/industry/agriculture-nursery-staffing",
        "image": "https://firstnationalstaffing.com/insights/industry/agriculture-nursery-staffing/opengraph-image",
        "description": "Labor trends, H-2A alternatives, and seasonal workforce strategies for Georgia agriculture.",
        "publisher": {
            "@type": "Organization",
            "name": "First National Staffing OS",
            "url": "https://firstnationalstaffing.com"
        }
    };

    return (
        <main className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <CompanyBreadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'Industries', href: '/insights/industry' },
                            { label: 'Agriculture', href: '' }
                        ]} />

                        <h1 className="text-4xl font-bold text-slate-900 mb-6">Agriculture & Nursery Staffing Insights</h1>
                        <p className="text-xl text-slate-600 mb-12">
                            Navigating seasonal peaks and compliance in Georgia's agribusiness sector.
                        </p>

                        <div className="prose prose-lg max-w-none">
                            <h2>Seasonal Labor Challenges</h2>
                            <div className="p-8 bg-slate-50 rounded-lg border border-slate-100 text-slate-500 italic text-center">
                                Detailed agricultural labor market analysis coming soon.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
