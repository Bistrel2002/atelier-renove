import Link from "next/link";
import { site } from "@/data/site";
import BrassLine from "@/components/layout/BrassLine";

export default function Footer() {
  return (
    <footer className="bg-ink text-chalk">
      <BrassLine />
      <div className="mx-auto max-w-container px-gutter py-20">
        <p className="font-display text-display-lg">{site.name}</p>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <nav aria-label="Navigation pied de page">
            <p className="font-sans text-label font-medium uppercase text-brass">
              Naviguer
            </p>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-body-sm text-chalk/70 transition-colors duration-300 hover:text-chalk"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-sans text-label font-medium uppercase text-brass">
              Coordonnées
            </p>
            <ul className="mt-5 space-y-3 font-sans text-body-sm text-chalk/70">
              <li>
                {site.address.street}, {site.address.city}
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-300 hover:text-chalk"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors duration-300 hover:text-chalk"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sans text-label font-medium uppercase text-brass">
              Suivre
            </p>
            <ul className="mt-5 space-y-3">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-body-sm text-chalk/70 transition-colors duration-300 hover:text-chalk"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-line-light pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-body-sm text-chalk/50">
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <Link
              href="/mentions-legales"
              className="font-sans text-body-sm text-chalk/50 transition-colors duration-300 hover:text-chalk"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="font-sans text-body-sm text-chalk/50 transition-colors duration-300 hover:text-chalk"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
