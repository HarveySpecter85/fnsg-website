/**
 * BreadcrumbList JSON-LD Schema Component (Client)
 *
 * Auto-generates BreadcrumbList structured data from the current
 * URL path. Deployed globally via layout.tsx to cover all 170+ pages.
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 */
'use client';

import { usePathname } from 'next/navigation';

const BASE_URL = 'https://firstnationalstaffing.com';

/** Map URL slugs to human-readable labels */
const SEGMENT_LABELS: Record<string, string> = {
  'industries': 'Industries',
  'insights': 'Insights',
  'company': 'Company',
  'contact': 'Contact',
  'talent': 'Talent',
  'solutions': 'Solutions',
  'cities': 'Cities',
  'faq': 'FAQ',
  'blog': 'Blog',
  'osha': 'OSHA Safety',
  'pay-rates': 'Pay Rates',
  'kpis': 'KPIs',
  'reports': 'Reports',
  'compliance': 'Compliance',
  'legal': 'Legal',
  'partners': 'Partners',
  'analytics': 'Analytics',
  'city': 'Cities',
  'industry': 'Industry Insights',
  'labor-market': 'Labor Market',
  'warehouse-logistics-staffing': 'Warehouse & Logistics',
  'manufacturing-production-staffing': 'Manufacturing & Production',
  'food-beverage-production': 'Food & Beverage',
  'agriculture-nursery-staffing': 'Agriculture & Nursery',
  'healthcare-support-staffing': 'Healthcare Support',
  'healthcare-environmental-services': 'Healthcare EVS',
  'hospitality-events-staffing': 'Hospitality & Events',
  'recycling-waste-management-staffing': 'Recycling & Waste Management',
};

function formatSegment(segment: string): string {
  if (SEGMENT_LABELS[segment]) return SEGMENT_LABELS[segment];
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function BreadcrumbJsonLd() {
  const pathname = usePathname();

  if (!pathname || pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  const items = [
    { name: 'Home', url: BASE_URL },
    ...segments.map((segment, index) => ({
      name: formatSegment(segment),
      url: `${BASE_URL}/${segments.slice(0, index + 1).join('/')}`,
    })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
