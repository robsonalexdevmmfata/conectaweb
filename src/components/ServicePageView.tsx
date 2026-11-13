import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/seo/Breadcrumbs';
import {
  ServicePageData,
  faqJsonLd,
  getServiceBySlug,
  organizationJsonLd,
  serviceJsonLd,
} from '@/data/services';
import { company, whatsappLink } from '@/lib/company';

export default function ServicePageView({ service }: { service: ServicePageData }) {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/desenvolvimento-de-sistemas-andradina-sp' },
    { name: service.h1 },
  ];

  const related = service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean) as ServicePageData[];

  return (
    <SiteLayout>
      <SeoHead
        title={service.title}
        description={service.description}
        path={service.path}
        jsonLd={[
          organizationJsonLd,
          serviceJsonLd(service),
          faqJsonLd(service.faqs),
          breadcrumbJsonLd(crumbs),
        ]}
      />

      <article className="pt-28 pb-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs items={crumbs} />

          <p className="text-portfolio-violet font-medium mb-3">
            {company.shortName} · {company.city}-{company.region}
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-portfolio-blue mb-4">
            {service.h1}
          </h1>
          <p className="text-xl text-gray-700 font-medium mb-4">{service.problemLead}</p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.intro}</p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href={whatsappLink(`Olá! ${service.ctaText}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-portfolio-indigo hover:bg-portfolio-violet text-white px-6 py-3 rounded-md transition-all"
            >
              {service.ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Link
              to="/projetos"
              className="inline-flex items-center border border-portfolio-indigo text-portfolio-indigo hover:bg-portfolio-indigo/5 px-6 py-3 rounded-md transition-all"
            >
              Ver projetos
            </Link>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">
              Qual problema o cliente enfrenta?
            </h2>
            <ul className="space-y-3">
              {service.problems.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">
              Como isso prejudica a empresa?
            </h2>
            <ul className="space-y-3">
              {service.harm.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12 bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">
              Como a Info Tech resolve?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">{service.solution}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">
              Como funciona na prática?
            </h2>
            <ol className="space-y-3">
              {service.howItWorks.map((step, i) => (
                <li key={step} className="flex gap-4 text-gray-700">
                  <span className="font-bold text-portfolio-indigo">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">
              O que o sistema pode incluir?
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {service.features.map((item) => (
                <li key={item} className="bg-white border border-slate-100 rounded-lg p-4 text-gray-700 shadow-sm flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-portfolio-indigo shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">
              Como pedimos orçamento juntos?
            </h2>
            <ol className="space-y-3 mb-6">
              {service.process.map((step, i) => (
                <li key={step} className="flex gap-4 text-gray-700">
                  <span className="font-bold text-portfolio-indigo">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <a
              href={whatsappLink(`Olá! ${service.ctaText}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-portfolio-indigo hover:bg-portfolio-violet text-white px-6 py-3 rounded-md"
            >
              Falar no WhatsApp agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-2">
              Detalhes técnicos (para quem quiser saber mais)
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Você não precisa dominar estes termos para contratar. Explicamos em português simples:
            </p>
            <dl className="space-y-3">
              {service.techDetails.map((item) => (
                <div key={item.term} className="bg-slate-50 rounded-lg p-4">
                  <dt className="font-semibold text-portfolio-blue">{item.term}</dt>
                  <dd className="text-gray-600 text-sm mt-1">{item.explanation}</dd>
                </div>
              ))}
            </dl>
          </section>

          {service.relatedProjectHints.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">
                Exemplos relacionados no portfólio
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {service.relatedProjectHints.map((hint) => (
                  <li key={hint}>{hint}</li>
                ))}
              </ul>
              <Link to="/projetos" className="inline-flex items-center mt-4 text-portfolio-indigo font-medium hover:text-portfolio-violet">
                Ver projetos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </section>
          )}

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">Perguntas frequentes</h2>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <details key={faq.q} className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm">
                  <summary className="font-semibold text-portfolio-blue cursor-pointer list-none">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {related.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">Também pode interessar</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={item.path.replace(/\/$/, '')}
                    className="block bg-white border border-slate-100 rounded-lg p-5 shadow-sm hover:-translate-y-0.5 transition-all"
                  >
                    <h3 className="font-bold text-portfolio-blue mb-2">{item.h1}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3">{item.problemLead}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="bg-portfolio-indigo text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-serif font-bold mb-3">Vamos conversar sobre a sua empresa?</h2>
            <p className="mb-6 text-white/90">
              Conte a rotina e a dor de cabeça. A Info Tech em {company.city}-{company.region} monta um orçamento sob consulta, sem compromisso.
            </p>
            <a
              href={whatsappLink(`Olá! ${service.ctaText}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-portfolio-indigo font-semibold px-6 py-3 rounded-md hover:bg-slate-100 transition-colors"
            >
              {service.ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
}
