// ============================================================
// Gallery Data — FNSG Events & Culture Photos (Cloudinary)
// ============================================================
// To add new images:
// 1. Upload to Cloudinary via MCP tool (upload-asset) with
//    folder: "fnsg-gallery/{event-slug}"
// 2. Add entries below with the Cloudinary public_id
// 3. The cloudinaryUrl() helper auto-generates optimized URLs
//
// Cloudinary handles: WebP/AVIF conversion, responsive sizing,
// CDN delivery, smart cropping (face detection), and LQIP blur.
// ============================================================

import type { GalleryImage, GalleryEvent, GalleryCategory, GalleryFilterOption } from '@/types/gallery';
import { cloudinaryUrl } from '@/lib/cloudinary';

// ── Helper: create a gallery image with auto-generated Cloudinary src ──

function img(
    data: Omit<GalleryImage, 'src'> & { publicId: string }
): GalleryImage {
    return {
        ...data,
        src: cloudinaryUrl(data.publicId),
    };
}

// ── Sample Gallery Data ──────────────────────────────────────
// Replace with real Cloudinary public_ids after uploading.
// These serve as structural examples.
// ──────────────────────────────────────────────────────────────

export const GALLERY_IMAGES: GalleryImage[] = [
    // ── Lanier Technical College Partnership — Nov 2025 ─────
    // First National Staffing investing in pro-education for associates
    img({
        id: 'com-2025-01',
        publicId: 'Resized_20251124_183315_a0ht3a',
        alt: 'First National Staffing associates exploring mechatronics and robotics lab during Lanier Technical College facility tour',
        width: 2000,
        height: 924,
        category: 'community',
        event: 'Lanier Technical College Education Partnership',
        date: '2025-11-24',
        caption: 'Where innovation meets workforce development',
        featured: true,
        order: 1,
        aspect: 'landscape',
    }),
    img({
        id: 'com-2025-02',
        publicId: 'Resized_20251124_183813_nejwtb',
        alt: 'FNSG team and Lanier Technical College partners gathered in SkillsUSA award-winning classroom for education partnership',
        width: 696,
        height: 321,
        category: 'community',
        event: 'Lanier Technical College Education Partnership',
        date: '2025-11-24',
        caption: 'Investing in pro-education for our associates',
        featured: true,
        order: 2,
        aspect: 'landscape',
    }),
    img({
        id: 'com-2025-03',
        publicId: 'Resized_20251124_185010_crbegu',
        alt: 'First National Staffing Group team visiting Lanier Tech automotive facilities to explore workforce education opportunities',
        width: 1062,
        height: 490,
        category: 'community',
        event: 'Lanier Technical College Education Partnership',
        date: '2025-11-24',
        caption: 'Exploring the future of automotive workforce training',
        featured: true,
        order: 3,
        aspect: 'landscape',
    }),
    img({
        id: 'com-2025-04',
        publicId: 'Resized_20251124_183916_ahzp6l',
        alt: 'First National Staffing representatives at Lanier Technical College Electrical Utility Technology program partnership',
        width: 924,
        height: 1384,
        category: 'community',
        event: 'Lanier Technical College Education Partnership',
        date: '2025-11-24',
        caption: 'Great careers begin here — powering Georgia\'s workforce',
        featured: true,
        order: 4,
        aspect: 'portrait',
    }),
    img({
        id: 'com-2025-05',
        publicId: 'Resized_20251124_185035_lm9e61',
        alt: 'FNSG leadership team at Lanier Technical College Automotive Collision Repair program in Georgia',
        width: 924,
        height: 2000,
        category: 'community',
        event: 'Lanier Technical College Education Partnership',
        date: '2025-11-24',
        caption: 'Building pathways to skilled careers through education',
        featured: true,
        order: 5,
        aspect: 'portrait',
    }),
    img({
        id: 'com-2025-06',
        publicId: 'Resized_20251124_184626_pvuf8y',
        alt: 'FNSG associates touring automotive collision repair workshop at Lanier Technical College in Georgia',
        width: 924,
        height: 2000,
        category: 'community',
        event: 'Lanier Technical College Education Partnership',
        date: '2025-11-24',
        caption: 'Hands-on learning drives workforce excellence',
        featured: true,
        order: 6,
        aspect: 'portrait',
    }),
];

// ── Event Grouping ───────────────────────────────────────────

export function getGalleryEvents(): GalleryEvent[] {
    const eventMap = new Map<string, GalleryEvent>();

    for (const image of GALLERY_IMAGES) {
        const slug = image.event
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

        if (!eventMap.has(slug)) {
            eventMap.set(slug, {
                slug,
                name: image.event,
                date: image.date,
                description: '',
                category: image.category,
                images: [],
            });
        }
        eventMap.get(slug)!.images.push(image);
    }

    return Array.from(eventMap.values()).sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

// ── Filter Helpers ───────────────────────────────────────────

export const CATEGORY_LABELS: Record<GalleryCategory, string> = {
    'team-events': 'Team Events',
    'community': 'Community',
    'workplace': 'Workplace',
    'celebrations': 'Celebrations',
    'training': 'Training',
    'leadership': 'Leadership',
};

export function getFilterOptions(): GalleryFilterOption[] {
    const counts = new Map<GalleryCategory, number>();

    for (const image of GALLERY_IMAGES) {
        counts.set(image.category, (counts.get(image.category) || 0) + 1);
    }

    const options: GalleryFilterOption[] = [
        { value: 'all', label: 'All Photos', count: GALLERY_IMAGES.length },
    ];

    for (const [category, count] of counts.entries()) {
        options.push({
            value: category,
            label: CATEGORY_LABELS[category],
            count,
        });
    }

    return options;
}

export function getFilteredImages(category?: GalleryCategory | 'all'): GalleryImage[] {
    if (!category || category === 'all') {
        return [...GALLERY_IMAGES].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
    }
    return GALLERY_IMAGES
        .filter((img) => img.category === category)
        .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getFeaturedImages(limit: number = 6): GalleryImage[] {
    return GALLERY_IMAGES
        .filter((img) => img.featured)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
}

export function getTotalImageCount(): number {
    return GALLERY_IMAGES.length;
}
