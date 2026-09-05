import * as React from 'react';

export type Dictionary = {
  title: string;
  subtitle: React.ReactNode;
  clearAll: string;
  sizeLimitError: string;
  errorMessageGeneric: string;
  footerDesc?: string;
  contact?: string;
  privacy?: string;
  terms?: string;
  rights?: string;
  rulesTitle: string;
  tabManual: string;
  tabBulk: string;
  addRule: string;
  findLiteral: string;
  replaceWith: string;
  searchPlaceholder: string;
  replacePlaceholder: string;
  findList: string;
  replaceList: string;
  findListPlaceholder: string;
  replaceListPlaceholder: string;
  items: string;
  generatePairs: string;
  pairingPreview: string;
  pairsCount: string;
  showingPairs: string;
  useTheseRules: string;
  previewResultsTitle: string;
  noFilesPreview: string;
  addFilesHint: string;
  replacementsCount: string;
  noChanges: string;
  filesTitle: string;
  dropFilesHere: string;
  orClickToSelect: string;
  fileTypesInfo: React.ReactNode;
  supportedFileTypes: string;
  code: string;
  dataConfig: string;
  webText: string;
  totalSizeUsage: string;
  skippedFiles: string;
  clear: string;
  unsupportedFileType: string;
  summaryTitle: string;
  filesToProcess: string;
  filesChanging: string;
  totalReplacements: string;
  previewChanges: string;
  replaceAll: string;
  downloadProcessed: string;
  findListEmpty: string;
  listsMustMatch: string;
  blankLinesNotAllowed: string;
  addAtLeastOneFile: string;
  findValueCannotBeEmpty: string;
  addValidRule: string;
  failedToGenerateZip: string;
  tool: string;
  faq: string;
  about: string;
  // Home page text
  pageH1: string;
  pageIntro: string;
  adAdvertisement: string;
  articleTitle1: string;
  articleP1: React.ReactNode;
  articleP2: React.ReactNode;
  articleTitle2: string;
  articleP3: string;
  li1: React.ReactNode;
  li2: React.ReactNode;
  li3: React.ReactNode;
  li4: React.ReactNode;
  li5: React.ReactNode;
  articleTitle3: string;
  articleP4: string;
  articleP5: React.ReactNode;
  articleTitle4: string;
  articleP6: string;
  useCase1: React.ReactNode;
  useCase2: React.ReactNode;
  useCase3: React.ReactNode;
  useCase4: React.ReactNode;
  useCase5: React.ReactNode;
  useCase6: React.ReactNode;
  articleTitle5: string;
  articleP7: React.ReactNode;
  faqTitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: React.ReactNode;
  faq5Q: string;
  faq5A: string;
  faq6Q: string;
  faq6A: string;
  faq7Q: string;
  faq7A: string;
  faq8Q: string;
  faq8A: string;
  faq9Q: string;
  faq9A: string;
  faq10Q: string;
  faq10A: string;
};

