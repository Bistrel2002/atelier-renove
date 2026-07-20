# Atelier Rénove — site vitrine premium

Site multi-pages pour une entreprise de rénovation haut de gamme.
Next.js 15 (App Router) · TypeScript strict · Tailwind CSS · GSAP + ScrollTrigger · Lenis.

## Lancer

```bash
npm install
npm run assets   # génère public/images + public/sequence depuis assets/ (nécessite ffmpeg + cwebp)
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Structure

```
app/                    Pages (App Router) : /, /realisations[/slug], /services[/slug],
                        /a-propos, /contact, /mentions-legales, /politique-confidentialite, 404
  actions/contact.ts    Server Action placeholder du formulaire (brancher email/CRM ici)
components/
  ui/                   Button, SectionLabel, ProjectCard, ServiceRow, Field, Accordion,
                        BeforeAfterSlider, CustomCursor, Reveal, RevealLines, Counter
  sections/             Sections de pages (Hero, ScrollSequence, PortfolioGrid, …)
  layout/               Header, Footer, PageHeader, LegalPage, BrassLine
lib/                    gsap.ts (plugins), SmoothScroll.tsx (Lenis), useReducedMotion.ts
data/                   Contenu typé : projets, services, témoignages, config site, séquence
public/images           Photos optimisées (générées par npm run assets)
public/sequence         Frames WebP de la séquence scroll-driven + poster.jpg
assets/                 Sources brutes (photos 2K + vidéos) — non servies
scripts/                process-assets.sh : pipeline ffmpeg/cwebp
```

## Remplacer les contenus placeholder

- **Textes & projets** : tout le contenu éditorial vit dans `data/` (`projects.ts`,
  `services.ts`, `content.ts`, `site.ts`). Aucun texte en dur dans les pages.
- **Photos** : déposer les nouvelles images dans `assets/`, ajuster le mapping dans
  `scripts/process-assets.sh`, relancer `npm run assets`.
- **Portraits d'équipe** : la section équipe de `/a-propos` affiche des blocs
  typographiques en attendant les vraies photos (grille 4:5 prévue).
- **Envoi du formulaire** : `app/actions/contact.ts` valide et simule l'envoi ;
  brancher Resend/Nodemailer ou un CRM à la place du `console.log`.

## Séquence scroll-driven (pipeline ffmpeg)

Les frames sont extraites **en amont du build**, jamais au runtime :

```bash
# 1. Extraction (7 premières secondes @ 24 fps → fps=12 → 84 frames à 1600px)
ffmpeg -t 7 -i assets/<video>.mp4 -vf "fps=12,scale=1600:-2:flags=lanczos" public/sequence/frame_%04d.png

# 2. Compression WebP (le ffmpeg Homebrew n'embarque pas libwebp)
for f in public/sequence/frame_*.png; do cwebp -q 78 "$f" -o "${f%.png}.webp" && rm "$f"; done
```

Règles : nommage zéro-paddé `frame_0001.webp`…, **aucun trou** dans la numérotation
(le script le vérifie), cible 60–120 frames. Le nombre total et le pattern sont
déclarés dans `data/sequence.ts` — les reporter si la vidéo change.
Fallback `poster.jpg` pour le premier paint et `prefers-reduced-motion`.

## Accessibilité & performance

- `prefers-reduced-motion` : Lenis coupé, parallaxes/pin supprimés, séquence
  remplacée par une image, curseur custom désactivé, compteurs à valeur finale.
- `next/image` partout (`priority` sur les heros uniquement), contraste AA,
  focus visible brass, navigation clavier complète (slider avant/après inclus).
