import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import CookieBanner from "./components/CookieBanner";
import CookieManager from "./components/CookieManager";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SecureAvenant - Ne travaillez plus jamais gratuitement",
  description: "L'application web mobile ultra-légère pour générer et signer des avenants sur chantier en 30 secondes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-slate-900 text-white font-sans`}
      >
        <Navbar />
        {children}
        <CookieBanner />
        <CookieManager />
      </body>
    </html>
  );
}
