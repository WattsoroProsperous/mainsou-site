import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
