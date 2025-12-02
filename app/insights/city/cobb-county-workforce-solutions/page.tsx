import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { CityHero } from '@/app/components/insights/CityHero';
import { CityStats } from '@/app/components/insights/CityStats';
import { SEOBlock } from '@/app/components/blog/shared';

export const metadata = {
    title: "Cobb County Workforce Solutions & Staffing | First National Staffing",
    description: "Data-driven staffing solutions for Cobb County, GA. Real-time labor market analytics, wage benchmarks, and workforce availability.",
};

export default function CobbCountyPage() {
    return (
        <main className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '/insights/city' },
                            { label: 'Cobb County', href: '#' }
                        ]} />

                        <CityHero
                            city="Cobb County"
                            description="A diverse economic engine, Cobb County blends corporate headquarters with robust light industrial and service sectors."
                        />

                        <CityStats
                            population="760k+"
                            workforce="400k+"
                            unemployment="2.8%"
                            avgWage="$24.00/hr"
                        />

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Workforce Snapshot</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Cobb County offers a highly skilled workforce. The challenge for industrial employers is competing with the service and corporate sectors for talent.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Industries</h2>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Professional Services</li>
                                    <li>Retail & Hospitality</li>
                                    <li>Construction & Trades</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Trends</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    The "live-work-play" developments near the Battery are shifting workforce expectations. Commute times are a major factor in job acceptance rates.
                                </p>
                            </section>
                        </div>

                        <SEOBlock
                            city="Cobb County"
                            keywords={['Cobb County Staffing', 'Marietta Jobs', 'Smyrna Workforce', 'Kennesaw Industrial Staffing']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
