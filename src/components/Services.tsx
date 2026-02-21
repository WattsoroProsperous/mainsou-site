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
    span: "md:col-span-2",
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
    span: "md:col-span-1",
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
    span: "md:col-span-1",
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
    span: "md:col-span-2",
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
    span: "md:col-span-1",
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
    span: "md:col-span-1",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-accent/20 bg-accent-pale px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Ce que nous faisons
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Nos{" "}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Des solutions technologiques sur mesure pour transformer votre entreprise
            et accélérer votre croissance digitale.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`group relative rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_8px_30px_rgba(212,132,42,0.06)] ${service.span}`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent-pale text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface-alt px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
