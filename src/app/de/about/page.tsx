import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Uns",
  description: "Erfahren Sie mehr über BulkFindReplace und unsere Mission, ein schnelles, sicheres, browserbasiertes Tool für die Stapeltext-Ersetzung bereitzustellen.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/de/about",
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
      <h1 className="mb-6 text-3xl font-bold">Über Bulk Find & Replace</h1>
      
      <p>Bulk Find & Replace wurde entwickelt, um ein einfaches, aber frustrierendes Problem zu lösen: dieselbe Textänderung in Dutzenden oder Hunderten von Dateien vorzunehmen, ohne jede einzeln manuell öffnen zu müssen.</p>
      
      <h2>Unsere Mission</h2>
      <p>Unser Ziel ist es, Entwicklern, Content-Erstellern und Fachleuten ein schnelles, zuverlässiges und völlig privates Tool für die Massenbearbeitung von Dateien zur Verfügung zu stellen. Wir glauben, dass Dienstprogramme einfach, ohne willkürliche Einschränkungen zugänglich und vor allem sicher sein sollten.</p>
      
      <h2>Warum Browserbasiert?</h2>
      <p>Sicherheit und Datenschutz stehen beim Umgang mit Quellcode, Konfigurationsdateien und persönlichen Dokumenten an erster Stelle. Durch die Nutzung moderner Web-APIs haben wir ein Tool entwickelt, das zu 100 % lokal in Ihrem Webbrowser ausgeführt wird. Das bedeutet, dass Ihre Dateien Ihr Gerät niemals verlassen, was Ihnen die Leistung einer Desktop-Anwendung mit der Bequemlichkeit einer Website bietet.</p>
      
      <h2>Kostenlos Nutzbar</h2>
      <p>Wir halten das Tool für alle kostenlos. Zur Unterstützung der Hosting- und Wartungskosten können wir nicht aufdringliche Werbung anzeigen. Wir verpflichten uns sicherzustellen, dass diese Anzeigen niemals die Funktionalität des Tools beeinträchtigen.</p>
      
    </div>
  );
}
