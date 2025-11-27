import type { Metadata } from 'next'
import { LocationPageTemplate } from '@/app/components/locations/location-page-template'

export const metadata: Metadata = {
    title: "Cobb County Staffing | Kennesaw, Marietta & Smyrna",
    description: "Flexible workforce solutions for the Kennesaw/Acworth industrial corridor and the Cumberland/Battery district.",
}

export default function CobbLocationPage() {
    return (
        <LocationPageTemplate
            heroTitle="Cobb County Staffing: Kennesaw, Marietta & Smyrna"
            zeroClickContent={
                <p>
                    First National Staffing provides flexible workforce solutions servicing the <strong className="text-brand-navy font-bold">Kennesaw/Acworth industrial corridor</strong> and the <strong className="text-brand-navy font-bold">Cumberland/Battery</strong> district.
                </p>
            }
            focusArea="Event teams for Truist Park area."
            schema={{
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "First National Staffing Group - Cobb County",
                "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                },
                "areaServed": ["Cobb County", "Kennesaw", "Marietta", "Smyrna", "Acworth"]
            }}
        />
    )
}
