import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

type CtaDevisProps = {
  title?: string;
};

/** CTA fort : fond forest, grande accroche, bouton primary. */
export default function CtaDevis({
  title = "Et si votre projet commençait par un simple échange ?",
}: CtaDevisProps) {
  return (
    <section className="bg-forest py-section text-chalk">
      <Reveal className="mx-auto max-w-container px-gutter">
        <p className="font-sans text-label font-medium uppercase text-brass">
          Devis gratuit sous 48h
        </p>
        <h2 className="mt-6 max-w-4xl font-display text-display-lg">{title}</h2>
        <div className="mt-12">
          <Button href="/contact">Demander un devis</Button>
        </div>
      </Reveal>
    </section>
  );
}
