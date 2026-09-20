# Install The CordisX Documentation Skill

The `cordisx-docs` Skill teaches an assistant where to look when a CordisX task
arises. Its only installed file is [SKILL.md](../../skills/cordisx-docs/SKILL.md);
product documentation stays online with its owner. It is not an npm package,
runtime plugin, or replacement for `cordisx-plugin-development`.

## Codex

Use the user's configured Skill directory. The current documented Codex
user-level location is `$HOME/.agents/skills/cordisx-docs/SKILL.md`; see
[Codex Skill locations](https://developers.openai.com/codex/skills/).
If an older installation already discovers a copy under `$CODEX_HOME/skills`
or `$HOME/.codex/skills`, update that existing copy instead of creating a second
Skill with the same name.
Check whether that Skill already exists before downloading. Reuse an identical
copy; preserve local edits instead of overwriting them during initial setup.

For a new installation:

```bash
SKILL_DIR="$HOME/.agents/skills/cordisx-docs"
mkdir -p "$SKILL_DIR"
curl --fail --location https://raw.githubusercontent.com/cordisx/docs/main/skills/cordisx-docs/SKILL.md --output "$SKILL_DIR/SKILL.md"
```

Read the downloaded file and verify its `name: cordisx-docs` frontmatter. Use the
agent's Skill discovery/reload mechanism, or start a new session if necessary,
and verify it lists `cordisx-docs`. A successful download alone does not prove
the current session has loaded it. Do not restart the CordisX Host for this step.

## Other Assistants Or Read-Only Use

Use the assistant's documented Skill installer/directory for the same standalone
file. Do not guess another product's configuration path. Without Skill support,
read [the Docs entry](../../llms.txt) on demand; persistent installation is not
required to use the guides.

## After Installation

Ask a relevant question, such as "How do I configure a CordisX plugin source?"
The Skill should select the Marketplace route from [the index](../../skills/index.md),
not install anything or read all guides. Existing runtime plugins and their
permissions are unchanged. Remove only this Skill's directory to uninstall it.
