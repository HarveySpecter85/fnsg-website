import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { CityHero } from '@/app/components/insights/CityHero';
import { CityStats } from '@/app/components/insights/CityStats';
import { SEOBlock } from '@/app/components/blog/shared';

export const metadata = {
    title: "Atlanta Staffing Agency & Workforce Insights | First National Staffing",
    description: "Data-driven staffing solutions for Atlanta, GA. Real-time labor market analytics, wage benchmarks, and workforce availability.",
    alternates: {
        canonical: '/insights/city/atlanta-staffing-agency',
    },
};

export default function AtlantaCityPage() {
    return (
        <main className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '/insights/city' },
                            { label: 'Atlanta', href: '#' }
                        ]} />

                        <CityHero
                            city="Atlanta"
                            description="As the economic engine of the Southeast, Atlanta's labor market is diverse and competitive. We provide the intelligence you need to navigate it."
                        />

                        <CityStats
                            population="500k+"
                            workforce="250k+"
                            unemployment="3.2%"
                            avgWage="$22.50/hr"
                        />

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Workforce Snapshot</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Atlanta's workforce is characterized by high mobility and a strong concentration of logistics and service-oriented talent. Competition for skilled labor is intense, requiring strategic wage positioning.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Industries</h2>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Logistics & Transportation</li>
                                    <li>Professional Services</li>
                                    <li>Hospitality & Events</li>
                                    <li>Light Industrial</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Trends</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Recent data indicates a shift towards flexible scheduling preferences among the industrial workforce in the metro area. Employers offering 4-day workweeks are seeing 15% higher retention.
                                </p>
                            </section>
                        </div>

                        <SEOBlock
                            city="Atlanta"
                            keywords={['Atlanta Staffing', 'Atlanta Labor Market', 'Georgia Workforce Data', 'Industrial Staffing Atlanta']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
