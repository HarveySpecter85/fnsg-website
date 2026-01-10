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
        '/partners',
        '/results',
        '/risk-compliance',
        '/solutions',
        '/talent',
        '/insights/city',
        '/insights/city/atlanta',
        '/insights/city/barrow-county-staffing',
        '/insights/city/clayton-county-staffing',
        '/insights/city/cobb-county-workforce-solutions',
        '/insights/city/dekalb-county-staffing',
        '/insights/city/duluth',
        '/insights/city/forsyth-county-staffing',
        '/insights/city/fulton-county-employment-services',
        '/insights/city/gainesville',
        '/insights/city/hall-county-recruitment',
        '/insights/city/jackson-county-logistics-staffing',
        '/insights/city/norcross',
        '/insights/city/savannah-logistics-staffing',
        '/insights/city/south-fulton',
        '/insights/city/gwinnett-county-staffing-agency',
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
        // Solutions
        '/solutions/workforce-diagnostic-os',
        '/solutions/workforce-diagnostic', // Interactive Tool
        '/solutions/farm-labor-contracting', // Niche Service
        '/solutions/on-site-workforce-management-os',
        '/solutions/workforce-health-screening-os',
        // Health Screening Internal Pages
        '/solutions/workforce-health-screening/drug-alcohol-testing',
        '/solutions/workforce-health-screening/occupational-physicals',
        '/solutions/workforce-health-screening/vaccinations-immunizations',
        '/solutions/direct-hire-recruitment-os',
        '/solutions/high-volume-ramp-up-os',
        '/solutions/peak-season-deployment-os',
        '/solutions/payroll-compliance-administration-os',
        // Reports OS
        '/insights/reports',
        '/insights/reports/georgia-industrial-workforce-2025',
        '/insights/reports/warehouse-logistics-forecast-2025',
        '/insights/reports/manufacturing-turnover-2025',
        '/insights/reports/healthcare-evs-2025',
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
