

import React from 'react';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: (props) => <h1 className="text-4xl font-bold mt-10 mb-6" {...props} />,
        h2: (props) => <h2 className="text-3xl font-semibold mt-12 mb-4" {...props} />,
        h3: (props) => <h3 className="text-2xl font-semibold mt-10 mb-3" {...props} />,
        p: (props) => <p className="leading-7 text-gray-800 my-4" {...props} />,
        ul: (props) => <ul className="list-disc ml-6 my-4 space-y-2" {...props} />,
        li: (props) => <li className="leading-6" {...props} />,
        img: (props) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="rounded-lg my-8 w-full object-cover shadow-md" {...props} alt={props.alt || ''} />
        ),
        blockquote: (props) => (
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-6 bg-gray-50 p-4 rounded-r-lg" {...props} />
        ),
        ...components,
    };
}
