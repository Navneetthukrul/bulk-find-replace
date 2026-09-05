import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez BulkFindReplace et notre mission de fournir un outil rapide, sécurisé et basé sur le navigateur pour le remplacement de texte en masse.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/fr/about",
  "languages": {
    "en": "https://bulkfindreplace.com/about",
    "fr-FR": "https://bulkfindreplace.com/fr/about",
    "de-DE": "https://bulkfindreplace.com/de/about",
    "pt-BR": "https://bulkfindreplace.com/pt-br/about",
    "x-default": "https://bulkfindreplace.com/about"
  }
}
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 md:py-12 prose prose-slate dark:prose-invert">
      <h1 className="mb-6 text-3xl font-bold">À Propos de Bulk Find & Replace</h1>
      
      <p>Bulk Find & Replace a été créé pour résoudre un problème simple mais frustrant : effectuer la même modification de texte sur des dizaines ou des centaines de fichiers sans avoir à les ouvrir manuellement un par un.</p>
      
      <h2>Notre Mission</h2>
      <p>Nous visons à fournir aux développeurs, aux créateurs de contenu et aux professionnels un outil rapide, fiable et totalement privé pour l'édition de fichiers en masse. Nous pensons que les outils utilitaires doivent être simples, accessibles sans limites arbitraires et, surtout, sécurisés.</p>
      
      <h2>Pourquoi Basé sur le Navigateur ?</h2>
      <p>La sécurité et la confidentialité sont primordiales lorsqu'il s'agit de code source, de fichiers de configuration et de documents personnels. En tirant parti des API web modernes, nous avons créé un outil qui fonctionne à 100 % localement dans votre navigateur web. Cela signifie que vos fichiers ne quittent jamais votre appareil, vous offrant la puissance d'une application de bureau avec la commodité d'un site web.</p>
      
      <h2>Gratuit</h2>
      <p>Nous gardons l'outil gratuit pour tous. Pour aider à supporter les coûts d'hébergement et de maintenance, nous pouvons afficher des publicités non intrusives. Nous nous engageons à garantir que ces publicités n'interfèrent jamais avec les fonctionnalités de l'outil.</p>
      
    </div>
  );
}
