'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, Check, ArrowRight, Loader2 } from 'lucide-react';

function RegisterForm() {
    const searchParams = useSearchParams();
    const source = searchParams.get('source') || 'direct';
    const [step, setStep] = useState<'identity' | 'company' | 'success'>('identity');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Form State
    const [formData, setFormData] = useState({
        firstname: '', lastname: '', email: '', phone: '',
        company: '', size: '', job: '', customJob: '', pain: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newValue = e.target.value;
        const fieldId = e.target.id;
        
        // Si on change le métier, vérifier si la valeur de "pain" est toujours valide
        if (fieldId === 'job') {
            const currentPain = formData.pain;
            
            // Les valeurs toujours valides pour "pain" sont : "unknown", "critical", et toutes les bornes numériques
            const validPainValues = ['unknown', 'critical', '<2000', '<3000', '<5000', '2000-10000', '3000-12000', '5000-20000', '+10000', '+12000', '+20000'];
            
            // Si la valeur actuelle de pain est valide, on la garde, sinon on la réinitialise
            const updatedPain = validPainValues.includes(currentPain) ? currentPain : '';
            
            setFormData({ 
                ...formData, 
                [fieldId]: newValue,
                pain: updatedPain
            });
        } else {
            setFormData({ ...formData, [fieldId]: newValue });
        }
        
        // Clear error when user types
        if (errors[fieldId]) {
            setErrors({ ...errors, [fieldId]: '' });
        }
    };

    const validatePhone = (phone: string) => {
        // Regex: 10 digits starting with 0 OR +33 followed by 9 digits
        const phoneRegex = /^(0[1-9]\d{8}|\+33[1-9]\d{8})$/;
        return phoneRegex.test(phone.replace(/\s/g, '')); // Remove spaces before checking
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation Step 1
        if (!validatePhone(formData.phone)) {
            setErrors({ ...errors, phone: 'Numéro invalide. Format attendu : 0612345678 ou +33612345678' });
            return;
        }

        setStep('company');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    source: source,
                    platform: 'facebook',
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Une erreur est survenue');
            }

            setStep('success');
        } catch (err) {
            setErrors({ ...errors, submit: err instanceof Error ? err.message : 'Une erreur est survenue' });
        } finally {
            setIsLoading(false);
        }
    };

    if (step === 'success') {
        return (
            <div className="text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Compte créé avec succès !</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-left mb-8 shadow-sm">
                    <p className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                        ⚠️ Validation en cours
                    </p>
                    <p className="text-slate-700 leading-relaxed text-sm">
                        En raison d'une forte demande, nous activons les comptes manuellement.
                    </p>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    Votre dossier est bien enregistré. Un spécialiste SecureAvenant va vérifier vos informations et vous contactera <strong>très prochainement</strong> pour valider votre éligibilité.
                </p>
                <Link href="/" className="inline-block px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors">
                    Retour à l'accueil
                </Link>
            </div>
        );
    }

    return (
        <>
            <h1 className="font-display text-3xl font-bold text-slate-900 mb-2">Créez votre compte</h1>
            <p className="text-slate-500 mb-8">Essayez gratuitement pendant 14 jours.</p>

            <form onSubmit={step === 'identity' ? handleNext : handleSubmit} className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                <input type="hidden" name="source" value={source} />

                {/* Step Indicator */}
                <div className="flex items-center gap-2 mb-8">
                    <div className={`h-2 flex-1 rounded-full ${step === 'identity' ? 'bg-primary' : 'bg-green-500'}`}></div>
                    <div className={`h-2 flex-1 rounded-full ${step === 'company' ? 'bg-primary' : 'bg-slate-100'}`}></div>
                </div>

                {step === 'identity' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="firstname" className="text-sm font-medium text-slate-700">Prénom</label>
                                <input
                                    type="text" id="firstname" required
                                    value={formData.firstname} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Jean"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastname" className="text-sm font-medium text-slate-700">Nom</label>
                                <input
                                    type="text" id="lastname" required
                                    value={formData.lastname} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Dupont"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-700">Email professionnel</label>
                            <input
                                type="email" id="email" required
                                value={formData.email} onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="jean.dupont@entreprise.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-slate-700">Téléphone mobile</label>
                            <input
                                type="tel" id="phone" required
                                value={formData.phone} onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                                placeholder="06 12 34 56 78"
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-8"
                        >
                            Continuer
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                )}

                {step === 'company' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 col-span-2 md:col-span-1">
                                <label htmlFor="company" className="text-sm font-medium text-slate-700">Nom de la société</label>
                                <input
                                    type="text" id="company" required
                                    value={formData.company} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Dupont Rénovation"
                                />
                            </div>
                            <div className="space-y-2 col-span-2 md:col-span-1">
                                <label htmlFor="size" className="text-sm font-medium text-slate-700">Effectif</label>
                                <select
                                    id="size" required
                                    value={formData.size} onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                                >
                                    <option value="">Choisir...</option>
                                    <option value="1">1 (Indépendant)</option>
                                    <option value="2-5">2 à 5 salariés</option>
                                    <option value="6-10">6 à 10 salariés</option>
                                    <option value="10+">+10 salariés</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="job" className="text-sm font-medium text-slate-700">Métier Principal</label>
                            <select
                                id="job" required
                                value={formData.job} onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                            >
                                <option value="">Sélectionnez votre métier</option>
                                <option value="electricien">Électricien</option>
                                <option value="plombier">Plombier / Chauffagiste</option>
                                <option value="macon">Maçon</option>
                                <option value="menuisier">Menuisier</option>
                                <option value="peintre">Peintre</option>
                                <option value="tce">Entreprise Générale (TCE)</option>
                                <option value="autre">Autre</option>
                            </select>

                            {/* Conditional Custom Job Input */}
                            {formData.job === 'autre' && (
                                <div className="mt-2 animate-in fade-in slide-in-from-top-2">
                                    <label htmlFor="customJob" className="text-sm font-medium text-slate-700 sr-only">Précisez votre métier</label>
                                    <input
                                        type="text" id="customJob" required
                                        value={formData.customJob} onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Précisez votre métier..."
                                    />
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="pain" className="text-sm font-bold text-slate-900">Pertes annuelles estimées (non facturées)</label>
                            <select
                                id="pain" required
                                value={formData.pain} onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-amber-50/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            >
                                <option value="">Sélectionnez une estimation</option>
                                <option value="unknown">Je ne sais pas (mais je perds de l'argent)</option>
                                {(() => {
                                    const job = formData.job;
                                    let ranges = {
                                        small: { value: "<2000", label: "Moins de 2 000€ / an" },
                                        medium: { value: "2000-10000", label: "Entre 2 000€ et 10 000€ / an" },
                                        high: { value: "+10000", label: "Plus de 10 000€ / an" }
                                    };

                                    if (['tce', 'macon'].includes(job)) {
                                        ranges = {
                                            small: { value: "<5000", label: "Moins de 5 000€ / an" },
                                            medium: { value: "5000-20000", label: "Entre 5 000€ et 20 000€ / an" },
                                            high: { value: "+20000", label: "Plus de 20 000€ / an" }
                                        };
                                    } else if (['electricien', 'plombier'].includes(job)) {
                                        ranges = {
                                            small: { value: "<3000", label: "Moins de 3 000€ / an" },
                                            medium: { value: "3000-12000", label: "Entre 3 000€ et 12 000€ / an" },
                                            high: { value: "+12000", label: "Plus de 12 000€ / an" }
                                        };
                                    }

                                    return (
                                        <>
                                            <option value={ranges.small.value}>{ranges.small.label}</option>
                                            <option value={ranges.medium.value}>{ranges.medium.label}</option>
                                            <option value={ranges.high.value}>{ranges.high.label}</option>
                                        </>
                                    );
                                })()}
                                <option value="critical">C'est critique, j'ai besoin d'aide</option>
                            </select>
                        </div>

                        {errors.submit && (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
                                {errors.submit}
                            </div>
                        )}

                        <div className="flex gap-4 mt-8">
                            <button
                                type="button"
                                onClick={() => setStep('identity')}
                                className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all"
                            >
                                Retour
                            </button>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex-1 bg-primary hover:bg-yellow-400 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Création...
                                    </>
                                ) : (
                                    <>
                                        Valider mon inscription
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}

                <p className="text-center text-xs text-slate-500">
                    14 jours offerts • Sans engagement • Pas de CB requise
                </p>
            </form>
        </>
    );
}

export default function Inscription() {
    return (
        <main className="min-h-screen bg-slate-50 flex">
            {/* Left Side - Visual / Testimonials */}
            <div className="hidden lg:flex w-1/2 bg-slate-900 relative items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>

                <div className="relative z-10 max-w-lg text-white">
                    <div className="flex items-center gap-3 mb-12 opacity-80">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight">SecureAvenant</span>
                    </div>

                    <h2 className="font-display text-4xl font-bold mb-8 leading-tight">
                        Rejoignez les artisans qui se font payer <span className="text-primary">100% de leurs travaux</span>.
                    </h2>

                    <ul className="space-y-4 mb-16">
                        <li className="flex items-center gap-3 text-slate-300">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <Check className="w-4 h-4" />
                            </div>
                            Protégez votre marge instantanément
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <Check className="w-4 h-4" />
                            </div>
                            Signature légale et certifiée par l'Europe
                        </li>
                        <li className="flex items-center gap-3 text-slate-300">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <Check className="w-4 h-4" />
                            </div>
                            Support client disponible 7j/7
                        </li>
                    </ul>

                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                        <div className="flex gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-primary">★</span>)}
                        </div>
                        <p className="text-slate-300 italic mb-4">"L'outil le plus rentable de ma boîte. Je ne fais plus aucun cadeau involontaire à mes clients."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-400">M</div>
                            <div>
                                <div className="font-bold text-white text-sm">Marc Dubois</div>
                                <div className="text-xs text-slate-400">Électricien (69)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 py-12 sm:px-12 lg:px-24 bg-white relative">
                {/* Mobile Logo */}
                <div className="lg:hidden absolute top-8 left-8">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-display font-bold text-lg text-slate-900 tracking-tight">SecureAvenant</span>
                    </Link>
                </div>

                <div className="max-w-md mx-auto w-full">
                    {/* Header moved inside RegisterForm to handle conditional logic */}
                    <Suspense fallback={<div>Chargement...</div>}>
                        <RegisterForm />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}
