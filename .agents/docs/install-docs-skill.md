# CordisX Skill Availability

Describe your task to the `cordisx` entry when available. It selects standard
documentation, user-experience Q&A, or Plugin Dev without asking you to choose a
Skill. Product documentation remains online with its owning repository.

## CordisX Startup

The Host manages its bundled Skills during a normal launch into that launch's
effective home. A release containing the unified bundle provides `cordisx`,
`cordisx-docs`, `cordisx-qa`, and `cordisx-plugin-development`. Do not add a separate
Docs Skill download to ordinary installation or startup instructions.

The published `0.1.0-beta.13` predates the unified bundle and provisions only
Plugin Dev. Source changes do not update an already installed CLI. Use the
documentation matching the installed release; until it includes the bundle,
the [Docs entry](../../llms.txt) works directly without Skill installation.
See the Host's [startup Q&A](https://github.com/cordisx/cordisx/blob/main/.agents/docs/startup-qa.md)
for managed files, existing user content, and home selection.

## Optional Standalone Use

For an assistant outside a CordisX-managed launch, use its documented Skill
installation mechanism only when persistent installation is requested. The
canonical [Docs Skill](../../skills/cordisx-docs/SKILL.md) is maintained here;
`agents/openai.yaml` supplies optional interface metadata. It is not an npm
package or runtime plugin. Read the file directly for one-off use.

Use the user's existing Skill location and preserve local edits rather than
creating a duplicate with the same name. In Codex the user location is
`$HOME/.agents/skills`; see [Skill locations](https://developers.openai.com/codex/skills/).
Follow the assistant's discovery mechanism to check availability. A file on
disk does not prove that the current session loaded it. No CordisX restart,
plugin installation, or permission grant is needed merely to read documentation.

## Packaging Source

The Host bundles a snapshot from an exact Docs commit rather than downloading
mutable Skill instructions at startup. This repository owns the canonical
entry and metadata; the Host owns provisioning and snapshot provenance.
