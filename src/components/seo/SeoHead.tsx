import { Helmet } from 'react-helmet-async';
import { SITE_URL, company } from '@/lib/company';

type SeoHeadProps = {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export default function SeoHead({
  title,
  description,
  path = '/',
  type = 'website',
  image,
  noindex = false,
  jsonLd,
}: SeoHeadProps) {
  const canonical = `${SITE_URL}${path.endsWith('/') || path === '/' ? path : `${path}/`}`.replace(
    /([^:]\/)\/+/g,
    '$1'
  );
  const ogImage = image || `${SITE_URL}${company.logoPath}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={company.brandName} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
