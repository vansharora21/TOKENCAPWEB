# AI ENTRY POINT

This repository has been indexed by TokenCap.

Before analyzing files, read:

.tokencap/agent/START_HERE.md

Use:

- .tokencap/agent/agent-pack.md
- .tokencap/agent/allowed-context.json
- .tokencap/agent/context-manifest.json

Do not rediscover the repository from scratch.

---

# TokenCap Snapshot

| Field | Value |
| --- | --- |
| Generated | 2026-07-13T19:32:57.354Z |
| Workspace | c:\Users\BIT\Desktop\TOKENCAP ALLFILES\tokencap frontend\tokencap-frontend |
| Profile | balanced |
| Selected files | 68 |
| Source bytes | 219984 |
| Estimated tokens | 61213 |

## Read First

This file is a compressed coding-session handoff. Read it before editing, then inspect the referenced files directly. Prefer the live repository over this snapshot when there is a conflict.

## TokenCap Intelligence Files

- TOKENCAP_GRAPH.md — Project dependency and architecture graph *(JS/TS projects only)*
- TOKENCAP_MEMORY.md — Developer notes, current task, constraints, and context memory

## Handoff Summary

| Field | Value |
| --- | --- |
| Read order | README.md > src/data/testimonials.js > src/app/changelog/page.jsx > src/app/docs/page.jsx > src/app/faq/page.jsx |
| Primary anchors | README.md, src/data/testimonials.js, src/app/changelog/page.jsx |
| Changed files | 61 |
| TODO notes | 2 |
| File budget used | 76% |
| Source budget used | 100% |
| Token estimate | 61213 |
| Contents mode | enabled |

## Handoff Guidelines

- Preserve user changes; avoid reverting unrelated work.
- Start with changed files and files marked `high-signal` in the manifest.
- Treat the Git diff as intent and verify changes in source files.
- Update this snapshot after meaningful edits or before handing off.

## Git Snapshot

| Field | Value |
| --- | --- |
| Branch | main |
| Git root | C:/Users/BIT/Desktop/TOKENCAP ALLFILES/tokencap frontend/tokencap-frontend |

Recent commits:
```text
c32d19c docs: add v1.3.0 incremental intelligence engine features
48b1ebc Merge branch 'v1.2.0'
c52e5e2 v 1.1
cd7d265 changes in doc after v 1.2.0
354a059 v1.1.0
ebcfb8b changes
e83a8cd Add visual graphic to features page header
0c169bd Remove Discord links from the site
```

Status:
```text
 M .gitignore
 M README.md
 D TOKENCAP.md
 M src/app/changelog/page.jsx
 M src/app/cli/page.jsx
 M src/app/docs/page.jsx
 M src/app/faq/page.jsx
 M src/app/features/page.jsx
 M src/app/layout.jsx
 M src/app/loading.jsx
 M src/app/page.jsx
 M src/app/roadmap/page.jsx
 M src/app/vscode/page.jsx
 M src/components/about/MissionSection.jsx
 M src/components/about/PhilosophySection.jsx
 M src/components/about/Timeline.jsx
 M src/components/cli/CLIExamples.jsx
 M src/components/cli/CommandCard.jsx
 M src/components/cli/TerminalWindow.jsx
 M src/components/docs/DocsArticle.jsx
 M src/components/docs/DocsContent.jsx
 M src/components/docs/DocsSearch.jsx
 M src/components/docs/DocsSidebar.jsx
 M src/components/features/FeatureCard.jsx
 M src/components/features/FeatureGrid.jsx
 M src/components/features/FeatureShowcase.jsx
 M src/components/home/CLISection.jsx
 M src/components/home/Hero.jsx
 M src/components/home/HowItWorks.jsx
 M src/components/home/ProblemSection.jsx
 M src/components/home/ProductPreview.jsx
 M src/components/home/Testimonials.jsx
 M src/components/layout/Footer.jsx
 M src/components/layout/Navbar.jsx
 M src/components/layout/PageWrapper.jsx
 M src/components/roadmap/RoadmapList.jsx
 M src/components/shared/Badge.jsx
 M src/components/shared/CTAButton.jsx
 M src/components/shared/CodeBlock.jsx
 M src/components/shared/GradientBackground.jsx
 M src/components/shared/SectionHeading.jsx
 M src/components/ui/button.jsx
 M src/components/vscode/ExtensionFeatures.jsx
 M src/components/vscode/StatusBarPreview.jsx
 M src/components/vscode/VSCodePreview.jsx
 M src/data/about.js
 M src/data/changelog.js
 M src/data/commands.js
 M src/data/faq.js
 M src/data/features.js
 M src/data/home.js
 M src/data/navigation.js
 M src/data/testimonials.js
 M src/data/vscode.js
 M src/lib/constants.js
 M src/lib/seo.js
 M src/lib/utils.js
 M src/styles/animations.css
 M src/website-content/docs.json
?? .commandcode/
?? docs/
```

## Project Map

```text
.commandcode/
.commandcode/taste/
docs/
scripts/
src/
src/app/
src/app/about/
src/app/changelog/
src/app/cli/
src/app/docs/
src/app/faq/
src/app/features/
src/app/resources/
src/app/roadmap/
src/app/vscode/
src/components/
src/components/about/
src/components/changelog/
src/components/cli/
src/components/docs/
src/components/faq/
src/components/features/
src/components/home/
src/components/layout/
src/components/resources/
src/components/roadmap/
src/components/shared/
src/components/ui/
src/components/vscode/
src/data/
src/lib/
src/styles/
src/website-content/
.commandcode/taste/taste.md
AGENTS.md
CLAUDE.md
README.md
docs/CODE-AUDIT-REPORT.md
eslint.config.mjs
jsconfig.json
next.config.mjs
package.json
postcss.config.mjs
scripts/generate-readme.js
src/app/about/page.jsx
src/app/changelog/page.jsx
src/app/cli/page.jsx
src/app/docs/page.jsx
src/app/faq/page.jsx
src/app/features/page.jsx
src/app/globals.css
src/app/layout.jsx
src/app/loading.jsx
src/app/page.jsx
src/app/resources/page.jsx
src/app/roadmap/page.jsx
src/app/vscode/page.jsx
src/components/about/MissionSection.jsx
src/components/about/PhilosophySection.jsx
src/components/about/Timeline.jsx
src/components/changelog/ChangelogList.jsx
src/components/cli/CLIExamples.jsx
src/components/cli/CommandCard.jsx
src/components/cli/TerminalWindow.jsx
src/components/docs/DocsArticle.jsx
src/components/docs/DocsContent.jsx
src/components/docs/DocsSearch.jsx
src/components/docs/DocsSidebar.jsx
src/components/docs/MarkdownRenderer.jsx
src/components/faq/FAQAccordion.jsx
src/components/features/FeatureCard.jsx
src/components/features/FeatureGrid.jsx
src/components/features/FeatureShowcase.jsx
src/components/home/CLISection.jsx
src/components/home/FeaturesPreview.jsx
src/components/home/FinalCTA.jsx
src/components/home/Hero.jsx
src/components/home/HowItWorks.jsx
src/components/home/ProblemSection.jsx
src/components/home/ProductPreview.jsx
src/components/home/Testimonials.jsx
src/components/layout/Footer.jsx
src/components/layout/Navbar.jsx
src/components/layout/PageWrapper.jsx
src/components/resources/ResourcesClient.jsx
src/components/roadmap/RoadmapList.jsx
src/components/shared/Badge.jsx
src/components/shared/CTAButton.jsx
src/components/shared/CodeBlock.jsx
src/components/shared/CopyButton.jsx
src/components/shared/GradientBackground.jsx
src/components/shared/SearchModal.jsx
src/components/shared/SectionHeading.jsx
src/components/ui/button.jsx
src/components/vscode/ExtensionFeatures.jsx
src/components/vscode/StatusBarPreview.jsx
src/components/vscode/VSCodePreview.jsx
src/data/about.js
src/data/blog.js
src/data/changelog.js
src/data/commands.js
src/data/docs.js
src/data/faq.js
src/data/features.js
src/data/home.js
src/data/navigation.js
src/data/roadmap.js
src/data/testimonials.js
src/data/vscode.js
src/lib/constants.js
src/lib/seo.js
src/lib/utils.js
src/styles/animations.css
src/website-content/changelog.json
src/website-content/commands.json
src/website-content/docs.json
src/website-content/faq.json
src/website-content/features.json
src/website-content/homepage.json
src/website-content/navigation.json
src/website-content/roadmap.json
src/website-content/seo.json
src/website-content/testimonials.json
src/website-content/vscode.json
```

## File Manifest

| File | Bytes | Score | Why |
| --- | ---: | ---: | --- |
| README.md | 19581 | 224 | changed, project-metadata, high-signal-doc |
| src/data/testimonials.js | 597 | 168 | changed, source, test |
| src/app/changelog/page.jsx | 887 | 150 | changed, source |
| src/app/docs/page.jsx | 6606 | 150 | changed, source |
| src/app/faq/page.jsx | 5419 | 150 | changed, source |
| src/app/layout.jsx | 1792 | 150 | changed, source |
| src/app/loading.jsx | 780 | 150 | changed, source |
| src/app/page.jsx | 2189 | 150 | changed, source |
| src/app/roadmap/page.jsx | 735 | 150 | changed, source |
| src/components/about/MissionSection.jsx | 490 | 150 | changed, source |
| src/components/about/PhilosophySection.jsx | 505 | 150 | changed, source |
| src/components/about/Timeline.jsx | 591 | 150 | changed, source |
| src/components/cli/CLIExamples.jsx | 485 | 150 | changed, source |
| src/components/cli/CommandCard.jsx | 508 | 150 | changed, source |
| src/components/cli/TerminalWindow.jsx | 723 | 150 | changed, source |
| src/components/docs/DocsArticle.jsx | 585 | 150 | changed, source |
| src/components/docs/DocsContent.jsx | 898 | 150 | changed, source |
| src/components/docs/DocsSearch.jsx | 657 | 150 | changed, source |
| src/components/docs/DocsSidebar.jsx | 647 | 150 | changed, source |
| src/components/features/FeatureCard.jsx | 443 | 150 | changed, source |
| src/components/features/FeatureGrid.jsx | 401 | 150 | changed, source |
| src/components/features/FeatureShowcase.jsx | 817 | 150 | changed, source |
| src/components/home/CLISection.jsx | 999 | 150 | changed, source |
| src/components/home/Hero.jsx | 1448 | 150 | changed, source |
| src/components/home/HowItWorks.jsx | 9649 | 150 | changed, source |
| src/components/home/ProblemSection.jsx | 1949 | 150 | changed, source |
| src/components/home/Testimonials.jsx | 1048 | 150 | changed, source |
| src/components/layout/Footer.jsx | 6021 | 150 | changed, source |
| src/components/layout/Navbar.jsx | 3432 | 150 | changed, source |
| src/components/layout/PageWrapper.jsx | 598 | 150 | changed, source |
| src/components/roadmap/RoadmapList.jsx | 715 | 150 | changed, source |
| src/components/shared/Badge.jsx | 311 | 150 | changed, source |
| src/components/shared/CodeBlock.jsx | 337 | 150 | changed, source |
| src/components/shared/CTAButton.jsx | 259 | 150 | changed, source |
| src/components/shared/GradientBackground.jsx | 756 | 150 | changed, source |
| src/components/shared/SectionHeading.jsx | 643 | 150 | changed, source |
| src/components/ui/button.jsx | 1174 | 150 | changed, source |
| src/components/vscode/ExtensionFeatures.jsx | 533 | 150 | changed, source |
| src/components/vscode/StatusBarPreview.jsx | 442 | 150 | changed, source |
| src/components/vscode/VSCodePreview.jsx | 1486 | 150 | changed, source |
| src/data/about.js | 884 | 150 | changed, source |
| src/data/changelog.js | 3068 | 150 | changed, source |
| src/data/commands.js | 2727 | 150 | changed, source |
| src/data/faq.js | 3851 | 150 | changed, source |
| src/data/features.js | 915 | 150 | changed, source |
| src/data/home.js | 3069 | 150 | changed, source |
| src/data/navigation.js | 2294 | 150 | changed, source |
| src/data/vscode.js | 756 | 150 | changed, source |
| src/lib/constants.js | 1065 | 150 | changed, source |
| src/lib/seo.js | 779 | 150 | changed, source |
| src/lib/utils.js | 147 | 150 | changed, source |
| src/styles/animations.css | 215 | 150 | changed, source |
| src/app/vscode/page.jsx | 15619 | 149 | changed, source |
| src/components/home/ProductPreview.jsx | 16253 | 149 | changed, source |
| src/website-content/docs.json | 31205 | 148 | changed, source |
| src/app/cli/page.jsx | 36022 | 147 | changed, source |
| next.config.mjs | 214 | 70 | project-metadata |
| package.json | 823 | 70 | project-metadata |
| src/website-content/testimonials.json | 1033 | 48 | source, test |
| scripts/generate-readme.js | 3527 | 35 | high-signal-doc |
| src/app/about/page.jsx | 8715 | 30 | source |
| src/app/globals.css | 2196 | 30 | source |
| src/app/resources/page.jsx | 495 | 30 | source |
| src/components/faq/FAQAccordion.jsx | 3949 | 30 | source |
| src/components/shared/CopyButton.jsx | 782 | 30 | source |
| src/data/roadmap.js | 1148 | 30 | source |
| .commandcode/taste/taste.md | 86 | 0 | context |
| CLAUDE.md | 11 | 0 | context |

## Changed Files

-  M .gitignore
-  M README.md
-  D TOKENCAP.md
-  M src/app/changelog/page.jsx
-  M src/app/cli/page.jsx
-  M src/app/docs/page.jsx
-  M src/app/faq/page.jsx
-  M src/app/features/page.jsx
-  M src/app/layout.jsx
-  M src/app/loading.jsx
-  M src/app/page.jsx
-  M src/app/roadmap/page.jsx
-  M src/app/vscode/page.jsx
-  M src/components/about/MissionSection.jsx
-  M src/components/about/PhilosophySection.jsx
-  M src/components/about/Timeline.jsx
-  M src/components/cli/CLIExamples.jsx
-  M src/components/cli/CommandCard.jsx
-  M src/components/cli/TerminalWindow.jsx
-  M src/components/docs/DocsArticle.jsx
-  M src/components/docs/DocsContent.jsx
-  M src/components/docs/DocsSearch.jsx
-  M src/components/docs/DocsSidebar.jsx
-  M src/components/features/FeatureCard.jsx
-  M src/components/features/FeatureGrid.jsx
-  M src/components/features/FeatureShowcase.jsx
-  M src/components/home/CLISection.jsx
-  M src/components/home/Hero.jsx
-  M src/components/home/HowItWorks.jsx
-  M src/components/home/ProblemSection.jsx
-  M src/components/home/ProductPreview.jsx
-  M src/components/home/Testimonials.jsx
-  M src/components/layout/Footer.jsx
-  M src/components/layout/Navbar.jsx
-  M src/components/layout/PageWrapper.jsx
-  M src/components/roadmap/RoadmapList.jsx
-  M src/components/shared/Badge.jsx
-  M src/components/shared/CTAButton.jsx
-  M src/components/shared/CodeBlock.jsx
-  M src/components/shared/GradientBackground.jsx
-  M src/components/shared/SectionHeading.jsx
-  M src/components/ui/button.jsx
-  M src/components/vscode/ExtensionFeatures.jsx
-  M src/components/vscode/StatusBarPreview.jsx
-  M src/components/vscode/VSCodePreview.jsx
-  M src/data/about.js
-  M src/data/changelog.js
-  M src/data/commands.js
-  M src/data/faq.js
-  M src/data/features.js
-  M src/data/home.js
-  M src/data/navigation.js
-  M src/data/testimonials.js
-  M src/data/vscode.js
-  M src/lib/constants.js
-  M src/lib/seo.js
-  M src/lib/utils.js
-  M src/styles/animations.css
-  M src/website-content/docs.json
- ?? .commandcode/
- ?? docs/

## Git Diff Snippets

### Unstaged Changes Diff

