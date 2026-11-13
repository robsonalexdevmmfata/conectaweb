# SEO Local Avançado — Agência Info Tech Ltda

Relatório de auditoria e implementação.  
Site: https://agenciainfotech.com.br/  
Data: 2026-03-13

---

## 1. Problemas identificados (auditoria)

| Área | Achado |
|------|--------|
| Arquitetura | SPA Vite + React + React Router com **apenas** `/` e `404` — conteúdo de serviços não tinha URLs indexáveis próprias. |
| SEO on-page | Title genérico longo; meta `keywords` excessiva (pouco útil); H1 era marca, não intenção de busca. |
| Schema | `LocalBusiness` + `SoftwareApplication` misturados; `streetAddress: "Andradina"` incompleto; geo/horários/áreas sem confirmação rigorosa. |
| Sitemap | Só home + âncoras `#about` / `#projects` (âncoras **não** são URLs de página). |
| Contato | **E-mails divergentes** e **WhatsApps divergentes** (ver pendências). |
| About | E-mail `contato@infotech.com.br` e localização só “São Paulo” inconsistentes com Contact/Footer. |
| Portfólio | Projetos citados no brief (Brasil Predial, agendamento odontológico etc.) **já haviam sido removidos** a pedido anterior — portfólio atual usa e-commerces/apps/white labels. |
| Indexabilidade SPA | Sem pré-render, Google depende de JS. Script `prerender.mjs` criado; rodar `npm run build:seo` quando Playwright estiver disponível. |
| Timeline About | Experiências em empresas com nomes genéricos (NexGen, ByteForge…) — **não auditadas**; sinalizadas como risco de credibilidade. |

### Stack confirmada

- **Vite 5** + **React 18** + **TypeScript** + **Tailwind** + **react-router-dom** + **shadcn/ui**
- SEO dinâmico: **react-helmet-async**
- Hosting tipicamente estático (SPA fallback via `public/_redirects`)

---

## 2. Alterações realizadas

- Homepage: title/description/H1/CTAs alinhados ao brief; seção de 8 serviços com links internos.
- 11 páginas de serviço indexáveis (incl. CNAE principal e secundário).
- `/projetos/`, `/atuacao-regional/`, `/conteudo/` + 9 artigos.
- Canonical, Open Graph, Twitter Cards por página (Helmet).
- JSON-LD: Organization, WebSite, Service, FAQPage, BreadcrumbList, Article.
- Sitemap com 24 URLs reais; robots.txt atualizado.
- Remoção de schema agressivo (geo/horários/lista enorme de cidades) do `index.html`.
- Navbar/Footer com links para serviços, conteúdo e região.
- Fonte única de dados: `src/lib/company.ts`.
- Build: `npm run build` gera sitemap + bundle. `npm run build:seo` tenta pré-render.

Identidade visual (cores, animações, componentes) preservada.

---

## 3. Páginas criadas

### Serviços

| URL | Foco |
|-----|------|
| `/desenvolvimento-de-sistemas-andradina-sp/` | Página principal CNAE 62.01-5-01 |
| `/desenvolvimento-de-software-sob-medida/` | Software sob medida |
| `/sistemas-web-empresariais/` | Sistemas web |
| `/desenvolvimento-de-aplicativos/` | Apps |
| `/desenvolvimento-de-erp-crm/` | ERP/CRM |
| `/automacao-empresarial/` | Automação / n8n |
| `/integracao-de-sistemas-api/` | APIs |
| `/inteligencia-artificial-empresarial/` | IA empresarial |
| `/desenvolvimento-de-ecommerce/` | E-commerce |
| `/criacao-de-portais-empresariais/` | Sites/portais |
| `/suporte-manutencao-sistemas-andradina/` | CNAE 62.09-1-00 |

### Institucionais / autoridade

| URL | Foco |
|-----|------|
| `/projetos/` | Portfólio indexável |
| `/atuacao-regional/` | Andradina confirmada; demais cidades pendentes |
| `/conteudo/` | Hub de artigos |
| `/conteudo/*` | 9 artigos de autoridade |

---

## 4. Keywords utilizadas por página (principais)

