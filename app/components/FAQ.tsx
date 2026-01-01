'use client'

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Est-ce que la signature a une valeur juridique ?",
        answer: "Absolument. SecureAvenant utilise une signature électronique conforme aux normes européennes eIDAS. Elle a la même valeur juridique qu'une signature manuscrite et constitue une preuve irréfutable en cas de litige."
    },
    {
        question: "Ça marche si je n'ai pas de réseau sur le chantier ?",
        answer: "Oui ! L'application est 'Offline-first'. Vous pouvez créer, éditer et faire signer vos avenants même au 3ème sous-sol. Tout se synchronise automatiquement dès que vous retrouvez du réseau."
    },
    {
        question: "Est-ce que c'est compliqué à utiliser ?",
        answer: "Non, c'est l'inverse. On a supprimé tout le superflu. Gros boutons, textes clairs. Si vous savez envoyer un SMS, vous savez utiliser SecureAvenant."
    },
    {
        question: "Puis-je l'utiliser sur plusieurs téléphones ?",
        answer: "Oui, votre compte est accessible depuis n'importe quel appareil (Smartphone, Tablette, Ordinateur). Vos données sont synchronisées partout en temps réel."
    },
    {
        question: "Comment je récupère les avenants signés ?",
        answer: "Dès la signature, un PDF est généré. Vous le recevez par email instantanément, ainsi que votre client. Il est aussi stocké à vie dans votre espace sécurisé."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold mb-4 text-slate-900">Questions Fréquentes</h2>
                    <p className="text-slate-600">Tout ce que vous devez savoir avant de commencer.</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 hover:border-slate-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                            >
                                <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                                {openIndex === idx ? (
                                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
