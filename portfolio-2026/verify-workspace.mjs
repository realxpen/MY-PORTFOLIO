// Verify static Xpen workspace without third-party dependencies.
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script } from 'node:vm';
import assert from 'node:assert/strict';

const root=dirname(fileURLToPath(import.meta.url));
const files=[
  'index.html','projects/index.html','journal/index.html','now/index.html',
  'about/index.html','workspace.css','workspace.js','projects-gallery.js',
  'journal.js','favicon.svg','og-cover.svg','manifest.webmanifest'
];
const read=path=>readFileSync(join(root,path),'utf8');
for(const path of files){
  const src=join(root,path),pub=join(root,'public',path);
  assert(existsSync(src), 'missing source '+path);
  assert(existsSync(pub), 'missing public mirror '+path);
  assert.equal(readFileSync(src,'utf8'),readFileSync(pub,'utf8'),'source/public differ: '+path);
}
const pages=['index.html','projects/index.html','journal/index.html','now/index.html','about/index.html'];
for(const path of pages) {
  const html=read(path);
  assert(html.includes('class="os-shell"'),'workspace shell missing '+path);
  assert(html.includes('workspace.css'),'workspace styles missing '+path);
  assert(html.includes('workspace.js'),'workspace behavior missing '+path);
  assert(html.includes('id="main"'),'skip target missing '+path);
  assert(html.includes('1f43660b56d4fd981dcc907d47ba6ca2'),'Metricool preserved '+path);
  const base=dirname(join(root,path));
  for(const attr of [...html.matchAll(/<(?:link|script)\b[^>]*?(?:href|src)="([^"]+)"/g)]) {
    const asset=attr[1];
    if(/^(https?:|data:|\/)/.test(asset)) continue;
    assert(existsSync(resolve(base,asset)),'missing page asset '+path+' -> '+asset);
  }
}
const journal=read('journal/index.html'),gallery=read('projects-gallery.js');
assert.equal((journal.match(/<details class="journal-entry"/g)||[]).length,12,'Expected 12 real journal entries');
assert.equal((gallery.match(/\bid: '[^']+', number:/g)||[]).length,12,'Expected 12 authored projects');
assert(gallery.includes('class="inspect-project"'),'Project inspect buttons absent');
for(const path of ['workspace.js','projects-gallery.js','journal.js']){
  new Script(read(path),{filename:path});
}
const styles=read('workspace.css');
assert(styles.includes('prefers-reduced-motion'),'Missing reduced-motion accommodation');
assert(styles.includes('.os-bottom-nav'),'Missing mobile app navigation');
console.info('PASS: workspace routes, source/public mirrors, assets, content, JS syntax and accessibility hooks.');
