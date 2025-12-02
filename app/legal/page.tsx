import React from 'react';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import Link from 'next/link';
import { Scale, FileText, ArrowRight } from 'lucide-react';

export const metadata = {
    title: "Legal & Policies | First National Staffing",
    description: "Terms of service, privacy policy, and legal disclaimers.",
};

const legalItems = [
    { title: 'Privacy Policy', href: '/legal/privacy-policy' },
    { title: 'Terms of Service', href: '/legal/terms-of-service' },
    { title: 'Accessibility Statement', href: '/legal/accessibility-statement' },
    { title: 'SMS Terms (TCPA)', href: '/legal/tcpa-compliance-policy' },
    { title: 'Marketing Policy', href: '/legal/marketing-communications-policy' },
];

export default function LegalPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <CompanyBreadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Legal', href: '' }
                    ]} />
                    <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6">Legal & Policies</h1>
                    <p className="text-xl text-slate-400 max-w-3xl">
                        Commitment to transparency and regulatory compliance.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl py-16">
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="divide-y divide-slate-100">
                        {legalItems.map((item) => (
                            <Link key={item.title} href={item.href} className="group flex items-center justify-between p-6 hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <FileText className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
