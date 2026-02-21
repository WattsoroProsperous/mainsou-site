"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Découverte & Audit",
    desc: "Analyse approfondie de vos besoins, contraintes et objectifs. Audit de l'existant et identification des opportunités.",
  },
  {
    number: "02",
    title: "Stratégie & Conception",
    desc: "Définition de la feuille de route technique, choix des technologies et conception de l'architecture solution.",
  },
  {
    number: "03",
    title: "Développement & Intégration",
    desc: "Développement agile avec des sprints réguliers, revues de code et intégration continue pour une qualité optimale.",
  },
  {
    number: "04",
    title: "Tests & Déploiement",
    desc: "Tests rigoureux, validation client et déploiement sécurisé. Formation des équipes à l'utilisation de la solution.",
  },
  {
    number: "05",
    title: "Support & Évolution",
    desc: "Accompagnement post-livraison, maintenance proactive et évolution continue selon vos besoins.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Process() {
  return (
    <section id="processus" className="py-24 sm:py-32 bg-background-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-muted-light uppercase tracking-widest">
            Notre méthodologie
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Notre Processus
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-muted leading-relaxed">
            Une approche structurée et éprouvée pour garantir le succès de
            chaque projet.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={stepVariants}>
              <div className="font-heading text-4xl font-semibold text-accent/15 leading-none">
                {step.number}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-base text-muted leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