```diff
diff --git a/.gitignore b/.gitignore
index 5ef6a52..9a80c6c 100644
--- a/.gitignore
+++ b/.gitignore
@@ -39,3 +39,4 @@ yarn-error.log*
 # typescript
 *.tsbuildinfo
 next-env.d.ts
+.TOKENCAP.md
\ No newline at end of file
diff --git a/TOKENCAP.md b/TOKENCAP.md
deleted file mode 100644
index 45a9b20..0000000
--- a/TOKENCAP.md
+++ /dev/null
@@ -1,5598 +0,0 @@
-# TokenCap Snapshot
-
-| Field | Value |
-| --- | --- |
-| Generated | 2026-06-06T21:01:15.450Z |
-| Workspace | C:\Users\BIT\Desktop\TOKENCAP ALLFILES\tokencap frontend\tokencap-frontend |
-| Profile | balanced |
-| Selected files | 88 |
-| Source bytes | 208389 |
-| Estimated tokens | 52098 |
-
-## Read First
-
-This file is a compressed coding-session handoff. Read it before editing, then inspect the referenced files directly. Prefer the live repository over this snapshot when there is a conflict.
-
-## Handoff Summary
-
-| Field | Value |
-| --- | --- |
-| Read order | README.md > next.config.mjs > package.json > src/data/testimonials.js > src/website-content/testimonials.json |
-| Primary anchors | README.md, next.config.mjs, package.json |
-| Changed files | 0 |
-| TODO notes | 7 |
-| File budget used | 98% |
-| Source budget used | 95% |
-| Token estimate | 52098 |
-| Contents mode | enabled |
-
-## Operating Rules For The Next Agent
-
-- Preserve user changes and do not revert unrelated work.
-- Start with changed files and files marked `high-signal` in the manifest.
-- Use the Git diff as intent, not as a complete source of truth.
-- Refresh this capsule after meaningful edits or before ending the session.
-
-## Git Snapshot
-
-| Field | Value |
-| --- | --- |
-| Branch | main |
-| Git root | C:/Users/BIT/Desktop/TOKENCAP ALLFILES/tokencap frontend/tokencap-frontend |
-
-Recent commits:
-```text
-d07d0f0 docs: update TokenCap documentation and CLI reference for v0.2.0
-30ca2f1 fix: resolve responsiveness, layout overflow, and blank page issues across site pages
-969885b chore: set tokencap-logo.png as site favicon and icon.png
-43b464e chore: upgrade next to version 16 to resolve CVE-2025-66478 vulnerability
-fd6fbed first com
-764e1ea first com
-916f9ef first commit
-09fee8a Initial commit from Create Next App
-```
-
-Status:
-```text
-clean or unavailable
-```
-
-## Project Map
-
-```text
-scripts/
-src/
-src/app/
-src/app/about/
-src/app/changelog/
-src/app/cli/
-src/app/docs/
-src/app/docs/[slug]/
-src/app/faq/
-src/app/features/
-src/app/pricing/
-src/app/roadmap/
-src/app/vscode/
-src/components/
-src/components/about/
-src/components/changelog/
-src/components/cli/
-src/components/docs/
-src/components/faq/
-src/components/features/
-src/components/home/
-src/components/layout/
-src/components/pricing/
-src/components/roadmap/
-src/components/shared/
-src/components/ui/
-src/components/vscode/
-src/data/
-src/lib/
-src/styles/
-src/website-content/
-AGENTS.md
-CLAUDE.md
-README.md
-eslint.config.mjs
-jsconfig.json
-next.config.mjs
-package.json
-postcss.config.mjs
-scripts/generate-readme.js
-src/app/about/page.jsx
-src/app/changelog/page.jsx
-src/app/cli/page.jsx
-src/app/docs/[slug]/page.jsx
-src/app/docs/page.jsx
-src/app/faq/page.jsx
-src/app/features/page.jsx
-src/app/globals.css
-src/app/layout.jsx
-src/app/loading.jsx
-src/app/page.jsx
-src/app/pricing/page.jsx
-src/app/roadmap/page.jsx
-src/app/vscode/page.jsx
-src/components/about/MissionSection.jsx
-src/components/about/PhilosophySection.jsx
-src/components/about/Timeline.jsx
-src/components/changelog/ChangelogList.jsx
-src/components/cli/CLIExamples.jsx
-src/components/cli/CommandCard.jsx
-src/components/cli/TerminalWindow.jsx
-src/components/docs/DocsArticle.jsx
-src/components/docs/DocsContent.jsx
-src/components/docs/DocsSearch.jsx
-src/components/docs/DocsSidebar.jsx
-src/components/docs/MarkdownRenderer.jsx
-src/components/faq/FAQAccordion.jsx
-src/components/features/FeatureCard.jsx
-src/components/features/FeatureGrid.jsx
-src/components/features/FeatureShowcase.jsx
-src/components/home/CLISection.jsx
-src/components/home/FeaturesPreview.jsx
-src/components/home/FinalCTA.jsx
-src/components/home/Hero.jsx
-src/components/home/HowItWorks.jsx
-src/components/home/ProblemSection.jsx
-src/components/home/ProductPreview.jsx
-src/components/home/Testimonials.jsx
-src/components/layout/Footer.jsx
-src/components/layout/Navbar.jsx
-src/components/layout/PageWrapper.jsx
-src/components/pricing/ComparisonTable.jsx
-src/components/pricing/PricingCard.jsx
-src/components/roadmap/RoadmapList.jsx
-src/components/shared/Badge.jsx
-src/components/shared/CTAButton.jsx
-src/components/shared/CodeBlock.jsx
-src/components/shared/CopyButton.jsx
-src/components/shared/GradientBackground.jsx
-src/components/shared/SectionHeading.jsx
-src/components/ui/button.jsx
-src/components/vscode/ExtensionFeatures.jsx
-src/components/vscode/StatusBarPreview.jsx
-src/components/vscode/VSCodePreview.jsx
-src/data/about.js
-src/data/changelog.js
-src/data/commands.js
-src/data/docs.js
-src/data/faq.js
-src/data/features.js
-src/data/home.js
-src/data/navigation.js
-src/data/pricing.js
-src/data/roadmap.js
-src/data/testimonials.js
-src/data/vscode.js
-src/lib/constants.js
-src/lib/seo.js
-src/lib/utils.js
-src/styles/animations.css
-src/website-content/changelog.json
-src/website-content/commands.json
-src/website-content/docs.json
-src/website-content/faq.json
-src/website-content/features.json
-src/website-content/homepage.json
-src/website-content/navigation.json
-src/website-content/pricing.json
-src/website-content/roadmap.json
-src/website-content/seo.json
-src/website-content/testimonials.json
-src/website-content/vscode.json
-```
-
-## File Manifest
-
-| File | Bytes | Score | Why |
-| --- | ---: | ---: | --- |
-| README.md | 10732 | 105 | project-metadata, high-signal-doc |
-| next.config.mjs | 179 | 70 | project-metadata |
-| package.json | 798 | 70 | project-metadata |
-| src/data/testimonials.js | 615 | 48 | source, test |
-| src/website-content/testimonials.json | 1033 | 48 | source, test |
-| scripts/generate-readme.js | 3527 | 35 | high-signal-doc |
-| src/app/about/page.jsx | 8715 | 30 | source |
-| src/app/changelog/page.jsx | 746 | 30 | source |
-| src/app/docs/[slug]/page.jsx | 7580 | 30 | source |
-| src/app/faq/page.jsx | 6123 | 30 | source |
-| src/app/globals.css | 2183 | 30 | source |
-| src/app/layout.jsx | 1743 | 30 | source |
-| src/app/loading.jsx | 795 | 30 | source |
-| src/app/page.jsx | 2050 | 30 | source |
-| src/app/pricing/page.jsx | 10925 | 30 | source |
-| src/app/roadmap/page.jsx | 753 | 30 | source |
-| src/components/about/MissionSection.jsx | 506 | 30 | source |
-| src/components/about/PhilosophySection.jsx | 521 | 30 | source |
-| src/components/about/Timeline.jsx | 608 | 30 | source |
-| src/components/changelog/ChangelogList.jsx | 873 | 30 | source |
-| src/components/cli/CLIExamples.jsx | 500 | 30 | source |
-| src/components/cli/CommandCard.jsx | 521 | 30 | source |
-| src/components/cli/TerminalWindow.jsx | 744 | 30 | source |
-| src/components/docs/DocsArticle.jsx | 598 | 30 | source |
-| src/components/docs/DocsContent.jsx | 920 | 30 | source |
-| src/components/docs/DocsSearch.jsx | 559 | 30 | source |
-| src/components/docs/DocsSidebar.jsx | 665 | 30 | source |
-| src/components/docs/MarkdownRenderer.jsx | 7040 | 30 | source |
-| src/components/faq/FAQAccordion.jsx | 3958 | 30 | source |
-| src/components/features/FeatureCard.jsx | 455 | 30 | source |
-| src/components/features/FeatureGrid.jsx | 414 | 30 | source |
-| src/components/features/FeatureShowcase.jsx | 837 | 30 | source |
-| src/components/home/CLISection.jsx | 1020 | 30 | source |
-| src/components/home/FeaturesPreview.jsx | 6766 | 30 | source |
-| src/components/home/FinalCTA.jsx | 2197 | 30 | source |
-| src/components/home/Hero.jsx | 1490 | 30 | source |
-| src/components/home/HowItWorks.jsx | 4232 | 30 | source |
-| src/components/home/ProblemSection.jsx | 1985 | 30 | source |
-| src/components/home/ProductPreview.jsx | 6242 | 30 | source |
-| src/components/home/Testimonials.jsx | 1073 | 30 | source |
-| src/components/layout/Footer.jsx | 6826 | 30 | source |
-| src/components/layout/Navbar.jsx | 5061 | 30 | source |
-| src/components/layout/PageWrapper.jsx | 625 | 30 | source |
-| src/components/pricing/ComparisonTable.jsx | 1160 | 30 | source |
-| src/components/pricing/PricingCard.jsx | 820 | 30 | source |
-| src/components/roadmap/RoadmapList.jsx | 732 | 30 | source |
-| src/components/shared/Badge.jsx | 317 | 30 | source |
-| src/components/shared/CodeBlock.jsx | 343 | 30 | source |
-| src/components/shared/CopyButton.jsx | 782 | 30 | source |
-| src/components/shared/CTAButton.jsx | 270 | 30 | source |
-| src/components/shared/GradientBackground.jsx | 767 | 30 | source |
-| src/components/shared/SectionHeading.jsx | 656 | 30 | source |
-| src/components/ui/button.jsx | 1206 | 30 | source |
-| src/components/vscode/ExtensionFeatures.jsx | 549 | 30 | source |
-| src/components/vscode/StatusBarPreview.jsx | 457 | 30 | source |
-| src/components/vscode/VSCodePreview.jsx | 1515 | 30 | source |
-| src/data/about.js | 901 | 30 | source |
-| src/data/changelog.js | 2447 | 30 | source |
-| src/data/commands.js | 1125 | 30 | source |
-| src/data/docs.js | 7371 | 30 | source |
-| src/data/faq.js | 3431 | 30 | source |
-| src/data/features.js | 927 | 30 | source |
-| src/data/home.js | 3110 | 30 | source |
-| src/data/navigation.js | 2124 | 30 | source |
-| src/data/pricing.js | 891 | 30 | source |
-| src/data/roadmap.js | 1178 | 30 | source |
-| src/data/vscode.js | 764 | 30 | source |
-| src/lib/constants.js | 1098 | 30 | source |
-| src/lib/seo.js | 804 | 30 | source |
-| src/lib/utils.js | 155 | 30 | source |
-| src/styles/animations.css | 229 | 30 | source |
-| src/website-content/changelog.json | 2387 | 30 | source |
-| src/website-content/commands.json | 3265 | 30 | source |
-| src/website-content/docs.json | 7539 | 30 | source |
-| src/website-content/faq.json | 5454 | 30 | source |
-| src/website-content/features.json | 8155 | 30 | source |
-| src/website-content/homepage.json | 1813 | 30 | source |
-| src/website-content/navigation.json | 1930 | 30 | source |
-| src/website-content/pricing.json | 1479 | 30 | source |
-| src/website-content/roadmap.json | 1435 | 30 | source |
-| src/website-content/seo.json | 1490 | 30 | source |
-| src/website-content/vscode.json | 4176 | 30 | source |
-| src/app/cli/page.jsx | 16495 | 29 | source |
-| AGENTS.md | 327 | 0 | context |
-| CLAUDE.md | 11 | 0 | context |
-| eslint.config.mjs | 400 | 0 | context |
-| jsconfig.json | 77 | 0 | context |
-| postcss.config.mjs | 94 | 0 | context |
-
-## Changed Files
-
-No Git changes found, or this is not a Git repository.
-
-## Git Diff Snippets
-
-No diff available, or Git is unavailable.
-
-## TODO / FIXME / HACK Notes
-
-- README.md:56 #### 🔹 TODO / FIXME / HACK Detection
-- README.md:57 Every TODO, FIXME, and HACK comment across your selected files is extracted and surfaced in a dedicated section — so technical debt is always visible in your handoff.
-- src/data/changelog.js:15 "TODO / FIXME / HACK detection across all selected files",
-- src/website-content/changelog.json:15 "TODO / FIXME / HACK detection across all selected files",
-- src/website-content/features.json:77 "id": "todo-detection",
-- src/website-content/features.json:78 "title": "TODO / FIXME / HACK Detection",
-- src/website-content/features.json:79 "description": "Every TODO, FIXME, and HACK comment across your selected files is extracted and surfaced in a dedicated section — so technical debt is always visible in your handoff.",
-
-## Selected File Context
-
-### README.md
-
-| Field | Value |
-| --- | --- |
-| Bytes | 10732 |
-| Score | 105 |
-| Why | project-metadata, high-signal-doc |
-| Status | Full content |
-
-
-```markdown
-# TokenCap Developer Platform Frontend
-
-> **Your codebase. Compressed. Ready to hand off.**
->
-> Stop wasting tokens re-explaining your project. TokenCap snapshots your workspace — files, Git context, imports, and developer intent — into a single handoff-ready file.
-
-## 🚀 Overview
-
-TokenCap is a local-first developer tool that generates structured, AI-ready snapshots of your codebase. Works offline. Never uploads your code. Runs from the CLI or VS Code.
-
-Run the installation command in your terminal:
-```bash
-npm install -g tokencap
-```
-
-## 🎨 Key Benefits
-
-- **Local-first:** Runs entirely on your machine. No cloud. No uploads. Your code never leaves your workspace.
-- **AI-ready output:** Generates structured Markdown snapshots sized for any LLM context window — from llama-3-8b to Gemini 1.5 Pro.
-- **Git-aware:** Automatically surfaces changed files, staged and unstaged diffs, recent commits, and branch context.
-- **Privacy-first:** Built-in secret redaction strips API keys, tokens, and passwords before anything is written to disk.
-- **Zero configuration:** Works out of the box. One command generates everything. Customize with a single JSON config file when you're ready.
-- **VS Code native:** Auto-captures on every file save. Status bar indicator. One-click command menu. No workflow disruption.
-
-## ⚡ Core Capabilities
-
-### 📁 VS Code
-
-#### 🔹 Auto Capture on Save
-Every time you save a file in VS Code, TokenCap debounces and automatically regenerates your snapshot. You never have to remember to run it. The status bar shows the exact time of the last update.
-
-> ⚙️ *Technical Detail:* Debounce interval configurable via tokencap.debounceMs. Default: 30,000ms. Skips TOKENCAP.md, .tokencap.json, and all generated output files to prevent re-trigger loops.
-
-#### 🔹 VS Code Status Bar Integration
-A persistent status bar item shows your auto-capture state and last snapshot time at all times. Click it to open the full command menu instantly.
-
-> ⚙️ *Technical Detail:* Displays '$(files) TokenCap • HH:MM' format. Tooltip shows status, auto-capture state, last run time, file count, and estimated tokens. Command: tokencap.showMenu.
-
-### 📁 Intelligence
-
-#### 🔹 Project Knowledge Graph
-Automatically maps how your files connect to each other. Scans every JS/TS file, follows every import, export, and require, resolves paths to actual files, and classifies each node as a route, component, service, API, database model, or config file.
-
-> ⚙️ *Technical Detail:* Generates TOKENCAP_GRAPH.md. Supports .ts, .tsx, .js, .jsx, .mjs, .cjs. Parses ES import/export and CommonJS require. Classifies nodes by path pattern and filename conventions.
-
-#### 🔹 Context Memory Layer
-Never lose track of what you were doing. Fill in a simple notes file with your current task, intent, constraints, and next steps — TokenCap combines it with live Git context to produce a persistent memory snapshot alongside your code.
-
-> ⚙️ *Technical Detail:* Generates TOKENCAP_MEMORY.md from .tokencap-notes.md (auto-created if missing) + git branch + git status. Parses markdown sections into structured data.
-
-#### 🔹 Structural Outlines for Large Files
-When a file exceeds your token budget and gets truncated, TokenCap doesn't just cut it off. It generates a structural outline of classes, functions, and methods so you still know what's inside.
-
-> ⚙️ *Technical Detail:* Regex-based outline extraction for JS/TS functions, classes, interfaces, Python defs, Rust fns, and Go funcs. Capped at 30 definitions per file.
-
-#### 🔹 TODO / FIXME / HACK Detection
-Every TODO, FIXME, and HACK comment across your selected files is extracted and surfaced in a dedicated section — so technical debt is always visible in your handoff.
-
-> ⚙️ *Technical Detail:* Case-insensitive regex scan across all selected files. Each entry includes file path, line number, and the full comment line. Capped at maxTodos (default: 100).
-
-### 📁 Security
-
-#### 🔹 Automatic Secret Redaction
-TokenCap scrubs sensitive values before writing anything to disk. API keys, tokens, passwords, and cloud credentials are replaced with [REDACTED] — so you can safely share your snapshot with anyone.
-
-> ⚙️ *Technical Detail:* Redacts: OpenAI keys (sk-...), GitHub PATs (ghp_..., github_pat_...), Slack tokens (xox...), AWS access keys (AKIA...), Google API keys (AIza...), and generic api_key/token/secret/password variable assignments.
-
-### 📁 AI Optimization
-
-#### 🔹 Context Window Profiles
-Different AI models have different context limits. TokenCap ships with profiles tuned for eight model families — from llama-3-8b at 40KB to Gemini 1.5 Pro at 1.2MB. Switch profiles with a single flag.
-
-| Profile | Max Files | Max Bytes | Use Case |
-| --- | --- | --- | --- |
-| `compact` | 45 | 90000 B | Tight context windows |
-| `balanced` | 90 | 220000 B | Default production profile |
-| `deep` | 140 | 420000 B | Complex codebases |
-| `gpt-4o` | 80 | 150000 B | OpenAI GPT-4o |
-| `claude-3-5-sonnet` | 120 | 250000 B | Anthropic Claude |
-| `gemini-1.5-flash` | 200 | 600000 B | Gemini Flash |
-| `gemini-1.5-pro` | 400 | 1200000 B | Gemini Pro |
-| `llama-3-8b` | 25 | 40000 B | Local LLMs |
-
-### 📁 Git
-
-#### 🔹 Deep Git Integration
-TokenCap reads your Git state automatically — current branch, recent commits, staged and unstaged diffs, and changed file paths. Changed files are ranked higher in the snapshot so they always appear first.
-
-> ⚙️ *Technical Detail:* Uses git status --short, git diff --cached, git diff, git log --oneline -8, git rev-parse. Separates staged vs unstaged diffs into distinct sections. Changed files receive +120 ranking score.
-
-### 📁 Optimization
-
-#### 🔹 Intelligent File Ranking
-Not every file deserves the same attention. TokenCap scores and ranks files by relevance — changed files, source files, project metadata, and documentation surface first within your token budget.
-
-> ⚙️ *Technical Detail:* Scoring: changed files +120, important project files (package.json, README, tsconfig) +70, high-signal docs +35, src/ files +30, test files +18. Large files penalized by floor(size/12000).
-
-#### 🔹 Real-Time Token Estimation
-Always know how large your snapshot is before you paste it into an AI tool. TokenCap estimates token count in real-time and displays it in the VS Code status bar and CLI output.
-
-> ⚙️ *Technical Detail:* Estimates tokens as bytes / 4. Covers both source file bytes and Git diff bytes.
-
-### 📁 CLI
-
-#### 🔹 Watch Mode
-Run TokenCap as a persistent background process. It watches your workspace for file changes and automatically regenerates all snapshot files after a configurable debounce delay.
-
-> ⚙️ *Technical Detail:* Built on chokidar. Ignores generated output files, node_modules, dist, build, coverage. Default debounce: 30,000ms, configurable via --debounce.
-
-### 📁 Configuration
-
-#### 🔹 Flexible Configuration
-Drop a .tokencap.json into your project root to override any default. Tune file budgets, include/exclude patterns, diff settings, profile, and more — all scoped to the project.
-
-> ⚙️ *Technical Detail:* Config resolution order: defaults → profile overrides → .tokencap.json → CLI flags. Supports includePatterns, excludePatterns with glob matching.
-
-### 📁 Compatibility
-
-#### 🔹 Multi-Language Snapshot
-The main snapshot works across every language TokenCap can read. Python, Go, Rust, Java, C++, Ruby, PHP, Swift, Kotlin, SQL, YAML, and more — if it's a text file, it's in your snapshot.
-
-> ⚙️ *Technical Detail:* Supports 40+ file extensions including .py, .go, .rs, .java, .cs, .cpp, .rb, .php, .swift, .kt, .sql, .yaml, .toml, .vue, .svelte, and all JS/TS variants.
-
-## 💻 CLI Commands
-
-### 🛠️ `tokencap make`
-
-Generate all three output files in one shot: TOKENCAP.md (main snapshot), TOKENCAP_GRAPH.md (project dependency graph), and TOKENCAP_MEMORY.md (developer context memory).
-
-**Example:**
-```bash
-tokencap make
-```
-
-| Option / Flag | Description |
-| --- | --- |
-| `--root <path>` | Workspace root. Default: current directory |
-| `--out <path>` | Snapshot output path. Default: TOKENCAP.md |
-| `--profile <name>` | Context profile: compact, balanced, deep, gpt-4o, claude-3-5-sonnet, gemini-1.5-flash, gemini-1.5-pro, llama-3-8b |
-| `--max-files <n>` | Maximum number of files to include |
-| `--max-bytes <n>` | Total source byte budget |
-| `--max-file-bytes <n>` | Per-file content byte limit |
-| `--max-diff-bytes <n>` | Git diff byte budget |
-| `--no-diff` | Skip Git diff snippets |
-| `--no-contents` | Skip selected file contents |
-
-### 🛠️ `tokencap graph`
-
-Generate TOKENCAP_GRAPH.md — a dependency graph of your JS/TS project. Scans all source files, resolves imports and exports, and classifies each file as a route, component, service, API, database model, or config.
-
-**Example:**
-```bash
-tokencap graph
-```
-
-| Option / Flag | Description |
-| --- | --- |
-| `--root <path>` | Workspace root. Default: current directory |
-
-### 🛠️ `tokencap memory`
-
-Generate TOKENCAP_MEMORY.md from your .tokencap-notes.md file combined with live Git context. Auto-creates the notes file from a template if it doesn't exist yet.
-
-**Example:**
-```bash
-tokencap memory
-```
-
-| Option / Flag | Description |
-| --- | --- |
-| `--root <path>` | Workspace root. Default: current directory |
-
-### 🛠️ `tokencap watch`
-
-Start a background watcher that regenerates all snapshot files automatically whenever a file changes. Powered by chokidar with configurable debounce.
-
-**Example:**
-```bash
-tokencap watch --debounce 5000
-```
-
-| Option / Flag | Description |
-| --- | --- |
-| `--debounce <ms>` | Milliseconds to wait after a change before regenerating. Default: 30000 |
-| `--root <path>` | Workspace root. Default: current directory |
-
-### 🛠️ `tokencap init`
-
-Create a default .tokencap.json configuration file in your project root. Safe — will not overwrite an existing config unless you pass --force.
-
-**Example:**
-```bash
-tokencap init
-```
-
-| Option / Flag | Description |
-| --- | --- |
-| `--force` | Overwrite an existing .tokencap.json |
-
-### 🛠️ `tokencap config`
-
-Print the fully resolved configuration as JSON — showing the merged result of defaults, profile overrides, .tokencap.json, and any CLI flags. Useful for debugging your setup.
-
-**Example:**
-```bash
-tokencap config --profile deep
-```
-
-| Option / Flag | Description |
-| --- | --- |
-| `--profile <name>` | Profile to resolve |
-| `--root <path>` | Workspace root |
-
-## 📦 Metadata & License
-
-- **NPM Package Name:** `tokencap`
-- **License:** `MIT`
-- **Publisher:** `VanshArora21`
-
----  
-*Generated automatically from `website-content` JSON source files on 2/6/2026.*
-```
-
-### next.config.mjs
-
-| Field | Value |
-| --- | --- |
-| Bytes | 179 |
-| Score | 70 |
-| Why | project-metadata |
-| Status | Full content |
-
-
-```mjs
-/** @type {import('next').NextConfig} */
-const nextConfig = {
-  /* config options here */
-  allowedDevOrigins: ["192.168.1.4", "192.168.1.4:3000"],
-};
-
-export default nextConfig;
-```
-
-### package.json
-
-| Field | Value |
-| --- | --- |
-| Bytes | 798 |
-| Score | 70 |
-| Why | project-metadata |
-| Status | Full content |
-
-
-```json
-{
-  "name": "tokencap-frontend",
-  "version": "0.1.0",
-  "private": true,
-  "scripts": {
-    "dev": "next dev",
-    "build": "next build",
-    "prebuild": "node scripts/generate-readme.js",
-    "predev": "node scripts/generate-readme.js",
-    "build-readme": "node scripts/generate-readme.js",
-    "start": "next start",
-    "lint": "eslint"
-  },
-  "dependencies": {
-    "@radix-ui/react-slot": "^1.2.4",
-    "class-variance-authority": "^0.7.1",
-    "clsx": "^2.1.1",
-    "framer-motion": "^12.40.0",
-    "next": "^16.2.6",
-    "react": "19.2.4",
-    "react-dom": "19.2.4",
-    "tailwind-merge": "^3.6.0"
-  },
-  "devDependencies": {
-    "@tailwindcss/postcss": "^4",
-    "babel-plugin-react-compiler": "1.0.0",
-    "eslint": "^9",
-    "eslint-config-next": "15.3.4",
-    "tailwindcss": "^4"
-  }
-}
-```
-
-### src/data/testimonials.js
-
-| Field | Value |
-| --- | --- |
-| Bytes | 615 |
-| Score | 48 |
-| Why | source, test |
-| Status | Full content |
-
-
-```js
-export const testimonials = [
-  {
-    audience: "Next.js developer using Claude or GPT-4",
-    theme: "No more re-explaining the project at the start of every session",
-  },
-  {
-    audience: "Solo developer or indie hacker",
-    theme: "The graph feature helped me discover a circular dependency I never knew about",
-  },
-  {
-    audience: "Team lead / senior engineer",
-    theme: "We use it to onboard new engineers — just point them at TOKENCAP.md",
-  },
-  {
-    audience: "Developer using local LLMs",
-    theme: "The compact profile fits perfectly in llama-3-8b's context window",
-  },
-];
-```
-
-### src/website-content/testimonials.json
-
-| Field | Value |
-| --- | --- |
-| 

/* ...truncated for capsule budget... */
```

## TODO / FIXME / HACK Notes

- README.md:69 #### 🔹 TODO / FIXME / HACK Detection
- README.md:70 Every TODO, FIXME, and HACK comment across your selected files is extracted and surfaced in a dedicated section — so technical debt is always visible in your handoff.

## Selected File Context

### README.md

| Field | Value |
| --- | --- |
| Bytes | 19581 |
| Score | 224 |
| Why | changed, project-metadata, high-signal-doc |
| Status | Truncated (budget limit) |


