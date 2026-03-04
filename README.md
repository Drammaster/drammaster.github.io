# Portfolio

This repository contains a personal portfolio page migrated to **React** using CDN imports. There is no need for Node.js or build tools – just open `index.html` in a browser.

## Highlights

- Structure rewritten as React components
- GitHub API used to fetch repository list
- Visitor counter via CountAPI
- Icons from FontAwesome CDN
- Original styles kept in `style.css`

## Usage

1. Clone or open the repository folder.
2. **(Optional)** To keep the simple CDN-backed static site, open `index.html` in any modern browser; the React app will render automatically.

### Full development environment

If you'd like a proper npm-based React project with hot reload, follow these steps:

1. Install [Node.js](https://nodejs.org/) (which provides `npm`/`npx`).
2. Open a terminal and navigate to this repo's root. Either:

   ```bash
   # create inside current repo
   npx create-react-app react-app --template javascript
   ```

   or use the pre‑scaffolded files under `react-app/` provided with this repo.

3. Change directory and install dependencies:

   ```bash
   cd react-app
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will open at http://localhost:3000/ with hot reload.

5. To build a production bundle, run `npm run build`.


The `react-app` folder contains an example package.json, a `public/` index.html, and a `src/` directory with the same components you saw in the CDN version. You can copy over `style.css` or add more assets as needed.

In short: you can continue using the simple `index.html` standalone site, or move into `react-app` for a full React development workflow.

> ⚠️ For a full React development environment (with hot reload/build), install Node.js and consider scaffolding the project with `create-react-app` or Vite. This copy intentionally avoids a build step.

