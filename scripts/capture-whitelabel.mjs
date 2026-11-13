import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'src', 'imgportfolio', 'whitelabel');
fs.mkdirSync(outDir, { recursive: true });

const sites = [
  { slug: 'prosaas', url: 'https://prosaas.com.br/' },
  { slug: 'espocrm', url: 'https://www.espocrm.com/' },
  { slug: 'invoiceninja', url: 'https://invoiceninja.com/' },
  { slug: 'dolibarr', url: 'https://www.dolibarr.org/?l=pt&lang=pt' },
  { slug: 'freescout', url: 'https://www.freescout.net/' },
  { slug: 'glpi', url: 'https://www.glpi-project.org/br/helpdesk-software/' },
  { slug: 'suitedash', url: 'https://suitedash.com/' },
  { slug: 'prodo', url: 'https://www.prodo.com.br/' },
  { slug: 'avantejuntos', url: 'https://lp.avantejuntos.com.br/revenda' },
  { slug: 'wustsoftware', url: 'https://wustsoftware.com.br/sistema-white-label-para-revenda' },
  { slug: 'praticsystem', url: 'https://praticsystem.com.br/seja-revenda' },
  { slug: 'dkwsystem', url: 'https://www.dkwsystem.com/' },
  { slug: 'zapbox', url: 'https://www.zapbox.com.br/' },
  { slug: 'ultrawhats', url: 'https://www.ultrawhats.com.br/' },
  { slug: 'japagestao', url: 'https://japagestao.com.br/' },
  { slug: 'zeliapedidos', url: 'https://www.zeliapedidos.com.br/' },
  { slug: 'sisfood', url: 'https://suaempresa.sisfood.com.br/revenda' },
  { slug: 'dofast', url: 'https://saas.dofast.app/' },
  { slug: 'vendus', url: 'https://www.vendus.com.br/' },
  { slug: 'atendechat', url: 'https://atendechat.com/white-label/' },
  { slug: 'imobiliq', url: 'https://imobiliq.com.br/' },
  { slug: 'vetriks', url: 'https://www.brooksconstrutora.com.br/vetriks' },
  { slug: 'aivo', url: 'https://www.aivo.com.br/franquia/' },
  { slug: 'unafit', url: 'https://unafit.com.br/' },
  { slug: 'elobh', url: 'https://elobh.com.br/' },
  { slug: 'hublar', url: 'https://www.hublar.com.br/administradoras' },
  { slug: 'jusacesso', url: 'https://www.jusacesso.com/' },
  { slug: 'parkos', url: 'https://parkos.app/' },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  locale: 'pt-BR',
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
});

const results = [];

for (const site of sites) {
  const page = await context.newPage();
  const outPath = path.join(outDir, `${site.slug}.png`);
  try {
    console.log(`Capturing ${site.slug}...`);
    await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(2500);
    // Try to dismiss common cookie banners
    for (const text of ['Aceitar', 'Accept', 'Concordo', 'OK', 'Entendi', 'Permitir todos']) {
      try {
        const btn = page.getByRole('button', { name: new RegExp(text, 'i') }).first();
        if (await btn.isVisible({ timeout: 800 })) await btn.click({ timeout: 1000 });
      } catch {}
    }
    await page.waitForTimeout(800);
    await page.screenshot({ path: outPath, fullPage: false });
    const title = await page.title();
    results.push({ slug: site.slug, url: site.url, title, ok: true, file: outPath });
    console.log(`OK ${site.slug} — ${title}`);
  } catch (err) {
    results.push({ slug: site.slug, url: site.url, ok: false, error: String(err) });
    console.error(`FAIL ${site.slug}: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(results, null, 2));
console.log('\nDone. Saved to', outDir);
console.log(`Success: ${results.filter((r) => r.ok).length}/${results.length}`);