| Página | Keywords |
|--------|----------|
| Home | desenvolvimento de sistemas Andradina SP; software sob medida |
| Sistemas Andradina | desenvolvimento de sistemas Andradina; empresa de software Andradina; sistemas personalizados |
| Software sob medida | software sob medida Andradina; sistemas personalizados |
| ERP/CRM | desenvolvimento de ERP; CRM; sistemas de gestão |
| Apps | criação de aplicativos em Andradina |
| Automação | automação empresarial; n8n |
| APIs | integração de sistemas; APIs |
| IA | inteligência artificial para empresas |
| E-commerce | loja virtual; sistemas para comércio |
| Suporte | suporte técnico; manutenção de software Andradina |
| Atuação regional | Andradina SP (únicas cidade publicada como confirmada) |

---

## 5. Titles e descriptions

### Home

- **Title:** Desenvolvimento de Sistemas em Andradina SP \| Info Tech  
- **Description:** A Info Tech desenvolve sistemas personalizados, plataformas web, aplicativos, ERP, CRM e automações para empresas de Andradina e região. Solicite um orçamento.  
- **H1:** Desenvolvimento de Sistemas Sob Medida em Andradina SP  

### Página principal (CNAE)

- **Title:** Desenvolvimento de Sistemas em Andradina SP \| Info Tech  
- **H1:** Desenvolvimento de Sistemas Sob Encomenda em Andradina SP  

### Suporte (CNAE secundário)

- **Title:** Suporte e Manutenção de Sistemas em Andradina \| Info Tech  
- **H1:** Suporte Técnico e Manutenção de Sistemas em Andradina  

Demais titles/descriptions estão em `src/data/services.ts` e `src/data/articles.ts`.

---

## 6. Dados estruturados implementados

- `Organization` (home + páginas)
- `WebSite`
- `Service` (páginas de serviço)
- `FAQPage` (home + serviços)
- `BreadcrumbList`
- `Article` (conteúdo)
- `ProfessionalService` leve em `/atuacao-regional/` (cidade Andradina, sem rua inventada)

**Não implementado de propósito:** AggregateRating fictício; SoftwareApplication genérico na org; coordenadas/horários sem confirmação.

---

## 7. Sitemap e robots

- `public/sitemap.xml` — 24 URLs  
- `public/robots.txt` — Allow + Sitemap  
- `public/_redirects` — fallback SPA `/* → /index.html 200`  

---

## 8. Melhorias de performance / UX

- ALT descritivos no Hero/logo; width/height em imagens-chave da UI.
- Lazy loading já via Vite/assets; galeria de projetos mantém `object-top`.
- Remoção de meta keywords gigante (ruído).
- 404 amigável com links internos.
- **Pendente:** converter imagens pesadas do portfólio (PNG grandes) para WebP/AVIF; rodar PageSpeed após deploy; `npm run build:seo` para HTML estático por rota.

---

## 9. Links internos criados

- Home → 8 cards de serviço  
- Serviço ↔ serviços relacionados + `/projetos/` + WhatsApp CTA  
- Artigos → serviços relacionados  
- Footer → serviços, conteúdo, região  
- Navbar → Serviços, Projetos, Conteúdo, Região, Orçamento  

---

## 10. Pendências que dependem do proprietário

### E-mails (NÃO escolhidos automaticamente)

| E-mail | Onde aparece / origem | Status |
|--------|------------------------|--------|
| `agenciainfotechltdammfata@gmail.com` | Contact, Footer, schema | Em uso no código |
| `contato@infotech.com.br` | About (corrigido para o e-mail em uso + aviso) | Divergente |
| `josuegeraldoata@hotmail.com` | Brief / conteúdo público histórico | **Confirmar** |
| `josuegeraldoata@gmail.com` | Brief / conteúdo público histórico | **Confirmar** |

### WhatsApp

| Número | Origem | Status |
|--------|--------|--------|
| `(18) 98101-1186` | Código do site | Em uso |
| `(18) 99117-6034` | Brief SEO | **Confirmar qual é o oficial** |

### Local / GBP

