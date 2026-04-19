import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { createRequire } from 'module';
import { existsSync, readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const toc = require('./playground/node_modules/@lobehub/icons/es/toc.js');
const data = toc.default || toc;

const staticDir = join(__dirname, 'playground/node_modules/@lobehub/icons-static-svg/icons');
const iconBaseDir = join(__dirname, 'playground/node_modules/@lobehub/icons/es');

const dirAll = join(__dirname, 'llm-icons');
const dirMono = join(__dirname, 'llm-icons-mono');
rmSync(dirAll, { recursive: true, force: true });
rmSync(dirMono, { recursive: true, force: true });
mkdirSync(dirAll);
mkdirSync(dirMono);

let done = 0, failed = [];

for (const t of data) {
  const monoStaticPath = join(staticDir, t.docsUrl + '.svg');
  const colorStaticPath = join(staticDir, t.docsUrl + '-color.svg');
  const name = t.id + '.svg';

  let monoSvg = existsSync(monoStaticPath) ? readFileSync(monoStaticPath, 'utf8') : null;
  let colorSvg = existsSync(colorStaticPath) ? readFileSync(colorStaticPath, 'utf8') : null;

  // Skip Dolphin — 101KB outlier
  if (monoSvg && monoSvg.length > 20000) monoSvg = null;

  // Try rendering via React for missing icons
  if (!monoSvg) {
    try {
      const mod = await import(join(iconBaseDir, t.id, 'components/Mono.js'));
      const Comp = mod.default;
      const html = renderToStaticMarkup(createElement(Comp, { size: 24 }));
      if (html.includes('<svg')) monoSvg = html;
    } catch {}
  }
  if (!colorSvg && t.param.hasColor) {
    try {
      const mod = await import(join(iconBaseDir, t.id, 'components/Color.js'));
      const Comp = mod.default;
      const html = renderToStaticMarkup(createElement(Comp, { size: 24 }));
      if (html.includes('<svg')) colorSvg = html;
    } catch {}
  }

  if (!monoSvg) { failed.push(t.id); continue; }

  writeFileSync(join(dirAll, name), colorSvg || monoSvg);
  writeFileSync(join(dirMono, name), monoSvg);
  done++;
}

console.log(`Done: ${done} / ${data.length}`);
if (failed.length) console.log('Failed:', failed.join(', '));
