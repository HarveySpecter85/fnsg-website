import { ImageResponse } from 'next/og';

export default function OGBaseTemplate({
    title,
    subtitle,
    section,
    tagline,
    theme = 'dark'
}: {
    title: string;
    subtitle?: string;
    section?: string;
    tagline?: string;
    theme?: 'dark' | 'light';
}) {
    const isDark = theme === 'dark';
    const bg = isDark ? '#0F172A' : '#FFFFFF';
    const text = isDark ? '#F8FAFC' : '#0F172A';
    const accent = '#3B82F6';

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                backgroundColor: bg,
                padding: '80px',
                color: text,
                fontFamily: 'sans-serif',
            }}
        >
            {/* Brand & Section Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '24px'
                }}>
                    F
                </div>
                <div style={{ fontSize: '24px', fontWeight: 600, color: '#94A3B8' }}>
                    First National Staffing OS
                </div>
                {section && (
                    <div style={{
                        padding: '4px 12px',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        color: accent,
                        borderRadius: '99px',
                        fontSize: '16px',
                        fontWeight: 600,
                        marginLeft: '20px'
                    }}>
                        {section}
                    </div>
                )}
                {tagline && (
                    <div style={{
                        fontSize: '16px',
                        color: '#64748B',
                        marginLeft: 'auto',
                        fontWeight: 500
                    }}>
                        {tagline}
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h1 style={{
                    fontSize: '72px',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    margin: 0,
                    backgroundImage: 'linear-gradient(90deg, #F8FAFC, #94A3B8)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    maxWidth: '1000px'
                }}>
                    {title}
                </h1>
                {subtitle && (
                    <p style={{
                        fontSize: '32px',
                        color: '#94A3B8',
                        maxWidth: '900px',
                        lineHeight: 1.4,
                        marginTop: '10px'
                    }}>
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Footer Decoration */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '12px',
                background: 'linear-gradient(90deg, #3B82F6, #2563EB, #1D4ED8)'
            }} />
        </div>
    );
}
