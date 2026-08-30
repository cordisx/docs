import { access, readFile } from 'node:fs/promises'

const index = await readFile(new URL('../index.html', import.meta.url), 'utf8')
const styles = await readFile(new URL('../styles.css', import.meta.url), 'utf8')
const shell = await readFile(new URL('../site-shell.css', import.meta.url), 'utf8')
const reicons = await readFile(new URL('../reicons.js', import.meta.url), 'utf8')
const sources = await readFile(new URL('../sources.yaml', import.meta.url), 'utf8')

for (const [file, content, references] of [
  ['index.html', index, ['./site-shell.css', './styles.css', './reicons.js', '/marketplace/', 'aria-current="page"', 'class="site-footer"']],
  ['site-shell.css', shell, ['width: min(1040px, 100%)', 'height: 76px', '.site-header::before', '.site-footer']],
  ['styles.css', styles, ['min-height: 360px', '.docs-grid', '.source-note']],
]) {
  for (const reference of references) {
    if (!content.includes(reference)) throw new Error(`${file} is missing ${reference}`)
  }
}

for (const source of [
  'repository: cordisx/cordisx\n    ref: main\n    source: .agents/docs\n    mount: cordisx',
  'repository: cordisx/cordisx-protocol\n    ref: main\n    source: .agents/docs\n    mount: protocol',
]) {
  if (!sources.includes(source)) throw new Error(`sources.yaml is missing an allowed source: ${source.split('\n')[0]}`)
}

const repositories = [...sources.matchAll(/^\s*- repository:/gm)]
if (repositories.length !== 2) throw new Error('sources.yaml must contain exactly two allowed repositories')
if (/\.agents\/rules|roadmap/i.test(index)) throw new Error('public docs navigation references a forbidden source')
if (reicons.includes('unpkg.com')) throw new Error('docs icons must load from the vendored Reicon modules')
if (!shell.includes('.site-header nav a[href="/#product"],') || !shell.includes('.site-header nav .github-link')) {
  throw new Error('mobile navigation must preserve the Docs and Marketplace links')
}
if (shell.includes('.site-header nav a:not(.github-link)')) {
  throw new Error('mobile navigation must not hide the Docs and Marketplace links')
}
if (index.includes('/cordisx/main/packages/cli/assets/brand/')) {
  throw new Error('brand assets must be pinned to an immutable CordisX revision')
}

for (const icon of [
  'ArrowRight',
  'ArrowUpRight',
  'BookOpen',
  'Code',
  'Globe',
  'ShieldCheck',
  'Store',
]) {
  await access(new URL(`../assets/reicon/icons/${icon}.js`, import.meta.url))
}
await access(new URL('../assets/reicon/LICENSE', import.meta.url))

console.log('documentation site checks passed')
