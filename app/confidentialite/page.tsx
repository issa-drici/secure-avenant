import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Confidentialite() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="font-display font-bold text-4xl text-slate-900 mb-12">Politique de Confidentialité</h1>
                <p className="text-slate-600 mb-8">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Responsable du traitement</h2>
                        <p>
                            Le responsable du traitement des données personnelles est :
                        </p>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-4">
                            <p className="mb-2">
                                <strong>Issa DRICI</strong><br />
                                Auto-entrepreneur<br />
                                3 rue des Soeurs Franciscaines<br />
                                76620 Le Havre, France
                            </p>
                            <p>
                                <strong>Email :</strong> <a href="mailto:issadricipro@gmail.com" className="text-primary hover:underline">issadricipro@gmail.com</a>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Données collectées</h2>
                        <p>
                            Dans le cadre de l'utilisation de notre service SecureAvenant, nous collectons les données personnelles suivantes :
                        </p>
                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.1. Données d'identification</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Nom et prénom</li>
                            <li>Adresse email</li>
                            <li>Numéro de téléphone</li>
                            <li>Nom de la société</li>
                            <li>Effectif de l'entreprise</li>
                            <li>Métier principal</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.2. Données relatives à l'utilisation du service</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Données relatives aux clients et chantiers</li>
                            <li>Données relatives aux avenants créés et signés</li>
                            <li>Historique des transactions</li>
                            <li>Données de connexion (adresse IP, logs)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.3. Données de paiement</h3>
                        <p>
                            Les données de paiement (carte bancaire) sont traitées exclusivement par notre prestataire de paiement sécurisé. Nous ne stockons pas les informations de carte bancaire sur nos serveurs.
                        </p>

                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.4. Données relatives aux clients finaux</h3>
                        <p>
                            Dans le cadre de l'utilisation du service, vous pouvez être amené à saisir des données concernant vos propres clients (nom, adresse, coordonnées, etc.) pour la création des avenants. Ces données sont stockées dans votre espace personnel et ne sont utilisées que pour la génération des documents que vous créez.
                        </p>
                        <p>
                            En tant qu'utilisateur du service, vous êtes responsable du traitement de ces données concernant vos clients et devez vous assurer d'avoir obtenu leur consentement ou d'avoir une base légale pour leur traitement, conformément au RGPD.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Base légale et finalités du traitement</h2>
                        <p>
                            Le traitement de vos données personnelles est fondé sur l'exécution du contrat de service que vous avez souscrit avec nous.
                        </p>
                        <p>
                            Vos données personnelles sont collectées et traitées aux fins suivantes :
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Exécution du service :</strong> Création et gestion de votre compte, génération des avenants, signature électronique, envoi des PDF</li>
                            <li><strong>Facturation :</strong> Gestion de l'abonnement, facturation mensuelle, suivi des paiements</li>
                            <li><strong>Support client :</strong> Réponse à vos demandes, assistance technique</li>
                            <li><strong>Amélioration du service :</strong> Analyse statistique anonymisée, amélioration des fonctionnalités</li>
                            <li><strong>Obligations légales :</strong> Conservation des documents comptables et factures conformément à la législation en vigueur</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Destinataires des données</h2>
                        <p>
                            Vos données personnelles sont destinées à Issa DRICI en qualité de responsable du traitement.
                        </p>
                        <p>
                            Nous pouvons être amenés à transmettre vos données à nos sous-traitants suivants :
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Airtable :</strong> Base de données CRM pour la gestion des inscriptions et des contacts (États-Unis - conforme au Privacy Shield)</li>
                            <li><strong>Hostinger :</strong> Hébergement du site web et des données</li>
                            <li><strong>Prestataire de paiement :</strong> Traitement sécurisé des paiements par carte bancaire</li>
                        </ul>
                        <p>
                            Ces sous-traitants sont tenus de respecter la confidentialité de vos données et ne peuvent les utiliser que dans le cadre strict de la prestation pour laquelle ils interviennent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Durée de conservation</h2>
                        <p>
                            Vos données personnelles sont conservées pour les durées suivantes :
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Données de compte actif :</strong> Pendant toute la durée de votre abonnement et jusqu'à 3 ans après la résiliation</li>
                            <li><strong>Données comptables et factures :</strong> 10 ans conformément aux obligations légales</li>
                            <li><strong>Données de navigation (cookies) :</strong> 13 mois maximum</li>
                            <li><strong>Données d'inscription non finalisées :</strong> 1 an maximum</li>
                        </ul>
                        <p>
                            Au-delà de ces durées, vos données sont supprimées ou anonymisées de manière irréversible.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Sécurité des données</h2>
                        <p>
                            Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité et la confidentialité de vos données personnelles, notamment :
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Chiffrement des données en transit (HTTPS/SSL)</li>
                            <li>Authentification sécurisée des utilisateurs</li>
                            <li>Sauvegardes régulières des données</li>
                            <li>Accès restreint aux données personnelles aux seules personnes autorisées</li>
                            <li>Surveillance et détection des incidents de sécurité</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Vos droits</h2>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Droit d'accès :</strong> Vous pouvez obtenir une copie de vos données personnelles</li>
                            <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de vos données inexactes ou incomplètes</li>
                            <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données dans certains cas</li>
                            <li><strong>Droit à la limitation du traitement :</strong> Vous pouvez demander la limitation du traitement de vos données</li>
                            <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données pour des motifs légitimes</li>
                            <li><strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données dans un format structuré</li>
                            <li><strong>Droit de définir des directives post-mortem :</strong> Vous pouvez définir des directives concernant le sort de vos données après votre décès</li>
                        </ul>
                        <p className="mt-4">
                            Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante :
                        </p>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-4">
                            <p>
                                <strong>Email :</strong> <a href="mailto:issadricipro@gmail.com" className="text-primary hover:underline">issadricipro@gmail.com</a>
                            </p>
                            <p className="text-sm text-slate-500 mt-2">
                                Votre demande doit être accompagnée d'une copie d'une pièce d'identité. Nous nous engageons à répondre dans un délai d'un mois maximum.
                            </p>
                        </div>
                        <p>
                            Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD.
                        </p>
                        <p>
                            <strong>CNIL :</strong> 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07<br />
                            Téléphone : 01 53 73 22 22<br />
                            Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Cookies et technologies similaires</h2>
                        <p>
                            Notre site utilise des cookies et technologies similaires pour améliorer votre expérience utilisateur et analyser le trafic du site.
                        </p>
                        <p>
                            Vous pouvez configurer votre navigateur pour refuser les cookies ou être informé de leur utilisation. Cependant, le refus des cookies peut affecter certaines fonctionnalités du site.
                        </p>
                        <p>
                            Pour plus d'informations sur notre utilisation des cookies, consultez notre bannière de consentement aux cookies accessible sur chaque page du site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Transferts de données hors UE</h2>
                        <p>
                            Certains de nos sous-traitants (notamment Airtable) peuvent être situés hors de l'Union Européenne. Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place conformément au RGPD, notamment via le Privacy Shield ou des clauses contractuelles types approuvées par la Commission Européenne.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Modifications de la politique de confidentialité</h2>
                        <p>
                            Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une indication de la date de mise à jour.
                        </p>
                        <p>
                            Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance de la politique de confidentialité en vigueur.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
