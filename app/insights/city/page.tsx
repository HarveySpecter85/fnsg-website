import React from 'react';
import { SEOBlock } from '@/app/components/blog/shared';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export const metadata = {
    title: "City Insights – Data Insights | First National Staffing",
    description: "Localized workforce insights for Gainesville, Norcross, Duluth, South Fulton, and other key Georgia industrial hubs.",
};

export default function CityInsightsPage() {
    const cities = [
        { name: 'Gainesville', href: '/insights/city/gainesville', desc: 'Poultry capital & industrial hub.' },
        { name: 'Norcross', href: '/insights/city/norcross', desc: 'Logistics & distribution center.' },
        { name: 'Duluth', href: '/insights/city/duluth', desc: 'Manufacturing & tech corridor.' },
        { name: 'South Fulton', href: '/insights/city/south-fulton', desc: 'Airport logistics & heavy industrial.' },
        { name: 'Atlanta', href: '/insights/city/atlanta-staffing-agency', desc: 'Metro core & diverse workforce.' },
        { name: 'Barrow County', href: '/insights/city/barrow-county-staffing', desc: 'Rapidly growing industrial zone.' },
        { name: 'Clayton County', href: '/insights/city/clayton-county-staffing', desc: 'Aviation logistics & distribution.' },
        { name: 'Cobb County', href: '/insights/city/cobb-county-workforce-solutions', desc: 'Skilled trades & corporate support.' },
        { name: 'DeKalb County', href: '/insights/city/dekalb-county-staffing', desc: 'Healthcare & light industrial.' },
        { name: 'Forsyth County', href: '/insights/city/forsyth-county-staffing', desc: 'Advanced manufacturing & tech.' },
        { name: 'Hall County', href: '/insights/city/hall-county-recruitment', desc: 'Food processing & manufacturing.' },
        { name: 'Jackson County', href: '/insights/city/jackson-county-logistics-staffing', desc: 'E-commerce & mega-warehousing.' },
        { name: 'Savannah', href: '/insights/city/savannah-logistics-staffing', desc: 'Port logistics & heavy industry.' },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "City Insights – Data Insights | First National Staffing",
                "url": "https://firstnationalstaffing.com/insights/city",
                "description": "Localized workforce insights for Gainesville, Norcross, Duluth, South Fulton, and other key Georgia industrial hubs."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://firstnationalstaffing.com" },
                    { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://firstnationalstaffing.com/insights" },
                    { "@type": "ListItem", "position": 3, "name": "City Insights", "item": "https://firstnationalstaffing.com/insights/city" }
                ]
            },
            {
                "@type": "Organization",
                "name": "First National Staffing OS",
                "url": "https://firstnationalstaffing.com",
                "logo": "https://firstnationalstaffing.com/assets/logo-fnsg-os.png"
            }
        ]
    };

    return (
        <main className="bg-white min-h-screen py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <SeoSidebar />

                    {/* Content */}
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '#' }
                        ]} />

                        <div className="max-w-4xl mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">City Insights</h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Localized workforce intelligence. Drill down into the specific labor market dynamics of Georgia's key industrial cities.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {cities.map((city) => (
                                <Link key={city.name} href={city.href} className="group block p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                    <div className="flex items-center gap-2 mb-4 text-blue-600">
                                        <MapPin className="w-5 h-5" />
                                        <span className="font-bold uppercase tracking-wider text-sm">Hub</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{city.name}</h3>
                                    <p className="text-slate-500 text-sm">{city.desc}</p>
                                </Link>
                            ))}
                        </div>

                        <SEOBlock
                            city="Georgia"
                            keywords={['City Insights', 'Local Labor Data', 'Georgia Industrial Hubs', 'Workforce Analytics']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
