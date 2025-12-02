import React from 'react';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import Link from 'next/link';
import { Shield, Database, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
    title: "Partner Ecosystem | First National Staffing",
    description: "Our network of technology, safety, and compliance partners ensuring superior workforce delivery.",
};

const partners = [
    { title: 'Labcorp & eScreen Network', href: '/partners/labcorp-escreen-network', icon: Shield, desc: 'Nationwide drug screening and occupational health network.' },
    { title: 'VMS Integrations', href: '/partners/vms-integrations', icon: Database, desc: 'Seamless integration with major Vendor Management Systems.' },
    { title: 'Technology Stack', href: '/partners/technology-stack', icon: CheckCircle, desc: 'Best-in-class ATS, CRM, and payroll platforms.' },
    { title: 'Safety Certifications', href: '/partners/safety-certifications', icon: Shield, desc: 'OSHA compliance and safety training partnerships.' },
];

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <CompanyBreadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Partners', href: '' }
                    ]} />
                    <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6">Partner Ecosystem</h1>
                    <p className="text-xl text-slate-400 max-w-3xl">
                        We collaborate with industry leaders to deliver a fully integrated workforce solution.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {partners.map((partner) => (
                        <Link key={partner.title} href={partner.href} className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-4 rounded-lg text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <partner.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {partner.title}
                                    </h3>
                                    <p className="text-slate-500">
                                        {partner.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end text-blue-600 font-semibold text-sm items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
