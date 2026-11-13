import { company } from '@/lib/company';

export type ServicePageData = {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  keywords: string[];
  /** Dor principal em linguagem cotidiana */
  problemLead: string;
  problems: string[];
  /** Como isso prejudica a empresa */
  harm: string[];
  /** Como a Info Tech resolve (linguagem simples) */
  solution: string;
  /** Como o sistema funciona no dia a dia */
  howItWorks: string[];
  features: string[];
  process: string[];
  /** Detalhes técnicos com explicação curta */
  techDetails: { term: string; explanation: string }[];
  relatedSlugs: string[];
  relatedProjectHints: string[];
  faqs: { q: string; a: string }[];
  ctaText: string;
};

export const services: ServicePageData[] = [
  {
    slug: 'desenvolvimento-de-sistemas-andradina-sp',
    path: '/desenvolvimento-de-sistemas-andradina-sp/',
    title: 'Sistema para Minha Empresa em Andradina SP | Info Tech',
    description:
      'Cansado de planilhas e bagunça? A Info Tech cria sistema personalizado para organizar clientes, vendas, estoque e rotina da sua empresa em Andradina-SP. Peça orçamento.',
    h1: 'Sistema para sua empresa em Andradina-SP',
    intro:
      'A Info Tech cria programas sob medida para empresários e gestores de Andradina que precisam organizar a empresa sem depender de várias planilhas e anotações soltas.',
    keywords: [
      'sistema para minha empresa',
      'criação de sistema personalizado',
      'empresa que desenvolve sistemas',
      'programa para organizar empresa',
      'programa para substituir planilhas',
      'desenvolvimento de sistemas Andradina',
    ],
    problemLead:
      'Sua empresa cresceu, mas o controle ainda está em planilha, caderno ou WhatsApp?',
    problems: [
      'Informações espalhadas em várias planilhas e pastas.',
      'Dificuldade para achar histórico de cliente, venda ou serviço.',
      'Programa pronto que não se encaixa no jeito que você trabalha.',
      'Equipe perdendo tempo com retrabalho e correção de erro.',
    ],
    harm: [
      'Você perde tempo procurando informação em vez de vender ou atender.',
      'Erros de estoque, cobrança ou agendamento geram prejuízo e reclamação.',
      'Fica difícil saber se a empresa está lucrando de verdade.',
      'Quando alguém da equipe falta, o processo “trava” porque só uma pessoa sabe mexer na planilha.',
    ],
    solution:
      'Criamos um sistema personalizado para reunir as informações da sua empresa: clientes, vendas, estoque, serviços ou financeiro — do jeito que a sua operação precisa. Você acessa pelo computador ou celular, com tela simples para a equipe usar no dia a dia.',
    howItWorks: [
      'Conversamos sobre a rotina da sua empresa e o que mais dá dor de cabeça.',
      'Montamos uma proposta clara: o que o sistema vai fazer e o que fica para depois.',
      'Desenvolvemos, testamos com você e ajustamos o que for necessário.',
      'Colocamos no ar, treinamos a equipe e ficamos disponíveis para suporte.',
    ],
    features: [
      'Cadastro de clientes e histórico de atendimento',
      'Controle de vendas, pedidos ou serviços',
      'Controle de estoque (quando a empresa precisa)',
      'Relatórios simples para acompanhar o negócio',
      'Acesso com login e permissões por função',
      'Treinamento da equipe na entrega',
    ],
    process: [
      'Conversa inicial (WhatsApp ou reunião) para entender o problema.',
      'Orçamento sob consulta, com escopo em linguagem clara.',
      'Desenvolvimento e validação com você.',
      'Entrega, treinamento e suporte.',
    ],
    techDetails: [
      { term: 'Sistema sob medida', explanation: 'Programa feito para o seu jeito de trabalhar, não um pacote genérico.' },
      { term: 'Painel web', explanation: 'Você acessa pelo navegador, sem instalar programa complicado no computador.' },
      { term: 'Permissões', explanation: 'Cada pessoa vê só o que precisa (caixa, estoque, gestão etc.).' },
    ],
    relatedSlugs: [
      'desenvolvimento-de-software-sob-medida',
      'sistemas-web-empresariais',
      'desenvolvimento-de-erp-crm',
      'suporte-manutencao-sistemas-andradina',
    ],
    relatedProjectHints: [
      'Lojas e apps de e-commerce do portfólio',
      'Sistemas de pedidos e gestão apresentados no site',
      'Soluções white label de gestão e atendimento',
    ],
    faqs: [
      {
        q: 'Vocês criam sistema para minha empresa em Andradina?',
        a: 'Sim. A Info Tech desenvolve sistemas personalizados para empresas de Andradina-SP. Começamos pelo seu problema — estoque, vendas, clientes, agendamentos — e montamos o programa sob medida.',
      },
      {
        q: 'Quanto custa desenvolver um sistema?',
        a: 'Depende do que precisa: um controle simples custa menos que um sistema completo com várias áreas. Orçamento é sob consulta, sem compromisso. Fale conosco pelo WhatsApp e conte a rotina da empresa.',
      },
      {
        q: 'Dá para substituir planilhas aos poucos?',
        a: 'Sim. Muitos clientes começam pelo módulo mais urgente (clientes, estoque ou pedidos) e depois ampliam. Assim o investimento e a adaptação da equipe ficam mais leves.',
      },
    ],
    ctaText: 'Quero um sistema para organizar minha empresa',
  },
  {
    slug: 'desenvolvimento-de-software-sob-medida',
    path: '/desenvolvimento-de-software-sob-medida/',
    title: 'Criação de Sistema Personalizado | Info Tech Andradina',
    description:
      'Programa pronto não resolve? Criamos sistema personalizado para organizar sua empresa do seu jeito. Info Tech em Andradina-SP. Solicite orçamento.',
    h1: 'Criação de sistema personalizado para sua empresa',
    intro:
      'Quando o programa de prateleira não serve, a Info Tech cria um sistema do zero — pensado na sua rotina, no seu time e no seu cliente.',
    keywords: [
      'criação de sistema personalizado',
      'programa para organizar empresa',
      'sistema para minha empresa',
    ],
    problemLead: 'Você já tentou vários programas e nenhum “encaixou” na empresa?',
    problems: [
      'Software pronto obriga a mudar o jeito de trabalhar.',
      'Falta uma tela ou relatório que a equipe realmente usa.',
      'Controles paralelos em planilha porque o sistema não cobre tudo.',
    ],
    harm: [
      'A equipe abandona o sistema e volta para o jeito antigo.',
      'Você paga mensalidade de algo que quase ninguém usa.',
      'A empresa cresce, mas a organização não acompanha.',
    ],
    solution:
      'Desenvolvemos um programa sob medida: você conta como a empresa funciona hoje e nós transformamos isso em um sistema claro, com as telas e regras que fazem sentido para o seu negócio.',
    howItWorks: [
      'Mapeamos o fluxo real (do pedido à entrega, do agendamento ao pagamento).',
      'Priorizamos o essencial para começar a usar rápido.',
      'Entregamos, treinamos e evoluímos conforme a empresa precisa.',
    ],
    features: [
      'Telas simples para o dia a dia',
      'Regras do seu negócio (descontos, etapas, status)',
      'Relatórios úteis para o dono e o gestor',
      'Possibilidade de crescer por etapas',
    ],
    process: [
      'Diagnóstico do problema',
      'Proposta e prioridade do que entra primeiro',
      'Desenvolvimento com validação',
      'Go-live e suporte',
    ],
    techDetails: [
      { term: 'Sob medida', explanation: 'Feito para a sua operação, não para “qualquer empresa”.' },
      { term: 'MVP', explanation: 'Primeira versão útil: resolve a dor principal e depois evolui.' },
    ],
    relatedSlugs: ['desenvolvimento-de-sistemas-andradina-sp', 'integracao-de-sistemas-api'],
    relatedProjectHints: ['Projetos de e-commerce e sistemas do portfólio'],
    faqs: [
      {
        q: 'Sistema personalizado não é caro demais?',
        a: 'O valor depende do tamanho do problema. Muitas vezes sai mais barato do que perder horas todo mês com planilha e erro. Orçamos com transparência após entender a rotina.',
      },
    ],
    ctaText: 'Quero um sistema do meu jeito',
  },
  {
    slug: 'sistemas-web-empresariais',
    path: '/sistemas-web-empresariais/',
    title: 'Programa para Organizar a Empresa | Info Tech',
    description:
      'Organize clientes, vendas e rotina em um sistema pela internet. Acesse do computador ou celular. Info Tech em Andradina-SP.',
    h1: 'Programa para organizar a empresa pela internet',
    intro:
      'Um sistema web é um programa que você abre no navegador — sem instalar nada complicado. Ideal para times que precisam acessar a mesma informação, mesmo fora do escritório.',
    keywords: ['programa para organizar empresa', 'sistema para minha empresa', 'sistemas web para empresas'],
    problemLead: 'Cada um tem uma planilha diferente e ninguém sabe qual está certa?',
    problems: [
      'Arquivos desatualizados circulando por e-mail ou WhatsApp.',
      'Dificuldade de acessar o controle longe do computador do escritório.',
      'Falta de um lugar único para a equipe trabalhar.',
    ],
    harm: [
      'Decisões erradas por causa de informação velha.',
      'Retrabalho e discussão sobre “quem tem a planilha certa”.',
      'Cliente mal atendido porque o histórico não aparece.',
    ],
    solution:
      'Montamos um sistema online para a empresa: um único lugar para cadastrar, consultar e acompanhar o que importa — com login para cada pessoa da equipe.',
    howItWorks: [
      'Você e a equipe entram com usuário e senha.',
      'Cadastram e consultam clientes, pedidos ou serviços.',
      'O gestor acompanha relatórios e status em tempo quase real.',
    ],
    features: [
      'Acesso pelo navegador (computador ou celular)',
      'Cadastros e busca rápida',
      'Histórico e status das operações',
      'Controle de quem pode ver ou editar',
    ],
    process: ['Entender a rotina', 'Definir telas principais', 'Desenvolver e testar', 'Treinar e publicar'],
    techDetails: [
      { term: 'Sistema web', explanation: 'Funciona no navegador, como um site seguro com login.' },
      { term: 'Responsivo', explanation: 'Se adapta a celular e computador.' },
    ],
    relatedSlugs: ['desenvolvimento-de-sistemas-andradina-sp', 'criacao-de-portais-empresariais'],
    relatedProjectHints: ['Portais e sistemas web do portfólio'],
    faqs: [
      {
        q: 'Preciso instalar no computador de cada funcionário?',
        a: 'Na maioria dos casos, não. O acesso é pelo navegador, com login. Combinamos juntos a melhor forma de hospedar e proteger os dados.',
      },
    ],
    ctaText: 'Quero organizar minha empresa online',
  },
  {
    slug: 'desenvolvimento-de-aplicativos',
    path: '/desenvolvimento-de-aplicativos/',
    title: 'Criação de Aplicativo para Empresa | Info Tech Andradina',
    description:
      'Quer um aplicativo para sua loja, delivery ou equipe? A Info Tech desenvolve apps para empresas em Andradina e região. Peça orçamento.',
    h1: 'Aplicativo para sua empresa vender e atender melhor',
    intro:
      'Um aplicativo coloca sua loja ou serviço no bolso do cliente — ou na mão da equipe de campo. A Info Tech desenvolve apps alinhados ao seu negócio.',
    keywords: ['criação de aplicativos em Andradina', 'aplicativo para empresa', 'app delivery'],
    problemLead: 'Seus clientes pedem app, ou a equipe precisa trabalhar pelo celular?',
    problems: [
      'Vendas só no balcão ou só pelo WhatsApp desorganizado.',
      'Dependência de apps de terceiros que cobram comissão alta.',
      'Equipe sem ferramenta prática no celular.',
    ],
    harm: [
      'Perda de venda para quem tem canal mais fácil.',
      'Margem menor por causa de intermediários.',
      'Atrasos e erros no atendimento móvel.',
    ],
    solution:
      'Criamos aplicativo para o cliente comprar/pedir ou para a equipe operar — com catálogo, pedidos e integração com o sistema da empresa, quando necessário.',
    howItWorks: [
      'Definimos se o app é para cliente final, para a equipe, ou os dois.',
      'Desenhamos as telas principais (catálogo, pedido, status).',
      'Desenvolvemos, testamos em celular e publicamos nas lojas quando combinado.',
    ],
    features: [
      'Catálogo e busca de produtos/serviços',
      'Carrinho e pedido (quando aplicável)',
      'Acompanhamento de status',
      'Ligação com painel de gestão',
    ],
    process: ['Objetivo do app', 'Protótipo das telas', 'Desenvolvimento e testes', 'Publicação e suporte'],
    techDetails: [
      { term: 'App Android/iOS', explanation: 'Aplicativo para celular, publicado nas lojas quando o projeto incluir isso.' },
      { term: 'Painel', explanation: 'Área em que a empresa gerencia produtos, pedidos ou usuários.' },
    ],
    relatedSlugs: ['desenvolvimento-de-ecommerce', 'desenvolvimento-de-sistemas-andradina-sp'],
    relatedProjectHints: ['App IByte', 'App Mega Eletrônico', 'App Nosso Lar', 'App FatShop'],
    faqs: [
      {
        q: 'Vocês já fizeram apps de loja?',
        a: 'Sim. No portfólio há aplicativos de e-commerce publicados, como IByte, Mega Eletrônico, Nosso Lar e FatShop.',
      },
    ],
    ctaText: 'Quero um app para minha empresa',
  },
  {
    slug: 'desenvolvimento-de-erp-crm',
    path: '/desenvolvimento-de-erp-crm/',
    title: 'Sistema para Controlar Vendas, Estoque e Clientes | Info Tech',
    description:
      'Precisa controlar vendas, estoque e cadastro de clientes? Criamos sistema de gestão sob medida em Andradina-SP. Solicite orçamento.',
    h1: 'Sistema para controlar vendas, estoque e clientes',
    intro:
      'Muita gente chama de ERP ou CRM. Na prática, é o programa que organiza vendas, estoque, financeiro e relacionamento com o cliente — tudo no mesmo lugar.',
    keywords: [
      'sistema para controlar estoque',
      'programa para controlar vendas',
      'sistema para cadastro de clientes',
      'sistema de pedidos para empresas',
      'sistema para organizar financeiro',
    ],
    problemLead: 'Vendas em um lugar, estoque em outro e cliente só na cabeça da equipe?',
    problems: [
      'Não sabe se o produto ainda tem no estoque.',
      'Perde follow-up de cliente e orçamento.',
      'Financeiro desconectado do que foi vendido.',
    ],
    harm: [
      'Vende o que não tem e gera devolução.',
      'Cliente some porque ninguém cobrou retorno.',
      'Caixa “fecha” no papel, mas a realidade é outra.',
    ],
    solution:
      'Montamos um sistema de gestão sob medida: cadastro de clientes, controle de vendas/pedidos, estoque e visão financeira básica — do tamanho da sua empresa, sem forçar módulos que você não usa.',
    howItWorks: [
      'Cadastro único de clientes e produtos/serviços.',
      'Registro de vendas ou pedidos com status.',
      'Baixa de estoque quando aplicável.',
      'Relatórios para o dono acompanhar o resultado.',
    ],
    features: [
      'Cadastro de clientes',
      'Controle de vendas e pedidos',
      'Controle de estoque',
      'Acompanhamento financeiro operacional',
      'Relatórios gerenciais simples',
    ],
    process: ['Priorizar módulos', 'Modelar a rotina', 'Entregar por etapas', 'Treinar a equipe'],
    techDetails: [
      {
        term: 'ERP',
        explanation: 'Sistema de gestão da empresa (vendas, estoque, financeiro etc.).',
      },
      {
        term: 'CRM',
        explanation: 'Organização do relacionamento com clientes e oportunidades de venda.',
      },
    ],
    relatedSlugs: ['sistemas-web-empresariais', 'automacao-empresarial'],
    relatedProjectHints: ['Sistemas de gestão e white labels de CRM/ERP do portfólio'],
    faqs: [
      {
        q: 'Preciso de ERP completo ou só cadastro e vendas?',
        a: 'Começamos pelo que dói mais. Muitas empresas começam com clientes + vendas + estoque e só depois ampliam. Assim o investimento rende mais rápido.',
      },
    ],
    ctaText: 'Quero controlar vendas e estoque',
  },
  {
    slug: 'automacao-empresarial',
    path: '/automacao-empresarial/',
    title: 'Automação de Atendimento e Rotina | Info Tech Andradina',
    description:
      'Cansado de tarefas repetitivas? Automatizamos avisos, integrações e rotinas da empresa. Info Tech em Andradina-SP.',
    h1: 'Automatize tarefas repetitivas da sua empresa',
    intro:
      'Automação é fazer o computador repetir o que a equipe faz todo dia: avisar, copiar dados, lembrar cobrança ou organizar atendimento — com menos erro e mais tempo livre.',
    keywords: ['automação empresarial', 'automação de atendimento pelo WhatsApp', 'automatizar processos'],
    problemLead: 'Sua equipe gasta horas com tarefa repetitiva que poderia ser automática?',
    problems: [
      'Digitar o mesmo dado em dois lugares.',
      'Esquecer de cobrar, avisar ou atualizar status.',
      'Atendimento travado em perguntas básicas.',
    ],
    harm: [
      'Custo alto de tempo da equipe.',
      'Cliente esperando resposta que ninguém deu.',
      'Erro humano em tarefas manuais.',
    ],
    solution:
      'Analisamos a rotina e criamos automações práticas: avisos, sincronização entre sistemas e fluxos de atendimento — para a equipe focar no que realmente precisa de pessoa.',
    howItWorks: [
      'Listamos as tarefas manuais mais frequentes.',
      'Priorizamos o que dá mais retorno rápido.',
      'Implementamos o fluxo, testamos e monitoramos.',
    ],
    features: [
      'Avisos e lembretes automáticos',
      'Ligação entre planilhas/sistemas',
      'Fluxos de atendimento básico',
      'Redução de digitação duplicada',
    ],
    process: ['Mapear tarefas', 'Escolher o que automatizar', 'Implementar', 'Acompanhar resultado'],
    techDetails: [
      {
        term: 'n8n',
        explanation: 'Ferramenta que conecta sistemas e cria rotinas automáticas sem reinventar tudo do zero.',
      },
      {
        term: 'Webhook',
        explanation: 'Aviso automático entre sistemas quando algo acontece (ex.: novo pedido).',
      },
    ],
    relatedSlugs: ['inteligencia-artificial-empresarial', 'integracao-de-sistemas-api'],
    relatedProjectHints: ['Automações e soluções de atendimento do portfólio'],
    faqs: [
      {
        q: 'Automação substitui funcionários?',
        a: 'O objetivo é tirar o repetitivo da fila — não “apagar” o time. Pessoas ficam para vender, negociar e resolver casos especiais.',
      },
    ],
    ctaText: 'Quero automatizar minha rotina',
  },
  {
    slug: 'integracao-de-sistemas-api',
    path: '/integracao-de-sistemas-api/',
    title: 'Integrar Sistemas da Empresa | Info Tech Andradina',
    description:
      'Cansado de digitar o mesmo pedido em dois lugares? Integramos seus sistemas para a informação andar sozinha. Info Tech em Andradina.',
    h1: 'Faça seus sistemas conversarem entre si',
    intro:
      'Integração significa que um sistema avisa o outro automaticamente — pedido, pagamento ou cadastro — sem alguém digitar de novo.',
    keywords: ['integração de sistemas', 'integração de APIs', 'sistema de pedidos para empresas'],
    problemLead: 'Pedido no WhatsApp, estoque na planilha e financeiro em outro programa?',
    problems: [
      'Digitação duplicada e inconsistente.',
      'Pedido que não chega no estoque ou no financeiro.',
      'Exportar e importar planilha toda semana.',
    ],
    harm: [
      'Erro de quantidade e preço.',
      'Atraso no faturamento e na entrega.',
      'Equipe ocupada com “passar informação” em vez de atender.',
    ],
    solution:
      'Conectamos as ferramentas que você já usa (ou o sistema que vamos criar) para os dados circularem sozinhos — com registro do que aconteceu e tratamento de falha.',
    howItWorks: [
      'Mapeamos de onde a informação nasce e para onde precisa ir.',
      'Criamos a ponte entre os sistemas.',
      'Testamos cenários reais (pedido, cancelamento, pagamento).',
      'Acompanhamos nos primeiros dias de uso.',
    ],
    features: [
      'Sincronização de pedidos e cadastros',
      'Ligação com pagamento quando aplicável',
      'Menos digitação manual',
      'Registro para auditoria simples',
    ],
    process: ['Mapa dos sistemas', 'Definição da ponte', 'Implementação', 'Testes e monitoramento'],
    techDetails: [
      {
        term: 'API',
        explanation: 'Forma segura de um sistema pedir ou enviar informação para outro.',
      },
    ],
    relatedSlugs: ['automacao-empresarial', 'desenvolvimento-de-ecommerce'],
    relatedProjectHints: ['E-commerces e apps com pagamento e catálogo integrados'],
    faqs: [
      {
        q: 'Dá para integrar o que eu já uso?',
        a: 'Na maioria das vezes, sim — se o sistema tiver conexão (API) ou exportação. Avaliamos no diagnóstico e falamos com clareza se for inviável.',
      },
    ],
    ctaText: 'Quero integrar meus sistemas',
  },
  {
    slug: 'inteligencia-artificial-empresarial',
    path: '/inteligencia-artificial-empresarial/',
    title: 'Robô para Atender Clientes e WhatsApp | Info Tech',
    description:
      'Quer um robô para atender clientes no WhatsApp e tirar perguntas repetidas da equipe? A Info Tech implementa IA prática em Andradina-SP.',
    h1: 'Robô para atender clientes e agilizar sua empresa',
    intro:
      'Inteligência artificial, no dia a dia, pode ser um assistente que responde perguntas frequentes, organiza leads e avisa a equipe — sem substituir o atendimento humano quando o caso é especial.',
    keywords: [
      'robô para atender clientes',
      'automação de atendimento pelo WhatsApp',
      'inteligência artificial para empresas',
    ],
    problemLead: 'Sua equipe responde as mesmas perguntas o dia inteiro?',
    problems: [
      'WhatsApp lotado com horário, preço e status.',
      'Lead esfria porque demorou a resposta.',
      'Ninguém registra o que o cliente pediu.',
    ],
    harm: [
      'Cliente desiste e compra do concorrente.',
      'Equipe estressada e atendimento irregular.',
      'Oportunidades sem dono e sem follow-up.',
    ],
    solution:
      'Implementamos atendimento assistido por IA: o robô responde o básico, organiza a conversa e chama uma pessoa quando precisa. Tudo alinhado às regras do seu negócio.',
    howItWorks: [
      'Definimos o que o robô pode responder sozinho.',
      'Prepararemos as respostas e o tom da marca.',
      'Ligamos ao canal (ex.: WhatsApp) e ao fluxo da equipe.',
      'Ajustamos com base nas conversas reais.',
    ],
    features: [
      'Respostas a perguntas frequentes',
      'Encaminhamento para humano',
      'Organização de leads e pedidos de informação',
      'Funcionamento fora do horário comercial (conforme configuração)',
    ],
    process: ['Casos de uso', 'Base de respostas', 'Implantação', 'Ajuste contínuo'],
    techDetails: [
      {
        term: 'Agente de IA',
        explanation: 'Assistente digital treinado com informações da sua empresa para conversar com o cliente.',
      },
      {
        term: 'Handoff',
        explanation: 'Quando o robô passa a conversa para um atendente humano.',
      },
    ],
    relatedSlugs: ['automacao-empresarial', 'integracao-de-sistemas-api'],
    relatedProjectHints: ['SaaS de agente de IA em andamento', 'White labels de atendimento'],
    faqs: [
      {
        q: 'O robô substitui minha equipe?',
        a: 'Não é o objetivo. Ele tira o repetitivo e a equipe fica para vender, negociar e resolver o que é complexo.',
      },
    ],
    ctaText: 'Quero um robô para atender meus clientes',
  },
  {
    slug: 'desenvolvimento-de-ecommerce',
    path: '/desenvolvimento-de-ecommerce/',
    title: 'Loja Virtual e Sistema de Pedidos | Info Tech Andradina',
    description:
      'Quer vender pela internet com catálogo, carrinho e pedidos organizados? Criamos loja virtual e sistema de pedidos em Andradina-SP.',
    h1: 'Loja virtual e sistema de pedidos para sua empresa',
    intro:
      'Uma loja virtual (e-commerce) mostra seus produtos, recebe pedidos e organiza o pagamento — sem depender só de mensagem avulsa no WhatsApp.',
    keywords: ['loja virtual', 'sistema de pedidos para empresas', 'desenvolvimento de e-commerce'],
    problemLead: 'Seus pedidos ainda chegam bagunçados no WhatsApp?',
    problems: [
      'Cliente não encontra o catálogo atualizado.',
      'Pedido incompleto (falta tamanho, endereço, forma de pagamento).',
      'Difícil controlar o que vendeu e o que falta no estoque.',
    ],
    harm: [
      'Perda de venda por demora e confusão.',
      'Erro de entrega e troca.',
      'Dono sem visão clara do faturamento online.',
    ],
    solution:
      'Criamos loja virtual e/ou fluxo de pedidos com catálogo, carrinho e painel para a empresa gerenciar — e, quando fizer sentido, aplicativo para o cliente.',
    howItWorks: [
      'Cliente escolhe produtos no site ou app.',
      'Fecha o pedido com os dados necessários.',
      'Sua equipe recebe no painel e organiza a entrega/retirada.',
    ],
    features: [
      'Catálogo com fotos e preços',
      'Carrinho e checkout',
      'Painel de pedidos',
      'Integração com pagamento (conforme projeto)',
    ],
    process: ['Definir catálogo e regras', 'Desenvolver a loja', 'Integrar pagamentos se necessário', 'Publicar e treinar'],
    techDetails: [
      {
        term: 'E-commerce',
        explanation: 'Loja pela internet com catálogo, carrinho e pedidos.',
      },
      {
        term: 'Checkout',
        explanation: 'Etapa em que o cliente confirma dados e pagamento.',
      },
    ],
    relatedSlugs: ['desenvolvimento-de-aplicativos', 'integracao-de-sistemas-api'],
    relatedProjectHints: ['IByte', 'Mega Eletrônico', 'Oriba Shop', 'EShop', 'FatShop', 'Gigantec'],
    faqs: [
      {
        q: 'Vocês têm exemplos de loja?',
        a: 'Sim. O portfólio inclui e-commerces e apps como IByte, Mega Eletrônico, Oriba Shop, EShop, FatShop e Gigantec.',
      },
    ],
    ctaText: 'Quero vender pela internet com pedidos organizados',
  },
  {
    slug: 'criacao-de-portais-empresariais',
    path: '/criacao-de-portais-empresariais/',
    title: 'Site Profissional para Empresa em Andradina | Info Tech',
    description:
      'Site e página de divulgação para sua empresa aparecer bem e receber pedidos de orçamento. Info Tech em Andradina-SP.',
    h1: 'Site profissional para sua empresa ser encontrada',
    intro:
      'Um site bem feito explica o que você faz, gera confiança e facilita o contato — especialmente para quem busca empresa em Andradina no Google.',
    keywords: ['site profissional Andradina', 'criação de portais', 'landing page'],
    problemLead: 'Sua empresa é boa, mas o site não ajuda a vender?',
    problems: [
      'Site antigo ou inexistente.',
      'Visitante não sabe como pedir orçamento.',
      'Empresa não aparece quando buscam o serviço na cidade.',
    ],
    harm: [
      'Cliente escolhe o concorrente que parece mais profissional.',
      'WhatsApp vira único canal e fica sobrecarregado.',
      'Campanhas pagas sem página que converte.',
    ],
    solution:
      'Criamos sites e páginas de divulgação claras, com texto simples, celular bem resolvido e botão de orçamento (WhatsApp/formulário).',
    howItWorks: [
      'Entendemos o serviço e o público.',
      'Organizamos as seções do site.',
      'Desenvolvemos, publicamos e orientamos a divulgação.',
    ],
    features: [
      'Layout profissional e responsivo',
      'Textos orientados a contato',
      'Integração com WhatsApp',
      'Base de SEO local (títulos, descrições, estrutura)',
    ],
    process: ['Briefing', 'Estrutura e textos', 'Desenvolvimento', 'Publicação'],
    techDetails: [
      {
        term: 'Landing page',
        explanation: 'Página focada em uma oferta, com um objetivo claro: gerar contato.',
      },
      {
        term: 'SEO on-page',
        explanation: 'Ajustes no site para o Google entender o que você oferece e em qual cidade.',
      },
    ],
    relatedSlugs: ['desenvolvimento-de-sistemas-andradina-sp', 'desenvolvimento-de-ecommerce'],
    relatedProjectHints: ['Sites e portais do portfólio'],
    faqs: [
      {
        q: 'Site resolve sozinho aparecer no Google?',
        a: 'Site bem feito é a base. Depois entram conteúdo, Google Meu Negócio e consistência. Ajudamos a estruturar o caminho sem prometer “1º lugar”.',
      },
    ],
    ctaText: 'Quero um site que gere orçamentos',
  },
  {
    slug: 'suporte-manutencao-sistemas-andradina',
    path: '/suporte-manutencao-sistemas-andradina/',
    title: 'Suporte e Manutenção de Sistemas em Andradina | Info Tech',
    description:
      'Sistema travou, precisa de correção ou atualização? A Info Tech oferece suporte e manutenção de sistemas em Andradina-SP.',
    h1: 'Suporte e manutenção para o sistema da sua empresa',
    intro:
      'Depois que o sistema está no ar, alguém precisa cuidar: corrigir erro, atualizar e evoluir. A Info Tech oferece suporte técnico para manter sua operação funcionando.',
    keywords: [
      'suporte técnico empresarial Andradina',
      'manutenção de software',
      'manutenção de aplicações web',
    ],
    problemLead: 'Seu sistema parou ou ficou desatualizado e não tem para quem ligar?',
    problems: [
      'Bug que impede venda ou atendimento.',
      'Sistema lento ou instável.',
      'Precisa de melhoria pequena e não tem fornecedor.',
    ],
    harm: [
      'Empresa parada ou trabalhando no improviso.',
      'Cliente reclamando de atraso.',
      'Risco de segurança por software antigo.',
    ],
    solution:
      'Oferecemos suporte e manutenção: analisamos o problema, corrigimos, atualizamos e combinamos evolução sob acordo — com linguagem clara sobre prazo e o que será feito.',
    howItWorks: [
      'Você abre o chamado (WhatsApp/e-mail) descrevendo o problema.',
      'Priorizamos o que está parando a operação.',
      'Corrigimos ou atualizamos e validamos com você.',
    ],
    features: [
      'Correção de erros',
      'Atualizações e melhorias pontuais',
      'Orientação de uso e configuração',
      'Evolução sob demanda',
    ],
    process: ['Abertura do chamado', 'Diagnóstico', 'Correção', 'Confirmação com o cliente'],
    techDetails: [
      {
        term: 'Manutenção corretiva',
        explanation: 'Corrigir o que está quebrado.',
      },
      {
        term: 'Manutenção evolutiva',
        explanation: 'Melhorar ou acrescentar função no sistema existente.',
      },
    ],
    relatedSlugs: ['desenvolvimento-de-sistemas-andradina-sp', 'desenvolvimento-de-software-sob-medida'],
    relatedProjectHints: ['Sistemas já entregues e operação contínua'],
    faqs: [
      {
        q: 'Vocês assumem sistema feito por outra empresa?',
        a: 'Avaliamos caso a caso (acesso ao código e documentação). Se for viável, assumimos; se não for, explicamos o motivo com transparência.',
      },
    ],
    ctaText: 'Preciso de suporte no meu sistema',
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceByPath(path: string) {
  const normalized = path.endsWith('/') ? path : `${path}/`;
  return services.find((s) => s.path === normalized);
}

export const homeServiceCards = [
  {
    title: 'Sistema para minha empresa',
    description: 'Organize clientes, vendas e rotina sem depender de várias planilhas.',
    path: '/desenvolvimento-de-sistemas-andradina-sp/',
  },
  {
    title: 'Controlar vendas, estoque e clientes',
    description: 'Programa de gestão do tamanho do seu negócio.',
    path: '/desenvolvimento-de-erp-crm/',
  },
  {
    title: 'Aplicativo para empresa',
    description: 'App para vender, receber pedidos ou apoiar a equipe no celular.',
    path: '/desenvolvimento-de-aplicativos/',
  },
  {
    title: 'Sistema personalizado',
    description: 'Quando o programa pronto não serve, criamos o seu.',
    path: '/desenvolvimento-de-software-sob-medida/',
  },
  {
    title: 'Robô e automação de atendimento',
    description: 'Respostas automáticas e menos fila no WhatsApp.',
    path: '/inteligencia-artificial-empresarial/',
  },
  {
    title: 'Integrar sistemas',
    description: 'Pare de digitar o mesmo pedido em dois lugares.',
    path: '/integracao-de-sistemas-api/',
  },
  {
    title: 'Loja virtual e pedidos',
    description: 'Catálogo, carrinho e pedidos organizados.',
    path: '/desenvolvimento-de-ecommerce/',
  },
  {
    title: 'Site que gera orçamento',
    description: 'Presença profissional com botão claro de contato.',
    path: '/criacao-de-portais-empresariais/',
  },
] as const;

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${company.url}/#organization`,
  name: company.legalName,
  alternateName: [company.brandName, company.shortName],
  url: company.url,
  logo: `${company.url}${company.logoPath}`,
  email: company.emailPrimary,
  telephone: `+${company.whatsappE164}`,
  taxID: company.cnpj,
  address: {
    '@type': 'PostalAddress',
    addressLocality: company.city,
    addressRegion: company.region,
    addressCountry: company.countryCode,
  },
  areaServed: {
    '@type': 'City',
    name: company.city,
  },
  sameAs: [company.github],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+${company.whatsappE164}`,
    contactType: 'sales',
    areaServed: 'BR',
    availableLanguage: 'Portuguese',
  },
};

export function serviceJsonLd(service: ServicePageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.h1,
    description: service.description,
    provider: { '@id': `${company.url}/#organization` },
    areaServed: {
      '@type': 'City',
      name: company.city,
    },
    url: `${company.url}${service.path}`,
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
