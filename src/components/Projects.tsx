import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

import saas1Image from '../imgportfolio/saas1.png';
import acai1Image from '../imgportfolio/acai1.png';
import lanchesdeliveryImage from '../imgportfolio/lanchesdelivery.png';
import printchacara2 from '../imgportfolio/printchacara2.png';
import appibyteImage from '../imgportfolio/appibyte.jpg';
import ibyteImage from '../imgportfolio/ibyte.jpg';
import megaeletronico from '../imgportfolio/megaeletronico.jpg';
import appmegaeletronico from '../imgportfolio/appmegaeletronico.jpg';
import appnossolar from '../imgportfolio/appnossolar.jpg';
import oribashop from '../imgportfolio/oribashop.jpg';
import eshope from '../imgportfolio/eshop.jpg';
import fastshope from '../imgportfolio/fastshop.jpg';
import appfastshope from '../imgportfolio/appfastshope.jpg';
import gigantec from '../imgportfolio/gigantec.jpg';

import wlProsaas from '../imgportfolio/whitelabel/prosaas.png';
import wlEspocrm from '../imgportfolio/whitelabel/espocrm.png';
import wlInvoiceninja from '../imgportfolio/whitelabel/invoiceninja.png';
import wlDolibarr from '../imgportfolio/whitelabel/dolibarr.png';
import wlFreescout from '../imgportfolio/whitelabel/freescout.png';
import wlGlpi from '../imgportfolio/whitelabel/glpi.png';
import wlSuitedash from '../imgportfolio/whitelabel/suitedash.png';
import wlProdo from '../imgportfolio/whitelabel/prodo.png';
import wlAvantejuntos from '../imgportfolio/whitelabel/avantejuntos.png';
import wlWustsoftware from '../imgportfolio/whitelabel/wustsoftware.png';
import wlPraticsystem from '../imgportfolio/whitelabel/praticsystem.png';
import wlDkwsystem from '../imgportfolio/whitelabel/dkwsystem.png';
import wlZapbox from '../imgportfolio/whitelabel/zapbox.png';
import wlUltrawhats from '../imgportfolio/whitelabel/ultrawhats.png';
import wlJapagestao from '../imgportfolio/whitelabel/japagestao.png';
import wlZeliapedidos from '../imgportfolio/whitelabel/zeliapedidos.png';
import wlSisfood from '../imgportfolio/whitelabel/sisfood.png';
import wlDofast from '../imgportfolio/whitelabel/dofast.png';
import wlVendus from '../imgportfolio/whitelabel/vendus.png';
import wlAtendechat from '../imgportfolio/whitelabel/atendechat.png';
import wlImobiliq from '../imgportfolio/whitelabel/imobiliq.png';
import wlVetriks from '../imgportfolio/whitelabel/vetriks.png';
import wlAivo from '../imgportfolio/whitelabel/aivo.png';
import wlUnafit from '../imgportfolio/whitelabel/unafit.png';
import wlElobh from '../imgportfolio/whitelabel/elobh.png';
import wlHublar from '../imgportfolio/whitelabel/hublar.png';
import wlJusacesso from '../imgportfolio/whitelabel/jusacesso.png';
import wlParkos from '../imgportfolio/whitelabel/parkos.png';

const projectCategories = ['All', 'White Label', 'Web Design', 'UI/UX', 'App Design', 'Branding'];

