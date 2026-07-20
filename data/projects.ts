import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "loft-marcadet",
    title: "Loft Marcadet",
    location: "Paris 18e",
    year: 2025,
    surface: "145 m²",
    duration: "7 mois",
    budget: "≈ 320 000 €",
    category: "renovation-complete",
    ratio: "landscape",
    cover: "/images/loft-apres.jpg",
    coverAlt:
      "Loft rénové aux poutres de chêne apparentes, baigné de lumière naturelle",
    excerpt:
      "Un ancien atelier de confection transformé en loft familial, charpente de chêne mise à nu.",
    brief: [
      "Au dernier étage d'un ancien atelier de confection de la rue Marcadet, ce plateau de 145 m² dormait sous des faux plafonds et trois générations de cloisons. Nos sondages ont révélé une charpente de chêne intacte, que le projet a choisi d'exposer entièrement.",
      "La distribution a été entièrement repensée autour d'un volume central libre de sept mètres sous faîtage. Les chambres se glissent sous les rampants, isolées en fibre de bois, tandis que la cuisine s'ouvre sur l'espace de vie par un long îlot de pierre.",
    ],
    beforeAfter: {
      before: "/images/loft-avant.jpg",
      after: "/images/loft-apres.jpg",
      alt: "Transformation du loft : espace brut daté puis volume rénové aux poutres apparentes",
    },
    gallery: [
      {
        src: "/images/loft-apres.jpg",
        alt: "Volume principal du loft avec charpente en chêne apparente",
        caption: "Le volume central, libéré de ses faux plafonds.",
        layout: "full",
      },
      {
        src: "/images/chambre.jpg",
        alt: "Chambre minimaliste aux tons chauds",
        caption: "Chambre principale sous les rampants.",
        layout: "pair",
      },
      {
        src: "/images/chambre-matin.jpg",
        alt: "Chambre baignée de lumière du matin",
        caption: "Lumière du matin, menuiseries recréées à l'identique.",
        layout: "pair",
      },
      {
        src: "/images/sejour-cuisine.jpg",
        alt: "Séjour ouvert sur la cuisine",
        caption: "La cuisine s'ouvre sur le séjour par un îlot de pierre.",
        layout: "portrait",
      },
    ],
    materials: [
      { src: "/images/mat-noyer.jpg", name: "Noyer massif" },
      { src: "/images/mat-pierre.jpg", name: "Pierre de Bourgogne" },
      { src: "/images/mat-laiton.jpg", name: "Laiton brossé" },
    ],
    testimonial: {
      quote:
        "Ils ont vu la charpente avant même de la découvrir. Le loft que nous habitons aujourd'hui est celui qu'ils nous avaient dessiné au premier rendez-vous.",
      author: "Claire & Mathieu D., propriétaires",
    },
  },
  {
    slug: "appartement-monceau",
    title: "Appartement Monceau",
    location: "Paris 17e",
    year: 2024,
    surface: "96 m²",
    duration: "5 mois",
    budget: "≈ 210 000 €",
    category: "renovation-complete",
    ratio: "portrait",
    cover: "/images/monceau.jpg",
    coverAlt:
      "Séjour haussmannien rénové, moulures restaurées et mobilier contemporain",
    excerpt:
      "Un haussmannien recloisonné dans les années 80, rendu à ses volumes d'origine.",
    brief: [
      "Cet appartement du plateau Monceau avait perdu son plan d'origine sous les recloisonnements des années 1980. Le projet restitue l'enfilade séjour–salon et restaure moulures, parquets en point de Hongrie et cheminées en marbre.",
      "La cuisine, autrefois reléguée en fond de couloir, prend place dans l'ancienne chambre de service réunie à l'appartement. L'ensemble des réseaux a été refait à neuf, et l'isolation acoustique des chambres traitée en priorité.",
    ],
    beforeAfter: {
      before: "/images/sejour-avant.jpg",
      after: "/images/sejour-apres.jpg",
      alt: "Séjour avant travaux, daté et cloisonné, puis ouvert et rénové",
    },
    gallery: [
      {
        src: "/images/sejour-apres.jpg",
        alt: "Séjour ouvert rénové aux tons clairs",
        caption: "L'enfilade restituée, plafonds restaurés.",
        layout: "full",
      },
      {
        src: "/images/monceau.jpg",
        alt: "Salon avec moulures restaurées",
        caption: "Le salon côté parc.",
        layout: "portrait",
      },
      {
        src: "/images/piece-lumineuse.jpg",
        alt: "Pièce lumineuse rénovée",
        caption: "L'ancienne chambre de service, devenue bureau.",
        layout: "pair",
      },
      {
        src: "/images/chambre.jpg",
        alt: "Chambre aux tons minéraux",
        caption: "Chambre principale, acoustique renforcée.",
        layout: "pair",
      },
    ],
    materials: [
      { src: "/images/mat-marbre.jpg", name: "Marbre de Carrare" },
      { src: "/images/mat-laiton.jpg", name: "Laiton patiné" },
      { src: "/images/mat-noyer.jpg", name: "Chêne fumé" },
    ],
    testimonial: {
      quote:
        "Un chantier de cinq mois tenu au jour près, dans une copropriété exigeante. Nos voisins nous demandent encore le nom de l'entreprise.",
      author: "Hélène R., propriétaire",
    },
  },
  {
    slug: "cuisine-minerale",
    title: "Cuisine minérale",
    location: "Lyon 6e",
    year: 2025,
    surface: "28 m²",
    duration: "6 semaines",
    budget: "≈ 68 000 €",
    category: "cuisine-bain",
    ratio: "landscape",
    cover: "/images/cuisine-pierre.jpg",
    coverAlt: "Cuisine minimaliste avec îlot monolithique en pierre naturelle",
    excerpt:
      "Un îlot monolithique de pierre grise pour une cuisine dessinée au millimètre.",
    brief: [
      "Dans un appartement des Brotteaux, cette cuisine remplace trois petites pièces de service. L'îlot central, taillé dans une pierre grise adoucie, structure l'espace et dissimule l'ensemble des fonctions techniques.",
      "Les façades toute hauteur en noyer huilé filent jusqu'au plafond sans poignée apparente. L'éclairage, entièrement indirect, souligne la matière sans jamais l'éblouir.",
    ],
    gallery: [
      {
        src: "/images/cuisine-pierre.jpg",
        alt: "Îlot de cuisine en pierre naturelle grise",
        caption: "L'îlot monolithique, pierre adoucie de 6 cm.",
        layout: "full",
      },
      {
        src: "/images/cuisine-noyer.jpg",
        alt: "Détail des façades de cuisine en noyer",
        caption: "Façades en noyer huilé, assemblage à l'onglet.",
        layout: "pair",
      },
      {
        src: "/images/cuisine-lumiere.jpg",
        alt: "Cuisine rénovée à la lumière naturelle",
        caption: "Lumière de fin de journée sur la pierre.",
        layout: "pair",
      },
    ],
    materials: [
      { src: "/images/mat-pierre.jpg", name: "Pierre grise adoucie" },
      { src: "/images/mat-noyer.jpg", name: "Noyer huilé" },
      { src: "/images/mat-laiton.jpg", name: "Laiton brossé" },
    ],
    testimonial: {
      quote:
        "La cuisine a été fabriquée dans leur atelier et posée en six jours. La précision est celle d'un meuble d'ébéniste.",
      author: "Vincent A., propriétaire",
    },
  },
  {
    slug: "bastide-des-chenes",
    title: "Bastide des Chênes",
    location: "Aix-en-Provence",
    year: 2023,
    surface: "240 m²",
    duration: "11 mois",
    budget: "≈ 540 000 €",
    category: "energetique",
    ratio: "landscape",
    cover: "/images/bastide.jpg",
    coverAlt:
      "Bastide en pierre rénovée avec grandes menuiseries contemporaines",
    excerpt:
      "Une bastide du XVIIIe passée de la classe G à la classe C, sans trahir la pierre.",
    brief: [
      "Cette bastide familiale du pays d'Aix cumulait le charme du XVIIIe siècle et un diagnostic énergétique désastreux. Le projet devait la rendre habitable à l'année sans dénaturer ses façades de pierre ni ses volumes.",
      "Correction thermique en chaux-chanvre côté intérieur, menuiseries massives recréées à l'identique avec vitrage performant, pompe à chaleur géothermique alimentant des planchers chauffants : la maison est passée de la classe G à la classe C, et se traverse désormais pieds nus en janvier.",
    ],
    gallery: [
      {
        src: "/images/bastide.jpg",
        alt: "Façade en pierre de la bastide rénovée",
        caption: "Les façades préservées, menuiseries recréées.",
        layout: "full",
      },
      {
        src: "/images/piece-lumineuse.jpg",
        alt: "Pièce à vivre lumineuse aux murs clairs",
        caption: "Enduits chaux-chanvre, inertie retrouvée.",
        layout: "pair",
      },
      {
        src: "/images/chambre-matin.jpg",
        alt: "Chambre paisible au petit matin",
        caption: "Chambre d'angle, 19 °C constants.",
        layout: "pair",
      },
      {
        src: "/images/escalier.jpg",
        alt: "Escalier en pierre avec main courante en laiton",
        caption: "L'escalier d'origine, marches ragréées.",
        layout: "portrait",
      },
    ],
    materials: [
      { src: "/images/mat-pierre.jpg", name: "Pierre du pays d'Aix" },
      { src: "/images/mat-marbre.jpg", name: "Travertin" },
      { src: "/images/mat-noyer.jpg", name: "Châtaignier" },
    ],
    testimonial: {
      quote:
        "Nous chauffions à perte une maison glaciale. Ils en ont fait une maison de famille qu'on habite douze mois par an.",
      author: "Famille B., propriétaires",
    },
  },
  {
    slug: "bain-de-lumiere",
    title: "Bain de lumière",
    location: "Bordeaux",
    year: 2024,
    surface: "12 m²",
    duration: "4 semaines",
    budget: "≈ 42 000 €",
    category: "cuisine-bain",
    ratio: "portrait",
    cover: "/images/bain-pierre.jpg",
    coverAlt: "Salle de bain en pierre claire avec baignoire îlot taillée",
    excerpt:
      "Une salle de bain monacale creusée dans la pierre claire, baignoire taillée sur mesure.",
    brief: [
      "Au premier étage d'un hôtel particulier des Chartrons, cette salle de bain remplace deux pièces d'eau vieillissantes. Le parti pris : une seule matière, une pierre calcaire claire, du sol aux vasques.",
      "La baignoire, taillée dans un bloc unique, a été montée par l'ouverture de la fenêtre à la grue. La robinetterie en laiton non verni prendra sa patine avec les années.",
    ],
    gallery: [
      {
        src: "/images/bain-pierre.jpg",
        alt: "Baignoire en pierre massive sous la lumière naturelle",
        caption: "Le bloc de calcaire, 900 kg, posé à la grue.",
        layout: "full",
      },
      {
        src: "/images/chambre-matin.jpg",
        alt: "Suite attenante à la salle de bain",
        caption: "La suite attenante, continuité des teintes.",
        layout: "portrait",
      },
    ],
    materials: [
      { src: "/images/mat-marbre.jpg", name: "Calcaire adouci" },
      { src: "/images/mat-laiton.jpg", name: "Laiton non verni" },
      { src: "/images/mat-pierre.jpg", name: "Pierre claire" },
    ],
  },
  {
    slug: "verriere-du-lac",
    title: "Verrière du Lac",
    location: "Annecy",
    year: 2024,
    surface: "34 m² créés",
    duration: "5 mois",
    budget: "≈ 155 000 €",
    category: "extension",
    ratio: "landscape",
    cover: "/images/verriere.jpg",
    coverAlt:
      "Extension vitrée contemporaine prolongeant une maison traditionnelle",
    excerpt:
      "Une extension de verre et d'acier qui prolonge la maison vers le jardin, sans la singer.",
    brief: [
      "Cette maison des années 30, à quelques rues du lac, manquait d'une vraie pièce à vivre ouverte sur le jardin. Plutôt qu'une véranda rapportée, le projet dessine une extension d'acier et de verre à la géométrie franche, en retrait volontaire de la façade d'origine.",
      "La structure, d'une portée de sept mètres sans poteau intermédiaire, accueille cuisine et salle à manger. Le sol en pierre file de l'intérieur vers la terrasse, gommant la limite entre dedans et dehors.",
    ],
    gallery: [
      {
        src: "/images/verriere.jpg",
        alt: "Extension vitrée vue depuis le jardin",
        caption: "L'extension en retrait de la façade d'origine.",
        layout: "full",
      },
      {
        src: "/images/sejour-cuisine.jpg",
        alt: "Cuisine et séjour dans l'extension",
        caption: "Cuisine et salle à manger sous la verrière.",
        layout: "pair",
      },
      {
        src: "/images/cuisine-lumiere.jpg",
        alt: "Cuisine baignée de lumière",
        caption: "Lumière traversante en fin de journée.",
        layout: "pair",
      },
    ],
    materials: [
      { src: "/images/mat-pierre.jpg", name: "Pierre bleue" },
      { src: "/images/mat-noyer.jpg", name: "Chêne brossé" },
      { src: "/images/mat-laiton.jpg", name: "Acier thermolaqué" },
    ],
    testimonial: {
      quote:
        "L'extension a doublé notre pièce de vie et la maison n'a jamais semblé aussi cohérente. Le permis est passé du premier coup.",
      author: "Julie & Thomas P., propriétaires",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function adjacentProjects(slug: string): {
  prev: Project;
  next: Project;
} {
  const i = projects.findIndex((p) => p.slug === slug);
  const n = projects.length;
  return {
    prev: projects[(i - 1 + n) % n],
    next: projects[(i + 1) % n],
  };
}
