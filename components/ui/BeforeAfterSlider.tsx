"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  alt: string;
};

/**
 * Slider comparatif avant/après : poignée verticale draggable,
 * filet brass, labels AVANT / APRÈS. Accessible au clavier (role slider).
 */
export default function BeforeAfterSlider({
  before,
  after,
  alt,
}: BeforeAfterSliderProps) {
  const [percent, setPercent] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(96, Math.max(4, p)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPercent((p) => Math.max(4, p - 4));
    if (e.key === "ArrowRight") setPercent((p) => Math.min(96, p + 4));
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className="relative aspect-[3/2] w-full cursor-ew-resize touch-none select-none overflow-hidden"
    >
      <Image
        src={after}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 1200px"
        className="pointer-events-none object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <Image
          src={before}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-6 top-6 font-sans text-label font-medium uppercase text-chalk [text-shadow:0_0_12px_rgba(28,26,23,0.5)]">
        Avant
      </span>
      <span className="pointer-events-none absolute right-6 top-6 font-sans text-label font-medium uppercase text-chalk [text-shadow:0_0_12px_rgba(28,26,23,0.5)]">
        Après
      </span>

      <div
        role="slider"
        tabIndex={0}
        aria-label="Comparer avant et après"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
        onKeyDown={onKeyDown}
        className="absolute inset-y-0 w-px bg-brass focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass"
        style={{ left: `${percent}%` }}
      >
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-brass bg-ink/40 font-sans text-body-sm text-chalk backdrop-blur-[2px]"
        >
          ↔
        </span>
      </div>
    </div>
  );
}
