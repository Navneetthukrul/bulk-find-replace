import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Lisez notre politique de confidentialité. Vos fichiers sont traités localement dans votre navigateur et ne sont jamais téléchargés sur notre serveur.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/fr/privacy",
  "languages": {
    "en": "https://bulkfindreplace.com/privacy",
    "fr-FR": "https://bulkfindreplace.com/fr/privacy",
    "de-DE": "https://bulkfindreplace.com/de/privacy",
    "pt-BR": "https://bulkfindreplace.com/pt-br/privacy",
    "x-default": "https://bulkfindreplace.com/privacy"
  }
}
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 md:py-12 prose prose-slate dark:prose-invert">
      <h1 className="mb-6 text-3xl font-bold">Politique de Confidentialité</h1>
      
      <p>Dernière mise à jour : {new Date().toLocaleDateString()}</p>
      
      <p>Chez Bulk Find & Replace, votre confidentialité et la sécurité de vos données sont nos principales préoccupations. Cette Politique de Confidentialité décrit comment nous traitons les informations lorsque vous utilisez notre site web.</p>
      
      <h2>1. Traitement Côté Client</h2>
      <p>Notre outil est conçu avec une architecture stricte "côté client uniquement". Lorsque vous utilisez l'outil Bulk Find & Replace :</p>
      <ul>
        <li><strong>Aucun téléchargement de fichier :</strong> Vos fichiers ne sont jamais envoyés, transmis ou stockés sur nos serveurs.</li>
        <li><strong>Traitement local :</strong> Toute la lecture des fichiers, le remplacement de texte et la génération du fichier ZIP se font entièrement dans votre navigateur web sur votre propre appareil.</li>
        <li><strong>Contenu des fichiers :</strong> Nous n'avons pas accès au contenu de vos fichiers, à vos règles de remplacement ou à toute donnée sensible que vous traitez à l'aide de l'outil.</li>
      </ul>
      
      <h2>2. Analytique</h2>
      <p>Nous pouvons utiliser des outils d'analyse web de base (tels que Google Analytics) pour comprendre comment notre outil est utilisé, ce qui nous aide à améliorer l'expérience utilisateur. Ces services d'analyse peuvent collecter des informations agrégées et non personnellement identifiables telles que le type de navigateur, le type d'appareil et les pages visitées. Nous ne suivons ni n'enregistrons <strong>aucune</strong> information sur les fichiers que vous traitez.</p>
      
      <h2>3. Publicité</h2>
      <p>Nous pouvons faire appel à des sociétés publicitaires tierces (telles que Google AdSense) pour diffuser des annonces lorsque vous visitez notre site web. Ces sociétés peuvent utiliser des informations concernant vos visites sur ce site et sur d'autres sites web afin de fournir des publicités sur des biens et des services susceptibles de vous intéresser. Ce processus peut impliquer l'utilisation de cookies.</p>
      
      <h2>4. Cookies</h2>
      <p>Notre site web, nos fournisseurs d'analyses et nos partenaires publicitaires peuvent utiliser des "cookies" pour fonctionner efficacement et personnaliser votre expérience. Vous pouvez choisir de désactiver les cookies dans les options de votre navigateur individuel, bien que cela puisse affecter votre capacité à interagir avec certaines fonctionnalités de notre site.</p>
      
      <h2>5. Modifications de cette Politique</h2>
      <p>Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle Politique de Confidentialité sur cette page.</p>
      
      <h2>6. Nous Contacter</h2>
      <p>Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter via notre page Contact.</p>
      
    </div>
  );
}
