// ============================================================
// Cloudinary Configuration & URL Helpers — FNSG Gallery
// ============================================================
// Cloudinary delivers optimized images via CDN with automatic
// format negotiation (WebP/AVIF), responsive sizing, and
// smart cropping (face detection).
//
// Environment variable required:
//   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
// ============================================================

import type { CloudinaryTransform } from '@/types/gallery';

/** Cloudinary cloud name — set in .env.local */
export const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dr7fov4v4';

/** Base Cloudinary delivery URL */
export const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/** Default folder prefix for all gallery uploads */
export const GALLERY_FOLDER = 'fnsg-gallery';

/**
 * Build a Cloudinary delivery URL with transformations.
 *
 * @example
 * cloudinaryUrl('fnsg-gallery/holiday-2025/team-dinner')
 * // → https://res.cloudinary.com/fnsg/image/upload/f_auto,q_auto/fnsg-gallery/holiday-2025/team-dinner
 *
 * cloudinaryUrl('fnsg-gallery/holiday-2025/team-dinner', { width: 600, crop: 'fill', gravity: 'faces' })
 * // → https://res.cloudinary.com/fnsg/image/upload/w_600,c_fill,g_faces,f_auto,q_auto/fnsg-gallery/holiday-2025/team-dinner
 */
export function cloudinaryUrl(publicId: string, transforms?: CloudinaryTransform): string {
    const parts: string[] = [];

    if (transforms?.width) parts.push(`w_${transforms.width}`);
    if (transforms?.height) parts.push(`h_${transforms.height}`);
    if (transforms?.crop) parts.push(`c_${transforms.crop}`);
    if (transforms?.gravity) parts.push(`g_${transforms.gravity}`);
    if (transforms?.effect) parts.push(`e_${transforms.effect}`);
    if (transforms?.dpr) parts.push(`dpr_${transforms.dpr}`);

    // Always apply auto format + quality for optimal delivery
    parts.push(`f_${transforms?.format ?? 'auto'}`);
    parts.push(`q_${transforms?.quality ?? 'auto'}`);

    const transformString = parts.join(',');
    return `${CLOUDINARY_BASE}/${transformString}/${publicId}`;
}

/**
 * Generate a responsive srcSet for Cloudinary images.
 * Used by GalleryGrid for optimal responsive loading.
 *
 * @example
 * cloudinarySrcSet('fnsg-gallery/team-dinner', [400, 800, 1200])
 * // → "https://...w_400.../team-dinner 400w, https://...w_800.../team-dinner 800w, ..."
 */
export function cloudinarySrcSet(
    publicId: string,
    widths: number[] = [400, 640, 800, 1024, 1200, 1600],
    options?: Omit<CloudinaryTransform, 'width'>
): string {
    return widths
        .map((w) => {
            const url = cloudinaryUrl(publicId, { ...options, width: w, crop: options?.crop ?? 'fill' });
            return `${url} ${w}w`;
        })
        .join(', ');
}

/**
 * Generate a blurred placeholder URL (tiny, low-quality image for LQIP).
 * Used for blur-up loading effect.
 */
export function cloudinaryBlurPlaceholder(publicId: string): string {
    return cloudinaryUrl(publicId, {
        width: 30,
        quality: 'auto:eco',
        format: 'webp',
        effect: 'blur:1000',
        crop: 'fill',
    });
}

/**
 * Generate the full public_id for a gallery image.
 *
 * @example
 * galleryPublicId('holiday-celebration-2025', 'team-dinner')
 * // → "fnsg-gallery/holiday-celebration-2025/team-dinner"
 */
export function galleryPublicId(eventSlug: string, imageName: string): string {
    return `${GALLERY_FOLDER}/${eventSlug}/${imageName}`;
}

/**
 * Next.js Image loader for Cloudinary.
 * Use with <Image loader={cloudinaryLoader} ... />
 */
export function cloudinaryLoader({
    src,
    width,
    quality,
}: {
    src: string;
    width: number;
    quality?: number;
}): string {
    // If src is already a full Cloudinary URL, extract publicId and rebuild with width
    if (src.startsWith('https://res.cloudinary.com')) {
        // Extract publicId from URL pattern: .../upload/{transforms}/{publicId}
        const uploadIndex = src.indexOf('/upload/');
        if (uploadIndex !== -1) {
            const afterUpload = src.substring(uploadIndex + '/upload/'.length);
            // Skip existing transform segment (e.g., "f_auto,q_auto/") to get publicId
            const segments = afterUpload.split('/');
            // If first segment contains commas, it's a transform string — skip it
            const publicId = segments[0].includes(',') ? segments.slice(1).join('/') : afterUpload;
            return cloudinaryUrl(publicId, {
                width,
                quality: quality ? (quality as number) : 'auto',
                crop: 'fill',
                format: 'auto',
            });
        }
        return src;
    }

    // Otherwise treat src as a publicId
    return cloudinaryUrl(src, {
        width,
        quality: quality ? (quality as number) : 'auto',
        crop: 'fill',
        format: 'auto',
    });
}
