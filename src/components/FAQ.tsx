"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Quels types de projets prenez-vous en charge ?",
    a: "Nous intervenons sur des projets de développement web et mobile, d'intégration IA, de digitalisation des processus métier, de cybersécurité et de conseil IT. Chaque projet est adapté aux besoins spécifiques du client.",
  },
  {
    q: "Combien de temps dure un projet typique ?",
    a: "La durée varie selon la complexité. Un site web vitrine peut être livré en 2-4 semaines, tandis qu'une plateforme complexe ou une intégration IA peut prendre 2-6 mois. Nous définissons un calendrier précis dès la phase de découverte.",
  },
  {
    q: "Travaillez-vous uniquement en Côte d'Ivoire ?",
    a: "Nous sommes basés à Abidjan mais nous accompagnons des clients dans toute l'Afrique de l'Ouest et en Europe, notamment en France. Notre équipe est habituée au travail à distance.",
  },
  {
    q: "Comment assurez-vous la sécurité des projets ?",
    a: "La sécurité est au cœur de notre approche. Nous appliquons les standards ISO 27001, réalisons des audits réguliers et intégrons les meilleures pratiques de cybersécurité dès la conception.",
  },
  {
    q: "Proposez-vous un accompagnement après la livraison ?",
    a: "Oui, nous assurons la maintenance, le support technique et l'évolution de toutes nos solutions. Nos clients bénéficient d'un suivi personnalisé et proactif.",
  },
  {
    q: "Quel est votre processus de travail ?",
    a: "Nous suivons une méthodologie agile en 5 étapes : découverte et audit, stratégie et conception, développement et intégration, tests et déploiement, puis support et évolution continue.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-background-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start"
          >
            <span className="text-sm font-medium text-muted-light uppercase tracking-widest">
              Questions fréquentes
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
              FAQ
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Les réponses aux questions les plus courantes sur nos services et
              notre façon de travailler.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8"
          >
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex items-center justify-between w-full py-5 text-left"
                >
                  <span className="text-lg font-medium text-foreground pr-4">
                    {faq.q}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className={`w-5 h-5 flex-shrink-0 text-muted-light transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-base text-muted leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
