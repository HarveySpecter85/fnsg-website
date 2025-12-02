import React from 'react';
import { CityHubHeader, Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "South Fulton Industrial Staffing & Airport Logistics – First National Staffing",
    description: "Labor insights for South Fulton's heavy industrial and airport logistics sectors. Covering 3rd shift staffing, recycling operations, and transportation.",
    openGraph: {
        title: "South Fulton Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/south-fulton",
        type: "website"
    },
    other: {
        "script:ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "First National Staffing – South Fulton",
            "image": "https://firstnationalstaffing.com/assets/south-fulton.jpg",
            "url": "https://firstnationalstaffing.com/insights/city/south-fulton",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "YOUR ADDRESS",
                "addressLocality": "South Fulton",
                "addressRegion": "GA",
                "postalCode": "30349",
                "addressCountry": "US"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "101"
            },
            "department": {
                "@type": "EmploymentAgency",
                "name": "Staffing South Fulton GA"
            },
            "serviceType": "Airport Staffing, Warehouse Staffing, Recycling & Waste Management Staffing",
            "areaServed": "South Fulton GA"
        })
    }
};

export default function SouthFultonHub() {
    return (
        <main>
            <CityHubHeader
                city="South Fulton"
                intro="The industrial engine of the airport corridor. Our insights focus on heavy industrial staffing, recycling facility management, and 24/7 logistics operations."
            />

            <div className="container mx-auto px-6 max-w-5xl pb-24">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'South Fulton', href: '/insights/city/south-fulton' }
                ]} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-2xl font-bold text-slate-900">Local Market Analysis</h2>
                        <EmptyState message="South Fulton market data syncing..." />
                    </div>

                    {/* Sub-Silo Cross-Linking */}
                    <div className="lg:col-span-3 mt-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore South Fulton Workforce Intelligence</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Link href="/insights/industry/recycling" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Recycling & Waste</h3>
                                <p className="text-xs text-slate-500">Industry trends.</p>
                            </Link>
                            <Link href="/insights/pay-rates/south-fulton" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Local Pay Rates</h3>
                                <p className="text-xs text-slate-500">South Fulton wages.</p>
                            </Link>
                            <Link href="/insights/osha/fines" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">OSHA Fines</h3>
                                <p className="text-xs text-slate-500">Penalty analysis.</p>
                            </Link>
                            <Link href="/insights/faq/warehouse" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Warehouse FAQ</h3>
                                <p className="text-xs text-slate-500">Logistics questions.</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <SEOBlock
                    city="South Fulton"
                    keywords={['Airport Logistics', 'Recycling Jobs', 'Heavy Industrial', '3rd Shift Staffing']}
                />
            </div>
        </main>
    );
}