export const enDict: Dictionary = {
  title: "Bulk Find & Replace",
  subtitle: "Apply sequential replacement rules across multiple files. Files are processed locally in your browser.",
  clearAll: "Clear All",
  sizeLimitError: "Total file size exceeds the 50 MB limit. Remove some files to continue.",
  errorMessageGeneric: "An error occurred.",
  rulesTitle: "Replacement Rules",
  tabManual: "Manual Editor",
  tabBulk: "Bulk Pair Lists",
  addRule: "Add Rule",
  findLiteral: "Find (Literal)",
  replaceWith: "Replace with",
  searchPlaceholder: "Search string...",
  replacePlaceholder: "Replacement string...",
  findList: "Find List",
  replaceList: "Replace List",
  findListPlaceholder: "old-api\ndebug=true",
  replaceListPlaceholder: "new-api\ndebug=false",
  items: "items",
  generatePairs: "Generate Pairs",
  pairingPreview: "Pairing Preview",
  pairsCount: "pairs",
  showingPairs: "Showing",
  useTheseRules: "Use These Rules",
  previewResultsTitle: "Preview & Results",
  noFilesPreview: "No files to preview",
  addFilesHint: "Add files to see replacement statistics",
  replacementsCount: "replacements",
  noChanges: "No changes",
  filesTitle: "Files",
  dropFilesHere: "Drop files here",
  orClickToSelect: "or click to select",
  fileTypesInfo: "Text & code files · 50 MB total",
  supportedFileTypes: "Supported file types",
  code: "Code",
  dataConfig: "Data & Config",
  webText: "Web & Text",
  totalSizeUsage: "Total size usage",
  skippedFiles: "Skipped files",
  clear: "Clear",
  unsupportedFileType: "Unsupported file type",
  summaryTitle: "Summary",
  filesToProcess: "Files to process:",
  filesChanging: "Files changing:",
  totalReplacements: "Total replacements:",
  previewChanges: "Preview Changes",
  replaceAll: "Replace All",
  downloadProcessed: "Download Processed",
  findListEmpty: "Find list cannot be empty.",
  listsMustMatch: "Both lists must contain the same number of items.",
  blankLinesNotAllowed: "Blank lines are not allowed in the Find list.",
  addAtLeastOneFile: "Please add at least one file to process.",
  findValueCannotBeEmpty: "Find value cannot be empty in any rule.",
  addValidRule: "Please add at least one valid replacement rule.",
  failedToGenerateZip: "Failed to generate ZIP file.",
  tool: "Tool",
  faq: "FAQ",
  about: "About",
  pageH1: "Find and Replace Text in Multiple Files Online",
  pageIntro: "Upload multiple files, add one or many find → replace rules, process everything in your browser, and download the updated files as a ZIP.",
  adAdvertisement: "Advertisement",
  articleTitle1: "Bulk Find and Replace Multiple Files",
  articleP1: <>Need to <strong>find and replace in multiple files</strong> without downloading complicated software? Our bulk find and replace tool lets you make the exact same text changes across dozens, hundreds, or even thousands of files instantly.</>,
  articleP2: <><strong>Your files are processed locally in your browser and are not uploaded to our server.</strong> You can read our <a href="/privacy">Privacy Policy</a> to learn more about how we keep your data secure. For more information about the tool's origins, check out our <a href="/about">About page</a>.</>,
  articleTitle2: "How to Replace Text Across Multiple Files",
  articleP3: "Using our bulk file editor is straightforward:",
  li1: <><strong>Select or drop multiple files</strong> into the upload area above. Maximum total selected file size: 50 MB.</>,
  li2: <><strong>Add your replacement rules.</strong> You can apply multiple find and replace rules at once.</>,
  li3: <>Click <strong>Preview Changes</strong> to see how many files will be modified.</>,
  li4: <>Click <strong>Apply Changes</strong> to execute the text replacements.</>,
  li5: <>Click <strong>Download All Files</strong> to get a ZIP archive of your newly modified files.</>,
  articleTitle3: "Apply Multiple Find and Replace Rules at Once",
  articleP4: "Unlike basic text editors, BulkFindReplace allows you to define multiple replacement rules in a single workflow.",
  articleP5: <><strong>Sequential replacement behavior:</strong><br />Rules are applied from top to bottom. For example, if your first rule is <code>foo → bar</code> and your second rule is <code>bar → baz</code>, any instance of <code>foo</code> will ultimately become <code>baz</code>.</>,
  articleTitle4: "Common Use Cases",
  articleP6: "Here are some common scenarios where batch text replacement is useful:",
  useCase1: <><strong>Update domains across HTML files:</strong> Change an old URL to a new one across a static website.</>,
  useCase2: <><strong>Update API URLs across config files:</strong> Swap out an old endpoint URL for a new one in <code>.json</code> or <code>.yaml</code> files.</>,
  useCase3: <><strong>Rename values across JSON files:</strong> Standardize property names or values in large data exports.</>,
  useCase4: <><strong>Update Markdown links:</strong> Fix broken internal links across documentation in <code>.md</code> files.</>,
  useCase5: <><strong>Update repeated strings across source files:</strong> Change variable names or class names across <code>.js</code>, <code>.ts</code>, or <code>.css</code> files.</>,
  useCase6: <><strong>Migrate environment/config values:</strong> Quickly update <code>.env</code> examples or property files.</>,
  articleTitle5: "Why Use BulkFindReplace",
  articleP7: <>We built this tool to solve a specific problem: quickly replacing text in multiple files online without installing a desktop application or writing a custom script. By processing everything directly in your browser, it's fast, free, and secure. If you encounter any issues, please <a href="/contact">contact us</a>. By using the tool, you agree to our <a href="/terms">Terms of Service</a>.</>,
  faqTitle: "Frequently Asked Questions",
  faq1Q: "Can I find and replace text in multiple files at once?",
  faq1A: "Yes, the primary purpose of this tool is to process multiple files at the same time. Simply select or drag your files into the upload area.",
  faq2Q: "Can I use multiple find and replace rules?",
  faq2A: "Yes, you can add multiple find and replace rules. They are applied sequentially from top to bottom on each file.",
  faq3Q: "Are my files uploaded to a server?",
  faq3A: "No. Your files are processed locally in your browser and are not uploaded to our server.",
  faq4Q: "What file types are supported?",
  faq4A: <>We support most text-based files, including code (<code>.js</code>, <code>.ts</code>, <code>.py</code>), data (<code>.json</code>, <code>.csv</code>, <code>.xml</code>), and web files (<code>.html</code>, <code>.css</code>, <code>.md</code>).</>,
  faq5Q: "What is the maximum file size?",
  faq5A: "Maximum total selected file size: 50 MB.",
  faq6Q: "Can I replace text with an empty value?",
  faq6A: "Yes, you can leave the \"Replace\" field blank to completely remove the matched text from your files.",
  faq7Q: "Are replacement rules case sensitive?",
  faq7A: "Yes, our basic literal string replacement is case-sensitive by default to ensure precise matches.",
  faq8Q: "In what order are replacement rules applied?",
  faq8A: "Rules are applied sequentially from top to bottom. The output of the first rule becomes the input for the second rule, and so on.",
  faq9Q: "Do I need to install software?",
  faq9A: "No, the entire tool runs in your browser. There is nothing to install.",
  faq10Q: "Do I need an account?",
  faq10A: "No, the tool is completely free to use and requires no account or registration."
};

