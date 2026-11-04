// Identidade do portal — o ÚNICO arquivo que muda de um portal para outro
// (junto com as cores em src/app/(portal)/globals.css e os arquivos de
// public/). Roda também no navegador: NADA de segredo aqui.
//
// Portal novo a partir do modelo: ver NOVO-PORTAL.md.

export const PORTAL = {
  /** Título do portal (aba do navegador, cabeçalho, e-mails). */
  nome: "Portal CTESK",
  /** Nome curto da empresa, usado nas frases das telas. */
  empresa: "CTESK",
  /** Grupo de empresas (card Cadastros). */
  grupo: "Grupo CTESK",
  /** Logo branco (fica sobre o fundo de marca) e ícone da aba, em public/. */
  logo: "/logo-branco.svg",
  favicon: "/favicon.svg",
  /** Prefixo das chaves que este portal guarda no navegador (localStorage). */
  prefixoLocal: "ctesk",
  /** Cor da marca em hex SEM "#": a Consulta CNPJ (/cnpj?brand=…) pinta a
   *  ferramenta com ela. Igual ao `--brand` do globals.css. */
  brandHex: "062872",
  /** Endereço na Vercel da INSTÂNCIA do módulo Tributos deste portal (cópia do
   *  canônico tributos-web, basePath /tributos). O next.config.ts serve
   *  `/tributos` daqui por rewrite (Multi-Zones). Ver NOVO-PORTAL.md. */
  tributosApp: "https://ctesk-tributos-web.vercel.app",
} as const;
