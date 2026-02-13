import type { Metadata } from 'next'
import Script from 'next/script';
import LocalReviews from '@/app/components/seo/local-reviews';
import GoogleMapEmbed from '@/app/components/seo/google-map-embed';

export const metadata: Metadata = {
    title: "Gwinnett County Staffing Agency | First National Staffing",
    description: "Leading staffing and workforce solutions in Gwinnett County, GA. Serving Lawrenceville, Duluth, Norcross, and Suwanee industries.",
}

import FreshnessBadge from '@/app/components/seo/freshness-badge';
import CitationSource from '@/app/components/seo/citation-source';
export default function GwinnettCountyPage() {
    const reviewData = [
        { author: "David Park", role: "Distribution Director", company: "Gwinnett Fulfillment Center", rating: 5, text: "FNSG provides over 100 warehouse associates across our two Gwinnett County facilities. Their multilingual team is essential for our diverse workforce — Korean, Spanish, and Vietnamese coordinators keep operations running smoothly." },
        { author: "Christine Lee", role: "HR Manager", company: "Lawrenceville Manufacturing", rating: 5, text: "Staffing for our Lawrenceville production line requires precision. FNSG candidates arrive trained on our specific equipment protocols. Our quality rejection rate dropped 18% since partnering with them." }
    ];

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "First National Staffing – Gwinnett County",
        "url": "https://firstnationalstaffing.com/insights/city/gwinnett-county-staffing-agency",
        "telephone": "+1-470-470-4243",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gwinnett County",
            "addressRegion": "GA",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.9519",
            "longitude": "-84.0478"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "08:00",
            "closes": "17:00"
        },
        "areaServed": { "@type": "AdministrativeArea", "name": "Gwinnett County" },
        "sameAs": ["https://www.linkedin.com/company/81060518/"]
    };
    return (
        <main className="container mx-auto py-24 px-6">
            <Script
                id="gwinnett-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Gwinnett County Staffing Agency</h1>
            <FreshnessBadge dateModified="2025-01-15" label="Q1 2025" updateCadence="Quarterly" />
            <p className="text-lg text-slate-600 mt-6">
                This local market intelligence page is currently being updated with 2025 workforce data.
                Please check back soon for our latest analysis on Gwinnett County industrial trends.
            </p>
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

            <div className="mt-12 space-y-8">
                <GoogleMapEmbed query="Gwinnett County, Georgia" title="FNSG Gwinnett County Service Area" />
                <LocalReviews locationName="Gwinnett County" reviews={reviewData} />
            </div>
        </main>
    );
}
