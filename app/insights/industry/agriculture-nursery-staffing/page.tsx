import React from 'react';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';

export const metadata = {
    title: "Agriculture & Nursery Staffing Insights | First National Staffing",
    description: "Labor trends, H-2A alternatives, and seasonal workforce strategies for Georgia agriculture.",
};

export default function AgInsightPage() {
    return (
        <main className="bg-white min-h-screen">
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
                            <p>Placeholder content for agricultural labor trends...</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
