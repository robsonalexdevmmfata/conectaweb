import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SITE_URL } from '@/lib/company';

export type Crumb = { name: string; path?: string };

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path
        ? { item: `${SITE_URL}${item.path === '/' ? '/' : item.path.endsWith('/') ? item.path : `${item.path}/`}` }
        : {}),
    })),
  };
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-400" aria-hidden />}
              {isLast || !item.path ? (
                <span className={isLast ? 'text-portfolio-blue font-medium' : ''} aria-current={isLast ? 'page' : undefined}>
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-portfolio-violet transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
