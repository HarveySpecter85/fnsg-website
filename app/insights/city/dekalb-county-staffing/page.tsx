import React from 'react';
import { SeoSidebar } from '@/app/components/insights/SeoSidebar';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';
import { CityHero } from '@/app/components/insights/CityHero';
import { CityStats } from '@/app/components/insights/CityStats';
import { SEOBlock } from '@/app/components/blog/shared';
import FreshnessBadge from '@/app/components/seo/freshness-badge';
import CitationSource from '@/app/components/seo/citation-source';
import LocalReviews from '@/app/components/seo/local-reviews';
import GoogleMapEmbed from '@/app/components/seo/google-map-embed';
import Script from 'next/script';

export const metadata = {
    title: "DeKalb County Staffing & Workforce Insights | First National Staffing",
    description: "Data-driven staffing solutions for DeKalb County, GA. Real-time labor market analytics, wage benchmarks, and workforce availability.",
};

export default function DeKalbCountyPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – DeKalb County",
        "url": "https://firstnationalstaffing.com/insights/city/dekalb-county-staffing",
        "telephone": "+1-470-470-4243",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "DeKalb County",
            "addressRegion": "GA",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.7712",
            "longitude": "-84.2357"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "08:00",
            "closes": "17:00"
        },
        "areaServed": { "@type": "AdministrativeArea", "name": "DeKalb County" },
        "sameAs": ["https://www.linkedin.com/company/81060518/"]
    };

    return (
        <main className="bg-white min-h-screen py-12">
            <Script
                id="dekalb-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    <SeoSidebar />
                    <div className="flex-1">
                        <Breadcrumbs items={[
                            { label: 'Insights', href: '/insights' },
                            { label: 'City Insights', href: '/insights/city' },
                            { label: 'DeKalb County', href: '#' }
                        ]} />

                        <CityHero
                            city="DeKalb County"
                            description="With a central location and diverse population, DeKalb County is a key hub for distribution, food production, and healthcare support services."
                        />

                        <CityStats
                            population="750k+"
                            workforce="380k+"
                            unemployment="3.5%"
                            avgWage="$21.00/hr"
                        />

                        <FreshnessBadge dateModified="2025-01-15" label="Q1 2025" updateCadence="Quarterly" />

                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Workforce Snapshot</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    DeKalb's workforce is incredibly diverse. Cultural competency and bilingual supervision are significant assets for employers in this region.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Top Industries</h2>
                                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                    <li>Food & Beverage Production</li>
                                    <li>Healthcare Support</li>
                                    <li>Logistics</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Trends</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Public transportation access (MARTA) is a critical enabler for the workforce here. Sites near transit lines have significantly larger applicant pools.
                                </p>
                            </section>

                            <CitationSource
                              source="U.S. Bureau of Labor Statistics"
                              href="https://www.bls.gov/oes/current/oes_ga.htm"
                              detail="Georgia OES Wage Estimates, May 2024"
                              compact={true}
                            />

                            <CitationSource
                                source="OSHA Standards & Georgia DOL"
                                href="https://dol.georgia.gov/"
                                detail="Georgia Department of Labor Compliance Resources"
                                compact={true}
                            />

                            <CitationSource
                              source="U.S. Census Bureau & Georgia DOL"
                              href="https://dol.georgia.gov/labor-market-information"
                              detail="Area Labor Profiles, 2024"
                              compact={true}
                            />

                            {/* Google Map & Reviews */}
                            <GoogleMapEmbed query="DeKalb County, Georgia" title="FNSG DeKalb County Service Area" />

                            <LocalReviews
                                locationName="DeKalb County"
                                reviews={[
                                    { author: "Robert Chen", role: "Operations Manager", company: "DeKalb Industrial Park", rating: 5, text: "FNSG staffed our entire e-commerce fulfillment operation with 85 associates in two weeks. Their bilingual supervisors bridge the communication gap perfectly. Productivity exceeded our targets by 15%." },
                                    { author: "Tanya Brooks", role: "HR Manager", company: "Decatur Medical Center", rating: 5, text: "Finding reliable EVS and dietary staff in DeKalb County is tough. FNSG pre-screens for healthcare compliance and delivers workers ready for Joint Commission standards from day one." }
                                ]}
                            />
                        </div>

                        <SEOBlock
                            city="DeKalb County"
                            keywords={['DeKalb County Staffing', 'Decatur Jobs', 'Tucker Industrial Staffing', 'Stone Mountain Workforce']}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
