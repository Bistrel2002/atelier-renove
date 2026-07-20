import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaDevis from "@/components/sections/CtaDevis";
import { team, values } from "@/data/content";
import { trustLabels } from "@/data/content";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Quinze ans de rénovation haut de gamme : un bureau d'études et des compagnons réunis sous le même toit, à Paris.",
};

const certifications = [
  {
    name: trustLabels[0],
    text: "La certification Reconnu Garant de l'Environnement ouvre droit aux aides publiques pour vos travaux énergétiques.",
  },
  {
    name: trustLabels[1],
    text: "Qualibat atteste chaque année de nos qualifications techniques et de notre santé financière.",
  },
  {
    name: trustLabels[2],
    text: "Tous nos ouvrages structurels sont couverts dix ans, assurance souscrite auprès d'un assureur français de premier rang.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Accueil — À propos"
        title="L'atelier derrière les chantiers"
        chapo="Atelier Rénove est né en 2011 dans une cour du 10ᵉ arrondissement, autour d'une conviction simple : on rénove mieux quand ceux qui dessinent et ceux qui construisent partagent le même toit."
      />

      {/* Hero éditorial 16:9 */}
      <Reveal className="mx-auto max-w-container px-gutter pt-16">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src="/images/escalier.jpg"
            alt="Escalier en pierre aux détails de laiton, signature de l'atelier"
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover"
          />
        </div>
      </Reveal>

      {/* Notre histoire : texte long décalé, images en marge */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-gutter">
          <SectionLabel num="01">Notre histoire</SectionLabel>
          <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-12">
            <Reveal className="col-span-12 space-y-6 md:col-span-6 md:col-start-3">
              <p className="font-sans text-body-lg text-ink">
                Tout commence par un escalier. En 2011, Antoine Vasseur,
                architecte d&apos;intérieur, cherche un tailleur de pierre capable
                de reprendre les marches d&apos;un hôtel particulier — et n&apos;en
                trouve pas qui accepte de travailler avec un bureau d&apos;études.
                Il décide alors de réunir les deux sous le même toit.
              </p>
              <p className="font-sans text-body text-ink-muted">
                Quinze ans plus tard, l&apos;atelier compte vingt-deux compagnons —
                maçons, menuisiers, plombiers, peintres — et un bureau d&apos;études
                intégré. Cette organisation, rare dans le bâtiment, est notre
                vraie signature : les décisions se prennent en heures et non en
                semaines, et les détails se règlent entre personnes qui se
                connaissent.
              </p>
              <p className="font-sans text-body text-ink-muted">
                Nous menons une quinzaine de chantiers par an, jamais plus.
                C&apos;est le rythme qui permet à chaque projet d&apos;être suivi par
                les mêmes personnes du premier relevé à la visite des six mois.
              </p>
            </Reveal>
            {/* Image en marge, débordant de la colonne de texte */}
            <Reveal className="col-span-8 md:col-span-3 md:col-start-10 md:-mt-24">
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/cuisine-noyer.jpg"
                    alt="Détail d'assemblage en noyer réalisé à l'atelier"
                    fill
                    sizes="(max-width: 768px) 66vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-sans text-body-sm text-ink-muted">
                  Assemblages en noyer, atelier de Pantin.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valeurs : 3 blocs numérotés, texte seul */}
      <section className="bg-sand py-section">
        <div className="mx-auto max-w-container px-gutter">
          <SectionLabel num="02">Ce qui ne se négocie pas</SectionLabel>
          <Reveal stagger="[data-value]" className="mt-16 grid gap-16 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.num} data-value>
                <span className="font-sans text-label font-medium uppercase text-brass">
                  {v.num}
                </span>
                <h3 className="mt-4 font-display text-display-md text-ink">
                  {v.title}
                </h3>
                <p className="mt-4 font-sans text-body text-ink-muted">
                  {v.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Équipe : blocs typographiques (portraits à venir) */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-gutter">
          <SectionLabel num="03">L&apos;équipe</SectionLabel>
          <Reveal stagger="[data-member]" className="mt-16 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <div
                key={member.name}
                data-member
                className={i % 2 === 1 ? "lg:mt-16" : ""}
              >
                <div className="flex aspect-[4/5] items-end border border-line bg-sand p-6">
                  <span
                    aria-hidden="true"
                    className="font-display text-display-lg text-brass"
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-display-md text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 font-sans text-label font-medium uppercase text-ink-muted">
                  {member.role}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="pb-section">
        <div className="mx-auto max-w-container px-gutter">
          <SectionLabel num="04">Certifications & garanties</SectionLabel>
          <Reveal stagger="[data-cert]" className="mt-12 grid gap-10 border-t border-line md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
            {certifications.map((c) => (
              <div key={c.name} data-cert className="pt-8 md:px-10 md:first:pl-0">
                <p className="font-display text-display-md text-ink">{c.name}</p>
                <p className="mt-3 font-sans text-body-sm text-ink-muted">
                  {c.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaDevis title="Rencontrons-nous, à l'atelier ou chez vous." />
    </>
  );
}
