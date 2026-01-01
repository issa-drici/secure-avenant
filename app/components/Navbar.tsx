"use client";

import Link from "next/link";
import { ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-display font-bold text-xl text-slate-900 tracking-tight">SecureAvenant<span className="text-primary">.</span></span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/#problem" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Le Constat</Link>
                    <Link href="/#solution" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Comment ça marche</Link>
                    <Link href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Tarifs</Link>
                    <Link href="/#testimonials" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Témoignages</Link>
                </div>

                {/* Desktop CTAs */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="#" className="text-sm font-medium text-slate-900 hover:text-primary transition-colors">
                        Espace Artisan
                    </Link>
                    <Link href="/inscription?source=navbar" className="px-5 py-2.5 bg-primary hover:bg-yellow-400 text-slate-900 font-bold text-sm rounded-lg transition-all shadow-sm hover:shadow-md">
                        Essai Gratuit
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-4 shadow-lg flex flex-col gap-4 animate-in slide-in-from-top-2">
                    <Link href="/#problem" className="text-slate-600 font-medium py-2" onClick={() => setIsOpen(false)}>Le Constat</Link>
                    <Link href="/#solution" className="text-slate-600 font-medium py-2" onClick={() => setIsOpen(false)}>Comment ça marche</Link>
                    <Link href="/#pricing" className="text-slate-600 font-medium py-2" onClick={() => setIsOpen(false)}>Tarifs</Link>
                    <Link href="/#testimonials" className="text-slate-600 font-medium py-2" onClick={() => setIsOpen(false)}>Témoignages</Link>
                    <hr className="border-slate-100" />
                    <Link href="#" className="text-slate-900 font-medium py-2" onClick={() => setIsOpen(false)}>Espace Artisan</Link>
                    <Link href="/inscription?source=navbar_mobile" className="bg-primary text-slate-900 font-bold py-3 rounded-lg text-center" onClick={() => setIsOpen(false)}>Essai Gratuit</Link>
                </div>
            )}
        </nav>
    );
}
