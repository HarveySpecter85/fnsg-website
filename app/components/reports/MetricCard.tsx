import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
    title: string;
    value: string | number;
    trend?: number; // Percentage change, positive or negative
    trendLabel?: string;
    subtext?: string;
    className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, trendLabel, subtext, className = "" }) => {
    return (
        <div className={`p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow ${className}`}>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">{title}</h3>
            <div className="flex items-end gap-3 mb-2">
                <span className="text-3xl font-bold text-slate-900">{value}</span>
                {trend !== undefined && (
                    <div className={`flex items-center text-sm font-bold ${trend > 0 ? 'text-emerald-600' : trend < 0 ? 'text-red-600' : 'text-slate-500'}`}>
                        {trend > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : trend < 0 ? <TrendingDown className="w-4 h-4 mr-1" /> : <Minus className="w-4 h-4 mr-1" />}
                        {Math.abs(trend)}%
                    </div>
                )}
            </div>
            {(trendLabel || subtext) && (
                <p className="text-xs text-slate-400">
                    {trendLabel && <span className="mr-1">{trendLabel}</span>}
                    {subtext}
                </p>
            )}
        </div>
    );
};
