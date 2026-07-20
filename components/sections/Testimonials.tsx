"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/content";

/** Témoignages : citation serif grande taille, transition douce. */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const current = testimonials[index];

  useGSAP(
    () => {
      if (!quoteRef.current || reduced) return;
      gsap.from(quoteRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "power3.out",
      });
    },
    { scope: quoteRef, dependencies: [index, reduced] }
  );

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="bg-sand py-section">
      <div className="mx-auto max-w-container px-gutter">
        <SectionLabel num="05">Ils nous ont confié leurs murs</SectionLabel>

        <div className="mt-16 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-9 md:col-start-2">
            <span
              aria-hidden="true"
              className="block font-display text-[clamp(4rem,8vw,7rem)] leading-none text-brass"
            >
              «
            </span>
            <div ref={quoteRef} aria-live="polite">
              <blockquote className="mt-2 font-display text-display-lg text-ink">
                {current.quote}
              </blockquote>
              <p className="mt-8 font-sans text-body text-ink">
                {current.author}
                <span className="mt-1 block text-body-sm text-ink-muted">
                  {current.project}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Témoignage précédent"
            className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors duration-300 hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass"
          >
            <ArrowLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Témoignage suivant"
            className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors duration-300 hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass"
          >
            <ArrowRight size={18} strokeWidth={1.5} />
          </button>
          <span className="ml-4 font-sans text-body-sm tabular-nums text-ink-muted">
            {index + 1} / {testimonials.length}
          </span>
        </div>
      </div>
    </section>
  );
}
