'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, TrendingUp, FileText, MapPin, Factory, ChevronRight } from 'lucide-react';

export function SeoSidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const linkClass = (path: string) => `
        flex items-center justify-between p-2 rounded-md text-sm font-medium transition-colors
        ${isActive(path)
            ? 'bg-blue-50 text-blue-700'
            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
    `;

    return (
        <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-24 self-start space-y-8 pr-6 border-r border-slate-100 hidden lg:block">

            {/* Quick Links */}
            <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Quick Links</h3>
                <nav className="space-y-1">
                    <Link href="/insights/kpis" className={linkClass('/insights/kpis')}>
                        <span className="flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Workforce KPIs</span>
                    </Link>
                    <Link href="/insights/labor-market" className={linkClass('/insights/labor-market')}>
                        <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Labor Market Trends</span>
                    </Link>
                    <Link href="/insights/reports" className={linkClass('/insights/reports')}>
                        <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> Reports & Forecasts</span>
                    </Link>
                    <Link href="/insights/city" className={linkClass('/insights/city')}>
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> City Insights</span>
                    </Link>
                    <Link href="/insights/industry" className={linkClass('/insights/industry')}>
                        <span className="flex items-center gap-2"><Factory className="w-4 h-4" /> Industry Deep Dives</span>
                    </Link>
                </nav>
            </div>

            {/* Trending Topics */}
            <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Trending Topics</h3>
                <nav className="space-y-2">
                    {['OSHA Risk 2025', 'Warehouse Shift Reliability', 'Pay Rate Benchmarking', 'Manufacturing Turnover'].map((topic) => (
                        <div key={topic} className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 cursor-pointer group">
                            <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-blue-500" />
                            <span>{topic}</span>
                        </div>
                    ))}
                </nav>
            </div>

            {/* Cities */}
            <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Local Hubs</h3>
                <nav className="space-y-2">
                    {[
                        { name: 'Gainesville', path: '/insights/city/gainesville' },
                        { name: 'Norcross', path: '/insights/city/norcross' },
                        { name: 'Duluth', path: '/insights/city/duluth' },
                        { name: 'South Fulton', path: '/insights/city/south-fulton' }
                    ].map((city) => (
                        <Link key={city.name} href={city.path} className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></span>
                            <span>{city.name}</span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* CTA Box */}
            <div className="bg-slate-900 text-white p-4 rounded-lg">
                <h4 className="font-bold text-sm mb-2">Need Custom Data?</h4>
                <p className="text-xs text-slate-300 mb-3">Get a tailored workforce analysis for your facility.</p>
                <Link href="/contact/general-inquiries" className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-xs font-bold py-2 rounded transition-colors">
                    Request Report
                </Link>
            </div>

        </aside>
    );
}
