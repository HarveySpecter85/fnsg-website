import React from 'react';
import { Newspaper, Download, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';

export const metadata = {
    title: "Press & Media – Official Communications | First National Staffing OS",
    description: "Official announcements, media coverage and brand assets from First National Staffing OS.",
    openGraph: {
        title: "Press & Media – FNSG OS",
        url: "https://firstnationalstaffing.com/company/press-media",
        type: "website"
    }
};

export default function PressMediaPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-slate-950 py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <CompanyBreadcrumbs items={[
                        { label: 'Home', href: '/' },
                        { label: 'Company', href: '/company' },
                        { label: 'Press & Media', href: '' }
                    ]} />
                    <div className="max-w-3xl mt-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Press & Media
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Official announcements, media coverage and brand assets from First National Staffing OS.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 max-w-7xl py-16 lg:py-24">
                {/* Main Blocks Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

                    {/* Featured Press Release */}
                    <div className="lg:col-span-2">
                        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                            <Newspaper className="w-4 h-4" /> Featured Release
                        </h2>
                        <Link href="/company/press-media/releases/launch-os" className="group block h-full">
                            <div className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-white group-hover:border-blue-500/30 relative">
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
                                    NEW
                                </div>
                                <div className="h-64 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
                                    <div className="relative z-10 text-center p-8">
                                        <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4">
                                            <span className="text-2xl font-bold text-slate-900">OS</span>
                                        </div>
                                        <p className="text-slate-500 font-mono text-sm">FNSG OPERATING SYSTEM</p>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">
                                        Corporate News • Jan 15, 2025
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        First National Staffing OS Announces Industrial Workforce Intelligence Platform Launch
                                    </h3>
                                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                        Revolutionizing how industrial staffing is managed with real-time data, AI-driven insights, and complete transparency for Georgia's manufacturing sector.
                                    </p>
                                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                                        Read Full Release <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Sidebar: Brand Kit & Media Feed */}
                    <div className="space-y-8">

                        {/* Media Coverage Feed */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" /> Media Coverage
                            </h2>
                            <div className="space-y-4">
                                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                    <p className="text-sm text-slate-500 italic mb-2">"Media coverage powered by N8N + PressRanger"</p>
                                    <div className="h-2 w-24 bg-slate-100 rounded mb-2" />
                                    <div className="h-2 w-full bg-slate-100 rounded" />
                                </div>
                                <div className="text-center py-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-200 text-slate-600">
                                        Coming Soon
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Brand Kit */}
                        <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Download className="w-24 h-24" />
                            </div>
                            <h2 className="text-xl font-bold mb-2">Brand Kit</h2>
                            <p className="text-slate-400 text-sm mb-6">
                                Download our logo, color palette and branding guidelines.
                            </p>
                            <button disabled className="w-full py-3 px-4 bg-white/10 border border-white/20 rounded-lg text-sm font-semibold text-white/50 cursor-not-allowed flex items-center justify-center gap-2">
                                <Download className="w-4 h-4" />
                                Download (Coming Soon)
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-200 pt-16 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Latest Press Releases</h2>
                        <div className="space-y-6">
                            <Link href="/company/press-media/releases/launch-os" className="block group">
                                <span className="text-xs text-slate-500 block mb-1">Jan 15, 2025</span>
                                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    First National Staffing OS Announces Industrial Workforce Intelligence Platform Launch
                                </h3>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">In the News</h2>
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
                            <p className="text-slate-500">Media coverage integration coming soon.</p>
                        </div>
                    </div>
                </div>

                {/* Press Contact */}
                <div className="bg-slate-50 rounded-2xl p-8 md:p-12 text-center border border-slate-200">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Press Contact</h2>
                    <p className="text-slate-600 mb-4">
                        For media inquiries, please contact us at:
                    </p>
                    <a href="mailto:press@fnstaffing.com" className="text-xl font-bold text-blue-600 hover:underline">
                        press@fnstaffing.com
                    </a>
                </div>
            </div>
        </main>
    );
}
