import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Healthcare & EVS Workforce Report 2025 | FNSG",
    description: "Compliance and workforce stability insights for EVS, hospitality, and healthcare support roles in Georgia.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/reports/healthcare-evs-2025',
    },
    openGraph: {
        title: "Healthcare & EVS Workforce Report 2025",
        description: "Compliance and workforce stability insights for EVS, hospitality, and healthcare support roles in Georgia.",
        url: 'https://firstnationalstaffing.com/insights/reports/healthcare-evs-2025',
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function HealthcareEVSReport() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Healthcare & EVS Workforce Report 2025",
        "description": "Compliance and workforce stability insights for EVS, hospitality, and healthcare support roles in Georgia.",
        "image": "https://firstnationalstaffing.com/insights/reports/healthcare-evs-2025/opengraph-image",
        "author": {
            "@type": "Organization",
            "name": "First National Staffing Group"
        },
        "publisher": {
            "@type": "Organization",
            "name": "First National Staffing Group",
            "logo": {
                "@type": "ImageObject",
                "url": "https://firstnationalstaffing.com/logo.png"
            }
        },
        "datePublished": "2025-01-15"
    };

    return (
        <main className="bg-slate-50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="container mx-auto px-6 py-16 relative z-10 max-w-7xl">
                    <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                        Interactive Report
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                        Healthcare & EVS <br /><span className="text-blue-500">Workforce Report 2025</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                        Analyzing the impact of compliance load, turnover in environmental services, and audit readiness on healthcare operations.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8 max-w-7xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Reports', href: '/insights/reports' },
                    { label: 'Healthcare & EVS Report', href: '/insights/reports/healthcare-evs-2025' }
                ]} />

                {/* Metrics Row */}
                <div className="metrics-row grid grid-cols-2 md:grid-cols-3 gap-4 py-8">
                    {[
                        { label: "EVS Turnover Rate", value: "High", trend: "up", color: "red" },
                        { label: "Compliance Load Index", value: "Heavy", trend: "stable", color: "orange" },
                        { label: "Audit Readiness Score", value: "88%", trend: "up", color: "green" },
                    ].map((m, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <div className="text-sm text-slate-500 font-medium mb-1">{m.label}</div>
                            <div className={`text-2xl font-bold text-${m.color}-600`}>{m.value}</div>
                        </div>
                    ))}
                </div>

                {/* Charts Grid */}
                <div className="charts-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-64 flex flex-col items-center justify-center">
                        <span className="text-slate-400 text-sm font-medium mb-2">Turnover by Unit Type</span>
                        <div className="w-full h-full bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs">[Bar Chart Placeholder]</div>
                    </div>
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-64 flex flex-col items-center justify-center">
                        <span className="text-slate-400 text-sm font-medium mb-2">Staffing vs. Patient Census</span>
                        <div className="w-full h-full bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs">[Area Chart Placeholder]</div>
                    </div>
                </div>

                {/* Insights Sections */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Findings</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">●</span><span className="text-slate-700">Audit failures are 90% correlated with incomplete pre-hire documentation documentation.</span></li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">●</span><span className="text-slate-700">Turnover in non-clinical EVS roles spikes when Patient Census exceeds 85% capacity.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-12 p-8 bg-slate-900 rounded-xl text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">Ensure Compliance & Coverage</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                            Download Healthcare EVS Report
                        </Link>
                        <Link href="/contact" className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                            Request a Compliance Briefing
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
