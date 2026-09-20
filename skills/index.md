# CordisX Skills And Documentation

Choose one route for the current task. These are links to authoritative owners,
not an instruction to load every document.

| Task                                                   | Read first                                                                                                                    | Continue only when relevant                                                                                  |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Install or start CordisX                               | [Host entry](https://raw.githubusercontent.com/cordisx/cordisx/main/llms.txt)                                                 | Its Getting started and startup Q&A links                                                                    |
| Configure a Marketplace or install an existing plugin  | [Marketplace entry](https://raw.githubusercontent.com/cordisx/marketplace/main/llms.txt)                                      | The selected source's own guide and plugin README                                                            |
| Start from one CordisX entry                           | [CordisX Skill](https://raw.githubusercontent.com/cordisx/cordisx/main/skills/cordisx/SKILL.md)                               | [Skill availability](https://raw.githubusercontent.com/cordisx/docs/main/.agents/docs/install-docs-skill.md) |
| Find standard documentation                            | [cordisx-docs](https://raw.githubusercontent.com/cordisx/docs/main/skills/cordisx-docs/SKILL.md)                              | The relevant owner guide                                                                                     |
| Find or record practical user experience               | [Q&A Skill](https://raw.githubusercontent.com/cordisx/cordisx/main/skills/cordisx-qa/SKILL.md)                                | Its topic-specific user Q&A                                                                                  |
| Add or change a plugin's behavior                      | [Plugin-development Skill](https://raw.githubusercontent.com/cordisx/cordisx/main/skills/cordisx-plugin-development/SKILL.md) | Its task-specific references                                                                                 |
| Understand Host configuration or troubleshoot behavior | [Host documentation index](https://raw.githubusercontent.com/cordisx/cordisx/main/.agents/docs/README.md)                     | The owning topic, at the installed release when needed                                                       |
| Check versioned plugin contracts                       | [Protocol index](https://raw.githubusercontent.com/cordisx/cordisx-protocol/main/.agents/docs/README.md)                      | The contract version named by the package                                                                    |

The `cordisx` entry chooses among Docs, Q&A, and Plugin Dev. Users do not need to
select an internal Skill. Docs navigates standards, Q&A carries practical
experience, and Plugin Dev guides implementation. These are not CordisX runtime
plugins. The linked source may be newer than the installed release; use the
owner guides directly when a companion Skill is unavailable. For a private source, use the entry supplied
by the user instead of guessing an internal URL or copying it into public docs.
