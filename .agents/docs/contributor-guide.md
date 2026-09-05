# Documentation Contribution Guide

## Choose the owner

| Material | Authoritative source |
| --- | --- |
| Host product usage, implementation architecture, development and validation | [cordisx documentation](https://github.com/cordisx/cordisx/tree/main/.agents/docs) |
| Versioned plugin contracts and interoperability requirements | [Protocol specifications](https://github.com/cordisx/cordisx-protocol/tree/main/.agents/docs) |
| Shared public-site design and capture workflows | [Homepage maintenance guides](https://github.com/cordisx/cordisx.github.io/tree/main/.agents/docs) |
| Portal navigation, source registry, and presentation | This repository |

Edit the source when a product fact or contract changes. A useful navigation
summary links there; it does not duplicate the complete reference or become a
second specification. Package, plugin, and example instructions remain with
their artifacts and are reached through owner entry points.

## Current workflow

The [portal](../../README.md) currently links to documentation on GitHub.
[`sources.yaml`](../../sources.yaml) declares the allowed source roots, while
[`index.html`](../../index.html) implements the navigation. Neither resolves a
frozen document set today. The [integration guide](../../integrations/README.md)
records the work needed for future aggregation.

For a source edit, update its owner index and version links and validate there.
For a portal edit, keep the registry and relevant navigation consistent. Review
the relative links and `git diff --check` for documentation-only changes. Run
`npm run check` and the applicable presentation review for HTML, style, or script
changes. State which checks ran; static portal checks do not validate product
behavior, remote source content, or a publication that did not run.
