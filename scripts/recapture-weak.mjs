import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'src', 'imgportfolio', 'whitelabel');

const sites = [
  { slug: 'suitedash', url: 'https://suitedash.com/' },
  { slug: 'jusacesso', url: 'https://www.jusacesso.com/' },
  { slug: 'wustsoftware', url: 'https://wustsoftware.com.br/sistema-white-label-para-revenda' },
  { slug: 'dkwsystem', url: 'https://www.dkwsystem.com/' },
  { slug: 'parkos', url: 'https://parkos.app/' },
  { slug: 'invoiceninja', url: 'https://invoiceninja.com/' },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  locale: 'pt-BR',
});

for (const site of sites) {
  const page = await context.newPage();
  try {
    console.log(`Recapturing ${site.slug}...`);
    await page.goto(site.url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2000);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    for (const text of ['Aceitar', 'Accept', 'Accept All', 'Concordo', 'OK', 'Entendi', 'Close', 'Fechar']) {
      try {
        const btn = page.getByRole('button', { name: new RegExp(text, 'i') }).first();
        if (await btn.isVisible({ timeout: 600 })) await btn.click({ timeout: 800 });
      } catch {}
      try {
        const link = page.getByRole('link', { name: new RegExp(text, 'i') }).first();
        if (await link.isVisible({ timeout: 400 })) await link.click({ timeout: 800 });
      } catch {}
    }
    // close cookie/modals via common selectors
    await page.evaluate(() => {
      document.querySelectorAll('[class*="cookie"], [id*="cookie"], [class*="consent"], .modal, [role="dialog"]').forEach((el) => {
        const close = el.querySelector('button, [aria-label*="close" i], .close');
        if (close) close.click();
      });
    }).catch(() => {});
    await page.waitForTimeout(800);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: path.join(outDir, `${site.slug}.png`),
      fullPage: false,
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
    console.log(`OK ${site.slug}`);
  } catch (e) {
    console.error(`FAIL ${site.slug}`, e.message);
  } finally {
    await page.close();
  }
}

await browser.close();
