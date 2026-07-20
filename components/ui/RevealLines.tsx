"use client";

import { useRef, type ElementType } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type RevealLinesProps = {
  /** Une entrée par ligne — chaque ligne est révélée sous masque */
  lines: string[];
  as?: ElementType;
  className?: string;
  /** Anime au montage (hero) plutôt qu'à l'entrée dans le viewport */
  immediate?: boolean;
  delay?: number;
};

/** Reveal de titre ligne par ligne : masque overflow-hidden + translation Y. */
export default function RevealLines({
  lines,
  as: Tag = "h2",
  className,
  immediate = false,
  delay = 0,
}: RevealLinesProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.from(ref.current.querySelectorAll("[data-line]"), {
        yPercent: reduced ? 0 : 110,
        opacity: reduced ? 0 : 1,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.09,
        delay,
        scrollTrigger: immediate
          ? undefined
          : { trigger: ref.current, start: "top 85%", once: true },
      });
    },
    { scope: ref, dependencies: [reduced] }
  );

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <span data-line className="block will-change-transform">
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
