import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen",
  description: "Lesen Sie unsere Nutzungsbedingungen für die Verwendung von BulkFindReplace.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/de/terms",
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
      <h1 className="mb-6 text-3xl font-bold">Nutzungsbedingungen</h1>
      
      <p>Zuletzt aktualisiert: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Annahme der Bedingungen</h2>
      <p>Indem Sie auf Bulk Find & Replace (den "Dienst") zugreifen und ihn nutzen, akzeptieren Sie die Bedingungen und Bestimmungen dieser Vereinbarung. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie den Dienst bitte nicht.</p>
      
      <h2>2. Beschreibung des Dienstes</h2>
      <p>Bulk Find & Replace bietet ein webbasiertes Dienstprogramm zur Anwendung von Text-Ersetzungsregeln in mehreren Dateien lokal im Browser des Benutzers.</p>
      
      <h2>3. Gewährleistungsausschluss</h2>
      <p>Der Dienst wird im Ist-Zustand und nach Verfügbarkeit bereitgestellt. Obwohl wir bestrebt sind, sicherzustellen, dass das Tool ordnungsgemäß funktioniert, geben wir keine Garantien hinsichtlich seiner Zuverlässigkeit, Genauigkeit oder Eignung für einen bestimmten Zweck. Sie stimmen zu, dass die Nutzung des Dienstes auf Ihr eigenes Risiko erfolgt.</p>
      
      <h2>4. Haftungsbeschränkung</h2>
      <p>In keinem Fall haften Bulk Find & Replace oder dessen Ersteller für direkte, indirekte, zufällige, besondere oder Folgeschäden, die sich aus der Nutzung oder der Unmöglichkeit der Nutzung des Dienstes ergeben. Dies umfasst unter anderem Datenverlust, Beschädigung von Dateien oder andere Verluste, die durch Ihre Nutzung des Tools entstehen. <strong>Wir empfehlen dringend, Ihre Dateien zu sichern oder eine Versionskontrolle zu verwenden, bevor Sie Massenänderungen anwenden.</strong></p>
      
      <h2>5. Verantwortlichkeiten des Benutzers</h2>
      <p>Sie sind allein verantwortlich für die Dateien, die Sie mit dem Dienst verarbeiten. Da das Tool vollständig lokal in Ihrem Browser arbeitet, sind Sie dafür verantwortlich, dass die geänderten Dateien sicher gespeichert oder heruntergeladen werden.</p>
      
      <h2>6. Änderungen am Dienst</h2>
      <p>Wir behalten uns das Recht vor, den Dienst vorübergehend oder dauerhaft mit oder ohne vorherige Ankündigung zu ändern oder einzustellen.</p>
      
    </div>
  );
}
