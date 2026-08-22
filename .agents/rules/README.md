# Aggregation Rules

- Treat `sources.yaml` as an explicit allowlist.
- Pull only `.agents/docs` from source repositories.
- Never aggregate `roadmap` or any `.agents/rules` directory.
- Record the source repository and commit for every build.
- Do not commit generated site content.
- Validate links and scan publishable content before deployment.
