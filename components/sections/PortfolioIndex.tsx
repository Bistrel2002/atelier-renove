"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { serviceLabels } from "@/data/services";
import type { ServiceSlug } from "@/data/types";

type Filter = "tous" | ServiceSlug;

const filters: { value: Filter; label: string }[] = [
  { value: "tous", label: "Tous" },
  ...(Object.entries(serviceLabels) as [ServiceSlug, string][]).map(
    ([value, label]) => ({ value, label })
  ),
];

/**
 * Index portfolio : filtres en liens ghost (l'actif en clay + filet),
 * masonry éditoriale 2 colonnes avec décalage vertical entre colonnes.
 */
export default function PortfolioIndex() {
  const [active, setActive] = useState<Filter>("tous");
  const visible =
    active === "tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="mx-auto max-w-container px-gutter pb-section pt-20">
      <nav aria-label="Filtrer les projets" className="flex flex-wrap gap-x-10 gap-y-4">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            aria-pressed={active === f.value}
            className={`relative pb-1 font-sans text-body transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-brass after:transition-transform after:duration-400 after:ease-out hover:after:origin-left hover:after:scale-x-100 ${
              active === f.value
                ? "text-clay after:origin-left after:scale-x-100"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </nav>

      <div className="mt-20 grid gap-x-6 gap-y-20 md:grid-cols-2">
        {/* key sur le filtre actif pour rejouer le stagger à chaque filtrage */}
        <Reveal
          key={active}
          stagger="[data-card]"
          className="contents"
        >
          {visible.map((project, i) => (
            <div
              key={project.slug}
              data-card
              className={i % 2 === 1 ? "md:mt-32" : ""}
            >
              <ProjectCard project={project} priority={i < 2} />
              <p className="mt-3 max-w-prose font-sans text-body-sm text-ink-muted">
                {project.excerpt}
              </p>
            </div>
          ))}
        </Reveal>
      </div>

      {visible.length === 0 && (
        <p className="mt-20 font-sans text-body text-ink-muted">
          Aucun projet publié dans cette catégorie pour le moment.
        </p>
      )}
    </section>
  );
}
