'use client';

import React from 'react';

interface HeatmapItem {
    label: string;
    value: number;
}

interface HeatmapProps {
    data: HeatmapItem[];
    title: string;
}

export default function Heatmap({ data, title }: HeatmapProps) {
    const getColor = (value: number) => {
        if (value >= 80) return 'bg-red-500';
        if (value >= 60) return 'bg-orange-400';
        if (value >= 40) return 'bg-yellow-400';
        return 'bg-green-400';
    };

    return (
        <div className="w-full p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">{title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-lg text-center bg-slate-50 border border-slate-100">
                        <div
                            className={`w-full h-16 rounded-md ${getColor(item.value)} transition-all mb-3 shadow-sm`}
                        ></div>
                        <p className="text-sm font-bold text-slate-800">{item.label}</p>
                        <p className="text-xs text-slate-500 font-medium mt-1">{item.value}/100 Risk Score</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
