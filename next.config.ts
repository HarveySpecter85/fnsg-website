import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/**
 * MDX plugin configuration
 * - Enables .mdx processing in the App Router
 * - Required for Next.js 14–16 (mdxRs engine)
 */
const withMDX = createMDX({
  extension: /\.mdx$/,
});

/**
 * Main Next.js configuration
 * - pageExtensions tells Next.js to treat .mdx files as routable pages
 * - experimental.mdxRs is required for MDX compilation in modern Next versions
 */
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.firstnationalstaffing.com' }],
        destination: 'https://firstnationalstaffing.com/:path*',
        permanent: true,
      },
      {
        source: '/company/leadership',
        destination: '/company/leadership-team',
        permanent: true,
      },
      {
        source: '/locations/:slug*',
        destination: '/insights/city/:slug*',
        permanent: true,
      },
      {
        source: '/insights/city/atlanta-staffing-agency',
        destination: '/insights/city/atlanta',
        permanent: true,
      },
      // Legacy -os URL Redirects (redirect old -os URLs to clean URLs)
      {
        source: '/solutions/on-site-workforce-management-os',
        destination: '/solutions/on-site-workforce-management',
        permanent: true,
      },
      {
        source: '/solutions/direct-hire-recruitment-os',
        destination: '/solutions/direct-hire-recruitment',
        permanent: true,
      },
      {
        source: '/solutions/payroll-compliance-administration-os',
        destination: '/solutions/payroll-compliance-administration',
        permanent: true,
      },
      {
        source: '/solutions/peak-season-deployment-os',
        destination: '/solutions/peak-season-deployment',
        permanent: true,
      },
      {
        source: '/solutions/high-volume-ramp-up-os',
        destination: '/solutions/high-volume-ramp-up',
        permanent: true,
      },
      {
        source: '/solutions/workforce-health-screening-os',
        destination: '/solutions/workforce-health-screening',
        permanent: true,
      },
      {
        source: '/solutions/workforce-diagnostic-os',
        destination: '/solutions/workforce-diagnostic',
        permanent: true,
      },
    ];
  },
};

/**
 * Export final config
 * @withMDX wraps Next config and enables MDX rendering
 */
export default withMDX(nextConfig);
