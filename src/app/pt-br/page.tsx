import { HomePage } from "@/components/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Localizar e Substituir em Vários Arquivos Online | BulkFindReplace",
  description: "Envie vários arquivos, adicione regras de localizar e substituir, processe tudo localmente no seu navegador e baixe os arquivos atualizados em um ZIP. Uso gratuito.",
  alternates: {
    canonical: "https://bulkfindreplace.com/pt-br/",
    languages: {
      "en": "https://bulkfindreplace.com/",
      "fr-FR": "https://bulkfindreplace.com/fr/",
      "de-DE": "https://bulkfindreplace.com/de/",
      "pt-BR": "https://bulkfindreplace.com/pt-br/",
      "x-default": "https://bulkfindreplace.com/"
    }
  },
  openGraph: {
    title: "Localizar e Substituir em Vários Arquivos Online | BulkFindReplace",
    description: "Envie vários arquivos, adicione regras de localizar e substituir, processe tudo localmente no seu navegador e baixe os arquivos atualizados em um ZIP. Uso gratuito.",
    type: "website",
    url: "https://bulkfindreplace.com/pt-br/",
  }
};

export default function Home() {
  return (
    <>
      <HomePage lang="pt-br" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "BulkFindReplace",
            "url": "https://bulkfindreplace.com/pt-br/",
            "description": "Envie vários arquivos, adicione regras de localizar e substituir, processe tudo localmente no seu navegador e baixe os arquivos atualizados em um ZIP. Uso gratuito.",
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
