'use client'

import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const testimonials = [
    {
        name: "Marc D.",
        role: "Électricien",
        exp: "15 ans d'expérience",
        text: "Depuis que j'utilise SecureAvenant, je ne perds plus un seul euro sur les imprévus. Le client signe, c'est acté. Ça a payé mon abonnement pour 10 ans en une semaine.",
        image: "/avatar-marc.png" // Placeholder, handle if not exists or generic
    },
    {
        name: "Thomas R.",
        role: "Plombier Chauffagiste",
        exp: "Artisan indépendant",
        text: "Avant, je négociais les suppléments en fin de chantier et je perdais souvent. Maintenant, c'est signé tout de suite sur le téléphone. Fini les discussions interminables.",
        image: "/avatar-marc.png"
    },
    {
        name: "Sophie L.",
        role: "Contractant Général",
        exp: "Gérante Rénov'Plus",
        text: "Mes clients adorent le côté pro. Ils voient le prix, ils signent, et on reçoit le PDF. C'est propre, carré, et ça m'évite des heures de paperasse le soir.",
        image: "/avatar-marc.png"
    },
    {
        name: "Karim B.",
        role: "Maçonnerie Générale",
        exp: "Chef d'équipe",
        text: "Sur le chantier, j'ai souvent les mains sales ou des gants. L'interface est super simple, gros boutons, on ne peut pas se tromper. C'est vraiment fait pour nous.",
        image: "/avatar-marc.png"
    }
];

// Duplicate for "infinite" scroll feel
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

export default function SocialProof() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400; // Approx card width
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="testimonials" className="py-24 bg-white border-y border-slate-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold mb-4 text-slate-900">Ils ne reviendront pas en arrière</h2>
                    <p className="text-slate-600">Rejoignez les artisans qui ont décidé de se faire payer tout ce qu'ils travaillent.</p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden md:block">
                        <button
                            onClick={() => scroll('left')}
                            className="bg-white p-3 rounded-full shadow-lg border border-slate-100 text-slate-700 hover:text-primary hover:border-primary transition-colors"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden md:block">
                        <button
                            onClick={() => scroll('right')}
                            className="bg-white p-3 rounded-full shadow-lg border border-slate-100 text-slate-700 hover:text-primary hover:border-primary transition-colors"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-4 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {extendedTestimonials.map((item, idx) => (
                            <div key={idx} className="snap-center shrink-0 w-[85vw] md:w-[450px]">
                                <div className="h-full bg-slate-50 p-8 md:p-10 rounded-[2.5rem] relative shadow-sm border border-slate-100 flex flex-col">
                                    <Quote className="absolute top-8 left-8 w-10 h-10 text-primary/20 rotate-180" />

                                    <div className="flex gap-1 mb-6 justify-center mt-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-primary fill-primary shadow-sm" />
                                        ))}
                                    </div>

                                    <p className="text-lg md:text-xl font-serif font-medium text-slate-800 italic mb-8 leading-relaxed text-center flex-grow">
                                        "{item.text}"
                                    </p>

                                    <div className="flex items-center justify-center gap-4 mt-auto">
                                        <div className="relative w-12 h-12 rounded-full border border-slate-200 shadow-md overflow-hidden bg-white">
                                            {/* Using a generic avatar/icon logic if image fails, but keeping Image component for consistency */}
                                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold">
                                                {item.name.charAt(0)}
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <div className="font-bold text-slate-900">{item.name}</div>
                                            <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{item.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
