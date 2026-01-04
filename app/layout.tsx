import type { Metadata } from "next";
import Script from "next/script";
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
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-slate-900 text-white font-sans`}
      >
        {/* Google Tag Manager - Code dans le <head> (via Script avec beforeInteractive) */}
        {gtmId && (
          <>
            {/* Initialiser dataLayer */}
            <Script
              id="gtm-dataLayer-init"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'gtm.start': new Date().getTime(),
  event: 'gtm.js'
});`,
              }}
            />
            {/* Script GTM */}
            <Script
              id="google-tag-manager"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
              }}
            />
          </>
        )}
        {/* Google Tag Manager (noscript) - Code juste après <body> */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Navbar />
        {children}
        <CookieBanner />
        <CookieManager />
      </body>
    </html>
  );
}
