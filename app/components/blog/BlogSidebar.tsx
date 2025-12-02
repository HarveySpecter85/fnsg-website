import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BlogSidebarProps {
    className?: string;
}

export function BlogSidebar({ className = "" }: BlogSidebarProps) {
    const categories = [
        "Labor Market",
        "Operations",
        "Safety & Compliance",
        "Warehouse Staffing",
        "Manufacturing Staffing"
    ];

    return (
        <aside className={`bg-slate-50 p-6 rounded-xl border border-slate-200 ${className}`}>
            <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Categories</h3>
            <ul className="space-y-2">
                {categories.map((category) => (
                    <li key={category}>
                        <Link
                            href="#"
                            className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors group p-2 rounded hover:bg-white"
                        >
                            <span className="text-sm font-medium">{category}</span>
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Subscribe</h3>
                <p className="text-xs text-slate-500 mb-4">
                    Get the latest workforce intelligence delivered to your inbox.
                </p>
                <div className="flex gap-2">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                        disabled
                    />
                </div>
                <p className="text-[10px] text-slate-400 mt-2 italic">Newsletter integration coming soon.</p>
            </div>
        </aside>
    );
}
