import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { CityHero } from '@/app/components/insights/CityHero';
import { CityStats } from '@/app/components/insights/CityStats';
import { SEOBlock } from '@/app/components/blog/shared';

export const metadata = {
    title: "Forsyth County Staffing & Workforce Insights | First National Staffing",
    description: "Data-driven staffing solutions for Forsyth County, GA. Real-time labor market analytics, wage benchmarks, and workforce availability.",
};

export default function ForsythCountyPage() {
    return (
        <main className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '/insights/city' },
                            { label: 'Forsyth County', href: '#' }
                        ]} />

                        <CityHero
                            city="Forsyth County"
                            description="One of the fastest-growing counties in the nation, Forsyth offers a high-tech manufacturing base but faces a tight labor supply."
                        />

                        <CityStats
                            population="260k+"
                            workforce="130k+"
                            unemployment="2.4%"
                            avgWage="$25.50/hr"
                        />

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Workforce Snapshot</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    With extremely low unemployment, recruiting for entry-level industrial roles is challenging. Employers must often recruit from neighboring counties like Hall and Gwinnett.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Industries</h2>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Advanced Manufacturing</li>
                                    <li>Technology</li>
                                    <li>Healthcare</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Trends</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Automation is key here. Employers are investing heavily in robotics to offset labor shortages. Higher-skilled operator roles are in high demand.
                                </p>
                            </section>
                        </div>

                        <SEOBlock
                            city="Forsyth County"
                            keywords={['Forsyth County Staffing', 'Cumming Jobs', 'Advanced Manufacturing Staffing', 'Georgia Tech Corridor']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
