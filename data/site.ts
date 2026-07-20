export const site = {
  name: "Atelier Rénove",
  tagline: "Rénovation haut de gamme",
  description:
    "Atelier Rénove — entreprise de rénovation haut de gamme. Rénovation complète, cuisine & salle de bain, extension et rénovation énergétique pour appartements et maisons de standing.",
  url: "https://atelier-renove.fr",
  phone: "+33 1 84 60 72 45",
  phoneDisplay: "01 84 60 72 45",
  email: "contact@atelier-renove.fr",
  address: {
    street: "14 rue des Vinaigriers",
    city: "75010 Paris",
  },
  hours: "Lun – Ven · 9h – 18h30",
  zone: "Paris & Île-de-France — déplacements en région pour les projets d'envergure",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  nav: [
    { label: "Réalisations", href: "/realisations" },
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
