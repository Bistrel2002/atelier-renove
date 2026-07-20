import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaDevis from "@/components/sections/CtaDevis";
import { getService, services } from "@/data/services";
import { projects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = projects.filter((p) => p.category === service.slug).slice(0, 3);

  return (
    <article>
      {/* 1. Hero : titre + chapô, image 16:9 en dessous */}
      <div className="mx-auto max-w-container px-gutter pt-page-top">
        <Reveal stagger="[data-reveal]">
          <p
            data-reveal
            className="font-sans text-label font-medium uppercase text-ink-muted"
          >
            Accueil — Services — {service.title}
          </p>
          <h1 data-reveal className="mt-6 font-display text-display-xl text-ink">
            {service.title}
          </h1>
          <div data-reveal className="mt-8 grid grid-cols-12 gap-x-6">
            <p className="col-span-12 font-sans text-body-lg text-ink-muted md:col-span-6">
              {service.chapo}
            </p>
          </div>
        </Reveal>
        <Reveal className="mt-16">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={service.hero}
              alt={service.heroAlt}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* 2. Ce que ça comprend : puces = filets brass courts */}
      <Reveal className="mx-auto max-w-container px-gutter py-section">
        <SectionLabel num="01">Ce que ça comprend</SectionLabel>
        <ul className="mt-12 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {service.includes.map((item) => (
            <li key={item} className="flex items-baseline gap-4">
              <span aria-hidden="true" className="h-px w-6 shrink-0 self-center bg-brass" />
              <span className="font-sans text-body text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* 3. Notre méthode : étapes horizontales avec filets */}
      <section className="bg-sand py-section">
        <Reveal className="mx-auto max-w-container px-gutter">
          <SectionLabel num="02">Notre méthode</SectionLabel>
          <ol className="mt-12 grid gap-10 border-t border-line md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
            {service.method.map((step, i) => (
              <li key={step.title} className="pt-8 md:px-10 md:first:pl-0">
                <span className="font-sans text-label font-medium uppercase text-brass">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-display-md text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-body text-ink-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* 4. Projets liés */}
      {related.length > 0 && (
        <Reveal className="mx-auto max-w-container px-gutter py-section">
          <SectionLabel num="03">Projets liés</SectionLabel>
          <div className="mt-12 grid gap-x-6 gap-y-16 md:grid-cols-2">
            {related.map((p, i) => (
              <div key={p.slug} className={i % 2 === 1 ? "md:mt-24" : ""}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {/* 5. FAQ */}
      <Reveal className="mx-auto max-w-container px-gutter pb-section">
        <SectionLabel num="04">Questions fréquentes</SectionLabel>
        <div className="mt-12 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-9">
            <Accordion items={service.faq} />
          </div>
        </div>
      </Reveal>

      {/* 6. CTA devis */}
      <CtaDevis />
    </article>
  );
}
