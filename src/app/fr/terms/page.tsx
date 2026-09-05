import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation",
  description: "Lisez nos Conditions d'Utilisation pour l'utilisation de BulkFindReplace.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/fr/terms",
  "languages": {
    "en": "https://bulkfindreplace.com/terms",
    "fr-FR": "https://bulkfindreplace.com/fr/terms",
    "de-DE": "https://bulkfindreplace.com/de/terms",
    "pt-BR": "https://bulkfindreplace.com/pt-br/terms",
    "x-default": "https://bulkfindreplace.com/terms"
  }
}
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 md:py-12 prose prose-slate dark:prose-invert">
      <h1 className="mb-6 text-3xl font-bold">Conditions d'Utilisation</h1>
      
      <p>Dernière mise à jour : {new Date().toLocaleDateString()}</p>
      
      <h2>1. Acceptation des Conditions</h2>
      <p>En accédant et en utilisant Bulk Find & Replace (le "Service"), vous acceptez d'être lié par les termes et dispositions de cet accord. Si vous n'acceptez pas de respecter ces conditions, veuillez ne pas utiliser le Service.</p>
      
      <h2>2. Description du Service</h2>
      <p>Bulk Find & Replace fournit un utilitaire web pour appliquer des règles de remplacement de texte sur plusieurs fichiers localement dans le navigateur de l'utilisateur.</p>
      
      <h2>3. Exclusion de Garanties</h2>
      <p>Le Service est fourni "TEL QUEL" et "TEL QUE DISPONÍBLE". Bien que nous nous efforcions de nous assurer que l'outil fonctionne correctement, nous ne garantissons en aucun cas sa fiabilité, sa précision ou son adéquation à un usage particulier. Vous acceptez que votre utilisation du Service se fait à vos propres risques.</p>
      
      <h2>4. Limitation de Responsabilité</h2>
      <p>En aucun cas Bulk Find & Replace ou ses créateurs ne pourront être tenus responsables des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'incapacité d'utiliser le Service. Cela inclut, mais sans s'y limiter, la perte de données, la corruption de fichiers ou toute autre perte résultant de votre utilisation de l'outil. <strong>Nous vous recommandons fortement de sauvegarder vos fichiers ou d'utiliser un système de contrôle de version avant d'appliquer des modifications en masse.</strong></p>
      
      <h2>5. Responsabilités de l'Utilisateur</h2>
      <p>Vous êtes seul responsable des fichiers que vous traitez à l'aide du Service. Étant donné que l'outil fonctionne entièrement localement dans votre navigateur, vous êtes responsable de vous assurer que les fichiers modifiés sont enregistrés ou téléchargés en toute sécurité.</p>
      
      <h2>6. Modifications du Service</h2>
      <p>Nous nous réservons le droit de modifier ou d'interrompre, temporairement ou de façon permanente, le Service avec ou sans préavis.</p>
      
    </div>
  );
}
