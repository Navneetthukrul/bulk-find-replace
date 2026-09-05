import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Entrez en contact avec l'équipe de BulkFindReplace pour du support, des commentaires ou des questions.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/fr/contact",
  "languages": {
    "en": "https://bulkfindreplace.com/contact",
    "fr-FR": "https://bulkfindreplace.com/fr/contact",
    "de-DE": "https://bulkfindreplace.com/de/contact",
    "pt-BR": "https://bulkfindreplace.com/pt-br/contact",
    "x-default": "https://bulkfindreplace.com/contact"
  }
}
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 md:py-12 prose prose-slate dark:prose-invert">
      <h1 className="mb-6 text-3xl font-bold">Nous Contacter</h1>
      
      <p>Vous avez une question, un commentaire ou une suggestion de fonctionnalité ? Nous serions ravis de vous entendre.</p>
      
      <h2>Prendre Contact</h2>
      <p>Pour le support, les questions ou les commentaires concernant l'outil Bulk Find & Replace, veuillez nous contacter par e-mail à :</p>
      <p><strong><a href="mailto:bulkfindreplace.support@gmail.com">bulkfindreplace.support@gmail.com</a></strong></p>
      
      <h2>Signaler un Bug</h2>
      <p>Si vous rencontrez des problèmes lors de l'utilisation de l'outil, veuillez inclure les informations suivantes dans votre e-mail (en anglais de préférence) pour nous aider à résoudre le problème plus rapidement :</p>
      <ul>
        <li>Votre système d'exploitation (ex. Windows 11, macOS)</li>
        <li>Votre navigateur web (ex. Chrome, Firefox, Safari)</li>
        <li>Les types de fichiers que vous traitiez</li>
        <li>Une brève description du problème</li>
      </ul>
      
    </div>
  );
}
