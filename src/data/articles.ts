export type Article = {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  datePublished: string;
  relatedServiceSlugs: string[];
  sections: { heading: string; body: string[] }[];
};

export const articles: Article[] = [
  {
    slug: 'quando-empresa-precisa-sistema-personalizado',
    path: '/conteudo/quando-empresa-precisa-sistema-personalizado/',
    title: 'Quando minha empresa precisa de um sistema personalizado? | Info Tech',
    description:
      'Sinais de que planilhas e programas prontos já não bastam — e quando vale criar um sistema do seu jeito em Andradina-SP.',
    h1: 'Quando minha empresa precisa de um sistema personalizado?',
    datePublished: '2026-03-13',
    relatedServiceSlugs: ['desenvolvimento-de-sistemas-andradina-sp', 'desenvolvimento-de-software-sob-medida'],
    sections: [
      {
        heading: 'Sinais no dia a dia',
        body: [
          'Se a equipe mantém várias planilhas, se ninguém acha o histórico do cliente ou se o programa pronto obriga atalho esquisito, o custo oculto já é alto: tempo perdido, erro e estresse.',
          'Outro sinal: a empresa cresceu, mas o controle continua igual ao de quando era pequena.',
        ],
      },
      {
        heading: 'Programa pronto ou sistema do seu jeito?',
        body: [
          'Programa pronto serve quando a rotina é padrão. Sistema personalizado faz sentido quando o jeito de trabalhar é o diferencial — ou quando ninguém usa o software porque ele “não encaixa”.',
          'Na Info Tech, em Andradina-SP, começamos pela dor: estoque, vendas, clientes, agendamentos. Depois traduzimos isso em um sistema simples de usar.',
        ],
      },
      {
        heading: 'Próximo passo',
        body: [
          'Anote as três tarefas que mais dão dor de cabeça. Com isso, já dá para conversar sobre um orçamento sob consulta — sem precisar falar em termos técnicos.',
        ],
      },
    ],
  },
  {
    slug: 'quanto-custa-desenvolver-sistema-empresarial',
    path: '/conteudo/quanto-custa-desenvolver-sistema-empresarial/',
    title: 'Quanto custa desenvolver um sistema para minha empresa? | Info Tech',
    description:
      'O que muda o preço de um sistema personalizado e como pedir um orçamento realista em Andradina-SP.',
    h1: 'Quanto custa desenvolver um sistema para minha empresa?',
    datePublished: '2026-03-13',
    relatedServiceSlugs: ['desenvolvimento-de-sistemas-andradina-sp', 'suporte-manutencao-sistemas-andradina'],
    sections: [
      {
        heading: 'O que muda o investimento',
        body: [
          'Quantas áreas o sistema precisa cobrir (clientes, estoque, financeiro…), se precisa de aplicativo, se tem que “conversar” com outro programa e quantas pessoas vão usar.',
          'Também entram hospedagem, treinamento e suporte — itens que devem aparecer claros na proposta.',
        ],
      },
      {
        heading: 'Como pedir um orçamento útil',
        body: [
          'Conte o problema com exemplos: “vendo pelo WhatsApp e perco pedido”, “não sei o estoque real”, “financeiro fecha errado”. Quanto mais concreto, mais justo o orçamento.',
          'No mercado brasileiro, faixas publicadas por outras empresas variam bastante (de dezenas a centenas de milhares, conforme complexidade). Na Info Tech o valor é sob consulta — sem número genérico que não cabe na sua realidade.',
        ],
      },
    ],
  },
  {
    slug: 'erp-ou-sistema-personalizado',
    path: '/conteudo/erp-ou-sistema-personalizado/',
    title: 'Programa pronto ou sistema personalizado: o que escolher? | Info Tech',
    description:
      'Quando um programa de gestão pronto resolve e quando vale criar um sistema do jeito da sua empresa.',
    h1: 'Programa pronto ou sistema personalizado: o que escolher?',
    datePublished: '2026-03-13',
    relatedServiceSlugs: ['desenvolvimento-de-erp-crm', 'desenvolvimento-de-software-sob-medida'],
    sections: [
      {
        heading: 'Quando o programa pronto resolve',
        body: [
          'Se você precisa do básico (clientes, estoque, financeiro) e aceita adaptar um pouco a rotina, um sistema pronto pode ser mais rápido no começo.',
        ],
      },
      {
        heading: 'Quando o personalizado vence',
        body: [
          'Quando a equipe abandona o programa, quando faltam telas importantes ou quando a empresa tem um jeito próprio de vender e atender, o sistema sob medida costuma ser mais usado no dia a dia.',
        ],
      },
    ],
  },
  {
    slug: 'como-automatizar-atendimento-empresa',
    path: '/conteudo/como-automatizar-atendimento-empresa/',
    title: 'Como automatizar o atendimento da minha empresa? | Info Tech',
    description:
      'Passos simples para reduzir fila no WhatsApp e responder perguntas repetidas sem perder o atendimento humano.',
    h1: 'Como automatizar o atendimento da minha empresa?',
    datePublished: '2026-03-13',
    relatedServiceSlugs: ['automacao-empresarial', 'inteligencia-artificial-empresarial'],
    sections: [
      {
        heading: 'Comece pelas perguntas que se repetem',
        body: [
          'Horário, preço, status do pedido e informações básicas podem ter resposta automática. Isso libera a equipe para vender e resolver casos especiais.',
        ],
      },
      {
        heading: 'Sempre tenha uma pessoa para assumir',
        body: [
          'Um bom robô de atendimento passa a conversa para um humano quando o assunto fica complexo. O cliente não pode ficar preso em menu sem saída.',
        ],
      },
    ],
  },
  {
    slug: 'integrar-whatsapp-com-crm',
    path: '/conteudo/integrar-whatsapp-com-crm/',
    title: 'Como organizar clientes do WhatsApp em um sistema? | Info Tech',
    description:
      'Por que conversas soltas no WhatsApp esfriam venda — e como organizar leads e follow-up em Andradina-SP.',
    h1: 'Como organizar clientes do WhatsApp em um sistema?',
    datePublished: '2026-03-13',
    relatedServiceSlugs: ['integracao-de-sistemas-api', 'desenvolvimento-de-erp-crm'],
    sections: [
      {
        heading: 'O problema do WhatsApp solto',
        body: [
          'Lead no grupo, no aparelho pessoal ou na memória da equipe esfria oportunidade. Sem dono, prazo e histórico, a venda vira sorte.',
        ],
      },
      {
        heading: 'O que a organização resolve',
        body: [
          'Centralizar conversas, definir responsável e registrar status. O desenho depende do canal e das regras da sua empresa — avaliamos no diagnóstico.',
        ],
      },
    ],
  },
  {
    slug: 'substituir-planilhas-por-sistemas',
    path: '/conteudo/substituir-planilhas-por-sistemas/',
    title: 'Como substituir planilhas por um sistema? | Info Tech',
    description:
      'Guia prático para trocar planilha por um programa de organização sem parar a empresa.',
    h1: 'Como substituir planilhas por um sistema?',
    datePublished: '2026-03-13',
    relatedServiceSlugs: ['sistemas-web-empresariais', 'desenvolvimento-de-sistemas-andradina-sp'],
    sections: [
      {
        heading: 'Comece pela planilha crítica',
        body: [
          'Qual planilha, se corromper amanhã, para a empresa? Esse é o melhor candidato para o primeiro módulo do sistema.',
        ],
      },
      {
        heading: 'Troque aos poucos',
        body: [
          'Rode o sistema e a planilha juntos por um período curto, treine a equipe e só então desligue a planilha. Assim ninguém fica no escuro.',
        ],
      },
    ],
  },
  {
    slug: 'vantagens-aplicativo-para-empresa',
    path: '/conteudo/vantagens-aplicativo-para-empresa/',
    title: 'Vale a pena ter um aplicativo para minha empresa? | Info Tech',
    description:
      'Quando um app próprio ajuda loja, delivery e equipe de campo — e o que observar antes de investir.',
    h1: 'Vale a pena ter um aplicativo para minha empresa?',
    datePublished: '2026-03-13',
    relatedServiceSlugs: ['desenvolvimento-de-aplicativos', 'desenvolvimento-de-ecommerce'],
    sections: [
      {
        heading: 'Canal direto com o cliente',
        body: [
          'App próprio facilita recompra e catálogo atualizado, e pode reduzir dependência de intermediários — especialmente em loja e delivery.',
        ],
      },
      {
        heading: 'App para a equipe',
        body: [
          'Além do app do cliente, há valor em app interno para pedidos, estoque ou visitas. O escopo define se o investimento compensa.',
        ],
      },
    ],
  },
  {
    slug: 'ia-para-empresas-andradina',
    path: '/conteudo/ia-para-empresas-andradina/',
    title: 'Robô de atendimento ajuda empresas em Andradina? | Info Tech',
    description:
      'Usos práticos de inteligência artificial para PMEs: WhatsApp, perguntas frequentes e organização de leads.',
    h1: 'Como um robô de atendimento pode ajudar empresas em Andradina?',
    datePublished: '2026-03-13',
    relatedServiceSlugs: ['inteligencia-artificial-empresarial', 'automacao-empresarial'],
    sections: [
      {
        heading: 'Casos práticos (sem hype)',
        body: [
          'Responder horário e preço, triar pedidos de orçamento e avisar a equipe são usos com retorno rápido quando bem delimitados.',
        ],
      },
      {
        heading: 'Cuidados',
        body: [
          'O robô precisa de regras e de uma pessoa para assumir casos especiais. A Info Tech prioriza casos claros e linguagem da sua marca.',
        ],
      },
    ],
  },
  {
    slug: 'escolher-empresa-desenvolvimento-software',
    path: '/conteudo/escolher-empresa-desenvolvimento-software/',
    title: 'Como escolher uma empresa que desenvolve sistemas? | Info Tech',
    description:
      'Critérios simples para escolher quem vai criar o sistema da sua empresa em Andradina: clareza, portfólio e suporte.',
    h1: 'Como escolher uma empresa que desenvolve sistemas?',
    datePublished: '2026-03-13',
    relatedServiceSlugs: ['desenvolvimento-de-sistemas-andradina-sp', 'suporte-manutencao-sistemas-andradina'],
    sections: [
      {
        heading: 'Olhe além do preço mais baixo',
        body: [
          'Compare se a empresa explica o escopo em português, se mostra trabalhos reais e se fala de suporte depois da entrega.',
        ],
      },
      {
        heading: 'Peça evidências',
        body: [
          'Portfólio, demos quando existirem e conversa franca sobre prazo. Desconfie de promessa de “primeiro lugar no Google” ou entrega milagrosa.',
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
