import React from 'react';

const servicesData = [
    {
        category: "Drug Screening Services",
        items: [
            "4 Panel", "5 Panel", "7 Panel", "8 Panel", "9 Panel", "10 Panel",
            "12 Panel", "14 Panel", "MDMA", "OXY", "Alcohol", "Nicotine",
            "Bath Salts", "Fentanyl Only", "Instant xCup (various panels)"
        ]
    },
    {
        category: "Physical Exams",
        items: [
            "DOT Physical", "DOT Recertification", "Non-DOT Physical"
        ]
    },
    {
        category: "Vaccinations",
        items: [
            "Hepatitis A (1 & 2)", "Hepatitis B Series (1, 2, 3)",
            "MMR", "Varicella", "Influenza", "TDAP"
        ]
    },
    {
        category: "Titers",
        items: [
            "Hepatitis A", "Hepatitis B", "Hepatitis C", "MMR", "Varicella"
        ]
    },
    {
        category: "OSHA & Respiratory Testing",
        items: [
            "Respirator Fit Test (Qualitative)",
            "Respirator Fit Test (Quantitative)",
            "Pulmonary Function Test (Spirometry)",
            "OSHA Respirator Questionnaire"
        ]
    },
    {
        category: "X-Rays & TB Testing",
        items: [
            "Chest X-Ray (1 view)", "Chest X-Ray (2 views)", "TB Chest X-Ray",
            "TB/PPD Skin Test (1-step & 2-step)",
            "T-Spot TB Blood Test"
        ]
    },
    {
        category: "Vision Tests",
        items: [
            "Ishihara", "Jaeger", "Snellen", "Titmus"
        ]
    }
];

export default function ScreeningServicesCatalog() {
    return (
        <section className="py-12 bg-slate-50">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Full Workforce Health Screening Services You Can Add On</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map((service, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                            {service.category}
                        </h3>
                        <ul className="space-y-2">
                            {service.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start text-slate-600 text-sm">
                                    <span className="mr-2 text-blue-500">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
