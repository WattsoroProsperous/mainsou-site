"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "5+", label: "Années d'expérience" },
  { value: "20+", label: "Projets livrés" },
  { value: "15+", label: "Clients satisfaits" },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-accent/[0.05] blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-light px-4 py-1.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-base font-medium text-accent">
                Depuis 2020 — Abidjan, Côte d&apos;Ivoire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-foreground"
            >
              L&apos;Innovation{" "}
              <span className="text-accent">Numérique</span>
              <br />
              au Service de Votre{" "}
              <span className="text-accent">Croissance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-lg text-xl text-muted leading-relaxed mt-6"
            >
              Entreprise ivoirienne spécialisée en intégration IA,
              digitalisation des processus, cybersécurité et développement
              sur mesure. Des solutions conçues pour accélérer votre
              transformation digitale.
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
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow-md"
              >
                Découvrir nos réalisations
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-7 py-4 text-base font-semibold text-white transition-all hover:bg-foreground/90"
              >
                Nous Contacter
              </a>
            </motion.div>

            {/* Stats inline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-8 mt-14 pt-8 border-t border-border"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-light mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-8 rounded-full border border-accent/10" />
              <div className="absolute -inset-16 rounded-full border border-border-light" />

              {/* Logo container */}
              <div className="relative w-[320px] h-[320px] rounded-full bg-gradient-to-br from-accent-light to-white flex items-center justify-center shadow-[0_8px_60px_rgba(232,118,45,0.08)]">
                <Image
                  src="/assets/logo/logo.png"
                  alt="Mainsou ESN"
                  width={200}
                  height={200}
                  priority
                  className="w-[180px] h-auto"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-8 rounded-xl bg-white border border-border shadow-lg px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-accent">
                      <path d="M12 2a4 4 0 014 4c0 1.1-.9 2-2 2h-4a2 2 0 01-2-2 4 4 0 014-4z" />
                      <path d="M9 8v2a3 3 0 006 0V8" />
                      <path d="M12 13v3M8 21h8M12 16v5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">IA & Automation</div>
                    <div className="text-xs text-muted-light">Machine Learning</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-8 rounded-xl bg-white border border-border shadow-lg px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-accent">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Cybersécurité</div>
                    <div className="text-xs text-muted-light">ISO 27001</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 -translate-y-1/2 rounded-xl bg-white border border-border shadow-lg px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-accent">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Dev Web & Mobile</div>
                    <div className="text-xs text-muted-light">Sur mesure</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
