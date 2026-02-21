import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mainsou ESN | Entreprise de Services Numériques",
  description:
    "Entreprise ivoirienne de R&D informatique. Intégrateur IA, digitalisation, cybersécurité ISO 27001 et développement sur mesure. +5 ans d'expérience.",
  keywords: [
    "Mainsou ESN",
    "ESN Abidjan",
    "développement web",
    "intelligence artificielle",
    "digitalisation",
    "ISO 27001",
    "Côte d'Ivoire",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
