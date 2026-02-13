export default function KnowledgeGraph() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "First National Staffing Group",
        "url": "https://firstnationalstaffing.com",
        "logo": "https://firstnationalstaffing.com/images/logo-icon.jpg",
        "sameAs": [
            "https://www.linkedin.com/company/81060518/",
            "https://www.facebook.com/people/First-National-Staffing-Group/100077472108918/",
            "https://www.instagram.com/staffing_first_national/"
        ],
        "knowsAbout": [
            {
                "@type": "Thing",
                "name": "Employment Agency",
                "sameAs": "https://en.wikipedia.org/wiki/Employment_agency"
            },
            {
                "@type": "Thing",
                "name": "Occupational Safety and Health Administration (OSHA)",
                "sameAs": "https://en.wikipedia.org/wiki/Occupational_Safety_and_Health_Administration"
            },
            {
                "@type": "Thing",
                "name": "Recruitment",
                "sameAs": "https://en.wikipedia.org/wiki/Recruitment"
            },
            {
                "@type": "Thing",
                "name": "Temporary work",
                "sameAs": "https://en.wikipedia.org/wiki/Temporary_work"
            }
        ],
        "location": [
            {
                "@type": "Place",
                "name": "First National Staffing Group - Atlanta HQ",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Atlanta",
                    "addressRegion": "GA",
                    "addressCountry": "US"
                }
            },
            {
                "@type": "Place",
                "name": "First National Staffing Group - Smyrna / Cobb County",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2430 Herodian Way",
                    "addressLocality": "Smyrna",
                    "addressRegion": "GA",
                    "postalCode": "30080",
                    "addressCountry": "US"
                }
            }
        ],
        "areaServed": [
            {
                "@type": "State",
                "name": "Georgia",
                "sameAs": "https://en.wikipedia.org/wiki/Georgia_(U.S._state)"
            }
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-470-470-4243",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": ["English", "Spanish"]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
