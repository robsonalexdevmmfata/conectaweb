import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const today = new Date().toISOString().slice(0, 10);
const base = 'https://agenciainfotech.com.br';

const services = [
  'desenvolvimento-de-sistemas-andradina-sp',
  'desenvolvimento-de-software-sob-medida',
  'sistemas-web-empresariais',
  'desenvolvimento-de-aplicativos',
  'desenvolvimento-de-erp-crm',
  'automacao-empresarial',
  'integracao-de-sistemas-api',
  'inteligencia-artificial-empresarial',
  'desenvolvimento-de-ecommerce',
  'criacao-de-portais-empresariais',
  'suporte-manutencao-sistemas-andradina',
];

const articles = [
  'quando-empresa-precisa-sistema-personalizado',
  'quanto-custa-desenvolver-sistema-empresarial',
  'erp-ou-sistema-personalizado',
  'como-automatizar-atendimento-empresa',
  'integrar-whatsapp-com-crm',
  'substituir-planilhas-por-sistemas',
  'vantagens-aplicativo-para-empresa',
  'ia-para-empresas-andradina',
  'escolher-empresa-desenvolvimento-software',
];

const urls = [
  { loc: `${base}/`, priority: '1.0', changefreq: 'weekly' },
  { loc: `${base}/projetos/`, priority: '0.8', changefreq: 'weekly' },
  { loc: `${base}/atuacao-regional/`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${base}/conteudo/`, priority: '0.7', changefreq: 'weekly' },
  ...services.map((s) => ({ loc: `${base}/${s}/`, priority: '0.9', changefreq: 'monthly' })),
  ...articles.map((a) => ({ loc: `${base}/conteudo/${a}/`, priority: '0.6', changefreq: 'monthly' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), xml);
console.log(`Sitemap gerado com ${urls.length} URLs`);
