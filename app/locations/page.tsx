import React from 'react';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata = {
    title: "Service Areas & Locations | First National Staffing",
    description: "Local staffing offices serving Atlanta, Gainesville, Savannah, and key industrial hubs across Georgia.",
};

const locations = [
    { name: 'Atlanta Staffing Agency', href: '/locations/atlanta-staffing-agency' },
    { name: 'Fulton County Employment', href: '/locations/fulton-county-employment-services' },
    { name: 'Gwinnett County Staffing', href: '/locations/gwinnett-county-staffing-agency' },
    { name: 'DeKalb County Staffing', href: '/locations/dekalb-county-staffing' },
    { name: 'Clayton County Staffing', href: '/locations/clayton-county-staffing' },
    { name: 'Cobb County Workforce', href: '/locations/cobb-county-workforce-solutions' },
    { name: 'Hall County Recruitment', href: '/locations/hall-county-recruitment' },
    { name: 'Barrow County Staffing', href: '/locations/barrow-county-staffing' },
    { name: 'Jackson County Logistics', href: '/locations/jackson-county-logistics-staffing' },
    { name: 'Forsyth County Staffing', href: '/locations/forsyth-county-staffing' },
    { name: 'Savannah Logistics Staffing', href: '/locations/savannah-logistics-staffing' },
];

export default function LocationsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <CompanyBreadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Locations', href: '' }
                    ]} />
                    <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6">Service Areas</h1>
                    <p className="text-xl text-slate-400 max-w-3xl">
                        Local expertise, statewide reach. Find a First National Staffing office near your facility.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {locations.map((loc) => (
                        <Link key={loc.name} href={loc.href} className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-50 p-3 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <span className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                                    {loc.name}
                                </span>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
