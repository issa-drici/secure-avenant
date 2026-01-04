import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CGU() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="font-display font-bold text-4xl text-slate-900 mb-12">Conditions Générales d'Utilisation et de Vente (CGU/CGV)</h1>
                <p className="text-slate-600 mb-8">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Objet et champ d'application</h2>
                        <p>
                            Les présentes Conditions Générales d'Utilisation et de Vente (ci-après "CGU/CGV") ont pour objet de définir les modalités et conditions d'utilisation du service SecureAvenant, ainsi que les droits et obligations des parties dans ce cadre.
                        </p>
                        <p>
                            Elles s'appliquent, sans restriction ni réserve, à tous les services proposés par Issa DRICI, auto-entrepreneur, sur le site secure-avenant.com (ci-après "le Site").
                        </p>
                        <p>
                            Toute utilisation du service implique l'acceptation sans réserve des présentes CGU/CGV. À défaut d'acceptation, l'utilisateur ne doit pas utiliser le service.
                        </p>
                        <p>
                            L'acceptation des présentes CGU/CGV se matérialise par la création d'un compte et/ou la souscription à un abonnement. Cette acceptation vaut pour l'ensemble des services proposés.
                        </p>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-4">
                            <p className="mb-2">
                                <strong>Éditeur du service :</strong><br />
                                Issa DRICI - Auto-entrepreneur<br />
                                3 rue des Soeurs Franciscaines<br />
                                76620 Le Havre, France<br />
                                SIRET : 848 494 316 00039<br />
                                RCS : 848 494 316 R.C.S. Le Havre
                            </p>
                            <p>
                                <strong>Email :</strong> <a href="mailto:issadricipro@gmail.com" className="text-primary hover:underline">issadricipro@gmail.com</a>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Description du service</h2>
                        <p>
                            SecureAvenant est une application web et mobile permettant aux artisans du BTP de :
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Créer et gérer des avenants de travaux supplémentaires directement sur le chantier</li>
                            <li>Faire signer électroniquement ces avenants par leurs clients</li>
                            <li>Générer automatiquement des PDF signés et les envoyer par email</li>
                            <li>Conserver un historique complet de tous les avenants par chantier</li>
                            <li>Utiliser l'application en mode hors-ligne</li>
                        </ul>
                        <p>
                            Le service est accessible via un abonnement mensuel avec une période d'essai gratuit de 14 jours.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Inscription et compte utilisateur</h2>
                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3.1. Conditions d'inscription</h3>
                        <p>
                            Pour utiliser le service, l'utilisateur doit créer un compte en fournissant des informations exactes, complètes et à jour. L'utilisateur s'engage à maintenir ces informations à jour.
                        </p>
                        <p>
                            L'inscription est réservée aux professionnels du secteur du BTP (artisans, entreprises de construction, etc.).
                        </p>

                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3.2. Identifiants de connexion</h3>
                        <p>
                            L'utilisateur est responsable de la confidentialité de ses identifiants de connexion (email et mot de passe). Toute utilisation de son compte lui est imputable.
                        </p>
                        <p>
                            En cas de perte, d'oubli ou de vol de ses identifiants, l'utilisateur doit immédiatement en informer le service et modifier son mot de passe.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Tarifs et modalités de paiement</h2>
                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4.1. Prix</h3>
                        <p>
                            L'abonnement au service SecureAvenant est facturé au prix de <strong>9,00 € TTC par mois</strong>.
                        </p>
                        <p>
                            Les prix sont indiqués en euros, toutes taxes comprises (TTC). Le taux de TVA applicable est celui en vigueur au jour de la commande.
                        </p>
                        <p>
                            L'éditeur se réserve le droit de modifier ses prix à tout moment. Toutefois, le prix en vigueur au jour de la souscription de l'abonnement restera applicable pour la durée de l'engagement en cours.
                        </p>

                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4.2. Période d'essai</h3>
                        <p>
                            Un essai gratuit de <strong>14 jours</strong> est proposé à tout nouvel utilisateur. Pendant cette période, l'utilisateur a accès à toutes les fonctionnalités du service sans frais.
                        </p>
                        <p>
                            À l'expiration de la période d'essai, l'abonnement devient payant automatiquement sauf résiliation avant la fin de la période d'essai.
                        </p>

                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4.3. Modalités de paiement</h3>
                        <p>
                            Le paiement s'effectue par <strong>carte bancaire</strong> uniquement, via un prestataire de paiement sécurisé.
                        </p>
                        <p>
                            L'abonnement est renouvelé automatiquement chaque mois. Le prélèvement s'effectue le jour anniversaire de la souscription.
                        </p>
                        <p>
                            En cas d'échec du paiement, l'accès au service peut être suspendu jusqu'à régularisation de la situation.
                        </p>

                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4.4. Facturation</h3>
                        <p>
                            Une facture est automatiquement générée et envoyée par email à chaque prélèvement mensuel.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Droit de rétractation</h2>
                        <p>
                            Conformément aux articles L. 221-18 et suivants du Code de la consommation, l'utilisateur dispose d'un délai de <strong>14 jours calendaires</strong> à compter de la souscription de l'abonnement pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalité.
                        </p>
                        <p>
                            Pour exercer ce droit, l'utilisateur doit notifier sa décision de rétractation par email à l'adresse suivante : <a href="mailto:issadricipro@gmail.com" className="text-primary hover:underline">issadricipro@gmail.com</a>.
                        </p>
                        <p>
                            En cas de rétractation, l'éditeur remboursera tous les paiements reçus dans un délai de 14 jours à compter de la réception de la notification de rétractation.
                        </p>
                        <p className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-amber-900">
                            <strong>Exception :</strong> Conformément à l'article L. 221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture de contenu numérique dont l'exécution a commencé après accord exprès du consommateur et renoncement exprès à son droit de rétractation. En utilisant le service pendant la période d'essai, l'utilisateur accepte expressément que l'exécution du contrat commence immédiatement et renonce à son droit de rétractation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Résiliation</h2>
                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">6.1. Résiliation par l'utilisateur</h3>
                        <p>
                            L'utilisateur peut résilier son abonnement à tout moment, sans préavis, depuis son espace personnel ou en contactant le service par email.
                        </p>
                        <p>
                            La résiliation prend effet immédiatement. Aucun remboursement ne sera effectué pour la période en cours.
                        </p>
                        <p>
                            Les données de l'utilisateur seront conservées pendant 3 ans après la résiliation, conformément à notre politique de confidentialité, puis supprimées définitivement.
                        </p>

                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">6.2. Résiliation par l'éditeur</h3>
                        <p>
                            L'éditeur se réserve le droit de résilier l'abonnement de tout utilisateur en cas de :
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Non-respect des présentes CGU/CGV</li>
                            <li>Utilisation frauduleuse du service</li>
                            <li>Non-paiement des sommes dues</li>
                            <li>Inactivité du compte pendant plus de 12 mois</li>
                        </ul>
                        <p>
                            La résiliation prend effet immédiatement après notification par email à l'utilisateur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Disponibilité du service</h2>
                        <p>
                            L'éditeur s'efforce d'assurer une disponibilité du service 24h/24 et 7j/7, sous réserve des opérations de maintenance nécessaires au bon fonctionnement du service.
                        </p>
                        <p>
                            L'éditeur se réserve le droit d'interrompre temporairement l'accès au service pour des raisons de maintenance, de mise à jour ou pour toute autre raison technique, sans que cela ne puisse donner lieu à une quelconque indemnisation.
                        </p>
                        <p>
                            L'utilisateur est informé que le service peut être utilisé en mode hors-ligne, permettant la création et la signature d'avenants même sans connexion internet. La synchronisation s'effectue automatiquement dès le retour de la connexion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Obligations de l'utilisateur</h2>
                        <p>
                            L'utilisateur s'engage à :
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Utiliser le service conformément à sa destination et aux présentes CGU/CGV</li>
                            <li>Ne pas utiliser le service à des fins illégales ou frauduleuses</li>
                            <li>Ne pas tenter d'accéder de manière non autorisée au service ou à ses systèmes</li>
                            <li>Ne pas perturber le fonctionnement du service</li>
                            <li>Respecter les droits de propriété intellectuelle de l'éditeur et des tiers</li>
                            <li>Ne pas transmettre de virus, chevaux de Troie ou tout autre code malveillant</li>
                            <li>Conserver la confidentialité de ses identifiants de connexion</li>
                        </ul>
                        <p>
                            Tout manquement à ces obligations peut entraîner la résiliation immédiate de l'abonnement sans préavis ni remboursement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Valeur juridique des avenants</h2>
                        <p>
                            SecureAvenant utilise une signature électronique conforme aux normes européennes eIDAS (Règlement UE n°910/2014). Les avenants signés électroniquement via notre service ont la même valeur juridique qu'une signature manuscrite.
                        </p>
                        <p>
                            L'éditeur garantit que les avenants générés sont conformes au Code Civil français et constituent une preuve valable en cas de litige.
                        </p>
                        <p>
                            Cependant, l'éditeur ne saurait être tenu responsable de l'utilisation qui est faite des avenants par l'utilisateur ou ses clients, ni des litiges pouvant survenir entre l'utilisateur et ses clients.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Propriété intellectuelle</h2>
                        <p>
                            Le service SecureAvenant, incluant notamment les logiciels, textes, images, vidéos, graphismes, logos, icônes, ainsi que leur mise en forme, sont la propriété exclusive de l'éditeur, sauf mention contraire.
                        </p>
                        <p>
                            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du service, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l'éditeur.
                        </p>
                        <p>
                            L'utilisateur conserve la propriété intellectuelle sur les contenus qu'il crée via le service (avenants, données clients, etc.). Il accorde à l'éditeur une licence d'utilisation de ces contenus uniquement dans le cadre de la fourniture du service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">11. Protection des données personnelles</h2>
                        <p>
                            Les données personnelles collectées dans le cadre de l'utilisation du service sont traitées conformément à notre Politique de Confidentialité, accessible sur le site.
                        </p>
                        <p>
                            L'utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition concernant ses données personnelles, qu'il peut exercer en contactant l'éditeur à l'adresse : <a href="mailto:issadricipro@gmail.com" className="text-primary hover:underline">issadricipro@gmail.com</a>.
                        </p>
                        <p>
                            <strong>Données des clients finaux :</strong> L'utilisateur reconnaît être responsable du traitement des données personnelles de ses propres clients qu'il saisit dans le service. Il s'engage à respecter la réglementation applicable en matière de protection des données personnelles (RGPD) et à obtenir les consentements nécessaires ou à disposer d'une base légale pour le traitement de ces données.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">12. Responsabilité et garanties</h2>
                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">12.1. Limitation de responsabilité</h3>
                        <p>
                            L'éditeur s'efforce de fournir un service de qualité. Cependant, l'éditeur ne saurait être tenu responsable :
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le service</li>
                            <li>De la perte de données, même en cas de faute de l'éditeur (l'utilisateur est invité à effectuer ses propres sauvegardes)</li>
                            <li>Des interruptions du service dues à des cas de force majeure ou à des événements indépendants de sa volonté</li>
                            <li>Des litiges survenant entre l'utilisateur et ses clients concernant les avenants créés via le service</li>
                            <li>De l'utilisation frauduleuse du service par un tiers ayant obtenu les identifiants de connexion de l'utilisateur</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">12.2. Garantie</h3>
                        <p>
                            Le service est fourni "en l'état", sans garantie d'aucune sorte, expresse ou implicite. L'éditeur ne garantit pas que le service répondra aux besoins spécifiques de l'utilisateur ou qu'il sera ininterrompu, sécurisé ou exempt d'erreurs.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">13. Force majeure</h2>
                        <p>
                            L'éditeur ne saurait être tenu responsable de tout retard ou défaillance dans l'exécution de ses obligations résultant d'un cas de force majeure ou d'un événement indépendant de sa volonté, notamment : catastrophes naturelles, guerre, grève, panne des réseaux de télécommunication, etc.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">14. Modification des CGU/CGV</h2>
                        <p>
                            L'éditeur se réserve le droit de modifier les présentes CGU/CGV à tout moment. Les modifications prennent effet dès leur publication sur le site.
                        </p>
                        <p>
                            L'utilisateur est invité à consulter régulièrement les CGU/CGV. En cas de modification substantielle, l'utilisateur en sera informé par email.
                        </p>
                        <p>
                            L'utilisation continue du service après modification des CGU/CGV vaut acceptation des nouvelles conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">15. Droit applicable et juridiction compétente</h2>
                        <p>
                            Les présentes CGU/CGV sont régies par le droit français.
                        </p>
                        <p>
                            En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents du ressort du siège social de l'éditeur, conformément aux règles de compétence en vigueur.
                        </p>
                        <p>
                            Conformément aux articles L. 612-1 et R. 612-1 et suivants du Code de la consommation, l'utilisateur peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige qui l'oppose à l'éditeur. Cependant, aucun médiateur n'est actuellement désigné.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">16. Contact</h2>
                        <p>
                            Pour toute question relative aux présentes CGU/CGV ou au service SecureAvenant, vous pouvez nous contacter :
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
