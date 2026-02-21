"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Années d'expérience" },
  { value: "20+", label: "Projets livrés" },
  { value: "15+", label: "Clients satisfaits" },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background-alt px-4 py-1.5 text-xs font-medium text-muted mb-8"
          >
            Entreprise de Services Numériques — Abidjan, Côte d&apos;Ivoire
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05] text-foreground"
          >
            L&apos;Innovation Numérique
            <br />
            au Service de Votre{" "}
            <span className="text-accent">Croissance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-lg sm:text-xl text-muted leading-relaxed mt-6"
          >
            Intégration IA, digitalisation des processus, cybersécurité et
            développement sur mesure. Des solutions technologiques conçues pour
            accélérer votre transformation digitale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <a
              href="#realisations"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#realisations")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow-md"
            >
              Découvrir nos réalisations
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-background-alt"
            >
              Nos Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-8 sm:gap-12 mt-16"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
                {i > 0 && (
                  <div className="w-px h-12 bg-border -ml-8 sm:-ml-12" />
                )}
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
