import { Link } from 'react-router-dom';
import SiteLayout from '@/components/layout/SiteLayout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/seo/Breadcrumbs';
import { organizationJsonLd } from '@/data/services';
import { company, pendingConfirmations, whatsappLink } from '@/lib/company';
import { ArrowRight } from 'lucide-react';

export default function AtuacaoRegionalPage() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Atuação regional' },
  ];

  return (
    <SiteLayout>
      <SeoHead
        title="Atuação Regional em Andradina SP | Info Tech"
        description="A Info Tech atua em Andradina-SP com desenvolvimento de sistemas sob encomenda, software empresarial, apps e automação. Cobertura regional sob confirmação."
        path="/atuacao-regional/"
        jsonLd={[
          organizationJsonLd,
          breadcrumbJsonLd(crumbs),
          {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            '@id': `${company.url}/#local-service`,
            name: company.legalName,
            url: company.url,
            telephone: `+${company.whatsappE164}`,
            email: company.emailPrimary,
            address: {
              '@type': 'PostalAddress',
              addressLocality: company.city,
              addressRegion: company.region,
              addressCountry: company.countryCode,
            },
            areaServed: { '@type': 'City', name: company.city },
          },
        ]}
      />

      <section className="pt-28 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-portfolio-blue mb-6">
            Atuação regional da Info Tech
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            A cidade principal confirmada no site é <strong>{company.city}, {company.region}</strong>.
            Desenvolvemos sistemas sob encomenda, software empresarial, aplicativos, e-commerces, automações e suporte técnico para empresas locais.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">
              Cidade principal confirmada
            </h2>
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-5">
              <p className="font-semibold text-portfolio-blue text-lg">{company.city} — São Paulo</p>
              <p className="text-gray-600 mt-2">
                Base de posicionamento local e SEO. Endereço comercial completo (rua/número) ainda pendente de confirmação para Google Business Profile — até lá, o modelo recomendado é empresa de área de serviço.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">
              Municípios da região (pendentes de confirmação)
            </h2>
            <p className="text-gray-600 mb-4">
              O brief SEO sugere cobertura em cidades próximas. <strong>Não publicamos páginas locais duplicadas</strong> nem afirmamos atendimento oficial nestes municípios até o responsável confirmar.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {pendingConfirmations.regionalCitiesPendingConfirmation.map((city) => (
                <li key={city} className="bg-amber-50 text-amber-900/80 rounded-md px-3 py-2 text-sm">
                  {city} — aguardando confirmação
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">Serviços em Andradina</h2>
            <ul className="space-y-2 text-portfolio-indigo">
              <li>
                <Link to="/desenvolvimento-de-sistemas-andradina-sp/" className="hover:text-portfolio-violet">
                  Desenvolvimento de sistemas sob encomenda
                </Link>
              </li>
              <li>
                <Link to="/suporte-manutencao-sistemas-andradina/" className="hover:text-portfolio-violet">
                  Suporte e manutenção de sistemas
                </Link>
              </li>
              <li>
                <Link to="/desenvolvimento-de-aplicativos/" className="hover:text-portfolio-violet">
                  Desenvolvimento de aplicativos
                </Link>
              </li>
            </ul>
          </section>

          <a
            href={whatsappLink('Olá! Sou de Andradina/região e quero um orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-portfolio-indigo hover:bg-portfolio-violet text-white px-6 py-3 rounded-md"
          >
            Falar no WhatsApp
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
