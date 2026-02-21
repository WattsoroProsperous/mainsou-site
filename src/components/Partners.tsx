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
          className="flex-shrink-0 flex items-center justify-center w-[180px] h-[90px] rounded-2xl bg-surface-alt border border-border/40 px-5"
        >
          <Image
            src={p.src}
            alt={p.alt}
            width={140}
            height={80}
            className="max-h-[60px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>
      ))}
    </>
  );
}

export default function Partners() {
  return (
    <section id="partenaires" className="py-20 sm:py-24 bg-background-alt overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-muted-light uppercase tracking-widest">
            Nos partenaires
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Ils nous font confiance
          </h2>
          <p className="mt-4 text-lg text-muted">
            Plus de 15 entreprises nous accompagnent dans leur transformation digitale.
          </p>
        </motion.div>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex gap-5 animate-marquee w-max">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </section>
  );
}
