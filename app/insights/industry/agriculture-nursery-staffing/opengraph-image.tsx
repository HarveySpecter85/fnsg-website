import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Agriculture & Nursery Staffing Insights';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',
                    color: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px',
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        fontSize: 60,
                        fontWeight: 'bold',
                        marginBottom: 20,
                        color: '#60a5fa',
                    }}
                >
                    FNSG Workforce Intelligence
                </div>
                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 'bold',
                        lineHeight: 1.1,
                        maxWidth: '900px',
                    }}
                >
                    Agriculture & Nursery Staffing
                </div>
                <div
                    style={{
                        fontSize: 40,
                        marginTop: 40,
                        color: '#94a3b8',
                    }}
                >
                    Georgia 2025 Deep Dive
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
