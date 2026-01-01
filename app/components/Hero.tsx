import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white/0">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Nouveau: L'application anti-impayés du BTP
                    </div>

                    <h1 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-[1.1] text-slate-900">
                        Ne travaillez plus jamais <span className="relative whitespace-nowrap"><span className="absolute bg-primary/20 -left-1 -right-1 bottom-2 h-4 -z-10 rotate-1"></span>gratuitement</span>.
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Faites signer vos travaux supplémentaires sur le chantier, en 30 secondes chrono sur votre mobile.
                        <span className="block mt-4 font-semibold text-slate-800">100% Juridique. 0% Prise de tête.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="/inscription?source=hero"
                            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-yellow-400 text-slate-900 font-bold text-lg rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                        >
                            Commencer l'essai gratuit
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#solution"
                            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-medium text-lg rounded-xl transition-all border border-slate-200 shadow-sm hover:shadow-md"
                        >
                            Comment ça marche ?
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-medium text-slate-600">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span>Conforme Code Civil</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span>Signature Électronique</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span>Mode Hors-ligne</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Abstract Asset: Signature Success Card */}
            <div className="absolute top-2/3 right-[5%] -translate-y-1/2 hidden lg:block pointer-events-none select-none z-10 opacity-90">
                <div className="bg-white p-4 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-64 rotate-6 animate-float-slow">
                    <div className="flex items-center justify-between mb-4 border-b border-slate-50 pb-2">
                        <div className="w-20 h-2 bg-slate-100 rounded-full"></div>
                        <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="space-y-2 mb-4">
                        <div className="w-full h-2 bg-slate-50 rounded-full"></div>
                        <div className="w-3/4 h-2 bg-slate-50 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                        <div className="font-handwriting text-slate-400 text-lg">Signature...</div>
                    </div>
                </div>
            </div>

            {/* Abstract Asset: New Work Item */}
            <div className="absolute top-2/3 left-[5%] hidden lg:block pointer-events-none select-none z-10 opacity-80">
                <div className="bg-white p-4 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 w-56 -rotate-12 animate-float-delayed">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">+</div>
                        <div className="font-bold text-slate-800 text-sm">Ajout Travaux</div>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 px-3 py-2 rounded-lg">
                        <span className="text-xs text-slate-400">Montant</span>
                        <span className="font-bold text-slate-900">150,00 €</span>
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {/* Generated Image Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-bg-v3.png"
                        alt="Modern renovation background"
                        fill
                        className="object-cover opacity-100 mix-blend-overlay shadow-inner"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white/95"></div>
                </div>

                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] z-10"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] z-10"></div>
                <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-slate-100 rounded-full blur-[80px] z-10"></div>
            </div>
        </section>
    );
}
