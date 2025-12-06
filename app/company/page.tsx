import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About First National Staffing | Company Overview",
    description: "Leading the evolution of workforce management in Georgia. Learn about our mission, leadership, and story.",
    alternates: {
        canonical: '/company',
    },
    openGraph: {
        title: "About First National Staffing | Company Overview",
        description: "Leading the evolution of workforce management in Georgia.",
        url: 'https://firstnationalstaffing.com/company',
        images: ['/company/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'website',
    },
};

export default function CompanyPage() {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">Company</h1>
            <p className="mt-4">About us.</p>
        </div>
    )
}