```markdown
# TokenCap Developer Platform Frontend

> **Your codebase. Compressed. Ready to hand off.**
>
> Stop wasting tokens re-explaining your project. TokenCap snapshots your workspace — files, Git context, imports, and developer intent — into a single handoff-ready file.

## 🚀 Overview

TokenCap is a local-first developer tool that generates structured, AI-ready snapshots of your codebase. Works offline. Never uploads your code. Runs from the CLI or VS Code.

Run the installation command in your terminal:
```bash
npm install -g tokencap
```

## 🎨 Key Benefits

- **Local-first:** Runs entirely on your machine. No cloud. No uploads. Your code never leaves your workspace.
- **AI-ready output:** Generates structured Markdown snapshots sized for any LLM context window — from llama-3-8b to Gemini 1.5 Pro.
- **Git-aware:** Automatically surfaces changed files, staged and unstaged diffs, recent commits, and branch context.
- **Privacy-first:** Built-in secret redaction strips API keys, tokens, and passwords before anything is written to disk.
- **Zero configuration:** Works out of the box. One command generates everything. Customize with a single JSON config file when you're ready.
- **VS Code native:** Auto-captures on every file save. Status bar indicator. One-click command menu. No workflow disruption.

## ⚡ Core Capabilities

### 📁 Intelligence

#### 🔹 Project Brain
Query any part of your codebase and get a unified intelligence view: files, risk, architecture, dependencies, review group, recent changes, git timeline — all from a single command.

> ⚙️ *Technical Detail:* Wraps all intelligence engines (Graph, Diff, Agent, Memory). Renders terminal views in 6 modes, builds brain-index.json for fast cluster -> file lookup, and supports fuzzy cluster matching.

#### 🔹 Self-Loading Universal Context Layer
AI automatically discovers and loads your project intelligence without manual context copying. Generates a root AGENTS.md entry point that redirects AI agents directly to the onboarding suite under .tokencap/agent/START_HERE.md.

> ⚙️ *Technical Detail:* Generates root AGENTS.md, START_HERE.md, allowed-context.json (topic glob mapper), model-instructions.md (custom guidelines), context-manifest.json, agent-pack.md, and agent.json.

#### 🔹 Execution Contract
Teaches AI agents how to work, not just what to know. Generates an 8-file lifecycle contract covering state tracking, engineering principles, decision frameworks, execution scopes, verification rules, change classifications, and recovery modes.

> ⚙️ *Technical Detail:* Generates 8 files under .tokencap/agent/execution-contract/. Implements scope drift detection, minimal solution check frameworks, build/test/lint confidence ratings, loop recovery heuristics, and semantic taxonomy classifications.

#### 🔹 Repository Constitution
Encode permanent engineering laws that AI agents must never violate (API contracts, schema invariants, architecture laws, security boundaries, and compliance rules). Health checks are scored on a 0-100 index.

> ⚙️ *Technical Detail:* Builds an internal ConstitutionGraph mapping categories, severities, and relationships. Generates structured JSON/YAML/Markdown sheets and an interactive HTML visualization. Supports manual rule overrides.

#### 🔹 Smart Retrieval Engine
Ask a natural language question about your codebase and TokenCap finds only the relevant files. No more dumping entire repositories into AI. Features keywords extraction, multi-source relevance scoring, and auto-mode detection.

> ⚙️ *Technical Detail:* Scores files by combining Graph connectivity, context Memory logs, Git changed files, and Impact analysis. Auto-detects modes: review, debug, architecture. BFS traversal scans up to 2 hops away.

#### 🔹 Graph Intelligence Upgrade
TokenCap maps your project topology as a code intelligence graph. Visualizes files and imports in a dark-mode, three-panel Obsidian-style viewer with hover highlights, local graph mode, cluster filtering, and node inspector.

> ⚙️ *Technical Detail:* Generates TOKENCAP_GRAPH.md, exports JSON, and updates TOKENCAP.md. Classifies into 13 node types, evaluates 4-tier risk scoring, detects logical clusters, and supports presets (--full, --minimal, --quiet).

#### 🔹 Context Memory Layer
Never lose track of what you were doing. Fill in a simple notes file with your current task, intent, constraints, and next steps — TokenCap combines it with live Git context to produce a persistent memory snapshot alongside your code.

> ⚙️ *Technical Detail:* Generates TOKENCAP_MEMORY.md from .tokencap-notes.md (auto-created if missing) + git branch + git status. Executed automatically as part of tokencap make.

#### 🔹 Structural Outlines for Large Files
When a file exceeds your token budget and gets truncated, TokenCap doesn't just cut it off. It generates a structural outline of classes, functions, and methods so you still know what's inside.

> ⚙️ *Technical Detail:* Regex-based outline extraction for JS/TS functions, classes, interfaces, Python defs, Rust fns, and Go funcs. Capped at 30 definitions per file.

#### 🔹 TODO / FIXME / HACK Detection
Every TODO, FIXME, and HACK comment across your selected files is extracted and surfaced in a dedicated section — so technical debt is always visible in your handoff.

> ⚙️ *Technical Detail:* Case-insensitive regex scan across all selected files. Each entry includes file path, line number, and the full comment line. Capped at maxTodos (default: 100).

#### 🔹 AI Debug Handoff Mode
Preserves debugging state (logs, stack traces, uncommitted diffs, custom notes) in a dedicated folder (.tokencap/debug/) so that other developers or AI assistants can immediately continue investigation without starting over.

> ⚙️ *Technical Detail:* Auto-creates .tokencap-debug.md templates. Captures environment data and command failures. Managed via unified tokencap debug CLI with start, end, and log flags.

### 📁 VS Code

#### 🔹 Auto Capture on Save
Every time you save a file in VS Code, TokenCap debounces and automatically regenerates your snapshot. You never have to remember to run it. The status bar shows the exact time of the last update.

> ⚙️ *Technical Detail:* Debounce interval configurable via tokencap.debounceMs. Default: 30,000ms. Skips TOKENCAP.md, .tokencap.json, and all generated output files to prevent re-trigger loops.

#### 🔹 VS Code Status Bar Integration
A persistent status bar item shows your auto-capture state and last snapshot time at all times. Click it to open the full command menu instantly.

> ⚙️ *Technical Detail:* Displays '$(files) TokenCap • HH:MM' format. Tooltip shows status, auto-capture state, last run time, file count, and estimated tokens. Command: tokencap.showMenu.

### 📁 Security

#### 🔹 Automatic Secret Redaction
TokenCap scrubs sensitive values before writing anything to disk. API keys, tokens, passwords, and cloud credentials are replaced with [REDACTED] — so you can safely share your snapshot with anyone.

> ⚙️ *Technical Detail:* Redacts: OpenAI keys (sk-...), GitHub PATs (ghp_..., github_pat_...), Slack tokens (xox...), AWS access keys (AKIA...), Google API keys (AIza...), and generic api_key/token/secret/password variable assignments.

### 📁 AI Optimization

#### 🔹 Context Window Profiles
Different AI models have different context limits. TokenCap ships with profiles tuned for eight model families — from llama-3-8b at 40KB to Gemini 1.5 Pro at 1.2MB. Switch profiles with a single flag.

| Profile | Max Files | Max Bytes | Use Case |
| --- | --- | --- | --- |
| `compact` | 45 | 90000 B | Tight context windows |
| `balanced` | 90 | 220000 B | Default production profile |
| `deep` | 140 | 420000 B | Complex codebases |
| `gpt-4o` | 80 | 150000 B | OpenAI GPT-4o |
| `claude-3-5-sonnet` | 120 | 250000 B | Anthropic Claude |
| `gemini-1.5-flash` | 200 | 600000 B | Gemini Flash |
| `gemini-1.5-pro` | 400 | 1200000 B | Gemini Pro |
| `llama-3-8b` | 25 | 40000 B | Local LLMs |

### 📁 Git

#### 🔹 Deep Git Integration
TokenCap reads your Git state automatically — current branch, recent commits, staged and unstaged diffs, and changed file paths. Changed files are ranked higher in the snapshot so they always appear first.

> ⚙️ *Technical Detail:* Uses git status --short, git diff --cached, git diff, git log --oneline -8, git rev-parse. Separates staged vs unstaged diffs into distinct sections. Changed files receive +120 ranking score.

### 📁 Optimization

#### 🔹 Intelligent File Ranking
Not every file deserves the same attention. TokenCap scores and ranks files by relevance — changed files, source files, project metadata, and documentation surface first within your token budget.

> ⚙️ *Technical Detail:* Scoring: changed files +120, important project files (package.json, README, tsconfig) +70, high-signal docs +35, src/ files +30, test files +18. Large files penalized by floor(size/12000).

#### 🔹 Real-Time Token Estimation
Always know how large your snapshot is before you paste it into an AI tool. TokenCap estimates token count in real-time and displays it in the VS Code status bar and CLI output.

> ⚙️ *Technical Detail:* Estimates tokens as bytes / 4. Covers both source file bytes and Git diff bytes.

### 📁 CLI

#### 🔹 Watch Mode
Run TokenCap as a persistent background process. It watches your workspace for file changes and automatically regenerates all snapshot files after a configurable debounce delay.

> ⚙️ *Technical Detail:* Built on chokidar. Ignores generated output files, node_modules, dist, build, coverage. Default debounce: 30,000ms, configurable via --debounce.

#### 🔹 Automated CLI Capture
Execute any command under the debug runner (e.g. tokencap debug --start -- npm test) and TokenCap will automatically intercept, format, and save the stdout/stderr stream, failed tests, and stack traces.

> ⚙️ *Technical Detail:* Parses error tracebacks and test runner fail patterns (Jest, Vitest, Mocha, Node, pytest, Go test). Auto-detects and prioritizes suspected workspace files using stack traces.

### 📁 Configuration

#### 🔹 Flexible Configuration
Drop a .tokencap.json into your project root to override any default. Tune file budgets, include/exclude patterns, diff settings, profile, and more — all scoped to the project.

> ⚙️ *Technical Detail:* Config resolution order: defaults → profile overrides → .tokencap.json → CLI flags. Supports includePatterns, excludePatterns with glob matching.

### 📁 Compatibility

#### 🔹 Multi-Language Snapshot
The main snapshot works across every language TokenCap can read. Python, Go, Rust, Java, C++, Ruby, PHP, Swift, Kotlin, SQL, YAML, and more — if it's a text file, it's in your snapshot.

> ⚙️ *Technical Detail:* Supports 40+ file extensions including .py, .go, .rs, .java, .cs, .cpp, .rb, .php, .swift, .kt, .sql, .yaml, .toml, .vue, .svelte, and all JS/TS variants.

## 💻 CLI Commands

### 🛠️ `tokencap brain`

Project Brain — unified intelligence query about any part of your codebase (files, risk, architecture, dependencies, review groups, recent changes, and git timeline).

**Example:**
```bash
tokencap brain auth
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--impact` | Show affected file/feature count, critical files, and risk level. |
| `--architecture` | Render dependency chain ASCII view for the cluster. |
| `--review` | Show review group files and reason for grouping. |
| `--timeline` | Show git commit history (date + message) for cluster files. |
| `--risk` | Show risk areas and affected files. |
| `--deps` | Show full depends-on and used-by lists. |

### 🛠️ `tokencap agent`

Analyzes the repository and automatically generates a complete Self-Loading Universal Context Layer (AGENTS.md, START_HERE.md, allowed-context.json, model-instructions.md, context-manifest.json). Use --execution flag to generate the Execution Contract.

**Example:**
```bash
tokencap agent --full
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--full` | Run full Universal Context Layer pipeline (default) |
| `--architecture` | Focused generation of tech stack and architecture details |
| `--rules` | Focused generation of project coding rules and conventions |
| `--skills` | Focused generation of agent skill definitions and instructions |
| `--no-agents-file` | Skip generating the root-level AGENTS.md file |
| `--export <target>` | Export rules directly to IDE rulesets (cursor | windsurf | cline | roocode) |
| `--execution` | Also generate the Execution Contract lifecycle suite under .tokencap/agent/execution-contract/ |
| `--strict` | Strict mode: enables scope drift confirmation and gating rules (requires --execution) |

### 🛠️ `tokencap ask`

Smart context retrieval from a natural language question. Auto-detects target mode, retrieves relevant files, traverses the graph (BFS), applies a token budget, and generates a context package and suggested AI prompt.

**Example:**
```bash
tokencap ask "How does authentication work?"
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--mode <name>` | Override auto-detected mode: review | debug | architecture |
| `--budget <n>` | Custom token budget for the context pack. Default: 12000 |
| `--json` | Also export a machine-readable context.json file |
| `--no-prompt` | Skip generating the prompt.md file |

### 🛠️ `tokencap context`

Manual context generation by topic keyword (e.g. auth, payments, dashboard). Finds files by topic, scores them, performs graph BFS, and generates a context package.

**Example:**
```bash
tokencap context auth
```

| Option / Flag | Description |
| --- | --- |
| `--root <p

/* ...truncated for capsule budget... */
```

### src/data/testimonials.js

| Field | Value |
| --- | --- |
| Bytes | 597 |
| Score | 168 |
| Why | changed, source, test |
| Status | Full content |


```js
export const testimonials = [
  {
    audience: "Next.js developer using Claude or GPT-4",
    theme: "No more re-explaining the project at the start of every session",
  },
  {
    audience: "Solo developer or indie hacker",
    theme: "The graph feature helped me discover a circular dependency I never knew about",
  },
  {
    audience: "Team lead / senior engineer",
    theme: "We use it to onboard new engineers — just point them at TOKENCAP.md",
  },
  {
    audience: "Developer using local LLMs",
    theme: "The compact profile fits perfectly in llama-3-8b's context window",
  },
];
```

### src/app/changelog/page.jsx

| Field | Value |
| --- | --- |
| Bytes | 887 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ChangelogList } from "@/components/changelog/ChangelogList";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Changelog",
  description: "Track the evolution of TokenCap from a token-budgeted context generator to a complete AI Project Intelligence Platform.",
  path: "/changelog",
});

export default function ChangelogPage() {
  return (
    <PageWrapper className="space-y-8 py-12 sm:py-16 lg:py-20">
      <SectionHeading 
        eyebrow="Release History" 
        title="Evolution of Context" 
        description="Track the evolution of TokenCap from a token-budgeted context generator to a complete AI Project Intelligence Platform." 
      />
      <ChangelogList />
    </PageWrapper>
  );
}
```

### src/app/docs/page.jsx

| Field | Value |
| --- | --- |
| Bytes | 6606 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";
import { docsSections } from "@/data/docs";
import { MarkdownRenderer } from "@/components/docs/MarkdownRenderer";
import { DocsSearch } from "@/components/docs/DocsSearch";

export const metadata = buildMetadata({
  title: "Documentation",
  description: "Learn how to use TokenCap CLI and integration tools. Local-first snapshot generation guide.",
  path: "/docs",
});

function getIconForSlug(slug) {
  switch (slug) {
    case "getting-started": return "rocket_launch";
    case "configuration": return "settings";
    case "profiles": return "settings_input_component";
    case "graph": return "account_tree";
    case "memory": return "inventory_2";
    case "pack": return "package_2";
    case "diff": return "difference";
    case "agent": return "support_agent";
    case "secret-redaction": return "enhanced_encryption";
    case "cli": return "terminal";
    case "vscode": return "extension";
    case "ask": return "chat";
    case "brain": return "psychology";
    case "execution-contract": return "gavel";
    case "constitution": return "menu_book";
    default: return "info";
  }
}

export default function DocsPage() {
  const sidebarItems = docsSections.map((section) => ({
    label: section.title,
    icon: getIconForSlug(section.slug),
    href: `#${section.slug}`,
  }));

  const tocItems = docsSections.map((section) => ({
    label: section.title,
    href: `#${section.slug}`,
  }));

  return (
    <PageWrapper className="max-w-7xl mx-auto flex">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-[#4a4455]/20 bg-[#0e0e10]/40 p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)]">
        <div className="mb-4">
          <p className="text-xl font-bold text-white tracking-tight">Documentation</p>
          <p className="font-mono text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">v1.2.0</p>
        </div>
        <div className="mb-4">
          <DocsSearch />
        </div>
        <nav className="space-y-1 flex-grow">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 p-2.5 rounded-lg font-medium text-sm transition-all text-[#ccc3d8] hover:bg-[#2a2a2c]/50`}
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-[#4a4455]/20 space-y-4">
          <a
            href="#getting-started"
            className="w-full bg-[#00a572] text-white py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity block text-center"
          >
            Getting Started
          </a>
          <div className="flex flex-col gap-2 font-mono text-xs">
            <a href="https://github.com/vansharora21/TOKENCAP" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-base">code</span>
              GitHub
            </a>

          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 md:px-12 min-w-0">
        <div className="max-w-3xl">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
              TokenCap Documentation
            </h1>
            <p className="text-base leading-relaxed text-[#ccc3d8]">
              Learn how to use TokenCap CLI and VS Code Extension to package codebase context for AI tools.
            </p>
          </header>

          {docsSections.map((section) => (
            <section key={section.slug} className="mb-16 scroll-mt-24" id={section.slug}>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6 border-b border-[#4a4455]/20 pb-3">
                {section.title}
              </h2>
              <article className="prose prose-invert max-w-none">
                <MarkdownRenderer content={section.content} />
              </article>
            </section>
          ))}

          {/* Navigation buttons */}
          <div className="mt-16 flex justify-between items-center pt-8 border-t border-[#4a4455]/20">
            <a href="/" className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
              Back Home
            </a>
            <a href="/cli" className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#d2bbff] transition-colors">
              CLI Reference
              <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden xl:block w-64 p-6 sticky top-16 h-fit shrink-0">
        <h5 className="text-[10px] font-mono font-bold text-zinc-500 mb-4 uppercase tracking-widest">On this page</h5>
        <nav className="flex flex-col gap-2.5 border-l border-[#4a4455]/20 pl-4 text-xs">
          {tocItems.map((item) => (
            <a
              key={item.href}
              className="text-zinc-400 hover:text-white transition-colors"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 p-4 bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-xl relative overflow-hidden">
          <div className="relative z-10">
            <h6 className="font-bold text-white text-xs mb-1">New Release</h6>
            <p className="text-[11px] leading-relaxed text-[#ccc3d8] mb-4">v1.2.0 adds the Repository Constitution (tokencap constitution) to encode permanent engineering laws AI agents must never violate.</p>
            <a className="text-[11px] text-[#d2bbff] font-bold underline hover:text-[#7c3aed] transition-colors" href="/changelog">
              Check changelog
            </a>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10 text-[#7c3aed] pointer-events-none select-none">
            <span className="material-symbols-outlined text-6xl">upgrade</span>
          </div>
        </div>
      </aside>
    </PageWrapper>
  );
}
```

### src/app/faq/page.jsx

| Field | Value |
| --- | --- |
| Bytes | 5419 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Frequently asked questions about TokenCap local-first context generation and security.",
  path: "/faq",
});

export default function FaqPage() {
  const sidebarItems = [
    { label: "Introduction", icon: "info", href: "#" },
    { label: "Core Concepts", icon: "extension", href: "#" },
    { label: "CLI Reference", icon: "terminal", href: "#" },
    { label: "FAQ", icon: "api", href: "#", active: true },
    { label: "Advanced", icon: "auto_awesome", href: "#" },
  ];



  return (
    <PageWrapper className="max-w-7xl mx-auto flex">
      {/* SideNavBar */}
      <aside className="w-64 border-r border-[#4a4455]/20 bg-[#0e0e10]/40 p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)]">
        <div className="mb-6 flex items-center gap-2 px-1">
          <div className="w-8 h-8 rounded bg-[#7c3aed]/10 flex items-center justify-center text-[#d2bbff] shrink-0">
            <span className="material-symbols-outlined text-sm">terminal</span>
          </div>
          <div>
            <h2 className="text-sm font-bold text-white leading-none">Documentation</h2>
            <span className="font-mono text-[9px] text-zinc-500 mt-1 uppercase tracking-wider block">v1.2.0</span>
          </div>
        </div>
        <nav className="space-y-1 flex-grow">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 p-2.5 rounded-lg font-medium text-sm transition-all ${
                item.active
                  ? "text-[#d2bbff] bg-[#7c3aed]/10 font-bold"
                  : "text-[#ccc3d8] hover:bg-[#2a2a2c]/50"
              }`}
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-[#4a4455]/20 space-y-4">
          <button className="w-full bg-[#2a2a2c] text-white py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-colors">
            Read Guide
          </button>
          <div className="flex flex-col gap-2 font-mono text-xs">
            <a href="https://github.com/vansharora21/TOKENCAP" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-base">code</span>
              GitHub
            </a>

          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 md:px-12 max-w-4xl min-w-0">
        <header className="mb-12">
          <span className="text-[#d2bbff] font-mono text-[10px] font-semibold tracking-widest block mb-1 uppercase">SUPPORT CENTER</span>
          <h1 className="text-4xl font-bold tracking-tight text-white mb-3">Frequently Asked Questions</h1>
          <p className="text-[#ccc3d8] text-sm leading-relaxed max-w-xl">
            Everything you need to know about the TokenCap CLI, local-first context generation, and how we handle your private source code.
          </p>
        </header>

        {/* Interactive Accordion items are managed in the FAQAccordion component */}
        <FAQAccordion />

        {/* Bento Contact Section */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-1.5">Still have questions?</h3>
              <p className="text-sm text-[#ccc3d8] leading-relaxed">Reach out to our team or shoot us an email for direct help.</p>
            </div>
            <div className="mt-6 flex gap-4">
              <button className="px-5 py-2.5 bg-[#7c3aed] text-white font-bold rounded-lg hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all text-xs uppercase tracking-wider">
                Email Support
              </button>
            </div>
          </div>
          <div className="glass-panel rounded-xl overflow-hidden relative group h-48 md:h-auto">
            <img 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" 
              alt="Server rack backdrop"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaYlvgyO26KbYmiyNmtfBvzxtxh-0IXlSnlmcD90y7DFw5CezYLGaG84FSr6LJQPW7o5UD-b8yfR9aMaEiBYDs4H8MYkPp0cMYf3EPFEJiQcwlEDSJBDgv3N2pZEboujkEjg7-G-uDR6NV3zE91y0jnofPiANGABYCXOvi7eqhHqqpjs5U9Yv8e6tK3z5f9L8LmZoSdiNFkur7tZ8rUg4-SdizfuMK6Ie6b1HyU2qC-nWj0vV9uvhdyWYWZF0ZhCUQOknzqMB3Zw1a"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
              <p className="font-mono text-[9px] font-semibold text-white bg-black/85 px-3 py-1.5 border border-[#7c3aed]/30 backdrop-blur-md uppercase tracking-wider">
                STATUS: OPERATIONAL
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
```

### src/app/layout.jsx

| Field | Value |
| --- | --- |
| Bytes | 1792 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { GradientBackground } from "@/components/shared/GradientBackground";
import { SearchModal } from "@/components/shared/SearchModal";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#0a0a0c] antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[#0a0a0c] text-foreground">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <GradientBackground />
          <SearchModal />
          <Navbar />
          <div className="relative flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
```

### src/app/loading.jsx

| Field | Value |
| --- | --- |
| Bytes | 780 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-7xl items-center justify-center px-6 py-24 sm:px-8 lg:px-10">
      <div className="w-full max-w-4xl space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="h-4 w-24 rounded-full bg-white/10" />
        <div className="h-10 w-3/4 rounded-2xl bg-white/10" />
        <div className="h-6 w-2/3 rounded-full bg-white/10" />
        <div className="grid gap-4 pt-4 sm:grid-cols-3">
          <div className="h-28 rounded-2xl bg-white/10" />
          <div className="h-28 rounded-2xl bg-white/10" />
          <div className="h-28 rounded-2xl bg-white/10" />
        </div>
      </div>
    </div>
  );
}
```

### src/app/page.jsx

| Field | Value |
| --- | --- |
| Bytes | 2189 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { Hero } from "@/components/home/Hero";
import { ProductPreview } from "@/components/home/ProductPreview";
import { ProblemSection } from "@/components/home/ProblemSection";
import { FeaturesPreview } from "@/components/home/FeaturesPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "TokenCap",
  description: "Never lose project context again. TokenCap generates AI-ready coding handoff snapshots instantly.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageWrapper container={false} className="space-y-0">
      {/* Hero & Preview Section */}
      <div className="border-b border-white/5 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Hero />
            </div>
            <div className="lg:col-span-7 w-full">
              <ProductPreview />
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <ProblemSection />
        </div>
      </div>

      {/* Features Section */}
      <div className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FeaturesPreview />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="border-b border-white/5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <HowItWorks />
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-[#0a0a0c]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FinalCTA />
        </div>
      </div>
    </PageWrapper>
  );
}
```

### src/app/roadmap/page.jsx

| Field | Value |
| --- | --- |
| Bytes | 735 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RoadmapList } from "@/components/roadmap/RoadmapList";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roadmap",
  description: "Planned TokenCap features and future versions.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  return (
    <PageWrapper className="space-y-12 py-12 sm:py-16 lg:py-20">
      <SectionHeading eyebrow="Roadmap" title="Planned features and versions." description="The content is wired from the website data bundle so future updates stay centralized." />
      <RoadmapList />
    </PageWrapper>
  );
}
```

### src/components/about/MissionSection.jsx

| Field | Value |
| --- | --- |
| Bytes | 490 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { missionPoints } from "@/data/about";

function MissionSection() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Mission</p>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
        {missionPoints.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </section>
  );
}

export { MissionSection };
```

### src/components/about/PhilosophySection.jsx

| Field | Value |
| --- | --- |
| Bytes | 505 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { philosophyPoints } from "@/data/about";

function PhilosophySection() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Philosophy</p>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
        {philosophyPoints.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </section>
  );
}

export { PhilosophySection };
```

### src/components/about/Timeline.jsx

| Field | Value |
| --- | --- |
| Bytes | 591 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { timelineItems } from "@/data/about";

function Timeline() {
  return (
    <div className="grid gap-4">
      {timelineItems.map((item) => (
        <article key={item.year} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">{item.year}</p>
          <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export { Timeline };
```

### src/components/cli/CLIExamples.jsx

| Field | Value |
| --- | --- |
| Bytes | 485 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { commands } from "@/data/commands";

function CLIExamples() {
  return (
    <div className="space-y-4">
      {commands.map((command) => (
        <div key={command.command} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-medium text-white">{command.command}</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{command.description}</p>
        </div>
      ))}
    </div>
  );
}

export { CLIExamples };
```

### src/components/cli/CommandCard.jsx

| Field | Value |
| --- | --- |
| Bytes | 508 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { commands } from "@/data/commands";

function CommandCard() {
  const command = commands[0];
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Default command</p>
      <p className="mt-3 text-lg font-semibold text-white">{command.command}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{command.description}</p>
    </article>
  );
}

export { CommandCard };
```

### src/components/cli/TerminalWindow.jsx

| Field | Value |
| --- | --- |
| Bytes | 723 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { CodeBlock } from "@/components/shared/CodeBlock";

function TerminalWindow() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-4">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
      <div className="p-4">
        <CodeBlock>{`$ tokencap init
Project scaffolded.

$ tokencap capture auth-flow
Flow recorded and ready for review.`}</CodeBlock>
      </div>
    </section>
  );
}

export { TerminalWindow };
```

### src/components/docs/DocsArticle.jsx

| Field | Value |
| --- | --- |
| Bytes | 585 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
function DocsArticle({ title, slug, content }) {
  return (
    <article id={slug} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">{title}</p>
      <div className="prose prose-invert mt-4 max-w-none prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-code:text-cyan-200">
        {content.split("\n\n").map((paragraph, index) => (
          <p key={`${slug}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export { DocsArticle };
```

### src/components/docs/DocsContent.jsx

| Field | Value |
| --- | --- |
| Bytes | 898 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { docsSections } from "@/data/docs";
import Link from "next/link";

function DocsContent() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {docsSections.map((section) => (
        <article key={section.slug} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
            {String(section.order).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-white">{section.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{section.content.split("\n\n")[0]}</p>
          <Link href={`/docs/${section.slug}`} className="mt-4 inline-flex text-sm font-medium text-cyan-200 transition hover:text-cyan-100">
            Read more
          </Link>
        </article>
      ))}
    </div>
  );
}

export { DocsContent };
```

### src/components/docs/DocsSearch.jsx

| Field | Value |
| --- | --- |
| Bytes | 657 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
"use client";

function DocsSearch() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
      className="flex w-full items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-left hover:border-white/20 transition cursor-pointer"
    >
      <span className="material-symbols-outlined text-zinc-400 text-lg">search</span>
      <span className="text-sm text-zinc-500 flex-1">Search docs, features, and commands...</span>
      <kbd className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-zinc-400">⌘K</kbd>
    </button>
  );
}

