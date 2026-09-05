import { HomePage } from "@/components/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find and Replace Text in Multiple Files Online | BulkFindReplace",
  description: "Upload multiple files, add one or many find and replace rules, process everything locally in your browser, and download the updated files as a ZIP. Free to use.",
  alternates: {
    canonical: "https://bulkfindreplace.com/",
    languages: {
      "en": "https://bulkfindreplace.com/",
      "fr-FR": "https://bulkfindreplace.com/fr/",
      "de-DE": "https://bulkfindreplace.com/de/",
      "pt-BR": "https://bulkfindreplace.com/pt-br/",
      "x-default": "https://bulkfindreplace.com/"
    }
  },
  openGraph: {
    title: "Find and Replace Text in Multiple Files Online",
    description: "Upload multiple files, add multiple replacement rules, and process everything locally in your browser.",
    type: "website",
    url: "https://bulkfindreplace.com/",
  }
};

export default function Home() {
  return (
    <>
      <HomePage lang="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "BulkFindReplace",
            "url": "https://bulkfindreplace.com/",
            "description": "Find and replace text in multiple files online. Upload multiple files, add one or many find and replace rules, process everything in your browser, and download the updated files as a ZIP.",
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
