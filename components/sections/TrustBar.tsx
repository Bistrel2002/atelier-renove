import Reveal from "@/components/ui/Reveal";
import { trustLabels } from "@/data/content";

/** Bandeau de confiance : labels et certifications, sobres et estompés. */
export default function TrustBar() {
  return (
    <section aria-label="Certifications et garanties" className="bg-chalk">
      <Reveal className="mx-auto max-w-container px-gutter py-14">
        <ul className="flex flex-wrap items-center justify-center gap-y-6 divide-line md:divide-x">
          {trustLabels.map((label) => (
            <li
              key={label}
              className="flex h-8 items-center px-8 font-display text-lg tracking-wide text-ink-muted opacity-40"
            >
              {label}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
