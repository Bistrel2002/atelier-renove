/**
 * Carte de zone d'intervention stylisée, monochrome, aux couleurs du site
 * (pas de carte tierce criarde). Marqueur clay sur l'atelier, anneaux
 * concentriques figurant le rayon d'intervention.
 */
export default function ZoneMap() {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Zone d'intervention : Paris et Île-de-France"
      className="w-full border border-line bg-sand"
    >
      {/* Trame de fond façon plan */}
      <g stroke="rgba(28,26,23,0.08)" strokeWidth="1">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`v${i}`} x1={40 + i * 40} y1="0" x2={40 + i * 40} y2="300" />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={30 + i * 40} x2="400" y2={30 + i * 40} />
        ))}
      </g>
      {/* La Seine, d'un trait */}
      <path
        d="M0 210 C 80 190, 120 230, 200 200 S 320 130, 400 150"
        fill="none"
        stroke="rgba(28,26,23,0.2)"
        strokeWidth="2"
      />
      {/* Rayons d'intervention */}
      <g fill="none" stroke="#A8894F">
        <circle cx="200" cy="150" r="46" strokeWidth="1" opacity="0.9" />
        <circle cx="200" cy="150" r="92" strokeWidth="1" opacity="0.45" strokeDasharray="3 5" />
        <circle cx="200" cy="150" r="136" strokeWidth="1" opacity="0.25" strokeDasharray="2 7" />
      </g>
      {/* Marqueur atelier */}
      <circle cx="200" cy="150" r="6" fill="#B4522D" />
      <text
        x="214"
        y="144"
        fontFamily="var(--font-sans), sans-serif"
        fontSize="11"
        letterSpacing="2"
        fill="#1C1A17"
      >
        PARIS 10ᵉ
      </text>
      <text
        x="214"
        y="160"
        fontFamily="var(--font-sans), sans-serif"
        fontSize="9"
        letterSpacing="1.5"
        fill="#6B655C"
      >
        L&apos;ATELIER
      </text>
    </svg>
  );
}
