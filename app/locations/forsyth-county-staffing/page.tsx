import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/locations/location-page-template'

export const metadata: Metadata = {
    title: "Forsyth County Staffing | Tech & Light Industrial Talent",
    description: "Serving Cumming and the GA-400 Corridor with higher-skilled Technical Assembly and Administrative talent.",
}

export default function ForsythLocationPage() {
    return (
        <LocationPageTemplate
            heroTitle="Forsyth County Staffing: Tech & Light Industrial Talent"
            zeroClickContent={
                <p>
                    Serving the affluent community of <strong className="text-brand-navy font-bold">Cumming</strong> and the <strong className="text-brand-navy font-bold">GA-400 Corridor</strong>, we provide higher-skilled <strong className="text-brand-navy font-bold">Technical Assembly</strong> and <strong className="text-brand-navy font-bold">Administrative</strong> talent.
                </p>
            }
            focusArea="Technical & Administrative staffing."
            schema={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "First National Staffing Group - Forsyth County",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                },
                "areaServed": ["Forsyth County", "Cumming"]
            }}
        />
    )
}
