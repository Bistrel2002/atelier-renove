/**
 * Gabarit des pages texte (mentions légales, confidentialité) :
 * titre display-lg, contenu 7 colonnes max-w-prose, fade d'entrée seul
 * (assuré par la transition de page globale).
 */
export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-container px-gutter pb-section pt-page-top">
      <h1 className="font-display text-display-lg text-ink">{title}</h1>
      <div className="mt-16 grid grid-cols-12 gap-x-6">
        <div className="col-span-12 max-w-prose space-y-6 md:col-span-7 [&_h2]:pt-6 [&_h2]:font-display [&_h2]:text-display-md [&_h2]:text-ink [&_p]:font-sans [&_p]:text-body [&_p]:text-ink-muted">
          {children}
        </div>
      </div>
    </div>
  );
}
