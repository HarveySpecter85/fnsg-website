import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { CityHero } from '@/app/components/insights/CityHero';
import { CityStats } from '@/app/components/insights/CityStats';
import { SEOBlock } from '@/app/components/blog/shared';

export const metadata = {
    title: "Hall County Staffing & Workforce Insights | First National Staffing",
    description: "Data-driven staffing solutions for Hall County, GA. Real-time labor market analytics, wage benchmarks, and workforce availability.",
};

export default function HallCountyPage() {
    return (
        <main className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '/insights/city' },
                            { label: 'Hall County', href: '#' }
                        ]} />

                        <CityHero
                            city="Hall County"
                            description="As the 'Poultry Capital of the World', Hall County has a unique industrial landscape dominated by food processing and manufacturing."
                        />

                        <CityStats
                            population="205k+"
                            workforce="100k+"
                            unemployment="2.6%"
                            avgWage="$18.50/hr"
                        />

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Workforce Snapshot</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    The workforce here is highly specialized in food production. Reliability and adherence to strict GMP/USDA regulations are the primary hiring criteria.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Industries</h2>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Food Production & Processing</li>
                                    <li>Manufacturing</li>
                                    <li>Healthcare</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Trends</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Transportation is a challenge as many industrial sites are outside public transit zones. Van-pooling programs have shown high ROI for large employers.
                                </p>
                            </section>
                        </div>

                        <SEOBlock
                            city="Hall County"
                            keywords={['Hall County Staffing', 'Gainesville Jobs', 'Poultry Processing Staffing', 'Oakwood Industrial Jobs']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
