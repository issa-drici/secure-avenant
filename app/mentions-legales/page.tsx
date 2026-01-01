import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MentionsLegales() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="font-display font-bold text-4xl text-slate-900 mb-12">Mentions Légales</h1>

                <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600">
                    <h3>1. Éditeur du site</h3>
                    <p>
                        Le site SecureAvenant est édité par :<br />
                        [Nom de la Société / Nom Prénom]<br />
                        [Forme Juridique]<br />
                        [Adresse du siège social]<br />
                        [SIRET]<br />
                        [Email de contact]
                    </p>

                    <h3>2. Hébergement</h3>
                    <p>
                        Le site est hébergé par :<br />
                        [Nom de l'hébergeur]<br />
                        [Adresse de l'hébergeur]
                    </p>

                    <h3>3. Propriété intellectuelle</h3>
                    <p>
                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
                    </p>

                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 text-amber-900 mt-12 text-base">
                        <strong>Note pour l'utilisateur :</strong> Remplissez les informations entre crochets ci-dessus avec vos propres données légales.
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
