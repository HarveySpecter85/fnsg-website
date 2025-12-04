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
        // Industry Service Pages
        '/industries/agriculture-nursery-staffing',
        '/industries/food-beverage-production',
        '/industries/healthcare-environmental-services',
        '/industries/healthcare-support-staffing',
        '/industries/hospitality-events-staffing',
        '/industries/manufacturing-production-staffing',
        '/industries/recycling-waste-management-staffing',
        '/industries/warehouse-logistics-staffing',
        // Industry Insights (Deep Dives)
        '/insights/industry/agriculture-nursery-staffing',
        '/insights/industry/food-production',
        '/insights/industry/healthcare-support-staffing',
        '/insights/industry/hospitality-events',
        '/insights/industry/manufacturing',
        '/insights/industry/recycling',
        '/insights/industry/healthcare-environmental-services',
        '/insights/industry/warehouse',
        // City Sub-pages
        '/insights/city/duluth/korean-workforce-opportunities',
        '/insights/city/duluth/local-pack',
        '/insights/city/duluth/osha-smart-workforce',
        '/insights/city/duluth/staffing-guide-duluth',
        '/insights/city/gainesville/2nd-shift-issues',
        '/insights/city/gainesville/local-pack',
        '/insights/city/gainesville/staffing-guide-2025',
        '/insights/city/gainesville/warehouse-safety-osha',
        '/insights/city/norcross/bilingual-staffing-advantages',
        '/insights/city/norcross/local-pack',
        '/insights/city/norcross/manufacturing-turnover',
        '/insights/city/norcross/warehouse-staffing-trends',
        '/insights/city/south-fulton/3rd-shift-analysis',
        '/insights/city/south-fulton/airport-logistics-staffing',
        '/insights/city/south-fulton/local-pack',
        '/insights/city/south-fulton/recycling-staffing-crisis',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: lastModified,
        changeFrequency: 'daily',
        priority: route === '' ? 1 : 0.8,
    }));
}
