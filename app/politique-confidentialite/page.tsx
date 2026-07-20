import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <h2>Données collectées</h2>
      <p>
        Le formulaire de contact collecte les données strictement nécessaires
        au traitement de votre demande de devis : nom, email, téléphone, type
        de projet, budget estimé et message. Aucune donnée n&apos;est cédée à des
        tiers.
      </p>
      <h2>Finalité et conservation</h2>
      <p>
        Ces données servent uniquement à vous recontacter au sujet de votre
        projet. Elles sont conservées trois ans après le dernier contact, puis
        supprimées.
      </p>
      <h2>Cookies</h2>
      <p>
        Ce site n&apos;utilise aucun cookie de suivi publicitaire. Seuls des
        cookies techniques strictement nécessaires au fonctionnement peuvent
        être déposés.
      </p>
      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
        rectification et de suppression de vos données. Écrivez-nous à{" "}
        {site.email} — nous répondons sous trente jours.
      </p>
    </LegalPage>
  );
}
