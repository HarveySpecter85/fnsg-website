import React from 'react';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import Link from 'next/link';
import { ShieldAlert, FileText, ArrowRight } from 'lucide-react';

export const metadata = {
    title: "Risk & Compliance Overview | First National Staffing",
    description: "Mitigating liability through rigorous compliance, safety protocols, and insurance coverage.",
};

const complianceItems = [
    { title: '1099 vs W-2 Risk Playbook', href: '/risk-compliance/1099-vs-w2-risk-playbook' },
    { title: 'Drug-Free Workplace Policy', href: '/risk-compliance/drug-free-workplace-policy' },
    { title: 'MSPA Agricultural Compliance', href: '/risk-compliance/mspa-agricultural-compliance' },
    { title: 'Liability Insurance Coverage', href: '/risk-compliance/liability-insurance-coverage' },
    { title: 'ACA Benefits Management', href: '/risk-compliance/aca-benefits-management' },
    { title: 'Safety Training Protocols', href: '/risk-compliance/safety-training-protocols' },
];

export default function RiskCompliancePage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <CompanyBreadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Risk & Compliance', href: '' }
                    ]} />
                    <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6">Risk & Compliance Overview</h1>
                    <p className="text-xl text-slate-400 max-w-3xl">
                        Protecting your business with industry-leading compliance standards and comprehensive insurance coverage.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {complianceItems.map((item) => (
                        <Link key={item.title} href={item.href} className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
                            <div className="flex items-start justify-between mb-4">
                                <ShieldAlert className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
