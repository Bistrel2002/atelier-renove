"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { approach } from "@/data/content";

/** Entoure les mots-clés d'un span animable. */
function markHighlights(text: string, words: readonly string[]): ReactNode[] {
  const pattern = new RegExp(`(${words.join("|")})`, "g");
  return text.split(pattern).map((part, i) =>
    words.includes(part) ? (
      <span key={i} data-highlight className="transition-colors">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function Approach() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reduced) return;
      // Mise en évidence progressive des mots-clés au scroll
      gsap.to(ref.current.querySelectorAll("[data-highlight]"), {
        color: "#B4522D",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 60%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    },
    { scope: ref, dependencies: [reduced] }
  );

  return (
    <section ref={ref} className="bg-chalk py-section">
      <div className="mx-auto max-w-container px-gutter">
        <SectionLabel num="01">Notre approche</SectionLabel>
        <Reveal className="mt-16 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 space-y-8 md:col-span-7 md:col-start-4">
            {approach.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-display text-display-md leading-[1.25] text-ink"
              >
                {markHighlights(p, approach.highlights)}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
