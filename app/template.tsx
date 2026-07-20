/**
 * Transition de page : remonté à chaque navigation par l'App Router,
 * ce template rejoue le fade + translation Y d'entrée (CSS, reduced-motion géré).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
