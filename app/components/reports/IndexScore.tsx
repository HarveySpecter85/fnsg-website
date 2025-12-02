import React from 'react';

interface IndexScoreProps {
    title: string;
    score: number; // 0 to 100
    maxScore?: number;
    label?: string;
    className?: string;
}

export const IndexScore: React.FC<IndexScoreProps> = ({ title, score, maxScore = 100, label, className = "" }) => {
    const percentage = Math.min(Math.max((score / maxScore) * 100, 0), 100);

    let colorClass = 'text-blue-600';
    let bgClass = 'bg-blue-600';

    if (percentage < 40) {
        colorClass = 'text-red-600';
        bgClass = 'bg-red-600';
    } else if (percentage < 70) {
        colorClass = 'text-amber-500';
        bgClass = 'bg-amber-500';
    } else {
        colorClass = 'text-emerald-600';
        bgClass = 'bg-emerald-600';
    }

    return (
        <div className={`p-6 border border-slate-200 rounded-xl bg-white flex flex-col items-center justify-center text-center ${className}`}>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">{title}</h3>

            <div className="relative w-32 h-32 flex items-center justify-center mb-2">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        className="text-slate-100"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray={351.86} // 2 * PI * 56
                        strokeDashoffset={351.86 - (percentage / 100) * 351.86}
                        className={`${colorClass} transition-all duration-1000 ease-out`}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-3xl font-bold ${colorClass}`}>{score}</span>
                    <span className="text-xs text-slate-400">/ {maxScore}</span>
                </div>
            </div>

            {label && <p className="text-sm font-medium text-slate-700">{label}</p>}
        </div>
    );
};