export { DocsSearch };
```

### src/components/docs/DocsSidebar.jsx

| Field | Value |
| --- | --- |
| Bytes | 647 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import Link from "next/link";
import { docsNavigation } from "@/data/navigation";

function DocsSidebar() {
  return (
    <aside className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Docs map</p>
      <nav className="mt-6 flex flex-col gap-2">
        {docsNavigation.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-2xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/6 hover:text-white">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export { DocsSidebar };
```

### src/components/features/FeatureCard.jsx

| Field | Value |
| --- | --- |
| Bytes | 443 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { Badge } from "@/components/shared/Badge";

function FeatureCard({ feature }) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <Badge className="mb-4">{feature.accent}</Badge>
      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
    </article>
  );
}

export { FeatureCard };
```

### src/components/features/FeatureGrid.jsx

| Field | Value |
| --- | --- |
| Bytes | 401 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { features } from "@/data/features";
import { FeatureCard } from "@/components/features/FeatureCard";

function FeatureGrid({ limit = features.length }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {features.slice(0, limit).map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </div>
  );
}

export { FeatureGrid };
```

### src/components/features/FeatureShowcase.jsx

| Field | Value |
| --- | --- |
| Bytes | 817 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { featureShowcase } from "@/data/features";
import { CodeBlock } from "@/components/shared/CodeBlock";

function FeatureShowcase() {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200">{featureShowcase.eyebrow}</p>
        <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{featureShowcase.title}</h3>
        <p className="max-w-2xl text-base leading-7 text-slate-300">{featureShowcase.description}</p>
      </div>
      <CodeBlock className="text-cyan-100">{`<PageWrapper>
  <Hero />
  <FeatureGrid />
  <FinalCTA />
</PageWrapper>`}</CodeBlock>
    </section>
  );
}

export { FeatureShowcase };
```

### src/components/home/CLISection.jsx

| Field | Value |
| --- | --- |
| Bytes | 999 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { commands } from "@/data/commands";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CodeBlock } from "@/components/shared/CodeBlock";

function CLISection() {
  return (
    <section className="space-y-8">
      <SectionHeading eyebrow="CLI" title="Command examples live in their own data layer." description="That keeps the product story consistent when the terminal flow expands beyond a placeholder." />
      <div className="grid gap-4 lg:grid-cols-3">
        {commands.slice(0, 3).map((command) => (
          <article key={command.command} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium text-cyan-200">{command.description}</p>
            <div className="mt-4"><CodeBlock>{command.command}</CodeBlock></div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{command.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export { CLISection };
```

### src/components/home/Hero.jsx

| Field | Value |
| --- | --- |
| Bytes | 1448 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import Link from "next/link";

function Hero() {
  return (
    <section className="flex flex-col items-start text-left max-w-xl pt-4 pb-4">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
        Never Lose Project <br className="hidden sm:inline" />
        <span className="text-purple-400">Context</span> Again
      </h1>

      {/* Description */}
      <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
        TokenCap generates AI-ready coding handoff snapshots (TOKENCAP.md) instantly, keeping your LLMs in sync with your local development.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Link
          href="/docs/getting-started"
          className="w-full sm:w-auto text-center bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 text-sm shadow-lg shadow-purple-600/10"
        >
          Install TokenCap
        </Link>
        <Link
          href="/docs"
          className="w-full sm:w-auto text-center border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 hover:bg-zinc-900/60 text-zinc-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-200 text-sm"
        >
          View Docs
        </Link>
      </div>
    </section>
  );
}

export { Hero };
```

### src/components/home/HowItWorks.jsx

| Field | Value |
| --- | --- |
| Bytes | 9649 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Save",
      description: "Hit Ctrl+S. TokenCap detects the file change instantly.",
    },
    {
      num: "02",
      title: "Update",
      description: "A fresh TOKENCAP.md is refreshed with the new context data.",
    },
    {
      num: "03",
      title: "Handoff",
      description: "Paste the TOKENCAP.md content or link into your favorite LLM.",
    },
  ];

  return (
    <section className="grid gap-12 lg:grid-cols-2 lg:items-center py-6">
      {/* Left Column: Workflow steps */}
      <div className="space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          The Workflow of <br />
          the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Future.</span>
        </h2>

        <div className="space-y-6 max-w-lg">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4 items-start">
              {/* Number Circle */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs font-semibold text-zinc-400 font-mono">
                {step.num}
              </div>
              {/* Content */}
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Animated Scan Workflow */}
      <div className="relative flex justify-center lg:justify-end w-full max-w-[500px] mx-auto lg:mr-0">
        {/* Glow backdrop */}
        <div className="absolute -inset-10 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -inset-10 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none opacity-40"></div>
        
        <div className="w-full relative glass-panel p-2 sm:p-4 rounded-2xl border border-white/5 bg-[#070709]/50 shadow-[0_0_40px_-10px_rgba(124,58,237,0.12)] overflow-hidden">
          <WorkflowAnimation />
        </div>
      </div>
    </section>
  );
}

function WorkflowAnimation() {
  return (
    <svg viewBox="0 0 500 300" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="purple-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="green-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <style>{`
        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-y-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes float-y-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-y-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes flow-left {
          to { stroke-dashoffset: -36; }
        }
        @keyframes pulse-glow-purple {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(139, 92, 246, 0.4)); opacity: 0.85; }
          50% { filter: drop-shadow(0 0 14px rgba(139, 92, 246, 0.8)); opacity: 1; }
        }
        @keyframes pulse-glow-green {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.4)); opacity: 0.85; }
          50% { filter: drop-shadow(0 0 16px rgba(16, 185, 129, 0.8)); opacity: 1; }
        }
        @keyframes write-line {
          0%, 100% { stroke-dashoffset: 40; opacity: 0.3; }
          50% { stroke-dashoffset: 0; opacity: 0.85; }
        }

        .anim-spin-dashed {
          animation: spin-clockwise 25s linear infinite;
          transform-origin: 250px 150px;
        }
        .anim-spin-dashed:hover {
          animation-duration: 8s;
        }
        .anim-float-1 {
          animation: float-y-1 4.5s ease-in-out infinite;
        }
        .anim-float-2 {
          animation: float-y-2 5.5s ease-in-out infinite;
        }
        .anim-float-3 {
          animation: float-y-3 5s ease-in-out infinite;
        }
        .anim-flow-purple {
          stroke-dasharray: 6, 12;
          animation: flow-left 1.5s linear infinite;
        }
        .anim-flow-green {
          stroke-dasharray: 6, 12;
          animation: flow-left 1.2s linear infinite;
        }
        .anim-pulse-scan {
          animation: pulse-glow-purple 4s ease-in-out infinite;
        }
        .anim-pulse-doc {
          animation: pulse-glow-green 4s ease-in-out infinite;
          animation-delay: 2s;
        }
        .anim-doc-line {
          stroke-dasharray: 40;
          stroke-dashoffset: 0;
          animation: write-line 3s ease-in-out infinite;
        }
        .anim-doc-line-1 { animation-delay: 0.2s; }
        .anim-doc-line-2 { animation-delay: 0.5s; }
        .anim-doc-line-3 { animation-delay: 0.8s; }

        .hover-scale {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease;
          cursor: pointer;
        }
        .hover-scale:hover {
          transform: scale(1.08);
          filter: brightness(1.2) drop-shadow(0 0 8px rgba(168, 85, 247, 0.5));
        }
        .hover-scale-green {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease;
          cursor: pointer;
        }
        .hover-scale-green:hover {
          transform: scale(1.05);
          filter: brightness(1.2) drop-shadow(0 0 10px rgba(16, 185, 129, 0.6));
        }
      `}</style>

      {/* BACKGROUND LINES & CONNECTORS */}
      {/* Left Side: Source file paths merging into one horizontal line */}
      <path d="M 82 70 C 130 70, 160 150, 210 150" stroke="#2e1a4f" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M 42 150 L 210 150" stroke="#2e1a4f" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M 82 230 C 130 230, 160 150, 210 150" stroke="#2e1a4f" strokeWidth="2" fill="none" opacity="0.4" />

      {/* Animated flow lines */}
      <path d="M 82 70 C 130 70, 160 150, 210 150" stroke="#8b5cf6" strokeWidth="2" fill="none" className="anim-flow-purple" />
      <path d="M 42 150 L 210 150" stroke="#8b5cf6" strokeWidth="2" fill="none" className="anim-flow-purple" />
      <path d="M 82 230 C 130 230, 160 150, 210 150" stroke="#8b5cf6" strokeWidth="2" fill="none" className="anim-flow-purple" />

      {/* Right Side: SCAN to TOKENCAP.md path */}
      <line x1="290" y1="150" x2="390" y2="150" stroke="#064e3b" strokeWidth="2" opacity="0.4" />
      <line x1="290" y1="150" x2="390" y2="150" stroke="#10b981" strokeWidth="2" className="anim-flow-green" />

      {/* SOURCE NODES (Left Column) */}
      {/* PY Node */}
      <g className="anim-float-1 hover-scale">
        <rect x="60" y="50" width="44" height="40" rx="8" fill="#0d081b" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="82" y="74" fill="#c084fc" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">PY</text>
      </g>

      {/* TS Node */}
      <g className="anim-float-2 hover-scale">
        <rect x="20" y="130" width="44" height="40" rx="8" fill="#0d081b" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="42" y="154" fill="#c084fc" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">TS</text>
      </g>

      {/* GO Node */}
      <g className="anim-float-3 hover-scale">
        <rect x="60" y="210" width="44" height="40" rx="8" fill="#0d081b" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="82" y="234" fill="#c084fc" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">GO</text>
      </g>

      {/* CENTER NODE (SCAN) */}
      <g className="anim-pulse-scan">
        <circle cx="250" cy="150" r="42" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="6,4" className="anim-spin-dashed" cursor="pointer" />
        <circle cx="250" cy="150" r="35" stroke="#7c3aed" strokeWidth="1" fill="#0f0b21" />
        <circle cx="250" cy="150" r="28" fill="#180f33" />
        <text x="250" y="154" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5" textAnchor="middle">SCAN</text>
      </g>

      {/* RIGHT NODE (TOKENCAP.md) */}
      <g className="anim-pulse-doc hover-scale-green">
        <rect x="390" y="100" width="72" height="100" rx="10" fill="#03120c" stroke="#10b981" strokeWidth="2" />
        <line x1="405" y1="125" x2="447" y2="125" stroke="#10b981" strokeWidth="2" className="anim-doc-line anim-doc-line-1" strokeLinecap="round" />
        <line x1="405" y1="142" x2="447" y2="142" stroke="#10b981" strokeWidth="2" className="anim-doc-line anim-doc-line-2" strokeLinecap="round" />
        <line x1="405" y1="159" x2="430" y2="159" stroke="#10b981" strokeWidth="2" className="anim-doc-line anim-doc-line-3" strokeLinecap="round" />
        <text x="426" y="186" fill="#10b981" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.2">TOKENCAP.md</text>
      </g>
    </svg>
  );
}

export { HowItWorks };
```

### src/components/home/ProblemSection.jsx

| Field | Value |
| --- | --- |
| Bytes | 1949 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
function ProblemSection() {
  return (
    <section className="grid gap-12 lg:grid-cols-2 lg:items-center py-6">
      {/* Left Column: Text Content */}
      <div className="space-y-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          Stop Fighting <br />
          <span className="text-[#ffb4ab]">
            Context Drift.
          </span>
        </h2>
        
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg">
          Your LLM doesn't know you just renamed that function. Context windows are huge, but they are frozen in time. Stop copy-pasting your entire codebase and start sending delta snapshots.
        </p>

        {/* Warning Alert Panel */}
        <div className="flex items-center gap-3 p-3 bg-[#93000a]/20 border border-[#ffb4ab]/20 rounded-lg text-xs sm:text-sm max-w-md">
          <span className="material-symbols-outlined text-[#ffb4ab]">warning</span>
          <span className="text-[#ffb4ab] font-mono font-medium">High latency detected in manual handoffs.</span>
        </div>
      </div>

      {/* Right Column: Code Image Visual */}
      <div className="relative group">
        <div className="absolute inset-0 bg-[#7c3aed]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJFPtwIFfi3DiXQZnc1G50ERtvwhzUjiPdWfb3Wey9VWMjMp1llMMi0sw5Lsxwdmd6Gn4O2Shq001aUkX-y2BH7J4o-TetbvjnQn0SYIkWPmwyVnofRm8ByaecdLJ9zM4THBxrEBr8VMxfiJd6jBlMPv0a5vLV1bUJNM0RVLYOjM-E-bsRO-2sS17aCL8Ut_yRwCcHL8Hvr2DXV0EWJcZosTZ5AOKhVmCJqi2Cggap1NUVHTePZYWB4QFa9gBuNcT2lLMcCZXJGKEM" 
          alt="Context window drift visual" 
          className="w-full rounded-xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700" 
        />
      </div>
    </section>
  );
}

export { ProblemSection };
```

### src/components/home/Testimonials.jsx

| Field | Value |
| --- | --- |
| Bytes | 1048 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { testimonials } from "@/data/testimonials";

function Testimonials() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200">Testimonials</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Suggested proof points for launch.</h2>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          These are placeholder slots for future public quotes, seeded from the supplied content bundle.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {testimonials.map((item) => (
          <article key={item.audience} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium text-cyan-200">{item.audience}</p>
            <p className="mt-3 text-base leading-7 text-slate-200">“{item.theme}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export { Testimonials };
```

### src/components/layout/Footer.jsx

| Field | Value |
| --- | --- |
| Bytes | 6021 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import Link from "next/link";

