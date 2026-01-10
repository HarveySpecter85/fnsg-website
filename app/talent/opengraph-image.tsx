import { ImageResponse } from 'next/og';
import OGBaseTemplate from '@/app/components/og/OGBaseTemplate';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <OGBaseTemplate
                title="Find Your Next Career Opportunity"
                subtitle="Browse top industrial, logistics, and healthcare jobs in Georgia."
                section="Talent"
            />
        ),
        { ...size }
    );
}
