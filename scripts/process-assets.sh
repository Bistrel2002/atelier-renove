#!/usr/bin/env bash
# Pipeline ffmpeg — exécuté en amont du build, jamais au runtime.
# Transforme assets/ (sources brutes) en public/images/ + public/sequence/.
set -euo pipefail
cd "$(dirname "$0")/.."

SRC="assets"
IMG="public/images"
SEQ="public/sequence"
mkdir -p "$IMG" "$SEQ"

# --- 1. Photos : recompression maîtrisée (max 1920px de large, q85) ---
photo() { # photo <source> <slug>
  local src="$SRC/$1" out="$IMG/$2.jpg"
  ffmpeg -y -loglevel error -i "$src" \
    -vf "scale='min(1920,iw)':-2:flags=lanczos" -q:v 3 "$out"
  echo "  $out"
}

echo "Photos…"
photo "Interior_shot_open-plan_living_s…_202607151606.jpeg"      "hero"
photo "Loft_interior_with_oak_beams_202607151609.jpeg"           "loft-apres"
photo "Loft_space_original_dated_condition_202607151609.jpeg"    "loft-avant"
photo "Open-plan_living_space_renovation_2K_202607151609.jpeg"   "sejour-apres"
photo "Living_space_old_dated_condition_202607151609.jpeg"       "sejour-avant"
photo "Living_room_premium_renovated_in…_202607151608.jpeg"      "monceau"
photo "Minimalist_kitchen_with_stone_is…_202607151606.jpeg"      "cuisine-pierre"
photo "Kitchen_with_walnut_detail_2K_202607151608.jpeg"          "cuisine-noyer"
photo "Renovated_kitchen_with_natural_s…_202607151606.jpeg"      "cuisine-lumiere"
photo "Renovated_stone_house_exterior_l…_202607151606.jpeg"      "bastide"
photo "Luxurious_bathroom_with_stone_tub_202607151610.jpeg"      "bain-pierre"
photo "Modern_glass_extension_tradition…_2K_202607151607.jpeg"   "verriere"
photo "Bedroom_interior_warm_minimalist_2K_202607151608.jpeg"    "chambre"
photo "Serene_bedroom_interior_morning_…_202607151606.jpeg"      "chambre-matin"
photo "Interior_renovation_bright_room_2K_202607151606.jpeg"     "piece-lumineuse"
photo "Staircase_with_stone_treads_bras…_202607151609.jpeg"      "escalier"
photo "Living_kitchen_area_interior_design_202607151614.jpeg"    "sejour-cuisine"

# --- 2. Close-ups matériaux (crops carrés 900×900) ---
echo "Matériaux…"
crop() { # crop <slug-source> <slug-out> <x> <y>
  ffmpeg -y -loglevel error -i "$IMG/$1.jpg" \
    -vf "crop=900:900:$3:$4" -q:v 3 "$IMG/$2.jpg"
  echo "  $IMG/$2.jpg"
}
crop "cuisine-noyer"  "mat-noyer"  980 320
crop "cuisine-pierre" "mat-pierre" 700 320
crop "escalier"       "mat-laiton" 560 140
crop "bain-pierre"    "mat-marbre" 520 160

# --- 3. Séquence scroll-driven : 84 frames WebP 1600px ---
# Vidéo source : on ne garde que les 7 premières secondes (0 → 7 s) @ 24 fps
# → fps=12 → 84 frames, cible 60–120.
# ffmpeg extrait en PNG puis cwebp compresse (le ffmpeg Homebrew n'embarque pas libwebp).
echo "Séquence…"
rm -f "$SEQ"/frame_*.webp "$SEQ"/frame_*.png "$SEQ"/poster.jpg
ffmpeg -y -loglevel error -t 7 -i "$SRC/Loft_space_transforming_from_wor…_202607151610.mp4" \
  -vf "fps=12,scale=1600:-2:flags=lanczos" "$SEQ/frame_%04d.png"
for f in "$SEQ"/frame_*.png; do
  cwebp -quiet -q 78 "$f" -o "${f%.png}.webp"
  rm "$f"
done

COUNT=$(ls "$SEQ"/frame_*.webp | wc -l | tr -d ' ')
# Vérifie qu'il n'y a pas de trou dans la numérotation
LAST=$(ls "$SEQ"/frame_*.webp | tail -1 | sed -E 's/.*frame_0*([0-9]+)\.webp/\1/')
if [ "$COUNT" != "$LAST" ]; then
  echo "ERREUR : trou dans la numérotation ($COUNT fichiers, dernier index $LAST)" >&2
  exit 1
fi

# Fallback premier paint / prefers-reduced-motion
ffmpeg -y -loglevel error -i "$SEQ/frame_0001.webp" -q:v 3 "$SEQ/poster.jpg"

echo "OK — $COUNT frames. Reporter ce nombre dans data/sequence.ts si la vidéo change."