function Footer() {
  const productLinks = [
    { label: "Features", href: "/features" },
    { label: "Docs", href: "/docs" },
    { label: "Changelog", href: "/changelog" },
  ];

  const resourceLinks = [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Security", href: "/security" },
  ];

  const communityLinks = [
    { label: "GitHub", href: "https://github.com/vansharora21/TOKENCAP", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aroravansh2108/", external: true },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0c] text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 overflow-hidden rounded-lg bg-[#141416] border border-white/10 flex items-center justify-center">
                <img 
                  src="/logos/tokencap-logo.png" 
                  alt="TokenCap emblem" 
                  className="absolute w-[180%] h-auto max-w-none left-1/2 -translate-x-1/2 top-[-8%]" 
                />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">TokenCap</h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
              Coding context at the speed of thought. <br />
              Built for the LLM era.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
            {/* Column 1: Product */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white tracking-wide text-xs uppercase text-zinc-400">Product</h4>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-zinc-500 hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white tracking-wide text-xs uppercase text-zinc-400">Resources</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-zinc-500 hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Community */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white tracking-wide text-xs uppercase text-zinc-400">Community</h4>
              <ul className="space-y-2 font-mono text-xs">
                {communityLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-white transition flex items-center gap-1.5"
                    >
                      <span>&bull;</span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs text-zinc-600">
          <div>
            &copy; 2026 TokenCap. Built for developers.
          </div>
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/vansharora21/TOKENCAP"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 text-zinc-600 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aroravansh2108/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 text-zinc-600 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
```

### src/components/layout/Navbar.jsx

| Field | Value |
| --- | --- |
| Bytes | 3432 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
"use client";

import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "/features" },
    { label: "Docs", href: "/docs" },
    { label: "Timeline", href: "/changelog" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        {/* Left: Brand name */}
        <Link href="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white hover:opacity-90 transition">
          <span className="text-xl font-bold tracking-tight text-white">TokenCap</span>
        </Link>

        {/* Middle: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Icon */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
            className="text-zinc-400 hover:text-white transition focus:outline-none"
            aria-label="Search"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-400 hover:text-white transition focus:outline-none md:hidden p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0c]/95 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-zinc-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export { Navbar };
```

### src/components/layout/PageWrapper.jsx

| Field | Value |
| --- | --- |
| Bytes | 598 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function PageWrapper({ children, className, container = true }) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={variants}
      className={cn(
        "w-full",
        container && "mx-auto max-w-7xl px-6 sm:px-8 lg:px-10",
        className
      )}
    >
      {children}
    </motion.main>
  );
}

export { PageWrapper };
```

### src/components/roadmap/RoadmapList.jsx

| Field | Value |
| --- | --- |
| Bytes | 715 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { roadmapItems } from "@/data/roadmap";

function RoadmapList() {
  return (
    <div className="grid gap-4">
      {roadmapItems.map((item) => (
        <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">{item.version}</p>
          <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">{item.status} · {item.source}</p>
        </article>
      ))}
    </div>
  );
}

export { RoadmapList };
```

### src/components/shared/Badge.jsx

| Field | Value |
| --- | --- |
| Bytes | 311 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { cn } from "@/lib/utils";

function Badge({ children, className }) {
  return <span className={cn("inline-flex items-center rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200", className)}>{children}</span>;
}

export { Badge };
```

### src/components/shared/CodeBlock.jsx

| Field | Value |
| --- | --- |
| Bytes | 337 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { cn } from "@/lib/utils";

function CodeBlock({ children, className }) {
  return <pre className={cn("overflow-x-auto rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5 text-sm leading-7 text-slate-200 shadow-2xl shadow-black/20", className)}><code className="font-mono">{children}</code></pre>;
}

export { CodeBlock };
```

### src/components/shared/CTAButton.jsx

| Field | Value |
| --- | --- |
| Bytes | 259 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

function CTAButton({ href, children, ...props }) {
  return (
    <Button asChild {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export { CTAButton };
```

### src/components/shared/GradientBackground.jsx

| Field | Value |
| --- | --- |
| Bytes | 756 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
function GradientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-8rem] top-[-4rem] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-float" />
      <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-blue-500/14 blur-3xl animate-float" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
    </div>
  );
}

export { GradientBackground };
```

### src/components/shared/SectionHeading.jsx

| Field | Value |
| --- | --- |
| Bytes | 643 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { cn } from "@/lib/utils";
import { Badge } from "@/components/shared/Badge";

function SectionHeading({ eyebrow, title, description, align = "left", className }) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className={cn("mt-4 max-w-2xl text-base leading-7 text-slate-300", align === "center" && "mx-auto")}>{description}</p> : null}
    </div>
  );
}

export { SectionHeading };
```

### src/components/ui/button.jsx

| Field | Value |
| --- | --- |
| Bytes | 1174 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-cyan-300 text-slate-950 hover:bg-cyan-200",
        secondary: "bg-white/8 text-white ring-1 ring-inset ring-white/10 hover:bg-white/12",
        ghost: "bg-transparent text-slate-200 hover:bg-white/8",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
```

### src/components/vscode/ExtensionFeatures.jsx

| Field | Value |
| --- | --- |
| Bytes | 533 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { vscodeFeatures } from "@/data/vscode";

function ExtensionFeatures() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {vscodeFeatures.map((feature) => (
        <article key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
        </article>
      ))}
    </div>
  );
}

export { ExtensionFeatures };
```

### src/components/vscode/StatusBarPreview.jsx

| Field | Value |
| --- | --- |
| Bytes | 442 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
import { statusBarItems } from "@/data/vscode";

function StatusBarPreview() {
  return (
    <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
      {statusBarItems.map((item) => (
        <span key={item} className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1">
          {item}
        </span>
      ))}
    </div>
  );
}

export { StatusBarPreview };
```

### src/components/vscode/VSCodePreview.jsx

| Field | Value |
| --- | --- |
| Bytes | 1486 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```jsx
function VSCodePreview() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-slate-400">
        <span className="rounded-full bg-white/10 px-3 py-1">TokenCap.tsx</span>
        <span className="rounded-full bg-white/10 px-3 py-1">README.md</span>
        <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-cyan-200">Preview</span>
      </div>
      <div className="grid gap-0 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="border-b border-white/10 bg-white/5 p-4 lg:border-b-0 lg:border-r">
          <div className="space-y-3 text-sm text-slate-300">
            <div className="rounded-2xl bg-white/5 px-3 py-2">Routes</div>
            <div className="rounded-2xl bg-white/5 px-3 py-2">Components</div>
            <div className="rounded-2xl bg-white/5 px-3 py-2">Data</div>
            <div className="rounded-2xl bg-white/5 px-3 py-2">SEO</div>
          </div>
        </aside>
        <div className="p-6">
          <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 font-mono text-sm leading-7 text-slate-200">
            <p>{`export default function Page() {`}</p>
            <p>{`  return <main>TokenCap</main>;`}</p>
            <p>{`}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { VSCodePreview };
```

### src/data/about.js

| Field | Value |
| --- | --- |
| Bytes | 884 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```js
export const missionPoints = [
  "Build TokenCap as a polished developer-facing product with room to scale.",
  "Keep content, navigation, and UI primitives separate so each can evolve independently.",
  "Start with the route structure that supports future marketing, docs, and support pages.",
];

export const philosophyPoints = [
  "Reusable components beat page-specific one-offs.",
  "Content belongs in data, not scattered through JSX.",
  "Animation should support comprehension, not distract from it.",
];

export const timelineItems = [
  { year: "2026", title: "Architecture pass", description: "Create the route tree and content model." },
  { year: "Next", title: "Design system pass", description: "Apply the final visual language across the shell." },
  { year: "Future", title: "Product expansion", description: "Add blog, changelog, roadmap, and docs versions." },
];
```

### src/data/changelog.js

| Field | Value |
| --- | --- |
| Bytes | 3068 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```js
export const changelogItems = [
  {
    version: "1.2.0",
    title: "Repository Constitution",
    date: "2026-06-27",
    status: "released",
    description: "Introduces the Repository Constitution (tokencap constitution) to encode permanent engineering laws regarding API contracts, schemas, security, and compliance.",
  },
  {
    version: "1.1.0",
    title: "Execution Contract",
    date: "2026-06-27",
    status: "released",
    description: "Introduces the Execution Contract (--execution) for engineering discipline: Scope Drift Detection, Minimal Solution First questions, Confidence Rating, and Recovery Mode.",
  },
  {
    version: "1.0.0",
    title: "Self-Loading Universal Context Layer",
    date: "2026-06-25",
    status: "released",
    description: "Launches the Self-Loading Universal Context Layer (AGENTS.md, START_HERE.md, allowed-context.json, context-manifest.json), topic-based pack compression, and future IDE exporter configurations.",
  },
  {
    version: "0.9.0",
    title: "Project Brain",
    date: "2026-06-22",
    status: "released",
    description: "Introduces Project Brain for unified cluster-based intelligence query with fuzzy matching and 6 mode flags.",
  },
  {
    version: "0.8.0",
    title: "Agent Intelligence Engine",
    date: "2026-06-20",
    status: "released",
    description: "Analyzes repository to generate AI Agent Skill Packs (agent-pack.md) and machine-readable definitions.",
  },
  {
    version: "0.7.0",
    title: "Smart Retrieval Engine",
    date: "2026-06-17",
    status: "released",
    description: "Question-based context retrieval with Graph BFS, topic filters, and token budget management.",
  },
  {
    version: "0.6.0",
    title: "Graph Intelligence & Unified CLI",
    date: "2026-06-14",
    status: "released",
    description: "Obsidian-style visual dependency graph, node risk scoring, and unified CLI command suite.",
  },
  {
    version: "0.5.0",
    title: "AI Context Packing & Graph Features",
    date: "2026-06-08",
    status: "released",
    description: "Interactive HTML Cytoscape graph viewer, narrative AI summaries, and token-budgeted context packing.",
  },
  {
    version: "0.4.0",
    title: "AI Change Intelligence Engine",
    date: "2026-06-07",
    status: "released",
    description: "AI-powered semantic change analysis, breaking change detection, and API endpoint mapping.",
  },
  {
    version: "0.3.0",
    title: "AI Debug Handoff Mode",
    date: "2026-06-07",
    status: "released",
    description: "CLI-based debugging memory subsystem to capture environment, failed tests, and stack traces.",
  },
  {
    version: "0.2.0",
    title: "Intelligence Layer",
    date: "2026-06-01",
    status: "released",
    description: "Dependency graph mapping (TOKENCAP_GRAPH.md) and developer context memory tracker.",
  },
  {
    version: "0.1.0",
    title: "Initial Release",
    date: "2026-05-01",
    status: "released",
    description: "Auto-save snapshots, context profiles, secret redaction, and integrated VS Code status bar.",
  },
];
```

### src/data/commands.js

| Field | Value |
| --- | --- |
| Bytes | 2727 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```js
export const commands = [
  {
    command: "tokencap agent",
    description: "Analyzes the repository and automatically generates a complete Self-Loading Universal Context Layer. Use --execution flag to generate the Execution Contract lifecycle suite.",
    result: "Self-loading context layer, root AGENTS.md, and Execution Contract (with --execution) generated."
  },
  {
    command: "tokencap ask",
    description: "Ask a natural language question about your codebase and TokenCap automatically retrieves only the relevant files.",
    result: "Smart context package and suggested AI prompt generated."
  },
  {
    command: "tokencap context",
    description: "Build a focused context package manually for a specific topic keyword.",
    result: "Topic context package generated."
  },
  {
    command: "tokencap make",
    description: "Generate the complete TokenCap snapshot: TOKENCAP.md, TOKENCAP_GRAPH.md, and TOKENCAP_MEMORY.md in one shot.",
    result: "Main snapshot, graph, and memory files generated."
  },
  {
    command: "tokencap graph",
    description: "Generate project knowledge graph. Classifies nodes, detects clusters, calculates risk ratings, and opens interactive Obsidian-style HTML viewer.",
    result: "Code intelligence graph data, summaries, diffs, and HTML viewer generated."
  },
  {
    command: "tokencap diff",
    description: "Generate semantic Change Intelligence report mapping breaking changes, endpoint edits, and test recommendations.",
    result: "Change report, PR description, and AI code review prompt generated."
  },
  {
    command: "tokencap debug",
    description: "Initialize, log, and end session-based debugging memory with automated CLI command output and stack trace capture.",
    result: "Active debug session managed, timeline logged, and handoff report compiled."
  },
  {
    command: "tokencap pack <topic>",
    description: "Compresses the workspace into a token-budgeted, AST-aware, and git-history prioritized context pack. If a topic is provided, the pack engine scopes the context to files inside that cluster.",
    result: "Topic-scoped, token-budgeted context pack generated under .tokencap/packs/."
  },
  {
    command: "tokencap constitution",
    description: "Manage and inspect your Repository Constitution to enforce permanent laws regarding APIs, schemas, security, and compliance.",
    result: "Repository Constitution analyzed, scored, and written under .tokencap/constitution/."
  },
  {
    command: "tokencap watch",
    description: "Start a background watcher that automatically regenerates snapshots on file saves with a configurable debounce delay.",
    result: "Workspace watcher initialized and active in background."
  }
];
```

### src/data/faq.js

| Field | Value |
| --- | --- |
| Bytes | 3851 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```js
export const faqItems = [
  { question: "Will TokenCap upload my code anywhere?", answer: "No. TokenCap runs entirely on your machine. It reads your files, runs git commands locally, and writes Markdown files to your project root. Nothing is sent to any server, cloud service, or external API." },
  { question: "How does secret redaction work?", answer: "Before writing any file content to the snapshot, TokenCap scans each file for known credential patterns and replaces them with [REDACTED]. It catches OpenAI keys, GitHub PATs, Slack tokens, AWS access keys, Google API keys, and generic secret assignments." },
  { question: "What languages does TokenCap support?", answer: "The main snapshot works with any text-based language. The knowledge graph parses import relationships only for JS/TS files. The memory layer is language-agnostic." },
  { question: "Do I need to configure anything to get started?", answer: "No. Install it with npm install -g tokencap and run tokencap make from your project root. It works with sensible defaults immediately." },
  { question: "How do I choose the right profile for my AI model?", answer: "Use the --profile flag or set it in .tokencap.json. Each profile is tuned for a specific model's context window." },
  { question: "What is TOKENCAP_GRAPH.md?", answer: "It's an automatically generated dependency map of your JS/TS project, produced with tokencap graph or as part of tokencap make." },
  { question: "What is TOKENCAP_MEMORY.md and .tokencap-notes.md?", answer: ".tokencap-notes.md is a simple Markdown file you edit manually to record your current task, developer intent, known issues, constraints, decisions made, and next steps. TokenCap combines your notes with live Git context to produce TOKENCAP_MEMORY.md." },
  { question: "How does file ranking work? Which files are included first?", answer: "TokenCap scores every file in your project before selecting which ones to include in the snapshot. Changed files get the highest score, followed by important project files, docs, source files, and tests." },
  { question: "Can I exclude specific files or folders from the snapshot?", answer: "Yes. Add excludePatterns to .tokencap.json with glob patterns like node_modules/** or dist/**. You can also use includePatterns to only include specific files." },
  { question: "What happens when a file is too large for the token budget?", answer: "Instead of including the full content and blowing your budget, TokenCap truncates the file at the byte limit and prepends a structural outline so you still know what's in there." },
  { question: "Can I use TokenCap without VS Code?", answer: "Yes. The CLI works independently of VS Code. All features including watch mode, graph generation, and memory generation are available from the CLI." },
  { question: "Is TokenCap free?", answer: "Yes. TokenCap is open-source and released under the MIT license. There is no paid tier, no usage limits, and no account required." },
  { question: "How does the VS Code extension differ from the CLI?", answer: "The VS Code extension adds auto-capture on save, a status bar indicator showing last update time and token count, and a one-click command menu." },
  { question: "Will TokenCap slow down my editor?", answer: "No. The extension uses a 30-second debounce by default. The snapshot generation itself runs synchronously but is typically fast for most projects." },
  { question: "What is AI Debug Handoff Mode and how does it work?", answer: "AI Debug Handoff Mode is a session-based debugging memory system designed to preserve runtime error states, failed tests, and execution timelines. Run 'tokencap debug:start -- <command>' (like npm test) to intercept output, extract stack traces, and rank files by priority. Once done, 'tokencap debug:end' packages the findings and archives the session." },
];
```

### src/data/features.js

| Field | Value |
| --- | --- |
| Bytes | 915 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```js
export const features = [
  { title: "Local-first", description: "Runs entirely on your machine. No cloud. No uploads. Your code never leaves your workspace.", accent: "Privacy-first" },
  { title: "AI-ready output", description: "Generates structured Markdown snapshots sized for any LLM context window.", accent: "Context-ready" },
  { title: "Git-aware", description: "Surfaces changed files, staged and unstaged diffs, recent commits, and branch context.", accent: "Git-aware" },
  { title: "Secret redaction", description: "Built-in scanning replaces secrets before any snapshot content is written to disk.", accent: "Security" },
];

export const featureShowcase = {
  eyebrow: "Capabilities",
  title: "TokenCap gives you one command for the entire handoff story.",
  description: "The site now reflects the actual product: snapshot generation, memory capture, Git context, and privacy-first workflows.",
};
```

### src/data/home.js

| Field | Value |
| --- | --- |
| Bytes | 3069 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```js
export const heroStats = [
  { label: "Local-first", value: "Offline" },
  { label: "AI-ready output", value: "Markdown" },
  { label: "Git-aware", value: "Context" },
];

export const heroContent = {
  headline: "Your codebase. Compressed. Ready to hand off.",
  subheadline: "Stop wasting tokens re-explaining your project. TokenCap snapshots your workspace — files, Git context, imports, and developer intent — into a single handoff-ready file.",
  description: "TokenCap is a local-first developer tool that generates structured, AI-ready snapshots of your codebase. Works offline. Never uploads your code. Runs from the CLI or VS Code.",
  primaryCTA: "Install Free via npm",
  primaryCTACommand: "npm install -g tokencap",
  secondaryCTA: "View on GitHub",
  secondaryCTAUrl: "https://github.com/vansharora21/TOKENCAP",
  keyBenefits: [
    { label: "Local-first", description: "Runs entirely on your machine. No cloud. No uploads. Your code never leaves your workspace." },
    { label: "AI-ready output", description: "Generates structured Markdown snapshots sized for any LLM context window — from llama-3-8b to Gemini 1.5 Pro." },
    { label: "Git-aware", description: "Automatically surfaces changed files, staged and unstaged diffs, recent commits, and branch context." },
    { label: "Privacy-first", description: "Built-in secret redaction strips API keys, tokens, and passwords before anything is written to disk." },
    { label: "Zero configuration", description: "Works out of the box. One command generates everything. Customize with a single JSON config file when you're ready." },
    { label: "VS Code native", description: "Auto-captures on every file save. Status bar indicator. One-click command menu. No workflow disruption." },
  ],
  socialProof: { npmPackage: "tokencap", license: "MIT", publisher: "VanshArora21" },
};

export const problemPoints = [
  { title: "Local-first", description: "Runs entirely on your machine. No cloud. No uploads. Your code never leaves your workspace." },
  { title: "AI-ready output", description: "Generates structured Markdown snapshots sized for any LLM context window, from local models to Gemini 1.5 Pro." },
  { title: "Git-aware", description: "Automatically surfaces changed files, staged and unstaged diffs, recent commits, and branch context." },
];

export const howItWorksSteps = [
  { title: "Local-first capture", description: "TokenCap snapshots your workspace files, Git context, imports, and developer intent into a single handoff file." },
  { title: "Persistent memory", description: "The memory layer combines your notes file with live Git context so the next developer can pick up faster." },
  { title: "Zero disruption", description: "Works from the CLI or VS Code with auto-capture on save and a status bar indicator." },
];

export const finalCallout = {
  title: "Build a handoff-ready codebase instead of another context window pile-up.",
  description: "TokenCap keeps the snapshot local, structured, and ready to share without re-explaining the project every time.",
};
```

### src/data/navigation.js

| Field | Value |
| --- | --- |
| Bytes | 2294 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```js
export const mainNavigation = [
  { label: "Home", href: "/", description: "Overview and hero section" },
  { label: "Features", href: "/features", description: "All features in detail" },
  { label: "Docs", href: "/docs", description: "Full documentation" },
  { label: "Roadmap", href: "/roadmap", description: "Planned features and versions" },
  { label: "Changelog", href: "/changelog", description: "Release history" },
  { label: "GitHub", href: "https://github.com/vansharora21/TOKENCAP", external: true },
];

export const footerNavigation = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "VS Code", href: "/vscode" },
      { label: "CLI Reference", href: "/docs#cli" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Changelog", href: "/changelog" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { label: "Getting Started", href: "/docs#getting-started" },
      { label: "Configuration", href: "/docs#configuration" },
      { label: "Context Profiles", href: "/docs#profiles" },
      { label: "Knowledge Graph", href: "/docs#graph" },
      { label: "Memory Layer", href: "/docs#memory" },
    ],
  },
  {
    title: "Open Source",
    links: [
      { label: "GitHub", href: "https://github.com/vansharora21/TOKENCAP", external: true },
      { label: "MIT License", href: "https://github.com/vansharora21/TOKENCAP/blob/main/LICENSE", external: true },
      { label: "npm Package", href: "https://www.npmjs.com/package/tokencap", external: true },
    ],
  },
];

export const docsNavigation = [
  { label: "Getting Started", href: "/docs#getting-started" },
  { label: "Configuration", href: "/docs#configuration" },
  { label: "Context Profiles", href: "/docs#profiles" },
  { label: "Project Knowledge Graph", href: "/docs#graph" },
  { label: "Context Memory Layer", href: "/docs#memory" },
  { label: "AI Context Packing", href: "/docs#pack" },
  { label: "AI Change Intelligence", href: "/docs#diff" },
  { label: "Agent Intelligence", href: "/docs#agent" },
  { label: "Secret Redaction", href: "/docs#secret-redaction" },
  { label: "CLI Reference", href: "/docs#cli" },
  { label: "VS Code Extension", href: "/docs#vscode" },
];
```

### src/data/vscode.js

| Field | Value |
| --- | --- |
| Bytes | 756 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```js
export const vscodeFeatures = [
  { title: "Auto Capture", description: "Every time you save a file in VS Code, TokenCap debounces and automatically regenerates your snapshot." },
  { title: "Project Knowledge Graph", description: "Automatically maps how your files connect to each other and classifies routes, components, services, APIs, and configs." },
  { title: "Context Memory Layer", description: "Persist developer intent, notes, and Git context into a shared memory snapshot for handoff." },
  { title: "Secret Redaction", description: "Redacts API keys, tokens, passwords, and cloud credentials before anything is written to disk." },
];

export const statusBarItems = ["$(files) TokenCap • HH:MM", "Auto capture on", "Last snapshot: 2m ago"];
```

### src/lib/constants.js

| Field | Value |
| --- | --- |
| Bytes | 1065 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```js
export const siteConfig = {
  name: "TokenCap",
  description:
    "TokenCap is a local-first developer tool that generates AI-ready snapshots of your codebase, including a dependency graph, context memory, and Git-aware file selection.",
  url: "https://tokencap.dev",
  keywords: [
    "tokencap",
    "AI context",
    "codebase snapshot",
    "LLM context",
    "developer handoff",
    "code handoff",
    "AI coding tool",
    "VS Code extension",
    "project knowledge graph",
    "context window",
    "token optimization",
    "local-first",
    "privacy-first",
    "git-aware",
    "secret redaction",
    "developer productivity",
    "open source",
    "MIT license",
    "Next.js",
    "React developer tools",
  ],
  ogTitle: "TokenCap — Compress your codebase for AI handoffs",
  ogDescription:
    "Generate structured, AI-ready snapshots of your project in seconds. Dependency graph, context memory, Git diffs, secret redaction. Local-first. Free. Open source.",
  twitterCard: "summary_large_image",
  canonicalUrl: "https://tokencap.dev",
};
```

### src/lib/seo.js

| Field | Value |
| --- | --- |
| Bytes | 779 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```js
import { siteConfig } from "@/lib/constants";

export function buildMetadata({ title, description, path = "/" }) {
  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: new URL(path, siteConfig.canonicalUrl).toString(),
    },
    openGraph: {
      title: title ? `${title} | TokenCap` : siteConfig.ogTitle,
      description: description ?? siteConfig.ogDescription,
      url: new URL(path, siteConfig.canonicalUrl).toString(),
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: siteConfig.twitterCard,
      title: title ? `${title} | TokenCap` : siteConfig.name,
      description: description ?? siteConfig.ogDescription,
    },
  };
}
```

### src/lib/utils.js

| Field | Value |
| --- | --- |
| Bytes | 147 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export { cn };
```

### src/styles/animations.css

