'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/app/components/anim/fade-in';
import { GalleryGrid } from './GalleryGrid';
import { GalleryFilter } from './GalleryFilter';
import { GalleryLightbox } from './GalleryLightbox';
import {
    getFilteredImages,
    getFeaturedImages,
    getFilterOptions,
    getTotalImageCount,
} from '@/lib/gallery-data';
import { cloudinaryLoader } from '@/lib/cloudinary';
import type { GalleryCategory, PhotoGalleryProps } from '@/types/gallery';

export default function PhotoGallery({
    variant = 'full',
    compactLimit = 6,
    category,
    eventSlug,
    showFilters = true,
    galleryLink = '/company/gallery',
    heading,
    subheading,
}: PhotoGalleryProps) {
    const [activeFilter, setActiveFilter] = useState<GalleryCategory | 'all'>(category ?? 'all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const filterOptions = useMemo(() => getFilterOptions(), []);
    const totalCount = useMemo(() => getTotalImageCount(), []);

    const displayImages = useMemo(() => {
        if (variant === 'compact') {
            return getFeaturedImages(compactLimit);
        }
        return getFilteredImages(activeFilter);
    }, [variant, compactLimit, activeFilter]);

    const handleImageClick = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const handleCloseLightbox = () => {
        setLightboxOpen(false);
    };

    const handleNavigate = (index: number) => {
        setLightboxIndex(index);
    };

    // ── Compact Mode ─────────────────────────────────────────
    if (variant === 'compact') {
        const remaining = totalCount - compactLimit;

        return (
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <FadeIn>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4">
                                <Camera className="w-3.5 h-3.5" />
                                Our Culture
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                                {heading ?? 'The People Behind the Placements'}
                            </h2>
                            <p className="text-slate-600 text-lg">
                                {subheading ?? 'Real moments from our team — because great staffing starts with great people.'}
                            </p>
                        </div>
                    </FadeIn>

                    {/* Compact Grid (2×3 on desktop) */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
                        {displayImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-300"
                                onClick={() => handleImageClick(index)}
                                role="button"
                                tabIndex={0}
                                aria-label={`View photo: ${image.alt}`}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleImageClick(index);
                                    }
                                }}
                            >
                                <Image
                                    loader={cloudinaryLoader}
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    loading="lazy"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/30 transition-colors duration-300" />

                                {/* "+N more" overlay on last image */}
                                {index === displayImages.length - 1 && remaining > 0 && (
                                    <div className="absolute inset-0 bg-brand-navy/60 flex items-center justify-center">
                                        <span className="text-white text-2xl md:text-3xl font-bold">
                                            +{remaining}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA to full gallery */}
                    <FadeIn delay={0.2}>
                        <div className="text-center mt-10">
                            <Link
                                href={galleryLink}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-full font-semibold text-sm hover:bg-brand-secondary transition-colors shadow-md shadow-brand-primary/20"
                            >
                                View All Photos
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </FadeIn>
                </div>

                {/* Lightbox */}
                {lightboxOpen && (
                    <GalleryLightbox
                        images={displayImages}
                        currentIndex={lightboxIndex}
                        onClose={handleCloseLightbox}
                        onNavigate={handleNavigate}
                    />
                )}
            </section>
        );
    }

    // ── Full Mode ────────────────────────────────────────────
    return (
        <div>
            {/* Filters */}
            {showFilters && (
                <FadeIn>
                    <div className="mb-10">
                        <GalleryFilter
                            options={filterOptions}
                            activeFilter={activeFilter}
                            onFilterChange={setActiveFilter}
                        />
                    </div>
                </FadeIn>
            )}

            {/* Masonry Grid */}
            <GalleryGrid
                images={displayImages}
                onImageClick={handleImageClick}
                layout="masonry"
                showEventBadge
            />

            {/* Lightbox */}
            {lightboxOpen && (
                <GalleryLightbox
                    images={displayImages}
                    currentIndex={lightboxIndex}
                    onClose={handleCloseLightbox}
                    onNavigate={handleNavigate}
                />
            )}
        </div>
    );
}
