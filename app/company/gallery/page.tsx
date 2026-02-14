import type { Metadata } from 'next';
import { TextReveal } from '@/app/components/anim/text-reveal';
import { FadeIn } from '@/app/components/anim/fade-in';
import { MagneticButton } from '@/app/components/anim/magnetic-button';
import { CompanyBreadcrumbs } from '@/app/components/navigation/CompanyBreadcrumbs';
import { PhotoGallery } from '@/app/components/gallery';
import { GALLERY_IMAGES, getGalleryEvents } from '@/lib/gallery-data';
import { Camera, Heart, Users, Calendar } from 'lucide-react';
import Link from 'next/link';

// ── SEO Metadata ─────────────────────────────────────────────

export const metadata: Metadata = {
    title: 'Gallery — Our People & Culture | First National Staffing Group',
    description:
        'See the people behind the placements. Browse photos from FNSG team events, community outreach, employee celebrations, and workplace culture across Georgia.',
    alternates: {
        canonical: '/company/gallery',
    },
    openGraph: {
        title: 'Gallery — Our People & Culture | First National Staffing Group',
        description:
            'See the people behind the placements. Browse photos from FNSG team events, community outreach, and workplace culture.',
        url: 'https://firstnationalstaffing.com/company/gallery',
        images: ['/company/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'website',
    },
};

// ── JSON-LD Structured Data ──────────────────────────────────

function GalleryJsonLd() {
    const events = getGalleryEvents();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: 'FNSG People & Culture Gallery',
        description:
            'Photo gallery showcasing First National Staffing Group team events, community involvement, and workplace culture across Georgia.',
        url: 'https://firstnationalstaffing.com/company/gallery',
        publisher: {
            '@type': 'Organization',
            name: 'First National Staffing Group',
            url: 'https://firstnationalstaffing.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://firstnationalstaffing.com/brand/fnsg-icon.png',
            },
        },
        image: GALLERY_IMAGES.filter((img) => img.featured).map((img) => ({
            '@type': 'ImageObject',
            url: `https://firstnationalstaffing.com${img.src}`,
            name: img.alt,
            description: img.caption ?? img.alt,
            datePublished: img.date,
        })),
        about: events.map((event) => ({
            '@type': 'Event',
            name: event.name,
            startDate: event.date,
            description: event.description || `${event.name} — FNSG team event`,
            organizer: {
                '@type': 'Organization',
                name: 'First National Staffing Group',
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

// ── Page Component ───────────────────────────────────────────

export default function GalleryPage() {
    const events = getGalleryEvents();

    return (
        <main className="bg-brand-light">
            <GalleryJsonLd />

            {/* Breadcrumbs */}
            <div className="container mx-auto px-6 pt-8 max-w-7xl">
                <CompanyBreadcrumbs
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Company', href: '/company' },
                        { label: 'Gallery', href: '' },
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="relative py-16 lg:py-24 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-6">
                            <Camera className="w-3.5 h-3.5" />
                            Our Culture
                        </div>
                        <TextReveal
                            as="h1"
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-navy mb-6 leading-tight"
                        >
                            The People Behind the Placements
                        </TextReveal>
                        <TextReveal
                            as="h2"
                            className="text-xl md:text-2xl font-medium text-brand-secondary mb-8 block"
                        >
                            Real moments. Real people. Real impact across Georgia.
                        </TextReveal>

                        {/* Quick Stats */}
                        <FadeIn delay={0.4}>
                            <div className="flex flex-wrap gap-6 text-sm">
                                <div className="flex items-center gap-2 text-slate-600">
                                    <Camera className="w-4 h-4 text-brand-primary" />
                                    <span>
                                        <strong className="text-slate-800">{GALLERY_IMAGES.length}</strong> Photos
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600">
                                    <Calendar className="w-4 h-4 text-brand-primary" />
                                    <span>
                                        <strong className="text-slate-800">{events.length}</strong> Events
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600">
                                    <Heart className="w-4 h-4 text-brand-primary" />
                                    <span>One FNSG Family</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Gallery Content */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <PhotoGallery variant="full" showFilters />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-brand-navy rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-no-repeat animate-[shimmer_3s_infinite]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Want to be part of our story?
                            </h2>
                            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                                Join the team that treats every worker like family. We are always
                                looking for great people.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <MagneticButton>
                                    <Link
                                        href="/contact/request-workforce"
                                        className="btn-primary text-lg px-10 py-4 shadow-xl shadow-brand-primary/20"
                                    >
                                        Partner With Us
                                    </Link>
                                </MagneticButton>
                                <MagneticButton>
                                    <Link
                                        href="/talent"
                                        className="inline-flex items-center gap-2 text-lg px-10 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
                                    >
                                        <Users className="w-5 h-5" />
                                        Find Work
                                    </Link>
                                </MagneticButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
