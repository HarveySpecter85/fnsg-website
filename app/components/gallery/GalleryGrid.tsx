'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Calendar } from 'lucide-react';
import clsx from 'clsx';
import type { GalleryImage } from '@/types/gallery';
import { cloudinaryLoader } from '@/lib/cloudinary';

gsap.registerPlugin(ScrollTrigger);

interface GalleryGridProps {
    images: GalleryImage[];
    onImageClick: (index: number) => void;
    /** "masonry" for varied heights, "uniform" for consistent grid */
    layout?: 'masonry' | 'uniform';
    /** Show event badge overlay */
    showEventBadge?: boolean;
}

export function GalleryGrid({
    images,
    onImageClick,
    layout = 'masonry',
    showEventBadge = true,
}: GalleryGridProps) {
    const gridRef = useRef<HTMLDivElement>(null);

    // Staggered fade-in animation on scroll
    useGSAP(() => {
        if (!gridRef.current) return;
        const items = gridRef.current.querySelectorAll('[data-gallery-item]');
        if (items.length === 0) return;

        gsap.fromTo(
            items,
            { opacity: 0, y: 40, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, { scope: gridRef, dependencies: [images] });

    if (images.length === 0) {
        return (
            <div className="text-center py-20">
                <Camera className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500 text-lg">No photos in this category yet.</p>
            </div>
        );
    }

    // Determine span classes for masonry effect
    const getSpanClass = (image: GalleryImage, index: number): string => {
        if (layout === 'uniform') return '';

        // Featured images get double width on desktop
        if (image.featured && index < 3) {
            return 'md:col-span-2 md:row-span-2';
        }
        if (image.aspect === 'portrait') {
            return 'row-span-2';
        }
        return '';
    };

    const getAspectClass = (image: GalleryImage, index: number): string => {
        if (layout === 'uniform') return 'aspect-[4/3]';

        if (image.featured && index < 3) return 'aspect-[4/3]';
        if (image.aspect === 'portrait') return 'aspect-[3/4]';
        if (image.aspect === 'square') return 'aspect-square';
        return 'aspect-[4/3]';
    };

    return (
        <div
            ref={gridRef}
            className={clsx(
                'grid gap-4',
                layout === 'masonry'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto'
                    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            )}
        >
            {images.map((image, index) => (
                <div
                    key={image.id}
                    data-gallery-item
                    className={clsx(
                        'group relative overflow-hidden rounded-xl cursor-pointer',
                        'bg-slate-100 border border-slate-200',
                        'hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300',
                        getSpanClass(image, index)
                    )}
                    onClick={() => onImageClick(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View photo: ${image.alt}`}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onImageClick(index);
                        }
                    }}
                >
                    <div className={clsx('relative w-full overflow-hidden', getAspectClass(image, index))}>
                        <Image
                            loader={cloudinaryLoader}
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            loading={index < 4 ? 'eager' : 'lazy'}
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Event Badge */}
                        {showEventBadge && (
                            <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(image.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                </span>
                            </div>
                        )}

                        {/* Caption on Hover */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                            {image.caption && (
                                <p className="text-white text-sm font-medium leading-snug">{image.caption}</p>
                            )}
                            <p className="text-white/60 text-xs mt-1">{image.event}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
