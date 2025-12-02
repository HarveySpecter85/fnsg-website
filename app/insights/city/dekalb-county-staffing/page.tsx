import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { CityHero } from '@/app/components/insights/CityHero';
import { CityStats } from '@/app/components/insights/CityStats';
import { SEOBlock } from '@/app/components/blog/shared';

export const metadata = {
    title: "DeKalb County Staffing & Workforce Insights | First National Staffing",
    description: "Data-driven staffing solutions for DeKalb County, GA. Real-time labor market analytics, wage benchmarks, and workforce availability.",
};

export default function DeKalbCountyPage() {
    return (
        <main className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '/insights/city' },
                            { label: 'DeKalb County', href: '#' }
                        ]} />

                        <CityHero
                            city="DeKalb County"
                            description="With a central location and diverse population, DeKalb County is a key hub for distribution, food production, and healthcare support services."
                        />

                        <CityStats
                            population="750k+"
                            workforce="380k+"
                            unemployment="3.5%"
                            avgWage="$21.00/hr"
                        />

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Workforce Snapshot</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    DeKalb's workforce is incredibly diverse. Cultural competency and bilingual supervision are significant assets for employers in this region.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Industries</h2>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Food & Beverage Production</li>
                                    <li>Healthcare Support</li>
                                    <li>Logistics</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Trends</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Public transportation access (MARTA) is a critical enabler for the workforce here. Sites near transit lines have significantly larger applicant pools.
                                </p>
                            </section>
                        </div>

                        <SEOBlock
                            city="DeKalb County"
                            keywords={['DeKalb County Staffing', 'Decatur Jobs', 'Tucker Industrial Staffing', 'Stone Mountain Workforce']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
