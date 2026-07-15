# Atelier Rénove — Site vitrine premium (design record)

Date : 2026-07-15. Les deux prompts fournis par l'utilisateur (« Site vitrine premium » technique + « Design system & design de toutes les pages ») constituent la spec complète et font autorité. Ce document ne les recopie pas ; il fige uniquement (1) la correction de périmètre, (2) les choix laissés ouverts par la spec, (3) le mapping des assets réels.

## 1. Périmètre corrigé

Site **multi-pages** (et non one-page) :

| Route | Contenu |
|---|---|
| `/` | Accueil — les 12 sections du prompt technique |
| `/realisations` | Index portfolio, filtres ghost, masonry asymétrique |
| `/realisations/[slug]` | Page projet (hero, méta, brief, avant/après, galerie, matériaux, témoignage, nav projet, CTA) |
| `/services` | Index services en lignes pleine largeur (geste signature) |
| `/services/[slug]` | Page service (inclus, méthode, projets liés, FAQ, CTA) |
| `/a-propos` | Histoire, valeurs, équipe, certifications |
| `/contact` | Formulaire 7 col. + infos 4 col., carte SVG monochrome |
| `/mentions-legales`, `/politique-confidentialite` | Pages texte |
| 404 | Plein écran fond `ink` |

## 2. Choix arbitrés (la spec offrait des options)

- **Display** : Fraunces 400/500 ; **Sans** : Inter 400/500 — via `next/font/google` (self-hosted au build, pas de FOUT).
- **Next.js 15** (App Router) + React 19, TypeScript strict.
- **Tailwind 3.4** avec `tailwind.config.ts` (la v4 déplace les tokens en CSS, la spec exige le fichier config).
- **Frames de séquence en WebP** (`frame_0001.webp` …), ~96 frames à 1600px extraites de la vidéo de transformation (8 s, `fps=12`). Fallback : première frame en JPEG pour `prefers-reduced-motion` et premier paint.
- **GSAP + @gsap/react (`useGSAP`)** pour le scoping/cleanup, ScrollTrigger, **Lenis** synchronisé via `gsap.ticker`.
- **Carte contact** : SVG « zone d'intervention » monochrome aux couleurs du site (aucune clé API).
- **Formulaire** : validation front + Server Action placeholder (latence simulée, états idle/submitting/success/error).
- **Équipe (à-propos)** : pas de portraits dans les assets → blocs typographiques éditoriaux (nom `display-md`, rôle `label`, filet brass) ; remplacement par vraies photos documenté dans le README.

## 3. Mapping des assets réels (`assets/` → `public/images/`)

- **Hero accueil** : `Interior_shot_open-plan_living_s…` → `hero.jpg`
- **Séquence 2 bis** : `Loft_space_transforming_from_wor…mp4` → `public/sequence/frame_%04d.webp` (avant → après réel)
- **Avant/Après (sliders)** : `Living_space_old_dated_condition` ↔ `Open-plan_living_space_renovation` ; `Loft_space_original_dated_condition` ↔ `Loft_interior_with_oak_beams`
- **6 projets fictifs** : Loft Marcadet (Paris 18e, loft oak beams), Appartement Monceau (Paris 17e, living premium), Cuisine minérale (Lyon 6e, stone island), Bastide des Chênes (Aix-en-Provence, stone house), Bain de lumière (Bordeaux, stone tub), Verrière du Lac (Annecy, glass extension)
- **Matériaux (close-ups 1:1)** : crops ffmpeg de `Kitchen_with_walnut_detail`, `Minimalist_kitchen_with_stone_is…`, `Staircase_with_stone_treads_bras…`, `Luxurious_bathroom_with_stone_tub`
- **Autres sections** : bedroom/serene bedroom (galeries), `Interior_moving_shot` et `kling_…mp4` en réserve (non utilisés au premier livrable)

## 4. Hors périmètre

Backend réel d'envoi d'email, CMS, i18n, portraits d'équipe réels, analytics.
