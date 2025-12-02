import React from 'react';

interface CityHeroProps {
    city: string;
    description: string;
}

export function CityHero({ city, description }: CityHeroProps) {
    return (
        <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {city} Staffing & Workforce Insights
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                {description}
            </p>
        </div>
    );
}
