import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { CityHero } from '@/app/components/insights/CityHero';
import { CityStats } from '@/app/components/insights/CityStats';
import { SEOBlock } from '@/app/components/blog/shared';

export const metadata = {
    title: "Clayton County Staffing & Workforce Insights | First National Staffing",
    description: "Data-driven staffing solutions for Clayton County, GA. Real-time labor market analytics, wage benchmarks, and workforce availability.",
};

export default function ClaytonCountyPage() {
    return (
        <main className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '/insights/city' },
                            { label: 'Clayton County', href: '#' }
                        ]} />

                        <CityHero
                            city="Clayton County"
                            description="Home to the world's busiest airport, Clayton County is a logistics powerhouse with unique workforce dynamics driven by aviation and distribution."
                        />

                        <CityStats
                            population="290k+"
                            workforce="140k+"
                            unemployment="4.1%"
                            avgWage="$20.00/hr"
                        />

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Workforce Snapshot</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    The proximity to Hartsfield-Jackson Atlanta International Airport drives a high demand for logistics, cargo handling, and warehousing talent. Turnover can be high without competitive engagement.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Industries</h2>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Aviation Logistics</li>
                                    <li>Warehousing</li>
                                    <li>Food Production</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Trends</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    24/7 operations are standard here. Shift differentials and reliable transportation support are major factors in attracting top talent in this zone.
                                </p>
                            </section>
                        </div>

                        <SEOBlock
                            city="Clayton County"
                            keywords={['Clayton County Staffing', 'Airport Jobs', 'Morrow Staffing', 'Riverdale Workforce']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
