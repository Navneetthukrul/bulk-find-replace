import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Leia nossa política de privacidade. Seus arquivos são processados localmente em seu navegador e nunca são enviados para nosso servidor.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/pt-br/privacy",
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
      <h1 className="mb-6 text-3xl font-bold">Política de Privacidade</h1>
      
      <p>Última atualização: {new Date().toLocaleDateString()}</p>
      
      <p>No Bulk Find & Replace, sua privacidade e segurança de dados são nossas principais preocupações. Esta Política de Privacidade descreve como lidamos com as informações quando você usa nosso site.</p>
      
      <h2>1. Processamento do Lado do Cliente</h2>
      <p>Nossa ferramenta é projetada com uma arquitetura estrita "apenas do lado do cliente". Quando você usa a ferramenta Bulk Find & Replace:</p>
      <ul>
        <li><strong>Sem Upload de Arquivos:</strong> Seus arquivos nunca são carregados, transmitidos ou armazenados em nossos servidores.</li>
        <li><strong>Processamento Local:</strong> Toda a leitura de arquivos, substituição de texto e geração de ZIP acontecem inteiramente no seu navegador web, no seu próprio dispositivo.</li>
        <li><strong>Conteúdo do Arquivo:</strong> Não temos acesso ao conteúdo dos seus arquivos, às suas regras de substituição ou a quaisquer dados confidenciais que você processe usando a ferramenta.</li>
      </ul>
      
      <h2>2. Análise de Dados (Analytics)</h2>
      <p>Podemos usar análises da web básicas (como Google Analytics) para entender como nossa ferramenta está sendo usada, o que nos ajuda a melhorar a experiência do usuário. Esses serviços de análise podem coletar informações agregadas e não identificáveis pessoalmente, como tipo de navegador, tipo de dispositivo e páginas visitadas. Nós <strong>não</strong> rastreamos ou registramos nenhuma informação sobre os arquivos que você processa.</p>
      
      <h2>3. Publicidade</h2>
      <p>Podemos usar empresas de publicidade de terceiros (como o Google AdSense) para veicular anúncios quando você visita nosso site. Essas empresas podem usar informações sobre suas visitas a este e a outros sites para fornecer anúncios sobre produtos e serviços de seu interesse. Esse processo pode envolver o uso de cookies.</p>
      
      <h2>4. Cookies</h2>
      <p>Nosso site, provedores de análise e parceiros de publicidade podem usar "cookies" para funcionar de forma eficaz e personalizar sua experiência. Você pode optar por desativar os cookies através das opções individuais do seu navegador, embora isso possa afetar sua capacidade de interagir com alguns recursos do nosso site.</p>
      
      <h2>5. Alterações a Esta Política</h2>
      <p>Podemos atualizar esta Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página.</p>
      
      <h2>6. Fale Conosco</h2>
      <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através da nossa página de Contato.</p>
      
    </div>
  );
}
