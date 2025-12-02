import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';

interface RecommendationCardProps {
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
    className?: string;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ title, description, actionLabel, onAction, className = "" }) => {
    return (
        <div className={`p-6 bg-slate-900 text-white rounded-xl shadow-lg flex flex-col h-full ${className}`}>
            <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                    <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

            {actionLabel && (
                <div className="mt-auto pt-4 border-t border-slate-800">
                    <button
                        onClick={onAction}
                        className="text-blue-400 hover:text-blue-300 text-sm font-bold flex items-center gap-2 transition-colors"
                    >
                        {actionLabel} <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};
