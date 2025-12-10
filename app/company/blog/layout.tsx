import React from 'react';

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-4xl mx-auto py-12 px-4 prose prose-blue prose-lg prose-img:rounded-xl prose-img:shadow-lg">
            {children}
        </div>
    );
}
