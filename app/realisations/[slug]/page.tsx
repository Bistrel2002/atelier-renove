import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import SectionLabel from "@/components/ui/SectionLabel";
import { adjacentProjects, getProject, projects } from "@/data/projects";
import { serviceLabels } from "@/data/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.location}`,
    description: project.excerpt,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = adjacentProjects(slug);

  const meta = [
    { label: "Lieu", value: project.location },
    { label: "Année", value: String(project.year) },
    { label: "Surface", value: project.surface },
    { label: "Durée", value: project.duration },
    { label: "Budget indicatif", value: project.budget },
  ];

  const pairs = project.gallery.filter((g) => g.layout === "pair");
  const fulls = project.gallery.filter((g) => g.layout === "full");
  const portraits = project.gallery.filter((g) => g.layout === "portrait");

  return (
    <article>
      {/* 1. Hero projet : image plein écran, titre en overlay bas gauche */}
      <header className="relative h-[80svh] min-h-[480px]">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-container px-gutter pb-16">
          <p className="font-sans text-label font-medium uppercase text-brass">
            {serviceLabels[project.category]}
          </p>
          <h1 className="mt-4 font-display text-display-xl text-chalk">
            {project.title}
          </h1>
        </div>
      </header>

      {/* 2. Méta : bande de chiffres clés sur filets */}
      <Reveal className="mx-auto max-w-container px-gutter">
        <dl className="grid grid-cols-2 border-b border-line py-10 sm:grid-cols-3 md:grid-cols-5 md:divide-x md:divide-line">
          {meta.map((m) => (
            <div key={m.label} className="py-3 md:px-8 md:py-0 md:first:pl-0">
              <dt className="font-sans text-label font-medium uppercase text-ink-muted">
                {m.label}
              </dt>
              <dd className="mt-2 font-sans text-body tabular-nums text-ink">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* 3. Le brief : texte éditorial décalé */}
      <Reveal className="mx-auto max-w-container px-gutter py-section">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 space-y-8 md:col-span-6 md:col-start-3">
            <p className="font-sans text-label font-medium uppercase text-ink-muted">
              Le brief
            </p>
            {project.brief.map((p, i) => (
              <p key={i} className="font-sans text-body-lg text-ink">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 4. Avant / Après */}
      {project.beforeAfter && (
        <Reveal className="mx-auto max-w-container px-gutter pb-section">
          <SectionLabel num="01">Avant / Après</SectionLabel>
          <div className="mt-12">
            <BeforeAfterSlider
              before={project.beforeAfter.before}
              after={project.beforeAfter.after}
              alt={project.beforeAfter.alt}
            />
          </div>
        </Reveal>
      )}

      {/* 5. Galerie : plein cadre / paires / portrait décalé */}
      <div className="mx-auto max-w-container space-y-20 px-gutter pb-section">
        {fulls.map((img) => (
          <Reveal key={img.src + img.caption}>
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1440px) 100vw, 1440px"
                  className="object-cover"
                />
              </div>
              {img.caption && (
                <figcaption className="mt-3 font-sans text-body-sm text-ink-muted">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          </Reveal>
        ))}

        {pairs.length > 0 && (
          <Reveal stagger="figure" className="grid gap-6 md:grid-cols-2">
            {pairs.map((img) => (
              <figure key={img.src + img.caption}>
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                {img.caption && (
                  <figcaption className="mt-3 font-sans text-body-sm text-ink-muted">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </Reveal>
        )}

        {portraits.map((img) => (
          <Reveal key={img.src + img.caption} className="grid grid-cols-12 gap-x-6">
            <figure className="col-span-12 md:col-span-5 md:col-start-7">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              {img.caption && (
                <figcaption className="mt-3 font-sans text-body-sm text-ink-muted">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          </Reveal>
        ))}
      </div>

      {/* 6. Détails matériaux */}
      <Reveal className="mx-auto max-w-container px-gutter pb-section">
        <SectionLabel num="02">Matériaux</SectionLabel>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
          {project.materials.map((m) => (
            <figure key={m.name}>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={m.src}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 font-sans text-label font-medium uppercase text-ink-muted">
                {m.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      {/* 7. Témoignage du projet */}
      {project.testimonial && (
        <section className="bg-sand py-section">
          <Reveal className="mx-auto max-w-container px-gutter">
            <span
              aria-hidden="true"
              className="block font-display text-[clamp(3rem,6vw,5rem)] leading-none text-brass"
            >
              «
            </span>
            <blockquote className="mt-2 max-w-4xl font-display text-display-md text-ink">
              {project.testimonial.quote}
            </blockquote>
            <p className="mt-6 font-sans text-body-sm text-ink-muted">
              {project.testimonial.author}
            </p>
          </Reveal>
        </section>
      )}

      {/* 8. Navigation projet précédent / suivant */}
      <nav aria-label="Autres projets" className="grid md:grid-cols-2">
        {[
          { p: prev, label: "Projet précédent" },
          { p: next, label: "Projet suivant" },
        ].map(({ p, label }) => (
          <Link
            key={label}
            href={`/realisations/${p.slug}`}
            className="group relative overflow-hidden border-t border-line px-gutter py-16 md:border-r md:last:border-r-0"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
            >
              <Image src={p.cover} alt="" fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0 bg-ink/60" />
            </div>
            <div className="relative">
              <p className="font-sans text-label font-medium uppercase text-ink-muted transition-colors duration-500 group-hover:text-brass">
                {label}
              </p>
              <p className="mt-3 font-display text-display-md text-ink transition-colors duration-500 group-hover:text-chalk">
                {p.title}
              </p>
            </div>
          </Link>
        ))}
      </nav>

      {/* 9. CTA */}
      <section className="bg-forest py-section text-chalk">
        <Reveal className="mx-auto max-w-container px-gutter">
          <h2 className="max-w-3xl font-display text-display-lg">
            Un projet similaire ?
          </h2>
          <div className="mt-10">
            <Button href="/contact">Demander un devis</Button>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
