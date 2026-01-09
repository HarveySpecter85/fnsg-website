import React from 'react';
import { CityHubHeader, Breadcrumbs, EmptyState, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';

export const metadata = {
    title: "Gainesville Staffing Insights & Labor Trends – First National Staffing",
    description: "Local labor market intelligence for Gainesville, GA. Specializing in poultry processing, food manufacturing, and industrial workforce solutions.",
    openGraph: {
        title: "Gainesville Staffing Insights",
        url: "https://firstnationalstaffing.com/insights/city/gainesville",
        type: "website"
    },
    other: {
        "script:ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "First National Staffing – Gainesville",
            "image": "https://firstnationalstaffing.com/assets/gainesville.jpg",
            "url": "https://firstnationalstaffing.com/insights/city/gainesville",
            "telephone": "+1-470-470-4243",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "100 Main St SW",
                "addressLocality": "Gainesville",
                "addressRegion": "GA",
                "postalCode": "30501",
                "addressCountry": "US"
            },
            "parentOrganization": {
                "@type": "Organization",
                "name": "First National Staffing OS",
                "url": "https://firstnationalstaffing.com"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "132"
            },
            "department": {
                "@type": "EmploymentAgency",
                "name": "Staffing Services Gainesville GA"
            },
            "serviceType": "Staffing, Warehouse Staffing, Manufacturing Staffing, Industrial Workforce",
            "areaServed": "Gainesville GA"
        })
    }
};

export default function GainesvilleHub() {
    return (
        <main>
            <CityHubHeader
                city="Gainesville"
                intro="As the Poultry Capital of the World, Gainesville's industrial sector demands a specialized workforce. Our insights cover food safety compliance, high-volume processing staffing, and cold storage logistics."
            />

            <div className="container mx-auto px-6 max-w-5xl pb-24">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Gainesville', href: '/insights/city/gainesville' }
                ]} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-2xl font-bold text-slate-900">Local Market Analysis</h2>
                        <EmptyState message="Gainesville market data syncing..." />

                        {/* Placeholder for future articles */}
                        {/* 
                        <div className="space-y-6">
                            <BlogCard post={{...}} />
                        </div> 
                        */}
                    </div>

                    {/* Sub-Silo Cross-Linking */}
                    <div className="lg:col-span-3 mt-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore Gainesville Workforce Intelligence</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Link href="/insights/industry/food-production" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Food Production</h3>
                                <p className="text-xs text-slate-500">Poultry & Food Mfg trends.</p>
                            </Link>
                            <Link href="/insights/pay-rates/gainesville" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Local Pay Rates</h3>
                                <p className="text-xs text-slate-500">Gainesville wage data.</p>
                            </Link>
                            <Link href="/insights/osha/checklists" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Safety Checklists</h3>
                                <p className="text-xs text-slate-500">OSHA compliance tools.</p>
                            </Link>
                            <Link href="/insights/faq/georgia" className="p-6 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all bg-white">
                                <h3 className="font-bold text-slate-900 mb-2">Employment FAQ</h3>
                                <p className="text-xs text-slate-500">Georgia labor laws.</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <SEOBlock
                    city="Gainesville"
                    keywords={['Poultry Processing', 'Food Manufacturing', 'Cold Storage Staffing', 'Hall County Jobs']}
                />
            </div>
        </main>
    );
}
