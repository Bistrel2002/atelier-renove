import type { Service, ServiceSlug } from "./types";

export const services: Service[] = [
  {
    slug: "renovation-complete",
    num: "01",
    title: "Rénovation complète",
    short:
      "Repenser un appartement ou une maison dans son intégralité, de la structure aux finitions.",
    hero: "/images/loft-apres.jpg",
    heroAlt:
      "Loft rénové avec poutres en chêne apparentes et lumière naturelle",
    chapo:
      "Nous prenons en charge votre bien de la première esquisse à la remise des clés : curage, redistribution des volumes, réseaux neufs, finitions d'exception. Un seul interlocuteur, un chantier maîtrisé.",
    includes: [
      "Étude de faisabilité et relevé complet",
      "Conception et plans d'exécution",
      "Démolition, curage et gros œuvre",
      "Électricité et plomberie neuves",
      "Menuiseries intérieures sur mesure",
      "Peintures, sols et finitions d'exception",
      "Pilotage de chantier hebdomadaire",
      "Nettoyage fin de chantier et livraison",
    ],
    method: [
      {
        title: "Relevé & diagnostic",
        text: "Visite technique approfondie, relevé laser et diagnostic structurel pour partir sur des bases exactes.",
      },
      {
        title: "Conception",
        text: "Plans, choix des matériaux et budget détaillé poste par poste, validés ensemble avant le premier coup de masse.",
      },
      {
        title: "Chantier",
        text: "Nos équipes intégrées enchaînent les corps d'état sans temps mort. Point d'avancement chaque semaine.",
      },
      {
        title: "Livraison & suivi",
        text: "Réception contradictoire, levée des réserves sous quinze jours, puis visite de contrôle à six mois.",
      },
    ],
    faq: [
      {
        q: "Combien de temps dure une rénovation complète ?",
        a: "Comptez de quatre à huit mois selon la surface et l'ampleur des travaux structurels. Le planning est contractualisé dès la signature et suivi semaine par semaine.",
      },
      {
        q: "Puis-je habiter le logement pendant les travaux ?",
        a: "Pour une rénovation intégrale, nous le déconseillons : le curage et les réseaux rendent le logement inhabitable plusieurs semaines. Nous vous aidons à phaser si nécessaire.",
      },
      {
        q: "Gérez-vous les autorisations administratives ?",
        a: "Oui. Déclarations préalables, autorisations de copropriété, occupation de voirie : notre bureau d'études constitue et dépose les dossiers pour vous.",
      },
    ],
  },
  {
    slug: "cuisine-bain",
    num: "02",
    title: "Cuisine & salle de bain",
    short:
      "Les deux pièces qui transforment le quotidien, traitées avec une exigence d'orfèvre.",
    hero: "/images/cuisine-pierre.jpg",
    heroAlt: "Cuisine minimaliste avec îlot en pierre naturelle",
    chapo:
      "Pierre naturelle, bois massif, robinetterie laiton : nous concevons et réalisons des cuisines et salles de bains dessinées au millimètre, posées par nos propres équipes.",
    includes: [
      "Conception 3D et plans techniques",
      "Mobilier sur mesure en atelier",
      "Plans de travail pierre et bois massif",
      "Plomberie et électricité dédiées",
      "Carrelage, faïence et pierre naturelle",
      "Robinetterie et éclairage architecturaux",
    ],
    method: [
      {
        title: "Usage & habitudes",
        text: "Nous partons de votre façon de cuisiner et de vivre, pas d'un catalogue.",
      },
      {
        title: "Dessin & matériaux",
        text: "Plans au millimètre, échantillons de pierre et de bois présentés à l'atelier.",
      },
      {
        title: "Fabrication & pose",
        text: "Mobilier fabriqué dans notre atelier, posé par les mêmes compagnons qui l'ont conçu.",
      },
    ],
    faq: [
      {
        q: "Quel budget prévoir pour une cuisine sur mesure ?",
        a: "Nos cuisines démarrent autour de 35 000 € pose comprise. Le budget dépend surtout des matériaux de plan de travail et de l'électroménager choisi.",
      },
      {
        q: "Combien de temps sans cuisine ou sans salle de bain ?",
        a: "La pose elle-même dure deux à trois semaines. Nous installons une salle d'eau provisoire quand la configuration le permet.",
      },
    ],
  },
  {
    slug: "extension",
    num: "03",
    title: "Extension & aménagement",
    short:
      "Gagner des mètres carrés sans déménager : extension, surélévation, verrière, combles.",
    hero: "/images/verriere.jpg",
    heroAlt:
      "Extension vitrée contemporaine adossée à une maison traditionnelle",
    chapo:
      "Une extension réussie dialogue avec l'existant au lieu de le singer. Verrières d'atelier, surélévations bois, aménagement de combles : nous créons de la surface qui semble avoir toujours été là.",
    includes: [
      "Étude de faisabilité et règles d'urbanisme",
      "Conception architecturale et permis",
      "Gros œuvre, charpente et couverture",
      "Menuiseries extérieures sur mesure",
      "Isolation et étanchéité performantes",
      "Raccordement et finitions intérieures",
    ],
    method: [
      {
        title: "Faisabilité",
        text: "PLU, emprise au sol, structure existante : nous validons ce qui est possible avant de dessiner.",
      },
      {
        title: "Permis & conception",
        text: "Dossier de permis complet, échanges avec l'ABF si nécessaire, plans d'exécution.",
      },
      {
        title: "Construction",
        text: "Clos couvert rapide pour mettre l'existant hors d'eau, puis second œuvre soigné.",
      },
    ],
    faq: [
      {
        q: "Faut-il un permis de construire ?",
        a: "Jusqu'à 40 m² en zone urbaine couverte par un PLU, une déclaration préalable suffit souvent. Au-delà, ou si la surface totale dépasse 150 m², le permis et le recours à un architecte sont obligatoires — nous gérons les deux cas.",
      },
      {
        q: "Une extension est-elle possible en copropriété ?",
        a: "Oui, sous réserve d'un vote en assemblée générale. Nous préparons le dossier technique qui rassure les copropriétaires.",
      },
    ],
  },
  {
    slug: "energetique",
    num: "04",
    title: "Rénovation énergétique",
    short:
      "Isoler, ventiler, chauffer juste — sans sacrifier le caractère du bâti ancien.",
    hero: "/images/bastide.jpg",
    heroAlt:
      "Maison en pierre rénovée avec menuiseries contemporaines",
    chapo:
      "Le bâti ancien mérite mieux que des solutions standardisées. Matériaux biosourcés, correction thermique adaptée à la pierre, menuiseries performantes dessinées à l'identique : nous faisons gagner des classes énergétiques sans trahir l'âme des lieux.",
    includes: [
      "Audit énergétique réglementaire",
      "Isolation biosourcée adaptée au bâti ancien",
      "Menuiseries performantes sur mesure",
      "Ventilation double flux ou hygroréglable",
      "Pompe à chaleur et plancher chauffant",
      "Accompagnement aux aides (MaPrimeRénov', CEE)",
    ],
    method: [
      {
        title: "Audit",
        text: "Thermographie, étude des ponts thermiques et scénarios de gain chiffrés.",
      },
      {
        title: "Bouquet de travaux",
        text: "Nous hiérarchisons les interventions pour maximiser le gain par euro investi.",
      },
      {
        title: "Travaux & contrôle",
        text: "Réalisation certifiée RGE, test d'étanchéité à l'air et DPE de sortie.",
      },
    ],
    faq: [
      {
        q: "Quelles aides puis-je obtenir ?",
        a: "MaPrimeRénov', certificats d'économie d'énergie, éco-PTZ et TVA à 5,5 % se cumulent dans la plupart des cas. Notre certification RGE y ouvre droit, et nous montons les dossiers avec vous.",
      },
      {
        q: "Quel gain espérer sur un appartement haussmannien ?",
        a: "Deux classes de DPE sont couramment atteignables (par exemple F → D) en combinant isolation des murs sur cour, menuiseries et ventilation, sans toucher aux modénatures côté rue.",
      },
    ],
  },
];

export const serviceLabels: Record<ServiceSlug, string> = {
  "renovation-complete": "Rénovation complète",
  "cuisine-bain": "Cuisine & bain",
  extension: "Extension",
  energetique: "Énergétique",
};

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
