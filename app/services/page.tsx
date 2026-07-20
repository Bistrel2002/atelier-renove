import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ServiceRow from "@/components/ui/ServiceRow";
import Reveal from "@/components/ui/Reveal";
import CtaDevis from "@/components/sections/CtaDevis";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Rénovation complète, cuisine & salle de bain, extension et rénovation énergétique : quatre métiers, un seul interlocuteur.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Accueil — Services"
        title="Services"
        chapo="Quatre métiers, un seul interlocuteur. Bureau d'études et compagnons travaillent sous le même toit, du premier relevé à la remise des clés."
      />
      <Reveal stagger="[data-row]" className="mt-20 border-t border-line pb-section">
        {services.map((service) => (
          <div key={service.slug} data-row>
            <ServiceRow service={service} />
          </div>
        ))}
      </Reveal>
      <CtaDevis />
    </>
  );
}
