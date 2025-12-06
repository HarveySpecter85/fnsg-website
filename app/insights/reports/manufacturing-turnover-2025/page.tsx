import React from 'react';
import { Breadcrumbs } from '@/app/components/blog/shared';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Manufacturing Turnover & Stability Report 2025 | FNSG",
    description: "Deep dive into retention, skill gaps, and stability metrics for Georgia's manufacturing sector.",
    alternates: {
        canonical: 'https://firstnationalstaffing.com/insights/reports/manufacturing-turnover-2025',
    },
    openGraph: {
        title: "Manufacturing Turnover & Stability Report 2025",
        description: "Deep dive into retention, skill gaps, and stability metrics for Georgia's manufacturing sector.",
        url: 'https://firstnationalstaffing.com/insights/reports/manufacturing-turnover-2025',
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'article',
    },
};

export default function ManufacturingTurnoverReport() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Manufacturing Turnover & Stability Report 2025",
        "description": "Deep dive into retention, skill gaps, and stability metrics for Georgia's manufacturing sector.",
        "image": "https://firstnationalstaffing.com/insights/reports/manufacturing-turnover-2025/opengraph-image",
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
                        Interactive Analysis
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                        Manufacturing Turnover & <br /><span className="text-blue-500">Stability Report 2025</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                        Analyzing early-stage attrition, skill gap impacts, and retention strategies for production environments.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8 max-w-7xl">
                <Breadcrumbs items={[
                    { label: 'Insights', href: '/insights' },
                    { label: 'Reports', href: '/insights/reports' },
                    { label: 'Manufacturing Stability', href: '/insights/reports/manufacturing-turnover-2025' }
                ]} />

                {/* Metrics Row */}
                <div className="metrics-row grid grid-cols-2 md:grid-cols-3 gap-4 py-8">
                    {[
                        { label: "Early Turnover (0-30 days)", value: "32%", trend: "down", color: "red" },
                        { label: "Skill Shortage Index", value: "High", trend: "up", color: "orange" },
                        { label: "OSHA Incident Rate", value: "Low", trend: "stable", color: "green" },
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
                        <span className="text-slate-400 text-sm font-medium mb-2">Turnover Trend (Trailing 12 Mo)</span>
                        <div className="w-full h-full bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs">[Line Chart Placeholder]</div>
                    </div>
                    <div className="chart-card bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-64 flex flex-col items-center justify-center">
                        <span className="text-slate-400 text-sm font-medium mb-2">Retention by Role Type</span>
                        <div className="w-full h-full bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs">[Bar Chart Placeholder]</div>
                    </div>
                </div>

                {/* Insights Sections */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Findings</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">●</span><span className="text-slate-700">Early turnover is primarily driven by mismatch in "Operational Fit" during onboarding.</span></li>
                                <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">●</span><span className="text-slate-700">Skilled machine operator roles are seeing a 20% longer fill time than 2024.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-12 p-8 bg-slate-900 rounded-xl text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">Stabilize Your Production Line</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                            Download Manufacturing Report
                        </Link>
                        <Link href="/contact" className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                            Request a Turnover Analysis
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
