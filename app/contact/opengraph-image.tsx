import { ImageResponse } from 'next/og';
import OGBaseTemplate from '@/app/components/og/OGBaseTemplate';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <OGBaseTemplate
                title="Contact First National Staffing"
                subtitle="Get in touch with our Atlanta, Gainesville, and Savannah branches."
                section="Contact"
            />
        ),
        { ...size }
    );
}