const projectsData = [
  {
    id: 1,
    title: "ProSaaS White Label",
    category: "White Label",
    imageUrl: wlProsaas,
    link: "https://prosaas.com.br/",
    github: "#",
    description: "Plataforma white label completa com mais de 80 recursos para revenda: cardápio digital, delivery, WhatsApp, IA, PDV, estoque, mesas/comandas e integração fiscal. Ideal para restaurantes, varejo e negócios locais com a sua marca."
  },
  {
    id: 2,
    title: "EspoCRM White Label",
    category: "White Label",
    imageUrl: wlEspocrm,
    link: "https://www.espocrm.com/",
    github: "#",
    description: "CRM open source personalizável para gestão de leads, contas, oportunidades e automações. Solução white label para empresas e revendas que precisam de CRM completo com marca própria."
  },
  {
    id: 3,
    title: "Invoice Ninja White Label",
    category: "White Label",
    imageUrl: wlInvoiceninja,
    link: "https://invoiceninja.com/",
    github: "#",
    description: "Sistema de faturamento e cobrança para pequenas empresas: orçamentos, notas fiscais, pagamentos recorrentes e portal do cliente. Pode ser oferecido com marca própria em modelo white label."
  },
  {
    id: 4,
    title: "Dolibarr ERP/CRM White Label",
    category: "White Label",
    imageUrl: wlDolibarr,
    link: "https://www.dolibarr.org/?l=pt&lang=pt",
    github: "#",
    description: "Suíte ERP e CRM open source para gestão empresarial: financeiro, estoque, CRM, projetos e faturamento. Excelente base white label para revenda de sistemas de gestão."
  },
  {
    id: 5,
    title: "FreeScout Help Desk White Label",
    category: "White Label",
    imageUrl: wlFreescout,
    link: "https://www.freescout.net/",
    github: "#",
    description: "Help desk open source com caixa de entrada compartilhada, tickets e atendimento por e-mail. Alternativa white label ao Zendesk/Help Scout para suporte com a marca do parceiro."
  },
  {
    id: 6,
    title: "GLPI Help Desk White Label",
    category: "White Label",
    imageUrl: wlGlpi,
    link: "https://www.glpi-project.org/br/helpdesk-software/",
    github: "#",
    description: "Software de help desk e gestão de ativos de TI (ITSM). Organiza chamados, inventário e suporte técnico — ideal para revenda white label em empresas de tecnologia e suporte."
  },
  {
    id: 7,
    title: "SuiteDash White Label",
    category: "White Label",
    imageUrl: wlSuitedash,
    link: "https://suitedash.com/",
    github: "#",
    description: "Portal de clientes all-in-one com CRM, projetos, faturamento, agendamento e e-mail marketing. Plataforma white label segura para agências e prestadores de serviço com marca própria."
  },
  {
    id: 8,
    title: "Prodo Sistemas White Label",
    category: "White Label",
    imageUrl: wlProdo,
    link: "https://www.prodo.com.br/",
    github: "#",
    description: "ERP white label para revenda com PDV, NF-e, estoque e gestão completa. Marca em todas as telas, sub-revendas habilitadas e modelo B2B para montar rede de parceiros regionais."
  },
  {
    id: 9,
    title: "Avante Juntos White Label",
    category: "White Label",
    imageUrl: wlAvantejuntos,
    link: "https://lp.avantejuntos.com.br/revenda",
    github: "#",
    description: "Programa de revenda de ERP com a sua marca. Solução white label para parceiros comercializarem sistema de gestão completo sob identidade própria e receita recorrente."
  },
  {
    id: 10,
    title: "Wüst Software White Label",
    category: "White Label",
    imageUrl: wlWustsoftware,
    link: "https://wustsoftware.com.br/sistema-white-label-para-revenda",
    github: "#",
    description: "Sistema de gestão white label para revenda: financeiro, CRM, estoque e NFS-e com domínio, logo e cores do parceiro. Sem investimento inicial e com comissões recorrentes."
  },
  {
    id: 11,
    title: "PraticSystem White Label",
    category: "White Label",
    imageUrl: wlPraticsystem,
    link: "https://praticsystem.com.br/seja-revenda",
    github: "#",
    description: "Programa de revenda PraticSystem para comercializar sistemas de gestão com marca própria. Solução white label voltada a parceiros que querem escalar carteira de clientes SaaS."
  },
  {
    id: 12,
    title: "DKW System White Label",
    category: "White Label",
    imageUrl: wlDkwsystem,
    link: "https://www.dkwsystem.com/",
    github: "#",
    description: "CRM e atendimento multicanal com inteligência artificial. Plataforma white label para centralizar WhatsApp, chat e gestão de clientes com a marca da sua empresa."
  },
  {
    id: 13,
    title: "ZapBox White Label",
    category: "White Label",
    imageUrl: wlZapbox,
    link: "https://www.zapbox.com.br/",
    github: "#",
    description: "Plataforma omnichannel com agente de IA, chatbot WhatsApp, agente de voz e inbox unificado. Ideal para revenda white label de atendimento inteligente que vende e resolve."
  },
  {
    id: 14,
    title: "ultraWhats White Label",
    category: "White Label",
    imageUrl: wlUltrawhats,
    link: "https://www.ultrawhats.com.br/",
    github: "#",
    description: "Solução empresarial de atendimento e automação via WhatsApp. Plataforma white label para empresas e revendas que precisam de multi-atendimento profissional com marca própria."
  },
  {
    id: 15,
    title: "Japa Gestão White Label",
    category: "White Label",
    imageUrl: wlJapagestao,
    link: "https://japagestao.com.br/",
    github: "#",
    description: "Gestão de estoque e operação pelo WhatsApp. Solução prática white label para comércios que querem controlar produtos e pedidos direto no canal que o cliente já usa."
  },
  {
    id: 16,
    title: "Zelia Pedidos / CardapioMaster",
    category: "White Label",
    imageUrl: wlZeliapedidos,
    link: "https://www.zeliapedidos.com.br/",
    github: "#",
    description: "Sistema de cardápio digital e pedidos online para food service. Solução white label para restaurantes e delivery com pedidos, cardápio e gestão sob a marca do parceiro."
  },
  {
    id: 17,
    title: "SisFood White Label",
    category: "White Label",
    imageUrl: wlSisfood,
    link: "https://suaempresa.sisfood.com.br/revenda",
    github: "#",
    description: "Revenda white label focada em food service: gestão de pedidos, delivery e operação de restaurantes com a marca da sua empresa. Modelo pensado para parceiros de revenda."
  },
  {
    id: 18,
    title: "DoFast White Label",
    category: "White Label",
    imageUrl: wlDofast,
    link: "https://saas.dofast.app/",
    github: "#",
    description: "SaaS de gestão para restaurantes, delivery e varejo. Plataforma white label com operação de pedidos, PDV e gestão do dia a dia para revenda no segmento alimentício."
  },
  {
    id: 19,
    title: "Vendus White Label",
    category: "White Label",
    imageUrl: wlVendus,
    link: "https://www.vendus.com.br/",
    github: "#",
    description: "Plataforma de vendas com inteligência artificial para acelerar conversão e atendimento. Solução white label para times comerciais e revendas que querem vender com marca própria."
  },
  {
    id: 20,
    title: "AtendeChat White Label",
    category: "White Label",
    imageUrl: wlAtendechat,
    link: "https://atendechat.com/white-label/",
    github: "#",
    description: "White label de WhatsApp com API Oficial da Meta: multi-atendimento, Kanban CRM, chatbot com IA, campanhas e dashboards. Sua marca, seu domínio e preço definido por você."
  },
  {
    id: 21,
    title: "Imobiliq White Label",
    category: "White Label",
    imageUrl: wlImobiliq,
    link: "https://imobiliq.com.br/",
    github: "#",
    description: "CRM imobiliário que recebe, distribui e cobra o atendimento de leads em segundos. Solução white label para imobiliárias e corretores escalarem captação sem lead esfriar."
  },
  {
    id: 22,
    title: "Vetriks Gestão de Obras",
    category: "White Label",
    imageUrl: wlVetriks,
    link: "https://www.brooksconstrutora.com.br/vetriks",
    github: "#",
    description: "Sistema de gestão de obras para construção civil: planejamento, acompanhamento e operação do canteiro. Solução white label/ecossistema para construtoras e parceiros do setor."
  },
  {
    id: 23,
    title: "Aivo Franquia White Label",
    category: "White Label",
    imageUrl: wlAivo,
    link: "https://www.aivo.com.br/franquia/",
    github: "#",
    description: "Franquia de plataforma de gestão rural com marca própria. Modelo white label/franquia para quem quer operar e revender software agro com identidade e território próprios."
  },
  {
    id: 24,
    title: "UNAFIT Academias White Label",
    category: "White Label",
    imageUrl: wlUnafit,
    link: "https://unafit.com.br/",
    github: "#",
    description: "Software de gestão para academias de CrossFit e fitness: alunos, planos, treinos e operação. Solução white label para redes e parceiros do segmento fitness."
  },
  {
    id: 25,
    title: "ELO Gestão de Condomínios",
    category: "White Label",
    imageUrl: wlElobh,
    link: "https://elobh.com.br/",
    github: "#",
    description: "Gestão de condomínios com IA: sistema, administradora online e síndico profissional. Plataforma white label para administradoras e parceiros do mercado condominial."
  },
  {
    id: 26,
    title: "HUBLAR Encomendas White Label",
    category: "White Label",
    imageUrl: wlHublar,
    link: "https://www.hublar.com.br/administradoras",
    github: "#",
    description: "Software de encomendas para administradoras de condomínios. Controle de recebimentos, avisos e rastreio com possibilidade de operação white label para redes condominiais."
  },
  {
    id: 27,
    title: "JusAcesso White Label",
    category: "White Label",
    imageUrl: wlJusacesso,
    link: "https://www.jusacesso.com/",
    github: "#",
    description: "Plataforma de gestão jurídica com processos, prazos, intimações e atendimento com IA. Ecossistema legal tech para escritórios e parceiros que atuam com marca própria."
  },
  {
    id: 28,
    title: "ParkOS White Label",
    category: "White Label",
    imageUrl: wlParkos,
    link: "https://parkos.app/",
    github: "#",
    description: "Reservas online de vagas para dias de evento. Solução white label de estacionamento e check-in digital para arenas, shows e operadores de parking com marca própria."
  },
  {
    id: 29,
    title: "Meus Saas Em Andamento",
    category: "App Design",
    imageUrl: saas1Image,
    link: "#",
    github: "#",
    description: "Futuramente,Sera   Um Saaas Agente De Ia,Com Painel Administrativo E Um App Para O Cliente,Com Funcionalidades De Chat E Outros Recursos."
  },
  {
    id: 30,
    title: "Loja De Acai",
    category: "Branding",
    imageUrl: acai1Image,
    link: "https://acai.deliverits.com.br/",
    github: "#",
    description: "Design Completo De Indentidade De Marca Para Uma Rede De Lojas Sofisticadas. Inclui Logotipo, Paleta De Cores E Tipografia,E,Site Em Si."
  },
  {
    id: 31,
    title: "Sistema Nativos Lanches",
    category: "App Design",
    imageUrl: lanchesdeliveryImage,
    link: "https://www.nativosdelivery.com.br/",
    github: "#",
    description: "Sistema completo de pedidos online desenvolvido para a lanchonete Nativos Lanches. A aplicação permite que os clientes realizem pedidos de forma prática, visualizem o cardápio atualizado, personalizem seus lanches e acompanhem o status do pedido em tempo real."
  },
  {
    id: 32,
    title: "Sistema DE Alugueis De Chácaras",
    category: "Web Design",
    imageUrl: printchacara2,
    link: "https://cara-central-hub.vercel.app/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 33,
    title: "App IByte",
    category: "App Design",
    imageUrl: appibyteImage,
    link: "https://play.google.com/store/apps/details?id=com.kobe.ibyte&pcampaignid=web_share",
    github: "#",
    description: "Sistema completo de E-commerce desenvolvido para a IByte, com funcionalidades de catálogo de produtos, carrinho de compras e integração com métodos de pagamento. Interface amigável e responsiva para uma experiência de compra fluida."
  },
  {
    id: 34,
    title: "E-commerce IByte",
    category: "Web Design",
    imageUrl: ibyteImage,
    link: "https://www.ibyte.com.br/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 35,
    title: "E-commerce Mega Eletrônico",
    category: "Web Design",
    imageUrl: megaeletronico,
    link: "https://megaeletronicos.com/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 36,
    title: "App Mega Eletrônico",
    category: "App Design",
    imageUrl: appmegaeletronico,
    link: "https://play.google.com/store/apps/details?id=com.megaeletronicos.app&pcampaignid=web_share",
    github: "#",
    description: "Sistema completo de E-commerce desenvolvido para a Mega Eletrônico, com funcionalidades de catálogo de produtos, carrinho de compras e integração com métodos de pagamento. Interface amigável e responsiva para uma experiência de compra fluida."
  },
  {
    id: 37,
    title: "App Nosso Lar",
    category: "App Design",
    imageUrl: appnossolar,
    link: "https://play.google.com/store/apps/details?id=br.com.nwsys.lojasnossolar&pcampaignid=web_share",
    github: "#",
    description: "Sistema completo de E-commerce desenvolvido para a Nosso Lar, com funcionalidades de catálogo de produtos, carrinho de compras e integração com métodos de pagamento. Interface amigável e responsiva para uma experiência de compra fluida."
  },
  {
    id: 38,
    title: "E-Commerce Oriba Shop",
    category: "Web Design",
    imageUrl: oribashop,
    link: "https://www.oriba.com.br/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 39,
    title: "E-Commerce EShop",
    category: "Web Design",
    imageUrl: eshope,
    link: "https://www.eshop.com.br/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 40,
    title: "E-Commerce FatShop",
    category: "Web Design",
    imageUrl: fastshope,
    link: "https://site.fastshop.com.br/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
  {
    id: 41,
    title: "App FatShop",
    category: "App Design",
    imageUrl: appfastshope,
    link: "https://play.google.com/store/apps/details?id=br.com.fastshop.ecommerce.beta&pcampaignid=web_share",
    github: "#",
    description: "Sistema completo de E-commerce desenvolvido para a FatShop, com funcionalidades de catálogo de produtos, carrinho de compras e integração com métodos de pagamento. Interface amigável e responsiva para uma experiência de compra fluida."
  },
  {
    id: 42,
    title: "E-Commerce Gigantec",
    category: "Web Design",
    imageUrl: gigantec,
    link: "https://www.gigantec.com.br/",
    github: "#",
    description: "Simples projeto que um cliente me pediu através do 99Freelas. Ele disse que está perfeito e atende a todas as necessidades dele. Ele permitiu que eu colocasse o projeto no meu portfólio e deixasse as pessoas verem as funcionalidades."
  },
];


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-portfolio-violet font-medium mb-2">Meus Projetos</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-portfolio-blue mb-4">Projetos Em Destaque</h2>
          <p className="text-gray-600">
            Explore meu trabalho mais recente mostrando minhas habilidades em design e desenvolvimento.
          </p>
          <div className="w-20 h-1 bg-portfolio-indigo mx-auto mt-4"></div>
        </div>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-portfolio-indigo text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={project.imageUrl}
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.github}
                        className="text-white bg-portfolio-indigo p-2 rounded-full hover:bg-portfolio-violet transition-colors"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a 
                        href={project.link}
                        className="text-white bg-portfolio-indigo p-2 rounded-full hover:bg-portfolio-violet transition-colors"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs bg-portfolio-indigo/10 text-portfolio-violet font-medium rounded-full mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-portfolio-blue mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-portfolio-indigo hover:text-portfolio-violet transition-colors font-medium"
                  target="_blank" rel="noopener noreferrer"
                >
                  Ver Projeto
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
