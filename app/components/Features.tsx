import { ShieldCheck, Zap, WifiOff, Users, Gavel, Clock } from "lucide-react";
import Image from "next/image";

export default function Features() {

    const features = [
        {
            icon: ShieldCheck,
            title: "Protection Juridique",
            desc: "Modèles d'avenants 100% conformes au Code civil et aux marchés publics. Vous êtes couvert en cas de litige.",
            className: "lg:col-span-2 bg-slate-900 text-white",
            iconBg: "bg-slate-800",
            iconColor: "text-primary"
        },
        {
            icon: Zap,
            title: "Vitesse Éclair",
            desc: "Conçu pour être utilisé avec des gants, sur un échafaudage. Moins de clics, plus de briques.",
            className: "lg:col-span-1 bg-white",
            iconBg: "bg-amber-50",
            iconColor: "text-amber-500"
        },
        {
            icon: WifiOff,
            title: "100% Hors-Ligne",
            desc: "Fonctionne parfaitement au 3ème sous-sol sans réseau. Synchronisation auto dès le retour du signal.",
            className: "lg:col-span-1 bg-white",
            iconBg: "bg-slate-50",
            iconColor: "text-slate-500"
        },
        {
            icon: Users,
            title: "Image Pro",
            desc: "Montrez à votre client que vous êtes carré. Fini le bout de papier griffonné sur un coin de table. Vos devis inspirent confiance.",
            className: "lg:col-span-2 bg-white",
            iconBg: "bg-blue-50",
            iconColor: "text-blue-500"
        },
        {
            icon: Gavel,
            title: "Preuve Irréfutable",
            desc: "Signature électronique horodatée et géolocalisée. Aucune contestation possible.",
            className: "lg:col-span-1 bg-white",
            iconBg: "bg-red-50",
            iconColor: "text-red-500"
        },
        {
            icon: Clock,
            title: "Historique Complet",
            desc: "Retrouvez tous vos avenants classés par chantier. L'administration simplifiée pour ne plus rien perdre.",
            className: "lg:col-span-2 bg-white",
            iconBg: "bg-emerald-50",
            iconColor: "text-emerald-500"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold mb-4 text-slate-900">Pourquoi les artisans choisissent SecureAvenant ?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">L'outil pensé par des artisans, pour des artisans.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 lg:order-1 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 group">
                        <Image
                            src="/artisan-clients.png"
                            alt="Artisan signant avec des clients heureux"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6 text-white" />
                                </div>
                                <span className="font-bold text-lg">Confiance rétablie</span>
                            </div>
                            <p className="text-xl md:text-2xl font-serif italic max-w-lg leading-relaxed">
                                "En étant transparent sur les prix et les avenants, j'ai gagné la confiance de mes clients. Ils signent les yeux fermés."
                            </p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-primary text-slate-900 flex items-center justify-center text-lg">1</span>
                                    Fini les conflits
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Plus de "je ne savais pas que ce serait payant". Tout est écrit, tout est signé. Vous protégez votre relation client autant que votre marge.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-slate-800 text-white flex items-center justify-center text-lg">2</span>
                                    Image Professionnelle
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Montrez que vous êtes carré. Utiliser SecureAvenant prouve votre sérieux et rassure vos clients sur votre gestion de chantier.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16 mt-24">
                    <h2 className="font-display text-3xl font-bold mb-4 text-slate-900">Tout ce dont vous avez besoin</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className={`p-8 rounded-3xl border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl duration-300 bg-white`}
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.iconBg}`}>
                                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                            <p className="leading-relaxed text-sm text-slate-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
