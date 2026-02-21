import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mainsou-esn.com"),
  title: {
    default:
      "Mainsou ESN | Entreprise de Services Numériques à Abidjan, Côte d'Ivoire",
    template: "%s | Mainsou ESN",
  },
  description:
    "Mainsou ESN, entreprise ivoirienne de services numériques basée à Abidjan. Spécialiste en développement web & mobile, intégration IA, cybersécurité, digitalisation et solutions sur mesure. +5 ans d'expérience, +20 projets livrés.",
  keywords: [
    // Marque
    "Mainsou",
    "Mainsou ESN",
    "mainsou-esn",
    "mainsou esn abidjan",
    "mainsou entreprise",
    // Services principaux
    "entreprise informatique",
    "entreprise informatique Abidjan",
    "entreprise informatique Côte d'Ivoire",
    "ESN Abidjan",
    "ESN Côte d'Ivoire",
    "société de services numériques",
    "entreprise de services numériques",
    // Développement web
    "développement web",
    "développement web Abidjan",
    "développement site web Abidjan",
    "création site web Abidjan",
    "création site internet Côte d'Ivoire",
    "agence web Abidjan",
    "développeur web Abidjan",
    "site web professionnel Abidjan",
    // Développement application
    "développement application",
    "développement application mobile",
    "développement application mobile Abidjan",
    "créer mon application",
    "créer une application mobile",
    "création application Abidjan",
    "développement mobile Côte d'Ivoire",
    "application sur mesure Abidjan",
    // Intelligence artificielle
    "intelligence artificielle Abidjan",
    "IA Abidjan",
    "intégration IA",
    "solution IA",
    "solution intelligence artificielle",
    "IA Côte d'Ivoire",
    "automatisation IA",
    "machine learning Abidjan",
    "chatbot IA Abidjan",
    // Cybersécurité
    "cybersécurité",
    "cybersécurité Abidjan",
    "cybersécurité Côte d'Ivoire",
    "sécurité informatique Abidjan",
    "ISO 27001",
    "audit sécurité informatique",
    "protection données Abidjan",
    // Digitalisation
    "digitalisation",
    "digitalisation entreprise",
    "digitalisation Abidjan",
    "transformation digitale",
    "transformation digitale Côte d'Ivoire",
    "transformation numérique Abidjan",
    "automatisation processus",
    // Boîte informatique
    "boîte informatique Abidjan",
    "boite informatique Abidjan",
    "meilleure entreprise informatique Abidjan",
    "meilleur entreprise informatique Abidjan",
    "meilleure boîte informatique Abidjan",
    "société informatique Abidjan",
    "prestataire informatique Abidjan",
    // Innovation & Startup
    "innovation Abidjan",
    "innovation Côte d'Ivoire",
    "innovation numérique Abidjan",
    "innovation technologique Côte d'Ivoire",
    "startup Abidjan",
    "start up Abidjan",
    "startup Côte d'Ivoire",
    "start up Côte d'Ivoire",
    "startup tech Abidjan",
    "tech Abidjan",
    // Termes complémentaires
    "logiciel sur mesure Abidjan",
    "développement logiciel Côte d'Ivoire",
    "consultant IT Abidjan",
    "infogérance Abidjan",
    "hébergement web Abidjan",
    "e-commerce Abidjan",
    "plateforme digitale",
    "solution numérique Abidjan",
    "R&D informatique",
    "Treichville",
  ],
  authors: [{ name: "Mainsou ESN", url: "https://mainsou-esn.com" }],
  creator: "Mainsou ESN",
  publisher: "Mainsou ESN",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mainsou-esn.com",
  },
  openGraph: {
    type: "website",
    locale: "fr_CI",
    url: "https://mainsou-esn.com",
    siteName: "Mainsou ESN",
    title:
      "Mainsou ESN | Entreprise de Services Numériques à Abidjan",
    description:
      "Entreprise ivoirienne spécialisée en développement web & mobile, intégration IA, cybersécurité et digitalisation. Basée à Abidjan, Côte d'Ivoire. +5 ans d'expérience.",
    images: [
      {
        url: "/assets/logo/logo.png",
        width: 512,
        height: 512,
        alt: "Mainsou ESN - Entreprise de Services Numériques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mainsou ESN | Services Numériques à Abidjan",
    description:
      "Développement web & mobile, IA, cybersécurité et digitalisation. Entreprise ivoirienne basée à Abidjan.",
    images: ["/assets/logo/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Business",
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
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mainsou ESN",
              alternateName: ["Mainsou", "mainsou-esn"],
              url: "https://mainsou-esn.com",
              logo: "https://mainsou-esn.com/assets/logo/logo.png",
              description:
                "Entreprise ivoirienne de services numériques spécialisée en développement web & mobile, intégration IA, cybersécurité et digitalisation.",
              foundingDate: "2020",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abidjan",
                addressRegion: "Treichville",
                addressCountry: "CI",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+225-01-438-488-21",
                email: "wolomainsou@gmail.com",
                contactType: "customer service",
                availableLanguage: ["French"],
              },
              sameAs: ["https://mainsou-esn.com"],
              areaServed: {
                "@type": "Country",
                name: "Côte d'Ivoire",
              },
              knowsAbout: [
                "Développement web",
                "Développement mobile",
                "Intelligence artificielle",
                "Cybersécurité",
                "Digitalisation",
                "Transformation digitale",
                "ISO 27001",
                "Machine Learning",
                "E-commerce",
              ],
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 5,
              },
              slogan:
                "L'Innovation Numérique au Service de Votre Croissance",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mainsou ESN",
              url: "https://mainsou-esn.com",
              description:
                "Site officiel de Mainsou ESN - Entreprise de Services Numériques à Abidjan, Côte d'Ivoire",
              inLanguage: "fr",
              publisher: {
                "@type": "Organization",
                name: "Mainsou ESN",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mainsou ESN",
              image: "https://mainsou-esn.com/assets/logo/logo.png",
              url: "https://mainsou-esn.com",
              telephone: "+225-01-438-488-21",
              email: "wolomainsou@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Treichville",
                addressLocality: "Abidjan",
                addressCountry: "CI",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 5.3096,
                longitude: -4.0125,
              },
              priceRange: "$$",
              openingHours: "Mo-Fr 08:00-18:00",
              serviceArea: {
                "@type": "Country",
                name: "Côte d'Ivoire",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services Numériques",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Développement Web & Mobile",
                      description:
                        "Conception et développement de sites web et applications mobiles sur mesure",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Intégration Intelligence Artificielle",
                      description:
                        "Solutions IA, chatbots, automatisation et machine learning",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cybersécurité",
                      description:
                        "Audit de sécurité, protection des données, conformité ISO 27001",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digitalisation & Transformation Numérique",
                      description:
                        "Automatisation des processus, migration cloud, solutions digitales",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "15",
                bestRating: "5",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
