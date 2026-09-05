import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzrichtlinie",
  description: "Lesen Sie unsere Datenschutzrichtlinie. Ihre Dateien werden lokal in Ihrem Browser verarbeitet und niemals auf unseren Server hochgeladen.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/de/privacy",
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
      <h1 className="mb-6 text-3xl font-bold">Datenschutzrichtlinie</h1>
      
      <p>Zuletzt aktualisiert: {new Date().toLocaleDateString()}</p>
      
      <p>Bei Bulk Find & Replace stehen Ihre Privatsphäre und Datensicherheit an erster Stelle. Diese Datenschutzrichtlinie beschreibt, wie wir Informationen behandeln, wenn Sie unsere Website nutzen.</p>
      
      <h2>1. Clientseitige Verarbeitung</h2>
      <p>Unser Tool wurde mit einer strikten "Nur-Clientseitig"-Architektur entwickelt. Wenn Sie das Bulk Find & Replace-Tool verwenden:</p>
      <ul>
        <li><strong>Keine Datei-Uploads:</strong> Ihre Dateien werden niemals auf unsere Server hochgeladen, übertragen oder dort gespeichert.</li>
        <li><strong>Lokale Verarbeitung:</strong> Das gesamte Einlesen der Dateien, das Ersetzen von Text und die ZIP-Generierung erfolgen vollständig in Ihrem Webbrowser auf Ihrem eigenen Gerät.</li>
        <li><strong>Dateiinhalte:</strong> Wir haben keinen Zugriff auf den Inhalt Ihrer Dateien, Ihre Ersetzungsregeln oder sensible Daten, die Sie mit dem Tool verarbeiten.</li>
      </ul>
      
      <h2>2. Analysen</h2>
      <p>Wir können grundlegende Webanalysen (wie Google Analytics) verwenden, um zu verstehen, wie unser Tool genutzt wird, was uns hilft, die Benutzererfahrung zu verbessern. Diese Analysedienste können aggregierte, nicht personenbezogene Daten erfassen, wie Browsertyp, Gerätetyp und besuchte Seiten. Wir verfolgen oder protokollieren <strong>keine</strong> Informationen über die Dateien, die Sie verarbeiten.</p>
      
      <h2>3. Werbung</h2>
      <p>Wir können Drittanbieter-Werbeunternehmen (wie Google AdSense) einsetzen, um Anzeigen zu schalten, wenn Sie unsere Website besuchen. Diese Unternehmen können Informationen über Ihre Besuche auf dieser und anderen Websites verwenden, um Werbung für Waren und Dienstleistungen bereitzustellen, die Sie interessieren. Dieser Prozess kann die Verwendung von Cookies beinhalten.</p>
      
      <h2>4. Cookies</h2>
      <p>Unsere Website, Analyseanbieter und Werbepartner können "Cookies" verwenden, um effektiv zu funktionieren und Ihr Erlebnis zu personalisieren. Sie können sich entscheiden, Cookies über Ihre individuellen Browseroptionen zu deaktivieren, obwohl dies Ihre Möglichkeit beeinträchtigen kann, mit einigen Funktionen unserer Website zu interagieren.</p>
      
      <h2>5. Änderungen an dieser Richtlinie</h2>
      <p>Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen.</p>
      
      <h2>6. Kontaktieren Sie Uns</h2>
      <p>Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte über unsere Kontakt-Seite.</p>
      
    </div>
  );
}
