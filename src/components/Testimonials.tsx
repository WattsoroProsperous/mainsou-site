"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Mainsou ESN a transformé notre gestion de restaurant. La plateforme est intuitive et nos équipes l'ont adoptée immédiatement.",
    author: "Directeur",
    company: "Le Montparnasse",
    sector: "Restauration",
  },
  {
    quote:
      "L'automatisation de nos processus de facturation nous a fait gagner un temps considérable. Un accompagnement professionnel de bout en bout.",
    author: "Responsable IT",
    company: "Wouri.fr",
    sector: "FinTech",
  },
  {
    quote:
      "Un site web moderne qui reflète parfaitement l'image de notre maison. Le résultat a dépassé nos attentes.",
    author: "Fondatrice",
    company: "Nougatine",
    sector: "Pâtisserie",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-medium text-muted-light uppercase tracking-widest">
            Témoignages
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">
            La satisfaction de nos clients est notre meilleure carte de visite.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.company}
              variants={cardVariants}
              className="rounded-2xl border border-border/50 p-8 transition-all duration-200 hover:shadow-lg hover:shadow-gray-100"
            >
              <div className="text-5xl font-serif text-accent/20 leading-none select-none">
                &ldquo;
              </div>
              <p className="mt-4 text-base text-foreground leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-6 pt-6 border-t border-border-light">
                <div className="text-sm font-semibold text-foreground">
                  {t.author}
                </div>
                <div className="text-xs text-muted-light mt-0.5">
                  {t.company} — {t.sector}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
