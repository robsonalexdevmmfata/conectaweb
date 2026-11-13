import { Link } from 'react-router-dom';
import SiteLayout from '@/components/layout/SiteLayout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumbs, { breadcrumbJsonLd } from '@/components/seo/Breadcrumbs';
import { articles } from '@/data/articles';
import { organizationJsonLd } from '@/data/services';

export default function ConteudoIndexPage() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Conteúdo' },
  ];

  return (
    <SiteLayout>
      <SeoHead
        title="Conteúdo para Empresas | Info Tech Andradina"
        description="Artigos sobre sistemas personalizados, ERP, automação, IA e como escolher uma empresa de software em Andradina-SP."
        path="/conteudo/"
        jsonLd={[organizationJsonLd, breadcrumbJsonLd(crumbs)]}
      />

      <section className="pt-28 pb-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs items={crumbs} />
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-portfolio-blue mb-4">
            Conteúdo de autoridade
          </h1>
          <p className="text-gray-600 text-lg mb-10">
            Guias práticos para empresas que avaliam sistemas, automação e desenvolvimento de software em Andradina.
          </p>
          <div className="grid gap-4">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={article.path}
                className="block bg-white rounded-lg border border-slate-100 p-6 shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <h2 className="text-xl font-bold text-portfolio-blue mb-2">{article.h1}</h2>
                <p className="text-gray-600 text-sm">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
