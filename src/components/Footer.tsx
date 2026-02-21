import Image from "next/image";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#apropos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Intégration IA",
  "Digitalisation",
  "Cybersécurité",
  "Développement Mobile",
  "Développement Web",
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/logo/logo.png"
                alt="Mainsou ESN"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-base font-semibold text-foreground">
                Mainsou <span className="text-accent">ESN</span>
              </span>
            </div>
            <p className="text-base text-muted leading-relaxed max-w-xs">
              Entreprise ivoirienne de services numériques. Innovation, qualité
              et accompagnement sur mesure depuis 2020.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-light mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-base text-muted hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-light mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-base text-muted hover:text-foreground transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-light mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-base text-muted">
              <li>
                <a href="tel:+2250143848821" className="hover:text-foreground transition-colors">
                  +225 01 438 488 21
                </a>
              </li>
              <li>
                <a href="mailto:wolomainsou@gmail.com" className="hover:text-foreground transition-colors">
                  wolomainsou@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://mainsou-esn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  mainsou-esn.com
                </a>
              </li>
              <li>Abidjan, Treichville</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-muted-light">
            &copy; 2020–2026 Mainsou ESN. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-light">
            Abidjan, Côte d&apos;Ivoire
          </p>
        </div>
      </div>
    </footer>
  );
}
