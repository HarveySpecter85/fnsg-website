import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'First National Staffing OS - Warehouse & Logistics';
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
                    background: '#0f172a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                            'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        padding: '40px',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        background: 'rgba(15, 23, 42, 0.6)',
                        borderRadius: '20px',
                        boxShadow: '0 0 50px rgba(59, 130, 246, 0.1)',
                    }}
                >
                    <div
                        style={{
                            fontSize: 60,
                            fontWeight: 900,
                            color: 'white',
                            marginBottom: 20,
                            letterSpacing: '-0.02em',
                            textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                            textAlign: 'center',
                        }}
                    >
                        Warehouse & Logistics Staffing
                    </div>
                    <div
                        style={{
                            fontSize: 30,
                            color: '#94a3b8',
                            textAlign: 'center',
                            maxWidth: '800px',
                            lineHeight: 1.4,
                        }}
                    >
                        Industry Staffing Solutions
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
