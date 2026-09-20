# CordisX Skills And Documentation

Choose one route for the current task. These are links to authoritative owners,
not an instruction to load every document.

| Task                                                   | Read first                                                                                                                    | Continue only when relevant                            |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Install or start CordisX                               | [Host entry](https://raw.githubusercontent.com/cordisx/cordisx/main/llms.txt)                                                 | Its Getting started and startup Q&A links              |
| Configure a Marketplace or install an existing plugin  | [Marketplace entry](https://raw.githubusercontent.com/cordisx/marketplace/main/llms.txt)                                      | The selected source's own guide and plugin README      |
| Keep documentation discoverable                        | [Install the navigation Skill](../.agents/docs/install-docs-skill.md)                                                         | [cordisx-docs](cordisx-docs/SKILL.md)                  |
| Add or change a plugin's behavior                      | [Plugin-development Skill](https://raw.githubusercontent.com/cordisx/cordisx/main/skills/cordisx-plugin-development/SKILL.md) | Its task-specific references                           |
| Understand Host configuration or troubleshoot behavior | [Host documentation index](https://raw.githubusercontent.com/cordisx/cordisx/main/.agents/docs/README.md)                     | The owning topic, at the installed release when needed |
| Check versioned plugin contracts                       | [Protocol index](https://raw.githubusercontent.com/cordisx/cordisx-protocol/main/.agents/docs/README.md)                      | The contract version named by the package              |

The navigation Skill routes reading; the development Skill guides implementation.
Neither is a CordisX runtime plugin. For a private source, use the entry supplied
by the user instead of guessing an internal URL or copying it into public docs.
