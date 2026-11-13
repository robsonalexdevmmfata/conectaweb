/**
 * Fonte única de dados comerciais confirmados no projeto.
 * Pendências: NÃO inventar — confirmar com o responsável antes de publicar.
 */
export const SITE_URL = 'https://agenciainfotech.com.br';

export const company = {
  legalName: 'Info Tech Ltda',
  brandName: 'Agência Info Tech Ltda',
  shortName: 'Info Tech',
  url: SITE_URL,
  city: 'Andradina',
  region: 'SP',
  country: 'Brasil',
  countryCode: 'BR',
  postalCode: '16900-000',
  porte: 'EPP - Empresa de Pequeno Porte',
  cnpj: '69.355.023/0001-15',
  cnaePrincipal: {
    code: '62.01-5-01',
    description: 'Desenvolvimento de programas de computador sob encomenda',
  },
  cnaeSecundario: {
    code: '62.09-1-00',
    description: 'Suporte técnico, manutenção e outros serviços em tecnologia da informação',
  },
  /** WhatsApp usado atualmente no código do site */
  whatsappDisplay: '+55 (18) 98101-1186',
  whatsappE164: '5518981011186',
  whatsappUrl:
    'https://wa.me/5518981011186?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Info%20Tech.',
  /** E-mail usado em Contact/Footer/schema */
  emailPrimary: 'agenciainfotechltdammfata@gmail.com',
  github: 'https://github.com/robsonalexdevmmfata',
  logoPath: '/logoinfotech.png',
  foundingYearClaim: '2010',
} as const;

/**
 * Inconsistências detectadas — confirmar com o responsável.
 * Não escolher automaticamente.
 */
export const pendingConfirmations = {
  emailsFound: [
    {
      value: 'agenciainfotechltdammfata@gmail.com',
      where: 'Contact, Footer, index.html schema',
      status: 'em-uso-no-codigo',
    },
    {
      value: 'contato@infotech.com.br',
      where: 'About.tsx',
      status: 'divergente',
    },
    {
      value: 'josuegeraldoata@hotmail.com',
      where: 'mencionado em brief / conteúdo público histórico',
      status: 'pendente-confirmacao',
    },
    {
      value: 'josuegeraldoata@gmail.com',
      where: 'mencionado em brief / conteúdo público histórico',
      status: 'pendente-confirmacao',
    },
  ],
  whatsappNumbers: [
    {
      value: '+55 (18) 98101-1186',
      where: 'Hero, Contact, Footer, schema',
      status: 'em-uso-no-codigo',
    },
    {
      value: '+55 (18) 99117-6034',
      where: 'mencionado no brief SEO',
      status: 'pendente-confirmacao',
    },
  ],
  /** Cidades além de Andradina — só publicar páginas locais após confirmação de atendimento real */
  regionalCitiesPendingConfirmation: [
    'Castilho',
    'Murutinga do Sul',
    'Guaraçaí',
    'Nova Independência',
    'Itapura',
    'Mirandópolis',
    'Pereira Barreto',
    'Araçatuba',
    'Birigui',
    'Três Lagoas',
  ] as const,
  address: {
    note: 'Não há endereço comercial completo (rua/número) confirmado no projeto. Schema e GBP devem usar área de serviço até confirmação.',
    status: 'pendente-confirmacao',
  },
  openingHours: {
    note: 'Horários 08:00–18:00 existiam no schema; confirmar se são reais antes de manter.',
    status: 'pendente-confirmacao',
  },
  geoCoordinates: {
    note: 'Coordenadas genéricas de Andradina no index.html; confirmar se correspondem ao estabelecimento.',
    status: 'pendente-confirmacao',
  },
} as const;

export function whatsappLink(customText?: string) {
  if (!customText) return company.whatsappUrl;
  return `https://wa.me/${company.whatsappE164}?text=${encodeURIComponent(customText)}`;
}