export const frDict: Dictionary = {
  title: "Rechercher et Remplacer en Masse",
  subtitle: "Appliquez des règles de remplacement séquentielles sur plusieurs fichiers. Les fichiers sont traités localement dans votre navigateur.",
  clearAll: "Tout Effacer",
  sizeLimitError: "La taille totale des fichiers dépasse la limite de 50 Mo. Supprimez quelques fichiers pour continuer.",
  errorMessageGeneric: "Une erreur est survenue.",
  rulesTitle: "Règles de Remplacement",
  tabManual: "Éditeur Manuel",
  tabBulk: "Listes en Masse",
  addRule: "Ajouter une Règle",
  findLiteral: "Rechercher (Littéral)",
  replaceWith: "Remplacer par",
  searchPlaceholder: "Chaîne à rechercher...",
  replacePlaceholder: "Chaîne de remplacement...",
  findList: "Liste de Recherche",
  replaceList: "Liste de Remplacement",
  findListPlaceholder: "old-api\ndebug=true",
  replaceListPlaceholder: "new-api\ndebug=false",
  items: "éléments",
  generatePairs: "Générer les Paires",
  pairingPreview: "Aperçu des Paires",
  pairsCount: "paires",
  showingPairs: "Affichage de",
  useTheseRules: "Utiliser Ces Règles",
  previewResultsTitle: "Aperçu et Résultats",
  noFilesPreview: "Aucun fichier à prévisualiser",
  addFilesHint: "Ajoutez des fichiers pour voir les statistiques",
  replacementsCount: "remplacements",
  noChanges: "Aucun changement",
  filesTitle: "Fichiers",
  dropFilesHere: "Déposez les fichiers ici",
  orClickToSelect: "ou cliquez pour sélectionner",
  fileTypesInfo: "Fichiers texte et code · 50 Mo max",
  supportedFileTypes: "Types de fichiers supportés",
  code: "Code",
  dataConfig: "Données & Configuration",
  webText: "Web & Texte",
  totalSizeUsage: "Taille utilisée",
  skippedFiles: "Fichiers ignorés",
  clear: "Effacer",
  unsupportedFileType: "Type non supporté",
  summaryTitle: "Résumé",
  filesToProcess: "Fichiers à traiter :",
  filesChanging: "Fichiers modifiés :",
  totalReplacements: "Remplacements totaux :",
  previewChanges: "Prévisualiser les Changements",
  replaceAll: "Tout Remplacer",
  downloadProcessed: "Télécharger les Fichiers",
  findListEmpty: "La liste de recherche ne peut pas être vide.",
  listsMustMatch: "Les deux listes doivent contenir le même nombre d'éléments.",
  blankLinesNotAllowed: "Les lignes vides ne sont pas autorisées dans la liste de recherche.",
  addAtLeastOneFile: "Veuillez ajouter au moins un fichier à traiter.",
  findValueCannotBeEmpty: "La valeur de recherche ne peut pas être vide.",
  addValidRule: "Veuillez ajouter au moins une règle de remplacement valide.",
  failedToGenerateZip: "Échec de la génération du fichier ZIP.",
  tool: "Outil",
  faq: "FAQ",
  about: "À Propos",
  pageH1: "Chercher et Remplacer du Texte dans Plusieurs Fichiers",
  pageIntro: "Uploadez plusieurs fichiers, ajoutez des règles de recherche → remplacement, traitez tout dans votre navigateur et téléchargez les fichiers mis à jour en ZIP.",
  adAdvertisement: "Publicité",
  articleTitle1: "Recherche et remplacement par lot pour plusieurs fichiers",
  articleP1: <>Besoin de <strong>chercher et remplacer dans plusieurs fichiers</strong> sans télécharger de logiciel compliqué ? Notre outil vous permet d'effectuer les mêmes modifications de texte sur des dizaines, centaines, ou même milliers de fichiers instantanément.</>,
  articleP2: <><strong>Vos fichiers sont traités localement dans votre navigateur et ne sont pas uploadés sur notre serveur.</strong> Lisez notre <a href="/privacy">Politique de Confidentialité</a> pour en savoir plus. Découvrez les origines de l'outil sur la <a href="/about">page À Propos</a>.</>,
  articleTitle2: "Comment remplacer du texte dans plusieurs fichiers",
  articleP3: "L'utilisation de notre éditeur de fichiers en masse est simple :",
  li1: <><strong>Sélectionnez ou glissez-déposez plusieurs fichiers</strong>. Taille maximale totale : 50 Mo.</>,
  li2: <><strong>Ajoutez vos règles de remplacement.</strong> Vous pouvez appliquer plusieurs règles de recherche et remplacement à la fois.</>,
  li3: <>Cliquez sur <strong>Prévisualiser les Changements</strong> pour voir combien de fichiers seront modifiés.</>,
  li4: <>Cliquez sur <strong>Tout Remplacer</strong> pour exécuter les remplacements.</>,
  li5: <>Cliquez sur <strong>Télécharger les Fichiers</strong> pour obtenir une archive ZIP.</>,
  articleTitle3: "Appliquez plusieurs règles à la fois",
  articleP4: "Contrairement aux éditeurs de texte classiques, BulkFindReplace vous permet de définir plusieurs règles de remplacement en une seule fois.",
  articleP5: <><strong>Comportement de remplacement séquentiel :</strong><br />Les règles sont appliquées de haut en bas. Par exemple, si la première règle est <code>foo → bar</code> et la deuxième <code>bar → baz</code>, toute instance de <code>foo</code> deviendra finalement <code>baz</code>.</>,
  articleTitle4: "Cas d'utilisation courants",
  articleP6: "Voici quelques scénarios où le remplacement de texte par lot est utile :",
  useCase1: <><strong>Mise à jour de domaines (fichiers HTML) :</strong> Remplacez une ancienne URL par une nouvelle sur un site web statique.</>,
  useCase2: <><strong>Mise à jour d'URLs d'API (fichiers de configuration) :</strong> Changez une URL de endpoint dans des fichiers <code>.json</code> ou <code>.yaml</code>.</>,
  useCase3: <><strong>Renommer des valeurs (fichiers JSON) :</strong> Standardisez des noms de propriétés dans de grands exports de données.</>,
  useCase4: <><strong>Mettre à jour des liens Markdown :</strong> Corrigez les liens internes brisés dans la documentation (fichiers <code>.md</code>).</>,
  useCase5: <><strong>Mettre à jour des chaînes répétées (fichiers source) :</strong> Changez des noms de variables ou classes (fichiers <code>.js</code>, <code>.ts</code>, <code>.css</code>).</>,
  useCase6: <><strong>Migrer des valeurs de configuration :</strong> Mettez à jour rapidement des fichiers <code>.env</code>.</>,
  articleTitle5: "Pourquoi utiliser BulkFindReplace",
  articleP7: <>Nous avons créé cet outil pour résoudre un problème spécifique : remplacer rapidement du texte dans plusieurs fichiers en ligne sans installer d'application de bureau ou écrire un script sur mesure. Tout étant traité directement dans votre navigateur, c'est rapide, gratuit et sécurisé. Si vous rencontrez un problème, veuillez <a href="/contact">nous contacter (support en anglais)</a>. En utilisant l'outil, vous acceptez nos <a href="/terms">Conditions d'Utilisation</a>.</>,
  faqTitle: "Foire Aux Questions",
  faq1Q: "Puis-je chercher et remplacer du texte dans plusieurs fichiers à la fois ?",
  faq1A: "Oui, le but principal de cet outil est de traiter plusieurs fichiers simultanément.",
  faq2Q: "Puis-je utiliser plusieurs règles de recherche et remplacement ?",
  faq2A: "Oui, vous pouvez ajouter plusieurs règles. Elles sont appliquées de manière séquentielle de haut en bas sur chaque fichier.",
  faq3Q: "Mes fichiers sont-ils envoyés sur un serveur ?",
  faq3A: "Non. Vos fichiers sont traités localement dans votre navigateur et ne sont jamais uploadés sur notre serveur.",
  faq4Q: "Quels types de fichiers sont supportés ?",
  faq4A: <>Nous supportons la plupart des fichiers textuels, dont le code (<code>.js</code>, <code>.ts</code>, <code>.py</code>), les données (<code>.json</code>, <code>.csv</code>, <code>.xml</code>), et les fichiers web (<code>.html</code>, <code>.css</code>, <code>.md</code>).</>,
  faq5Q: "Quelle est la taille de fichier maximale ?",
  faq5A: "La taille maximale totale pour les fichiers sélectionnés est de 50 Mo.",
  faq6Q: "Puis-je remplacer du texte par une valeur vide ?",
  faq6A: "Oui, vous pouvez laisser le champ \"Remplacer\" vide pour supprimer complètement le texte correspondant de vos fichiers.",
  faq7Q: "Les règles de remplacement sont-elles sensibles à la casse ?",
  faq7A: "Oui, notre remplacement de chaîne basique est sensible à la casse par défaut pour garantir des correspondances précises.",
  faq8Q: "Dans quel ordre les règles sont-elles appliquées ?",
  faq8A: "Les règles sont appliquées de manière séquentielle de haut en bas. Le résultat de la première règle devient l'entrée pour la seconde, et ainsi de suite.",
  faq9Q: "Dois-je installer un logiciel ?",
  faq9A: "Non, tout l'outil fonctionne dans votre navigateur web. Il n'y a rien à installer.",
  faq10Q: "Dois-je créer un compte ?",
  faq10A: "Non, l'outil est entièrement gratuit et ne nécessite ni compte ni inscription."
};

