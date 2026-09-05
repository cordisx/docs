# Documentation portal maintenance

- Follow the [organization file-size rule](https://github.com/cordisx/cordisxmono/blob/main/.agents/rules/file-size.md) when adding or expanding files.
- Preserve the third-party `reicon@1.2.1` files under `assets/reicon/`;
  its [provenance](../../assets/reicon/README.md) and license travel with the copy.
  The formatter excludes that directory; maintained `reicons.js` remains checked.
- Treat `sources.yaml` as an explicit allowlist.
- Keep navigation links in `index.html` aligned with that registry. The current
  implementation links to source documentation; it has no Markdown aggregation
  build. Describe planned fetching or rendering as planned.
- Keep product facts and normative contracts in their source repositories.
- Review links and claims for Markdown-only changes. Run `npm run check` for
  portal HTML, styles, or script changes and review the affected presentation.
- Before an authorized deployment, validate navigation and publishable content.
- Align documentation navigation, frame geometry, section seams, typography,
  Reicon usage, locale/theme behavior, footer, and responsive review with the
  canonical [CordisX public-site design system](https://github.com/cordisx/cordisx.github.io/blob/main/.agents/docs/site-design-system.md).
  Keep documentation-specific aggregation and presentation here; do not copy
  the canonical design document into this repository.

If aggregation is implemented, follow
[the integration boundary](../../integrations/README.md): pull only approved
`.agents/docs` content, exclude private planning and maintenance rules, record
resolved source commits, normalize links, and keep generated content out of Git.
These are requirements for that future implementation, not evidence it exists.
