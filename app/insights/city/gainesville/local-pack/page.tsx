import React from 'react';
import { Breadcrumbs, SEOBlock } from '@/app/components/blog/shared';
import Link from 'next/link';
import DemoLineChart from '@/app/components/charts/DemoLineChart';

export const metadata = {
    title: "Gainesville Local Workforce Snapshot – Reports & Insights",
    description: "Local workforce data for Gainesville, GA. Pay rates, shift attendance trends, and top industrial sectors.",
};

export default function GainesvilleLocalPackPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing - Gainesville",
        "url": "https://firstnationalstaffing.com/insights/city/gainesville/local-pack",
        "telephone": "+1-770-536-1992",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "333 Jesse Jewell Pkwy SE",
            "addressLocality": "Gainesville",
            "addressRegion": "GA",
            "postalCode": "30501",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.2979,
            "longitude": -83.8241
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "17:00"
        },
        "sameAs": [
            "https://www.facebook.com/FirstNationalStaffing",
            "https://www.linkedin.com/company/first-national-staffing"
        ]
    };

    return (
        <main className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'City', href: '/insights/city' },
                    { label: 'Gainesville', href: '/insights/city/gainesville' },
                    { label: 'Local Snapshot', href: '#' }
                ]} />

                <div className="max-w-4xl mb-12">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Local Intelligence</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">Local Workforce Snapshot – Gainesville</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        A focused look at the labor market dynamics in Gainesville, Georgia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 border border-slate-200 rounded-xl bg-slate-50">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Local Pay Rates</h3>
                        <p className="text-slate-500 mb-4">Current market rates for key positions.</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600">
                                <thead className="border-b border-slate-200">
                                    <tr>
                                        <th className="pb-2 font-semibold text-slate-900">Role</th>
                                        <th className="pb-2 font-semibold text-slate-900">Avg Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-100"><td className="py-2">Poultry Processor</td><td className="py-2">$16.50</td></tr>
                                    <tr className="border-b border-slate-100"><td className="py-2">Line Lead</td><td className="py-2">$19.00</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="p-8 border border-slate-200 rounded-xl bg-slate-50">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Shift Attendance</h3>
                        <p className="text-slate-500 mb-4">Reliability trends by shift.</p>
                        <div className="h-64 mt-4 bg-white border border-slate-200 rounded-lg p-2"><DemoLineChart /></div>
                    </div>
                </div>

                <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Need Gainesville Talent?</h2>
                    <p className="mb-6 opacity-90">Let's discuss a custom workforce strategy for your facility.</p>
                    <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                        Request Strategy Session
                    </Link>
                </div>

                <SEOBlock
                    city="Gainesville"
                    keywords={['Gainesville Staffing', 'Local Labor Data', 'Pay Rates Gainesville', 'Industrial Workforce']}
                />
            </div>
        </main>
    );
}
