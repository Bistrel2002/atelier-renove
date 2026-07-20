import type { KeyFigure, ProcessStep, Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ils ont vu la charpente avant même de la découvrir. Le loft que nous habitons aujourd'hui est celui qu'ils nous avaient dessiné au premier rendez-vous.",
    author: "Claire & Mathieu D.",
    project: "Rénovation complète · Paris 18e",
  },
  {
    quote:
      "Un chantier de cinq mois tenu au jour près, dans une copropriété exigeante. Nos voisins nous demandent encore le nom de l'entreprise.",
    author: "Hélène R.",
    project: "Rénovation complète · Paris 17e",
  },
  {
    quote:
      "Nous chauffions à perte une maison glaciale. Ils en ont fait une maison de famille qu'on habite douze mois par an.",
    author: "Famille B.",
    project: "Rénovation énergétique · Aix-en-Provence",
  },
];

export const keyFigures: KeyFigure[] = [
  { value: 250, prefix: "+", label: "projets livrés" },
  { value: 15, label: "ans d'expérience" },
  { value: 98, suffix: "%", label: "de clients satisfaits" },
];

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Étude & devis",
    text: "Visite technique, relevé précis et devis détaillé poste par poste sous dix jours. Gratuit et sans engagement.",
  },
  {
    num: "02",
    title: "Conception",
    text: "Plans, choix des matériaux à l'atelier, planning contractuel. Rien ne démarre tant que tout n'est pas dessiné.",
  },
  {
    num: "03",
    title: "Chantier",
    text: "Nos équipes intégrées enchaînent les corps d'état. Un conducteur de travaux dédié, un point chaque semaine.",
  },
  {
    num: "04",
    title: "Livraison",
    text: "Réception contradictoire pièce par pièce, levée des réserves sous quinze jours, dossier des ouvrages exécutés remis en main propre.",
  },
  {
    num: "05",
    title: "Suivi",
    text: "Visite de contrôle à six mois, garantie de parfait achèvement, décennale sur le gros œuvre.",
  },
];

export const trustLabels = [
  "RGE",
  "Qualibat",
  "Garantie décennale",
  "Ordre des architectes — partenaires",
  "FFB",
] as const;

export const approach = {
  paragraphs: [
    "Atelier Rénove réunit sous un même toit un bureau d'études et des compagnons — maçons, menuisiers, plombiers, peintres — qui travaillent ensemble depuis quinze ans. Cette intégration change tout : les décisions se prennent vite, les détails se règlent au millimètre, et une seule personne répond de l'ensemble.",
    "Nous n'avons pas de style maison. Nous avons une exigence : que la matière soit juste, que la lumière circule, et que chaque rénovation semble avoir toujours existé.",
  ],
  // Mots mis en évidence en `clay` au scroll
  highlights: ["millimètre", "matière", "lumière"],
};

export const team = [
  { name: "Antoine Vasseur", role: "Fondateur · Architecte d'intérieur" },
  { name: "Marion Lebrun", role: "Directrice de travaux" },
  { name: "Karim Bensaïd", role: "Chef d'atelier menuiserie" },
  { name: "Élise Fontaine", role: "Bureau d'études · Thermique" },
];

export const values = [
  {
    num: "01",
    title: "La matière d'abord",
    text: "Pierre, bois massif, laiton, chaux : nous choisissons des matériaux qui vieillissent bien et se réparent. Jamais d'imitation.",
  },
  {
    num: "02",
    title: "Une parole, un chantier",
    text: "Le devis est détaillé, le planning contractuel, et le prix annoncé est le prix payé. Les avenants surprises n'existent pas chez nous.",
  },
  {
    num: "03",
    title: "Le geste transmis",
    text: "Chaque chantier forme un apprenti. C'est notre façon de garantir que le savoir-faire qui fait nos maisons existera encore demain.",
  },
];
