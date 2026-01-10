export const runtime = 'edge';
import { ImageResponse } from 'next/og';
import OGBaseTemplate from '@/app/components/og/OGBaseTemplate';

export const size = { width: 1200, height: 630 };

export default function Image() {
    return new ImageResponse(
        (
            <OGBaseTemplate
                title="First National Staffing OS"
                subtitle="Workforce Intelligence & Staffing Insights"
                section="Data Insights"
            />
        ),
        { ...size }
    );
}
