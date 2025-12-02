import React from 'react';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import { BlogCard } from '@/app/components/blog/BlogCard';
import { BlogSidebar } from '@/app/components/blog/BlogSidebar';

export const metadata = {
    title: "Company Blog – First National Staffing OS",
    description: "Articles, insights and workforce intelligence from First National Staffing OS.",
};

export default function CompanyBlogPage() {
    return (
        <main className="bg-white min-h-screen">
            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <CompanyBreadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Company', href: '/company' },
                    { label: 'Blog', href: '' }
                ]} />

                <div className="max-w-4xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Company Blog</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Insights, culture, and updates from the team building the future of industrial staffing in Georgia.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Main Content Column */}
                    <div className="lg:col-span-3 space-y-12">

                        {/* Featured Post Section */}
                        <section>
                            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Featured Article</h2>
                            <div className="h-[400px]"> {/* Fixed height for featured card to look substantial */}
                                <BlogCard
                                    title="How Workforce Intelligence Transforms Staffing Operations in Georgia"
                                    excerpt="Moving beyond 'fill rate' to predictive retention modeling and quality analytics. An executive-level overview of how workforce intelligence improves decision-making in Georgia industrial staffing."
                                    href="/company/blog/sample-post"
                                    date="Jan 01, 2025"
                                    category="Labor Market"
                                    cta="Read Full Article"
                                />
                            </div>
                        </section>

                        {/* Coming Soon Grid */}
                        <section>
                            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Upcoming Analysis</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <BlogCard
                                    title="The State of Industrial Labor in Gainesville (2025)"
                                    excerpt="A deep look at labor patterns shaping North Georgia’s industrial corridor and poultry processing hubs."
                                    href=""
                                    category="Market Report"
                                    cta="Coming Soon"
                                />
                                <BlogCard
                                    title="Why 2nd Shift Fails in Manufacturing Plants"
                                    excerpt="Understanding structural retention issues affecting high-speed operations and how to fix them."
                                    href=""
                                    category="Operations"
                                    cta="Coming Soon"
                                />
                                <BlogCard
                                    title="Warehouse Pay Rate Benchmarks – Georgia 2025"
                                    excerpt="A statewide analysis of compensation competitiveness across warehouse and logistics roles."
                                    href=""
                                    category="Compensation"
                                    cta="Coming Soon"
                                />
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <div className="lg:col-span-1">
                        <BlogSidebar className="sticky top-24" />
                    </div>
                </div>
            </div>
        </main>
    );
}
