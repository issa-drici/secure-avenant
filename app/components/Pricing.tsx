import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-md mx-auto relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-400 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-2xl">
                        {/* Badge */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                            Recommandé
                        </div>

                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Offre de Lancement</h2>
                            <p className="text-slate-500 mb-8 font-medium">Rentabilisé au premier usage.</p>
                            <div className="flex items-baseline justify-center gap-2">
                                <span className="text-6xl font-display font-bold text-slate-900">9€</span>
                                <span className="text-slate-500 font-medium">/ mois</span>
                            </div>
                            <p className="text-xs text-slate-400 mt-3 bg-slate-50 inline-block px-3 py-1 rounded-full">Soit le prix d'un paquet de vis</p>
                        </div>

                        <ul className="space-y-5 mb-10">
                            {["Avenants illimités", "Signature électronique légale", "Envoi PDF automatique", "Historique complet", "Support prioritaire"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <Check className="w-3.5 h-3.5 text-green-700" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/inscription?source=pricing_card"
                            className="block w-full py-4 text-center bg-primary hover:bg-yellow-400 text-slate-900 font-bold text-lg rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                        >
                            Commencer l'essai gratuit
                        </Link>
                        <p className="text-center text-xs text-slate-400 mt-5 font-medium">Sans engagement. Annulez quand vous voulez.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
