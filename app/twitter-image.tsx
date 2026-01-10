import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'First National Staffing Group';
export const size = {
    width: 1600,
    height: 900,
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
                }}
            >
                {/* Background Grid */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                            'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                        opacity: 0.3,
                    }}
                />

                {/* Central Glow */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            color: 'white',
                            marginBottom: 10,
                            letterSpacing: '-0.03em',
                        }}
                    >
                        FNSG
                    </div>
                    <div
                        style={{
                            fontSize: 40,
                            color: '#60a5fa',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                        }}
                    >
                        Industrial Staffing
                    </div>
                </div>

                {/* Decorative Corners */}
                <div style={{ position: 'absolute', top: 40, left: 40, width: 40, height: 40, borderTop: '4px solid #3b82f6', borderLeft: '4px solid #3b82f6' }} />
                <div style={{ position: 'absolute', top: 40, right: 40, width: 40, height: 40, borderTop: '4px solid #3b82f6', borderRight: '4px solid #3b82f6' }} />
                <div style={{ position: 'absolute', bottom: 40, left: 40, width: 40, height: 40, borderBottom: '4px solid #3b82f6', borderLeft: '4px solid #3b82f6' }} />
                <div style={{ position: 'absolute', bottom: 40, right: 40, width: 40, height: 40, borderBottom: '4px solid #3b82f6', borderRight: '4px solid #3b82f6' }} />
            </div>
        ),
        {
            ...size,
        }
    );
}
