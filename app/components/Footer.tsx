import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-950 py-16 text-slate-400 text-sm border-t border-slate-900">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="font-display font-bold text-2xl text-white mb-6">SecureAvenant<span className="text-primary">.</span></div>
                    <p className="max-w-xs mb-6 text-slate-500 leading-relaxed font-light">
                        La solution simple et efficace pour les artisans du bâtiment qui veulent arrêter de travailler gratuitement.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 text-base">Légal</h4>
                    <ul className="space-y-3">
                        <li><Link href="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</Link></li>
                        <li><Link href="/cgu" className="hover:text-primary transition-colors">CGV / CGU</Link></li>
                        <li><Link href="/confidentialite" className="hover:text-primary transition-colors">Confidentialité</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 text-base">Contact</h4>
                    <ul className="space-y-3">
                        <li><a href="mailto:contact@secureavenant.com" className="hover:text-primary transition-colors">contact@secureavenant.com</a></li>
                        <li className="text-green-500 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Support 7j/7
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-900 text-center text-xs text-slate-600 font-medium">
                © {new Date().getFullYear()} SecureAvenant. Tous droits réservés.
            </div>
        </footer>
    );
}