| Field | Value |
| --- | --- |
| Bytes | 215 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```css
@keyframes token-cap-float {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, -10px, 0);
  }
}

.animate-float {
  animation: token-cap-float 8s ease-in-out infinite;
}
```

### src/app/vscode/page.jsx

| Field | Value |
| --- | --- |
| Bytes | 15619 |
| Score | 149 |
| Why | changed, source |
| Status | Truncated (budget limit) |

**Structural Outline:**
  - `fn VscodePage` (line 11)


```jsx
import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";

export const metadata = buildMetadata({
  title: "VS Code Extension",
  description: "TokenCap VS Code Extension. The ultimate editor toolkit for context and snapshot precision.",
  path: "/vscode",
});

export default function VscodePage() {
  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Hero Section with VS Code Mockup */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#d2bbff] font-mono text-[10px] uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#d2bbff] animate-pulse"></span>
            V1.2.0 NOW AVAILABLE
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white leading-tight">
            The ultimate VS Code toolkit for <span className="text-[#d2bbff]">snapshot precision.</span>
          </h1>
          <p className="text-[#ccc3d8] text-base leading-relaxed">
            TokenCap seamlessly integrates into your editor to automate codebase snapshotting, import graph parsing, and context memory tracking on every file save.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=VanshArora21.tokencap"
              target="_blank"
              rel="noreferrer"
              className="bg-[#7c3aed] text-white px-6 py-2.5 rounded-lg font-bold hover:brightness-110 transition-all active:scale-95 flex items-center gap-1.5 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Install Extension
            </a>
            <a
              href="/cli"
              className="border border-[#4a4455] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#2a2a2c]/50 transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">terminal</span>
              View CLI Docs
            </a>
          </div>
        </div>

        {/* VS Code Mockup Component */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#7c3aed]/20 to-[#4edea3]/20 blur-xl opacity-50 transition duration-1000 group-hover:opacity-100"></div>
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl code-glow flex flex-col h-[420px] bg-[#0c0c0e]">
            {/* Editor Toolbar */}
            <div className="terminal-header h-10 flex items-center px-4 gap-1.5 justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <div className="bg-[#1c1b1d] px-4 py-0.5 rounded text-[11px] font-mono text-[#ccc3d8] border border-white/5">
                .tokencap.json — TokenCap Extension
              </div>
              <div className="w-12"></div>
            </div>

            {/* Editor Content */}
            <div className="flex-grow flex overflow-hidden">
              {/* Sidebar */}
              <div className="w-12 bg-[#0e0e10] border-r border-white/5 flex flex-col items-center py-4 gap-4 text-zinc-500 select-none">
                <span className="material-symbols-outlined text-[#d2bbff]">file_copy</span>
                <span className="material-symbols-outlined">search</span>
                <span className="material-symbols-outlined">account_tree</span>
                <span className="material-symbols-outlined">extension</span>
              </div>
              {/* Code Area */}
              <div className="flex-grow bg-[#131315] p-4 font-mono text-[13px] leading-relaxed overflow-hidden relative">
                <div className="flex gap-4">
                  <div className="text-zinc-600 text-right select-none pr-1">
                    01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09<br />10
                  </div>
                  <div className="text-[#ccc3d8]">
                    {"{"}<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"profile"</span>: <span className="text-[#d2bbff]">"balanced"</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"outputPath"</span>: <span className="text-[#4edea3]">"TOKENCAP.md"</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"maxFiles"</span>: <span className="text-[#d2bbff]">90</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"maxSourceBytes"</span>: <span className="text-[#d2bbff]">220000</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"includeGitDiff"</span>: <span className="text-[#d2bbff]">true</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"redactSecrets"</span>: <span className="text-[#d2bbff]">true</span>,<br />
                    &nbsp;&nbsp;<span className="text-[#4edea3]">"excludePatterns"</span>: [<span className="text-[#4edea3]">"node_modules/**"</span>, <span className="text-[#4edea3]">"dist/**"</span>]<br />
                    {"}"}
                  </div>
                </div>

                {/* Command Palette Overlay */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-xs glass-panel rounded-lg shadow-2xl p-1 flex flex-col gap-1 z-20">
                  <div className="px-3 py-1.5 border-b border-white/10 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-zinc-500 tracking-wider">TOKEN CAP COMMANDS</span>
                    <span className="text-[9px] font-mono text-[#d2bbff] font-semibold">4 FOUND</span>
                  </div>
                  <div className="p-0.5 space-y-0.5">
                    <div className="flex items-center gap-2.5 px-3 py-1.5 bg-[#7c3aed]/20 rounded text-white border border-[#7c3aed]/20 text-xs">
                      <span className="material-symbols-outlined text-sm text-[#d2bbff]">camera</span>
                      <span>TokenCap: Make Snapshot Now</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#2a2a2c] rounded text-[#ccc3d8] text-xs">
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      <span>TokenCap: Open Snapshot</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#2a2a2c] rounded text-[#ccc3d8] text-xs">
                      <span className="material-symbols-outlined text-sm">toggle_on</span>
                      <span>TokenCap: Toggle Auto Capture</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#2a2a2c] rounded text-[#ccc3d8] text-xs">
                      <span className="material-symbols-outlined text-sm">settings</span>
                      <span>TokenCap: Create Config File</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="h-6 bg-[#7c3aed] text-white flex items-center px-3 justify-between font-mono text-[10px] select-none">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">source_environment</span>
                  <span>main*</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/10 px-2 py-0.5 rounded font-semibold text-[9px]">
                  <span className="material-symbols-outlined text-[10px] text-[#4edea3]">check_circle</span>
                  <span>TokenCap • 12:34 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span>UTF-8</span>
                <span>JSON</span>
                <span className="material-symbols-outlined text-[12px]">notifications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Extension Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Large Feature: Auto Capture */}
          <div className="md:col-span-4 glass-panel p-8 rounded-xl flex flex-col justify-between group hover:border-[#d2bbff]/40 transition-all">
            <div>
              <span className="material-symbols-outlined text-[#d2bbff] mb-4 text-3xl">save</span>
              <h3 className="text-xl font-bold text-white mb-2">Auto capture on file save</h3>
              <p className="text-sm leading-relaxed text-[#ccc3d8]">
                Every time you save a source file in VS Code, TokenCap debounces and automatically regenerates your snapshots. Never worry about manually syncing your workspace state again.
              </p>
            </div>
            <div className="mt-6 relative h-28 bg-[#131315] rounded-lg border border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] to-transparent"></div>
              <div className="p-4 font-mono text-[11px] text-[#ccc3d8] flex flex-col gap-1.5">
                <div className="flex justify-between items-center bg-[#7c3aed]/5 p-1 rounded">
                  <span>Updated: TOKENCAP.md</span>
                  <span className="text-[#4edea3]">Just now</span>
                </div>
                <div className="flex justify-between items-center p-1">
                  <span>Updated: TOKENCAP_GRAPH.md</span>
                  <span className="text-zinc-500">2m ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small Feature: Status Bar */}
          <div className="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#d2bbff]/40 transition-all justify-between">
            <div>
              <span className="material-symbols-outlined text-[#d2bbff] mb-4 text-3xl">view_kanban</span>
              <h3 className="text-xl font-bold text-white mb-2">Status bar display</h3>
              <p className="text-sm leading-relaxed text-[#ccc3d8]">
                Displays auto capture status, active profile, file counts, and last update timestamp in the status bar in real-time.
              </p>
            </div>
            <div className="mt-6 h-12 bg-[#7c3aed]/20 border border-[#7c3aed]/30 rounded flex items-center justify-center gap-3 px-4 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-pulse"></div>
              <span className="font-mono text-xs text-white">TokenCap • 12:34 PM</span>
            </div>
          </div>

          {/* Middle Feature: Quick Pick */}
          <div className="md:col-span-3 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#d2bbff]/40 transition-all">
            <span className="material-symbols-outlined text-[#d2bbff] mb-4 text-3xl">menu_open</span>
            <h3 className="text-xl font-bold text-white mb-2">Quick-pick command menu</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8]">
              Click the status bar item to open a Quick-Pick menu with commands to force snapshots, toggle auto capture, or open the snapshot files instantly.
            </p>
          </div>

          {/* Middle Feature: Open Snapshot */}
          <div className="md:col-span-3 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#d2bbff]/40 transition-all relative overflow-hidden min-h-[180px]">
            <div className="z-10 relative">
              <span className="material-symbols-outlined text-[#d2bbff] mb-4 text-3xl">open_in_new</span>
              <h3 className="text-xl font-bold text-white mb-2">Open snapshot command</h3>
              <p className="text-sm leading-relaxed text-[#ccc3d8] max-w-[80%]">
                Open `TOKENCAP.md` directly in VS Code with a single click. Allows you to review what gets exposed to the LLM context.
              </p>
            </div>
            <img 
              className="absolute -right-20 -bottom-20 w-64 h-64 object-cover opacity-10 group-hover:opacity-20 transition-opacity" 
              alt="Mockup graphics" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQp2JqoHyKT7X-Xtx74d-2gH5yFy7B-GdWmoWNQRJIQZg_TGKKegIJz28uCNu7G8hmKGxBfyQb94hxrI0gYaoSoyeFugMf12ibCuMwH1iIPrdBxB3wxPx7w1tOIETZinmdIvPQ-3vYJmRh_cWr_cPC5bOeCqefelG7hbZthn9ypGrWumqBfmK_DOT_3VpGHhYIvyJ1x8jZeTxJ6yLNHe8iAAXllMCppxLI6hhBq06pHEeVDTgH3i0YxaglAk255VKIHJGwcn4CUeKL"
            />
          </div>

          {/* Bottom Feature: Toggle Capture */}
          <div className="md:col-span-3 glass-panel p-8 rounded-xl flex flex-col group hover:border-[#d2bbff]/40 transition-all">
            <span className="material-symbols-outlined text-[#d2bbff] mb-4 text-3xl">toggle_on</span>
            <h3 className="text-xl font-bold text-white mb-2">Toggle auto capture</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8]">
              Easily turn auto-saving capture ON or OFF via the command menu to temporarily suspend snapshots during rapid edits.
            </p>
   

/* ...truncated for capsule budget... */
```

### src/components/home/ProductPreview.jsx

| Field | Value |
| --- | --- |
| Bytes | 16253 |
| Score | 149 |
| Why | changed, source |
| Status | Truncated (budget limit) |

**Structural Outline:**
  - `fn parseTerminalLine` (line 102)
  - `fn ProductPreview` (line 280)


```jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { CopyButton } from "@/components/shared/CopyButton";

const SESSIONS = [
  {
    cmd: "tokencap brain auth",
    steps: [
      { text: "[BRAIN] Loading .tokencap/brain/knowledge.json...", delay: 400 },
      { text: "[BRAIN] Fuzzy-matched topic \"auth\" to cluster \"Authentication\" (100% match)", delay: 500 },
      { text: "[BRAIN] Risk level: 🔴 CRITICAL | Files: 6", delay: 400 },
      { text: "[BRAIN] Main File: src/services/authService.ts (8 importers)", delay: 450 },
      { text: "[BRAIN] Recent Changes: June 3 - Session Validation Added", delay: 450 },
      { text: "[BRAIN] Dependencies: Authentication → API → Frontend", delay: 500 },
      { text: "[SUCCESS] Rendered terminal intelligence view for topic: auth", delay: 600 }
    ]
  },
  {
    cmd: "tokencap watch .",
    steps: [
      { text: "[SCAN] Indexing project hierarchy...", delay: 400 },
      { text: "[SCAN] Found 142 files in /src", delay: 500 },
      { text: "[INIT] TokenCap v1.1.0 active...", delay: 400 },
      { text: "WAIT", delay: 1500 },
      { text: "[DIFF] + src/hooks/useToken.ts [L12-15]", delay: 300 },
      { text: "[PUSH] Streaming context to TOKENCAP.md...", delay: 500 },
      { text: "[INIT] TokenCap v1.1.0 active...", delay: 400 },
      { text: "WAIT", delay: 1500 },
      { text: "[SCAN] Indexing project hierarchy...", delay: 400 },
      { text: "[INIT] TokenCap v1.1.0 active...", delay: 500 },
      { text: "[DIFF] + src/hooks/useToken.ts [L12-15]", delay: 300 },
      { text: "[DIFF] + src/auth/provider.ts [L42-88]", delay: 400 },
      { text: "[PUSH] Streaming context to TOKENCAP_MEMORY.md...", delay: 500 },
      { text: "[SUCCESS] Snapshot compiled successfully. (12,450 tokens)", delay: 600 }
    ]
  },
  {
    cmd: "tokencap ask \"how does auth work?\"",
    steps: [
      { text: "[RETRIEVE] Extracting keywords from question... (\"auth\", \"authentication\")", delay: 500 },
      { text: "[RETRIEVE] Matching graph clusters... [Authentication] (98% confidence)", delay: 600 },
      { text: "[RETRIEVE] Performing 2-hop BFS import search from matched nodes...", delay: 700 },
      { text: "[RANK] Scored and ranked 24 related codebase files", delay: 500 },
      { text: "[BUDGET] Allocating 12,000 token budget for context pack...", delay: 400 },
      { text: "[BUDGET] Compressing context: 8 full, 6 outlines, 10 reference-only", delay: 600 },
      { text: "[WRITE] Generating prompt-tailored context package...", delay: 500 },
      { text: "[WRITE] Generated context: .tokencap/context/auth-context.md", delay: 400 },
      { text: "[WRITE] Generated prompt: .tokencap/context/auth-prompt.md", delay: 400 },
      { text: "[SUCCESS] Smart context retrieval completed in 1.48s.", delay: 600 }
    ]
  },
  {
    cmd: "tokencap agent --full",
    steps: [
      { text: "[PIPELINE] Initializing 8-phase Agent Intelligence pipeline...", delay: 500 },
      { text: "[PHASE 1/8] Mapping Tech Stack... (React, Next.js, Tailwind, Prisma)", delay: 600 },
      { text: "[PHASE 2/8] Analyzing Codebase Architecture & System Design...", delay: 600 },
      { text: "[PHASE 3/8] Compiling Coding Rules & Repository Conventions...", delay: 500 },
      { text: "[PHASE 4/8] Building Dependency Risk Map & Security Pathways...", delay: 700 },
      { text: "[PHASE 5/8] Identifying Target Component Review Groups...", delay: 500 },
      { text: "[PHASE 6/8] Synthesizing Discrete Agent Action Skills...", delay: 600 },
      { text: "[PHASE 7/8] Generating Agent Skill Pack (agent-pack.md)...", delay: 600 },
      { text: "[PHASE 8/8] Exporting Machine-Readable Agent Config (agent.json)...", delay: 500 },
      { text: "[WRITE] Saved Agent Pack payload to agent-pack.md", delay: 400 },
      { text: "[WRITE] Saved Agent definitions with inject hooks to agent.json", delay: 400 },
      { text: "[SUCCESS] Agent Intelligence Pack generated successfully.", delay: 600 }
    ]
  },
  {
    cmd: "tokencap agent --execution",
    steps: [
      { text: "[PIPELINE] Initializing Execution Contract pipeline...", delay: 400 },
      { text: "[STATE] Compiling current project state tracker (execution-state.md)...", delay: 450 },
      { text: "[ALWAYS] Applying codebase tech-stack principles (engineering-principles.md)...", delay: 400 },
      { text: "[PLAN] Building decision trees & mapping utilities (decision-framework.md)...", delay: 450 },
      { text: "[DISCOVER] Setting up 12-step engineering workflow (execution-ladder.md)...", delay: 450 },
      { text: "[IMPLEMENT] Activating Scope Drift Detection logic (execution-scope.md)...", delay: 500 },
      { text: "[VERIFY] Creating auto-detected test/build criteria (verification-rules.md)...", delay: 400 },
      { text: "[REVIEW] Scaffolding change classifications (change-classification.md)...", delay: 450 },
      { text: "[RECOVERY] Preparing structured recovery protocols (recovery-mode.md)...", delay: 400 },
      { text: "[WRITE] Generated 8 contract files under .tokencap/agent/execution-contract/", delay: 500 },
      { text: "[SUCCESS] Execution Contract v1.1.0 generated successfully.", delay: 600 }
    ]
  },
  {
    cmd: "tokencap constitution",
    steps: [
      { text: "[CONSTITUTION] Building Invariant Analysis Graph...", delay: 400 },
      { text: "[CONSTITUTION] Inferred 14 API stability boundaries", delay: 450 },
      { text: "[CONSTITUTION] Inferred 8 database schema invariants", delay: 400 },
      { text: "[CONSTITUTION] Merged 3 manual rules from tokencap.constitution.yaml", delay: 450 },
      { text: "[CONSTITUTION] Severity Summary: 2 IMMUTABLE, 4 CRITICAL, 8 HIGH, 6 WARNING", delay: 500 },
      { text: "[SCORE] Calculated health score: 92 / 100", delay: 400 },
      { text: "[WRITE] Rendered HTML UI to .tokencap/constitution/constitution-graph.html", delay: 500 },
      { text: "[WRITE] Compiled law sheets under .tokencap/constitution/", delay: 450 },
      { text: "[SUCCESS] Repository Constitution v1.2.0 compiled successfully.", delay: 600 }
    ]
  }
];

const parseTerminalLine = (text) => {
  if (text.startsWith("[BRAIN]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-[#c084fc] font-bold">[BRAIN]</span> {text.substring(7)}
      </span>
    );
  }
  if (text.startsWith("[INIT]")) {
    return (
      <span className="text-[#4edea3]">
        <span className="font-bold">[INIT]</span> {text.substring(6)}
      </span>
    );
  }
  if (text.startsWith("[PUSH]")) {
    return (
      <span className="text-[#c084fc]">
        <span className="font-bold">[PUSH]</span> {text.substring(6)}
      </span>
    );
  }
  if (text.startsWith("[SUCCESS]")) {
    return (
      <span className="text-[#4edea3]">
        <span className="font-bold">[SUCCESS]</span> {text.substring(9)}
      </span>
    );
  }
  if (text.startsWith("[DIFF]")) {
    const content = text.substring(6);
    if (content.trim().startsWith("+")) {
      const rest = content.trim().substring(1).trim();
      const parts = rest.split(" ");
      const filePath = parts[0];
      const lineRange = parts.slice(1).join(" ");
      return (
        <span className="text-zinc-300">
          <span className="text-zinc-500 font-bold">[DIFF]</span>{" "}
          <span className="text-[#4edea3] font-bold">+</span>{" "}
          <span className="text-zinc-200">{filePath}</span>{" "}
          <span className="text-zinc-500">{lineRange}</span>
        </span>
      );
    }
    return (
      <span className="text-zinc-300">
        <span className="text-zinc-500 font-bold">[DIFF]</span> {content}
      </span>
    );
  }
  if (text.startsWith("[SCAN]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-zinc-500 font-bold">[SCAN]</span> {text.substring(6)}
      </span>
    );
  }
  if (text.startsWith("[RETRIEVE]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-amber-400 font-bold">[RETRIEVE]</span> {text.substring(10)}
      </span>
    );
  }
  if (text.startsWith("[RANK]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-blue-400 font-bold">[RANK]</span> {text.substring(6)}
      </span>
    );
  }
  if (text.startsWith("[BUDGET]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-indigo-400 font-bold">[BUDGET]</span> {text.substring(8)}
      </span>
    );
  }
  if (text.startsWith("[WRITE]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-fuchsia-400 font-bold">[WRITE]</span> {text.substring(7)}
      </span>
    );
  }
  if (text.startsWith("[PIPELINE]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-sky-400 font-bold">[PIPELINE]</span> {text.substring(10)}
      </span>
    );
  }
  if (text.startsWith("[STATE]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-cyan-400 font-bold">[STATE]</span> {text.substring(7)}
      </span>
    );
  }
  if (text.startsWith("[ALWAYS]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-yellow-400 font-bold">[ALWAYS]</span> {text.substring(8)}
      </span>
    );
  }
  if (text.startsWith("[PLAN]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-blue-400 font-bold">[PLAN]</span> {text.substring(6)}
      </span>
    );
  }
  if (text.startsWith("[DISCOVER]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-indigo-400 font-bold">[DISCOVER]</span> {text.substring(10)}
      </span>
    );
  }
  if (text.startsWith("[IMPLEMENT]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-fuchsia-400 font-bold">[IMPLEMENT]</span> {text.substring(11)}
      </span>
    );
  }
  if (text.startsWith("[VERIFY]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-[#4edea3] font-bold">[VERIFY]</span> {text.substring(8)}
      </span>
    );
  }
  if (text.startsWith("[REVIEW]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-rose-400 font-bold">[REVIEW]</span> {text.substring(8)}
      </span>
    );
  }
  if (text.startsWith("[RECOVERY]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-red-400 font-bold">[RECOVERY]</span> {text.substring(10)}
      </span>
    );
  }
  if (text.startsWith("[CONSTITUTION]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-rose-400 font-bold">[CONSTITUTION]</span> {text.substring(14)}
      </span>
    );
  }
  if (text.startsWith("[SCORE]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-cyan-400 font-bold">[SCORE]</span> {text.substring(7)}
      </span>
    );
  }
  if (text.startsWith("[PHASE")) {
    const closeBracketIndex = text.indexOf("]");
    if (closeBracketIndex !== -1) {
      const phase = text.substring(0, closeBracketIndex + 1);
      const rest = text.substring(closeBracketIndex + 1);
      return (
        <span className="text-zinc-300">
          <span className="text-rose-400 font-bold">{phase}</span> {rest}
        </span>
      );
    }
  }
  return <span className="text-zinc-300">{text}</span>;
};

function ProductPreview() {
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1); // -1 = typing command
  const [typedCommand, setTypedCommand] = useState("");
  const [lines, setLines] = useState([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const terminalContainerRef = useRef(null);

  const activeSession = SESSIONS[currentSessionIndex];

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom of the terminal container only
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [lines, typedCommand]);

  // Terminal state machine loop
  useEffect(() => {
    let timeoutId;

    if (currentStepIndex === -1) {
      // Typing command
      const targetCmd = activeSession.cmd;
      if (typedCommand.length < targetCmd.length) {
        const nextChar = targetCmd[typedCommand.length];
        timeoutId = setTimeout(() => {
          setTypedCommand((prev) => prev + nextChar);
        }, Math.random() * 50 + 40); // typing speed
      } else {
        // Command typing finished, wait a bit before executing
        timeoutId = setTimeout(() => {
          setCurrentStepIndex(0);
        }, 600);
      }
    } else if (currentStepIndex < activeSession.steps.length) {
      // Executing log steps
      const currentStep = activeSession.steps[currentStepIndex];

      timeoutId = setTimeout(() => {
        if (currentStep.text !== "WAIT") {
          setLines((prev) => [...prev, currentStep.text]);
        }
        setCurrentStepIndex((prev) => prev + 1);
      }, currentStep.delay);
    } else {
      // Session finished, show results for 4 seconds, then transition to next command
      timeoutId = setTimeout(() => {
        setTypedCommand("");
        setLines([]);
        setCurrentStepIndex(-1);
        setCurrentSessionIndex((prev) => (prev + 1) % SESSIONS.length);
      }, 4000);
    }

    return () => clearTimeout(timeoutId);
  }, [currentSessionIndex, currentStepIndex, typedCommand, activeSession]);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-[#0c0c0e]/95 backdrop-blur-xl shadow-2xl overflow-hidden relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-emerald-600/10 blur-xl opacity-30 group-hover:opacity-50 transition du

/* ...truncated for capsule budget... */
```

