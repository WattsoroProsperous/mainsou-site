"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const filters = [
  { key: "all", label: "Tous" },
  { key: "web", label: "Sites Web" },
  { key: "platform", label: "Plateformes" },
  { key: "automation", label: "Automatisation" },
];

const projects = [
  {
    category: "web",
    image: "/assets/realisations/conception de la plateforme de gestion de restaurant pour le mont parnasse.png",
    title: "Le Montparnasse",
    desc: "Plateforme de gestion de restaurant — brasserie française & italienne à Abidjan",
    tag: "Site Web & Gestion",
  },
  {
    category: "web",
    image: "/assets/realisations/conception et developpement du site web pour le restaurant soko a abidjan.png",
    title: "Restaurant Soko",
    desc: "Site web pour le restaurant gastronomique Soko à Abidjan",
    tag: "Site Web",
  },
  {
    category: "web",
    image: "/assets/realisations/site web pour le grand groupe de patiserie française en côte d'ivoire nougatine.png",
    title: "Nougatine",
    desc: "Site web pour le grand groupe de pâtisserie française en Côte d'Ivoire",
    tag: "Site Web",
  },
  {
    category: "web",
    image: "/assets/realisations/conception et developpement du site web pour l'entreprise Bot&co specialisée dans la vente de champage de luxe.png",
    title: "Bot & Co",
    desc: "Site web e-commerce pour la vente de champagne de luxe",
    tag: "E-commerce",
  },
  {
    category: "platform",
    image: "/assets/realisations/conception de la plateforme de gestion de restaurant pour la brasserie du parc restaurant vip a abidjan.png",
    title: "Brasserie du Parc",
    desc: "Plateforme de gestion pour le restaurant VIP à Abidjan",
    tag: "Plateforme",
  },
  {
    category: "platform",
    image: "/assets/realisations/plateforme ecommerce pour le grand restaurant SAMs.png",
    title: "SAMs Restaurant",
    desc: "Plateforme e-commerce pour le grand restaurant SAMs",
    tag: "E-commerce",
  },
  {
    category: "platform",
    image: "/assets/realisations/pateforme ecommerce pour le magasi fitforce.png",
    title: "FitForce",
    desc: "Plateforme e-commerce pour le magasin d'équipements sportifs",
    tag: "E-commerce",
  },
  {
    category: "web",
    image: "/assets/realisations/conception et developement de la disco vip la maison blanche.png",
    title: "Maison Blanche",
    desc: "Site web pour la disco VIP La Maison Blanche à Abidjan",
    tag: "Site Web",
  },
  {
    category: "automation",
    image: "/assets/realisations/automatisation des paiemment par cheque avec wouri, voir wouri.fr.png",
    title: "Cheqprint",
    desc: "Automatisation des paiements par chèque — solution professionnelle sécurisée",
    tag: "Automatisation",
  },
  {
    category: "automation",
    image: "/assets/realisations/automatisation de verification de facture, détection fraudes et trop perçus pour le compte de l'entreprise française wouri.fr.png",
    title: "Wouri.fr",
    desc: "Automatisation de vérification de factures, détection de fraudes et trop-perçus",
    tag: "Automatisation & IA",
  },
];

export default function Realisations() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="realisations" className="py-24 sm:py-32 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full border border-accent/20 bg-accent-pale px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Notre portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Nos{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Réalisations
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Découvrez une sélection de projets réalisés pour nos clients à travers
            différents secteurs.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center flex-wrap gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === f.key
                  ? "bg-accent text-white shadow-[0_2px_12px_rgba(212,132,42,0.3)]"
                  : "border border-border bg-surface text-muted hover:text-foreground hover:border-accent/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/20 hover:shadow-[0_8px_30px_rgba(212,132,42,0.06)]"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
