import React from 'react';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import { CityHero } from '@/app/components/insights/CityHero';
import { CityStats } from '@/app/components/insights/CityStats';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface LocationPageTemplateProps {
    city: string;
    description: string;
    stats?: any;
    children?: React.ReactNode;
}

export function LocationPageTemplate({ city, description, stats, children }: LocationPageTemplateProps) {
    return (
        <main className="bg-white min-h-screen">
            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <SeoSidebar />

                    {/* Main Content */}
                    <div className="flex-1">
                        <CompanyBreadcrumbs items={[
                            { label: 'Locations', href: '/locations' },
                            { label: city, href: '' }
                        ]} />

                        <CityHero city={city} description={description} />

                        <div className="my-12">
                            <CityStats />
                        </div>

                        {children}

                        <div className="mt-12 p-8 bg-slate-50 rounded-xl border border-slate-200 text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to hire in {city}?</h3>
                            <p className="text-slate-600 mb-8">
                                Contact our local team today for immediate workforce support.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700">
                                Contact {city} Office <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
