import React from 'react';

interface SectionHeaderProps {
    title: string;
    description?: string;
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, className = "" }) => {
    return (
        <div className={`mb-8 ${className}`}>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
            {description && (
                <p className="text-slate-600 max-w-3xl leading-relaxed">
                    {description}
                </p>
            )}
            <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
        </div>
    );
};
