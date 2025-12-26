# GitHub Pages Deployment Guide

This project is configured for static export and ready to deploy to GitHub Pages.

## Quick Deploy (GitHub Actions - Recommended)

1. **Enable GitHub Pages in repository settings:**
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save

2. **Push to main branch:**
   - The workflow (`.github/workflows/deploy.yml`) will automatically:
     - Build the static site
     - Deploy to GitHub Pages
   - Your site will be live at `https://testaxpro.com`

## Manual Deploy

If you prefer to deploy manually:

1. **Build the static site:**
   ```bash
   npm install
   npm run build
   ```

2. **The `out/` folder contains:**
   - `index.html` (homepage)
   - All static assets (CSS, JS, images)
   - `.nojekyll` (prevents Jekyll processing)
   - `CNAME` (custom domain configuration)

3. **Deploy the `out/` folder:**
   - Option A: Copy contents of `out/` to a `docs/` folder and set Pages source to `docs/`
   - Option B: Push `out/` contents to a `gh-pages` branch
   - Option C: Use the GitHub Actions workflow (recommended)

## Verification

After deployment:
- Visit `https://testaxpro.com`
- The site should look exactly like `localhost:3000`
- All navigation and links should work correctly
- Images and assets should load properly

## Important Files

- `CNAME` - Custom domain (testaxpro.com) - copied to `out/` during build
- `.nojekyll` - Prevents Jekyll from processing Next.js files - copied to `out/` during build
- `next.config.js` - Configured with `output: 'export'` for static generation

## Troubleshooting

- **404 errors**: Ensure `.nojekyll` is in the deployed folder
- **Domain not working**: Verify `CNAME` file is in the deployed folder
- **Assets not loading**: Check that all files in `public/` are copied to `out/`

