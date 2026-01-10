import React from 'react';
import { FileText, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const cityName = resolvedParams.slug.replace('-2025', '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return {
        title: `${cityName} Workforce Report 2025 | First National Staffing`,
        description: `Comprehensive 2025 workforce analytics and staffing trends for ${cityName}, Georgia.`,
    };
}

export default async function ReportPlaceholderPage({ params }: Props) {
    const resolvedParams = await params;
    const cityName = resolvedParams.slug.replace('-2025', '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <main className="min-h-screen bg-slate-50 py-20">
            <div className="container max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-600">
                        <FileText className="w-10 h-10" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        {cityName} Workforce Intelligence Report (2025)
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        This report is currently being finalized by our analytics team.
                    </p>

                    <div className="max-w-md mx-auto bg-slate-50 rounded-xl p-6 border border-slate-200 mb-10 text-left">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Download className="w-5 h-5 text-blue-600" />
                            Report Summary
                        </h3>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-center gap-2 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                Local Wage Benchmarks
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                Candidate Availability Index
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                2025 Hiring Forecast
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact/general-inquiries"
                            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Request Access <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                        <Link
                            href="/insights"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 font-bold rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"
                        >
                            Back to Insights
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
