'use client';

import { useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { GalleryImage } from '@/types/gallery';
import { cloudinaryLoader } from '@/lib/cloudinary';

interface GalleryLightboxProps {
    images: GalleryImage[];
    currentIndex: number;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

export function GalleryLightbox({ images, currentIndex, onClose, onNavigate }: GalleryLightboxProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const image = images[currentIndex];

    // GSAP entrance animation
    useGSAP(() => {
        if (!overlayRef.current || !contentRef.current) return;

        gsap.fromTo(
            overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
        gsap.fromTo(
            contentRef.current,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 }
        );
    }, { scope: overlayRef });

    const handlePrev = useCallback(() => {
        const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        onNavigate(prevIndex);
    }, [currentIndex, images.length, onNavigate]);

    const handleNext = useCallback(() => {
        const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        onNavigate(nextIndex);
    }, [currentIndex, images.length, onNavigate]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [onClose, handlePrev, handleNext]);

    if (!image) return null;

    const formattedDate = new Date(image.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-md"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo: ${image.alt}`}
        >
            <div
                ref={contentRef}
                className="relative w-full max-w-5xl mx-4 md:mx-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors z-10"
                    aria-label="Close lightbox"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Image Container */}
                <div className="relative bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative w-full" style={{ aspectRatio: `${image.width} / ${image.height}`, maxHeight: '70vh' }}>
                        <Image
                            loader={cloudinaryLoader}
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                            priority
                        />
                    </div>

                    {/* Caption Bar */}
                    <div className="p-4 md:p-6 bg-slate-900/95 border-t border-slate-700/50">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                            <div>
                                <h3 className="text-white font-semibold text-lg">{image.event}</h3>
                                {image.caption && (
                                    <p className="text-slate-400 text-sm mt-1">{image.caption}</p>
                                )}
                            </div>
                            <div className="flex items-center gap-4 text-slate-500 text-xs font-mono shrink-0">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {formattedDate}
                                </span>
                                <span className="text-slate-600">
                                    {currentIndex + 1} / {images.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full md:-translate-x-14 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
                            aria-label="Previous photo"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full md:translate-x-14 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
                            aria-label="Next photo"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
