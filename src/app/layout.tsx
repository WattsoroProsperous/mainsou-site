import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
      <body className={`${sora.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