- Endereço comercial completo (rua/número): **não confirmado** → preferir **empresa de área de serviço** no Google até haver endereço elegível.
- Horários de funcionamento: existiam no schema antigo → **confirmar**.
- Cidades além de Andradina: listadas em `pendingConfirmations` — **não criar páginas locais** até confirmação.
- Avaliar se experiências da Timeline (outras empresas) são reais/publicáveis.

---

## 11. Google Search Console

1. Confirmar propriedade do domínio `agenciainfotech.com.br` (token já presente no `index.html` — validar se ainda é o correto).  
2. Enviar `https://agenciainfotech.com.br/sitemap.xml`.  
3. Inspecionar URLs principais (home + página de sistemas + suporte).  
4. Monitorar cobertura, CTR e queries de marca/local.  
5. Analytics `G-QX26HM61P8` já referenciado — confirmar se a propriedade GA4 está ativa.

---

## 12. Perfil da Empresa no Google (GBP)

**Nome comercial:** Info Tech Ltda (ou razão social oficial) — **sem** keyword stuffing no nome.

**Sugestão de categorias (ajustar à lista atual do Google):**

- Principal: Empresa de desenvolvimento de software / Serviços de programação de computadores  
- Secundárias: Serviços de tecnologia da informação; Desenvolvimento de sites (se aplicável)

**Preparar:**

- Descrição focada em desenvolvimento sob encomenda + suporte em Andradina  
- Serviços alinhados às páginas criadas  
- Área de cobertura: Andradina (expandir só após confirmação)  
- Telefone oficial único  
- Site: https://agenciainfotech.com.br/  
- Fotos reais (equipe/trabalho/telas) — sem stock enganoso  
- FAQ do GBP espelhando FAQs do site  
- **Não** criar perfis duplicados por cidade  
- **Não** manipular avaliações  

---

## Build e testes

- `npm run build` — **sucesso** (sitemap + Vite).  
- Pré-render (`npm run build:seo`) — requer Playwright instalado (`npm i -D playwright` + browsers).  
- Não publicado em produção automaticamente.

---

## Resultado esperado (posicionamento)

O site passa a comunicar de forma rastreável:

1. **Quem:** Info Tech Ltda (Andradina-SP)  
2. **O quê:** desenvolvimento de software sob encomenda + suporte TI  
3. **Onde:** Andradina (região sob confirmação)  
4. **Projetos:** portfólio atual indexável  
5. **Contato:** WhatsApp/e-mail em uso no código (oficial a confirmar)  

Próximo passo comercial: confirmar e-mail/WhatsApp/cidades → atualizar `src/lib/company.ts` → deploy → Search Console + GBP.

---

## 13. Atualização — linguagem comercial (público leigo)

Data: 2026-03-13

### Diretriz aplicada

- Páginas reescritas em linguagem simples: problema → prejuízo → solução → como funciona → funcionalidades → orçamento.
- Termos técnicos só no bloco “Detalhes técnicos”, com explicação em português.
- Home e cards de serviço falam a língua do empresário (“sistema para minha empresa”, “substituir planilhas”, “robô no WhatsApp”).

### Prioridade de keywords (intenção comercial — sem volumes pagos)

| Prioridade | Termos | Motivo |
|------------|--------|--------|
| Alta | sistema para minha empresa; criação de sistema personalizado; programa para substituir planilhas; quanto custa desenvolver um sistema | Intenção clara de compra / orçamento |
| Alta | sistema para controlar estoque; programa para controlar vendas; sistema para cadastro de clientes; sistema de pedidos | Dor operacional cotidiana |
| Média | automação de atendimento pelo WhatsApp; robô para atender clientes; programa para agendamento | Demanda forte em PMEs |
| Média-local | empresa que desenvolve sistemas + Andradina | SEO local |
| Apoio | sistema para organizar financeiro; sistema para controlar serviços | Complementares às páginas de gestão |

Volumes exatos exigem ferramenta paga (Search Console após tráfego, SEOKey, etc.). Não inventamos números.

### Arquivos principais desta rodada

- `src/data/services.ts`
- `src/components/ServicePageView.tsx`
- `src/components/Hero.tsx`
- `src/components/HomeServices.tsx`
- `src/data/articles.ts`
- `index.html` / `src/pages/Index.tsx`
