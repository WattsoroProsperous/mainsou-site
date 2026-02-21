"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Téléphone",
    value: "+225 01 438 488 21",
    href: "tel:+2250143848821",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4l-10 8L2 4" />
      </svg>
    ),
    label: "Email",
    value: "wolomainsou@gmail.com",
    href: "mailto:wolomainsou@gmail.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adresse",
    value: "Abidjan, Treichville — Avenue 21, Rue 12",
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    label: "Site Web",
    value: "mainsou-esn.com",
    href: "https://mainsou-esn.com",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-medium text-muted-light uppercase tracking-widest">
              Parlons de votre projet
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Contactez-nous
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed mb-10">
              Vous avez un projet en tête ? Discutons ensemble de la meilleure
              solution pour atteindre vos objectifs.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light text-accent">
                    {info.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-muted-light mb-0.5">
                      {info.label}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground font-medium hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-white p-8 sm:p-10 shadow-sm space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-light outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent/20"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-light outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent/20"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                Sujet
              </label>
              <input
                id="subject"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-light outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent/20"
                placeholder="L'objet de votre message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-light outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent/20 resize-y"
                placeholder="Décrivez votre projet..."
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className={`w-full flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-medium text-white transition-colors ${
                submitted
                  ? "bg-emerald-600"
                  : "bg-foreground hover:bg-foreground/90"
              }`}
            >
              {submitted ? (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Message envoyé !
                </>
              ) : (
                <>
                  Envoyer le message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
                  </svg>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
