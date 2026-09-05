# CordisX documentation portal

Navigation and presentation for `https://cordisx.github.io/docs/`.

The current implementation is a static portal linking to the Host and Protocol
source documentation and the Marketplace. It does not fetch, render, or vendor
the Markdown from those repositories. [`sources.yaml`](sources.yaml) declares
the allowed source repositories; it is not an implemented aggregation pipeline.

Product and protocol material stays in its owning repository. Start with:

- [Contribution and source ownership guide](.agents/docs/contributor-guide.md).
- [Current portal layout](site/README.md).
- [Aggregation status and future integration requirements](integrations/README.md).
- [Maintenance rules](.agents/rules/README.md); Agents start with [AGENTS.md](AGENTS.md).

Runtime presentation changes use `npm run check`. Markdown-only changes require
link and diff review; this repository's check script does not validate remote
documentation contents or prove an aggregated site build.
