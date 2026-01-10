import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#1e293b',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '60px',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '60%' }}>
                    <div style={{ fontSize: 24, color: '#3b82f6', fontWeight: 'bold', marginBottom: 10 }}>
                        INTELLIGENCE REPORT
                    </div>
                    <div style={{ fontSize: 64, fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: 20 }}>
                        Georgia Workforce Benchmarks
                    </div>
                    <div style={{ fontSize: 32, color: '#94a3b8' }}>
                        Real-time data on wages, turnover, and compliance.
                    </div>
                </div>

                {/* Right Side Visual */}
                <div
                    style={{
                        width: '300px',
                        height: '300px',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 50px rgba(59, 130, 246, 0.3)',
                    }}
                >
                    <div style={{ fontSize: 120, color: 'white', fontWeight: 'bold' }}>OS</div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
