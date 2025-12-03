import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'First National Staffing OS';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    // TODO: Replace background graphics with Gemini 2.0 Vision outputs.
    // TODO: Replace node clusters with AI-generated patterns.

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
                {/* Grid Pattern Background */}
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

                {/* Abstract Circuit/Node Elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        width: '200px',
                        height: '200px',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            width: '10px',
                            height: '10px',
                            background: '#3b82f6',
                            borderRadius: '50%',
                            boxShadow: '0 0 20px #3b82f6',
                        }}
                    />
                </div>

                <div
                    style={{
                        position: 'absolute',
                        bottom: '15%',
                        right: '15%',
                        width: '150px',
                        height: '150px',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            width: '8px',
                            height: '8px',
                            background: '#3b82f6',
                            borderRadius: '50%',
                            boxShadow: '0 0 15px #3b82f6',
                        }}
                    />
                </div>

                {/* Content Container */}
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
                        }}
                    >
                        First National Staffing OS
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
                        Workforce Operations Intelligence for Georgia Employers
                    </div>
                </div>

                {/* Glowing Borders */}
                <div
                    style={{
                        position: 'absolute',
                        inset: '20px',
                        border: '1px solid rgba(59, 130, 246, 0.1)',
                        borderRadius: '30px',
                        pointerEvents: 'none',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
