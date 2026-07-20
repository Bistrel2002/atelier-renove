"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import Button from "@/components/ui/Button";
import RevealLines from "@/components/ui/RevealLines";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      // Sous-titre + CTA en fade/slide décalés après le titre
      gsap.from(ref.current.querySelectorAll("[data-hero-fade]"), {
        opacity: 0,
        y: reduced ? 0 : 24,
        duration: 1,
        delay: 0.5,
        stagger: 0.12,
        ease: "power3.out",
      });
      if (!reduced) {
        // Parallaxe subtile sur l'image de fond
        gsap.to(ref.current.querySelector("[data-hero-img]"), {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        // Indicateur de scroll : filet brass vertical animé
        gsap.fromTo(
          ref.current.querySelector("[data-scroll-hint]"),
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            duration: 1.4,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      }
    },
    { scope: ref, dependencies: [reduced] }
  );

  return (
    <section ref={ref} className="relative flex h-svh items-end overflow-hidden">
      <div data-hero-img className="absolute inset-0 scale-[1.08]">
        <Image
          src="/images/hero.jpg"
          alt="Séjour ouvert rénové par Atelier Rénove, matériaux naturels et lumière traversante"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Voile ink 20 % pour la lisibilité du titre */}
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      <div className="relative mx-auto w-full max-w-container px-gutter pb-20">
        <RevealLines
          as="h1"
          immediate
          lines={["Nous redonnons vie", "à vos espaces."]}
          className="max-w-5xl font-display text-display-xl text-chalk"
        />
        <p
          data-hero-fade
          className="mt-8 max-w-md font-sans text-body-lg text-chalk/90"
        >
          Rénovation haut de gamme d&apos;appartements et de maisons — conçue,
          fabriquée et posée par nos ateliers.
        </p>
        <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-8">
          <Button href="/contact">Demander un devis</Button>
          <span className="font-sans text-label font-medium uppercase text-chalk/70">
            Devis gratuit sous 48h
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-gutter hidden h-24 w-px lg:block"
      >
        <span data-scroll-hint className="block h-full w-full bg-brass" />
      </div>
    </section>
  );
}
