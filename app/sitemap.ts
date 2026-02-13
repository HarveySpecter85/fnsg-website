import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://firstnationalstaffing.com';
    const lastModified = new Date();

    /* ── Core Pages ── */
    const coreRoutes = [
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
    ];

    /* ── Company ── */
    const companyRoutes = [
        '/company/about-us',
        '/company/our-story',
        '/company/leadership-team',
        '/company/performance-metrics',
        '/company/gallery',
        '/company/press-media',
        '/company/press-media/first-national-staffing-os-launch',
        '/company/press-media/releases/launch-os',
        '/company/blog',
        '/company/blog/best-it-staffing-agencies-technical-talent',
        '/company/blog/biggest-staffing-companies-us',
        '/company/blog/expert-recruiting-services-dream-team',
        '/company/blog/finding-a-staffing-agency-in-georgia-for-local-jobs',
        '/company/blog/finding-staffing-jobs-guide-to-temporary-employment',
        '/company/blog/georgia-staffing-agencies-temp-permanent-work',
        '/company/blog/georgia-staffing-agencies-your-guide-to-temp-and-permanent-work',
        '/company/blog/innovative-recruiting-solutions-modern-businesses',
        '/company/blog/smart-employment-solutions-growing-workforce',
        '/company/blog/specialized-healthcare-staffing-medical-facilities',
        '/company/blog/staffing-agency-conyers-ga-local-jobs-placements',
        '/company/blog/top-recruiting-companies-deliver-quality-talent',
        '/company/blog/top-staffing-recruiting-companies-nationwide',
        '/company/blog/why-choose-a-professional-hiring-agency-for-your-recruitment-needs',
    ];

    /* ── Contact ── */
    const contactRoutes = [
        '/contact/general-inquiries',
        '/contact/request-workforce',
    ];

    /* ── Data Insights ── */
    const dataInsightRoutes = [
        '/data-insights/return-on-staffing-roi-model',
    ];

    /* ── Industry Service Pages ── */
    const industryRoutes = [
        '/industries/agriculture-nursery-staffing',
        '/industries/food-beverage-production',
        '/industries/healthcare-environmental-services',
        '/industries/healthcare-support-staffing',
        '/industries/hospitality-events-staffing',
        '/industries/manufacturing-production-staffing',
        '/industries/recycling-waste-management-staffing',
        '/industries/warehouse-logistics-staffing',
    ];

    /* ── City Hub + Landing Pages ── */
    const cityRoutes = [
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
        '/insights/city/gwinnett-county-staffing-agency',
        '/insights/city/hall-county-recruitment',
        '/insights/city/jackson-county-logistics-staffing',
        '/insights/city/norcross',
        '/insights/city/savannah-logistics-staffing',
        '/insights/city/smyrna-staffing',
        '/insights/city/south-fulton',
        '/insights/city/marietta-staffing',
    ];

    /* ── City Deep-Dive Sub-Pages ── */
    const citySubRoutes = [
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

    /* ── Industry Insights (Deep Dives) ── */
    const industryInsightRoutes = [
        '/insights/industry',
        '/insights/industry/agriculture-nursery-staffing',
        '/insights/industry/food-production',
        '/insights/industry/healthcare-environmental-services',
        '/insights/industry/healthcare-support-staffing',
        '/insights/industry/hospitality-events',
        '/insights/industry/manufacturing',
        '/insights/industry/recycling',
        '/insights/industry/warehouse',
    ];

    /* ── FAQ Pages ── */
    const faqRoutes = [
        '/insights/faq',
        '/insights/faq/georgia',
        '/insights/faq/immigration',
        '/insights/faq/manufacturing',
        '/insights/faq/staffing',
        '/insights/faq/temp-labor',
        '/insights/faq/warehouse',
    ];

    /* ── Analytics & KPIs ── */
    const analyticsRoutes = [
        '/insights/kpis',
        '/insights/labor-market',
    ];

    /* ── Pay Rates ── */
    const payRateRoutes = [
        '/insights/pay-rates',
        '/insights/pay-rates/duluth',
        '/insights/pay-rates/gainesville',
        '/insights/pay-rates/manufacturing',
        '/insights/pay-rates/norcross',
        '/insights/pay-rates/south-fulton',
        '/insights/pay-rates/warehouse',
    ];

    /* ── OSHA Resources ── */
    const oshaRoutes = [
        '/insights/osha',
        '/insights/osha/case-studies',
        '/insights/osha/checklists',
        '/insights/osha/fines',
        '/insights/osha/regulations',
        '/insights/osha/temp-labor',
    ];

    /* ── Industry Reports ── */
    const reportRoutes = [
        '/insights/reports',
        '/insights/reports/georgia-industrial-workforce-2025',
        '/insights/reports/warehouse-logistics-forecast-2025',
        '/insights/reports/manufacturing-turnover-2025',
        '/insights/reports/healthcare-evs-2025',
    ];

    /* ── Legal ── */
    const legalRoutes = [
        '/legal/accessibility-statement',
        '/legal/marketing-communications-policy',
        '/legal/privacy-policy',
        '/legal/tcpa-compliance-policy',
        '/legal/terms-of-service',
    ];

    /* ── Partners ── */
    const partnerRoutes = [
        '/partners/labcorp-escreen-network',
        '/partners/safety-certifications',
        '/partners/technology-stack',
        '/partners/vms-integrations',
    ];

    /* ── Risk & Compliance ── */
    const complianceRoutes = [
        '/risk-compliance/1099-vs-w2-risk-playbook',
        '/risk-compliance/aca-benefits-management',
        '/risk-compliance/drug-free-workplace-policy',
        '/risk-compliance/liability-insurance-coverage',
        '/risk-compliance/mspa-agricultural-compliance',
        '/risk-compliance/safety-training-protocols',
    ];

    /* ── Solutions ── */
    const solutionRoutes = [
        '/solutions/workforce-diagnostic',
        '/solutions/farm-labor-contracting',
        '/solutions/on-site-workforce-management',
        '/solutions/direct-hire-recruitment',
        '/solutions/high-volume-ramp-up',
        '/solutions/peak-season-deployment',
        '/solutions/payroll-compliance-administration',
        '/solutions/workforce-health-screening',
        '/solutions/workforce-health-screening/drug-alcohol-testing',
        '/solutions/workforce-health-screening/occupational-physicals',
        '/solutions/workforce-health-screening/vaccinations-immunizations',
        '/solutions/deployment-strategies/high-volume-ramp-ups',
        '/solutions/deployment-strategies/peak-season-deployment',
    ];

    /* ── Talent ── */
    const talentRoutes = [
        '/talent/submit-resume',
        '/talent/job-board',
        '/talent/employee-benefits',
        '/talent/worker-portal-login',
    ];

    const allRoutes = [
        ...coreRoutes,
        ...companyRoutes,
        ...contactRoutes,
        ...dataInsightRoutes,
        ...industryRoutes,
        ...cityRoutes,
        ...citySubRoutes,
        ...industryInsightRoutes,
        ...faqRoutes,
        ...analyticsRoutes,
        ...payRateRoutes,
        ...oshaRoutes,
        ...reportRoutes,
        ...legalRoutes,
        ...partnerRoutes,
        ...complianceRoutes,
        ...solutionRoutes,
        ...talentRoutes,
    ];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: route === ''
            ? 'daily'
            : route.startsWith('/company/blog/')
                ? 'monthly'
                : 'weekly',
        priority: route === ''
            ? 1.0
            : coreRoutes.includes(route)
                ? 0.9
                : industryRoutes.includes(route)
                    ? 0.9
                    : cityRoutes.includes(route)
                        ? 0.85
                        : solutionRoutes.includes(route)
                            ? 0.85
                            : 0.7,
    }));
}
