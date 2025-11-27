import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/locations/location-page-template'

export const metadata: Metadata = {
    title: "Fulton County Employment Services | Industrial & Corporate Staffing",
    description: "Staffing solutions for Fulton County, from South Fulton logistics hubs to Alpharetta corporate parks. Specializing in the Fulton Industrial Boulevard corridor.",
}

export default function FultonLocationPage() {
    return (
        <LocationPageTemplate
            heroTitle="Fulton County Employment Services: Industrial & Corporate Staffing"
            zeroClickContent={
                <p>
                    From the logistics hubs of <strong className="text-brand-navy font-bold">South Fulton</strong> to the corporate parks of <strong className="text-brand-navy font-bold">Alpharetta</strong>, we specialize in staffing the <strong className="text-brand-navy font-bold">Fulton Industrial Boulevard</strong> corridor.
                </p>
            }
            focusArea="'Rapid Deployment' shuttle service for Union City/Fairburn."
            schema={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "First National Staffing Group - Fulton County",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                },
                "areaServed": ["Fulton County", "South Fulton", "Alpharetta", "Union City", "Fairburn"]
            }}
        />
    )
}
