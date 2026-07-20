/**
 * Séquence scroll-driven (section 2 bis de l'accueil).
 * Frames générées par `npm run assets` (scripts/process-assets.sh)
 * à partir de la vidéo de transformation dans assets/.
 * Si la vidéo source change, relancer le script et reporter ici
 * le nombre de frames qu'il affiche.
 */
export const sequence = {
  frameCount: 84,
  /** Pattern zéro-paddé sur 4 chiffres, ex. /sequence/frame_0001.webp */
  urlForFrame: (index: number): string =>
    `/sequence/frame_${String(index + 1).padStart(4, "0")}.webp`,
  /** Fallback premier paint + prefers-reduced-motion */
  poster: "/sequence/poster.jpg",
  posterAlt:
    "Loft en cours de transformation, de l'espace brut au volume rénové",
  width: 1600,
  height: 900,
} as const;
