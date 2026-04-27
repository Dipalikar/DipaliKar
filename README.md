# Dipali Kar — Portfolio

A professional portfolio site for **Dipali Kar** — Full Stack Developer & AI / Cloud Engineer.

Built with **React 18**, **Vite** and **Tailwind CSS**, and configured to deploy to **GitHub Pages**.

## Local development

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:5173>.

```bash
npm run build     # production build into ./dist
npm run preview   # preview the production build locally
```

## Editing content

All copy (bio, skills, jobs, projects, education, contacts) lives in a single file:

- [`src/data/portfolio.js`](src/data/portfolio.js)

Update that file and the rest of the UI updates automatically. The downloadable resume and profile photo live in [`public/`](public/) — replace `Dipali_Kar_Resume.html` (or swap to a PDF and update `profile.resumeFile` in `portfolio.js`) and `dipali-photo.jpeg` to refresh those assets.

## Deploying to GitHub Pages

The repo includes a ready-to-go GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds the site and publishes it to GitHub Pages.

### One-time setup

1. Create a public GitHub repo (e.g. `Dipali-Portfolio`) and push this project to its `main` branch.
2. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). The site will deploy to:

   ```
   https://<your-username>.github.io/<repo-name>/
   ```

The workflow automatically sets the Vite `base` path to match the repo name, so the build works regardless of what you call the repo.

### Custom repo name or custom domain

- **Different repo name** — no changes needed; the workflow injects `VITE_BASE=/<repo-name>/` at build time.
- **Custom domain (e.g. `dipalikar.dev`)** — add the domain in **Settings → Pages → Custom domain**, create a `public/CNAME` file containing the domain, and override the base by adding `VITE_BASE: /` in the workflow's build step.
- **User/organization site** (`<username>.github.io`) — set `VITE_BASE: /` in the workflow's build step.

### Manual deploy (alternative)

If you'd rather deploy from your machine using the `gh-pages` branch:

```bash
npm run deploy
```

Then in **Settings → Pages**, switch **Source** to **Deploy from a branch** → `gh-pages` → `/ (root)`.

## Project structure

```
.
├── public/                     # Static assets served as-is
│   ├── Dipali_Kar_Resume.html  # Downloadable resume
│   └── dipali-photo.jpeg
├── src/
│   ├── components/             # Section components
│   ├── data/portfolio.js       # Single source of truth for content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind layer + custom utilities
├── .github/workflows/deploy.yml
├── tailwind.config.js
├── vite.config.js
└── package.json
```
