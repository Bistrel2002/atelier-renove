import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/types";

type ProjectCardProps = {
  project: Project;
  /** Priorité de chargement pour les cartes au-dessus de la ligne de flottaison */
  priority?: boolean;
  sizes?: string;
};

/**
 * Carte projet : l'image seule fait l'objet — pas de bordure,
 * pas d'ombre, pas de fond. Curseur custom « Voir le projet ».
 */
export default function ProjectCard({
  project,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ProjectCardProps) {
  const ratio = project.ratio === "portrait" ? "aspect-[4/5]" : "aspect-[3/2]";
  return (
    <Link
      href={`/realisations/${project.slug}`}
      data-cursor="Voir le projet"
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass"
    >
      <div className={`relative overflow-hidden ${ratio}`}>
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <h3 className="mt-5 font-display text-display-md text-ink">
        {project.title}
      </h3>
      <p className="mt-1 font-sans text-body-sm text-ink-muted">
        {project.location} · {project.year} · {project.surface}
      </p>
    </Link>
  );
}
