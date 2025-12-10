import React from 'react';

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    // Simple check: If the route is EXACTLY /company/blog, we might not want prose styles?
    // But layout wraps everything. 
    // We'll apply the requested prose wrapper. 
    // NOTE: This might constrain the index page. 
    // Ideally we would move page.tsx to (index)/page.tsx to avoid this wrapper, 
    // but strictly following user instructions for now.
    return (
        <div className="w-full max-w-4xl mx-auto py-12 px-6 prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl prose-img:shadow-lg">
            {children}
        </div>
    );
}