export const deDict: Dictionary = {
  title: "Massenhaft Suchen & Ersetzen",
  subtitle: "Wenden Sie sequentielle Ersetzungsregeln auf mehrere Dateien an. Dateien werden lokal in Ihrem Browser verarbeitet.",
  clearAll: "Alles Löschen",
  sizeLimitError: "Die Gesamtgröße überschreitet das Limit von 50 MB. Entfernen Sie einige Dateien, um fortzufahren.",
  errorMessageGeneric: "Ein Fehler ist aufgetreten.",
  rulesTitle: "Ersetzungsregeln",
  tabManual: "Manueller Editor",
  tabBulk: "Massenlisten",
  addRule: "Regel Hinzufügen",
  findLiteral: "Suchen (Literal)",
  replaceWith: "Ersetzen durch",
  searchPlaceholder: "Suchbegriff...",
  replacePlaceholder: "Ersetzungsbegriff...",
  findList: "Suchliste",
  replaceList: "Ersetzungsliste",
  findListPlaceholder: "old-api\ndebug=true",
  replaceListPlaceholder: "new-api\ndebug=false",
  items: "Elemente",
  generatePairs: "Paare Generieren",
  pairingPreview: "Paar-Vorschau",
  pairsCount: "Paare",
  showingPairs: "Zeige",
  useTheseRules: "Diese Regeln Verwenden",
  previewResultsTitle: "Vorschau & Ergebnisse",
  noFilesPreview: "Keine Dateien für die Vorschau",
  addFilesHint: "Fügen Sie Dateien hinzu, um Statistiken zu sehen",
  replacementsCount: "Ersetzungen",
  noChanges: "Keine Änderungen",
  filesTitle: "Dateien",
  dropFilesHere: "Dateien hier ablegen",
  orClickToSelect: "oder klicken zum Auswählen",
  fileTypesInfo: "Text- & Code-Dateien · max. 50 MB",
  supportedFileTypes: "Unterstützte Dateitypen",
  code: "Code",
  dataConfig: "Daten & Konfiguration",
  webText: "Web & Text",
  totalSizeUsage: "Speicherplatz",
  skippedFiles: "Übersprungene Dateien",
  clear: "Löschen",
  unsupportedFileType: "Nicht unterstützter Typ",
  summaryTitle: "Zusammenfassung",
  filesToProcess: "Zu verarbeitende Dateien:",
  filesChanging: "Geänderte Dateien:",
  totalReplacements: "Gesamte Ersetzungen:",
  previewChanges: "Vorschau der Änderungen",
  replaceAll: "Alles Ersetzen",
  downloadProcessed: "Dateien Herunterladen",
  findListEmpty: "Die Suchliste darf nicht leer sein.",
  listsMustMatch: "Beide Listen müssen die gleiche Anzahl an Elementen enthalten.",
  blankLinesNotAllowed: "Leere Zeilen sind in der Suchliste nicht erlaubt.",
  addAtLeastOneFile: "Bitte fügen Sie mindestens eine Datei zur Verarbeitung hinzu.",
  findValueCannotBeEmpty: "Der Suchwert darf in keiner Regel leer sein.",
  addValidRule: "Bitte fügen Sie mindestens eine gültige Ersetzungsregel hinzu.",
  failedToGenerateZip: "Fehler beim Erstellen der ZIP-Datei.",
  tool: "Werkzeug",
  faq: "FAQ",
  about: "Über",
  pageH1: "Text in Mehreren Dateien Suchen und Ersetzen",
  pageIntro: "Laden Sie mehrere Dateien hoch, fügen Sie Such- → Ersetzungsregeln hinzu, verarbeiten Sie alles in Ihrem Browser und laden Sie die ZIP-Datei herunter.",
  adAdvertisement: "Anzeige",
  articleTitle1: "Massenhaftes Suchen und Ersetzen von Dateien",
  articleP1: <>Müssen Sie <strong>in mehreren Dateien suchen und ersetzen</strong>, ohne komplizierte Software herunterzuladen? Mit unserem Tool können Sie dieselben Textänderungen über dutzende, hunderte oder tausende Dateien hinweg sofort vornehmen.</>,
  articleP2: <><strong>Ihre Dateien werden lokal in Ihrem Browser verarbeitet und nicht auf unseren Server hochgeladen.</strong> Lesen Sie unsere <a href="/privacy">Datenschutzerklärung</a> für weitere Informationen. Weitere Details finden Sie auf der <a href="/about">Über-Seite</a>.</>,
  articleTitle2: "Wie man Text in mehreren Dateien ersetzt",
  articleP3: "Die Verwendung unseres Bulk-Datei-Editors ist einfach:",
  li1: <><strong>Wählen Sie mehrere Dateien aus oder ziehen Sie sie per Drag & Drop</strong> in den Upload-Bereich. Maximale Dateigröße: 50 MB.</>,
  li2: <><strong>Fügen Sie Ihre Ersetzungsregeln hinzu.</strong> Sie können mehrere Regeln gleichzeitig anwenden.</>,
  li3: <>Klicken Sie auf <strong>Vorschau der Änderungen</strong>, um zu sehen, wie viele Dateien geändert werden.</>,
  li4: <>Klicken Sie auf <strong>Alles Ersetzen</strong>, um die Textersetzungen durchzuführen.</>,
  li5: <>Klicken Sie auf <strong>Dateien Herunterladen</strong>, um ein ZIP-Archiv der geänderten Dateien zu erhalten.</>,
  articleTitle3: "Mehrere Such- und Ersetzungsregeln anwenden",
  articleP4: "Im Gegensatz zu einfachen Texteditoren können Sie mit BulkFindReplace mehrere Ersetzungsregeln in einem einzigen Arbeitsablauf definieren.",
  articleP5: <><strong>Sequenzielles Ersetzungsverhalten:</strong><br />Die Regeln werden von oben nach unten angewendet. Wenn Ihre erste Regel beispielsweise <code>foo → bar</code> und Ihre zweite Regel <code>bar → baz</code> lautet, wird jede Instanz von <code>foo</code> letztendlich zu <code>baz</code>.</>,
  articleTitle4: "Häufige Anwendungsfälle",
  articleP6: "Hier sind einige gängige Szenarien, in denen Batch-Textersetzung nützlich ist:",
  useCase1: <><strong>Domänen über HTML-Dateien hinweg aktualisieren:</strong> Ändern Sie eine alte URL auf einer statischen Website.</>,
  useCase2: <><strong>API-URLs über Konfigurationsdateien hinweg aktualisieren:</strong> Tauschen Sie eine alte Endpoint-URL in <code>.json</code>- oder <code>.yaml</code>-Dateien aus.</>,
  useCase3: <><strong>Werte über JSON-Dateien hinweg umbenennen:</strong> Standardisieren Sie Eigenschaftennamen in großen Datenexporten.</>,
  useCase4: <><strong>Markdown-Links aktualisieren:</strong> Reparieren Sie fehlerhafte interne Links in Dokumentationen (<code>.md</code>-Dateien).</>,
  useCase5: <><strong>Wiederholte Zeichenfolgen in Quelldateien aktualisieren:</strong> Ändern Sie Variablen- oder Klassennamen in <code>.js</code>, <code>.ts</code> oder <code>.css</code> Dateien.</>,
  useCase6: <><strong>Umgebungs-/Konfigurationswerte migrieren:</strong> Aktualisieren Sie <code>.env</code> Dateien schnell.</>,
  articleTitle5: "Warum BulkFindReplace verwenden",
  articleP7: <>Wir haben dieses Tool entwickelt, um ein bestimmtes Problem zu lösen: das schnelle Ersetzen von Text in mehreren Dateien online, ohne eine Desktop-Anwendung zu installieren oder ein Skript zu schreiben. Da alles direkt in Ihrem Browser verarbeitet wird, ist es schnell, kostenlos und sicher. Wenn Sie auf Probleme stoßen, <a href="/contact">kontaktieren Sie uns (Support auf Englisch)</a>. Durch die Nutzung des Tools stimmen Sie unseren <a href="/terms">Nutzungsbedingungen</a> zu.</>,
  faqTitle: "Häufig Gestellte Fragen",
  faq1Q: "Kann ich Text in mehreren Dateien gleichzeitig suchen und ersetzen?",
  faq1A: "Ja, der Hauptzweck dieses Tools ist die gleichzeitige Verarbeitung mehrerer Dateien.",
  faq2Q: "Kann ich mehrere Ersetzungsregeln verwenden?",
  faq2A: "Ja, Sie können mehrere Regeln hinzufügen. Sie werden nacheinander von oben nach unten angewendet.",
  faq3Q: "Werden meine Dateien auf einen Server hochgeladen?",
  faq3A: "Nein. Ihre Dateien werden lokal in Ihrem Browser verarbeitet und nicht auf unseren Server hochgeladen.",
  faq4Q: "Welche Dateitypen werden unterstützt?",
  faq4A: <>Wir unterstützen die meisten textbasierten Dateien, einschließlich Code (<code>.js</code>, <code>.ts</code>, <code>.py</code>), Daten (<code>.json</code>, <code>.csv</code>, <code>.xml</code>) und Web-Dateien (<code>.html</code>, <code>.css</code>, <code>.md</code>).</>,
  faq5Q: "Was ist die maximale Dateigröße?",
  faq5A: "Die maximale Gesamtgröße der ausgewählten Dateien beträgt 50 MB.",
  faq6Q: "Kann ich Text durch einen leeren Wert ersetzen?",
  faq6A: "Ja, Sie können das Feld \"Ersetzen durch\" leer lassen, um den übereinstimmenden Text vollständig aus Ihren Dateien zu entfernen.",
  faq7Q: "Berücksichtigen die Ersetzungsregeln Groß- und Kleinschreibung?",
  faq7A: "Ja, unsere grundlegende Ersetzung unterscheidet standardmäßig zwischen Groß- und Kleinschreibung.",
  faq8Q: "In welcher Reihenfolge werden die Regeln angewendet?",
  faq8A: "Die Regeln werden nacheinander von oben nach unten angewendet. Die Ausgabe der ersten Regel wird zur Eingabe für die zweite Regel und so weiter.",
  faq9Q: "Muss ich Software installieren?",
  faq9A: "Nein, das gesamte Tool läuft in Ihrem Webbrowser. Es muss nichts installiert werden.",
  faq10Q: "Brauche ich ein Konto?",
  faq10A: "Nein, das Tool ist völlig kostenlos und erfordert keine Registrierung."
};