### src/website-content/docs.json

| Field | Value |
| --- | --- |
| Bytes | 31205 |
| Score | 148 |
| Why | changed, source |
| Status | Truncated (budget limit) |

**Structural Outline:**
  - `class definitions` (line 42)


```json
[
  {
    "title": "Getting Started",
    "slug": "getting-started",
    "order": 1,
    "content": "Install TokenCap globally with npm:\n\n```bash\nnpm install -g tokencap\n```\n\nThen run from your JS/TS project root:\n\n```bash\ntokencap make\n```\n\nThis generates three files in your project root:\n\n- `TOKENCAP.md` — compressed project snapshot (all languages)\n- `TOKENCAP_GRAPH.md` — dependency graph (JS/TS projects)\n- `TOKENCAP_MEMORY.md` — developer context memory (all projects)\n\nFor VS Code, install the TokenCap extension from the marketplace (publisher: VanshArora21). It auto-captures on every file save."
  },
  {
    "title": "Configuration",
    "slug": "configuration",
    "order": 2,
    "content": "Create a `.tokencap.json` file in your project root to customize behavior:\n\n```json\n{\n  \"profile\": \"balanced\",\n  \"outputPath\": \"TOKENCAP.md\",\n  \"maxFiles\": 90,\n  \"maxSourceBytes\": 220000,\n  \"maxFileBytes\": 14000,\n  \"maxDiffBytes\": 50000,\n  \"includeGitDiff\": true,\n  \"includeFileContents\": true,\n  \"excludePatterns\": [\"node_modules/**\", \"dist/**\", \"build/**\", \"coverage/**\"],\n  \"redactSecrets\": true\n}\n```\n\nConfiguration is resolved in the following priority order: defaults → profile overrides → .tokencap.json → CLI flags."
  },
  {
    "title": "Context Profiles",
    "slug": "profiles",
    "order": 3,
    "content": "TokenCap ships with context profiles tuned for different AI models and use cases.\n\n| Profile | Max Files | Source Budget | Use Case |\n| --- | --- | --- | --- |\n| `compact` | 45 | 90KB | Local LLMs, tight windows |\n| `balanced` | 90 | 220KB | Default — most models |\n| `deep` | 140 | 420KB | Complex codebases |\n| `gpt-4o` | 80 | 150KB | OpenAI GPT-4o |\n| `claude-3-5-sonnet` | 120 | 250KB | Anthropic Claude |\n| `gemini-1.5-flash` | 200 | 600KB | Gemini Flash |\n| `gemini-1.5-pro` | 400 | 1.2MB | Gemini Pro |\n| `llama-3-8b` | 25 | 40KB | Local Llama |\n\nSelect a profile via CLI flag or `.tokencap.json`:\n\n```bash\ntokencap make --profile claude-3-5-sonnet\n```"
  },
  {
    "title": "Smart Context Retrieval",
    "slug": "ask",
    "order": 4,
    "content": "TokenCap moves from simply generating full codebase snapshots to retrieving exactly what matters. Ask a natural language question or request context by topic keyword, and the retrieval engine finds the relevant files, performs graph BFS, filters by token budget, and generates a tailored AI prompt.\n\n### How it Works (Retrieval Engine)\n\n```\nYour question\n  → Extract keywords (\"auth\", \"login\", \"jwt\")\n  → Match to clusters (Authentication)\n  → Score all files using Graph + Memory + Diff + Impact\n  → BFS: find dependencies & dependents (up to 2 hops)\n  → Rank by composite relevance score\n  → Allocate token budget (default: 12,000)\n  → Generate context.md + prompt.md\n```\n\n- **Multi-Source Retrieval** — Searches across your dependency graph (clusters, connections), developer memory (active tasks, decisions), git status (recent changes), and risk impact score to rank files by relevance.\n- **Auto-Mode Detection** — Questions are parsed to auto-detect the retrieval intent. Keywords like \"explain\" auto-detect `architecture` mode, \"review\" or \"verify\" auto-detect `review` mode, and \"debug\" or \"fix\" auto-detect `debug` mode.\n- **Graph BFS Traversal** — Traverses the dependency structure up to 2 hops from matching files to ensure all relevant helper modules, utilities, and parent controllers are included in the package.\n- **Token-Budgeted Output** — Dynamically applies representation tiers (Full content, Structural outlines, AST summaries, or Reference Only) to fit the retrieved content into a strict token budget.\n\n### Ask about any part of your codebase\n\n```bash\ntokencap ask \"How does authentication work?\"\ntokencap ask \"Explain invoice generation\"\ntokencap ask \"debug login redirect\"           # Auto-detects debug mode\ntokencap ask \"review payment flow\"             # Auto-detects review mode\n```\n\n### Quick topic context\n\nGenerate topic-specific context manually using a keyword:\n\n```bash\ntokencap context auth\ntokencap context payments\ntokencap context dashboard\n```"
  },
  {
    "title": "Project Knowledge Graph",
    "slug": "graph",
    "order": 5,
    "content": "TokenCap scans all JS/TS source files and maps how they connect to each other.\n\n```bash\ntokencap graph\n```\n\nThis generates `TOKENCAP_GRAPH.md` and exports graph data to `.tokencap/graph/`.\n\n### Graph Intelligence & Visualization Features\n\n- **Obsidian-Style Interactive Viewer (`--open`)** — Opens a self-contained, dark-mode, three-panel graph viewer in your default browser. Features zoom, pan, hover highlights, local graph mode (showing a selected node + direct dependencies/dependents), cluster filtering, and a right-side node inspector panel showing metadata, risk, and impact.\n- **13 Node Classifications** — Categorizes files into `route`, `api`, `component`, `controller`, `service`, `database`, `middleware`, `config`, `utility`, `hook`, `package`, `test`, and `unknown` with distinct color representations.\n- **4-Tier Risk Scoring** — Assigns a `CRITICAL`, `HIGH`, `MEDIUM`, or `LOW` risk tier to each node based on connectivity, classification, and git modification status.\n- **Graph Presets** — Simplifies running graph actions:\n  - `--full` — Runs JSON export, AI narrative summary, graph diff, and opens the HTML viewer in your browser (combines `--json --ai --diff --open`).\n  - `--minimal` — Exports only `graph-data.json`, `nodes.json`, and `edges.json`. No HTML, AI, or diff (fastest).\n  - `--quiet` — Runs in the background and prints only a clean summary statistics block.\n- **Cluster Detection** — Automatically groups code files into logical modules: Authentication, Payments, Dashboard, Database, API, Frontend, Config, Testing, and Utilities.\n- **TOKENCAP.md Graph Summary** — Injects a `## Project Graph Summary` section containing key metrics (node/edge counts, high-risk files, clusters detected) into the main snapshot after every graph run.\n\n**Supported file extensions:** `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs`, `.cjs`\n\n**Import patterns parsed:**\n- `import x from \"./file\"`\n- `import { x } from \"../file\"`\n- `export { x } from \"./file\"`\n- `const x = require(\"./file\")`\n\n**Node classification:**\n\n| Pattern | Type |\n| --- | --- |\n| `/app/`, `/pages/`, `page.*`, `route.*`, `layout.*` | `route` |\n| `/api/` + `route.*` | `api` |\n| Uppercase name, `/components/`, `/ui/`, `.tsx` | `component` |\n| `/lib/`, `/services/`, `/utils/`, `/hooks/` | `service` |\n| `schema.prisma`, `/models/`, `/db/`, `/database/` | `database` |\n| `next.config.*`, `vite.config.*`, `tsconfig.*`, `package.json` | `config` |\n\n**Note:** Only local relative imports are followed. External packages (react, lodash, etc.) are ignored."
  },
  {
    "title": "Context Memory Layer",
    "slug": "memory",
    "order": 6,
    "content": "Preserve your developer context across sessions.\n\nInstead of a separate command, the context memory layer is automatically compiled whenever you run `tokencap make`.\n\nThis process:\n1. Reads your developer notes from `.tokencap-notes.md` in your project root (auto-created if missing).\n2. Combines them with live Git context (branch name + changed files).\n3. Writes a structured `TOKENCAP_MEMORY.md` context file.\n\n**Edit `.tokencap-notes.md` directly:**\n\n```md\n## Current Task\nFix login redirect after successful authentication.\n\n## Developer Intent\nImprove auth flow without changing the DB schema.\n\n## Known Issues\n- Session sometimes not ready before redirect.\n\n## Constraints\n- Do not modify Prisma schema.\n\n## Decisions Made\n- Using server-side session validation.\n\n## Next Steps\n- Test login flow.\n- Check middleware.\n```"
  },
  {
    "title": "AI Context Packing",
    "slug": "pack",
    "order": 7,
    "content": "The Context Packing Engine is a budget-driven, importance-scoring compressor that fits codebases of any size into AI context windows. Instead of dumping every file in full (which can quickly overwhelm LLM token limits), it scores files based on import centrality, git modification history, and debug relevance.\n\n### Topic-Based Packing (v1.0.0)\n\nYou can generate Brain-scoped context packs tailored to specific clusters or topics:\n\n```bash\ntokencap pack auth\ntokencap pack payments\n```\n\nWhen a topic is provided, the pack engine queries the Project Brain to boost relevance scores for files within that cluster. This ensures that the generated pack content is automatically scoped to what matters for that specific topic.\n\n### Pack Modes\n\n- **`review`** (Default) — Optimized for code reviews. Prioritizes recent git changes, main application entry points, and files with pending/recent diffs.\n- **`debug`** — Optimized for troubleshooting. Prioritizes stack trace files, active debug logs, and immediate dependencies of failing modules.\n- **`architecture`** — Optimized for system understanding. Excludes deep implementation details, providing high-level structural outlines and module interfaces.\n- **`minimal`** — A lightweight context profile containing only git status, active tasks, recent change lists, and high-level module metadata.\n\n### How it Compresses (Budget Engine)\n\nTokenCap analyzes files and applies one of four representation tiers based on their importance score and remaining token budget:\n\n- 🟢 **Full Content**: Critical files are written in full.\n- 🟡 **Structural Outline**: Mid-importance files are trimmed to show only function signatures, class definitions, and structural layout using regex parsing.\n- 🟠 **AST Summary**: Low-importance files are summarized into small, token-dense structural descriptions (~80 tokens).\n- 🔴 **Reference Only**: Distant/utility files are represented as simple file paths with export counts to preserve structural awareness without wasting budget.\n\nGenerate a pack with a custom token budget:\n\n```bash\ntokencap pack --mode debug --budget 30000\n```"
  },
  {
    "title": "AI Change Intelligence",
    "slug": "diff",
    "order": 8,
    "content": "The Change Intelligence Engine goes beyond standard git diffs by analyzing changes semantically. It provides a deterministic, rule-based report outlining impact, risk, breaking changes, and testing suggestions.\n\n```bash\ntokencap diff\n```\n\n### Key Capabilities\n\n1. **Semantic Layering** — Classifies modified files into functional layers like `Authentication`, `Payment`, `Database`, `API`, `Frontend`, `Security`, etc.\n2. **Deterministic Risk Rating** — Computes risk levels (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`) based on files touched, lines modified, database schema changes, or breaking change detections.\n3. **Breaking Change Scanning** — Scans for common breaking patterns such as removed exports, function signature alterations, prisma field deletions, and `.env` modifications.\n4. **Endpoint Capture** — Identifies added or modified HTTP routes/endpoints (e.g. Express, Next.js App Router) and suggests specific edge cases to test.\n5. **Prompt Generator** — Produces ready-to-use markdown prompts for AI code review or PR summaries:\n   - `--pr` generates a condensed pull request description.\n   - `--prompt` generates a structured prompt guiding an LLM to review your changes.\n\nAnalyze staged changes or the last commit:\n\n```bash\ntokencap diff --staged\ntokencap diff --last\n```"
  },
  {
    "title": "Self-Loading Universal Context Layer",
    "slug": "agent",
    "order": 9,
    "content": "TokenCap introduces the flagship **Self-Loading Universal Context Layer** in v1.0.0. By running the `tokencap agent` command, AI agents can automatically discover and load repository context without manual intervention.\n\n### Auto-Discovery Flow\n\n```\nRepository\n  → tokencap agent\n  → Generates AGENTS.md (root)\n  → AI Agents automatically find and read AGENTS.md\n  → Redirects to .tokencap/agent/START_HERE.md\n  → AI loads onboarding instructions, paths, and manifests automatically\n```\n\n### What gets generated\n\nRunning `tokencap agent` compiles a comprehensive set of onboarding files inside `.tokencap/agent/` and creates an `AGENTS.md` entry point at your repository root:\n\n- **`AGENTS.md`** (root) — **AI auto-discovery entry point**. Agents find this first and follow instructions to load the context.\n- **`START_HERE.md`** — **Full onboarding instructions** that guide the AI on reading order, critical areas, high-risk files, and non-negotiable coding conventions.\n- **`allowed-context.json`** — **Topic-to-file-glob map** guiding AI agents directly to relevant files for a task without performing a full repository scan.\n- **`model-instructions.md`** — **Generic model guidelines** detailing codebase layouts, constraints, and instructions for any LLM.\n- **`context-manifest.json`** — **Machine-readable single source of truth** containing version, project types, active clusters, critical files, and recommended reads.\n- **`agent-pack.md`** — The complete paste-ready markdown payload aggregating stack, architecture, conventions, and rules.\n- **`agent.json`** — Structured JSON representation of repository intelligence.\n\n### Command Options\n\n- `tokencap agent` — Generates the full universal context layer and root `AGENTS.md` (default).\n- `--no-agents-file` — Skips generating the root-level `AGENTS.md` file if you prefer to keep your repository root clean.\n- `--export <target>` — Export rules directly to Cursor (`.cursorrules`), Windsurf, Cline, or Roo Code formats.\n- Mode flags (`--architecture`, `--rules`, `--skills`) compile focused subsets of the onboarding files."
  },
  {
    "title": "Execution Contract",
    "slug": "execution-contract",
    "order": 10,
    "content": "TokenCap introduces the **Execut

/* ...truncated for capsule budget... */
```

### src/app/cli/page.jsx

| Field | Value |
| --- | --- |
| Bytes | 36022 |
| Score | 147 |
| Why | changed, source |
| Status | Truncated (budget limit) |

**Structural Outline:**
  - `fn CliPage` (line 11)


```jsx
import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";

export const metadata = buildMetadata({
  title: "CLI Reference",
  description: "Master the TokenCap command-line interface. Powerful options and configurations.",
  path: "/cli",
});

export default function CliPage() {
  const sidebarItems = [
    { label: "Introduction", icon: "info", href: "/docs" },
    { label: "Core Concepts", icon: "extension", href: "/docs/getting-started" },
    { label: "CLI Reference", icon: "terminal", href: "#install", active: true },
    { label: "VS Code Extension", icon: "extension", href: "/vscode" },
    { label: "Changelog", icon: "auto_awesome", href: "/changelog" },
  ];

  const communityItems = [
    { label: "GitHub", icon: "code", href: "https://github.com/vansharora21/TOKENCAP" },
  ];

  const tableOptions = [
    { flag: "--profile <name>", description: "Select context profile (compact, balanced, deep, gpt-4o, etc.).", defaultVal: "balanced" },
    { flag: "--root <path>", description: "Specify the workspace root directory.", defaultVal: "." },
    { flag: "--out <path>", description: "Snapshot output path (for main snapshot).", defaultVal: "TOKENCAP.md" },
    { flag: "--max-files <n>", description: "Maximum number of files to include in snapshot.", defaultVal: "90" },
    { flag: "--max-bytes <n>", description: "Total source byte budget for files combined.", defaultVal: "220000" },
    { flag: "--max-file-bytes <n>", description: "Per-file content byte limit.", defaultVal: "14000" },
    { flag: "--no-diff", description: "Skip including Git diff snippets in the snapshot.", defaultVal: "false" },
    { flag: "--no-contents", description: "Skip selected source file contents (outline only).", defaultVal: "false" },
    { flag: "--debounce <ms>", description: "Regeneration debounce delay in watch mode.", defaultVal: "3000" },
    { flag: "--mode <name>", description: "Retrieval/pack mode: review | debug | architecture | minimal.", defaultVal: "review" },
    { flag: "--budget <number>", description: "Custom token budget for ask/context/pack commands.", defaultVal: "12000 / 8000 / 20000" },
    { flag: "--staged", description: "Analyze only staged changes (for diff command).", defaultVal: "false" },
    { flag: "--last", description: "Analyze changes in the last commit (for diff command).", defaultVal: "false" },
    { flag: "--pr", description: "Generate PR summary description (for diff command).", defaultVal: "false" },
    { flag: "--prompt", description: "Generate AI prompt/review prompt (for ask/context/diff commands).", defaultVal: "true (ask)" },
    { flag: "--no-prompt", description: "Skip prompt.md generation (for ask command).", defaultVal: "false" },
    { flag: "--json", description: "Output machine-readable JSON (for ask/context/diff/graph/agent/constitution commands).", defaultVal: "false" },
    { flag: "--open", description: "Open interactive HTML graph viewer in browser (for graph command).", defaultVal: "false" },
    { flag: "--ai", description: "Generate detailed narrative AI summary (for graph command).", defaultVal: "false" },
    { flag: "--diff", description: "Generate graph structural diff vs last run (for graph command) or constitution diff (for constitution command).", defaultVal: "false" },
    { flag: "--full", description: "Run full 8-phase pipeline (for agent command).", defaultVal: "true" },
    { flag: "--export <target>", description: "Export rules directly to Cursor, Windsurf, Cline, or Roo Code formats (for agent command).", defaultVal: "false" },
    { flag: "--execution", description: "Generate the Execution Contract lifecycle suite under .tokencap/agent/execution-contract/ (for agent command).", defaultVal: "false" },
    { flag: "--strict", description: "Strict mode: enables scope drift confirmation and gating rules (for agent command).", defaultVal: "false" },
    { flag: "--history", description: "Show snapshot history and score tracking over time (for constitution command).", defaultVal: "false" },
    { flag: "--impact <file>", description: "Query which constitution laws are affected by a file (for constitution command).", defaultVal: "N/A" },
    { flag: "--architecture", description: "Render dependency chain ASCII view (brain) or architecture mapping (agent).", defaultVal: "false" },
    { flag: "--rules", description: "Focused generation of coding rules (for agent command).", defaultVal: "false" },
    { flag: "--skills", description: "Focused generation of agent skill definitions (for agent command).", defaultVal: "false" },
    { flag: "--impact", description: "Show affected file/feature count and risk summary (for brain command).", defaultVal: "false" },
    { flag: "--review", description: "Show review group files and grouping reasons (for brain command).", defaultVal: "false" },
    { flag: "--timeline", description: "Show git commit history for cluster files (for brain command).", defaultVal: "false" },
    { flag: "--risk", description: "Show risk areas and affected files (for brain command).", defaultVal: "false" },
    { flag: "--deps", description: "Show depends-on and used-by lists (for brain command).", defaultVal: "false" },
  ];

  return (
    <PageWrapper className="max-w-7xl mx-auto flex">
      {/* SideNavBar */}
      <aside className="w-64 border-r border-[#4a4455]/20 bg-[#0e0e10]/40 p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)]">
        <div className="mb-6">
          <p className="text-xl font-bold text-white tracking-tight">Documentation</p>
          <p className="font-mono text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">v1.2.0</p>
        </div>
        <nav className="space-y-1 flex-grow">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 p-2.5 rounded-lg font-medium text-sm transition-all ${
                item.active
                  ? "text-[#d2bbff] bg-[#7c3aed]/10 font-bold"
                  : "text-[#ccc3d8] hover:bg-[#2a2a2c]/50"
              }`}
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-[#4a4455]/20 space-y-1">
          <p className="font-mono text-[9px] font-semibold text-zinc-500 uppercase tracking-widest px-2.5 pb-2">COMMUNITY</p>
          {communityItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-[#ccc3d8] hover:bg-[#2a2a2c]/50 transition-all"
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 md:px-12 min-w-0">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-3">CLI Reference</h1>
          <p className="text-[#ccc3d8] text-base max-w-2xl leading-relaxed">
            Master the TokenCap command-line interface. A powerful, local-first utility designed to package codebase context for AI tools.
          </p>
        </header>

        {/* Command Section: Install */}
        <section className="mb-16" id="install">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded bg-[#7c3aed]/10 flex items-center justify-center text-[#d2bbff]">
              <span className="material-symbols-outlined text-sm">download</span>
            </div>
            <h2 className="text-xl font-bold text-white">Install globally</h2>
          </div>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
            Get started by installing the TokenCap CLI globally via npm. This provides the <code className="text-[#d2bbff]">tokencap</code> executable.
          </p>
          <div className="glass-panel rounded-xl overflow-hidden terminal-glow">
            <div className="bg-[#18181b] px-4 py-2 flex justify-between items-center border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
              </div>
              <span className="font-mono text-xs text-zinc-500">bash</span>
            </div>
            <div className="p-4 font-mono text-[13px] leading-relaxed flex items-center justify-between gap-4">
              <div className="flex gap-2 overflow-x-auto scrollbar-none">
                <span className="text-[#4edea3] select-none">$</span>
                <span className="text-white whitespace-nowrap">npm install -g tokencap</span>
              </div>
              <CopyButton text="npm install -g tokencap" className="shrink-0" />
            </div>
          </div>
        </section>

        {/* Flagship Command: tokencap brain */}
        <section id="brain" className="mb-12 glass-panel rounded-xl border-[#7c3aed]/20 bg-[#7c3aed]/5 p-6 md:p-8 terminal-glow">
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-stretch">
            <div className="flex flex-col justify-between flex-grow max-w-xl">
              <div>
                <span className="bg-[#7c3aed] text-white px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider mb-3 inline-block">Flagship Command (v0.9)</span>
                <h3 className="text-2xl font-bold text-white mb-2">Project Brain (brain)</h3>
                <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6">
                  Ask about any part of your codebase and get a unified intelligence view: files, risk, architecture, dependencies, review group, recent changes, and git timeline — all from a single command.
                </p>
              </div>
              <div className="space-y-3 font-sans text-xs text-[#ccc3d8]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#4edea3]">check_circle</span>
                  <span><strong>6 Brain Modes:</strong> Impact, Architecture, Review, Timeline, Risk, and Deps</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#4edea3]">check_circle</span>
                  <span><strong>Fuzzy matching:</strong> Automatically matches topics even with partial input</span>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl overflow-hidden flex-grow flex flex-col min-w-[320px] bg-black">
              <div className="bg-[#18181b] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-500">Terminal — tokencap brain</span>
                <CopyButton text="tokencap brain auth" />
              </div>
              <div className="p-4 font-mono text-[13px] flex-grow leading-relaxed">
                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[#d2bbff] select-none">&gt;</span>
                  <span className="text-white whitespace-nowrap">tokencap brain auth</span>
                </div>
                <div className="mt-2 text-red-400">Risk: <span className="font-bold">CRITICAL (🔴)</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Fuzzy matched cluster: Authentication</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Resolved 6 files in cluster</span></div>
                <div className="text-zinc-500">June 3 | Session Validation Added (authService.ts)</div>
                <div className="mt-3 p-3 bg-white/5 rounded border border-white/5 text-[#d2bbff] leading-normal text-xs overflow-x-auto scrollbar-none">
                  <span className="whitespace-nowrap">Central File: authService.ts (8 importers)</span><br />
                  <span className="whitespace-nowrap">Review Group: Auth + Schema</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Command: tokencap agent */}
        <section id="agent" className="mb-12 glass-panel rounded-xl border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-stretch">
            <div className="flex flex-col justify-between flex-grow max-w-xl">
              <div>
                <span className="bg-[#7c3aed] text-white px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider mb-3 inline-block">Flagship Command</span>
                <h3 className="text-2xl font-bold text-white mb-2">Agent intelligence (agent)</h3>
                <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6">
                  Analyze your repository and automatically generate a complete Self-Loading Universal Context Layer (AGENTS.md, START_HERE.md) or Execution Contract (v1.1.0) under <code>.tokencap/agent/</code> to teach AI agents engineering discipline.
                </p>
              </div>
              <div className="space-y-3 font-sans text-xs text-[#ccc3d8]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#4edea3]">check_circle</span>
      

/* ...truncated for capsule budget... */
```

### next.config.mjs

| Field | Value |
| --- | --- |
| Bytes | 214 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.4", "192.168.1.4:3000"],
  turbopack: {
    root: '.',
  },
};

export default nextConfig;
```

### package.json

| Field | Value |
| --- | --- |
| Bytes | 823 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```json
{
  "name": "tokencap-frontend",
  "version": "0.9.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "prebuild": "node scripts/generate-readme.js",
    "predev": "node scripts/generate-readme.js",
    "build-readme": "node scripts/generate-readme.js",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@radix-ui/react-slot": "^1.2.4",
    "animejs": "^4.4.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.40.0",
    "next": "^16.2.6",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "tailwind-merge": "^3.6.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "15.3.4",
    "tailwindcss": "^4"
  }
}
```

### src/website-content/testimonials.json

| Field | Value |
| --- | --- |
| Bytes | 1033 |
| Score | 48 |
| Why | source, test |
| Status | Full content |


```json
[
  {
    "id": "t1",
    "note": "Testimonials require real user feedback. These are placeholder slots with suggested sources.",
    "suggestedSource": "npm download stats, GitHub issues, VS Code Marketplace reviews",
    "slots": [
      {
        "slot": 1,
        "suggestedAudience": "Next.js developer using Claude or GPT-4",
        "suggestedTheme": "No more re-explaining the project at the start of every session"
      },
      {
        "slot": 2,
        "suggestedAudience": "Solo developer or indie hacker",
        "suggestedTheme": "The graph feature helped me discover a circular dependency I never knew about"
      },
      {
        "slot": 3,
        "suggestedAudience": "Team lead / senior engineer",
        "suggestedTheme": "We use it to onboard new engineers — just point them at TOKENCAP.md"
      },
      {
        "slot": 4,
        "suggestedAudience": "Developer using local LLMs",
        "suggestedTheme": "The compact profile fits perfectly in llama-3-8b's context window"
      }
    ]
  }
]
```

### scripts/generate-readme.js

| Field | Value |
| --- | --- |
| Bytes | 3527 |
| Score | 35 |
| Why | high-signal-doc |
| Status | Full content |


```js
const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const contentDir = path.join(rootDir, "src", "website-content");

// JSON paths
const homepagePath = path.join(contentDir, "homepage.json");
const featuresPath = path.join(contentDir, "features.json");
const commandsPath = path.join(contentDir, "commands.json");

function generate() {
  try {
    const homepage = JSON.parse(fs.readFileSync(homepagePath, "utf8"));
    const features = JSON.parse(fs.readFileSync(featuresPath, "utf8"));
    const commands = JSON.parse(fs.readFileSync(commandsPath, "utf8"));

    let markdown = `# TokenCap Developer Platform Frontend\n\n`;
    markdown += `> **${homepage.headline}**\n>\n> ${homepage.subheadline}\n\n`;

    markdown += `## 🚀 Overview\n\n`;
    markdown += `${homepage.description}\n\n`;
    markdown += `Run the installation command in your terminal:\n`;
    markdown += `\`\`\`bash\n${homepage.primaryCTACommand}\n\`\`\`\n\n`;

    markdown += `## 🎨 Key Benefits\n\n`;
    homepage.keyBenefits.forEach((benefit) => {
      markdown += `- **${benefit.label}:** ${benefit.description}\n`;
    });
    markdown += `\n`;

    markdown += `## ⚡ Core Capabilities\n\n`;
    // Group features by category
    const categories = {};
    features.forEach((feat) => {
      if (!categories[feat.category]) {
        categories[feat.category] = [];
      }
      categories[feat.category].push(feat);
    });

    for (const [category, items] of Object.entries(categories)) {
      markdown += `### 📁 ${category}\n\n`;
      items.forEach((item) => {
        markdown += `#### 🔹 ${item.title}\n`;
        markdown += `${item.description}\n\n`;
        if (item.technicalDetail) {
          markdown += `> ⚙️ *Technical Detail:* ${item.technicalDetail}\n\n`;
        }
        if (item.profiles) {
          markdown += `| Profile | Max Files | Max Bytes | Use Case |\n`;
          markdown += `| --- | --- | --- | --- |\n`;
          item.profiles.forEach((p) => {
            markdown += `| \`${p.name}\` | ${p.maxFiles} | ${p.maxSourceBytes} B | ${p.use} |\n`;
          });
          markdown += `\n`;
        }
      });
    }

    markdown += `## 💻 CLI Commands\n\n`;
    commands.forEach((cmd) => {
      markdown += `### 🛠️ \`${cmd.command}\`\n\n`;
      markdown += `${cmd.description}\n\n`;
      markdown += `**Example:**\n\`\`\`bash\n${cmd.example}\n\`\`\`\n\n`;
      if (cmd.options && cmd.options.length > 0) {
        markdown += `| Option / Flag | Description |\n`;
        markdown += `| --- | --- |\n`;
        cmd.options.forEach((opt) => {
          markdown += `| \`${opt.flag}\` | ${opt.description} |\n`;
        });
        markdown += `\n`;
      }
    });

    markdown += `## 📦 Metadata & License\n\n`;
    markdown += `- **NPM Package Name:** \`${homepage.socialProof.npmPackage}\`\n`;
    markdown += `- **License:** \`${homepage.socialProof.license}\`\n`;
    markdown += `- **Publisher:** \`${homepage.socialProof.publisher}\`\n\n`;

    markdown += `---  \n`;
    markdown += `*Generated automatically from \`website-content\` JSON source files on ${new Date().toLocaleDateString()}.*\n`;

    const outputPath = path.join(rootDir, "README.md");
    fs.writeFileSync(outputPath, markdown, "utf8");
    console.log("SUCCESS: README.md generated dynamically from website-content files!");
  } catch (error) {
    console.error("ERROR: Failed to generate dynamic README.md:", error);
    process.exit(1);
  }
}

generate();
```

### src/app/about/page.jsx

| Field | Value |
| --- | --- |
| Bytes | 8715 |
| Score | 30 |
| Why | source |
| Status | Full content |


```jsx
import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "Our mission is to make developers augmented, not replaced. Read our local-first philosophy.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] font-medium text-[#d2bbff] uppercase tracking-widest block mb-4">
              The Context Problem
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-white mb-6">
              Solving the LLM <br />context gap.
            </h1>
            <p className="text-sm leading-relaxed text-[#ccc3d8] max-w-xl">
              Modern developers spend more time copying and pasting code into AI prompts than actually writing code. TokenCap was born from the frustration of context-switching between your terminal, editor, and the browser just to explain your project to an AI.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-1.5 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-2 bg-[#353437]/50 border-b border-[#4a4455]">
                <div className="terminal-dot bg-red-500/50"></div>
                <div className="terminal-dot bg-yellow-500/50"></div>
                <div className="terminal-dot bg-green-500/50"></div>
                <span className="ml-2 font-mono text-xs text-zinc-500">mission.json</span>
              </div>
              <div className="p-4 bg-[#0e0e10] font-mono text-[13px]">
                <pre className="text-[#4edea3]">{"{"}</pre>
                <pre className="pl-4 text-[#ccc3d8]">  "mission": <span className="text-[#d2bbff]">"Bridge the gap"</span>,</pre>
                <pre className="pl-4 text-[#ccc3d8]">  "strategy": <span className="text-[#d2bbff]">"Context-aware CLI"</span>,</pre>
                <pre className="pl-4 text-[#ccc3d8]">  "status": <span className="text-[#4edea3]">"Operational"</span></pre>
                <pre className="text-[#4edea3]">{"}"}</pre>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#7c3aed]/10 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI-Native Context */}
          <div className="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col justify-between glow-hover transition-all">
            <div>
              <span className="material-symbols-outlined text-[#d2bbff] text-2xl mb-4">auto_awesome</span>
              <h3 className="text-xl font-bold text-white mb-3">AI-Native Context</h3>
              <p className="text-sm leading-relaxed text-[#ccc3d8] max-w-md">
                We don't just dump text. TokenCap intelligently packages your repository structure, dependency graphs, and recent changes into a format that LLMs understand natively.
              </p>
            </div>
            <img 
              className="mt-6 rounded-lg border border-[#4a4455] w-full h-48 object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
              alt="Conceptual data visualization"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbJmSuyWngNDPgFSel2eI6S8bAAYJlCKisl2dS0kXP4_OvfRT7U-LoVzWEJ2kf8zB9vP2c1r9CNL9u8naDGUYUWP3Hf1PpPqLMzjeyu2rz6NZ-63tgBjn7Ri90pQ1xcKaepPW4xAVnPD7as7VgHgV9h4pzOvkSBSbn0RWoVwegQZBoLmn4QbrWrdkla9hqZU19S2koFe2Hkmgs8I2JGZZmnJBk10RJ3yUrltkCC5JilFGTatAmiUDsxOZa15OrS9CRPSlDwN8RHXYv"
            />
          </div>

          {/* Card 2: Low Latency */}
          <div className="bg-[#7c3aed] p-8 rounded-xl flex flex-col justify-center text-white relative overflow-hidden">
            <h3 className="text-xl font-bold mb-3 z-10">Low Latency <br />High Precision</h3>
            <p className="text-sm opacity-90 z-10 leading-relaxed">
              Every millisecond spent preparing context is a millisecond lost in flow.
            </p>
            <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[160px] opacity-10 rotate-12 select-none">
              bolt
            </span>
          </div>

          {/* Card 3: Privacy First */}
          <div className="glass-panel p-8 rounded-xl glow-hover transition-all border-[#4a4455]/30">
            <span className="material-symbols-outlined text-[#4edea3] text-2xl mb-4">security</span>
            <h3 className="text-xl font-bold text-white mb-3">Privacy First</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8]">
              Context is generated locally. Your sensitive code never touches our servers.
            </p>
          </div>

          {/* Card 4: Local-First Philosophy */}
          <div className="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-[#4a4455]/30 glow-hover transition-all">
            <div className="flex-1">
              <span className="material-symbols-outlined text-[#d2bbff] text-2xl mb-4">terminal</span>
              <h3 className="text-xl font-bold text-white mb-3">Local-First Philosophy</h3>
              <p className="text-sm leading-relaxed text-[#ccc3d8]">
                We believe developer tools should be fast, offline-capable, and reside in the CLI. TokenCap is a binary, not a heavy SaaS platform.
              </p>
            </div>
            <div className="w-full sm:w-1/3 aspect-square bg-[#2a2a2c] rounded-full border border-[#4a4455] flex items-center justify-center self-center shrink-0">
              <span className="material-symbols-outlined text-zinc-400 text-4xl">dns</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement & Founder Profile */}
      <section className="mb-20 py-16 border-t border-[#4a4455]/20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
            Our mission is to make developers <span className="text-[#d2bbff] italic font-serif">augmented</span>, not replaced.
          </h2>
          <div className="flex flex-col gap-4 text-sm text-[#ccc3d8] leading-relaxed">
            <p>
              We see a future where the friction between human intent and machine execution disappears. TokenCap is our first step towards that future—a tool that understands the value of context.
            </p>
            <p>
              By automating the most tedious parts of the AI-collaborative workflow, we free you to focus on high-level architecture and creative problem solving. We're building the infrastructure for the next decade of software development.
            </p>
          </div>
          <a 
            href="https://www.linkedin.com/in/aroravansh2108/" 
            target="_blank" 
            rel="noreferrer" 
            className="mt-8 inline-block group"
          >
            <span className="text-sm font-bold text-white group-hover:text-[#d2bbff] transition-colors">Vansh Arora</span>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-[#1c1b1d] rounded-2xl p-12 border border-[#4a4455]/30 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Ready to bridge the gap?</h2>
          <p className="text-sm text-[#ccc3d8] mb-6 max-w-md">Get started with TokenCap to supercharge your AI workflow.</p>
          <div className="flex gap-4">
            <button className="bg-[#7c3aed] text-white px-6 py-2.5 rounded-lg font-mono text-[11px] uppercase tracking-wider font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all active:scale-95">
              Get Started
            </button>
            <button className="bg-transparent border border-[#4a4455] text-white px-6 py-2.5 rounded-lg font-mono text-[11px] uppercase tracking-wider font-bold hover:bg-[#353437]/20 transition-all active:scale-95">
              View Docs
            </button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
```

### src/app/globals.css

| Field | Value |
| --- | --- |
| Bytes | 2196 |
| Score | 30 |
| Why | source |
| Status | Full content |


```css
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
@import "../styles/animations.css";
@import "tailwindcss";


:root {
  --background: 10 10 12;
  --foreground: 244 244 245;
  --muted: 161 161 170;
  --border: 24 24 27;
}

@theme inline {
  --color-background: rgb(var(--background));
  --color-foreground: rgb(var(--foreground));
  --color-muted: rgb(var(--muted));
  --color-border: rgb(var(--border));
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background:
    radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.08), transparent 45%),
    radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.03), transparent 30%),
    rgb(var(--background));
  color: rgb(var(--foreground));
  font-family: var(--font-geist-sans), system-ui, sans-serif;
}

