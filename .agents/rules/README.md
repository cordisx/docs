# Documentation portal maintenance

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
