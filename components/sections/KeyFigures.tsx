import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { keyFigures } from "@/data/content";

/** Chiffres clés : fond ink, chiffres display-xl chalk, labels brass. */
export default function KeyFigures() {
  return (
    <section className="bg-ink py-section text-chalk">
      <Reveal
        stagger="[data-figure]"
        className="mx-auto grid max-w-container gap-12 px-gutter md:grid-cols-3 md:gap-0 md:divide-x md:divide-line-light"
      >
        {keyFigures.map((f) => (
          <div key={f.label} data-figure className="md:px-12 md:first:pl-0">
            <p className="font-display text-display-xl">
              <Counter value={f.value} prefix={f.prefix} suffix={f.suffix} />
            </p>
            <p className="mt-3 font-sans text-label font-medium uppercase text-brass">
              {f.label}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
