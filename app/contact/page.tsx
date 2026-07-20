import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Demandez un devis gratuit : réponse sous 48 heures ouvrées. Atelier Rénove, Paris 10e.",
};

export default function ContactPage() {
  return (
    <div className="bg-sand">
      <PageHeader
        breadcrumb="Accueil — Contact"
        title="Parlons de votre projet"
        chapo="Décrivez-nous votre bien et vos envies : nous revenons vers vous sous 48 heures ouvrées avec un premier avis et une proposition de rendez-vous."
      />
      <ContactSection background="sand" />
    </div>
  );
}
