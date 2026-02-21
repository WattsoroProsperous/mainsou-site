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
          className="flex-shrink-0 flex items-center justify-center w-[140px] h-[70px] px-4"
        >
          <Image
            src={p.src}
            alt={p.alt}
            width={100}
            height={60}
            className="max-h-[48px] w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>
      ))}
    </>
  );
}

export default function Partners() {
  return (
    <section id="partenaires" className="py-12 sm:py-16 overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-base text-muted-light text-center mb-8"
      >
        Ils nous font confiance
      </motion.p>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
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
