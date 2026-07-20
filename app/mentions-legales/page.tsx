import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        {site.name} — SAS au capital de 150 000 € — RCS Paris 812 445 671.
        Siège social : {site.address.street}, {site.address.city}. Téléphone :{" "}
        {site.phoneDisplay}. Email : {site.email}. Directeur de la publication :
        Antoine Vasseur.
      </p>
      <h2>Hébergement</h2>
      <p>
        Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
        États-Unis.
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site (textes, photographies, éléments
        graphiques) est la propriété exclusive de {site.name} ou de ses
        partenaires. Toute reproduction sans autorisation écrite préalable est
        interdite.
      </p>
      <h2>Assurances</h2>
      <p>
        Assurance responsabilité civile professionnelle et garantie décennale
        souscrites auprès d&apos;un assureur de premier rang, couvrant la France
        métropolitaine.
      </p>
    </LegalPage>
  );
}
