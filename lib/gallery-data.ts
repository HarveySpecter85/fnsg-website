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
    // ── Appreciation Month — Feb 2026 ─────────────────────────
    // FNSG family celebrating together in our latest appreciation event
    img({
        id: 'evt-2026-01',
        publicId: 'fnsg-gallery/appreciation-month-2026/photo-15',
        alt: 'FNSG team members gathered for the Appreciation Month celebration in Georgia',
        width: 4032,
        height: 2268,
        category: 'team-events',
        event: 'Appreciation Month 2026',
        date: '2026-02-14',
        caption: 'A culture of appreciation and teamwork',
        featured: true,
        order: 1,
        aspect: 'landscape',
    }),
    img({
        id: 'evt-2026-02',
        publicId: 'fnsg-gallery/appreciation-month-2026/photo-13',
        alt: 'First National Staffing Group associates during the employee appreciation breakfast',
        width: 4032,
        height: 3024,
        category: 'team-events',
        event: 'Appreciation Month 2026',
        date: '2026-02-14',
        caption: 'Building connections over breakfast',
        featured: true,
        order: 2,
        aspect: 'landscape',
    }),
    img({ id: 'evt-2026-03', publicId: 'fnsg-gallery/appreciation-month-2026/photo-01', alt: 'FNSG team members celebrating Appreciation Month', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Team celebration', featured: false, order: 3, aspect: 'portrait' }),
    img({ id: 'evt-2026-04', publicId: 'fnsg-gallery/appreciation-month-2026/photo-02', alt: 'FNSG associates at the 2026 appreciation event', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Our amazing associates', featured: false, order: 4, aspect: 'portrait' }),
    img({ id: 'evt-2026-05', publicId: 'fnsg-gallery/appreciation-month-2026/photo-03', alt: 'FNSG leadership and team appreciation activities', width: 3840, height: 2160, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Leadership in action', featured: false, order: 5, aspect: 'landscape' }),
    img({ id: 'evt-2026-06', publicId: 'fnsg-gallery/appreciation-month-2026/photo-04', alt: 'FNSG team building during Appreciation Month', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Building strong teams', featured: false, order: 6, aspect: 'portrait' }),
    img({ id: 'evt-2026-07', publicId: 'fnsg-gallery/appreciation-month-2026/photo-05', alt: 'Employee appreciation moments at FNSG', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Valued team members', featured: false, order: 7, aspect: 'portrait' }),
    img({ id: 'evt-2026-08', publicId: 'fnsg-gallery/appreciation-month-2026/photo-06', alt: 'FNSG staff celebrating success', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Celebrating success together', featured: false, order: 8, aspect: 'portrait' }),
    img({ id: 'evt-2026-09', publicId: 'fnsg-gallery/appreciation-month-2026/photo-07', alt: 'Associates enjoying appreciation events at FNSG', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Happy faces at FNSG', featured: false, order: 9, aspect: 'portrait' }),
    img({ id: 'evt-2026-10', publicId: 'fnsg-gallery/appreciation-month-2026/photo-08', alt: 'FNSG appreciation tour highlights', width: 4032, height: 2268, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Tour highlights', featured: false, order: 10, aspect: 'landscape' }),
    img({ id: 'evt-2026-11', publicId: 'fnsg-gallery/appreciation-month-2026/photo-09', alt: 'Team bonding at First National Staffing Group', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Bonding moments', featured: false, order: 11, aspect: 'portrait' }),
    img({ id: 'evt-2026-12', publicId: 'fnsg-gallery/appreciation-month-2026/photo-10', alt: 'FNSG associates participating in 2026 events', width: 2268, height: 4032, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Active participation', featured: false, order: 12, aspect: 'portrait' }),
    img({ id: 'evt-2026-14', publicId: 'fnsg-gallery/appreciation-month-2026/photo-11', alt: 'Celebrating our workforce at FNSG', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Our workforce, our pride', featured: false, order: 14, aspect: 'portrait' }),
    img({ id: 'evt-2026-16', publicId: 'fnsg-gallery/appreciation-month-2026/photo-12', alt: 'FNSG employee of the month recognition', width: 3264, height: 1836, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Recognizing excellence', featured: false, order: 16, aspect: 'landscape' }),
    img({ id: 'evt-2026-17', publicId: 'fnsg-gallery/appreciation-month-2026/photo-14', alt: 'Team lunches and celebrations at FNSG', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Lunch celebrations', featured: false, order: 17, aspect: 'portrait' }),
    img({ id: 'evt-2026-18', publicId: 'fnsg-gallery/appreciation-month-2026/photo-16', alt: 'Appreciation Month 2026 festivities at FNSG', width: 3213, height: 5712, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Festive moments', featured: false, order: 18, aspect: 'portrait' }),
    img({ id: 'evt-2026-19', publicId: 'fnsg-gallery/appreciation-month-2026/photo-17', alt: 'FNSG associates sharing appreciation', width: 4032, height: 2268, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Shares and smiles', featured: false, order: 19, aspect: 'landscape' }),
    img({ id: 'evt-2026-20', publicId: 'fnsg-gallery/appreciation-month-2026/photo-18', alt: 'First National Staffing Group team event 2026', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Together for FNSG', featured: false, order: 20, aspect: 'portrait' }),
    img({ id: 'evt-2026-21', publicId: 'fnsg-gallery/appreciation-month-2026/photo-19', alt: 'FNSG culture and values in action', width: 1600, height: 1200, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Living our values', featured: false, order: 21, aspect: 'landscape' }),
    img({ id: 'evt-2026-22', publicId: 'fnsg-gallery/appreciation-month-2026/photo-20', alt: 'Employee appreciation gifts and recognition', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Gifts of gratitude', featured: false, order: 22, aspect: 'portrait' }),
    img({ id: 'evt-2026-23', publicId: 'fnsg-gallery/appreciation-month-2026/photo-21', alt: 'FNSG team members during appreciation month', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Dedicated professionals', featured: false, order: 23, aspect: 'portrait' }),
    img({ id: 'evt-2026-24', publicId: 'fnsg-gallery/appreciation-month-2026/photo-22', alt: 'FNSG associates celebrating together', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Unity in celebration', featured: false, order: 24, aspect: 'portrait' }),
    img({ id: 'evt-2026-25', publicId: 'fnsg-gallery/appreciation-month-2026/photo-23', alt: 'FNSG team building event 2026', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Building the future', featured: false, order: 25, aspect: 'portrait' }),
    img({ id: 'evt-2026-26', publicId: 'fnsg-gallery/appreciation-month-2026/photo-24', alt: 'First National Staffing Group associates appreciation', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Core of FNSG', featured: false, order: 26, aspect: 'portrait' }),
    img({ id: 'evt-2026-27', publicId: 'fnsg-gallery/appreciation-month-2026/photo-25', alt: 'FNSG team at appreciation month wrap-up', width: 4032, height: 3024, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Wrap-up celebration', featured: false, order: 27, aspect: 'landscape' }),
    img({ id: 'evt-2026-28', publicId: 'fnsg-gallery/appreciation-month-2026/photo-26', alt: 'FNSG ensemble for appreciation month photo', width: 2160, height: 3840, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'The full team', featured: false, order: 28, aspect: 'portrait' }),
    img({ id: 'evt-2026-29', publicId: 'fnsg-gallery/appreciation-month-2026/photo-27', alt: 'FNSG team members gathered in the warehouse for appreciation activities', width: 1024, height: 576, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Warehouse team appreciation', featured: false, order: 29, aspect: 'landscape' }),
    img({ id: 'evt-2026-30', publicId: 'fnsg-gallery/appreciation-month-2026/photo-28', alt: 'FNSG associates smiling together outdoors during the appreciation event', width: 1024, height: 575, category: 'team-events', event: 'Appreciation Month 2026', date: '2026-02-14', caption: 'Smiles in the sun', featured: false, order: 30, aspect: 'landscape' }),
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

    // ── Employee Appreciation Tour — Feb 2026 ────────────────
    // Celebrating FNSG associates across multiple Georgia locations
    img({
        id: 'eat-2026-01',
        publicId: 'IMG_7657_cs4evg',
        alt: 'First National Staffing Group team members celebrating during the Employee Appreciation Tour in Georgia',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Celebrating the people who power our success',
        featured: false,
        order: 1,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-02',
        publicId: 'IMG_7667_g4hndp',
        alt: 'FNSG leadership recognizing outstanding associates at the Employee Appreciation Tour event',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Recognizing excellence across our team',
        featured: false,
        order: 2,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-03',
        publicId: '2ac3d95b-57e3-4832-a718-0f31c6e2df5a_ntvdeb',
        alt: 'FNSG associates gathering for group photo during Employee Appreciation Tour celebration',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Together we achieve more',
        featured: false,
        order: 3,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-04',
        publicId: 'IMG_7671_ducog9',
        alt: 'First National Staffing associates enjoying team-building activities at appreciation event',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Building stronger teams through appreciation',
        featured: false,
        order: 4,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-05',
        publicId: '4a01c07b-77c6-4e7d-a7be-3ea841240696_yxjnkb',
        alt: 'FNSG Employee Appreciation Tour stop with associates and leadership team in Georgia',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Every location, every associate matters',
        featured: false,
        order: 5,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-06',
        publicId: 'bed54bbc-12f4-4f59-ba80-9e21248b1e7f_ra2vrf',
        alt: 'First National Staffing Group associates receiving recognition awards during appreciation tour',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Hard work deserves recognition',
        featured: false,
        order: 6,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-07',
        publicId: 'a59dd616-5343-4dc3-83b2-cc4b6e7b74fa_ljf9zv',
        alt: 'FNSG team sharing a meal together at the Employee Appreciation Tour celebration',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Breaking bread and building bonds',
        featured: false,
        order: 7,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-08',
        publicId: '269eecf2-4f3a-4457-a279-3ef02f95e23a_zmdees',
        alt: 'FNSG associates smiling and celebrating at Employee Appreciation Tour gathering',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Smiles that reflect a great workplace culture',
        featured: false,
        order: 8,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-09',
        publicId: 'fbafb442-fcca-4dfb-8f1a-e79d43538e47_nfuyb0',
        alt: 'First National Staffing leadership addressing associates during appreciation tour event',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Leadership that listens and appreciates',
        featured: false,
        order: 9,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-10',
        publicId: '71821eb1-0608-4a05-ae00-479e4e28ff8b_aua0nh',
        alt: 'FNSG associate receiving certificate of appreciation at Employee Appreciation Tour',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Honoring dedication and commitment',
        featured: false,
        order: 10,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-11',
        publicId: '92b15d49-45ff-48b1-a66b-393329252fb7_kyi4ub',
        alt: 'Group of FNSG associates posing together at Employee Appreciation Tour location in Georgia',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Our greatest asset — our people',
        featured: false,
        order: 11,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-12',
        publicId: '5c52727a-827e-4aa9-86cf-dccc23492214_z6hxdc',
        alt: 'First National Staffing team enjoying refreshments during Employee Appreciation Tour stop',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Taking time to celebrate together',
        featured: false,
        order: 12,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-13',
        publicId: 'd767aed4-4dd2-4a56-8476-265ae5a7e643_fqhwwg',
        alt: 'FNSG associates and supervisors connecting at Employee Appreciation Tour event',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Strengthening connections across our workforce',
        featured: false,
        order: 13,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-14',
        publicId: '91ff2f10-ca31-4dee-a40c-8981f1c24ecb_l35grv',
        alt: 'First National Staffing Group appreciation event with associates gathered for celebration',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Gratitude in action',
        featured: false,
        order: 14,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-15',
        publicId: '67054312-c893-4d73-8b39-e28873ddbc2a_ex1brd',
        alt: 'FNSG Employee Appreciation Tour celebration with team members at Georgia facility',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Where appreciation meets opportunity',
        featured: false,
        order: 15,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-16',
        publicId: '1fca36d4-42a1-4fa7-958c-5ed376d8aa37_wcsvm8',
        alt: 'FNSG leadership presenting gifts to associates during Employee Appreciation Tour',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Small gestures, big impact',
        featured: false,
        order: 16,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-17',
        publicId: '271cabbb-2a39-4a00-a304-46b4107f3335_a4tbis',
        alt: 'First National Staffing associates networking during Employee Appreciation Tour gathering',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Connecting across teams and locations',
        featured: false,
        order: 17,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-18',
        publicId: '9af813d0-eda5-4059-a1f2-9c83ccd304b1_utsoed',
        alt: 'FNSG team members laughing and celebrating at Employee Appreciation Tour event',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Joy in the workplace starts with appreciation',
        featured: false,
        order: 18,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-19',
        publicId: 'd30090fd-9e46-4cfa-99a2-98af280b4f1f_mjah5t',
        alt: 'First National Staffing Group associates at Employee Appreciation Tour stop in Georgia',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Touring Georgia to say thank you',
        featured: false,
        order: 19,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-20',
        publicId: '99b2f1f2-f520-4147-9da1-2029e46295f2_yqsvjl',
        alt: 'FNSG Employee Appreciation Tour celebration with decorated venue and associates',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'A celebration of dedication',
        featured: false,
        order: 20,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-21',
        publicId: 'f6b70f70-e906-475f-a0b0-8adc923fc2a6_tjvwyx',
        alt: 'First National Staffing Group Employee Appreciation Tour highlight — team unity and celebration across Georgia locations',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'The heart of FNSG — our incredible team',
        featured: true,
        order: 21,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-22',
        publicId: 'bc2ec377-3ffc-4162-862a-35385ea68f2f_buy8wt',
        alt: 'FNSG associates showing team spirit during Employee Appreciation Tour event',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Team spirit runs deep at FNSG',
        featured: false,
        order: 22,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-23',
        publicId: 'f5267de9-d04f-44ab-99df-ef6df1e5ea8f_zqmni4',
        alt: 'First National Staffing leadership and associates sharing appreciation at tour event',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Leaders who lead with gratitude',
        featured: false,
        order: 23,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-24',
        publicId: 'bacd2c98-c387-4c5a-812a-d242ed564abd_kl0ie6',
        alt: 'FNSG team gathering for Employee Appreciation Tour activities at Georgia location',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Activities that bring us closer together',
        featured: false,
        order: 24,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-25',
        publicId: '961c7b2b-4a90-466d-a6d9-ff9d05091e8e_ljz5iu',
        alt: 'First National Staffing associates embracing at Employee Appreciation Tour celebration',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'More than coworkers — we are family',
        featured: false,
        order: 25,
        aspect: 'landscape',
    }),
    img({
        id: 'eat-2026-26',
        publicId: '53dd8a7c-7da4-452a-9f25-5a6d2d3bb6c2_crci8k',
        alt: 'FNSG Employee Appreciation Tour finale with full team gathered for group celebration photo',
        width: 1200,
        height: 900,
        category: 'team-events',
        event: 'Employee Appreciation Tour',
        date: '2026-02-01',
        caption: 'Until next time — thank you, team FNSG',
        featured: false,
        order: 26,
        aspect: 'landscape',
    }),

    // ── Safety Training 2026 - Toccoa ─────
    img({ id: 'evt-safety-2026-1', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-1', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 1', featured: false, order: 31, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-2', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-2', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 2', featured: false, order: 32, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-3', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-3', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 3', featured: false, order: 33, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-4', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-4', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 4', featured: false, order: 34, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-5', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-5', alt: 'FNSG associates participating in safety training in Toccoa', width: 3840, height: 2160, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 5', featured: false, order: 35, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-6', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-6', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 6', featured: false, order: 36, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-7', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-7', alt: 'FNSG associates participating in safety training in Toccoa', width: 3840, height: 2160, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 7', featured: false, order: 37, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-8', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-8', alt: 'FNSG associates participating in safety training in Toccoa', width: 3840, height: 2160, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 8', featured: false, order: 38, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-9', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-9', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 900, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 9', featured: false, order: 39, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-10', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-10', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 10', featured: false, order: 40, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-11', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-11', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 11', featured: false, order: 41, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-12', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-12', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 12', featured: false, order: 42, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-13', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-13', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 13', featured: false, order: 43, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-14', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-14', alt: 'FNSG associates participating in safety training in Toccoa', width: 3840, height: 2160, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 14', featured: false, order: 44, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-15', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-15', alt: 'FNSG associates participating in safety training in Toccoa', width: 3840, height: 2160, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 15', featured: false, order: 45, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-16', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-16', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 900, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 16', featured: false, order: 46, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-17', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-17', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 17', featured: false, order: 47, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-18', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-18', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 18', featured: false, order: 48, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-19', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-19', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 19', featured: false, order: 49, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-20', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-20', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 20', featured: false, order: 50, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-21', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-21', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 21', featured: false, order: 51, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-22', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-22', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 22', featured: false, order: 52, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-23', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-23', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 23', featured: false, order: 53, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-24', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-24', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 24', featured: false, order: 54, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-25', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-25', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 25', featured: false, order: 55, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-26', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-26', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 26', featured: false, order: 56, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-27', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-27', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 27', featured: false, order: 57, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-28', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-28', alt: 'FNSG associates participating in safety training in Toccoa', width: 3840, height: 2160, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 28', featured: false, order: 58, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-29', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-29', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 29', featured: false, order: 59, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-30', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-30', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 30', featured: false, order: 60, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-31', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-31', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 31', featured: false, order: 61, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-32', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-32', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 32', featured: false, order: 62, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-33', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-33', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 33', featured: false, order: 63, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-34', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-34', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 34', featured: false, order: 64, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-35', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-35', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 35', featured: false, order: 65, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-36', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-36', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 36', featured: false, order: 66, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-37', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-37', alt: 'FNSG associates participating in safety training in Toccoa', width: 3840, height: 2160, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 37', featured: false, order: 67, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-38', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-38', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 38', featured: false, order: 68, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-39', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-39', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 39', featured: false, order: 69, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-40', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-40', alt: 'FNSG associates participating in safety training in Toccoa', width: 3840, height: 2160, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 40', featured: false, order: 70, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-41', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-41', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 41', featured: false, order: 71, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-42', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-42', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 42', featured: false, order: 72, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-43', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-43', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 43', featured: false, order: 73, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-44', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-44', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 44', featured: false, order: 74, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-45', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-45', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 45', featured: false, order: 75, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-46', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-46', alt: 'FNSG associates participating in safety training in Toccoa', width: 1600, height: 1200, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 46', featured: false, order: 76, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-47', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-47', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 47', featured: false, order: 77, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-48', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-48', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 48', featured: false, order: 78, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-49', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-49', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 49', featured: false, order: 79, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-50', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-50', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 50', featured: false, order: 80, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-51', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-51', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 51', featured: false, order: 81, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-52', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-52', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 52', featured: false, order: 82, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-53', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-53', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 53', featured: false, order: 83, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-54', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-54', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 54', featured: false, order: 84, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-55', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-55', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 55', featured: false, order: 85, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-56', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-56', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 56', featured: false, order: 86, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-57', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-57', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 57', featured: false, order: 87, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-58', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-58', alt: 'FNSG associates participating in safety training in Toccoa', width: 3840, height: 2160, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 58', featured: false, order: 88, aspect: 'landscape' }),
    img({ id: 'evt-safety-2026-59', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-59', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 59', featured: false, order: 89, aspect: 'portrait' }),
    img({ id: 'evt-safety-2026-60', publicId: 'fnsg-gallery/safety-training-2026-toccoa/photo-60', alt: 'FNSG associates participating in safety training in Toccoa', width: 1200, height: 1600, category: 'training', event: 'Safety Training 2026 - Toccoa', date: '2026-02-14', caption: 'Safety Training Session 60', featured: false, order: 90, aspect: 'portrait' }),
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