export const ptBrDict: Dictionary = {
  title: "Localizar e Substituir em Massa",
  subtitle: "Aplique regras sequenciais de substituição em vários arquivos. Os arquivos são processados localmente no seu navegador.",
  clearAll: "Limpar Tudo",
  sizeLimitError: "O tamanho total dos arquivos excede o limite de 50 MB. Remova alguns arquivos para continuar.",
  errorMessageGeneric: "Ocorreu um erro.",
  rulesTitle: "Regras de Substituição",
  tabManual: "Editor Manual",
  tabBulk: "Listas em Massa",
  addRule: "Adicionar Regra",
  findLiteral: "Localizar (Literal)",
  replaceWith: "Substituir por",
  searchPlaceholder: "Texto para buscar...",
  replacePlaceholder: "Texto de substituição...",
  findList: "Lista de Busca",
  replaceList: "Lista de Substituição",
  findListPlaceholder: "old-api\ndebug=true",
  replaceListPlaceholder: "new-api\ndebug=false",
  items: "itens",
  generatePairs: "Gerar Pares",
  pairingPreview: "Pré-visualização",
  pairsCount: "pares",
  showingPairs: "Mostrando",
  useTheseRules: "Usar Estas Regras",
  previewResultsTitle: "Resultados",
  noFilesPreview: "Nenhum arquivo para pré-visualizar",
  addFilesHint: "Adicione arquivos para ver as estatísticas",
  replacementsCount: "substituições",
  noChanges: "Sem alterações",
  filesTitle: "Arquivos",
  dropFilesHere: "Solte os arquivos aqui",
  orClickToSelect: "ou clique para selecionar",
  fileTypesInfo: "Arquivos de texto e código · 50 MB total",
  supportedFileTypes: "Tipos de arquivos suportados",
  code: "Código",
  dataConfig: "Dados e Configurações",
  webText: "Web e Texto",
  totalSizeUsage: "Tamanho utilizado",
  skippedFiles: "Arquivos ignorados",
  clear: "Limpar",
  unsupportedFileType: "Tipo não suportado",
  summaryTitle: "Resumo",
  filesToProcess: "Arquivos a processar:",
  filesChanging: "Arquivos modificados:",
  totalReplacements: "Total de substituições:",
  previewChanges: "Pré-visualizar Alterações",
  replaceAll: "Substituir Tudo",
  downloadProcessed: "Baixar Processados",
  findListEmpty: "A lista de busca não pode estar vazia.",
  listsMustMatch: "Ambas as listas devem conter o mesmo número de itens.",
  blankLinesNotAllowed: "Linhas em branco não são permitidas na lista de busca.",
  addAtLeastOneFile: "Por favor, adicione pelo menos um arquivo para processar.",
  findValueCannotBeEmpty: "O valor de busca não pode estar vazio.",
  addValidRule: "Por favor, adicione pelo menos uma regra válida.",
  failedToGenerateZip: "Falha ao gerar o arquivo ZIP.",
  tool: "Ferramenta",
  faq: "FAQ",
  about: "Sobre",
  pageH1: "Localizar e Substituir Texto em Vários Arquivos",
  pageIntro: "Envie vários arquivos, adicione regras de localizar → substituir, processe tudo no seu navegador e baixe os arquivos atualizados em um ZIP.",
  adAdvertisement: "Anúncio",
  articleTitle1: "Localizar e Substituir em Massa em Vários Arquivos",
  articleP1: <>Precisa <strong>localizar e substituir em vários arquivos</strong> sem baixar softwares complicados? Nossa ferramenta permite fazer as mesmas alterações de texto em dezenas, centenas ou milhares de arquivos instantaneamente.</>,
  articleP2: <><strong>Seus arquivos são processados localmente no seu navegador e não são enviados para nosso servidor.</strong> Leia nossa <a href="/privacy">Política de Privacidade</a> para saber mais. Para mais informações, acesse a <a href="/about">página Sobre</a>.</>,
  articleTitle2: "Como Substituir Texto em Vários Arquivos",
  articleP3: "Usar nosso editor em massa é simples:",
  li1: <><strong>Selecione ou solte vários arquivos</strong> na área de upload acima. Tamanho máximo total: 50 MB.</>,
  li2: <><strong>Adicione suas regras de substituição.</strong> Você pode aplicar várias regras de uma vez.</>,
  li3: <>Clique em <strong>Pré-visualizar Alterações</strong> para ver quantos arquivos serão modificados.</>,
  li4: <>Clique em <strong>Substituir Tudo</strong> para executar as substituições de texto.</>,
  li5: <>Clique em <strong>Baixar Processados</strong> para obter um arquivo ZIP.</>,
  articleTitle3: "Aplique Várias Regras de Uma Vez",
  articleP4: "Ao contrário de editores básicos, o BulkFindReplace permite definir várias regras de substituição em um único fluxo de trabalho.",
  articleP5: <><strong>Comportamento de substituição sequencial:</strong><br />As regras são aplicadas de cima para baixo. Por exemplo, se sua primeira regra é <code>foo → bar</code> e a segunda é <code>bar → baz</code>, qualquer instância de <code>foo</code> acabará se tornando <code>baz</code>.</>,
  articleTitle4: "Casos de Uso Comuns",
  articleP6: "Aqui estão alguns cenários onde a substituição em lote é útil:",
  useCase1: <><strong>Atualizar domínios (arquivos HTML):</strong> Mude um URL antigo para um novo em um site estático.</>,
  useCase2: <><strong>Atualizar URLs de API (arquivos de configuração):</strong> Troque um endpoint em arquivos <code>.json</code> ou <code>.yaml</code>.</>,
  useCase3: <><strong>Renomear valores (arquivos JSON):</strong> Padronize nomes de propriedades em grandes exportações de dados.</>,
  useCase4: <><strong>Atualizar links Markdown:</strong> Corrija links internos quebrados em arquivos <code>.md</code>.</>,
  useCase5: <><strong>Atualizar strings repetidas (código fonte):</strong> Altere nomes de variáveis em arquivos <code>.js</code>, <code>.ts</code> ou <code>.css</code>.</>,
  useCase6: <><strong>Migrar valores de ambiente:</strong> Atualize arquivos <code>.env</code> rapidamente.</>,
  articleTitle5: "Por Que Usar o BulkFindReplace",
  articleP7: <>Criamos esta ferramenta para resolver um problema específico: substituir texto rapidamente em vários arquivos online sem instalar um aplicativo desktop ou escrever um script. Como tudo é processado no seu navegador, é rápido, gratuito e seguro. Se você encontrar algum problema, <a href="/contact">entre em contato (suporte em inglês)</a>. Ao usar a ferramenta, você concorda com nossos <a href="/terms">Termos de Serviço</a>.</>,
  faqTitle: "Perguntas Frequentes",
  faq1Q: "Posso localizar e substituir texto em vários arquivos de uma vez?",
  faq1A: "Sim, o objetivo principal desta ferramenta é processar vários arquivos ao mesmo tempo.",
  faq2Q: "Posso usar várias regras de localizar e substituir?",
  faq2A: "Sim, você pode adicionar várias regras. Elas são aplicadas sequencialmente, de cima para baixo.",
  faq3Q: "Meus arquivos são enviados para um servidor?",
  faq3A: "Não. Seus arquivos são processados localmente no seu navegador e não são enviados para o nosso servidor.",
  faq4Q: "Quais tipos de arquivos são suportados?",
  faq4A: <>Suportamos a maioria dos arquivos de texto, incluindo código (<code>.js</code>, <code>.ts</code>, <code>.py</code>), dados (<code>.json</code>, <code>.csv</code>, <code>.xml</code>) e arquivos da web (<code>.html</code>, <code>.css</code>, <code>.md</code>).</>,
  faq5Q: "Qual é o tamanho máximo de arquivo?",
  faq5A: "O tamanho máximo total dos arquivos selecionados é de 50 MB.",
  faq6Q: "Posso substituir texto por um valor vazio?",
  faq6A: "Sim, você pode deixar o campo \"Substituir por\" em branco para remover o texto correspondente dos seus arquivos.",
  faq7Q: "As regras diferenciam maiúsculas de minúsculas?",
  faq7A: "Sim, nossa substituição básica é sensível a maiúsculas e minúsculas por padrão.",
  faq8Q: "Em que ordem as regras são aplicadas?",
  faq8A: "As regras são aplicadas sequencialmente, de cima para baixo. A saída da primeira regra se torna a entrada da segunda, e assim por diante.",
  faq9Q: "Preciso instalar algum software?",
  faq9A: "Não, toda a ferramenta roda no seu navegador web. Não há nada para instalar.",
  faq10Q: "Preciso de uma conta?",
  faq10A: "Não, a ferramenta é totalmente gratuita e não exige registro."
};

export const dictionaries: Record<string, Dictionary> = {
  "en": enDict,
  "fr": frDict,
  "de": deDict,
  "pt-br": ptBrDict,
};
