# Streamline Carports Carports Page

React + Vite mockup for the Streamline Carports carports page.

Repository: https://github.com/Lilmonstersam/streamline-carports-carports-page.git

## Local Development

Requires Node.js 20 or newer. The GitHub Action uses Node 22.

```bash
npm install
npm run dev
```

Build and preview the production output:

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

This project is configured for GitHub Pages deployment through GitHub Actions.

1. Push the project to the `main` branch of `Lilmonstersam/streamline-carports-carports-page`.
2. In GitHub, open `Settings > Pages`.
3. Set `Build and deployment > Source` to `GitHub Actions`.
4. Push to `main`, or manually run `Deploy to GitHub Pages` from the Actions tab.

Because the site is deployed under a GitHub Pages subpath, `vite.config.ts` uses:

```ts
base: "/streamline-carports-carports-page/"
```

This prevents blank pages caused by incorrect static asset paths.

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── index.html
├── package-lock.json
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
└── vite.config.ts
```

## Operation Log

- Converted the original single-file React CDN mockup into a Vite React project with `src/App.jsx`, `src/main.jsx` and `src/styles.css`.
- Added `package.json` with React, React DOM, Vite, TypeScript and Vite React plugin dependencies.
- Installed dependencies and generated `package-lock.json`.
- Upgraded Vite to `^8.0.10` after npm audit reported moderate advisories in the older Vite 5 dependency tree.
- Confirmed `npm audit` returns `found 0 vulnerabilities`.
- Confirmed `npm run build` succeeds and outputs GitHub Pages-ready asset paths under `/streamline-carports-carports-page/`.
- Confirmed the dev server runs locally at `http://127.0.0.1:5173/streamline-carports-carports-page/`.
- Added `vite.config.ts` with the GitHub Pages base path for `streamline-carports-carports-page`.
- Added GitHub Actions deployment workflow for GitHub Pages.
- Added `.gitignore` to keep dependencies, build output, environment files, logs, OS files and temporary files out of git.

Note: this local machine did not have a global `node` or `npm` binary available, so verification was run with a temporary Node 22 binary from `/tmp`. Install Node 20+ globally, through `nvm`, or through your preferred runtime manager for normal local development.
