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
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: 'power2.out',
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

    return (
        <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
            {images.map((image, index) => (
                <div
                    key={image.id}
                    data-gallery-item
                    className="group flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                        <Image
                            loader={cloudinaryLoader}
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading={index < 6 ? 'eager' : 'lazy'}
                        />

                        {/* Event Badge Overlay */}
                        {showEventBadge && (
                            <div className="absolute top-3 left-3">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-brand-navy shadow-sm">
                                    <Calendar className="w-3 h-3 text-brand-primary" />
                                    {new Date(image.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Content Below Image */}
                    <div className="p-4 flex flex-col flex-grow">
                        {image.caption ? (
                            <p className="text-brand-navy font-medium leading-snug mb-1 line-clamp-2">
                                {image.caption}
                            </p>
                        ) : (
                            <p className="text-brand-navy font-medium leading-snug mb-1 line-clamp-2">
                                {image.alt}
                            </p>
                        )}
                        <p className="text-slate-500 text-xs mt-auto pt-2 border-t border-slate-100">
                            {image.event}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
