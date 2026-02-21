"use client";

import { motion } from "framer-motion";

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M12 2a4 4 0 014 4c0 1.1-.9 2-2 2h-4a2 2 0 01-2-2 4 4 0 014-4z" />
        <path d="M9 8v2a3 3 0 006 0V8" />
        <path d="M12 13v3M8 21h8M12 16v5" />
      </svg>
    ),
    label: "Innovation",
    desc: "Technologies de pointe",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    label: "Qualité",
    desc: "Standards internationaux",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    label: "Proximité",
    desc: "Accompagnement dédié",
  },
];

const stats = [
  { value: "5+", label: "Années d'expérience" },
  { value: "20+", label: "Projets livrés" },
  { value: "15+", label: "Clients satisfaits" },
  { value: "6", label: "Domaines d'expertise" },
];

export default function About() {
  return (
    <section id="apropos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-muted-light uppercase tracking-widest">
              À propos de nous
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
              Une équipe passionnée par l&apos;innovation numérique
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Fondée en 2020 à Abidjan, Mainsou ESN est née de la conviction
              que les entreprises ivoiriennes méritent un accompagnement
              technologique de classe mondiale. Notre équipe de développeurs,
              ingénieurs et consultants combine expertise technique et
              connaissance approfondie du marché local.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Nous concevons des solutions sur mesure — de l&apos;intelligence
              artificielle à la cybersécurité — pour permettre à nos clients de
              se concentrer sur l&apos;essentiel : leur croissance.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="flex items-center gap-3 rounded-lg border border-border/50 px-4 py-3"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-light text-accent">
                    {v.icon}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-foreground">
                      {v.label}
                    </div>
                    <div className="text-sm text-muted-light">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-background-alt p-6 text-center"
              >
                <div className="text-4xl sm:text-5xl font-semibold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-base text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
