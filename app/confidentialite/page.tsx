import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Confidentialite() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="font-display font-bold text-4xl text-slate-900 mb-12">Politique de Confidentialité</h1>

                <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600">
                    <h3>1. Collecte des données</h3>
                    <p>
                        Nous collectons les informations suivantes pour le bon fonctionnement du service :<br />
                        - Données d'identification (Nom, Prénom, Email)<br />
                        - Données relatives aux chantiers et clients
                    </p>

                    <h3>2. Utilisation des données</h3>
                    <p>
                        [Expliquer comment les données sont utilisées : génération des PDF, facturation, support...]
                    </p>

                    <h3>3. Sécurité</h3>
                    <p>
                        [Expliquer les mesures de sécurité mises en place...]
                    </p>

                    <h3>4. Vos droits</h3>
                    <p>
                        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données...
                    </p>

                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 text-amber-900 mt-12 text-base">
                        <strong>Note pour l'utilisateur :</strong> Détaillez ici votre politique de protection des données personnelles (RGPD).
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
