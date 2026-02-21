"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { src: "/assets/partenaires/el padrino.jpg", alt: "El Padrino" },
  { src: "/assets/partenaires/chez richard.png", alt: "Chez Richard" },
  { src: "/assets/partenaires/casabaobab.png", alt: "Casa Baobab" },
  { src: "/assets/partenaires/la croisette.png", alt: "La Croisette" },
  { src: "/assets/partenaires/gaspard abidjan.jpg", alt: "Gaspard Abidjan" },
  { src: "/assets/partenaires/brasserie du parc.png", alt: "Brasserie du Parc" },
  { src: "/assets/partenaires/Bot&co.jpg", alt: "Bot & Co" },
  { src: "/assets/partenaires/eden food by sky.jpg", alt: "Eden Food by Sky" },
  { src: "/assets/partenaires/soko.png", alt: "Soko" },
  { src: "/assets/partenaires/institut.jpg", alt: "Institut" },
  { src: "/assets/partenaires/nougatine.webp", alt: "Nougatine" },
  { src: "/assets/partenaires/fitforce.jpg", alt: "FitForce" },
  { src: "/assets/partenaires/casa 60.jpg", alt: "Casa 60" },
  { src: "/assets/partenaires/sallma finance.png", alt: "Sallma Finance" },
];

function LogoRow() {
  return (
    <>
      {partners.map((p, i) => (
        <div
          key={i}
          className="flex-shrink-0 flex items-center justify-center w-[130px] h-[80px] rounded-xl border border-border bg-surface px-4 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_4px_20px_rgba(212,132,42,0.06)]"
        >
          <Image
            src={p.src}
            alt={p.alt}
            width={100}
            height={60}
            className="max-h-[48px] w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>
      ))}
    </>
  );
}

export default function Partners() {
  return (
    <section id="partenaires" className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full border border-accent/20 bg-accent-pale px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Ils nous font confiance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Nos{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Partenaires
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Des entreprises de divers secteurs qui nous font confiance pour leurs projets numériques.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex gap-6 animate-marquee w-max">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </section>
  );
}
