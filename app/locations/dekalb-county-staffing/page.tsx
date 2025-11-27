import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/locations/location-page-template'

export const metadata: Metadata = {
    title: "DeKalb County Workforce Solutions | Industrial & Medical Support",
    description: "Serving DeKalb County's diverse economy, from Lithonia/Tucker industrial parks to Decatur medical hubs.",
}

export default function DeKalbLocationPage() {
    return (
        <LocationPageTemplate
            heroTitle="DeKalb County Workforce Solutions: Industrial & Medical Support"
            zeroClickContent={
                <p>
                    Serving the diverse economy of <strong className="text-brand-navy font-bold">DeKalb County</strong>, from industrial parks of <strong className="text-brand-navy font-bold">Lithonia/Tucker</strong> to medical hubs in <strong className="text-brand-navy font-bold">Decatur</strong>.
                </p>
            }
            focusArea="Stone/Granite processing & HIPAA non-clinical staff."
            schema={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "First National Staffing Group - DeKalb County",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                },
                "areaServed": ["DeKalb County", "Lithonia", "Tucker", "Decatur"]
            }}
        />
    )
}
