"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type RevealProps = {
  children: React.ReactNode;
  /** Sélecteur des enfants à animer en stagger ; sinon anime le bloc entier */
  stagger?: string;
  y?: number;
  delay?: number;
  className?: string;
};

/**
 * Fade + translation Y à l'entrée dans le viewport.
 * Utilise gsap.from : sans JavaScript ou en reduced-motion,
 * le contenu reste simplement visible (fade conservé en reduced-motion).
 */
export default function Reveal({
  children,
  stagger,
  y = 32,
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      const targets = stagger
        ? ref.current.querySelectorAll(stagger)
        : ref.current;
      gsap.from(targets, {
        opacity: 0,
        y: reduced ? 0 : y,
        duration: 1,
        delay,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [reduced] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
