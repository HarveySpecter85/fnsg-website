import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/locations/location-page-template'

export const metadata: Metadata = {
    title: "Hall County & Gainesville Staffing | Food Production Specialists",
    description: "Staffing partner for Gainesville, the 'Poultry Capital of the World'. Specializing in Food Processing and Cold Storage.",
}

export default function HallLocationPage() {
    return (
        <LocationPageTemplate
            heroTitle="Hall County & Gainesville Staffing: Food Production Specialists"
            zeroClickContent={
                <p>
                    As the staffing partner for <strong className="text-brand-navy font-bold">Gainesville</strong>, the 'Poultry Capital of the World', we specialize in <strong className="text-brand-navy font-bold">Food Processing</strong> and <strong className="text-brand-navy font-bold">Cold Storage</strong>.
                </p>
            }
            stats={[
                { label: "Refrigerated Differential", value: "+$1.50/hr" },
            ]}
            focusArea="GMP & Knife Safety training."
            schema={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "First National Staffing Group - Hall County",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Gainesville",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                },
                "areaServed": ["Hall County", "Gainesville"]
            }}
        />
    )
}
