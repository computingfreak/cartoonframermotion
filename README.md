# Cartoon Framer Motion Stories

A React + Framer Motion showcase with Pixar-like story options for kids.

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in your terminal (usually `http://localhost:5173`).

## Host on GitHub Pages

This repo includes a ready-to-use GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

### One-time GitHub setup

1. Push this project to a GitHub repository.
2. Ensure your default branch is `main` (or update the workflow trigger branch).
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main` (or manually run the workflow from the **Actions** tab).

After deploy completes, your site will be available at:

`https://<your-username>.github.io/<your-repo-name>/`

### Why this works

- `vite.config.ts` sets the correct `base` path automatically in GitHub Actions.
- The workflow builds the Vite app and publishes `dist/` using `actions/deploy-pages`.
