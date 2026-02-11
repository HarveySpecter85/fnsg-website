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
                        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                        activeFilter === option.value
                            ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                    )}
                >
                    {option.label}
                    <span className={clsx(
                        'ml-1.5 text-xs',
                        activeFilter === option.value ? 'text-white/70' : 'text-slate-400'
                    )}>
                        {option.count}
                    </span>
                </button>
            ))}
        </div>
    );
}
