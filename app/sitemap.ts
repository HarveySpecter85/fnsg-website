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
        '/partners',
        '/results',
        '/risk-compliance',
        '/solutions',
        '/talent',
        '/insights/city',
        '/insights/city/atlanta-staffing-agency',
        '/insights/city/barrow-county-staffing',
        '/insights/city/clayton-county-staffing',
        '/insights/city/cobb-county-workforce-solutions',
        '/insights/city/dekalb-county-staffing',
        '/insights/city/duluth',
        '/insights/city/forsyth-county-staffing',
        '/insights/city/fulton-county-employment-services',
        '/insights/city/gainesville',
        '/insights/city/gwinnett-county-staffing-agency',
        '/insights/city/hall-county-recruitment',
        '/insights/city/jackson-county-logistics-staffing',
        '/insights/city/norcross',
        '/insights/city/savannah-logistics-staffing',
        '/insights/city/south-fulton',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: lastModified,
        changeFrequency: 'daily',
        priority: route === '' ? 1 : 0.8,
    }));
}
