"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/data/content";

/**
 * Processus : ligne verticale brass qui se « dessine » au scroll (scaleY),
 * chaque étape s'active à son passage.
 */
export default function ProcessTimeline() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reduced) return;
      const list = ref.current.querySelector("[data-timeline]");
      gsap.fromTo(
        ref.current.querySelector("[data-line-draw]"),
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: list,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
      ref.current.querySelectorAll("[data-step]").forEach((step) => {
        gsap.from(step, {
          opacity: 0.25,
          x: 24,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 70%", once: true },
        });
      });
    },
    { scope: ref, dependencies: [reduced] }
  );

  return (
    <section ref={ref} className="bg-sand py-section">
      <div className="mx-auto max-w-container px-gutter">
        <SectionLabel num="04">Notre processus</SectionLabel>

        <div data-timeline className="relative mt-20 grid grid-cols-12 gap-x-6">
          {/* Ligne verticale qui se trace */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-px bg-line md:left-[8.333%]"
          >
            <span data-line-draw className="block h-full w-full bg-brass" />
          </div>

          <ol className="col-span-11 col-start-2 space-y-20 md:col-span-8 md:col-start-3">
            {processSteps.map((step) => (
              <li key={step.num} data-step className="relative">
                <span className="font-sans text-label font-medium uppercase text-brass">
                  {step.num}
                </span>
                <h3 className="mt-2 font-display text-display-md text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-prose font-sans text-body text-ink-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
