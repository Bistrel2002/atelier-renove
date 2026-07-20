type SectionLabelProps = {
  num: string;
  children: string;
  /** Couleurs inversées pour les fonds sombres (ink / forest) */
  onDark?: boolean;
};

/** Ouvre chaque section majeure : `01 — NOTRE APPROCHE` + filet. */
export default function SectionLabel({
  num,
  children,
  onDark = false,
}: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-4 font-sans text-label font-medium uppercase ${
        onDark ? "text-chalk/60" : "text-ink-muted"
      }`}
    >
      <span className="text-brass">{num}</span>
      <span aria-hidden="true">—</span>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={`ml-4 h-px flex-1 ${onDark ? "bg-line-light" : "bg-line"}`}
      />
    </p>
  );
}
