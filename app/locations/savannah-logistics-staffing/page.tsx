import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/locations/location-page-template'

export const metadata: Metadata = {
    title: "Savannah Logistics Staffing | Port & Distribution Solutions",
    description: "Staffing the Port of Savannah and 3PL ecosystem in Pooler and Garden City. Transloading and Cross-Docking experts.",
}

export default function SavannahLocationPage() {
    return (
        <LocationPageTemplate
            heroTitle="Savannah Logistics Staffing: Port & Distribution Solutions"
            zeroClickContent={
                <p>
                    <strong className="text-brand-navy font-bold">First National Staffing Group</strong> serves the <strong className="text-brand-navy font-bold">Port of Savannah</strong>, staffing the massive 3PL ecosystem in <strong className="text-brand-navy font-bold">Pooler</strong> and <strong className="text-brand-navy font-bold">Garden City</strong>.
                </p>
            }
            stats={[
                { label: "Key Metric", value: "Lumper Productivity" },
                { label: "Requirement", value: "TWIC Cards" },
            ]}
            focusArea="Transloading & Cross-Docking experts."
            schema={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "First National Staffing Group - Savannah",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Savannah",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                },
                "areaServed": ["Savannah", "Pooler", "Garden City", "Port of Savannah"]
            }}
        />
    )
}
