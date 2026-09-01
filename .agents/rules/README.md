# Aggregation Rules

- Treat `sources.yaml` as an explicit allowlist.
- Pull only `.agents/docs` from source repositories.
- Never aggregate `roadmap` or any `.agents/rules` directory.
- Record the source repository and commit for every build.
- Do not commit generated site content.
- Validate links and scan publishable content before deployment.
- Align documentation navigation, frame geometry, section seams, typography,
  Reicon usage, locale/theme behavior, footer, and responsive review with the
  canonical [CordisX public-site design system](https://github.com/cordisx/cordisx.github.io/blob/main/.agents/docs/site-design-system.md).
  Keep documentation-specific aggregation and presentation here; do not copy
  the canonical design document into this repository.
