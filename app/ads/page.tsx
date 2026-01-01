'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    ShieldCheck, AlertTriangle, FileText, Check, X,
    Smartphone, Clock, Banknote, ArrowRight, Star,
    MessageSquare, Handshake, Lock, Zap, TrendingUp, ThumbsUp, Wallet
} from 'lucide-react';

/* --- UTILS & WRAPPERS --- */

// Ad Container Wrapper for scaling
const AdContainer = ({ format, title, children, scale = 1 }: { format: 'square' | 'story', title: string, children: React.ReactNode, scale: number }) => {
    const width = 1080;
    const height = format === 'square' ? 1080 : 1920;

    return (
        <div className="flex flex-col items-center gap-4 mb-12">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider bg-white px-4 py-2 rounded-lg shadow-sm">
                {title} ({width} x {height})
            </h3>
            <div className="relative border border-slate-300 bg-slate-200" style={{ width: width * scale, height: height * scale }}>
                <div
                    className="origin-top-left bg-white shadow-2xl overflow-hidden"
                    style={{
                        width: width,
                        height: height,
                        transform: `scale(${scale})`,
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

/* --- AD CONCEPTS --- */

/* --- TOFU --- */

// 1. TOFU: Le Trou dans la Caisse 
const AdTofu1 = ({ format }: { format: 'square' | 'story' }) => (
    <div className="w-full h-full bg-slate-900 text-white p-12 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40">
            <Image
                src="/images/ads/site_background.png"
                layout="fill"
                objectFit="cover"
                alt="Construction Site"
            />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>

        <div className="relative z-10 text-center w-full">
            <span className="inline-block px-8 py-4 rounded-full bg-red-500/20 text-red-500 font-bold border-2 border-red-500 mb-12 text-3xl backdrop-blur-md">
                ⚠️ ALERTE TRESORERIE
            </span>
            <h2 className="font-display font-bold text-7xl mb-16 leading-tight drop-shadow-lg">
                Votre argent part<br />en fumée ?
            </h2>

            <div className="bg-slate-900/60 backdrop-blur-xl rounded-[3rem] p-16 border border-white/20 mb-16 transform -rotate-2 shadow-2xl">
                <div className="text-4xl text-slate-300 mb-6 uppercase tracking-widest font-bold">Pertes annuelles</div>
                <div className="text-[10rem] font-bold text-red-500 tracking-tighter leading-none mb-4 drop-shadow-md text-shadow">-4 500€</div>
                <div className="text-2xl text-slate-400 mt-8 italic">*Moyenne constatée pour un artisan seul</div>
            </div>

            <div className="bg-primary text-slate-900 font-black text-5xl px-16 py-8 rounded-full inline-flex items-center gap-6 shadow-xl border-4 border-white/10">
                STOPPER L'HÉMORRAGIE
                <ArrowRight className="w-10 h-10" />
            </div>
        </div>
    </div>
);

// 2. TOFU: SMS = Danger
const AdTofu2 = ({ format }: { format: 'square' | 'story' }) => (
    <div className="w-full h-full bg-[#E5DDD5] p-0 flex flex-col relative overflow-hidden">
        {/* Split Screen */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#E5DDD5] flex flex-col justify-center items-center p-12 border-b-4 border-red-500 z-10">
            <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/WhatsApp_bg.png/1200px-WhatsApp_bg.png')] bg-cover"></div>
            <div className="bg-white p-8 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl shadow-xl max-w-3xl w-full mb-8 relative z-20">
                <p className="text-4xl text-slate-800">"Chef, je rajoute 2 prises ?"</p>
            </div>
            <div className="bg-[#DCF8C6] p-8 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl shadow-xl max-w-3xl w-full self-end relative z-20">
                <p className="text-4xl text-slate-800">"Ok fonce !"</p>
            </div>
            <div className="absolute bottom-8 right-12 text-red-600 font-bold text-4xl bg-white px-6 py-2 rounded shadow rotate-3 border-4 border-red-600">
                DANGER JURIDIQUE !
            </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-900 flex flex-col justify-center items-center p-12 z-10">
            <div className="bg-white p-12 rounded-lg shadow-2xl max-w-2xl w-full transform rotate-1 border-l-8 border-green-500">
                <div className="flex justify-between items-center mb-8 border-b pb-4">
                    <span className="font-bold text-3xl text-slate-900">AVENANT N°42</span>
                    <span className="text-green-600 font-bold text-2xl">VALIDÉ</span>
                </div>
                <div className="space-y-4">
                    <div className="h-6 bg-slate-100 rounded w-full"></div>
                    <div className="h-6 bg-slate-100 rounded w-3/4"></div>
                </div>
                <div className="mt-8 flex justify-end">
                    <span className="font-handwriting text-3xl text-blue-800">Lu et approuvé</span>
                </div>
            </div>
            <div className="absolute top-8 left-12 text-green-400 font-bold text-4xl bg-slate-800 px-6 py-2 rounded shadow -rotate-2 border-4 border-green-400">
                100% SÉCURISÉ
            </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-primary text-slate-900 font-black text-6xl px-12 py-12 rounded-full shadow-xl border-8 border-white">
            VS
        </div>
    </div>
);

// 3. TOFU: Artisan Bénévole
const AdTofu3 = ({ format }: { format: 'square' | 'story' }) => (
    <div className={`w-full h-full bg-slate-900 p-16 flex flex-col items-center relative overflow-hidden ${format === 'story' ? 'justify-center gap-12' : 'justify-between'}`}>
        {/* Background Image subtle */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <Image
                src="/images/ads/site_background.png"
                layout="fill"
                objectFit="cover"
                alt="Background"
            />
        </div>

        <h2 className="text-[110px] font-black text-white leading-none text-center uppercase relative z-10 drop-shadow-xl mt-8">
            Vous n'êtes pas<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">BÉNÉVOLE.</span>
        </h2>

        <div className={`bg-white text-slate-900 p-12 rounded-xl shadow-2xl transform rotate-2 max-w-3xl w-full relative z-10 ${format === 'story' ? 'my-8' : ''}`}>
            <div className="absolute -top-6 -right-6 bg-red-600 text-white font-bold text-3xl px-8 py-4 rotate-12 shadow-lg">
                CADEAU CLIENT
            </div>
            <div className="space-y-8 opacity-50">
                <div className="flex justify-between text-3xl font-bold border-b-2 border-slate-200 pb-4">
                    <span>FACTURE #2901</span>
                    <span>12/10/2025</span>
                </div>
                <div className="flex justify-between text-2xl">
                    <span>Pose Placo Supplémentaire</span>
                    <span className="line-through decoration-red-500 decoration-4">450.00 €</span>
                </div>
                <div className="flex justify-between text-2xl">
                    <span>Déplacement Extra</span>
                    <span className="line-through decoration-red-500 decoration-4">80.00 €</span>
                </div>
                <div className="flex justify-between text-4xl font-black pt-4 border-t-2 border-slate-900">
                    <span>TOTAL FACTURÉ</span>
                    <span className="text-red-600">0.00 €</span>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full border-t-8 border-red-600 -rotate-12 opacity-80"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full border-t-8 border-red-600 rotate-12 opacity-80"></div>
        </div>

        <div className="bg-red-600 text-white text-4xl font-bold px-12 py-6 rounded-lg shadow-xl mb-12 relative z-10 border-2 border-white/20">
            ARRÊTEZ DE TRAVAILLER GRATUITEMENT
        </div>
    </div>
);

// 4. TOFU: Le Chaos
const AdTofu4 = ({ format }: { format: 'square' | 'story' }) => {
    const isStory = format === 'story';

    return (
        <div className="w-full h-full bg-slate-100 flex flex-col relative overflow-hidden">
            <div className={`h-full w-full flex ${isStory ? 'flex-col' : 'flex-row'}`}>
                {/* Chaos Side */}
                <div className={`relative flex items-center justify-center overflow-hidden border-white z-10 ${isStory ? 'h-1/2 w-full border-b-4' : 'w-1/2 h-full border-r-4'}`}>
                    <Image
                        src="/images/ads/messy_desk.png"
                        layout="fill"
                        objectFit="cover"
                        alt="Messy Desk"
                        className="brightness-75 blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-red-900/30 mix-blend-multiply"></div>

                    <h2 className="absolute top-12 left-0 w-full text-center font-black text-6xl text-white uppercase drop-shadow-xl z-20">AVANT</h2>

                    <div className="relative z-20 transform -rotate-6 bg-yellow-200 text-slate-900 p-8 shadow-xl max-w-md text-center font-handwriting text-4xl">
                        "C'est où ce papier ?!" 😫
                    </div>
                </div>

                {/* Order Side - No Frame for UI */}
                <div className={`relative flex items-center justify-center bg-white ${isStory ? 'h-1/2 w-full' : 'w-1/2 h-full'}`}>
                    {/* Clean UI without Device Frame */}
                    <div className="w-[85%] bg-white rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.1)] p-8 border border-slate-100 relative z-20">
                        <div className="flex justify-between items-center mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                    <ShieldCheck className="w-8 h-8 text-primary" />
                                </div>
                                <span className="font-bold text-2xl text-slate-800">Mes Chantiers</span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex justify-between items-center">
                                <div>
                                    <span className="font-bold text-slate-800 block text-2xl">Mme. Dupont</span>
                                    <span className="text-slate-400 text-lg">Avenant #42</span>
                                </div>
                                <span className="text-green-600 font-bold text-2xl bg-white px-4 py-2 rounded-lg shadow-sm border border-green-100">+ 150€</span>
                            </div>
                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex justify-between items-center">
                                <div>
                                    <span className="font-bold text-slate-800 block text-2xl">Mr. Martin</span>
                                    <span className="text-slate-400 text-lg">Avenant #43</span>
                                </div>
                                <span className="text-green-600 font-bold text-2xl bg-white px-4 py-2 rounded-lg shadow-sm border border-green-100">+ 420€</span>
                            </div>
                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex justify-between items-center">
                                <div>
                                    <span className="font-bold text-slate-800 block text-2xl">SDB Etage</span>
                                    <span className="text-slate-400 text-lg">Avenant #44</span>
                                </div>
                                <span className="text-green-600 font-bold text-2xl bg-white px-4 py-2 rounded-lg shadow-sm border border-green-100">+ 85€</span>
                            </div>
                        </div>
                    </div>

                    <h2 className="absolute top-12 left-0 w-full text-center font-black text-6xl text-slate-900 uppercase z-20">APRÈS</h2>
                </div>
            </div>

            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-16 py-6 rounded-full text-4xl font-bold shadow-2xl z-30 border-4 border-white whitespace-nowrap">
                Retrouvez votre sérénité
            </div>
        </div>
    );
};

/* --- MOFU --- */

// 5. MOFU: 30 Secondes
const AdMofu1 = ({ format }: { format: 'square' | 'story' }) => (
    <div className="w-full h-full bg-white p-12 flex flex-col items-center justify-center">
        <h2 className="text-[7rem] font-black text-slate-900 text-center mb-24 leading-[0.9]">
            30 SECONDES<br />
            <span className="text-5xl font-medium text-slate-500 mt-6 block tracking-tight">pour sécuriser un chantier</span>
        </h2>

        <div className="w-full max-w-5xl flex flex-col gap-12">
            {[
                { id: 1, title: 'Sélectionnez', desc: 'Le chantier', icon: Smartphone, color: 'bg-blue-600' },
                { id: 2, title: 'Ajoutez', desc: 'Les travaux par la voix', icon: Zap, color: 'bg-primary' },
                { id: 3, title: 'Signez', desc: 'Sur le téléphone', icon: Handshake, color: 'bg-green-500' },
            ].map((step, i) => (
                <div key={step.id} className="flex items-center gap-12 bg-slate-50 p-8 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group">
                    <div className={`w-32 h-32 rounded-3xl ${step.color} text-white flex items-center justify-center shadow-lg relative z-10`}>
                        <step.icon className="w-16 h-16" />
                    </div>
                    <div className="relative z-10">
                        <div className="text-3xl font-bold text-slate-300 mb-2">ÉTAPE {step.id}</div>
                        <div className="text-6xl font-black text-slate-900">{step.title}</div>
                    </div>
                    <div className={`absolute -right-20 -bottom-20 w-80 h-80 rounded-full ${step.color} opacity-10 blur-3xl`}></div>
                </div>
            ))}
        </div>
    </div>
);

// 6. MOFU: Bouclier
const AdMofu2 = ({ format }: { format: 'square' | 'story' }) => (
    <div className="w-full h-full bg-slate-900 p-12 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Image subtle */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <Image
                src="/images/ads/site_background.png"
                layout="fill"
                objectFit="cover"
                alt="Background"
            />
        </div>

        <ShieldCheck className="w-[800px] h-[800px] text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 blur-sm" />

        <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-16 rounded-[3rem] text-center max-w-4xl shadow-2xl">
            <div className="bg-slate-900/50 p-6 rounded-full inline-block mb-12 border border-green-500/30">
                <ShieldCheck className="w-32 h-32 text-green-500 mx-auto" />
            </div>

            <h2 className="text-7xl font-bold text-white mb-12">
                Blindé<br />Juridiquement
            </h2>

            <div className="bg-slate-800/80 p-12 rounded-2xl text-left border-l-8 border-primary mb-12 shadow-inner">
                <p className="text-slate-400 font-mono text-xl mb-4 uppercase tracking-widest">Code Civil • Article 1367</p>
                <p className="text-white text-4xl italic leading-relaxed font-serif">
                    "La signature électronique a la même valeur juridique qu'une signature manuscrite."
                </p>
            </div>

            <div className="text-3xl text-slate-300 font-light border-t border-white/10 pt-8 mt-8">
                Ne craignez plus jamais les impayés.
            </div>
        </div>
    </div>
);

// 7. MOFU: Preuve Sociale (Artisan Confident)
const AdMofu3 = ({ format }: { format: 'square' | 'story' }) => (
    <div className="w-full h-full bg-slate-100 flex flex-col items-center relative overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0">
            <Image
                src="/images/ads/confident_artisan.png"
                layout="fill"
                objectFit="cover"
                alt="Confident Artisan"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="absolute bottom-24 bg-white/10 backdrop-blur-xl border border-white/20 p-12 mx-12 rounded-3xl shadow-2xl max-w-4xl">
            <div className="flex gap-2 mb-8">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-10 h-10 text-yellow-400 fill-yellow-400 drop-shadow-md" />)}
            </div>
            <p className="text-5xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
                "C'est l'outil le plus rentable de ma boîte. Je ne perds plus un seul euro sur mes chantiers."
            </p>
            <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-slate-200 rounded-full border-2 border-white overflow-hidden shadow-lg">
                    {/* Tiny avatar crop from the big image or generic */}
                    <div className="w-full h-full bg-primary flex items-center justify-center text-3xl font-bold text-slate-900">M</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-white">Marc Dubois</div>
                    <div className="text-xl text-primary font-bold uppercase tracking-widest">Électricien (69)</div>
                </div>
            </div>
        </div>
    </div>
);

// 8. MOFU: Avant / Après (Split Image) with Blur Overlay
const AdMofu4 = ({ format }: { format: 'square' | 'story' }) => (
    <div className="w-full h-full bg-slate-50 flex flex-col justify-center items-center">
        <div className="w-full flex-1 flex relative">
            {/* Left: Stress (Filters) */}
            <div className="w-1/2 relative overflow-hidden border-r-4 border-white">
                <Image
                    src="/images/ads/messy_desk.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Stress"
                    className="grayscale contrast-125 blur-sm scale-110"
                />
                <div className="absolute inset-0 bg-red-900/60 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-8">
                    <div className="text-[120px] mb-4 drop-shadow-2xl">😫</div>
                    <h3 className="text-6xl font-black text-white text-center mb-8 uppercase drop-shadow-lg">Le Stress</h3>
                    <ul className="text-4xl text-white/90 space-y-6 list-none font-bold">
                        <li>Notes perdues</li>
                        <li>Conflits clients</li>
                    </ul>
                </div>
            </div>

            {/* Right: Zen */}
            <div className="w-1/2 relative overflow-hidden">
                <Image
                    src="/images/ads/confident_artisan.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Zen"
                    className="contrast-110 blur-sm scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-8">
                    <div className="text-[120px] mb-4 drop-shadow-2xl">😎</div>
                    <h3 className="text-6xl font-black text-white text-center mb-8 uppercase drop-shadow-lg">La Sérénité</h3>
                    <ul className="text-4xl text-white/90 space-y-6 list-none font-bold">
                        <li>Tout est noté</li>
                        <li>Signé & Payé</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 bg-slate-900 text-white px-16 py-8 rounded-full text-5xl font-bold shadow-2xl border-4 border-white z-30 whitespace-nowrap">
            Passez du côté Zen 🧘‍♂️
        </div>
    </div>
);


/* --- BOFU --- */

// 9. BOFU: Offre 14 Jours (REDESIGN)
const AdBofu1 = ({ format }: { format: 'square' | 'story' }) => (
    <div className="w-full h-full bg-slate-900 p-16 flex flex-col justify-center items-center relative overflow-hidden">
        {/* Gold/Premium Accent Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary via-yellow-600 to-transparent rounded-full opacity-20 blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-primary via-yellow-600 to-transparent rounded-full opacity-10 blur-[150px] translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative z-10 w-full max-w-4xl text-center">
            <div className="inline-block border border-primary/50 rounded-full px-8 py-3 mb-12">
                <span className="text-primary text-2xl font-bold uppercase tracking-[0.3em]">Offre Limitée</span>
            </div>

            <h2 className="text-[8rem] font-bold text-white leading-tight mb-8">
                Essayez <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Gratuitement.</span>
            </h2>

            <div className="flex flex-col items-center gap-8 mb-16">
                <div className="flex items-center gap-4 text-4xl text-white">
                    <Check className="w-12 h-12 text-primary" />
                    <span>Pendant 14 Jours</span>
                </div>
                <div className="flex items-center gap-4 text-4xl text-white">
                    <Check className="w-12 h-12 text-primary" />
                    <span>Zero engagement</span>
                </div>
                <div className="flex items-center gap-4 text-4xl text-white">
                    <Check className="w-12 h-12 text-primary" />
                    <span>Pas de Carte Bancaire</span>
                </div>
            </div>

            <div className="bg-primary text-slate-900 w-full py-8 rounded-2xl text-5xl font-bold shadow-2xl shadow-primary/20">
                Commencer (0€)
            </div>

            <p className="mt-8 text-slate-500 text-xl font-mono">
                Offre soumise à conditions. Approuvé par +200 artisans.
            </p>
        </div>
    </div>
);

// 10. BOFU: Rentabilité
const AdBofu2 = ({ format }: { format: 'square' | 'story' }) => (
    <div className="w-full h-full bg-slate-900 text-white flex flex-col items-center justify-center p-16 text-center">
        {/* Background Image subtle */}
        <div className="absolute inset-0 opacity-10">
            <Image
                src="/images/ads/site_background.png"
                layout="fill"
                objectFit="cover"
                alt="Background"
            />
        </div>

        <h2 className="text-7xl font-bold mb-32 uppercase tracking-widest text-primary relative z-10">Rentabilité</h2>

        <div className="flex items-center gap-12 mb-32 scale-125 relative z-10">
            <div className="flex flex-col items-center group">
                <div className="bg-slate-800 w-56 h-56 rounded-[3rem] flex items-center justify-center text-8xl shadow-xl border-4 border-slate-700">📄</div>
                <div className="mt-8 text-4xl font-bold">1 Avenant<br />Signé</div>
            </div>

            <div className="text-9xl font-black text-slate-700">=</div>

            <div className="flex flex-col items-center group">
                <div className="bg-primary w-56 h-56 rounded-full flex items-center justify-center text-9xl shadow-[0_0_80px_rgba(255,200,0,0.5)] text-slate-900 font-black">2</div>
                <div className="mt-8 text-4xl font-bold text-primary">Ans<br />d'abonnement</div>
            </div>
        </div>

        <p className="text-5xl text-slate-300 max-w-5xl leading-relaxed relative z-10 drop-shadow-md">
            L'application est rentabilisée dès le <span className="text-white font-bold decoration-primary underline decoration-4 underline-offset-8">premier chantier</span>.
        </p>
    </div>
);


// Gallery Component
export default function AdsGenerator() {
    const [scale, setScale] = useState(0.5);

    const concepts = [
        { title: 'TOFU 1: Perte Financière', component: AdTofu1 },
        { title: 'TOFU 2: SMS = Danger', component: AdTofu2 },
        { title: 'TOFU 3: Artisan Bénévole', component: AdTofu3 },
        { title: 'TOFU 4: Chaos vs Ordre', component: AdTofu4 },
        { title: 'MOFU 1: 30 Secondes', component: AdMofu1 },
        { title: 'MOFU 2: Bouclier Juridique', component: AdMofu2 },
        { title: 'MOFU 3: Preuve Sociale (Photo)', component: AdMofu3 },
        { title: 'MOFU 4: Avant / Après (Photo)', component: AdMofu4 },
        { title: 'BOFU 1: Offre 14 Jours', component: AdBofu1 },
        { title: 'BOFU 2: Rentabilité', component: AdBofu2 },
    ];

    return (
        <div className="min-h-screen bg-slate-100 p-8">
            <div className="fixed top-0 left-0 w-full bg-white border-b border-slate-200 z-50 px-8 py-4 flex items-center justify-between shadow-sm">
                <h1 className="text-xl font-bold text-slate-900">Moteur Pubs Meta ({concepts.length})</h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-slate-500">Zoom: {Math.round(scale * 100)}%</span>
                    <input
                        type="range" min="0.1" max="1" step="0.1"
                        value={scale} onChange={(e) => setScale(parseFloat(e.target.value))}
                        className="w-32"
                    />
                    <button onClick={() => setScale(0.2)} className="px-3 py-1 bg-slate-100 rounded hover:bg-slate-200 text-sm">20%</button>
                    <button onClick={() => setScale(0.5)} className="px-3 py-1 bg-slate-100 rounded hover:bg-slate-200 text-sm">50%</button>
                    <button onClick={() => setScale(1)} className="px-3 py-1 bg-slate-900 text-white rounded hover:bg-slate-800 text-sm font-bold">100% (Export)</button>
                </div>
            </div>

            <div className="mt-20">
                {concepts.map((concept, idx) => (
                    <div key={idx} className="mb-24 border-b border-slate-200 pb-12">
                        <div className="bg-slate-900 text-white py-4 px-8 rounded-xl mb-12 inline-block shadow-lg">
                            <h2 className="text-2xl font-bold">{concept.title}</h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-12 pb-24">
                            {/* Square */}
                            <AdContainer format="square" title="Feed (1:1)" scale={scale}>
                                <concept.component format="square" />
                            </AdContainer>

                            {/* Story */}
                            <AdContainer format="story" title="Story (9:16)" scale={scale}>
                                <div className="w-full h-full flex flex-col justify-center bg-black">
                                    <concept.component format="story" />
                                </div>
                            </AdContainer>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
