import { HomePage } from "@/components/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chercher et Remplacer dans Plusieurs Fichiers en Ligne | BulkFindReplace",
  description: "Uploadez plusieurs fichiers, ajoutez des règles de recherche et remplacement, traitez tout localement dans votre navigateur et téléchargez les fichiers mis à jour en ZIP. Gratuit.",
  alternates: {
    canonical: "https://bulkfindreplace.com/fr/",
    languages: {
      "en": "https://bulkfindreplace.com/",
      "fr-FR": "https://bulkfindreplace.com/fr/",
      "de-DE": "https://bulkfindreplace.com/de/",
      "pt-BR": "https://bulkfindreplace.com/pt-br/",
      "x-default": "https://bulkfindreplace.com/"
    }
  },
  openGraph: {
    title: "Chercher et Remplacer dans Plusieurs Fichiers en Ligne | BulkFindReplace",
    description: "Uploadez plusieurs fichiers, ajoutez des règles de recherche et remplacement, traitez tout localement dans votre navigateur et téléchargez les fichiers mis à jour en ZIP. Gratuit.",
    type: "website",
    url: "https://bulkfindreplace.com/fr/",
  }
};

export default function Home() {
  return (
    <>
      <HomePage lang="fr" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "BulkFindReplace",
            "url": "https://bulkfindreplace.com/fr/",
            "description": "Uploadez plusieurs fichiers, ajoutez des règles de recherche et remplacement, traitez tout localement dans votre navigateur et téléchargez les fichiers mis à jour en ZIP. Gratuit.",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
    </>
  );
}
