import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/locations/location-page-template'

export const metadata: Metadata = {
    title: "Barrow County Staffing | Serving the Hwy 316 Logistics Corridor",
    description: "Staffing services for Winder and Auburn, focusing on the University Parkway (Hwy 316) distribution hubs.",
}

export default function BarrowLocationPage() {
    return (
        <LocationPageTemplate
            heroTitle="Barrow County Staffing: Serving the Hwy 316 Logistics Corridor"
            zeroClickContent={
                <p>
                    Serving the rapidly growing distribution hubs of <strong className="text-brand-navy font-bold">Winder</strong> and <strong className="text-brand-navy font-bold">Auburn</strong>, we focus on staffing the <strong className="text-brand-navy font-bold">University Parkway (Hwy 316)</strong> corridor.
                </p>
            }
            focusArea="Logistics & Distribution support."
            schema={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "First National Staffing Group - Barrow County",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                },
                "areaServed": ["Barrow County", "Winder", "Auburn"]
            }}
        />
    )
}
