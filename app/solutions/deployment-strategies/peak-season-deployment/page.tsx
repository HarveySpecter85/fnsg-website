import React from 'react';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';

export const metadata = {
    title: "Peak Season Deployment – Deployment Strategies | First National Staffing",
    description: "Scalable workforce solutions for Q4 peak season and seasonal demand surges.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/solutions/deployment-strategies/peak-season-deployment',
    },
    openGraph: {
        title: "Peak Season Deployment – Deployment Strategies | First National Staffing",
        description: "Scalable workforce solutions for Q4 peak season and seasonal demand surges.",
        url: 'https://firstnationalstaffing.com/solutions/deployment-strategies/peak-season-deployment',
        images: ['/solutions/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function PeakSeasonDeploymentPage() {
    return (
        <main className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <Breadcrumbs items={[
                    { label: 'Solutions', href: '#' },
                    { label: 'Deployment Strategies', href: '#' },
                    { label: 'Peak Season Deployment', href: '#' }
                ]} />

                <div className="max-w-4xl mt-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Peak Season Deployment</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Navigate seasonal demand surges with confidence. Our Peak Season Deployment model provides flexible, scalable workforce solutions designed specifically for Q4 logistics and manufacturing spikes. We proactively build talent pools ahead of demand to ensure you have the coverage you need without sacrificing quality or safety.
                    </p>
                </div>
            </div>
        </main>
    );
}
