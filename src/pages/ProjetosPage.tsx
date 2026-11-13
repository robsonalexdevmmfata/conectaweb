import { Link } from 'react-router-dom';
import SiteLayout from '@/components/layout/SiteLayout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/seo/Breadcrumbs';
import { organizationJsonLd } from '@/data/services';
import { company, whatsappLink } from '@/lib/company';
import { ArrowRight, ExternalLink } from 'lucide-react';

/** Projetos atualmente listados no portfólio do site — sem inventar entregas. */
const projectGroups = [
  {
    status: 'Portfólio em destaque',
    note: 'Projetos e soluções apresentadas na home, incluindo white labels e e-commerces/apps.',
    items: [
      { name: 'E-commerce e App IByte', type: 'E-commerce / App', href: 'https://www.ibyte.com.br/' },
      { name: 'E-commerce e App Mega Eletrônico', type: 'E-commerce / App', href: 'https://megaeletronicos.com/' },
      { name: 'App Nosso Lar', type: 'App', href: 'https://play.google.com/store/apps/details?id=br.com.nwsys.lojasnossolar&pcampaignid=web_share' },
      { name: 'E-Commerce Oriba Shop', type: 'E-commerce', href: 'https://www.oriba.com.br/' },
      { name: 'E-Commerce EShop', type: 'E-commerce', href: 'https://www.eshop.com.br/' },
      { name: 'E-Commerce / App FatShop', type: 'E-commerce / App', href: 'https://site.fastshop.com.br/' },
      { name: 'E-Commerce Gigantec', type: 'E-commerce', href: 'https://www.gigantec.com.br/' },
      { name: 'Sistema Nativos Lanches', type: 'Pedidos online', href: 'https://www.nativosdelivery.com.br/' },
      { name: 'Loja de Açaí', type: 'Branding / Site', href: 'https://acai.deliverits.com.br/' },
      { name: 'Sistema de Aluguéis de Chácaras', type: 'Sistema web', href: 'https://cara-central-hub.vercel.app/' },
      { name: 'SaaS de agente de IA (em andamento)', type: 'Em desenvolvimento', href: '/#projects' },
    ],
  },
  {
    status: 'Soluções White Label',
    note: 'Sistemas white label apresentados no portfólio para revenda e operação com marca própria. Não representam necessariamente clientes finais inventados.',
    items: [
      { name: 'ProSaaS, Prodo, Avante, Wüst, PraticSystem e demais WL do portfólio', type: 'White Label', href: '/#projects' },
    ],
  },
];

export default function ProjetosPage() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Projetos' },
  ];

  return (
    <SiteLayout>
      <SeoHead
        title="Projetos e Portfólio | Info Tech Andradina SP"
        description="Conheça projetos de e-commerce, aplicativos, sistemas web e white labels apresentados pela Info Tech em Andradina-SP."
        path="/projetos/"
        jsonLd={[organizationJsonLd, breadcrumbJsonLd(crumbs)]}
      />

      <section className="pt-28 pb-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs items={crumbs} />
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-portfolio-blue mb-4">
            Projetos em destaque
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Seleção de trabalhos e soluções apresentadas pela {company.shortName}. Diferenciamos demos, entregas de portfólio e produtos em desenvolvimento — sem inventar resultados ou depoimentos.
          </p>
          <Link to="/#projects" className="inline-flex items-center text-portfolio-indigo font-medium mb-12 hover:text-portfolio-violet">
            Ver galeria completa na home
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          {projectGroups.map((group) => (
            <div key={group.status} className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-2">{group.status}</h2>
              <p className="text-sm text-gray-500 mb-4">{group.note}</p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="bg-white rounded-lg border border-slate-100 p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
                    <div>
                      <p className="font-semibold text-portfolio-blue">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.type}</p>
                    </div>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center text-sm text-portfolio-indigo hover:text-portfolio-violet"
                    >
                      Abrir
                      <ExternalLink className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <a
            href={whatsappLink('Olá! Vi o portfólio e quero conversar sobre um projeto.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-portfolio-indigo hover:bg-portfolio-violet text-white px-6 py-3 rounded-md"
          >
            Solicitar orçamento
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
