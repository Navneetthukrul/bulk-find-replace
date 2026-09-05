import { HomePage } from "@/components/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suchen und Ersetzen in Mehreren Dateien Online | BulkFindReplace",
  description: "Laden Sie mehrere Dateien hoch, fügen Sie Such- und Ersetzungsregeln hinzu, verarbeiten Sie alles lokal in Ihrem Browser und laden Sie die aktualisierten Dateien als ZIP herunter. Kostenlos.",
  alternates: {
    canonical: "https://bulkfindreplace.com/de/",
    languages: {
      "en": "https://bulkfindreplace.com/",
      "fr-FR": "https://bulkfindreplace.com/fr/",
      "de-DE": "https://bulkfindreplace.com/de/",
      "pt-BR": "https://bulkfindreplace.com/pt-br/",
      "x-default": "https://bulkfindreplace.com/"
    }
  },
  openGraph: {
    title: "Suchen und Ersetzen in Mehreren Dateien Online | BulkFindReplace",
    description: "Laden Sie mehrere Dateien hoch, fügen Sie Such- und Ersetzungsregeln hinzu, verarbeiten Sie alles lokal in Ihrem Browser und laden Sie die aktualisierten Dateien als ZIP herunter. Kostenlos.",
    type: "website",
    url: "https://bulkfindreplace.com/de/",
  }
};

export default function Home() {
  return (
    <>
      <HomePage lang="de" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "BulkFindReplace",
            "url": "https://bulkfindreplace.com/de/",
            "description": "Laden Sie mehrere Dateien hoch, fügen Sie Such- und Ersetzungsregeln hinzu, verarbeiten Sie alles lokal in Ihrem Browser und laden Sie die aktualisierten Dateien als ZIP herunter. Kostenlos.",
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
