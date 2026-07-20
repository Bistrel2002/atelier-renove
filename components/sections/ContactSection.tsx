import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import ZoneMap from "@/components/sections/ZoneMap";
import { site } from "@/data/site";

type ContactSectionProps = {
  /** Numéro de section sur l'accueil ; masqué sur /contact */
  num?: string;
  background?: "chalk" | "sand";
};

/**
 * Formulaire de devis 2 colonnes : formulaire à gauche,
 * coordonnées + zone d'intervention décalées à droite.
 */
export default function ContactSection({
  num,
  background = "chalk",
}: ContactSectionProps) {
  return (
    <section
      id="devis"
      className={`${background === "sand" ? "bg-sand" : "bg-chalk"} py-section`}
    >
      <div className="mx-auto max-w-container px-gutter">
        {num && <SectionLabel num={num}>Demander un devis</SectionLabel>}

        <div className={`grid grid-cols-12 gap-x-6 gap-y-20 ${num ? "mt-16" : ""}`}>
          <Reveal className="col-span-12 lg:col-span-7">
            {num && (
              <h2 className="mb-12 max-w-2xl font-display text-display-lg text-ink">
                Parlez-nous de votre projet.
              </h2>
            )}
            <ContactForm />
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9 lg:mt-16">
            <ZoneMap />
            <dl className="mt-12 space-y-8">
              <div>
                <dt className="font-sans text-label font-medium uppercase text-ink-muted">
                  Adresse
                </dt>
                <dd className="mt-2 font-sans text-body text-ink">
                  {site.address.street}
                  <br />
                  {site.address.city}
                </dd>
              </div>
              <div>
                <dt className="font-sans text-label font-medium uppercase text-ink-muted">
                  Téléphone
                </dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="font-sans text-body text-ink transition-colors duration-300 hover:text-clay"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-sans text-label font-medium uppercase text-ink-muted">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="font-sans text-body text-ink transition-colors duration-300 hover:text-clay"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-sans text-label font-medium uppercase text-ink-muted">
                  Horaires
                </dt>
                <dd className="mt-2 font-sans text-body text-ink">
                  {site.hours}
                </dd>
              </div>
              <div>
                <dt className="font-sans text-label font-medium uppercase text-ink-muted">
                  Zone d&apos;intervention
                </dt>
                <dd className="mt-2 max-w-prose font-sans text-body text-ink-muted">
                  {site.zone}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
