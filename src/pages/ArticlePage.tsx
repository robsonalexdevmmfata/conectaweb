import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/seo/Breadcrumbs';
import { getArticleBySlug } from '@/data/articles';
import { getServiceBySlug, organizationJsonLd } from '@/data/services';
import { company, whatsappLink } from '@/lib/company';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  if (!article) return <Navigate to="/404" replace />;

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Conteúdo', path: '/conteudo/' },
    { name: article.h1 },
  ];

  const relatedServices = article.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  return (
    <SiteLayout>
      <SeoHead
        title={article.title}
        description={article.description}
        path={article.path}
        type="article"
        jsonLd={[
          organizationJsonLd,
          breadcrumbJsonLd(crumbs),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.h1,
            description: article.description,
            datePublished: article.datePublished,
            author: { '@type': 'Organization', name: company.legalName },
            publisher: { '@id': `${company.url}/#organization` },
            mainEntityOfPage: `${company.url}${article.path}`,
          },
        ]}
      />

      <article className="pt-28 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <p className="text-sm text-gray-500 mb-3">
            Publicado em {new Date(article.datePublished).toLocaleDateString('pt-BR')} · {company.city}-{company.region}
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-portfolio-blue mb-6">
            {article.h1}
          </h1>
          <p className="text-lg text-gray-600 mb-10">{article.description}</p>

          {article.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {relatedServices.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">Serviços relacionados</h2>
              <ul className="space-y-2">
                {relatedServices.map((service) =>
                  service ? (
                    <li key={service.slug}>
                      <Link to={service.path} className="text-portfolio-indigo hover:text-portfolio-violet font-medium">
                        {service.h1}
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </section>
          )}

          <a
            href={whatsappLink(`Olá! Li o artigo "${article.h1}" e quero conversar.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-portfolio-indigo hover:bg-portfolio-violet text-white px-6 py-3 rounded-md"
          >
            Solicitar orçamento
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </article>
    </SiteLayout>
  );
}
