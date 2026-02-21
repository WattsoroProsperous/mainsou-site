import Image from "next/image";

const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Partenaires", href: "#partenaires" },
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
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/logo/logo.png"
                alt="Mainsou ESN"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="font-heading text-base font-bold text-foreground">
                Mainsou <span className="text-accent">ESN</span>
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Entreprise ivoirienne de services numériques. Innovation, qualité
              et accompagnement sur mesure depuis 2020.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <a href="tel:+2250143848821" className="hover:text-accent transition-colors">
                  +225 01 438 488 21
                </a>
              </li>
              <li>
                <a href="mailto:wolomainsou@gmail.com" className="hover:text-accent transition-colors">
                  wolomainsou@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://mainsou-esn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  mainsou-esn.com
                </a>
              </li>
              <li>Abidjan, Treichville</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-light">
            &copy; 2020–2025 Mainsou ESN. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-light">
            Abidjan, Côte d&apos;Ivoire
          </p>
        </div>
      </div>
    </footer>
  );
}
