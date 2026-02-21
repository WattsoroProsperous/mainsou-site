"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stats = [
  { value: "5+", label: "Années d'expérience" },
  { value: "20+", label: "Projets livrés" },
  { value: "15+", label: "Clients satisfaits" },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#D4842A]/[0.06] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1A2E4A]/[0.04] blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#E8A04E]/[0.03] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#1A2E4A 1px, transparent 1px), linear-gradient(90deg, #1A2E4A 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent-pale px-4 py-1.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-sm font-semibold text-accent">
                Depuis 2020 — +5 ans d&apos;expertise
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-navy"
            >
              L&apos;Innovation{" "}
              <span className="bg-gradient-to-r from-[#D4842A] via-[#E8A04E] to-[#D4842A] bg-clip-text text-transparent">
                Numérique
              </span>
              <br />
              au Service de{" "}
              <br className="hidden sm:block" />
              Votre{" "}
              <span className="bg-gradient-to-r from-[#D4842A] to-[#E8A04E] bg-clip-text text-transparent">
                Croissance
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-lg text-lg text-muted leading-relaxed mb-10"
            >
              Entreprise ivoirienne de services numériques spécialisée en
              intégration IA, digitalisation des processus métier, cybersécurité
              et développement sur mesure.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a
                href="#realisations"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#realisations")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(212,132,42,0.35)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(212,132,42,0.45)] hover:-translate-y-0.5"
              >
                Découvrir nos réalisations
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 px-7 py-3.5 text-base font-bold text-navy transition-all duration-300 hover:border-accent/40 hover:bg-accent-pale hover:text-accent"
              >
                Nos Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex gap-10 sm:gap-14"
            >
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl sm:text-4xl font-extrabold text-navy">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex items-center justify-center lg:justify-end"
          >
            <Image
              src="/assets/logo/logo.png"
              alt="Mainsou ESN"
              width={380}
              height={380}
              priority
              className="w-[220px] sm:w-[280px] lg:w-[380px] h-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-muted-light">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-accent/30 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
