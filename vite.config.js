import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages, the site is served from https://<user>.github.io/<repo>/
// so the build needs the repo name as the base path. Override via VITE_BASE
// env var if you rename the repo or host it elsewhere.
const repoBase = process.env.VITE_BASE || '/Dipali-Portfolio/';

export default defineConfig({
  plugins: [react()],
  base: repoBase,
});
