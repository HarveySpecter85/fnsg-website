import { ImageResponse } from 'next/og';
import OGBaseTemplate from '@/app/components/og/OGBaseTemplate';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <OGBaseTemplate
                title="Industry-Specific Workforce Solutions"
                subtitle="Specialized staffing OS for manufacturing, logistics, and healthcare."
                section="Solutions"
            />
        ),
        { ...size }
    );
}
