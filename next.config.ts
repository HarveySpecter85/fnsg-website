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
        source: '/locations/:slug*',
        destination: '/insights/city/:slug*',
        permanent: true,
      },
      {
        source: '/insights/city/atlanta-staffing-agency',
        destination: '/insights/city/atlanta',
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
