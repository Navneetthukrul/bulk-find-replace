import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Nehmen Sie Kontakt mit dem BulkFindReplace-Team auf für Support, Feedback oder Anfragen.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/de/contact",
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
      <h1 className="mb-6 text-3xl font-bold">Kontaktieren Sie Uns</h1>
      
      <p>Haben Sie eine Frage, Feedback oder einen Funktionswunsch? Wir würden uns freuen, von Ihnen zu hören.</p>
      
      <h2>In Kontakt Treten</h2>
      <p>Für Support, Anfragen oder Feedback zum Bulk Find & Replace-Tool erreichen Sie uns bitte per E-Mail unter:</p>
      <p><strong><a href="mailto:bulkfindreplace.support@gmail.com">bulkfindreplace.support@gmail.com</a></strong></p>
      
      <h2>Fehlerberichte</h2>
      <p>Wenn Sie bei der Nutzung des Tools auf Probleme stoßen, fügen Sie bitte die folgenden Informationen in Ihre E-Mail (vorzugsweise auf Englisch) ein, damit wir das Problem schneller lösen können:</p>
      <ul>
        <li>Ihr Betriebssystem (z. B. Windows 11, macOS)</li>
        <li>Ihr Webbrowser (z. B. Chrome, Firefox, Safari)</li>
        <li>Die Arten der Dateien, die Sie bearbeitet haben</li>
        <li>Eine kurze Beschreibung des Problems</li>
      </ul>
      
    </div>
  );
}
