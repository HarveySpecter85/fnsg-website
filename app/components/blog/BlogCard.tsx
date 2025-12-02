import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
    title: string;
    excerpt: string;
    href?: string;
    date?: string;
    category?: string;
    cta?: string;
}

export function BlogCard({ title, excerpt, href, date, category, cta }: BlogCardProps) {
    const isClickable = !!href;
    const Wrapper = isClickable ? Link : 'div';
    const wrapperProps = isClickable ? { href, className: "block group h-full" } : { className: "block h-full opacity-75 cursor-not-allowed" };

    return (
        // @ts-ignore - Dynamic component typing is tricky with Next.js Link
        <Wrapper {...wrapperProps}>
            <div className={`border border-slate-200 rounded-lg overflow-hidden h-full flex flex-col bg-white ${isClickable ? 'hover:shadow-md transition-all group-hover:border-blue-500' : ''}`}>
                <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400">
                    <span className="font-bold opacity-20 text-4xl">FNSG</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    {category && (
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">
                            {category}
                        </span>
                    )}
                    <h3 className={`text-xl font-bold text-slate-900 mb-3 ${isClickable ? 'group-hover:text-blue-600 transition-colors' : ''}`}>
                        {title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4 flex-grow line-clamp-3">
                        {excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        {date ? (
                            <span className="text-slate-400 text-xs font-medium">{date}</span>
                        ) : (
                            <span className="text-slate-400 text-xs font-medium italic">Planned</span>
                        )}

                        {isClickable ? (
                            <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                {cta || "Read Article"} <ArrowRight className="w-4 h-4" />
                            </span>
                        ) : (
                            <span className="text-slate-400 text-sm font-semibold flex items-center gap-1">
                                {cta || "Coming Soon"}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
