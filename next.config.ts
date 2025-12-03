import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
