import { Smartphone, FileSignature, Send, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
    {
        icon: Smartphone,
        title: "1. Sélectionnez",
        desc: "Choisissez le client dans votre liste."
    },
    {
        icon: FileSignature,
        title: "2. Ajoutez",
        desc: "Dictez ou tapez : 'Pose prise supp.' - 150€."
    },
    {
        icon: Send,
        title: "3. Signez",
        desc: "Le client signe sur l'écran. PDF envoyé."
    }
];

export default function Solution() {
    return (
        <section id="solution" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Text Side (Left) */}
                    <div className="w-full lg:w-1/2 text-left">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
                            Sécurisez vos avenants en <span className="text-primary relative px-2 inline-block">30 secondes<span className="absolute inset-0 bg-primary/20 -skew-x-12 -z-10 rounded-sm"></span></span>
                        </h2>
                        <p className="text-lg text-slate-600 font-light mb-12 leading-relaxed">
                            Plus besoin d'ordinateur. Plus besoin de Word. Tout se passe sur votre téléphone, directement sur le chantier.
                        </p>

                        <div className="space-y-8 mb-10">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h3>
                                        <p className="text-slate-500">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/inscription?source=solution_section"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Créer mon compte
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Visual Side (Right) */}
                    <div className="w-full lg:w-1/2 relative h-[600px] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl">
                        {/* Background Image */}
                        <Image
                            src="/solution-bg.png"
                            alt="Bureau d'architecte moderne"
                            fill
                            className="object-cover opacity-90 blur-sm hover:scale-105 transition-transform duration-700"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>

                        {/* Floating Cards Container - Centered */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="relative w-full max-w-md h-96">
                                {/* Step 1: Select (Top Left) */}
                                <div className="absolute top-0 left-4 bg-white p-4 w-48 rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] border border-slate-100 transform -rotate-6 z-10 animate-float-delayed">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">1</div>
                                        <div className="text-xs font-bold text-slate-500 uppercase">Client</div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 bg-blue-50/50 rounded-lg border border-blue-100">
                                        <div className="w-8 h-8 rounded-full bg-blue-200"></div>
                                        <div className="text-sm font-bold text-slate-800">Mr. Dupont</div>
                                    </div>
                                </div>

                                {/* Step 2: Add (Top Right) */}
                                <div className="absolute top-12 right-4 bg-white p-4 w-52 rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] border border-slate-100 transform rotate-3 z-20 animate-float-slow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">2</div>
                                        <div className="text-xs font-bold text-slate-500 uppercase">Ajout</div>
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 mb-2">
                                        <div className="text-xs text-slate-400 mb-1">Description</div>
                                        <div className="text-sm font-bold text-slate-800">Prise Cuisine</div>
                                    </div>
                                    <div className="flex justify-end font-bold text-slate-900">150 €</div>
                                </div>

                                {/* Step 3: Sign (Bottom Center) */}
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white p-6 w-56 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-slate-100 transform rotate-0 z-30">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">3</div>
                                        <div className="text-xs font-bold text-slate-500 uppercase">Validation</div>
                                    </div>
                                    <div className="w-full h-16 bg-slate-50 rounded border border-dashed border-slate-300 flex items-center justify-center text-slate-400 mb-2">
                                        <span className="font-handwriting text-2xl text-slate-800 -rotate-2">Lu et approuvé</span>
                                    </div>
                                    <button className="w-full py-2 bg-slate-900 text-white text-xs font-bold rounded-lg mt-2 shadow-lg">Envoyer PDF</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
