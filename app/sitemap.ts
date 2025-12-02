import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://firstnationalstaffing.com';
    const lastModified = new Date();

    const routes = [
        '',
        '/company',
        '/contact',
        '/data-insights',
        '/industries',
        '/legal',
        '/locations',
        '/partners',
        '/results',
        '/risk-compliance',
        '/solutions',
        '/talent',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: lastModified,
        changeFrequency: 'daily',
        priority: route === '' ? 1 : 0.8,
    }));
}
