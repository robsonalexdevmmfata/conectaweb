/**
 * Pré-renderiza rotas SEO após o build (SPA → HTML estático por URL).
 * Uso: npm run build (já chama este script).
 */
import { chromium } from 'playwright';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');
const port = 4179;
const base = `http://127.0.0.1:${port}`;

const routes = [
  '/',
  '/projetos',
  '/atuacao-regional',
  '/conteudo',
  '/desenvolvimento-de-sistemas-andradina-sp',
  '/desenvolvimento-de-software-sob-medida',
  '/sistemas-web-empresariais',
  '/desenvolvimento-de-aplicativos',
  '/desenvolvimento-de-erp-crm',
  '/automacao-empresarial',
  '/integracao-de-sistemas-api',
  '/inteligencia-artificial-empresarial',
  '/desenvolvimento-de-ecommerce',
  '/criacao-de-portais-empresariais',
  '/suporte-manutencao-sistemas-andradina',
  '/conteudo/quando-empresa-precisa-sistema-personalizado',
  '/conteudo/quanto-custa-desenvolver-sistema-empresarial',
  '/conteudo/erp-ou-sistema-personalizado',
  '/conteudo/como-automatizar-atendimento-empresa',
  '/conteudo/integrar-whatsapp-com-crm',
  '/conteudo/substituir-planilhas-por-sistemas',
  '/conteudo/vantagens-aplicativo-para-empresa',
  '/conteudo/ia-para-empresas-andradina',
  '/conteudo/escolher-empresa-desenvolvimento-software',
];

function startPreview() {
  return spawn(
    process.platform === 'win32' ? 'npx.cmd' : 'npx',
    ['vite', 'preview', '--host', '127.0.0.1', '--port', String(port)],
    { cwd: path.join(__dirname, '..'), stdio: ['ignore', 'pipe', 'pipe'], shell: true }
  );
}

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status === 404) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 400));
  }
  throw new Error('Preview server não iniciou a tempo');
}

function writeHtml(route, html) {
  const clean = route === '/' ? '' : route.replace(/^\//, '');
  const outDir = clean ? path.join(distDir, clean) : distDir;
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, 'index.html');
  fs.writeFileSync(outFile, html, 'utf8');
  console.log('Prerendered', route, '→', path.relative(distDir, outFile));
}

const preview = startPreview();
let previewLog = '';
preview.stdout.on('data', (d) => { previewLog += d.toString(); });
preview.stderr.on('data', (d) => { previewLog += d.toString(); });

try {
  await waitForServer(base);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  for (const route of routes) {
    await page.goto(`${base}${route}`, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(500);
    const html = await page.content();
    writeHtml(route, html);
  }

  await browser.close();
  console.log(`Pré-render concluído: ${routes.length} rotas`);
} catch (err) {
  console.error('Falha no prerender:', err.message);
  console.error(previewLog);
  process.exitCode = 1;
} finally {
  preview.kill();
}
