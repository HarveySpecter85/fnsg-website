import { Metadata } from 'next';
import HomePageClient from '@/app/components/home-page-client';

export const metadata: Metadata = {
    title: "First National Staffing OS – Workforce Intelligence Platform",
    description: "Workforce Operations Intelligence for Georgia Employers. Staffing, compliance, insights and analytics connected in a single OS.",
    openGraph: {
        title: "First National Staffing OS",
        description: "Workforce Intelligence for Georgia Employers.",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "First National Staffing OS",
        description: "Workforce Intelligence for Georgia Employers.",
        images: ["/opengraph-image"],
    },
};

export default function Page() {
    return <HomePageClient />;
}
