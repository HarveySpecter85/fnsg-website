import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/locations/location-page-template'

export const metadata: Metadata = {
    title: "Clayton County Staffing | Airport Logistics & Distribution",
    description: "Specializing in Air Cargo Logistics for Forest Park and Morrow, near Hartsfield-Jackson International Airport.",
}

export default function ClaytonLocationPage() {
    return (
        <LocationPageTemplate
            heroTitle="Clayton County Staffing: Airport Logistics & Distribution"
            zeroClickContent={
                <p>
                    Located near <strong className="text-brand-navy font-bold">Hartsfield-Jackson International Airport</strong>, we specialize in <strong className="text-brand-navy font-bold">Air Cargo Logistics</strong> for <strong className="text-brand-navy font-bold">Forest Park</strong> and <strong className="text-brand-navy font-bold">Morrow</strong>.
                </p>
            }
            stats={[
                { label: "Cargo Handler Wage", value: "$19.00/hr" },
            ]}
            focusArea="TSA-aware candidates & SIDA badge support."
            schema={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "First National Staffing Group - Clayton County",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                },
                "areaServed": ["Clayton County", "Forest Park", "Morrow", "Hartsfield-Jackson Airport"]
            }}
        />
    )
}
