import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import PortfolioIndex from "@/components/sections/PortfolioIndex";
import CtaDevis from "@/components/sections/CtaDevis";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Rénovations complètes, cuisines, extensions : nos projets livrés, du loft parisien à la bastide provençale.",
};

export default function RealisationsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Accueil — Réalisations"
        title="Réalisations"
        chapo="Chaque projet est conçu, fabriqué et posé par nos ateliers. Voici ceux que leurs propriétaires nous autorisent à montrer."
      />
      <PortfolioIndex />
      <CtaDevis title="Votre projet mérite la même exigence." />
    </>
  );
}
