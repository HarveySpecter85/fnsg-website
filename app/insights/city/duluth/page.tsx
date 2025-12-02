import React from 'react';
import { CityHubHeader, Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Duluth Manufacturing Staffing & Tech Insights – First National Staffing",
    description: "Workforce intelligence for Duluth's diverse industrial sector. Covering high-tech manufacturing, assembly, and skilled labor trends.",
    openGraph: {
        title: "Duluth Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/duluth",
        type: "website"
    },
    other: {
        "script:ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "First National Staffing – Duluth",
            "image": "https://firstnationalstaffing.com/assets/duluth.jpg",
            "url": "https://firstnationalstaffing.com/insights/city/duluth",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "YOUR ADDRESS",
                "addressLocality": "Duluth",
                "addressRegion": "GA",
                "postalCode": "30096",
                "addressCountry": "US"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.6",
                "reviewCount": "77"
            },
            "department": {
                "@type": "EmploymentAgency",
                "name": "Staffing Agency Duluth GA"
            },
            "serviceType": "Light Industrial Staffing, Korean Bilingual Staffing, Logistics, Food Production",
            "areaServed": "Duluth GA"
        })
    }
};

export default function DuluthHub() {
    return (
        <main>
            <CityHubHeader
                city="Duluth"
                intro="Blending high-tech manufacturing with traditional industrial roots. Our Duluth insights explore skilled labor retention, Korean-American workforce opportunities, and assembly line optimization."
            />

            <div className="container mx-auto px-6 max-w-5xl pb-24">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Duluth', href: '/insights/city/duluth' }
                ]} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-2xl font-bold text-slate-900">Local Market Analysis</h2>
                        <EmptyState message="Duluth market data syncing..." />
                    </div>

                    {/* Sub-Silo Cross-Linking */}
                    <div className="lg:col-span-3 mt-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore Duluth Workforce Intelligence</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Link href="/insights/industry/manufacturing" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Manufacturing</h3>
                                <p className="text-xs text-slate-500">Tech & Assembly trends.</p>
                            </Link>
                            <Link href="/insights/pay-rates/duluth" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Local Pay Rates</h3>
                                <p className="text-xs text-slate-500">Duluth wage data.</p>
                            </Link>
                            <Link href="/insights/osha/regulations" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">OSHA Updates</h3>
                                <p className="text-xs text-slate-500">Compliance news.</p>
                            </Link>
                            <Link href="/insights/faq/staffing" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Staffing FAQ</h3>
                                <p className="text-xs text-slate-500">Hiring questions.</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <SEOBlock
                    city="Duluth"
                    keywords={['Manufacturing Jobs', 'Skilled Labor', 'Gwinnett Industrial', 'Assembly Staffing']}
                />
            </div>
        </main>
    );
}
