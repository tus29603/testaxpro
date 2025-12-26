# GitHub Pages Static Export Fix

## Changes Made

1. **Updated `next.config.js`**:
   - Explicitly set `basePath: ''` for root domain hosting
   - Set `assetPrefix: ''` to ensure no path prefix
   - Added `distDir: 'out'` to ensure output goes to correct directory
   - Added `generateBuildId` for consistent builds

2. **Configuration Details**:
   - `output: 'export'` - Enables static export
   - `images: { unoptimized: true }` - Required for static export
   - `basePath: ''` - Root domain (testaxpro.com)
   - `assetPrefix: ''` - No asset prefix needed

## Build Process

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Verify the output**:
   - Check that `out/` directory is created
   - Verify `out/_next/static/` contains CSS and JS files
   - Ensure `out/index.html` exists

3. **Deploy to GitHub Pages**:
   - The GitHub Actions workflow automatically deploys `out/` folder
   - Or manually copy `out/` contents to `gh-pages` branch

## Expected File Structure After Build

```
out/
├── index.html
├── _next/
│   └── static/
│       ├── css/
│       └── chunks/
├── logo.jpeg
├── CNAME
└── .nojekyll
```

## Troubleshooting

If CSS/JS still don't load:

1. **Check the HTML source**:
   - Open `out/index.html` and verify `<link>` and `<script>` tags
   - Paths should be `/_next/static/...` (absolute from root)

2. **Verify GitHub Pages settings**:
   - Settings → Pages → Source should be "GitHub Actions"
   - Custom domain should be set to `testaxpro.com`

3. **Check browser console**:
   - Look for 404 errors on `/_next/static/...` paths
   - Verify CORS or path issues

4. **Test locally**:
   ```bash
   cd out
   python3 -m http.server 8000
   # Or use any static file server
   ```
   Visit `http://localhost:8000` and verify styling works

## Notes

- Next.js static export uses absolute paths (`/_next/static/...`) by default
- For root domain hosting, these paths should work correctly
- If paths still don't work, there may be a GitHub Pages configuration issue

