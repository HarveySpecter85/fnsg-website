import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';

export const metadata = {
    title: "Performance Metrics – First National Staffing",
    description: "Transparent performance metrics and KPIs for First National Staffing. Tracking our success in placements, retention, and client satisfaction.",
};

export default function PerformanceMetricsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "Performance Metrics – First National Staffing",
                "url": "https://firstnationalstaffing.com/company/performance-metrics",
                "description": "Transparent performance metrics and KPIs for First National Staffing. Tracking our success in placements, retention, and client satisfaction."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://firstnationalstaffing.com" },
                    { "@type": "ListItem", "position": 2, "name": "Company", "item": "https://firstnationalstaffing.com/company" },
                    { "@type": "ListItem", "position": 3, "name": "Performance Metrics", "item": "https://firstnationalstaffing.com/company/performance-metrics" }
                ]
            },
            {
                "@type": "Organization",
                "name": "First National Staffing OS",
                "url": "https://firstnationalstaffing.com",
                "logo": "https://firstnationalstaffing.com/assets/logo-fnsg-os.png"
            }
        ]
    };

    return (
        <main className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <CompanyBreadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Company', href: '/company' },
                    { label: 'Performance Metrics', href: '#' }
                ]} />

                <div className="max-w-4xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Performance Metrics</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        At First National Staffing, we believe in transparency.
                        We track our own performance with the same rigor we apply to your workforce.
                        Here are our key operational metrics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="p-8 bg-slate-900 text-white rounded-xl">
                        <div className="text-4xl font-bold text-blue-400 mb-2">98.5%</div>
                        <div className="text-sm font-medium uppercase tracking-wider text-slate-400">Fill Rate</div>
                    </div>
                    <div className="p-8 bg-slate-900 text-white rounded-xl">
                        <div className="text-4xl font-bold text-emerald-400 mb-2">4.2h</div>
                        <div className="text-sm font-medium uppercase tracking-wider text-slate-400">Avg. Time to Fill</div>
                    </div>
                    <div className="p-8 bg-slate-900 text-white rounded-xl">
                        <div className="text-4xl font-bold text-amber-400 mb-2">94%</div>
                        <div className="text-sm font-medium uppercase tracking-wider text-slate-400">Retention (30 Days)</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
