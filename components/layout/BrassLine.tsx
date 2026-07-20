"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

/** Filet laiton qui se trace de gauche à droite à l'entrée dans le viewport. */
export default function BrassLine() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reduced) return;
      gsap.from(ref.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 95%", once: true },
      });
    },
    { scope: ref, dependencies: [reduced] }
  );

  return <div ref={ref} aria-hidden="true" className="h-px w-full bg-brass" />;
}
