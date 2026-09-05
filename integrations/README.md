# Source integration status

Status: planned aggregation; the current implementation is a static navigation
portal. [`sources.yaml`](../sources.yaml) allows Host and Protocol `.agents/docs`
roots at `main`, but no fetcher, renderer, normalization pipeline, or resolved
source manifest is implemented in this repository. Existing checks validate the
portal and declared registry, not a reproducible aggregated document build.

When aggregation is implemented in an authorized change, it must:

1. Resolve each allowed source to an exact commit and record those SHAs with the
   generated output. Following mutable `main` links is not that evidence.
2. Select the owner's intended public guides and specifications; give historical
   records a separate labeled navigation scope. Exclude maintenance rules and
   private planning repositories.
3. Normalize relative links, assets, and anchors against the source tree and
   preserve versioned specification destinations.
4. Validate the generated navigation and content before publishing. Keep generated
   site content out of Git; retain the source manifest in the build artifact.

Repository-specific normalization belongs here when it exists. Source facts stay
with their owners, as described in [the contribution guide](../.agents/docs/contributor-guide.md).
