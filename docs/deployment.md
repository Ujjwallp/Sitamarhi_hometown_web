# Deployment Guide

## Production Build
1. Run `npm run build`.
2. Vite will generate highly optimized static assets in the `dist/` directory.

## Hosting Providers
Because this is a fully static Single Page Application (SPA), it can be deployed anywhere.

### Vercel / Netlify
- Connect your GitHub repository.
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

### GitHub Pages
1. Install `gh-pages` package: `npm install gh-pages --save-dev`
2. Update `vite.config.js` to include the `base` URL of your repository.
3. Run `npm run build` and then `gh-pages -d dist`.
