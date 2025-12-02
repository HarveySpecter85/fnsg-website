import React from 'react';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Users, Briefcase, TrendingUp } from 'lucide-react';

export const metadata = {
    title: "Workforce Solutions Overview | First National Staffing",
    description: "Comprehensive staffing and workforce management solutions for Georgia's industrial sector.",
};

const solutions = [
    {
        category: "Outcome-Based Services",
        items: [
            { title: 'Workforce Health Screening', href: '/solutions/workforce-health-screening', desc: 'Drug testing, physicals, and immunizations.' },
            { title: 'On-Site Management', href: '/solutions/on-site-workforce-management', desc: 'Embedded performance teams.' },
            { title: 'Payroll & Compliance', href: '/solutions/payroll-compliance-administration', desc: 'EOR services and tax handling.' },
            { title: 'Direct Hire', href: '/solutions/direct-hire-recruitment', desc: 'Executive and technical search.' },
            { title: 'Farm Labor Contracting', href: '/solutions/farm-labor-contracting', desc: 'Licensed agricultural staffing.' },
        ]
    },
    {
        category: "Engagement Models",
        items: [
            { title: 'High-Volume Ramp Ups', href: '/solutions/deployment-strategies/high-volume-ramp-ups', desc: 'Rapid deployment for new launches.' },
            { title: 'Peak Season Deployment', href: '/solutions/deployment-strategies/peak-season-deployment', desc: 'Scalable Q4 workforce solutions.' },
        ]
    }
];

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <CompanyBreadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Solutions', href: '' }
                    ]} />
                    <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6">Workforce Solutions Overview</h1>
                    <p className="text-xl text-slate-400 max-w-3xl">
                        Scalable, compliant, and data-driven staffing strategies designed for high-volume industrial operations.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl py-16">
                <div className="grid gap-16">
                    {solutions.map((section) => (
                        <section key={section.category}>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                                {section.category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((item) => (
                                    <Link key={item.title} href={item.href} className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 flex items-center justify-between">
                                            {item.title} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h3>
                                        <p className="text-slate-500 text-sm">{item.desc}</p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* Orphaned Tool Link */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                            Strategic Tools
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link href="/solutions/workforce-diagnostic" className="group bg-blue-50 p-6 rounded-xl border border-blue-100 hover:border-blue-500 hover:shadow-lg transition-all">
                                <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-600 flex items-center justify-between">
                                    Workforce Diagnostic Tool <TrendingUp className="w-4 h-4" />
                                </h3>
                                <p className="text-blue-700 text-sm">Analyze your current staffing efficiency and identify hidden costs.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
