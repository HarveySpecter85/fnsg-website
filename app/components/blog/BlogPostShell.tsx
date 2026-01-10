import React from 'react';
import { Breadcrumbs } from './shared';
import { Calendar, Tag, ChevronRight } from 'lucide-react';

interface TocItem {
    id: string;
    label: string;
}

interface BlogPostShellProps {
    title: string;
    description: string;
    category: string;
    date: string;
    slug: string;
    toc: TocItem[];
    children: React.ReactNode;
}

export default function BlogPostShell({
    title,
    description,
    category,
    date,
    slug,
    toc,
    children
}: BlogPostShellProps) {
    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header / Hero Section */}
            <header className="bg-slate-50 border-b border-slate-200 pt-12 pb-16">
                <div className="container mx-auto px-6 max-w-5xl">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/company/blog' },
                        { label: title, href: '' }
                    ]} />

                    <div className="mt-8 max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
                                {category}
                            </span>
                            <span className="flex items-center gap-1 text-slate-400 text-sm">
                                <Calendar className="w-4 h-4" />
                                {formatDate(date)}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                            {title}
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            {description}
                        </p>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar / TOC */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24">
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 pb-2 border-b border-slate-200">
                                Table of Contents
                            </h4>
                            <nav className="space-y-1">
                                {toc.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="group flex items-start gap-2 py-2 text-slate-500 hover:text-blue-600 transition-colors text-sm leading-snug"
                                    >
                                        <ChevronRight className="w-4 h-4 mt-0.5 text-slate-300 group-hover:text-blue-400 flex-shrink-0" />
                                        <span>{item.label}</span>
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                <h5 className="font-bold text-blue-900 mb-2">Need Staffing Solutions?</h5>
                                <p className="text-sm text-blue-700 mb-4">
                                    Our Workforce Intelligence OS is ready to stabilize your operation.
                                </p>
                                <a
                                    href="/contact"
                                    className="inline-block w-full py-2 bg-blue-600 text-white text-center rounded-lg font-bold hover:bg-blue-700 transition"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-3">
                        <article className="prose prose-slate prose-lg max-w-none 
                            prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight
                            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                            prose-img:rounded-2xl prose-img:shadow-xl
                            prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:rounded-r-xl
                        ">
                            {children}
                        </article>

                        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                                    FNS
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">First National Staffing OS</p>
                                    <p className="text-xs text-slate-500">Workforce Intelligence & Industrial Recruiting</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <a href="/company/blog" className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                                    &larr; Back to Blog
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
