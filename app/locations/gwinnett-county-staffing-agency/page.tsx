import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/locations/location-page-template'

export const metadata: Metadata = {
    title: "Gwinnett County Staffing | Manufacturing & Distribution Talent",
    description: "Supporting Gwinnett County's industrial sector in Norcross, Duluth, and Suwanee. Bilingual onsite management available.",
}

export default function GwinnettLocationPage() {
    return (
        <LocationPageTemplate
            heroTitle="Gwinnett County Staffing: Manufacturing & Distribution Talent"
            zeroClickContent={
                <p>
                    <strong className="text-brand-navy font-bold">First National Staffing Group</strong> supports Gwinnett County's industrial sector, focusing on <strong className="text-brand-navy font-bold">Norcross</strong>, <strong className="text-brand-navy font-bold">Duluth</strong>, and <strong className="text-brand-navy font-bold">Suwanee</strong>.
                </p>
            }
            stats={[
                { label: "Avg Assembler Pay", value: "$18.00/hr" },
            ]}
            focusArea="Bilingual onsite management (English/Spanish/Korean)."
            schema={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "First National Staffing Group - Gwinnett County",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                },
                "areaServed": ["Gwinnett County", "Norcross", "Duluth", "Suwanee"]
            }}
        />
    )
}
