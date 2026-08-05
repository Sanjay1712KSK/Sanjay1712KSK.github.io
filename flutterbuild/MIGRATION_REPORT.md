# Migration report

## Current architecture

The legacy site is a Vite + React + TypeScript single page. `App.tsx` holds navigation state, page content, projects, achievements, blogs, and scroll effects. CSS provides the visual system and animations. GitHub Pages is configured through the Vite deploy script.

## Problems identified

- Content is distributed through UI code rather than a single data source.
- The tab-only navigation is not a scalable page architecture.
- The deep-space / terminal aesthetic conflicts with the premium editorial direction.
- GitHub diagnostics depends on external runtime APIs, which can make the interface unstable.
- There was no Flutter Web project, asset convention, or Flutter deployment workflow.

## Reusable assets

- Resume PDF, copied to `assets/resume/current_resume.pdf`.
- Verified GitHub, LinkedIn, email, and project URLs.
- Resume-backed project and research descriptions from the existing content.

## Flutter architecture

`lib/data/portfolio_data.dart` centralizes profile links, projects, and technology groups. `lib/main.dart` composes the responsive experience from reusable section widgets. The app uses Material 3 and `url_launcher`; all build assets stay below `flutterbuild`.

## Migration strategy

The legacy React app is deliberately left untouched. The Flutter app replaces the experience with a responsive one-page narrative, uses a standard Flutter Web entry point and base-href placeholder, and can be deployed as the generated `build/web` artifact.
