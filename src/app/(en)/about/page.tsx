import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about BulkFindReplace and our mission to provide a fast, secure, browser-based tool for batch text replacement.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/about",
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
      <h1 className="mb-6 text-3xl font-bold">About Bulk Find & Replace</h1>
      
      <p>Bulk Find & Replace was created to solve a simple but frustrating problem: making the same text change across dozens or hundreds of files without manually opening each one.</p>
      
      <h2>Our Mission</h2>
      <p>We aim to provide developers, content creators, and professionals with a fast, reliable, and completely private tool for bulk editing files. We believe that utility tools should be simple, accessible without arbitrary limits, and most importantly, secure.</p>
      
      <h2>Why Browser-Based?</h2>
      <p>Security and privacy are paramount when dealing with source code, configuration files, and personal documents. By leveraging modern web APIs, we built a tool that runs 100% locally in your web browser. This means your files never leave your device, giving you the power of a desktop application with the convenience of a web site.</p>
      
      <h2>Free to Use</h2>
      <p>We keep the tool free for everyone. To help support the hosting and maintenance costs, we may display non-intrusive advertisements. We are committed to ensuring these ads never interfere with the functionality of the tool.</p>
      
    </div>
  );
}
