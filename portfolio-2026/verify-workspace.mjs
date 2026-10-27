// Static Xpen Studio regression checks. No installed dependencies needed.
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';
import assert from 'node:assert/strict';

const root = dirname(fileURLToPath(import.meta.url));
const pages = ['index.html','projects/index.html','journal/index.html','now/index.html','about/index.html'];
const assets = ['studio.css','studio-nav.js','workspace.css','workspace.js','projects-gallery.js','journal.js',
  'favicon.svg','og-cover.svg','manifest.webmanifest'];
const read = path => readFileSync(join(root,path),'utf8');
for (const path of [...pages,...assets]) {
  assert(existsSync(join(root,path)), 'Missing source: '+path);
  assert(existsSync(join(root,'public',path)), 'Missing mirrored public asset: '+path);
  assert.equal(read(path),readFileSync(join(root,'public',path),'utf8'), 'Source/public mismatch: '+path);
}
for (const path of pages) {
  const html = read(path);
  assert(html.includes('class="studio-header'), 'Missing creative studio header: '+path);
  assert(html.includes('class="os-content studio-main"'), 'Missing main content: '+path);
  assert(html.includes('studio.css'), 'Studio stylesheet missing: '+path);
  assert(html.includes('studio-nav.js'), 'Mobile navigation controller missing: '+path);
  assert(html.includes('workspace.js'), 'Project/journal command search missing: '+path);
  assert(html.includes('id="studio-navigation"'), 'Navigation links missing: '+path);
  assert(html.includes('id="os-command"'), 'Global search dialog missing: '+path);
  assert(html.includes('id="main"'), 'Skip-link target missing: '+path);
  assert(html.includes('id="top"'), 'Back-to-top target missing: '+path);
  assert(html.includes('1f43660b56d4fd981dcc907d47ba6ca2'), 'Existing analytics missing: '+path);
  assert(!html.includes('class="os-sidebar"'),'Application sidebar should not be present: '+path);
  assert(!html.includes('class="os-bottom-nav"'),'Application bottom dock should not be present: '+path);
  const base = dirname(join(root,path));
  for (const found of html.matchAll(/<(?:link|script)\b[^>]*?(?:href|src)="([^"]+)"/g)) {
    const url = found[1];
    if (/^(https?:|data:|\/)/.test(url)) continue;
    assert(existsSync(resolve(base,url)), 'Broken local asset: '+path+' => '+url);
  }
}
const home=read('index.html'),journal=read('journal/index.html'),gallery=read('projects-gallery.js');
assert(home.includes('class="studio-hero"'),'Distinctive editorial home missing');
assert(home.includes('id="notes"'),'Journal feature link missing');
assert.equal((journal.match(/<details class="journal-entry"/g)||[]).length,12,'Must preserve 12 authored journal entries');
assert.equal((gallery.match(/\bid: '[^']+', number:/g)||[]).length,12,'Must preserve 12 authored project entries');
assert(gallery.includes('class="inspect-project"'),'Project inspection action missing');
for(const path of ['studio-nav.js','workspace.js','projects-gallery.js','journal.js']) {
  new Script(read(path),{filename:path});
}
const css=read('studio.css');
assert(css.includes('prefers-reduced-motion'),'Reduced-motion support required');
assert(css.includes('.studio-navigation'),'Creative studio nav CSS missing');
assert(css.includes('.studio-journal-spread'),'Editorial journal teaser missing');
console.log('PASS: Xpen Studio routes, 12 projects, 12 notes, source/public mirrors, referenced assets, scripts, accessible nav and SEO/tracking.');
