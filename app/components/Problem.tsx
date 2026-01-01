import { AlertTriangle, PhoneOff, XCircle } from "lucide-react";
import Image from "next/image";

export default function Problem() {
    return (
        <section id="problem" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    {/* Visual Side */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/5] md:aspect-square relative group rounded-3xl overflow-hidden shadow-2xl transform rotate-[-1deg] hover:rotate-0 transition-all duration-500">
                            <Image
                                src="/problem-refused-invoice.jpg"
                                alt="Devis travaux refusé sur un bureau de chantier"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold mb-8">
                            <AlertTriangle className="w-4 h-4" />
                            Le piège des travaux oraux
                        </div>

                        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight text-slate-900">
                            Combien de milliers d'euros <span className="text-red-600 relative inline-block">perdez-vous<svg className="absolute w-full h-3 -bottom-1 left-0 text-red-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" /></svg></span> chaque année ?
                        </h2>

                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            La loi est claire : <strong className="text-slate-900 font-semibold">sans écrit, pas de paiement.</strong>
                        </p>

                        <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
                            Vous voulez rendre service. Le client vous demande un "petit truc en plus". Vous le faites.
                            Au moment de la facture, ils ont oublié. Ou pire, ils sont de mauvaise foi.
                            <br /><br />
                            Résultat ? Vous avez travaillé gratuitement. Et retourner au bureau pour faire un avenant pour 150€ ? Trop long.
                        </p>

                        <div className="p-8 bg-white border-l-4 border-red-500 shadow-sm rounded-r-xl">
                            <p className="text-slate-800 italic font-medium text-lg">
                                "80% des artisans du bâtiment perdent entre 2 000€ et 10 000€ de marge nette par an à cause de travaux non signés."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
