import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { CityHero } from '@/app/components/insights/CityHero';
import { CityStats } from '@/app/components/insights/CityStats';
import { SEOBlock } from '@/app/components/blog/shared';

export const metadata = {
    title: "Savannah Logistics Staffing & Insights | First National Staffing",
    description: "Data-driven staffing solutions for Savannah, GA. Real-time labor market analytics, wage benchmarks, and workforce availability.",
    alternates: {
        canonical: '/insights/city/savannah-logistics-staffing',
    },
};

export default function SavannahPage() {
    return (
        <main className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '/insights/city' },
                            { label: 'Savannah', href: '#' }
                        ]} />

                        <CityHero
                            city="Savannah"
                            description="Anchored by the Port of Savannah, this market is dominated by port-centric logistics, drayage, and heavy industrial operations."
                        />

                        <CityStats
                            population="150k+"
                            workforce="75k+"
                            unemployment="3.4%"
                            avgWage="$21.50/hr"
                        />

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Workforce Snapshot</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    The port drives everything. Demand fluctuates with shipping volumes. A flexible, TWIC-card ready workforce is a premium asset in this market.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Industries</h2>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Port Logistics</li>
                                    <li>Warehousing & Distribution</li>
                                    <li>Manufacturing</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Trends</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    With the port expansion, demand for forklift operators and heavy equipment handlers is at an all-time high. Training programs are essential to bridge the skills gap.
                                </p>
                            </section>
                        </div>

                        <SEOBlock
                            city="Savannah"
                            keywords={['Savannah Staffing', 'Port Logistics Jobs', 'Chatham County Workforce', 'Garden City Industrial Staffing']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
