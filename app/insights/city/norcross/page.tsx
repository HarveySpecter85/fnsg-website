import React from 'react';
import { CityHubHeader, Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Norcross Logistics Staffing & Warehouse Insights – First National Staffing",
    description: "Expert analysis on Norcross labor trends. Focusing on 3PL distribution, bilingual workforce strategies, and warehouse safety.",
    openGraph: {
        title: "Norcross Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/norcross",
        type: "website"
    },
    other: {
        "script:ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "First National Staffing – Norcross",
            "image": "https://firstnationalstaffing.com/assets/norcross.jpg",
            "url": "https://firstnationalstaffing.com/insights/city/norcross",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "YOUR ADDRESS",
                "addressLocality": "Norcross",
                "addressRegion": "GA",
                "postalCode": "30071",
                "addressCountry": "US"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "89"
            },
            "department": {
                "@type": "EmploymentAgency",
                "name": "Staffing Agency Norcross GA"
            },
            "serviceType": "Warehouse Staffing, Bilingual Staffing, Logistics, Manufacturing",
            "areaServed": "Norcross GA"
        })
    }
};

export default function NorcrossHub() {
    return (
        <main>
            <CityHubHeader
                city="Norcross"
                intro="A critical logistics node for Metro Atlanta. Our Norcross insights focus on 3PL efficiency, bilingual workforce integration, and peak season scalability for distribution centers."
            />

            <div className="container mx-auto px-6 max-w-5xl pb-24">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Norcross', href: '/insights/city/norcross' }
                ]} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-2xl font-bold text-slate-900">Local Market Analysis</h2>
                        <EmptyState message="Norcross market data syncing..." />
                    </div>

                    {/* Sub-Silo Cross-Linking */}
                    <div className="lg:col-span-3 mt-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore Norcross Workforce Intelligence</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Link href="/insights/industry/warehouse" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Warehouse Logistics</h3>
                                <p className="text-xs text-slate-500">Distribution trends.</p>
                            </Link>
                            <Link href="/insights/pay-rates/norcross" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Local Pay Rates</h3>
                                <p className="text-xs text-slate-500">Norcross wage data.</p>
                            </Link>
                            <Link href="/insights/osha/temp-labor" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Temp Safety</h3>
                                <p className="text-xs text-slate-500">Joint employer rules.</p>
                            </Link>
                            <Link href="/insights/faq/immigration" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">I-9 Compliance</h3>
                                <p className="text-xs text-slate-500">Immigration FAQ.</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <SEOBlock
                    city="Norcross"
                    keywords={['Warehouse Staffing', 'Bilingual Recruitment', 'Gwinnett County Jobs', '3PL Logistics']}
                />
            </div>
        </main>
    );
}
