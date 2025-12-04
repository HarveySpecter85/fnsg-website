import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Healthcare Environmental Services Workforce Deep Dive - Georgia 2025';
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
                    background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                    padding: '40px',
                    position: 'relative',
                }}
            >
                {/* Grid Pattern Background */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                        opacity: 0.5,
                    }}
                />

                {/* Content Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        textAlign: 'center',
                        maxWidth: '900px',
                    }}
                >
                    {/* Badge */}
                    <div
                        style={{
                            background: 'rgba(59, 130, 246, 0.2)',
                            border: '1px solid rgba(59, 130, 246, 0.5)',
                            borderRadius: '20px',
                            padding: '8px 20px',
                            fontSize: '20px',
                            fontWeight: 600,
                            color: '#60a5fa',
                            marginBottom: '30px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        GEORGIA 2025 EDITION
                    </div>

                    {/* Title */}
                    <h1
                        style={{
                            fontSize: '72px',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: '20px',
                            background: 'linear-gradient(to right, #ffffff, #94a3b8)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                        }}
                    >
                        Healthcare EVS
                        <br />
                        Workforce Deep Dive
                    </h1>

                    {/* Subtitle */}
                    <p
                        style={{
                            fontSize: '32px',
                            color: '#cbd5e1',
                            maxWidth: '800px',
                            lineHeight: 1.4,
                            marginTop: '10px',
                        }}
                    >
                        Infection Control • OSHA Risks • Compliance • Staffing Stability
                    </p>

                    {/* Footer */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                        }}
                    >
                        <div
                            style={{
                                width: '40px',
                                height: '40px',
                                background: '#3b82f6',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >
                            F
                        </div>
                        <span style={{ fontSize: '24px', fontWeight: 600, color: '#94a3b8' }}>
                            First National Staffing Group
                        </span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
