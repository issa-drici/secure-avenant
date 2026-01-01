import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BottomCTA() {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-white max-w-4xl mx-auto leading-tight">
                    Arrêtez de perdre de l'argent sur vos chantiers dès aujourd'hui.
                </h2>
                <div className="flex flex-col items-center gap-4">
                    <Link href="/inscription?source=bottom_cta" className="bg-primary text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20 flex items-center gap-2">
                        Commencer l'essai gratuit
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <p className="text-slate-400 text-sm">
                        14 jours offerts • Sans engagement • Pas de carte requise
                    </p>
                </div>
            </div>
        </section>
    );
}