::selection {
  background: rgb(34 211 238 / 0.25);
  color: white;
}

/* Design System Helper Classes */
.glass-panel, .glass-card {
  background: rgba(9, 9, 11, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.terminal-header {
  background: #18181b;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.glow-primary {
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.15);
}

.terminal-glow {
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.1);
}

.code-glow {
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.15);
}

.glow-hover:hover {
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.15);
}

.inner-glow {
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
}

.terminal-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.cli-cursor::after {
  content: '_';
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  vertical-align: middle;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
```

### src/app/resources/page.jsx

| Field | Value |
| --- | --- |
| Bytes | 495 |
| Score | 30 |
| Why | source |
| Status | Full content |


```jsx
import { buildMetadata } from "@/lib/seo";
import { ResourcesClient } from "@/components/resources/ResourcesClient";

export const metadata = buildMetadata({
  title: "Resources | Articles, Updates & Community",
  description: "Read TokenCap articles, technical deep dives, release notes, and build-in-public updates about context engineering, code intelligence, and AI-assisted development.",
  path: "/resources",
});

export default function ResourcesPage() {
  return <ResourcesClient />;
}
```

### src/components/faq/FAQAccordion.jsx

| Field | Value |
| --- | --- |
| Bytes | 3949 |
| Score | 30 |
| Why | source |
| Status | Full content |


```jsx
"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What is TOKENCAP.md?",
    answer: (
      <div>
        <p className="mb-3">
          TOKENCAP.md is a production-ready, highly compressed codebase snapshot file that lives in your project root. It lists files, Git branch info, staged/unstaged diffs, and outlines of large files, so you can feed it to LLMs.
        </p>
        <div className="bg-[#1c1b1d] rounded-lg p-3 border border-[#4a4455]/40 font-mono text-xs text-[#4edea3]">
          <code>
            # TokenCap Project Snapshot<br />
            &gt; version: 0.9.0<br />
            &gt; profile: balanced
          </code>
        </div>
      </div>
    ),
  },
  {
    question: "Does TokenCap upload my code?",
    answer: "No. TokenCap runs entirely on your local machine. All file scanning, knowledge graph compilation, and context memory tracking happen locally. No code is ever uploaded to any cloud service.",
  },
  {
    question: "Does it work with Cursor?",
    answer: "Yes. Simply run `tokencap make` and load `TOKENCAP.md` or `TOKENCAP_MEMORY.md` into Cursor's chat or composer context to give it complete, prompt-optimized project context.",
  },
  {
    question: "Which LLMs are supported?",
    answer: "TokenCap is model-agnostic. It includes 8 context profiles tuned for different LLM context windows (from compact 40KB for local models to 1.2MB for Gemini 1.5 Pro).",
  },
  {
    question: "How do I ignore specific files?",
    answer: "TokenCap respects your `.gitignore` file automatically. You can also specify an `excludePatterns` array in your local `.tokencap.json` file.",
  },
  {
    question: "Is there a file limit?",
    answer: "By default, TokenCap profiles limit the maximum number of included files to prevent context window overflow (e.g., max 90 files for the balanced profile). You can customize this in `.tokencap.json`.",
  },
  {
    question: "What is the Project Knowledge Graph?",
    answer: "TokenCap generates `TOKENCAP_GRAPH.md` which maps import/export and require relationships across your JS/TS files, classifying routes, components, services, database models, and configuration files.",
  },
  {
    question: "Is TokenCap open source?",
    answer: "Yes, TokenCap is completely open-source under the MIT license, free to use, and runs 100% offline.",
  },
];

export function FAQAccordion() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const isOpen = !!openIndexes[index];
        return (
          <div
            key={index}
            className="accordion-item glass-panel rounded-xl glow-hover overflow-hidden transition-all duration-300 border border-white/10 bg-white/5"
          >
            <button
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-base font-bold text-white">
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined transition-transform duration-300 text-zinc-400 ${
                  isOpen ? "rotate-180 text-white" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[300px] border-t border-[#4a4455]/20 p-5" : "max-h-0"
              }`}
            >
              <div className="text-sm leading-relaxed text-[#ccc3d8]">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

### src/components/shared/CopyButton.jsx

| Field | Value |
| --- | --- |
| Bytes | 782 |
| Score | 30 |
| Why | source |
| Status | Full content |


```jsx
"use client";

import { useState } from "react";

export function CopyButton({ text, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`material-symbols-outlined text-sm cursor-pointer hover:text-[#d2bbff] transition-colors focus:outline-none ${className} ${
        copied ? "text-[#4edea3]" : "text-zinc-500"
      }`}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      {copied ? "check" : "content_copy"}
    </button>
  );
}
```

### src/data/roadmap.js

| Field | Value |
| --- | --- |
| Bytes | 1148 |
| Score | 30 |
| Why | source |
| Status | Full content |


```js
export const roadmapItems = [
  {
    version: "0.10.0",
    title: "Multi-Language Graph",
    description:
      "Extend the project knowledge graph beyond JS/TS with parsers for Python, Go, Rust, and Java.",
    status: "planned",
    source: "README.md Roadmap",
  },
  {
    version: "0.10.0",
    title: "Visual Graph Export",
    description:
      "Export the project knowledge graph as a Mermaid diagram embedded directly inside TOKENCAP_GRAPH.md.",
    status: "planned",
    source: "README.md Roadmap",
  },
  {
    version: "0.11.0",
    title: "Incremental Snapshots",
    description:
      "Only re-process changed files on subsequent runs instead of scanning the full project every time.",
    status: "exploratory",
    source: "Architecture analysis — current full-scan approach in collectFiles()",
  },
  {
    version: "0.11.0",
    title: "Graph Cycle Detection",
    description:
      "Detect circular import dependencies in the project graph and surface them as warnings in TOKENCAP_GRAPH.md.",
    status: "exploratory",
    source: "Architecture analysis — buildGraph.js edge model supports cycle detection",
  },
];
```

### .commandcode/taste/taste.md

| Field | Value |
| --- | --- |
| Bytes | 86 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/
```

### CLAUDE.md

| Field | Value |
| --- | --- |
| Bytes | 11 |
| Score | 0 |
| Why | context |
| Status | Full content |


```markdown
@AGENTS.md
```