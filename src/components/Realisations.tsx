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
    <section id="realisations" className="py-24 sm:py-32 bg-background-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-muted-light uppercase tracking-widest">
            Notre portfolio
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Nos Réalisations
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-muted leading-relaxed">
            Découvrez une sélection de projets réalisés pour nos clients à
            travers différents secteurs.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`rounded-full px-5 py-2 text-base font-medium transition-all duration-200 ${
                activeFilter === f.key
                  ? "bg-foreground text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group rounded-xl overflow-hidden border border-border/50 transition-all duration-200 hover:shadow-lg hover:shadow-gray-100"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="rounded-full bg-accent-light px-3 py-1 text-sm font-medium text-accent">
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-base text-muted leading-relaxed">
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
