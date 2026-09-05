import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a equipe do BulkFindReplace para suporte, feedback ou dúvidas.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/pt-br/contact",
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
      <h1 className="mb-6 text-3xl font-bold">Fale Conosco</h1>
      
      <p>Tem alguma pergunta, feedback ou solicitação de recurso? Adoraríamos ouvir de você.</p>
      
      <h2>Entre em Contato</h2>
      <p>Para suporte, dúvidas ou feedback sobre a ferramenta Bulk Find & Replace, entre em contato conosco por e-mail em:</p>
      <p><strong><a href="mailto:bulkfindreplace.support@gmail.com">bulkfindreplace.support@gmail.com</a></strong></p>
      
      <h2>Relatos de Bugs</h2>
      <p>Se você encontrar algum problema ao usar a ferramenta, inclua as seguintes informações em seu e-mail (em inglês, se possível) para nos ajudar a resolver o problema mais rapidamente:</p>
      <ul>
        <li>Seu sistema operacional (ex.: Windows 11, macOS)</li>
        <li>Seu navegador web (ex.: Chrome, Firefox, Safari)</li>
        <li>Os tipos de arquivos que você estava processando</li>
        <li>Uma breve descrição do problema</li>
      </ul>
      
    </div>
  );
}
