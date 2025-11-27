import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/locations/location-page-template'

export const metadata: Metadata = {
    title: "Jackson County Staffing | I-85 Industrial Corridor Solutions",
    description: "Workforce engine for Jackson County's mega-sites in Jefferson and Commerce. Large-scale E-commerce Fulfillment staffing.",
}

export default function JacksonLocationPage() {
    return (
        <LocationPageTemplate
            heroTitle="Jackson County Staffing: I-85 Industrial Corridor Solutions"
            zeroClickContent={
                <p>
                    We are the workforce engine for <strong className="text-brand-navy font-bold">Jackson County's</strong> mega-sites in <strong className="text-brand-navy font-bold">Jefferson</strong> and <strong className="text-brand-navy font-bold">Commerce</strong>, supporting large-scale <strong className="text-brand-navy font-bold">E-commerce Fulfillment</strong>.
                </p>
            }
            focusArea="Recruiting from 3 surrounding counties for volume."
            schema={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "First National Staffing Group - Jackson County",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                },
                "areaServed": ["Jackson County", "Jefferson", "Commerce"]
            }}
        />
    )
}
