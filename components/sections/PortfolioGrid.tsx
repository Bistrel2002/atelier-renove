"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

/**
 * Portfolio de l'accueil : grille asymétrique (7 colonnes / 4 colonnes
 * décalées) avec parallaxe différentiel — chaque image monte à sa vitesse.
 */
export default function PortfolioGrid() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const featured = projects.slice(0, 4);

  useGSAP(
    () => {
      if (!ref.current || reduced) return;
      ref.current
        .querySelectorAll<HTMLElement>("[data-parallax]")
        .forEach((el) => {
          gsap.to(el, {
            y: () => -Number(el.dataset.parallax) * window.innerHeight * 0.01,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
    },
    { scope: ref, dependencies: [reduced] }
  );

  return (
    <section ref={ref} className="overflow-hidden bg-chalk py-section">
      <div className="mx-auto max-w-container px-gutter">
        <SectionLabel num="03">Réalisations</SectionLabel>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-20">
          {featured.map((project, i) => {
            const wide = i % 2 === 0;
            return (
              <div
                key={project.slug}
                data-parallax={wide ? 4 : 9}
                className={
                  wide
                    ? "col-span-12 md:col-span-7"
                    : "col-span-12 md:col-span-4 md:col-start-9 md:mt-24"
                }
              >
                <Reveal>
                  <ProjectCard
                    project={project}
                    sizes={
                      wide
                        ? "(max-width: 768px) 100vw, 58vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                  />
                </Reveal>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-24 flex justify-center">
          <Button variant="secondary" href="/realisations">
            Toutes nos réalisations
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
