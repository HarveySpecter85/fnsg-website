import React from 'react';
import { Breadcrumbs } from '@/app/components/navigation/Breadcrumbs';

export const metadata = {
    title: "High-Volume Ramp Ups – Deployment Strategies | First National Staffing",
    description: "Rapid workforce deployment strategies for new facility launches and major expansion projects.",
};

export default function HighVolumeRampUpsPage() {
    return (
        <main className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <Breadcrumbs items={[
                    { label: 'Solutions', href: '#' },
                    { label: 'Deployment Strategies', href: '#' },
                    { label: 'High-Volume Ramp Ups', href: '#' }
                ]} />

                <div className="max-w-4xl mt-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">High-Volume Ramp Ups</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Our specialized deployment teams are engineered to handle large-scale workforce ramp-ups for new facility launches and major expansions. We combine on-site management with rapid recruitment protocols to deliver hundreds of qualified associates within tight timelines, ensuring your operations hit the ground running.
                    </p>
                </div>
            </div>
        </main>
    );
}
