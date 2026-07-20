"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { sequence } from "@/data/sequence";

/**
 * Séquence avant → après jouée au rythme du scroll.
 * Rendu sur <canvas> à partir de frames préchargées (jamais de scrubbing
 * de <video>.currentTime). Pin ScrollTrigger, dessin dans un rAF qui ne
 * redessine que si l'index change, gestion resize + devicePixelRatio,
 * object-fit: cover manuel.
 */
export default function ScrollSequence() {
  const reduced = useReducedMotion();
  if (reduced) return <StaticFallback />;
  return <CanvasSequence />;
}

/**
 * Textes posés sur la vidéo, révélés de gauche à droite au fil du scroll :
 * « Avant » à gauche, « Le chantier » au centre, « Après » à droite.
 * Chaque bloc glisse de la gauche en fondu quand sa fenêtre de
 * progression arrive (voir CAPTION_FADE dans le ScrollTrigger).
 */
const captions = [
  {
    label: "Avant",
    text: "L'existant, mis à nu.",
    from: 0,
    to: 0.24,
    position: "left-gutter text-left",
  },
  {
    label: "Le chantier",
    text: "La matière, travaillée.",
    from: 0.4,
    to: 0.6,
    position: "left-1/2 -translate-x-1/2 text-center",
  },
  {
    label: "Après",
    text: "L'espace, révélé.",
    from: 0.78,
    to: 1,
    position: "right-gutter text-right",
  },
] as const;

function StaticFallback() {
  return (
    <section className="relative">
      <div className="relative aspect-video w-full">
        <Image
          src={sequence.poster}
          alt={sequence.posterAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/25" />
      </div>
      {/* Sans animation, seuls les deux temps forts sont posés sur l'image */}
      {[captions[0], captions[2]].map((c) => (
        <Caption key={c.label} caption={c} visible />
      ))}
    </section>
  );
}

function Caption({
  caption,
  visible = false,
  index,
}: {
  caption: (typeof captions)[number];
  visible?: boolean;
  index?: number;
}) {
  return (
    <div
      data-caption={index}
      className={`pointer-events-none absolute bottom-[15%] max-w-md ${caption.position}`}
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div data-caption-inner>
        <p className="font-sans text-label font-medium uppercase tracking-[0.18em] text-brass">
          {caption.label}
        </p>
        <p className="mt-3 font-display text-display-lg leading-tight text-chalk">
          {caption.text}
        </p>
      </div>
    </div>
  );
}

function CanvasSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const frameRef = useRef(0);
  const drawnRef = useRef(-1);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  // Préchargement : les premières frames en priorité, le reste en arrière-plan.
  useEffect(() => {
    const images: (HTMLImageElement | null)[] = new Array(
      sequence.frameCount
    ).fill(null);
    imagesRef.current = images;
    let cancelled = false;

    const load = (i: number) =>
      new Promise<void>((resolve) => {
        const img = new window.Image();
        img.src = sequence.urlForFrame(i);
        img.decode().then(
          () => {
            if (!cancelled) {
              images[i] = img;
              if (i === 0) setFirstFrameReady(true);
            }
            resolve();
          },
          () => resolve()
        );
      });

    (async () => {
      await load(0);
      // Grille grossière d'abord (1 frame sur 8) pour couvrir toute la plage…
      for (let i = 8; i < sequence.frameCount; i += 8) await load(i);
      // …puis remplissage complet.
      for (let i = 1; i < sequence.frameCount; i++) {
        if (cancelled) return;
        if (!images[i]) await load(i);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Dessin cover + DPR
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawnRef.current = -1; // force un redraw à la bonne taille
    };

    const draw = () => {
      const index = frameRef.current;
      if (index !== drawnRef.current) {
        // Frame la plus proche déjà chargée (≤ index) pour éviter tout flash
        let img: HTMLImageElement | null = null;
        for (let i = index; i >= 0; i--) {
          if (imagesRef.current[i]) {
            img = imagesRef.current[i];
            break;
          }
        }
        if (img) {
          const w = canvas.clientWidth;
          const h = canvas.clientHeight;
          const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
          const dw = img.naturalWidth * scale;
          const dh = img.naturalHeight * scale;
          ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
          drawnRef.current = index;
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    let raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [firstFrameReady]);

  // Pin + mapping progression → index de frame + textes gauche → droite
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;
      const captionEls = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-caption]")
      );
      const CAPTION_FADE = 0.08; // largeur des fondus autour de chaque fenêtre

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=250%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          frameRef.current = Math.min(
            sequence.frameCount - 1,
            Math.round(p * (sequence.frameCount - 1))
          );
          // Chaque texte est plein sur [from ; to], en fondu sur ±CAPTION_FADE,
          // et glisse de la gauche (−40px) vers sa place pendant l'entrée.
          captionEls.forEach((el, i) => {
            const { from, to } = captions[i];
            const fadeIn = gsap.utils.clamp(
              0,
              1,
              (p - (from - CAPTION_FADE)) / CAPTION_FADE
            );
            const fadeOut = gsap.utils.clamp(0, 1, (to + CAPTION_FADE - p) / CAPTION_FADE);
            el.style.opacity = String(Math.min(fadeIn, fadeOut));
            const inner = el.querySelector<HTMLElement>("[data-caption-inner]");
            if (inner) {
              inner.style.transform = `translateX(${(fadeIn - 1) * 40}px)`;
            }
          });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-label={sequence.posterAlt}
      className="relative h-screen overflow-hidden bg-ink"
    >
      {/* Poster en premier paint, remplacé dès que le canvas dessine */}
      {!firstFrameReady && (
        <>
          <Image
            src={sequence.poster}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-label uppercase text-chalk/50">
            Chargement
          </p>
        </>
      )}
      <canvas ref={canvasRef} className="h-full w-full" />
      {captions.map((c, i) => (
        <Caption key={c.label} caption={c} index={i} visible={i === 0} />
      ))}
    </section>
  );
}
