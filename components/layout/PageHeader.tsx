import Reveal from "@/components/ui/Reveal";

type PageHeaderProps = {
  breadcrumb: string;
  title: string;
  chapo?: string;
};

/**
 * Gabarit d'en-tête commun aux sous-pages :
 * fil d'Ariane → titre display-xl → chapô 6 colonnes → filet brass.
 */
export default function PageHeader({
  breadcrumb,
  title,
  chapo,
}: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-container px-gutter pt-page-top">
      <Reveal stagger="[data-reveal]">
        <p
          data-reveal
          className="font-sans text-label font-medium uppercase text-ink-muted"
        >
          {breadcrumb}
        </p>
        <h1
          data-reveal
          className="mt-6 font-display text-display-xl text-ink"
        >
          {title}
        </h1>
        {chapo && (
          <div data-reveal className="mt-8 grid grid-cols-12 gap-x-6">
            <p className="col-span-12 font-sans text-body-lg text-ink-muted md:col-span-6">
              {chapo}
            </p>
          </div>
        )}
        <div data-reveal aria-hidden="true" className="mt-12 h-px bg-brass" />
      </Reveal>
    </div>
  );
}
