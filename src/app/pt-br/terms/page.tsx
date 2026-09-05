import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description: "Leia nossos Termos de Serviço para o uso do BulkFindReplace.",
  alternates: {
  "canonical": "https://bulkfindreplace.com/pt-br/terms",
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
      <h1 className="mb-6 text-3xl font-bold">Termos de Serviço</h1>
      
      <p>Última atualização: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Aceitação dos Termos</h2>
      <p>Ao acessar e usar o Bulk Find & Replace (o "Serviço"), você aceita e concorda em ficar vinculado aos termos e disposições deste acordo. Se você não concorda em cumprir estes termos, por favor, não use o Serviço.</p>
      
      <h2>2. Descrição do Serviço</h2>
      <p>O Bulk Find & Replace fornece um utilitário baseado na web para aplicar regras de substituição de texto em vários arquivos localmente no navegador do usuário.</p>
      
      <h2>3. Isenção de Garantias</h2>
      <p>O Serviço é fornecido "NO ESTADO EM QUE SE ENCONTRA" e "CONFORME DISPONÍVEL". Embora nos esforcemos para garantir que a ferramenta opere corretamente, não oferecemos garantias quanto à sua confiabilidade, precisão ou adequação a qualquer propósito específico. Você concorda que o uso do Serviço é por sua conta e risco.</p>
      
      <h2>4. Limitação de Responsabilidade</h2>
      <p>Em nenhum caso o Bulk Find & Replace ou seus criadores serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou da incapacidade de usar o Serviço. Isso inclui, mas não se limita a, perda de dados, corrupção de arquivos ou qualquer outra perda resultante do uso da ferramenta. <strong>Recomendamos fortemente fazer backup de seus arquivos ou usar um sistema de controle de versão antes de aplicar modificações em massa.</strong></p>
      
      <h2>5. Responsabilidades do Usuário</h2>
      <p>Você é o único responsável pelos arquivos que processa usando o Serviço. Como a ferramenta opera inteiramente localmente em seu navegador, você é responsável por garantir que os arquivos modificados sejam salvos ou baixados com segurança.</p>
      
      <h2>6. Modificações no Serviço</h2>
      <p>Reservamo-nos o direito de modificar ou descontinuar, temporária ou permanentemente, o Serviço com ou sem aviso prévio a você.</p>
      
    </div>
  );
}
