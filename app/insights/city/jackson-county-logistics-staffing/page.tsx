import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { CityHero } from '@/app/components/insights/CityHero';
import { CityStats } from '@/app/components/insights/CityStats';
import { SEOBlock } from '@/app/components/blog/shared';

export const metadata = {
    title: "Jackson County Logistics Staffing & Insights | First National Staffing",
    description: "Data-driven staffing solutions for Jackson County, GA. Real-time labor market analytics, wage benchmarks, and workforce availability.",
};

export default function JacksonCountyPage() {
    return (
        <main className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '/insights/city' },
                            { label: 'Jackson County', href: '#' }
                        ]} />

                        <CityHero
                            city="Jackson County"
                            description="A rapidly emerging logistics hub along the I-85 corridor, Jackson County is experiencing explosive growth in warehousing and distribution."
                        />

                        <CityStats
                            population="80k+"
                            workforce="35k+"
                            unemployment="2.7%"
                            avgWage="$19.00/hr"
                        />

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Workforce Snapshot</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    The rapid influx of mega-warehouses has outpaced local labor supply. Recruitment must extend into neighboring counties (Banks, Barrow, Hall) to fill high-volume orders.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Industries</h2>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>E-commerce Fulfillment</li>
                                    <li>Distribution</li>
                                    <li>Manufacturing</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Trends</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Sign-on bonuses and attendance incentives are standard here. Speed-to-hire is the critical metric for competing in this market.
                                </p>
                            </section>
                        </div>

                        <SEOBlock
                            city="Jackson County"
                            keywords={['Jackson County Staffing', 'Jefferson Jobs', 'Commerce Logistics Staffing', 'Braselton Warehouse Jobs']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
