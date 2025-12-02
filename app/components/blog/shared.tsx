import React from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Calendar, Tag, AlertCircle } from 'lucide-react';

// --- Types ---
export interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    slug: string;
    city?: string;
}

// --- Components ---

export const Breadcrumbs = ({ items }: { items: { label: string; href: string }[] }) => (
    <nav className="flex items-center text-sm text-slate-500 mb-6 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        {items.map((item, index) => (
            <React.Fragment key={item.href}>
                <ChevronRight className="w-4 h-4 mx-2 text-slate-400 flex-shrink-0" />
                <Link
                    href={item.href}
                    className={`${index === items.length - 1 ? 'font-semibold text-slate-900 pointer-events-none' : 'hover:text-blue-600 transition-colors'}`}
                >
                    {item.label}
                </Link>
            </React.Fragment>
        ))}
    </nav>
);

export const BlogCard = ({ post }: { post: BlogPost }) => (
    <div className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-500/30 flex flex-col h-full">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 uppercase tracking-wider font-semibold">
            {post.city && (
                <span className="flex items-center gap-1 text-blue-600">
                    <MapPin className="w-3 h-3" /> {post.city}
                </span>
            )}
            {post.city && <span>•</span>}
            <span className="text-emerald-600">{post.category}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
            <Link href={post.slug}>
                <span className="absolute inset-0" />
                {post.title}
            </Link>
        </h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3">
            {post.excerpt}
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-400 mt-auto pt-4 border-t border-slate-100">
            <Calendar className="w-3 h-3" />
            {post.date}
        </div>
    </div>
);

export const BlogCategoryHeader = ({ title, description }: { title: string; description: string }) => (
    <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            {title}
        </h1>
        <p className="text-lg text-slate-600">
            {description}
        </p>
    </div>
);

export const CityHubHeader = ({ city, intro }: { city: string; intro: string }) => (
    <div className="bg-slate-50 border-b border-slate-200 py-16 mb-12">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
                <MapPin className="w-4 h-4" /> Local Market Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                Staffing & Workforce Insights: <span className="text-blue-600">{city}</span>
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl leading-relaxed">
                {intro}
            </p>
        </div>
    </div>
);

export const EmptyState = ({ message = "Content syncing via N8N..." }: { message?: string }) => (
    <div className="border-2 border-dashed border-slate-200 rounded-xl p-12 text-center bg-slate-50/50">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
            <AlertCircle className="w-6 h-6 text-slate-400" />
        </div>
        <p className="text-slate-500 font-medium">{message}</p>
        <p className="text-xs text-slate-400 mt-2 font-mono">
            // TODO: Connect Supabase query for dynamic content
        </p>
    </div>
);

export const SEOBlock = ({ city, keywords }: { city: string; keywords: string[] }) => (
    <div className="mt-16 pt-8 border-t border-slate-200 text-sm text-slate-500">
        <h4 className="font-bold text-slate-700 mb-2 uppercase tracking-wider text-xs">Local SEO Relevance</h4>
        <p>
            Serving {city} and surrounding areas. Specialized in {keywords.join(', ')}.
            First National Staffing provides compliant, high-volume workforce solutions tailored to the {city} industrial sector.
        </p>
    </div>
);
