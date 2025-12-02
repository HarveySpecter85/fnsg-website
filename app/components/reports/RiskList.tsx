import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';

interface RiskItem {
    risk: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    description: string;
}

interface RiskListProps {
    risks: RiskItem[];
    className?: string;
}

export const RiskList: React.FC<RiskListProps> = ({ risks, className = "" }) => {
    const getIcon = (severity: string) => {
        switch (severity) {
            case 'critical': return <AlertTriangle className="w-5 h-5 text-red-600" />;
            case 'high': return <AlertCircle className="w-5 h-5 text-orange-600" />;
            case 'medium': return <AlertCircle className="w-5 h-5 text-amber-600" />;
            default: return <CheckCircle className="w-5 h-5 text-emerald-600" />;
        }
    };

    const getBorderColor = (severity: string) => {
        switch (severity) {
            case 'critical': return 'border-l-red-600 bg-red-50';
            case 'high': return 'border-l-orange-500 bg-orange-50';
            case 'medium': return 'border-l-amber-500 bg-amber-50';
            default: return 'border-l-emerald-500 bg-emerald-50';
        }
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {risks.map((item, idx) => (
                <div key={idx} className={`p-4 rounded-r-lg border-l-4 border border-slate-200 flex items-start gap-4 ${getBorderColor(item.severity)}`}>
                    <div className="mt-0.5 flex-shrink-0">
                        {getIcon(item.severity)}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1 flex items-center gap-2">
                            {item.risk}
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-500">
                                {item.severity}
                            </span>
                        </h4>
                        <p className="text-slate-700 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
