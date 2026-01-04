import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MentionsLegales() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="font-display font-bold text-4xl text-slate-900 mb-12">Mentions Légales</h1>

                <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Éditeur du site</h2>
                        <p>
                            Le site <strong>secure-avenant.com</strong> est édité par :
                        </p>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-4">
                            <p className="mb-2">
                                <strong>Issa DRICI</strong><br />
                                Auto-entrepreneur (Entrepreneur Individuel)
                            </p>
                            <p className="mb-2">
                                <strong>Siège social :</strong><br />
                                3 rue des Soeurs Franciscaines<br />
                                76620 Le Havre, France
                            </p>
                            <p className="mb-2">
                                <strong>Numéro SIREN :</strong> 848 494 316<br />
                                <strong>Numéro SIRET :</strong> 848 494 316 00039<br />
                                <strong>RCS :</strong> 848 494 316 R.C.S. Le Havre<br />
                                <strong>Numéro TVA intracommunautaire :</strong> FR36848494316
                            </p>
                            <p className="mb-2">
                                <strong>Représentant légal / Directeur de publication :</strong> Issa DRICI
                            </p>
                            <p>
                                <strong>Email de contact :</strong> <a href="mailto:issadricipro@gmail.com" className="text-primary hover:underline">issadricipro@gmail.com</a>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Hébergement</h2>
                        <p>
                            Le site est hébergé par :
                        </p>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-4">
                            <p>
                                <strong>Hostinger</strong><br />
                                Hébergeur de sites web
                            </p>
                            <p className="text-sm text-slate-500 mt-2">
                                Pour toute information concernant l'hébergement, veuillez consulter le site officiel de Hostinger.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Propriété intellectuelle</h2>
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p>
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse de l'éditeur.
                        </p>
                        <p>
                            Les marques et logos figurant sur le site sont des marques déposées par leurs titulaires respectifs. Leur reproduction ou leur utilisation, sans autorisation préalable de leur titulaire, est interdite et constitue une contrefaçon passible de sanctions pénales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Responsabilité</h2>
                        <p>
                            L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site, dont il se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                        </p>
                        <p>
                            Toutefois, l'éditeur ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site. En conséquence, l'éditeur décline toute responsabilité :
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site ;</li>
                            <li>pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site ;</li>
                            <li>pour tout dommage, direct ou indirect, quelle qu'en soit la cause, l'origine, la nature ou les conséquences, provoqué à raison de l'accès de quiconque au site ou de l'impossibilité d'y accéder, de même que l'utilisation du site et/ou du crédit accordé à une quelconque information provenant directement ou indirectement de ce dernier.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Liens hypertextes</h2>
                        <p>
                            Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site secure-avenant.com.
                        </p>
                        <p>
                            Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de l'éditeur. Aucune autorisation ni demande d'information préalable ne peut être exigée par l'éditeur à l'égard d'un site qui souhaite établir un lien vers le site de l'éditeur. Il convient toutefois d'afficher ce site dans une nouvelle fenêtre du navigateur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Droit applicable</h2>
                        <p>
                            Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Contact</h2>
                        <p>
                            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante :
                        </p>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-4">
                            <p>
                                <strong>Email :</strong> <a href="mailto:issadricipro@gmail.com" className="text-primary hover:underline">issadricipro@gmail.com</a>
                            </p>
                    </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
