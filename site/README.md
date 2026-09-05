# Current portal layout

The static portal lives at the repository root:

- [`index.html`](../index.html) owns the source-navigation cards and semantic shell.
- [`site-shell.css`](../site-shell.css) and [`styles.css`](../styles.css) own presentation.
- [`preferences.js`](../preferences.js), [`site-links.js`](../site-links.js), and
  [`reicons.js`](../reicons.js) own display preferences, local-preview routing,
  and icon composition.
- [`scripts/check.mjs`](../scripts/check.mjs) checks the portal structure and assets.

This directory is a maintenance navigation entry, not the current source or
generated-output root. There is no Markdown rendering build in this repository.
Product documentation remains in the sources described by
[the contribution guide](../.agents/docs/contributor-guide.md).
