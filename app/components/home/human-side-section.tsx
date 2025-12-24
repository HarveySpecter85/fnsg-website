'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Calendar, Gift, Users } from 'lucide-react';
import { FadeIn } from '@/app/components/anim/fade-in';

type Card = {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: React.ElementType;
};

const cards: Card[] = [
    {
        id: 1,
        title: 'Annual Employee Holiday Celebration',
        description: 'Bringing our team together to celebrate a year of hard work and shared success.',
        image: '/images/people/holiday-party.jpg', // Placeholder path
        icon: Calendar,
    },
    {
        id: 2,
        title: 'Giving Back: End-of-Year Employee Gifts',
        description: 'Showing appreciation for the dedication and commitment of our staff.',
        image: '/images/people/employee-gifts.jpg', // Placeholder path
        icon: Gift,
    },
    {
        id: 3,
        title: 'Recognizing Our Temporary Workforce',
        description: 'Honoring the essential contributions of our temporary staff members.',
        image: '/images/people/temp-workforce.jpg', // Placeholder path
        icon: Users,
    },
];

export default function HumanSideSection() {
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const openModal = (card: Card) => setSelectedCard(card);
    const closeModal = () => setSelectedCard(null);

    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase mb-4">
                        Our Culture
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Behind the Numbers: Our People
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Data drives decisions. People make them real.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <FadeIn key={card.id} delay={idx * 0.1}>
                            <div
                                onClick={() => openModal(card)}
                                className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Image Placeholder Area */}
                                <div className="relative h-48 bg-slate-100 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-200 group-hover:bg-slate-300 transition-colors">
                                        <card.icon className="w-12 h-12 text-slate-400 group-hover:text-slate-500 transition-all duration-500 group-hover:scale-110" />
                                    </div>
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Lightweight Modal */}
            {selectedCard && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-slate-100 transition-colors z-10"
                        >
                            <X className="w-5 h-5 text-slate-500" />
                        </button>

                        <div className="relative h-64 md:h-80 bg-slate-100 flex items-center justify-center">
                            <selectedCard.icon className="w-20 h-20 text-slate-300" />
                            <div className="absolute bottom-4 left-0 right-0 text-center text-slate-400 text-sm font-medium uppercase tracking-widest">
                                Media Placeholder
                            </div>
                        </div>

                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                {selectedCard.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {selectedCard.description} This is a lightweight modal designed to showcase photos or videos of our team and culture without navigating away from the homepage.
                            </p>
                            <button onClick={closeModal} className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline">
                                Close View
                            </button>
                        </div>
                    </div>
                    {/* Backdrop click to close */}
                    <div className="absolute inset-0 -z-10" onClick={closeModal} />
                </div>
            )}
        </section>
    );
}
