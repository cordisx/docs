# CordisX documentation portal

Navigation and presentation for `https://cordisx.github.io/docs/`.

## Getting started with an AI assistant

```text
Read the CordisX documentation entry and install its documentation Skill so you can find the right guide for my CordisX requests: https://raw.githubusercontent.com/cordisx/docs/main/llms.txt
```

After installation, describe your CordisX task normally. The Skill loads relevant
owner documentation on demand. [Read the entry](llms.txt) or browse the
[Skill and documentation index](skills/index.md).

## Portal ownership

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
