import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CGU() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="font-display font-bold text-4xl text-slate-900 mb-12">Conditions Générales d'Utilisation et de Vente (CGU/CGV)</h1>

                <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600">
                    <h3>1. Objet</h3>
                    <p>
                        Les présentes conditions générales ont pour objet de définir les modalités de mise à disposition des services de l'application SecureAvenant...
                    </p>

                    <h3>2. Prix et paiement</h3>
                    <p>
                        [Détails sur l'abonnement, le prix de 9€/mois, les modalités de paiement...]
                    </p>

                    <h3>3. Accès au service</h3>
                    <p>
                        [Détails sur l'accès, la disponibilité, la maintenance...]
                    </p>

                    <h3>4. Responsabilité</h3>
                    <p>
                        [Limitations de responsabilité...]
                    </p>

                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 text-amber-900 mt-12 text-base">
                        <strong>Note pour l'utilisateur :</strong> Insérez ici l'ensemble de vos conditions générales. Vous pouvez copier-coller votre texte existant à la place de ces paragraphes.
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
