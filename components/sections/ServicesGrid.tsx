import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

/**
 * Services de l'accueil : grille 2×2 décalée verticalement
 * (colonne droite descendue), jamais 3 colonnes alignées.
 */
export default function ServicesGrid() {
  return (
    <section className="bg-sand py-section">
      <div className="mx-auto max-w-container px-gutter">
        <SectionLabel num="02">Nos services</SectionLabel>
        <Reveal
          stagger="[data-card]"
          className="mt-16 grid gap-x-6 gap-y-16 md:grid-cols-2"
        >
          {services.map((service, i) => (
            <article
              key={service.slug}
              data-card
              className={i % 2 === 1 ? "md:translate-y-24" : ""}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.hero}
                    alt={service.heroAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-6 font-sans text-label font-medium uppercase text-brass">
                  {service.num}
                </p>
                <h3 className="mt-2 font-display text-display-md text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-prose font-sans text-body text-ink-muted">
                  {service.short}
                </p>
                <span className="relative mt-5 inline-block font-sans text-body font-medium text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-brass after:transition-transform after:duration-400 after:ease-out group-hover:after:origin-left group-hover:after:scale-x-100">
                  En savoir plus
                </span>
              </Link>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
