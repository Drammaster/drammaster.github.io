# Portfolio

Personal portfolio for Csaba Darazs, built with **React**, **TypeScript** and **Material UI (MUI v7)**, and hosted on GitHub Pages at https://drammaster.github.io.

## Highlights

- One scrolling page that takes visitors on a journey: Hero → Who I am → MythicVitals → Work → Contact
- Scroll effects (progress bar, reveal-on-scroll, "next stop" cues) built with CSS scroll timelines in `src/journey.css`; they switch off for visitors who prefer reduced motion
- Sticky app bar with section links (collapses to a menu on mobile) and a resume link
- Work section with Chrome extension / website filters; projects are listed in `src/components/work.tsx`
- Responsive layout that works down to small phones

## Project structure

```
public/            static files copied as-is (index.html, CV PDF, favicon)
src/
  index.tsx        entry point – wraps the app in the MUI ThemeProvider
  theme.ts         MUI theme and shared colour tokens
  journey.css      scroll-driven animations
  sections.ts      nav sections and shared links (email, GitHub, LinkedIn)
  App.tsx          page layout and footer
  components/      header, hero, about-me, skills, mythic-vitals, work, contact, ui
docs/              production build served by GitHub Pages (generated – don't edit)
```

## Development

Requires [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm start          # dev server with hot reload at http://localhost:3000
```

## Deploying

GitHub Pages serves the `docs/` folder on `master`. The build writes straight into `docs/` (configured via `BUILD_PATH` in `.env`), so to publish:

```bash
npm run build
git add docs && git commit -m "Build site" && git push
```

To update the resume, replace `public/Csaba Darazs CV.pdf` and rebuild.
