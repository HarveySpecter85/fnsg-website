import React from 'react';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';

export const metadata = {
    title: "Healthcare Support Staffing Insights | First National Staffing",
    description: "EVS, non-clinical support, and hospital logistics staffing trends in Georgia.",
};

export default function HealthcareInsightPage() {
    return (
        <main className="bg-white min-h-screen">
            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <CompanyBreadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'Industries', href: '/insights/industry' },
                            { label: 'Healthcare Support', href: '' }
                        ]} />

                        <h1 className="text-4xl font-bold text-slate-900 mb-6">Healthcare Support Staffing Insights</h1>
                        <p className="text-xl text-slate-600 mb-12">
                            Optimizing non-clinical workforce efficiency in hospitals and medical facilities.
                        </p>

                        <div className="prose prose-lg max-w-none">
                            <h2>EVS & Support Staff Trends</h2>
                            <p>Placeholder content for healthcare support staffing...</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
