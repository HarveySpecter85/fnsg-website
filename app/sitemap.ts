import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://firstnationalstaffing.com';
    const lastModified = new Date();

    // Main routes
    const mainRoutes = [
        '',
        '/company',
        '/contact',
        '/data-insights',
        '/industries',
        '/insights',
        '/legal',
        '/locations',
        '/partners',
        '/results',
        '/risk-compliance',
        '/solutions',
        '/talent',
    ];

    // City insight pages
    const cityRoutes = [
        '/insights/city/atlanta-staffing-agency',
        '/insights/city/barrow-county-staffing',
        '/insights/city/clayton-county-staffing',
        '/insights/city/cobb-county-workforce-solutions',
        '/insights/city/dekalb-county-staffing',
        '/insights/city/duluth',
        '/insights/city/forsyth-county-staffing',
        '/insights/city/gainesville',
        '/insights/city/hall-county-recruitment',
        '/insights/city/jackson-county-logistics-staffing',
        '/insights/city/norcross',
        '/insights/city/savannah-logistics-staffing',
        '/insights/city/south-fulton',
    ];

    // Industry pages
    const industryRoutes = [
        '/industries/agriculture-nursery-staffing',
        '/industries/food-beverage-production',
        '/industries/healthcare-support-staffing',
        '/industries/hospitality-events-staffing',
        '/industries/manufacturing-production-staffing',
        '/industries/recycling-waste-management-staffing',
        '/industries/warehouse-logistics-staffing',
    ];

    // Insights sub-sections
    const insightRoutes = [
        '/insights/faq/georgia',
        '/insights/faq/immigration',
        '/insights/faq/manufacturing',
        '/insights/faq/staffing',
        '/insights/faq/warehouse',
        '/insights/pay-rates',
        '/insights/osha',
    ];

    const allRoutes = [...mainRoutes, ...cityRoutes, ...industryRoutes, ...insightRoutes];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: lastModified,
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : route.startsWith('/insights/city') ? 0.9 : 0.8,
    }));
}
