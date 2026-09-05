import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Saiba mais sobre o BulkFindReplace e nossa missão de fornecer uma ferramenta rápida, segura e baseada em navegador para substituição de texto em lote.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/pt-br/about",
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
      <h1 className="mb-6 text-3xl font-bold">Sobre o Bulk Find & Replace</h1>
      
      <p>O Bulk Find & Replace foi criado para resolver um problema simples, mas frustrante: fazer a mesma alteração de texto em dezenas ou centenas de arquivos sem abrir cada um manualmente.</p>
      
      <h2>Nossa Missão</h2>
      <p>Nosso objetivo é fornecer aos desenvolvedores, criadores de conteúdo e profissionais uma ferramenta rápida, confiável e totalmente privada para edição de arquivos em massa. Acreditamos que ferramentas utilitárias devem ser simples, acessíveis sem limites arbitrários e, o mais importante, seguras.</p>
      
      <h2>Por Que Baseado no Navegador?</h2>
      <p>Segurança e privacidade são primordiais ao lidar com código-fonte, arquivos de configuração e documentos pessoais. Aproveitando as APIs web modernas, construímos uma ferramenta que funciona 100% localmente no seu navegador web. Isso significa que seus arquivos nunca saem do seu dispositivo, dando a você o poder de um aplicativo de desktop com a conveniência de um site.</p>
      
      <h2>Uso Gratuito</h2>
      <p>Mantemos a ferramenta gratuita para todos. Para ajudar a cobrir os custos de hospedagem e manutenção, podemos exibir anúncios não intrusivos. Comprometemo-nos a garantir que esses anúncios nunca interfiram na funcionalidade da ferramenta.</p>
      
    </div>
  );
}
