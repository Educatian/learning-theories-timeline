# Learning Theories Timeline

<div align="center">
  <a href="https://educatian.github.io/learning-theories-timeline/">
    <img src="og-image.png" alt="Learning Theories Timeline preview" width="100%" />
  </a>

  <p>
    An interactive research map of learning theories, instructional design models,
    games, VR, immersive learning, AIED, learning analytics, EDM, LAK,
    Quantitative Ethnography, and agentic AI.
  </p>

  <p>
    <a href="https://educatian.github.io/learning-theories-timeline/"><strong>Open Live Page</strong></a>
    |
    <a href="https://github.com/Educatian/learning-theories-timeline/actions/workflows/deploy-pages.yml">Deployment Workflow</a>
  </p>

  <p>
    <img alt="Static HTML" src="https://img.shields.io/badge/static-HTML%20%2B%20CSS%20%2B%20JS-1d1d1b" />
    <img alt="GitHub Pages" src="https://img.shields.io/badge/deployed-GitHub%20Pages-316f9f" />
    <img alt="Open Graph" src="https://img.shields.io/badge/Discord-preview%20ready-7853a6" />
  </p>
</div>

## Developer

Developed by Dr. Jewoong Moon, The University of Alabama.

For questions, corrections, or suggestions, please contact:

```text
jmoon19@ua.edu
```

## Overview

This is a single-page interactive visualization for tracing how major learning theory traditions and adjacent research fields developed over time. It is designed as a research sketch: dense enough to compare traditions, but visual enough to use in discussion, teaching, or exploratory review.

The page is intentionally static. There is no build step, no framework runtime, and no backend dependency.

## What It Covers

- Behaviorism, Cognitivism, Constructivism, Constructionism, and Social Cognitive / Agency traditions
- Embodied, situated, distributed, and embedded cognition
- Learning Sciences and Science of Learning milestones
- Internal motivation, flow, digital game-based learning, VR, and immersive learning
- Instructional Design models and AECT / ISLT field formation
- EGRI / EGRA as an applied teaching cycle
- AIED lineage from CAI and ITS to Schank, agents, analytics, GenAI, and Agentivism
- EDM, LAK / SoLAR, Epistemic Network Analysis, and Quantitative Ethnography

## Interaction Model

- Drag horizontally to move across the timeline.
- Use the minimap to jump through the full historical range.
- Click any milestone to open a detailed popup.
- Use previous / next controls to move chronologically.
- Toggle `Map view` to collapse side panels and expand the timeline.
- Expand the AIED Tree to inspect the AI-in-education lineage separately.

## Discord Preview

The page includes Open Graph and Twitter card metadata so Discord, Slack, and social platforms can render a large preview card.

Preview image:

```text
https://educatian.github.io/learning-theories-timeline/og-image.png
```

If Discord has cached an older preview, paste the page URL with a query string:

```text
https://educatian.github.io/learning-theories-timeline/?v=2
```

## Project Files

```text
.
+-- index.html
+-- styles.css
+-- app.js
+-- og-image.png
+-- .nojekyll
+-- .github/
    +-- workflows/
        +-- deploy-pages.yml
```

## Local Use

Open `index.html` directly in a browser. The app is fully client-side.

## Deployment

GitHub Pages is deployed through GitHub Actions.

The workflow publishes:

- `index.html`
- `styles.css`
- `app.js`
- `og-image.png`
- `.nojekyll`

Pushes to `main` trigger the deployment workflow automatically.
