"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 2a4 4 0 014 4c0 1.1-.9 2-2 2h-4a2 2 0 01-2-2 4 4 0 014-4z" />
        <path d="M9 8v2a3 3 0 006 0V8" />
        <path d="M12 13v3M8 21h8M12 16v5" />
      </svg>
    ),
    title: "Intégration IA",
    desc: "Intelligence artificielle intégrée dans vos processus pour optimiser la productivité et automatiser les tâches complexes.",
    tags: ["Machine Learning", "Chatbots IA", "OCR"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M7 8l3 3-3 3M13 14h4" />
      </svg>
    ),
    title: "Digitalisation & Automatisation",
    desc: "Transformation digitale de vos processus métier complexes. Workflow intelligent pour gagner en efficacité.",
    tags: ["Process Métier", "Workflow", "ERP"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
        <circle cx="12" cy="16" r="1" />
        <path d="M12 17v2" />
      </svg>
    ),
    title: "Cybersécurité & ISO 27001",
    desc: "Mise en œuvre de SMSI, audits de sécurité et accompagnement vers la certification ISO/IEC 27001.",
    tags: ["SMSI", "ISO 27001", "Audit"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01M9 6h6M9 10h6" />
      </svg>
    ),
    title: "Développement Mobile",
    desc: "Applications mobiles sur mesure, performantes et adaptées à vos besoins. iOS, Android & cross-platform.",
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Développement Web",
    desc: "Sites vitrines, e-commerce et applications web avec les technologies les plus modernes du marché.",
    tags: ["Sites Web", "E-commerce", "SaaS"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 20V10M18 20V4M6 20v-4M2 20h20" />
      </svg>
    ),
    title: "Conseil & Stratégie IT",
    desc: "Accompagnement stratégique dans votre transformation numérique. Audit, recommandations et suivi personnalisé.",
    tags: ["Audit IT", "Stratégie", "Consulting"],
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

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-medium text-muted-light uppercase tracking-widest">
            Ce que nous faisons
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Nos Services
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">
            Des solutions technologiques sur mesure pour transformer votre
            entreprise et accélérer votre croissance digitale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group rounded-2xl border border-border/50 p-8 transition-all duration-200 hover:shadow-lg hover:shadow-gray-100 hover:border-border"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-light text-accent">
                {service.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-alt px-2.5 py-0.5 text-xs font-medium text-muted-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
