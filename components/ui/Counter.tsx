"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/** Compteur animé une seule fois à l'entrée dans le viewport. */
export default function Counter({
  value,
  prefix = "",
  suffix = "",
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reduced) return;
      const state = { n: 0 };
      const el = ref.current.querySelector("[data-value]");
      gsap.to(state, {
        n: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        onUpdate: () => {
          if (el) el.textContent = String(Math.round(state.n));
        },
      });
    },
    { scope: ref, dependencies: [reduced, value] }
  );

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {prefix}
      {/* Valeur finale rendue côté serveur : reste juste sans JS / reduced-motion */}
      <span data-value>{reduced ? value : value}</span>
      {suffix}
    </span>
  );
}
