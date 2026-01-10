import React from 'react';
import { Metadata } from 'next';
import ROISimulatorContent from './roi-content';

export const metadata: Metadata = {
    title: "Staffing ROI Model – Return on Workforce Investment",
    description: "Interactive ROI calculator to quantify financial impact of staffing, turnover reduction, and productivity gains.",
    alternates: {
        canonical: '/data-insights/return-on-staffing-roi-model',
    },
    openGraph: {
        title: "Staffing ROI Calculator",
        description: "Measure ROI of staffing strategies using financial and operational factors.",
        url: 'https://firstnationalstaffing.com/data-insights/return-on-staffing-roi-model',
        images: ['/data-insights/opengraph-image'],
        siteName: 'First National Staffing Group',
        locale: 'en_US',
        type: 'website',
    },
};

export default function ROISimulatorPage() {
    return <ROISimulatorContent />;
}
