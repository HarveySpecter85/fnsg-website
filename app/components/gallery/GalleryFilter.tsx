'use client';

import clsx from 'clsx';
import type { GalleryFilterOption, GalleryCategory } from '@/types/gallery';

interface GalleryFilterProps {
    options: GalleryFilterOption[];
    activeFilter: GalleryCategory | 'all';
    onFilterChange: (filter: GalleryCategory | 'all') => void;
}

export function GalleryFilter({ options, activeFilter, onFilterChange }: GalleryFilterProps) {
    return (
        <div className="flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Filter gallery by category">
            {options.map((option) => (
                <button
                    key={option.value}
                    role="tab"
                    aria-selected={activeFilter === option.value}
                    onClick={() => onFilterChange(option.value)}
                    className={clsx(
                        'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border',
                        activeFilter === option.value
                            ? 'bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/25 scale-105'
                            : 'bg-white border-slate-200 text-brand-navy hover:border-brand-primary/30 hover:shadow-md'
                    )}
                >
                    {option.label}
                    <span className={clsx(
                        'ml-2 text-xs font-normal',
                        activeFilter === option.value ? 'text-white/80' : 'text-slate-400'
                    )}>
                        {option.count}
                    </span>
                </button>
            ))}
        </div>
    );
}
