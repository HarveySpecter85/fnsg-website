import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/locations/location-page-template'

export const metadata: Metadata = {
    title: "Atlanta Staffing Agency | Enterprise Workforce Solutions",
    description: "First National Staffing Group provides vetted W-2 contingent labor for Downtown Atlanta, Fulton Industrial, and Buckhead. Full-service B2B staffing.",
}

export default function AtlantaLocationPage() {
    return (
        <LocationPageTemplate
            heroTitle="Atlanta Staffing Agency Services: Enterprise Workforce Solutions"
            zeroClickContent={
                <p>
                    <strong className="text-brand-navy font-bold">First National Staffing Group</strong> is a full-service <strong className="text-brand-navy font-bold">B2B staffing agency</strong> serving the <strong className="text-brand-navy font-bold">Metro Atlanta</strong> area. We provide fully vetted, W-2 contingent labor for <strong className="text-brand-navy font-bold">Downtown</strong>, <strong className="text-brand-navy font-bold">Fulton Industrial</strong>, and <strong className="text-brand-navy font-bold">Buckhead</strong>.
                </p>
            }
            stats={[
                { label: "Unemployment Rate", value: "3.2%" },
                { label: "Avg Wage", value: "$17.50/hr" },
                { label: "Candidate Pool", value: "12,500+" },
            ]}
            focusArea="Hospitality & Urban Logistics."
            schema={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "First National Staffing Group - Atlanta",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Atlanta",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                },
                "areaServed": "Atlanta"
            }}
        />
    )
}
