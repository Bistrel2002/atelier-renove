"use client";

import { useId, useState } from "react";

type AccordionProps = {
  items: { q: string; a: string }[];
};

/**
 * Accordéon minimal : filets `line`, +/− en brass,
 * animation de hauteur 400ms via grid-template-rows.
 */
export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`${baseId}-panel-${i}`}
              className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass"
            >
              <span className="font-display text-display-md text-ink">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 font-sans text-body-lg text-brass"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={`${baseId}-panel-${i}`}
              className={`grid transition-[grid-template-rows] duration-400 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-prose pb-8 font-sans text-body text-ink-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
