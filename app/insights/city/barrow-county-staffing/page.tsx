import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { CityHero } from '@/app/components/insights/CityHero';
import { CityStats } from '@/app/components/insights/CityStats';
import { SEOBlock } from '@/app/components/blog/shared';

export const metadata = {
    title: "Barrow County Staffing & Workforce Insights | First National Staffing",
    description: "Data-driven staffing solutions for Barrow County, GA. Real-time labor market analytics, wage benchmarks, and workforce availability.",
};

export default function BarrowCountyPage() {
    return (
        <main className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '/insights/city' },
                            { label: 'Barrow County', href: '#' }
                        ]} />

                        <CityHero
                            city="Barrow County"
                            description="A rapidly growing industrial hub, Barrow County offers a dedicated workforce but faces increasing competition from neighboring logistics centers."
                        />

                        <CityStats
                            population="85k+"
                            workforce="40k+"
                            unemployment="2.9%"
                            avgWage="$19.50/hr"
                        />

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Workforce Snapshot</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Barrow County's labor pool is heavily leaned towards manufacturing and distribution. The workforce is stable but limited in size, making retention strategies critical.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Industries</h2>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Manufacturing</li>
                                    <li>Distribution & Logistics</li>
                                    <li>Retail Trade</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Trends</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Wage pressure is increasing as new distribution centers open along the 316 corridor. Competitive benefits packages are becoming a key differentiator.
                                </p>
                            </section>
                        </div>

                        <SEOBlock
                            city="Barrow County"
                            keywords={['Barrow County Staffing', 'Winder Jobs', 'Auburn Industrial Staffing', 'Georgia Workforce Data']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
